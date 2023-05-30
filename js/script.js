function calculate() {
    const category = document.getElementById("category");
    const cantity = document.getElementById("cantity");
    const resultContainer = document.getElementById("result");
    let selectedCategory = category.value;
    let percent = 0;
    let ticketsCantity = parseInt(cantity.value);

    switch (selectedCategory) {
        case "student":
            percent = 80;
            break;
        case "trainee":
            percent = 50;
            break;
        case "junior":
            percent = 15;
            break;
    }

    let ticketsTotalCant = (ticketsCantity * 200)
    let discount = ticketsTotalCant * percent / 100;
    let total = ticketsTotalCant - discount;

    resultContainer.textContent = total;
}

function reset() {
    const resultContainer = document.getElementById("result");
    const cantidadComprada = document.getElementById("cantity");

    resultContainer.textContent = ""
    cantidadComprada.value = 0;
}

function validateLetters(input) {
    var regex = /[^a-zA-Z\s]/g;
    input.value = input.value.replace(regex, "");
}