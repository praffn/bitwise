import { connect } from "react-redux";

import Registers from "../components/Registers";
import { RootState, RootAction } from "../store";
import { Dispatch, bindActionCreators } from "redux";
import { setRegister, toggleRegisterBit } from "../store/actions";

const mapStateToProps = (state: RootState) => ({
  registers: state.registers,
  bitLength: state.bitLength,
  radix: state.radix,
  signed: state.signed
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators(
    {
      setRegister,
      toggleRegisterBit
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registers);
