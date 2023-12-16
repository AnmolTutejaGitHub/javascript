class Solution(object):
    def largestGoodInteger(self, num):
        def funcreplace(str):
            return str.replace(str[0], "", 1)
        """
            :type num: str
            :rtype: str
            """
        ans = ""
        maxans = ""
        for i in num:
            if(len(ans) == 3):
                ans = funcreplace(ans)
                ans += i

            if(len(ans) < 3):
                ans += i
            # for(j in ans):
            # print(i)
            if(len(ans) == 3 and (ans[0] == ans[1] == ans[2])):

                if(maxans == ""):
                    maxans = ans

                if(int(maxans) < int(ans)):
                    maxans = ans

        return maxans

# def largestGoodInteger(num):
#     def funcreplace(str):
#         return str.replace(str[0], "", 1)
#     """
#         :type num: str
#         :rtype: str
#         """
#     ans = ""
#     for i in num:
#         if(len(ans) == 3):
#             ans = funcreplace(ans)
#             ans += i

#         if(len(ans) < 3):
#             ans += i
#         print(i, ans)
#         # for(j in ans):
#         if(len(ans) == 3 and (ans[0] == ans[1] == ans[2])):
#             return ans

#     return ""


# a = largestGoodInteger("101010")
# print(a)

# # print(len(""))
