import { ActionType, getType } from "typesafe-actions";
import * as actions from "./actions";
import { BitLength, Radix, Registers, HistoryItem } from "../types";
import { getBitLengthMask, compute } from "../util";

export interface State {
  readonly signed: boolean;
  readonly bitLength: BitLength;
  readonly radix: Radix;
  readonly registers: Registers;
  readonly history: ReadonlyArray<HistoryItem>;
}

export const initialState: State = {
  signed: false,
  bitLength: 16,
  radix: "dec",
  registers: {
    A: 0,
    B: 0
  },
  history: []
};

export default (
  state: State = initialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case getType(actions.toggleSigned):
      return { ...state, signed: !state.signed };
    case getType(actions.setBitLength):
      const mask = getBitLengthMask(action.payload.bitLength);
      return {
        ...state,
        registers: { A: state.registers.A & mask, B: state.registers.B & mask },
        bitLength: action.payload.bitLength
      };
    case getType(actions.setRadix):
      return { ...state, radix: action.payload.radix };
    case getType(actions.swapRegisters):
      return {
        ...state,
        registers: { A: state.registers.B, B: state.registers.A }
      };
    case getType(actions.setRegister):
      return {
        ...state,
        registers: {
          ...state.registers,
          [action.payload.key]: action.payload.value
        }
      };
    case getType(actions.toggleRegisterBit):
      const v = state.registers[action.payload.key];
      return {
        ...state,
        registers: {
          ...state.registers,
          [action.payload.key]: (v ^ (1 << action.payload.index)) >>> 0
        }
      };
    case getType(actions.historyAdd):
      const { A, B } = state.registers;
      const { op, id } = action.payload;
      return {
        ...state,
        history: [
          { A, B, op, id, value: compute(A, B, state.bitLength, op) },
          ...state.history
        ].slice(0, 10)
      };
    case getType(actions.historyRemove):
      return {
        ...state,
        history: state.history.filter(({ id }) => id !== action.payload.id)
      };
    case getType(actions.historyClear):
      return {
        ...state,
        history: []
      };
    default:
      return state;
  }
};
