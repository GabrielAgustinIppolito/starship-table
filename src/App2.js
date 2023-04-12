import './App.css';
import axios from 'axios';
import RenderTable from './renderTable';
import { useState } from 'react';
import RenderOptions from './RenderOptions';

function App() {
  let selected;
  const [elements, setElements] = useState([]);
  const [options, setOptions] = useState([]);

  const fetchApi = async () => {
    let response = await axios.get("https://swapi.dev/api/");
    setOptions([...Object.keys(response.data)])
  };

  selected = document.querySelector("select");
  const fetchElements = async () => {
    let response = await axios.get(`https://swapi.dev/api/${selected.value}/`);
    setElements([...response.data.results]);
  };
  if(options.length === 0){
    fetchApi();
  }

  return (
    <div className="App">
      <div className="interact">
        <RenderOptions options = {options}/>
        <button onClick={fetchElements}>Click me!</button>
      </div>
      <RenderTable elements={elements} />
      
    </div>
  );
}

export default App;
