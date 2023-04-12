import InsertElement from "./InsertElement";
import InsertThead from "./insertTHead";

export default function RenderTable({ elements }) {
   const renderElements = elements.map((element, index) => {
      return (<InsertElement key={index} element={element} />);
      
   });
   
   
   const renderThead = elements.splice(0,1).map((element, index) => {
      return (<InsertThead key={index} element={element} />);
   });
   return (
      <table>
         <thead>
            {renderThead}
         </thead>
         <tbody>
            {renderElements}
         </tbody>
      </table>
   );
}