import { FaWhatsapp } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="socials">
      <span>
        {" "}
        <a href="https://wa.me/2347082201180" target="_blank">
          <FaWhatsapp />
        </a>
      </span>

      <span>
        {" "}
        <a href="https://www.linkedin.com/in/raphael-okenyi" target="_blank">
          <CiLinkedin />
        </a>
      </span>
      <span>
        {" "}
        <a href="https://github.com/rafszn" target="_blank">
          <FaGithub />
        </a>
      </span>
      <span>
        {" "}
        <a href="https://x.com/Raf_tech" target="_blank">
          <FaXTwitter />
        </a>
      </span>
    </div>
  );
};
export default Socials;
