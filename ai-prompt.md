The following is a snapshot of a Git repository, rendered as a plain-text “dump” for use by a language model. It is structured in three parts:

1. **Table of Contents:**
   A numbered list of every file included, in the order they appear below.

2. **File Sections:**
   Each file is prefixed by:

   ----[N]
   <relative/path/to/file>

   where `N` is the file’s index (matching the ToC). After that line comes the file’s contents (or, if it’s binary or too large, a brief metadata/truncation marker).

3. **End Marker:**
   A final line containing `--END--` indicates the end of the repository snapshot. Any text that follows should be treated as instructions or queries about this repository.

Use this entire dump as context when answering questions. For example, you can reference specific files by their ToC number or path, inspect code snippets, identify configuration values, and so on.

---

Table of Contents:
1. vite.config.ts
2. vite.config.js
3. vite.config.d.ts
4. tsconfig.tsbuildinfo
5. tsconfig.node.tsbuildinfo
6. tsconfig.node.json
7. tsconfig.json
8. tailwind.config.js
9. README.md
10. package.json
11. package-lock.json
12. multi-page-implementation.md
13. index.html
14. .gitignore
15. .eslintrc.cjs
16. public\demo-preview.html
17. src\vite-env.d.ts
18. src\main.tsx
19. src\index.css
20. src\App.tsx
21. dist\index.html
22. dist\demo-preview.html
23. src\utils\urlUtils.ts
24. src\utils\notionParser.ts
25. src\utils\htmlGenerator.ts
26. src\utils\exportUtils.ts
27. src\utils\aiGuideGenerator.ts
28. src\types\index.ts
29. src\services\notionAPI.ts
30. src\services\exportService.ts
31. src\services\aiService.ts
32. src\pages\PricingPage.tsx
33. src\pages\HomePage.tsx
34. src\pages\ConvertPage.tsx
35. src\components\SidebarRight.tsx
36. src\components\SidebarLeft.tsx
37. src\components\PreviewPanel.tsx
38. src\components\InputSection.tsx
39. src\components\Icon.tsx
40. src\components\Icon.jsx
41. src\components\Icon.d.ts
42. src\components\Header.tsx
43. src\components\GuidePreview.tsx
44. src\components\Footer.tsx
45. src\components\ExportPanel.tsx
46. src\assets\logo.svg
47. src\assets\icons.svg
48. dist\assets\logo-BbqXi1Kv.svg
49. dist\assets\index-BVW0i_se.js
50. dist\assets\index-BlYYo7mL.css

----[1]
vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
----[2]
vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
});

----[3]
vite.config.d.ts
declare const _default: import("vite").UserConfig;
export default _default;

----[4]
tsconfig.tsbuildinfo
{"root":["./src/app.tsx","./src/main.tsx","./src/types.ts","./src/vite-env.d.ts","./src/components/exportpanel.tsx","./src/components/footer.tsx","./src/components/guidepreview.tsx","./src/components/header.tsx","./src/components/inputsection.tsx","./src/components/previewpanel.tsx"],"version":"5.9.3"}
----[5]
tsconfig.node.tsbuildinfo
{"fileNames":["./node_modules/typescript/lib/lib.d.ts","./node_modules/typescript/lib/lib.es5.d.ts","./node_modules/typescript/lib/lib.es2015.d.ts","./node_modules/typescript/lib/lib.es2016.d.ts","./node_modules/typescript/lib/lib.es2017.d.ts","./node_modules/typescript/lib/lib.es2018.d.ts","./node_modules/typescript/lib/lib.es2019.d.ts","./node_modules/typescript/lib/lib.es2020.d.ts","./node_modules/typescript/lib/lib.dom.d.ts","./node_modules/typescript/lib/lib.webworker.importscripts.d.ts","./node_modules/typescript/lib/lib.scripthost.d.ts","./node_modules/typescript/lib/lib.es2015.core.d.ts","./node_modules/typescript/lib/lib.es2015.collection.d.ts","./node_modules/typescript/lib/lib.es2015.generator.d.ts","./node_modules/typescript/lib/lib.es2015.iterable.d.ts","./node_modules/typescript/lib/lib.es2015.promise.d.ts","./node_modules/typescript/lib/lib.es2015.proxy.d.ts","./node_modules/typescript/lib/lib.es2015.reflect.d.ts","./node_modules/typescript/lib/lib.es2015.symbol.d.ts","./node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts","./node_modules/typescript/lib/lib.es2016.array.include.d.ts","./node_modules/typescript/lib/lib.es2016.intl.d.ts","./node_modules/typescript/lib/lib.es2017.arraybuffer.d.ts","./node_modules/typescript/lib/lib.es2017.date.d.ts","./node_modules/typescript/lib/lib.es2017.object.d.ts","./node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts","./node_modules/typescript/lib/lib.es2017.string.d.ts","./node_modules/typescript/lib/lib.es2017.intl.d.ts","./node_modules/typescript/lib/lib.es2017.typedarrays.d.ts","./node_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts","./node_modules/typescript/lib/lib.es2018.asynciterable.d.ts","./node_modules/typescript/lib/lib.es2018.intl.d.ts","./node_modules/typescript/lib/lib.es2018.promise.d.ts","./node_modules/typescript/lib/lib.es2018.regexp.d.ts","./node_modules/typescript/lib/lib.es2019.array.d.ts","./node_modules/typescript/lib/lib.es2019.object.d.ts","./node_modules/typescript/lib/lib.es2019.string.d.ts","./node_modules/typescript/lib/lib.es2019.symbol.d.ts","./node_modules/typescript/lib/lib.es2019.intl.d.ts","./node_modules/typescript/lib/lib.es2020.bigint.d.ts","./node_modules/typescript/lib/lib.es2020.date.d.ts","./node_modules/typescript/lib/lib.es2020.promise.d.ts","./node_modules/typescript/lib/lib.es2020.sharedmemory.d.ts","./node_modules/typescript/lib/lib.es2020.string.d.ts","./node_modules/typescript/lib/lib.es2020.symbol.wellknown.d.ts","./node_modules/typescript/lib/lib.es2020.intl.d.ts","./node_modules/typescript/lib/lib.es2020.number.d.ts","./node_modules/typescript/lib/lib.decorators.d.ts","./node_modules/typescript/lib/lib.decorators.legacy.d.ts","./node_modules/@types/node/compatibility/disposable.d.ts","./node_modules/@types/node/compatibility/indexable.d.ts","./node_modules/@types/node/compatibility/iterators.d.ts","./node_modules/@types/node/compatibility/index.d.ts","./node_modules/@types/node/globals.typedarray.d.ts","./node_modules/@types/node/buffer.buffer.d.ts","./node_modules/@types/node/globals.d.ts","./node_modules/@types/node/web-globals/abortcontroller.d.ts","./node_modules/@types/node/web-globals/domexception.d.ts","./node_modules/@types/node/web-globals/events.d.ts","./node_modules/undici-types/header.d.ts","./node_modules/undici-types/readable.d.ts","./node_modules/undici-types/file.d.ts","./node_modules/undici-types/fetch.d.ts","./node_modules/undici-types/formdata.d.ts","./node_modules/undici-types/connector.d.ts","./node_modules/undici-types/client.d.ts","./node_modules/undici-types/errors.d.ts","./node_modules/undici-types/dispatcher.d.ts","./node_modules/undici-types/global-dispatcher.d.ts","./node_modules/undici-types/global-origin.d.ts","./node_modules/undici-types/pool-stats.d.ts","./node_modules/undici-types/pool.d.ts","./node_modules/undici-types/handlers.d.ts","./node_modules/undici-types/balanced-pool.d.ts","./node_modules/undici-types/agent.d.ts","./node_modules/undici-types/mock-interceptor.d.ts","./node_modules/undici-types/mock-agent.d.ts","./node_modules/undici-types/mock-client.d.ts","./node_modules/undici-types/mock-pool.d.ts","./node_modules/undici-types/mock-errors.d.ts","./node_modules/undici-types/proxy-agent.d.ts","./node_modules/undici-types/api.d.ts","./node_modules/undici-types/cookies.d.ts","./node_modules/undici-types/patch.d.ts","./node_modules/undici-types/filereader.d.ts","./node_modules/undici-types/diagnostics-channel.d.ts","./node_modules/undici-types/websocket.d.ts","./node_modules/undici-types/content-type.d.ts","./node_modules/undici-types/cache.d.ts","./node_modules/undici-types/interceptors.d.ts","./node_modules/undici-types/index.d.ts","./node_modules/@types/node/web-globals/fetch.d.ts","./node_modules/@types/node/assert.d.ts","./node_modules/@types/node/assert/strict.d.ts","./node_modules/@types/node/async_hooks.d.ts","./node_modules/@types/node/buffer.d.ts","./node_modules/@types/node/child_process.d.ts","./node_modules/@types/node/cluster.d.ts","./node_modules/@types/node/console.d.ts","./node_modules/@types/node/constants.d.ts","./node_modules/@types/node/crypto.d.ts","./node_modules/@types/node/dgram.d.ts","./node_modules/@types/node/diagnostics_channel.d.ts","./node_modules/@types/node/dns.d.ts","./node_modules/@types/node/dns/promises.d.ts","./node_modules/@types/node/domain.d.ts","./node_modules/@types/node/events.d.ts","./node_modules/@types/node/fs.d.ts","./node_modules/@types/node/fs/promises.d.ts","./node_modules/@types/node/http.d.ts","./node_modules/@types/node/http2.d.ts","./node_modules/@types/node/https.d.ts","./node_modules/@types/node/inspector.generated.d.ts","./node_modules/@types/node/module.d.ts","./node_modules/@types/node/net.d.ts","./node_modules/@types/node/os.d.ts","./node_modules/@types/node/path.d.ts","./node_modules/@types/node/perf_hooks.d.ts","./node_modules/@types/node/process.d.ts","./node_modules/@types/node/punycode.d.ts","./node_modules/@types/node/querystring.d.ts","./node_modules/@types/node/readline.d.ts","./node_modules/@types/node/readline/promises.d.ts","./node_modules/@types/node/repl.d.ts","./node_modules/@types/node/stream.d.ts","./node_modules/@types/node/stream/promises.d.ts","./node_modules/@types/node/stream/consumers.d.ts","./node_modules/@types/node/stream/web.d.ts","./node_modules/@types/node/string_decoder.d.ts","./node_modules/@types/node/test.d.ts","./node_modules/@types/node/timers.d.ts","./node_modules/@types/node/timers/promises.d.ts","./node_modules/@types/node/tls.d.ts","./node_modules/@types/node/trace_events.d.ts","./node_modules/@types/node/tty.d.ts","./node_modules/@types/node/url.d.ts","./node_modules/@types/node/util.d.ts","./node_modules/@types/node/v8.d.ts","./node_modules/@types/node/vm.d.ts","./node_modules/@types/node/wasi.d.ts","./node_modules/@types/node/worker_threads.d.ts","./node_modules/@types/node/zlib.d.ts","./node_modules/@types/node/index.d.ts","./node_modules/@types/estree/index.d.ts","./node_modules/rollup/dist/rollup.d.ts","./node_modules/rollup/dist/parseast.d.ts","./node_modules/vite/types/hmrpayload.d.ts","./node_modules/vite/types/customevent.d.ts","./node_modules/vite/types/hot.d.ts","./node_modules/vite/dist/node/types.d-agj9qkwt.d.ts","./node_modules/esbuild/lib/main.d.ts","./node_modules/source-map-js/source-map.d.ts","./node_modules/postcss/lib/previous-map.d.ts","./node_modules/postcss/lib/input.d.ts","./node_modules/postcss/lib/css-syntax-error.d.ts","./node_modules/postcss/lib/declaration.d.ts","./node_modules/postcss/lib/root.d.ts","./node_modules/postcss/lib/warning.d.ts","./node_modules/postcss/lib/lazy-result.d.ts","./node_modules/postcss/lib/no-work-result.d.ts","./node_modules/postcss/lib/processor.d.ts","./node_modules/postcss/lib/result.d.ts","./node_modules/postcss/lib/document.d.ts","./node_modules/postcss/lib/rule.d.ts","./node_modules/postcss/lib/node.d.ts","./node_modules/postcss/lib/comment.d.ts","./node_modules/postcss/lib/container.d.ts","./node_modules/postcss/lib/at-rule.d.ts","./node_modules/postcss/lib/list.d.ts","./node_modules/postcss/lib/postcss.d.ts","./node_modules/postcss/lib/postcss.d.mts","./node_modules/vite/dist/node/runtime.d.ts","./node_modules/vite/types/importglob.d.ts","./node_modules/vite/types/metadata.d.ts","./node_modules/vite/dist/node/index.d.ts","./node_modules/@babel/types/lib/index.d.ts","./node_modules/@types/babel__generator/index.d.ts","./node_modules/@babel/parser/typings/babel-parser.d.ts","./node_modules/@types/babel__template/index.d.ts","./node_modules/@types/babel__traverse/index.d.ts","./node_modules/@types/babel__core/index.d.ts","./node_modules/@vitejs/plugin-react/dist/index.d.ts","./vite.config.ts","./node_modules/form-data/index.d.ts","./node_modules/@types/node-fetch/externals.d.ts","./node_modules/@types/node-fetch/index.d.ts","./node_modules/@types/prop-types/index.d.ts","./node_modules/@types/react/global.d.ts","./node_modules/csstype/index.d.ts","./node_modules/@types/react/index.d.ts","./node_modules/@types/react-dom/index.d.ts"],"fileIdsList":[[55,96,176],[55,96],[55,96,176,177,178,179,180],[55,96,176,178],[55,96,110,136,143,184,185],[55,93,96],[55,95,96],[96],[55,96,101,128],[55,96,97,107,115,125,136],[55,96,97,98,107,115],[50,51,52,55,96],[55,96,99,137],[55,96,100,101,108,116],[55,96,101,125,133],[55,96,102,104,107,115],[55,95,96,103],[55,96,104,105],[55,96,106,107],[55,95,96,107],[55,96,107,108,109,125,136],[55,96,107,108,109,122,125,128],[55,96,104,107,110,115,125,136],[55,96,107,108,110,111,115,125,133,136],[55,96,110,112,125,133,136],[53,54,55,56,57,58,59,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142],[55,96,107,113],[55,96,114,136,141],[55,96,104,107,115,125],[55,96,116],[55,96,117],[55,95,96,118],[55,96,119,135,141],[55,96,120],[55,96,121],[55,96,107,122,123],[55,96,122,124,137,139],[55,96,107,125,126,128],[55,96,127,128],[55,96,125,126],[55,96,128],[55,96,129],[55,96,125,130],[55,96,107,131,132],[55,96,131,132],[55,96,101,115,125,133],[55,96,134],[55,96,115,135],[55,96,110,121,136],[55,96,101,137],[55,96,125,138],[55,96,114,139],[55,96,140],[55,91,96],[55,91,96,107,109,118,125,128,136,139,141],[55,96,125,142],[55,96,190],[55,96,187,188,189],[55,96,175,181],[55,96,110,125,143],[55,96,167],[55,96,165,167],[55,96,156,164,165,166,168,170],[55,96,154],[55,96,157,162,167,170],[55,96,153,170],[55,96,157,158,161,162,163,170],[55,96,157,158,159,161,162,170],[55,96,154,155,156,157,158,162,163,164,166,167,168,170],[55,96,170],[55,96,152,154,155,156,157,158,159,161,162,163,164,165,166,167,168,169],[55,96,152,170],[55,96,157,159,160,162,163,170],[55,96,161,170],[55,96,162,163,167,170],[55,96,155,165],[55,96,145,174],[55,96,144,145],[55,68,72,96,136],[55,68,96,125,136],[55,63,96],[55,65,68,96,133,136],[55,96,115,133],[55,96,143],[55,63,96,143],[55,65,68,96,115,136],[55,60,61,64,67,96,107,125,136],[55,60,66,96],[55,64,68,96,128,136,143],[55,84,96,143],[55,62,63,96,143],[55,68,96],[55,62,63,64,65,66,67,68,69,70,72,73,74,75,76,77,78,79,80,81,82,83,85,86,87,88,89,90,96],[55,68,75,76,96],[55,66,68,76,77,96],[55,67,96],[55,60,63,68,96],[55,68,72,76,77,96],[55,72,96],[55,66,68,71,96,136],[55,60,65,66,68,72,75,96],[55,96,125],[55,63,68,84,96,141,143],[55,96,107,108,110,111,112,115,125,133,136,142,143,145,146,147,148,149,150,151,171,172,173,174],[55,96,147,148,149,150],[55,96,147,148,149],[55,96,147],[55,96,148],[55,96,145],[55,96,175,182]],"fileInfos":[{"version":"a7297ff837fcdf174a9524925966429eb8e5feecc2cc55cc06574e6b092c1eaa","impliedFormat":1},{"version":"c430d44666289dae81f30fa7b2edebf186ecc91a2d4c71266ea6ae76388792e1","affectsGlobalScope":true,"impliedFormat":1},{"version":"45b7ab580deca34ae9729e97c13cfd999df04416a79116c3bfb483804f85ded4","impliedFormat":1},{"version":"3facaf05f0c5fc569c5649dd359892c98a85557e3e0c847964caeb67076f4d75","impliedFormat":1},{"version":"e44bb8bbac7f10ecc786703fe0a6a4b952189f908707980ba8f3c8975a760962","impliedFormat":1},{"version":"5e1c4c362065a6b95ff952c0eab010f04dcd2c3494e813b493ecfd4fcb9fc0d8","impliedFormat":1},{"version":"68d73b4a11549f9c0b7d352d10e91e5dca8faa3322bfb77b661839c42b1ddec7","impliedFormat":1},{"version":"5efce4fc3c29ea84e8928f97adec086e3dc876365e0982cc8479a07954a3efd4","impliedFormat":1},{"version":"080941d9f9ff9307f7e27a83bcd888b7c8270716c39af943532438932ec1d0b9","affectsGlobalScope":true,"impliedFormat":1},{"version":"80e18897e5884b6723488d4f5652167e7bb5024f946743134ecc4aa4ee731f89","affectsGlobalScope":true,"impliedFormat":1},{"version":"cd034f499c6cdca722b60c04b5b1b78e058487a7085a8e0d6fb50809947ee573","affectsGlobalScope":true,"impliedFormat":1},{"version":"c57796738e7f83dbc4b8e65132f11a377649c00dd3eee333f672b8f0a6bea671","affectsGlobalScope":true,"impliedFormat":1},{"version":"dc2df20b1bcdc8c2d34af4926e2c3ab15ffe1160a63e58b7e09833f616efff44","affectsGlobalScope":true,"impliedFormat":1},{"version":"515d0b7b9bea2e31ea4ec968e9edd2c39d3eebf4a2d5cbd04e88639819ae3b71","affectsGlobalScope":true,"impliedFormat":1},{"version":"0559b1f683ac7505ae451f9a96ce4c3c92bdc71411651ca6ddb0e88baaaad6a3","affectsGlobalScope":true,"impliedFormat":1},{"version":"0dc1e7ceda9b8b9b455c3a2d67b0412feab00bd2f66656cd8850e8831b08b537","affectsGlobalScope":true,"impliedFormat":1},{"version":"ce691fb9e5c64efb9547083e4a34091bcbe5bdb41027e310ebba8f7d96a98671","affectsGlobalScope":true,"impliedFormat":1},{"version":"8d697a2a929a5fcb38b7a65594020fcef05ec1630804a33748829c5ff53640d0","affectsGlobalScope":true,"impliedFormat":1},{"version":"4ff2a353abf8a80ee399af572debb8faab2d33ad38c4b4474cff7f26e7653b8d","affectsGlobalScope":true,"impliedFormat":1},{"version":"fb0f136d372979348d59b3f5020b4cdb81b5504192b1cacff5d1fbba29378aa1","affectsGlobalScope":true,"impliedFormat":1},{"version":"d15bea3d62cbbdb9797079416b8ac375ae99162a7fba5de2c6c505446486ac0a","affectsGlobalScope":true,"impliedFormat":1},{"version":"68d18b664c9d32a7336a70235958b8997ebc1c3b8505f4f1ae2b7e7753b87618","affectsGlobalScope":true,"impliedFormat":1},{"version":"eb3d66c8327153d8fa7dd03f9c58d351107fe824c79e9b56b462935176cdf12a","affectsGlobalScope":true,"impliedFormat":1},{"version":"38f0219c9e23c915ef9790ab1d680440d95419ad264816fa15009a8851e79119","affectsGlobalScope":true,"impliedFormat":1},{"version":"69ab18c3b76cd9b1be3d188eaf8bba06112ebbe2f47f6c322b5105a6fbc45a2e","affectsGlobalScope":true,"impliedFormat":1},{"version":"a680117f487a4d2f30ea46f1b4b7f58bef1480456e18ba53ee85c2746eeca012","affectsGlobalScope":true,"impliedFormat":1},{"version":"2f11ff796926e0832f9ae148008138ad583bd181899ab7dd768a2666700b1893","affectsGlobalScope":true,"impliedFormat":1},{"version":"4de680d5bb41c17f7f68e0419412ca23c98d5749dcaaea1896172f06435891fc","affectsGlobalScope":true,"impliedFormat":1},{"version":"954296b30da6d508a104a3a0b5d96b76495c709785c1d11610908e63481ee667","affectsGlobalScope":true,"impliedFormat":1},{"version":"ac9538681b19688c8eae65811b329d3744af679e0bdfa5d842d0e32524c73e1c","affectsGlobalScope":true,"impliedFormat":1},{"version":"0a969edff4bd52585473d24995c5ef223f6652d6ef46193309b3921d65dd4376","affectsGlobalScope":true,"impliedFormat":1},{"version":"9e9fbd7030c440b33d021da145d3232984c8bb7916f277e8ffd3dc2e3eae2bdb","affectsGlobalScope":true,"impliedFormat":1},{"version":"811ec78f7fefcabbda4bfa93b3eb67d9ae166ef95f9bff989d964061cbf81a0c","affectsGlobalScope":true,"impliedFormat":1},{"version":"717937616a17072082152a2ef351cb51f98802fb4b2fdabd32399843875974ca","affectsGlobalScope":true,"impliedFormat":1},{"version":"d7e7d9b7b50e5f22c915b525acc5a49a7a6584cf8f62d0569e557c5cfc4b2ac2","affectsGlobalScope":true,"impliedFormat":1},{"version":"71c37f4c9543f31dfced6c7840e068c5a5aacb7b89111a4364b1d5276b852557","affectsGlobalScope":true,"impliedFormat":1},{"version":"576711e016cf4f1804676043e6a0a5414252560eb57de9faceee34d79798c850","affectsGlobalScope":true,"impliedFormat":1},{"version":"89c1b1281ba7b8a96efc676b11b264de7a8374c5ea1e6617f11880a13fc56dc6","affectsGlobalScope":true,"impliedFormat":1},{"version":"74f7fa2d027d5b33eb0471c8e82a6c87216223181ec31247c357a3e8e2fddc5b","affectsGlobalScope":true,"impliedFormat":1},{"version":"d6d7ae4d1f1f3772e2a3cde568ed08991a8ae34a080ff1151af28b7f798e22ca","affectsGlobalScope":true,"impliedFormat":1},{"version":"063600664504610fe3e99b717a1223f8b1900087fab0b4cad1496a114744f8df","affectsGlobalScope":true,"impliedFormat":1},{"version":"934019d7e3c81950f9a8426d093458b65d5aff2c7c1511233c0fd5b941e608ab","affectsGlobalScope":true,"impliedFormat":1},{"version":"52ada8e0b6e0482b728070b7639ee42e83a9b1c22d205992756fe020fd9f4a47","affectsGlobalScope":true,"impliedFormat":1},{"version":"3bdefe1bfd4d6dee0e26f928f93ccc128f1b64d5d501ff4a8cf3c6371200e5e6","affectsGlobalScope":true,"impliedFormat":1},{"version":"59fb2c069260b4ba00b5643b907ef5d5341b167e7d1dbf58dfd895658bda2867","affectsGlobalScope":true,"impliedFormat":1},{"version":"639e512c0dfc3fad96a84caad71b8834d66329a1f28dc95e3946c9b58176c73a","affectsGlobalScope":true,"impliedFormat":1},{"version":"368af93f74c9c932edd84c58883e736c9e3d53cec1fe24c0b0ff451f529ceab1","affectsGlobalScope":true,"impliedFormat":1},{"version":"8e7f8264d0fb4c5339605a15daadb037bf238c10b654bb3eee14208f860a32ea","affectsGlobalScope":true,"impliedFormat":1},{"version":"782dec38049b92d4e85c1585fbea5474a219c6984a35b004963b00beb1aab538","affectsGlobalScope":true,"impliedFormat":1},{"version":"6c7176368037af28cb72f2392010fa1cef295d6d6744bca8cfb54985f3a18c3e","affectsGlobalScope":true,"impliedFormat":1},{"version":"ab41ef1f2cdafb8df48be20cd969d875602483859dc194e9c97c8a576892c052","affectsGlobalScope":true,"impliedFormat":1},{"version":"437e20f2ba32abaeb7985e0afe0002de1917bc74e949ba585e49feba65da6ca1","affectsGlobalScope":true,"impliedFormat":1},{"version":"21d819c173c0cf7cc3ce57c3276e77fd9a8a01d35a06ad87158781515c9a438a","impliedFormat":1},{"version":"a79e62f1e20467e11a904399b8b18b18c0c6eea6b50c1168bf215356d5bebfaf","affectsGlobalScope":true,"impliedFormat":1},{"version":"32cb3140d0e9cee0aea7264fd6a1d297394052a18eb05ca0220d133e6c043fb5","affectsGlobalScope":true,"impliedFormat":1},{"version":"4cd063dece3d968dc7c9046ef1fe75918a8854b115d28ec4a3168d89e602715d","affectsGlobalScope":true,"impliedFormat":1},{"version":"1db0b7dca579049ca4193d034d835f6bfe73096c73663e5ef9a0b5779939f3d0","affectsGlobalScope":true,"impliedFormat":1},{"version":"9798340ffb0d067d69b1ae5b32faa17ab31b82466a3fc00d8f2f2df0c8554aaa","affectsGlobalScope":true,"impliedFormat":1},{"version":"dc27badd4bf4a2b0024a0cd32a9bbf0be7073902c5177a58be14242e7d8bf2c7","affectsGlobalScope":true,"impliedFormat":1},{"version":"5929864ce17fba74232584d90cb721a89b7ad277220627cc97054ba15a98ea8f","impliedFormat":1},{"version":"7180c03fd3cb6e22f911ce9ba0f8a7008b1a6ddbe88ccf16a9c8140ef9ac1686","impliedFormat":1},{"version":"25c8056edf4314820382a5fdb4bb7816999acdcb929c8f75e3f39473b87e85bc","impliedFormat":1},{"version":"54cb85a47d760da1c13c00add10d26b5118280d44d58e6908d8e89abbd9d7725","impliedFormat":1},{"version":"3e4825171442666d31c845aeb47fcd34b62e14041bb353ae2b874285d78482aa","impliedFormat":1},{"version":"c6fd2c5a395f2432786c9cb8deb870b9b0e8ff7e22c029954fabdd692bff6195","impliedFormat":1},{"version":"a967bfe3ad4e62243eb604bf956101e4c740f5921277c60debaf325c1320bf88","impliedFormat":1},{"version":"e9775e97ac4877aebf963a0289c81abe76d1ec9a2a7778dbe637e5151f25c5f3","impliedFormat":1},{"version":"471e1da5a78350bc55ef8cef24eb3aca6174143c281b8b214ca2beda51f5e04a","impliedFormat":1},{"version":"cadc8aced301244057c4e7e73fbcae534b0f5b12a37b150d80e5a45aa4bebcbd","impliedFormat":1},{"version":"385aab901643aa54e1c36f5ef3107913b10d1b5bb8cbcd933d4263b80a0d7f20","impliedFormat":1},{"version":"9670d44354bab9d9982eca21945686b5c24a3f893db73c0dae0fd74217a4c219","impliedFormat":1},{"version":"db3435f3525cd785bf21ec6769bf8da7e8a776be1a99e2e7efb5f244a2ef5fee","impliedFormat":1},{"version":"c3b170c45fc031db31f782e612adf7314b167e60439d304b49e704010e7bafe5","impliedFormat":1},{"version":"40383ebef22b943d503c6ce2cb2e060282936b952a01bea5f9f493d5fb487cc7","impliedFormat":1},{"version":"4893a895ea92c85345017a04ed427cbd6a1710453338df26881a6019432febdd","impliedFormat":1},{"version":"3a84b7cb891141824bd00ef8a50b6a44596aded4075da937f180c90e362fe5f6","impliedFormat":1},{"version":"13f6f39e12b1518c6650bbb220c8985999020fe0f21d818e28f512b7771d00f9","impliedFormat":1},{"version":"9b5369969f6e7175740bf51223112ff209f94ba43ecd3bb09eefff9fd675624a","impliedFormat":1},{"version":"4fe9e626e7164748e8769bbf74b538e09607f07ed17c2f20af8d680ee49fc1da","impliedFormat":1},{"version":"24515859bc0b836719105bb6cc3d68255042a9f02a6022b3187948b204946bd2","impliedFormat":1},{"version":"33203609eba548914dc83ddf6cadbc0bcb6e8ef89f6d648ca0908ae887f9fcc5","impliedFormat":1},{"version":"0db18c6e78ea846316c012478888f33c11ffadab9efd1cc8bcc12daded7a60b6","impliedFormat":1},{"version":"89167d696a849fce5ca508032aabfe901c0868f833a8625d5a9c6e861ef935d2","impliedFormat":1},{"version":"e53a3c2a9f624d90f24bf4588aacd223e7bec1b9d0d479b68d2f4a9e6011147f","impliedFormat":1},{"version":"339dc5265ee5ed92e536a93a04c4ebbc2128f45eeec6ed29f379e0085283542c","impliedFormat":1},{"version":"9f0a92164925aa37d4a5d9dd3e0134cff8177208dba55fd2310cd74beea40ee2","impliedFormat":1},{"version":"8bfdb79bf1a9d435ec48d9372dc93291161f152c0865b81fc0b2694aedb4578d","impliedFormat":1},{"version":"2e85db9e6fd73cfa3d7f28e0ab6b55417ea18931423bd47b409a96e4a169e8e6","impliedFormat":1},{"version":"c46e079fe54c76f95c67fb89081b3e399da2c7d109e7dca8e4b58d83e332e605","impliedFormat":1},{"version":"d32275be3546f252e3ad33976caf8c5e842c09cb87d468cb40d5f4cf092d1acc","impliedFormat":1},{"version":"4a0c3504813a3289f7fb1115db13967c8e004aa8e4f8a9021b95285502221bd1","impliedFormat":1},{"version":"b972357e61ef2e072f8a88b9f4f5a70984c417237e6106f6b2390414a09ce523","affectsGlobalScope":true,"impliedFormat":1},{"version":"076cac5898bd833255def0f7c5717b83534212873505c9c958f1926d49f9bec6","impliedFormat":1},{"version":"7394959e5a741b185456e1ef5d64599c36c60a323207450991e7a42e08911419","impliedFormat":1},{"version":"75eb536b960b85f75e21490beeab53ea616646a995ad203e1af532d67a774fb6","impliedFormat":1},{"version":"36d0976d3dad74078f707af107b5082dbe42ffcadb3442ff140c36c8a33b4887","affectsGlobalScope":true,"impliedFormat":1},{"version":"86e0d632e9ef88593e8724ffb6af05104e13a08f9d8df733a30f9991ac387fff","impliedFormat":1},{"version":"7646ad748a9ca15bf43d4c88f83cc851c67f8ec9c1186295605b59ba6bb36dcb","impliedFormat":1},{"version":"cef8931bc129687165253f0642427c2a72705a4613b3ac461b9fa78c7cdaef32","affectsGlobalScope":true,"impliedFormat":1},{"version":"5524481e56c48ff486f42926778c0a3cce1cc85dc46683b92b1271865bcf015a","impliedFormat":1},{"version":"47b62c294beb69daa5879f052e416b02e6518f3e4541ae98adbfb27805dd6711","impliedFormat":1},{"version":"f8375506002c556ec412c7e2a5a9ece401079ee5d9eb2c1372e9f5377fac56c7","impliedFormat":1},{"version":"8edd6482bd72eca772f9df15d05c838dd688cdbd4d62690891fca6578cfda6fe","impliedFormat":1},{"version":"07ba29a1a495b710aea48a4cf19ae12b3cbda2a8e9ac62192af477027a99e8de","impliedFormat":1},{"version":"6dead64c944504250dd2fc9095231f36887cfc1534f1ff57737c19f92d165c91","impliedFormat":1},{"version":"b9a4824bb83f25d6d227394db2ed99985308cf2a3a35f0d6d39aa72b15473982","impliedFormat":1},{"version":"6e9948b1e396106601365283680c319a9103c71a5725e7d03e26fe246df60c4c","affectsGlobalScope":true,"impliedFormat":1},{"version":"8e8e284b3832911aeede987e4d74cf0a00f2b03896b2fd3bf924344cc0f96b3c","impliedFormat":1},{"version":"37d37474a969ab1b91fc332eb6a375885dfd25279624dfa84dea48c9aedf4472","impliedFormat":1},{"version":"7a8e1d821c2f91f943efda82428a260894a3e05bee47f1228a8268dd5fd3d953","impliedFormat":1},{"version":"f1a79b6047d006548185e55478837dfbcdd234d6fe51532783f5dffd401cfb2b","impliedFormat":1},{"version":"cbc91187014fb1e738ef252751a9f84abf2989ec1c3b1637ec23b5b39cdf3d25","impliedFormat":1},{"version":"e822320b448edce0c7ede9cbeada034c72e1f1c8c8281974817030564c63dcb1","impliedFormat":1},{"version":"9d65568cba17c9db40251023406668695ad698ea4a34542364af3e78edd37811","affectsGlobalScope":true,"impliedFormat":1},{"version":"f23e3d484de54d235bf702072100b541553a1df2550bad691fe84995e15cf7be","impliedFormat":1},{"version":"821c79b046e40d54a447bebd9307e70b86399a89980a87bbc98114411169e274","impliedFormat":1},{"version":"17bc38afc78d40b2f54af216c0cc31a4bd0c6897a5945fa39945dfc43260be2c","impliedFormat":1},{"version":"d201b44ff390c220a94fb0ff6a534fe9fa15b44f8a86d0470009cdde3a3e62ab","affectsGlobalScope":true,"impliedFormat":1},{"version":"d44445141f204d5672c502a39c1124bcf1df225eba05df0d2957f79122be87b5","affectsGlobalScope":true,"impliedFormat":1},{"version":"de905bc5f7e7a81cb420e212b95ab5e3ab840f93e0cfa8ce879f6e7fa465d4a2","impliedFormat":1},{"version":"bc2ff43214898bc6d53cab92fb41b5309efec9cbb59a0650525980aee994de2b","impliedFormat":1},{"version":"bede3143eeddca3b8ec3592b09d7eb02042f9e195251040c5146eac09b173236","impliedFormat":1},{"version":"64a40cf4ec8a7a29db2b4bc35f042e5be8537c4be316e5221f40f30ca8ed7051","impliedFormat":1},{"version":"294c082d609e6523520290db4f1d54114ebc83643fb42abd965be5bcc5d9416b","impliedFormat":1},{"version":"cf7d740e39bd8adbdc7840ee91bef0af489052f6467edfcefb7197921757ec3b","impliedFormat":1},{"version":"37ba7b45141a45ce6e80e66f2a96c8a5ab1bcef0fc2d0f56bb58df96ec67e972","impliedFormat":1},{"version":"125d792ec6c0c0f657d758055c494301cc5fdb327d9d9d5960b3f129aff76093","impliedFormat":1},{"version":"b9f0681c4d2cb00a5cfe08a7be9662627b912de562926819ebddfe2ef6a9b5ee","affectsGlobalScope":true,"impliedFormat":1},{"version":"b85151402164ab7cb665e58df5c1a29aa25ea4ed3a367f84a15589e7d7a9c8ca","impliedFormat":1},{"version":"89eb8abe2b5c146fbb8f3bf72f4e91de3541f2fb559ad5fed4ad5bf223a3dedb","impliedFormat":1},{"version":"bc6cb10764a82f3025c0f4822b8ad711c16d1a5c75789be2d188d553b69b2d48","affectsGlobalScope":true,"impliedFormat":1},{"version":"41d510caf7ed692923cb6ef5932dc9cf1ed0f57de8eb518c5bab8358a21af674","impliedFormat":1},{"version":"2751c5a6b9054b61c9b03b3770b2d39b1327564672b63e3485ac03ffeb28b4f6","impliedFormat":1},{"version":"dc058956a93388aab38307b7b3b9b6379e1021e73a244aab6ac9427dc3a252a7","impliedFormat":1},{"version":"f33302cf240672359992c356f2005d395b559e176196d03f31a28cc7b01e69bc","impliedFormat":1},{"version":"3ce25041ff6ae06c08fcaccd5fcd9baf4ca6e80e6cb5a922773a1985672e74c2","affectsGlobalScope":true,"impliedFormat":1},{"version":"652c0de14329a834ff06af6ad44670fac35849654a464fd9ae36edb92a362c12","affectsGlobalScope":true,"impliedFormat":1},{"version":"3b1e178016d3fc554505ae087c249b205b1c50624d482c542be9d4682bab81fc","impliedFormat":1},{"version":"5db7c5bb02ef47aaaec6d262d50c4e9355c80937d649365c343fa5e84569621d","impliedFormat":1},{"version":"cf45d0510b661f1da461479851ff902f188edb111777c37055eff12fa986a23a","impliedFormat":1},{"version":"6831f13f06a15391dfeb2477d48ac58311ab675f85846a05499ee92d6e856933","affectsGlobalScope":true,"impliedFormat":1},{"version":"37bef1064b7d015aeaa7c0716fe23a0b3844abe2c0a3df7144153ca8445fe0da","impliedFormat":1},{"version":"83178a1174286d5f5178c5c75067e36c41b975c26be7b86d99cb18393eb30a41","impliedFormat":1},{"version":"151ff381ef9ff8da2da9b9663ebf657eac35c4c9a19183420c05728f31a6761d","impliedFormat":1},{"version":"67f0933742a1e547fc31cc52c4183b2be0726ffa9689586b761cef241ca6b251","affectsGlobalScope":true,"impliedFormat":1},{"version":"a660aa95476042d3fdcc1343cf6bb8fdf24772d31712b1db321c5a4dcc325434","impliedFormat":1},{"version":"282f98006ed7fa9bb2cd9bdbe2524595cfc4bcd58a0bb3232e4519f2138df811","impliedFormat":1},{"version":"6222e987b58abfe92597e1273ad7233626285bc2d78409d4a7b113d81a83496b","impliedFormat":1},{"version":"cbe726263ae9a7bf32352380f7e8ab66ee25b3457137e316929269c19e18a2be","impliedFormat":1},{"version":"8b96046bf5fb0a815cba6b0880d9f97b7f3a93cf187e8dcfe8e2792e97f38f87","impliedFormat":99},{"version":"bacf2c84cf448b2cd02c717ad46c3d7fd530e0c91282888c923ad64810a4d511","affectsGlobalScope":true,"impliedFormat":1},{"version":"402e5c534fb2b85fa771170595db3ac0dd532112c8fa44fc23f233bc6967488b","impliedFormat":1},{"version":"8885cf05f3e2abf117590bbb951dcf6359e3e5ac462af1c901cfd24c6a6472e2","impliedFormat":1},{"version":"333caa2bfff7f06017f114de738050dd99a765c7eb16571c6d25a38c0d5365dc","impliedFormat":1},{"version":"e61df3640a38d535fd4bc9f4a53aef17c296b58dc4b6394fd576b808dd2fe5e6","impliedFormat":1},{"version":"459920181700cec8cbdf2a5faca127f3f17fd8dd9d9e577ed3f5f3af5d12a2e4","impliedFormat":1},{"version":"4719c209b9c00b579553859407a7e5dcfaa1c472994bd62aa5dd3cc0757eb077","impliedFormat":1},{"version":"7ec359bbc29b69d4063fe7dad0baaf35f1856f914db16b3f4f6e3e1bca4099fa","impliedFormat":1},{"version":"70790a7f0040993ca66ab8a07a059a0f8256e7bb57d968ae945f696cbff4ac7a","impliedFormat":1},{"version":"d1b9a81e99a0050ca7f2d98d7eedc6cda768f0eb9fa90b602e7107433e64c04c","impliedFormat":1},{"version":"a022503e75d6953d0e82c2c564508a5c7f8556fad5d7f971372d2d40479e4034","impliedFormat":1},{"version":"b215c4f0096f108020f666ffcc1f072c81e9f2f95464e894a5d5f34c5ea2a8b1","impliedFormat":1},{"version":"644491cde678bd462bb922c1d0cfab8f17d626b195ccb7f008612dc31f445d2d","impliedFormat":1},{"version":"dfe54dab1fa4961a6bcfba68c4ca955f8b5bbeb5f2ab3c915aa7adaa2eabc03a","impliedFormat":1},{"version":"1251d53755b03cde02466064260bb88fd83c30006a46395b7d9167340bc59b73","impliedFormat":1},{"version":"47865c5e695a382a916b1eedda1b6523145426e48a2eae4647e96b3b5e52024f","impliedFormat":1},{"version":"4cdf27e29feae6c7826cdd5c91751cc35559125e8304f9e7aed8faef97dcf572","impliedFormat":1},{"version":"331b8f71bfae1df25d564f5ea9ee65a0d847c4a94baa45925b6f38c55c7039bf","impliedFormat":1},{"version":"2a771d907aebf9391ac1f50e4ad37952943515eeea0dcc7e78aa08f508294668","impliedFormat":1},{"version":"0146fd6262c3fd3da51cb0254bb6b9a4e42931eb2f56329edd4c199cb9aaf804","impliedFormat":1},{"version":"183f480885db5caa5a8acb833c2be04f98056bdcc5fb29e969ff86e07efe57ab","impliedFormat":99},{"version":"82e687ebd99518bc63ea04b0c3810fb6e50aa6942decd0ca6f7a56d9b9a212a6","impliedFormat":99},{"version":"7f698624bbbb060ece7c0e51b7236520ebada74b747d7523c7df376453ed6fea","impliedFormat":1},{"version":"8f07f2b6514744ac96e51d7cb8518c0f4de319471237ea10cf688b8d0e9d0225","impliedFormat":1},{"version":"257b83faa134d971c738a6b9e4c47e59bb7b23274719d92197580dd662bfafc3","impliedFormat":99},{"version":"a28ac3e717907284b3910b8e9b3f9844a4e0b0a861bea7b923e5adf90f620330","impliedFormat":1},{"version":"b6d03c9cfe2cf0ba4c673c209fcd7c46c815b2619fd2aad59fc4229aaef2ed43","impliedFormat":1},{"version":"82e5a50e17833a10eb091923b7e429dc846d42f1c6161eb6beeb964288d98a15","impliedFormat":1},{"version":"670a76db379b27c8ff42f1ba927828a22862e2ab0b0908e38b671f0e912cc5ed","impliedFormat":1},{"version":"13b77ab19ef7aadd86a1e54f2f08ea23a6d74e102909e3c00d31f231ed040f62","impliedFormat":1},{"version":"069bebfee29864e3955378107e243508b163e77ab10de6a5ee03ae06939f0bb9","impliedFormat":1},{"version":"26e0ffceb2198feb1ef460d5d14111c69ad07d44c5a67fd4bfeb74c969aa9afb","impliedFormat":99},{"version":"87ac60e3714684634c176021d3086b9717730ea98f44f7397036dc52dac98eca","signature":"4b96dd19fd2949d28ce80e913412b0026dc421e5bf6c31d87c7b5eb11b5753b4"},{"version":"736097ddbb2903bef918bb3b5811ef1c9c5656f2a73bd39b22a91b9cc2525e50","impliedFormat":1},{"version":"4340936f4e937c452ae783514e7c7bbb7fc06d0c97993ff4865370d0962bb9cf","impliedFormat":1},{"version":"b70c7ea83a7d0de17a791d9b5283f664033a96362c42cc4d2b2e0bdaa65ef7d1","impliedFormat":1},{"version":"87d9d29dbc745f182683f63187bf3d53fd8673e5fca38ad5eaab69798ed29fbc","impliedFormat":1},{"version":"eb5b19b86227ace1d29ea4cf81387279d04bb34051e944bc53df69f58914b788","affectsGlobalScope":true,"impliedFormat":1},{"version":"8a8eb4ebffd85e589a1cc7c178e291626c359543403d58c9cd22b81fab5b1fb9","impliedFormat":1},{"version":"ddb7652e1e97673432651dd82304d1743be783994c76e4b99b4a025e81e1bc78","affectsGlobalScope":true,"impliedFormat":1},{"version":"17ed71200119e86ccef2d96b73b02ce8854b76ad6bd21b5021d4269bec527b5f","impliedFormat":1}],"root":[183],"options":{"allowSyntheticDefaultImports":true,"composite":true,"module":99,"skipLibCheck":true},"referencedMap":[[178,1],[176,2],[181,3],[177,1],[179,4],[180,1],[144,2],[185,2],[186,5],[93,6],[94,6],[95,7],[55,8],[96,9],[97,10],[98,11],[50,2],[53,12],[51,2],[52,2],[99,13],[100,14],[101,15],[102,16],[103,17],[104,18],[105,18],[106,19],[107,20],[108,21],[109,22],[56,2],[54,2],[110,23],[111,24],[112,25],[143,26],[113,27],[114,28],[115,29],[116,30],[117,31],[118,32],[119,33],[120,34],[121,35],[122,36],[123,36],[124,37],[125,38],[127,39],[126,40],[128,41],[129,42],[130,43],[131,44],[132,45],[133,46],[134,47],[135,48],[136,49],[137,50],[138,51],[139,52],[140,53],[57,2],[58,2],[59,2],[92,54],[141,55],[142,56],[187,2],[191,57],[188,2],[190,58],[182,59],[189,2],[151,2],[184,60],[168,61],[166,62],[167,63],[155,64],[156,62],[163,65],[154,66],[159,67],[169,2],[160,68],[165,69],[171,70],[170,71],[153,72],[161,73],[162,74],[157,75],[164,61],[158,76],[146,77],[145,78],[152,2],[1,2],[48,2],[49,2],[9,2],[13,2],[12,2],[3,2],[14,2],[15,2],[16,2],[17,2],[18,2],[19,2],[20,2],[21,2],[4,2],[22,2],[23,2],[5,2],[24,2],[28,2],[25,2],[26,2],[27,2],[29,2],[30,2],[31,2],[6,2],[32,2],[33,2],[34,2],[35,2],[7,2],[39,2],[36,2],[37,2],[38,2],[40,2],[8,2],[41,2],[46,2],[47,2],[42,2],[43,2],[44,2],[45,2],[2,2],[11,2],[10,2],[75,79],[82,80],[74,79],[89,81],[66,82],[65,83],[88,84],[83,85],[86,86],[68,87],[67,88],[63,89],[62,84],[85,90],[64,91],[69,92],[70,2],[73,92],[60,2],[91,93],[90,92],[77,94],[78,95],[80,96],[76,97],[79,98],[84,84],[71,99],[72,100],[81,101],[61,102],[87,103],[175,104],[172,105],[150,106],[148,107],[147,2],[149,108],[173,2],[174,109],[183,110]],"latestChangedDtsFile":"./vite.config.d.ts","version":"5.9.3"}
----[6]
tsconfig.node.json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
----[7]
tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
----[8]
tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // GitHub风格配色
        primary: '#2F81F7', // GitHub蓝色
        success: '#28A745', // GitHub绿色
        neutral: {
          50: '#F6F8FA', // GitHub浅灰背景
          100: '#EAECEF', // GitHub次要背景
          200: '#D1D5DB', // 边框色
          300: '#9CA3AF', // 次要文字
          400: '#6B7280', // 中等文字
          500: '#4B5563', // 主要文字
          600: '#374151', // 强调文字
          700: '#1F2937', // 重要文字
          800: '#111827', // 深色
          900: '#030712', // 最深色
        }
      },
      fontFamily: {
        inter: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      // GitHub风格的阴影效果
      boxShadow: {
        'github': '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
        'github-hover': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
      },
      // 圆角优化（GitHub风格更扁平）
      borderRadius: {
        'github': '6px',
      },
    },
  },
  plugins: [],
}
----[9]
README.md
# Notion AI Template Studio

A powerful tool to transform your Notion pages into beautiful, sellable products. Generate professional landing pages, AI-powered user guides, and ready-to-sell packages in minutes.

## 🌟 Features

- **Beautiful Landing Pages**: Convert your Notion pages into stunning, responsive HTML landing pages ready for deployment.
- **AI-Powered User Guides**: Automatically generate detailed, easy-to-understand user guides for your templates.
- **Ready-to-Sell Packages**: Export everything you need in a single ZIP file, including landing page, guide, and template link.
- **Customizable**: Tailor the generated content to match your brand and style.
- **No Coding Required**: Simple, intuitive interface that anyone can use.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0 or later)
- npm (v6.0 or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/notion-template-studio.git
cd notion-template-studio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📖 Usage

1. **Enter Your Notion Link**: Paste the URL of the Notion page you want to convert.
2. **Generate Preview**: Click the "Generate Preview" button to create your landing page and AI guide.
3. **Review and Customize**: Preview the generated content and make any necessary adjustments.
4. **Export Package**: Download your complete product package ready for selling.

## 🔧 Configuration

To use the full functionality, you'll need to set up API keys for Notion and AI services:

1. Create a `.env` file in the root directory
2. Add your API keys:
```env
NOTION_API_KEY=your-notion-api-key
AI_API_KEY=your-ai-api-key
```

> **Note**: For demonstration purposes, the application uses mock data without requiring actual API keys.

## 📦 Project Structure

```
notion-template-studio/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── demo-preview.html   # Demo preview page
├── src/                    # Source code
│   ├── assets/             # Images and icons
│   ├── components/         # React components
│   ├── services/           # API services
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation
```

## 🛠️ Technologies Used

- **React**: Frontend library for building user interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Notion API**: For accessing Notion page content
- **AI API**: For generating user guides and marketing content
- **JSZip**: For creating ZIP packages
- **FileSaver.js**: For downloading files

## 📚 Documentation

### API Services

- **notionAPI.js**: Handles communication with the Notion API to fetch page content.
- **aiService.js**: Integrates with AI services to generate user guides and marketing copy.
- **exportService.js**: Generates ZIP packages containing all necessary files for selling.

### Utility Functions

- **notionParser.js**: Parses Notion page content into a structured format.
- **htmlGenerator.js**: Generates HTML landing pages from parsed Notion content.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

If you have any questions or need help, please open an issue or contact support@example.com.

---

Build with 💙 by Notion AI Template Studio Team
----[10]
package.json
{
  "name": "notion-template-studio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@notionhq/client": "^2.2.13",
    "file-saver": "^2.0.5",
    "jszip": "^3.10.1",
    "lucide-react": "^0.544.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^7.9.3"
  },
  "devDependencies": {
    "@types/react": "^18.3.25",
    "@types/react-dom": "^18.3.7",
    "@typescript-eslint/eslint-plugin": "^8.45.0",
    "@typescript-eslint/parser": "^8.45.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.4",
    "typescript": "^5.9.3",
    "vite": "^5.0.8"
  }
}

----[11]
package-lock.json
{
  "name": "notion-template-studio",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "notion-template-studio",
      "version": "0.0.0",
      "dependencies": {
        "@notionhq/client": "^2.2.13",
        "file-saver": "^2.0.5",
        "jszip": "^3.10.1",
        "lucide-react": "^0.544.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^7.9.3"
      },
      "devDependencies": {
        "@types/react": "^18.3.25",
        "@types/react-dom": "^18.3.7",
        "@typescript-eslint/eslint-plugin": "^8.45.0",
        "@typescript-eslint/parser": "^8.45.0",
        "@vitejs/plugin-react": "^4.2.1",
        "autoprefixer": "^10.4.16",
        "eslint": "^8.55.0",
        "eslint-plugin-react": "^7.33.2",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-refresh": "^0.4.5",
        "postcss": "^8.4.31",
        "tailwindcss": "^3.3.4",
        "typescript": "^5.9.3",
        "vite": "^5.0.8"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmmirror.com/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmmirror.com/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.4",
      "resolved": "https://registry.npmmirror.com/@babel/compat-data/-/compat-data-7.28.4.tgz",
      "integrity": "sha512-YsmSKC29MJwf0gF8Rjjrg5LQCmyh+j/nD8/eP7f+BeoQTKYqs9RoWbjGOdy0+1Ekr68RJZMUOPVQaQisnIo4Rw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.4",
      "resolved": "https://registry.npmmirror.com/@babel/core/-/core-7.28.4.tgz",
      "integrity": "sha512-2BCOP7TN8M+gVDj7/ht3hsaO/B/n5oDbiAyyvnRlNOs+u1o+JWNYTQrmpuNp1/Wq2gcFrI01JAW+paEKDMx/CA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.3",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.4",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.4",
        "@babel/types": "^7.28.4",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.3",
      "resolved": "https://registry.npmmirror.com/@babel/generator/-/generator-7.28.3.tgz",
      "integrity": "sha512-3lSpxGgvnmZznmBkCRnVREPUFJv2wrv9iAoFDvADJc0ypmdOxdUtcLeBgBJ6zE0PMeTKnxeQzyk0xTBq4Ep7zw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.3",
        "@babel/types": "^7.28.2",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmmirror.com/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmmirror.com/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmmirror.com/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.3",
      "resolved": "https://registry.npmmirror.com/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
      "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "resolved": "https://registry.npmmirror.com/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
      "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmmirror.com/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.27.1",
      "resolved": "https://registry.npmmirror.com/@babel/helper-validator-identifier/-/helper-validator-identifier-7.27.1.tgz",
      "integrity": "sha512-D2hP9eA+Sqx1kBZgzxZh0y1trbuU+JoDkiEwqhQ36nodYqJwyEIhPSdMNd7lOm/4io72luTPWH20Yda0xOuUow==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmmirror.com/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.4",
      "resolved": "https://registry.npmmirror.com/@babel/helpers/-/helpers-7.28.4.tgz",
      "integrity": "sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.4",
      "resolved": "https://registry.npmmirror.com/@babel/parser/-/parser-7.28.4.tgz",
      "integrity": "sha512-yZbBqeM6TkpP9du/I2pUZnJsRMGGvOuIrhjzC1AwHwW+6he4mni6Bp/m8ijn0iOuZuPI2BfkCoSRunpyjnrQKg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.4"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.27.1",
      "resolved": "https://registry.npmmirror.com/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.27.1.tgz",
      "integrity": "sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.27.1",
      "resolved": "https://registry.npmmirror.com/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.27.1.tgz",
      "integrity": "sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmmirror.com/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.4",
      "resolved": "https://registry.npmmirror.com/@babel/traverse/-/traverse-7.28.4.tgz",
      "integrity": "sha512-YEzuboP2qvQavAcjgQNVgsvHIDv6ZpwXvcvjmyySP2DIMuByS/6ioU5G9pYrWHM6T2YDfc7xga9iNzYOs12CFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.3",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.4",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.4",
      "resolved": "https://registry.npmmirror.com/@babel/types/-/types-7.28.4.tgz",
      "integrity": "sha512-bkFqkLhh3pMBUQQkpVgWDWq/lqzc2678eUyDlTBhRqhCHFguYYGM0Efga7tYk4TogG/3x0EEl66/OQ+WGbWB/Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/aix-ppc64/-/aix-ppc64-0.21.5.tgz",
      "integrity": "sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/android-arm/-/android-arm-0.21.5.tgz",
      "integrity": "sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/android-arm64/-/android-arm64-0.21.5.tgz",
      "integrity": "sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/android-x64/-/android-x64-0.21.5.tgz",
      "integrity": "sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz",
      "integrity": "sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz",
      "integrity": "sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/freebsd-arm64/-/freebsd-arm64-0.21.5.tgz",
      "integrity": "sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/freebsd-x64/-/freebsd-x64-0.21.5.tgz",
      "integrity": "sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-arm/-/linux-arm-0.21.5.tgz",
      "integrity": "sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz",
      "integrity": "sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-ia32/-/linux-ia32-0.21.5.tgz",
      "integrity": "sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-loong64/-/linux-loong64-0.21.5.tgz",
      "integrity": "sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-mips64el/-/linux-mips64el-0.21.5.tgz",
      "integrity": "sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-ppc64/-/linux-ppc64-0.21.5.tgz",
      "integrity": "sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-riscv64/-/linux-riscv64-0.21.5.tgz",
      "integrity": "sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-s390x/-/linux-s390x-0.21.5.tgz",
      "integrity": "sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz",
      "integrity": "sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/netbsd-x64/-/netbsd-x64-0.21.5.tgz",
      "integrity": "sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/openbsd-x64/-/openbsd-x64-0.21.5.tgz",
      "integrity": "sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/sunos-x64/-/sunos-x64-0.21.5.tgz",
      "integrity": "sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/win32-arm64/-/win32-arm64-0.21.5.tgz",
      "integrity": "sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/win32-ia32/-/win32-ia32-0.21.5.tgz",
      "integrity": "sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
      "integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.0",
      "resolved": "https://registry.npmmirror.com/@eslint-community/eslint-utils/-/eslint-utils-4.9.0.tgz",
      "integrity": "sha512-ayVFHdtZ+hsq1t2Dy24wCmGXGe4q9Gu3smhLYALJrr473ZH27MsnSL+LKUlimp4BWJqMDMLmPpx/Q9R3OAlL4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.1",
      "resolved": "https://registry.npmmirror.com/@eslint-community/regexpp/-/regexpp-4.12.1.tgz",
      "integrity": "sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "2.1.4",
      "resolved": "https://registry.npmmirror.com/@eslint/eslintrc/-/eslintrc-2.1.4.tgz",
      "integrity": "sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.6.0",
        "globals": "^13.19.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/js": {
      "version": "8.57.1",
      "resolved": "https://registry.npmmirror.com/@eslint/js/-/js-8.57.1.tgz",
      "integrity": "sha512-d9zaMRSTIKDLhctzH12MtXvJKSSUhaHcjV+2Z+GK+EEY7XKpP5yR4x+N3TAcHTcu963nIr+TMcCb4DBCYX1z6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/@humanwhocodes/config-array": {
      "version": "0.13.0",
      "resolved": "https://registry.npmmirror.com/@humanwhocodes/config-array/-/config-array-0.13.0.tgz",
      "integrity": "sha512-DZLEEqFWQFiyK6h5YIeynKx7JlvCYWL0cImfSRXZ9l4Sg2efkFGTuFf6vzXjK1cq6IYkU+Eg/JizXw+TD2vRNw==",
      "deprecated": "Use @eslint/config-array instead",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanwhocodes/object-schema": "^2.0.3",
        "debug": "^4.3.1",
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=10.10.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmmirror.com/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/object-schema": {
      "version": "2.0.3",
      "resolved": "https://registry.npmmirror.com/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz",
      "integrity": "sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==",
      "deprecated": "Use @eslint/object-schema instead",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/@isaacs/cliui": {
      "version": "8.0.2",
      "resolved": "https://registry.npmmirror.com/@isaacs/cliui/-/cliui-8.0.2.tgz",
      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^5.1.2",
        "string-width-cjs": "npm:string-width@^4.2.0",
        "strip-ansi": "^7.0.1",
        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
        "wrap-ansi": "^8.1.0",
        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/ansi-regex": {
      "version": "6.2.2",
      "resolved": "https://registry.npmmirror.com/ansi-regex/-/ansi-regex-6.2.2.tgz",
      "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/strip-ansi": {
      "version": "7.1.2",
      "resolved": "https://registry.npmmirror.com/strip-ansi/-/strip-ansi-7.1.2.tgz",
      "integrity": "sha512-gmBGslpoQJtgnMAvOVqGZpEz9dyoKTCzy2nfz/n8aIFhN/jCE/rCmcxabB6jOOHV+0WNnylOxaxBQPSvcWklhA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmmirror.com/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmmirror.com/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmmirror.com/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmmirror.com/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmmirror.com/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmmirror.com/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmmirror.com/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmmirror.com/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@notionhq/client": {
      "version": "2.3.0",
      "resolved": "https://registry.npmmirror.com/@notionhq/client/-/client-2.3.0.tgz",
      "integrity": "sha512-l7WqTCpQqC+HibkB9chghONQTYcxNQT0/rOJemBfmuKQRTu2vuV8B3yA395iKaUdDo7HI+0KvQaz9687Xskzkw==",
      "license": "MIT",
      "dependencies": {
        "@types/node-fetch": "^2.5.10",
        "node-fetch": "^2.6.1"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@pkgjs/parseargs": {
      "version": "0.11.0",
      "resolved": "https://registry.npmmirror.com/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
      "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.27",
      "resolved": "https://registry.npmmirror.com/@rolldown/pluginutils/-/pluginutils-1.0.0-beta.27.tgz",
      "integrity": "sha512-+d0F4MKMCbeVUJwG96uQ4SgAznZNSq93I3V+9NHA4OpvqG8mRCpGdKmK8l/dl02h2CCDHwW2FqilnTyDcAnqjA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.52.3.tgz",
      "integrity": "sha512-h6cqHGZ6VdnwliFG1NXvMPTy/9PS3h8oLh7ImwR+kl+oYnQizgjxsONmmPSb2C66RksfkfIxEVtDSEcJiO0tqw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.52.3.tgz",
      "integrity": "sha512-wd+u7SLT/u6knklV/ifG7gr5Qy4GUbH2hMWcDauPFJzmCZUAJ8L2bTkVXC2niOIxp8lk3iH/QX8kSrUxVZrOVw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.52.3.tgz",
      "integrity": "sha512-lj9ViATR1SsqycwFkJCtYfQTheBdvlWJqzqxwc9f2qrcVrQaF/gCuBRTiTolkRWS6KvNxSk4KHZWG7tDktLgjg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.52.3.tgz",
      "integrity": "sha512-+Dyo7O1KUmIsbzx1l+4V4tvEVnVQqMOIYtrxK7ncLSknl1xnMHLgn7gddJVrYPNZfEB8CIi3hK8gq8bDhb3h5A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.52.3.tgz",
      "integrity": "sha512-u9Xg2FavYbD30g3DSfNhxgNrxhi6xVG4Y6i9Ur1C7xUuGDW3banRbXj+qgnIrwRN4KeJ396jchwy9bCIzbyBEQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.52.3.tgz",
      "integrity": "sha512-5M8kyi/OX96wtD5qJR89a/3x5x8x5inXBZO04JWhkQb2JWavOWfjgkdvUqibGJeNNaz1/Z1PPza5/tAPXICI6A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.52.3.tgz",
      "integrity": "sha512-IoerZJ4l1wRMopEHRKOO16e04iXRDyZFZnNZKrWeNquh5d6bucjezgd+OxG03mOMTnS1x7hilzb3uURPkJ0OfA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.52.3.tgz",
      "integrity": "sha512-ZYdtqgHTDfvrJHSh3W22TvjWxwOgc3ThK/XjgcNGP2DIwFIPeAPNsQxrJO5XqleSlgDux2VAoWQ5iJrtaC1TbA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.52.3.tgz",
      "integrity": "sha512-NcViG7A0YtuFDA6xWSgmFb6iPFzHlf5vcqb2p0lGEbT+gjrEEz8nC/EeDHvx6mnGXnGCC1SeVV+8u+smj0CeGQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.52.3.tgz",
      "integrity": "sha512-d3pY7LWno6SYNXRm6Ebsq0DJGoiLXTb83AIPCXl9fmtIQs/rXoS8SJxxUNtFbJ5MiOvs+7y34np77+9l4nfFMw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.52.3.tgz",
      "integrity": "sha512-3y5GA0JkBuirLqmjwAKwB0keDlI6JfGYduMlJD/Rl7fvb4Ni8iKdQs1eiunMZJhwDWdCvrcqXRY++VEBbvk6Eg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.52.3.tgz",
      "integrity": "sha512-AUUH65a0p3Q0Yfm5oD2KVgzTKgwPyp9DSXc3UA7DtxhEb/WSPfbG4wqXeSN62OG5gSo18em4xv6dbfcUGXcagw==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.52.3.tgz",
      "integrity": "sha512-1makPhFFVBqZE+XFg3Dkq+IkQ7JvmUrwwqaYBL2CE+ZpxPaqkGaiWFEWVGyvTwZace6WLJHwjVh/+CXbKDGPmg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.52.3.tgz",
      "integrity": "sha512-OOFJa28dxfl8kLOPMUOQBCO6z3X2SAfzIE276fwT52uXDWUS178KWq0pL7d6p1kz7pkzA0yQwtqL0dEPoVcRWg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.52.3.tgz",
      "integrity": "sha512-jMdsML2VI5l+V7cKfZx3ak+SLlJ8fKvLJ0Eoa4b9/vCUrzXKgoKxvHqvJ/mkWhFiyp88nCkM5S2v6nIwRtPcgg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.52.3.tgz",
      "integrity": "sha512-tPgGd6bY2M2LJTA1uGq8fkSPK8ZLYjDjY+ZLK9WHncCnfIz29LIXIqUgzCR0hIefzy6Hpbe8Th5WOSwTM8E7LA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.52.3.tgz",
      "integrity": "sha512-BCFkJjgk+WFzP+tcSMXq77ymAPIxsX9lFJWs+2JzuZTLtksJ2o5hvgTdIcZ5+oKzUDMwI0PfWzRBYAydAHF2Mw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.52.3.tgz",
      "integrity": "sha512-KTD/EqjZF3yvRaWUJdD1cW+IQBk4fbQaHYJUmP8N4XoKFZilVL8cobFSTDnjTtxWJQ3JYaMgF4nObY/+nYkumA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.52.3.tgz",
      "integrity": "sha512-+zteHZdoUYLkyYKObGHieibUFLbttX2r+58l27XZauq0tcWYYuKUwY2wjeCN9oK1Um2YgH2ibd6cnX/wFD7DuA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.52.3.tgz",
      "integrity": "sha512-of1iHkTQSo3kr6dTIRX6t81uj/c/b15HXVsPcEElN5sS859qHrOepM5p9G41Hah+CTqSh2r8Bm56dL2z9UQQ7g==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.52.3.tgz",
      "integrity": "sha512-s0hybmlHb56mWVZQj8ra9048/WZTPLILKxcvcq+8awSZmyiSUZjjem1AhU3Tf4ZKpYhK4mg36HtHDOe8QJS5PQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.52.3.tgz",
      "integrity": "sha512-zGIbEVVXVtauFgl3MRwGWEN36P5ZGenHRMgNw88X5wEhEBpq0XrMEZwOn07+ICrwM17XO5xfMZqh0OldCH5VTA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmmirror.com/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "resolved": "https://registry.npmmirror.com/@types/babel__generator/-/babel__generator-7.27.0.tgz",
      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmmirror.com/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "resolved": "https://registry.npmmirror.com/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
      "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmmirror.com/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "18.19.129",
      "resolved": "https://registry.npmmirror.com/@types/node/-/node-18.19.129.tgz",
      "integrity": "sha512-hrmi5jWt2w60ayox3iIXwpMEnfUvOLJCRtrOPbHtH15nTjvO7uhnelvrdAs0dO0/zl5DZ3ZbahiaXEVb54ca/A==",
      "license": "MIT",
      "dependencies": {
        "undici-types": "~5.26.4"
      }
    },
    "node_modules/@types/node-fetch": {
      "version": "2.6.13",
      "resolved": "https://registry.npmmirror.com/@types/node-fetch/-/node-fetch-2.6.13.tgz",
      "integrity": "sha512-QGpRVpzSaUs30JBSGPjOg4Uveu384erbHBoT1zeONvyCfwQxIkUshLAOqN/k9EjGviPRmWTTe6aH2qySWKTVSw==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "form-data": "^4.0.4"
      }
    },
    "node_modules/@types/prop-types": {
      "version": "15.7.15",
      "resolved": "https://registry.npmmirror.com/@types/prop-types/-/prop-types-15.7.15.tgz",
      "integrity": "sha512-F6bEyamV9jKGAFBEmlQnesRPGOQqS2+Uwi0Em15xenOxHaf2hv6L8YCVn3rPdPJOiJfPiCnLIRyvwVaqMY3MIw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "18.3.25",
      "resolved": "https://registry.npmmirror.com/@types/react/-/react-18.3.25.tgz",
      "integrity": "sha512-oSVZmGtDPmRZtVDqvdKUi/qgCsWp5IDY29wp8na8Bj4B3cc99hfNzvNhlMkVVxctkAOGUA3Km7MMpBHAnWfcIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/prop-types": "*",
        "csstype": "^3.0.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "18.3.7",
      "resolved": "https://registry.npmmirror.com/@types/react-dom/-/react-dom-18.3.7.tgz",
      "integrity": "sha512-MEe3UeoENYVFXzoXEWsvcpg6ZvlrFNlOQ7EOsvhI3CfAXwzPfO8Qwuxd40nepsYKqyyVQnTdEfv68q91yLcKrQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^18.0.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.45.0",
      "resolved": "https://registry.npmmirror.com/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.45.0.tgz",
      "integrity": "sha512-HC3y9CVuevvWCl/oyZuI47dOeDF9ztdMEfMH8/DW/Mhwa9cCLnK1oD7JoTVGW/u7kFzNZUKUoyJEqkaJh5y3Wg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.10.0",
        "@typescript-eslint/scope-manager": "8.45.0",
        "@typescript-eslint/type-utils": "8.45.0",
        "@typescript-eslint/utils": "8.45.0",
        "@typescript-eslint/visitor-keys": "8.45.0",
        "graphemer": "^1.4.0",
        "ignore": "^7.0.0",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.45.0",
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.5",
      "resolved": "https://registry.npmmirror.com/ignore/-/ignore-7.0.5.tgz",
      "integrity": "sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.45.0",
      "resolved": "https://registry.npmmirror.com/@typescript-eslint/parser/-/parser-8.45.0.tgz",
      "integrity": "sha512-TGf22kon8KW+DeKaUmOibKWktRY8b2NSAZNdtWh798COm1NWx8+xJ6iFBtk3IvLdv6+LGLJLRlyhrhEDZWargQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.45.0",
        "@typescript-eslint/types": "8.45.0",
        "@typescript-eslint/typescript-estree": "8.45.0",
        "@typescript-eslint/visitor-keys": "8.45.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.45.0",
      "resolved": "https://registry.npmmirror.com/@typescript-eslint/project-service/-/project-service-8.45.0.tgz",
      "integrity": "sha512-3pcVHwMG/iA8afdGLMuTibGR7pDsn9RjDev6CCB+naRsSYs2pns5QbinF4Xqw6YC/Sj3lMrm/Im0eMfaa61WUg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.45.0",
        "@typescript-eslint/types": "^8.45.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.45.0",
      "resolved": "https://registry.npmmirror.com/@typescript-eslint/scope-manager/-/scope-manager-8.45.0.tgz",
      "integrity": "sha512-clmm8XSNj/1dGvJeO6VGH7EUSeA0FMs+5au/u3lrA3KfG8iJ4u8ym9/j2tTEoacAffdW1TVUzXO30W1JTJS7dA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.45.0",
        "@typescript-eslint/visitor-keys": "8.45.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.45.0",
      "resolved": "https://registry.npmmirror.com/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.45.0.tgz",
      "integrity": "sha512-aFdr+c37sc+jqNMGhH+ajxPXwjv9UtFZk79k8pLoJ6p4y0snmYpPA52GuWHgt2ZF4gRRW6odsEj41uZLojDt5w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.45.0",
      "resolved": "https://registry.npmmirror.com/@typescript-eslint/type-utils/-/type-utils-8.45.0.tgz",
      "integrity": "sha512-bpjepLlHceKgyMEPglAeULX1vixJDgaKocp0RVJ5u4wLJIMNuKtUXIczpJCPcn2waII0yuvks/5m5/h3ZQKs0A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.45.0",
        "@typescript-eslint/typescript-estree": "8.45.0",
        "@typescript-eslint/utils": "8.45.0",
        "debug": "^4.3.4",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.45.0",
      "resolved": "https://registry.npmmirror.com/@typescript-eslint/types/-/types-8.45.0.tgz",
      "integrity": "sha512-WugXLuOIq67BMgQInIxxnsSyRLFxdkJEJu8r4ngLR56q/4Q5LrbfkFRH27vMTjxEK8Pyz7QfzuZe/G15qQnVRA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.45.0",
      "resolved": "https://registry.npmmirror.com/@typescript-eslint/typescript-estree/-/typescript-estree-8.45.0.tgz",
      "integrity": "sha512-GfE1NfVbLam6XQ0LcERKwdTTPlLvHvXXhOeUGC1OXi4eQBoyy1iVsW+uzJ/J9jtCz6/7GCQ9MtrQ0fml/jWCnA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.45.0",
        "@typescript-eslint/tsconfig-utils": "8.45.0",
        "@typescript-eslint/types": "8.45.0",
        "@typescript-eslint/visitor-keys": "8.45.0",
        "debug": "^4.3.4",
        "fast-glob": "^3.3.2",
        "is-glob": "^4.0.3",
        "minimatch": "^9.0.4",
        "semver": "^7.6.0",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmmirror.com/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmmirror.com/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
      "version": "7.7.2",
      "resolved": "https://registry.npmmirror.com/semver/-/semver-7.7.2.tgz",
      "integrity": "sha512-RF0Fw+rO5AMf9MAyaRXI4AV0Ulj5lMHqVxxdSgiVbixSCXoEmmX/jk0CuJw4+3SqroYO9VoUh+HcuJivvtJemA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.45.0",
      "resolved": "https://registry.npmmirror.com/@typescript-eslint/utils/-/utils-8.45.0.tgz",
      "integrity": "sha512-bxi1ht+tLYg4+XV2knz/F7RVhU0k6VrSMc9sb8DQ6fyCTrGQLHfo7lDtN0QJjZjKkLA2ThrKuCdHEvLReqtIGg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.7.0",
        "@typescript-eslint/scope-manager": "8.45.0",
        "@typescript-eslint/types": "8.45.0",
        "@typescript-eslint/typescript-estree": "8.45.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.45.0",
      "resolved": "https://registry.npmmirror.com/@typescript-eslint/visitor-keys/-/visitor-keys-8.45.0.tgz",
      "integrity": "sha512-qsaFBA3e09MIDAGFUrTk+dzqtfv1XPVz8t8d1f0ybTzrCY7BKiMC5cjrl1O/P7UmHsNyW90EYSkU/ZWpmXelag==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.45.0",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys/node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "resolved": "https://registry.npmmirror.com/eslint-visitor-keys/-/eslint-visitor-keys-4.2.1.tgz",
      "integrity": "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.3.0",
      "resolved": "https://registry.npmmirror.com/@ungap/structured-clone/-/structured-clone-1.3.0.tgz",
      "integrity": "sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "4.7.0",
      "resolved": "https://registry.npmmirror.com/@vitejs/plugin-react/-/plugin-react-4.7.0.tgz",
      "integrity": "sha512-gUu9hwfWvvEDBBmgtAowQCojwZmJ5mcLn3aufeCsitijs3+f2NsrPtlAWIR6OPiqljl96GVCUbLe0HyqIpVaoA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.28.0",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-beta.27",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.17.0"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmmirror.com/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmmirror.com/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmmirror.com/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmmirror.com/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmmirror.com/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/any-promise": {
      "version": "1.3.0",
      "resolved": "https://registry.npmmirror.com/any-promise/-/any-promise-1.3.0.tgz",
      "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmmirror.com/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/arg": {
      "version": "5.0.2",
      "resolved": "https://registry.npmmirror.com/arg/-/arg-5.0.2.tgz",
      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmmirror.com/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmmirror.com/array-buffer-byte-length/-/array-buffer-byte-length-1.0.2.tgz",
      "integrity": "sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "is-array-buffer": "^3.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-includes": {
      "version": "3.1.9",
      "resolved": "https://registry.npmmirror.com/array-includes/-/array-includes-3.1.9.tgz",
      "integrity": "sha512-FmeCCAenzH0KH381SPT5FZmiA/TmpndpcaShhfgEN9eCVjnFBqq3l1xrI42y8+PPLI6hypzou4GXw00WHmPBLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.0",
        "es-object-atoms": "^1.1.1",
        "get-intrinsic": "^1.3.0",
        "is-string": "^1.1.1",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlast": {
      "version": "1.2.5",
      "resolved": "https://registry.npmmirror.com/array.prototype.findlast/-/array.prototype.findlast-1.2.5.tgz",
      "integrity": "sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flat": {
      "version": "1.3.3",
      "resolved": "https://registry.npmmirror.com/array.prototype.flat/-/array.prototype.flat-1.3.3.tgz",
      "integrity": "sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flatmap": {
      "version": "1.3.3",
      "resolved": "https://registry.npmmirror.com/array.prototype.flatmap/-/array.prototype.flatmap-1.3.3.tgz",
      "integrity": "sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.tosorted": {
      "version": "1.1.4",
      "resolved": "https://registry.npmmirror.com/array.prototype.tosorted/-/array.prototype.tosorted-1.1.4.tgz",
      "integrity": "sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3",
        "es-errors": "^1.3.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.4",
      "resolved": "https://registry.npmmirror.com/arraybuffer.prototype.slice/-/arraybuffer.prototype.slice-1.0.4.tgz",
      "integrity": "sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/async-function": {
      "version": "1.0.0",
      "resolved": "https://registry.npmmirror.com/async-function/-/async-function-1.0.0.tgz",
      "integrity": "sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmmirror.com/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "license": "MIT"
    },
    "node_modules/autoprefixer": {
      "version": "10.4.21",
      "resolved": "https://registry.npmmirror.com/autoprefixer/-/autoprefixer-10.4.21.tgz",
      "integrity": "sha512-O+A6LWV5LDHSJD3LjHYoNi4VLsj/Whi7k6zG12xTYaU4cQ8oxQGckXNX8cRHK5yOZ/ppVHe0ZBXGzSV9jXdVbQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.24.4",
        "caniuse-lite": "^1.0.30001702",
        "fraction.js": "^4.3.7",
        "normalize-range": "^0.1.2",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "resolved": "https://registry.npmmirror.com/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
      "integrity": "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmmirror.com/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.8.10",
      "resolved": "https://registry.npmmirror.com/baseline-browser-mapping/-/baseline-browser-mapping-2.8.10.tgz",
      "integrity": "sha512-uLfgBi+7IBNay8ECBO2mVMGZAc1VgZWEChxm4lv+TobGdG82LnXMjuNGo/BSSZZL4UmkWhxEHP2f5ziLNwGWMA==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmmirror.com/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmmirror.com/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmmirror.com/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.26.3",
      "resolved": "https://registry.npmmirror.com/browserslist/-/browserslist-4.26.3.tgz",
      "integrity": "sha512-lAUU+02RFBuCKQPj/P6NgjlbCnLBMp4UtgTx7vNHd3XSIJF87s9a5rA3aH2yw3GS9DqZAUbOtZdCCiZeVRqt0w==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.8.9",
        "caniuse-lite": "^1.0.30001746",
        "electron-to-chromium": "^1.5.227",
        "node-releases": "^2.0.21",
        "update-browserslist-db": "^1.1.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.8",
      "resolved": "https://registry.npmmirror.com/call-bind/-/call-bind-1.0.8.tgz",
      "integrity": "sha512-oKlSFMcMwpUg2ednkhQ454wfWiU/ul3CkJe/PEHcTKuiX6RpbehUiFMXu13HalGZxfUwCQzZG747YXBn1im9ww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.0",
        "es-define-property": "^1.0.0",
        "get-intrinsic": "^1.2.4",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmmirror.com/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmmirror.com/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmmirror.com/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase-css": {
      "version": "2.0.1",
      "resolved": "https://registry.npmmirror.com/camelcase-css/-/camelcase-css-2.0.1.tgz",
      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001746",
      "resolved": "https://registry.npmmirror.com/caniuse-lite/-/caniuse-lite-1.0.30001746.tgz",
      "integrity": "sha512-eA7Ys/DGw+pnkWWSE/id29f2IcPHVoE8wxtvE5JdvD2V28VTDPy1yEeo11Guz0sJ4ZeGRcm3uaTcAqK1LXaphA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmmirror.com/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmmirror.com/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmmirror.com/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmmirror.com/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmmirror.com/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmmirror.com/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/commander": {
      "version": "4.1.1",
      "resolved": "https://registry.npmmirror.com/commander/-/commander-4.1.1.tgz",
      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmmirror.com/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmmirror.com/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "1.0.2",
      "resolved": "https://registry.npmmirror.com/cookie/-/cookie-1.0.2.tgz",
      "integrity": "sha512-9Kr/j4O16ISv8zBBhJoi4bXOYNTkFLOqSL3UDB0njXxCXNezjeyVrJyGOWtgfs/q2km1gwBcfH8q1yEGoMYunA==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/core-util-is": {
      "version": "1.0.3",
      "resolved": "https://registry.npmmirror.com/core-util-is/-/core-util-is-1.0.3.tgz",
      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==",
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmmirror.com/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmmirror.com/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/csstype": {
      "version": "3.1.3",
      "resolved": "https://registry.npmmirror.com/csstype/-/csstype-3.1.3.tgz",
      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmmirror.com/data-view-buffer/-/data-view-buffer-1.0.2.tgz",
      "integrity": "sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmmirror.com/data-view-byte-length/-/data-view-byte-length-1.0.2.tgz",
      "integrity": "sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/inspect-js"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.1",
      "resolved": "https://registry.npmmirror.com/data-view-byte-offset/-/data-view-byte-offset-1.0.1.tgz",
      "integrity": "sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmmirror.com/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmmirror.com/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmmirror.com/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "resolved": "https://registry.npmmirror.com/define-properties/-/define-properties-1.2.1.tgz",
      "integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmmirror.com/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/didyoumean": {
      "version": "1.2.2",
      "resolved": "https://registry.npmmirror.com/didyoumean/-/didyoumean-1.2.2.tgz",
      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/dlv": {
      "version": "1.1.3",
      "resolved": "https://registry.npmmirror.com/dlv/-/dlv-1.1.3.tgz",
      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmmirror.com/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmmirror.com/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmmirror.com/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
      "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.228",
      "resolved": "https://registry.npmmirror.com/electron-to-chromium/-/electron-to-chromium-1.5.228.tgz",
      "integrity": "sha512-nxkiyuqAn4MJ1QbobwqJILiDtu/jk14hEAWaMiJmNPh1Z+jqoFlBFZjdXwLWGeVSeu9hGLg6+2G9yJaW8rBIFA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmmirror.com/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/es-abstract": {
      "version": "1.24.0",
      "resolved": "https://registry.npmmirror.com/es-abstract/-/es-abstract-1.24.0.tgz",
      "integrity": "sha512-WSzPgsdLtTcQwm4CROfS5ju2Wa1QQcVeT37jFjYzdFz1r9ahadC8B8/a4qxJxM+09F18iumCdRmlr96ZYkQvEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.2",
        "arraybuffer.prototype.slice": "^1.0.4",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "data-view-buffer": "^1.0.2",
        "data-view-byte-length": "^1.0.2",
        "data-view-byte-offset": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-set-tostringtag": "^2.1.0",
        "es-to-primitive": "^1.3.0",
        "function.prototype.name": "^1.1.8",
        "get-intrinsic": "^1.3.0",
        "get-proto": "^1.0.1",
        "get-symbol-description": "^1.1.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "internal-slot": "^1.1.0",
        "is-array-buffer": "^3.0.5",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.2",
        "is-negative-zero": "^2.0.3",
        "is-regex": "^1.2.1",
        "is-set": "^2.0.3",
        "is-shared-array-buffer": "^1.0.4",
        "is-string": "^1.1.1",
        "is-typed-array": "^1.1.15",
        "is-weakref": "^1.1.1",
        "math-intrinsics": "^1.1.0",
        "object-inspect": "^1.13.4",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.7",
        "own-keys": "^1.0.1",
        "regexp.prototype.flags": "^1.5.4",
        "safe-array-concat": "^1.1.3",
        "safe-push-apply": "^1.0.0",
        "safe-regex-test": "^1.1.0",
        "set-proto": "^1.0.0",
        "stop-iteration-iterator": "^1.1.0",
        "string.prototype.trim": "^1.2.10",
        "string.prototype.trimend": "^1.0.9",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.3",
        "typed-array-byte-length": "^1.0.3",
        "typed-array-byte-offset": "^1.0.4",
        "typed-array-length": "^1.0.7",
        "unbox-primitive": "^1.1.0",
        "which-typed-array": "^1.1.19"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmmirror.com/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmmirror.com/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-iterator-helpers": {
      "version": "1.2.1",
      "resolved": "https://registry.npmmirror.com/es-iterator-helpers/-/es-iterator-helpers-1.2.1.tgz",
      "integrity": "sha512-uDn+FE1yrDzyC0pCo961B2IHbdM8y/ACZsKD4dG6WqrjV53BADjwa7D+1aom2rsNVfLyDgU/eigvlJGJ08OQ4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.6",
        "es-errors": "^1.3.0",
        "es-set-tostringtag": "^2.0.3",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.6",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "iterator.prototype": "^1.1.4",
        "safe-array-concat": "^1.1.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmmirror.com/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmmirror.com/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-shim-unscopables": {
      "version": "1.1.0",
      "resolved": "https://registry.npmmirror.com/es-shim-unscopables/-/es-shim-unscopables-1.1.0.tgz",
      "integrity": "sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.3.0",
      "resolved": "https://registry.npmmirror.com/es-to-primitive/-/es-to-primitive-1.3.0.tgz",
      "integrity": "sha512-w+5mJ3GuFL+NjVtJlvydShqE1eN3h3PbI7/5LAsYJP/2qtuMXjfL2LpHSRqo4b4eSF5K/DH1JXKUAHSB2UW50g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7",
        "is-date-object": "^1.0.5",
        "is-symbol": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/esbuild": {
      "version": "0.21.5",
      "resolved": "https://registry.npmmirror.com/esbuild/-/esbuild-0.21.5.tgz",
      "integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.21.5",
        "@esbuild/android-arm": "0.21.5",
        "@esbuild/android-arm64": "0.21.5",
        "@esbuild/android-x64": "0.21.5",
        "@esbuild/darwin-arm64": "0.21.5",
        "@esbuild/darwin-x64": "0.21.5",
        "@esbuild/freebsd-arm64": "0.21.5",
        "@esbuild/freebsd-x64": "0.21.5",
        "@esbuild/linux-arm": "0.21.5",
        "@esbuild/linux-arm64": "0.21.5",
        "@esbuild/linux-ia32": "0.21.5",
        "@esbuild/linux-loong64": "0.21.5",
        "@esbuild/linux-mips64el": "0.21.5",
        "@esbuild/linux-ppc64": "0.21.5",
        "@esbuild/linux-riscv64": "0.21.5",
        "@esbuild/linux-s390x": "0.21.5",
        "@esbuild/linux-x64": "0.21.5",
        "@esbuild/netbsd-x64": "0.21.5",
        "@esbuild/openbsd-x64": "0.21.5",
        "@esbuild/sunos-x64": "0.21.5",
        "@esbuild/win32-arm64": "0.21.5",
        "@esbuild/win32-ia32": "0.21.5",
        "@esbuild/win32-x64": "0.21.5"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmmirror.com/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmmirror.com/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "8.57.1",
      "resolved": "https://registry.npmmirror.com/eslint/-/eslint-8.57.1.tgz",
      "integrity": "sha512-ypowyDxpVSYpkXr9WPv2PAZCtNip1Mv5KTW0SCurXv/9iOpcrH9PaqUElksqEB6pChqHGDRCFTyrZlGhnLNGiA==",
      "deprecated": "This version is no longer supported. Please see https://eslint.org/version-support for other options.",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.6.1",
        "@eslint/eslintrc": "^2.1.4",
        "@eslint/js": "8.57.1",
        "@humanwhocodes/config-array": "^0.13.0",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@nodelib/fs.walk": "^1.2.8",
        "@ungap/structured-clone": "^1.2.0",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.2.2",
        "eslint-visitor-keys": "^3.4.3",
        "espree": "^9.6.1",
        "esquery": "^1.4.2",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "globals": "^13.19.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "is-path-inside": "^3.0.3",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3",
        "strip-ansi": "^6.0.1",
        "text-table": "^0.2.0"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-plugin-react": {
      "version": "7.37.5",
      "resolved": "https://registry.npmmirror.com/eslint-plugin-react/-/eslint-plugin-react-7.37.5.tgz",
      "integrity": "sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.8",
        "array.prototype.findlast": "^1.2.5",
        "array.prototype.flatmap": "^1.3.3",
        "array.prototype.tosorted": "^1.1.4",
        "doctrine": "^2.1.0",
        "es-iterator-helpers": "^1.2.1",
        "estraverse": "^5.3.0",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^2.4.1 || ^3.0.0",
        "minimatch": "^3.1.2",
        "object.entries": "^1.1.9",
        "object.fromentries": "^2.0.8",
        "object.values": "^1.2.1",
        "prop-types": "^15.8.1",
        "resolve": "^2.0.0-next.5",
        "semver": "^6.3.1",
        "string.prototype.matchall": "^4.0.12",
        "string.prototype.repeat": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "4.6.2",
      "resolved": "https://registry.npmmirror.com/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-4.6.2.tgz",
      "integrity": "sha512-QzliNJq4GinDBcD8gPB5v0wh6g8q3SUi6EFF0x8N/BL9PoVs0atuGc47ozMRyOWAKdwaZ5OnbOEa3WR+dSGKuQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0"
      }
    },
    "node_modules/eslint-plugin-react-refresh": {
      "version": "0.4.22",
      "resolved": "https://registry.npmmirror.com/eslint-plugin-react-refresh/-/eslint-plugin-react-refresh-0.4.22.tgz",
      "integrity": "sha512-atkAG6QaJMGoTLc4MDAP+rqZcfwQuTIh2IqHWFLy2TEjxr0MOK+5BSG4RzL2564AAPpZkDRsZXAUz68kjnU6Ug==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "eslint": ">=8.40"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmmirror.com/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eslint-scope": {
      "version": "7.2.2",
      "resolved": "https://registry.npmmirror.com/eslint-scope/-/eslint-scope-7.2.2.tgz",
      "integrity": "sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmmirror.com/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "9.6.1",
      "resolved": "https://registry.npmmirror.com/espree/-/espree-9.6.1.tgz",
      "integrity": "sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.9.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmmirror.com/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmmirror.com/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmmirror.com/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmmirror.com/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmmirror.com/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmmirror.com/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmmirror.com/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmmirror.com/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmmirror.com/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.19.1",
      "resolved": "https://registry.npmmirror.com/fastq/-/fastq-1.19.1.tgz",
      "integrity": "sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmmirror.com/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/file-saver": {
      "version": "2.0.5",
      "resolved": "https://registry.npmmirror.com/file-saver/-/file-saver-2.0.5.tgz",
      "integrity": "sha512-P9bmyZ3h/PRG+Nzga+rbdI4OEpNDzAVyy74uVO9ATgzLK6VtAsYybF/+TOCvrc0MO793d6+42lLyZTw7/ArVzA==",
      "license": "MIT"
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmmirror.com/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmmirror.com/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.2.0",
      "resolved": "https://registry.npmmirror.com/flat-cache/-/flat-cache-3.2.0.tgz",
      "integrity": "sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.3",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "resolved": "https://registry.npmmirror.com/flatted/-/flatted-3.3.3.tgz",
      "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/for-each": {
      "version": "0.3.5",
      "resolved": "https://registry.npmmirror.com/for-each/-/for-each-0.3.5.tgz",
      "integrity": "sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.1",
      "resolved": "https://registry.npmmirror.com/foreground-child/-/foreground-child-3.3.1.tgz",
      "integrity": "sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "cross-spawn": "^7.0.6",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/form-data": {
      "version": "4.0.4",
      "resolved": "https://registry.npmmirror.com/form-data/-/form-data-4.0.4.tgz",
      "integrity": "sha512-KrGhL9Q4zjj0kiUt5OO4Mr/A/jlI2jDYs5eHBpYHPcBEVSiipAvn2Ko2HnPe20rmcuuvMHNdZFp+4IlGTMF0Ow==",
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.2",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fraction.js": {
      "version": "4.3.7",
      "resolved": "https://registry.npmmirror.com/fraction.js/-/fraction.js-4.3.7.tgz",
      "integrity": "sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "patreon",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmmirror.com/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmmirror.com/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmmirror.com/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.1.8",
      "resolved": "https://registry.npmmirror.com/function.prototype.name/-/function.prototype.name-1.1.8.tgz",
      "integrity": "sha512-e5iwyodOHhbMr/yNrc7fDYG4qlbIvI5gajyzPnb5TCwyhjApznQh1BMFou9b30SevY43gCJKXycoCBjMbsuW0Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "functions-have-names": "^1.2.3",
        "hasown": "^2.0.2",
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "resolved": "https://registry.npmmirror.com/functions-have-names/-/functions-have-names-1.2.3.tgz",
      "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generator-function": {
      "version": "2.0.1",
      "resolved": "https://registry.npmmirror.com/generator-function/-/generator-function-2.0.1.tgz",
      "integrity": "sha512-SFdFmIJi+ybC0vjlHN0ZGVGHc3lgE0DxPAT0djjVg+kjOnSqclqmj0KQ7ykTOLP6YxoqOvuAODGdcHJn+43q3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmmirror.com/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmmirror.com/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmmirror.com/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.1.0",
      "resolved": "https://registry.npmmirror.com/get-symbol-description/-/get-symbol-description-1.1.0.tgz",
      "integrity": "sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmmirror.com/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmmirror.com/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "13.24.0",
      "resolved": "https://registry.npmmirror.com/globals/-/globals-13.24.0.tgz",
      "integrity": "sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "resolved": "https://registry.npmmirror.com/globalthis/-/globalthis-1.0.4.tgz",
      "integrity": "sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmmirror.com/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmmirror.com/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/has-bigints": {
      "version": "1.1.0",
      "resolved": "https://registry.npmmirror.com/has-bigints/-/has-bigints-1.1.0.tgz",
      "integrity": "sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmmirror.com/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmmirror.com/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.2.0",
      "resolved": "https://registry.npmmirror.com/has-proto/-/has-proto-1.2.0.tgz",
      "integrity": "sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmmirror.com/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmmirror.com/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmmirror.com/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmmirror.com/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/immediate": {
      "version": "3.0.6",
      "resolved": "https://registry.npmmirror.com/immediate/-/immediate-3.0.6.tgz",
      "integrity": "sha512-XXOFtyqDjNDAQxVfYxuF7g9Il/IbWmmlQg2MYKOH8ExIT1qg6xc4zyS3HaEEATgs1btfzxq15ciUiY7gjSXRGQ==",
      "license": "MIT"
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmmirror.com/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmmirror.com/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmmirror.com/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmmirror.com/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/internal-slot": {
      "version": "1.1.0",
      "resolved": "https://registry.npmmirror.com/internal-slot/-/internal-slot-1.1.0.tgz",
      "integrity": "sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.5",
      "resolved": "https://registry.npmmirror.com/is-array-buffer/-/is-array-buffer-3.0.5.tgz",
      "integrity": "sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-async-function": {
      "version": "2.1.1",
      "resolved": "https://registry.npmmirror.com/is-async-function/-/is-async-function-2.1.1.tgz",
      "integrity": "sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "async-function": "^1.0.0",
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.1.0",
      "resolved": "https://registry.npmmirror.com/is-bigint/-/is-bigint-1.1.0.tgz",
      "integrity": "sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-bigints": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmmirror.com/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.2.2",
      "resolved": "https://registry.npmmirror.com/is-boolean-object/-/is-boolean-object-1.2.2.tgz",
      "integrity": "sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmmirror.com/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmmirror.com/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.2",
      "resolved": "https://registry.npmmirror.com/is-data-view/-/is-data-view-1.0.2.tgz",
      "integrity": "sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.1.0",
      "resolved": "https://registry.npmmirror.com/is-date-object/-/is-date-object-1.1.0.tgz",
      "integrity": "sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmmirror.com/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.1.1",
      "resolved": "https://registry.npmmirror.com/is-finalizationregistry/-/is-finalizationregistry-1.1.1.tgz",
      "integrity": "sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmmirror.com/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.1.2",
      "resolved": "https://registry.npmmirror.com/is-generator-function/-/is-generator-function-1.1.2.tgz",
      "integrity": "sha512-upqt1SkGkODW9tsGNG5mtXTXtECizwtS2kA161M+gJPc1xdb/Ax629af6YrTwcOeQHbewrPNlE5Dx7kzvXTizA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "generator-function": "^2.0.0",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmmirror.com/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "resolved": "https://registry.npmmirror.com/is-map/-/is-map-2.0.3.tgz",
      "integrity": "sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.3",
      "resolved": "https://registry.npmmirror.com/is-negative-zero/-/is-negative-zero-2.0.3.tgz",
      "integrity": "sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmmirror.com/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmmirror.com/is-number-object/-/is-number-object-1.1.1.tgz",
      "integrity": "sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmmirror.com/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-regex": {
      "version": "1.2.1",
      "resolved": "https://registry.npmmirror.com/is-regex/-/is-regex-1.2.1.tgz",
      "integrity": "sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "resolved": "https://registry.npmmirror.com/is-set/-/is-set-2.0.3.tgz",
      "integrity": "sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.4",
      "resolved": "https://registry.npmmirror.com/is-shared-array-buffer/-/is-shared-array-buffer-1.0.4.tgz",
      "integrity": "sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-string": {
      "version": "1.1.1",
      "resolved": "https://registry.npmmirror.com/is-string/-/is-string-1.1.1.tgz",
      "integrity": "sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.1.1",
      "resolved": "https://registry.npmmirror.com/is-symbol/-/is-symbol-1.1.1.tgz",
      "integrity": "sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-symbols": "^1.1.0",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.15",
      "resolved": "https://registry.npmmirror.com/is-typed-array/-/is-typed-array-1.1.15.tgz",
      "integrity": "sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "resolved": "https://registry.npmmirror.com/is-weakmap/-/is-weakmap-2.0.2.tgz",
      "integrity": "sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.1.1",
      "resolved": "https://registry.npmmirror.com/is-weakref/-/is-weakref-1.1.1.tgz",
      "integrity": "sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.4",
      "resolved": "https://registry.npmmirror.com/is-weakset/-/is-weakset-2.0.4.tgz",
      "integrity": "sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmmirror.com/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==",
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmmirror.com/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/iterator.prototype": {
      "version": "1.1.5",
      "resolved": "https://registry.npmmirror.com/iterator.prototype/-/iterator.prototype-1.1.5.tgz",
      "integrity": "sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "get-proto": "^1.0.0",
        "has-symbols": "^1.1.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/jackspeak": {
      "version": "3.4.3",
      "resolved": "https://registry.npmmirror.com/jackspeak/-/jackspeak-3.4.3.tgz",
      "integrity": "sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/cliui": "^8.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      },
      "optionalDependencies": {
        "@pkgjs/parseargs": "^0.11.0"
      }
    },
    "node_modules/jiti": {
      "version": "1.21.7",
      "resolved": "https://registry.npmmirror.com/jiti/-/jiti-1.21.7.tgz",
      "integrity": "sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "bin/jiti.js"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmmirror.com/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.0",
      "resolved": "https://registry.npmmirror.com/js-yaml/-/js-yaml-4.1.0.tgz",
      "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmmirror.com/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmmirror.com/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmmirror.com/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmmirror.com/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmmirror.com/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsx-ast-utils": {
      "version": "3.3.5",
      "resolved": "https://registry.npmmirror.com/jsx-ast-utils/-/jsx-ast-utils-3.3.5.tgz",
      "integrity": "sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.6",
        "array.prototype.flat": "^1.3.1",
        "object.assign": "^4.1.4",
        "object.values": "^1.1.6"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/jszip": {
      "version": "3.10.1",
      "resolved": "https://registry.npmmirror.com/jszip/-/jszip-3.10.1.tgz",
      "integrity": "sha512-xXDvecyTpGLrqFrvkrUSoxxfJI5AH7U8zxxtVclpsUtMCq4JQ290LY8AW5c7Ggnr/Y/oK+bQMbqK2qmtk3pN4g==",
      "license": "(MIT OR GPL-3.0-or-later)",
      "dependencies": {
        "lie": "~3.3.0",
        "pako": "~1.0.2",
        "readable-stream": "~2.3.6",
        "setimmediate": "^1.0.5"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmmirror.com/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmmirror.com/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lie": {
      "version": "3.3.0",
      "resolved": "https://registry.npmmirror.com/lie/-/lie-3.3.0.tgz",
      "integrity": "sha512-UaiMJzeWRlEujzAuw5LokY1L5ecNQYZKfmyZ9L7wDHb/p5etKaxXhohBcrw0EYby+G/NA52vRSN4N39dxHAIwQ==",
      "license": "MIT",
      "dependencies": {
        "immediate": "~3.0.5"
      }
    },
    "node_modules/lilconfig": {
      "version": "3.1.3",
      "resolved": "https://registry.npmmirror.com/lilconfig/-/lilconfig-3.1.3.tgz",
      "integrity": "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antonk52"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmmirror.com/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmmirror.com/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmmirror.com/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmmirror.com/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmmirror.com/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "0.544.0",
      "resolved": "https://registry.npmmirror.com/lucide-react/-/lucide-react-0.544.0.tgz",
      "integrity": "sha512-t5tS44bqd825zAW45UQxpG2CvcC4urOwn2TrwSH8u+MjeE+1NnWl6QqeQ/6NdjMqdOygyiT9p3Ev0p1NJykxjw==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmmirror.com/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmmirror.com/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmmirror.com/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmmirror.com/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmmirror.com/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmmirror.com/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.2",
      "resolved": "https://registry.npmmirror.com/minipass/-/minipass-7.1.2.tgz",
      "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmmirror.com/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/mz": {
      "version": "2.7.0",
      "resolved": "https://registry.npmmirror.com/mz/-/mz-2.7.0.tgz",
      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmmirror.com/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmmirror.com/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-fetch": {
      "version": "2.7.0",
      "resolved": "https://registry.npmmirror.com/node-fetch/-/node-fetch-2.7.0.tgz",
      "integrity": "sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==",
      "license": "MIT",
      "dependencies": {
        "whatwg-url": "^5.0.0"
      },
      "engines": {
        "node": "4.x || >=6.0.0"
      },
      "peerDependencies": {
        "encoding": "^0.1.0"
      },
      "peerDependenciesMeta": {
        "encoding": {
          "optional": true
        }
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.21",
      "resolved": "https://registry.npmmirror.com/node-releases/-/node-releases-2.0.21.tgz",
      "integrity": "sha512-5b0pgg78U3hwXkCM8Z9b2FJdPZlr9Psr9V2gQPESdGHqbntyFJKFW4r5TeWGFzafGY3hzs1JC62VEQMbl1JFkw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmmirror.com/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-range": {
      "version": "0.1.2",
      "resolved": "https://registry.npmmirror.com/normalize-range/-/normalize-range-0.1.2.tgz",
      "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmmirror.com/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmmirror.com/object-hash/-/object-hash-3.0.0.tgz",
      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmmirror.com/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmmirror.com/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.7",
      "resolved": "https://registry.npmmirror.com/object.assign/-/object.assign-4.1.7.tgz",
      "integrity": "sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0",
        "has-symbols": "^1.1.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.entries": {
      "version": "1.1.9",
      "resolved": "https://registry.npmmirror.com/object.entries/-/object.entries-1.1.9.tgz",
      "integrity": "sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.fromentries": {
      "version": "2.0.8",
      "resolved": "https://registry.npmmirror.com/object.fromentries/-/object.fromentries-2.0.8.tgz",
      "integrity": "sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.values": {
      "version": "1.2.1",
      "resolved": "https://registry.npmmirror.com/object.values/-/object.values-1.2.1.tgz",
      "integrity": "sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmmirror.com/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmmirror.com/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/own-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmmirror.com/own-keys/-/own-keys-1.0.1.tgz",
      "integrity": "sha512-qFOyK5PjiWZd+QQIh+1jhdb9LpxTF0qs7Pm8o5QHYZ0M3vKqSqzsZaEB6oWlxZ+q2sJBMI/Ktgd2N5ZwQoRHfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-intrinsic": "^1.2.6",
        "object-keys": "^1.1.1",
        "safe-push-apply": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmmirror.com/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmmirror.com/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/package-json-from-dist": {
      "version": "1.0.1",
      "resolved": "https://registry.npmmirror.com/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
      "integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
      "dev": true,
      "license": "BlueOak-1.0.0"
    },
    "node_modules/pako": {
      "version": "1.0.11",
      "resolved": "https://registry.npmmirror.com/pako/-/pako-1.0.11.tgz",
      "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==",
      "license": "(MIT AND Zlib)"
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmmirror.com/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmmirror.com/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmmirror.com/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmmirror.com/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmmirror.com/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-scurry": {
      "version": "1.11.1",
      "resolved": "https://registry.npmmirror.com/path-scurry/-/path-scurry-1.11.1.tgz",
      "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^10.2.0",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
      },
      "engines": {
        "node": ">=16 || 14 >=14.18"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/path-scurry/node_modules/lru-cache": {
      "version": "10.4.3",
      "resolved": "https://registry.npmmirror.com/lru-cache/-/lru-cache-10.4.3.tgz",
      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmmirror.com/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmmirror.com/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmmirror.com/pify/-/pify-2.3.0.tgz",
      "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pirates": {
      "version": "4.0.7",
      "resolved": "https://registry.npmmirror.com/pirates/-/pirates-4.0.7.tgz",
      "integrity": "sha512-TfySrs/5nm8fQJDcBDuUng3VOUKsd7S+zqvbOTiGXHfxX4wK31ard+hoNuvkicM/2YFzlpDgABOevKSsB4G/FA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.1.0",
      "resolved": "https://registry.npmmirror.com/possible-typed-array-names/-/possible-typed-array-names-1.1.0.tgz",
      "integrity": "sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmmirror.com/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-import": {
      "version": "15.1.0",
      "resolved": "https://registry.npmmirror.com/postcss-import/-/postcss-import-15.1.0.tgz",
      "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "postcss-value-parser": "^4.0.0",
        "read-cache": "^1.0.0",
        "resolve": "^1.1.7"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "postcss": "^8.0.0"
      }
    },
    "node_modules/postcss-import/node_modules/resolve": {
      "version": "1.22.10",
      "resolved": "https://registry.npmmirror.com/resolve/-/resolve-1.22.10.tgz",
      "integrity": "sha512-NPRy+/ncIMeDlTAsuqwKIiferiawhefFJtkNSW0qZJEqMEb+qBt/77B/jGeeek+F0uOeN05CDa6HXbbIgtVX4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.16.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/postcss-js": {
      "version": "4.1.0",
      "resolved": "https://registry.npmmirror.com/postcss-js/-/postcss-js-4.1.0.tgz",
      "integrity": "sha512-oIAOTqgIo7q2EOwbhb8UalYePMvYoIeRY2YKntdpFQXNosSu3vLrniGgmH9OKs/qAkfoj5oB3le/7mINW1LCfw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "camelcase-css": "^2.0.1"
      },
      "engines": {
        "node": "^12 || ^14 || >= 16"
      },
      "peerDependencies": {
        "postcss": "^8.4.21"
      }
    },
    "node_modules/postcss-load-config": {
      "version": "6.0.1",
      "resolved": "https://registry.npmmirror.com/postcss-load-config/-/postcss-load-config-6.0.1.tgz",
      "integrity": "sha512-oPtTM4oerL+UXmx+93ytZVN82RrlY/wPUV8IeDxFrzIjXOLF1pN+EmKPLbubvKHT2HC20xXsCAH2Z+CKV6Oz/g==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "lilconfig": "^3.1.1"
      },
      "engines": {
        "node": ">= 18"
      },
      "peerDependencies": {
        "jiti": ">=1.21.0",
        "postcss": ">=8.0.9",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        },
        "postcss": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/postcss-nested": {
      "version": "6.2.0",
      "resolved": "https://registry.npmmirror.com/postcss-nested/-/postcss-nested-6.2.0.tgz",
      "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "postcss-selector-parser": "^6.1.1"
      },
      "engines": {
        "node": ">=12.0"
      },
      "peerDependencies": {
        "postcss": "^8.2.14"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.1.2",
      "resolved": "https://registry.npmmirror.com/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
      "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmmirror.com/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmmirror.com/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmmirror.com/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
      "license": "MIT"
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmmirror.com/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmmirror.com/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmmirror.com/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/react": {
      "version": "18.3.1",
      "resolved": "https://registry.npmmirror.com/react/-/react-18.3.1.tgz",
      "integrity": "sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "18.3.1",
      "resolved": "https://registry.npmmirror.com/react-dom/-/react-dom-18.3.1.tgz",
      "integrity": "sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0",
        "scheduler": "^0.23.2"
      },
      "peerDependencies": {
        "react": "^18.3.1"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmmirror.com/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/react-refresh": {
      "version": "0.17.0",
      "resolved": "https://registry.npmmirror.com/react-refresh/-/react-refresh-0.17.0.tgz",
      "integrity": "sha512-z6F7K9bV85EfseRCp2bzrpyQ0Gkw1uLoCel9XBVWPg/TjRj94SkJzUTGfOa4bs7iJvBWtQG0Wq7wnI0syw3EBQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-router": {
      "version": "7.9.3",
      "resolved": "https://registry.npmmirror.com/react-router/-/react-router-7.9.3.tgz",
      "integrity": "sha512-4o2iWCFIwhI/eYAIL43+cjORXYn/aRQPgtFRRZb3VzoyQ5Uej0Bmqj7437L97N9NJW4wnicSwLOLS+yCXfAPgg==",
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.1",
        "set-cookie-parser": "^2.6.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/react-router-dom": {
      "version": "7.9.3",
      "resolved": "https://registry.npmmirror.com/react-router-dom/-/react-router-dom-7.9.3.tgz",
      "integrity": "sha512-1QSbA0TGGFKTAc/aWjpfW/zoEukYfU4dc1dLkT/vvf54JoGMkW+fNA+3oyo2gWVW1GM7BxjJVHz5GnPJv40rvg==",
      "license": "MIT",
      "dependencies": {
        "react-router": "7.9.3"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      }
    },
    "node_modules/read-cache": {
      "version": "1.0.0",
      "resolved": "https://registry.npmmirror.com/read-cache/-/read-cache-1.0.0.tgz",
      "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "pify": "^2.3.0"
      }
    },
    "node_modules/readable-stream": {
      "version": "2.3.8",
      "resolved": "https://registry.npmmirror.com/readable-stream/-/readable-stream-2.3.8.tgz",
      "integrity": "sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==",
      "license": "MIT",
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmmirror.com/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.10",
      "resolved": "https://registry.npmmirror.com/reflect.getprototypeof/-/reflect.getprototypeof-1.0.10.tgz",
      "integrity": "sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.1",
        "which-builtin-type": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.4",
      "resolved": "https://registry.npmmirror.com/regexp.prototype.flags/-/regexp.prototype.flags-1.5.4.tgz",
      "integrity": "sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve": {
      "version": "2.0.0-next.5",
      "resolved": "https://registry.npmmirror.com/resolve/-/resolve-2.0.0-next.5.tgz",
      "integrity": "sha512-U7WjGVG9sH8tvjW5SmGbQuui75FiyjAX72HX15DwBBwF9dNiQZRQAg9nnPhYy+TUnE0+VcrttuvNI8oSxZcocA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.13.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmmirror.com/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmmirror.com/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmmirror.com/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "deprecated": "Rimraf versions prior to v4 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rollup": {
      "version": "4.52.3",
      "resolved": "https://registry.npmmirror.com/rollup/-/rollup-4.52.3.tgz",
      "integrity": "sha512-RIDh866U8agLgiIcdpB+COKnlCreHJLfIhWC3LVflku5YHfpnsIKigRZeFfMfCc4dVcqNVfQQ5gO/afOck064A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.52.3",
        "@rollup/rollup-android-arm64": "4.52.3",
        "@rollup/rollup-darwin-arm64": "4.52.3",
        "@rollup/rollup-darwin-x64": "4.52.3",
        "@rollup/rollup-freebsd-arm64": "4.52.3",
        "@rollup/rollup-freebsd-x64": "4.52.3",
        "@rollup/rollup-linux-arm-gnueabihf": "4.52.3",
        "@rollup/rollup-linux-arm-musleabihf": "4.52.3",
        "@rollup/rollup-linux-arm64-gnu": "4.52.3",
        "@rollup/rollup-linux-arm64-musl": "4.52.3",
        "@rollup/rollup-linux-loong64-gnu": "4.52.3",
        "@rollup/rollup-linux-ppc64-gnu": "4.52.3",
        "@rollup/rollup-linux-riscv64-gnu": "4.52.3",
        "@rollup/rollup-linux-riscv64-musl": "4.52.3",
        "@rollup/rollup-linux-s390x-gnu": "4.52.3",
        "@rollup/rollup-linux-x64-gnu": "4.52.3",
        "@rollup/rollup-linux-x64-musl": "4.52.3",
        "@rollup/rollup-openharmony-arm64": "4.52.3",
        "@rollup/rollup-win32-arm64-msvc": "4.52.3",
        "@rollup/rollup-win32-ia32-msvc": "4.52.3",
        "@rollup/rollup-win32-x64-gnu": "4.52.3",
        "@rollup/rollup-win32-x64-msvc": "4.52.3",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmmirror.com/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.3",
      "resolved": "https://registry.npmmirror.com/safe-array-concat/-/safe-array-concat-1.1.3.tgz",
      "integrity": "sha512-AURm5f0jYEOydBj7VQlVvDrjeFgthDdEF5H1dP+6mNpoXOMo1quQqJ4wvJDyRZ9+pO3kGWoOdmV08cSv2aJV6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "has-symbols": "^1.1.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-array-concat/node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmmirror.com/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmmirror.com/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
      "license": "MIT"
    },
    "node_modules/safe-push-apply": {
      "version": "1.0.0",
      "resolved": "https://registry.npmmirror.com/safe-push-apply/-/safe-push-apply-1.0.0.tgz",
      "integrity": "sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-push-apply/node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmmirror.com/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/safe-regex-test": {
      "version": "1.1.0",
      "resolved": "https://registry.npmmirror.com/safe-regex-test/-/safe-regex-test-1.1.0.tgz",
      "integrity": "sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-regex": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/scheduler": {
      "version": "0.23.2",
      "resolved": "https://registry.npmmirror.com/scheduler/-/scheduler-0.23.2.tgz",
      "integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      }
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmmirror.com/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.1",
      "resolved": "https://registry.npmmirror.com/set-cookie-parser/-/set-cookie-parser-2.7.1.tgz",
      "integrity": "sha512-IOc8uWeOZgnb3ptbCURJWNjWUPcO3ZnTTdzsurqERrP6nPyv+paC55vJM0LpOlT2ne+Ix+9+CRG1MNLlyZ4GjQ==",
      "license": "MIT"
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "resolved": "https://registry.npmmirror.com/set-function-length/-/set-function-length-1.2.2.tgz",
      "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmmirror.com/set-function-name/-/set-function-name-2.0.2.tgz",
      "integrity": "sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-proto": {
      "version": "1.0.0",
      "resolved": "https://registry.npmmirror.com/set-proto/-/set-proto-1.0.0.tgz",
      "integrity": "sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/setimmediate": {
      "version": "1.0.5",
      "resolved": "https://registry.npmmirror.com/setimmediate/-/setimmediate-1.0.5.tgz",
      "integrity": "sha512-MATJdZp8sLqDl/68LfQmbP8zKPLQNV6BIZoIgrscFDQ+RsvK/BxeDQOgyxKKoh0y/8h3BqVFnCqQ/gd+reiIXA==",
      "license": "MIT"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmmirror.com/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmmirror.com/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmmirror.com/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "resolved": "https://registry.npmmirror.com/side-channel-list/-/side-channel-list-1.0.0.tgz",
      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmmirror.com/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmmirror.com/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmmirror.com/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmmirror.com/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stop-iteration-iterator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmmirror.com/stop-iteration-iterator/-/stop-iteration-iterator-1.1.0.tgz",
      "integrity": "sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "internal-slot": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmmirror.com/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
    "node_modules/string-width": {
      "version": "5.1.2",
      "resolved": "https://registry.npmmirror.com/string-width/-/string-width-5.1.2.tgz",
      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string-width-cjs": {
      "name": "string-width",
      "version": "4.2.3",
      "resolved": "https://registry.npmmirror.com/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmmirror.com/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/string-width/node_modules/ansi-regex": {
      "version": "6.2.2",
      "resolved": "https://registry.npmmirror.com/ansi-regex/-/ansi-regex-6.2.2.tgz",
      "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/string-width/node_modules/strip-ansi": {
      "version": "7.1.2",
      "resolved": "https://registry.npmmirror.com/strip-ansi/-/strip-ansi-7.1.2.tgz",
      "integrity": "sha512-gmBGslpoQJtgnMAvOVqGZpEz9dyoKTCzy2nfz/n8aIFhN/jCE/rCmcxabB6jOOHV+0WNnylOxaxBQPSvcWklhA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.0.12",
      "resolved": "https://registry.npmmirror.com/string.prototype.matchall/-/string.prototype.matchall-4.0.12.tgz",
      "integrity": "sha512-6CC9uyBL+/48dYizRf7H7VAYCMCNTBeM78x/VTUe9bFEaxBepPJDa1Ow99LqI/1yF7kuy7Q3cQsYMrcjGUcskA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.6",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "regexp.prototype.flags": "^1.5.3",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.repeat": {
      "version": "1.0.0",
      "resolved": "https://registry.npmmirror.com/string.prototype.repeat/-/string.prototype.repeat-1.0.0.tgz",
      "integrity": "sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.5"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.10",
      "resolved": "https://registry.npmmirror.com/string.prototype.trim/-/string.prototype.trim-1.2.10.tgz",
      "integrity": "sha512-Rs66F0P/1kedk5lyYyH9uBzuiI/kNRmwJAR9quK6VOtIpZ2G+hMZd+HQbbv25MgCA6gEffoMZYxlTod4WcdrKA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-data-property": "^1.1.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-object-atoms": "^1.0.0",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.9",
      "resolved": "https://registry.npmmirror.com/string.prototype.trimend/-/string.prototype.trimend-1.0.9.tgz",
      "integrity": "sha512-G7Ok5C6E/j4SGfyLCloXTrngQIQU3PWtXGst3yM7Bea9FRURf1S42ZHlZZtsNque2FN2PoUhfZXYLNWwEr4dLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "resolved": "https://registry.npmmirror.com/string.prototype.trimstart/-/string.prototype.trimstart-1.0.8.tgz",
      "integrity": "sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmmirror.com/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi-cjs": {
      "name": "strip-ansi",
      "version": "6.0.1",
      "resolved": "https://registry.npmmirror.com/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmmirror.com/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/sucrase": {
      "version": "3.35.0",
      "resolved": "https://registry.npmmirror.com/sucrase/-/sucrase-3.35.0.tgz",
      "integrity": "sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.2",
        "commander": "^4.0.0",
        "glob": "^10.3.10",
        "lines-and-columns": "^1.1.6",
        "mz": "^2.7.0",
        "pirates": "^4.0.1",
        "ts-interface-checker": "^0.1.9"
      },
      "bin": {
        "sucrase": "bin/sucrase",
        "sucrase-node": "bin/sucrase-node"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/sucrase/node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmmirror.com/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/sucrase/node_modules/glob": {
      "version": "10.4.5",
      "resolved": "https://registry.npmmirror.com/glob/-/glob-10.4.5.tgz",
      "integrity": "sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "foreground-child": "^3.1.0",
        "jackspeak": "^3.1.2",
        "minimatch": "^9.0.4",
        "minipass": "^7.1.2",
        "package-json-from-dist": "^1.0.0",
        "path-scurry": "^1.11.1"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/sucrase/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmmirror.com/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmmirror.com/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmmirror.com/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwindcss": {
      "version": "3.4.18",
      "resolved": "https://registry.npmmirror.com/tailwindcss/-/tailwindcss-3.4.18.tgz",
      "integrity": "sha512-6A2rnmW5xZMdw11LYjhcI5846rt9pbLSabY5XPxo+XWdxwZaFEn47Go4NzFiHu9sNNmr/kXivP1vStfvMaK1GQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "arg": "^5.0.2",
        "chokidar": "^3.6.0",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.3.2",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "jiti": "^1.21.7",
        "lilconfig": "^3.1.3",
        "micromatch": "^4.0.8",
        "normalize-path": "^3.0.0",
        "object-hash": "^3.0.0",
        "picocolors": "^1.1.1",
        "postcss": "^8.4.47",
        "postcss-import": "^15.1.0",
        "postcss-js": "^4.0.1",
        "postcss-load-config": "^4.0.2 || ^5.0 || ^6.0",
        "postcss-nested": "^6.2.0",
        "postcss-selector-parser": "^6.1.2",
        "resolve": "^1.22.8",
        "sucrase": "^3.35.0"
      },
      "bin": {
        "tailwind": "lib/cli.js",
        "tailwindcss": "lib/cli.js"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tailwindcss/node_modules/resolve": {
      "version": "1.22.10",
      "resolved": "https://registry.npmmirror.com/resolve/-/resolve-1.22.10.tgz",
      "integrity": "sha512-NPRy+/ncIMeDlTAsuqwKIiferiawhefFJtkNSW0qZJEqMEb+qBt/77B/jGeeek+F0uOeN05CDa6HXbbIgtVX4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.16.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmmirror.com/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/thenify": {
      "version": "3.3.1",
      "resolved": "https://registry.npmmirror.com/thenify/-/thenify-3.3.1.tgz",
      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0"
      }
    },
    "node_modules/thenify-all": {
      "version": "1.6.0",
      "resolved": "https://registry.npmmirror.com/thenify-all/-/thenify-all-1.6.0.tgz",
      "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "thenify": ">= 3.1.0 < 4"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmmirror.com/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/tr46": {
      "version": "0.0.3",
      "resolved": "https://registry.npmmirror.com/tr46/-/tr46-0.0.3.tgz",
      "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==",
      "license": "MIT"
    },
    "node_modules/ts-api-utils": {
      "version": "2.1.0",
      "resolved": "https://registry.npmmirror.com/ts-api-utils/-/ts-api-utils-2.1.0.tgz",
      "integrity": "sha512-CUgTZL1irw8u29bzrOD/nH85jqyc74D6SshFgujOIA7osm2Rz7dYH77agkx7H4FBNxDq7Cjf+IjaX/8zwFW+ZQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/ts-interface-checker": {
      "version": "0.1.13",
      "resolved": "https://registry.npmmirror.com/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmmirror.com/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmmirror.com/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.3",
      "resolved": "https://registry.npmmirror.com/typed-array-buffer/-/typed-array-buffer-1.0.3.tgz",
      "integrity": "sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.3",
      "resolved": "https://registry.npmmirror.com/typed-array-byte-length/-/typed-array-byte-length-1.0.3.tgz",
      "integrity": "sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.4",
      "resolved": "https://registry.npmmirror.com/typed-array-byte-offset/-/typed-array-byte-offset-1.0.4.tgz",
      "integrity": "sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "reflect.getprototypeof": "^1.0.9"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.7",
      "resolved": "https://registry.npmmirror.com/typed-array-length/-/typed-array-length-1.0.7.tgz",
      "integrity": "sha512-3KS2b+kL7fsuk/eJZ7EQdnEmQoaho/r6KUef7hxvltNA5DR8NAUM+8wJMbJyZ4G9/7i3v5zPBIMN5aybAh2/Jg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "is-typed-array": "^1.1.13",
        "possible-typed-array-names": "^1.0.0",
        "reflect.getprototypeof": "^1.0.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmmirror.com/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.1.0",
      "resolved": "https://registry.npmmirror.com/unbox-primitive/-/unbox-primitive-1.1.0.tgz",
      "integrity": "sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.1.0",
        "which-boxed-primitive": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "5.26.5",
      "resolved": "https://registry.npmmirror.com/undici-types/-/undici-types-5.26.5.tgz",
      "integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==",
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.1.3",
      "resolved": "https://registry.npmmirror.com/update-browserslist-db/-/update-browserslist-db-1.1.3.tgz",
      "integrity": "sha512-UxhIZQ+QInVdunkDAaiazvvT/+fXL5Osr0JZlJulepYu6Jd7qJtDZjlur0emRlT71EN3ScPoE7gvsuIKKNavKw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmmirror.com/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmmirror.com/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "license": "MIT"
    },
    "node_modules/vite": {
      "version": "5.4.20",
      "resolved": "https://registry.npmmirror.com/vite/-/vite-5.4.20.tgz",
      "integrity": "sha512-j3lYzGC3P+B5Yfy/pfKNgVEg4+UtcIJcVRt2cDjIOmhLourAqPqf8P7acgxeiSgUB7E3p2P8/3gNIgDLpwzs4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.21.3",
        "postcss": "^8.4.43",
        "rollup": "^4.20.0"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || >=20.0.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        }
      }
    },
    "node_modules/webidl-conversions": {
      "version": "3.0.1",
      "resolved": "https://registry.npmmirror.com/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
      "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==",
      "license": "BSD-2-Clause"
    },
    "node_modules/whatwg-url": {
      "version": "5.0.0",
      "resolved": "https://registry.npmmirror.com/whatwg-url/-/whatwg-url-5.0.0.tgz",
      "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
      "license": "MIT",
      "dependencies": {
        "tr46": "~0.0.3",
        "webidl-conversions": "^3.0.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmmirror.com/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.1.1",
      "resolved": "https://registry.npmmirror.com/which-boxed-primitive/-/which-boxed-primitive-1.1.1.tgz",
      "integrity": "sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-bigint": "^1.1.0",
        "is-boolean-object": "^1.2.1",
        "is-number-object": "^1.1.1",
        "is-string": "^1.1.1",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.2.1",
      "resolved": "https://registry.npmmirror.com/which-builtin-type/-/which-builtin-type-1.2.1.tgz",
      "integrity": "sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.1.0",
        "is-finalizationregistry": "^1.1.0",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.2.1",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.1.0",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type/node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmmirror.com/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "resolved": "https://registry.npmmirror.com/which-collection/-/which-collection-1.0.2.tgz",
      "integrity": "sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.19",
      "resolved": "https://registry.npmmirror.com/which-typed-array/-/which-typed-array-1.1.19.tgz",
      "integrity": "sha512-rEvr90Bck4WZt9HHFC4DJMsjvu7x+r6bImz0/BrbWb7A2djJ8hnZMrWnHo9F8ssv0OMErasDhftrfROTyqSDrw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "for-each": "^0.3.5",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmmirror.com/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "8.1.0",
      "resolved": "https://registry.npmmirror.com/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.1.0",
        "string-width": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs": {
      "name": "wrap-ansi",
      "version": "7.0.0",
      "resolved": "https://registry.npmmirror.com/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmmirror.com/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/wrap-ansi-cjs/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmmirror.com/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-regex": {
      "version": "6.2.2",
      "resolved": "https://registry.npmmirror.com/ansi-regex/-/ansi-regex-6.2.2.tgz",
      "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-styles": {
      "version": "6.2.3",
      "resolved": "https://registry.npmmirror.com/ansi-styles/-/ansi-styles-6.2.3.tgz",
      "integrity": "sha512-4Dj6M28JB+oAH8kFkTLUo+a2jwOFkuqb3yucU0CANcRRUbxS0cP0nZYCGjcc3BNXwRIsUVmDGgzawme7zvJHvg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/strip-ansi": {
      "version": "7.1.2",
      "resolved": "https://registry.npmmirror.com/strip-ansi/-/strip-ansi-7.1.2.tgz",
      "integrity": "sha512-gmBGslpoQJtgnMAvOVqGZpEz9dyoKTCzy2nfz/n8aIFhN/jCE/rCmcxabB6jOOHV+0WNnylOxaxBQPSvcWklhA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmmirror.com/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmmirror.com/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmmirror.com/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  }
}

----[12]
multi-page-implementation.md
# 将单页应用转换为多页面应用的完整实现方案

## 问题分析

您感觉到"只能在一个页面内跳转"是正确的，因为当前应用是一个**典型的单页应用(SPA)**。所有内容都在同一个页面上展示，导航是通过锚点链接和滚动来实现的，而不是真正的页面切换。

## 解决方案：集成React Router

要实现真正的多页面体验，我们需要集成React Router库。下面是完整的实现方案：

### 步骤1：安装React Router依赖

```bash
npm install react-router-dom
```

### 步骤2：创建页面组件

在`src/pages`目录下创建以下页面组件：

1. **HomePage.tsx** - 首页，包含Hero区域和功能介绍
2. **ConvertPage.tsx** - 转换页面，包含输入和预览功能
3. **PricingPage.tsx** - 定价页面

### 步骤3：更新App.tsx以支持路由

```tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ConvertPage from './pages/ConvertPage';
import PricingPage from './pages/PricingPage';

// 定义通知类型
type NotificationType = 'success' | 'error' | 'info' | 'warning';

export const AppContext = React.createContext({
  showNotification: (message: string, type: NotificationType) => {},
  showScrollTop: false,
  scrollToTop: () => {},
});

const App: React.FC = () => {
  // 控制返回顶部按钮显示
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 添加视差滚动效果
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax-bg');
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0.1');
        (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
      
      // 控制返回顶部按钮显示
      setShowScrollTop(scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 返回顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 显示通知
  const showNotification = (message: string, type: NotificationType = 'success'): void => {
    // 保留原有的通知实现逻辑
    const notification = document.createElement('div');
    // ... 现有代码 ...
    document.body.appendChild(notification);
  };

  return (
    <Router>
      <AppContext.Provider value={{ showNotification, showScrollTop, scrollToTop }}>
        <div className="min-h-screen gradient-bg relative overflow-hidden">
          {/* 增强的背景装饰元素 */}
          <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" aria-hidden="true" />
          
          {/* 使用Header组件 */}
          <Header />
          
          {/* 路由定义 */}
          <main className="container mx-auto py-8 px-4 relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/convert" element={<ConvertPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </main>
          
          {/* 使用Footer组件 */}
          <Footer />
          
          {/* 返回顶部按钮 */}
          {showScrollTop && (
            <button 
              onClick={scrollToTop} 
              className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-fade-in transform hover:scale-110 pulse-glow"
              aria-label="返回顶部"
            >
              <span className="text-xl font-bold">↑</span>
            </button>
          )}
        </div>
      </AppContext.Provider>
    </Router>
  );
};

export default App;
```

### 步骤4：创建页面组件文件

#### HomePage.tsx
```tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* Hero区域 */}
      <section id="hero" className="text-center mb-20 mt-12 relative overflow-hidden pb-12">
        {/* 增强的装饰性元素 */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute -top-20 -right-40 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
        
        {/* 省略部分装饰元素... */}
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 relative z-10 text-shadow animate-fade-in group">
          将您的Notion内容转换为<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient group-hover:scale-105 transition-transform duration-500">精美网站</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto relative z-10 animate-fade-in-delay">
          使用AI技术一键将Notion文档转换为响应式网站，无需编码技能，轻松分享您的想法与知识。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
          <button 
            onClick={() => navigate('/convert')}
            className="btn btn-primary text-lg px-10 py-6 rounded-2xl font-medium shadow-lg hover:shadow-xl animate-float-small"
          >
            <span className="mr-2">✨</span>立即开始转换
          </button>
          <button 
            onClick={() => navigate('/pricing')}
            className="btn btn-secondary text-lg px-10 py-6 rounded-2xl font-medium animate-float-small"
          >
            <span className="mr-2">💰</span>查看定价
          </button>
        </div>
      
        {/* 特色亮点 */}
        <div id="features" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* 省略特色亮点卡片实现... */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
```

#### ConvertPage.tsx
```tsx
import React, { useState, useContext } from 'react';
import InputSection from '../components/InputSection';
import PreviewPanel from '../components/PreviewPanel';
import GuidePreview from '../components/GuidePreview';
import ExportPanel from '../components/ExportPanel';
import { fetchNotionContent } from '../services/notionService';
import { generateHTML } from '../utils/htmlGenerator';
import { generateAIGuide } from '../utils/aiGuideGenerator';
import { createExportPackage } from '../utils/exportUtils';
import { extractPageId } from '../utils/urlUtils';
import type { ExportPackage, AIGuide } from '../types';
import { AppContext } from '../App';

const ConvertPage: React.FC = () => {
  // 状态管理
  const [notionLink, setNotionLink] = useState('');
  const [generatedPreview, setGeneratedPreview] = useState<string | null>(null);
  const [aiGuide, setAIGuide] = useState<AIGuide | null>(null);
  const [exportPackage, setExportPackage] = useState<ExportPackage | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const { showNotification } = useContext(AppContext);

  // 处理生成预览
  const handleGeneratePreview = async () => {
    if (!notionLink) {
      showNotification('请输入Notion链接', 'warning');
      return;
    }

    setIsProcessing(true);
    try {
      const pageId = extractPageId(notionLink);
      if (!pageId) {
        showNotification('无效的Notion链接，请检查后重试。', 'error');
        setIsProcessing(false);
        return;
      }
      
      // 省略处理逻辑...
      
      showNotification('转换成功！您可以预览网站和导出文件。', 'success');
    } catch (error) {
      console.error("Error generating preview:", error);
      showNotification('转换失败，请检查Notion链接是否正确并再次尝试。', 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient">
        一键转换Notion文档
      </h2>
      
      {/* 内容区域 - 网格布局 */}
      <div id="demo" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 animate-fade-in">
        {/* 增强的装饰性背景元素 */}
        <div className="absolute -left-32 top-1/2 w-96 h-96 bg-indigo-100/70 rounded-full filter blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute -right-32 top-1/2 w-96 h-96 bg-purple-100/70 rounded-full filter blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="animate-float-small relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-700 animate-pulse-slow"></div>
          <div className="relative z-10">
            <InputSection 
              onGenerate={handleGeneratePreview}
              isProcessing={isProcessing}
            />
          </div>
        </div>
        <div className="animate-float-small" style={{ animationDelay: '0.2s' }}>
          <PreviewPanel 
            previewData={generatedPreview}
            isLoading={isProcessing && !generatedPreview}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="animate-float-small" style={{ animationDelay: '0.3s' }}>
          <GuidePreview 
            guide={aiGuide}
            isLoading={isProcessing && !aiGuide}
            onShowNotification={showNotification}
          />
        </div>
        <div className="animate-float-small relative group" style={{ animationDelay: '0.5s' }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-700 animate-pulse-slow"></div>
          <div className="relative z-10">
            <ExportPanel 
              exportPackage={exportPackage}
              isProcessing={isProcessing && !exportPackage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvertPage;
```

#### PricingPage.tsx
```tsx
import React, { useContext } from 'react';
import { AppContext } from '../App';

const PricingPage: React.FC = () => {
  const { showNotification } = useContext(AppContext);
  
  return (
    <div id="pricing" className="py-20 px-4 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl mb-16 animate-fade-in relative overflow-hidden shadow-card">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">简单透明的定价方案</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 免费版 */}
          <div className="bg-white rounded-2xl shadow-card p-8 border border-neutral-100 hover:shadow-card-hover transition-all duration-500 animate-float card-hover card-pop relative group">
            {/* 渐变光晕效果 */}
            <span className="absolute -inset-0.5 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700"></span>
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">免费版</h3>
                <p className="text-gray-500">适合个人使用</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">¥0</span>
                <span className="text-gray-500">/月</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>最多转换 5 个 Notion 页面</span>
                </li>
                {/* 省略其他特性... */}
              </ul>
              <button onClick={() => showNotification('您已在使用免费版', 'info')} className="w-full py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary/5 transition-colors duration-300 group-hover:shadow-sm">
                开始使用
              </button>
            </div>
          </div>
          
          {/* 专业版 */}
          {/* 省略专业版卡片实现... */}
          
          {/* 企业版 */}
          {/* 省略企业版卡片实现... */}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
```

### 步骤5：更新Header组件以支持导航

```tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md z-40 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mr-2">ai</div>
          <div className="text-2xl font-bold text-gray-900">NOTION</div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-primary transition-colors duration-300">首页</Link>
          <Link to="/convert" className="font-medium text-gray-700 hover:text-primary transition-colors duration-300">转换</Link>
          <Link to="/pricing" className="font-medium text-gray-700 hover:text-primary transition-colors duration-300">定价</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">登录</button>
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300">注册</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
```

## 实现说明

1. **应用类型**：当前应用是一个**单页应用(SPA)**，所有内容都在同一个页面上展示
2. **导航机制**：使用锚点链接和JavaScript滚动实现页面内导航，而不是传统的多页面跳转
3. **多页面实现**：通过集成React Router，我们可以将应用拆分为独立的页面组件，实现真正的页面切换

## 关键变化点

1. 添加了`AppContext`来共享全局功能（如通知和滚动）
2. 使用`BrowserRouter`包裹整个应用
3. 使用`Routes`和`Route`定义不同的页面路径
4. 使用`Link`组件创建导航链接
5. 使用`useNavigate`钩子进行编程式导航
6. 将原App.tsx中的内容拆分到不同的页面组件中

## 部署步骤

1. 安装依赖：`npm install react-router-dom`
2. 创建页面组件文件夹和文件
3. 复制上述代码到相应文件
4. 运行开发服务器：`npm run dev`
5. 构建生产版本：`npm run build`

通过这些更改，您的应用将拥有真正的多页面导航体验，用户可以在不同的页面间切换，而不仅仅是在一个页面内滚动。
----[13]
index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/assets/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Notion AI Template Studio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-gray-50 font-inter">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
----[14]
.gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build files
build/
.cache/
.parcel-cache/

# Testing
coverage/
*.lcov
.nyc_output/

# Temporary files
*.tmp
*.temp
.temp/
.tmp/

# OS generated files
Thumbs.db
.DS_Store
----[15]
.eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
}
----[16]
public\demo-preview.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notion Template Demo</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .demo-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        .demo-header {
            text-align: center;
            margin-bottom: 3rem;
        }
        .demo-preview {
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .demo-nav {
            background-color: #f9fafb;
            border-bottom: 1px solid #e5e7eb;
            padding: 1rem;
            display: flex;
            align-items: center;
        }
        .demo-nav-dots {
            display: flex;
            gap: 0.5rem;
            margin-right: 1rem;
        }
        .demo-nav-dot {
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 50%;
        }
        .demo-content {
            padding: 2rem;
            background-color: white;
        }
        .demo-footer {
            text-align: center;
            margin-top: 2rem;
            color: #6b7280;
            font-size: 0.875rem;
        }
    </style>
</head>
<body class="bg-gray-50">
    <div class="demo-container">
        <div class="demo-header">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">Notion Template Demo Preview</h1>
            <p class="text-gray-600">This is a preview of your generated Notion template landing page.</p>
        </div>

        <div class="demo-preview">
            <div class="demo-nav">
                <div class="demo-nav-dots">
                    <div class="demo-nav-dot bg-red-500"></div>
                    <div class="demo-nav-dot bg-yellow-500"></div>
                    <div class="demo-nav-dot bg-green-500"></div>
                </div>
                <span class="text-sm text-gray-500">notion-template-preview.html</span>
            </div>

            <div class="demo-content">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <h1 class="text-3xl font-bold mb-4">Notion Template Demo</h1>
                        <p class="text-gray-600 mb-6">This is a demo of your Notion template converted to a beautiful landing page.</p>
                        <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                            Get This Template
                        </button>
                    </div>
                    
                    <div class="mb-8">
                        <img 
                            src="https://via.placeholder.com/800x400?text=Notion+Template+Preview" 
                            alt="Template Preview" 
                            class="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold mb-4">Key Features</h2>
                        <ul class="space-y-2">
                            <li class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Beautiful responsive design</span>
                            </li>
                            <li class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Easy to customize</span>
                            </li>
                            <li class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Ready to sell</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="text-center">
                        <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                            Buy Now - $19.99
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="demo-footer">
            <p>This is a demo preview. Upgrade to Creator Pro to remove watermarks and get unlimited access.</p>
        </div>
    </div>
</body>
</html>
----[17]
src\vite-env.d.ts
/// <reference types="vite/client" />

// SVG 模块类型声明
declare module '*.svg' {
  const content: string;
  export default content;
}
----[18]
src\main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
----[19]
src\index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --primary: 47 129 247;
    --success: 40 167 69;
    --neutral: 17 24 39;
    --base-100: 255 255 255;
  }
}

@layer components {
  /* GitHub风格卡片样式 */
  .card {
    @apply bg-white border border-neutral-200 rounded-github p-6 shadow-github transition-all duration-300 hover:shadow-github-hover;
  }
  
  /* 侧边栏导航项 */
  .sidebar-item {
    @apply flex items-center gap-3 px-3 py-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 rounded-github transition-colors duration-200 w-full text-left;
  }
  
  .sidebar-item-active {
    @apply bg-neutral-100 text-neutral-900 font-medium;
  }
  
  /* 输入框样式 */
  .input-field {
    @apply w-full px-3 py-2 border border-neutral-200 rounded-github focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all bg-white;
  }
  
  /* GitHub风格按钮 */
  .btn-primary {
    @apply bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-github transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;
  }
  
  .btn-secondary {
    @apply border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 font-medium py-2 px-4 rounded-github transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-offset-2;
  }
  
  .btn-success {
    @apply bg-success hover:bg-success/90 text-white font-medium py-2 px-4 rounded-github transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2;
  }
  
  /* 链接样式 */
  .link {
    @apply text-primary hover:text-primary/80 hover:underline decoration-2 underline-offset-2 transition-colors duration-200;
  }
  
  /* 分隔线 */
  .divider {
    @apply border-t border-neutral-200 my-4;
  }
  
  /* 三栏布局容器 */
  .app-layout {
    @apply flex min-h-screen bg-neutral-50 text-neutral-800;
  }
  
  /* 左侧边栏 */
  .sidebar {
    @apply w-60 bg-white border-r border-neutral-200 flex-shrink-0 overflow-y-auto py-4 sticky top-0 h-screen;
  }
  
  /* 主内容区 */
  .main-content {
    @apply flex-1 min-w-0 p-6;
  }
  
  /* 右侧边栏 */
  .right-sidebar {
    @apply w-72 border-l border-neutral-200 flex-shrink-0 overflow-y-auto p-4 sticky top-0 h-screen hidden lg:block;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  /* Icon sizes */
  .icon-xs {
    width: 0.75rem;
    height: 0.75rem;
  }
  
  .icon-sm {
    width: 1rem;
    height: 1rem;
  }
  
  .icon-md {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  .icon-lg {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .icon-xl {
    width: 2rem;
    height: 2rem;
  }
  
  .icon-2xl {
    width: 2.5rem;
    height: 2.5rem;
  }
}
----[20]
src\App.tsx
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SidebarRight from './components/SidebarRight';
import HomePage from './pages/HomePage';
import ConvertPage from './pages/ConvertPage';
import PricingPage from './pages/PricingPage';
import type { PreviewData, ExportPackage, AIGuide, NotificationType } from './types';

// 创建AppContext共享全局功能
export const AppContext = createContext({
  showNotification: (_message: string, _type?: NotificationType) => {},
  showScrollTop: false,
  scrollToTop: () => {},
  isProcessing: false,
  generatedPreview: null as PreviewData | null,
  aiGuide: null as AIGuide | null,
  exportPackage: null as ExportPackage | null
});

// 引入service和utils功能
import { fetchNotionContent, extractPageId } from './services/notionAPI';
import { generateAIGuide } from './services/aiService';
import { generateHTML, createExportPackage } from './services/exportService';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedPreview, setGeneratedPreview] = useState<PreviewData | null>(null);
  const [aiGuide, setAiGuide] = useState<AIGuide | null>(null);
  const [exportPackage, setExportPackage] = useState<ExportPackage | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 移动端侧边栏切换
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 处理生成预览的逻辑
  const handleGeneratePreview = async (notionLink: string): Promise<void> => {
    setIsProcessing(true);
    try {
      // 提取Notion页面ID
      const pageId = extractPageId(notionLink);
      if (!pageId) {
        showNotification('无效的Notion链接，请检查后重试。', 'error');
        setIsProcessing(false);
        return;
      }
      
      // 显示进度通知
      showNotification('正在获取Notion内容...', 'info');
      
      // 获取Notion内容
      const notionContent = await fetchNotionContent(pageId);
      
      // 生成预览数据
      const previewData = generateHTML(notionContent);
      setGeneratedPreview(previewData);
      
      // 显示进度通知
      showNotification('正在生成AI优化指南...', 'info');
      
      // 生成AI指南
      const guide = await generateAIGuide(notionContent);
      setAiGuide(guide);
      
      // 显示进度通知
      showNotification('正在准备导出包...', 'info');
      
      // 生成导出包
      const exportPackage = await createExportPackage(previewData);
      setExportPackage(exportPackage);
      
      showNotification('转换成功！您可以预览网站和导出文件。', 'success');
    } catch (error) {
      console.error("Error generating preview:", error);
      showNotification('转换失败，请检查Notion链接是否正确并再次尝试。', 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  // 显示通知
  const showNotification = (message: string, type: NotificationType = 'success'): void => {
    const notification = document.createElement('div');
    
    // 定义颜色和图标
    let bgColor = 'bg-success';
    let icon = '✓';
    
    if (type === 'error') {
      bgColor = 'bg-error';
      icon = '❌';
    } else if (type === 'info') {
      bgColor = 'bg-primary';
      icon = 'ℹ';
    } else if (type === 'warning') {
      bgColor = 'bg-warning';
      icon = '⚠️';
    }
    
    notification.className = `fixed top-20 right-6 z-50 transform transition-all duration-500 translate-y-0 opacity-100 flex items-center gap-3 p-3 rounded-github shadow-github ${bgColor} text-white`;
    
    // 创建图标div
    const iconContainer = document.createElement('div');
    iconContainer.className = 'w-8 h-8 flex items-center justify-center';
    iconContainer.textContent = icon;
    notification.appendChild(iconContainer);
    
    // 创建消息文本节点
    const messageSpan = document.createElement('span');
    messageSpan.className = 'font-medium text-sm';
    messageSpan.textContent = message;
    notification.appendChild(messageSpan);
    
    // 添加关闭按钮
    const closeButton = document.createElement('button');
    closeButton.className = 'ml-4 text-white opacity-70 hover:opacity-100 transition-opacity';
    closeButton.textContent = '×';
    closeButton.style.fontSize = '1.25rem';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => {
      notification.classList.add('translate-y-[-20px]', 'opacity-0');
      setTimeout(() => notification.remove(), 500);
    };
    notification.appendChild(closeButton);
    
    document.body.appendChild(notification);
    
    // 自动关闭
    setTimeout(() => {
      notification.classList.add('translate-y-[-20px]', 'opacity-0');
      setTimeout(() => {
        notification.remove();
      }, 500);
    }, 5000);
  };

  // 添加滚动效果
  useEffect(() => {
    const handleScroll = () => {
      // 控制返回顶部按钮显示
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 返回顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 定义AppContext的值
  const contextValue = {
    showNotification,
    showScrollTop,
    scrollToTop,
    isProcessing,
    generatedPreview,
    aiGuide,
    exportPackage
  };

  return (
    <Router>
      <AppContext.Provider value={contextValue}>
        <div className="app-layout">
          {/* 桌面端左侧导航栏 */}
          <aside className="sidebar hidden md:block">
            <div className="px-3 mb-6">
              <h1 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <span className="inline-block w-6 h-6 bg-primary rounded-full"></span>
                AI Notion
              </h1>
            </div>
            
            <nav className="px-2">
              <Link to="/" className="sidebar-item sidebar-item-active">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </Link>
              <Link to="/convert" className="sidebar-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                Convert
              </Link>
              <Link to="/pricing" className="sidebar-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2" ry="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
                Pricing
              </Link>
              <Link to="/examples" className="sidebar-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 18l6-6-6-6"></path>
                  <path d="M8 6l-6 6 6 6"></path>
                </svg>
                Examples
              </Link>
            </nav>
            
            <div className="divider mx-3"></div>
            
            <nav className="px-2">
              <Link to="/login" className="sidebar-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Login
              </Link>
              <Link to="/signup" className="sidebar-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Sign Up
              </Link>
            </nav>
            
            <div className="divider mx-3"></div>
            
            <nav className="px-2">
              <Link to="/privacy-policy" className="sidebar-item text-xs text-neutral-400">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="sidebar-item text-xs text-neutral-400">
                Terms of Service
              </Link>
            </nav>
            
            <div className="px-3 mt-auto pt-4 mt-6">
              <p className="text-xs text-neutral-400">© 2023 AI Notion</p>
            </div>
          </aside>

          {/* 移动端侧边栏 */}
          <div className={`fixed inset-0 bg-black/50 z-50 md:hidden transition-opacity duration-200 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>
          <aside className={`fixed left-0 top-0 h-full bg-white border-r border-neutral-200 z-50 md:hidden transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ width: '80%', maxWidth: '280px' }}>
            <div className="p-4 flex justify-between items-center border-b border-neutral-200">
              <h1 className="text-xl font-bold text-neutral-900">AI Notion</h1>
              <button onClick={toggleSidebar} className="p-1 rounded-full hover:bg-neutral-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" x2="6" y1="6" y2="18"></line>
                  <line x1="6" x2="18" y1="6" y2="18"></line>
                </svg>
              </button>
            </div>
            <nav className="py-4">
              {/* 移动端导航项 */}
              <Link to="/" className="sidebar-item sidebar-item-active" onClick={toggleSidebar}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </Link>
              <Link to="/convert" className="sidebar-item" onClick={toggleSidebar}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                Convert
              </Link>
              <Link to="/pricing" className="sidebar-item" onClick={toggleSidebar}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2" ry="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
                Pricing
              </Link>
              <Link to="/examples" className="sidebar-item" onClick={toggleSidebar}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 18l6-6-6-6"></path>
                  <path d="M8 6l-6 6 6 6"></path>
                </svg>
                Examples
              </Link>
              <div className="divider mx-3"></div>
              <Link to="/login" className="sidebar-item" onClick={toggleSidebar}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Login
              </Link>
              <Link to="/signup" className="sidebar-item" onClick={toggleSidebar}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Sign Up
              </Link>
            </nav>
          </aside>

          {/* 主内容区 */}
          <main className="main-content">
            {/* 顶部工具栏 */}
            <div className="sticky top-0 bg-white border-b border-neutral-200 p-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                <button className="md:hidden p-2 rounded-full hover:bg-neutral-100" onClick={toggleSidebar}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                </button>
                <div className="hidden md:flex items-center gap-6">
                  <Link to="/" className="text-neutral-700 hover:text-primary font-medium text-sm">Home</Link>
                  <Link to="/convert" className="text-neutral-700 hover:text-primary font-medium text-sm">Convert</Link>
                  <Link to="/pricing" className="text-neutral-700 hover:text-primary font-medium text-sm">Pricing</Link>
                  <Link to="/examples" className="text-neutral-700 hover:text-primary font-medium text-sm">Examples</Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Link to="/login" className="btn-secondary text-sm hidden md:block">
                  Login
                </Link>
                <Link to="/signup" className="btn-success text-sm">
                  Sign Up
                </Link>
              </div>
            </div>

            {/* 页面内容 */}
            <div className="mt-6 max-w-4xl mx-auto">
              <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/convert" element={<ConvertPage onGeneratePreview={handleGeneratePreview} />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
            </div>
          </main>

          {/* 右侧边栏 - 仅在桌面端显示 */}
          <aside className="hidden lg:block">
            <SidebarRight />
          </aside>
          
          {/* 返回顶部按钮 */}
          {showScrollTop && (
            <button 
              onClick={scrollToTop} 
              className="fixed bottom-8 right-8 w-10 h-10 bg-neutral-700 text-white rounded-github flex items-center justify-center shadow-github hover:bg-neutral-800 transition-colors duration-200 z-50"
              aria-label="返回顶部"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          )}
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
----[21]
dist\index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/assets/logo-BbqXi1Kv.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Notion AI Template Studio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script type="module" crossorigin src="/assets/index-BVW0i_se.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index-BlYYo7mL.css">
  </head>
  <body class="bg-gray-50 font-inter">
    <div id="root"></div>
  </body>
</html>
----[22]
dist\demo-preview.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notion Template Demo</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .demo-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        .demo-header {
            text-align: center;
            margin-bottom: 3rem;
        }
        .demo-preview {
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .demo-nav {
            background-color: #f9fafb;
            border-bottom: 1px solid #e5e7eb;
            padding: 1rem;
            display: flex;
            align-items: center;
        }
        .demo-nav-dots {
            display: flex;
            gap: 0.5rem;
            margin-right: 1rem;
        }
        .demo-nav-dot {
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 50%;
        }
        .demo-content {
            padding: 2rem;
            background-color: white;
        }
        .demo-footer {
            text-align: center;
            margin-top: 2rem;
            color: #6b7280;
            font-size: 0.875rem;
        }
    </style>
</head>
<body class="bg-gray-50">
    <div class="demo-container">
        <div class="demo-header">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">Notion Template Demo Preview</h1>
            <p class="text-gray-600">This is a preview of your generated Notion template landing page.</p>
        </div>

        <div class="demo-preview">
            <div class="demo-nav">
                <div class="demo-nav-dots">
                    <div class="demo-nav-dot bg-red-500"></div>
                    <div class="demo-nav-dot bg-yellow-500"></div>
                    <div class="demo-nav-dot bg-green-500"></div>
                </div>
                <span class="text-sm text-gray-500">notion-template-preview.html</span>
            </div>

            <div class="demo-content">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-8">
                        <h1 class="text-3xl font-bold mb-4">Notion Template Demo</h1>
                        <p class="text-gray-600 mb-6">This is a demo of your Notion template converted to a beautiful landing page.</p>
                        <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                            Get This Template
                        </button>
                    </div>
                    
                    <div class="mb-8">
                        <img 
                            src="https://via.placeholder.com/800x400?text=Notion+Template+Preview" 
                            alt="Template Preview" 
                            class="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold mb-4">Key Features</h2>
                        <ul class="space-y-2">
                            <li class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Beautiful responsive design</span>
                            </li>
                            <li class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Easy to customize</span>
                            </li>
                            <li class="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Ready to sell</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="text-center">
                        <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                            Buy Now - $19.99
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="demo-footer">
            <p>This is a demo preview. Upgrade to Creator Pro to remove watermarks and get unlimited access.</p>
        </div>
    </div>
</body>
</html>
----[23]
src\utils\urlUtils.ts
/**
 * 从Notion链接中提取页面ID
 * @param url Notion页面链接
 * @returns 提取的页面ID或null
 */
export const extractPageId = (url: string): string | null => {
  try {
    // 支持多种Notion URL格式
    const regex = /([a-zA-Z0-9]{32})/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  } catch (error) {
    console.error('提取Notion页面ID失败:', error);
    return null;
  }
};
----[24]
src\utils\notionParser.ts
// Notion解析工具

/**
 * Notion区块类型
 */
export type NotionBlockType = 
  | 'paragraph'
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'bulleted_list_item'
  | 'numbered_list_item'
  | 'to_do'
  | 'toggle'
  | 'callout'
  | 'quote'
  | 'divider'
  | 'image'
  | 'video'
  | 'file'
  | 'pdf'
  | 'bookmark'
  | 'code'
  | 'table'
  | 'table_row'
  | 'table_cell'
  | 'embed'
  | 'link_preview'
  | 'synced_block'
  | 'template'
  | 'link_to_page'
  | 'equation'
  | 'breadcrumb'
  | 'table_of_contents'
  | 'column_list'
  | 'column'
  | 'child_page'
  | 'child_database';

/**
 * Notion富文本类型
 */
export type NotionRichTextType = 'text' | 'mention' | 'equation';

/**
 * Notion富文本格式
 */
export interface NotionRichTextFormat {
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  code?: boolean;
  color?: string;
}

/**
 * Notion富文本元素
 */
export interface NotionRichText {
  type: NotionRichTextType;
  text?: { content: string; link?: { url: string } };
  mention?: Record<string, any>;
  equation?: { expression: string };
  annotations: NotionRichTextFormat;
  plain_text: string;
  href?: string;
}

/**
 * Notion区块基础接口
 */
export interface NotionBlock {
  id: string;
  type: NotionBlockType;
  created_time: string;
  last_edited_time: string;
  created_by: { id: string; object: string };
  last_edited_by: { id: string; object: string };
  has_children: boolean;
  archived: boolean;
}

/**
 * 解析后的Notion内容接口
 */
export interface ParsedNotionContent {
  title: string;
  blocks: Array<{
    id: string;
    type: string;
    content: string;
    properties?: Record<string, any>;
    children?: Array<{
      id: string;
      type: string;
      content: string;
      properties?: Record<string, any>;
    }>;
  }>;
  coverImage?: string;
  icon?: string;
  createdTime?: string;
  lastEditedTime?: string;
}

/**
 * 解析Notion API响应
 * @param notionResponse Notion API的原始响应数据
 * @returns 解析后的Notion内容
 */
export const parseNotionResponse = (notionResponse: Record<string, any>): ParsedNotionContent => {
  try {
    const parsedContent: ParsedNotionContent = {
      title: extractTitle(notionResponse),
      blocks: [],
      coverImage: extractCoverImage(notionResponse),
      icon: extractIcon(notionResponse),
      createdTime: notionResponse.created_time,
      lastEditedTime: notionResponse.last_edited_time
    };
    
    // 解析区块内容
    if (notionResponse.results && Array.isArray(notionResponse.results)) {
      parsedContent.blocks = notionResponse.results.map((block: Record<string, any>) => {
        return parseNotionBlock(block);
      }).filter((block): block is NonNullable<typeof block> => block !== null);
    }
    
    return parsedContent;
  } catch (error) {
    console.error('Error parsing Notion response:', error);
    throw new Error('解析Notion内容失败');
  }
};

/**
 * 从Notion响应中提取标题
 * @param notionResponse Notion API响应数据
 * @returns 页面标题
 */
export const extractTitle = (notionResponse: Record<string, any>): string => {
  // 尝试从不同位置提取标题
  if (notionResponse.properties && notionResponse.properties.title && notionResponse.properties.title.title) {
    return parseRichTextArray(notionResponse.properties.title.title);
  }
  
  if (notionResponse.title && Array.isArray(notionResponse.title)) {
    return parseRichTextArray(notionResponse.title);
  }
  
  if (notionResponse.name && Array.isArray(notionResponse.name)) {
    return parseRichTextArray(notionResponse.name);
  }
  
  // 如果没有找到标题，返回默认标题
  return 'Notion 页面';
};

/**
 * 从Notion响应中提取封面图片
 * @param notionResponse Notion API响应数据
 * @returns 封面图片URL或undefined
 */
export const extractCoverImage = (notionResponse: Record<string, any>): string | undefined => {
  if (!notionResponse.cover) {
    return undefined;
  }
  
  if (notionResponse.cover.type === 'file') {
    return notionResponse.cover.file.url;
  } else if (notionResponse.cover.type === 'external') {
    return notionResponse.cover.external.url;
  }
  
  return undefined;
};

/**
 * 从Notion响应中提取图标
 * @param notionResponse Notion API响应数据
 * @returns 图标URL或emoji或undefined
 */
export const extractIcon = (notionResponse: Record<string, any>): string | undefined => {
  if (!notionResponse.icon) {
    return undefined;
  }
  
  if (notionResponse.icon.type === 'emoji') {
    return notionResponse.icon.emoji;
  } else if (notionResponse.icon.type === 'file') {
    return notionResponse.icon.file.url;
  } else if (notionResponse.icon.type === 'external') {
    return notionResponse.icon.external.url;
  }
  
  return undefined;
};

/**
 * 解析Notion区块
 * @param block Notion区块数据
 * @returns 解析后的区块对象或null（如果无法解析）
 */
export const parseNotionBlock = (block: Record<string, any>): ParsedNotionContent['blocks'][0] | null => {
  try {
    const blockType = block.type;
    const blockData = block[blockType] || {};
    
    // 根据区块类型解析不同的内容
    switch (blockType) {
      case 'paragraph':
        return parseParagraphBlock(block, blockData);
      case 'heading_1':
      case 'heading_2':
      case 'heading_3':
        return parseHeadingBlock(block, blockData);
      case 'bulleted_list_item':
      case 'numbered_list_item':
        return parseListItemBlock(block, blockData);
      case 'to_do':
        return parseToDoBlock(block, blockData);
      case 'callout':
        return parseCalloutBlock(block, blockData);
      case 'quote':
        return parseQuoteBlock(block, blockData);
      case 'image':
        return parseImageBlock(block, blockData);
      case 'divider':
        return parseDividerBlock(block);
      case 'code':
        return parseCodeBlock(block, blockData);
      case 'table':
        return parseTableBlock(block, blockData);
      case 'toggle':
        return parseToggleBlock(block, blockData);
      default:
        // 对于不支持的区块类型，尝试作为普通文本处理
        return parseUnknownBlock(block);
    }
  } catch (error) {
    console.error(`Error parsing block of type ${block?.type || 'unknown'}:`, error);
    return null;
  }
};

/**
 * 解析富文本数组
 * @param richTextArray 富文本数组
 * @returns 合并后的纯文本内容
 */
export const parseRichTextArray = (richTextArray: NotionRichText[]): string => {
  if (!Array.isArray(richTextArray)) {
    return '';
  }
  
  return richTextArray
    .map(text => text.plain_text || '')
    .join('');
};

/**
 * 解析段落区块
 */
const parseParagraphBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'paragraph',
    content: parseRichTextArray(blockData.rich_text || [])
  };
};

/**
 * 解析标题区块
 */
const parseHeadingBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  const headingLevel = block.type.replace('heading_', '');
  
  return {
    id: block.id,
    type: `heading_${headingLevel}`,
    content: parseRichTextArray(blockData.rich_text || []),
    properties: {
      level: parseInt(headingLevel)
    }
  };
};

/**
 * 解析列表项区块
 */
const parseListItemBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: block.type,
    content: parseRichTextArray(blockData.rich_text || [])
  };
};

/**
 * 解析待办事项区块
 */
const parseToDoBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'to_do',
    content: parseRichTextArray(blockData.rich_text || []),
    properties: {
      checked: blockData.checked || false
    }
  };
};

/**
 * 解析提示框区块
 */
const parseCalloutBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'callout',
    content: parseRichTextArray(blockData.rich_text || []),
    properties: {
      icon: blockData.icon?.emoji || blockData.icon?.external?.url || blockData.icon?.file?.url,
      color: blockData.color || 'default'
    }
  };
};

/**
 * 解析引用区块
 */
const parseQuoteBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'quote',
    content: parseRichTextArray(blockData.rich_text || [])
  };
};

/**
 * 解析图片区块
 */
const parseImageBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  let imageUrl = '';
  
  if (blockData.type === 'file') {
    imageUrl = blockData.file.url || '';
  } else if (blockData.type === 'external') {
    imageUrl = blockData.external.url || '';
  }
  
  return {
    id: block.id,
    type: 'image',
    content: imageUrl,
    properties: {
      caption: parseRichTextArray(blockData.caption || [])
    }
  };
};

/**
 * 解析分隔线区块
 */
const parseDividerBlock = (block: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'divider',
    content: ''
  };
};

/**
 * 解析代码块区块
 */
const parseCodeBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'code',
    content: parseRichTextArray(blockData.rich_text || []),
    properties: {
      language: blockData.language || 'plaintext'
    }
  };
};

/**
 * 解析表格区块
 */
const parseTableBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'table',
    content: '',
    properties: {
      has_column_header: blockData.has_column_header || false,
      has_row_header: blockData.has_row_header || false,
      table_width: blockData.table_width || 2
    }
  };
};

/**
 * 解析切换区块
 */
const parseToggleBlock = (block: Record<string, any>, blockData: Record<string, any>): ParsedNotionContent['blocks'][0] => {
  return {
    id: block.id,
    type: 'toggle',
    content: parseRichTextArray(blockData.rich_text || []),
    properties: {
      collapsed: true // 默认折叠
    }
  };
};

/**
 * 解析未知类型的区块
 */
const parseUnknownBlock = (block: Record<string, any>): ParsedNotionContent['blocks'][0] | null => {
  // 尝试获取任何可能的文本内容
  const blockData = block[block.type] || {};
  
  if (blockData.rich_text && Array.isArray(blockData.rich_text)) {
    const text = parseRichTextArray(blockData.rich_text);
    if (text) {
      return {
        id: block.id,
        type: block.type,
        content: text,
        properties: {
          originalType: block.type
        }
      };
    }
  }
  
  // 如果无法提取内容，返回null
  return null;
};

/**
 * 验证Notion页面ID格式
 * @param pageId Notion页面ID
 * @returns 是否为有效的Notion页面ID
 */
export const isValidNotionPageId = (pageId: string): boolean => {
  // Notion页面ID格式：32个字符的字母数字组合，或带连字符的UUID格式
  const uuidRegex = /^[a-zA-Z0-9]{32}$|^[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}$/;
  return uuidRegex.test(pageId);
};

/**
 * 规范化Notion页面链接
 * @param notionLink Notion页面链接
 * @returns 规范化后的链接
 */
export const normalizeNotionLink = (notionLink: string): string => {
  try {
    const url = new URL(notionLink);
    
    // 处理不同的Notion域名
    if (url.hostname === 'notion.so' || url.hostname === 'www.notion.so') {
      // 保留原始路径，但移除查询参数
      url.search = '';
      return url.toString();
    }
    
    return notionLink;
  } catch (error) {
    console.error('Error normalizing Notion link:', error);
    return notionLink;
  }
};
----[25]
src\utils\htmlGenerator.ts
// HTML生成工具

/**
 * HTML生成配置选项
 */
export interface HTMLGeneratorOptions {
  title?: string;
  lang?: string;
  metaTags?: Array<{ name: string; content: string }>;
  externalStyles?: string[];
  externalScripts?: string[];
  inlineStyles?: string;
  inlineScripts?: string;
  favicon?: string;
  includeGoogleFonts?: boolean;
  googleFonts?: string[];
}

/**
 * 创建基础HTML结构
 * @param content 页面内容
 * @param options 生成选项
 * @returns 完整的HTML字符串
 */
export const createBasicHTML = (content: string, options?: HTMLGeneratorOptions): string => {
  const defaultOptions: HTMLGeneratorOptions = {
    title: 'Notion 转换页面',
    lang: 'zh-CN',
    metaTags: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: '通过 AI Notion 转换工具生成的精美网页' }
    ],
    externalStyles: [],
    externalScripts: [],
    inlineStyles: '',
    inlineScripts: '',
    favicon: '',
    includeGoogleFonts: false,
    googleFonts: []
  };
  
  const config = { ...defaultOptions, ...options };
  
  // 生成meta标签
  const metaHtml = config.metaTags
    ? config.metaTags.map(tag => `<meta name="${tag.name}" content="${tag.content}">`).join('\n      ') + '\n      ' 
    : '';
  
  // 生成外部样式链接
  const stylesHtml = config.externalStyles
    ? config.externalStyles.map(style => `<link rel="stylesheet" href="${style}">`).join('\n      ') + '\n      ' 
    : '';
  
  // 生成外部脚本链接
  const scriptsHtml = config.externalScripts
    ? config.externalScripts.map(script => `<script src="${script}"></script>`).join('\n      ') + '\n      ' 
    : '';
  
  // 生成Google字体链接
  const googleFontsHtml = config.includeGoogleFonts && config.googleFonts && config.googleFonts.length > 0
    ? `<link rel="preconnect" href="https://fonts.googleapis.com">\n      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n      <link href="https://fonts.googleapis.com/css2?family=${config.googleFonts.join('&family=')}&display=swap" rel="stylesheet">\n      `
    : '';
  
  // 生成favicon链接
  const faviconHtml = config.favicon ? `<link rel="icon" href="${config.favicon}" type="image/svg+xml">\n      ` : '';
  
  return `
<!DOCTYPE html>
<html lang="${config.lang}">
<head>
  <meta charset="UTF-8">
  ${metaHtml}${faviconHtml}${googleFontsHtml}${stylesHtml}${scriptsHtml}
  ${config.inlineStyles ? `<style>${config.inlineStyles}</style>` : ''}
  <title>${config.title}</title>
</head>
<body>
  ${content}
  ${config.inlineScripts ? `<script>${config.inlineScripts}</script>` : ''}
</body>
</html>`;
};

/**
 * 生成响应式CSS样式
 * @param themeColors 主题颜色配置
 * @returns CSS样式字符串
 */
export const generateResponsiveStyles = (themeColors?: Record<string, string>): string => {
  const defaultColors = {
    primary: '#4F46E5',
    secondary: '#8B5CF6',
    accent: '#10B981',
    background: '#ffffff',
    text: '#1F2937',
    'text-secondary': '#4B5563',
    border: '#E5E7EB'
  };
  
  const colors = { ...defaultColors, ...themeColors };
  
  return `
:root {
  --primary-color: ${colors.primary};
  --secondary-color: ${colors.secondary};
  --accent-color: ${colors.accent};
  --background-color: ${colors.background};
  --text-color: ${colors.text};
  --text-secondary-color: ${colors['text-secondary']};
  --border-color: ${colors.border};
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --radius-sm: 0.25rem;
  --radius: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

/* 标题样式 */
h1, h2, h3, h4, h5, h6 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.25;
  color: var(--primary-color);
}

h1 {
  font-size: 2.25rem;
  font-weight: 700;
}

h2 {
  font-size: 1.875rem;
}

h3 {
  font-size: 1.5rem;
}

@media (min-width: 640px) {
  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 2.25rem;
  }
  
  h3 {
    font-size: 1.875rem;
  }
}

/* 段落和文本样式 */
p {
  margin-bottom: 1.5rem;
  color: var(--text-secondary-color);
}

strong {
  font-weight: 600;
  color: var(--text-color);
}

/* 链接样式 */
a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--secondary-color);
  text-decoration: underline;
}

/* 图片样式 */
img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius);
  display: block;
  margin: 2rem 0;
  box-shadow: var(--shadow-md);
}

/* 列表样式 */
ul, ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary-color);
}

/* 卡片样式 */
.card {
  background-color: var(--background-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

/* 按钮样式 */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  border-radius: var(--radius);
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  outline: none;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #4338ca;
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: white;
}

.btn-secondary:hover {
  background-color: #7c3aed;
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn-outline:hover {
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
}

/* 布局辅助类 */
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-4 {
  gap: 1rem;
}

.gap-6 {
  gap: 1.5rem;
}

.gap-8 {
  gap: 2rem;
}

/* 响应式网格 */
.grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 间距类 */
.mt-4 {
  margin-top: 1rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mt-8 {
  margin-top: 2rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pt-8 {
  padding-top: 2rem;
}

.pb-8 {
  padding-bottom: 2rem;
}`;
};

/**
 * 压缩HTML字符串
 * @param html 原始HTML字符串
 * @returns 压缩后的HTML字符串
 */
export const minifyHTML = (html: string): string => {
  // 移除注释
  let minified = html.replace(/<!--[^>]*-->/g, '');
  
  // 移除多余的空白字符
  minified = minified.replace(/\s+/g, ' ');
  
  // 移除行首和行尾的空白
  minified = minified.trim();
  
  // 移除HTML标签之间的空白
  minified = minified.replace(/\s+</g, '<');
  minified = minified.replace(/>\s+/g, '>');
  
  return minified;
};

/**
 * 美化HTML字符串（用于调试）
 * @param html 压缩的HTML字符串
 * @returns 格式化后的HTML字符串
 */
export const prettifyHTML = (html: string): string => {
  let tabLevel = 0;
  let result = '';
  let inTag = false;
  let inComment = false;
  let inScript = false;
  let inStyle = false;
  
  for (let i = 0; i < html.length; i++) {
    const char = html[i];
    const nextChar = html[i + 1] || '';
    
    // 处理注释
    if (char === '<' && nextChar === '!') {
      inComment = true;
    }
    
    if (char === '>' && html.substring(i - 2, i + 1) === '-->') {
      inComment = false;
    }
    
    // 处理script标签
    if (!inComment && char === '<' && html.substring(i, i + 7).toLowerCase() === '<script') {
      inScript = true;
    }
    
    if (!inComment && char === '<' && html.substring(i, i + 9).toLowerCase() === '</script>') {
      inScript = false;
    }
    
    // 处理style标签
    if (!inComment && char === '<' && html.substring(i, i + 6).toLowerCase() === '<style') {
      inStyle = true;
    }
    
    if (!inComment && char === '<' && html.substring(i, i + 8).toLowerCase() === '</style>') {
      inStyle = false;
    }
    
    // 不处理脚本和样式内容的格式化
    if (inScript || inStyle || inComment) {
      result += char;
      continue;
    }
    
    // 开始标签
    if (char === '<' && nextChar !== '/') {
      result += '\n' + '  '.repeat(tabLevel) + char;
      tabLevel++;
      inTag = true;
    }
    // 结束标签
    else if (char === '<' && nextChar === '/') {
      tabLevel--;
      result += '\n' + '  '.repeat(tabLevel) + char;
      inTag = true;
    }
    // 标签结束
    else if (char === '>') {
      result += char;
      inTag = false;
    }
    // 普通字符
    else {
      if (!inTag && char === ' ' && result[result.length - 1] === ' ') {
        // 跳过连续的空格
        continue;
      }
      result += char;
    }
  }
  
  // 移除多余的空行
  return result.replace(/\n\s*\n/g, '\n').trim();
};

/**
 * 提取HTML中的关键元素
 * @param html HTML字符串
 * @returns 包含标题、描述、图片等关键元素的对象
 */
export const extractHTMLMetadata = (html: string): Record<string, string | string[]> => {
  const metadata: Record<string, string | string[]> = {};
  
  // 提取标题
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  if (titleMatch && titleMatch[1]) {
    metadata.title = titleMatch[1].trim();
  }
  
  // 提取描述
  const descMatch = html.match(/<meta\s+name="description"\s+content="(.*?)"/i);
  if (descMatch && descMatch[1]) {
    metadata.description = descMatch[1].trim();
  }
  
  // 提取图片
  const images: string[] = [];
  const imageRegex = /<img\s+[^>]*src="(.*?)"[^>]*>/gi;
  let imageMatch;
  while ((imageMatch = imageRegex.exec(html)) !== null) {
    if (imageMatch[1]) {
      images.push(imageMatch[1].trim());
    }
  }
  
  if (images.length > 0) {
    metadata.images = images;
  }
  
  // 提取链接
  const links: string[] = [];
  const linkRegex = /<a\s+[^>]*href="(.*?)"[^>]*>/gi;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(html)) !== null) {
    if (linkMatch[1]) {
      links.push(linkMatch[1].trim());
    }
  }
  
  if (links.length > 0) {
    metadata.links = links;
  }
  
  return metadata;
};
----[26]
src\utils\exportUtils.ts
/**
 * 导出工具函数
 */
import type { ExportPackage } from '../types';

/**
 * 创建导出包
 * @param htmlContent 要导出的HTML内容
 * @returns 导出包对象
 */
export const createExportPackage = async (htmlContent: string): Promise<ExportPackage> => {
  try {
    // 模拟创建导出包的过程
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 生成一个简化的HTML文件内容（实际项目中可以包含更多样式和脚本）
    const completeHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notion页面导出</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1, h2, h3, h4, h5, h6 { margin-top: 1.5em; margin-bottom: 0.5em; font-weight: 600; }
    p { margin-bottom: 1em; }
    ul, ol { margin-bottom: 1em; padding-left: 1.5em; }
    img { max-width: 100%; height: auto; margin: 1em 0; }
    .container { background-color: white; border-radius: 8px; padding: 40px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); }
  </style>
</head>
<body>
  <div class="container">
    ${htmlContent}
  </div>
</body>
</html>`;
    
    return {
      htmlFile: {
        name: 'notion-export.html',
        content: completeHtml,
        type: 'text/html'
      },
      assets: [],
      metadata: {
        exportDate: new Date().toISOString(),
        version: '1.0',
        source: 'aiNOTION Converter'
      }
    };
  } catch (error) {
    console.error('创建导出包失败:', error);
    // 返回包含错误信息的导出包
    return {
      htmlFile: {
        name: 'notion-export.html',
        content: '<html><body><h1>导出失败</h1><p>无法创建导出文件，请稍后重试。</p></body></html>',
        type: 'text/html'
      },
      assets: [],
      metadata: {
        exportDate: new Date().toISOString(),
        version: '1.0',
        source: 'aiNOTION Converter',
        error: '导出过程中出现错误'
      }
    };
  }
};
----[27]
src\utils\aiGuideGenerator.ts
/**
 * AI指南生成器
 */
import type { AIGuide } from '../types';

/**
 * 生成AI优化指南
 * @param notionContent Notion内容
 * @returns AI指南对象
 */
export const generateAIGuide = async (_notionContent: any): Promise<AIGuide> => {
  try {
    // 模拟AI分析过程（实际项目中可以集成真实的AI服务）
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      title: 'Notion页面优化指南',
      steps: [
        {
          id: '1',
          title: '内容结构优化',
          description: '建议将长段落分割为更小的部分，使用更多的小标题提高可读性。',
          priority: 'high'
        },
        {
          id: '2',
          title: '媒体资源添加',
          description: '考虑添加相关图片或视频，增强页面视觉吸引力。',
          priority: 'medium'
        },
        {
          id: '3',
          title: '交互元素',
          description: '添加更多的交互元素，如Toggle列表或复选框，提升用户体验。',
          priority: 'medium'
        }
      ],
      summary: '您的页面内容丰富，通过上述优化可以进一步提升可读性和用户体验。',
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('生成AI指南失败:', error);
    // 返回默认指南结构
    return {
      title: 'Notion页面优化指南',
      steps: [
        {
          id: '1',
          title: '基础结构检查',
          description: '确保页面结构清晰，内容层次分明。',
          priority: 'high'
        }
      ],
      summary: '指南生成过程中遇到问题，请稍后重试。',
      timestamp: new Date().toISOString()
    };
  }
};
----[28]
src\types\index.ts
/**
 * 项目类型定义
 */

/**
 * 通知类型枚举
 */
export type NotificationType = 'success' | 'error' | 'info' | 'warning';

/**
 * 通知接口
 */
export interface Notification {
  message: string;
  type: NotificationType;
}

/**
 * AI指南步骤接口
 */
export interface AIGuideStep {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

/**
 * AI指南接口
 */
export interface AIGuide {
  title: string;
  steps: AIGuideStep[];
  summary: string;
  timestamp: string;
}

/**
 * 文件接口
 */
export interface File {
  name: string;
  content: string;
  type: string;
}

/**
 * 导出包元数据接口
 */
export interface ExportMetadata {
  exportDate: string;
  version: string;
  source: string;
  error?: string;
  title?: string;
  description?: string;
}

/**
 * 预览数据接口
 */
export interface PreviewData {
  title: string;
  description: string;
  imageUrl?: string;
  features?: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  htmlContent: string;
}

/**
 * 导出包接口
 */
export interface ExportPackage {
  htmlFile: File;
  assets: File[];
  metadata: ExportMetadata;
}
----[29]
src\services\notionAPI.ts
// Notion API 服务

/**
 * 从Notion链接中提取页面ID
 * @param notionLink Notion页面链接
 * @returns 提取的页面ID或null
 */
export const extractPageId = (notionLink: string): string | null => {
  try {
    // 匹配常见的Notion链接格式
    const regex = /([a-zA-Z0-9]{32}|[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12})/;
    const match = notionLink.match(regex);
    
    // 如果没有匹配到ID，但包含'example-page'，返回一个示例ID
    if (!match && notionLink.includes('example-page')) {
      return 'example-page-id';
    }
    
    return match ? match[1] : null;
  } catch (error) {
    console.error('Error extracting Notion page ID:', error);
    return null;
  }
};

/**
 * Notion内容数据结构
 */
export interface NotionContent {
  title: string;
  content: Array<{
    id: string;
    type: 'heading' | 'paragraph' | 'image' | 'list' | 'table' | 'callout' | 'quote';
    content: string;
    properties?: Record<string, any>;
  }>;
  coverImage?: string;
  icon?: string;
}

/**
 * 获取Notion页面内容
 * @param pageId Notion页面ID
 * @returns Promise<NotionContent> Notion内容数据
 */
export const fetchNotionContent = async (_pageId: string): Promise<NotionContent> => {
  try {
    // 在实际应用中，这里应该调用Notion API获取内容
    // 目前使用模拟数据
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 模拟Notion内容数据
    return {
      title: "Notion 示例页面",
      coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      content: [
        {
          id: '1',
          type: 'heading',
          content: '欢迎使用 AI Notion 转换工具'
        },
        {
          id: '2',
          type: 'paragraph',
          content: '这是一个示例 Notion 页面内容。通过我们的工具，您可以将 Notion 文档转换为精美的响应式网站，无需任何编码知识。'
        },
        {
          id: '3',
          type: 'image',
          content: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
          id: '4',
          type: 'heading',
          content: '主要特性'
        },
        {
          id: '5',
          type: 'list',
          content: '快速转换：几秒钟内完成转换过程'
        },
        {
          id: '6',
          type: 'list',
          content: '完全响应式：适配各种设备屏幕'
        },
        {
          id: '7',
          type: 'list',
          content: 'AI优化：智能生成SEO友好的内容'
        },
        {
          id: '8',
          type: 'callout',
          content: '提示：确保您的Notion页面已设置为公开访问。'
        }
      ]
    };
  } catch (error) {
    console.error('Error fetching Notion content:', error);
    throw new Error('获取Notion内容失败，请检查页面ID是否正确且页面已公开。');
  }
};

/**
 * 检查Notion页面是否公开
 * @param pageId Notion页面ID
 * @returns Promise<boolean> 是否公开
 */
export const isNotionPagePublic = async (_pageId: string): Promise<boolean> => {
  try {
    // 模拟检查页面是否公开
    await new Promise(resolve => setTimeout(resolve, 500));
    return true; // 默认为公开，实际应用中应调用Notion API检查
  } catch (error) {
    console.error('Error checking Notion page visibility:', error);
    return false;
  }
};
----[30]
src\services\exportService.ts
// 导出服务功能
import type { NotionContent } from './notionAPI';
import type { PreviewData, ExportPackage, File as CustomFile } from '../types';

/**
 * 网站主题配置
 */
export interface ThemeConfig {
  primaryColor?: string;
  secondaryColor?: string;
  fontFamily?: string;
  fontSize?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

/**
 * 生成HTML预览数据
 * @param notionContent Notion内容数据
 * @param theme 主题配置（可选）
 * @returns PreviewData 预览数据
 */
export const generateHTML = (notionContent: NotionContent, theme?: ThemeConfig): PreviewData => {
  try {
    // 设置默认主题
    const defaultTheme: ThemeConfig = {
      primaryColor: '#4F46E5',
      secondaryColor: '#8B5CF6',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      fontSize: '16px',
      backgroundColor: '#ffffff',
      textColor: '#1F2937',
      accentColor: '#10B981'
    };
    
    const selectedTheme = { ...defaultTheme, ...theme };
    
    // 生成HTML内容
    const htmlContent = createHTMLFromNotionContent(notionContent, selectedTheme);
    
    // 提取页面特征
    const features = extractFeaturesFromContent(notionContent);
    
    return {
      title: notionContent.title || 'Notion 转换页面',
      description: '通过 AI Notion 转换工具生成的精美网页',
      imageUrl: notionContent.coverImage || getDefaultImage(),
      features: features,
      htmlContent: htmlContent
    };
  } catch (error) {
    console.error('Error generating HTML:', error);
    throw new Error('生成HTML预览失败');
  }
};

/**
 * 从Notion内容创建HTML
 * @param content Notion内容数据
 * @param theme 主题配置
 * @returns HTML字符串
 */
const createHTMLFromNotionContent = (content: NotionContent, theme: ThemeConfig): string => {
  const styleBlock = `
    <style>
      :root {
        --primary-color: ${theme.primaryColor};
        --secondary-color: ${theme.secondaryColor};
        --font-family: ${theme.fontFamily};
        --font-size: ${theme.fontSize};
        --background-color: ${theme.backgroundColor};
        --text-color: ${theme.textColor};
        --accent-color: ${theme.accentColor};
      }
      
      body {
        font-family: var(--font-family);
        font-size: var(--font-size);
        color: var(--text-color);
        background-color: var(--background-color);
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }
      
      h1, h2, h3, h4, h5, h6 {
        color: var(--primary-color);
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
      
      p {
        margin-bottom: 1.5rem;
      }
      
      img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 2rem 0;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      
      ul, ol {
        margin-bottom: 1.5rem;
        padding-left: 1.5rem;
      }
      
      li {
        margin-bottom: 0.5rem;
      }
      
      .callout {
        background-color: rgba(16, 185, 129, 0.1);
        border-left: 4px solid var(--accent-color);
        padding: 1rem;
        border-radius: 0 8px 8px 0;
        margin: 1.5rem 0;
      }
      
      .quote {
        font-style: italic;
        border-left: 4px solid var(--secondary-color);
        padding-left: 1rem;
        margin: 1.5rem 0;
        color: #4B5563;
      }
      
      .cover-image {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 0;
        margin: 0 0 2rem 0;
      }
    </style>
  `;
  
  let bodyContent = '';
  
  // 添加封面图片
  if (content.coverImage) {
    bodyContent += `<img src="${content.coverImage}" alt="Cover" class="cover-image">`;
  }
  
  // 添加标题
  bodyContent += `<h1>${content.title}</h1>`;
  
  // 添加内容块
  content.content.forEach(block => {
    switch (block.type) {
      case 'heading':
        bodyContent += `<h2>${block.content}</h2>`;
        break;
      case 'paragraph':
        bodyContent += `<p>${block.content}</p>`;
        break;
      case 'image':
        bodyContent += `<img src="${block.content}" alt="Content image">`;
        break;
      case 'list':
        bodyContent += `<li>${block.content}</li>`;
        break;
      case 'callout':
        bodyContent += `<div class="callout">${block.content}</div>`;
        break;
      case 'quote':
        bodyContent += `<div class="quote">${block.content}</div>`;
        break;
      default:
        bodyContent += `<p>${block.content}</p>`;
    }
  });
  
  // 包装在完整的HTML结构中
  return `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${content.title || 'Notion 转换页面'}</title>
      ${styleBlock}
    </head>
    <body>
      <div class="container">
        ${bodyContent}
      </div>
    </body>
    </html>
  `;
};

/**
 * 从内容中提取特征列表
 * @param content Notion内容数据
 * @returns 特征数组
 */
const extractFeaturesFromContent = (content: NotionContent): Array<{id: string; title: string; description: string}> => {
  const features: Array<{id: string; title: string; description: string}> = [];
  
  // 检查内容类型，添加相应的特征
  if (content.content.some(item => item.type === 'image')) {
    features.push({
      id: 'feature-1',
      title: '精美图片展示',
      description: '页面包含高质量图片，提升视觉体验'
    });
  }
  
  if (content.content.some(item => item.type === 'list')) {
    features.push({
      id: 'feature-2',
      title: '结构化信息列表',
      description: '内容采用列表形式组织，便于阅读和理解'
    });
  }
  
  if (content.content.some(item => item.type === 'callout')) {
    features.push({
      id: 'feature-3',
      title: '重要提示突出显示',
      description: '关键信息通过提示框突出显示'
    });
  }
  
  if (content.coverImage) {
    features.push({
      id: 'feature-4',
      title: '专业封面图片',
      description: '页面配有专业封面图片，提升整体美观度'
    });
  }
  
  // 如果没有提取到足够的特征，添加默认特征
  if (features.length < 3) {
    const defaultFeatures = [
      {
        id: 'feature-default-1',
        title: '精美响应式设计',
        description: '适配各种屏幕尺寸的响应式布局'
      },
      {
        id: 'feature-default-2',
        title: '易于阅读排版',
        description: '优化的字体和间距，提升阅读体验'
      },
      {
        id: 'feature-default-3',
        title: 'AI优化内容',
        description: '通过AI技术优化的内容展示'
      },
      {
        id: 'feature-default-4',
        title: '快速加载性能',
        description: '优化的代码结构，确保快速加载'
      },
      {
        id: 'feature-default-5',
        title: 'SEO友好结构',
        description: '符合搜索引擎优化的页面结构'
      }
    ];
    
    defaultFeatures.forEach(feature => {
      if (!features.some(f => f.title === feature.title) && features.length < 5) {
        features.push(feature);
      }
    });
  }
  
  return features.slice(0, 5); // 最多返回5个特征
};

/**
 * 获取默认图片URL
 * @returns 默认图片URL
 */
const getDefaultImage = (): string => {
  // 提供几个备选的默认图片
  const defaultImages = [
    'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
  ];
  
  // 随机选择一个默认图片
  return defaultImages[Math.floor(Math.random() * defaultImages.length)];
};

/**
 * 创建导出包
 * @param previewData 预览数据
 * @returns Promise<ExportPackage> 导出包信息
 */
export const createExportPackage = async (previewData: PreviewData): Promise<ExportPackage> => {
  try {
    // 模拟打包过程
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 生成模拟的下载链接（实际应用中应返回真实的下载URL）
    const downloadUrl = '#'; // 在真实应用中，这里应该是实际的文件下载链接
    
    // 生成文件名
    const safeTitle = previewData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').trim();
    const fileName = `${safeTitle}-website-package.zip`;
    
    // 创建一个模拟的File对象
    const htmlFile: CustomFile = {
      name: fileName,
      type: 'application/zip',
      content: downloadUrl // 这里简化处理，实际应用中应该是文件内容
    };
    
    return {
      htmlFile: htmlFile,
      assets: [],
      metadata: {
        exportDate: new Date().toISOString(),
        version: '1.0.0',
        source: 'AI Notion Converter',
        title: previewData.title,
        description: previewData.description
      }
    };
  } catch (error) {
    console.error('Error creating export package:', error);
    throw new Error('创建导出包失败，请稍后重试。');
  }
};

/**
 * 生成预览图（模拟）
 * @param htmlContent HTML内容
 * @returns Promise<string> 预览图URL
 */
export const generatePreviewImage = async (_htmlContent: string): Promise<string> => {
  try {
    // 模拟生成预览图过程
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 返回模拟的预览图URL
    return 'https://via.placeholder.com/800x450?text=Website+Preview';
  } catch (error) {
    console.error('Error generating preview image:', error);
    throw new Error('生成预览图失败');
  }
};
----[31]
src\services\aiService.ts
// AI服务功能
import type { NotionContent } from './notionAPI';
import type { AIGuide, AIGuideStep } from '../types';

/**
 * AI指南生成参数
 */
export interface GenerateGuideParams {
  content: NotionContent;
  targetAudience?: 'beginner' | 'intermediate' | 'advanced';
  includeDesignTips?: boolean;
  includeContentTips?: boolean;
  includeMarketingTips?: boolean;
}

/**
 * 生成AI网站优化指南
 * @param content Notion内容数据
 * @returns Promise<AIGuide> AI优化指南
 */
export const generateAIGuide = async (content: NotionContent): Promise<AIGuide> => {
  try {
    // 模拟AI处理过程
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 分析内容，生成针对性的建议
    const guideSections = generateGuideSections(content);
    
    // 将sections转换为AIGuideStep格式
    const steps: AIGuideStep[] = guideSections.map((section, index) => ({
      id: `step-${index + 1}`,
      title: section.title,
      description: section.content,
      priority: index < 3 ? 'high' : 'medium'
    }));
    
    return {
      title: "AI 网站优化指南",
      steps: steps,
      summary: "根据您的内容分析，我们提供了一系列优化建议，帮助您创建更加专业和吸引人的网站。",
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error generating AI guide:', error);
    throw new Error('生成AI指南失败，请稍后重试。');
  }
};

/**
 * 基于Notion内容生成指南部分
 * @param content Notion内容数据
 * @returns 指南部分数组
 */
const generateGuideSections = (content: NotionContent): Array<{ title: string; content: string }> => {
  const sections: Array<{ title: string; content: string }> = [];
  
  // 页面结构优化建议
  sections.push({
    title: "页面结构优化",
    content: generateStructureSuggestions(content)
  });
  
  // 内容排版建议
  sections.push({
    title: "内容排版",
    content: generateTypographySuggestions(content)
  });
  
  // 响应式设计建议
  sections.push({
    title: "响应式设计",
    content: "确保在移动设备上的良好显示效果，优化触控体验。建议使用弹性布局和响应式图像。"
  });
  
  // SEO优化建议
  sections.push({
    title: "SEO优化",
    content: generateSEOSuggestions(content)
  });
  
  // 互动元素建议
  sections.push({
    title: "互动元素",
    content: "考虑添加更多互动元素，如悬停效果、平滑滚动和简单动画，提升用户体验。"
  });
  
  return sections;
};

/**
 * 生成页面结构建议
 * @param content Notion内容数据
 * @returns 结构建议文本
 */
const generateStructureSuggestions = (content: NotionContent): string => {
  const hasImages = content.content.some(item => item.type === 'image');
  const hasLists = content.content.some(item => item.type === 'list');
  const hasHeadings = content.content.some(item => item.type === 'heading');
  
  let suggestions = [];
  
  if (!hasImages) {
    suggestions.push("添加相关图片可以提高页面吸引力和信息传达效率。");
  }
  
  if (!hasLists) {
    suggestions.push("考虑使用列表来组织信息，使其更易于阅读和理解。");
  }
  
  if (!hasHeadings || content.content.filter(item => item.type === 'heading').length < 2) {
    suggestions.push("增加更多的标题层级，帮助用户快速浏览和理解内容结构。");
  }
  
  if (suggestions.length === 0) {
    return "页面结构良好，建议保持当前的组织方式。";
  }
  
  return suggestions.join(' ');
};

/**
 * 生成排版建议
 * @param content Notion内容数据
 * @returns 排版建议文本
 */
const generateTypographySuggestions = (content: NotionContent): string => {
  const paragraphCount = content.content.filter(item => item.type === 'paragraph').length;
  
  if (paragraphCount === 0) {
    return "建议添加详细的段落内容，为用户提供更多有价值的信息。";
  }
  
  if (paragraphCount < 3) {
    return "考虑增加更多的内容段落，使页面更加丰富和全面。";
  }
  
  return "内容排版合理，建议使用一致的字体样式和间距，提高可读性。";
};

/**
 * 生成SEO建议
 * @param content Notion内容数据
 * @returns SEO建议文本
 */
const generateSEOSuggestions = (content: NotionContent): string => {
  // 检查标题长度和关键词
  const titleLength = content.title.length;
  const hasKeywordInTitle = content.title.toLowerCase().includes('notion') || 
                          content.title.toLowerCase().includes('指南') || 
                          content.title.toLowerCase().includes('教程');
  
  let suggestions = [];
  
  if (titleLength < 10 || titleLength > 70) {
    suggestions.push("标题长度建议在10-70个字符之间，以获得更好的搜索引擎显示效果。");
  }
  
  if (!hasKeywordInTitle) {
    suggestions.push("考虑在标题中包含相关关键词，提高搜索引擎优化效果。");
  }
  
  if (suggestions.length === 0) {
    return "SEO表现良好，建议添加合适的元描述和关键词标签。";
  }
  
  return suggestions.join(' ');
};

/**
 * 优化Notion内容用于网站展示
 * @param content Notion内容数据
 * @returns 优化后的内容
 */
export const optimizeContentForWeb = (content: NotionContent): NotionContent => {
  // 深拷贝原始内容
  const optimizedContent = { ...content, content: [...content.content] };
  
  // 优化标题长度
  if (optimizedContent.title.length > 100) {
    optimizedContent.title = optimizedContent.title.substring(0, 97) + '...';
  }
  
  // 优化图片链接（如果有必要）
  optimizedContent.content = optimizedContent.content.map(item => {
    if (item.type === 'image' && item.content.includes('images.unsplash.com')) {
      return {
        ...item,
        properties: {
          ...item.properties,
          altText: '相关图片展示'
        }
      };
    }
    return item;
  });
  
  return optimizedContent;
};
----[32]
src\pages\PricingPage.tsx
import React, { useContext } from 'react';
import { AppContext } from '../App';

const PricingPage: React.FC = () => {
  const { showNotification } = useContext(AppContext);
  
  return (
    <div id="pricing" className="py-20 px-4 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl mb-16 animate-fade-in relative overflow-hidden shadow-card">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">简单透明的定价方案</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 免费版 */}
          <div className="bg-white rounded-2xl shadow-card p-8 border border-neutral-100 hover:shadow-card-hover transition-all duration-500 animate-float card-hover card-pop relative group">
            {/* 渐变光晕效果 */}
            <span className="absolute -inset-0.5 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700"></span>
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">免费版</h3>
                <p className="text-gray-500">适合个人使用</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">¥0</span>
                <span className="text-gray-500">/月</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>最多转换 5 个 Notion 页面</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>基础自定义选项</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>HTML 导出</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">✗</span>
                  <span>高级 AI 指南</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">✗</span>
                  <span>自定义域名</span>
                </li>
              </ul>
              <button onClick={() => showNotification('您已在使用免费版', 'info')} className="w-full py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary/5 transition-colors duration-300 group-hover:shadow-sm">
                开始使用
              </button>
            </div>
          </div>
          
          {/* 专业版 */}
          <div className="bg-white rounded-2xl shadow-card p-8 border-2 border-primary relative hover:shadow-card-hover transition-all duration-500 animate-float card-hover card-pop scale-105 transform" style={{ animationDelay: '0.2s' }}>
            {/* 渐变光晕效果 */}
            <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-30"></span>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-4 rounded-full shadow-md">
              最受欢迎
            </div>
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">专业版</h3>
                <p className="text-gray-500">适合个人开发者和小团队</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">¥39</span>
                <span className="text-gray-500">/月</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>无限 Notion 页面转换</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>完整自定义选项</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>多格式导出</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>高级 AI 指南</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">✗</span>
                  <span>自定义域名</span>
                </li>
              </ul>
              <button onClick={() => showNotification('感谢您对专业版的兴趣', 'success')} className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg pulse-glow">
                升级专业版
              </button>
            </div>
          </div>
          
          {/* 企业版 */}
          <div className="bg-white rounded-2xl shadow-card p-8 border border-neutral-100 hover:shadow-card-hover transition-all duration-500 animate-float card-hover card-pop relative group" style={{ animationDelay: '0.4s' }}>
            {/* 渐变光晕效果 */}
            <span className="absolute -inset-0.5 bg-gradient-to-r from-secondary/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700"></span>
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300">企业版</h3>
                <p className="text-gray-500">适合企业和大型团队</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">¥199</span>
                <span className="text-gray-500">/月</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>无限 Notion 页面转换</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>完整自定义选项</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>多格式导出</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>高级 AI 指南</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>自定义域名</span>
                </li>
              </ul>
              <button onClick={() => showNotification('联系我们获取企业解决方案', 'info')} className="w-full py-3 rounded-xl border border-secondary text-secondary font-medium hover:bg-secondary/5 transition-colors duration-300 group-hover:shadow-sm">
                联系销售
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
----[33]
src\pages\HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero区域 */}
      <section id="hero" className="mb-16 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            将 Notion 内容转换为响应式网站
          </h1>
          <p className="text-base md:text-lg text-neutral-600 mb-8 max-w-2xl">
            无需编码，AI 自动转换，轻松分享您的想法与知识。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              onClick={() => navigate('/convert')}
              className="btn-primary text-sm px-6 py-2 rounded-github font-medium shadow-github"
            >
              立即开始转换
            </button>
            <button 
              onClick={() => navigate('/pricing')}
              className="btn-secondary text-sm px-6 py-2 rounded-github font-medium"
            >
              查看定价
            </button>
          </div>
        </div>
      
        {/* 特色亮点 */}
        <div id="features" className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* 快速转换 */}
          <div className="card p-6">
            <div className="w-10 h-10 bg-neutral-100 rounded-github flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-neutral-900">几秒内完成转换</h3>
            <p className="text-sm text-neutral-600">几秒钟内将Notion内容转换为网页</p>
          </div>
          
          {/* 完全定制 */}
          <div className="card p-6">
            <div className="w-10 h-10 bg-neutral-100 rounded-github flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-neutral-900">自定义主题</h3>
            <p className="text-sm text-neutral-600">自定义主题、颜色和布局</p>
          </div>
          
          {/* 安全可靠 */}
          <div className="card p-6">
            <div className="w-10 h-10 bg-neutral-100 rounded-github flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-neutral-900">数据加密</h3>
            <p className="text-sm text-neutral-600">数据加密传输，隐私安全</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
----[34]
src\pages\ConvertPage.tsx
import React, { useState, useContext } from 'react';
import InputSection from '../components/InputSection';
import PreviewPanel from '../components/PreviewPanel';
import GuidePreview from '../components/GuidePreview';
import ExportPanel from '../components/ExportPanel';
import { fetchNotionContent } from '../services/notionAPI';
import { generateHTML, createExportPackage } from '../services/exportService';
import { generateAIGuide } from '../services/aiService';
import { extractPageId } from '../utils/urlUtils';
import type { ExportPackage, AIGuide, PreviewData } from '../types';
import { AppContext } from '../App';

interface ConvertPageProps {
  onGeneratePreview?: (notionLink: string) => Promise<void>;
}

const ConvertPage: React.FC<ConvertPageProps> = () => {
  // 状态管理
  const [notionLink] = useState('');
  const [generatedPreview, setGeneratedPreview] = useState<PreviewData | null>(null);
  const [aiGuide, setAIGuide] = useState<AIGuide | null>(null);
  const [exportPackage, setExportPackage] = useState<ExportPackage | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const { showNotification } = useContext(AppContext);

  // 处理生成预览
  const handleGeneratePreview = async () => {
    if (!notionLink) {
      showNotification('请输入Notion链接', 'warning');
      return;
    }

    setIsProcessing(true);
    try {
      const pageId = extractPageId(notionLink);
      if (!pageId) {
        showNotification('无效的Notion链接，请检查后重试。', 'error');
        setIsProcessing(false);
        return;
      }
      
      // 显示进度通知
      showNotification('正在获取Notion内容...', 'info');
      
      // 获取Notion内容
      const notionContent = await fetchNotionContent(pageId);
      
      // 生成预览数据
      const previewData = generateHTML(notionContent);
      setGeneratedPreview(previewData);
      
      // 显示进度通知
      showNotification('正在生成AI优化指南...', 'info');
      
      // 生成AI指南
      const guide = await generateAIGuide(notionContent);
      setAIGuide(guide);
      
      // 显示进度通知
      showNotification('正在准备导出包...', 'info');
      
      // 生成导出包
      const exportPackage = await createExportPackage(previewData);
      setExportPackage(exportPackage);
      
      showNotification('转换成功！您可以预览网站和导出文件。', 'success');
    } catch (error) {
      console.error("Error generating preview:", error);
      showNotification('转换失败，请检查Notion链接是否正确并再次尝试。', 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 text-neutral-900">
        转换Notion文档
      </h2>
      
      {/* 内容区域 - 网格布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <div className="card">
          <InputSection 
            onGenerate={handleGeneratePreview}
            isProcessing={isProcessing}
          />
        </div>
        <div className="card">
          <PreviewPanel 
            previewData={generatedPreview}
            aiGuide={aiGuide}
            isLoading={isProcessing && !generatedPreview}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <GuidePreview 
            guide={aiGuide}
            isLoading={isProcessing && !aiGuide}
            onShowNotification={showNotification}
          />
        </div>
        <div className="card">
          <ExportPanel 
            exportPackage={exportPackage}
            isProcessing={isProcessing && !exportPackage}
          />
        </div>
      </div>
    </div>
  );
};

export default ConvertPage;
----[35]
src\components\SidebarRight.tsx
import React from 'react';

const SidebarRight: React.FC = () => {
  // 模拟最新动态数据
  const latestUpdates = [
    {
      time: '3小时前',
      description: '新增支持 Notion 数据库导出',
      icon: '🆕'
    },
    {
      time: '1天前',
      description: '优化移动端适配',
      icon: '⚡️'
    },
    {
      time: '2天前',
      description: '上线多语言支持',
      icon: '🌐'
    }
  ];

  return (
    <div className="w-full lg:w-80 p-4">
      <div className="bg-neutral-100 rounded-github p-5">
        <h3 className="text-sm font-semibold text-neutral-900 mb-4">最新动态</h3>
        <ul className="space-y-3 mb-4">
          {latestUpdates.map((update, index) => (
            <li key={index} className="flex items-start">
              <span className="text-neutral-500 mr-2 mt-0.5">{update.icon}</span>
              <span className="text-sm text-neutral-600">
                <span className="text-neutral-500">{update.time}：</span>{update.description}
              </span>
            </li>
          ))}
        </ul>
        <button className="text-sm text-primary hover:text-primary-dark">
          查看更多更新 →
        </button>
      </div>
    </div>
  );
};

export default SidebarRight;
----[36]
src\components\SidebarLeft.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarLeft: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // 定义导航项目
  const navItems = [
    {
      path: '/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      label: 'Home'
    },
    {
      path: '/convert',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      label: 'Convert'
    },
    {
      path: '/pricing',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <line x1="2" x2="22" y1="10" y2="10"></line>
        </svg>
      ),
      label: 'Pricing'
    },
    {
      path: '/examples',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      label: 'Examples'
    }
  ];

  // 定义辅助链接
  const helpLinks = [
    {
      path: '/settings',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      label: 'Settings'
    },
    {
      path: '/help',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" x2="12.01" y1="16" y2="16"></line>
          <path d="M11.35 8a1.4 1.4 0 0 0-2.22-.01L6.8 9.8a1 1 0 1 0 1.5 1.35l1.45-1.2a1 1 0 0 1 1.2-.08l2.75 1a1 1 0 0 0 1-.17l1.4-1.4a1 1 0 0 0-1.31-1.5l-1.05.62a1.19 1.19 0 0 1-1.12 0Z"></path>
        </svg>
      ),
      label: 'Help'
    }
  ];

  // 定义法律链接
  const legalLinks = [
    {
      path: '/privacy',
      label: 'Privacy Policy'
    },
    {
      path: '/terms',
      label: 'Terms of Service'
    }
  ];

  return (
    <div className="w-full lg:w-60 bg-neutral-100 h-screen fixed lg:sticky top-0 left-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-4 border-b border-neutral-200">
        <h2 className="text-xl font-bold text-neutral-900">AI Notion</h2>
      </div>
      
      {/* 主导航 */}
      <nav className="p-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-github text-sm mb-1 transition-colors ${pathname === item.path ? 'bg-neutral-200 text-primary' : 'text-neutral-700 hover:bg-neutral-200'}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      
      {/* 分隔线 */}
      <div className="my-2 border-t border-neutral-200 px-4">
        <hr />
      </div>
      
      {/* 帮助链接 */}
      <nav className="p-2">
        {helpLinks.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-3 py-2 rounded-github text-sm mb-1 text-neutral-700 hover:bg-neutral-200 transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      
      {/* 分隔线 */}
      <div className="my-2 border-t border-neutral-200 px-4">
        <hr />
      </div>
      
      {/* 法律链接 */}
      <nav className="p-2">
        {legalLinks.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block px-3 py-2 text-xs text-neutral-500 hover:text-neutral-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      
      {/* 版权信息 */}
      <div className="mt-auto p-4 border-t border-neutral-200">
        <p className="text-xs text-neutral-500">
          © 2023 AI Notion. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SidebarLeft;
----[37]
src\components\PreviewPanel.tsx
import React, { useState, useEffect } from 'react';
import { PreviewData, AIGuide } from '../types';
import { Eye, Download, Share2, Sparkles } from 'lucide-react';

interface PreviewPanelProps {
  previewData: PreviewData | null;
  aiGuide?: AIGuide | null;
  isLoading: boolean;
  onExportClick?: () => void;
  onShareClick?: () => void;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ previewData, aiGuide, isLoading, onExportClick, onShareClick }) => {
  const [activeTab, setActiveTab] = useState<'website' | 'guide'>('website');
  const [progress, setProgress] = useState(0);

  // 模拟加载进度
  React.useEffect(() => {
    if (isLoading && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + Math.floor(Math.random() * 15) + 5, 100));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, progress]);

  // 重置进度条
  React.useEffect(() => {
    if (!isLoading) {
      setProgress(0);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="p-5 border border-neutral-200 rounded-github bg-white">
        <div className="flex items-center gap-3 mb-8">
          <Eye className="text-primary" size={24} />
          <h2 className="text-xl font-bold text-neutral-900">预览效果</h2>
        </div>
        
        <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-8">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium text-neutral-800 mb-4">正在生成预览</h3>
            <p className="text-neutral-600 text-center max-w-md mb-6">AI正在分析您的Notion内容并创建网页</p>
            
            <div className="mt-6 w-full max-w-md h-2 bg-neutral-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full"
                style={{width: `${progress}%`}}
              ></div>
            </div>
            <div className="mt-3 text-sm text-neutral-500">
              {progress < 30 && '正在解析Notion内容...'}
              {progress >= 30 && progress < 70 && '正在优化页面布局...'}
              {progress >= 70 && '正在生成预览图像...'}
            </div>
          </div>
      </div>
    );
  }

  if (!previewData) {
    return (
      <div className="p-5 border border-neutral-200 rounded-github bg-white">
        <div className="flex items-center gap-3 mb-8">
          <Eye className="text-primary" size={24} />
          <h2 className="text-xl font-bold text-neutral-900">预览效果</h2>
        </div>
        
        <div className="p-8 border border-neutral-200 rounded-github text-center">
          <div className="bg-primary/5 rounded-full p-5 mb-6 inline-block">
            <Eye className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-neutral-800 mb-4">预览将显示在这里</h3>
          <p className="text-neutral-600 max-w-md mx-auto mb-6">
            输入Notion链接后，您将在此处看到生成的网页预览。
          </p>
          <div className="bg-neutral-50 p-4 rounded-github border border-neutral-200 text-neutral-600 max-w-md mx-auto">
            <p className="flex items-center gap-2 mb-2 font-medium text-primary">
              <Sparkles size={16} className="text-primary" />
              智能提示
            </p>
            <p className="text-sm">预览内容将完全匹配您的Notion页面结构和设计，并由AI自动优化布局和样式。</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 border border-neutral-200 rounded-github bg-white">
      <div className="flex items-center gap-3 mb-8">
        <Eye className="text-primary" size={24} />
        <h2 className="text-xl font-bold text-neutral-900">预览效果</h2>
      </div>
      
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <p className="text-neutral-600">
          查看转换后的网站效果或AI生成的优化指南
        </p>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setActiveTab('website')}
            className={`px-4 py-2 rounded-github text-sm font-medium ${activeTab === 'website' ? 'bg-primary text-white' : 'text-neutral-700 border border-neutral-300 hover:bg-neutral-50'}`}
          >
            网站预览
          </button>
          <button 
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 rounded-github text-sm font-medium ${activeTab === 'guide' ? 'bg-primary text-white' : 'text-neutral-700 border border-neutral-300 hover:bg-neutral-50'}`}
            disabled={!aiGuide}
          >
            AI指南
          </button>
        </div>
      </div>
      
      <div className="border border-neutral-200 rounded-github overflow-hidden bg-white">
        {/* 模拟浏览器窗口 */}
        <div className="bg-neutral-800 px-4 py-2 flex items-center border-b border-neutral-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center text-xs text-neutral-400 truncate px-4">
            https://ai-notion-preview.com/your-page
          </div>
          <div className="w-8"></div> {/* 占位符，用于平衡布局 */}
        </div>
        
        {/* 预览内容 */}
        <div className="bg-white p-6">
          {activeTab === 'website' ? (
            <>
              {/* 英雄区域 */}
              <div className="bg-primary text-white mb-8 p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">{previewData.title}</h1>
                <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">{previewData.description}</p>
                <button className="bg-white text-primary px-6 py-2 rounded-github font-medium hover:bg-neutral-100">
                  立即开始
                </button>
              </div>
              
              {/* 特色图片占位区 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border-2 border-dashed border-primary/20 rounded-github w-full h-60 flex flex-col items-center justify-center p-6">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-github flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-neutral-800 mb-2">特色图片 1</h3>
                  <p className="text-neutral-600 text-center text-sm">展示您的产品核心功能或优势</p>
                </div>
                <div className="border-2 border-dashed border-primary/20 rounded-github w-full h-60 flex flex-col items-center justify-center p-6">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-github flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-neutral-800 mb-2">特色图片 2</h3>
                  <p className="text-neutral-600 text-center text-sm">突出您的产品安全保障或认证</p>
                </div>
              </div>
              
              {/* 关键特性 */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-6 text-center">关键特性</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {(previewData.features || []).map((feature, index) => (
                    <div key={feature.id || index} className="p-5 rounded-github border border-neutral-200 bg-white hover:border-primary/20">
                      <div className="bg-primary/10 text-primary w-12 h-12 rounded-github flex items-center justify-center mb-4">
                        <span className="font-bold text-lg">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-medium mb-3 text-neutral-800">{feature.title}</h3>
                      <p className="text-neutral-600 text-sm">{feature.description || '这个特性可以帮助用户更好地理解产品功能和优势。'}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 定价CTA */}
              <div className="bg-primary text-white p-8 text-center">
                <h2 className="text-xl font-bold mb-4">准备开始了吗？</h2>
                <p className="text-lg mb-6 text-white/90">立即加入我们，解锁全部功能</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-primary px-6 py-2 rounded-github font-medium hover:bg-neutral-100">
                    立即购买
                  </button>
                  <button className="bg-transparent border border-white text-white px-6 py-2 rounded-github font-medium hover:bg-white/10">
                    联系销售
                  </button>
                </div>
              </div>
            </>
          ) : aiGuide ? (
            <div className="bg-neutral-50 rounded-github p-5 border border-neutral-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-github flex items-center justify-center text-primary border border-neutral-200">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-800">AI优化指南</h3>
                </div>
                
                <div className="space-y-5">
                  {aiGuide.steps.map((step, index) => (
                    <div key={step.id || index} className="p-5 rounded-github border border-neutral-200 bg-white">
                      <h4 className="font-medium text-neutral-800 mb-3 flex items-center gap-3">
                        <div className={`w-7 h-7 ${step.priority === 'high' ? 'bg-primary/10 text-primary' : 'bg-neutral-100 text-neutral-600'} rounded-github flex items-center justify-center text-xs font-bold`}>{index + 1}</div>
                        {step.title}
                      </h4>
                      <p className="text-neutral-600 text-sm mb-4">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center bg-neutral-50 rounded-github">
                <div className="bg-white rounded-full p-4 mb-6 border border-neutral-200">
                  <Sparkles className="w-6 h-6 text-neutral-400" />
                </div>
                <h3 className="text-lg font-medium text-neutral-800 mb-3">AI指南生成中</h3>
                <p className="text-neutral-600 mb-6 text-sm">请稍候，我们正在为您生成详细的优化指南</p>
                <div className="w-40 h-2 bg-neutral-200 rounded-github overflow-hidden">
                  <div className="h-full w-3/4 bg-primary rounded-github" />
                </div>
              </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 flex flex-wrap justify-end gap-3">
        <button 
          onClick={onShareClick}
          className="px-4 py-2 border border-neutral-300 rounded-github text-neutral-700 hover:bg-neutral-50 flex items-center gap-2"
        >
          <Share2 size={16} />
          分享预览
        </button>
        <button 
          onClick={onExportClick}
          className="px-4 py-2 bg-primary text-white rounded-github hover:bg-primary-dark flex items-center gap-2"
        >
          <Download size={16} />
          导出产品包
        </button>
      </div>
    </div>
  );
};

export default PreviewPanel;
----[38]
src\components\InputSection.tsx
import React, { useState } from 'react';

interface InputSectionProps {
  onGenerate: (link: string) => Promise<void>;
  isProcessing: boolean;
}

const InputSection: React.FC<InputSectionProps> = ({ onGenerate, isProcessing }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setError('请输入Notion页面链接');
      return;
    }
    
    // 简单的URL验证
    try {
      new URL(inputValue);
      setError('');
      onGenerate(inputValue);
    } catch (err) {
      setError('请输入有效的URL');
    }
  };

  const handleClear = (): void => {
    setInputValue('');
    setError('');
  };

  return (
    <div className="p-5">
      <h3 className="text-lg font-semibold mb-5 text-neutral-900">输入Notion链接</h3>
      
      <div className="bg-neutral-50 border border-neutral-200 rounded-github p-4 mb-5">
        <h4 className="font-medium text-neutral-700 mb-2">准备您的Notion页面</h4>
        <p className="text-sm text-neutral-600">确保您的Notion页面链接可以公开访问。请确认页面已设置为公开访问。</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="notion-link" className="block text-sm font-medium text-neutral-700 mb-1">
            Notion页面链接
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
              🔗
            </div>
            <input
              id="notion-link"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="https://www.notion.so/your-page"
              className={`w-full pl-10 pr-10 py-2 rounded-github border ${error ? 'border-red-300' : 'border-neutral-300'} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
              disabled={isProcessing}
            />
            {inputValue && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                disabled={isProcessing}
                aria-label="清除输入"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>
          {error && (
            <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-github">
              {error}
            </div>
          )}
        </div>
        
        <div className="space-y-3 pt-4">
          <button
            type="submit"
            disabled={isProcessing}
            className={`w-full py-2 px-4 rounded-github font-medium text-white transition-colors ${isProcessing ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark'}`}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span>
                <span>处理中...</span>
              </div>
            ) : (
              <span>生成预览</span>
            )}
          </button>
          
          <button
            type="button"
            onClick={() => onGenerate('https://www.notion.so/example-page')}
            disabled={isProcessing}
            className={`w-full py-2 px-4 rounded-github font-medium transition-colors ${isProcessing ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed' : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50'}`}
          >
            试用示例
          </button>
        </div>
      </form>
      
      {/* 操作流程说明 */}
      <div className="mt-6 p-4 bg-neutral-50 border border-neutral-200 rounded-github">
        <h4 className="font-medium text-neutral-900 mb-3">操作流程</h4>
        <ol className="text-sm text-neutral-700 space-y-2">
          <li className="flex items-start">
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">1</span>
            <span>粘贴您的Notion公开页面链接</span>
          </li>
          <li className="flex items-start">
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">2</span>
            <span>点击"生成预览"按钮</span>
          </li>
          <li className="flex items-start">
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">3</span>
            <span>等待AI生成网站预览</span>
          </li>
          <li className="flex items-start">
            <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5">4</span>
            <span>查看并导出您的新网站</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default InputSection;
----[39]
src\components\Icon.tsx
import React from 'react';

export type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  name: string;
  size?: IconSize;
  className?: string;
  color?: string;
  strokeWidth?: number;
  hoverEffect?: boolean;
  [key: string]: any;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'md', 
  className = '', 
  color = 'currentColor',
  strokeWidth = 2,
  hoverEffect = false,
  ...props 
}) => {
  const sizeClasses = {
    '2xs': 'w-2 h-2',
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  const hoverClasses = hoverEffect ? 'transition-all duration-300 hover:scale-110' : '';
  const iconSizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <svg 
      className={`${iconSizeClass} ${hoverClasses} ${className}`} 
      fill="none" 
      stroke={color}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
----[40]
src\components\Icon.jsx
import React from 'react';

const Icon = ({ 
  name, 
  size = 'md', 
  className = '', 
  color = 'currentColor',
  strokeWidth = 2,
  hoverEffect = false,
  ...props 
}) => {
  const sizeClasses = {
    '2xs': 'w-2 h-2',
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  const hoverClasses = hoverEffect ? 'transition-all duration-300 hover:scale-110' : '';
  const iconSizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <svg 
      className={`${iconSizeClass} ${hoverClasses} ${className}`} 
      fill="none" 
      stroke={color}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
----[41]
src\components\Icon.d.ts
import React from 'react';

type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  name: string;
  size?: IconSize;
  className?: string;
  color?: string;
  strokeWidth?: number;
  hoverEffect?: boolean;
  [key: string]: any;
}

declare const Icon: React.FC<IconProps>;

export default Icon;
----[42]
src\components\Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // 监听滚动事件来改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20' : 'py-4 bg-transparent'} relative`}>
      {/* 装饰性背景元素 */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className={`h-10 w-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 ${isScrolled ? 'scale-100' : 'scale-110 group-hover:rotate-6'}`}>
              <span className="text-white text-sm font-bold">AI</span>
            </div>
            <span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary transition-all duration-500 tracking-tight ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
              AI Notion
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-neutral-600 hover:text-primary transition-all duration-300 relative group">
              <span className="absolute inset-0 bg-primary/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
              <span className="relative z-10 px-3 py-2">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full rounded-full"></span>
            </Link>
            <Link to="/convert" className="font-medium text-neutral-600 hover:text-primary transition-all duration-300 relative group">
              <span className="absolute inset-0 bg-primary/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
              <span className="relative z-10 px-3 py-2">Convert</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full rounded-full"></span>
            </Link>
            <Link to="/pricing" className="font-medium text-neutral-600 hover:text-primary transition-all duration-300 relative group">
              <span className="absolute inset-0 bg-primary/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
              <span className="relative z-10 px-3 py-2">Pricing</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full rounded-full"></span>
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="flex items-center space-x-4">
            <button 
              className="btn-ghost text-sm hidden sm:flex relative group px-5 py-2.5 rounded-full border border-gray-200"
              aria-label="Login"
            >
              <span className="absolute inset-0 bg-white rounded-full shadow-sm transform scale-95 group-hover:scale-100 transition-all duration-300"></span>
              <span className="relative z-10 font-medium">Login</span>
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
            <button 
              className={`px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm transition-all duration-500 relative overflow-hidden group hover:shadow-lg hover:-translate-y-0.5 ${isScrolled ? 'shadow-medium' : 'shadow-soft'}`}
              aria-label="Sign Up Free"
            >
              <span className="relative z-10 flex items-center gap-1.5">Sign Up Free <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" /></span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button 
              className="md:hidden text-neutral-700 hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/5"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {[              { name: 'Home', to: '/' },              { name: 'Convert', to: '/convert' },              { name: 'Pricing', to: '/pricing' }            ].map((item) => (
              <Link 
                key={item.name}
                to={item.to}
                className="block text-neutral-700 hover:text-primary transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-primary/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t border-neutral-100">
              <button 
                className="btn-ghost text-sm"
                aria-label="Login"
              >
                Login
              </button>
              <button 
                className="btn-primary text-sm shadow-soft"
                aria-label="Sign Up Free"
              >
                Sign Up Free
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
----[43]
src\components\GuidePreview.tsx
import React, { useState } from 'react';
import { Copy, BookOpen, FileText, Sparkles, CheckCircle, FileDown } from 'lucide-react';
import { AIGuide, NotificationType } from '../types';

interface GuidePreviewProps {
  guide: AIGuide | null;
  isLoading: boolean;
  onShowNotification: (message: string, type?: NotificationType) => void;
}

const GuidePreview: React.FC<GuidePreviewProps> = ({ guide, isLoading, onShowNotification }) => {
  const [copyStatus, setCopyStatus] = useState<string>('');

  const copyToClipboard = async (): Promise<void> => {
    if (!guide || !guide.steps) return;
    
    try {
      // 将steps转换为markdown格式
      let markdown = `# ${guide.title}\n\n${guide.summary}\n\n`;
      guide.steps.forEach((step, index) => {
        markdown += `## ${index + 1}. ${step.title}\n\n${step.description}\n\n`;
      });
      
      await navigator.clipboard.writeText(markdown);
      setCopyStatus('copied');
      onShowNotification('指南已复制到剪贴板!', 'success');
      setTimeout(() => setCopyStatus(''), 2000);
    } catch (err) {
      setCopyStatus('error');
      onShowNotification('复制失败，请重试', 'error');
      setTimeout(() => setCopyStatus(''), 2000);
    }
  };

  const downloadPDF = (): void => {
    onShowNotification('PDF下载功能将在后续版本中实现', 'info');
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="card-glass flex flex-col items-center justify-center py-12 relative overflow-hidden rounded-3xl shadow-card animate-float-small border border-neutral-100">
          {/* 装饰性背景元素 */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative mb-10 group">
              <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-pulse group-hover:shadow-xl transition-all duration-700">
                <Sparkles className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            
            <div className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full mb-10 shadow-lg animate-spin relative">
              {/* 发光效果 */}
              <span className="absolute -inset-1.5 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">正在生成您的Notion指南</h3>
            <p className="text-gray-600 text-lg mb-2">我们的AI正在为您创建个性化模板</p>
            <p className="text-gray-500">这通常需要几秒钟时间</p>
            
            {/* 进度条 */}
            <div className="mt-10 w-80 h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-md animate-shine"></div>
            </div>
            
            {/* 装饰气泡 */}
            <div className="bubble-tr absolute top-16 right-16 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-1.5">
                <span className="text-primary font-bold">✨</span>
                <span>AI生成中</span>
              </div>
            </div>
            
            <div className="bubble-bl absolute bottom-16 left-16 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small" style={{ animationDelay: '0.3s' }} hover:shadow-md transition-all duration-300>
              <div className="flex items-center gap-1.5">
                <span className="text-secondary font-bold">📝</span>
                <span>准备内容</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!guide) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="card-glass rounded-3xl p-12 text-center relative overflow-hidden shadow-card animate-float-small border border-neutral-100">
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mb-8 shadow-lg transform transition-transform duration-500 hover:scale-110 group">
              <BookOpen className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">您的指南即将诞生</h3>
            <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto">
              输入您的需求，我们将为您创建一个完整的Notion模板指南
            </p>
            <div className="bubble-tl bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto border border-white/50 shadow-card transform transition-all duration-500 hover:shadow-card-hover animate-float-small group hover:border-primary/20 hover:bg-white/90" style={{ animationDelay: '0.2s' }}>
              <p className="text-gray-700">
                <span className="font-semibold text-primary group-hover:text-primary/90 transition-colors duration-300">提示:</span> 描述您想要的指南类型，例如"项目管理模板"或"个人任务跟踪器"
              </p>
            </div>
            
            {/* 装饰气泡 */}
            <div className="bubble-tr absolute top-16 right-16 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-1.5">
                <span className="text-primary font-bold">💡</span>
                <span>输入需求</span>
              </div>
            </div>
            
            <div className="bubble-bl absolute bottom-16 left-16 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small" style={{ animationDelay: '0.3s' }} hover:shadow-md transition-all duration-300>
              <div className="flex items-center gap-1.5">
                <span className="text-secondary font-bold">🚀</span>
                <span>快速生成</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="card-glass rounded-3xl shadow-card overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-card-hover animate-float-small relative group">
        {/* 背景装饰 */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" aria-hidden="true" />
        
        {/* 标题栏 */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 flex flex-col sm:flex-row justify-between items-center gap-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 backdrop-blur-sm"></div>
          <div className="relative z-10 flex items-center group">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 transform transition-transform duration-300 hover:scale-110">
              <BookOpen className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h2 className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">指南预览</h2>
          </div>
          
          <div className="relative z-10 flex space-x-4">
            <button 
              onClick={copyToClipboard}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${copyStatus === 'copied' ? 'bg-success text-white shadow-lg' : 'bg-white/20 text-white hover:bg-white/30 shadow-md'}`}
            >
              <span className="relative z-10">{copyStatus === 'copied' ? '已复制' : '复制'}</span>
              {copyStatus !== 'copied' && (
                <>
                  <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                  <Copy className="w-4 h-4" />
                </>
              )}
              {copyStatus === 'copied' && (
                <CheckCircle className="w-4 h-4" />
              )}
            </button>
            <button 
              onClick={downloadPDF}
              className="flex items-center space-x-2 px-6 py-3 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-md relative overflow-hidden group"
            >
              <span className="relative z-10">PDF</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <FileDown className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="p-8 relative">
          {/* 背景装饰 */}
          <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
          
          {/* 装饰元素 */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          
          {/* 指南标题 */}
          <div className="mb-12 text-center relative">
            <div className="inline-block relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h1 className="text-4xl font-bold text-gray-800 mb-6 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary group-hover:scale-102 transition-transform duration-500">{guide.title}</h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            </div>
            <div className="flex justify-center mt-8">
              <div className="h-1 w-32 bg-gradient-to-r from-primary/70 to-secondary/70 rounded-full animate-fade-in"></div>
            </div>
          </div>

          {/* 目录导航 */}
          <div className="mb-12 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-card card-hover animate-float-small relative overflow-hidden group">
            {/* 渐变发光效果 */}
            <span className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-700"></span>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center group-hover:text-primary transition-colors duration-300">
                <FileText className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                目录
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guide.steps?.map((step, index) => (
                  <li key={step.id || index} className="flex items-start p-4 rounded-xl hover:bg-white/80 transition-all duration-300 group card-hover">
                    <span className="text-primary font-bold mr-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{index + 1}.</span>
                    <span className="text-gray-700 group-hover:text-primary transition-colors duration-300">{step.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 分节内容 */}
          <div className="space-y-10">
            {guide.steps?.map((step, index) => (
              <div 
                key={step.id || index} 
                id={`section-${index + 1}`}
                className="bubble-tr p-7 bg-gradient-to-br from-white to-primary/5 rounded-2xl border border-gray-100 shadow-card transition-all duration-500 hover:shadow-card-hover card-hover relative overflow-hidden group animate-float-small" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* 渐变发光效果 */}
                <span className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-700"></span>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-5 flex items-center group-hover:text-primary/90 transition-colors duration-300">
                    <span className="mr-3 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">{index + 1}</span>
                    {step.title}
                  </h3>
                  <div className="prose prose-indigo max-w-none">
                    {step.description.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 text-gray-600 leading-relaxed animate-fade-in group-hover:text-gray-700 transition-colors duration-300">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 底部装饰 */}
        <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
      </div>
    </div>
  );
};

export default GuidePreview;
----[44]
src\components\Footer.tsx
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-16 mt-20 relative overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" aria-hidden="true" />
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="h-9 w-9 transition-transform duration-500 hover:rotate-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
                <span className="text-white text-xs font-bold">AI</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  AI Notion
                </span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md text-lg leading-relaxed">
                使用AI技术将Notion文档转换为响应式网站，无需编写代码，轻松分享您的想法与知识。
              </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 relative group" aria-label="Twitter">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 relative group" aria-label="LinkedIn">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 relative group" aria-label="GitHub">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="group">
            <h4 className="text-lg font-semibold mb-5 text-white relative inline-block">
              <span className="relative z-10">快速链接</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">首页</span>
              </Link></li>
              <li><Link to="/convert" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">转换</span>
              </Link></li>
              <li><Link to="/pricing" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">定价</span>
              </Link></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">示例</span>
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">文档</span>
              </a></li>
            </ul>
          </div>
          <div className="group">
            <h4 className="text-lg font-semibold mb-5 text-white relative inline-block">
              <span className="relative z-10">资源</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">博客</span>
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">教程</span>
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">支持</span>
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">隐私政策</span>
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 relative group flex items-center">
                <span className="absolute w-1.5 h-1.5 bg-primary rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                <span className="ml-3">服务条款</span>
              </a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
            <p>&copy; {new Date().getFullYear()} AI Notion. All rights reserved.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <a href="#privacy" className="hover:text-white transition-colors duration-300 text-xs">隐私政策</a>
              <a href="#terms" className="hover:text-white transition-colors duration-300 text-xs">服务条款</a>
              <a href="#cookies" className="hover:text-white transition-colors duration-300 text-xs">Cookie政策</a>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
----[45]
src\components\ExportPanel.tsx
import React, { useState } from 'react';
import { ExportPackage, Notification, NotificationType } from '../types';
import { Download, CheckCircle, AlertCircle, Info, Package, FileText, BookOpen } from 'lucide-react';

interface ExportPanelProps {
  exportPackage: ExportPackage | null;
  isProcessing: boolean;
}

const ExportPanel: React.FC<ExportPanelProps> = ({ exportPackage, isProcessing }) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  // Show notification
  const showNotification = (message: string, type: NotificationType = 'success'): void => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const downloadPackage = (): void => {
    if (exportPackage && exportPackage.htmlFile) {
      try {
        // 创建Blob对象
        const blob = new Blob([exportPackage.htmlFile.content], { type: exportPackage.htmlFile.type });
        const url = URL.createObjectURL(blob);
        
        // 创建下载链接
        const a = document.createElement('a');
        a.href = url;
        a.download = exportPackage.htmlFile.name;
        document.body.appendChild(a);
        a.click();
        
        // 清理
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showNotification('下载已成功开始！', 'success');
      } catch (error) {
        console.error('下载文件失败:', error);
        showNotification('下载文件失败，请稍后重试。', 'error');
      }
    } else {
      showNotification('没有可下载的包。', 'error');
    }
  };

  if (isProcessing) {
    return (
      <div className="card-glass p-8 rounded-3xl shadow-card flex items-center justify-center min-h-[400px] animate-float-small relative overflow-hidden border border-neutral-100">
        {/* 装饰元素 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
        
        <div className="flex flex-col items-center relative z-10">
          <div className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full mb-8 flex items-center justify-center animate-spin relative">
            {/* 发光效果 */}
            <span className="absolute -inset-1.5 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow" />
            <Package className="text-primary" size={28} />
          </div>
          <p className="text-neutral-700 font-medium text-center text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            正在准备您的导出包...
          </p>
          <p className="text-neutral-500 text-sm mt-3 max-w-xs text-center">
            编译所有资源可能需要一些时间，请稍候
          </p>
          
          {/* 装饰气泡 */}
          <div className="bubble-tr absolute top-10 right-10 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-1.5">
              <span className="text-primary font-bold">📦</span>
              <span>打包中</span>
            </div>
          </div>
          
          <div className="bubble-bl absolute bottom-10 left-10 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small" style={{ animationDelay: '0.3s' }} hover:shadow-md transition-all duration-300>
            <div className="flex items-center gap-1.5">
              <span className="text-secondary font-bold">⚡</span>
              <span>处理中</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!exportPackage) {
    return (
      <div className="card-glass p-8 rounded-3xl shadow-card flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden animate-float-small border border-neutral-100">
        {/* 装饰元素 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full w-20 h-20 flex items-center justify-center mb-8 relative z-10 shadow-md group hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 hover:shadow-lg">
          <Package className="text-primary" size={32} group-hover:scale-110 transition-transform duration-300 />
        </div>
        <h3 className="text-2xl font-semibold text-neutral-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative z-10">
          导出包即将准备就绪
        </h3>
        <p className="text-neutral-600 text-center max-w-md relative z-10 mb-8">
          完成指南生成后，您将可以获取完整的导出包。
        </p>
        
        <div className="bubble-tl bg-white/80 backdrop-blur-sm px-6 py-5 rounded-xl shadow-card border border-neutral-100 text-sm text-neutral-700 relative z-10 animate-float-small group hover:shadow-card-hover transition-all duration-300 hover:border-primary/20" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 text-primary mb-4">
            <Info size={18} className="text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium text-base group-hover:text-primary transition-colors duration-300">包含内容</span>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
              <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                <CheckCircle size={14} />
              </span>
              <span>完整的模板文件</span>
            </li>
            <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
              <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                <CheckCircle size={14} />
              </span>
              <span>用户指南文档</span>
            </li>
            <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
              <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                <CheckCircle size={14} />
              </span>
              <span>实施说明</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="card-glass rounded-3xl overflow-hidden shadow-card bg-white hover:shadow-card-hover transition-all duration-500 animate-float-small relative group border border-neutral-100">
      {/* 装饰背景 */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" aria-hidden="true" />
      
      <div className="flex flex-wrap items-center justify-between bg-gradient-to-r from-primary/5 to-secondary/5 px-8 py-6 border-b border-neutral-100/50 gap-4">
        <div className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
            <Package size={24} group-hover:scale-110 transition-transform duration-300 />
          </div>
          <div>
            <h3 className="font-medium text-neutral-800 text-xl group-hover:text-primary transition-colors duration-300">导出产品包</h3>
            <p className="text-sm text-neutral-500">完整的网站文件和使用指南</p>
          </div>
        </div>
        <button 
          onClick={downloadPackage}
          className={`px-7 py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${exportPackage?.htmlFile ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg hover:from-primary/90 hover:to-secondary/90 transform hover:-translate-y-1 card-hover relative overflow-hidden group' : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'}`}
          disabled={!exportPackage?.htmlFile}
        >
          {exportPackage?.htmlFile && (
            <>
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10"><Download size={18} />
              立即下载</span>
              {/* 渐变发光效果 */}
              <span className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-700"></span>
            </>
          )}
          {!exportPackage?.htmlFile && (
            <>
              <Download size={18} />
              立即下载
            </>
          )}
        </button>
      </div>
      
      <div className="p-8 relative">
        {/* 背景装饰 */}
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none" aria-hidden="true" />
        
        <div className="mb-10 relative">
          {/* 装饰元素 */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
          <h2 className="text-3xl font-bold text-neutral-800 mb-4 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            您的完整模板包
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl relative z-10">
            包含实现您的模板所需的所有文件和文档
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="card-glass rounded-2xl p-6 bg-white/90 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 card-hover animate-float-small group hover:border-primary/20">
            <div className="flex items-start gap-4 mb-5">
              <div className="bubble-tl bg-gradient-to-br from-primary/10 to-primary/20 text-primary rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                <FileText size={24} group-hover:scale-110 transition-transform duration-300 />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 text-xl group-hover:text-primary transition-colors duration-300">模板文件</h3>
                <p className="text-neutral-600 text-sm mt-1">实现网站所需的所有源代码文件</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">HTML/CSS/JS 源文件</span>
              </li>
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">资源文件（图像、图标）</span>
              </li>
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">配置文件</span>
              </li>
            </ul>
          </div>
          
          <div className="card-glass rounded-2xl p-6 bg-white/90 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 card-hover animate-float-small group hover:border-secondary/20" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4 mb-5">
              <div className="bubble-tl bg-gradient-to-br from-secondary/10 to-secondary/20 text-secondary rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:from-secondary/20 group-hover:to-secondary/30 transition-all duration-300">
                <BookOpen size={24} group-hover:scale-110 transition-transform duration-300 />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 text-xl group-hover:text-secondary transition-colors duration-300">使用指南</h3>
                <p className="text-neutral-600 text-sm mt-1">完整的用户指南和操作说明</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">实现指南</span>
              </li>
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">自定义技巧</span>
              </li>
              <li className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                <span className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle size={14} />
                </span>
                <span className="text-neutral-700">常见问题解答和故障排除</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bubble-bl border border-primary/20 rounded-2xl p-7 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-card transition-all duration-300 hover:shadow-card-hover animate-float-small group hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 transition-all duration-500" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <h3 className="font-semibold text-neutral-800 mb-1 text-xl group-hover:text-primary transition-colors duration-300">已准备好下载</h3>
              <p className="text-neutral-600">您的包已准备就绪，可以立即使用</p>
            </div>
            <button 
              onClick={downloadPackage}
              className="px-8 py-3.5 rounded-xl font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 animate-float relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10"><Download size={18} />
              立即下载</span>
              {/* 渐变发光效果 */}
              <span className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-700"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Notification component */}
      {notification && (
        <div className={`fixed bottom-5 right-5 z-50 transform transition-all duration-500 translate-y-0 opacity-100 flex items-center gap-3 p-4 rounded-2xl shadow-lg backdrop-blur-sm ${notification.type === 'success' ? 'bg-success text-white' : notification.type === 'error' ? 'bg-error text-white' : 'bg-info text-white'}`}>
          {notification.type === 'success' ? (
            <CheckCircle size={18} />
          ) : notification.type === 'error' ? (
            <AlertCircle size={18} />
          ) : (
            <Info size={18} />
          )}
          <span className="font-medium">{notification.message}</span>
        </div>
      )}
    </div>
  );
}

export default ExportPanel;
----[46]
src\assets\logo.svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
  <polyline points="14 2 14 8 20 8"></polyline>
  <line x1="16" y1="13" x2="8" y2="13"></line>
  <line x1="16" y1="17" x2="8" y2="17"></line>
  <polyline points="10 9 9 9 8 9"></polyline>
  <circle cx="18" cy="16" r="3"></circle>
  <path d="M16 11v4"></path>
</svg>
----[47]
src\assets\icons.svg
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <!-- 通用图标 -->
  <symbol id="check" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="x" viewBox="0 0 24 24">
    <path fill="currentColor" d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="info" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
    <line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" stroke-width="2"/>
    <line x1="12" y1="8" x2="12.01" y2="8" stroke="currentColor" stroke-width="2"/>
  </symbol>
  <symbol id="alert" viewBox="0 0 24 24">
    <path fill="currentColor" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" stroke-width="2"/>
    <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2"/>
    <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" stroke-width="2"/>
  </symbol>
  <symbol id="download" viewBox="0 0 24 24">
    <path fill="currentColor" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="upload" viewBox="0 0 24 24">
    <path fill="currentColor" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M12 11V3M5 8l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  
  <!-- 导航图标 -->
  <symbol id="menu" viewBox="0 0 24 24">
    <path fill="currentColor" d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </symbol>
  <symbol id="arrow-right" viewBox="0 0 24 24">
    <path fill="currentColor" d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="arrow-left" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19 12H5M12 5L5 12l7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="home" viewBox="0 0 24 24">
    <path fill="currentColor" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  
  <!-- 功能图标 -->
  <symbol id="copy" viewBox="0 0 24 24">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" fill="currentColor" stroke="currentColor" stroke-width="2"/>
    <path fill="currentColor" d="M16 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </symbol>
  <symbol id="edit" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </symbol>
  <symbol id="eye" viewBox="0 0 24 24">
    <path fill="currentColor" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" stroke="currentColor" stroke-width="2"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
  </symbol>
  <symbol id="search" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
    <path fill="currentColor" d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </symbol>
  <symbol id="star" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </symbol>
  
  <!-- 社交媒体图标 -->
  <symbol id="twitter" viewBox="0 0 24 24">
    <path fill="currentColor" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </symbol>
  <symbol id="github" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </symbol>
  <symbol id="linkedin" viewBox="0 0 24 24">
    <path fill="currentColor" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
  </symbol>
</svg>
----[48]
dist\assets\logo-BbqXi1Kv.svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
  <polyline points="14 2 14 8 20 8"></polyline>
  <line x1="16" y1="13" x2="8" y2="13"></line>
  <line x1="16" y1="17" x2="8" y2="17"></line>
  <polyline points="10 9 9 9 8 9"></polyline>
  <circle cx="18" cy="16" r="3"></circle>
  <path d="M16 11v4"></path>
</svg>
----[49]
dist\assets\index-BVW0i_se.js
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function yd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $a={exports:{}},Cl={},Fa={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=Symbol.for("react.element"),wd=Symbol.for("react.portal"),jd=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),kd=Symbol.for("react.profiler"),Sd=Symbol.for("react.provider"),Cd=Symbol.for("react.context"),Ed=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),_d=Symbol.for("react.memo"),Ld=Symbol.for("react.lazy"),ws=Symbol.iterator;function bd(e){return e===null||typeof e!="object"?null:(e=ws&&e[ws]||e["@@iterator"],typeof e=="function"?e:null)}var Da={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oa=Object.assign,Aa={};function hn(e,t,n){this.props=e,this.context=t,this.refs=Aa,this.updater=n||Da}hn.prototype.isReactComponent={};hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ua(){}Ua.prototype=hn.prototype;function yi(e,t,n){this.props=e,this.context=t,this.refs=Aa,this.updater=n||Da}var wi=yi.prototype=new Ua;wi.constructor=yi;Oa(wi,hn.prototype);wi.isPureReactComponent=!0;var js=Array.isArray,Ba=Object.prototype.hasOwnProperty,ji={current:null},Ha={key:!0,ref:!0,__self:!0,__source:!0};function Wa(e,t,n){var r,l={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Ba.call(t,r)&&!Ha.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:ur,type:e,key:o,ref:s,props:l,_owner:ji.current}}function zd(e,t){return{$$typeof:ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ni(e){return typeof e=="object"&&e!==null&&e.$$typeof===ur}function Rd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ns=/\/+/g;function Ql(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rd(""+e.key):t.toString(36)}function Dr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ur:case wd:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+Ql(s,0):r,js(l)?(n="",e!=null&&(n=e.replace(Ns,"$&/")+"/"),Dr(l,t,n,"",function(c){return c})):l!=null&&(Ni(l)&&(l=zd(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(Ns,"$&/")+"/")+e)),t.push(l)),1;if(s=0,r=r===""?".":r+":",js(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Ql(o,a);s+=Dr(o,t,n,u,l)}else if(u=bd(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Ql(o,a++),s+=Dr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function yr(e,t,n){if(e==null)return e;var r=[],l=0;return Dr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Td(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Or={transition:null},Md={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Or,ReactCurrentOwner:ji};function Va(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:yr,forEach:function(e,t,n){yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yr(e,function(){t++}),t},toArray:function(e){return yr(e,function(t){return t})||[]},only:function(e){if(!Ni(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=hn;T.Fragment=jd;T.Profiler=kd;T.PureComponent=yi;T.StrictMode=Nd;T.Suspense=Pd;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Md;T.act=Va;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Oa({},e.props),l=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ji.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Ba.call(t,u)&&!Ha.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ur,type:e.type,key:l,ref:o,props:r,_owner:s}};T.createContext=function(e){return e={$$typeof:Cd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sd,_context:e},e.Consumer=e};T.createElement=Wa;T.createFactory=function(e){var t=Wa.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Ed,render:e}};T.isValidElement=Ni;T.lazy=function(e){return{$$typeof:Ld,_payload:{_status:-1,_result:e},_init:Td}};T.memo=function(e,t){return{$$typeof:_d,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Or.transition;Or.transition={};try{e()}finally{Or.transition=t}};T.unstable_act=Va;T.useCallback=function(e,t){return ce.current.useCallback(e,t)};T.useContext=function(e){return ce.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};T.useEffect=function(e,t){return ce.current.useEffect(e,t)};T.useId=function(){return ce.current.useId()};T.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ce.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};T.useRef=function(e){return ce.current.useRef(e)};T.useState=function(e){return ce.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ce.current.useTransition()};T.version="18.3.1";Fa.exports=T;var v=Fa.exports;const No=yd(v);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id=v,$d=Symbol.for("react.element"),Fd=Symbol.for("react.fragment"),Dd=Object.prototype.hasOwnProperty,Od=Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ad={key:!0,ref:!0,__self:!0,__source:!0};function Qa(e,t,n){var r,l={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Dd.call(t,r)&&!Ad.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:$d,type:e,key:o,ref:s,props:l,_owner:Od.current}}Cl.Fragment=Fd;Cl.jsx=Qa;Cl.jsxs=Qa;$a.exports=Cl;var i=$a.exports,ko={},Ka={exports:{}},Ne={},Ya={exports:{}},Ga={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,z){var R=L.length;L.push(z);e:for(;0<R;){var K=R-1>>>1,J=L[K];if(0<l(J,z))L[K]=z,L[R]=J,R=K;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var z=L[0],R=L.pop();if(R!==z){L[0]=R;e:for(var K=0,J=L.length,vr=J>>>1;K<vr;){var Ct=2*(K+1)-1,Vl=L[Ct],Et=Ct+1,xr=L[Et];if(0>l(Vl,R))Et<J&&0>l(xr,Vl)?(L[K]=xr,L[Et]=R,K=Et):(L[K]=Vl,L[Ct]=R,K=Ct);else if(Et<J&&0>l(xr,R))L[K]=xr,L[Et]=R,K=Et;else break e}}return z}function l(L,z){var R=L.sortIndex-z.sortIndex;return R!==0?R:L.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],f=1,g=null,h=3,x=!1,y=!1,j=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(L){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=L)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function w(L){if(j=!1,p(L),!y)if(n(u)!==null)y=!0,Hl(k);else{var z=n(c);z!==null&&Wl(w,z.startTime-L)}}function k(L,z){y=!1,j&&(j=!1,m(E),E=-1),x=!0;var R=h;try{for(p(z),g=n(u);g!==null&&(!(g.expirationTime>z)||L&&!fe());){var K=g.callback;if(typeof K=="function"){g.callback=null,h=g.priorityLevel;var J=K(g.expirationTime<=z);z=e.unstable_now(),typeof J=="function"?g.callback=J:g===n(u)&&r(u),p(z)}else r(u);g=n(u)}if(g!==null)var vr=!0;else{var Ct=n(c);Ct!==null&&Wl(w,Ct.startTime-z),vr=!1}return vr}finally{g=null,h=R,x=!1}}var C=!1,P=null,E=-1,M=5,b=-1;function fe(){return!(e.unstable_now()-b<M)}function wn(){if(P!==null){var L=e.unstable_now();b=L;var z=!0;try{z=P(!0,L)}finally{z?jn():(C=!1,P=null)}}else C=!1}var jn;if(typeof d=="function")jn=function(){d(wn)};else if(typeof MessageChannel<"u"){var ys=new MessageChannel,xd=ys.port2;ys.port1.onmessage=wn,jn=function(){xd.postMessage(null)}}else jn=function(){S(wn,0)};function Hl(L){P=L,C||(C=!0,jn())}function Wl(L,z){E=S(function(){L(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Hl(k))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var R=h;h=z;try{return L()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var R=h;h=L;try{return z()}finally{h=R}},e.unstable_scheduleCallback=function(L,z,R){var K=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?K+R:K):R=K,L){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=R+J,L={id:f++,callback:z,priorityLevel:L,startTime:R,expirationTime:J,sortIndex:-1},R>K?(L.sortIndex=R,t(c,L),n(u)===null&&L===n(c)&&(j?(m(E),E=-1):j=!0,Wl(w,R-K))):(L.sortIndex=J,t(u,L),y||x||(y=!0,Hl(k))),L},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(L){var z=h;return function(){var R=h;h=z;try{return L.apply(this,arguments)}finally{h=R}}}})(Ga);Ya.exports=Ga;var Ud=Ya.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd=v,je=Ud;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xa=new Set,Vn={};function Ot(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Vn[e]=t,e=0;e<t.length;e++)Xa.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),So=Object.prototype.hasOwnProperty,Hd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ks={},Ss={};function Wd(e){return So.call(Ss,e)?!0:So.call(ks,e)?!1:Hd.test(e)?Ss[e]=!0:(ks[e]=!0,!1)}function Vd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qd(e,t,n,r){if(t===null||typeof t>"u"||Vd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var ki=/[\-:]([a-z])/g;function Si(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ki,Si);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ki,Si);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ki,Si);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ci(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qd(t,n,l,r)&&(n=null),r||l===null?Wd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rt=Bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wr=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),Ei=Symbol.for("react.strict_mode"),Co=Symbol.for("react.profiler"),Za=Symbol.for("react.provider"),Ja=Symbol.for("react.context"),Pi=Symbol.for("react.forward_ref"),Eo=Symbol.for("react.suspense"),Po=Symbol.for("react.suspense_list"),_i=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),qa=Symbol.for("react.offscreen"),Cs=Symbol.iterator;function Nn(e){return e===null||typeof e!="object"?null:(e=Cs&&e[Cs]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Kl;function zn(e){if(Kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Kl=t&&t[1]||""}return`
`+Kl+e}var Yl=!1;function Gl(e,t){if(!e||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),s=l.length-1,a=o.length-1;1<=s&&0<=a&&l[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(l[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||l[s]!==o[a]){var u=`
`+l[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zn(e):""}function Kd(e){switch(e.tag){case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 2:case 15:return e=Gl(e.type,!1),e;case 11:return e=Gl(e.type.render,!1),e;case 1:return e=Gl(e.type,!0),e;default:return""}}function _o(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Ht:return"Portal";case Co:return"Profiler";case Ei:return"StrictMode";case Eo:return"Suspense";case Po:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ja:return(e.displayName||"Context")+".Consumer";case Za:return(e._context.displayName||"Context")+".Provider";case Pi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _i:return t=e.displayName||null,t!==null?t:_o(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return _o(e(t))}catch{}}return null}function Yd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _o(t);case 8:return t===Ei?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gd(e){var t=eu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){e._valueTracker||(e._valueTracker=Gd(e))}function tu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=eu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function el(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lo(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Es(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nu(e,t){t=t.checked,t!=null&&Ci(e,"checked",t,!1)}function bo(e,t){nu(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zo(e,t.type,n):t.hasOwnProperty("defaultValue")&&zo(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ps(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function zo(e,t,n){(t!=="number"||el(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ro(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _s(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Rn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function ru(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ls(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function To(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,ou=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xd=["Webkit","ms","Moz","O"];Object.keys($n).forEach(function(e){Xd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$n[t]=$n[e]})});function iu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$n.hasOwnProperty(e)&&$n[e]?(""+t).trim():t+"px"}function su(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=iu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Zd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mo(e,t){if(t){if(Zd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Io(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $o=null;function Li(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fo=null,nn=null,rn=null;function bs(e){if(e=fr(e)){if(typeof Fo!="function")throw Error(N(280));var t=e.stateNode;t&&(t=bl(t),Fo(e.stateNode,e.type,t))}}function au(e){nn?rn?rn.push(e):rn=[e]:nn=e}function uu(){if(nn){var e=nn,t=rn;if(rn=nn=null,bs(e),t)for(e=0;e<t.length;e++)bs(t[e])}}function cu(e,t){return e(t)}function du(){}var Xl=!1;function fu(e,t,n){if(Xl)return e(t,n);Xl=!0;try{return cu(e,t,n)}finally{Xl=!1,(nn!==null||rn!==null)&&(du(),uu())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Do=!1;if(Je)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Do=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Do=!1}function Jd(e,t,n,r,l,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Fn=!1,tl=null,nl=!1,Oo=null,qd={onError:function(e){Fn=!0,tl=e}};function ef(e,t,n,r,l,o,s,a,u){Fn=!1,tl=null,Jd.apply(qd,arguments)}function tf(e,t,n,r,l,o,s,a,u){if(ef.apply(this,arguments),Fn){if(Fn){var c=tl;Fn=!1,tl=null}else throw Error(N(198));nl||(nl=!0,Oo=c)}}function At(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zs(e){if(At(e)!==e)throw Error(N(188))}function nf(e){var t=e.alternate;if(!t){if(t=At(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return zs(l),e;if(o===r)return zs(l),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=l,r=o;else{for(var s=!1,a=l.child;a;){if(a===n){s=!0,n=l,r=o;break}if(a===r){s=!0,r=l,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=l;break}if(a===r){s=!0,r=o,n=l;break}a=a.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function mu(e){return e=nf(e),e!==null?hu(e):null}function hu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hu(e);if(t!==null)return t;e=e.sibling}return null}var gu=je.unstable_scheduleCallback,Rs=je.unstable_cancelCallback,rf=je.unstable_shouldYield,lf=je.unstable_requestPaint,Y=je.unstable_now,of=je.unstable_getCurrentPriorityLevel,bi=je.unstable_ImmediatePriority,vu=je.unstable_UserBlockingPriority,rl=je.unstable_NormalPriority,sf=je.unstable_LowPriority,xu=je.unstable_IdlePriority,El=null,Be=null;function af(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(El,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:df,uf=Math.log,cf=Math.LN2;function df(e){return e>>>=0,e===0?32:31-(uf(e)/cf|0)|0}var kr=64,Sr=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ll(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~l;a!==0?r=Tn(a):(o&=s,o!==0&&(r=Tn(o)))}else s=n&~l,s!==0?r=Tn(s):o!==0&&(r=Tn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),l=1<<n,r|=e[n],t&=~l;return r}function ff(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-$e(o),a=1<<s,u=l[s];u===-1?(!(a&n)||a&r)&&(l[s]=ff(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Ao(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yu(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Zl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function mf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-$e(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var $=0;function wu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ju,Ri,Nu,ku,Su,Uo=!1,Cr=[],ft=null,pt=null,mt=null,Yn=new Map,Gn=new Map,at=[],hf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ts(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function Sn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=fr(t),t!==null&&Ri(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function gf(e,t,n,r,l){switch(t){case"focusin":return ft=Sn(ft,e,t,n,r,l),!0;case"dragenter":return pt=Sn(pt,e,t,n,r,l),!0;case"mouseover":return mt=Sn(mt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Yn.set(o,Sn(Yn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Gn.set(o,Sn(Gn.get(o)||null,e,t,n,r,l)),!0}return!1}function Cu(e){var t=Lt(e.target);if(t!==null){var n=At(t);if(n!==null){if(t=n.tag,t===13){if(t=pu(n),t!==null){e.blockedOn=t,Su(e.priority,function(){Nu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$o=r,n.target.dispatchEvent(r),$o=null}else return t=fr(n),t!==null&&Ri(t),e.blockedOn=n,!1;t.shift()}return!0}function Ms(e,t,n){Ar(e)&&n.delete(t)}function vf(){Uo=!1,ft!==null&&Ar(ft)&&(ft=null),pt!==null&&Ar(pt)&&(pt=null),mt!==null&&Ar(mt)&&(mt=null),Yn.forEach(Ms),Gn.forEach(Ms)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,Uo||(Uo=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,vf)))}function Xn(e){function t(l){return Cn(l,e)}if(0<Cr.length){Cn(Cr[0],e);for(var n=1;n<Cr.length;n++){var r=Cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ft!==null&&Cn(ft,e),pt!==null&&Cn(pt,e),mt!==null&&Cn(mt,e),Yn.forEach(t),Gn.forEach(t),n=0;n<at.length;n++)r=at[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<at.length&&(n=at[0],n.blockedOn===null);)Cu(n),n.blockedOn===null&&at.shift()}var ln=rt.ReactCurrentBatchConfig,ol=!0;function xf(e,t,n,r){var l=$,o=ln.transition;ln.transition=null;try{$=1,Ti(e,t,n,r)}finally{$=l,ln.transition=o}}function yf(e,t,n,r){var l=$,o=ln.transition;ln.transition=null;try{$=4,Ti(e,t,n,r)}finally{$=l,ln.transition=o}}function Ti(e,t,n,r){if(ol){var l=Bo(e,t,n,r);if(l===null)so(e,t,r,il,n),Ts(e,r);else if(gf(l,e,t,n,r))r.stopPropagation();else if(Ts(e,r),t&4&&-1<hf.indexOf(e)){for(;l!==null;){var o=fr(l);if(o!==null&&ju(o),o=Bo(e,t,n,r),o===null&&so(e,t,r,il,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else so(e,t,r,null,n)}}var il=null;function Bo(e,t,n,r){if(il=null,e=Li(r),e=Lt(e),e!==null)if(t=At(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return il=e,null}function Eu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(of()){case bi:return 1;case vu:return 4;case rl:case sf:return 16;case xu:return 536870912;default:return 16}default:return 16}}var ct=null,Mi=null,Ur=null;function Pu(){if(Ur)return Ur;var e,t=Mi,n=t.length,r,l="value"in ct?ct.value:ct.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[o-r];r++);return Ur=l.slice(e,1<r?1-r:void 0)}function Br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function Is(){return!1}function ke(e){function t(n,r,l,o,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Er:Is,this.isPropagationStopped=Is,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ii=ke(gn),dr=W({},gn,{view:0,detail:0}),wf=ke(dr),Jl,ql,En,Pl=W({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Jl=e.screenX-En.screenX,ql=e.screenY-En.screenY):ql=Jl=0,En=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),$s=ke(Pl),jf=W({},Pl,{dataTransfer:0}),Nf=ke(jf),kf=W({},dr,{relatedTarget:0}),eo=ke(kf),Sf=W({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cf=ke(Sf),Ef=W({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pf=ke(Ef),_f=W({},gn,{data:0}),Fs=ke(_f),Lf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zf[e])?!!t[e]:!1}function $i(){return Rf}var Tf=W({},dr,{key:function(e){if(e.key){var t=Lf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$i,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mf=ke(Tf),If=W({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ds=ke(If),$f=W({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$i}),Ff=ke($f),Df=W({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Of=ke(Df),Af=W({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uf=ke(Af),Bf=[9,13,27,32],Fi=Je&&"CompositionEvent"in window,Dn=null;Je&&"documentMode"in document&&(Dn=document.documentMode);var Hf=Je&&"TextEvent"in window&&!Dn,_u=Je&&(!Fi||Dn&&8<Dn&&11>=Dn),Os=" ",As=!1;function Lu(e,t){switch(e){case"keyup":return Bf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function Wf(e,t){switch(e){case"compositionend":return bu(t);case"keypress":return t.which!==32?null:(As=!0,Os);case"textInput":return e=t.data,e===Os&&As?null:e;default:return null}}function Vf(e,t){if(Vt)return e==="compositionend"||!Fi&&Lu(e,t)?(e=Pu(),Ur=Mi=ct=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _u&&t.locale!=="ko"?null:t.data;default:return null}}var Qf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qf[e.type]:t==="textarea"}function zu(e,t,n,r){au(r),t=sl(t,"onChange"),0<t.length&&(n=new Ii("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Zn=null;function Kf(e){Bu(e,0)}function _l(e){var t=Yt(e);if(tu(t))return e}function Yf(e,t){if(e==="change")return t}var Ru=!1;if(Je){var to;if(Je){var no="oninput"in document;if(!no){var Bs=document.createElement("div");Bs.setAttribute("oninput","return;"),no=typeof Bs.oninput=="function"}to=no}else to=!1;Ru=to&&(!document.documentMode||9<document.documentMode)}function Hs(){On&&(On.detachEvent("onpropertychange",Tu),Zn=On=null)}function Tu(e){if(e.propertyName==="value"&&_l(Zn)){var t=[];zu(t,Zn,e,Li(e)),fu(Kf,t)}}function Gf(e,t,n){e==="focusin"?(Hs(),On=t,Zn=n,On.attachEvent("onpropertychange",Tu)):e==="focusout"&&Hs()}function Xf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(Zn)}function Zf(e,t){if(e==="click")return _l(t)}function Jf(e,t){if(e==="input"||e==="change")return _l(t)}function qf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:qf;function Jn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!So.call(t,l)||!De(e[l],t[l]))return!1}return!0}function Ws(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vs(e,t){var n=Ws(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ws(n)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Iu(){for(var e=window,t=el();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=el(e.document)}return t}function Di(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ep(e){var t=Iu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mu(n.ownerDocument.documentElement,n)){if(r!==null&&Di(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Vs(n,o);var s=Vs(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tp=Je&&"documentMode"in document&&11>=document.documentMode,Qt=null,Ho=null,An=null,Wo=!1;function Qs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wo||Qt==null||Qt!==el(r)||(r=Qt,"selectionStart"in r&&Di(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),An&&Jn(An,r)||(An=r,r=sl(Ho,"onSelect"),0<r.length&&(t=new Ii("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionend:Pr("Transition","TransitionEnd")},ro={},$u={};Je&&($u=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function Ll(e){if(ro[e])return ro[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $u)return ro[e]=t[n];return e}var Fu=Ll("animationend"),Du=Ll("animationiteration"),Ou=Ll("animationstart"),Au=Ll("transitionend"),Uu=new Map,Ks="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){Uu.set(e,t),Ot(t,[e])}for(var lo=0;lo<Ks.length;lo++){var oo=Ks[lo],np=oo.toLowerCase(),rp=oo[0].toUpperCase()+oo.slice(1);Nt(np,"on"+rp)}Nt(Fu,"onAnimationEnd");Nt(Du,"onAnimationIteration");Nt(Ou,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(Au,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function Ys(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tf(r,t,void 0,e),e.currentTarget=null}function Bu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&l.isPropagationStopped())break e;Ys(l,a,c),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&l.isPropagationStopped())break e;Ys(l,a,c),o=u}}}if(nl)throw e=Oo,nl=!1,Oo=null,e}function D(e,t){var n=t[Go];n===void 0&&(n=t[Go]=new Set);var r=e+"__bubble";n.has(r)||(Hu(t,e,2,!1),n.add(r))}function io(e,t,n){var r=0;t&&(r|=4),Hu(n,e,r,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[_r]){e[_r]=!0,Xa.forEach(function(n){n!=="selectionchange"&&(lp.has(n)||io(n,!1,e),io(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_r]||(t[_r]=!0,io("selectionchange",!1,t))}}function Hu(e,t,n,r){switch(Eu(t)){case 1:var l=xf;break;case 4:l=yf;break;default:l=Ti}n=l.bind(null,t,n,e),l=void 0,!Do||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function so(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;s=s.return}for(;a!==null;){if(s=Lt(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}fu(function(){var c=o,f=Li(n),g=[];e:{var h=Uu.get(e);if(h!==void 0){var x=Ii,y=e;switch(e){case"keypress":if(Br(n)===0)break e;case"keydown":case"keyup":x=Mf;break;case"focusin":y="focus",x=eo;break;case"focusout":y="blur",x=eo;break;case"beforeblur":case"afterblur":x=eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ff;break;case Fu:case Du:case Ou:x=Cf;break;case Au:x=Of;break;case"scroll":x=wf;break;case"wheel":x=Uf;break;case"copy":case"cut":case"paste":x=Pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ds}var j=(t&4)!==0,S=!j&&e==="scroll",m=j?h!==null?h+"Capture":null:h;j=[];for(var d=c,p;d!==null;){p=d;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,m!==null&&(w=Kn(d,m),w!=null&&j.push(er(d,w,p)))),S)break;d=d.return}0<j.length&&(h=new x(h,y,null,n,f),g.push({event:h,listeners:j}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==$o&&(y=n.relatedTarget||n.fromElement)&&(Lt(y)||y[qe]))break e;if((x||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?Lt(y):null,y!==null&&(S=At(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(j=$s,w="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=Ds,w="onPointerLeave",m="onPointerEnter",d="pointer"),S=x==null?h:Yt(x),p=y==null?h:Yt(y),h=new j(w,d+"leave",x,n,f),h.target=S,h.relatedTarget=p,w=null,Lt(f)===c&&(j=new j(m,d+"enter",y,n,f),j.target=p,j.relatedTarget=S,w=j),S=w,x&&y)t:{for(j=x,m=y,d=0,p=j;p;p=Bt(p))d++;for(p=0,w=m;w;w=Bt(w))p++;for(;0<d-p;)j=Bt(j),d--;for(;0<p-d;)m=Bt(m),p--;for(;d--;){if(j===m||m!==null&&j===m.alternate)break t;j=Bt(j),m=Bt(m)}j=null}else j=null;x!==null&&Gs(g,h,x,j,!1),y!==null&&S!==null&&Gs(g,S,y,j,!0)}}e:{if(h=c?Yt(c):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var k=Yf;else if(Us(h))if(Ru)k=Jf;else{k=Xf;var C=Gf}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Zf);if(k&&(k=k(e,c))){zu(g,k,n,f);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&zo(h,"number",h.value)}switch(C=c?Yt(c):window,e){case"focusin":(Us(C)||C.contentEditable==="true")&&(Qt=C,Ho=c,An=null);break;case"focusout":An=Ho=Qt=null;break;case"mousedown":Wo=!0;break;case"contextmenu":case"mouseup":case"dragend":Wo=!1,Qs(g,n,f);break;case"selectionchange":if(tp)break;case"keydown":case"keyup":Qs(g,n,f)}var P;if(Fi)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Vt?Lu(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(_u&&n.locale!=="ko"&&(Vt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Vt&&(P=Pu()):(ct=f,Mi="value"in ct?ct.value:ct.textContent,Vt=!0)),C=sl(c,E),0<C.length&&(E=new Fs(E,e,null,n,f),g.push({event:E,listeners:C}),P?E.data=P:(P=bu(n),P!==null&&(E.data=P)))),(P=Hf?Wf(e,n):Vf(e,n))&&(c=sl(c,"onBeforeInput"),0<c.length&&(f=new Fs("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:c}),f.data=P))}Bu(g,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Kn(e,n),o!=null&&r.unshift(er(e,o,l)),o=Kn(e,t),o!=null&&r.push(er(e,o,l))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gs(e,t,n,r,l){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,l?(u=Kn(n,o),u!=null&&s.unshift(er(n,u,a))):l||(u=Kn(n,o),u!=null&&s.push(er(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var op=/\r\n?/g,ip=/\u0000|\uFFFD/g;function Xs(e){return(typeof e=="string"?e:""+e).replace(op,`
`).replace(ip,"")}function Lr(e,t,n){if(t=Xs(t),Xs(e)!==t&&n)throw Error(N(425))}function al(){}var Vo=null,Qo=null;function Ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yo=typeof setTimeout=="function"?setTimeout:void 0,sp=typeof clearTimeout=="function"?clearTimeout:void 0,Zs=typeof Promise=="function"?Promise:void 0,ap=typeof queueMicrotask=="function"?queueMicrotask:typeof Zs<"u"?function(e){return Zs.resolve(null).then(e).catch(up)}:Yo;function up(e){setTimeout(function(){throw e})}function ao(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Xn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Js(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+vn,tr="__reactProps$"+vn,qe="__reactContainer$"+vn,Go="__reactEvents$"+vn,cp="__reactListeners$"+vn,dp="__reactHandles$"+vn;function Lt(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qe]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Js(e);e!==null;){if(n=e[Ue])return n;e=Js(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[Ue]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function bl(e){return e[tr]||null}var Xo=[],Gt=-1;function kt(e){return{current:e}}function O(e){0>Gt||(e.current=Xo[Gt],Xo[Gt]=null,Gt--)}function F(e,t){Gt++,Xo[Gt]=e.current,e.current=t}var jt={},se=kt(jt),he=kt(!1),Mt=jt;function un(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function ul(){O(he),O(se)}function qs(e,t,n){if(se.current!==jt)throw Error(N(168));F(se,t),F(he,n)}function Wu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(N(108,Yd(e)||"Unknown",l));return W({},n,r)}function cl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,Mt=se.current,F(se,e),F(he,he.current),!0}function ea(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Wu(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,O(he),O(se),F(se,e)):O(he),F(he,n)}var Ke=null,zl=!1,uo=!1;function Vu(e){Ke===null?Ke=[e]:Ke.push(e)}function fp(e){zl=!0,Vu(e)}function St(){if(!uo&&Ke!==null){uo=!0;var e=0,t=$;try{var n=Ke;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ke=null,zl=!1}catch(l){throw Ke!==null&&(Ke=Ke.slice(e+1)),gu(bi,St),l}finally{$=t,uo=!1}}return null}var Xt=[],Zt=0,dl=null,fl=0,Se=[],Ce=0,It=null,Ye=1,Ge="";function Pt(e,t){Xt[Zt++]=fl,Xt[Zt++]=dl,dl=e,fl=t}function Qu(e,t,n){Se[Ce++]=Ye,Se[Ce++]=Ge,Se[Ce++]=It,It=e;var r=Ye;e=Ge;var l=32-$e(r)-1;r&=~(1<<l),n+=1;var o=32-$e(t)+l;if(30<o){var s=l-l%5;o=(r&(1<<s)-1).toString(32),r>>=s,l-=s,Ye=1<<32-$e(t)+l|n<<l|r,Ge=o+e}else Ye=1<<o|n<<l|r,Ge=e}function Oi(e){e.return!==null&&(Pt(e,1),Qu(e,1,0))}function Ai(e){for(;e===dl;)dl=Xt[--Zt],Xt[Zt]=null,fl=Xt[--Zt],Xt[Zt]=null;for(;e===It;)It=Se[--Ce],Se[Ce]=null,Ge=Se[--Ce],Se[Ce]=null,Ye=Se[--Ce],Se[Ce]=null}var we=null,ye=null,A=!1,Ie=null;function Ku(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ta(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ye=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=It!==null?{id:Ye,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ye=null,!0):!1;default:return!1}}function Zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jo(e){if(A){var t=ye;if(t){var n=t;if(!ta(e,t)){if(Zo(e))throw Error(N(418));t=ht(n.nextSibling);var r=we;t&&ta(e,t)?Ku(r,n):(e.flags=e.flags&-4097|2,A=!1,we=e)}}else{if(Zo(e))throw Error(N(418));e.flags=e.flags&-4097|2,A=!1,we=e}}}function na(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function br(e){if(e!==we)return!1;if(!A)return na(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ko(e.type,e.memoizedProps)),t&&(t=ye)){if(Zo(e))throw Yu(),Error(N(418));for(;t;)Ku(e,t),t=ht(t.nextSibling)}if(na(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=we?ht(e.stateNode.nextSibling):null;return!0}function Yu(){for(var e=ye;e;)e=ht(e.nextSibling)}function cn(){ye=we=null,A=!1}function Ui(e){Ie===null?Ie=[e]:Ie.push(e)}var pp=rt.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=l.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ra(e){var t=e._init;return t(e._payload)}function Gu(e){function t(m,d){if(e){var p=m.deletions;p===null?(m.deletions=[d],m.flags|=16):p.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function l(m,d){return m=yt(m,d),m.index=0,m.sibling=null,m}function o(m,d,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<d?(m.flags|=2,d):p):(m.flags|=2,d)):(m.flags|=1048576,d)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,d,p,w){return d===null||d.tag!==6?(d=vo(p,m.mode,w),d.return=m,d):(d=l(d,p),d.return=m,d)}function u(m,d,p,w){var k=p.type;return k===Wt?f(m,d,p.props.children,w,p.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===it&&ra(k)===d.type)?(w=l(d,p.props),w.ref=Pn(m,d,p),w.return=m,w):(w=Gr(p.type,p.key,p.props,null,m.mode,w),w.ref=Pn(m,d,p),w.return=m,w)}function c(m,d,p,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=xo(p,m.mode,w),d.return=m,d):(d=l(d,p.children||[]),d.return=m,d)}function f(m,d,p,w,k){return d===null||d.tag!==7?(d=Tt(p,m.mode,w,k),d.return=m,d):(d=l(d,p),d.return=m,d)}function g(m,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=vo(""+d,m.mode,p),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case wr:return p=Gr(d.type,d.key,d.props,null,m.mode,p),p.ref=Pn(m,null,d),p.return=m,p;case Ht:return d=xo(d,m.mode,p),d.return=m,d;case it:var w=d._init;return g(m,w(d._payload),p)}if(Rn(d)||Nn(d))return d=Tt(d,m.mode,p,null),d.return=m,d;zr(m,d)}return null}function h(m,d,p,w){var k=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:a(m,d,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case wr:return p.key===k?u(m,d,p,w):null;case Ht:return p.key===k?c(m,d,p,w):null;case it:return k=p._init,h(m,d,k(p._payload),w)}if(Rn(p)||Nn(p))return k!==null?null:f(m,d,p,w,null);zr(m,p)}return null}function x(m,d,p,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(p)||null,a(d,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case wr:return m=m.get(w.key===null?p:w.key)||null,u(d,m,w,k);case Ht:return m=m.get(w.key===null?p:w.key)||null,c(d,m,w,k);case it:var C=w._init;return x(m,d,p,C(w._payload),k)}if(Rn(w)||Nn(w))return m=m.get(p)||null,f(d,m,w,k,null);zr(d,w)}return null}function y(m,d,p,w){for(var k=null,C=null,P=d,E=d=0,M=null;P!==null&&E<p.length;E++){P.index>E?(M=P,P=null):M=P.sibling;var b=h(m,P,p[E],w);if(b===null){P===null&&(P=M);break}e&&P&&b.alternate===null&&t(m,P),d=o(b,d,E),C===null?k=b:C.sibling=b,C=b,P=M}if(E===p.length)return n(m,P),A&&Pt(m,E),k;if(P===null){for(;E<p.length;E++)P=g(m,p[E],w),P!==null&&(d=o(P,d,E),C===null?k=P:C.sibling=P,C=P);return A&&Pt(m,E),k}for(P=r(m,P);E<p.length;E++)M=x(P,m,E,p[E],w),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?E:M.key),d=o(M,d,E),C===null?k=M:C.sibling=M,C=M);return e&&P.forEach(function(fe){return t(m,fe)}),A&&Pt(m,E),k}function j(m,d,p,w){var k=Nn(p);if(typeof k!="function")throw Error(N(150));if(p=k.call(p),p==null)throw Error(N(151));for(var C=k=null,P=d,E=d=0,M=null,b=p.next();P!==null&&!b.done;E++,b=p.next()){P.index>E?(M=P,P=null):M=P.sibling;var fe=h(m,P,b.value,w);if(fe===null){P===null&&(P=M);break}e&&P&&fe.alternate===null&&t(m,P),d=o(fe,d,E),C===null?k=fe:C.sibling=fe,C=fe,P=M}if(b.done)return n(m,P),A&&Pt(m,E),k;if(P===null){for(;!b.done;E++,b=p.next())b=g(m,b.value,w),b!==null&&(d=o(b,d,E),C===null?k=b:C.sibling=b,C=b);return A&&Pt(m,E),k}for(P=r(m,P);!b.done;E++,b=p.next())b=x(P,m,E,b.value,w),b!==null&&(e&&b.alternate!==null&&P.delete(b.key===null?E:b.key),d=o(b,d,E),C===null?k=b:C.sibling=b,C=b);return e&&P.forEach(function(wn){return t(m,wn)}),A&&Pt(m,E),k}function S(m,d,p,w){if(typeof p=="object"&&p!==null&&p.type===Wt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case wr:e:{for(var k=p.key,C=d;C!==null;){if(C.key===k){if(k=p.type,k===Wt){if(C.tag===7){n(m,C.sibling),d=l(C,p.props.children),d.return=m,m=d;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===it&&ra(k)===C.type){n(m,C.sibling),d=l(C,p.props),d.ref=Pn(m,C,p),d.return=m,m=d;break e}n(m,C);break}else t(m,C);C=C.sibling}p.type===Wt?(d=Tt(p.props.children,m.mode,w,p.key),d.return=m,m=d):(w=Gr(p.type,p.key,p.props,null,m.mode,w),w.ref=Pn(m,d,p),w.return=m,m=w)}return s(m);case Ht:e:{for(C=p.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(m,d.sibling),d=l(d,p.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=xo(p,m.mode,w),d.return=m,m=d}return s(m);case it:return C=p._init,S(m,d,C(p._payload),w)}if(Rn(p))return y(m,d,p,w);if(Nn(p))return j(m,d,p,w);zr(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(m,d.sibling),d=l(d,p),d.return=m,m=d):(n(m,d),d=vo(p,m.mode,w),d.return=m,m=d),s(m)):n(m,d)}return S}var dn=Gu(!0),Xu=Gu(!1),pl=kt(null),ml=null,Jt=null,Bi=null;function Hi(){Bi=Jt=ml=null}function Wi(e){var t=pl.current;O(pl),e._currentValue=t}function qo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){ml=e,Bi=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Bi!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(ml===null)throw Error(N(308));Jt=e,ml.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var bt=null;function Vi(e){bt===null?bt=[e]:bt.push(e)}function Zu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Vi(t)):(n.next=l.next,l.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var st=!1;function Qi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ju(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,et(e,n)}return l=r.interleaved,l===null?(t.next=t,Vi(r)):(t.next=l.next,l.next=t),r.interleaved=t,et(e,n)}function Hr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zi(e,n)}}function la(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hl(e,t,n,r){var l=e.updateQueue;st=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=u))}if(o!==null){var g=l.baseState;s=0,f=c=u=null,a=o;do{var h=a.lane,x=a.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,j=a;switch(h=t,x=n,j.tag){case 1:if(y=j.payload,typeof y=="function"){g=y.call(x,g,h);break e}g=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,h=typeof y=="function"?y.call(x,g,h):y,h==null)break e;g=W({},g,h);break e;case 2:st=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else x={eventTime:x,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=x,u=g):f=f.next=x,s|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(f===null&&(u=g),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=f,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ft|=s,e.lanes=s,e.memoizedState=g}}function oa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(N(191,l));l.call(r)}}}var pr={},He=kt(pr),nr=kt(pr),rr=kt(pr);function zt(e){if(e===pr)throw Error(N(174));return e}function Ki(e,t){switch(F(rr,t),F(nr,e),F(He,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:To(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=To(t,e)}O(He),F(He,t)}function fn(){O(He),O(nr),O(rr)}function qu(e){zt(rr.current);var t=zt(He.current),n=To(t,e.type);t!==n&&(F(nr,e),F(He,n))}function Yi(e){nr.current===e&&(O(He),O(nr))}var U=kt(0);function gl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=[];function Gi(){for(var e=0;e<co.length;e++)co[e]._workInProgressVersionPrimary=null;co.length=0}var Wr=rt.ReactCurrentDispatcher,fo=rt.ReactCurrentBatchConfig,$t=0,B=null,X=null,q=null,vl=!1,Un=!1,lr=0,mp=0;function le(){throw Error(N(321))}function Xi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Zi(e,t,n,r,l,o){if($t=o,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wr.current=e===null||e.memoizedState===null?xp:yp,e=n(r,l),Un){o=0;do{if(Un=!1,lr=0,25<=o)throw Error(N(301));o+=1,q=X=null,t.updateQueue=null,Wr.current=wp,e=n(r,l)}while(Un)}if(Wr.current=xl,t=X!==null&&X.next!==null,$t=0,q=X=B=null,vl=!1,t)throw Error(N(300));return e}function Ji(){var e=lr!==0;return lr=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?B.memoizedState=q=e:q=q.next=e,q}function Le(){if(X===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=q===null?B.memoizedState:q.next;if(t!==null)q=t,X=e;else{if(e===null)throw Error(N(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?B.memoizedState=q=e:q=q.next=e}return q}function or(e,t){return typeof t=="function"?t(e):t}function po(e){var t=Le(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=X,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=s=null,u=null,c=o;do{var f=c.lane;if(($t&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=g,s=r):u=u.next=g,B.lanes|=f,Ft|=f}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=a,De(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,B.lanes|=o,Ft|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function mo(e){var t=Le(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do o=e(o,s.action),s=s.next;while(s!==l);De(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ec(){}function tc(e,t){var n=B,r=Le(),l=t(),o=!De(r.memoizedState,l);if(o&&(r.memoizedState=l,me=!0),r=r.queue,qi(lc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,ir(9,rc.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(N(349));$t&30||nc(n,t,l)}return l}function nc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rc(e,t,n,r){t.value=n,t.getSnapshot=r,oc(t)&&ic(e)}function lc(e,t,n){return n(function(){oc(t)&&ic(e)})}function oc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function ic(e){var t=et(e,1);t!==null&&Fe(t,e,1,-1)}function ia(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},t.queue=e,e=e.dispatch=vp.bind(null,B,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sc(){return Le().memoizedState}function Vr(e,t,n,r){var l=Ae();B.flags|=e,l.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function Rl(e,t,n,r){var l=Le();r=r===void 0?null:r;var o=void 0;if(X!==null){var s=X.memoizedState;if(o=s.destroy,r!==null&&Xi(r,s.deps)){l.memoizedState=ir(t,n,o,r);return}}B.flags|=e,l.memoizedState=ir(1|t,n,o,r)}function sa(e,t){return Vr(8390656,8,e,t)}function qi(e,t){return Rl(2048,8,e,t)}function ac(e,t){return Rl(4,2,e,t)}function uc(e,t){return Rl(4,4,e,t)}function cc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dc(e,t,n){return n=n!=null?n.concat([e]):null,Rl(4,4,cc.bind(null,t,e),n)}function es(){}function fc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mc(e,t,n){return $t&21?(De(n,t)||(n=yu(),B.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function hp(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=fo.transition;fo.transition={};try{e(!1),t()}finally{$=n,fo.transition=r}}function hc(){return Le().memoizedState}function gp(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gc(e))vc(t,n);else if(n=Zu(e,t,n,r),n!==null){var l=ue();Fe(n,e,r,l),xc(n,t,r)}}function vp(e,t,n){var r=xt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gc(e))vc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(l.hasEagerState=!0,l.eagerState=a,De(a,s)){var u=t.interleaved;u===null?(l.next=l,Vi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Zu(e,t,l,r),n!==null&&(l=ue(),Fe(n,e,r,l),xc(n,t,r))}}function gc(e){var t=e.alternate;return e===B||t!==null&&t===B}function vc(e,t){Un=vl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zi(e,n)}}var xl={readContext:_e,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},xp={readContext:_e,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:sa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vr(4194308,4,cc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vr(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gp.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:ia,useDebugValue:es,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=ia(!1),t=e[0];return e=hp.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,l=Ae();if(A){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ee===null)throw Error(N(349));$t&30||nc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,sa(lc.bind(null,r,o,e),[e]),r.flags|=2048,ir(9,rc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ae(),t=ee.identifierPrefix;if(A){var n=Ge,r=Ye;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yp={readContext:_e,useCallback:fc,useContext:_e,useEffect:qi,useImperativeHandle:dc,useInsertionEffect:ac,useLayoutEffect:uc,useMemo:pc,useReducer:po,useRef:sc,useState:function(){return po(or)},useDebugValue:es,useDeferredValue:function(e){var t=Le();return mc(t,X.memoizedState,e)},useTransition:function(){var e=po(or)[0],t=Le().memoizedState;return[e,t]},useMutableSource:ec,useSyncExternalStore:tc,useId:hc,unstable_isNewReconciler:!1},wp={readContext:_e,useCallback:fc,useContext:_e,useEffect:qi,useImperativeHandle:dc,useInsertionEffect:ac,useLayoutEffect:uc,useMemo:pc,useReducer:mo,useRef:sc,useState:function(){return mo(or)},useDebugValue:es,useDeferredValue:function(e){var t=Le();return X===null?t.memoizedState=e:mc(t,X.memoizedState,e)},useTransition:function(){var e=mo(or)[0],t=Le().memoizedState;return[e,t]},useMutableSource:ec,useSyncExternalStore:tc,useId:hc,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ei(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tl={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=xt(e),o=Xe(r,l);o.payload=t,n!=null&&(o.callback=n),t=gt(e,o,l),t!==null&&(Fe(t,e,l,r),Hr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=xt(e),o=Xe(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gt(e,o,l),t!==null&&(Fe(t,e,l,r),Hr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=xt(e),l=Xe(n,r);l.tag=2,t!=null&&(l.callback=t),t=gt(e,l,r),t!==null&&(Fe(t,e,r,n),Hr(t,e,r))}};function aa(e,t,n,r,l,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(l,o):!0}function yc(e,t,n){var r=!1,l=jt,o=t.contextType;return typeof o=="object"&&o!==null?o=_e(o):(l=ge(t)?Mt:se.current,r=t.contextTypes,o=(r=r!=null)?un(e,l):jt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function ua(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Tl.enqueueReplaceState(t,t.state,null)}function ti(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Qi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=_e(o):(o=ge(t)?Mt:se.current,l.context=un(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ei(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Tl.enqueueReplaceState(l,l.state,null),hl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Kd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ho(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ni(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jp=typeof WeakMap=="function"?WeakMap:Map;function wc(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wl||(wl=!0,fi=r),ni(e,t)},n}function jc(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ni(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ni(e,t),typeof r!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ca(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ip.bind(null,e,t,n),t.then(e,e))}function da(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var Np=rt.ReactCurrentOwner,me=!1;function ae(e,t,n,r){t.child=e===null?Xu(t,null,n,r):dn(t,e.child,n,r)}function pa(e,t,n,r,l){n=n.render;var o=t.ref;return on(t,l),r=Zi(e,t,n,r,o,l),n=Ji(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):(A&&n&&Oi(t),t.flags|=1,ae(e,t,r,l),t.child)}function ma(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!as(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Nc(e,t,o,r,l)):(e=Gr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(s,r)&&e.ref===t.ref)return tt(e,t,l)}return t.flags|=1,e=yt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Nc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Jn(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,tt(e,t,l)}return ri(e,t,n,r,l)}function kc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(en,xe),xe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(en,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,F(en,xe),xe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,F(en,xe),xe|=r;return ae(e,t,l,n),t.child}function Sc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ri(e,t,n,r,l){var o=ge(n)?Mt:se.current;return o=un(t,o),on(t,l),n=Zi(e,t,n,r,o,l),r=Ji(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):(A&&r&&Oi(t),t.flags|=1,ae(e,t,n,l),t.child)}function ha(e,t,n,r,l){if(ge(n)){var o=!0;cl(t)}else o=!1;if(on(t,l),t.stateNode===null)Qr(e,t),yc(t,n,r),ti(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=ge(n)?Mt:se.current,c=un(t,c));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&ua(t,s,r,c),st=!1;var h=t.memoizedState;s.state=h,hl(t,r,s,l),u=t.memoizedState,a!==r||h!==u||he.current||st?(typeof f=="function"&&(ei(t,n,f,r),u=t.memoizedState),(a=st||aa(t,n,a,r,h,u,c))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Ju(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Te(t.type,a),s.props=c,g=t.pendingProps,h=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=ge(n)?Mt:se.current,u=un(t,u));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==g||h!==u)&&ua(t,s,r,u),st=!1,h=t.memoizedState,s.state=h,hl(t,r,s,l);var y=t.memoizedState;a!==g||h!==y||he.current||st?(typeof x=="function"&&(ei(t,n,x,r),y=t.memoizedState),(c=st||aa(t,n,c,r,h,y,u)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return li(e,t,n,r,o,l)}function li(e,t,n,r,l,o){Sc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&ea(t,n,!1),tt(e,t,o);r=t.stateNode,Np.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=dn(t,e.child,null,o),t.child=dn(t,null,a,o)):ae(e,t,a,o),t.memoizedState=r.state,l&&ea(t,n,!0),t.child}function Cc(e){var t=e.stateNode;t.pendingContext?qs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qs(e,t.context,!1),Ki(e,t.containerInfo)}function ga(e,t,n,r,l){return cn(),Ui(l),t.flags|=256,ae(e,t,n,r),t.child}var oi={dehydrated:null,treeContext:null,retryLane:0};function ii(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ec(e,t,n){var r=t.pendingProps,l=U.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F(U,l&1),e===null)return Jo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=$l(s,r,0,null),e=Tt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ii(n),t.memoizedState=oi,e):ts(t,s));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return kp(e,t,s,r,a,l,n);if(o){o=r.fallback,s=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=yt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=yt(a,o):(o=Tt(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ii(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=oi,r}return o=e.child,e=o.sibling,r=yt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ts(e,t){return t=$l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rr(e,t,n,r){return r!==null&&Ui(r),dn(t,e.child,null,n),e=ts(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kp(e,t,n,r,l,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ho(Error(N(422))),Rr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=$l({mode:"visible",children:r.children},l,0,null),o=Tt(o,l,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&dn(t,e.child,null,s),t.child.memoizedState=ii(s),t.memoizedState=oi,o);if(!(t.mode&1))return Rr(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(N(419)),r=ho(o,r,void 0),Rr(e,t,s,r)}if(a=(s&e.childLanes)!==0,me||a){if(r=ee,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,et(e,l),Fe(r,e,l,-1))}return ss(),r=ho(Error(N(421))),Rr(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=$p.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ye=ht(l.nextSibling),we=t,A=!0,Ie=null,e!==null&&(Se[Ce++]=Ye,Se[Ce++]=Ge,Se[Ce++]=It,Ye=e.id,Ge=e.overflow,It=t),t=ts(t,r.children),t.flags|=4096,t)}function va(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qo(e.return,t,n)}function go(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Pc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&va(e,n,t);else if(e.tag===19)va(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&gl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),go(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&gl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}go(t,!0,n,null,o);break;case"together":go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sp(e,t,n){switch(t.tag){case 3:Cc(t),cn();break;case 5:qu(t);break;case 1:ge(t.type)&&cl(t);break;case 4:Ki(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;F(pl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Ec(e,t,n):(F(U,U.current&1),e=tt(e,t,n),e!==null?e.sibling:null);F(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,kc(e,t,n)}return tt(e,t,n)}var _c,si,Lc,bc;_c=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};si=function(){};Lc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,zt(He.current);var o=null;switch(n){case"input":l=Lo(e,l),r=Lo(e,r),o=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":l=Ro(e,l),r=Ro(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=al)}Mo(n,r);var s;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&D("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};bc=function(e,t,n,r){n!==r&&(t.flags|=4)};function _n(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cp(e,t,n){var r=t.pendingProps;switch(Ai(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ge(t.type)&&ul(),oe(t),null;case 3:return r=t.stateNode,fn(),O(he),O(se),Gi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(hi(Ie),Ie=null))),si(e,t),oe(t),null;case 5:Yi(t);var l=zt(rr.current);if(n=t.type,e!==null&&t.stateNode!=null)Lc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return oe(t),null}if(e=zt(He.current),br(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ue]=t,r[tr]=o,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<Mn.length;l++)D(Mn[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Es(r,o),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},D("invalid",r);break;case"textarea":_s(r,o),D("invalid",r)}Mo(n,o),l=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Lr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Lr(r.textContent,a,e),l=["children",""+a]):Vn.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&D("scroll",r)}switch(n){case"input":jr(r),Ps(r,o,!0);break;case"textarea":jr(r),Ls(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=al)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ue]=t,e[tr]=r,_c(e,t,!1,!1),t.stateNode=e;e:{switch(s=Io(n,r),n){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<Mn.length;l++)D(Mn[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":Es(e,r),l=Lo(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),D("invalid",e);break;case"textarea":_s(e,r),l=Ro(e,r),D("invalid",e);break;default:l=r}Mo(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?su(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ou(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Qn(e,u):typeof u=="number"&&Qn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&D("scroll",e):u!=null&&Ci(e,o,u,s))}switch(n){case"input":jr(e),Ps(e,r,!1);break;case"textarea":jr(e),Ls(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tn(e,!!r.multiple,o,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)bc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=zt(rr.current),zt(He.current),br(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(o=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:Lr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return oe(t),null;case 13:if(O(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ye!==null&&t.mode&1&&!(t.flags&128))Yu(),cn(),t.flags|=98560,o=!1;else if(o=br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[Ue]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else Ie!==null&&(hi(Ie),Ie=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?Z===0&&(Z=3):ss())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return fn(),si(e,t),e===null&&qn(t.stateNode.containerInfo),oe(t),null;case 10:return Wi(t.type._context),oe(t),null;case 17:return ge(t.type)&&ul(),oe(t),null;case 19:if(O(U),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)_n(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=gl(e),s!==null){for(t.flags|=128,_n(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>mn&&(t.flags|=128,r=!0,_n(o,!1),t.lanes=4194304)}else{if(!r)if(e=gl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_n(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!A)return oe(t),null}else 2*Y()-o.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,_n(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=U.current,F(U,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return is(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Ep(e,t){switch(Ai(t),t.tag){case 1:return ge(t.type)&&ul(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),O(he),O(se),Gi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Yi(t),null;case 13:if(O(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(U),null;case 4:return fn(),null;case 10:return Wi(t.type._context),null;case 22:case 23:return is(),null;case 24:return null;default:return null}}var Tr=!1,ie=!1,Pp=typeof WeakSet=="function"?WeakSet:Set,_=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function ai(e,t,n){try{n()}catch(r){Q(e,t,r)}}var xa=!1;function _p(e,t){if(Vo=ol,e=Iu(),Di(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,f=0,g=e,h=null;t:for(;;){for(var x;g!==n||l!==0&&g.nodeType!==3||(a=s+l),g!==o||r!==0&&g.nodeType!==3||(u=s+r),g.nodeType===3&&(s+=g.nodeValue.length),(x=g.firstChild)!==null;)h=g,g=x;for(;;){if(g===e)break t;if(h===n&&++c===l&&(a=s),h===o&&++f===r&&(u=s),(x=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qo={focusedElem:e,selectionRange:n},ol=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,S=y.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?j:Te(t.type,j),S);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){Q(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return y=xa,xa=!1,y}function Bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&ai(t,n,o)}l=l.next}while(l!==r)}}function Ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ui(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zc(e){var t=e.alternate;t!==null&&(e.alternate=null,zc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[tr],delete t[Go],delete t[cp],delete t[dp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rc(e){return e.tag===5||e.tag===3||e.tag===4}function ya(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ci(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=al));else if(r!==4&&(e=e.child,e!==null))for(ci(e,t,n),e=e.sibling;e!==null;)ci(e,t,n),e=e.sibling}function di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(di(e,t,n),e=e.sibling;e!==null;)di(e,t,n),e=e.sibling}var te=null,Me=!1;function ot(e,t,n){for(n=n.child;n!==null;)Tc(e,t,n),n=n.sibling}function Tc(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 5:ie||qt(n,t);case 6:var r=te,l=Me;te=null,ot(e,t,n),te=r,Me=l,te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?ao(e.parentNode,n):e.nodeType===1&&ao(e,n),Xn(e)):ao(te,n.stateNode));break;case 4:r=te,l=Me,te=n.stateNode.containerInfo,Me=!0,ot(e,t,n),te=r,Me=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ai(n,t,s),l=l.next}while(l!==r)}ot(e,t,n);break;case 1:if(!ie&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,ot(e,t,n),ie=r):ot(e,t,n);break;default:ot(e,t,n)}}function wa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pp),t.forEach(function(r){var l=Fp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Me=!1;break e;case 3:te=a.stateNode.containerInfo,Me=!0;break e;case 4:te=a.stateNode.containerInfo,Me=!0;break e}a=a.return}if(te===null)throw Error(N(160));Tc(o,s,l),te=null,Me=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){Q(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mc(t,e),t=t.sibling}function Mc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Oe(e),r&4){try{Bn(3,e,e.return),Ml(3,e)}catch(j){Q(e,e.return,j)}try{Bn(5,e,e.return)}catch(j){Q(e,e.return,j)}}break;case 1:ze(t,e),Oe(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(ze(t,e),Oe(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var l=e.stateNode;try{Qn(l,"")}catch(j){Q(e,e.return,j)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&nu(l,o),Io(a,s);var c=Io(a,o);for(s=0;s<u.length;s+=2){var f=u[s],g=u[s+1];f==="style"?su(l,g):f==="dangerouslySetInnerHTML"?ou(l,g):f==="children"?Qn(l,g):Ci(l,f,g,c)}switch(a){case"input":bo(l,o);break;case"textarea":ru(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?tn(l,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?tn(l,!!o.multiple,o.defaultValue,!0):tn(l,!!o.multiple,o.multiple?[]:"",!1))}l[tr]=o}catch(j){Q(e,e.return,j)}}break;case 6:if(ze(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(N(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(j){Q(e,e.return,j)}}break;case 3:if(ze(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(j){Q(e,e.return,j)}break;case 4:ze(t,e),Oe(e);break;case 13:ze(t,e),Oe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ls=Y())),r&4&&wa(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(c=ie)||f,ze(t,e),ie=c):ze(t,e),Oe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(_=e,f=e.child;f!==null;){for(g=_=f;_!==null;){switch(h=_,x=h.child,h.tag){case 0:case 11:case 14:case 15:Bn(4,h,h.return);break;case 1:qt(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(j){Q(r,n,j)}}break;case 5:qt(h,h.return);break;case 22:if(h.memoizedState!==null){Na(g);continue}}x!==null?(x.return=h,_=x):Na(g)}f=f.sibling}e:for(f=null,g=e;;){if(g.tag===5){if(f===null){f=g;try{l=g.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=g.stateNode,u=g.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=iu("display",s))}catch(j){Q(e,e.return,j)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(j){Q(e,e.return,j)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:ze(t,e),Oe(e),r&4&&wa(e);break;case 21:break;default:ze(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rc(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Qn(l,""),r.flags&=-33);var o=ya(e);di(e,o,l);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ya(e);ci(e,a,s);break;default:throw Error(N(161))}}catch(u){Q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lp(e,t,n){_=e,Ic(e)}function Ic(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var l=_,o=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||Tr;if(!s){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ie;a=Tr;var c=ie;if(Tr=s,(ie=u)&&!c)for(_=l;_!==null;)s=_,u=s.child,s.tag===22&&s.memoizedState!==null?ka(l):u!==null?(u.return=s,_=u):ka(l);for(;o!==null;)_=o,Ic(o),o=o.sibling;_=l,Tr=a,ie=c}ja(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,_=o):ja(e)}}function ja(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||Ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&oa(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}oa(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Xn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ie||t.flags&512&&ui(t)}catch(h){Q(t,t.return,h)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Na(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function ka(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ml(4,t)}catch(u){Q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Q(t,l,u)}}var o=t.return;try{ui(t)}catch(u){Q(t,o,u)}break;case 5:var s=t.return;try{ui(t)}catch(u){Q(t,s,u)}}}catch(u){Q(t,t.return,u)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var bp=Math.ceil,yl=rt.ReactCurrentDispatcher,ns=rt.ReactCurrentOwner,Pe=rt.ReactCurrentBatchConfig,I=0,ee=null,G=null,ne=0,xe=0,en=kt(0),Z=0,sr=null,Ft=0,Il=0,rs=0,Hn=null,pe=null,ls=0,mn=1/0,Qe=null,wl=!1,fi=null,vt=null,Mr=!1,dt=null,jl=0,Wn=0,pi=null,Kr=-1,Yr=0;function ue(){return I&6?Y():Kr!==-1?Kr:Kr=Y()}function xt(e){return e.mode&1?I&2&&ne!==0?ne&-ne:pp.transition!==null?(Yr===0&&(Yr=yu()),Yr):(e=$,e!==0||(e=window.event,e=e===void 0?16:Eu(e.type)),e):1}function Fe(e,t,n,r){if(50<Wn)throw Wn=0,pi=null,Error(N(185));cr(e,n,r),(!(I&2)||e!==ee)&&(e===ee&&(!(I&2)&&(Il|=n),Z===4&&ut(e,ne)),ve(e,r),n===1&&I===0&&!(t.mode&1)&&(mn=Y()+500,zl&&St()))}function ve(e,t){var n=e.callbackNode;pf(e,t);var r=ll(e,e===ee?ne:0);if(r===0)n!==null&&Rs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Rs(n),t===1)e.tag===0?fp(Sa.bind(null,e)):Vu(Sa.bind(null,e)),ap(function(){!(I&6)&&St()}),n=null;else{switch(wu(r)){case 1:n=bi;break;case 4:n=vu;break;case 16:n=rl;break;case 536870912:n=xu;break;default:n=rl}n=Hc(n,$c.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $c(e,t){if(Kr=-1,Yr=0,I&6)throw Error(N(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=ll(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Nl(e,r);else{t=r;var l=I;I|=2;var o=Dc();(ee!==e||ne!==t)&&(Qe=null,mn=Y()+500,Rt(e,t));do try{Tp();break}catch(a){Fc(e,a)}while(!0);Hi(),yl.current=o,I=l,G!==null?t=0:(ee=null,ne=0,t=Z)}if(t!==0){if(t===2&&(l=Ao(e),l!==0&&(r=l,t=mi(e,l))),t===1)throw n=sr,Rt(e,0),ut(e,r),ve(e,Y()),n;if(t===6)ut(e,r);else{if(l=e.current.alternate,!(r&30)&&!zp(l)&&(t=Nl(e,r),t===2&&(o=Ao(e),o!==0&&(r=o,t=mi(e,o))),t===1))throw n=sr,Rt(e,0),ut(e,r),ve(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:_t(e,pe,Qe);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=ls+500-Y(),10<t)){if(ll(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Yo(_t.bind(null,e,pe,Qe),t);break}_t(e,pe,Qe);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-$e(r);o=1<<s,s=t[s],s>l&&(l=s),r&=~o}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bp(r/1960))-r,10<r){e.timeoutHandle=Yo(_t.bind(null,e,pe,Qe),r);break}_t(e,pe,Qe);break;case 5:_t(e,pe,Qe);break;default:throw Error(N(329))}}}return ve(e,Y()),e.callbackNode===n?$c.bind(null,e):null}function mi(e,t){var n=Hn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=Nl(e,t),e!==2&&(t=pe,pe=n,t!==null&&hi(t)),e}function hi(e){pe===null?pe=e:pe.push.apply(pe,e)}function zp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!De(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~rs,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function Sa(e){if(I&6)throw Error(N(327));sn();var t=ll(e,0);if(!(t&1))return ve(e,Y()),null;var n=Nl(e,t);if(e.tag!==0&&n===2){var r=Ao(e);r!==0&&(t=r,n=mi(e,r))}if(n===1)throw n=sr,Rt(e,0),ut(e,t),ve(e,Y()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,pe,Qe),ve(e,Y()),null}function os(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(mn=Y()+500,zl&&St())}}function Dt(e){dt!==null&&dt.tag===0&&!(I&6)&&sn();var t=I;I|=1;var n=Pe.transition,r=$;try{if(Pe.transition=null,$=1,e)return e()}finally{$=r,Pe.transition=n,I=t,!(I&6)&&St()}}function is(){xe=en.current,O(en)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sp(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(Ai(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ul();break;case 3:fn(),O(he),O(se),Gi();break;case 5:Yi(r);break;case 4:fn();break;case 13:O(U);break;case 19:O(U);break;case 10:Wi(r.type._context);break;case 22:case 23:is()}n=n.return}if(ee=e,G=e=yt(e.current,null),ne=xe=t,Z=0,sr=null,rs=Il=Ft=0,pe=Hn=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=l,r.next=s}n.pending=r}bt=null}return e}function Fc(e,t){do{var n=G;try{if(Hi(),Wr.current=xl,vl){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}vl=!1}if($t=0,q=X=B=null,Un=!1,lr=0,ns.current=null,n===null||n.return===null){Z=1,sr=t,G=null;break}e:{var o=e,s=n.return,a=n,u=t;if(t=ne,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=a,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=da(s);if(x!==null){x.flags&=-257,fa(x,s,a,o,t),x.mode&1&&ca(o,c,t),t=x,u=c;var y=t.updateQueue;if(y===null){var j=new Set;j.add(u),t.updateQueue=j}else y.add(u);break e}else{if(!(t&1)){ca(o,c,t),ss();break e}u=Error(N(426))}}else if(A&&a.mode&1){var S=da(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),fa(S,s,a,o,t),Ui(pn(u,a));break e}}o=u=pn(u,a),Z!==4&&(Z=2),Hn===null?Hn=[o]:Hn.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=wc(o,u,t);la(o,m);break e;case 1:a=u;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(vt===null||!vt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=jc(o,a,t);la(o,w);break e}}o=o.return}while(o!==null)}Ac(n)}catch(k){t=k,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Dc(){var e=yl.current;return yl.current=xl,e===null?xl:e}function ss(){(Z===0||Z===3||Z===2)&&(Z=4),ee===null||!(Ft&268435455)&&!(Il&268435455)||ut(ee,ne)}function Nl(e,t){var n=I;I|=2;var r=Dc();(ee!==e||ne!==t)&&(Qe=null,Rt(e,t));do try{Rp();break}catch(l){Fc(e,l)}while(!0);if(Hi(),I=n,yl.current=r,G!==null)throw Error(N(261));return ee=null,ne=0,Z}function Rp(){for(;G!==null;)Oc(G)}function Tp(){for(;G!==null&&!rf();)Oc(G)}function Oc(e){var t=Bc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Ac(e):G=t,ns.current=null}function Ac(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ep(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,G=null;return}}else if(n=Cp(n,t,xe),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);Z===0&&(Z=5)}function _t(e,t,n){var r=$,l=Pe.transition;try{Pe.transition=null,$=1,Mp(e,t,n,r)}finally{Pe.transition=l,$=r}return null}function Mp(e,t,n,r){do sn();while(dt!==null);if(I&6)throw Error(N(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(mf(e,o),e===ee&&(G=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mr||(Mr=!0,Hc(rl,function(){return sn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var s=$;$=1;var a=I;I|=4,ns.current=null,_p(e,n),Mc(n,e),ep(Qo),ol=!!Vo,Qo=Vo=null,e.current=n,Lp(n),lf(),I=a,$=s,Pe.transition=o}else e.current=n;if(Mr&&(Mr=!1,dt=e,jl=l),o=e.pendingLanes,o===0&&(vt=null),af(n.stateNode),ve(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(wl)throw wl=!1,e=fi,fi=null,e;return jl&1&&e.tag!==0&&sn(),o=e.pendingLanes,o&1?e===pi?Wn++:(Wn=0,pi=e):Wn=0,St(),null}function sn(){if(dt!==null){var e=wu(jl),t=Pe.transition,n=$;try{if(Pe.transition=null,$=16>e?16:e,dt===null)var r=!1;else{if(e=dt,dt=null,jl=0,I&6)throw Error(N(331));var l=I;for(I|=4,_=e.current;_!==null;){var o=_,s=o.child;if(_.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(_=c;_!==null;){var f=_;switch(f.tag){case 0:case 11:case 15:Bn(8,f,o)}var g=f.child;if(g!==null)g.return=f,_=g;else for(;_!==null;){f=_;var h=f.sibling,x=f.return;if(zc(f),f===c){_=null;break}if(h!==null){h.return=x,_=h;break}_=x}}}var y=o.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var S=j.sibling;j.sibling=null,j=S}while(j!==null)}}_=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,_=s;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Bn(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,_=m;break e}_=o.return}}var d=e.current;for(_=d;_!==null;){s=_;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,_=p;else e:for(s=d;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ml(9,a)}}catch(k){Q(a,a.return,k)}if(a===s){_=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,_=w;break e}_=a.return}}if(I=l,St(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(El,e)}catch{}r=!0}return r}finally{$=n,Pe.transition=t}}return!1}function Ca(e,t,n){t=pn(n,t),t=wc(e,t,1),e=gt(e,t,1),t=ue(),e!==null&&(cr(e,1,t),ve(e,t))}function Q(e,t,n){if(e.tag===3)Ca(e,e,n);else for(;t!==null;){if(t.tag===3){Ca(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vt===null||!vt.has(r))){e=pn(n,e),e=jc(t,e,1),t=gt(t,e,1),e=ue(),t!==null&&(cr(t,1,e),ve(t,e));break}}t=t.return}}function Ip(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(Z===4||Z===3&&(ne&130023424)===ne&&500>Y()-ls?Rt(e,0):rs|=n),ve(e,t)}function Uc(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=ue();e=et(e,t),e!==null&&(cr(e,t,n),ve(e,n))}function $p(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uc(e,n)}function Fp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Uc(e,n)}var Bc;Bc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Sp(e,t,n);me=!!(e.flags&131072)}else me=!1,A&&t.flags&1048576&&Qu(t,fl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qr(e,t),e=t.pendingProps;var l=un(t,se.current);on(t,n),l=Zi(null,t,r,e,l,n);var o=Ji();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(o=!0,cl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Qi(t),l.updater=Tl,t.stateNode=l,l._reactInternals=t,ti(t,r,e,n),t=li(null,t,r,!0,o,n)):(t.tag=0,A&&o&&Oi(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Op(r),e=Te(r,e),l){case 0:t=ri(null,t,r,e,n);break e;case 1:t=ha(null,t,r,e,n);break e;case 11:t=pa(null,t,r,e,n);break e;case 14:t=ma(null,t,r,Te(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),ri(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),ha(e,t,r,l,n);case 3:e:{if(Cc(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Ju(e,t),hl(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=pn(Error(N(423)),t),t=ga(e,t,r,n,l);break e}else if(r!==l){l=pn(Error(N(424)),t),t=ga(e,t,r,n,l);break e}else for(ye=ht(t.stateNode.containerInfo.firstChild),we=t,A=!0,Ie=null,n=Xu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===l){t=tt(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return qu(t),e===null&&Jo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,s=l.children,Ko(r,l)?s=null:o!==null&&Ko(r,o)&&(t.flags|=32),Sc(e,t),ae(e,t,s,n),t.child;case 6:return e===null&&Jo(t),null;case 13:return Ec(e,t,n);case 4:return Ki(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),pa(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,s=l.value,F(pl,r._currentValue),r._currentValue=s,o!==null)if(De(o.value,s)){if(o.children===l.children&&!he.current){t=tt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Xe(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),qo(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(N(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),qo(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,on(t,n),l=_e(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Te(r,t.pendingProps),l=Te(r.type,l),ma(e,t,r,l,n);case 15:return Nc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Qr(e,t),t.tag=1,ge(r)?(e=!0,cl(t)):e=!1,on(t,n),yc(t,r,l),ti(t,r,l,n),li(null,t,r,!0,e,n);case 19:return Pc(e,t,n);case 22:return kc(e,t,n)}throw Error(N(156,t.tag))};function Hc(e,t){return gu(e,t)}function Dp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Dp(e,t,n,r)}function as(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Op(e){if(typeof e=="function")return as(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pi)return 11;if(e===_i)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gr(e,t,n,r,l,o){var s=2;if(r=e,typeof e=="function")as(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Wt:return Tt(n.children,l,o,t);case Ei:s=8,l|=8;break;case Co:return e=Ee(12,n,t,l|2),e.elementType=Co,e.lanes=o,e;case Eo:return e=Ee(13,n,t,l),e.elementType=Eo,e.lanes=o,e;case Po:return e=Ee(19,n,t,l),e.elementType=Po,e.lanes=o,e;case qa:return $l(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Za:s=10;break e;case Ja:s=9;break e;case Pi:s=11;break e;case _i:s=14;break e;case it:s=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ee(s,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Tt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function $l(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=qa,e.lanes=n,e.stateNode={isHidden:!1},e}function vo(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function xo(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ap(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function us(e,t,n,r,l,o,s,a,u){return e=new Ap(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ee(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qi(o),e}function Up(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wc(e){if(!e)return jt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(ge(n))return Wu(e,n,t)}return t}function Vc(e,t,n,r,l,o,s,a,u){return e=us(n,r,!0,e,l,o,s,a,u),e.context=Wc(null),n=e.current,r=ue(),l=xt(n),o=Xe(r,l),o.callback=t??null,gt(n,o,l),e.current.lanes=l,cr(e,l,r),ve(e,r),e}function Fl(e,t,n,r){var l=t.current,o=ue(),s=xt(l);return n=Wc(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(l,t,s),e!==null&&(Fe(e,l,s,o),Hr(e,l,s)),s}function kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ea(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cs(e,t){Ea(e,t),(e=e.alternate)&&Ea(e,t)}function Bp(){return null}var Qc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ds(e){this._internalRoot=e}Dl.prototype.render=ds.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Fl(e,t,null,null)};Dl.prototype.unmount=ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dt(function(){Fl(null,e,null,null)}),t[qe]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ku();e={blockedOn:null,target:e,priority:t};for(var n=0;n<at.length&&t!==0&&t<at[n].priority;n++);at.splice(n,0,e),n===0&&Cu(e)}};function fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pa(){}function Hp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=kl(s);o.call(c)}}var s=Vc(t,r,e,0,null,!1,!1,"",Pa);return e._reactRootContainer=s,e[qe]=s.current,qn(e.nodeType===8?e.parentNode:e),Dt(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=kl(u);a.call(c)}}var u=us(e,0,!1,null,null,!1,!1,"",Pa);return e._reactRootContainer=u,e[qe]=u.current,qn(e.nodeType===8?e.parentNode:e),Dt(function(){Fl(t,u,n,r)}),u}function Al(e,t,n,r,l){var o=n._reactRootContainer;if(o){var s=o;if(typeof l=="function"){var a=l;l=function(){var u=kl(s);a.call(u)}}Fl(t,s,e,l)}else s=Hp(n,t,e,l,r);return kl(s)}ju=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(zi(t,n|1),ve(t,Y()),!(I&6)&&(mn=Y()+500,St()))}break;case 13:Dt(function(){var r=et(e,1);if(r!==null){var l=ue();Fe(r,e,1,l)}}),cs(e,1)}};Ri=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=ue();Fe(t,e,134217728,n)}cs(e,134217728)}};Nu=function(e){if(e.tag===13){var t=xt(e),n=et(e,t);if(n!==null){var r=ue();Fe(n,e,t,r)}cs(e,t)}};ku=function(){return $};Su=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};Fo=function(e,t,n){switch(t){case"input":if(bo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=bl(r);if(!l)throw Error(N(90));tu(r),bo(r,l)}}}break;case"textarea":ru(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};cu=os;du=Dt;var Wp={usingClientEntryPoint:!1,Events:[fr,Yt,bl,au,uu,os]},Ln={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vp={bundleType:Ln.bundleType,version:Ln.version,rendererPackageName:Ln.rendererPackageName,rendererConfig:Ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mu(e),e===null?null:e.stateNode},findFiberByHostInstance:Ln.findFiberByHostInstance||Bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ir.isDisabled&&Ir.supportsFiber)try{El=Ir.inject(Vp),Be=Ir}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wp;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fs(t))throw Error(N(200));return Up(e,t,null,n)};Ne.createRoot=function(e,t){if(!fs(e))throw Error(N(299));var n=!1,r="",l=Qc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=us(e,1,!1,null,null,n,!1,r,l),e[qe]=t.current,qn(e.nodeType===8?e.parentNode:e),new ds(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=mu(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Dt(e)};Ne.hydrate=function(e,t,n){if(!Ol(t))throw Error(N(200));return Al(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!fs(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",s=Qc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Vc(t,null,e,1,n??null,l,!1,o,s),e[qe]=t.current,qn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Dl(t)};Ne.render=function(e,t,n){if(!Ol(t))throw Error(N(200));return Al(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Ol(e))throw Error(N(40));return e._reactRootContainer?(Dt(function(){Al(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};Ne.unstable_batchedUpdates=os;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ol(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Al(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Kc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kc)}catch(e){console.error(e)}}Kc(),Ka.exports=Ne;var Qp=Ka.exports,_a=Qp;ko.createRoot=_a.createRoot,ko.hydrateRoot=_a.hydrateRoot;/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var La="popstate";function Kp(e={}){function t(r,l){let{pathname:o,search:s,hash:a}=r.location;return gi("",{pathname:o,search:s,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:ar(l)}return Gp(t,n,null,e)}function H(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function We(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Yp(){return Math.random().toString(36).substring(2,10)}function ba(e,t){return{usr:e.state,key:e.key,idx:t}}function gi(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?xn(t):t,state:n,key:t&&t.key||r||Yp()}}function ar({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function xn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Gp(e,t,n,r={}){let{window:l=document.defaultView,v5Compat:o=!1}=r,s=l.history,a="POP",u=null,c=f();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function f(){return(s.state||{idx:null}).idx}function g(){a="POP";let S=f(),m=S==null?null:S-c;c=S,u&&u({action:a,location:j.location,delta:m})}function h(S,m){a="PUSH";let d=gi(j.location,S,m);c=f()+1;let p=ba(d,c),w=j.createHref(d);try{s.pushState(p,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(w)}o&&u&&u({action:a,location:j.location,delta:1})}function x(S,m){a="REPLACE";let d=gi(j.location,S,m);c=f();let p=ba(d,c),w=j.createHref(d);s.replaceState(p,"",w),o&&u&&u({action:a,location:j.location,delta:0})}function y(S){return Xp(S)}let j={get action(){return a},get location(){return e(l,s)},listen(S){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(La,g),u=S,()=>{l.removeEventListener(La,g),u=null}},createHref(S){return t(l,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:x,go(S){return s.go(S)}};return j}function Xp(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),H(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:ar(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Yc(e,t,n="/"){return Zp(e,t,n,!1)}function Zp(e,t,n,r){let l=typeof t=="string"?xn(t):t,o=nt(l.pathname||"/",n);if(o==null)return null;let s=Gc(e);Jp(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let c=um(o);a=sm(s[u],c,r)}return a}function Gc(e,t=[],n=[],r="",l=!1){let o=(s,a,u=l,c)=>{let f={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&u)return;H(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let g=Ze([r,f.relativePath]),h=n.concat(f);s.children&&s.children.length>0&&(H(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Gc(s.children,t,h,g,u)),!(s.path==null&&!s.index)&&t.push({path:g,score:om(g,s.index),routesMeta:h})};return e.forEach((s,a)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))o(s,a);else for(let c of Xc(s.path))o(s,a,!0,c)}),t}function Xc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let s=Xc(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),l&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Jp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:im(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var qp=/^:[\w-]+$/,em=3,tm=2,nm=1,rm=10,lm=-2,za=e=>e==="*";function om(e,t){let n=e.split("/"),r=n.length;return n.some(za)&&(r+=lm),t&&(r+=tm),n.filter(l=>!za(l)).reduce((l,o)=>l+(qp.test(o)?em:o===""?nm:rm),r)}function im(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function sm(e,t,n=!1){let{routesMeta:r}=e,l={},o="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",g=Sl({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),h=u.route;if(!g&&c&&n&&!r[r.length-1].route.index&&(g=Sl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!g)return null;Object.assign(l,g.params),s.push({params:l,pathname:Ze([o,g.pathname]),pathnameBase:pm(Ze([o,g.pathnameBase])),route:h}),g.pathnameBase!=="/"&&(o=Ze([o,g.pathnameBase]))}return s}function Sl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=am(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let o=l[0],s=o.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,{paramName:f,isOptional:g},h)=>{if(f==="*"){let y=a[h]||"";s=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const x=a[h];return g&&!x?c[f]=void 0:c[f]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function am(e,t=!1,n=!0){We(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function um(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return We(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function nt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function cm(e,t="/"){let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?xn(e):e;return{pathname:n?n.startsWith("/")?n:dm(n,t):t,search:mm(r),hash:hm(l)}}function dm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function yo(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Zc(e){let t=fm(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Jc(e,t,n,r=!1){let l;typeof e=="string"?l=xn(e):(l={...e},H(!l.pathname||!l.pathname.includes("?"),yo("?","pathname","search",l)),H(!l.pathname||!l.pathname.includes("#"),yo("#","pathname","hash",l)),H(!l.search||!l.search.includes("#"),yo("#","search","hash",l)));let o=e===""||l.pathname==="",s=o?"/":l.pathname,a;if(s==null)a=n;else{let g=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),g-=1;l.pathname=h.join("/")}a=g>=0?t[g]:"/"}let u=cm(l,a),c=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}var Ze=e=>e.join("/").replace(/\/\/+/g,"/"),pm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function gm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var qc=["POST","PUT","PATCH","DELETE"];new Set(qc);var vm=["GET",...qc];new Set(vm);var yn=v.createContext(null);yn.displayName="DataRouter";var Ul=v.createContext(null);Ul.displayName="DataRouterState";v.createContext(!1);var ed=v.createContext({isTransitioning:!1});ed.displayName="ViewTransition";var xm=v.createContext(new Map);xm.displayName="Fetchers";var ym=v.createContext(null);ym.displayName="Await";var Ve=v.createContext(null);Ve.displayName="Navigation";var mr=v.createContext(null);mr.displayName="Location";var lt=v.createContext({outlet:null,matches:[],isDataRoute:!1});lt.displayName="Route";var ps=v.createContext(null);ps.displayName="RouteError";function wm(e,{relative:t}={}){H(hr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=v.useContext(Ve),{hash:l,pathname:o,search:s}=gr(e,{relative:t}),a=o;return n!=="/"&&(a=o==="/"?n:Ze([n,o])),r.createHref({pathname:a,search:s,hash:l})}function hr(){return v.useContext(mr)!=null}function Ut(){return H(hr(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(mr).location}var td="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function nd(e){v.useContext(Ve).static||v.useLayoutEffect(e)}function rd(){let{isDataRoute:e}=v.useContext(lt);return e?Tm():jm()}function jm(){H(hr(),"useNavigate() may be used only in the context of a <Router> component.");let e=v.useContext(yn),{basename:t,navigator:n}=v.useContext(Ve),{matches:r}=v.useContext(lt),{pathname:l}=Ut(),o=JSON.stringify(Zc(r)),s=v.useRef(!1);return nd(()=>{s.current=!0}),v.useCallback((u,c={})=>{if(We(s.current,td),!s.current)return;if(typeof u=="number"){n.go(u);return}let f=Jc(u,JSON.parse(o),l,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ze([t,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[t,n,o,l,e])}v.createContext(null);function gr(e,{relative:t}={}){let{matches:n}=v.useContext(lt),{pathname:r}=Ut(),l=JSON.stringify(Zc(n));return v.useMemo(()=>Jc(e,JSON.parse(l),r,t==="path"),[e,l,r,t])}function Nm(e,t){return ld(e,t)}function ld(e,t,n,r,l){var d;H(hr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=v.useContext(Ve),{matches:s}=v.useContext(lt),a=s[s.length-1],u=a?a.params:{},c=a?a.pathname:"/",f=a?a.pathnameBase:"/",g=a&&a.route;{let p=g&&g.path||"";od(c,!g||p.endsWith("*")||p.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${p}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${p}"> to <Route path="${p==="/"?"*":`${p}/*`}">.`)}let h=Ut(),x;if(t){let p=typeof t=="string"?xn(t):t;H(f==="/"||((d=p.pathname)==null?void 0:d.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${p.pathname}" was given in the \`location\` prop.`),x=p}else x=h;let y=x.pathname||"/",j=y;if(f!=="/"){let p=f.replace(/^\//,"").split("/");j="/"+y.replace(/^\//,"").split("/").slice(p.length).join("/")}let S=Yc(e,{pathname:j});We(g||S!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),We(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let m=Pm(S&&S.map(p=>Object.assign({},p,{params:Object.assign({},u,p.params),pathname:Ze([f,o.encodeLocation?o.encodeLocation(p.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?f:Ze([f,o.encodeLocation?o.encodeLocation(p.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:p.pathnameBase])})),s,n,r,l);return t&&m?v.createElement(mr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},m):m}function km(){let e=Rm(),t=gm(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:o},"ErrorBoundary")," or"," ",v.createElement("code",{style:o},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:l},n):null,s)}var Sm=v.createElement(km,null),Cm=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?v.createElement(lt.Provider,{value:this.props.routeContext},v.createElement(ps.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Em({routeContext:e,match:t,children:n}){let r=v.useContext(yn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(lt.Provider,{value:e},n)}function Pm(e,t=[],n=null,r=null,l=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=n==null?void 0:n.errors;if(s!=null){let c=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);H(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),o=o.slice(0,Math.min(o.length,c+1))}let a=!1,u=-1;if(n)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:g,errors:h}=n,x=f.route.loader&&!g.hasOwnProperty(f.route.id)&&(!h||h[f.route.id]===void 0);if(f.route.lazy||x){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,g)=>{let h,x=!1,y=null,j=null;n&&(h=s&&f.route.id?s[f.route.id]:void 0,y=f.route.errorElement||Sm,a&&(u<0&&g===0?(od("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,j=null):u===g&&(x=!0,j=f.route.hydrateFallbackElement||null)));let S=t.concat(o.slice(0,g+1)),m=()=>{let d;return h?d=y:x?d=j:f.route.Component?d=v.createElement(f.route.Component,null):f.route.element?d=f.route.element:d=c,v.createElement(Em,{match:f,routeContext:{outlet:c,matches:S,isDataRoute:n!=null},children:d})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?v.createElement(Cm,{location:n.location,revalidation:n.revalidation,component:y,error:h,children:m(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:r}):m()},null)}function ms(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _m(e){let t=v.useContext(yn);return H(t,ms(e)),t}function Lm(e){let t=v.useContext(Ul);return H(t,ms(e)),t}function bm(e){let t=v.useContext(lt);return H(t,ms(e)),t}function hs(e){let t=bm(e),n=t.matches[t.matches.length-1];return H(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function zm(){return hs("useRouteId")}function Rm(){var r;let e=v.useContext(ps),t=Lm("useRouteError"),n=hs("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Tm(){let{router:e}=_m("useNavigate"),t=hs("useNavigate"),n=v.useRef(!1);return nd(()=>{n.current=!0}),v.useCallback(async(l,o={})=>{We(n.current,td),n.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,{fromRouteId:t,...o}))},[e,t])}var Ra={};function od(e,t,n){!t&&!Ra[e]&&(Ra[e]=!0,We(!1,n))}v.memo(Mm);function Mm({routes:e,future:t,state:n,unstable_onError:r}){return ld(e,void 0,n,r,t)}function Xr(e){H(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Im({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:l,static:o=!1}){H(!hr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),a=v.useMemo(()=>({basename:s,navigator:l,static:o,future:{}}),[s,l,o]);typeof n=="string"&&(n=xn(n));let{pathname:u="/",search:c="",hash:f="",state:g=null,key:h="default"}=n,x=v.useMemo(()=>{let y=nt(u,s);return y==null?null:{location:{pathname:y,search:c,hash:f,state:g,key:h},navigationType:r}},[s,u,c,f,g,h,r]);return We(x!=null,`<Router basename="${s}"> is not able to match the URL "${u}${c}${f}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:v.createElement(Ve.Provider,{value:a},v.createElement(mr.Provider,{children:t,value:x}))}function $m({children:e,location:t}){return Nm(vi(e),t)}function vi(e,t=[]){let n=[];return v.Children.forEach(e,(r,l)=>{if(!v.isValidElement(r))return;let o=[...t,l];if(r.type===v.Fragment){n.push.apply(n,vi(r.props.children,o));return}H(r.type===Xr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),H(!r.props.index||!r.props.children,"An index route cannot have child routes.");let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=vi(r.props.children,o)),n.push(s)}),n}var Zr="get",Jr="application/x-www-form-urlencoded";function Bl(e){return e!=null&&typeof e.tagName=="string"}function Fm(e){return Bl(e)&&e.tagName.toLowerCase()==="button"}function Dm(e){return Bl(e)&&e.tagName.toLowerCase()==="form"}function Om(e){return Bl(e)&&e.tagName.toLowerCase()==="input"}function Am(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Um(e,t){return e.button===0&&(!t||t==="_self")&&!Am(e)}var $r=null;function Bm(){if($r===null)try{new FormData(document.createElement("form"),0),$r=!1}catch{$r=!0}return $r}var Hm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wo(e){return e!=null&&!Hm.has(e)?(We(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jr}"`),null):e}function Wm(e,t){let n,r,l,o,s;if(Dm(e)){let a=e.getAttribute("action");r=a?nt(a,t):null,n=e.getAttribute("method")||Zr,l=wo(e.getAttribute("enctype"))||Jr,o=new FormData(e)}else if(Fm(e)||Om(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||a.getAttribute("action");if(r=u?nt(u,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Zr,l=wo(e.getAttribute("formenctype"))||wo(a.getAttribute("enctype"))||Jr,o=new FormData(a,e),!Bm()){let{name:c,type:f,value:g}=e;if(f==="image"){let h=c?`${c}.`:"";o.append(`${h}x`,"0"),o.append(`${h}y`,"0")}else c&&o.append(c,g)}}else{if(Bl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Zr,r=null,l=Jr,s=e}return o&&l==="text/plain"&&(s=o,o=void 0),{action:r,method:n.toLowerCase(),encType:l,formData:o,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gs(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vm(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&nt(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Qm(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Km(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Ym(e,t,n){let r=await Promise.all(e.map(async l=>{let o=t.routes[l.route.id];if(o){let s=await Qm(o,n);return s.links?s.links():[]}return[]}));return Jm(r.flat(1).filter(Km).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Ta(e,t,n,r,l,o){let s=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,a=(u,c)=>{var f;return n[c].pathname!==u.pathname||((f=n[c].route.path)==null?void 0:f.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return o==="assets"?t.filter((u,c)=>s(u,c)||a(u,c)):o==="data"?t.filter((u,c)=>{var g;let f=r.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(s(u,c)||a(u,c))return!0;if(u.route.shouldRevalidate){let h=u.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((g=n[0])==null?void 0:g.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function Gm(e,t,{includeHydrateFallback:n}={}){return Xm(e.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let o=[l.module];return l.clientActionModule&&(o=o.concat(l.clientActionModule)),l.clientLoaderModule&&(o=o.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(o=o.concat(l.hydrateFallbackModule)),l.imports&&(o=o.concat(l.imports)),o}).flat(1))}function Xm(e){return[...new Set(e)]}function Zm(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Jm(e,t){let n=new Set;return new Set(t),e.reduce((r,l)=>{let o=JSON.stringify(Zm(l));return n.has(o)||(n.add(o),r.push({key:o,link:l})),r},[])}function id(){let e=v.useContext(yn);return gs(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function qm(){let e=v.useContext(Ul);return gs(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var vs=v.createContext(void 0);vs.displayName="FrameworkContext";function sd(){let e=v.useContext(vs);return gs(e,"You must render this element inside a <HydratedRouter> element"),e}function eh(e,t){let n=v.useContext(vs),[r,l]=v.useState(!1),[o,s]=v.useState(!1),{onFocus:a,onBlur:u,onMouseEnter:c,onMouseLeave:f,onTouchStart:g}=t,h=v.useRef(null);v.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let j=m=>{m.forEach(d=>{s(d.isIntersecting)})},S=new IntersectionObserver(j,{threshold:.5});return h.current&&S.observe(h.current),()=>{S.disconnect()}}},[e]),v.useEffect(()=>{if(r){let j=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(j)}}},[r]);let x=()=>{l(!0)},y=()=>{l(!1),s(!1)};return n?e!=="intent"?[o,h,{}]:[o,h,{onFocus:bn(a,x),onBlur:bn(u,y),onMouseEnter:bn(c,x),onMouseLeave:bn(f,y),onTouchStart:bn(g,x)}]:[!1,h,{}]}function bn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function th({page:e,...t}){let{router:n}=id(),r=v.useMemo(()=>Yc(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?v.createElement(rh,{page:e,matches:r,...t}):null}function nh(e){let{manifest:t,routeModules:n}=sd(),[r,l]=v.useState([]);return v.useEffect(()=>{let o=!1;return Ym(e,t,n).then(s=>{o||l(s)}),()=>{o=!0}},[e,t,n]),r}function rh({page:e,matches:t,...n}){let r=Ut(),{manifest:l,routeModules:o}=sd(),{basename:s}=id(),{loaderData:a,matches:u}=qm(),c=v.useMemo(()=>Ta(e,t,u,l,r,"data"),[e,t,u,l,r]),f=v.useMemo(()=>Ta(e,t,u,l,r,"assets"),[e,t,u,l,r]),g=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let y=new Set,j=!1;if(t.forEach(m=>{var p;let d=l.routes[m.route.id];!d||!d.hasLoader||(!c.some(w=>w.route.id===m.route.id)&&m.route.id in a&&((p=o[m.route.id])!=null&&p.shouldRevalidate)||d.hasClientLoader?j=!0:y.add(m.route.id))}),y.size===0)return[];let S=Vm(e,s,"data");return j&&y.size>0&&S.searchParams.set("_routes",t.filter(m=>y.has(m.route.id)).map(m=>m.route.id).join(",")),[S.pathname+S.search]},[s,a,r,l,c,t,e,o]),h=v.useMemo(()=>Gm(f,l),[f,l]),x=nh(f);return v.createElement(v.Fragment,null,g.map(y=>v.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...n})),h.map(y=>v.createElement("link",{key:y,rel:"modulepreload",href:y,...n})),x.map(({key:y,link:j})=>v.createElement("link",{key:y,nonce:n.nonce,...j})))}function lh(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var ad=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ad&&(window.__reactRouterVersion="7.9.3")}catch{}function oh({basename:e,children:t,window:n}){let r=v.useRef();r.current==null&&(r.current=Kp({window:n,v5Compat:!0}));let l=r.current,[o,s]=v.useState({action:l.action,location:l.location}),a=v.useCallback(u=>{v.startTransition(()=>s(u))},[s]);return v.useLayoutEffect(()=>l.listen(a),[l,a]),v.createElement(Im,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:l})}var ud=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,V=v.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:l,reloadDocument:o,replace:s,state:a,target:u,to:c,preventScrollReset:f,viewTransition:g,...h},x){let{basename:y}=v.useContext(Ve),j=typeof c=="string"&&ud.test(c),S,m=!1;if(typeof c=="string"&&j&&(S=c,ad))try{let M=new URL(window.location.href),b=c.startsWith("//")?new URL(M.protocol+c):new URL(c),fe=nt(b.pathname,y);b.origin===M.origin&&fe!=null?c=fe+b.search+b.hash:m=!0}catch{We(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let d=wm(c,{relative:l}),[p,w,k]=eh(r,h),C=uh(c,{replace:s,state:a,target:u,preventScrollReset:f,relative:l,viewTransition:g});function P(M){t&&t(M),M.defaultPrevented||C(M)}let E=v.createElement("a",{...h,...k,href:S||d,onClick:m||o?t:P,ref:lh(x,w),target:u,"data-discover":!j&&n==="render"?"true":void 0});return p&&!j?v.createElement(v.Fragment,null,E,v.createElement(th,{page:d})):E});V.displayName="Link";var ih=v.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:l=!1,style:o,to:s,viewTransition:a,children:u,...c},f){let g=gr(s,{relative:c.relative}),h=Ut(),x=v.useContext(Ul),{navigator:y,basename:j}=v.useContext(Ve),S=x!=null&&mh(g)&&a===!0,m=y.encodeLocation?y.encodeLocation(g).pathname:g.pathname,d=h.pathname,p=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(d=d.toLowerCase(),p=p?p.toLowerCase():null,m=m.toLowerCase()),p&&j&&(p=nt(p,j)||p);const w=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let k=d===m||!l&&d.startsWith(m)&&d.charAt(w)==="/",C=p!=null&&(p===m||!l&&p.startsWith(m)&&p.charAt(m.length)==="/"),P={isActive:k,isPending:C,isTransitioning:S},E=k?t:void 0,M;typeof r=="function"?M=r(P):M=[r,k?"active":null,C?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let b=typeof o=="function"?o(P):o;return v.createElement(V,{...c,"aria-current":E,className:M,ref:f,style:b,to:s,viewTransition:a},typeof u=="function"?u(P):u)});ih.displayName="NavLink";var sh=v.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:l,state:o,method:s=Zr,action:a,onSubmit:u,relative:c,preventScrollReset:f,viewTransition:g,...h},x)=>{let y=fh(),j=ph(a,{relative:c}),S=s.toLowerCase()==="get"?"get":"post",m=typeof a=="string"&&ud.test(a),d=p=>{if(u&&u(p),p.defaultPrevented)return;p.preventDefault();let w=p.nativeEvent.submitter,k=(w==null?void 0:w.getAttribute("formmethod"))||s;y(w||p.currentTarget,{fetcherKey:t,method:k,navigate:n,replace:l,state:o,relative:c,preventScrollReset:f,viewTransition:g})};return v.createElement("form",{ref:x,method:S,action:j,onSubmit:r?u:d,...h,"data-discover":!m&&e==="render"?"true":void 0})});sh.displayName="Form";function ah(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cd(e){let t=v.useContext(yn);return H(t,ah(e)),t}function uh(e,{target:t,replace:n,state:r,preventScrollReset:l,relative:o,viewTransition:s}={}){let a=rd(),u=Ut(),c=gr(e,{relative:o});return v.useCallback(f=>{if(Um(f,t)){f.preventDefault();let g=n!==void 0?n:ar(u)===ar(c);a(e,{replace:g,state:r,preventScrollReset:l,relative:o,viewTransition:s})}},[u,a,c,n,r,t,e,l,o,s])}var ch=0,dh=()=>`__${String(++ch)}__`;function fh(){let{router:e}=cd("useSubmit"),{basename:t}=v.useContext(Ve),n=zm();return v.useCallback(async(r,l={})=>{let{action:o,method:s,encType:a,formData:u,body:c}=Wm(r,t);if(l.navigate===!1){let f=l.fetcherKey||dh();await e.fetch(f,n,l.action||o,{preventScrollReset:l.preventScrollReset,formData:u,body:c,formMethod:l.method||s,formEncType:l.encType||a,flushSync:l.flushSync})}else await e.navigate(l.action||o,{preventScrollReset:l.preventScrollReset,formData:u,body:c,formMethod:l.method||s,formEncType:l.encType||a,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[e,t,n])}function ph(e,{relative:t}={}){let{basename:n}=v.useContext(Ve),r=v.useContext(lt);H(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),o={...gr(e||".",{relative:t})},s=Ut();if(e==null){o.search=s.search;let a=new URLSearchParams(o.search),u=a.getAll("index");if(u.some(f=>f==="")){a.delete("index"),u.filter(g=>g).forEach(g=>a.append("index",g));let f=a.toString();o.search=f?`?${f}`:""}}return(!e||e===".")&&l.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:Ze([n,o.pathname])),ar(o)}function mh(e,{relative:t}={}){let n=v.useContext(ed);H(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=cd("useViewTransitionState"),l=gr(e,{relative:t});if(!n.isTransitioning)return!1;let o=nt(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=nt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Sl(l.pathname,s)!=null||Sl(l.pathname,o)!=null}const hh=()=>{const e=[{time:"3小时前",description:"新增支持 Notion 数据库导出",icon:"🆕"},{time:"1天前",description:"优化移动端适配",icon:"⚡️"},{time:"2天前",description:"上线多语言支持",icon:"🌐"}];return i.jsx("div",{className:"w-full lg:w-80 p-4",children:i.jsxs("div",{className:"bg-neutral-100 rounded-github p-5",children:[i.jsx("h3",{className:"text-sm font-semibold text-neutral-900 mb-4",children:"最新动态"}),i.jsx("ul",{className:"space-y-3 mb-4",children:e.map((t,n)=>i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"text-neutral-500 mr-2 mt-0.5",children:t.icon}),i.jsxs("span",{className:"text-sm text-neutral-600",children:[i.jsxs("span",{className:"text-neutral-500",children:[t.time,"："]}),t.description]})]},n))}),i.jsx("button",{className:"text-sm text-primary hover:text-primary-dark",children:"查看更多更新 →"})]})})},gh=()=>{const e=rd();return i.jsx("div",{className:"min-h-screen bg-neutral-50",children:i.jsxs("section",{id:"hero",className:"mb-16 py-16",children:[i.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[i.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-neutral-900 mb-6",children:"将 Notion 内容转换为响应式网站"}),i.jsx("p",{className:"text-base md:text-lg text-neutral-600 mb-8 max-w-2xl",children:"无需编码，AI 自动转换，轻松分享您的想法与知识。"}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mb-16",children:[i.jsx("button",{onClick:()=>e("/convert"),className:"btn-primary text-sm px-6 py-2 rounded-github font-medium shadow-github",children:"立即开始转换"}),i.jsx("button",{onClick:()=>e("/pricing"),className:"btn-secondary text-sm px-6 py-2 rounded-github font-medium",children:"查看定价"})]})]}),i.jsxs("div",{id:"features",className:"max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4",children:[i.jsxs("div",{className:"card p-6",children:[i.jsx("div",{className:"w-10 h-10 bg-neutral-100 rounded-github flex items-center justify-center mb-4",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}),i.jsx("h3",{className:"text-lg font-semibold mb-2 text-neutral-900",children:"几秒内完成转换"}),i.jsx("p",{className:"text-sm text-neutral-600",children:"几秒钟内将Notion内容转换为网页"})]}),i.jsxs("div",{className:"card p-6",children:[i.jsx("div",{className:"w-10 h-10 bg-neutral-100 rounded-github flex items-center justify-center mb-4",children:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"}),i.jsx("path",{d:"M12 6v6l4 2"})]})}),i.jsx("h3",{className:"text-lg font-semibold mb-2 text-neutral-900",children:"自定义主题"}),i.jsx("p",{className:"text-sm text-neutral-600",children:"自定义主题、颜色和布局"})]}),i.jsxs("div",{className:"card p-6",children:[i.jsx("div",{className:"w-10 h-10 bg-neutral-100 rounded-github flex items-center justify-center mb-4",children:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),i.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),i.jsx("h3",{className:"text-lg font-semibold mb-2 text-neutral-900",children:"数据加密"}),i.jsx("p",{className:"text-sm text-neutral-600",children:"数据加密传输，隐私安全"})]})]})]})})},vh=({onGenerate:e,isProcessing:t})=>{const[n,r]=v.useState(""),[l,o]=v.useState(""),s=u=>{if(u.preventDefault(),!n.trim()){o("请输入Notion页面链接");return}try{new URL(n),o(""),e(n)}catch{o("请输入有效的URL")}},a=()=>{r(""),o("")};return i.jsxs("div",{className:"p-5",children:[i.jsx("h3",{className:"text-lg font-semibold mb-5 text-neutral-900",children:"输入Notion链接"}),i.jsxs("div",{className:"bg-neutral-50 border border-neutral-200 rounded-github p-4 mb-5",children:[i.jsx("h4",{className:"font-medium text-neutral-700 mb-2",children:"准备您的Notion页面"}),i.jsx("p",{className:"text-sm text-neutral-600",children:"确保您的Notion页面链接可以公开访问。请确认页面已设置为公开访问。"})]}),i.jsxs("form",{onSubmit:s,className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"notion-link",className:"block text-sm font-medium text-neutral-700 mb-1",children:"Notion页面链接"}),i.jsxs("div",{className:"relative",children:[i.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500",children:"🔗"}),i.jsx("input",{id:"notion-link",type:"text",value:n,onChange:u=>r(u.target.value),placeholder:"https://www.notion.so/your-page",className:`w-full pl-10 pr-10 py-2 rounded-github border ${l?"border-red-300":"border-neutral-300"} focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`,disabled:t}),n&&i.jsx("button",{type:"button",onClick:a,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700",disabled:t,"aria-label":"清除输入",children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:i.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),l&&i.jsx("div",{className:"mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-github",children:l})]}),i.jsxs("div",{className:"space-y-3 pt-4",children:[i.jsx("button",{type:"submit",disabled:t,className:`w-full py-2 px-4 rounded-github font-medium text-white transition-colors ${t?"bg-primary/70 cursor-not-allowed":"bg-primary hover:bg-primary-dark"}`,children:t?i.jsxs("div",{className:"flex items-center justify-center gap-2",children:[i.jsx("span",{className:"animate-spin",children:"⏳"}),i.jsx("span",{children:"处理中..."})]}):i.jsx("span",{children:"生成预览"})}),i.jsx("button",{type:"button",onClick:()=>e("https://www.notion.so/example-page"),disabled:t,className:`w-full py-2 px-4 rounded-github font-medium transition-colors ${t?"bg-neutral-200 text-neutral-500 cursor-not-allowed":"bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50"}`,children:"试用示例"})]})]}),i.jsxs("div",{className:"mt-6 p-4 bg-neutral-50 border border-neutral-200 rounded-github",children:[i.jsx("h4",{className:"font-medium text-neutral-900 mb-3",children:"操作流程"}),i.jsxs("ol",{className:"text-sm text-neutral-700 space-y-2",children:[i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5",children:"1"}),i.jsx("span",{children:"粘贴您的Notion公开页面链接"})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5",children:"2"}),i.jsx("span",{children:'点击"生成预览"按钮'})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5",children:"3"}),i.jsx("span",{children:"等待AI生成网站预览"})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center mr-2 text-xs font-medium mt-0.5",children:"4"}),i.jsx("span",{children:"查看并导出您的新网站"})]})]})]})]})};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yh=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),Ma=e=>{const t=yh(e);return t.charAt(0).toUpperCase()+t.slice(1)},dd=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),wh=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=v.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:o,iconNode:s,...a},u)=>v.createElement("svg",{ref:u,...jh,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:dd("lucide",l),...!o&&!wh(a)&&{"aria-hidden":"true"},...a},[...s.map(([c,f])=>v.createElement(c,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=(e,t)=>{const n=v.forwardRef(({className:r,...l},o)=>v.createElement(Nh,{ref:o,iconNode:t,className:dd(`lucide-${xh(Ma(e))}`,`lucide-${e}`,r),...l}));return n.displayName=Ma(e),n};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],xi=be("book-open",kh);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ch=be("circle-alert",Sh);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Re=be("circle-check-big",Eh);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],_h=be("copy",Ph);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],qr=be("download",Lh);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Fr=be("eye",bh);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]],Rh=be("file-down",zh);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],fd=be("file-text",Th);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Ia=be("info",Mh);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],jo=be("package",Ih);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Fh=be("share-2",$h);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],In=be("sparkles",Dh),Oh=({previewData:e,aiGuide:t,isLoading:n,onExportClick:r,onShareClick:l})=>{const[o,s]=v.useState("website"),[a,u]=v.useState(0);return No.useEffect(()=>{if(n&&a<100){const c=setTimeout(()=>{u(f=>Math.min(f+Math.floor(Math.random()*15)+5,100))},500);return()=>clearTimeout(c)}},[n,a]),No.useEffect(()=>{n||u(0)},[n]),n?i.jsxs("div",{className:"p-5 border border-neutral-200 rounded-github bg-white",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[i.jsx(Fr,{className:"text-primary",size:24}),i.jsx("h2",{className:"text-xl font-bold text-neutral-900",children:"预览效果"})]}),i.jsxs("div",{className:"flex flex-col items-center justify-center py-16",children:[i.jsx("div",{className:"w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-8",children:i.jsx(In,{className:"w-8 h-8 text-primary"})}),i.jsx("h3",{className:"text-lg font-medium text-neutral-800 mb-4",children:"正在生成预览"}),i.jsx("p",{className:"text-neutral-600 text-center max-w-md mb-6",children:"AI正在分析您的Notion内容并创建网页"}),i.jsx("div",{className:"mt-6 w-full max-w-md h-2 bg-neutral-100 rounded-full overflow-hidden",children:i.jsx("div",{className:"h-full bg-primary rounded-full",style:{width:`${a}%`}})}),i.jsxs("div",{className:"mt-3 text-sm text-neutral-500",children:[a<30&&"正在解析Notion内容...",a>=30&&a<70&&"正在优化页面布局...",a>=70&&"正在生成预览图像..."]})]})]}):e?i.jsxs("div",{className:"p-5 border border-neutral-200 rounded-github bg-white",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[i.jsx(Fr,{className:"text-primary",size:24}),i.jsx("h2",{className:"text-xl font-bold text-neutral-900",children:"预览效果"})]}),i.jsxs("div",{className:"flex flex-wrap items-center justify-between mb-6 gap-4",children:[i.jsx("p",{className:"text-neutral-600",children:"查看转换后的网站效果或AI生成的优化指南"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("button",{onClick:()=>s("website"),className:`px-4 py-2 rounded-github text-sm font-medium ${o==="website"?"bg-primary text-white":"text-neutral-700 border border-neutral-300 hover:bg-neutral-50"}`,children:"网站预览"}),i.jsx("button",{onClick:()=>s("guide"),className:`px-4 py-2 rounded-github text-sm font-medium ${o==="guide"?"bg-primary text-white":"text-neutral-700 border border-neutral-300 hover:bg-neutral-50"}`,disabled:!t,children:"AI指南"})]})]}),i.jsxs("div",{className:"border border-neutral-200 rounded-github overflow-hidden bg-white",children:[i.jsxs("div",{className:"bg-neutral-800 px-4 py-2 flex items-center border-b border-neutral-700",children:[i.jsxs("div",{className:"flex space-x-2",children:[i.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"}),i.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),i.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"})]}),i.jsx("div",{className:"flex-1 text-center text-xs text-neutral-400 truncate px-4",children:"https://ai-notion-preview.com/your-page"}),i.jsx("div",{className:"w-8"})," "]}),i.jsx("div",{className:"bg-white p-6",children:o==="website"?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"bg-primary text-white mb-8 p-8 text-center",children:[i.jsx("h1",{className:"text-2xl font-bold mb-4",children:e.title}),i.jsx("p",{className:"text-lg mb-6 text-white/90 max-w-2xl mx-auto",children:e.description}),i.jsx("button",{className:"bg-white text-primary px-6 py-2 rounded-github font-medium hover:bg-neutral-100",children:"立即开始"})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[i.jsxs("div",{className:"border-2 border-dashed border-primary/20 rounded-github w-full h-60 flex flex-col items-center justify-center p-6",children:[i.jsx("div",{className:"bg-primary/10 text-primary w-12 h-12 rounded-github flex items-center justify-center mb-4",children:i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),i.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),i.jsx("polyline",{points:"21 15 16 10 5 21"})]})}),i.jsx("h3",{className:"text-lg font-medium text-neutral-800 mb-2",children:"特色图片 1"}),i.jsx("p",{className:"text-neutral-600 text-center text-sm",children:"展示您的产品核心功能或优势"})]}),i.jsxs("div",{className:"border-2 border-dashed border-primary/20 rounded-github w-full h-60 flex flex-col items-center justify-center p-6",children:[i.jsx("div",{className:"bg-primary/10 text-primary w-12 h-12 rounded-github flex items-center justify-center mb-4",children:i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),i.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),i.jsx("polyline",{points:"21 15 16 10 5 21"})]})}),i.jsx("h3",{className:"text-lg font-medium text-neutral-800 mb-2",children:"特色图片 2"}),i.jsx("p",{className:"text-neutral-600 text-center text-sm",children:"突出您的产品安全保障或认证"})]})]}),i.jsxs("div",{className:"mb-8",children:[i.jsx("h2",{className:"text-xl font-bold text-neutral-800 mb-6 text-center",children:"关键特性"}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:(e.features||[]).map((c,f)=>i.jsxs("div",{className:"p-5 rounded-github border border-neutral-200 bg-white hover:border-primary/20",children:[i.jsx("div",{className:"bg-primary/10 text-primary w-12 h-12 rounded-github flex items-center justify-center mb-4",children:i.jsx("span",{className:"font-bold text-lg",children:f+1})}),i.jsx("h3",{className:"text-lg font-medium mb-3 text-neutral-800",children:c.title}),i.jsx("p",{className:"text-neutral-600 text-sm",children:c.description||"这个特性可以帮助用户更好地理解产品功能和优势。"})]},c.id||f))})]}),i.jsxs("div",{className:"bg-primary text-white p-8 text-center",children:[i.jsx("h2",{className:"text-xl font-bold mb-4",children:"准备开始了吗？"}),i.jsx("p",{className:"text-lg mb-6 text-white/90",children:"立即加入我们，解锁全部功能"}),i.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[i.jsx("button",{className:"bg-white text-primary px-6 py-2 rounded-github font-medium hover:bg-neutral-100",children:"立即购买"}),i.jsx("button",{className:"bg-transparent border border-white text-white px-6 py-2 rounded-github font-medium hover:bg-white/10",children:"联系销售"})]})]})]}):t?i.jsxs("div",{className:"bg-neutral-50 rounded-github p-5 border border-neutral-200",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[i.jsx("div",{className:"w-10 h-10 bg-white rounded-github flex items-center justify-center text-primary border border-neutral-200",children:i.jsx(In,{className:"w-5 h-5"})}),i.jsx("h3",{className:"text-xl font-medium text-neutral-800",children:"AI优化指南"})]}),i.jsx("div",{className:"space-y-5",children:t.steps.map((c,f)=>i.jsxs("div",{className:"p-5 rounded-github border border-neutral-200 bg-white",children:[i.jsxs("h4",{className:"font-medium text-neutral-800 mb-3 flex items-center gap-3",children:[i.jsx("div",{className:`w-7 h-7 ${c.priority==="high"?"bg-primary/10 text-primary":"bg-neutral-100 text-neutral-600"} rounded-github flex items-center justify-center text-xs font-bold`,children:f+1}),c.title]}),i.jsx("p",{className:"text-neutral-600 text-sm mb-4",children:c.description})]},c.id||f))})]}):i.jsxs("div",{className:"flex flex-col items-center justify-center py-16 text-center bg-neutral-50 rounded-github",children:[i.jsx("div",{className:"bg-white rounded-full p-4 mb-6 border border-neutral-200",children:i.jsx(In,{className:"w-6 h-6 text-neutral-400"})}),i.jsx("h3",{className:"text-lg font-medium text-neutral-800 mb-3",children:"AI指南生成中"}),i.jsx("p",{className:"text-neutral-600 mb-6 text-sm",children:"请稍候，我们正在为您生成详细的优化指南"}),i.jsx("div",{className:"w-40 h-2 bg-neutral-200 rounded-github overflow-hidden",children:i.jsx("div",{className:"h-full w-3/4 bg-primary rounded-github"})})]})})]}),i.jsxs("div",{className:"mt-6 flex flex-wrap justify-end gap-3",children:[i.jsxs("button",{onClick:l,className:"px-4 py-2 border border-neutral-300 rounded-github text-neutral-700 hover:bg-neutral-50 flex items-center gap-2",children:[i.jsx(Fh,{size:16}),"分享预览"]}),i.jsxs("button",{onClick:r,className:"px-4 py-2 bg-primary text-white rounded-github hover:bg-primary-dark flex items-center gap-2",children:[i.jsx(qr,{size:16}),"导出产品包"]})]})]}):i.jsxs("div",{className:"p-5 border border-neutral-200 rounded-github bg-white",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[i.jsx(Fr,{className:"text-primary",size:24}),i.jsx("h2",{className:"text-xl font-bold text-neutral-900",children:"预览效果"})]}),i.jsxs("div",{className:"p-8 border border-neutral-200 rounded-github text-center",children:[i.jsx("div",{className:"bg-primary/5 rounded-full p-5 mb-6 inline-block",children:i.jsx(Fr,{className:"w-10 h-10 text-primary"})}),i.jsx("h3",{className:"text-lg font-medium text-neutral-800 mb-4",children:"预览将显示在这里"}),i.jsx("p",{className:"text-neutral-600 max-w-md mx-auto mb-6",children:"输入Notion链接后，您将在此处看到生成的网页预览。"}),i.jsxs("div",{className:"bg-neutral-50 p-4 rounded-github border border-neutral-200 text-neutral-600 max-w-md mx-auto",children:[i.jsxs("p",{className:"flex items-center gap-2 mb-2 font-medium text-primary",children:[i.jsx(In,{size:16,className:"text-primary"}),"智能提示"]}),i.jsx("p",{className:"text-sm",children:"预览内容将完全匹配您的Notion页面结构和设计，并由AI自动优化布局和样式。"})]})]})]})},Ah=({guide:e,isLoading:t,onShowNotification:n})=>{var a,u;const[r,l]=v.useState(""),o=async()=>{if(!(!e||!e.steps))try{let c=`# ${e.title}

${e.summary}

`;e.steps.forEach((f,g)=>{c+=`## ${g+1}. ${f.title}

${f.description}

`}),await navigator.clipboard.writeText(c),l("copied"),n("指南已复制到剪贴板!","success"),setTimeout(()=>l(""),2e3)}catch{l("error"),n("复制失败，请重试","error"),setTimeout(()=>l(""),2e3)}},s=()=>{n("PDF下载功能将在后续版本中实现","info")};return t?i.jsx("div",{className:"w-full max-w-4xl mx-auto p-8",children:i.jsxs("div",{className:"card-glass flex flex-col items-center justify-center py-12 relative overflow-hidden rounded-3xl shadow-card animate-float-small border border-neutral-100",children:[i.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl","aria-hidden":"true"}),i.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl","aria-hidden":"true"}),i.jsx("div",{className:"absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none","aria-hidden":"true"}),i.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[i.jsxs("div",{className:"relative mb-10 group",children:[i.jsx("div",{className:"absolute inset-0 bg-primary rounded-full blur-lg opacity-30 group-hover:scale-110 transition-transform duration-700"}),i.jsx("div",{className:"relative w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-pulse group-hover:shadow-xl transition-all duration-700",children:i.jsx(In,{className:"w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300"})})]}),i.jsx("div",{className:"w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full mb-10 shadow-lg animate-spin relative",children:i.jsx("span",{className:"absolute -inset-1.5 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow"})}),i.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary",children:"正在生成您的Notion指南"}),i.jsx("p",{className:"text-gray-600 text-lg mb-2",children:"我们的AI正在为您创建个性化模板"}),i.jsx("p",{className:"text-gray-500",children:"这通常需要几秒钟时间"}),i.jsx("div",{className:"mt-10 w-80 h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner",children:i.jsx("div",{className:"h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-md animate-shine"})}),i.jsx("div",{className:"bubble-tr absolute top-16 right-16 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small hover:shadow-md transition-all duration-300",children:i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx("span",{className:"text-primary font-bold",children:"✨"}),i.jsx("span",{children:"AI生成中"})]})}),i.jsx("div",{className:"bubble-bl absolute bottom-16 left-16 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small",style:{animationDelay:"0.3s"},"hover:shadow-md":!0,"transition-all":!0,"duration-300":!0,children:i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx("span",{className:"text-secondary font-bold",children:"📝"}),i.jsx("span",{children:"准备内容"})]})})]})]})}):e?i.jsx("div",{className:"w-full max-w-4xl mx-auto p-8",children:i.jsxs("div",{className:"card-glass rounded-3xl shadow-card overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-card-hover animate-float-small relative group",children:[i.jsx("div",{className:"absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700","aria-hidden":"true"}),i.jsxs("div",{className:"bg-gradient-to-r from-primary to-secondary p-6 flex flex-col sm:flex-row justify-between items-center gap-4 relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 backdrop-blur-sm"}),i.jsxs("div",{className:"relative z-10 flex items-center group",children:[i.jsx("div",{className:"w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 transform transition-transform duration-300 hover:scale-110",children:i.jsx(xi,{className:"w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300"})}),i.jsx("h2",{className:"text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300",children:"指南预览"})]}),i.jsxs("div",{className:"relative z-10 flex space-x-4",children:[i.jsxs("button",{onClick:o,className:`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${r==="copied"?"bg-success text-white shadow-lg":"bg-white/20 text-white hover:bg-white/30 shadow-md"}`,children:[i.jsx("span",{className:"relative z-10",children:r==="copied"?"已复制":"复制"}),r!=="copied"&&i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"}),i.jsx(_h,{className:"w-4 h-4"})]}),r==="copied"&&i.jsx(Re,{className:"w-4 h-4"})]}),i.jsxs("button",{onClick:s,className:"flex items-center space-x-2 px-6 py-3 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-md relative overflow-hidden group",children:[i.jsx("span",{className:"relative z-10",children:"PDF"}),i.jsx("span",{className:"absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),i.jsx(Rh,{className:"w-4 h-4 group-hover:scale-110 transition-transform duration-300"})]})]})]}),i.jsxs("div",{className:"p-8 relative",children:[i.jsx("div",{className:"absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none","aria-hidden":"true"}),i.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl","aria-hidden":"true"}),i.jsx("div",{className:"absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl","aria-hidden":"true"}),i.jsxs("div",{className:"mb-12 text-center relative",children:[i.jsxs("div",{className:"inline-block relative group",children:[i.jsx("div",{className:"absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),i.jsx("h1",{className:"text-4xl font-bold text-gray-800 mb-6 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary group-hover:scale-102 transition-transform duration-500",children:e.title}),i.jsx("div",{className:"absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"})]}),i.jsx("div",{className:"flex justify-center mt-8",children:i.jsx("div",{className:"h-1 w-32 bg-gradient-to-r from-primary/70 to-secondary/70 rounded-full animate-fade-in"})})]}),i.jsxs("div",{className:"mb-12 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-card card-hover animate-float-small relative overflow-hidden group",children:[i.jsx("span",{className:"absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-700"}),i.jsxs("div",{className:"relative z-10",children:[i.jsxs("h3",{className:"text-xl font-semibold text-gray-800 mb-5 flex items-center group-hover:text-primary transition-colors duration-300",children:[i.jsx(fd,{className:"w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform duration-300"}),"目录"]}),i.jsx("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:(a=e.steps)==null?void 0:a.map((c,f)=>i.jsxs("li",{className:"flex items-start p-4 rounded-xl hover:bg-white/80 transition-all duration-300 group card-hover",children:[i.jsxs("span",{className:"text-primary font-bold mr-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0",children:[f+1,"."]}),i.jsx("span",{className:"text-gray-700 group-hover:text-primary transition-colors duration-300",children:c.title})]},c.id||f))})]})]}),i.jsx("div",{className:"space-y-10",children:(u=e.steps)==null?void 0:u.map((c,f)=>i.jsxs("div",{id:`section-${f+1}`,className:"bubble-tr p-7 bg-gradient-to-br from-white to-primary/5 rounded-2xl border border-gray-100 shadow-card transition-all duration-500 hover:shadow-card-hover card-hover relative overflow-hidden group animate-float-small",style:{animationDelay:`${f*.1}s`},children:[i.jsx("span",{className:"absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-700"}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),i.jsxs("div",{className:"relative z-10",children:[i.jsxs("h3",{className:"text-2xl font-bold text-gray-800 mb-5 flex items-center group-hover:text-primary/90 transition-colors duration-300",children:[i.jsx("span",{className:"mr-3 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20",children:f+1}),c.title]}),i.jsx("div",{className:"prose prose-indigo max-w-none",children:c.description.split(`
`).map((g,h)=>i.jsx("p",{className:"mb-4 text-gray-600 leading-relaxed animate-fade-in group-hover:text-gray-700 transition-colors duration-300",children:g},h))})]})]},c.id||f))})]}),i.jsx("div",{className:"h-2 bg-gradient-to-r from-primary to-secondary"})]})}):i.jsx("div",{className:"w-full max-w-4xl mx-auto p-8",children:i.jsxs("div",{className:"card-glass rounded-3xl p-12 text-center relative overflow-hidden shadow-card animate-float-small border border-neutral-100",children:[i.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl","aria-hidden":"true"}),i.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl","aria-hidden":"true"}),i.jsx("div",{className:"absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none","aria-hidden":"true"}),i.jsxs("div",{className:"relative z-10",children:[i.jsx("div",{className:"inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mb-8 shadow-lg transform transition-transform duration-500 hover:scale-110 group",children:i.jsx(xi,{className:"w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300"})}),i.jsx("h3",{className:"text-3xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary",children:"您的指南即将诞生"}),i.jsx("p",{className:"text-gray-600 mb-8 text-lg max-w-md mx-auto",children:"输入您的需求，我们将为您创建一个完整的Notion模板指南"}),i.jsx("div",{className:"bubble-tl bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto border border-white/50 shadow-card transform transition-all duration-500 hover:shadow-card-hover animate-float-small group hover:border-primary/20 hover:bg-white/90",style:{animationDelay:"0.2s"},children:i.jsxs("p",{className:"text-gray-700",children:[i.jsx("span",{className:"font-semibold text-primary group-hover:text-primary/90 transition-colors duration-300",children:"提示:"}),' 描述您想要的指南类型，例如"项目管理模板"或"个人任务跟踪器"']})}),i.jsx("div",{className:"bubble-tr absolute top-16 right-16 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small hover:shadow-md transition-all duration-300",children:i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx("span",{className:"text-primary font-bold",children:"💡"}),i.jsx("span",{children:"输入需求"})]})}),i.jsx("div",{className:"bubble-bl absolute bottom-16 left-16 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small",style:{animationDelay:"0.3s"},"hover:shadow-md":!0,"transition-all":!0,"duration-300":!0,children:i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx("span",{className:"text-secondary font-bold",children:"🚀"}),i.jsx("span",{children:"快速生成"})]})})]})]})})},Uh=({exportPackage:e,isProcessing:t})=>{const[n,r]=v.useState(null),l=(s,a="success")=>{r({message:s,type:a}),setTimeout(()=>r(null),3e3)},o=()=>{if(e&&e.htmlFile)try{const s=new Blob([e.htmlFile.content],{type:e.htmlFile.type}),a=URL.createObjectURL(s),u=document.createElement("a");u.href=a,u.download=e.htmlFile.name,document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(a),l("下载已成功开始！","success")}catch(s){console.error("下载文件失败:",s),l("下载文件失败，请稍后重试。","error")}else l("没有可下载的包。","error")};return t?i.jsxs("div",{className:"card-glass p-8 rounded-3xl shadow-card flex items-center justify-center min-h-[400px] animate-float-small relative overflow-hidden border border-neutral-100",children:[i.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl","aria-hidden":"true"}),i.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl","aria-hidden":"true"}),i.jsx("div",{className:"absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none","aria-hidden":"true"}),i.jsxs("div",{className:"flex flex-col items-center relative z-10",children:[i.jsxs("div",{className:"w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full mb-8 flex items-center justify-center animate-spin relative",children:[i.jsx("span",{className:"absolute -inset-1.5 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow"}),i.jsx(jo,{className:"text-primary",size:28})]}),i.jsx("p",{className:"text-neutral-700 font-medium text-center text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary",children:"正在准备您的导出包..."}),i.jsx("p",{className:"text-neutral-500 text-sm mt-3 max-w-xs text-center",children:"编译所有资源可能需要一些时间，请稍候"}),i.jsx("div",{className:"bubble-tr absolute top-10 right-10 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small hover:shadow-md transition-all duration-300",children:i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx("span",{className:"text-primary font-bold",children:"📦"}),i.jsx("span",{children:"打包中"})]})}),i.jsx("div",{className:"bubble-bl absolute bottom-10 left-10 bg-white/50 p-3 rounded-lg text-xs text-neutral-500 shadow-sm backdrop-blur-sm animate-float-small",style:{animationDelay:"0.3s"},"hover:shadow-md":!0,"transition-all":!0,"duration-300":!0,children:i.jsxs("div",{className:"flex items-center gap-1.5",children:[i.jsx("span",{className:"text-secondary font-bold",children:"⚡"}),i.jsx("span",{children:"处理中"})]})})]})]}):e?i.jsxs("div",{className:"card-glass rounded-3xl overflow-hidden shadow-card bg-white hover:shadow-card-hover transition-all duration-500 animate-float-small relative group border border-neutral-100",children:[i.jsx("div",{className:"absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700","aria-hidden":"true"}),i.jsxs("div",{className:"flex flex-wrap items-center justify-between bg-gradient-to-r from-primary/5 to-secondary/5 px-8 py-6 border-b border-neutral-100/50 gap-4",children:[i.jsxs("div",{className:"flex items-center gap-4 group",children:[i.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300",children:i.jsx(jo,{size:24,"group-hover:scale-110":!0,"transition-transform":!0,"duration-300":!0})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-medium text-neutral-800 text-xl group-hover:text-primary transition-colors duration-300",children:"导出产品包"}),i.jsx("p",{className:"text-sm text-neutral-500",children:"完整的网站文件和使用指南"})]})]}),i.jsxs("button",{onClick:o,className:`px-7 py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${e!=null&&e.htmlFile?"bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg hover:from-primary/90 hover:to-secondary/90 transform hover:-translate-y-1 card-hover relative overflow-hidden group":"bg-neutral-100 text-neutral-400 cursor-not-allowed"}`,disabled:!(e!=null&&e.htmlFile),children:[(e==null?void 0:e.htmlFile)&&i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),i.jsxs("span",{className:"relative z-10",children:[i.jsx(qr,{size:18}),"立即下载"]}),i.jsx("span",{className:"absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-700"})]}),!(e!=null&&e.htmlFile)&&i.jsxs(i.Fragment,{children:[i.jsx(qr,{size:18}),"立即下载"]})]})]}),i.jsxs("div",{className:"p-8 relative",children:[i.jsx("div",{className:"absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none","aria-hidden":"true"}),i.jsxs("div",{className:"mb-10 relative",children:[i.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl","aria-hidden":"true"}),i.jsx("div",{className:"absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl","aria-hidden":"true"}),i.jsx("div",{className:"absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-xl"}),i.jsx("h2",{className:"text-3xl font-bold text-neutral-800 mb-4 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary",children:"您的完整模板包"}),i.jsx("p",{className:"text-neutral-600 text-lg max-w-3xl relative z-10",children:"包含实现您的模板所需的所有文件和文档"})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-10",children:[i.jsxs("div",{className:"card-glass rounded-2xl p-6 bg-white/90 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 card-hover animate-float-small group hover:border-primary/20",children:[i.jsxs("div",{className:"flex items-start gap-4 mb-5",children:[i.jsx("div",{className:"bubble-tl bg-gradient-to-br from-primary/10 to-primary/20 text-primary rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300",children:i.jsx(fd,{size:24,"group-hover:scale-110":!0,"transition-transform":!0,"duration-300":!0})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-neutral-800 text-xl group-hover:text-primary transition-colors duration-300",children:"模板文件"}),i.jsx("p",{className:"text-neutral-600 text-sm mt-1",children:"实现网站所需的所有源代码文件"})]})]}),i.jsxs("ul",{className:"space-y-3",children:[i.jsxs("li",{className:"flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300",children:[i.jsx("span",{className:"w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300",children:i.jsx(Re,{size:14})}),i.jsx("span",{className:"text-neutral-700",children:"HTML/CSS/JS 源文件"})]}),i.jsxs("li",{className:"flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300",children:[i.jsx("span",{className:"w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300",children:i.jsx(Re,{size:14})}),i.jsx("span",{className:"text-neutral-700",children:"资源文件（图像、图标）"})]}),i.jsxs("li",{className:"flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300",children:[i.jsx("span",{className:"w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300",children:i.jsx(Re,{size:14})}),i.jsx("span",{className:"text-neutral-700",children:"配置文件"})]})]})]}),i.jsxs("div",{className:"card-glass rounded-2xl p-6 bg-white/90 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 card-hover animate-float-small group hover:border-secondary/20",style:{animationDelay:"0.2s"},children:[i.jsxs("div",{className:"flex items-start gap-4 mb-5",children:[i.jsx("div",{className:"bubble-tl bg-gradient-to-br from-secondary/10 to-secondary/20 text-secondary rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:from-secondary/20 group-hover:to-secondary/30 transition-all duration-300",children:i.jsx(xi,{size:24,"group-hover:scale-110":!0,"transition-transform":!0,"duration-300":!0})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-neutral-800 text-xl group-hover:text-secondary transition-colors duration-300",children:"使用指南"}),i.jsx("p",{className:"text-neutral-600 text-sm mt-1",children:"完整的用户指南和操作说明"})]})]}),i.jsxs("ul",{className:"space-y-3",children:[i.jsxs("li",{className:"flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300",children:[i.jsx("span",{className:"w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300",children:i.jsx(Re,{size:14})}),i.jsx("span",{className:"text-neutral-700",children:"实现指南"})]}),i.jsxs("li",{className:"flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300",children:[i.jsx("span",{className:"w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300",children:i.jsx(Re,{size:14})}),i.jsx("span",{className:"text-neutral-700",children:"自定义技巧"})]}),i.jsxs("li",{className:"flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300",children:[i.jsx("span",{className:"w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300",children:i.jsx(Re,{size:14})}),i.jsx("span",{className:"text-neutral-700",children:"常见问题解答和故障排除"})]})]})]})]}),i.jsx("div",{className:"bubble-bl border border-primary/20 rounded-2xl p-7 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-card transition-all duration-300 hover:shadow-card-hover animate-float-small group hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 transition-all duration-500",style:{animationDelay:"0.3s"},children:i.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-5",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-neutral-800 mb-1 text-xl group-hover:text-primary transition-colors duration-300",children:"已准备好下载"}),i.jsx("p",{className:"text-neutral-600",children:"您的包已准备就绪，可以立即使用"})]}),i.jsxs("button",{onClick:o,className:"px-8 py-3.5 rounded-xl font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 animate-float relative overflow-hidden group",children:[i.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),i.jsxs("span",{className:"relative z-10",children:[i.jsx(qr,{size:18}),"立即下载"]}),i.jsx("span",{className:"absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-700"})]})]})})]}),n&&i.jsxs("div",{className:`fixed bottom-5 right-5 z-50 transform transition-all duration-500 translate-y-0 opacity-100 flex items-center gap-3 p-4 rounded-2xl shadow-lg backdrop-blur-sm ${n.type==="success"?"bg-success text-white":n.type==="error"?"bg-error text-white":"bg-info text-white"}`,children:[n.type==="success"?i.jsx(Re,{size:18}):n.type==="error"?i.jsx(Ch,{size:18}):i.jsx(Ia,{size:18}),i.jsx("span",{className:"font-medium",children:n.message})]})]}):i.jsxs("div",{className:"card-glass p-8 rounded-3xl shadow-card flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden animate-float-small border border-neutral-100",children:[i.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl","aria-hidden":"true"}),i.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl","aria-hidden":"true"}),i.jsx("div",{className:"absolute top-1/2 left-1/2 w-full h-full bg-grid opacity-5 pointer-events-none","aria-hidden":"true"}),i.jsx("div",{className:"bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full w-20 h-20 flex items-center justify-center mb-8 relative z-10 shadow-md group hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 hover:shadow-lg",children:i.jsx(jo,{className:"text-primary",size:32,"group-hover:scale-110":!0,"transition-transform":!0,"duration-300":!0})}),i.jsx("h3",{className:"text-2xl font-semibold text-neutral-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative z-10",children:"导出包即将准备就绪"}),i.jsx("p",{className:"text-neutral-600 text-center max-w-md relative z-10 mb-8",children:"完成指南生成后，您将可以获取完整的导出包。"}),i.jsxs("div",{className:"bubble-tl bg-white/80 backdrop-blur-sm px-6 py-5 rounded-xl shadow-card border border-neutral-100 text-sm text-neutral-700 relative z-10 animate-float-small group hover:shadow-card-hover transition-all duration-300 hover:border-primary/20",style:{animationDelay:"0.2s"},children:[i.jsxs("div",{className:"flex items-center gap-2 text-primary mb-4",children:[i.jsx(Ia,{size:18,className:"text-primary group-hover:scale-110 transition-transform duration-300"}),i.jsx("span",{className:"font-medium text-base group-hover:text-primary transition-colors duration-300",children:"包含内容"})]}),i.jsxs("ul",{className:"space-y-3",children:[i.jsxs("li",{className:"flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300",children:[i.jsx("span",{className:"w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300",children:i.jsx(Re,{size:14})}),i.jsx("span",{children:"完整的模板文件"})]}),i.jsxs("li",{className:"flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300",children:[i.jsx("span",{className:"w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300",children:i.jsx(Re,{size:14})}),i.jsx("span",{children:"用户指南文档"})]}),i.jsxs("li",{className:"flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300",children:[i.jsx("span",{className:"w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300",children:i.jsx(Re,{size:14})}),i.jsx("span",{children:"实施说明"})]})]})]})]})},Bh=e=>{try{const t=/([a-zA-Z0-9]{32}|[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12})/,n=e.match(t);return!n&&e.includes("example-page")?"example-page-id":n?n[1]:null}catch(t){return console.error("Error extracting Notion page ID:",t),null}},pd=async e=>{try{return await new Promise(t=>setTimeout(t,1e3)),{title:"Notion 示例页面",coverImage:"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",content:[{id:"1",type:"heading",content:"欢迎使用 AI Notion 转换工具"},{id:"2",type:"paragraph",content:"这是一个示例 Notion 页面内容。通过我们的工具，您可以将 Notion 文档转换为精美的响应式网站，无需任何编码知识。"},{id:"3",type:"image",content:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"},{id:"4",type:"heading",content:"主要特性"},{id:"5",type:"list",content:"快速转换：几秒钟内完成转换过程"},{id:"6",type:"list",content:"完全响应式：适配各种设备屏幕"},{id:"7",type:"list",content:"AI优化：智能生成SEO友好的内容"},{id:"8",type:"callout",content:"提示：确保您的Notion页面已设置为公开访问。"}]}}catch(t){throw console.error("Error fetching Notion content:",t),new Error("获取Notion内容失败，请检查页面ID是否正确且页面已公开。")}},md=(e,t)=>{try{const r={...{primaryColor:"#4F46E5",secondaryColor:"#8B5CF6",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, sans-serif",fontSize:"16px",backgroundColor:"#ffffff",textColor:"#1F2937",accentColor:"#10B981"},...t},l=Hh(e,r),o=Wh(e);return{title:e.title||"Notion 转换页面",description:"通过 AI Notion 转换工具生成的精美网页",imageUrl:e.coverImage||Vh(),features:o,htmlContent:l}}catch(n){throw console.error("Error generating HTML:",n),new Error("生成HTML预览失败")}},Hh=(e,t)=>{const n=`
    <style>
      :root {
        --primary-color: ${t.primaryColor};
        --secondary-color: ${t.secondaryColor};
        --font-family: ${t.fontFamily};
        --font-size: ${t.fontSize};
        --background-color: ${t.backgroundColor};
        --text-color: ${t.textColor};
        --accent-color: ${t.accentColor};
      }
      
      body {
        font-family: var(--font-family);
        font-size: var(--font-size);
        color: var(--text-color);
        background-color: var(--background-color);
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }
      
      h1, h2, h3, h4, h5, h6 {
        color: var(--primary-color);
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
      
      p {
        margin-bottom: 1.5rem;
      }
      
      img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 2rem 0;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      
      ul, ol {
        margin-bottom: 1.5rem;
        padding-left: 1.5rem;
      }
      
      li {
        margin-bottom: 0.5rem;
      }
      
      .callout {
        background-color: rgba(16, 185, 129, 0.1);
        border-left: 4px solid var(--accent-color);
        padding: 1rem;
        border-radius: 0 8px 8px 0;
        margin: 1.5rem 0;
      }
      
      .quote {
        font-style: italic;
        border-left: 4px solid var(--secondary-color);
        padding-left: 1rem;
        margin: 1.5rem 0;
        color: #4B5563;
      }
      
      .cover-image {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 0;
        margin: 0 0 2rem 0;
      }
    </style>
  `;let r="";return e.coverImage&&(r+=`<img src="${e.coverImage}" alt="Cover" class="cover-image">`),r+=`<h1>${e.title}</h1>`,e.content.forEach(l=>{switch(l.type){case"heading":r+=`<h2>${l.content}</h2>`;break;case"paragraph":r+=`<p>${l.content}</p>`;break;case"image":r+=`<img src="${l.content}" alt="Content image">`;break;case"list":r+=`<li>${l.content}</li>`;break;case"callout":r+=`<div class="callout">${l.content}</div>`;break;case"quote":r+=`<div class="quote">${l.content}</div>`;break;default:r+=`<p>${l.content}</p>`}}),`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${e.title||"Notion 转换页面"}</title>
      ${n}
    </head>
    <body>
      <div class="container">
        ${r}
      </div>
    </body>
    </html>
  `},Wh=e=>{const t=[];return e.content.some(n=>n.type==="image")&&t.push({id:"feature-1",title:"精美图片展示",description:"页面包含高质量图片，提升视觉体验"}),e.content.some(n=>n.type==="list")&&t.push({id:"feature-2",title:"结构化信息列表",description:"内容采用列表形式组织，便于阅读和理解"}),e.content.some(n=>n.type==="callout")&&t.push({id:"feature-3",title:"重要提示突出显示",description:"关键信息通过提示框突出显示"}),e.coverImage&&t.push({id:"feature-4",title:"专业封面图片",description:"页面配有专业封面图片，提升整体美观度"}),t.length<3&&[{id:"feature-default-1",title:"精美响应式设计",description:"适配各种屏幕尺寸的响应式布局"},{id:"feature-default-2",title:"易于阅读排版",description:"优化的字体和间距，提升阅读体验"},{id:"feature-default-3",title:"AI优化内容",description:"通过AI技术优化的内容展示"},{id:"feature-default-4",title:"快速加载性能",description:"优化的代码结构，确保快速加载"},{id:"feature-default-5",title:"SEO友好结构",description:"符合搜索引擎优化的页面结构"}].forEach(r=>{!t.some(l=>l.title===r.title)&&t.length<5&&t.push(r)}),t.slice(0,5)},Vh=()=>{const e=["https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"];return e[Math.floor(Math.random()*e.length)]},hd=async e=>{try{return await new Promise(o=>setTimeout(o,1500)),{htmlFile:{name:`${e.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").trim()}-website-package.zip`,type:"application/zip",content:"#"},assets:[],metadata:{exportDate:new Date().toISOString(),version:"1.0.0",source:"AI Notion Converter",title:e.title,description:e.description}}}catch(t){throw console.error("Error creating export package:",t),new Error("创建导出包失败，请稍后重试。")}},gd=async e=>{try{return await new Promise(r=>setTimeout(r,1500)),{title:"AI 网站优化指南",steps:Qh(e).map((r,l)=>({id:`step-${l+1}`,title:r.title,description:r.content,priority:l<3?"high":"medium"})),summary:"根据您的内容分析，我们提供了一系列优化建议，帮助您创建更加专业和吸引人的网站。",timestamp:new Date().toISOString()}}catch(t){throw console.error("Error generating AI guide:",t),new Error("生成AI指南失败，请稍后重试。")}},Qh=e=>{const t=[];return t.push({title:"页面结构优化",content:Kh(e)}),t.push({title:"内容排版",content:Yh(e)}),t.push({title:"响应式设计",content:"确保在移动设备上的良好显示效果，优化触控体验。建议使用弹性布局和响应式图像。"}),t.push({title:"SEO优化",content:Gh(e)}),t.push({title:"互动元素",content:"考虑添加更多互动元素，如悬停效果、平滑滚动和简单动画，提升用户体验。"}),t},Kh=e=>{const t=e.content.some(o=>o.type==="image"),n=e.content.some(o=>o.type==="list"),r=e.content.some(o=>o.type==="heading");let l=[];return t||l.push("添加相关图片可以提高页面吸引力和信息传达效率。"),n||l.push("考虑使用列表来组织信息，使其更易于阅读和理解。"),(!r||e.content.filter(o=>o.type==="heading").length<2)&&l.push("增加更多的标题层级，帮助用户快速浏览和理解内容结构。"),l.length===0?"页面结构良好，建议保持当前的组织方式。":l.join(" ")},Yh=e=>{const t=e.content.filter(n=>n.type==="paragraph").length;return t===0?"建议添加详细的段落内容，为用户提供更多有价值的信息。":t<3?"考虑增加更多的内容段落，使页面更加丰富和全面。":"内容排版合理，建议使用一致的字体样式和间距，提高可读性。"},Gh=e=>{const t=e.title.length,n=e.title.toLowerCase().includes("notion")||e.title.toLowerCase().includes("指南")||e.title.toLowerCase().includes("教程");let r=[];return(t<10||t>70)&&r.push("标题长度建议在10-70个字符之间，以获得更好的搜索引擎显示效果。"),n||r.push("考虑在标题中包含相关关键词，提高搜索引擎优化效果。"),r.length===0?"SEO表现良好，建议添加合适的元描述和关键词标签。":r.join(" ")},Xh=e=>{try{const t=/([a-zA-Z0-9]{32})/,n=e.match(t);return n&&n[1]?n[1]:null}catch(t){return console.error("提取Notion页面ID失败:",t),null}},Zh=()=>{const[e]=v.useState(""),[t,n]=v.useState(null),[r,l]=v.useState(null),[o,s]=v.useState(null),[a,u]=v.useState(!1),{showNotification:c}=v.useContext(xs),f=async()=>{if(!e){c("请输入Notion链接","warning");return}u(!0);try{const g=Xh(e);if(!g){c("无效的Notion链接，请检查后重试。","error"),u(!1);return}c("正在获取Notion内容...","info");const h=await pd(g),x=md(h);n(x),c("正在生成AI优化指南...","info");const y=await gd(h);l(y),c("正在准备导出包...","info");const j=await hd(x);s(j),c("转换成功！您可以预览网站和导出文件。","success")}catch(g){console.error("Error generating preview:",g),c("转换失败，请检查Notion链接是否正确并再次尝试。","error")}finally{u(!1)}};return i.jsxs("div",{children:[i.jsx("h2",{className:"text-2xl font-bold mb-8 text-neutral-900",children:"转换Notion文档"}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12",children:[i.jsx("div",{className:"card",children:i.jsx(vh,{onGenerate:f,isProcessing:a})}),i.jsx("div",{className:"card",children:i.jsx(Oh,{previewData:t,aiGuide:r,isLoading:a&&!t})})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[i.jsx("div",{className:"card",children:i.jsx(Ah,{guide:r,isLoading:a&&!r,onShowNotification:c})}),i.jsx("div",{className:"card",children:i.jsx(Uh,{exportPackage:o,isProcessing:a&&!o})})]})]})},Jh=()=>{const{showNotification:e}=v.useContext(xs);return i.jsxs("div",{id:"pricing",className:"py-20 px-4 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl mb-16 animate-fade-in relative overflow-hidden shadow-card",children:[i.jsxs("div",{className:"absolute inset-0 -z-10",children:[i.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"}),i.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl animate-pulse-slow",style:{animationDelay:"1s"}}),i.jsx("div",{className:"absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow",style:{animationDelay:"2s"}})]}),i.jsxs("div",{className:"max-w-6xl mx-auto",children:[i.jsx("h2",{className:"text-4xl font-bold text-center mb-16 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient",children:"简单透明的定价方案"}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[i.jsxs("div",{className:"bg-white rounded-2xl shadow-card p-8 border border-neutral-100 hover:shadow-card-hover transition-all duration-500 animate-float card-hover card-pop relative group",children:[i.jsx("span",{className:"absolute -inset-0.5 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700"}),i.jsxs("div",{className:"relative z-10",children:[i.jsxs("div",{className:"mb-6",children:[i.jsx("h3",{className:"text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300",children:"免费版"}),i.jsx("p",{className:"text-gray-500",children:"适合个人使用"})]}),i.jsxs("div",{className:"mb-6",children:[i.jsx("span",{className:"text-4xl font-bold",children:"¥0"}),i.jsx("span",{className:"text-gray-500",children:"/月"})]}),i.jsxs("ul",{className:"space-y-3 mb-8",children:[i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"text-green-500 mr-2 mt-1",children:"✓"}),i.jsx("span",{children:"最多转换 5 个 Notion 页面"})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"text-green-500 mr-2 mt-1",children:"✓"}),i.jsx("span",{children:"基础自定义选项"})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"text-green-500 mr-2 mt-1",children:"✓"}),i.jsx("span",{children:"HTML 导出"})]}),i.jsxs("li",{className:"flex items-start text-gray-400",children:[i.jsx("span",{className:"mr-2 mt-1",children:"✗"}),i.jsx("span",{children:"高级 AI 指南"})]}),i.jsxs("li",{className:"flex items-start text-gray-400",children:[i.jsx("span",{className:"mr-2 mt-1",children:"✗"}),i.jsx("span",{children:"自定义域名"})]})]}),i.jsx("button",{onClick:()=>e("您已在使用免费版","info"),className:"w-full py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary/5 transition-colors duration-300 group-hover:shadow-sm",children:"开始使用"})]})]}),i.jsxs("div",{className:"bg-white rounded-2xl shadow-card p-8 border-2 border-primary relative hover:shadow-card-hover transition-all duration-500 animate-float card-hover card-pop scale-105 transform",style:{animationDelay:"0.2s"},children:[i.jsx("span",{className:"absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-30"}),i.jsx("div",{className:"absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-4 rounded-full shadow-md",children:"最受欢迎"}),i.jsxs("div",{className:"relative z-10",children:[i.jsxs("div",{className:"mb-6",children:[i.jsx("h3",{className:"text-2xl font-bold mb-2",children:"专业版"}),i.jsx("p",{className:"text-gray-500",children:"适合个人开发者和小团队"})]}),i.jsxs("div",{className:"mb-6",children:[i.jsx("span",{className:"text-4xl font-bold",children:"¥39"}),i.jsx("span",{className:"text-gray-500",children:"/月"})]}),i.jsxs("ul",{className:"space-y-3 mb-8",children:[i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"text-green-500 mr-2 mt-1",children:"✓"}),i.jsx("span",{children:"无限 Notion 页面转换"})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"text-green-500 mr-2 mt-1",children:"✓"}),i.jsx("span",{children:"完整自定义选项"})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"text-green-500 mr-2 mt-1",children:"✓"}),i.jsx("span",{children:"多格式导出"})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"text-green-500 mr-2 mt-1",children:"✓"}),i.jsx("span",{children:"高级 AI 指南"})]}),i.jsxs("li",{className:"flex items-start text-gray-400",children:[i.jsx("span",{className:"mr-2 mt-1",children:"✗"}),i.jsx("span",{children:"自定义域名"})]})]}),i.jsx("button",{onClick:()=>e("感谢您对专业版的兴趣","success"),className:"w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg pulse-glow",children:"升级专业版"})]})]}),i.jsxs("div",{className:"bg-white rounded-2xl shadow-card p-8 border border-neutral-100 hover:shadow-card-hover transition-all duration-500 animate-float card-hover card-pop relative group",style:{animationDelay:"0.4s"},children:[i.jsx("span",{className:"absolute -inset-0.5 bg-gradient-to-r from-secondary/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-700"}),i.jsxs("div",{className:"relative z-10",children:[i.jsxs("div",{className:"mb-6",children:[i.jsx("h3",{className:"text-2xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300",children:"企业版"}),i.jsx("p",{className:"text-gray-500",children:"适合企业和大型团队"})]}),i.jsxs("div",{className:"mb-6",children:[i.jsx("span",{className:"text-4xl font-bold",children:"¥199"}),i.jsx("span",{className:"text-gray-500",children:"/月"})]}),i.jsxs("ul",{className:"space-y-3 mb-8",children:[i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"text-green-500 mr-2 mt-1",children:"✓"}),i.jsx("span",{children:"无限 Notion 页面转换"})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"text-green-500 mr-2 mt-1",children:"✓"}),i.jsx("span",{children:"完整自定义选项"})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"text-green-500 mr-2 mt-1",children:"✓"}),i.jsx("span",{children:"多格式导出"})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"text-green-500 mr-2 mt-1",children:"✓"}),i.jsx("span",{children:"高级 AI 指南"})]}),i.jsxs("li",{className:"flex items-start",children:[i.jsx("span",{className:"text-green-500 mr-2 mt-1",children:"✓"}),i.jsx("span",{children:"自定义域名"})]})]}),i.jsx("button",{onClick:()=>e("联系我们获取企业解决方案","info"),className:"w-full py-3 rounded-xl border border-secondary text-secondary font-medium hover:bg-secondary/5 transition-colors duration-300 group-hover:shadow-sm",children:"联系销售"})]})]})]})]})]})},xs=v.createContext({showNotification:(e,t)=>{},showScrollTop:!1,scrollToTop:()=>{},isProcessing:!1,generatedPreview:null,aiGuide:null,exportPackage:null});function qh(){const[e,t]=v.useState(!1),[n,r]=v.useState(!1),[l,o]=v.useState(null),[s,a]=v.useState(null),[u,c]=v.useState(null),[f,g]=v.useState(!1),h=()=>{g(!f)},x=async m=>{r(!0);try{const d=Bh(m);if(!d){y("无效的Notion链接，请检查后重试。","error"),r(!1);return}y("正在获取Notion内容...","info");const p=await pd(d),w=md(p);o(w),y("正在生成AI优化指南...","info");const k=await gd(p);a(k),y("正在准备导出包...","info");const C=await hd(w);c(C),y("转换成功！您可以预览网站和导出文件。","success")}catch(d){console.error("Error generating preview:",d),y("转换失败，请检查Notion链接是否正确并再次尝试。","error")}finally{r(!1)}},y=(m,d="success")=>{const p=document.createElement("div");let w="bg-success",k="✓";d==="error"?(w="bg-error",k="❌"):d==="info"?(w="bg-primary",k="ℹ"):d==="warning"&&(w="bg-warning",k="⚠️"),p.className=`fixed top-20 right-6 z-50 transform transition-all duration-500 translate-y-0 opacity-100 flex items-center gap-3 p-3 rounded-github shadow-github ${w} text-white`;const C=document.createElement("div");C.className="w-8 h-8 flex items-center justify-center",C.textContent=k,p.appendChild(C);const P=document.createElement("span");P.className="font-medium text-sm",P.textContent=m,p.appendChild(P);const E=document.createElement("button");E.className="ml-4 text-white opacity-70 hover:opacity-100 transition-opacity",E.textContent="×",E.style.fontSize="1.25rem",E.style.fontWeight="bold",E.style.background="none",E.style.border="none",E.style.cursor="pointer",E.onclick=()=>{p.classList.add("translate-y-[-20px]","opacity-0"),setTimeout(()=>p.remove(),500)},p.appendChild(E),document.body.appendChild(p),setTimeout(()=>{p.classList.add("translate-y-[-20px]","opacity-0"),setTimeout(()=>{p.remove()},500)},5e3)};v.useEffect(()=>{const m=()=>{t(window.scrollY>500)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const j=()=>{window.scrollTo({top:0,behavior:"smooth"})},S={showNotification:y,showScrollTop:e,scrollToTop:j,isProcessing:n,generatedPreview:l,aiGuide:s,exportPackage:u};return i.jsx(oh,{children:i.jsx(xs.Provider,{value:S,children:i.jsxs("div",{className:"app-layout",children:[i.jsxs("aside",{className:"sidebar hidden md:block",children:[i.jsx("div",{className:"px-3 mb-6",children:i.jsxs("h1",{className:"text-xl font-bold text-neutral-900 flex items-center gap-2",children:[i.jsx("span",{className:"inline-block w-6 h-6 bg-primary rounded-full"}),"AI Notion"]})}),i.jsxs("nav",{className:"px-2",children:[i.jsxs(V,{to:"/",className:"sidebar-item sidebar-item-active",children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),i.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"Home"]}),i.jsxs(V,{to:"/convert",className:"sidebar-item",children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),i.jsx("polyline",{points:"2 17 12 22 22 17"}),i.jsx("polyline",{points:"2 12 12 17 22 12"})]}),"Convert"]}),i.jsxs(V,{to:"/pricing",className:"sidebar-item",children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",ry:"2"}),i.jsx("line",{x1:"2",x2:"22",y1:"10",y2:"10"})]}),"Pricing"]}),i.jsxs(V,{to:"/examples",className:"sidebar-item",children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M16 18l6-6-6-6"}),i.jsx("path",{d:"M8 6l-6 6 6 6"})]}),"Examples"]})]}),i.jsx("div",{className:"divider mx-3"}),i.jsxs("nav",{className:"px-2",children:[i.jsxs(V,{to:"/login",className:"sidebar-item",children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),i.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Login"]}),i.jsxs(V,{to:"/signup",className:"sidebar-item",children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),i.jsx("circle",{cx:"9",cy:"7",r:"4"}),i.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),i.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Sign Up"]})]}),i.jsx("div",{className:"divider mx-3"}),i.jsxs("nav",{className:"px-2",children:[i.jsx(V,{to:"/privacy-policy",className:"sidebar-item text-xs text-neutral-400",children:"Privacy Policy"}),i.jsx(V,{to:"/terms-of-service",className:"sidebar-item text-xs text-neutral-400",children:"Terms of Service"})]}),i.jsx("div",{className:"px-3 mt-auto pt-4 mt-6",children:i.jsx("p",{className:"text-xs text-neutral-400",children:"© 2023 AI Notion"})})]}),i.jsx("div",{className:`fixed inset-0 bg-black/50 z-50 md:hidden transition-opacity duration-200 ${f?"opacity-100":"opacity-0 pointer-events-none"}`,onClick:h}),i.jsxs("aside",{className:`fixed left-0 top-0 h-full bg-white border-r border-neutral-200 z-50 md:hidden transition-transform duration-200 ease-in-out ${f?"translate-x-0":"-translate-x-full"}`,style:{width:"80%",maxWidth:"280px"},children:[i.jsxs("div",{className:"p-4 flex justify-between items-center border-b border-neutral-200",children:[i.jsx("h1",{className:"text-xl font-bold text-neutral-900",children:"AI Notion"}),i.jsx("button",{onClick:h,className:"p-1 rounded-full hover:bg-neutral-100",children:i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"18",x2:"6",y1:"6",y2:"18"}),i.jsx("line",{x1:"6",x2:"18",y1:"6",y2:"18"})]})})]}),i.jsxs("nav",{className:"py-4",children:[i.jsxs(V,{to:"/",className:"sidebar-item sidebar-item-active",onClick:h,children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),i.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"Home"]}),i.jsxs(V,{to:"/convert",className:"sidebar-item",onClick:h,children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),i.jsx("polyline",{points:"2 17 12 22 22 17"}),i.jsx("polyline",{points:"2 12 12 17 22 12"})]}),"Convert"]}),i.jsxs(V,{to:"/pricing",className:"sidebar-item",onClick:h,children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",ry:"2"}),i.jsx("line",{x1:"2",x2:"22",y1:"10",y2:"10"})]}),"Pricing"]}),i.jsxs(V,{to:"/examples",className:"sidebar-item",onClick:h,children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M16 18l6-6-6-6"}),i.jsx("path",{d:"M8 6l-6 6 6 6"})]}),"Examples"]}),i.jsx("div",{className:"divider mx-3"}),i.jsxs(V,{to:"/login",className:"sidebar-item",onClick:h,children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),i.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Login"]}),i.jsxs(V,{to:"/signup",className:"sidebar-item",onClick:h,children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),i.jsx("circle",{cx:"9",cy:"7",r:"4"}),i.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),i.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),"Sign Up"]})]})]}),i.jsxs("main",{className:"main-content",children:[i.jsxs("div",{className:"sticky top-0 bg-white border-b border-neutral-200 p-4 flex items-center justify-between z-10",children:[i.jsxs("div",{className:"flex items-center gap-4",children:[i.jsx("button",{className:"md:hidden p-2 rounded-full hover:bg-neutral-100",onClick:h,children:i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),i.jsx("line",{x1:"4",x2:"20",y1:"6",y2:"6"}),i.jsx("line",{x1:"4",x2:"20",y1:"18",y2:"18"})]})}),i.jsxs("div",{className:"hidden md:flex items-center gap-6",children:[i.jsx(V,{to:"/",className:"text-neutral-700 hover:text-primary font-medium text-sm",children:"Home"}),i.jsx(V,{to:"/convert",className:"text-neutral-700 hover:text-primary font-medium text-sm",children:"Convert"}),i.jsx(V,{to:"/pricing",className:"text-neutral-700 hover:text-primary font-medium text-sm",children:"Pricing"}),i.jsx(V,{to:"/examples",className:"text-neutral-700 hover:text-primary font-medium text-sm",children:"Examples"})]})]}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(V,{to:"/login",className:"btn-secondary text-sm hidden md:block",children:"Login"}),i.jsx(V,{to:"/signup",className:"btn-success text-sm",children:"Sign Up"})]})]}),i.jsx("div",{className:"mt-6 max-w-4xl mx-auto",children:i.jsxs($m,{children:[i.jsx(Xr,{path:"/",element:i.jsx(gh,{})}),i.jsx(Xr,{path:"/convert",element:i.jsx(Zh,{onGeneratePreview:x})}),i.jsx(Xr,{path:"/pricing",element:i.jsx(Jh,{})})]})})]}),i.jsx("aside",{className:"hidden lg:block",children:i.jsx(hh,{})}),e&&i.jsx("button",{onClick:j,className:"fixed bottom-8 right-8 w-10 h-10 bg-neutral-700 text-white rounded-github flex items-center justify-center shadow-github hover:bg-neutral-800 transition-colors duration-200 z-50","aria-label":"返回顶部",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"18 15 12 9 6 15"})})})]})})})}const vd=document.getElementById("root");if(!vd)throw new Error("Root element not found");ko.createRoot(vd).render(i.jsx(No.StrictMode,{children:i.jsx(qh,{})}));

----[50]
dist\assets\index-BlYYo7mL.css
@tailwind base;@tailwind components;@tailwind utilities;@layer base{:root{--primary: 47 129 247;--success: 40 167 69;--neutral: 17 24 39;--base-100: 255 255 255}}@layer components{.card{@apply bg-white border border-neutral-200 rounded-github p-6 shadow-github transition-all duration-300 hover:shadow-github-hover;}.sidebar-item{@apply flex items-center gap-3 px-3 py-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 rounded-github transition-colors duration-200 w-full text-left;}.sidebar-item-active{@apply bg-neutral-100 text-neutral-900 font-medium;}.input-field{@apply w-full px-3 py-2 border border-neutral-200 rounded-github focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all bg-white;}.btn-primary{@apply bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-github transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;}.btn-secondary{@apply border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 font-medium py-2 px-4 rounded-github transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-offset-2;}.btn-success{@apply bg-success hover:bg-success/90 text-white font-medium py-2 px-4 rounded-github transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2;}.link{@apply text-primary hover:text-primary/80 hover:underline decoration-2 underline-offset-2 transition-colors duration-200;}.divider{@apply border-t border-neutral-200 my-4;}.app-layout{@apply flex min-h-screen bg-neutral-50 text-neutral-800;}.sidebar{@apply w-60 bg-white border-r border-neutral-200 flex-shrink-0 overflow-y-auto py-4 sticky top-0 h-screen;}.main-content{@apply flex-1 min-w-0 p-6;}.right-sidebar{@apply w-72 border-l border-neutral-200 flex-shrink-0 overflow-y-auto p-4 sticky top-0 h-screen hidden lg:block;}}@layer utilities{.text-balance{text-wrap:balance}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.icon-xs{width:.75rem;height:.75rem}.icon-sm{width:1rem;height:1rem}.icon-md{width:1.25rem;height:1.25rem}.icon-lg{width:1.5rem;height:1.5rem}.icon-xl{width:2rem;height:2rem}.icon-2xl{width:2.5rem;height:2.5rem}}

--END--
