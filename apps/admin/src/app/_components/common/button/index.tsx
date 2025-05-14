interface Props {
  submit?: boolean;
  name: string;
  onClick?: () => void;
}
const Button = ({ submit, name, onClick }: Props) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      onClick={
        !!onClick
          ? (e) => {
              e.preventDefault();
              onClick();
            }
          : undefined
      }
    >
      {name}
    </button>
  );
};

export default Button;
