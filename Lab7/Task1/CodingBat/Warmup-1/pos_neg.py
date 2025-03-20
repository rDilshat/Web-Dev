def pos_neg(a, b, negative):
    return (a < 0 and b < 0) if negative else (a < 0) != (b < 0)