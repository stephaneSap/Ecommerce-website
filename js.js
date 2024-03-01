function f(first, second) {
    let commonElements = [];
    
    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
            if (first[i] === second[j]) {
                commonElements.push(first[i]);
                break;
            }
        }
    }
    
    return commonElements;
}