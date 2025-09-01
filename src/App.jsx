import ContactUs from "./components/contactus/ContactUs";
import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/headers/Navbar";
import FooterSection from "./components/footer/FooterSection";
import About from "./pages/About";
import Careers from "./pages/Carrers";
import Features from "./pages/Features";

// import Training from "./pages/Training";

import ServicesPageLayout from "./pages/servicespage/ServicesPageLayout";
import SAPConsulting from "./pages/servicespage/sap-consulting";
import SAPImplementation from "./pages/servicespage/sap-implementation";
import SAPManaged from "./pages/servicespage/sap-managed";
import SAPEnterprise from "./pages/servicespage/sap-enterprise";
import SAPDataMigration from "./pages/servicespage/sap-data-migration";
import SAPStaffing from "./pages/servicespage/sap-staffing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicePage from "./pages/all-services-page/ServicePage";
import {
  BlockchainPageContent,
  CybersecurityPageContent,
  DevOpsAutomationPageContent,
  DigitalMarketingPageContent,
  GovernanceRiskCompliancePageContent,
  MicrosoftCOEPageContent,
  AgileITOpsPageContent,
  XAAPPageContent,
  CloudPageContent,
  AzureServicesPageContent,
  ApplicationServicesPageContent,
  CognitivePageContent,  
  AIPageContent,
  EnterpriseAutomationPageContent,
  ProductEngineeringPageContent,
  SalesforcePageContent,
  AwsServicesPageContent,
  TanzuServicesPageContent,
  InfrastructureServicesPageContent,
  LMSPageContent,
} from "./data/ServiceData";

import IndustryDetail from "./pages/industriespage/IndustryDetail";
import SustainableCorporate from "./pages/responsibility/SustainableCorporate";
import EnvironmentClimate from "./pages/responsibility/EnvironmentClimate";
import EthicsCompliance from "./pages/responsibility/EthicsCompliance";
import SocialPeopleImpact from "./pages/responsibility/SocialPeopleImpact";
import PeopleJoin from "./pages/people/PeopleJoin";
import PeopleValues from "./pages/people/PeopleValues";
import PeopleView from "./pages/people/PeopleView";
import Documents from "./components/documents/Documents";
import Csr from "./pages/Csr";
import CompanyPolicy from "./pages/website-policies/CompanyPolicy";
import TermsConditions from "./pages/website-policies/TermsConditions";
import CookiesPolicy from "./pages/website-policies/CookiesPolicy";
import ScrollToTop from "./components/ScrollToTop";

