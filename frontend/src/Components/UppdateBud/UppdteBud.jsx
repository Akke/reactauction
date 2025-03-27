// import React, { useState } from 'react';

// const UppdateBud = () => {
//   const [buds, setBuds] = useState([]);
//   const [budInput, setBudInput] = useState('');

//   const addBud = () => {
//     if (budInput) {
//       setBuds([...buds, budInput]); 
//       setBudInput('');
     
//     }
//   };

//   const saveBuds = () => {
//     if (buds.length > 0) {
//       console.log('Buden är sparade:', buds);
//       alert('Buden har sparats!');
//     } else {
//       alert('Inga bud att spara.');
//     }
//   };

//   return (
//     <div>
//       <h1>Budlista</h1>

//       <input
//         type="number"
//         value={budInput}
//         onChange={(e) => setBudInput(e.target.value)}
//         placeholder="Skriv ditt bud..."
//       />
//       <button onClick={addBud}>Lägg till bud</button>

//       <ul>
//         {buds.map((bud, index) => (
//           <li key={index}>Bud: {bud} kr</li>
//         ))}
//       </ul>

//       <button onClick={saveBuds}>Spara Bud</button>
//     </div>
//   );
// };

// export default UppdateBud;
