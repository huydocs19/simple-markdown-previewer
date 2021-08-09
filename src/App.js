import './App.css';
import { Provider } from 'react-redux';
import { EditorContainer, PreviewContainer, store } from './store';


function App() {
  return (
    <Provider store={store}>
      <EditorContainer />
      <PreviewContainer />
    </Provider>
  );
}

export default App;
