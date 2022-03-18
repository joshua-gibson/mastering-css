import NavBar from "./components/NavBar";
import ContentContainer from "./components/ContentContainer";

const SVGDemo = () => {
  return (
    <div>
      <h1>Mastering CSS Training</h1>
      <NavBar classes="naviBar" />
      <ContentContainer classes="svgcontainer">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-1 0 27 25"
        >
          <g>
            <path
              id="outline"
              className="cls-2"
              d="M21.06,5a5.51,5.51,0,0,0-7.78,0h0L12.22,6.05,11.16,5a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06,7.78,7.78L20,13.83l1.06-1.06a5.5,5.5,0,0,0,0-7.78Z"
            />
            <path
              id="heartfill"
              className="cls-1"
              d="M21.06,5a5.51,5.51,0,0,0-7.78,0h0L12.22,6.05,11.16,5a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06,7.78,7.78L20,13.83l1.06-1.06a5.5,5.5,0,0,0,0-7.78Z"
            />
          </g>
        </svg>
      </ContentContainer>
    </div>
  );
};

export default SVGDemo;
