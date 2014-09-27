var addBtn = document.getElementById("addName");
var startBtn = document.getElementById("startGame");
var name_text = document.getElementById("new_name");

var Game = function () {
	var players = {};
};

var players = [];
addBtn.onclick = function () {
	var i = players.length;
	var duplicate = false;
	while((i--) && (duplicate===false)) {
		if(name_text.value===players[i]) {
			duplicate = true;
		}
	}
	var p = document.getElementById("addPlayers").getElementsByTagName("p")[0];
	if(duplicate===true) {
		p.innerHTML = "That name has already been used!";
	} else {
		players.push(name_text.value);
		p.innerHTML = "";
		var new_element = document.createElement("li");
		new_element.innerHTML = name_text.value;
		document.getElementById("player_list").appendChild(new_element);
		var box = document.getElementById("addPlayers")
		var box_height = window.getComputedStyle(box).getPropertyValue("height");
		box_height=parseInt(box_height.slice(box_height.match(/p/)));
		box_height+=35;
		box.style.height = box_height + "px";
		console.log(box_height);
	}
	name_text.value="";
	return false;	
};

startBtn.onclick = function () {
	var form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/");

	var input = document.createElement("input");
	input.setAttribute("type", "hidden");
	input.setAttribute("name", "players");
	input.setAttribute("value", players.join("#$#%"));

	form.appendChild(input);
	form.submit();
	return false;
}

name_text.onkeypress = function(event) {
	if(event.which===13) addBtn.onclick();
}