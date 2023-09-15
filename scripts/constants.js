const warriors = {
	'Yukimura': [
		{
			'Game': "SW",
			'Name': "Susano",
			'Rank': 5,
			'Base': 47,
			'Element': "Fire",
			'Stats': [
				"Life: 50",
				"Musou: 27",
				"Attack: 40",
				"Defense: 38"
			],
			'Stage': "Siege of Osaka",
			'Requirement': "Complete all the main missions and defeat 1,000 enemies. The supply team will appear in the southwest and head towards the middle eastern gate."
		}, {
			'Game': "SW",
			'Name': "Rakan",
			'Rank': 6,
			'Base': 57,
			'Element': "Fire",
			'Stats': [
				"Life: 50",
				"Attack: 65",
				"Horse Attack: 67",
				"Musou Charge: 65"
			],
			'Stage': "Battle of Yamazaki",
			'Requirement': "Complete the first mission, stop Keiji before he reaches Mount Tennō and proceed to defeat Hanbei Takenaka and Kazumasu Takigawa without ally casualties. Then defeat Hideyoshi before he enters the main camp. Supply units will appear to the north-western entry and head south."
		}, {
			'Game': "SW2",
			'Name': "Dragon's Tail",
			'Rank': 4,
			'Base': 45,
			'Element': "Fire",
			'Stats': [
				"Life: 19",
				"Attack: 35",
				"Defense: 38",
				"Musou Charge: 32",
				"Ride: 18"
			],
			'Stage': "Osaka Castle",
			'Requirement': "Prevent the enemy from infiltrating the castle. Stop the cannons from firing and make sure that Masamune and Ina do not enter the main keep."
		}, {
			'Game': "SW2",
			'Name': "Tiger's Blood",
			'Rank': 5,
			'Base': 45,
			'Element': "Lightning",
			'Stats': [
				"Musou: 35",
				"Attack: 36",
				"Defense: 34",
				"Ride: 35"
			],
			'Stage': "Ueda Castle",
			'Requirement': "Quickly escort Mino Kaneko to the flood gate. Defeat all three Hanzo clones on the map within three minutes."
		}
	],
	'Keiji': [
		{
			'Game': "SW",
			'Name': "Izanagi",
			'Rank': 5,
			'Base': 50,
			'Element': "Lightning",
			'Stats': [
				"Life: 50",
				"Attack: 46",
				"Horse Attack: 44",
				"Musou Charge: 25"
			],
			'Stage': "Challenge of Kawanakajima",
			'Requirement': "Defeat all the enemy officers and sub-officers by yourself. (note: if one of the sub-officers withdraws or any of the officers is defeated by one of your allies, the item is lost). The supply team will appear in the south-east and head north."
		}, {
			'Game': "SW",
			'Name': "Ni-Oh Pike",
			'Rank': 6,
			'Base': 60,
			'Element': "Lightning",
			'Stats': [
				"Life: 50",
				"Musou: 30",
				"Attack: 75",
				"Defense: 56"
			],
			'Stage': "Dance of Kyoto",
			'Requirement': "Defeat 2,000 enemies."
		}, {
			'Game': "SW2",
			'Name': "Divine Mandible",
			'Rank': 4,
			'Base': 50,
			'Element': "Lightning",
			'Stats': [
				"Life: 18",
				"Attack: 53",
				"Musou Charge: 49",
				"Ride: 19"
			],
			'Stage': "Battle of Hasedo",
			'Requirement': "Defeat 1,000 enemies."
		}, {
			'Game': "SW2",
			'Name': "Winged Serpent",
			'Rank': 5,
			'Base': 50,
			'Element': "Fire",
			'Stats': [
				"Musou: 40",
				"Dexterity: 32",
				"Musou Charge: 36",
				"Range: 35"
			],
			'Stage': "Tournament of Champions (Dream)",
			'Requirement': "Keep Yukimura and Kanetsugu alive. Within 10 minutes from start, defeat Hanzo, Musashi, Kojiro, Yoshihiro, and Masamune. Kojiro and Musashi spawns at south town area, Yoshihiro and Masamune spawns when you defeat Musashi and Kojiro."
		}
	],
	'Nobunaga': [
		{
			'Game': "SW",
			'Name': "Orochi",
			'Rank': 5,
			'Base': 48,
			'Element': "Demon",
			'Stats': [
				"Musou: 45",
				"Attack: 26",
				"Horse Attack: 49",
				"Attack Range: 35"
			],
			'Stage': "Battle of Okehazama",
			'Requirement': "Complete the first mission, but fail the second, then eliminate all the enemy officers. When Hanzo appears, reach the Imagawa camp before he does. The supply team will appear in the southwest."
		}, {
			'Game': "SW",
			'Name': "Dai-Rokuten",
			'Rank': 6,
			'Base': 58,
			'Element': "Demon",
			'Stats': [
				"Musou: 50",
				"Attack: 67",
				"Ranged Defense: 66",
				"Musou Charge: 64"
			],
			'Stage': "Rebellion at Honnōji",
			'Requirement': "Save Oichi and Ranmaru, defeat No and then defeat all the Akechi officers, while keeping both Oichi and Ranmaru alive. The supply team will appear in the southeastern corner."
		}, {
			'Game': "SW2",
			'Name': "Demon Regalia",
			'Rank': 4,
			'Base': 46,
			'Element': "Wind",
			'Stats': [
				"Musou: 18",
				"Attack: 35",
				"Defense: 16",
				"Musou Charge: 33",
				"Speed: 18",
				"Range: 19"
			],
			'Stage': "Battle of Tedorigawa",
			'Requirement': "Rescue all isolated allied units; Hideyoshi Hashiba, Toshiie Maeda, Nagahide Niwa, Katsuie Shibata and Kazumasa Takigawa."
		}, {
			'Game': "SW2",
			'Name': "Muramasa",
			'Rank': 5,
			'Base': 46,
			'Element': "Demon",
			'Stats': [
				"Musou: 57",
				"Musou Charge: 39",
				"Range: 57"
			],
			'Stage': "Incident at Honnoji",
			'Requirement': "Within 12 minutes, rescue Nobutada Oda and defeat 400 enemies."
		}
	],
	'Mitsuhide': [
		{
			'Game': "SW",
			'Name': "Futsu-Mitama",
			'Rank': 5,
			'Base': 47,
			'Element': "Lightning",
			'Stats': [
				"Musou: 37",
				"Attack: 42",
				"Defense: 45",
				"Attack Range: 28"
			],
			'Stage': "Battle of Yamazaki (Upper Path)",
			'Requirement': "Take Mount Tennō, defeat the officers to the south then defeat all the enemies on the mount quickly. The squad with the weapon will appear to the north of Hideyoshi's camp."
		}, {
			'Game': "SW",
			'Name': "Rasetsu",
			'Rank': 6,
			'Base': 57,
			'Element': "Lightning",
			'Stats': [
				"Life: 45",
				"Defense: 69",
				"Speed: 47",
				"Attack Range: 73"
			],
			'Stage': "Battle of Yamazaki (Lower Path)",
			'Requirement': "Protect Mount Tennō from the Oda attacks from the eastern and western fronts, defeat the Oda officers (Katsuie, Nagahide, Toshiie, Nobutada and Nobumori), defeat Hideyoshi and persuade Ranmaru to defect. Once the fog is clear, wipe out all the enemies in the northen caves. The supply party will appear in the southeast and head towards the Oda main Camp."
		}, {
			'Game': "SW2",
			'Name': "Gilded Talon",
			'Rank': 4,
			'Base': 45,
			'Element': "Lightning",
			'Stats': [
				"Musou: 36",
				"Attack: 34",
				"Defense: 35",
				"Range: 37"
			],
			'Stage': "Mitsuhide Unites Japan",
			'Requirement': "When Kotaro Fuma appeared, have at least 4 or more of your units alive until Akechi army's advancing message appears."
		}, {
			'Game': "SW2",
			'Name': "Liberator",
			'Rank': 5,
			'Base': 45,
			'Element': "Wind",
			'Stats': [
				"Attack: 39",
				"Speed: 35",
				"Dexterity: 36",
				"Range: 37"
			],
			'Stage': "Battle of Yamazaki",
			'Requirement': "In 5 minutes defeat Mitsunari, take Mt. Tennō, and then defeat both Magoichi Saika and Nene."
		}
	],
	'Goemon': [
		{
			'Game': "SW",
			'Name': "Takemikazuchi",
			'Rank': 5,
			'Base': 49,
			'Element': "Lightning",
			'Stats': [
				"Life: 49",
				"Ranged Defense: 27",
				"Speed: 49",
				"Agility: 36"
			],
			'Stage': "Infiltration at Osaka",
			'Requirement': "Take all the treasures on the first floor. On the second floor complete the mission of exploring every room in less than five minutes. The weapon will be in a box near the exit to the third floor."
		}, {
			'Game': "SW",
			'Name': "Obliterator",
			'Rank': 6,
			'Base': 59,
			'Element': "Lightning",
			'Stats': [
				"Life: 49",
				"Attack: 73",
				"Speed: 50",
				"Attack Range: 55"
			],
			'Stage': "Infiltration at Gifu",
			'Requirement': "Take all the treasures (items and weapons) from the first three floors. On the fourth floor, defeat all the three officers except for Mitsuhide. After a short time, Nagayoshi Mori will appear. Defeat him to obtain the weapon."
		}
	],
	'Kenshin': [
		{
			'Game': "SW",
			'Name': "Murakumo",
			'Rank': 5,
			'Base': 48,
			'Element': "Ice",
			'Stats': [
				"Life: 50",
				"Ranged Attack: 47",
				"Horse Attack: 41",
				"Speed: 45"
			],
			'Stage': "Final Showdown at Kawanakajima",
			'Requirement': "Conquer Kaizu Castle, defeat Hanzo before he reaches your camp and then defeat Yukimura before he retakes Kaizu Castle. When the mission appear, charge into the Takeda Camp in less than a minute."
		}, {
			'Game': "SW",
			'Name': "Bishamonten",
			'Rank': 6,
			'Base': 58,
			'Element': "Ice",
			'Stats': [
				"Life: 50",
				"Attack: 69",
				"Horse Attack: 72",
				"Attack Range: 62"
			],
			'Stage': "Siege of Gifu",
			'Requirement': "Once inside the castle, clear the first three floors quickly. The chest containing the weapon will appear outsite the main chamber in the fourth floor."
		}, {
			'Game': "SW2",
			'Name': "Frozen Flame",
			'Rank': 4,
			'Base': 46,
			'Element': "Ice",
			'Stats': [
				"Musou: 19",
				"Attack: 50",
				"Speed: 38",
				"Range: 34"
			],
			'Stage': "Conquest of Kyushu",
			'Requirement': "First head up the left side of the map past the geyser area. You should get a scene momentarily where the geyser starts again, blocking your retreat. Make your way over towards Shingen, and on the way defeat Hideyoshi, Koroku Hachisuka, and Hidemasa Hori. Soon Nene and Toshiie will appear; defeat them as well. The next requirement is to head to the enemy home base in the northwest. However, if you have time you should clean up the rest of the map before you do so. Beware though that if you kill all the enemy generals outside, your army will charge the northwest base, and you must enter that base before they do to continue with the weapon's requirements. Once you enter, Yoshihiro and Yoshihisa will reveal themselves to be fakes, and the REAL ones will show up in the center of the map. At the same time No and Nobutada Oda will come towards the northwest fort as well. You'll have all four of those generals (two of them being the fake Shimazus) on you, and you must defeat them all. Finally, Mitsuhide and Ranmaru will show up. Defeat Mitsuhide first, and then Ranmaru. This will cause the supply team to show up from the gate inside Kenshin's camp."
		}, {
			'Game': "SW2",
			'Name': "Bishamonten's Fury",
			'Rank': 5,
			'Base': 46,
			'Element': "Demon",
			'Stats': [
				"Life: 54",
				"Defense: 52",
				"Luck: 35"
			],
			'Stage': "Battle of Tedorigawa",
			'Requirement': "Within 15 minutes, defeat 300 enemies before opening the flood gates. When Hideyoshi retreats, defeat Katsuie. When Hideyoshi returns, defeat him and wait for Nobunaga to come."
		}
	],
	'Oichi': [
		{
			'Game': "SW",
			'Name': "Sakura",
			'Rank': 5,
			'Base': 45,
			'Element': "Lightning",
			'Stats': [
				"Attack: 44",
				"Defense: 39",
				"Ranged Attack: 39",
				"Musou: 40"
			],
			'Stage': "Battle of Anegawa",
			'Requirement': "Defeat Ieyasu, then defeat Keiji before he reaches the main camp. Go to see Nō and defeat her as well. Then defeat all the three reinforcement before they get too close to the main camp. Supply team should appear in the southwest and head north."
		}, {
			'Game': "SW",
			'Name': "Kiku",
			'Rank': 6,
			'Base': 55,
			'Element': "Lightning",
			'Stats': [
				"Defense: 67",
				"Ranged Defense: 69",
				"Speed: 45",
				"Musou Charge: 68"
			],
			'Stage': "Rebellion at Honnōji (Upper Path)",
			'Requirement': "Prevent the Akechi fire attack, enter Honnōji from the south and rescue Ranmaru, Nobunaga and Nō (in that order). Then seal all the enemy bases and defeat all the enemy officers except for Mitsuhide, and assist the retreat of your allies. The supply team will appear in the northwest and head northeast."
		}, {
			'Game': "SW2",
			'Name': "Cup & Gold",
			'Rank': 4,
			'Base': 42,
			'Element': "Lightning",
			'Stats': [
				"Life: 34",
				"Attack: 38",
				"Defense: 36",
				"Musou Charge: 32"
			],
			'Stage': "Revolt at Shizugatake",
			'Requirement': "Defeat the officers in the following order: Toshiie Maeda/Generics, Nobunaga Oda, Nō, Ginchiyo Tachibana/Ina, Ranmaru, Okuni, Nene, and Nō once more."
		}, {
			'Game': "SW2",
			'Name': "Golden Grail",
			'Rank': 5,
			'Base': 45,
			'Element': "Fire",
			'Stats': [
				"Speed: 39",
				"Dexterity: 37",
				"Musou Charge: 35",
				"Range: 34"
			],
			'Stage': "Siege of Odani",
			'Requirement': "Within 12 minutes succeed in the mission 'Escort the engineers to Mt Yamada Garrison', keep the engineers safe until Hideyoshi's plan is succesful and defeat 400 enemies."
		}
	],
	'Okuni': [
		{
			'Game': "SW",
			'Name': "Hikage",
			'Rank': 5,
			'Base': 46,
			'Element': "Fire",
			'Stats': [
				"Defense: 41",
				"Ranged Attack: 33",
				"Jump: 49",
				"Attack Range: 37"
			],
			'Stage': "Dance of Ise",
			'Requirement': "Stay always near to Goemon and defeat Ranmaru, Mitsuhide and Hanzo when you have the chance. Once Hanzo is defeated, the supply team will appear in the central keep and head north-west quickly."
		}, {
			'Game': "SW",
			'Name': "Kishouten",
			'Rank': 6,
			'Base': 56,
			'Element': "Fire",
			'Stats': [
				"Life: 47",
				"Ranged Defense: 72",
				"Jump: 50",
				"Attack Range: 66"
			],
			'Stage': "Dance of Kawanakajima",
			'Requirement': "Defeat Yoshinobu and prepare the dance on the western mountain. Then defeat all the enemy officers and subofficers (note: If Okuni is infatuated by either Shingen or Kenshin the weapon is lost). The supply team will appear in the west and head towards the Takeda camp."
		}, {
			'Game': "SW2",
			'Name': "Raging Sun",
			'Rank': 4,
			'Base': 44,
			'Element': "Fire",
			'Stats': [
				"Attack: 19",
				"Defense: 37",
				"Speed: 17",
				"Dexterity: 39",
				"Range: 35"
			],
			'Stage': "The Traveling Dancer - Survival Mode Floor 61+",
			'Requirement': "Defeat Keiji Maeda."
		}, {
			'Game': "SW2",
			'Name': "Heavenly Flower",
			'Rank': 5,
			'Base': 44,
			'Element': "Wind",
			'Stats': [
				"Life: 17",
				"Defense: 35",
				"Speed: 50",
				"Luck: 37"
			],
			'Stage': "Calling All Warriors - Survival Mode Floor 71+",
			'Requirement': "Defeat Okuni."
		}
	],
	'Kunoichi': [
		{
			'Game': "SW",
			'Name': "Kushinada",
			'Rank': 5,
			'Base': 45,
			'Element': "Ice",
			'Stats': [
				"Life: 37",
				"Musou: 45",
				"Ranged Defense: 49",
				"Jump: 29"
			],
			'Stage': "Defense of Ueda Castle",
			'Requirement': "Finish her Musou Mode once. Get to the fifth level of the castle without killing anyone (including foot soldiers) in 3'45 minutes."
		}, {
			'Game': "SW",
			'Name': "Kokuanten",
			'Rank': 6,
			'Base': 55,
			'Element': "Ice",
			'Stats': [
				"Life: 44",
				"Defense: 66",
				"Musou Charge: 71",
				"Jump: 42"
			],
			'Stage': "Siege of Osaka - Summer",
			'Requirement': "Complete every mission in the stage with no ally casualties. It is recommended that you use the War Drums item and Matsukaze Saddle."
		}
	],
	'Magoichi': [
		{
			'Game': "SW",
			'Name': "Gokuen",
			'Rank': 5,
			'Base': 47,
			'Element': "Fire",
			'Stats': [
				"Attack: 43",
				"Ranged Attack: 50",
				"Ranged Defense: 41",
				"Attack Range: 43"
			],
			'Stage': "Battle of Echizen",
			'Requirement': "Defeat Katsuie Shibata and Nobumori Sakuma in under 2 minutes. Then snipe Mitsuhide Akechi. Make sure none of your Pilgrims fall. The supply team appears in the middle of the map, very close to the cross-bridge area."
		}, {
			'Game': "SW",
			'Name': "Yatagarasu",
			'Rank': 6,
			'Base': 57,
			'Element': "Fire",
			'Stats': [
				"Life: 43",
				"Defense: 68",
				"Ranged Attack: 75",
				"Attack Range: 59"
			],
			'Stage': "Yamazaki Firefight",
			'Requirement': "Defeat the first wave of the Oda Army, snipe Nobunaga the first time you have the chance and then defeat the second wave. The supply team will appear in the southwest and head northeast."
		}, {
			'Game': "SW2",
			'Name': "Marksman's Pride",
			'Rank': 4,
			'Base': 45,
			'Element': "Fire",
			'Stats': [
				"Life: 35",
				"Attack: 38",
				"Luck: 12",
				"Musou Charge: 20",
				"Range: 39"
			],
			'Stage': "Escape from Honnōji",
			'Requirement': "Defeat Nobunaga Oda within 10 minutes from stage. The supply team appears in south-east gate and head west. Immediately after defeating Nobunaga, head south until you hit the gate and then turn and go west."
		}, {
			'Game': "SW2",
			'Name': "Sengoku Sniper",
			'Rank': 5,
			'Base': 45,
			'Element': "Lightning",
			'Stats': [
				"Musou: 36",
				"Defense: 52",
				"Musou Charge: 53"
			],
			'Stage': "Assault on the Saika",
			'Requirement': "Complete the missions to rescue Ujiyoshi Horinouchi, Morishige Tsuchihashi, Magoroku Saika, and Yoshimasa Satake within 6 minutes."
		}
	],
	'Shingen': [
		{
			'Game': "SW",
			'Name': "Kourin",
			'Rank': 5,
			'Base': 49,
			'Element': "Fire",
			'Stats': [
				"Defense: 45",
				"Horse Attack: 45",
				"Horse Defense: 43",
				"Attack Range: 50"
			],
			'Stage': "Showdown at Kawanakajima",
			'Requirement': "Take Zenkoji and defeat Masamune. Protect Kaizu Castle from Hanzo and defeat Keiji before he reaches the main camp. When the mission appear, reach the Uesugi camp in 60 seconds. The supply team will spawn in the Uesugi camp west to Mount Saijo and heads toward Zenkoji."
		}, {
			'Game': "SW",
			'Name': "Shinju",
			'Rank': 6,
			'Base': 59,
			'Element': "Fire",
			'Stats': [
				"Life: 46",
				"Defense: 75",
				"Musou Charge: 57",
				"Attack Range: 75"
			],
			'Stage': "Battle of Yamazaki",
			'Requirement': "Complete the first two missions (Defeat Katsuie Shibata & Nagahide Niwa), defeat Hanbei Takenaka and Kazumasu Takigawa, then stops Hideyoshi Hashiba before he enters the main camp. Then fail the following mission, and when Kenshin charges at the Oda main camp rescue him. The supply team will appear from the northwestern gate and head south towards the Oda camp."
		}, {
			'Game': "SW2",
			'Name': "Heaven's Sign",
			'Rank': 4,
			'Base': 48,
			'Element': "Wind",
			'Stats': [
				"Life: 18",
				"Attack: 20",
				"Defense: 51",
				"Ride: 20",
				"Range: 19",
				"Speed: 19"
			],
			'Stage': "Battle of Nagashino",
			'Requirement': "Take Nagashino Fort right in front of you. You'll have to defeat the general outside to open the doors, then defeat both generals inside to do so. Afterwards proceed south and protect the other fort by defeating Sakai Tadatsugu. At about this time Honda Tadakatsu and Hashiba Hideyoshi will proceed eastwards and attempt to pincer your commander's base from north and south. Defeat them both before they can enter the base. I'd take Tadakatsu first as Shima Sakon will go and delay Hideyoshi for you. I'd also take out Akechi Mitsuhide along the way since he'll be headed towards the fort in the southeast. Once this is done you'll get an event where it begins raining, thus nullifying Nobunaga's muskets. Shingen will order a charge and a few moments later the supply team will show up from the south gate, proceeding eastwards."
		}, {
			'Game': "SW2",
			'Name': "Furin Kazan",
			'Rank': 5,
			'Base': 48,
			'Element': "Fire",
			'Stats': [
				"Life: 56",
				"Musou: 18",
				"Attack: 55",
				"Musou Charge: 19"
			],
			'Stage': "Conquest for Kyushu (Dream)",
			'Requirement': "Defeat Nene, Nagachika Kanamori, Yoshihiro (2nd time), Ranmaru, and Mitsuhide within 4 minutes of their appearance."
		}
	],
	'Masamune': [
		{
			'Game': "SW",
			'Name': "Mikaboshi",
			'Rank': 5,
			'Base': 46,
			'Element': "Ice",
			'Stats': [
				"Attack: 45",
				"Horse Attack: 35",
				"Musou Charge: 32",
				"Attack Range: 39"
			],
			'Stage': "Intrusion at Honnōji",
			'Requirement': "Reach the northern hall before the Akechi army does, defeat all the officers of the Akechi army and then Mitsuhide. Once the Oda army shows up defeat all their officers. The supply team will appears just outside the central hall and head southwest towards Nobunaga."
		}, {
			'Game': "SW",
			'Name': "Asura",
			'Rank': 6,
			'Base': 56,
			'Element': "Ice",
			'Stats': [
				"Musou: 40",
				"Defense: 67",
				"Horse Attack: 70",
				"Attack Range: 71"
			],
			'Stage': "Intrusion at Nagashino",
			'Requirement': "Defeat all the Takeda and Oda officers and sub-officers except for Nobufusa Baba and Nagahide Niwa. Then, defeat Nobufusa, head for the Takeda camp and defeat Katsuyori and then Shingen. Once Shingen's defeated, route Nagahide, head for the Oda camp and defeat Nobutada. The supply team will appear in the east and head north for Nagashino Castle."
		}, {
			'Game': "SW2",
			'Name': "Manhunters",
			'Rank': 4,
			'Base': 44,
			'Element': "Ice",
			'Stats': [
				"Attack: 37",
				"Ride: 34",
				"Musou Charge: 38",
				"Range: 35"
			],
			'Stage': "Battle of Mikatagahara",
			'Requirement': "Defeat all enemy generals except for Ieyasu Tokugawa while keeping all of your ally generals alive."
		}, {
			'Game': "SW2",
			'Name': "Hell's Dragons",
			'Rank': 5,
			'Base': 44,
			'Element': "Ice",
			'Stats': [
				"Attack: 38",
				"Defense: 38",
				"Luck: 37",
				"Range: 34"
			],
			'Stage': "Osaka Campaign",
			'Requirement': "Within 12 minutes, escort the cannon to the front gate and defeat fake Hideyori inside Osaka Castle."
		}
	],
	'No': [
		{
			'Game': "SW",
			'Name': "Hiruko",
			'Rank': 5,
			'Base': 46,
			'Element': "Demon",
			'Stats': [
				"Life: 28",
				"Defense: 49",
				"Speed: 35",
				"Attack Range: 43"
			],
			'Stage': "Incident at Honnōji",
			'Requirement': "Kill Nobunaga in 5 minutes. The supply team will appear in the west and head south east."
		}, {
			'Game': "SW",
			'Name': "Mamushi",
			'Rank': 6,
			'Base': 56,
			'Element': "Demon",
			'Stats': [
				"Musou: 49",
				"Attack: 61",
				"Musou Charge: 65",
				"Attack Range: 73"
			],
			'Stage': "Battle of Anegawa",
			'Requirement': "Defeat Kagetake Asakura and his sub-officer, then complete all the missions up to the defeat of Yoshikage Asakura without casualties. The supply team will appear near the east-central point."
		}, {
			'Game': "SW2",
			'Name': "Delicious Venom",
			'Rank': 4,
			'Base': 44,
			'Element': "Wind",
			'Stats': [
				"Musou: 38",
				"Defense: 36",
				"Speed: 37",
				"Musou Charge: 36"
			],
			'Stage': "Revolt at Honnōji",
			'Requirement': "Must succeed in the mission to defend Nobutada Oda, and then oddly enough you must let Ranmaru Mori die without triggering the mission to protect him, with Nobutada Oda still alive."
		}, {
			'Game': "SW2",
			'Name': "Blood Viper",
			'Rank': 5,
			'Base': 44,
			'Element': "Lightning",
			'Stats': [
				"Attack: 37",
				"Speed: 35",
				"Dexterity: 37",
				"Range: 37"
			],
			'Stage': "Incident at Shizugatake",
			'Requirement': "Within 12 minutes succeed in the missions 'Make Tsunachika Kaiho recognize your beauty', 'Rescue Yoshinari Mori', 'Make Naotsune Endo recognize your beauty', 'Make Keijun Miyabe recognize your beauty', 'Make Kiyotsuna Akao recognize your beauty', 'Rescue Kazumasu Takigawa'. Defeat 200 enemies."
		}
	],
	'Hanzo': [
		{
			'Game': "SW",
			'Name': "Yamikiba",
			'Rank': 5,
			'Base': 46,
			'Element': "Demon",
			'Stats': [
				"Ranged Attack: 45",
				"Musou: 40",
				"Jump: 32",
				"Speed: 42"
			],
			'Stage': "Battle of Mikatagahara",
			'Requirement': "Defeat Oyamada, maintain the crane formation and then capture all the enemy's gates. The supply team appears in the south-east and heads west."
		}, {
			'Game': "SW",
			'Name': "Marishiten",
			'Rank': 6,
			'Base': 56,
			'Element': "Demon",
			'Stats': [
				"Attack: 74",
				"Ranged Attack: 69",
				"Speed: 48",
				"Attack Range: 69"
			],
			'Stage': "The Iga Passage",
			'Requirement': "Defeat all the Ikko ambushes before Ieyasu runs into any of them. The supply team will appear from the starting point in the southwest and head north."
		}, {
			'Game': "SW2",
			'Name': "Chained Dragon",
			'Rank': 4,
			'Base': 44,
			'Element': "Demon",
			'Stats': [
				"Attack: 39",
				"Dexterity: 34",
				"Range: 38",
				"Speed: 36"
			],
			'Stage': "Siege of Ueda Castle (Dream)",
			'Requirement': "Defeat all of Kotaro Fuma's clones and Yukimura Sanada, saving Masayuki Sanada for last."
		}, {
			'Game': "SW2",
			'Name': "Sudden Death",
			'Rank': 5,
			'Base': 44,
			'Element': "Ice",
			'Stats': [
				"Life: 38",
				"Attack: 55",
				"Musou Charge: 50"
			],
			'Stage': "Battle of Nagashino",
			'Requirement': "Within 10 minutes succeed in the missions 'Defend Nagashino Castle', 'Defend the Maruyama Garrison', defeat Katsuyori Takeda, and defeat 200 enemies."
		}
	],
	'Ranmaru': [
		{
			'Game': "SW",
			'Name': "Kamudo",
			'Rank': 5,
			'Base': 48,
			'Element': "Ice",
			'Stats': [
				"Defense: 40",
				"Ranged Defense: 48",
				"Speed: 40",
				"Musou Charge: 25"
			],
			'Stage': "Incident at Honnōji",
			'Requirement': "Prevent the enemy army from getting through the south gate and stop the enemy fire attack. The bearers of the weapons will appear right in front of the south gate."
		}, {
			'Game': "SW",
			'Name': "Gohotendo",
			'Rank': 6,
			'Base': 58,
			'Element': "Ice",
			'Stats': [
				"Musou: 46",
				"Attack: 69",
				"Speed: 47",
				"Musou Charge: 70"
			],
			'Stage': "Battle of Anegawa",
			'Requirement': "Complete all the main missions and defeat all the enemy officers and sub-officers. (Note: if you go too far on the central bridge, the mission to assassinate Ieyasu will appear prematurely and since it's impossible to fulfill the weapon will be lost.) The supply team will appear from the south point and head east."
		}, {
			'Game': "SW2",
			'Name': "Iron Vengeance",
			'Rank': 4,
			'Base': 46,
			'Element': "Ice",
			'Stats': [
				"Life: 37",
				"Defense: 38",
				"Speed: 19",
				"Musou Charge: 37",
				"Range: 14"
			],
			'Stage': "Keiji's Real Request - Survival Mode Floor 46",
			'Requirement': "Defeat Keiji Maeda at floor 50."
		}, {
			'Game': "SW2",
			'Name': "Prodigious Brand",
			'Rank': 5,
			'Base': 46,
			'Element': "Wind",
			'Stats': [
				"Life: 34",
				"Speed: 55",
				"Dexterity: 51"
			],
			'Stage': "Ranmaru's 2nd Request - Survival Mode Floor 31",
			'Requirement': "Floor 31 - Defeat officers and get info. Floor 32 - Defeat Nagayoshi Mori and Hidemasa Hori. Floor 33 - Based on info choose right answer - which is Keiji. Floor 34 - Defeat Keiji. Floor 35 - Defeat Tokugawa, then Mitsuhide, then Ranmaru."
		}
	],
	'Hideyoshi': [
		{
			'Game': "SW",
			'Name': "Mihashira",
			'Rank': 5,
			'Base': 45,
			'Element': "Lightning",
			'Stats': [
				"Life: 38",
				"Speed: 45",
				"Agility: 41",
				"Musou Charge: 31"
			],
			'Stage': "Attack on Azuchi Castle",
			'Requirement': "Defeat all generals and sub-generals on both the Oda and Saika side. Then defeat either Magoichi Saika or Nobunaga Oda after the player defeated all generals and sub-generals. Supply team appears in the north."
		}, {
			'Game': "SW",
			'Name': "Monju",
			'Rank': 6,
			'Base': 55,
			'Element': "Lightning",
			'Stats': [
				"Defense: 68",
				"Ranged Defense: 56",
				"Speed: 50",
				"Musou Charge: 62"
			],
			'Stage': "Battle of Komaki-Nagakute",
			'Requirement': "Defeat the front-line troops on Mount Komaki, then defeat Naomasa Ii to save the secondary force, and then defeat Tadakatsu Honda, Tadayo, and Tadasuke Ookubo. When Hanzo appears in your camp, defeat him and the supply team will appear west of Mount Komaki."
		}, {
			'Game': "SW2",
			'Name': "Simian Sansetsu",
			'Rank': 4,
			'Base': 42,
			'Element': "Lightning",
			'Stats': [
				"Speed: 60",
				"Dexterity: 40",
				"Luck: 60"
			],
			'Stage': "Battle of Shizugatake",
			'Requirement': "Defeat Toshiie Maeda before he charges and Keiji Maeda before he makes it into your main camp."
		}, {
			'Game': "SW2",
			'Name': "Mighty Claw",
			'Rank': 5,
			'Base': 42,
			'Element': "Wind",
			'Stats': [
				"Musou: 59",
				"Dexterity: 55",
				"Range: 38"
			],
			'Stage': "Battle of Sekigahara (Dream)",
			'Requirement': "Defeat Yoshihiro Shimazu, Ginchiyo Tachibana, Tadakatsu Honda, Ina, Hanzo Hattori and Masamune Date within 15 minutes."
		}
	],
	'Yoshimoto': [
		{
			'Game': "SW",
			'Name': "Velvet Kemari",
			'Rank': 5,
			'Base': 47,
			'Element': "Demon",
			'Stats': [
				"Musou: 42",
				"Attack: 38",
				"Speed: 37",
				"Jump: 32"
			],
			'Stage': "Kemari in Kyoto",
			'Requirement': "Defeat all the Takeda officers and sub-officers without losing allied officers. The supply team will appear in the southwestern corner and head north."
		}, {
			'Game': "SW",
			'Name': "Phoenix Kemari",
			'Rank': 6,
			'Base': 57,
			'Element': "Demon",
			'Stats': [
				"Musou: 49",
				"Defense: 69",
				"Musou Charge: 75",
				"Attack Range: 68"
			],
			'Stage': "Battle of Komaki Nagakute",
			'Requirement': "Fail to defeat Mototada Torii, defeat the Tokugawa Four Heavenly Kings leaving Tadakatsu for last, then defeat Ina. If none of your officers has been defeated, then the supply team will appear from the north-western gate."
		}, {
			'Game': "SW2",
			'Name': "Noble Kemari",
			'Rank': 4,
			'Base': 42,
			'Element': "Lightning",
			'Stats': [
				"Defense: 36",
				"Speed: 34",
				"Dexterity: 35",
				"Luck: 37"
			],
			'Stage': "Battle of Kawanakajima",
			'Requirement': "Protect Kansuke Yamamoto and defeat the enemy reinforcements from Zenkouji in 6 minutes."
		}, {
			'Game': "SW2",
			'Name': "Elite Kemari",
			'Rank': 5,
			'Base': 42,
			'Element': "Demon",
			'Stats': [
				"Attack: 18",
				"Defense: 18",
				"Luck: 57",
				"Musou Charge: 58",
				"Range: 19"
			],
			'Stage': "Battle of Okehazama",
			'Requirement': "Within 11 minutes, capture the Washizu and Marune garrisons to make Nobunaga show up. Defeat him, then defeat Ieyasu. Once Nobunaga appears the second time, the weapon will be available."
		}
	],
	'Tadakatsu': [
		{
			'Game': "SW",
			'Name': "Arahabaki",
			'Rank': 5,
			'Base': 50,
			'Element': "Fire",
			'Stats': [
				"Musou: 50",
				"Attack: 47",
				"Defense: 41",
				"Speed: 31"
			],
			'Stage': "Battle of Kawanakajima",
			'Requirement': "Capture Hachimanbara, save Yasumasa Sakakibara and assist Hanzo Hattori during his mission, then defeat Keiji Maeda without allied losses. The supply team appears from the southeastern point and heads north."
		}, {
			'Game': "SW",
			'Name': "Enma",
			'Rank': 6,
			'Base': 60,
			'Element': "Fire",
			'Stats': [
				"Attack: 72",
				"Defense: 75",
				"Ranged Defense: 71",
				"Attack Range: 59"
			],
			'Stage': "Battle of Komaki Nagakute",
			'Requirement': "Defeat the enemies heading towards Komaki and the main camp and do not let a single enemy past the western gate of mount Komaki. The supply team will appear from the southeastern point."
		}, {
			'Game': "SW2",
			'Name': "Tonbo-giri",
			'Rank': 4,
			'Base': 50,
			'Element': "Fire",
			'Stats': [
				"Musou: 15",
				"Attack: 37",
				"Defense: 53",
				"Musou Charge: 33"
			],
			'Stage': "Tournament of Champions",
			'Requirement': "Prevent Keiji Maeda, Musashi Miyamoto, Kojiro Sasaki, Kotaro Fuma, Hanzo Hattori, Nene, Hideyoshi Hashiba, Ieyasu Tokugawa, and Masamune Date from entering any one of the three garrisons and kill them personally."
		}, {
			'Game': "SW2",
			'Name': "Demon's Tongue",
			'Rank': 5,
			'Base': 50,
			'Element': "Demon",
			'Stats': [
				"Life: 38",
				"Attack: 55",
				"Ride: 52"
			],
			'Stage': "Battle of Sekigahara",
			'Requirement': "Within 10 minutes, stop all cannons and defeat 300 enemies."
		}
	],
	'Ina': [
		{
			'Game': "SW",
			'Name': "Omoikane",
			'Rank': 5,
			'Base': 46,
			'Element': "Ice",
			'Stats': [
				"Defense: 43",
				"Ranged Attack: 47",
				"Ranged Defense: 42",
				"Musou Charge: 34"
			],
			'Stage': "Kanegasaki Retreat",
			'Requirement': "Complete the first two missions, then when the mission of eliminating the Asakura officers becomes available defeat 1,000 enemies before completing it, all without suffering losses. The supply team will appear in the northwest and heads south."
		}, {
			'Game': "SW",
			'Name': "Aisen",
			'Rank': 6,
			'Base': 56,
			'Element': "Ice",
			'Stats': [
				"Musou: 47",
				"Attack: 63",
				"Ranged Attack: 72",
				"Attack Range: 61"
			],
			'Stage': "Battle of Yamazaki",
			'Requirement': "Complete the first mission, defeat Mitsuhide Akechi and then prevent the Hashiba army from reaching Mount Tennō. The supply team will appear in the western fortress."
		}, {
			'Game': "SW2",
			'Name': "Coiled Viper",
			'Rank': 4,
			'Base': 44,
			'Element': "Ice",
			'Stats': [
				"Attack: 17",
				"Defense: 33",
				"Dexterity: 16",
				"Musou Charge: 36",
				"Range: 38"
			],
			'Stage': "Siege of Odawara Castle",
			'Requirement': "Defeat all enemy officers personally but not Ujimasa and Ujinao Hojo."
		}, {
			'Game': "SW2",
			'Name': "Celestial Archer",
			'Rank': 5,
			'Base': 44,
			'Element': "Fire",
			'Stats': [
				"Life: 51",
				"Defense: 55",
				"Musou Charge: 37"
			],
			'Stage': "Battle of Kuzegawa",
			'Requirement': "Defeat Yoshihiro Shimazu & Ginchiyo Tachibana without losing any allied officers. Head straight for Tamehiro Hiratsuka & Yukinaga Konishi, and defeat them. Yoshihiro & Toyohisa Shimazu will appear after this; head straight for them and defeat them. Then help your stranded allies in the center so they don't die. After a while, Ginchiyo will appear near the southeastern garrison."
		}
	],
	'Ieyasu': [
		{
			'Game': "SW2",
			'Name': "Quake Maker",
			'Rank': 4,
			'Base': 48,
			'Element': "Fire",
			'Stats': [
				"Attack: 35",
				"Defense: 38",
				"Musou: 17",
				"Speed: 38",
				"Luck: 19"
			],
			'Stage': "Battle of Sekigahara",
			'Requirement': "Personally defeat every Western army general including those meant to defect to your side."
		}, {
			'Game': "SW2",
			'Name': "Earth Render",
			'Rank': 5,
			'Base': 48,
			'Element': "Lightning",
			'Stats': [
				"Life: 18",
				"Musou: 17",
				"Musou Charge: 17",
				"Attack: 18",
				"Defense: 17",
				"Ride: 18",
				"Dexterity: 17",
				"Luck: 18"
			],
			'Stage': "Last Stand Against Ieyasu (Dream)",
			'Requirement': "Capture the Southeastern and Western garrisons then defeat Kanetsugu Naoe and Keiji Maeda."
		}
	],
	'Mitsunari': [
		{
			'Game': "SW2",
			'Name': "Golden Frill",
			'Rank': 4,
			'Base': 45,
			'Element': "Ice",
			'Stats': [
				"Defense: 38",
				"Musou: 36",
				"Musou Charge: 33",
				"Range: 37"
			],
			'Stage': "The Edo Campaign",
			'Requirement': "Defeat Yoshiaki Mogami. Save Hideie Ukita, who was gullible enough to be lured into a trap. Defeat all the enemy generals around him to successfully rescue him. Now some of your friends will ditch you and turn traitor, so go rebuke them by destroying all of them. That's Hiroie Yoshikawa, Hidemoto Mori, and Hideaki Kobayakawa. After defeated those three, you'll get another mission to return to the inside of the castle and defeat all of the generals there. Once you do, Kotaro Fuma will appear and attempt to sneak attack your base from a secret door that opens in the west. Go and defeat him before he enter your camp. Now defeat the one guard captain inside the east door of the castle to open a door and find a captured ally general, Ekei Ankokuji. Then you'll receive a mission to escort him back to your base camp. Give him the red carpet treatment and destroy everything in your path so he doesn't get distracted and feel obligated to hack at anything nearby (especially all the enemy generals that will ambush you two). Once done, make sure you enter the main castle from the north side (going south will screw up you chance to get the weapon). Defeat the general in the way there and you'll find a sealed door. At the dead end Ekei Ankokuji will suggest another path from the south side. Once this happens, a precious item report will flash on screen and the weapon appears on the bridge between the two sections of the castle. Now go to the south side and cross over to the north part of the castle, finding the weapon along the way."
		}, {
			'Game': "SW2",
			'Name': "Heaven's Bliss",
			'Rank': 5,
			'Base': 45,
			'Element': "Lightning",
			'Stats': [
				"Musou: 54",
				"Speed: 37",
				"Luck: 52"
			],
			'Stage': "Battle of Komaki-Nagakute",
			'Requirement': "Within 8 minutes succeed in the missions 'Rescue the detached unit', 'Defeat Yasumasa Sakibara and seize control of Iwasaki Castle', defeat Ina, Tadakatsu, and Hanzo, defeat 150 enemies."
		}
	],
	'Nagamasa': [
		{
			'Game': "SW2",
			'Name': "King's Honor",
			'Rank': 4,
			'Base': 45,
			'Element': "Lightning",
			'Stats': [
				"Attack: 35",
				"Defense: 17",
				"Ride: 35",
				"Musou Charge: 56"
			],
			'Stage': "Defense of Odani Castle",
			'Requirement': "Defeat Hori Hidemasa and Kani Saizou. Proceed onwards and defeat Niwa Nagahide and Kanamori Nagachika to take the northwest fort. Immediately head towards the fort in the center. Hideyoshi will break the walls and begin charging the castle. You need to defeat him before he invades the castle. Meanwhile the fort's doors will close and three more generals will ambush you. Defeat them all. At around this time Oichi will begin moving towards the northeast. Once she arrives, Maeda Toshiie and Ikeda Tsuneoki will show up in the north. Defeat them. Now hurry to the fort in the southeast and defeat the generals attacking before Kaihou Tsunachika is defeated."
		}, {
			'Game': "SW2",
			'Name': "Oichi's Faith",
			'Rank': 5,
			'Base': 45,
			'Element': "Fire",
			'Stats': [
				"Speed: 39",
				"Dexterity: 37",
				"Musou Charge: 35",
				"Range: 34"
			],
			'Stage': "Battle of Kanegasaki",
			'Requirement': "Escort Kazumasu Isono to the fire attack location within 8 minutes. Defeat 300 enemies. Special crate appears by west gate."
		}
	],
	'Sakon': [
		{
			'Game': "SW2",
			'Name': "Wrecking Blade",
			'Rank': 4,
			'Base': 46,
			'Element': "Wind",
			'Stats': [
				"Life: 18",
				"Attack: 36",
				"Defense: 37",
				"Range: 12",
				"Musou Charge: 34"
			],
			'Stage': "Battle of Sekigahara",
			'Requirement': "Defeat all enemy officers while protecting all of your allies."
		}, {
			'Game': "SW2",
			'Name': "Fiery Destruction",
			'Rank': 5,
			'Base': 46,
			'Element': "Ice",
			'Stats': [
				"Life: 34",
				"Attack: 34",
				"Ride: 37",
				"Speed: 38"
			],
			'Stage': "Battle of Mikatagahara (Dream)",
			'Requirement': "Within 15 minutes defeat all playable characters. They are Hanzo, Mitsuhide, Katsuie, Tadakatsu, and Hideyoshi. You must complete the missions to get all of the playable characters to show up. Kill Ieyasu when he tries to run the first time."
		}
	],
	'Yoshihiro': [
		{
			'Game': "SW2",
			'Name': "Beast Crusher",
			'Rank': 4,
			'Base': 48,
			'Element': "Wind",
			'Stats': [
				"Attack: 34",
				"Defense: 35",
				"Speed: 54",
				"Musou Charge: 18"
			],
			'Stage': "Breakthrough at Sekigahara",
			'Requirement': "First defeat a few generals in the center area just to clear things out. Now head towards Mitsunari's position in the south-west to receive a mission to defend him. Defeat all of the generals to succeed. Head towards Sakon in the east to trigger a mission to defend him. Along the way, Ieyasu will probably order Hanzo to charge Mitsunari. If he does so, go down south and intercept Hanzo, and defeat him personally. Yoshihiro will then tell Mitsunari to gather in the center. Take out more generals in the center if you think Mitsunari will have problems. Then return to defending Sakon, which involves defeating the three enemy generals attacking. Then Ieyasu will order Tadakatsu Honda to charge. Defeat him as he comes down south and Yoshihiro will order Sakon to the center. Now go up to the northwest corner, and beat the three enemy generals besieging Ginchiyo's camp. Afterwards Ina will charge to the west, so go and defeat her. Once Ginchiyo reaches the center of the map, the real fun begins. A whole mess of Tokugawa army replacements suddenly appears, surrounding your allies in the general. You'll then get a mission to eliminate the Eastern Army, which basically involves killing every new general on the map."
		}, {
			'Game': "SW2",
			'Name': "Disintegrater",
			'Rank': 5,
			'Base': 48,
			'Element': "Fire",
			'Stats': [
				"Life: 58",
				"Musou: 52",
				"Range: 35"
			],
			'Stage': "Conquest for Kyushu",
			'Requirement': "Within 7 minutes succeed in the the missions to defeat Nobuchika Chosokabe, defeat Hidehisa Sengoku, defeat Ekei Ankokuji, defeat Ginchiyo Tachibana and defeat 300 enemies."
		}
	],
	'Ginchiyo': [
		{
			'Game': "SW2",
			'Name': "Heaven's Bite",
			'Rank': 4,
			'Base': 44,
			'Element': "Lightning",
			'Stats': [
				"Life: 18",
				"Musou: 18",
				"Attack: 20",
				"Defense: 17",
				"Speed: 18",
				"Luck: 19",
				"Musou Charge: 20",
				"Range: 17"
			],
			'Stage': "Battle of Kyūshū",
			'Requirement': "Defeat the Shimazu siblings in this order on their second appearance: Iehisa Shimazu, Toshihisa Shimazu and Yoshihiro Shimazu."
		}, {
			'Game': "SW2",
			'Name': "Raging Tempest",
			'Rank': 5,
			'Base': 44,
			'Element': "Wind",
			'Stats': [
				"Speed: 38",
				"Dexterity: 54",
				"Range: 54"
			],
			'Stage': "Pursuit of Yoshihiro",
			'Requirement': "Within 5 minutes succeed in the mission 'Stop the cannons'. Defeat 300 enemies (no time limit). Appears in special crate by Mt. Tennō's Eastern cannon."
		}
	],
	'Kanetsugu': [
		{
			'Game': "SW2",
			'Name': "Evil's Bane",
			'Rank': 4,
			'Base': 45,
			'Element': "Fire",
			'Stats': [
				"Defense: 38",
				"Musou: 56",
				"Musou Charge: 51"
			],
			'Stage': "Last Stand against Ieyasu",
			'Requirement': "Defeat Masamune Date, Tadakatsu Honda, Hanzo Hattori, and Ina."
		}, {
			'Game': "SW2",
			'Name': "Truth & Honor",
			'Rank': 5,
			'Base': 45,
			'Element': "Ice",
			'Stats': [
				"Musou: 56",
				"Attack: 38",
				"Musou Charge: 51"
			],
			'Stage': "Battle of Hasedo",
			'Requirement': "Keep all allies alive and within 12 minutes make Mogami forces appear the 2nd time and kill 300 enemies."
		}
	],
	'Nene': [
		{
			'Game': "SW2",
			'Name': "Devil Feathers",
			'Rank': 4,
			'Base': 42,
			'Element': "Ice",
			'Stats': [
				"Defense: 37",
				"Speed: 38",
				"Luck: 38",
				"Range: 36"
			],
			'Stage': "Battle of Komaki-Nagakute",
			'Requirement': "Save the detached force to the east, take Iwasaki Fort, and then defeat Hanzo Hattori, Ina, and Tadakatsu Honda."
		}, {
			'Game': "SW2",
			'Name': "Soaring Steel",
			'Rank': 5,
			'Base': 42,
			'Element': "Wind",
			'Stats': [
				"Ride: 57",
				"Speed: 56",
				"Dexterity: 36"
			],
			'Stage': "Siege of Odawara Castle",
			'Requirement': "Within 10 minutes escort the 1st siege ramp to castle wall and kill 300 enemies."
		}
	],
	'Kotaro': [
		{
			'Game': "SW2",
			'Name': "Thorns of Peril",
			'Rank': 4,
			'Base': 45,
			'Element': "Demon",
			'Stats': [
				"Life: 19",
				"Attack: 37",
				"Speed: 38",
				"Dexterity: 17",
				"Musou Charge: 33"
			],
			'Stage': "Defense of Odawara Castle",
			'Requirement': "Double jump over the ninja path in the wall and start defeating enemies in the southern area outside the walls. Pretty soon a siege device will appear as well. You need to destroy the siege device, but make sure you wait until AFTER the mission to destroy it has spawned. Now proceed north and defend the front doors by defeating the three attacking enemy generals without letting Chiba Naoshige die. Continue northwards and defend the northern fort by defeating the attackers without letting Houjou Ujiteru die. At about this time Nene will infiltrate the castle, but ignore her for now. Go towards Hideyoshi's base and eventually Ieyasu and many reinforcements will show up inside the castle. Return to the castle and succeed in the mission by defeating all six Tokugawa army generals. Continue in inside the castle and you'll find that Nene has rigged the castle to explode. You'll get a mission to stop her plan. You must do so by defeating all bomb ninjas and all gunpowder kegs on the first and second floors. The placement is random each time, so search carefully. When you've gotten all of them you'll get the mission completed notice, so you'll be able to know if you've missed any. With that done climb up to the third floor and defeat Nene. Now finally save your ally general in the southwest corner, Ogawara Yasuhiro. Once you've defeated the generals around him, he'll begin retreating towards the castle doors. Escort him along the way, as he'll be sneak attacked by Sakon."
		}, {
			'Game': "SW2",
			'Name': "Infernal Fists",
			'Rank': 5,
			'Base': 45,
			'Element': "Lightning",
			'Stats': [
				"Attack: 52",
				"Defense: 52",
				"Speed: 33"
			],
			'Stage': "Kotaro's Insurrection",
			'Requirement': "Within 11 minutes succeed in the mission 'Halt the cannon fire from the outer ward' and kill 400 enemies. Keep all your allies alive as well (Hanzo, Tadakatsu, Ina and Ieyasu)."
		}
	],
	'Musashi': [
		{
			'Game': "SW2",
			'Name': "Mastery & Vision",
			'Rank': 4,
			'Base': 48,
			'Element': "Demon",
			'Stats': [
				"Attack: 48",
				"Range: 30",
				"Musou Charge: 35"
			],
			'Stage': "Chaos in Kyoto",
			'Requirement': "Defeat Ieyasu before he escapes."
		}, {
			'Game': "SW2",
			'Name': "Courage & Conviction",
			'Rank': 5,
			'Base': 48,
			'Element': "Fire",
			'Stats': [
				"Musou: 58",
				"Defense: 55",
				"Range: 30"
			],
			'Stage': "Tournament of Champions (Dream)",
			'Requirement': "Achieve 700 kills before Kojiro arrives."
		}
	],
	'Toshiie': [
		{
			'Game': "SW2",
			'Name': "Dragon's Bite",
			'Rank': 4,
			'Base': 45,
			'Element': "Fire",
			'Stats': [
				"Attack: 36",
				"Speed: 18",
				"Musou Charge: 53",
				"Range: 36"
			],
			'Stage': "Annexation of Shikoku",
			'Requirement': "Defeat Masaaki Ojima and make your way south to Chikanao Hisatake. You will get a mission to defeat him and a small portion of allied reinforcements will appear. Then to seize the landing point head south again towards the southeast garrison and defeat Morichika and the other two officers with him. This will cause loads of reinforcements to arrive lead by Mitsunari. Then head towards the south cannon fort and defeat the Defense captain to seize it. The Mori will ambush you twice on the field but you should ignore them as you need to seize the north cannon fortress. Defeat the enemy defense captain."
		}, {
			'Game': "SW2",
			'Name': "Katsuie's Pride",
			'Rank': 5,
			'Base': 45,
			'Element': "Wind",
			'Stats': [
				"Life: 18",
				"Musou: 36",
				"Defense: 38",
				"Ride: 36",
				"Luck: 18"
			],
			'Stage': "Tournament of Champions (Dream)",
			'Requirement': "Within 10 minutes recruit all yellow officers to your side. No need to defeat all officers. Just defeat the leader of the clan."
		}
	],
	'Motochika': [
		{
			'Game': "SW2",
			'Name': "Golden Ginkgo",
			'Rank': 4,
			'Base': 45,
			'Element': "Lightning",
			'Stats': [
				"Musou: 38",
				"Defense: 18",
				"Musou Charge: 35",
				"Range: 51"
			],
			'Stage': "Battle of Kuzegawa",
			'Requirement': "Within 8 minutes, cut off the enemies' escape routes, and defeat Kojiro, Tadakatsu, Ina, and Hanzo."
		}, {
			'Game': "SW2",
			'Name': "Fatal Echo",
			'Rank': 5,
			'Base': 45,
			'Element': "Demon",
			'Stats': [
				"Life: 55",
				"Defense: 53",
				"Luck: 36"
			],
			'Stage': "Nobunaga's Invasion (Dream)",
			'Requirement': "Within 4 minutes succeed in the mission 'Seize the north cannon fortress' and kill 150 enemies."
		}
	],
	'Gracia': [
		{
			'Game': "SW2",
			'Name': "Sacred Grace",
			'Rank': 4,
			'Base': 42,
			'Element': "Wind",
			'Stats': [
				"Musou: 39",
				"Speed: 34",
				"Dexterity: 36",
				"Range: 39"
			],
			'Stage': "Battle of Osaka Bay",
			'Requirement': "Within 10 minutes of the start, complete the mission to capture the southern ship and escort Terumoto Mori to the North East Fort. (do not defeat Araki until you get the mission to capture the southern ship)"
		}, {
			'Game': "SW2",
			'Name': "Divine Mercy",
			'Rank': 5,
			'Base': 42,
			'Element': "Lightning",
			'Stats': [
				"Ride: 53",
				"Luck: 52",
				"Musou Charge: 39"
			],
			'Stage': "Assault on the Saika",
			'Requirement': "Within 8 minutes, succeed in the missions 'Defeat Nagahide Niwa and Junkei Tsutsui' and 'Defeat the second wave of the Oda Army', then wait until third wave of Oda Army advances."
		}
	],
	'Kojiro': [
		{
			'Game': "SW2",
			'Name': "Deathly Shadow",
			'Rank': 4,
			'Base': 42,
			'Element': "Ice",
			'Stats': [
				"Musou: 54",
				"Attack: 36",
				"Range: 50"
			],
			'Stage': "Chaos in Kyoto",
			'Requirement': "Within 10 minutes, make Musashi Miyamoto appear and defeat 300 enemies."
		}, {
			'Game': "SW2",
			'Name': "Eternal Sleep",
			'Rank': 5,
			'Base': 42,
			'Element': "Ice",
			'Stats': [
				"Defense: 37",
				"Speed: 55",
				"Dexterity: 53"
			],
			'Stage': "The Greatest Swordsmen (Dream)",
			'Requirement': "Within 13 minutes, make Nobunaga appear and kill 500 enemies. Clear the center area first by defeating 5 enemy generals. Head south and defeat Tadaoki Hosokawa and Gracia, then Hideyoshi. When you're going after Katsuie, take the north-eastern route and defeat Tokugawa officers inside the garrison. Enter the garrison where Katsuie is and defeat him. He then reappears in the southwest along with Hideyoshi. Defeat those two again and Nobunaga appears."
		}
	],
	'Katsuie': [
		{
			'Game': "SW2",
			'Name': "Heaven and Earth",
			'Rank': 4,
			'Base': 46,
			'Element': "Lightning",
			'Stats': [
				"Life: 39",
				"Attack: 17",
				"Defense: 38",
				"Speed: 34",
				"Musou Charge: 17"
			],
			'Stage': "Battle of Okehazama",
			'Requirement': "Within 10 minutes succeed in the missions 'Defeat Motonobu Okabe', 'Protect Washizu Garrison', 'Protect Marune Garrison', 'Rendezvous with Hideyoshi Hashiba', 'Protect the Peasants' and 'Defeat Hanzo Hattori'. Defeat 400 enemies as well (no time limit)."
		}, {
			'Game': "SW2",
			'Name': "Epoch Makers",
			'Rank': 5,
			'Base': 46,
			'Element': "Lightning",
			'Stats': [
				"Life: 53",
				"Attack: 55",
				"Musou Charge: 37"
			],
			'Stage': "Battle of Shizukagate",
			'Requirement': "Within 10 minutes, secure all 4 eastern garrisons and kill 300 enemies before your allies think about betraying you."
		}
	]
};
