def tester():
    text = input()
    num = int(input())

    temp = ""
    count = 0

    for i in range(len(text)):
        temp += text[i]
        count += 1
        if count == num:
            print(temp)
            temp = ""
            count = 0
tester()