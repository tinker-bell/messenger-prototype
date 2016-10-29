import tornado.web
from tornado.options import options
from ..db import DatabaseStub as db


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.redirect("/chat/account-1/")


class ChatHandler(tornado.web.RequestHandler):
    def get(self, account):
        nickname = db.get_account(account)
        self.render('../../index.html',
                    assets=options.ASSETS,
                    account_id=account,
                    account_nickname=nickname)
