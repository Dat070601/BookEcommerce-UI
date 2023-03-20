import React from 'react';
import Card from '../../components/Home/Card'
import { Box, Container, Image, Flex } from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HomeViewModel from './HomeViewModel';

const Home = () => {
	const { books } = HomeViewModel()
	console.log(books)
	return (
		<>
			<Container maxW={"container.xl"} display={"flex"} gap={'20px'}>
				<Box>
					<Carousel width={"800px"} interval={2000} autoPlay infiniteLoop>
							<div>
									<Image src='https://makewebbetter.com/wp-content/uploads/2020/07/eCommerce-digital-coupons.jpg'/>
							</div>
							<div>
									<Image src='https://s3.ap-southeast-1.amazonaws.com/adpia.vn/photos/shares/PC/AT3/tiki-hoi-sach-thang-3.jpg'/>
							</div>
							<div>
									<Image src='https://cdn.wallpapersafari.com/2/1/DfNBgE.jpg'/>
							</div>
					</Carousel>
				</Box>
				<Flex flexDir={"column"} >
					<Image height={"230px"} src='https://cungdocsach.vn/wp-content/uploads/2020/03/S%C3%A1ch-hay-v%E1%BB%81-t%C3%ACnh-c%E1%BA%A3m-gia-%C4%91%C3%ACnh.jpg'
									rounded={'10px'}/>
					<Image height={"230px"} src='https://cungdocsach.vn/wp-content/uploads/2020/03/S%C3%A1ch-hay-v%E1%BB%81-t%C3%ACnh-c%E1%BA%A3m-gia-%C4%91%C3%ACnh.jpg' 
								rounded={'10px'} 
								marginTop={'10px'}/>
				</Flex>
			</Container>
      <Container
        mt={"20px"}
        maxW={"container.xl"}
      >
      <Box display={"flex"} flexWrap="wrap" gap={"10px"}>
        {books.map(book => {
        return(
          <Card 
            productId={book.productId}
            productName={book.productName}  
            imageUrl = {book.images[0]?.path} 
            productPrice = {book.productVariants[0]?.productSalePrice} 
          />
        )
      })}
      </Box>
      </Container>
    </>
	);
};

export default Home;