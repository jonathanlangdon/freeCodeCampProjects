def min_from_time(time):
    [hour_string, part_two] = time.split(":")
    hour = int(hour_string)
    if part_two.find(" ") > 0:
        [min_string, meridiem] = part_two.split(" ")
        if meridiem == "PM":
            hour += 12
        min = int(min_string)
    else:
        min = int(part_two)
    return hour * 60 + min


def days_from_min(min):
    return (min % 1440, min // 1440)


def time_from_min(min):
    (hour, result_min) = (min // 60, min % 60)
    if hour >= 12:
        hour_adjust = 12
        meridian = "PM"
        if hour == 12:
            hour = 24
    else:
        hour_adjust = 0
        meridian = "AM"
        if hour == 0:
            hour = 12
    hour_str = hour - hour_adjust
    min_str = "{:02}".format(result_min)
    return f"{hour_str}:{min_str} {meridian}"


def days_laters(days):
    if days == 0:
        return ""
    if days == 1:
        return " (next day)"
    return f" ({days} days later)"


number_to_weekday = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
}

weekday_to_number = {value: key for key, value in number_to_weekday.items()}


def days_of_week(today, days):
    if not today:
        return ""
    today = today.lower()
    days_to_add = days % 7
    today_number = weekday_to_number[today]
    new_number = today_number + days_to_add
    if new_number > 6:
        new_number = new_number - 7
    return f", {number_to_weekday[new_number].capitalize()}"


def add_time(start, duration, today=None):
    total_min = min_from_time(start) + min_from_time(duration)
    (leftover_min, full_days) = days_from_min(total_min)
    new_time = time_from_min(leftover_min)
    day_of_week = days_of_week(today, full_days)
    days_later = days_laters(full_days)
    return f"{new_time}{day_of_week}{days_later}"


print(add_time("11:43 PM", "24:20", "tueSday"))
# Returns: 12:03 AM, Thursday (2 days later)
print(add_time("11:06 AM", "2:02"))
# Returns: 1:08 PM
print(add_time("3:00 PM", "3:10"))
# Returns: 6:10 PM
print(add_time("11:30 AM", "2:32", "Monday"))
# Returns: 2:02 PM, Monday
print(add_time("11:43 AM", "00:20"))
# Returns: 12:03 PM
print(add_time("10:10 PM", "3:30"))
# Returns: 1:40 AM (next day)
print(add_time("6:30 PM", "205:12"))
# Returns: 7:42 AM (9 days later)
