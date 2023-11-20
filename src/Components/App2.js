
import React, { useEffect, useState } from "react";


 export default function App2 () {
    // state
  const [fruits, setFruits] = useState([
    {id:1,nom:'abricot'},
    {id:2,nom:'banane'},
    {id:3,nom:'pomme'}

  ]);
  // comportement
const handleDelete = (id) =>{

  const copyFruit = [...fruits]

  const fruitUpdate = copyFruit.filter((fruit) =>
   fruits.id  !== id);

  setFruits(fruitUpdate);
}

  // render
  return  (
    <div>
      <h1>Listes des fruits</h1>
    <ul>
      {fruits.map((fruit) =><li key={fruit.id}>
         {fruit.nom}
         <button onClick={handleDelete(fruit.id)}>X</button>
         </li>
      )} 
    </ul>
    </div>
  )

  
};



