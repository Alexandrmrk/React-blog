import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { connect } from "react-redux";
import mapStateToProps from "../../../../../../reducers/mapStateToProps";
import mapActionToProps from "../../../../../../actions/mapActionToProps";

const useUpperText = () => {
  const [text, setText] = useState("");
  useEffect( ()=>{
    setText(text.toUpperCase())
  })
  return [text, setText]
}

const Editor = (props) => {
  console.log(props);
  let headerArea = useRef(null);
  const [header, setHeader] = useUpperText();
  const [body, setBody] = useUpperText();

  // useEffect(() => {
  //   if (headerText === "коронавирус") {
  //     alert(`Осторожнее с этим!!!`);
  //     headerArea &&
  //       (() => {
  //         headerArea.current.className = styles.alert;
  //       })();
  //   }
  // }, [headerText]);
  //
  //
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setHeaderText("Начните вводить название поста...");
  //   }, 3000);
  //   fetchPosts();
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  /*
   *  state = {headerText: "", body: ""}
   *  setHeaderText = (value) => {
   *     this.setState({headerText: value})
   *  }
   *  */
  console.log(header)
  return (
    <div className={styles.wrapper}>
      <main>
        <textarea
          className={styles.header}
          onChange={(event) => {
            setHeader(event.currentTarget.value);
          }}
          value={header}
          ref={headerArea}
        />
        <textarea
          className={styles.body}
          rows={15}
          onChange={(event) => {
            setBody(event.currentTarget.value);
          }}
          value={body}
        />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button onClick={props.toggleEditorAction}>Cancel</button>
          <button>Ok</button>
        </div>
      </main>
    </div>
  );
};

export default connect(mapStateToProps.global, mapActionToProps)(Editor);
