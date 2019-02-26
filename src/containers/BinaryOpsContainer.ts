import BinaryOps from "../components/BinaryOps";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { RootAction } from "../store";

import { historyAdd, swapRegisters } from "../store/actions";

// historyAdd: (op: BinaryOp) => void;
//   swapRegisters: () => void;

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators({ historyAdd, swapRegisters }, dispatch);

export default connect(
  undefined,
  mapDispatchToProps
)(BinaryOps);
