import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { NotFound } from "./pages/not-found";
import { Dashboard } from "./pages/dashboard";
import { Features } from "./pages/features";
import { HowItWorks } from "./pages/how-it-works";
import { Onboarding } from "./pages/onboarding";
import { Vision } from "./pages/vision";
import { WhyAaharya } from "./pages/why-aaharya";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/why-aaharya" element={<WhyAaharya />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
