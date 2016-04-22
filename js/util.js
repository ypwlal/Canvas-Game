var Util = {
	imgObjs: {},
	loadImg: function (callback) {
		var allAount = 0;
		var loadedNum = 0;

		for (var i in Conf.images) {
			allAount += Conf.images[i].length;
		}

		for (var i in Conf.images) {
			var num = Conf.images[i].length;
			for (var j = 0; j < num; j++) {
				var img = new Image();
				img.src = 'images/' + Conf.images[i][j];

				img.onload = function () {
					loadedNum += 1;
					var len = this.src.split('/').length;
					var name = this.src.split('/')[len - 1].split('.')[0];
					Conf.imgObj[ name ] = {
						obj: this,
						width: this.width,
						height: this.height
					}
					if (loadedNum == allAount) {
						callback && callback();
					}
					this.callback = null;
				}
			}
		}

	}
}
