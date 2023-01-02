import './App.css';

import { useState } from "react"
import ResponsiveAppBar from './components/appbar';




function App() {
  
  const [newname, setnewname] = useState("");
  const [name, setname] = useState([]);

  const HandleClick = (event) => {
    event.preventDefault();

   setname(current => [...current, newname])

  }

  const onchange = (event) => {
    setnewname(event.target.value)
  }

  return (
    
    <div>
      <ResponsiveAppBar />
      <h1>Liste de prenom comme lena</h1>
      <ul>
        {name.map((elem, index) => (
          <li key = {index}>{elem}</li>
        ))}
      </ul>
      <form action="submit" onSubmit={HandleClick}>
        <input type="text" onChange={onchange}  value = {newname} /> <button>Add</button>
      </form>
    </div>
  );
}

export default App;
