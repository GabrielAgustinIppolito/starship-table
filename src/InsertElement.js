export default function InsertElement({element}) {
   return (
      <tr>
         <td>{Object.values(element)[0]}</td>
         <td>{Object.values(element)[1]}</td>
         <td>{Object.values(element)[2]}</td>
         <td>{Object.values(element)[4]}</td>
      </tr>
   );
}