import React from "react";

const PlayerList = ({players}) => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="players">
          {(players || [{"name":"Alex Morgan","country":"United States","searches":100,"id":0},{"name":"Megan Rapinoe","country":"United States","searches":99,"id":1}]).map(player => (
          <div data-testid="testID" id={player.id} className="playerCard">
          <h3>{player.name}</h3>
          <p>Country: {player.country}</p>
          <p>Searches: {player.searches}</p>
            </div>
          ))}
        </div>
  );
};

export default PlayerList;
