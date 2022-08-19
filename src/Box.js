const Box = (props) => {
  const style = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  return (
    <div>
      <div>Box</div>
      <button style={style} onClick={props.toggle}>
        {props.id}
      </button>
    </div>
  );
};

export default Box;
