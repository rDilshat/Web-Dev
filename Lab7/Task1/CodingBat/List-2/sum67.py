def sum67(nums):
    total, skip = 0, False
    for num in nums:
        if num == 6:
            skip = True
        elif num == 7 and skip:
            skip = False
        elif not skip:
            total += num
    return total