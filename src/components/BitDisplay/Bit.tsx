import * as React from "react";
import classnames from "classnames";

import styles from "./BitDisplay.module.scss";

interface BitProps {
  onClick?: () => void;
  on: boolean;
}

export default class Bit extends React.PureComponent<BitProps> {
  render() {
    return (
      <div
        className={classnames(styles.bitContainer, {
          [styles.bitToggled]: this.props.on
        })}
        onClick={this.props.onClick}
      >
        <span className={`${styles.bit} ${styles.bitZero}`}>0</span>
        <span className={`${styles.bit} ${styles.bitOne}`}>1</span>
      </div>
    );
  }
}
