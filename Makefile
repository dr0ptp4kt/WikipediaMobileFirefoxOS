all : appcache

clean :
	rm -f app.appcache

appcache : app.appcache

app.appcache : app.appcache.template .FORCE
	/bin/echo "CACHE MANIFEST" > app.appcache
	/bin/echo -n "# " >> app.appcache
	date -u >> app.appcache
	cat app.appcache.template >> app.appcache

.FORCE :
