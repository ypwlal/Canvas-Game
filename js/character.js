	function Spy () {
		this.state = {
			location: {
				x: 0,
				y: 0
			},
			speed: 4,
			onMoving: null,
			img: Conf.imgObj['hero'].obj
		}
	}

	Spy.prototype.init = function (map) {
		var randomX = 0;//0-7 random
		var _map = map || [[0]];
		do {
			randomX = Math.round(Math.random() * 7 + 0); 
		} while (_map[0][randomX] == 1)
			
		this.state.location.x = randomX;
		return this;
	}

	Spy.prototype.render = function (ctx) {
		ctx.drawImage(this.state.img, this.state.location.x * 32, this.state.location.y * 32);
		return ctx;
	}

	Spy.prototype.getState = function () {
		return this.state;
	}

	Spy.prototype.move = function (target) {
		/*var _this = this;
		var delX = target.x - _this.state.location.x;
		var delY = target.y - _this.state.location.y;
		var r = Math.sqrt(Math.pow(delX, 2) + Math.pow(delY, 2));
		var time = r / 32;

		console.log(time);
		_this.state.onMoving = setInterval(function () {
			if (_this.state.location.x >= target.x || _this.state.location.y >= target.y) {
				_this.stop();
			}
			_this.state.location.x  += ((Math.abs(delX)/time) * (17/1000));
			_this.state.location.y  += ((Math.abs(delY)/time) * (17/1000));
		}, 17);*/
		//ctx.drawImage(mapImg, this.state.location.x * 32, this.state.location.y * 32);
		this.state.location.x = target.x;
		this.state.location.y = target.y;
		//this.render(ctx);
		//return this.state;
	}
	Spy.prototype.stop = function () {
		this.state.onMoving = clearInterval(this.state.onMoving);
	}



	function File () {
		this.state = {
			location: {
				x: 0,
				y: 23
			},
			speed: 2,
			img: Conf.imgObj['monster'].obj
		}
	}

	File.prototype.init = function (map) {
		var randomX = 0;//0-7 random
		var _map = map || [[0]];
		do {
			randomX = Math.round(Math.random() * 7 + 0); 
		} while (_map[23][randomX] == 1)
		this.state.location.x = randomX;
		return this;
	}

	File.prototype.render = function (ctx) {
		ctx.drawImage(this.state.img, this.state.location.x * 32, this.state.location.y * 32);
		return ctx;
	}

	File.prototype.getState = function () {
		return this.state;
	}