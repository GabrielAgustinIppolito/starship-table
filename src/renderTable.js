import InsertShip from "./InsertShip";
import InsertThead from "./insertTHead";

export default function RenderTable({ ships }) {
   const renderShips = ships.map((ship, index) => {
      // return (<tr>
      //   <td>{ship.name}</td>
      //   <td>{ship.model}</td>
      //   <td>{ship.manufacturer}</td>
      //   <td>{ship.length}</td>
      //   </tr>);
      // console.log(ship);
      // console.log(Object.keys(ship));
      return (<InsertShip key={index} ship={ship} />);
      
   });
   
   
   const renderThead = ships.splice(0,1).map((ship, index) => {
      return (<InsertThead key={index} ship={ship} />);
   });
   return (
      <table>
         <thead>
            {renderThead}
         </thead>
         <tbody>
            {renderShips}
         </tbody>
      </table>
   );
}