import * as React from "react";

import { BitLength, Radix } from "../../types";
import Button from "../Button";
import CheckBox from "../CheckBox";

import styles from "./Config.module.scss";

export const configClassName = styles.config;

interface ConfigProps {
  bitLength: BitLength;
  setBitLength: (bitLength: BitLength) => void;

  radix: Radix;
  setRadix: (radix: Radix) => void;

  signed: boolean;
  toggleSigned: () => void;
}

const Config: React.FC<ConfigProps> = ({
  bitLength,
  setBitLength,
  radix,
  setRadix,
  signed,
  toggleSigned,
}) => {
  return (
    <div className={styles.config}>
      <div className={styles.group}>
        <small className={styles.label}>bit length:</small>
        <Button
          small
          disabled={bitLength === 8}
          onClick={() => setBitLength(8)}
        >
          8
        </Button>
        <Button
          small
          disabled={bitLength === 16}
          onClick={() => setBitLength(16)}
        >
          16
        </Button>
        <Button
          small
          disabled={bitLength === 32}
          onClick={() => setBitLength(32)}
        >
          32
        </Button>
      </div>
      <div className={styles.group}>
        <small className={styles.label}>radix:</small>
        <Button
          small
          disabled={radix === "dec"}
          onClick={() => setRadix("dec")}
        >
          dec
        </Button>
        <Button
          small
          disabled={radix === "hex"}
          onClick={() => setRadix("hex")}
        >
          hex
        </Button>
      </div>
      <div className={styles.group}>
        <label htmlFor="signed_checkbox">
          <small className={styles.label}>signed:</small>
        </label>
        <CheckBox
          id="signed_checkbox"
          checked={signed}
          onChange={toggleSigned}
        />
      </div>
    </div>
  );
};

export default Config;
