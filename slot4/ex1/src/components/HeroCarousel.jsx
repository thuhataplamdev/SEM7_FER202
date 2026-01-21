import { Carousel } from "react-bootstrap";
import { banners } from "../data/bannerImages";

export default function HeroCarousel() {
  return (
    <section id="home">
      <Carousel fade interval={3000} pause="hover">
        {banners.map((b, idx) => (
          <Carousel.Item key={idx}>
            <div className="overflow-hidden mt-1" style={{ maxHeight: "420px" }}>
              <img
                className="d-block w-100"
                src={b.img}
                alt={b.title}
              />
            </div>

            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" />

            {/* <Carousel.Caption className="top-50 start-50 translate-middle p-0"> */}
             <Carousel.Caption className="hero-caption">
              <h2 className="fw-bold fs-2">{b.title}</h2>
              <p className="mb-0 small">{b.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
