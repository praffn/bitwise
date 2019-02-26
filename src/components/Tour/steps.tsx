import * as React from "react";
import { registerClassName, unaryOpsClassName } from "../Registers/Register";
import { registersClassName } from "../Registers/Registers";
import { bitClassName } from "../BitDisplay/BitDisplay";
import { binaryOpsClassName } from "../BinaryOps/BinaryOps";
import { historyClassName } from "../History/History";
import { configClassName } from "../Config/Config";
import { Step } from "react-joyride";

import wizard from "../../assets/wizard.png";

const steps: Step[] = [
  {
    target: "body",
    content: (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "2rem"
          }}
        >
          <img src={wizard} width="64" />
          <h1>Tutorial</h1>
        </div>
        Welcome to bitwise!
        <br />
        Bitwise is a binary calculator and visualization tool
      </div>
    ),
    disableBeacon: true,
    placement: "center"
  },
  {
    target: `.${registersClassName}`,
    content: 'These are your A and B registers. They are your "working" values'
  },
  {
    target: `.${registerClassName}`,
    content: "Each register contain the bits that represent their value"
  },
  {
    target: `.${bitClassName}`,
    content: "You can toggle the bits on and off by clicking on them"
  },
  {
    target: `.${unaryOpsClassName}`,
    content:
      "You can perform unary operations such as shift or not by using these buttons"
  },
  {
    target: `.${binaryOpsClassName}`,
    content:
      "You can perform binary operations such as and or xor by using these buttons"
  },
  {
    target: `.${historyClassName}`,
    content:
      "When you perform a binary operation, the result will show up in your history"
  },
  {
    target: `.${configClassName}`,
    content:
      "You can change bit length, whether values are signed or not, and which radix to display values in here"
  },
  {
    target: "body",
    content: (
      <div>
        Play around. And have fun!
        <br />
        <br />
        You can see this tutorial again by pressing the ? in the bottom right
        corner
      </div>
    ),
    placement: "center"
  }
];

export default steps;
