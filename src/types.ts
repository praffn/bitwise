export type BitLength = 8 | 16 | 32;

export type Radix = "dec" | "hex";

export interface Registers {
  readonly A: number;
  readonly B: number;
}

export type BinaryOp = "and" | "or" | "xor" | "add" | "sub";

export interface HistoryItem {
  value: number;
  A: number;
  B: number;
  op: BinaryOp;
  id: string;
}

export type RegisterKey = keyof Registers;
