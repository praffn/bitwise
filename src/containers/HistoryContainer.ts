import History from "../components/History";
import { connect } from "react-redux";
import { RootState, RootAction } from "../store";
import { Dispatch, bindActionCreators } from "redux";
import * as actions from "../store/actions";

// interface HistoryProps {
//     history: ReadonlyArray<HistoryItem>;
//     bitLength: BitLength;
//     radix: Radix;
//     signed: boolean;
//   }

const mapStateToProps = (state: RootState) => ({
  history: state.history,
  bitLength: state.bitLength,
  radix: state.radix,
  signed: state.signed
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators(
    {
      setRegister: actions.setRegister,
      historyRemove: actions.historyRemove,
      historyClear: actions.historyClear
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
