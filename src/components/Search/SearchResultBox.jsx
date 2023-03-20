import { Box, Text } from '@chakra-ui/react'
import { COLOR } from '../../constant'
import { useSelector } from 'react-redux'
import { searchSelector } from '../../stores/reducers/SearchReducer'
import React from 'react'
import SearchResultViewModel from './SearchResultViewModel'
import { Link } from 'react-router-dom'

const SearchResultBox = () => {

  const { results } = SearchResultViewModel()

  return (
    <div>
    <Box 
      position={"absolute"} 
      zIndex={1}
      width="700px"
      minH={"60px"}
      bg={"gray.200"}
      mt={"10px"}
    >
      {results.length !== 0 ? results.map(result => {
        return (
          <Box mt="1px" border={`1px ${COLOR} solid`} p={["20px", "20px"]}>
            <Text          
            ><Link to={`/product/${result.productId}`}>{result.productName}</Link>
            </Text>
          </Box>
        )     
      }) : <Box mt="1px" border={`1px ${COLOR} solid`} p={["20px", "20px"]}>
      <Text          
      >No result...
      </Text>
    </Box>}
    </Box>
    </div>
  )
}

export default SearchResultBox