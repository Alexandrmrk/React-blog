import React from "react";
import styles from "./style.module.scss";

const RoundButton = (props) => <div className={styles.wrapper} onClick={props.func}/>;
export default RoundButton;