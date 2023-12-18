'use strict';

const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./udp-1');

const torrent = fs.readFileSync('puppy.torrent');
console.log(torrent.toString('utf8'));

try {
  // 使用bencode.decode来解码名为'puppy.torrent'的种子文件。然后，你提取了tracker URL，将其转换为UTF-8字符串
  const torrent = bencode.decode(fs.readFileSync('puppy.torrent'));
  console.log('torrent', torrent); // 输出解码后的种子文件内容 torrent <Buffer 61 6e 6e 6f 75 6e 63 65>

  if (torrent.announce) {
    const trackerUrl = torrent.announce.toString('utf8');
    console.log('trackerUrl', trackerUrl);
  } else {
    console.error('Torrent file does not have an announce URL.');
  }
} catch (error) {
  console.error('Error decoding torrent file:', error.message);
}



// const torrent = bencode.decode(fs.readFileSync('puppy.torrent'));

// tracker.getPeers(torrent, peers => {
//   console.log('list of peers: ', peers);
// });