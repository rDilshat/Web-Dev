def tester():
    temp = 1
    num = int(input())
    while(temp < 2):
        for i in range(2, num):
            if(num%i==0):
                print(i)
                temp+=2
                break
tester()
