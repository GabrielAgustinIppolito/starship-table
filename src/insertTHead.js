export default function InsertThead({ship}) {
   console.log(ship);
   let keys = Object.keys(ship);
   console.log(keys);
   return (
      <tr>
         <th>{keys[0]}</th>
         <th>{keys[1]}</th>
         <th>{keys[2]}</th>
         <th>{keys[4]}</th>
      </tr>
   );
}

{/* <tr>
   <th>name</th>
   <th>model</th>
   <th>manufacturer</th>
   <th>length</th>
</tr> */}