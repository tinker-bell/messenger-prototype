
Прототип коммуникационной платформы реализован с использованием
React, Redux
Python, tornado
Webpack

В прототипе реализована только возможность общения между двумя собеседниками. Вместо базы данных сделана заглушка.

1. Настойка рабочей среды
```
virtualenv env
env\Scripts\activate.bat
pip install -r requirements.txt
npm install
```

2. Запуск сервера
```
cd src
python server.py
```

3. Просмотр чатов от имени трех разных пользователей
* http://localhost:8888/chat/account-1/
* http://localhost:8888/chat/account-2/
* http://localhost:8888/chat/account-3/

![enter image description here](https://cdn.pbrd.co/images/kPvfJ98XE.png)