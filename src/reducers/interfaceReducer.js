import ActionTypes from "../actions/ActionTypes";

const initState = {
    isOpenedEditor: false
}

export const interfaceReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case ActionTypes.toggleEditorAction:
            return { ...state, isOpenedEditor: !state.isOpenedEditor };
        default:
            return { ...state };
    }
}