import "./styles/App.css";
import { GlobalFont } from "./styles/GlobalFont.styled";
import { Home } from "./pages/Home";
import { Login } from "./components/Login";
import { Aboutus } from "./pages/Aboutus";
import { Tutorial } from "./pages/Tutorial";
import { Port } from "./pages/Port";
import { CreatePortTutorial } from "./pages/CreatePortTutorial";
import { CreatePort } from "./pages/CreatePort";
import { FinanceSheetList } from "./pages/FinanceSheetList/FinanceSheetList";
import { FinanceSheet0 } from "./pages/FinanceSheet/FinanceSheet-trade0";
import { FinanceSheet1 } from "./pages/FinanceSheet/FinanceSheet-trade1";
import { FinanceSheet2 } from "./pages/FinanceSheet/FinanceSheet-trade2";
import { FinanceSheet3 } from "./pages/FinanceSheet/FinanceSheet-trade3";
import { FinanceSheet4 } from "./pages/FinanceSheet/FinanceSheet-trade4";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <div className="App">
      <GlobalFont />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Join" element={<Login />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/port" element={<Port />} />
          <Route
            path="/tutorial/create-port-tutorial"
            element={<CreatePortTutorial />}
          />
          <Route path="/port/create-port" element={<CreatePort />} />
          <Route path="/financeSheetlist" element={<FinanceSheetList />} />
          <Route path="" element={<FinanceSheet0 />} />
          <Route
            path="/financeSheetlist/financeSheet-trade0"
            element={<FinanceSheet0 />}
          />
          <Route
            path="/financeSheetlist/financeSheet-trade1"
            element={<FinanceSheet1 />}
          />

          <Route
            path="/financeSheetlist/financeSheet-trade2"
            element={<FinanceSheet2 />}
          />

          <Route
            path="/financeSheetlist/financeSheet-trade3"
            element={<FinanceSheet3 />}
          />

          <Route
            path="/financeSheetlist/financeSheet-trade4"
            element={<FinanceSheet4 />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
