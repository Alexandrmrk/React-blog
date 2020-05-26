import React, { useEffect } from "react";
import styles from "./style.module.scss";
import Post from "./Post";
import { connect } from "react-redux";
import mapActionToProps from "../../../../../actions/mapActionToProps";
import axios from "axios";
import RoundButton from "../../../../common/RoundButton";
import Editor from "./Editor";
import { useSprings, animated, config } from "react-spring";

const PostSection = (props) => {
  const springs = useSprings(
    props.posts.length,
    props.posts.map((post) => ({ to:{transform: post.id%2 ? 'rotateY(0deg)' : 'rotateX(0deg)'}, from: {transform: post.id%2 ? 'rotateY(-90deg)' : 'rotateX(90deg)'}, delay: 250*post.id, config:  config.molasses }))
  );
  console.log(springs);
  const fetchPosts = async () => {
    try {
      const { data } = await axios.get("http://localhost:7777/api/posts");
      props.writePosts(data);
    } catch (e) {
      console.error(e);
    }
  };

  const createPost = async () => {
    try {
      const {
        data: { post },
      } = await axios.post("http://localhost:8888/api/posts", {
        id: Math.random(),
        header: "new post",
        content: "content",
      });
      props.writePosts([post]);
    } catch (e) {
      console.error(e);
    }
  };

  // const deletePost = async (id) => {
  //   try {
  //     await axios({
  //       url: "http://localhost:8888/posts",
  //       method: "DELETE",
  //       param: { id },
  //     });
  //     props.writePosEditorts(id);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className={styles.wrapper}>
      {props.posts.map((post, index) => {
        return (
            <animated.div style={springs[index]}>
              <Post self={post} key={post.id} unfolding={props.posts.length < 3} />
            </animated.div>
        );
      })}
      <div style={{ position: "fixed", bottom: 30, right: 30 }}>
        <RoundButton func={props.toggleEditorAction} />
      </div>
      {props.isOpenedEditor && <Editor />}
    </section>
  );
};

export default connect(
  (store) => ({ ...store.interface, ...store.global }),
  mapActionToProps
)(PostSection);
