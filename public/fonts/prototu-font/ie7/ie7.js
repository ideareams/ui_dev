/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'prototu-font\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-github': '&#xe60b;',
		'icon-twitter': '&#xe60a;',
		'icon-facebook': '&#xe606;',
		'icon-googleplus': '&#xe607;',
		'icon-tumblr': '&#xe608;',
		'icon-linkedin': '&#xe609;',
		'icon-googleplus2': '&#xe600;',
		'icon-facebook2': '&#xe601;',
		'icon-twitter2': '&#xe602;',
		'icon-github2': '&#xe603;',
		'icon-tumblr2': '&#xe604;',
		'icon-linkedin2': '&#xe605;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
