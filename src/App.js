import React from 'react';

import Nav from './components/Nav';
import Frame from './components/Frame';
import WhoAreWe from './components/WhoAreWe';
import ClassOfficers from './components/ClassOfficers';
import Memories from './components/Memories';
import BSCSClassmates from './components/BSCSClassmates';
import ClassOfficersList from "./components/ClassOfficersList";

import  './App.css';




function App() {

  const classmates = BSCSClassmates.map((student) => {
    return(
      <Frame 
        id={student.id} 
        img={student.image} 
        name={student.name} 
        address={student.address} 
        email={student.email} 
      />
    )
  });

  const officers = ClassOfficersList.map((officer) => {
    return(
      <ClassOfficers
        img ={ officer.image}
        fname = {officer.firstname}
        lname = {officer.lastname}
        position = {officer.position}
      />
    )
  })

  return (
    <div className="App">
      <header className="App-header" id='bscs'>
        <Nav />
      </header>
      <div className="container--main-frames">
        <h1 className="main-frames-title">BSCS-3A</h1>
        <main className="main-frames" id="main_frames">
          {classmates}
        </main>
      </div>
      <section id="who_are_we">
        <WhoAreWe />
      </section>
      <div className='container--officers' id='class_officers'>
        <h2 className='container--officers-title'>Class Officers</h2>
        <section className='officers'>
          {officers}
        </section>
        <h5 className='container--officers-subtitle'>Hopefully they will be happy to serve us!</h5>
      </div>
      <div className='container-memories' id='class_memories'>
        <Memories/>
      </div>
    </div>
  );
}

export default App;

//-------------https://spacejelly.dev/posts/how-to-trigger-a-function-when-scrolling-to-an-element-in-react-intersection-observer/
//--------------------- npm install react-intersection-observer --save
/// https://spacejelly.dev/tag/react/