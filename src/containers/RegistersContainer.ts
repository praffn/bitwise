import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Registers from "../components/Registers";
import { RootAction, RootState } from "../store";
import { setRegister, toggleRegisterBit } from "../store/actions";

const mapStateToProps = (state: RootState) => ({
  bitLength: state.bitLength,
  radix: state.radix,
  registers: state.registers,
  signed: state.signed,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators(
    {
      setRegister,
      toggleRegisterBit,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registers);
