var on = addEventListener,
	$ = function (q) {
		return document.querySelector(q)
	},
	$$ = function (q) {
		return document.querySelectorAll(q)
	},
	$body = document.body,
	$inner = $('.inner');
on('load', function () {
	setTimeout(function () {
		$body.className = $body.className.replace(/\bis-loading\b/, 'is-playing');
		setTimeout(function () {
			$body.className = $body.className.replace(/\bis-playing\b/, 'is-ready');
		}, 2375);
	}, 100);
});
var h, id, ee, k, locked = false;
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
h = location.hash;
id = h && $('section[id="' + h.substr(1) + '-section"]') ? h.substr(1) : 'home';
ee = $$('section:not([id="' + id + '-section"])');
for (k = 0; k < ee.length; k++) {
	ee[k].className = 'inactive';
	ee[k].style.display = 'none';
}
setTimeout(function () {
	$body.scrollTop = document.documentElement.scrollTop = 0;
}, 75);
on('hashchange', function (event) {
	var h, e, ce, eh, ceh, k;
	h = (location.hash ? location.hash : '#home');
	e = $(h + '-section');
	if (!e || e.className != 'inactive') return false;
	if (locked) return false;
	locked = true;
	if (h == '#home') history.replaceState(null, null, '#');
	ce = $('section:not(.inactive)');
	ce.className = 'inactive';
	ce.style.display = 'none';
	e.className = '';
	e.style.display = '';
	$body.scrollTop = document.documentElement.scrollTop = 0;
	locked = false;
	return false;
});
var style, sheet, rule;
style = document.createElement('style');
style.appendChild(document.createTextNode(''));
document.head.appendChild(style);
sheet = style.sheet;
if (navigator.userAgent.match(/Android ([0-9\.]+)/)) {
	(function () {
		sheet.insertRule('body::after { }', 0);
		rule = sheet.cssRules[0];
		var f = function () {
			rule.style.cssText = 'height: ' + (Math.max(screen.width, screen.height)) + 'px';
		};
		on('load', f);
		on('orientationchange', f);
		on('touchmove', f);
	})();
} else if (navigator.userAgent.match(/([0-9_]+) like Mac OS X/) || navigator.userAgent.match(/CPU like Mac OS X/)) {
	(function () {
		sheet.insertRule('body::after { }', 0);
		rule = sheet.cssRules[0];
		rule.style.cssText = '-webkit-transform: scale(1.0)';
	})();
	(function () {
		sheet.insertRule('body.ios-focus-fix::before { }', 0);
		rule = sheet.cssRules[0];
		rule.style.cssText = 'height: calc(100% + 60px)';
		on('focus', function (event) {
			$body.classList.add('ios-focus-fix');
		}, true);
		on('blur', function (event) {
			$body.classList.remove('ios-focus-fix');
		}, true);
	})();
} else if (navigator.userAgent.match(/(MSIE|rv:11\.0)/)) {
	(function () {
		var t, f;
		f = function () {
			var x = $('#wrapper');
			x.style.height = 'auto';
			if (x.scrollHeight <= innerHeight) x.style.height = '100vh';
		};
		(f)();
		on('resize', function () {
			clearTimeout(t);
			t = setTimeout(f, 250);
		});
	})();
}
(function () {
	var qs, js, q, s, d = document,
		gi = d.getElementById,
		ce = d.createElement,
		gt = d.getElementsByTagName,
		id = "typef_orm_share",
		b = "https://s3-eu-west-1.amazonaws.com/share.typeform.com/";
	if (!gi.call(d, id)) {
		js = ce.call(d, "script");
		js.id = id;
		js.src = b + "share.js";
		q = gt.call(d, "script")[0];
		q.parentNode.insertBefore(js, q)
	}
})()
(function (i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r;
i[r] = i[r] || function () {
	(i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date();
a = s.createElement(o), m = s.getElementsByTagName(o)[0];
a.async = 1;
a.src = g;
m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-43818380-2', 'auto');
ga('send', 'pageview');
