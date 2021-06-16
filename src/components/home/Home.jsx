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
import { useSelector } from "react-redux";

const Home = () => {
	const history = useHistory();

	const { isLoggedIn } = useSelector((state) => state.user);

	const onSignupClick = () => {
		history.push("/signup");
	};
	const onGotoNotesClick = () => {
		history.push("/notes");
	};

	return (
		<HomeWrapper>
			<HeroTitleSection>
				<HeroTitle>
					ALL YOUR <span>NOTES</span> IN A SINGLE PLACE
				</HeroTitle>
				{!isLoggedIn ? (
					<Button size="xl" onClick={onSignupClick}>
						Sign up
					</Button>
				) : (
					<Button size="xl" onClick={onGotoNotesClick}>
						My Notes
					</Button>
				)}
			</HeroTitleSection>
			<HeroImg src={heroSvg} alt="hero" />
		</HomeWrapper>
	);
};

export default Home;
