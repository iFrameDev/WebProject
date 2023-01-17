import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react"
import ResponsiveAppBar from './components/appbar';




import News from './pages/News'
import NotFound404 from './pages/NotFound404.js'




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

      <Routes>
          <Route path={'/news'} element={<News />} />
          <Route path="*" element={<NotFound404 />} />
          
       </Routes>

      <h1>Liste de prenom comme lena caca</h1>
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
