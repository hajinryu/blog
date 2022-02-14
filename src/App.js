import './App.css';
import React, { useState } from 'react';
import Modal from './components/Modal';
import Nav from './components/Nav';
/* eslint-disable */

function App() {
  let posts = '블로그 글 제목'
  let [title, setTitle] = useState(['useState3', 'useState2', 'useState1']) //destructuring
  let [count, setCount] = useState(0);
  let[modal,setModal]=useState(false);

  function changeTitle() {
    var newArray = [...title];
    newArray[0]='hi'
    
    setTitle(newArray);
  }


  return (
    <div className="App">
      <Nav/>
      <div className='list'>
        <button onClick={changeTitle}>button</button>
        <h3>{title[0]} <span onClick={() => { setCount(count + 1) }}>👍</span>{count}</h3>
        <p>2월 14일</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{title[1]}<span onClick={() => { setCount(count + 1) }}>👍</span>{count}</h3>
        <p>2월 14일</p>
        <hr />
      </div>
      <div className='list'>
        <h3 onClick={()=> setModal(!modal)}>{title[2]}</h3>
        <p>2월 14일</p>
        <hr />
      </div>
      {
        modal === true
        ? <Modal></Modal>
        :null
      }
      
      

    </div>
  );
}

export default App;


