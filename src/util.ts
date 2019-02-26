import { Radix, BitLength, BinaryOp } from "./types";

export const radixToNumber = (radix: Radix) => {
  switch (radix) {
    case "dec":
      return 10;
    case "hex":
      return 16;
  }
};

export const getCanonical = (n: number, radix: Radix, bitLength: BitLength) => {
  switch (radix) {
    case "dec":
      return n.toString(10);
    case "hex":
      return n
        .toString(16)
        .padStart(bitLength === 8 ? 2 : bitLength === 16 ? 4 : 8, "0");
  }
};

export const getSignMask = (bitLength: BitLength) => {
  switch (bitLength) {
    case 8:
      return 0x80;
    case 16:
      return 0x8000;
    case 32:
      return 0x80000000;
  }
};

export const getCanonicalValue = (
  value: number,
  bitLength: BitLength,
  signed: boolean = false,
  radix: Radix
) => {
  // this seems... very hacky?
  let result = 0;
  switch (bitLength) {
    case 8:
      const ui8 = new Uint8Array([value]);
      result = signed ? new Int8Array(ui8)[0] : ui8[0];
      break;
    case 16:
      const ui16 = new Uint16Array([value]);
      result = signed ? new Int16Array(ui16)[0] : ui16[0];
      break;
    case 32:
      const ui32 = new Uint32Array([value]);
      result = signed ? new Int32Array(ui32)[0] : ui32[0];
      break;
  }
  return result.toString();
};

export const getBitLengthMask = (bitLength: number) => {
  if (bitLength > 31) return 0xffffffff;
  return (1 << bitLength) - 1;
};

export const compute = (
  a: number,
  b: number,
  bitLength: BitLength,
  op: BinaryOp
) => {
  const mask = getBitLengthMask(bitLength);
  const aa = a & mask;
  const bb = b & mask;
  let v = 0;
  switch (op) {
    case "and":
      v = aa & bb;
      break;
    case "or":
      v = aa | bb;
      break;
    case "xor":
      v = aa ^ bb;
      break;
    case "add":
      v = (aa + bb) & mask;
      break;
    case "sub":
      v = (aa - bb) & mask;
      break;
  }
  return v >>> 0;
};
