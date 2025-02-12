import AnimatedLogo from "./AnimatedLogo";
import Container from "./Container";
import { MdOutlineContentCopy } from "react-icons/md";

const DefaultFooter = () => {
  return (
    <>
      <Container>
        <footer className="footer">
          <div className="top">
            <AnimatedLogo />
            <div className="texts">
              <p className="custom">Custom designed and built websites.</p>
              <p className="custom">
                <a href="mailto:rafaelokenyi@gmail.com">
                  rafaelokenyi@gmail.com <MdOutlineContentCopy />{" "}
                </a>
              </p>
            </div>
          </div>

          <div className="bottom">
            <div className="wrapper">
              <div className="links">
                <p>Why Raf?</p>
                <p>Work</p>
                <p>Side Projects</p>
                <p>Contact</p>
              </div>
              <p className="love">❤️</p>
              <p className="p">Designed and built by Rafael.</p>
              <p className="p">
                Copyright © {new Date().getFullYear()} | All Rights Reserved
              </p>
            </div>
          </div>

          <div className="gradient" />
        </footer>
      </Container>
    </>
  );
};
export default DefaultFooter;
