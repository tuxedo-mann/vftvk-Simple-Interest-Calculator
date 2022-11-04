function compute()
{
    //Grab all input information
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    if (!inputValidation(principal)){ return } // If value is invalid stop execution
    //Compute the interest and the year
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    
    //Display Output
    var result = document.getElementById("result")
    result.innerHTML = `If you deposit <mark> ${principal} </mark> \n at an interest rate of <mark> ${rate}% </mark>,\n you will receive an amount of <mark> ${interest} </mark> in the year <mark> ${year} </mark>`
}

//Dymanically show the input of the range slider for interest rate
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

//Ensure input into principal field is a number
function inputValidation(principal) {
    if (principal == NaN || principal <= 0) {
        alert("Enter a Positive Number")
        document.getElementById("principal").focus()
        return falsegit 
    }
    return true
}
        