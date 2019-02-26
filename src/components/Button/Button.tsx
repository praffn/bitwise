import * as React from "react";
import classnames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  small?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
}

const Button: React.FC<ButtonProps> = props => {
  const className = classnames(styles.button, {
    [styles.small]: props.small
  });
  return (
    <button
      title={props.title}
      className={className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;