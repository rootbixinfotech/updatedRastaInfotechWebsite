// Shared utility for generating service and industry paths

const serviceRoutes = {
  "sap consulting services": "/servicespage/sap-consulting",
  "blockchain": "/all-services-page/blockchain",
  "cyber security": "/all-services-page/cyber-security",
  "devops automation services": "/all-services-page/devopsautomationservices",
  "digital marketing": "/all-services-page/digital-marketing",
  "governance risk compliance": "/all-services-page/governancerisk-compliance",
  "microsoft coe": "/all-services-page/microsoft-coe",
  "agile it operations": "/all-services-page/agileitopscontent",
  "platforms protocols - xaap": "/all-services-page/platforms-protocols-xaap",
  "cloud": "/all-services-page/cloud-content",
  "azure services": "/all-services-page/azure-services-page",
  "application services": "/all-services-page/application-services-content",
  "cognitive": "/all-services-page/cognitive-page-content",
  "ai": "/all-services-page/AI-page-content",
  "enterprise automation": "/all-services-page/enterprise-automation-content",
  "product-engineering-services": "/all-services-page/product-engineering-content",
  "salesforce consulting and services coe": "/all-services-page/salesforce-page-content",
  "aws services": "/all-services-page/aws-services-page-content",
  "vmware tanzu services": "/all-services-page/tanzu-services-content",
  "infrastructure services": "/all-services-page/infrastructure-services-content",
  // Add more special cases here if needed
};

function normalizeTitle(title) {
  return title
    .toLowerCase()
    .replace(/[,&]/g, "")
    .replace(/\s+/g, " ")
    .trim();

   
}

export function getServicePath(title) {
  const normalized = normalizeTitle(title);
  if (serviceRoutes[normalized]) {
    return serviceRoutes[normalized];
  }
  return (
    "/servicespage/" +
    title
      .toLowerCase()
      .replace(/[,&]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
  );
}

export function getIndustryPath(title) {
  return (
    "/industries/" +
    title
      .toLowerCase()
      .replace(/[,&]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
  );
} 