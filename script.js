function addPlayer() {
  let position = document.getElementById("playerPosition").value;
  let name = document.getElementById("playerName").value;
  let number = document.getElementById("playerNumber").value;

  if (position == "" || name == "" || number == "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }
  let confirmation = confirm(
    `Escalar o ${position} ${name} camisa ${number} ao time?`
  );

  if (confirmation) {
    let team = document.getElementById("teamList");
    let player = document.createElement("li");
    player.id = "player" + number;
    player.innerText = `${name}: ${position} (Camisa ${number})`;
    team.appendChild(player);

    document.getElementById("playerPosition").value = "";
    document.getElementById("playerName").value = "";
    document.getElementById("playerNumber").value = "";
  }
}

function removePlayer() {
  let number = document.getElementById("playerToRemove").value;
  let playerToRemove = document.getElementById("player" + number);

  if (number === "") {
    alert("Por favor, insira o número do jogador a ser removido.");
    return;
  }

  let confirmation = confirm(
    `Tem certeza que deseja remover o jogador ${playerToRemove.innerText}?`
  );

  if (confirmation) {
    document.getElementById("teamList").removeChild(playerToRemove);
    document.getElementById("playerToRemove").value = "";
  }
}
