import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import History from "../components/History";
import { RootAction, RootState } from "../store";
import * as actions from "../store/actions";

const mapStateToProps = (state: RootState) => ({
  bitLength: state.bitLength,
  history: state.history,
  radix: state.radix,
  signed: state.signed,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators(
    {
      historyClear: actions.historyClear,
      historyRemove: actions.historyRemove,
      setRegister: actions.setRegister,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(History);
