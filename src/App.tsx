import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import ThankyouPage from "./components/ThankYouPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/thankyou" element={<ThankyouPage />} />
    </Routes>
  );
};

export default App;
