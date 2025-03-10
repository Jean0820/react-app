import { useState } from "react";
import Button from "./Button";

const Game = () => {
  const handleChange = () => {
    setGame({ ...game, player: { ...game.player, name: "Jean Marc Mufind" } });
  };
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Daniel Kaboto",
    },
  });
  return (
    <>
      <h2 className="text-2xl">Player Name: {game.player.name}</h2>
      <Button name="Change" onClick={handleChange} type="btn-primary" />
    </>
  );
};

export default Game;
