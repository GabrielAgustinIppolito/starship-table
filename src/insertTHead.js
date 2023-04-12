export default function InsertThead({element}) {
   let keys = Object.keys(element);
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