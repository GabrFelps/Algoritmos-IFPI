#include <stdio.h>
int main(){
    int n, x;
    scanf("%d", &n);
    for(int i = 0; i < n; i++){
        scanf("%d", &x);
        int par = x % 2 == 0;
        if (x == 0){
            puts("NULL");
        } else if (x > 0 && par){
            puts("EVEN POSITIVE");
        } else if (x > 0 && !par){
            puts("ODD POSITIVE");
        } else if (x < 0 && par){
            puts("EVEN NEGATIVE");
        } else if (x < 0 && !par){
            puts("ODD NEGATIVE");
        }
    }
    return 0;
}