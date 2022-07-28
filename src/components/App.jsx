/*Tutoriales JIC
https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/#:~:text=The%20value%20of%20the%20selected,then%20nothing%20will%20be%20returned. --> Para seleccionar un valor
*/
//Componentes
import Serie from "./Serie"
import Loading from "./Loading"
import CardActor from "./CardActor"
import Navbar from "./Navbar"

//Hooks
import { useRef, useState } from "react"
import useFetcher from '../hooks/useFetcher'



function App() {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('Bojack')
  const [opcion, setOpcion] = useState("1")
  const { dataState: info, loading, actoresSerie, temporadas } = useFetcher(query)
  //No recuerdo porque no funcionaba mandar la opción, pero ahora funciona

  const handleSubmit = async (e) => {
    e.preventDefault()
    setQuery(searchRef.current.value)
  }

  return (
    <div className="App">
      <Navbar />
      <form className="d-flex mt-3 w-50" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <select className="form-select-sm btn btn-primary" id="opcion">
            <option value={1}>Serie</option>
            <option value={2}>Actor</option>
          </select>
          <input type="text" ref={searchRef} className="form-control" aria-label="Text input with dropdown button" />
          <button className="btn btn-primary" type="submit">Buscar</button>
        </div>
      </form>
      <div className="justify-content-center d-block p-2">
        {loading ? <Loading /> : <CardActor data={info} />}
      </div>
    </div>
  )
}

export default App
