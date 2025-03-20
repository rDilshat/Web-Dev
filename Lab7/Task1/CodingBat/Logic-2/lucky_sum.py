def lucky_sum(a, b, c):
    for x in (a, b, c):
        if x == 13:
            return sum((a, b, c)[:(a, b, c).index(x)])
    return a + b + c