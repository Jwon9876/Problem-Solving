//
//  main.cpp
//  BOJ_1924
//
//  Created by 최주원 on 2022/06/07.
//

//첫째 줄에 빈 칸을 사이에 두고 x(1 ≤ x ≤ 12)와 y(1 ≤ y ≤ 31)이 주어진다.
//
//참고로 2007년에는
//1, 3, 5, 7, 8, 10, 12월은 31일까지,
//4, 6, 9, 11월은 30일까지, 2월은 28일까지 있다.

// 1월 1일은 월요일

#include <cstdio>
#include <string>

using namespace std;

int main(){
    int month, day;

    char days[7][10] ={"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"};

    scanf("%d %d", &month, &day);
    int n = day;
    
    while(month > 1){
        switch (month) {
            case 2:
                n += 31;
                break;
            case 3:
                n += 28;
                break;
            case 4:
                n += 31;
                break;
            case 5:
                n += 30;
                break;
            case 6:
                n += 31;
                break;
            case 7:
                n += 30;
                break;
            case 8:
                n += 31;
                break;
            case 9:
                n += 31;
                break;
            case 10:
                n += 30;
                break;
            case 11:
                n += 31;
                break;
            case 12:
                n += 30;
                break;
            default:
                break;
        }
        month--;
    }
    
    printf("%s\n", days[(n % 7)]);

    
}
