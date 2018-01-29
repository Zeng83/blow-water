import {SUBMIT_FORM} from "../actions/type";

const form = (state = {}, action) => {
	switch (action.type) {
		case SUBMIT_FORM:
			return action.payload
		case "DELETE_ROW":
			return action.payload
		default:
			return {}
	}
};

export default form;
