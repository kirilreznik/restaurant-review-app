import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/home-page/HomePage";
import DetailsPage from "./Pages/details-page/DetailsPage";
import UpdatePage from "./Pages/update-page/UpdatePage";
import "./Pages/home-page/HomePage.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/update/:id" element={<UpdatePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
