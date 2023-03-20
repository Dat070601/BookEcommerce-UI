import React from 'react';
import { Box } from '@chakra-ui/react';
import './LandingPage.css';
import { COLOR } from '../../constant';

const Background = ({ children }) => {
	return (
		<Box 
			className='container'
			bg={COLOR}
			height={'91.5vh'}
		>
			{/* <img 
        className='background-blur' 
        src={LandingPageBg} 
        alt="" 
      /> */}
			{children}
		</Box>
	);
};

export default Background;