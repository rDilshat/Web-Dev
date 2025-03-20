def array123(nums):
    return any(nums[i:i+3] == [1, 2, 3] for i in range(len(nums) - 2))