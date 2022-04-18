import React, { useState } from 'react';
import './App.css';

import Form from './Form';

const App = () => {

  const [numOfChars, setNumOfChars] = useState(8);
  const [number, setNumber] = useState({ 
    bool: false, 
    content: '1234567890'
  });
  const [smLetters, setSmLetters] = useState({
    bool: false,
    content: 'abcdefghijklmnopqrstuvwxyz'
  });
  const [capsLetters, setCapsLetters] = useState({
    bool: false,
    content: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }); 
  const [specialChars, setSpecialChars] = useState({
    bool: false,
    content: ['!', '"', "#", '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\\", ']', '^', '_', '`', '{', '|', '}', '~'].join(''),
  });
  const [thePwd, setThePwd] = useState('');


  // Password logic
  function pwdLogic (...args) {

    // Check for empty args and return an error message
    if(args[0].length === 0) return setThePwd('Please select one or more password parameter') ;
     
    // Create array to store at least 1 char from each argument - That way there will always be at least 1 of the required character in the password
    let requiredArr = [];

    // Randomly grab 1 char from each argument and push to requiredArr
    args[0].forEach(element => {
      let rand = element.content.charAt(Math.floor(Math.random() * element.content.length));
      requiredArr.push(rand);
    });

    // Create array temporarily to store all the arguments' characters 
    let tempArr = [];
    // Create array to temporarily store characters that will be used for the password
    let password = [];
    
    // Push all characters from each arg into tempArr and join them as 1 string
    args[0].forEach(element => {
      tempArr.push(element.content);
    });
    tempArr = tempArr.join('');

    // Run a loop that runs x times (x = numOfChars - args.length)  to grab random characters from from tempArr and push them to password
    for(let i = 0; i < (numOfChars - args.length); i++) {
      let rand = tempArr.charAt(Math.floor(Math.random() * tempArr.length));
      password.push(rand);
    }
    // concat password and requiredArr
    password = [...password, ...requiredArr];
   
    // convert password to a string and set to thePwd state
    setThePwd(password.join(""));


  }
  

  function onSubmit(e) {
    e.preventDefault();

    // pwdLogic Arguments
    let pwdArgs = [];

    // Run a loop that checks if the bool property for number, smLetters, capsLetters and specialChars is true. If true, push to pwdArgs
    [number, smLetters, capsLetters, specialChars].forEach(el => {
      if(el.bool) pwdArgs.push(el);
    }); 

    // Run password logic function by setting pwdArgs as the argument to generate and display password on the screen  
    pwdLogic(pwdArgs); 
   
  } 

  return (
    <div className="App">
      
      <Form 
      onSubmit={onSubmit}
      numOfChars={numOfChars} 
      setNumOfChars={setNumOfChars}
      number={number} 
      setNumber={setNumber}
      smLetters={smLetters} 
      setSmLetters={setSmLetters}
      capsLetters={capsLetters}
      setCapsLetters={setCapsLetters}
      specialChars={specialChars}
      setSpecialChars={setSpecialChars}  />


      <div className='display'>
        <h3>Password:</h3>
        <h1>{ thePwd }</h1>
      </div>
      
    </div>
  );

}

export default App;
