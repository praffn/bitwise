import { createAction } from "typesafe-actions";
import uuid from "uuid";

import { BinaryOp, BitLength, Radix, RegisterKey } from "../types";
import {
  HISTORY_ADD,
  HISTORY_CLEAR,
  HISTORY_REMOVE,
  SET_BIT_LENGTH,
  SET_RADIX,
  SET_REGISTER,
  SET_TUTORIAL_DONE,
  SWAP_REGISTERS,
  TOGGLE_REGISTER_BIT,
  TOGGLE_SIGNED,
} from "./constants";

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
      id: uuid(),
      op,
    });
});

export const historyRemove = createAction(HISTORY_REMOVE, resolve => {
  return (id: string) => resolve({ id });
});

export const historyClear = createAction(HISTORY_CLEAR);

export const setTutorialDone = createAction(SET_TUTORIAL_DONE, resolve => {
  return (done: boolean) => resolve({ done });
});
