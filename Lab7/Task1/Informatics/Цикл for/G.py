def tester():
    a = int(input())

    b = 2

    if(a != 2):
        for i in range(2, 30000):
            if(a%i==0):
                print(i)
                break
    else:
        print(2)
tester()