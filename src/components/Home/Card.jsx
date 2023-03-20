import { Box, Image, Text} from '@chakra-ui/react'
import React from 'react'
import { COLOR } from '../../constant'
import { Link } from 'react-router-dom'

const Card = ({ imageUrl, productName, productPrice, productId }) => {
    return (
        <Box _hover={{
          boxShadow: `7px 7px 5px #DFDFDF`,
          transition: "0.2s",
          
        }}>
            <Box width='300px'>
                <Image src={imageUrl} height='400px' width='300px' />
            </Box>
            <Box  marginLeft={'5px'}>
                <Text ml="5px" mt="5px" color={COLOR} fontSize = {'20px'} fontWeight='semibold' as='h4' lineHeight='tight'noOfLines={1}>
                    <Link to={`/product/${productId}`}>{productName}</Link>
                </Text>
                <Box ml="5px" mt="20px" mb="10px" fontSize='15px'>
                    <Text fontWeight={"medium"} color={"tomato"}>{productPrice} $</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Card
