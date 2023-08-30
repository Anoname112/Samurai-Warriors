var filter;
var game;
var container;

const warriors = {
	'Yukimura': [
		{
			'Game': 'SW2',
			'Name': "Dragon's Tail",
			'Rank': 4,
			'Base': 45,
			'Element': 'Fire',
			'Stats': [
				"Life: 19",
				"Attack: 35",
				"Defense: 38",
				"Musou Charge: 32",
				"Ride: 18"
			],
			'Stage': 'Osaka Castle',
			'Requirement': 'Prevent the enemy from infiltrating the castle. Stop the cannons from firing and make sure that Masamune and Ina do not enter the main keep.'
		}, {
			'Game': 'SW2',
			'Name': "Tiger's Blood",
			'Rank': 5,
			'Base': 45,
			'Element': 'Lightning',
			'Stats': [
				"Musou: 35",
				"Attack: 36",
				"Defense: 34",
				"Ride: 35"
			],
			'Stage': 'Ueda Castle',
			'Requirement': 'Quickly escort Mino Kaneko to the flood gate. Defeat all three Hanzo clones on the map within three minutes.'
		}
	],
	'Keiji': [
		{
			'Game': 'SW2',
			'Name': "Divine Mandible",
			'Rank': 4,
			'Base': 50,
			'Element': 'Lightning',
			'Stats': [
				"Life: 18",
				"Attack: 53",
				"Musou Charge: 49",
				"Ride: 19"
			],
			'Stage': 'Battle of Hasedo',
			'Requirement': 'Defeat 1,000 enemies.'
		}, {
			'Game': 'SW2',
			'Name': "Winged Serpent",
			'Rank': 5,
			'Base': 50,
			'Element': 'Fire',
			'Stats': [
				"Musou: 40",
				"Dexterity: 32",
				"Musou Charge: 36",
				"Range: 35"
			],
			'Stage': '',
			'Requirement': ''
		}
	],
	'Nobunaga': [
		{
			'Game': 'SW2',
			'Name': "Demon Regalia",
			'Rank': 4,
			'Base': 46,
			'Element': 'Wind',
			'Stats': [
				"Musou: 18",
				"Attack: 35",
				"Defense: 16",
				"Musou Charge: 33",
				"Speed: 18",
				"Range: 19"
			],
			'Stage': '',
			'Requirement': ''
		}, {
			'Game': 'SW2',
			'Name': "Muramasa",
			'Rank': 5,
			'Base': 46,
			'Element': 'Demon',
			'Stats': [
				"Musou: 57",
				"Musou Charge: 39",
				"Range: 57"
			],
			'Stage': '',
			'Requirement': ''
		}
	],
	'Mitsuhide': [
		{
			'Game': 'SW2',
			'Name': "Gilded Talon",
			'Rank': 4,
			'Base': 45,
			'Element': 'Lightning',
			'Stats': [
				"Musou: 36",
				"Attack: 34",
				"Defense: 35",
				"Range: 37"
			],
			'Stage': '',
			'Requirement': ''
		}, {
			'Game': 'SW2',
			'Name': "Liberator",
			'Rank': 5,
			'Base': 45,
			'Element': 'Wind',
			'Stats': [
				"Attack: 39",
				"Speed: 35",
				"Dexterity: 36",
				"Range: 37"
			],
			'Stage': '',
			'Requirement': ''
		}
	]
};

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

window.onload = function () {
	filter = document.getElementById('filter');
	game = document.getElementById('game');
	container = document.getElementById('container');
	
	filterChanged();
	filter.focus();
}

function filterChanged() {
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
					str += `<div class="weapon">
							<div>
								<div class="wName">` + warriors[i][j].Name + `</div>
							</div>
							<div class="wDesc">
								<div class="wImage"><img src="image/` + warriors[i][j].Rank + `th-` + i + `.webp" alt="` + i + ` ` + warriors[i][j].Rank + `th Weapon"></div>
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