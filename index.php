<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="calc.css">
    <script src="./calc.js"></script>
</head>
<body>
    <div class="calculator">
        <input type="text" id="result" value = "0" readonly>
        <br>
        <input type="button" value="7" onclick="appendInput('7')">
        <input type="button" value="8" onclick="appendInput('8')">
        <input type="button" value="9" onclick="appendInput('9')">
        <input type="button" value="/" onclick="appendInput('/')">
        <br>
        <input type="button" value="4" onclick="appendInput('4')">
        <input type="button" value="5" onclick="appendInput('5')">
        <input type="button" value="6" onclick="appendInput('6')">
        <input type="button" value="*" onclick="appendInput('*')">
        <br>
        <input type="button" value="1" onclick="appendInput('1')">
        <input type="button" value="2" onclick="appendInput('2')">
        <input type="button" value="3" onclick="appendInput('3')">
        <input type="button" value="-" onclick="appendInput('-')">
        <br>
        <input type="button" value="0" onclick="appendInput('0')">
        <input type="button" value="." onclick="appendInput('.')">
        <input type="button" value="C" onclick="clearInput()">
        <input type="button" value="+" onclick="appendInput('+')">
        <br>
        <input type="button" class="eq" value="=" onclick="calculate()">
    </div>
</body>
</html>
