class Solution {
    public int mostWordsFound(String[] sentences) {
         int max=0;
        for(int i=0 ; i< sentences.length;i++){
            String sentence = sentences[i];
            String words[] = sentence.split(" ");
            
            int localsum=0;
            for(int j=0;j<words.length;j++){
                localsum++;
            }
            if(max<localsum) max=localsum;
        }
        return max;
    }
}
