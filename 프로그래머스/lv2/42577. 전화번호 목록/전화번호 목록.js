const solution = (phoneBook) => {
    
    const sorted = phoneBook.sort();
    
    for(let i = 0; i < sorted.length - 1; i++){
        const prefix = sorted[i];
        if(prefix == sorted[i + 1].substring(0, prefix.length)) 
            return false;
    }
    
    return true;
}