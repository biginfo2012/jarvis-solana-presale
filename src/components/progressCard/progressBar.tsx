import { useContext } from "react";
import classes from "./progressBar.module.scss";

import { PersonalInfoContext } from "../../web3/PersonalInfo";

export default function ProgressBar() {
  const { poolState } = useContext(PersonalInfoContext);
  return (
    <div className={classes.progress__bar__wrapper}>
      <div className={classes.progress__bar__text__wrapper}>
        <p className={classes.progress__bar__text}>{poolState.raised} / {poolState.hardcap} SOL</p>
        <p className={classes.progress__bar__text}>Progress {poolState.raised / poolState.hardcap * 100}%</p>
      </div>
      <div className={classes.progress__bar__container}>
        <div className={classes.progress__bar}>
          <div className={classes.progress__bar__inner}></div>
        </div>
      </div>
    </div>
  );
}
