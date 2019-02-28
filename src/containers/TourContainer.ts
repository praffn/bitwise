import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Tour from "../components/Tour";
import { RootAction, RootState } from "../store";
import { setRunningTutorial } from "../store/actions";

const mapStateToProps = (state: RootState) => ({
  running: state.runningTutorial,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators(
    {
      setRunning: setRunningTutorial,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tour);
