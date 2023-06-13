const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".well-known/webfinger","favicon.png","svelte-logo.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.e9df23ef.js","app":"_app/immutable/entry/app.f76f6eda.js","imports":["_app/immutable/entry/start.e9df23ef.js","_app/immutable/chunks/index.32cf2a91.js","_app/immutable/chunks/singletons.fa9a85b5.js","_app/immutable/chunks/index.87e6b824.js","_app/immutable/entry/app.f76f6eda.js","_app/immutable/chunks/index.32cf2a91.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-0dad7d69.js'),
			() => import('./chunks/1-f36b1dc1.js'),
			() => import('./chunks/2-d29cbb40.js'),
			() => import('./chunks/3-0564fd7e.js'),
			() => import('./chunks/4-864eca5b.js'),
			() => import('./chunks/5-bc38f441.js'),
			() => import('./chunks/6-019994c8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/gridGallery",
				pattern: /^\/gridGallery\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/talleres",
				pattern: /^\/talleres\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
