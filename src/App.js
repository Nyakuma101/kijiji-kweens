import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyPage from "./pages/SurveyPage/SurveyPage.js";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surveypage" element={<SurveyPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:profileId" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
