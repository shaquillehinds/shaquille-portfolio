import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.scss";

export default function ClientLogos() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section>
      <div className="custom-container">
        <div className="services-content content-width">
          <div className="clients-logos">
            <h4 className="scroll-animation" data-aos="fade-up">
              work with 60 + brands worldwide
            </h4>
            <div className="row align-items-center">
              <div className="col-md-3 scroll-animation" data-aos="fade-right">
                <img src="../assets/images/client-1.png" alt="Client" />
              </div>
              <div className="col-md-3 scroll-animation" data-aos="fade-up">
                <img src="../assets/images/client-2.png" alt="Client" />
              </div>
              <div className="col-md-3 scroll-animation" data-aos="fade-down">
                <img src="../assets/images/client-3.png" alt="Client" />
              </div>
              <div className="col-md-3 scroll-animation" data-aos="fade-left">
                <img src="../assets/images/client-4.png" alt="Client" />
              </div>
              <div className="col-md-3 scroll-animation" data-aos="fade-right">
                <img src="../assets/images/client-5.png" alt="Client" />
              </div>
              <div className="col-md-3 scroll-animation" data-aos="fade-up">
                <img src="../assets/images/client-6.png" alt="Client" />
              </div>
              <div className="col-md-3 scroll-animation" data-aos="fade-down">
                <img src="../assets/images/client-7.png" alt="Client" />
              </div>
              <div className="col-md-3 scroll-animation" data-aos="fade-left">
                <img src="../assets/images/client-8.png" alt="Client" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
