import { lazy, Suspense } from "react";
import accountantImage from "../assets/images/accountant.jpeg";
import accountantAltImage from "../assets/images/accountant3.jpg";
import auditImage from "../assets/images/audit.jpg";
import Container from "../components/ui/Container";
import FloatingStats from "../components/ui/FloatingStats";
import DeferredSection from "../components/ui/DeferredSection";
import { formatText } from "../utils/formatText";

const ServicesSection = lazy(() => import("../components/services/ServicesSection"));
const TestimonialsSection = lazy(() =>
  import("../components/testimonials/TestimonialsSection")
);
const ContactSection = lazy(() => import("../components/contact/ContactSection"));

export default function Home() {
  return (
    <>
      <section id="home" className="hero hero--stunning">
        <Container className="hero__shell">
          <div className="hero__content">
            <div className="hero__intro">
              <p className="hero__eyebrow">
                Lagos, Nigeria • Compliance, tax & company registration
              </p>
              <span className="hero__pill">
                Tax Calculation • Business Registration • Property Survey
              </span>
            </div>

            <h1>{formatText("Compliance-first tax, company setup, and property survey solutions.")}</h1>

            <p className="hero__lede">
              <span className="brand">complypro</span> helps individuals and businesses navigate tax obligations,
              company registration, and property documentation with professional
              compliance guidance and accurate results.
            </p>

            <div className="hero__actions">
              <a href="#services" className="btn btn--primary">
                Explore Services
              </a>
              <a href="#contact" className="btn btn--ghost">
                Book Consultation
              </a>
            </div>

            <div className="hero__portrait-card">
              <img
                src={accountantAltImage}
                alt="Accounting consultant collaborating with a client"
              />
              <div className="hero__portrait-card-copy">
                <span>Personalised guidance</span>
                <strong>A boutique service experience for growing firms</strong>
              </div>
            </div>

            <div className="hero__feature-list" aria-label="Key value highlights">
              <div className="hero__feature-item">
                <span className="hero__feature-dot" aria-hidden="true" />
                Accurate tax calculations and filing guidance
              </div>
              <div className="hero__feature-item">
                <span className="hero__feature-dot" aria-hidden="true" />
                Business registration and company setup support
              </div>
              <div className="hero__feature-item">
                <span className="hero__feature-dot" aria-hidden="true" />
                Professional property surveys and documentation
              </div>
              <div className="hero__feature-item">
                <span className="hero__feature-dot" aria-hidden="true" />
                Compliance & regulatory advisory
              </div>
            </div>

            <div className="hero__trust-strip" aria-label="Business trust indicators">
              <article className="hero__trust-card">
                <strong>15+ Years</strong>
                <span>Hands-on finance and advisory experience</span>
              </article>
              <article className="hero__trust-card">
                <strong>Trusted Service</strong>
                <span>Accurate calculations and reliable guidance</span>
              </article>
              <article className="hero__trust-card">
                <strong>Full Support</strong>
                <span>Tax, business setup, and property solutions</span>
              </article>
            </div>
          </div>

          <div className="hero__visual" aria-label="Professional accounting hero imagery">
            <div className="hero__visual-glow hero__visual-glow--blue" aria-hidden="true" />
            <div className="hero__visual-glow hero__visual-glow--green" aria-hidden="true" />
            <div className="hero__visual-grid" aria-hidden="true" />

            <div className="hero__image-card">
              <div className="hero__image-badge">Tax & Business</div>
              <img
                src={accountantImage}
                alt="Accounting professional reviewing client financial information"
              />
              <div className="hero__image-card-caption">
                <span>Professional service</span>
                <strong>Tax calculations, business setup, and property surveys</strong>
              </div>
            </div>

            <div className="hero__floating-card hero__floating-card--top">
              <p>Tax Services</p>
              <strong>Accurate calculations</strong>
              <span>Professional tax computation and filing support for individuals and businesses.</span>
            </div>

            <div className="hero__floating-card hero__floating-card--bottom">
              <p>Business Setup</p>
              <strong>Company registration</strong>
              <span>Complete support for business formation and regulatory compliance.</span>
            </div>

            <div className="hero__snapshot-card">
              <img src={auditImage} alt="Audit preparation and compliance documentation" />
              <div className="hero__snapshot-copy">
                <span>Audit discipline</span>
                <strong>Prepared records for confident internal and external reviews</strong>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <FloatingStats />
        </Container>
      </section>

      <DeferredSection>
        <Suspense fallback={null}>
          <ServicesSection />
        </Suspense>
      </DeferredSection>
      <DeferredSection>
        <Suspense fallback={null}>
          <TestimonialsSection />
        </Suspense>
      </DeferredSection>
      <DeferredSection>
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </DeferredSection>
    </>
  );
}
