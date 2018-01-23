const form = (state = {}, action) => {
	switch (action.type) {
		case "SUBMIT_FORM": 
			console.log("action", action);
			return action.payload
		case "DELETE_ROW":
			return action.payload
		default:
			return {}
	}
};

export default form;