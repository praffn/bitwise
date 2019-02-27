import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Tour from "../components/Tour";
import { RootAction, RootState } from "../store";
import { setTutorialDone } from "../store/actions";

const mapStateToProps = (state: RootState) => ({
  show: !state.tutorialDone,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators(
    {
      setDone: setTutorialDone,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tour);
