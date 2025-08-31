let input = "";

function press(value) {
    input += value;
    document.getElementById("display").value = input;
}

function clearDisplay() {
    input = "";
    document.getElementById("display").value = "";
}

function calculate() {
    try {
       let result = eval(input);
        document.getElementById("display").value = result;
        input = result.toString();
    } catch {
        document.getElementById("display").value = "Error";
        input = "";
    }
}
