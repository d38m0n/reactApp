import React from 'react'

const data = [
  {id:1, bodyTXT: "Klient"},
  {id:2, bodyTXT: "Projekt"},
  {id:3, bodyTXT: "Data"},
  {id:4, bodyTXT: "Rodzaj"},
  {id:5, bodyTXT: "Działanie"},
];

const HedersTh = data.map(h => (
  <th key={h.id}>{h.bodyTXT}</th>
  ));

const Heders = (
    <table cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
         {HedersTh}
        </tr> 
      </thead>
    </table>
);
const  TableHeadApp = () => {
  return (  
    <div className="tbl-header">
      {Heders}
    </div>
  );
}
 
export default  TableHeadApp;