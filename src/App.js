import { useState } from "react"
import "./App.css"
import UseSearch from "./Hooks/useSearch"

function App() {
  const [query, setQuery] = useState("")
  const [pageNumber, setPageNumber] = useState(1)

  function handleChange(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  UseSearch(query, pageNumber)

  return (
    <>
      <input type="text" onChange={handleChange} />
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Loading....</div>
    </>
  )
}

export default App
