import InfoBox from "./InfoBox";

function Image(props) {
  const styling = props.style && {
    ...props.style,
  };

  return (
    <div className="position-relative">
      <img
        src={props.src}
        alt={props.alt}
        title={props.title}
        className={props.className}
        style={styling}
      />
      <InfoBox>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis
        finibus ante vel semper. Nunc est enim, suscipit non rhoncus ut,
        hendrerit non felis. Morbi rhoncus mattis elit ac placerat. Pellentesque
        lacus libero, semper ut augue ut, iaculis fermentum risus. Vestibulum
        pretium, dui sit amet porta sollicitudin, mi sem vulputate augue,
        vehicula pellentesque ante nisi sed lectus. Proin tempor purus id nisl
        consequat sollicitudin. Aenean sed hendrerit turpis, id congue nulla.
        Integer et velit porta, faucibus lectus vel, dignissim ante. Vestibulum
        fringilla placerat metus eget egestas. Maecenas pretium ligula est, in
        pretium purus mollis eu.
      </InfoBox>
    </div>
  );
}

export default Image;
