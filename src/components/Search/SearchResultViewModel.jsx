import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { searchSelector } from "../../stores/reducers/SearchReducer"
import { searchByNameAsyncThunk } from "../../stores/thunks/SearchThunk"

const SearchResultViewModel = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const [ input, setInput ] = useState({
    search: "" || params.keyword
  })
  const [ visible, setVisible ] = useState(false)
  const { results } = useSelector(searchSelector)

  const handleInput = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }
 
  useEffect(() => {
    if (input.search !== "")
    {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [input.search])

  useEffect(() => {
    window.addEventListener("click", () => {
      setVisible(false)
    })
  }, visible)

  useEffect(() => {
    dispatch(searchByNameAsyncThunk({
      name: input.search,
      type: "product"
    }))
  }, [input.search])

  return {
    visible,
    results,
    input,
    handleInput
  }
}

export default SearchResultViewModel