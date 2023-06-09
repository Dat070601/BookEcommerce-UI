import { Icon, Container, Text, Heading, HStack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Input, Checkbox } from '@chakra-ui/react';
import React from 'react';
import { COLOR } from '../../constant';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import CartViewModel from './CartViewModel';

const Cart = () => {

	const { 
		carts, 
		quantity, 
		increase, 
		decrease, 
		selectProductAddToOrder,
		getTotalInCart,
		prepareOrderProduct
	} = CartViewModel();

	const total = getTotalInCart(prepareOrderProduct)

	return (
		<Container maxW={'container.lg'}>
			<Heading color={COLOR}>Cart</Heading>
			<TableContainer mt="20px">
				<Table variant={'simple'}>
					<Thead>
						<Tr>
							<Th></Th>
							<Th>Product name</Th>
							<Th>Item</Th>
							<Th>Quantity</Th>
							<Th>Total</Th>
						</Tr>
					</Thead>
					<Tbody>
						{carts.map(cart => {
							return (
								<Tr>
									<Td>
										<Checkbox
											onChange={(event) => selectProductAddToOrder({
												id: cart.productVariantId,
												total: cart.total
											}, event)}
										></Checkbox>
									</Td>
									<Td>
										<HStack>
											<Text color={COLOR} fontWeight={'medium'}>{cart.productName}</Text>
										</HStack>
									</Td>
									<Td>
										<HStack>
											<Text color={COLOR} fontWeight={'medium'}>{cart.productVariantName}</Text>
										</HStack>
									</Td>
									<Td>
										<HStack>
											<Button 
												size={'sm'}
												onClick={decrease}
											>
												<Icon as={AiOutlineMinus}/>
											</Button>
											<Input 
												defaultValue={cart.quantity} 
												type={'number'} 
												width={'14%'} 
											/>
											<Button 
												size={'sm'}
												onClick={increase}
											>
												<Icon as={AiOutlinePlus}/>
											</Button>
										</HStack>
									</Td>
									<Td>{cart.total}</Td>
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</TableContainer>
			<Text color={COLOR} fontWeight={"bold"} mt="10px">Total: {total}</Text>
			<Button bg={COLOR} color="white" mt="10px">Create Order</Button>
		</Container>
	);
};

export default Cart;