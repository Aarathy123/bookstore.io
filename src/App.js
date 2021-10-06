import logo from "./logo.svg";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import BookList from "./components/list";
import "./App.css";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <div className="App">
        <BookList />
      </div>
    </Provider>
  );
}

export default App;
