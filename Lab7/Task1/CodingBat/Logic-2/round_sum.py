def round_sum(a, b, c):
    def round10(n):
        return (n + 5) // 10 * 10
    return sum(map(round10, (a, b, c)))