# create-svelte

To reproduce the issue, run the following commands:

First, create the build:

`npm install`
`npm run build`

Test the build locally:

`npm run dev`

Visit http://localhost:5173 and see that an image loads correctly. This is not a page, but rather an image with some text on it. As you can see, it works fine.

Then,

Simulate "production" environment:

`docker build -t test . && docker run -p 80:80 test`

The build will fail with the following error:

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'canvas' imported from /server/chunks/_server.ts-xxxxxxx.js
    at new NodeError (node:internal/errors:387:5)
    at packageResolve (node:internal/modules/esm/resolve:852:9)
    at moduleResolve (node:internal/modules/esm/resolve:901:20)
    at defaultResolve (node:internal/modules/esm/resolve:1115:11)
    at nextResolve (node:internal/modules/esm/loader:163:28)
    at ESMLoader.resolve (node:internal/modules/esm/loader:841:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:424:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:76:40)
    at link (node:internal/modules/esm/module_job:75:36)
Error: Not found: /favicon.ico
    at resolve (file:///server/index.js:3898:18)
    at resolve (file:///server/index.js:3773:34)
    at Object.#options.hooks.handle (file:///server/index.js:3942:59)
    at respond (file:///server/index.js:3771:43)
```