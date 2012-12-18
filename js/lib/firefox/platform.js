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
