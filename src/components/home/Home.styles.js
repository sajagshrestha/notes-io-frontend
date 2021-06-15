import styled from "styled-components";

export const HomeWrapper = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-gap: 2rem;
`;
export const HeroTitleSection = styled.div`
	margin-top: 2rem;
`;

export const HeroTitle = styled.div`
	font-size: 5.8rem;
	color: ${(props) => props.theme.purple};
	font-weight: 700;
	span {
		color: ${(props) => props.theme.yellow};
	}
	margin-bottom: 4rem;
`;

export const HeroImg = styled.img`
	width: 34rem;
`;
