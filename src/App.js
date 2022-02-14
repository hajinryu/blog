import './App.css';
import React, { useState } from 'react';
import Modal from './components/Modal';
import Nav from './components/Nav';
/* eslint-disable */

function App() {
  let [title, setTitle] = useState(['useState3', 'useState2', 'useState1']) //destructuring
  let [count, setCount] = useState(0);
  let [modal, setModal] = useState(false);
  let [number, setNumber] = useState(0);
  let [constext, setContext] = useState('');

  function changeTitle() {
    var newArray = [...title];
    newArray[0] = 'hi'

    setTitle(newArray);
  }

  const submit=(event)=>{
    event.preventDefault()
    setTitle(
      [
        ...title,constext
      ]
    )
  }

  return (
    <div className="App">
      <Nav />
      {
        title.map((글, i) => {
          return (
            <div className='list' key={i}>
              <h3 onClick={() => { setModal(!modal), setNumber(i) }}>{글}</h3>
              <span onClick={() => { setCount(count + 1) }}>👍</span>{count}
              <p>2월 14일</p>
              <hr />
            </div>
          )
        })
      }

      <div className='publish'>
        <form onSubmit={submit}>
          <input onChange={(e) => setContext(e.target.value)} />
          <button>저장</button>
        </form>
      </div>


      {
        modal === true
          ? <Modal title={title} number={number}></Modal>
          : null
      }

    </div>
  );
}

export default App;


