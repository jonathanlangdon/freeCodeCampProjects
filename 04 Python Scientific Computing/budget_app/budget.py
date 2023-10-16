import math


class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []
        self.balance = 0

    def __str__(self):
        name_length = len(self.name)
        stars_half = (30 - name_length) / 2
        left_stars = math.floor(stars_half)
        right_stars = math.ceil(stars_half)
        return f'''{'*' * left_stars}{self.name}{'*' * right_stars}
            {for item in self.ledger:
                }'''
    
    def formatted_ledger(self):
        items = ""
        for item in self.ledger:
            description_string = item["description"].ljust(23," ")[:23]
            amount_string = "{:.2f}".format(item["amount"]).rjust(7," ")
            items += description_string + amount_string + "\n"
        return items

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})
        self.balance += amount

    def withdraw(self, amount, description):
        if not self.check_funds(amount):
            return False
        self.ledger.append({"amount": -amount, "description": description})
        self.balance -= amount
        return True

    def get_balance(self):
        return self.balance

    def transfer(self, amount, other_category):
        withdraw_success = self.withdraw(amount, f"Transfer to {other_category.name}")
        if not withdraw_success:
            return False
        other_category.deposit(amount, f"Transfer from {self.name}")
        return True

    def check_funds(self, amount):
        if amount > self.balance:
            return False
        return True


groceries = Category("Groceries")

# groceries.deposit(2.00)
# print(groceries.ledger)


def create_spend_chart(categories):
    pass
