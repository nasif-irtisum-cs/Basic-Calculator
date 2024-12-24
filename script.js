let data1 = document.getElementById ("data1");
let data2 = document.querySelector ("#data2");
let operator = document.querySelector ("#op");
let btn = document.querySelector (".btn");
let msg = document.querySelector ("#alert-msg")


btn.addEventListener ('click', () => {
    if (!data1.value || !data2.value) {
        msg.classList.add("alert");
        msg.classList.add ("alert-danger");
        msg.innerHTML = "Input Two Numbers Perfectly"
        setTimeout (() => {
            location.reload();
        },3000);

        return;
    }

    let num1 = Number (data1.value);
    let num2 = Number (data2.value);

    if (isNaN (num1) || isNaN (num2)) {
        msg.classList.add ("alert");
        msg.classList.add ('alert-danger');
        msg.innerHTML="Enter Two Valid Numbers";

        setTimeout (function() {
            location.reload ();
        }, 3000);

        return;
    }

    if (operator.value === "+") {
        msg.classList.add ("alert");
         msg.classList.add ("alert-success")
        msg.innerHTML = `Result: ${num1+num2}`;
    }
    else if (operator.value === "-") {
        msg.classList.add ("alert");
         msg.classList.add ("alert-success")
        msg.innerHTML = `Result: ${num1-num2}`;
    }
    else if (operator.value === "*") {
        msg.classList.add ("alert");
         msg.classList.add ("alert-success")
        msg.innerHTML = `Result: ${num1*num2}`;
    }
    else if (operator.value === "/") {
        msg.classList.add ("alert");
         msg.classList.add ("alert-success")
        msg.innerHTML = `Result: ${num1/num2}`;
    }
})
