export default function InsertShip({ship}) {
   return (
      <tr>
         <td>{ship.name}</td>
         <td>{ship.model}</td>
         <td>{ship.manufacturer}</td>
         <td>{ship.length}</td>
      </tr>
   );
}