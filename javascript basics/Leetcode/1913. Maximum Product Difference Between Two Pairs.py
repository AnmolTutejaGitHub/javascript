def maxProductDifference(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    min = float('inf')
    secondMin = float('inf')
    max = float('-inf')
    secondMax = float('-inf')
    for i in nums:
        if i > max:
            max = i
        if i < max and i > secondMax:
            secondMax = i
        if i < min:
            min = i
        if i > min and i < secondMin:
            i = secondMin
    return (max*secondMax)-(min*secondMin)


print(maxProductDifference([4, 2, 5, 9, 7, 4, 8]))
