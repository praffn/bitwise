import * as React from "react";

import styles from "./Register.module.scss";
import Button from "../Button";
import BitDisplay from "../BitDisplay/BitDisplay";
import { BitLength, Radix } from "../../types";
import { getBitLengthMask } from "../../util";

export const registerClassName = styles.register;
export const unaryOpsClassName = styles.actions;

interface RegisterProps {
  title: string;
  value: number;
  onChangeValue: (value: number) => void;
  onToggleBit: (index: number) => void;
  bitLength: BitLength;
  radix: Radix;
  signed: boolean;
}

const Register: React.FC<RegisterProps> = ({
  onChangeValue,
  onToggleBit,
  value,
  radix,
  signed,
  bitLength,
  title
}) => {
  const inputClick = () => {
    const input = prompt(
      `Enter a value for register ${title}. You can input hex by prepending 0x`
    );
    if (!input) {
      return;
    }
    const value = parseInt(input);
    if (isNaN(value)) {
      return;
    }
    onChangeValue(value);
  };

  const mask = getBitLengthMask(bitLength);

  return (
    <div
      className={`${styles.register} ${title === "A" ? "tour-register" : ""}`}
    >
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <div className={styles.actions}>
          <Button small onClick={inputClick}>
            set
          </Button>
          <Button small onClick={() => onChangeValue(0)}>
            0
          </Button>
          <Button small onClick={() => onChangeValue((~value & mask) >>> 0)}>
            ~
          </Button>
          <Button small onClick={() => onChangeValue((value << 1) & mask)}>
            &lt;&lt;
          </Button>
          <Button small onClick={() => onChangeValue((value >>> 1) & mask)}>
            &gt;&gt;
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <BitDisplay
          signed={signed}
          value={value}
          bitLength={bitLength}
          radix={radix}
          onBitClick={onToggleBit}
        />
      </div>
    </div>
  );
};

export default Register;
