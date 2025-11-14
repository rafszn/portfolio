import ElasticCard from "../ElasticCard";
import StaggeredTextReveal from "../StaggeredTextReveal";

const ExpertiseSection = () => {
  return (
    <div className="expertise bg-[#1a1a1a]">
      <div className="wrapper">
        <div className="overview">
          <StaggeredTextReveal text="Hi, I'm Rafael, a Full-Stack Engineer passionate about building scalable, user-centric web applications. I work across modern JavaScript/TypeScript stacks, using frameworks, APIs, and databases to deliver clean, high-quality products. I’m also growing my expertise in cloud infrastructure, CI/CD, and containerization to support modern deployment workflows" />
          {/* <StaggeredTextReveal text="Hi, I'm Rafael, a Fullstack Software Developer. I love building engaging digital experiences with React, Node.js, and MongoDB. Problem-solving through code drives me, and I'm passionate about creating innovative solutions that make an impact." /> */}
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
                <p>• RESTful & GraphQL API Development</p>
                <p>• Database Design & Management (SQL & NoSQL)</p>
                <p>• Authentication, Authorization & Security Best Practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpertiseSection;
