import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import SideBar from './components/SideBar';
import Recording from './Transcribe';

function Hello() {
  //const whisper = require("whisper-node");
  //const transcript = await whisper("example/sample.wav");
  //console.log(transcript); // output: [ {start,end,speech} ]
  

  return (
    <>
    <SideBar/>
    
    </>
    
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
