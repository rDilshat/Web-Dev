def caught_speeding(speed, is_birthday):
    limit = 65 if is_birthday else 60
    if speed <= limit:
        return 0
    elif speed <= (85 if is_birthday else 80):
        return 1
    return 2