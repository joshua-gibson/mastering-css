import ContentBox from "./components/ContentBox";
import NavBar from "./components/NavBar";
import ContentContainer from "./components/ContentContainer";
import {
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
} from "./components/text";

const ScrollSnapDemo = () => {
  return (
    <div>
      <h1>Mastering CSS Training</h1>
      <NavBar classes="naviBar" />
      <ContentContainer classes="container">
        <ContentBox
          classes="contentBox"
          header="What is the Matrix?"
          body={text1}
        />
        <ContentBox
          classes="contentBox"
          header="I can only show you the door."
          body={text2}
        />
        <ContentBox
          classes="contentBox"
          header="You take the blue pill."
          body={text3}
        />
        <ContentBox
          classes="contentBox"
          header="You take the red pill."
          body={text4}
        />
        <ContentBox
          classes="contentBox"
          header="I know kung fu."
          body={text5}
        />
        <ContentBox
          classes="contentBox"
          header="Choice is an illusion."
          body={text6}
        />
        <ContentBox
          classes="contentBox"
          header="The body cannot live without the mind."
          body={text7}
        />
      </ContentContainer>
    </div>
  );
};

export default ScrollSnapDemo;
