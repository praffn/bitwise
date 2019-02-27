import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Config from "../components/Config";
import { RootAction, RootState } from "../store";
import * as actions from "../store/actions";

const mapStateToProps = (state: RootState) => ({
  bitLength: state.bitLength,
  radix: state.radix,
  signed: state.signed,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators(
    {
      setBitLength: actions.setBitLength,
      setRadix: actions.setRadix,
      toggleSigned: actions.toggleSigned,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Config);
