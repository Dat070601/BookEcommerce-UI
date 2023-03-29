import React from 'react'
import { useToast } from '@chakra-ui/react'

const DeleteProductInCartToast = ({ toast }) => {
  return toast({
    title: "Delete toast",
    description: "Delete product success",
    status: 'success',
    duration: 3000,
    isClosable: true
  })
}

export default DeleteProductInCartToast