import React from "react";
import cn from "classnames";
import styles from "./status.module.scss";

import type { StatusType } from "./types";

const Status = ({ type }: StatusType) => {
  let ListElement;
  switch (type) {
    case "dead":
      ListElement = <li className={styles.dead}>Dead</li>;
      break;
    case "alive":
      ListElement = <li className={styles.alive}>Alive</li>;
      break;
    case "unknown":
      ListElement = <li className={styles.unknown}>Unknown</li>;
      break;
    default:
      ListElement = <li className={styles.alive}>Alive</li>;
      break;
  }

  return <ul className={styles.status}>{ListElement}</ul>;
};

export default Status;
