def no_teen_sum(a, b, c):
    def fix_teen(n):
        return n if n not in {13, 14, 17, 18, 19} else 0
    return sum(map(fix_teen, (a, b, c)))