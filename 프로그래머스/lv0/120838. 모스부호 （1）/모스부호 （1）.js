function solution(letter) {
    var answer = '';
    
    const morse = { 
        '.-':'a', '-...':'b', '-.-.':'c', '-..':'d', '.':'e', '..-.':'f',
        '--.':'g', '....':'h', '..':'i', '.---':'j', '-.-':'k', '.-..':'l',
        '--':'m', '-.':'n', '---':'o', '.--.':'p', '--.-':'q', '.-.':'r',
        '...':'s', '-':'t', '..-':'u', '...-':'v', '.--':'w', '-..-':'x',
        '-.--':'y','--..':'z'
    }
    
    console.log(letter)
    const splitLetter = letter.split(" ");
    
    for(let i = 0; i < splitLetter.length; i++){
        answer += morse[splitLetter[i]]
    }
    
    return answer;
}