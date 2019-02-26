import * as React from "react";
import { HistoryItem, BitLength, Radix, RegisterKey } from "../../types";
import BitDisplay from "../BitDisplay";

import styles from "./History.module.scss";
import Button from "../Button";

export const historyClassName = styles.history;

interface HistoryProps {
  history: ReadonlyArray<HistoryItem>;
  bitLength: BitLength;
  radix: Radix;
  signed: boolean;

  historyClear: () => void;
  historyRemove: (id: string) => void;
  setRegister: (key: RegisterKey, value: number) => void;
}

const History: React.FC<HistoryProps> = ({
  history,
  bitLength,
  radix,
  signed,

  historyClear,
  historyRemove,
  setRegister
}) => {
  return (
    <div className={styles.history}>
      <div className={styles.historyHeader}>
        <h4>History:</h4>{" "}
        <Button small title="clear history" onClick={historyClear}>
          clear
        </Button>
      </div>
      {history.length === 0 ? (
        <p>History is empty... Perform some operations ;)</p>
      ) : (
        <ul className={styles.historyList}>
          {history.map(item => (
            <li key={item.id} className={styles.historyItem}>
              <div className={styles.historyActions}>
                <Button
                  title="remove"
                  small
                  onClick={() => historyRemove(item.id)}
                >
                  x
                </Button>
                <Button
                  title="set register A"
                  small
                  onClick={() => setRegister("A", item.value)}
                >
                  A
                </Button>
                <Button
                  title="set register B"
                  small
                  onClick={() => setRegister("B", item.value)}
                >
                  B
                </Button>
              </div>
              <BitDisplay
                value={item.value}
                bitLength={bitLength}
                radix={radix}
                signed={signed}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
