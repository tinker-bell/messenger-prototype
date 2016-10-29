from datetime import datetime
import json
import tornado.websocket
from ..db import DatabaseStub as db

clients = {}


class MessagesSocketHandler(tornado.websocket.WebSocketHandler):

    def open(self):
        print("WebSocket opened")

    def on_message(self, message):
        result = json.loads(message);
        data = result["data"]

        if data["type"] == "handshake":
            self.add_client(data["attributes"]["account"])

        elif data["type"] == "new_message":
            self.deliver_message(data);

    def on_close(self):
        print("WebSocket closed")

    def deliver_message(self, data):
        attributes = data["attributes"]
        account_to = attributes["to"]
        time = datetime.now()
        db.create_message(attributes["from"],  account_to, attributes["message"], time)

        # forward the same message to online client
        if account_to in clients:
            attributes['datetime'] = time.isoformat()
            clients[account_to].write_message(data)

    def add_client(self, accountId):
        clients[accountId] = self;

