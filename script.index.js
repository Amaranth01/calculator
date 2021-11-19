let buttonnumber = document.getElementsByClassName('bouttonnumber')
let input = document.getElementById('output');
let buttonOperande = document.getElementsByClassName('operande');
let buttonEgal = document.getElementById('calcul');
let buttonPoint = document.getElementById('comma');
let buttonReset = document.getElementById('del');

//value

for ( let button of buttonnumber) {
    button.addEventListener('click', function () {
        let dataNumber = button.innerHTML;
        input.innerHTML += dataNumber;
    })
}

for (let button of buttonOperande) {
    button.addEventListener('click', function () {
        let dataOperande = button.innerHTML;
        input.innerHTML += dataOperande;
    })
}

buttonEgal.addEventListener('click', function () {
    input.innerHTML = eval(input.innerHTML);
})

buttonPoint.addEventListener('click', function () {
    let dataPoint = buttonPoint.innerHTML;
    input.innerHTML += dataPoint;
})

buttonReset.addEventListener('click', function (){
    input.innerHTML = null;
})

//copy

document.getElementById('copy').addEventListener('click', function (){

    let range = document.createRange();
    range.selectNode(input);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
})

