import classes from "./Button.module.css";

const Button = ({ texto, onClick }) => {
  return (
    <button className={classes.Button} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Button;