import { ActionType, getType } from "typesafe-actions";
import { BitLength, HistoryItem, Radix, Registers } from "../types";
import { compute, getBitLengthMask } from "../util";
import * as actions from "./actions";

export interface State {
  readonly signed: boolean;
  readonly bitLength: BitLength;
  readonly radix: Radix;
  readonly registers: Registers;
  readonly history: ReadonlyArray<HistoryItem>;
  readonly runningTutorial: boolean;
}

export const initialState: State = {
  bitLength: 16,
  history: [],
  radix: "dec",
  registers: {
    A: 0,
    B: 0,
  },
  runningTutorial: false,
  signed: false,
};

export default (
  state: State = initialState,
  action: ActionType<typeof actions>,
) => {
  switch (action.type) {
    case getType(actions.toggleSigned):
      return { ...state, signed: !state.signed };
    case getType(actions.setBitLength):
      const mask = getBitLengthMask(action.payload.bitLength);
      return {
        ...state,
        bitLength: action.payload.bitLength,
        registers: { A: state.registers.A & mask, B: state.registers.B & mask },
      };
    case getType(actions.setRadix):
      return { ...state, radix: action.payload.radix };
    case getType(actions.swapRegisters):
      return {
        ...state,
        registers: { A: state.registers.B, B: state.registers.A },
      };
    case getType(actions.setRegister):
      return {
        ...state,
        registers: {
          ...state.registers,
          [action.payload.key]: action.payload.value,
        },
      };
    case getType(actions.toggleRegisterBit):
      const v = state.registers[action.payload.key];
      return {
        ...state,
        registers: {
          ...state.registers,
          [action.payload.key]: (v ^ (1 << action.payload.index)) >>> 0,
        },
      };
    case getType(actions.historyAdd): {
      const { A, B } = state.registers;
      const { op, id } = action.payload;
      return {
        ...state,
        history: [
          { A, B, op, id, value: compute(A, B, state.bitLength, op) },
          ...state.history,
        ].slice(0, 10),
      };
    }
    case getType(actions.historyRemove):
      return {
        ...state,
        history: state.history.filter(({ id }) => id !== action.payload.id),
      };
    case getType(actions.historyClear):
      return {
        ...state,
        history: [],
      };
    case getType(actions.setRunningTutorial):
      return {
        ...state,
        runningTutorial: action.payload.running,
      };
    default:
      return state;
  }
};
