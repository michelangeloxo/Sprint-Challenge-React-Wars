import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const Styler = styled.p`
color: gold;
font-size: 1.8rem;
text-shadow: 2px 2px 8px red;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [data, setData] = useState(); 

useEffect(() => {
  axios.get('https://swapi.co/api/starships/')
  .then(res => {
    setData(res.data.results);
    console.log(res.data.results);
  })
}, []); 


  return (
    <div className="App">
      <h1 className="Header" >React Wars!</h1>
      {(data)?data.map(i => (<Styler key={i.model}> {i.model}</Styler>)):null}
    </div>
  );
}

export default App;
