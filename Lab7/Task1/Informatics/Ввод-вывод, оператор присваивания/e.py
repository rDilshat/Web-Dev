def mkad():
    v = int(input())
    t = int(input())
    s = 109

    if(v > 0):
        temp = v * t
        res = s - temp
        if(res < 0):
            res = res * (-1)
            print(res)
        else:
            print(res)
    else:
        v = v * (-1)
        temp = v * t
        res = s - temp
        print(res)

mkad()