import './App.css';
import axios from 'axios';
import RenderTable from './renderTable';
import { useState } from 'react';

function App() {
  const [ships, setShips] = useState([]);

  const fetchStarships = async () => {
    let response = await axios.get("https://swapi.dev/api/starships/");
    setShips([...response.data.results]);
  };
  // const renderShips = ships.map((ship, index) => {
  //   // return (<tr>
  //   //   <td>{ship.name}</td>
  //   //   <td>{ship.model}</td>
  //   //   <td>{ship.manufacturer}</td>
  //   //   <td>{ship.length}</td>
  //   //   </tr>);
  //   return (<InsertShip key ={index} ship= {ship}/>); 
  // });
  return (
    <div className="App">
      <button onClick={fetchStarships}>Click me!</button>
      <RenderTable ships={ships} />
      
      {/* <table>
        <thead>
          <tr>
            <th>name</th>
            <th>model</th>
            <th>manufacturer</th>
            <th>length</th>
          </tr>
        </thead>
        <tbody>
          {renderShips}
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
