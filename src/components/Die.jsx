import {
  TbDice1,
  TbDice2,
  TbDice3,
  TbDice4,
  TbDice5,
  TbDice6,
} from "react-icons/tb";
export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#336699" : "white",
  };

  function images(a) {
    if (a === 1) {
      return <TbDice1 className="dice-image" />;
    }
    if (a === 2) {
      return <TbDice2 className="dice-image" />;
    }
    if (a === 3) {
      return <TbDice3 className="dice-image" />;
    }
    if (a === 4) {
      return <TbDice4 className="dice-image" />;
    }
    if (a === 5) {
      return <TbDice5 className="dice-image" />;
    }
    if (a === 6) {
      return <TbDice6 className="dice-image" />;
    }
  }

  return (
    <div className="dice-face" style={styles} onClick={props.onClick}>
      <h1>{images(props.value)}</h1>
    </div>
  );
}
