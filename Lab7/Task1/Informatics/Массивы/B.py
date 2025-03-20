def tester():
    num = int(input())
    arr = []

    for i in range(num):
        a = int(input())
        if(a%2==0):
            arr.append(a)
    
    for i in arr:
        print(i)
tester()