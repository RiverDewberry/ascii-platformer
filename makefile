all: server

server:
	npx http-server . -o -p 8080 -c-1
