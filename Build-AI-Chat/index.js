'use strict';

require('dotenv').config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Replace with your OpenAI API key

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public')); // js, css, images

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

const io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('a user connected');
});

const OpenAIApi = require('openai');

const openai = new OpenAIApi({
    OPENAI_API_KEY
})

// Web UI
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

io.on('connection', function(socket) {
  socket.on('chat message', async (text) => {
    console.log('Message: ' + text);

    try {
      // Get a reply from OpenAI GPT-3

      const response = await openai.chat.completions.create({
        messages: [{ role: "system", content:text }],
        model: "gpt-3.5-turbo",
      });
      
      console.log('response',response);

      const aiText = response.choices[0].text.trim();
      console.log('Bot reply: ' + aiText);
      socket.emit('bot reply', aiText);
    } catch (error) {
      console.error(error);
    }
  });
});