import {
  SapEwm,
  SapTm,
  SapYl,
  SapIbp,
  SapSppEspp,
  SapBusinessDataCloud,
  SapAnalyticsCloud,
  SapDatasphere,
  SapS4hana,
  SapBusinessSuite,
  RiseWithSap,
  GrowWithSap,
  SapSignavio,
  SapLeanIx,
  SapActivate,
  SapBtp,
  SapGreenToken,
  SapSct,
  SapSdx,
} from "./pages/sap-solution-page";
import Disclaimer from "./pages/website-policies/Disclmair";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/features" element={<Features />} />
        <Route path="/documents" element={<Documents />} />
        {/* <Route path="/training" element={<Training />} /> */}
        <Route path="/csr" element={<Csr />} />

        <Route path="/servicespage" element={<ServicesPageLayout />}>
          <Route path="sap-consulting" element={<SAPConsulting />} />
          <Route path="sap-implementation" element={<SAPImplementation />} />
          <Route path="sap-managed" element={<SAPManaged />} />
          <Route path="sap-enterprise" element={<SAPEnterprise />} />
          <Route path="sap-data-migration" element={<SAPDataMigration />} />
          <Route path="sap-staffing" element={<SAPStaffing />} />
          
          {/* SAP Solutions routes */}

          <Route path="sap-ewm" element={<SapEwm />} />
          <Route path="sap-tm" element={<SapTm />} />
          <Route path="sap-yl" element={<SapYl />} />
          <Route path="sap-ibp" element={<SapIbp />} />
          <Route path="sap-spp-espp" element={<SapSppEspp />} />
          <Route
            path="sap-business-data-cloud"
            element={<SapBusinessDataCloud />}
          />
          <Route path="sap-analytics-cloud" element={<SapAnalyticsCloud />} /> 
          <Route path="sap-datasphere" element={<SapDatasphere />} />
          <Route path="sap-s4hana" element={<SapS4hana />} />
          <Route path="sap-business-suite" element={<SapBusinessSuite />} />
          <Route path="rise-with-sap" element={<RiseWithSap />} />
          <Route path="grow-with-sap" element={<GrowWithSap />} />
          <Route path="sap-signavio" element={<SapSignavio />} />
          <Route path="sap-leanix" element={<SapLeanIx />} />
          <Route path="sap-activate" element={<SapActivate />} />
          <Route path="sap-btp" element={<SapBtp />} />
          <Route path="sap-green-token" element={<SapGreenToken />} />
          <Route path="sap-sct" element={<SapSct />} />
          <Route path="sap-sdx" element={<SapSdx />} />
        </Route>
        <Route
          path="/all-services-page/blockchain"
          element={<ServicePage serviceData={BlockchainPageContent} />}
        />
        <Route
          path="/all-services-page/cyber-security"
          element={<ServicePage serviceData={CybersecurityPageContent} />}
        />
        <Route
          path="/all-services-page/devopsautomationservices"
          element={<ServicePage serviceData={DevOpsAutomationPageContent} />}
        />
        <Route
          path="/all-services-page/digital-marketing"
          element={<ServicePage serviceData={DigitalMarketingPageContent} />}
        />
        <Route
          path="/all-services-page/governancerisk-compliance"
          element={
            <ServicePage serviceData={GovernanceRiskCompliancePageContent} />
          }
        />
        <Route
          path="/all-services-page/microsoft-coe"
          element={<ServicePage serviceData={MicrosoftCOEPageContent} />}
        />
        <Route
          path="/all-services-page/agileitopscontent"
          element={<ServicePage serviceData={AgileITOpsPageContent} />}
        />
        <Route
          path="/all-services-page/platforms-protocols-xaap"
          element={<ServicePage serviceData={XAAPPageContent} />}
        />
        <Route
          path="/all-services-page/cloud-content"
          element={<ServicePage serviceData={CloudPageContent} />}
        />
        <Route
          path="/all-services-page/azure-services-page"
          element={<ServicePage serviceData={AzureServicesPageContent} />}
        />
        <Route
          path="/all-services-page/application-services-content"
          element={<ServicePage serviceData={ApplicationServicesPageContent} />}
        />
        <Route
          path="/all-services-page/cognitive-page-content"
          element={<ServicePage serviceData={CognitivePageContent} />}
        />
        <Route
          path="/all-services-page/AI-page-content"
          element={<ServicePage serviceData={AIPageContent} />}
        />
        <Route
          path="/all-services-page/enterprise-automation-content"
          element={
            <ServicePage serviceData={EnterpriseAutomationPageContent} />
          }
        />
        <Route
          path="/all-services-page/product-engineering-content"
          element={<ServicePage serviceData={ProductEngineeringPageContent} />}
        />
        <Route
          path="/all-services-page/salesforce-page-content"
          element={<ServicePage serviceData={SalesforcePageContent} />}
        />
        <Route
          path="/all-services-page/aws-services-page-content"
          element={<ServicePage serviceData={AwsServicesPageContent} />}
        />
        <Route
          path="/all-services-page/tanzu-services-content"
          element={<ServicePage serviceData={TanzuServicesPageContent} />}
        />
        <Route
          path="/all-services-page/infrastructure-services-content"
          element={
            <ServicePage serviceData={InfrastructureServicesPageContent} />
          }
        />

        <Route
          path="/all-services-page/learning-management-system"
          element={<ServicePage serviceData={LMSPageContent} />}
        />

        {/* industries section routes */}
        <Route
          path="/industries-page/blockchain"
          element={<ServicePage serviceData={BlockchainPageContent} />}
        />
        {/* responsibility section routes */}
        <Route path="/industries/:industrySlug" element={<IndustryDetail />} />
        <Route
          path="/responsibility/sustainable-corporate"
          element={<SustainableCorporate />}
        />
        <Route
          path="/responsibility/environment-climate"
          element={<EnvironmentClimate />}
        />
        <Route
          path="/responsibility/ethics-compliance"
          element={<EthicsCompliance />}
        />
        <Route
          path="/responsibility/social-people-impact"
          element={<SocialPeopleImpact />}
        />
        {/* People routes */}
        <Route path="/people/people-join" element={<PeopleJoin />} />
        <Route path="/people/people-view" element={<PeopleView />} />
        <Route path="/people/people-values" element={<PeopleValues />} />

        {/* footer section  */}

        <Route path="/privacy-policy" element={<CompanyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}

export default App;
