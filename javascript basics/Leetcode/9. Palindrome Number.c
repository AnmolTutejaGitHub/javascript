#include<stdio.h>
bool isPalindrome(long int x){
        long int orig=x;
        long int isit=0, rem=0;
        if(x>0){
        while(x){
        rem=x%10;
        isit=isit*10+rem;
        x=x/10;
        }
        return isit==orig;
        }
        else if(x<0) {
        return false;}
        else if(x==0) {
        return true;  }

    return false; //default return statement is needed else error -->control reaches end of non-void function. //this error occurs if there is some case for which return statement is not provided 
}

//was working on leetcode remember to make main function for general use 
