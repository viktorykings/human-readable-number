module.exports = function toReadable (number) {
  const simpleNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];
  const indexFor100 = Math.trunc(number / 100);
if (number <= 15) {
    return simpleNum[number]
} else if (number > 15 && number < 100){
    if (number <= 19){
        if (number === 18) {
            return (`${simpleNum[number % 10]}een`)
        } else return (`${simpleNum[number % 10]}teen`)
    } else if (number >=20 && number < 30){
            if (number === 20){
                    return 'twenty'
                } else return (`twenty ${simpleNum[number % 10]}`)
    }  
    else if (number >= 30 && number < 40){
            if (number === 30){
                return 'thirty'
            } else return (`thirty ${simpleNum[number % 10]}`)
    } else if (number >= 50 && number < 60){
            if (number === 50){
                return 'fifty'
            } else return (`fifty ${simpleNum[number % 10]}`)
    } else if ((Math.trunc(number / 10) * 10) % 40 === 0 && number < 50){
            if (number === 40){
                return 'forty'
            } else return (`forty ${simpleNum[number % 10]}`)
    } else if ((Math.trunc(number / 10) * 10) % 80 === 0){
            if (number === 80){
                return 'eighty'
            } else return (`${simpleNum[Math.trunc(number / 10)]}y ${simpleNum[number % 10]}`)
    } else if (number % 10 === 0){
        return (`${simpleNum[number / 10]}ty`)
    } else return (`${simpleNum[Math.trunc(number / 10)]}ty ${simpleNum[number % 10]}`)
} else if (number >= 100 && number < 1000){
        if ((number - (indexFor100 * 100)) === 0){
            return (`${simpleNum[indexFor100]} hundred`)
        } else if (number - (indexFor100 * 100) <= 15) {
            return (`${simpleNum[indexFor100]} hundred ${simpleNum[number - indexFor100 * 100]}`) 
        } else if (number - (indexFor100 * 100) <= 19){
            if (number - indexFor100 * 100 === 18) {
                return (`${simpleNum[indexFor100]} hundred ${simpleNum[number % 10]}een`)
                // везде добавь как выше нужно высчитывать индекс в симпнам
            } else return (`${simpleNum[indexFor100]} hundred ${simpleNum[number % 10]}teen`)
        }  else if (number - indexFor100 * 100 >= 20 && number - indexFor100 * 100 < 30){
                if (number - indexFor100 * 100 === 20){
                        return (`${simpleNum[indexFor100]} hundred twenty`)
                    } else return (`${simpleNum[indexFor100]} hundred twenty ${simpleNum[number % 10]}`)
        }  else if (number - indexFor100 * 100 >= 30 && number - (indexFor100 * 100) < 40){
                if (number - indexFor100 * 100 === 30){
                    return (`${simpleNum[indexFor100]} hundred thirty`)
                } else return (`${simpleNum[indexFor100]} hundred thirty ${simpleNum[number % 10]}`)
        } else if (number - indexFor100 * 100 >= 50 && number - (indexFor100 * 100) < 60){
                if (number  - indexFor100 * 100 === 50){
                    return (`${simpleNum[indexFor100]} hundred fifty`)
                } else return (`${simpleNum[indexFor100]} hundred fifty ${simpleNum[number % 10]}`)
        } else if ((Math.trunc((number - indexFor100 * 100) / 10) * 10) % 40 === 0 && number - indexFor100 * 100 < 50){
                if (number % 10 !== 0){
                    return (`${simpleNum[indexFor100]} hundred forty ${simpleNum[number % 10]}`)
                } else return (`${simpleNum[indexFor100]} hundred forty`)
        } else if ((Math.trunc((number - indexFor100 * 100) / 10) * 10)  % 80 === 0){
                if (number - indexFor100 * 100 === 80){
                    return (`${simpleNum[indexFor100]} hundred eighty`)
                } else return (`${simpleNum[indexFor100]} hundred ${simpleNum[(Math.trunc((number - indexFor100 * 100) / 10))]}y ${simpleNum[number % 10]}`)
        } else if (number - indexFor100 * 100 === 0){
            return (`${simpleNum[indexFor100]} hundred ${simpleNum[number / 10]}ty`)
        } else if ((number - indexFor100 * 100) % 10 === 0){
            return (`${simpleNum[indexFor100]} hundred ${simpleNum[(Math.trunc((number - indexFor100 * 100) / 10) )]}ty`)
        } else return (`${simpleNum[indexFor100]} hundred ${simpleNum[(Math.trunc((number - indexFor100 * 100) / 10) )]}ty ${simpleNum[number % 10]}`)
} 
}