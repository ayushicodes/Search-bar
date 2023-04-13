import axios from "axios"
import { useEffect } from "react"

export default function UseSearch(query, pageNumber) {
  useEffect(() => {
    let cancle
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancle = c)),
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
      })
    return () => cancle()
  }, [query, pageNumber])
  return null
}
