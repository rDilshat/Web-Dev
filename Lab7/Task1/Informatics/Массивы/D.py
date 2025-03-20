def tester():
    count = 0
    num = int(input())
    arr = []

    for _ in range(num):
        arr.append(int(input()))

    for i in range(1, len(arr)): 
        if arr[i] > arr[i - 1]:  
            count += 1

    print(count)

tester()
