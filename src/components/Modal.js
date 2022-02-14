import '../App.css';
import React, { useState } from 'react';

const Modal=(props)=>{
    return(
        <div className='modal'>
        <h2>{props.title[props.number]}</h2>
        <p>날짜</p>
        <p>내용</p>
      </div>
    );
}

export default Modal;