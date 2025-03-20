def tester():
    a = int(input("Enter a: "))
    b = int(input("Enter b: "))

    for i in range(a, b):
        if i % 2 == 0:
            print(i)

tester()
