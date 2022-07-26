/*Tutoriales JIC
https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/#:~:text=The%20value%20of%20the%20selected,then%20nothing%20will%20be%20returned. --> Para seleccionar un valor
*/
//Componentes
import { useRef, useState } from "react"
import Serie from "./Serie"
import Loading from "./Loading"

import useFetcher from '../hooks/useFetcher'



function App() {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('Bojack')
  const [opcion, setOpcion] = useState(1)
  const { dataState: info, loading, actoresSerie } = useFetcher(query)


  const handleSubmit = async (e) => {
    e.preventDefault()
    setQuery(searchRef.current.value)
    setOpcion(document.querySelector("#opcion").value)
    e.target.reset();
  }


  return (
    <div className="App">
      <div id="navegador">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Busqueda Serial</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
              <form className="d-flex" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <select className="form-select-sm" id="opcion">
                    <option value={1}>Serie</option>
                    <option value={2}>Actor</option>
                  </select>
                  <input type="text" ref={searchRef} className="form-control" aria-label="Text input with dropdown button" />
                  <button className="btn btn-secondary" type="submit">Buscar</button>
                </div>


              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="justify-content-center d-block p-2">
        {loading ? <Loading /> : <Serie data={info} actores={actoresSerie} />}
      </div>
    </div>
  )
}

export default App
