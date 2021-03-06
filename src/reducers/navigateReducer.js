import ActionTypes from "../actions/ActionTypes";

const initialState = {
  activeButtonId: 1,
};

export const navigateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.updateActiveButtonIdAction:
      return { ...state, activeButtonId: payload };
    default:
      return { ...state };
  }
};
