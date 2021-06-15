import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/data/authActions";
import styled from "styled-components";

const DropDownMenuWrapper = styled.div`
	position: absolute;
	bottom: -3.5rem;
	cursor: pointer;
`;
const DropDownItem = styled.div`
	background-color: ${(props) => props.theme.yellow};
	padding: 1rem;
	width: 7.5rem;
	text-align: center;
	font-size: 1.1rem;
	color: ${(props) => props.theme.primaryBackground};
	font-weight: 700;
`;
const DropdownMenu = ({ handleClose }) => {
	const dispatch = useDispatch();

	const dropDownRef = useRef(null);

	useEffect(() => {
		const clickOutsideListener = (e) => {
			if (e.target !== dropDownRef.current) {
				handleClose();
			}
		};
		document.addEventListener("click", clickOutsideListener);
		return () => {
			document.removeEventListener("click", clickOutsideListener);
		};
	}, [handleClose]);

	return (
		<DropDownMenuWrapper ref={dropDownRef}>
			<DropDownItem onClick={() => dispatch(logout())}>
				Log Out
			</DropDownItem>
		</DropDownMenuWrapper>
	);
};

export default DropdownMenu;
