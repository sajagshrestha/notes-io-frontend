import React from "react";
import { useHistory } from "react-router";
import {
	HomeWrapper,
	HeroImg,
	HeroTitle,
	HeroTitleSection,
} from "./Home.styles";
import Button from "../common/Button";
import heroSvg from "../../assets/hero.svg";

const Home = () => {
	const history = useHistory();

	const onSignupClick = () => {
		history.push("/signup");
	};

	return (
		<HomeWrapper>
			<HeroTitleSection>
				<HeroTitle>
					ALL YOUR <span>NOTES</span> IN A SINGLE PLACE
				</HeroTitle>
				<Button size="xl" onClick={onSignupClick}>
					Sign up
				</Button>
			</HeroTitleSection>
			<HeroImg src={heroSvg} alt="hero" />
		</HomeWrapper>
	);
};

export default Home;
