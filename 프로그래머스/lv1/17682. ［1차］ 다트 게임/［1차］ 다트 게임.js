const solution = (dartResult) => {
    
    
    const regex = /\d{1,2}\w\*?\#?/g;
    const matchedArr = dartResult.match(regex);
    
    const numberRegex = /\d{1,2}/g;
    const squareRegex = /\D\*?\#?/g;
    
    const squareOption = ['S', 'D', 'T'];
    
    const numberArr = matchedArr.map((v) => v.match(numberRegex));
    const notNumberArr = matchedArr.map((v) => v.match(squareRegex)).flat();
    
    let result = [];
    
    for(let i = 0; i < numberArr.length; i++){
        const [square, option] = notNumberArr[i].split("");
        result[i] = Math.pow(numberArr[i], squareOption.indexOf(square) + 1);
        if(option == '#'){
           result[i] *= -1; 
        } 
        else if(option == '*' && i == 0){
            result[i] *= 2;
        }
        else if(option == '*' && i > 0){
            result[i - 1] *= 2;
            result[i] *= 2;
        }
    }
    
    const sum = result.reduce((a, v) => a + v, 0);
    return sum;
}

