function solution(lottos, win_nums) {
    
    /*
        1	6개 번호가 모두 일치
        2	5개 번호가 일치
        3	4개 번호가 일치
        4	3개 번호가 일치
        5	2개 번호가 일치
        6(낙첨)	그 외
    */
    
    const Rank = [6, 5, 4, 3, 2, 1];

    const sortedLottosNums = lottos.sort((a, b) => (a - b));
    const sortedWinsLottosNums = win_nums.sort((a, b) => (a - b));
    const unknownNums = sortedLottosNums.filter((v) => v == 0).length;
    
    let matchedCount = 0;  
    
    for(let i = 0; i < sortedLottosNums.length; i++){    
        if(sortedLottosNums[i] !== 0 && sortedWinsLottosNums.includes(sortedLottosNums[i])){
            matchedCount++;
        }
    }
    
    
    let bestRank = matchedCount + unknownNums == 0 ? matchedCount + unknownNums : matchedCount + unknownNums - 1;
    let wortRank = matchedCount == 0 ? matchedCount : matchedCount - 1;
    
    
    return [Rank[bestRank], Rank[wortRank]];
}