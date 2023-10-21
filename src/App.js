import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import UpperMenu from "./Components/UpperMenu";
import TypingBox from "./Components/TypingBox";
import BottomMenu from "./Components/BottomMenu";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <UpperMenu></UpperMenu>
      <TypingBox></TypingBox>
      <BottomMenu></BottomMenu>
      <Footer></Footer>
    </div>
  );
}

export default App;
