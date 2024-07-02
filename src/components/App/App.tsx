import "../App/App.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";

export const API_URL = "https://my-portfolio-api-coral.vercel.app";
// export const API_URL = "http://localhost:3030";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
