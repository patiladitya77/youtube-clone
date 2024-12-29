import Body from './Components/Body';
import Header from "./Components/Header";
import './App.css';
import { Provider } from 'react-redux';
import appStore from "./Utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
