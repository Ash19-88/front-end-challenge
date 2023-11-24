import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import ThankyouPage from "./components/ThankYouPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
      </Routes>
    </div>
  );
};

export default App;
