var filter;
var game;
var container;
var popup;

const warriors = {
	'Yukimura': [
		{
			'Game': 'SW',
			'Name': "Susano",
			'Rank': 5,
			'Base': 47,
			'Element': 'Fire',
			'Stats': [
				"Life: 50",
				"Musou: 27",
				"Attack: 40",
				"Defense: 38"
			],
			'Stage': 'Siege of Osaka',
			'Requirement': 'Complete all the main missions without fail and then reach the score of 1000 kills. The supply team carrying the weapon will appear in the southwest and head towards the middle eastern gate.'
		}, {
			'Game': 'SW',
			'Name': "Rakan",
			'Rank': 6,
			'Base': 57,
			'Element': 'Fire',
			'Stats': [
				"Life: 50",
				"Attack: 65",
				"Horse Attack: 67",
				"Musou Charge: 65"
			],
			'Stage': 'Battle of Yamazaki',
			'Requirement': 'Complete the first mission, stop Keiji before he reaches Mount Tennoh and proceed to defeat Hanbei Takenaka and Kazumasu Takigawa without ally casualties. Then defeat Hideyoshi before he enters the main camp. Supply units will appear to the north-western entry and head south.'
		}, {
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
			'Game': 'SW',
			'Name': "Izanagi",
			'Rank': 5,
			'Base': 50,
			'Element': 'Lightning',
			'Stats': [
				"Life: 50",
				"Attack: 46",
				"Mounted Attack: 44",
				"Musou Charge: 25"
			],
			'Stage': 'Challenge of Kawanakajima',
			'Requirement': 'Defeat all the enemy officers and sub-officers by yourself. (note: if one of the sub-officers withdraws or any of the officers is defeated by one of your allies, the item is lost). The supply team will appear in the south-east and head north.'
		}, {
			'Game': 'SW',
			'Name': "Ni-Oh Pike",
			'Rank': 6,
			'Base': 60,
			'Element': 'Lightning',
			'Stats': [
				"Life: 50",
				"Musou: 30",
				"Attack: 75",
				"Defense: 56"
			],
			'Stage': 'Dance of Kyoto',
			'Requirement': 'Defeat 2,000 enemies.'
		}, {
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
			'Stage': 'Gaiden Stage',
			'Requirement': 'Keep Yukimura and Kanetugu alive. Within 10 minutes from start, defeat Hanzo, Musashi, Kojiro, Yoshihiro, and Masamune. Kojiro and Musashi spawns at south town area, Yoshihiro and Masamune spawns when you defeat Musashi and Kojiro, then move to SW gate.'
		}
	],
	'Nobunaga': [
		{
			'Game': 'SW',
			'Name': "Orochi",
			'Rank': 5,
			'Base': 48,
			'Element': 'Demon',
			'Stats': [
				"Musou: 45",
				"Attack: 26",
				"Mounted Attack: 49",
				"Attck Range: 35"
			],
			'Stage': 'Battle of Okehazama',
			'Requirement': 'Complete the first mission, but fail the second, then eliminate all the enemy officers. When Hanzo appears, reach the Imagawa camp before he does. The supply team will appear in the southwest.'
		}, {
			'Game': 'SW',
			'Name': "Dai-Rokuten",
			'Rank': 6,
			'Base': 58,
			'Element': 'Demon',
			'Stats': [
				"Musou: 50",
				"Attack: 67",
				"Ranged Defense: 66",
				"Musou Charge: 64"
			],
			'Stage': 'Rebellion at Honnōji',
			'Requirement': 'Save Oichi and Ranmaru, defeat Nohime and then defeat all the Akechi officers, while keeping both Oichi and Ranmaru alive. The supply team will appear in the southeastern corner.'
		}, {
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
			'Stage': 'Battle of Tedorigawa',
			'Requirement': 'Rescue all isolated allied units; Hideyoshi Hashiba, Toshiie Maeda, Nagahide Niwa, Katsuie Shibata and Kazumasa Takigawa.'
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
			'Stage': 'Stage 5',
			'Requirement': 'Within 12 minutes from start, rescue Nobutada Oda and get 400 KO.'
		}
	],
	'Mitsuhide': [
		{
			'Game': 'SW',
			'Name': "Futsu-Mitama",
			'Rank': 5,
			'Base': 47,
			'Element': 'Lightning',
			'Stats': [
				"Musou: 37",
				"Attack: 42",
				"Defense: 45",
				"Attack Range: 28"
			],
			'Stage': 'Battle of Yamazaki (Upper Path)',
			'Requirement': 'Take Mount Tennoh, defeat the officers to the south then defeat all the enemies on the mount quickly. The squad with the weapon will appear to the north of Hideyoshi\'s camp.'
		}, {
			'Game': 'SW',
			'Name': "Rasetsu",
			'Rank': 6,
			'Base': 57,
			'Element': 'Lightning',
			'Stats': [
				"Life: 45",
				"Defense: 69",
				"Speed: 47",
				"Attack Range: 73"
			],
			'Stage': 'Battle of Yamazaki (Lower Path)',
			'Requirement': 'Protect Mount Tennoh from the Oda attacks from the eastern and western fronts, defeat the Oda officers (Katsuie, Nagahide, Toshiie, Nobutada and Nobumori), route Hideyoshi Hashiba and persuade Ranmaru to defect. Once the fog is clear, wipe out all the enemies in the northen caves. The supply party will appear in the southeast and head towards the Oda main Camp.'
		}, {
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
			'Stage': 'Mitsuhide Unites Japan',
			'Requirement': 'When Kotarō Fūma appeared, have at least 4 or more of your units alive until "Akechi Army\'s advancing" message appears.'
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
			'Stage': 'Battle of Yamazaki',
			'Requirement': 'In 5 minutes defeat Mitsunari, take Mt. Tenno, and then defeat both Magoichi Saika and Nene.'
		}
	]
};

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
			<div><b>` + warriors[warrior][weapon].Stage + `</b></div>
			<div>` + warriors[warrior][weapon].Requirement + `</div>
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
									<img src="image/` + warriors[i][j].Game + `-` + i + `-` + warriors[i][j].Rank + `.webp" alt="` + i + ` ` + warriors[i][j].Rank + `th Weapon" title="` + i + ` ` + warriors[i][j].Rank + `th Weapon">
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