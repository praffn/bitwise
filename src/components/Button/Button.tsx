import classnames from "classnames";
import * as React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  small?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  const className = classnames(styles.button, {
    [styles.small]: props.small,
    [styles.primary]: props.primary,
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
