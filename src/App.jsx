import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WellcomePage from './layout/WellcomePage';
import ChatBox from './layout/ChatBox';

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<WellcomePage/>}/>
          <Route path="/chats" element={<ChatBox/>}/>
      </Routes>
    </Router>
  )
  
}


export default App
