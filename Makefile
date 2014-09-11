REPORTER=spec

test: hint mocha

mocha:
	./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--bail \
		test/*.js

watch:
	./node_modules/.bin/supervisor --ignore public,template app.js

hint:
	./node_modules/.bin/jshint ./app.js lib

.PHONY: test test-watch
