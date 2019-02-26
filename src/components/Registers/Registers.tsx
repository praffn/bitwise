import * as React from "react";
import Register from "./Register";
import {
  Registers as RegistersType,
  BitLength,
  Radix,
  RegisterKey
} from "../../types";

export interface RegistersProps {
  registers: RegistersType;
  setRegister: (key: RegisterKey, value: number) => void;
  toggleRegisterBit: (key: RegisterKey, index: number) => void;
  bitLength: BitLength;
  radix: Radix;
  signed: boolean;
}

const Registers: React.FC<RegistersProps> = ({
  registers,
  setRegister,
  toggleRegisterBit,
  bitLength,
  radix,
  signed
}) => {
  return (
    <div className="Registers">
      <Register
        title="A"
        value={registers.A}
        bitLength={bitLength}
        radix={radix}
        signed={signed}
        onChangeValue={value => setRegister("A", value)}
        onToggleBit={index => toggleRegisterBit("A", index)}
      />

      <Register
        title="B"
        value={registers.B}
        bitLength={bitLength}
        radix={radix}
        signed={signed}
        onChangeValue={value => setRegister("B", value)}
        onToggleBit={index => toggleRegisterBit("B", index)}
      />
    </div>
  );
};

export default Registers;
