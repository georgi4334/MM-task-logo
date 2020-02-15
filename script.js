function createLogo(oddNumber) {
    let star = '*';
    let dash = '-';
    let str = "";
    let halfLine = ((oddNumber + 1) / 2) - 1;
    
    if (oddNumber % 2 == 0) return;
    if (oddNumber < 2 || oddNumber > 10000) return;
    
    for (let col = 0; col <= oddNumber; col++) {

        if (col <= halfLine) {
            if (col < 1) {
                str += (dash.repeat(`${oddNumber - col }`) + star.repeat(`${col}`) +
                    star.repeat(`${oddNumber + col }`) +
                    dash.repeat(`${oddNumber}`) + star.repeat(col) + star.repeat(`${oddNumber + col}`) +
                    dash.repeat(oddNumber - col)).repeat(2)  +  '\n';
                    
            }
            if (col >= 1) {
                str += (dash.repeat(`${oddNumber - col }`) + star.repeat(`${col}`) +
                    star.repeat(`${oddNumber + col }`) +
                    dash.repeat(`${(oddNumber - col )  - col}`) + star.repeat(col) + star.repeat(`${oddNumber + col}`) +
                    dash.repeat(oddNumber - col)).repeat(2) + '\n';
            }
        } else if (col > halfLine) {

            if (col == oddNumber) {
                str += (star.repeat(`${oddNumber}`) +
                    dash.repeat(`${oddNumber }`) +
                    star.repeat(`${oddNumber}`) + dash.repeat(oddNumber) + star.repeat(oddNumber)).repeat(2) + '\n';
            } else {
                str += (dash.repeat(`${oddNumber - col }`) + star.repeat(`${oddNumber}`) +
                    dash.repeat(`${ col - (oddNumber  - col)  }`) +
                    star.repeat(`${ (oddNumber - col) * 2 + oddNumber }`)  + dash.repeat(col - (oddNumber - col)) + star.repeat(oddNumber) +
                    dash.repeat(oddNumber - col)).repeat(2) + '\n';
            }
        }
    }
    return str ;
}

console.log(createLogo(3))
//console.log(createLogo(5))
//console.log(createLogo(7))
