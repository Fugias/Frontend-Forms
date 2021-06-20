const form = document.querySelector(`form`);
const inputs = document.querySelectorAll(`input`);
const submit = document.querySelector(`button`);
const errors = document.querySelectorAll(`.error`);
const errorsIcon = document.querySelectorAll(`.errorIcon`);

form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    inputsValidation();
})

const inputsValidation = () => {
    for(let i = 0; i < inputs.length; i++)
    {
        
        if(!inputs[3].value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))
    {
        inputs[3].style.border = "red 1px solid";
        inputs[3].style.color = "red";
        errors[3].style.visibility = "visible";
        errors[3].innerText ="Looks like this is not an email";
        errorsIcon[3].style.display = "block";
    }

        if(!inputs[i].value)
        {
            inputs[i].style.border = "red 1px solid";
            inputs[i].style.color = "red";
            errors[i].style.visibility = "visible";
            errorsIcon[i].style.display = "block";
            if(i == 0)
            {
                errors[i].innerText ="First Name cannot be empty"
            }
            else if(i == 1)
            {
                errors[i].innerText ="Last Name cannot be empty"
            }
            else if(i == 2)
            {
                errors[i].innerText ="Password cannot be empty"
            }
            else if(i == 3)
            {
                errors[i].innerText ="Email cannot be empty"
            }   
        }

    }
}

for(let i = 0; i < inputs.length; i++){
inputs[i].addEventListener(`input`, (e) => {
    inputs[i].style.border = "hsl(246, 25%, 77%) 1px solid";
    inputs[i].style.color = "black";
    errors[i].style.visibility = "hidden";
    errorsIcon[i].style.display = "none";
})
}