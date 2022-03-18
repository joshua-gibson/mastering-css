import NavBar from "./components/NavBar";
import ContentContainer from "./components/ContentContainer";
import ContentBox from "./components/ContentBox";
import ImageContainer from "./components/ImageContainer";

const AnimationsDemo = () => {
  return (
    <div>
      <h1>Mastering CSS Training</h1>
      <NavBar classes="naviBar" />
      <ContentContainer classes="animationContainer">
        <ContentBox classes="fakeButton" header="I am a button" />
        <ImageContainer
          classes="rightArrowImage"
          imageName="right-arrow-icon.png"
        />
      </ContentContainer>
    </div>
  );
};

export default AnimationsDemo;
