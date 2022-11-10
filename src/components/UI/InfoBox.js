import classes from "./InfoBox.module.css";

function InfoBox(props) {
  return (
    <div className={classes["info-box"]}>
      <p className="m-0">{props.children}</p>
    </div>
  );
}

export default InfoBox;
