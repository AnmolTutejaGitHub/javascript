class Solution(object):
    def setZeroes(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: None Do not return anything, modify matrix in-place instead.
        """
        n=len(matrix)
        i_s =[] #rows to make zero
        j_s=[]

        m=len(matrix[0])
        for i in range(n):
            for j in range(m):
                if matrix[i][j]==0:
                    i_s.append(i)
                    j_s.append(j)

        for i in range(n):
            for j in range(m):
                if i in i_s:
                    matrix[i][j]=0
                if j in j_s:
                    matrix[i][j]=0

        return matrix
