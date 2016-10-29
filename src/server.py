import tornado.wsgi
import tornado.ioloop
import tornado.web
import tornado.websocket

import json
from tornado.options import define
from tornado.autoreload import watch
from messanger.handlers import MainHandler, ChatHandler
from messanger.handlers.socket import MessagesSocketHandler
from messanger.handlers.api import GetContacts, GetChat

application = tornado.web.Application([
    (r"/", MainHandler),
    (r"/messages", MessagesSocketHandler),
    (r"/api/account/(.+)/contacts", GetContacts),
    (r"/api/chat/(.+)/(.+)", GetChat),
    (r"/chat/(.+)/", ChatHandler),


], static_path='static', debug=True)

if __name__ == "__main__":
    assets = None
    try:
        fn = '../webpack-assets.json'
        with open(fn) as f:
            watch(fn)
            assets = json.load(f)
    except IOError as e:
        print("IOError: ", e)
        pass
    except KeyError as e:
        print("KeyError: ", e)
        pass

    define('ASSETS', assets)
    application.listen(8888)
    tornado.ioloop.IOLoop.current().start()

