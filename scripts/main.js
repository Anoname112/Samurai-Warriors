var filter;
var game;
var container;
var popup;
var mode;
var isGuideMode = false;

var progress;

window.onload = function () {
	filter = document.getElementById('filter');
	game = document.getElementById('game');
	container = document.getElementById('container');
	popup = document.getElementById('popup');
	popup.onclick = () => {
		popup.style.display = 'none';
	};
	mode = document.getElementById('mode');
	
	if (localStorage['progress']) progress = JSON.parse(localStorage['progress']);
	else {
		progress = {};
		for (var i in headers) {
			var gameArr = [];
			for (var j in warriors) {
				if (getWarriorGameList(j).includes(i)) {
					var warriorArr = [];
					for (var j = 0; j < headers[i].length; j++) warriorArr.push(false);
					gameArr.push(warriorArr);
				}
			}
			progress[i] = gameArr;
		}
		localStorage['progress'] = JSON.stringify(progress);
	}
	
	filter.focus();
	changeMode();
}

function changeMode () {
	isGuideMode = !isGuideMode;
	
	if (isGuideMode) mode.innerHTML = guideSvg;
	else mode.innerHTML = checkboxSvg;
	
	render();
}

function getWarriorGameList (name) {
	var games = [];
	for (var i = 0; i < warriors[name].length; i++) if (!games.includes(warriors[name][i].Game)) games.push(warriors[name][i].Game);
	return games;
}

function eleColor (color) {
	switch (color) {
		case 'Fire': return '#9F0000';
		case 'Lightning': return '#706D00';
		case 'Ice': return '#2534C0';
		case 'Wind': return '#167928';
		case 'Demon': return '#771C9C';
	}
	return '#000000';
}

function showGuide (warrior, weapon) {
	popup.innerHTML = `<div class="message">
			<div class="name">` + warriors[warrior][weapon].Name + `</div>
			<div class="stage">` + warriors[warrior][weapon].Stage + `</div>
			<div class="requirement">` + warriors[warrior][weapon].Requirement + `</div>
		</div>`;
	popup.style.display = '';
}

function check (e) {
	var id = e.target.id.split(sprt);
	progress[id[0]][id[1]][id[2]] = document.getElementById(e.target.id).checked;
	localStorage['progress'] = JSON.stringify(progress);
}

function render () {
	popup.style.display = 'none';
	
	var str = ``;
	if (isGuideMode) {
		for (var i in warriors) {
			if (i.toLowerCase().includes(filter.value.toLowerCase())) {
				// Warrior's name
				str += `<div class="warrior">
					<div>
						<div class="name">` + i + `</div>
					</div>`;
				for (var j = 0; j < warriors[i].length; j++) {
					if (game.value == 'All' || game.value == warriors[i][j].Game) {
						// Warrior's weapons
						str += `<div class="weapon" onclick="showGuide('` + i + `', ` + j + `)">
								<div>
									<div class="wName">
										<span class="tag">` + warriors[i][j].Game + `</span> ` + warriors[i][j].Name + `</div>
								</div>
								<div class="wDesc">
									<div class="wImage">
										<img src="image/` + warriors[i][j].Game + sprt + i + sprt + warriors[i][j].Rank + `.webp" alt="` + warriors[i][j].Name + `" title="` + i + ` ` + warriors[i][j].Rank + `th Weapon">
									</div>
									<div style="color: ` + eleColor(warriors[i][j].Element) + `;"><b>` + warriors[i][j].Element + `</b></div>
									Base Attack: ` + warriors[i][j].Base + `
								</div>
								<div>
									<div class="stats">`;
						for (var k = 0; k < warriors[i][j].Stats.length; k++) {
							// Weapon's stats
							str += `<div class="stat">` + warriors[i][j].Stats[k] + `</div>`;
						}
						str += `</div>
								</div>
							</div>`;
					}
				}
				str += `</div>`;
			}
		}
	}
	else {
		for (var i in headers) {
			if (game.value == 'All' || game.value == i) {
				str += `<table><tr><th>` + i + `</th>`;
				for (var j = 0; j < headers[i].length; j++) {
					str += `<td>` + headers[i][j] + `</td>`;
				}
				str += `</tr>`;
				var index = 0;
				for (var j in warriors) {
					if (getWarriorGameList(j).includes(i)) {
						str += `<tr><td>` + j + `</td>`;
						for (var k = 0; k < headers[i].length; k++) {
							str += `<td align="center"><input type="checkbox" id="` + i + sprt + index + sprt + k + `" onchange="check(event)"` + (progress[i][index][k] ? ` checked` : ``) + `></td>`;
						}
						str += `</tr>`;
						index++;
					}
				}
				str += `</table>`;
			}
		}
	}
	
	container.innerHTML = str;
}
