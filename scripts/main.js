var filter;
var game;
var container;
var popup;

window.onload = function () {
	filter = document.getElementById('filter');
	game = document.getElementById('game');
	container = document.getElementById('container');
	popup = document.getElementById('popup');
	popup.onclick = () => {
		popup.style.display = 'none';
	};
	
	filter.focus();
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

function render() {
	popup.style.display = 'none';
	
	var str = ``;
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
	
	container.innerHTML = str;
}