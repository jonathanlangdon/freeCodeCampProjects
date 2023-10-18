import math


class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []
        self.balance = 0
        self.spent = 0

    def __str__(self):
        name_length = len(self.name)
        half_of_stars = (30 - name_length) / 2
        left_stars = math.floor(half_of_stars)
        right_stars = math.ceil(half_of_stars)
        items = self.formatted_ledger()
        return f"""{'*' * left_stars}{self.name}{'*' * right_stars}{items}\nTotal: {"{:.2f}".format(self.balance)}"""

    def formatted_ledger(self):
        items = ""
        for item in self.ledger:
            description_string = item["description"].ljust(23, " ")[:23]
            amount_string = "{:.2f}".format(item["amount"]).rjust(7, " ")
            items += "\n" + description_string + amount_string
        return items

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})
        self.balance += amount

    def withdraw(self, amount, description=""):
        if not self.check_funds(amount):
            return False
        self.ledger.append({"amount": -amount, "description": description})
        self.balance -= amount
        self.spent += amount
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


def create_spend_chart(categories_list):
    percent_graph = make_graph(categories_list)
    categories = vertical_categories(categories_list)
    return (
        "Percentage spent by category\n"
        + percent_graph
        + "    ----------\n"
        + categories
    )


def make_graph(categories):
    total_spent = 0
    for category in categories:
        total_spent += category.spent

    lines = []
    for i in range(100, -1, -10):
        lines.append([str(i).rjust(3, " ") + "|"])
    for category in categories:
        percent_spent = category.spent / total_spent * 100
        for i in range(100, -1, -10):
            inserted_text = " o " if percent_spent >= i else "   "
            lines[int(10 - i / 10)].append(inserted_text)
    lines_string = ""
    for line in lines:
        lines_string += "".join(line) + " \n"
    return lines_string


def vertical_categories(categories):
    # figure out longest category name
    longest_name_length = 0
    for category in categories:
        if len(category.name) > longest_name_length:
            longest_name_length = len(category.name)
    lines = ["    " for _ in range(longest_name_length)]
    for category in categories:
        for i in range(longest_name_length):
            if i >= len(category.name):
                lines[i] += "   "
                continue
            lines[i] += f" {category.name[i]} "

    lines_string = ""
    for line in lines:
        lines_string += line + " \n"
    return lines_string.removesuffix("\n")
