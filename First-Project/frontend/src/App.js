import 'antd/dist/antd.css';
import AddNewConfig from './pages/AddNewConfig';
import AddNewUsers from './pages/AddNewUsers';
import DisplayUsers from './pages/DisplayUsers';

function App() {
  return (
    <>
        <div style={{display:'flex',justifyContent:'flex-end',margin:'20px'}}>
        <AddNewUsers/>
        <AddNewConfig/>
        </div>
         <DisplayUsers/>
    </>
  );
}

export default App;
