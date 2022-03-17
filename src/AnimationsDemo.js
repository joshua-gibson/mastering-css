import NavBar from "./components/NavBar";
import ContentContainer from "./components/ContentContainer";
import ContentBox from "./components/ContentBox";

const AnimationsDemo = () => {
  return (
    <div>
      <h1>Mastering CSS Training</h1>
      <NavBar classes="naviBar" />
      <ContentContainer classes="containerC">
        <ContentBox classes="fakeButton" header="I am a button" />
      </ContentContainer>
    </div>
  );
};

export default AnimationsDemo;
