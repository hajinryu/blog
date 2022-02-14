import './App.css';
import React,{useState} from 'react';
/* eslint-disable */

function App() {
  let posts = '블로그 글 제목'
  let[title,setTitle]=useState(['useState1','useState2','useState3']) //destructuring

  return (
    <div className="App">
      <div className='black-nav'>
        <div>blog</div>
      </div>
      <div className='list'>
        <h3>{title[0]} <span>👍</span>1</h3>
        <p>2월 14일</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{title[1]}<span>👍</span>0</h3>
        <p>2월 14일</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{title[2]}<span>👍</span>0</h3>
        <p>2월 14일</p>
        <hr />
      </div>
    </div>
  );
}

export default App;

