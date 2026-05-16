import "./App.css";
import HeroSection from "./components/HeroSection";
import WhyThisMattersTabs from "./components/WhyThisMattersTabs";
import ArchitectureFlow from "./components/ArchitectureFlow";
import ResultsTable from "./components/ResultsTable";
import CaseExplorer from "./components/CaseExplorer";
import FutureScope from "./components/FutureScope";
import ParameterDefinition from "./components/ParameterDefinition";

export default function App() {
  return (
    <div className="app-shell">
      <HeroSection />
      <WhyThisMattersTabs />
      
      <ArchitectureFlow />
      <ResultsTable />
      <CaseExplorer />
      <FutureScope />
      <ParameterDefinition/>
    </div>
  );
}