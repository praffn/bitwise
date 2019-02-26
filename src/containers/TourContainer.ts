import Tour from "../components/Tour";
import { connect } from "react-redux";
import { RootState, RootAction } from "../store";
import { Dispatch, bindActionCreators } from "redux";
import { setTutorialDone } from "../store/actions";

const mapStateToProps = (state: RootState) => ({
  show: !state.tutorialDone
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators(
    {
      setDone: setTutorialDone
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tour);
