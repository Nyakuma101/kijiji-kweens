import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyPage from "./pages/SurveyPage/SurveyPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/surveypage" element={<SurveyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
