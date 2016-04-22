//map(include block and obj)
function Stage (mapInfo, obj) {
	this.map = mapInfo.map; //[[1,2,3],[2,3,4]]
	this.mapImg = mapInfo.mapImg;//[{type:0,img:obj, sx, sy, sw, sh, x, y, w, h}, {type:'1',img:'b'}]
	this.object = obj || []; 
	this.frameInterval = null;

}

//Render the stage
Stage.prototype.renderMap = function (ctx) {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, 240, 720);
	var yLen = this.map.length;
	var xLen = this.map[0].length;
	var arry = [];
	function mapToImg(type) {
		for (var i = 0; i < this.mapImg.length; i++) {
			if (type == this.mapImg[i].type) {
				return this.mapImg[i];
			}
		}
	}

	for (var i = 0; i < yLen; i++) {
		for (var j = 0; j < xLen; j++) {
			var imgObj = mapToImg.call(this, this.map[i][j]);
			ctx.drawImage(imgObj.img, imgObj.sx, imgObj.sy, imgObj.width, imgObj.height, imgObj.width * j, imgObj.height * i, imgObj.width, imgObj.height);  
		}
	}
	return ctx;
}

Stage.prototype.initObj = function (ctx) {
	for (var i = 0; i < this.object.length; i++) {
		this.object[i].init(this.map);
	}
	this.renderObj(ctx);
}

Stage.prototype.renderObj = function (ctx) {
	//this.object = [];
	for (var i = 0; i < this.object.length; i++) {
		this.object[i].render(ctx);
	}
}
Stage.prototype.eventListener = function () {
	var _this = this;
	document.getElementById('gameCanvas').addEventListener('click', function (e) {
		console.log(e.pageX);
		var target = {
			x: Math.ceil(e.pageX / 32 - 1),
			y: Math.ceil(e.pageY / 32 - 1)
		};
		console.log(target);
		console.log(_this.object[0]);
		_this.object[0].stop();
		_this.object[0].move(target);
	});
}
Stage.prototype.onframe = function (ctx) {
	var _this = this;
	var _ctx = ctx;
	_this.frameInterval = setInterval(function () {
		_this.renderMap(_ctx);
		_this.renderObj(_ctx);
	}, 17);	
	//_this.renderMap(_ctx);
	//_this.renderObj(_ctx);
	//requestAnimationFrame(_this.onframe(_ctx));
}
