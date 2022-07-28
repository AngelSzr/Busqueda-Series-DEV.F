/*Tutoriales JIC
https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/#:~:text=The%20value%20of%20the%20selected,then%20nothing%20will%20be%20returned. --> Para seleccionar un valor
*/
//Componentes
import Serie from "./Serie"
import Loading from "./Loading"
import Navbar from "./Navbar"
import CatalogoSeries from "./CatalogoSeries"
import { FaSearch } from 'react-icons/fa'

//Hooks
import { useRef, useState } from "react"
import useFetcher from '../hooks/useFetcher'



function App() {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [opcion, setOpcion] = useState("1")
  const { dataState: info, loading, actoresSerie, temporadas } = useFetcher(query)
  //No recuerdo porque no funcionaba mandar la opción, pero ahora funciona

  const handleSubmit = async (e) => {
    e.preventDefault()
    setQuery(searchRef.current.value)
  }

  return (
    <div className="App">

      <form className="d-flex mt-5 w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="input-group mb-3">

          <input type="text" ref={searchRef} className="form-control" aria-label="Text input with dropdown button" />
          <button className="btn btn-primary" type="submit"><FaSearch className="fs-4" /></button>
        </div>
      </form>
      <div className="container w-75 p-2">
        {loading ? <Loading /> : <CatalogoSeries data={info} />}
      </div>
    </div>
  )
}

export default App
