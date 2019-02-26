import * as React from "react";
import classnames from "classnames";

import styles from "./BitDisplay.module.scss";
import { BitLength, Radix } from "../../types";
import { getCanonicalValue } from "../../util";
import Bit from "./Bit";

interface BitDisplay {
  value: number;
  bitLength: BitLength;
  radix: Radix;
  signed: boolean;
  onBitClick?: (index: number) => void;
}

const numberToBitArray = (n: number, bitLength: BitLength) => {
  return n
    .toString(2)
    .padStart(bitLength, "0")
    .split("")
    .map(n => n !== "0")
    .slice(0, bitLength);
};

const BitDisplay: React.FC<BitDisplay> = props => {
  const bits = numberToBitArray(props.value, props.bitLength);
  return (
    <div className={styles.bitDisplay}>
      <ul className={styles.list}>
        {bits.map((on, index) => (
          <li key={index} className={styles.listItem}>
            <Bit
              onClick={
                props.onBitClick
                  ? () => props.onBitClick!(props.bitLength - index - 1)
                  : undefined
              }
              on={on}
            />
          </li>
        ))}
      </ul>
      <div className={styles.canonical}>
        {props.radix === "hex" ? <span className={styles.hex}>0x</span> : null}
        {/* {getCanonicalValue(props.value, props.bitLength, props.sig, props.bitLength)} */}
        {getCanonicalValue(
          props.value,
          props.bitLength,
          props.signed,
          props.radix
        )}
      </div>
    </div>
  );
};

export default BitDisplay;
