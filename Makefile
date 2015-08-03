.PHONY: all
all: setup clean build

setup:
	npm install

clean:
	rm -rf dist

build:
	node build.js
