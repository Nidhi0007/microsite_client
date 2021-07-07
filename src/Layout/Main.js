import React from "react";
import SectionEntry from "./SectionEntry";
import MidSection from "./MidSection";
import MidfourSection from "./MidfourSection";
import AllBooks from "./AllBooks";
import QuestionLayout from "../Components/Questions/QuestionLayout";
import { productDetails3 } from "../Components/ImagePanel/ImagePanelData";
import { questions } from "../Components/Questions/questionsData";
function Main() {
  return (
    <div className="App">
      <SectionEntry />
      <MidSection />
      <MidfourSection />
      <AllBooks data={productDetails3} />
      <QuestionLayout data={questions} />
    </div>
  );
}

export default Main;
