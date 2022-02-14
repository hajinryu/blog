import './App.css';
import React,{useState} from 'react';
/* eslint-disable */

function App() {
  let posts = '블로그 글 제목'
  let[title,setTitle]=useState(['나','가','다']) //destructuring
  let[count,setCount]=useState(0);

  function changeTitle(){
    var newArray =[...title];
    
    setTitle(newArray.sort());
  }
  return (
    <div className="App">
      <div className='black-nav'>
        <div>blog</div>
      </div>
      <div className='list'>
        <button onClick={changeTitle}>button</button>
        <h3>{title[0]} <span onClick={()=>{setCount(count+1)}}>👍</span>{count}</h3> 
        <p>2월 14일</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{title[1]}<span onClick={()=>{setCount(count+1)}}>👍</span>{count}</h3> 
        <p>2월 14일</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{title[2]}<span onClick={()=>{setCount(count+1)}}>👍</span>{count}</h3> 
        <p>2월 14일</p>
        <hr />
      </div>
    </div>
  );
}

export default App;

