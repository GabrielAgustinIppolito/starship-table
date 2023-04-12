export default function RenderOptions({ options }) {
   const addOptions = options.map((option, index) => {
      return (<option value={option}>{option}</option>)});
   return (
      <select name="opt" id="opt">
         {addOptions}
      </select>
   );
}
