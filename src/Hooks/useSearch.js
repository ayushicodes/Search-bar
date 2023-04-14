import axios from "axios"
import { useEffect, useState } from "react"

export default function UseSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(true)
  const [books, setBooks] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => setBooks([]), [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancle
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancle = c)),
    })
      .then((res) => {
        setBooks((prevBook) => {
          return [
            ...new Set([...prevBook, ...res.data.docs.map((b) => b.title)]),
          ]
        })
        console.log(res.data)
        setHasMore(res.data.docs.length > 0)
        setLoading(false)
      })

      .catch((e) => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cancle()
  }, [query, pageNumber])
  return { loading, error, books, hasMore }
}
