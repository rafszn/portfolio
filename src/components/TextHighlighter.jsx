import useLetterColorAnimation from "../lib/hooks/useLetterColorAnimation";

const TextHighlighter = ({ text, style = "bold" }) => {
  useLetterColorAnimation({ text });

  return (
    <div className="text-highlighter">
      <div className="title">
        {text.split("").map((char, index) => (
          <span key={index} className="letter" style={{ fontWeight: style }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};
export default TextHighlighter;
