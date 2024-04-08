var hasDecimal = false;
var calculated = false;
var pwede = true;

function clearInput() {
    document.getElementById('result').value = '';
    hasDecimal = false;
    calculated = false;
    pwede = true;
}

function appendInput(input) {
    if (document.getElementById('result').value == 0 && input == 0) {
        calculated = false;
        return;
    }

    if (input != '.') {
        pwede = false;
    }

    if (['+', '-', '*', '/'].includes(input)) {
        hasDecimal = false;
        calculated = false;
        pwede = true;
    }

    if (input === '.' && !hasDecimal && pwede == true) {
        input = '0.';
        hasDecimal = true;
        pwede = false;
    }

    if (input === '.' && hasDecimal) {
        return;
    }

    if (document.getElementById('result').value === "Error" || 
        document.getElementById('result').value === "undefined" || 
        document.getElementById('result').value === "Bugok man deay ka!"||
        calculated == true) {
        clearInput()
    }
    
    calculated = false;
    document.getElementById('result').value += input;

    if (input === '.') {
        hasDecimal = true;
    }
}

function calculate() {
    try {
        if (document.getElementById('result').value === "Error" || document.getElementById('result').value === "undefined") {
            document.getElementById('result').value = "Bugok man deay ka!";
            return;
        }
        else {
            document.getElementById('result').value = eval(document.getElementById('result').value);
            calculated = true;
        }
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
