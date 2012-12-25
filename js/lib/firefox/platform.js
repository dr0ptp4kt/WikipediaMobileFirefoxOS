// Set up Firefox OS-specific activity stuff
if (window.MozActivity !== undefined) {
	/**
	 * Open link in the browser application, instead of a new window in our app
	 */
	window.chrome.openExternalLink = function(url) {
		// hack -- shouldn't have to do this
		url = url.replace( 'proxy.php?url=', '' );
		var activity = new MozActivity({
			name: 'view',
			data: {
				type: 'url',
				url: url
			}
		});
	}
}

// Horrible hack for #searchParam 'right' CSS property not taking effect properly in Gecko
// although we say 'right: 45px' it seems to fix us at a certain width, even though there's
// no width specified. Arrrrrrghllllebarggle
$( window ).resize( function() {
	var $searchParam = $( '#searchParam' );
	$searchParam.css( 'width', $( window ).width() - 90 );
});
$( function () {
	$( window ).resize();
} );