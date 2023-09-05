// Create an array of weapons with Attack stat from SW2, then sort them from highest
var data = [];
for (var i in warriors) {
    for (var j = 0; j < warriors[i].length; j++) {
		if (warriors[i][j].Game == 'SW2') {
			for (var k = 0; k < warriors[i][j].Stats.length; k++) {
				var arr = warriors[i][j].Stats[k].split(': ');
				if (arr[0] == 'Attack') {
					data.push({
						'Name': i,
						'Weapon': warriors[i][j].Name,
						'Stat': warriors[i][j].Stats[k]
					});
				}
			}
		}
	}
}
data.sort((a, b) => b.Stat.split(': ')[1] - a.Stat.split(': ')[1]);
