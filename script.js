let json;
fetch("./questions.json")
    .then(response => {
        return response.json();
    })
    .then((data) => {
        json = data
    });


// add questions
setTimeout(() => {
    let columnA = Object.values(json.column_a);
    let columnB = Object.values(json.column_b);
    let columnC = Object.values(json.column_c);
    let columnD = Object.values(json.column_d);

    let semifinal = Object.values(json.final);


    document.querySelectorAll(".column-a .column-item").forEach(function (item, index) {
        item.querySelector('span').innerHTML = columnA[index]
    })
    document.querySelectorAll(".column-b .column-item").forEach(function (item, index) {
        item.querySelector('span').innerHTML = columnB[index]
    })
    document.querySelectorAll(".column-c .column-item").forEach(function (item, index) {
        item.querySelector('span').innerHTML = columnC[index]
    })
    document.querySelectorAll(".column-d .column-item").forEach(function (item, index) {
        item.querySelector('span').innerHTML = columnD[index]
    })

    document.querySelectorAll(".semi-final .column-item").forEach(function (item, index) {
        item.querySelector('span').innerHTML = semifinal[index]
    })

    document.querySelectorAll(".final .column-item").forEach(function (item, index) {
        item.querySelector('span').innerHTML = json.main_ans;
    })


}, 500);



// functions

function revealFirstRound(id, column) {
    let allowContinue = true;
    if (column) {
        let col = document.querySelector("." + column);
        col.querySelectorAll(".column-item").forEach(function (item) {
            if (item.querySelector('span').classList.contains('none')) {
                item.classList.add('red-border')
                allowContinue = false;
            }
            else {
                item.classList.remove('red-border')
            }
        })
    }
    if (allowContinue) {
        let main = document.querySelector('#' + id);
        let h3 = main.querySelector('h3');
        let span = main.querySelector('span');

        h3.classList.add('none');
        span.classList.remove('none');
        main.classList.add('oppened-col')
    }
}
function revealFinal(id) {
    let allowContinue = true;

    let col = document.querySelector(".semi-final");
    col.querySelectorAll(".column-item").forEach(function (item) {
        if (item.querySelector('span').classList.contains('none')) {
            item.classList.add('red-border')
            allowContinue = false;
        }
        else {
            item.classList.remove('red-border')
        }
    })
    if (allowContinue) {
        let main = document.querySelector('#' + id);
        let h3 = main.querySelector('h3');
        let span = main.querySelector('span');

        h3.classList.add('none');
        span.classList.remove('none');
        main.classList.add('oppened-col')
    }
}