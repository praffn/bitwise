import * as React from "react";

import { BinaryOp } from "../../types";
import Button from "../Button";

interface BinaryOpsProps {
  historyAdd: (op: BinaryOp) => void;
  swapRegisters: () => void;
}

export const binaryOpsClassName = "binaryOps";

const BinaryOps: React.FC<BinaryOpsProps> = ({ historyAdd, swapRegisters }) => {
  return (
    <div className={binaryOpsClassName}>
      <Button title="and" onClick={() => historyAdd("and")}>
        &amp;
      </Button>
      <Button title="or" onClick={() => historyAdd("or")}>
        |
      </Button>
      <Button title="xor" onClick={() => historyAdd("xor")}>
        ^
      </Button>
      <Button title="add" onClick={() => historyAdd("add")}>
        +
      </Button>
      <Button title="subtract" onClick={() => historyAdd("sub")}>
        -
      </Button>
      <Button title="swap" onClick={swapRegisters}>
        swp
      </Button>
    </div>
  );
};

export default BinaryOps;
