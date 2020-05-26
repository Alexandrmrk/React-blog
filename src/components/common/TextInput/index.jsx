import React, { Component } from "react";
import styles from "./style.module.scss";

export default class TextInput extends Component {
  render() {
    return (
      <input
        id={"login"}
        type={"text"}
        className={styles.wrapper}
        onChange={event => {
          this.props.updateAuthData(event.currentTarget.value);
        }}
      />
    );
  }
}
