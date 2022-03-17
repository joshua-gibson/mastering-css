import "./App.css";
import ContentBox from "./components/ContentBox";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContentContainer>
          <ContentBox header="bodrtyrtyrtyy" body="uiouiuo" />
          <ContentBox header="fghfh" body="ytutuy" />
        </ContentContainer>
      </header>
    </div>
  );
}

export default App;
