import React from "react";

const PlayerList = ({players}) => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="womens">
          {(players || []).map(player => (
          <div id={player.id} className="playerCard">
          <h3>{player.name}</h3>
          <p>Country: {player.country}</p>
          <p>Searches: {player.searches}</p>
            </div>
          ))}
        </div>
  );
};

export default PlayerList;
