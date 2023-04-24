import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NextPage from "./NextPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Next" element={<NextPage />} />
      </Routes>
    </>
  );
}

export default App;
