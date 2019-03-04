import * as React from "react";

// import wizard from "wizard.png";
import wizard from "../../assets/wizard.png";

import styles from "./Header.module.scss";

const Header: React.FC<{}> = ({ children }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={wizard} className={styles.logoImage} alt="Bitwizard" />
        <h1 className={styles.logoTitle}>bitwise</h1>
      </div>
      <div className={styles.rest}>{children}</div>
    </div>
  );
};

export default Header;
