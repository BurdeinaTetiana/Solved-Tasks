//https://www.codewars.com/kata/55cbd4ba903825f7970000f5

//Grasshopper - Grade book

function getGrade (s1, s2, s3) {
    let s = (s1 + s2 + s3) / 3;
    if (s >= 90) return 'A';
    else if (s >= 80) return 'B';
    else if (s >= 70) return 'C';
    else if (s >= 60) return 'D';
    else return 'F';
}