import React, { Component, useState } from "react";
import styles from "./style.module.scss";
import TextInput from "../../../common/TextInput";
import PasswordInput from "../../../common/PasswordInput";
import AcceptButton from "../../../common/AcceptButton";
import Server from "../../../../mockServer";
import { connect } from "react-redux";
import location from "../../../../utils/location";
import mapActionToProps from "../../../../actions/mapActionToProps";
import { useSpring, animated, config } from "react-spring";

const AuthForm = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const anim = useSpring({
    from: {opacity: 0, marginTop: 500, transform: "rotateX(120deg) scale(0.5)", boxShadow: '0 0 0px #fff'},
    // to: async (next, cancel) => {
    //   await next({ opacity: 1, marginTop: 0, transform: "rotateX(0deg) scale(1)" })
    //   console.log('To do something - for example action, request, etc');
    //   await next({boxShadow: '0 0 15px #000'})
    // },
    to: [{ opacity: 1, marginTop: 0, transform: "rotateX(0deg) scale(1)" }, {boxShadow: '0 0 15px #000'}],
    config: {duration: 1500, easing: x => 1 - (1 - x) * (1 - x)},
    // delay: 3000,
    reverse: !!user,
    onRest(ds) {
      console.log('end anim!');
      user && (()=>{
        props.setUserAction(user);
        location.push("/home/posts");
      })()
    },
    onStart() {console.log('start anim!')},
    // onFrame(x) {console.log(x)}
  });

  // opacity: 1,
  //     transform: "scale(1) rotateX(0deg)",
  //     marginBottom: 0,
  //     from: { opacity: 0, marginBottom: -200, transform: "scale(0.1) rotateX(360deg)" },
  // config: config.molasses,

  const tryAuth = () => {
    try {
      const user = Server.authorization({
        login,
        password,
      });
      setUser(user)
    } catch (error) {
      console.log(error);
      alert("Неверный логин/пароль");
    }
  };

  return (
    <animated.div className={styles.wrapper} style={anim}>
      <div className={styles.title}>
         Login
      </div>
      <TextInput updateAuthData={setLogin} />
      <PasswordInput updateAuthData={setPassword} />
      <AcceptButton text={"Log in"} submit={tryAuth} />
    </animated.div>
  );
};

export default connect(() => null, mapActionToProps)(AuthForm);
