import TextHighlighter from "../TextHighlighter";

const SelectedWorkSection = () => {
  return (
    <div className="selected-works">
      <div className="selected-wrapper">
        <div className="image-preview">
          <div className="preview">
            <p>RAFAEL</p>
            <div className="img">
              <img src="/assets/rafael.jpeg" alt="" />
            </div>
            <p>OKENYI</p>
          </div>
        </div>
        <div className="big-texts">
          <TextHighlighter text={"selected"} style="200" />
          <TextHighlighter text={"works"} />
        </div>
        <h1 className="small-text">
          Built to perform, designed for practicality.
        </h1>
      </div>
    </div>
  );
};
export default SelectedWorkSection;
