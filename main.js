const topPlayed = [
  { name: "Game A", players: 12000 },
  { name: "Game B", players: 9500 },
  { name: "Game C", players: 8700 },
  { name: "Game D", players: 8200 },
  { name: "Game E", players: 7900 },
  { name: "Game F", players: 7600 },
  { name: "Game G", players: 7300 },
  { name: "Game H", players: 7000 },
  { name: "Game I", players: 6800 },
  { name: "Game J", players: 6500 }
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
