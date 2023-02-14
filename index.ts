import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data) {
    for (const client of wss.clients) {
      if (client === ws) continue;
      client.send(data.toString());
    }
  });
});
