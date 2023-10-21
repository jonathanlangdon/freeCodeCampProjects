import copy
import random

# Consider using the modules imported above.


class Hat:
    def __init__(self, **kwargs):
        self.contents = []
        for color, count in kwargs.items():
            for _ in range(count):
                self.contents.append(color)

    def draw(self, num_to_draw):
        balls_withdrawn = []
        for _ in range(num_to_draw):
            if not self.contents:
                break
            random_index = random.randint(0, len(self.contents) - 1)
            balls_withdrawn.append(self.contents.pop(random_index))
        self.contents = self.contents
        return balls_withdrawn


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    success_count = 0
    for _ in range(num_experiments):
        hat_copy = copy.deepcopy(hat)
        balls_withdrawn = hat_copy.draw(num_balls_drawn)
        colors_count = {}
        for color in balls_withdrawn:
            colors_count[color] = colors_count.get(color, 0) + 1
        experiment_success = True
        for color, count in expected_balls.items():
            if colors_count.get(color, 0) < count:
                experiment_success = False
                break
        if experiment_success:
            success_count += 1
    return success_count / num_experiments
