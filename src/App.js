import React from "react";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/CresolHomePage";
import AboutPage from "./components/Pages/AboutPage";
import Workwithus from "./components/Workwithus/Workwithus";
import ExperincedProfessionals from "./components/Pages/ExperincedProfinalspage";
import Internships from "./components/Pages/FreshersPage";
import GradutesPage from "./components/Pages/GradutesPage";
import JobDescription from "./components/Workwithus/Common/Gradutes/JobDescription";
import FreshersJobdescription from "./components/Workwithus/Common/Freshers/FreshersJobdescription";
import ExperinceJd from "./components/Workwithus/Common/ExperincedProficinals/ExperinceJd";
import Casestudies from "./components/Casestudies/Casestudies";
import Tenalipage from "./components/Pages/case-studies/Tenalipage";
import HtsProjectpage from "./components/Pages/case-studies/HtsProjectpage";
import Amnet from "./components/Pages/case-studies/AmnetPage";
import RRPage from "./components/Pages/case-studies/RRPage";
import TalktoExpert from "./components/Pages/TalkToExpertPage";
import WebDevlopmentPage from "./components/Pages/services-pages/It-services-page.js/WebDevlopmentPage";
import Thanks from "./components/common/Thanks";
import Privacypolicy from "./components/PrivcyPolicy/Privacypolicy";
// import ScrollToTop from "./components/common/ScrollToTop";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/careers" element={<Workwithus />} />
        <Route path="/Internships" element={<Internships />} />
        <Route path="/GradutesPage" element={<GradutesPage />} />
        <Route path="/JobDescription" element={<JobDescription />} />
        <Route
          path="/FreshersJobdescription"
          element={<FreshersJobdescription />}
        />
        <Route path="/ExperinceJd" element={<ExperinceJd />} />
        <Route
          path="/ExperincedProfessionals"
          element={<ExperincedProfessionals />}
        />
        <Route path="/case-studies" element={<Casestudies />} />
        <Route path="/Tenalipage" element={<Tenalipage />} />
        <Route path="/HtsProjectpage" element={<HtsProjectpage />} />
        <Route path="/Amnet" element={<Amnet />} />
        <Route path="/RR-jewellary" element={<RRPage />} />

        <Route path="/contact-us" element={<TalktoExpert />} />
        <Route
          path="/web-developement-service"
          element={<WebDevlopmentPage />}
        />

        <Route path="/thanks" element={<Thanks />} />

        <Route path="/privacy-policy" element={<Privacypolicy />} />
      </Routes>
      <Footer />
      {/* <ScrollToTop /> */}
    </Router>
  );
};

export default App;
