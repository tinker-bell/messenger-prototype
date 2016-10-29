from datetime import datetime
import tornado.web
import json
from operator import itemgetter
from ..db import DatabaseStub as db


class GetContacts(tornado.web.RequestHandler):
    def get(self, accountId):
        contacts = []
        for contact in db.get_contacts(accountId):
            contacts.append({'id': contact,
                             'nickname': db.get_account(contact),
                             'unread_messages': db.get_unread_messages_count(contact, accountId),
                             'online': True})

        self.write(json.dumps({'data': 'contacts', "contacts": contacts}))


class GetChat(tornado.web.RequestHandler):
    def get(self, account_from, account_to):
        messages_from = db.get_messages(account_from, account_to)
        messages_to = db.get_messages(account_to, account_from)
        db.mark_message_as_read(account_from, account_to)
        chat = []

        def add_to_chat(a_from, msgs):
            for msg in msgs:
                m = {key: value for key, value in msg.items()}
                m['from'] = a_from
                chat.append(m)

        add_to_chat(account_from, messages_from)
        add_to_chat(account_to, messages_to)

        chat = sorted(chat, key=itemgetter('datetime'))
        for message in chat:
            message['datetime'] = message['datetime'].isoformat()

        self.write(json.dumps({'data': 'chat', "messages": chat}))


