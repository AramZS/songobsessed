/*
window.hxhLast = [];
window.hxhNext = [];
window.hxhPop = false;
window.history.replaceState({ pathname: window.location.pathname }, null, "");
document.body.addEventListener("htmx:confirm", function (evt) {
	//   evt.preventDefault();
	window.location.hash = "";
	console.log(
		"htmx:confirm",
		evt,
		evt.detail,
		evt.detail.target.id,
		evt.detail.path,
		window.location.pathname
	);
	// htmx.ajax('GET', '/songs/una-rosa-blanca/', {target:'#main-content', swap:'outerHTML show:top', select:'#main-content' });
	var lastState = [
		"GET",
		window.location.pathname,
		{
			target: `#${evt.detail.target.id}`,
			swap: `${evt.detail.elt.getAttribute("hx-swap")}`,
			select: `${evt.detail.elt.getAttribute("hx-select")}`,
		},
	];
	if (!hxhPop) {
		window.hxhLast
			? window.hxhLast.push(lastState)
			: (window.hxhLast = [lastState]);

		// window.history.pushState(lastState, null, "");
	} else {
		window.hxhPop = false;
	}
});

document.body.addEventListener("htmx:afterSettle", function (evt) {
	if (window.hxhLast && window.hxhLast.length < 1) {
		//		window.onload = null;
		//		window.onhashchange = null;
		//		console.log("unhook back control");
		window.location.href += "#";
		window.location.href += "!";
	} else {
	}
});
window.addEventListener("popstate", (event) => {
	console.log(
		`location: ${document.location}, state: ${JSON.stringify(event.state)}`,
		history
	);
	if (window.hxhLast && window.hxhLast.length > 0) {
		window.hxhPop = true;
		var next = window.hxhLast.pop();
		console.log("popstate alt", next[0], next[1], next[2]);
		htmx.ajax(next[0], next[1], next[2]);
	} else {
	}
	return;
});

// https://stackoverflow.com/questions/12381563/how-can-i-stop-the-browser-back-button-using-javascript
(function (global) {
	if (typeof global === "undefined") {
		throw new Error("window is undefined");
	}

	var _hash = "!";
	var noBackPlease = function () {
		global.location.href += "#";

		// Making sure we have the fruit available for juice (^__^)
		global.setTimeout(function () {
			global.location.href += "!";
		}, 50);
	};

	global.onhashchange = function () {
		if (global.location.hash !== _hash) {
			global.location.hash = _hash;
		}
	};

	global.onload = function () {
		noBackPlease();

		// Disables backspace on page except on input fields and textarea..
		document.body.onkeydown = function (e) {
			var elm = e.target.nodeName.toLowerCase();
			if (e.which === 8 && elm !== "input" && elm !== "textarea") {
				e.preventDefault();
			}
			// Stopping the event bubbling up the DOM tree...
			e.stopPropagation();
		};
	};
})(window);
*/
