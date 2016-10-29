from datetime import timedelta, datetime


class DatabaseStub(object):
    accounts = {}
    messages_from = {}
    contacts = {}

    @classmethod
    def get_account(cls, account_id):
        return cls.accounts[account_id]

    @classmethod
    def create_account(cls, account_id, nick_name):
        cls.accounts[account_id] = nick_name

    @classmethod
    def create_contact(cls, account1, account2):
        def add_contact(a1, a2):
            if a1 in cls.contacts:
                cls.contacts[a1].append(a2)
            else:
                cls.contacts[a1] = [a2]

        add_contact(account1, account2)
        add_contact(account2, account1)

    @classmethod
    def get_contacts(cls, account):
        return cls.contacts[account]

    @classmethod
    def create_message(cls, account_from, account_to, message, datetime):
        data = {'message': message,
                'datetime': datetime,
                'is_read': False}

        if account_from in cls.messages_from:
            recipients = cls.messages_from[account_from]
            if account_to in recipients:
                recipients[account_to].append(data)
            else:
                recipients[account_to] = [data]
        else:
            cls.messages_from[account_from] = {account_to: [data]}

    @classmethod
    def mark_message_as_read(cls, account_from, account_to):
        if account_from in cls.messages_from:
            if account_to in cls.messages_from[account_from]:
                for message in cls.messages_from[account_from][account_to]:
                    message['is_read'] = True

    @classmethod
    def get_messages(cls, account_from, account_to):
        if account_from in cls.messages_from:
            if account_to in cls.messages_from[account_from]:
                return cls.messages_from[account_from][account_to]
        return []

    @classmethod
    def get_unread_messages_count(cls, account_from, account_to):
        counter = 0;
        for message in DatabaseStub.get_messages(account_from, account_to):
            if not message['is_read']:
                counter += 1;
        return counter;


DatabaseStub.create_account("account-1", "James Hetfield")
DatabaseStub.create_account("account-2", "Lars Ulrich Longnamer")
DatabaseStub.create_account("account-3", "Kirk Hammett")
DatabaseStub.create_account("account-4", "Robert Trujillo")
DatabaseStub.create_account("account-5", "Bono")
DatabaseStub.create_account("account-6", "The Edge")
DatabaseStub.create_account("account-7", "Adam Clayton")
DatabaseStub.create_account("account-8", "Larry Mullen Jr")

DatabaseStub.create_contact("account-1", "account-2")
DatabaseStub.create_contact("account-1", "account-3")
DatabaseStub.create_contact("account-1", "account-4")
DatabaseStub.create_contact("account-1", "account-5")
DatabaseStub.create_contact("account-1", "account-6")
DatabaseStub.create_contact("account-1", "account-7")
DatabaseStub.create_contact("account-1", "account-8")

DatabaseStub.create_message("account-1", "account-2", "How are you doing?", datetime.now() - timedelta(days=5))
DatabaseStub.create_message("account-1", "account-2", "Not too bad.  The weather is great isn't it?", datetime.now() - timedelta(days=4))
DatabaseStub.create_message("account-1", "account-2", "I wish it was like this more frequently.", datetime.now() - timedelta(days=3))
DatabaseStub.create_message("account-1", "account-2", "So where are you going now?", datetime.now() - timedelta(days=2))

DatabaseStub.create_message("account-2", "account-1", "I'm doing alright.  How about you?", datetime.now() - timedelta(days=5, hours=-5))
DatabaseStub.create_message("account-2", "account-1", "Yes.  It's absolutely beautiful today.", datetime.now() - timedelta(days=4, hours=-5))
DatabaseStub.create_message("account-2", "account-1", "Me too.", datetime.now() - timedelta(days=3, hours=-5))
DatabaseStub.create_message("account-2", "account-1", "I'm going to meet a friend of mine at the department store.", datetime.now() - timedelta(days=2, hours=-5))

