import ActionTypes from "./ActionTypes";

export default {
  [ActionTypes.toggleEditorAction]() {
    return { type: ActionTypes.toggleEditorAction };
  },
};
