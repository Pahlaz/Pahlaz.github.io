import App from './src/index.html'

Bun.serve({
	port: 3000,
	static: {
		'/': App,
	},
	async fetch(req) {
		return new Response('Not Found', { status: 404 })
	},
})
