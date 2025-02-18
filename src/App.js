import "./App.css";

import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import CreateNotePage from "./Pages/CreateNotePage";
import EditNotePage from "./Pages/EditNotePage";

import { Routes, Route } from "react-router-dom";
import ArchivedNotePage from "./Pages/ArchiveNotePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/archives" element={<ArchivedNotePage />} />
      <Route path="/create-note" element={<CreateNotePage />} />
      <Route path="/notes/:id/edit" element={<EditNotePage />} />
    </Routes>
  );
}

export default App;
