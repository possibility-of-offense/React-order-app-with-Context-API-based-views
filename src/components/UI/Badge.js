import classes from "./Badge.module.css";

function Badge(props) {
  return (
    <div className={`${classes.badge} ${props.className}`}>
      <span>{props.children}</span>
    </div>
  );
}

export default Badge;
