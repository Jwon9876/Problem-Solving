function solution(x, y) {

    let xNumberCountArr = new Array(10).fill(0);
    let yNumberCountArr = new Array(10).fill(0);
    let answerArr = [];

    for(const value of x){
        xNumberCountArr[value]++;
    }

    for(const value of y){
        yNumberCountArr[value]++;
    }


    for(let i = 0; i < xNumberCountArr.length; i++){

        let minCount = Math.min(xNumberCountArr[i], yNumberCountArr[i]);

        for(let j = 0; j < minCount; j++){
            answerArr.push(i);
        }
    }

    if(!answerArr.length) return "-1";

    let answer = answerArr.sort((a, b) => b - a).join("");

    return (!answer.replaceAll("0", "").length) ? ("0") : (answer);
}

const count = (a, v) => a.filter(w => w === v).length;
const uniq = a => a.filter((v, i, array) => array.indexOf(v) === i);
const derive = a => a.sort((l, r) => r.number - l.number).flatMap(v => Array(v.count).fill(v.number).join('')).join('');

const findPair = (a, b) => {
	const sa = a.split('');
	const sb = b.split('');
	const ua = uniq(sa);
	const r = ua.map(v => ({number: v, count: Math.min(count(sa, v), count(sb, v))}));
	return r.filter(v => v.count);
}


function anotherSolution() {
    [
        ["100", "2345"],
        ["100", "203045"],
        ["100", "123450"],
        ["12321", "42531"],
        ["5525", "1255"],
        ["3403", "13203"],
    ].map(a => derive(findPair(...a)))
        .map(v => v === '' ? -1 : v)
        .map(v => parseInt(v))
}

const otherSolution = (x, y) => {

    const minRangeSet = [...(x.length > y.length) ? (new Set([...x])) : (new Set([...y]))];
    const countNum = (a, v) => a.filter(w => w === v).length;
    const countNumObj = minRangeSet.map(v => ({number: v, count: Math.min(countNum(x.split(""), v), countNum(y.split(""), v))}));

    const pairNumArr = countNumObj.reduce((a, v) => a + v.number.repeat(v.count), "").split("").sort().reverse();

    return !pairNumArr.length ? "-1" : +(pairNumArr.join("")).toString();

}
