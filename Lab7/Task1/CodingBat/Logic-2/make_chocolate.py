def make_chocolate(small, big, goal):
    max_big = min(goal // 5, big)
    return goal - max_big * 5 if goal - max_big * 5 <= small else -1