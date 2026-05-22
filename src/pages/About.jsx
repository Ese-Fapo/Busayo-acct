import heroImage from "../assets/images/audit.jpg";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="section section--about">
      <Container className="about__grid">
        <div>
          <SectionTitle
            eyebrow="About us"
            title="Your Trusted Compliance Partner for Tax, Business & Property Services"
            subtitle="We combine professional compliance expertise with practical solutions to help individuals and businesses navigate tax, company registration, and property documentation."
          />
          <p>
            ComplyPro provides accurate tax calculations, complete business
            registration support, and professional property surveys. We help
            our clients stay compliant, set up businesses properly, and make
            informed decisions about their real estate investments.
          </p>
        </div>

        <div className="about__image-wrap">
          <img
            src={heroImage}
            alt="Business consultancy and accounting team"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Container>
    </section>
  );
}
