const defaultState = {
  totalClicks: 0,
  humanAttacked: 0,
  AIAttacked: 0,
  winner: "",
};

export default function clickReducer(state = defaultState, action) {
  let { totalClicks, humanAttacked, AIAttacked, winner } = state;
  if (
    action.type === "HUMAN_CLICK" &&
    action.isTurn &&
    (action.symbol === "" || action.symbol === "*")
  ) {
    totalClicks++;
    if (action.symbol === "*") {
      humanAttacked++;
    }
    if (humanAttacked === 17) {
      winner = "human";
    }
    return {
      totalClicks: totalClicks,
      humanAttacked: humanAttacked,
      AIAttacked: AIAttacked,
      winner: winner,
    };
  }

  if (action.type === "AI_CLICK" && action.isTurn) {
    let attackedCount = 0;
    for (let i = 0; i < action.boardState.length; i++) {
      let row = action.boardState[i];
      for (let j = 0; j < row.length; j++) {
        if (
          action.boardState[i][j] === "X" ||
          action.boardState[i][j] === "V"
        ) {
          if (action.boardState[i][j] === "X") {
            attackedCount++;
          }
        }
      }
    }
    totalClicks++;
    // if (action.symbol === "*") {
    //   AIAttacked++;
    // }
    AIAttacked = attackedCount;
    if (AIAttacked === 17) {
      winner = "AI";
    }
    return {
      totalClicks: totalClicks,
      humanAttacked: humanAttacked,
      AIAttacked: AIAttacked,
      winner: winner,
    };
  }

  if (action.type === "RESET") {
    return defaultState;
  }
  return state;
}