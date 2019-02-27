import * as React from "react";
import JoyRide, { CallBackProps, TooltipRenderProps } from "react-joyride";
import Button from "../Button";

import steps from "./steps";

import styles from "./Tour.module.scss";

const Tooltip = ({
  // continuous,
  index,
  // isLastStep,
  step,
  backProps,
  // closeProps,
  primaryProps,
  skipProps,
  tooltipProps,
}: TooltipRenderProps) => {
  return (
    <div {...tooltipProps} className={styles.tooltip}>
      <div className={styles.tooltipContent}>{step.content}</div>
      <div className={styles.tooltipActions}>
        <div className={styles.tooltipButton}>
          {index > 0 && <Button onClick={backProps.onClick}>back</Button>}
        </div>
        <div className={styles.tooltipButton}>
          <Button onClick={skipProps.onClick}>skip</Button>
        </div>

        <div className={styles.tooltipButton}>
          <Button primary onClick={primaryProps.onClick}>
            {index < steps.length - 1 ? "next" : "close"}
          </Button>
        </div>
      </div>
    </div>
  );
};

interface TourProps {
  show: boolean;
  setDone: (done: boolean) => void;
}

const Tour: React.FC<TourProps> = props => {
  const callback = (e: CallBackProps) => {
    if (e.action === "reset") {
      props.setDone(true);
    }
  };
  return (
    <>
      <JoyRide
        steps={steps}
        tooltipComponent={Tooltip}
        run={props.show}
        continuous
        callback={callback}
      />
      <div className={styles.showAgain}>
        <Button small onClick={() => props.setDone(false)}>
          ?
        </Button>
      </div>
    </>
  );
};

export default Tour;
