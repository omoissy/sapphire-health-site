import { useEffect } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import OurApproachPage from "@/pages/OurApproachPage";
import CareersPage from "@/pages/CareersPage";
import OilGasPage from "@/pages/industries/OilGasPage";
import CorporateInquiryPage from "@/pages/CorporateInquiryPage";
import CaseStudiesPage from "@/pages/CaseStudiesPage";
import InsightsPage from "@/pages/InsightsPage";

function ScrollToHash() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return null;
}

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FAFBFC] px-4 text-center">
      <div className="max-w-md">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#9E3C34]">
          Page Not Found
        </p>
        <h1 className="mb-4 text-3xl font-bold text-[#4B1E1B]">
          This page is not available.
        </h1>
        <p className="mb-6 text-gray-600">
          Return to Sapphire Health Services Limited to request medical support, explore services, or contact the team.
        </p>
        <Link href="/">
          <span className="inline-flex rounded-md bg-[#4B1E1B] px-5 py-3 text-sm font-semibold text-white hover:bg-[#9E3C34]">
            Back to Home
          </span>
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route path="/our-approach" component={OurApproachPage} />
        <Route path="/careers" component={CareersPage} />
        <Route path="/industries/oil-gas" component={OilGasPage} />
        <Route path="/corporate-inquiry" component={CorporateInquiryPage} />
        <Route path="/case-studies" component={CaseStudiesPage} />
        <Route path="/insights" component={InsightsPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
