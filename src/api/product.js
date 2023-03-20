import axios from 'axios'

const fetchProductAsync = async () => {
  try {
    const response = await axios.get("https://localhost:7018/api/product")
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export { fetchProductAsync }