import * as React from "react";
import { Step } from "react-joyride";
import { binaryOpsClassName } from "../BinaryOps/BinaryOps";
import { bitClassName } from "../BitDisplay/BitDisplay";
import { configClassName } from "../Config/Config";
import { historyClassName } from "../History/History";
import { registerClassName, unaryOpsClassName } from "../Registers/Register";
import { registersClassName } from "../Registers/Registers";

import wizard from "../../assets/wizard.png";

const steps: Step[] = [
  {
    content: (
      <div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            marginBottom: "2rem",
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
    placement: "center",
    target: "body",
  },
  {
    content: 'These are your A and B registers. They are your "working" values',
    target: `.${registersClassName}`,
  },
  {
    content: "Each register contain the bits that represent their value",
    target: `.${registerClassName}`,
  },
  {
    content: "You can toggle the bits on and off by clicking on them",
    target: `.${bitClassName}`,
  },
  {
    content:
      "You can perform unary operations such as shift or not by using these buttons",
    target: `.${unaryOpsClassName}`,
  },
  {
    content:
      "You can perform binary operations such as and or xor by using these buttons",
    target: `.${binaryOpsClassName}`,
  },
  {
    content:
      "When you perform a binary operation, the result will show up in your history",
    target: `.${historyClassName}`,
  },
  {
    content:
      "You can change bit length, whether values are signed or not, and which radix to display values in here",
    target: `.${configClassName}`,
  },
  {
    content: (
      <div>
        Play around. And have fun!
        <br />
        <br />
        You can see this tutorial again by pressing the ? in the bottom right
        corner
      </div>
    ),
    placement: "center",
    target: "body",
  },
];

export default steps;
