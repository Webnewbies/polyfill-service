(function (global) {
	var lastTime = Date.now();
	global.cancelAnimationFrame = global.cancelAnimationFrame || global.mozCancelAnimationFrame || function(id){ clearTimeout(id); };
	global.animationStartTime = global.animationStartTime || global.webkitAnimationStartTime || global.mozAnimationStartTime || global.oAnimationStartTime || global.msAnimationStartTime || +new Date();
	global.requestAnimationFrame = global.requestAnimationFrame || global.mozRequestAnimationFrame || global.webkitRequestAnimationFrame || global.msRequestAnimationFrame || function (callback) {
									if (typeof callback !== 'function') {
										throw new TypeError(callback + 'is not a function');
									}

									var
									currentTime = Date.now(),
									delay = 16 + lastTime - currentTime;

									if (delay < 0) {
										delay = 0;
									}

									lastTime = currentTime;

									return setTimeout(function () {
										lastTime = Date.now();

										callback(performance.now());
									}, delay);
								};
		})(this);
