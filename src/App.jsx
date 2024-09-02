import { Result } from "postcss";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Output from "./components/Output";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Section />
          <Output />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
