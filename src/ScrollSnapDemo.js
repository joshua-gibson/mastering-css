import ContentBox from "./components/ContentBox";
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

function ScrollSnapDemo() {
  return (
    <div>
      <ContentContainer>
        <ContentBox header="What is the Matrix?" body={text1} />
        <ContentBox header="I can only show you the door." body={text2} />
        <ContentBox header="You take the blue pill." body={text3} />
        <ContentBox header="You take the red pill." body={text4} />
        <ContentBox header="I know kung fu." body={text5} />
        <ContentBox header="Choice is an illusion." body={text6} />
        <ContentBox
          header="The body cannot live without the mind."
          body={text7}
        />
      </ContentContainer>
    </div>
  );
}

export default ScrollSnapDemo;
