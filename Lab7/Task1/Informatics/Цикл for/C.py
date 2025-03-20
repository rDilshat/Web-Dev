import math

def tester():
    a = int(input())
    b = int(input())

    for i in range(a, b):
        if(pow(math.sqrt(i), 2) == i):
            print(i)
tester()