import { serve } from "http/server.ts";
import { createElement } from "react";
import { renderToString } from "reactDOMServer";
import { App } from "./App.tsx";

serve((_: Request) => {
  return new Response(renderToString(createElement(App)), {
    headers: {
      "content-type": "text/html",
    },
  });
});
