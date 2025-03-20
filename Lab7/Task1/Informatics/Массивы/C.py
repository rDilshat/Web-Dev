def tester():
    num = int(input())
    count = 0
    for i in range(num):
        a = int(input())
        if(a>=0):
            count+=1
    print(count)
tester()