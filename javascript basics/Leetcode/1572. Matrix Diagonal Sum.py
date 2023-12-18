class Solution(object):
    def diagonalSum(self, mat):
        """
        :type mat: List[List[int]]
        :rtype: int
        """
        end=len(mat)-1
        sum=0
        for i in range(len(mat)):
            sum+=mat[i][i]
            if(end-i!=i):  #to avoid repeated submissiion of a[i][i]
             sum+=mat[i][end-i] #to find those who don't follow a11 a22 a33 but are diagonal. #for other diagonal(other than a[i][i]  condition is j=n-i  wherre n=len(matrix) -1 subtracted 1 for indexing )

            
        return sum
