def tester():
    num = int(input())
    temp = 0
    for i in range(1, num):
        if(pow(i, 2) <= num):
            temp = pow(i, 2)
            print(temp)
tester()