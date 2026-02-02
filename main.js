const topPlayed = [
  { name: "Game A", players: 12000 },
  { name: "Game B", players: 9500 },
  { name: "Game C", players: 8700 }
];

function renderTopPlayed() {
  const list = document.getElementById("top-played");
  list.innerHTML = "";
  topPlayed.forEach(game => {
    const li = document.createElement("li");
    li.textContent = `${game.name} - ${game.players} players`;
    list.appendChild(li);
  });
}

window.onload = () => {
  renderTopPlayed();
};
