var Event = {
	init: function(canvas) {
		canvas.addEventListener('click', function (e) {
			console.log(e.pageX);
			var target = {
				x: Math.ceil(e.pageX / 32 - 1),
				y: Math.ceil(e.pageY / 32 - 1)
			};
			console.log(target);
		});
	}
}