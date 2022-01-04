function adduser() {
    player1_name = document.getElementById("playe1_name").value;
    player2_name = document.getElementById("player2_name").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location.replace("game_page.html");
} 