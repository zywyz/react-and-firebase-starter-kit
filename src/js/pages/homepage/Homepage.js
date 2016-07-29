import { connect } from 'react-redux';
import HomepageView from './HomepageView';
import { increment } from '../../actions/counter';

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
});

const Homepage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageView);

module.exports = Homepage;
