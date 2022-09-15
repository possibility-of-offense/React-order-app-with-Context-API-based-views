function SmallWarningInfo(props) {
  return (
    <div className={props.className}>
      <small className="text-danger text-decoration-underline">
        {props.children}
      </small>
    </div>
  );
}

export default SmallWarningInfo;
