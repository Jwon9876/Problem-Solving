function solution(n)
{
    var ans = 1;

    while(n > 2){
        if(n % 2 !== 0){
            ans++;
        }
        n /= 2;
        n = parseInt(n)
    }

    return ans;
}