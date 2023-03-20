import { Box, Image, Text} from '@chakra-ui/react'
import React from 'react'
import { COLOR } from '../../constant'
import { Link } from 'react-router-dom'

const Card = ({ imageUrl, productName, productPrice, productId }) => {
    return (
        <Box border={'2px gray solid'} rounded={'10px'}>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' width='300px'>
                <Image src={imageUrl} height='400px' width='300px' />
            </Box>
            <Box  marginLeft={'5px'}>
                <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'noOfLines={1} >
                <Text color={COLOR} fontSize = {'20px'}>
                    <Link to={`/product/${productId}`}>{productName}</Link>
                </Text>
                </Box>
                <Box fontSize='15px'>
                    {productPrice}$
                    <Box as='span' color='gray.600' fontSize='15px'>
                        /Product
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Card
