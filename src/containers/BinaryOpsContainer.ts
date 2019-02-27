import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import BinaryOps from "../components/BinaryOps";
import { RootAction } from "../store";
import { historyAdd, swapRegisters } from "../store/actions";

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators({ historyAdd, swapRegisters }, dispatch);

export default connect(
  undefined,
  mapDispatchToProps,
)(BinaryOps);
