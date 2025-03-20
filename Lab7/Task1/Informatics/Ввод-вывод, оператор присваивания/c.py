def apples():
    n = int(input())
    k = int(input())
    res = 0

    if(k%n==0):
        res = k/n
        print(res)
    else:
        res = k%n
        res = (k - res)//n
        print(res)
apples()