import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Certifications</p>
          <h2 className="sections--heading">Certificates Earned</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <img src={item.src} width={300} />
          </div>
        ))}
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial2?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <img src={item.src} width={300} />
          </div>
        ))}
      </div>
    </section>
  );
} 
