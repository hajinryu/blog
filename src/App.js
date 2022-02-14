import './App.css';
import React, { useState } from 'react';
import Modal from './components/Modal';
import Nav from './components/Nav';
/* eslint-disable */

function App() {
  let posts = '블로그 글 제목'
  let [title, setTitle] = useState(['useState3', 'useState2', 'useState1']) //destructuring
  let [count, setCount] = useState(0);
  let [modal, setModal] = useState(false);
  let [number,setNumber]=useState(0);

  function changeTitle() {
    var newArray = [...title];
    newArray[0] = 'hi'

    setTitle(newArray);
  }


  return (
    <div className="App">
      <Nav />
      {
        title.map((글,i) => {
          return (
            <div className='list' key={i}>
              <h3 onClick={() => {setModal(!modal), setNumber(i)}}>{글}<span onClick={() => { setCount(count + 1) }}>👍</span>{count}</h3>
              <p>2월 14일</p>
              <hr />
            </div>
          )
        })
      }
      
      {
        modal === true
          ? <Modal title={title} number={number}></Modal>
          : null
      }

    </div>
  );
}

export default App;


