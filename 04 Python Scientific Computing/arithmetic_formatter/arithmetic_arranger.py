def arithmetic_arranger(problem_strings, show_answers=False):
    try:
        problems = organize_data(problem_strings)
    except Exception as e:
        return "Error: Numbers must only contain digits."
    error_result = validation_check(problems)
    if error_result["error"]:
        return error_result["error_message"]

    return print_arithmetic(problems, show_answers)


def organize_data(problem_strings):
    problems = []
    for problem in problem_strings:
        values = problem.split()
        problem_width = max(len(values[0]), len(values[2])) + 2
        problem_dict = {
            "num1": int(values[0]),
            "num2": int(values[2]),
            "operator": values[1],
            "string1": values[0],
            "string2": values[2],
            "length1": len(values[0]),
            "length2": len(values[2]),
            "problem_width": problem_width,
            "full_string": problem,
        }
        problems.append(problem_dict)
    return problems


def validation_check(problems):
    error_message = ""
    valid_operators = "+-"
    if len(problems) > 5:
        error_message = "Error: Too many problems."
    for problem in problems:
        total_digits = problem["string1"] + problem["string2"]
        if problem["operator"] not in valid_operators:
            error_message = "Error: Operator must be '+' or '-'."
        elif not total_digits.isdigit():
            error_message = "Error: Numbers must only contain digits."
        elif len(problem["string1"]) > 4 or len(problem["string2"]) > 4:
            error_message = "Error: Numbers cannot be more than four digits."
    return {"error": len(error_message), "error_message": error_message}


def print_first_line(problems):
    line_string = ""
    for problem in problems:
        line_string += (problem["problem_width"] - problem["length1"]) * " "
        line_string += problem["string1"]
        line_string += " " * 4
    return line_string.rstrip()


def print_second_line(problems):
    line_string = ""
    for problem in problems:
        line_string += problem["operator"]
        line_string += (problem["problem_width"] - 1 - problem["length2"]) * " "
        line_string += problem["string2"]
        line_string += " " * 4
    return line_string.rstrip()


def print_third_line(problems):
    line_string = ""
    for problem in problems:
        line_string += "-" * problem["problem_width"]
        line_string += " " * 4
    return line_string.rstrip()


def print_answers(problems):
    line_string = ""
    for problem in problems:
        answer = str(eval(problem["full_string"]))
        line_string += (problem["problem_width"] - len(answer)) * " "
        line_string += answer
        line_string += " " * 4
    return line_string.rstrip()


def print_arithmetic(problems, show_answers):
    lines = ""
    lines += print_first_line(problems) + "\n"
    lines += print_second_line(problems) + "\n"
    lines += print_third_line(problems)
    if show_answers:
        lines += "\n" + print_answers(problems)
    return lines


print(arithmetic_arranger(["32 + 698", "38d1 - 2", "45 + 43", "333 + 49"]))  # Error
print(
    arithmetic_arranger(["32 + 698", "381 - 2", "45 + 43", "333 + 49"], True)
)  # shows answers
print(arithmetic_arranger(["3801 - 2", "123 + 49"]))
