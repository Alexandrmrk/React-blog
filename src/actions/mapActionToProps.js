import actions from "./actions";
import ActionTypes from "./ActionTypes";

export default (dispatch) => ({
  setUserAction: (user) => {
    dispatch(actions.setUserAction(user));
  },
  unsetUserAction: () => {
    dispatch(actions.setUserAction());
  },
  updateActiveButtonIdAction: (id) => {
    dispatch(actions.updateActiveButtonIdAction(id));
  },
  writePosts: (posts) => {
    dispatch(actions.writePosts(posts));
  },
  [ActionTypes.toggleEditorAction]: ()=>dispatch(actions.toggleEditorAction())
});
