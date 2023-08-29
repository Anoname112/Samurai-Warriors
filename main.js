var container;

const warriors = {
	'Yukimura': [
		{
			'Name': "Dragon's Tail",
			'Image': 'image/4th-Yukimura.webp',
			'Base': 45,
			'Element': 'Fire',
			'Stats': [
				"Life: 19",
				"Attack: 35",
				"Defense: 38",
				"Musou Charge: 32",
				"Ride: 18"
			]
		}, {
			'Name': "Tiger's Blood",
			'Image': 'image/5th-Yukimura.webp',
			'Base': 45,
			'Element': 'Lightning',
			'Stats': [
				"Musou: 35",
				"Attack: 36",
				"Defense: 34",
				"Ride: 35"
			]
		}
	],
	'Keiji': [
		{
			'Name': "Divine Mandible",
			'Image': 'image/4th-Keiji.webp',
			'Base': 50,
			'Element': 'Lightning',
			'Stats': [
				"Life: 18",
				"Attack: 53",
				"Musou Charge: 49",
				"Ride: 19"
			]
		}, {
			'Name': "Winged Serpent",
			'Image': 'image/5th-Keiji.webp',
			'Base': 50,
			'Element': 'Fire',
			'Stats': [
				"Musou: 40",
				"Dexterity: 32",
				"Musou Charge: 36",
				"Range: 35"
			]
		}
	]
};

function eleColor (color) {
	switch (color) {
		case 'Fire': return '#9F0000';
		case 'Lightning': return '#9F9F00';
	}
	return '#000';
}

window.onload = function () {
	container = document.getElementById('container');
	
	var str = ``;
	for (var i in warriors) {
		str += `<div class="warrior">
			<div>
				<div class="name">` + i + `</div>
			</div>`;
		for (var j = 0; j < warriors[i].length; j++) {
			str += `<div class="weapon">
					<div>
						<div class="wName">` + warriors[i][j].Name + `</div>
					</div>
					<div class="wDesc">
						<div class="wImage"><img src="` + warriors[i][j].Image + `"></div>
						<div style="color: ` + eleColor(warriors[i][j].Element) + `;"><b>` + warriors[i][j].Element + `</b></div>
						Base Attack: ` + warriors[i][j].Base + `
					</div>
					<div>
						<div class="stats">`;
			for (var k = 0; k < warriors[i][j].Stats.length; k++) {
				str += `<div class="stat">` + warriors[i][j].Stats[k] + `</div>`;
			}
			str += `</div>
					</div>
				</div>`;
		}
		str += `</div>`;
	}
	
	container.innerHTML = str;
}