import * as React from "react";

import styles from "./CheckBox.module.scss";

interface CheckBoxProps {
  id?: string;
  checked?: boolean;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = props => {
  return (
    <label className={styles.checkBoxContainer}>
      <input
        className={styles.checkBox}
        id={props.id}
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <span className={styles.checkBoxMark} />
    </label>
  );
};

export default CheckBox;
