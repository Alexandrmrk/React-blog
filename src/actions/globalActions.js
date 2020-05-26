import preStorageProcessing from "../utils/preStorageProcessing";
import ActionTypes from "./ActionTypes";

export default {

  [ActionTypes.setUserAction](user) {
    localStorage.setItem("user", preStorageProcessing.toString(user));
    return { type: ActionTypes.setUserAction, payload: user };
  },
  unsetUserAction() {
    localStorage.removeItem("user");
    return { type: "unsetUserAction" };
  },
  writePosts(posts) {
    return {
      type: "writePosts",
      payload: posts,
    };
  },
};
