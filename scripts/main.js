var filter;
var game;
var container;
var popup;
var mode;
var showGuide = false;

const headers = ['Level', 'Skill', 'Special', '4th', '5th'];
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
		progress = [];
		for (var i in warriors) {
			var arr = [];
			for (var j = 0; j < headers.length; j++) arr.push(false);
			progress.push(arr);
		}
		localStorage['progress'] = JSON.stringify(progress);
	}
	
	filter.focus();
	changeMode();
}

function changeMode () {
	showGuide = !showGuide;
	
	if (showGuide) mode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/></svg>';
	else mode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>';
	
	render();
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
	var id = e.target.id.split('-');
	progress[id[0]][id[1]] = document.getElementById(e.target.id).checked;
	localStorage['progress'] = JSON.stringify(progress);
}

function render() {
	popup.style.display = 'none';
	
	var str = ``;
	if (showGuide) {
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
										<img src="image/` + warriors[i][j].Game + `-` + i + `-` + warriors[i][j].Rank + `.webp" alt="` + warriors[i][j].Name + `" title="` + i + ` ` + warriors[i][j].Rank + `th Weapon">
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
		str += `<table><tr><td></td>`;
		for (var i = 0; i < headers.length; i++) {
			str += `<td>` + headers[i] + `</td>`;
		}
		str += `</tr>`;
		var index = 0;
		for (var i in warriors) {
			str += `<tr><td>` + i + `</td>`;
			for (var j = 0; j < headers.length; j++) {
				str += `<td align="center"><input type="checkbox" id="` + index + `-` + j + `" onchange="check(event)"` + (progress[index][j] ? ` checked` : ``) + `></td>`;
			}
			str += `</tr>`;
			index++;
		}
		str += `</table>`;
	}
	
	container.innerHTML = str;
}