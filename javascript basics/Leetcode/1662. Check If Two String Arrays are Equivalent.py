class Solution(object):
    def arrayStringsAreEqual(self, word1, word2):
        """
        :type word1: List[str]
        :type word2: List[str]
        :rtype: bool
        """
        str1=""
        for i in word1:
            str1+=i
        
        str2=""
        for j in word2:
            str2+=j
        
        if(str1==str2):
            return True
        

        return False
