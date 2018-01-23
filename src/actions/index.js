// import {SUBMIT_FORM} from "./type";

export const submitForm = (data) => {
	return {
		type: "SUBMIT_FORM",
		payload: data
	}
};