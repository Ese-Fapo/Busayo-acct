import { Star } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import testimonials from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section section--testimonials">
      <Container>
        <SectionTitle
          eyebrow="Client Reviews"
          title="Trusted by Clients Across Nigeria"
          subtitle="Real feedback from clients who use our tax, business registration, and property survey services."
          align="center"
        />

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <div className="testimonial-card__header">
                <div className="testimonial-card__avatar" aria-hidden>
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </div>

                <div className="testimonial-card__meta">
                  <div className="testimonial-card__row">
                    <h3>{item.name}</h3>
                    <div className="testimonial-card__google" aria-label="Google review">
                      <span>G</span>
                    </div>
                  </div>

                  <p className="testimonial-card__company">
                    {item.company} <span className="testimonial-card__time">· {item.timeAgo}</span>
                  </p>
                </div>
              </div>

              <div className="testimonial-card__stars" aria-label={`${item.rating} star review`}>
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={`${item.name}-${index}`} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="testimonial-card__text">“{item.text}”</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
