import {connect} from 'react-redux';
import { createStore} from 'redux';
import Editor from './components/Editor';
import Preview from './components/Preview';

const ADD = 'ADD';
const FULL_SCREEN = 'FULL_SCREEN';
const defaultState = {
    text: "",
    previewFullscreen: false,
    editorFullscreen: false

};
const addText = (newText) => {
  return {
    type: ADD,
    newText: newText
  }
};
const makeFullscreen = (componentName) => {
  return {
    type: FULL_SCREEN,
    componentName: componentName
  }
}

const textReducer = (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD:
      newState["text"] = action.newText;
      return newState;
    case FULL_SCREEN:
      if (action.componentName === "Editor") {
        newState["editorFullscreen"] = !newState.editorFullscreen; 
      } else if (action.componentName === "Preview") {
        newState["previewFullscreen"] = !newState.previewFullscreen;
      }
      return newState;
    default:
      return state;
  }
};

export const store = createStore(textReducer);
const mapStateToProps = (state) => {
    return {text: state.text, editorFullscreen: state.editorFullscreen, previewFullscreen: state.previewFullscreen}
};
const mapDispatchToProps = (dispatch) => {
return {
    addText: (text) => {
    dispatch(addText(text))
    },
    makeFullscreen: (componentName) => {
      dispatch(makeFullscreen(componentName))
    }
}
};
    
export const EditorContainer = connect(mapStateToProps, mapDispatchToProps)(Editor);
export const PreviewContainer = connect(mapStateToProps, mapDispatchToProps)(Preview);