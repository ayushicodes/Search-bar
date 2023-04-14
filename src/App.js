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

  const { books, loading, hasMore, error } = UseSearch(query, pageNumber)

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />

      {books.map((book) => {
        return <div key={book}>{book}</div>
      })}

      <div>{loading && "loading..."}</div>
      <div>{error && "Error"}</div>
    </div>
  )
}

export default App
