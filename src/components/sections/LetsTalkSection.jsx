import Wave from "react-wavify";
import StyledButton from "../StyledButton";

const LetsTalkSection = ({ text }) => {
  return (
    <div className="bg-[#1a1a1a]">
      <Wave
        fill="#242424"
        paused={false}
        style={{ display: "flex", marginBottom: "-1rem" }}
        options={{
          height: 50,
          amplitude: 55,
          speed: 0.25,
          points: 3,
        }}
      />
      <div className="lets-talk">
        <div className="wrapper">
          <div className="texts">
            <h2 className="title">Let&apos;s talk!</h2>
            <p className="web">{text}</p>
            <p className="last">Tell me about your next project.</p>
            <StyledButton text={"CONTACT"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LetsTalkSection;
