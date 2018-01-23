import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import submitForm from '../components/submitForm'
import * as Actions from '../actions'

const mapState = (state) => ({
	state: state || {}
});

const mapDispatch = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
};

export default connect(mapState, mapDispatch)(submitForm);
