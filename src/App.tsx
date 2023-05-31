import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import Plan from "./pages/plan";
import Service from "./pages/service";
import Footer from "./pages/footer";
import { Toaster } from "react-hot-toast";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Plan />
      <Home />
      <Service />
      <Footer />
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;
