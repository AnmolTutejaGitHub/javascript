# class Solution(object):
#     def largestGoodInteger(self, num):
#         i = 0
#         j = 1
#         track = set()
#         for n in num:
#             if j >= len(num)-1:
#                 return max(track)*3 if len(track) != 0 else ''

#             if num[i] != num[j]:
#                 i += 1
#                 j += 1

#             if num[i] == num[j]:
#                 j += 1
#                 if num[i] == num[j]:
#                     track.add(num[i])
#                     j -= 1

#                     i += 1
#                     j += 1

#                 if num[i] != num[j]:
#                     j -= 1

#                     i += 1
#                     j += 1

#         return max(track)*3 if len(track) != 0 else ''


class Solution(object):
    def largestGoodInteger(self, num):
        i = 0
        j = 1
        track = set()
        for n in num:
            while j < len(num):

                if num[i] != num[j]:
                    i += 1
                    j += 1

                if j < len(num) and num[i] == num[j]:
                    j += 1
                    i += 1
                    if j < len(num) and num[i] == num[j]:
                        track.add(num[i])

        return max(track)*3 if len(track) != 0 else ''


# sol = Solution()
# print(sol.largestGoodInteger("014455"))
