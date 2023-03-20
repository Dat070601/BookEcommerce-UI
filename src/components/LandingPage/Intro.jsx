import React from 'react';
import { Box, Text, Link, Image, Spacer } from '@chakra-ui/react';
import BookImage from '../../assets/png-clipart-paper-book-illustration-ancient-books-comic-book-retro-removebg-preview.png';
import { COLOR } from '../../constant';

const Intro = () => {
	return (
		<Box 
			display={'flex'}
			flexWrap={true}
			padding={['150px', '150px']}
		>
			<Box>
				<Text
					maxWidth={'600px'}
					fontWeight={'semibold'}
					color={'white'}
					fontSize={'70px'}>Book Ecommerce
				</Text>
				<Text
					paddingTop={'30px'}
					maxW={'600px'}
					color={'white'}
				>
          Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit. 
          Quam saepe, recusandae quidem nulla! 
          Eveniet explicabo perferendis aut, 
          ab quos omnis labore laboriosam quisquam 
          hic deserunt ipsum maxime aspernatur velit impedit.
				</Text>
				<Box 
					marginTop={'50px'}
					rounded={20}
					background={'white'}
					padding={['10px', '10px']}
					maxWidth={'200px'}
				>
					<Link
						color={COLOR}
					>
              Get your book now
					</Link>
				</Box>
			</Box>
			<Spacer />
			<Box>
				<Image src={BookImage} />
			</Box>
		</Box>
	);
};

export default Intro;