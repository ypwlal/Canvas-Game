function Map () {
	this.map =  [
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[1, 1, 0, 0, 0, 0, 0, 0],
					[1, 1, 1, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
			 		[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0]
				];
	this.mapImg = [
					{type:0, img: Conf.imgObj['map'].obj, sx: 0, sy: 0, width: 32, height: 32}, 
					{type:1, img: Conf.imgObj['map'].obj, sx: 32, sy: 0, width: 32, height: 32}
				];
	this.stepWidth = 32;
	this.stepHeight = 32;
}

Map.prototype.init = function () {
	this.createBlock();
}

Map.prototype.getMap = function () {
	return {
		map: this.map,
		mapImg: this.mapImg,
		stepWidth: this.stepWidth,
		stepHeight: this.stepHeight
	}
}

Map.prototype.createBlock = function () {
	var xNum = this.map[0].length;
	var yNum = this.map.length;
	for (var i = 0; i < yNum; i++) {
		if (Math.round(Math.random())) { // if 1
			var blockNum = Math.round(Math.random() * 5 + 0); //0-5,6
			var a = [];
			var k = 0;
			for (var k = 0; k < xNum; k++) {
				a.push(k);//[0 1 2 3 4 5 6 7]
			}
			a = a.sort(function(a,b){ return Math.random()>0.5 ? -1 : 1;});
			for (var p = 0; p < blockNum; p++) {
				this.map[i][a[p]] = 1;
			}		
		}
	}
}

