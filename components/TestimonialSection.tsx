import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSection() {
  return (
    <section id="testimoni" className="section-padding bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <span className="section-eyebrow">
            <Quote size={16} aria-hidden="true" />
            Testimoni
          </span>
          <h2 className="section-title">Apa Kata Mereka?</h2>
          <p className="section-description mx-auto">
            Beberapa cerita dan apresiasi dari pelanggan serta tokoh yang telah mengenal Gingerfit+.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="rounded-[28px] border border-gingerfit-gray/80 bg-gingerfit-cream p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              data-aos="fade-up"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gingerfit-green shadow-sm">
                <Quote size={24} aria-hidden="true" />
              </div>
              <p className="text-sm leading-7 text-black/70">{testimonial.quote}</p>
              <div className="mt-6 border-t border-black/10 pt-5">
                <h3 className="text-base font-black text-gingerfit-black">{testimonial.name}</h3>
                <p className="mt-1 text-sm font-semibold text-black/60">
                  {[testimonial.role, testimonial.origin].filter(Boolean).join(" - ")}
                </p>
              </div>
              <div
                className="mt-5 h-1.5 w-16 rounded-full"
                style={{
                  backgroundColor:
                    index % 3 === 0 ? "#00A651" : index % 3 === 1 ? "#F5B51B" : "#28BDEB",
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
