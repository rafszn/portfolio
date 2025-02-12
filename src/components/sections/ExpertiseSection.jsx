import ElasticCard from "../ElasticCard";
import StaggeredTextReveal from "../StaggeredTextReveal";

const ExpertiseSection = () => {
  return (
    <div className="expertise bg-[#1a1a1a]">
      <div className="wrapper">
        <div className="overview">
          <StaggeredTextReveal text="Hi, I'm Rafael, a Fullstack Software Developer. I love building engaging digital experiences with React, Node.js, and MongoDB. Problem-solving through code drives me, and I'm passionate about creating innovative solutions that make an impact." />
        </div>
        <ElasticCard text="Why Raf?" path="/about" />
        <div className="exp">
          <div className="empty" />
          <div className="exp-text">
            <h1>FORTE</h1>
            <div className="lists">
              <div className="first-list">
                <p>• Bespoke web development</p>
                <p>• Modern Front-End Engineering with React</p>
                <p>• Animation Development & Interactive Experiences</p>
              </div>
              <div className="second-list">
                <p>• Shopify E-Comm Development & Customization</p>
                <p>
                  • Progressive Web App (PWA) Development & API Integrations
                </p>
                <p>• Performance optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpertiseSection;
