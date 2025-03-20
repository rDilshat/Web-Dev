def tester(n):
    if(n%2==0):
        if(n >= 2 and n <=5):
            print("Not weird")
        elif(n >= 6 and n <= 20):
            print("Weird")
        elif(n>20):
            print("Not Weird")
    else:
        print("Weird")
n = int(input())
tester(n)