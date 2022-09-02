import "./index.css";
import { useState } from "react";
import Headerhq from "../components/Headerhq/index";
import Summary from "../components/Summary/index";
import AsideGif from "../components/AsideGif/index";
import StoryHP from "../components/StoryHP/index";

const Story = () => {
  const [input, setInput] = useState("");

  return (
    <div className="StoryContainer">
      <Headerhq/>
      <div className="FlexRow">
      <div ClassName="SSContainer">
      <Summary/>
      <StoryHP/>
      </div>
      <AsideGif/>
      </div>
      


    </div>
  );
};

export default Story;