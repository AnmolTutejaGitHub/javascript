# 33/38 cases passed giving TIL

class Solution(object):
    def minimumAbsDifference(self, arr):
        """
        :type arr: List[int]
        :rtype: List[List[int]]
        """
        absdiff = float('inf')
        for i in arr:
            for j in arr:
                if(abs(i-j) != 0 and abs(i-j) < absdiff):
                    absdiff = abs(i-j)
        ans = [[b, a] for i, a in enumerate(arr) for j, b in enumerate(
            arr) if abs(a-b) == absdiff and j > i]  # need in ascending order

        # sorting 2 D array

        # ascending=[]
        # for i,num in enumerate(ans):
        #         if i+1 <len(ans)-1 and ans[i][0]>ans[i+1][0]:
        #             ascending.append(ans[i])
        #         elif i+1 <len(ans)-1 and ans[i][0]<ans[i+1][0]:
        #             ascending.append(ans[i+1])

        # return ascending

        for i in ans:  # sorting inner array
            i.sort()

        ans.sort()  # sorting outer arr

        return ans
