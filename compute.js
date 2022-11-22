function compute(string) {
    if (typeof(string) === 'number') {
        string = string.toString();
    }
    let number = parseInt(string);
    let returnedValue = "";
    let mappedValue = {
        3: "Foo",
        5: "Bar",
        7: "Qix"
    };
    let numbersList = ["3" , "5", "7"]
    let splittedNumber = string.split('');

    for (const [key, value] of Object.entries(mappedValue)) {
        let regex = new RegExp(`${key}`, 'g');
        let counter = (string.match(regex) || []).length;
        if (number % key === 0) {
            returnedValue = returnedValue + value;
        }
    };

    splittedNumber.forEach((num) => {
        if (numbersList.includes(num)) {
            returnedValue = returnedValue + mappedValue[num];
        }
        if (parseInt(num) === 0) {
            returnedValue = returnedValue + "*";
        }
    });

    if (number % 3 != 0 && number % 5 != 0 && number % 7 != 0 && !string.includes("3") && !string.includes("5") && !string.includes("7")) {
        returnedValue = string.replaceAll(/0/g, '*');
    }

    return returnedValue;
}

for (let index = 1; index < 110; index++) {
   console.log(compute(index.toString()));
}

module.exports = compute;