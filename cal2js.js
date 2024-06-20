const Display = document.getElementById('inputScreen')

function addToDisplay(inputNum){
    Display.value += inputNum
}

function clearDisplay(){
    Display.value = ''
}

function mathEvaluated(expression){
    try {
    const mathEqual = new Function('return ' + expression);
    const mathExe = mathEqual();
    return mathExe;
    }
    catch (error) {
        return "Something's wrong"
    }
}

function equalButton() {
    Display.value = mathEvaluated(Display.value)
}

function DelButton(){
    const DisplayArray = Display.value.split('')
    DisplayArray.pop()
    Display.value = DisplayArray.join('')
}
    