export const OPEN_CREATE_MODAL = "OPEN_CREATE_MODAL";
export const CLOSE_CREATE_MODAL = "CLOSE_CREATE_MODAL";
export const OPEN_EDIT_MODAL = "OPEN_EDIT_MODAL";
export const CLOSE_EDIT_MODAL = "CLOSE_EDIT_MODAL";
export const OPEN_DELETE_MODAL = "OPEN_DELETE_MODAL";
export const CLOSE_DELETE_MODAL = "CLOSE_DELETE_MODAL";

/**
 * Action creator for opening create modal
 *
 * @returns {object}
 */
export const openCreateModal = () => ({
	type: OPEN_CREATE_MODAL,
});

/**
 * Action creator for closing create modal
 *
 * @returns {object}
 */
export const closeCreateModal = () => ({
	type: CLOSE_CREATE_MODAL,
});

/**
 * Action creator for opening Edit modal
 *
 * @returns {object}
 */
export const openEditModal = () => ({
	type: OPEN_EDIT_MODAL,
});

/**
 * Action creator for closing Edit modal
 *
 * @returns {object}
 */
export const closeEditModal = () => ({
	type: CLOSE_EDIT_MODAL,
});

/**
 * Action creator for opening Delete modal
 *
 * @returns {object}
 */
export const openDeleteModal = () => ({
	type: OPEN_DELETE_MODAL,
});

/**
 * Action creator for closing Delete modal
 *
 * @returns {object}
 */
export const closeDeleteModal = () => ({
	type: CLOSE_DELETE_MODAL,
});
