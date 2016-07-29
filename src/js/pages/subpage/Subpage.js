import { connect } from 'react-redux';
import SubpageView from './SubpageView';
import { getData } from '../../actions/firebase';

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
});

const Subpage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubpageView);

export default Subpage;
