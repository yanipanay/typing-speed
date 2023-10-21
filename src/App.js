import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import UpperMenu from "./Components/UpperMenu";
import TypingBox from "./Components/TypingBox";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <UpperMenu></UpperMenu>
      <TypingBox></TypingBox>
    </div>
  );
}

export default App;
