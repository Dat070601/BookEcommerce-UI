import React from 'react';
import { Flex, Spacer, Text, Button, HStack, Box, List, ListItem, Input, IconButton, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { COLOR } from '../../constant';
import NavbarViewModel from './NavbarViewModel';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = ({ children }) => {

	const { isSuccess, email, signOut, customerFullName, customerId, accessTokenSaved } = NavbarViewModel();
	console.log(email);

	return (
		<div>
			<Flex
				padding={[5, 5]}
			>
				<Text 
					fontSize={30}
					fontWeight={'semibold'}
					color={COLOR}
				>
					<Link to={'/home'}>Book Store Ecommerce</Link>
				</Text>
				<Spacer />
				<HStack>
					{ accessTokenSaved ? <Button 
						rounded="20px" 
					>
						<Link to={`/cart/${customerId}`}>
							<Icon as={AiOutlineShoppingCart}/>
						</Link>
					</Button> : null }
					{/* <Input color="" placeholder='Search...' type={"text"} rounded={"20"}/> */}
					{isSuccess ? 
						<>
							<Text 
								fontWeight={'semibold'}
								cursor="pointer"
								_hover={{
									color: 'blue.400',
								}}
							>
								{customerFullName}
							</Text>
							<Button 
								colorScheme={'red'}
								onClick={signOut}
							>
                Log out
							</Button>
						</> : 
						<>
							<Button 
								bg={COLOR} 
								color={'white'}>
								<Link 
									to="/login">
                      Sign in
								</Link>
							</Button>
							<Button>
								<Link 
									to="/register"
								>
                  Sign up
								</Link>
							</Button>
						</>}          
				</HStack>
			</Flex>
			{children}
		</div>
	);
};

export default Navbar;