
function Game () {
	this.stage = null;
	this.canvas = null;
}

Game.prototype.init = function() {
	console.log('loading...');
	console.log(this);
	var _this = this;
	Util.loadImg(function() {
		console.log('load end');
		console.log(_this);

		_this.canvas = document.createElement('canvas');
		_this.canvas.style.position = 'absolute';
		_this.canvas.style.zIndex = 10001;
		_this.canvas.width = 256;
		_this.canvas.height = 800;
		_this.canvas.id = 'gameCanvas';
		var ctx =  _this.canvas.getContext( '2d' );
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, 256, 768);
		
		var mapa = new Map();
		var spya = new Spy();
		var filea = new File();

		mapa.init();

		_this.stage = new Stage(mapa.getMap(), [spya, filea]);
		//console.log(ctx);
		ctx = _this.stage.renderMap(ctx);
		ctx = _this.stage.initObj(ctx);
		document.body.appendChild( _this.canvas);
		_this.stage.eventListener();
		//console.log(ctx);
		//Event.init(_this.canvas, this.stage);
		//_this.canvas = canvas;
		_this.start();

	});		
};

Game.prototype.start = function () {	
	console.log('start');
	console.log(this.stage);
	this.stage.onframe(this.canvas.getContext('2d'));
	//addEvent
	
	//this.stage.initObj(ctx);
	//this.stage.renderObj(ctx);

};

Game.prototype.reset = function () {
	//console.log("r");
	if (this.canvas.getContext) {
		var ctx = this.canvas.getContext('2d');
		ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.init();
	}
};


window.onload = function() {
	window.gamey = new Game();
	gamey.init();
}