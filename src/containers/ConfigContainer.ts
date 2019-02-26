import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import Config from "../components/Config";
import { RootState, RootAction } from "../store";
import * as actions from "../store/actions";

const mapStateToProps = (state: RootState) => ({
  signed: state.signed,
  radix: state.radix,
  bitLength: state.bitLength
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators(
    {
      toggleSigned: actions.toggleSigned,
      setRadix: actions.setRadix,
      setBitLength: actions.setBitLength
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Config);
