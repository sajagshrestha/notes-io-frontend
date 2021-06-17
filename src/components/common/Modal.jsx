import React, { useRef } from "react";
import { ModalBackDrop, ModalContent } from "./Modal.styles";

const Modal = ({ children, isOpen, close }) => {
	const backDropRef = useRef(null);

	const onBackDropClick = (e) => {
		if (e.target === backDropRef.current) {
			close();
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
