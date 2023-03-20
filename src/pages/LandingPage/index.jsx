import React from 'react';
import Background from '../../components/LandingPage/Background';
import Intro from '../../components/LandingPage/Intro';
import './LandingPage.css';

const LandingPage = () => {
	return (
		<>
			<Background>
				<Intro />
			</Background>
		</>
	);
};

export default LandingPage;