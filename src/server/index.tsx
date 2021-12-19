import express from "express";
const app = express();
import ReactDOMServer from "react-dom/server";
import { QueryClient } from "react-query";
const port = 3000;

import { App } from "../common/app";
app.use(express.static("dist"));

app.get("/*", (req, res) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });
  res.setHeader("Transfer-Encoding", "chunked");
  res.write(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React 18</title>
        <link href="client/main.css" rel="stylesheet"></head>
    </head>
    <body>
        <div id="root">`
  );
  // @ts-ignore
  const appStream = ReactDOMServer.renderToPipeableStream(
    <App client={client} />,
    {
      onCompleteAll: () => {
        res.write(
          `</div><script defer src="client/main.js"></script></body></html>`
        );
      },
    }
  );

  appStream.pipe(res);
});

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
