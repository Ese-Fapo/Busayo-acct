import accountantImage from "../assets/images/accountant.jpeg";
import accountantAltImage from "../assets/images/accountant3.jpg";
import auditImage from "../assets/images/audit.jpg";
import nairaImage from "../assets/images/nigerian-naira-money-bills-tax.webp";

const services = [
  {
    slug: "tax-calculation",
    title: "Tax Calculation",
    description:
      "Accurate tax computations for individuals and businesses to ensure compliance with Nigerian tax regulations.",
    fullExplanation:
      "We provide precise tax calculations including income tax, VAT, and withholding tax. Our service ensures you meet your tax obligations accurately while identifying legitimate deductions and credits to optimize your tax position.",
    iconKey: "calculator",
    image: accountantImage,
    imageAlt: "Tax calculation and computation documents",
  },
  {
    slug: "business-registration",
    title: "Business Registration",
    description:
      "Complete support for registering your business with CAC and obtaining all necessary licenses.",
    fullExplanation:
      "From company name reservation to CAC registration and tax identification, we guide you through the entire business setup process. We help with document preparation, regulatory filings, and ensure your business is fully compliant from day one.",
    iconKey: "briefcase",
    image: accountantAltImage,
    imageAlt: "Business registration and company incorporation documents",
  },
  {
    slug: "property-survey",
    title: "Property Survey",
    description:
      "Professional property surveys and boundary verification for real estate transactions.",
    fullExplanation:
      "Our property survey service helps verify land boundaries, assess property conditions, and provide detailed survey reports. Whether you're buying, selling, or developing property, we ensure you have accurate information for secure transactions.",
    iconKey: "home",
    image: auditImage,
    imageAlt: "Property survey and land boundary verification",
  },
  {
    slug: "tax-advisory",
    title: "Tax Advisory",
    description:
      "Smart tax planning and guidance to minimize risk while staying compliant with local regulations.",
    fullExplanation:
      "From tax planning to filing support, we guide your business on practical ways to remain compliant while optimizing obligations legally. We help you interpret regulatory updates, prepare accurate documentation, and reduce surprises during tax assessments.",
    iconKey: "receipt",
    image: nairaImage,
    imageAlt: "Tax advisory and regulation reference material",
  },
  {
    slug: "book-keeping-services",
    title: "Book-keeping Services",
    description:
      "Accurate daily transaction records to keep your books clean, compliant, and audit-ready.",
    fullExplanation:
      "Our bookkeeping service captures and reconciles day-to-day transactions, tracks receivables and payables, and keeps your records organized in real time. This reduces errors, prevents reporting delays, and ensures your business is always ready for tax filing, audits, and lender reviews.",
    iconKey: "book",
    image: accountantAltImage,
    imageAlt: "Bookkeeping team reviewing business records",
  },
  {
    slug: "payroll-management",
    title: "Payroll Management",
    description:
      "End-to-end payroll processing for teams of all sizes, including deductions and remittances.",
    fullExplanation:
      "We handle salary calculations, statutory deductions, remittances, and payroll reporting with consistency and confidentiality. Whether your team is small or growing, we help you pay staff on time, avoid compliance penalties, and maintain trust across your workforce.",
    iconKey: "wallet",
    image: nairaImage,
    imageAlt: "Payroll and salary planning with Nigerian naira notes",
  },
  {
    slug: "audit-services",
    title: "Audit Services",
    description:
      "Independent audit support to improve transparency, confidence, and operational efficiency.",
    fullExplanation:
      "Our audit support strengthens financial transparency by reviewing records, controls, and reporting practices. We identify gaps early, recommend corrective actions, and help your organization build stronger governance for stakeholders, lenders, and regulators.",
    iconKey: "shield",
    image: auditImage,
    imageAlt: "Audit documents and compliance review desk",
  },
  {
    slug: "business-consultancy",
    title: "Business Consultancy",
    description:
      "Practical business advisory to optimize structure, cash flow, and long-term growth.",
    fullExplanation:
      "Our consultancy support helps you solve growth bottlenecks, optimize processes, and strengthen financial discipline. We work with you on business model refinement, pricing clarity, and execution plans that are practical for your stage and market.",
    iconKey: "briefcase",
    image: accountantImage,
    imageAlt: "Business consultant presenting strategy plan",
  },
];

export default services;
