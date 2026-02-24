import "./App.css";
import GsapCore from "./01-gsapCore/GsapCore";
import RevealSections from "./02-scrollTrigger/RevealSections";
import CircleAnimation from "./03-svgAnimation/CircleAnimation";
import StringAnimation from "./03-svgAnimation/StringAnimation";
import CustomCursor from "./04-customCursor/CustomCursor";

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* <GsapCore /> */}
      {/* <RevealSections /> */}
      {/* <CircleAnimation /> */}
      {/* <StringAnimation /> */}
      <CustomCursor />
    </div>
  );
};

export default App;
