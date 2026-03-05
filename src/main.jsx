import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Quiz from "./Components/quiz";
import { QuizProvider } from "./contexts/quizGlobalContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </StrictMode>
);