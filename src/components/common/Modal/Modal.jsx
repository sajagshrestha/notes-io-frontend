import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../actions/ui/modalActions";
import { ModalBackDrop, ModalContent } from "./Modal.styles";

const Modal = ({ children }) => {
	const dispatch = useDispatch();
	const { isOpen } = useSelector((state) => state.modal);

	const backDropRef = useRef(null);

	const onBackDropClick = (e) => {
		if (e.target === backDropRef.current) {
			dispatch(closeModal());
		}
	};

	return (
		<>
			{isOpen ? (
				<ModalBackDrop ref={backDropRef} onClick={onBackDropClick}>
					<ModalContent>{children}</ModalContent>
				</ModalBackDrop>
			) : null}
		</>
	);
};

export default Modal;
