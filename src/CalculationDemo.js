import ContentBox from "./components/ContentBox";
import NavBar from "./components/NavBar";
import ContentContainer from "./components/ContentContainer";

const CalculationDemo = () => {
  return (
    <div>
      <h1>Mastering CSS Training</h1>
      <NavBar classes="naviBar" />
      <ContentContainer classes="containerB">
        <ContentBox classes="contentBoxB" header="Hi!" body="There!" />
      </ContentContainer>
    </div>
  );
};

export default CalculationDemo;
