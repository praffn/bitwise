import { createAction } from "typesafe-actions";
import uuid from "uuid";

import {
  SET_RADIX,
  SET_BIT_LENGTH,
  TOGGLE_SIGNED,
  HISTORY_ADD,
  HISTORY_REMOVE,
  HISTORY_CLEAR,
  SET_REGISTER,
  SWAP_REGISTERS,
  TOGGLE_REGISTER_BIT
} from "./constants";
import { Radix, BitLength, RegisterKey, BinaryOp } from "../types";

export const setRadix = createAction(SET_RADIX, resolve => {
  return (radix: Radix) => resolve({ radix });
});

export const setBitLength = createAction(SET_BIT_LENGTH, resolve => {
  return (bitLength: BitLength) => resolve({ bitLength });
});

export const toggleSigned = createAction(TOGGLE_SIGNED);

export const setRegister = createAction(SET_REGISTER, resolve => {
  return (key: RegisterKey, value: number) => resolve({ key, value });
});

export const toggleRegisterBit = createAction(TOGGLE_REGISTER_BIT, resolve => {
  return (key: RegisterKey, index: number) => resolve({ key, index });
});

export const swapRegisters = createAction(SWAP_REGISTERS);

export const historyAdd = createAction(HISTORY_ADD, resolve => {
  return (op: BinaryOp) =>
    resolve({
      op,
      id: uuid()
    });
});

export const historyRemove = createAction(HISTORY_REMOVE, resolve => {
  return (id: string) => resolve({ id });
});

export const historyClear = createAction(HISTORY_CLEAR);
