import { connect } from 'react-redux';
import RestrictedView from './RestrictedView';
import { getData } from '../../actions/firebase';

const mapStateToProps = (state) => ({
  logged: state.loginStatus.logged,
  restrictedData: state.data.restrictedData,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
});

const Restricted = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestrictedView);

export default Restricted;
