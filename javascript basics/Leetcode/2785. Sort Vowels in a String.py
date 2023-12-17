class Solution(object):
    def sortVowels(self, s):

        vowelStr = ""

        for i in s:
            if(i == "a" or i == "e" or i == "i" or i == "o" or i == "u" or i == "A" or i == "E" or i == "I" or i == "O" or i == "U"):
                vowelStr += i
        # sorting vowels according to ascii
        vowelStr = ''.join(sorted(vowelStr))

        # s=s.replace("aeiouAEIOU",vowelStr)

    #    vowindex=0
    #    for i in s:
    #        if(i=="a" or i=="e" or i=="i" or i=="o" or i=="u" or i=="A" or i=="E" or i=="I" or i=="O" or i=="U") :
    #            s=s.replace(i,vowelStr[vowindex],1)
    #            vowindex+=1
        ansStr = ''
        vowindex = 0
        for i in s:
            if(i == "a" or i == "e" or i == "i" or i == "o" or i == "u" or i == "A" or i == "E" or i == "I" or i == "O" or i == "U"):
                ansStr += vowelStr[vowindex]
                vowindex += 1
            else:
                ansStr += i

        # print(vowelStr)
        return ansStr
