//https://www.codewars.com/kata/5556282156230d0e5e000089

//DNA to RNA Conversion

function DNAtoRNA(dna) {
    let str = '';
    for (let i = 0; i < dna.length; i++){
        if (dna[i] === 'T') str+= 'U';
        else str+= dna[i];
    }
    return str;
}