import express from 'express';
import { createServer } from 'vite';

import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexHTML = path.resolve(__dirname, 'index.html');

const PORT = 3001;

async function runServer() {
  const app = express();
  const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      const template = fs.readFileSync(indexHTML, 'utf-8');
      const transformHTML = await vite.transformIndexHtml(url, template);
      const [start, end] = transformHTML.split('<!--root-->');
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      try {
        res.write(start);
        const stream = render(url, {
          onShellReady() {
            stream.pipe(res);
          },
          onAllReady() {
            res.write(end);
            res.end();
          },
        });
      } catch (e) {
        console.error(e);
      }
    } catch (e) {
      console.error(e);
    }
  });

  return app;
}

runServer().then((app) => {
  app.listen(PORT, () => {
    console.log(`Server is run http://localhost:${PORT}`);
  });
});
