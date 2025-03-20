def tester():
    count = 0
    n = int(input())
    for _ in range(n):
        num = int(input())
        if(num==0):
            count+=1
    print(count)
tester()