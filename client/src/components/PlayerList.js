import React from "react";

const PlayerList = ({players}) => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="players">
          {(players || []).map(player => (
          <div data-testid={player.name} id={player.id} className="playerCard">
          <h3>{player.name}</h3>
          <p>Country: {player.country}</p>
          <p>Searches: {player.searches}</p>
            </div>
          ))}
        </div>
  );
};

export default PlayerList;
