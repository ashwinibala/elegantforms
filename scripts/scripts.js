// JavaScript File

// global variables
const formElements = new Object();
let errors = "";

function formSubmit()
{
    formElements.glassCandyBox = document.getElementById("glassCandyBox").value || 0;
    formElements.gummyBear = document.getElementById("gummyBear").value || 0;
    formElements.candyCane = document.getElementById("candyCane").value || 0;
    formElements.bubbleGum = document.getElementById("bubbleGum").value || 0;
    formElements.lollipopCandy = document.getElementById("lollipopCandy").value || 0;
    formElements.cakeLollipop = document.getElementById("cakeLollipop").value || 0;
    formElements.fudgeLollipop = document.getElementById("fudgeLollipop").value || 0;
    formElements.assortedCandy = document.getElementById("assortedCandy").value || 0;

    formElements.name = document.getElementById("name").value;
    formElements.phone = document.getElementById("phone").value;
    formElements.creditCardNumber = document.getElementById("creditCardNumber").value;
    formElements.creditCardExpiryMonth = document.getElementById("creditCardExpiryMonth").value;
    formElements.creditCardExpiryYear = document.getElementById("creditCardExpiryYear").value;

    // Validating the product values
    validateNumeric(formElements.glassCandyBox, "PepperMint Glass Candy box");
    validateNumeric(formElements.gummyBear, "PepperMint Gummy Bears box");
    validateNumeric(formElements.candyCane, "PepperMint Candy Cane box");
    validateNumeric(formElements.bubbleGum, "PepperMint BubbleGum box");
    validateNumeric(formElements.lollipopCandy, "PepperMint Lollipop Candy box");
    validateNumeric(formElements.cakeLollipop, "PepperMint cake lollipop box");
    validateNumeric(formElements.fudgeLollipop, "PepperMint fudge lollipop box");
    validateNumeric(formElements.assortedCandy, "PepperMint Assorted Candy box");

    // Validating name
    validateString(formElements.name);

    // Validating Phone
    validatePhoneNumber(formElements.phone);

    // Validating Credit Card number
    if (formElements.creditCardNumber !== "")
    {
        validateCreditCardNumber(formElements.creditCardNumber);
    }

    // Validating Credit Card month
    if (formElements.creditCardExpiryMonth)
    {
        validateCreditCardMonth(formElements.creditCardExpiryMonth);
    }

    // Validating Credit Card year
    if (formElements.creditCardExpiryYear)
    {
        validateCreditCardYear(formElements.creditCardExpiryYear);
    }

    if (errors === "")
    {
        calculateCost();
        if (errors === "")
        {
            printReceipt();
        }
        else{
            printErrors();
        }
    }
    else
    {
        printErrors();
    }
    return false;
}

function validateNumeric(value, productName)
{
  if ((isNaN(value)) || (value % 1 !== 0) || value < 0)
  {
    errors += "<li>Please enter a number in " + productName + "<br/>";
    console.log(errors);
  }
}

function validateString(value)
{
  let letters = /^[a-zA-Z\s]+$/;
  if (value === "" || !(value.match(letters)))
  {
    errors += "<li>Please enter appropriate name<br/>";
  }
}

function validatePhoneNumber(value)
{
  let phoneNumberPattern = /^[\d]{3}[\s\-]?[\d]{3}[\s\-]?[\d]{4}$/;
  if (value === "" || !(value.match(phoneNumberPattern)))
  {
    errors += "<li>Please enter appropriate phone number<br/>";
  }
}

function validateCreditCardNumber(value)
{
  let creditCardPattern = /^[\d]{4}[\s\-]?[\d]{4}[\s\-]?[\d]{4}[\s\-]?[\d]{4}$/;
  if (!(value.match(creditCardPattern)))
  {
    errors += "<li>Please enter appropriate Credit Card number<br/>";
  }
}

function validateCreditCardMonth(value)
{
  let creditCardMonthPattern = /^[\d]{2}$/;
  if (!(value.match(creditCardMonthPattern)) || value > 12)
  {
    errors += "<li>Please enter appropriate Credit Card month<br/>";
  }
}

function validateCreditCardYear(value)
{
  let creditCardYearPattern = /^[\d]{4}$/;
  if (!(value.match(creditCardYearPattern)) || value < 2023)
  {
    errors += "<li>Please enter appropriate Credit Card year<br/>";
  }
}

function printErrors()
{
    let output = document.getElementById("output");
    output.innerHTML = "<h2 class=\"validation\">Validation Errors</h2><ul>" + errors + "</ul>";
    errors = "";
}

function calculateCost()
{
    formElements.glassCandyBoxCost = 0;
    formElements.gummyBearCost = 0;
    formElements.candyCaneCost = 0;
    formElements.bubbleGumCost = 0;
    formElements.lollipopCandyCost = 0;
    formElements.cakeLollipopCost = 0;
    formElements.fudgeLollipopCost = 0;
    formElements.assortedCandyCost = 0;

    if(formElements.glassCandyBox > 0)
    {
        formElements.glassCandyBoxCost = formElements.glassCandyBox * 4;
    }
    if(formElements.gummyBear > 0)
    {
        formElements.gummyBearCost = formElements.gummyBear * 5;
    }
    if(formElements.candyCane > 0)
    {
        formElements.candyCaneCost = formElements.candyCane * 6;
    }
    if(formElements.bubbleGum > 0)
    {
        formElements.bubbleGumCost = formElements.bubbleGum * 7;
    }
    if(formElements.lollipopCandy > 0)
    {
        formElements.lollipopCandyCost = formElements.lollipopCandy * 8;
    }
    if(formElements.cakeLollipop > 0)
    {
        formElements.cakeLollipopCost = formElements.cakeLollipop * 10;
    }
    if(formElements.fudgeLollipop > 0)
    {
        formElements.fudgeLollipopCost = formElements.fudgeLollipop * 12;
    }
    if(formElements.assortedCandy > 0)
    {
        formElements.assortedCandyCost = formElements.assortedCandy * 15;
    }

    formElements.totalCost = formElements.glassCandyBoxCost + formElements.gummyBearCost 
        + formElements.candyCaneCost + formElements.bubbleGumCost + formElements.lollipopCandyCost 
        + formElements.cakeLollipopCost + formElements.fudgeLollipopCost + formElements.assortedCandyCost;
    
    formElements.gst = formElements.totalCost * 0.13;

    formElements.overallTotalCost = formElements.totalCost + formElements.gst;

    if(formElements.totalCost < 10)
    {
        errors += "The overall order $" + formElements.overallTotalCost + " is less than $10<br/>";
    }
}

function printReceipt()
{
    let output = document.getElementById("output");

    let receipt = "<h2 class=\"receipt\">Order Details</h2><div><center><table id=\"receipt-table\" border=\"1\">";

    receipt += "<tr><th>Name</th><td>" + formElements.name + "</td></tr>";

    receipt += "<tr><th>Phone</th><td>" + formElements.phone + "</td></tr>";

    receipt += "</table><br/>";

    receipt += "<table id=\"receipt-table\" border=\"1\">";

    receipt += "<tr><th>Item</th><th>Quantity</th><th>Unit Price</th><th>Total Price</th></tr>";

    if(formElements.glassCandyBox > 0)
    {
        receipt += "<tr><td>PepperMint Glass Candy box</td><td>" + formElements.glassCandyBox + "</td><td>$4</td><td>$" + formElements.glassCandyBoxCost + "</td></tr>";
    }

    if(formElements.gummyBear > 0)
    {
        receipt += "<tr><td>PepperMint Gummy Bears box</td><td>" + formElements.gummyBear + "</td><td>$5</td><td>$" + formElements.gummyBearCost + "</td></tr>";
    }

    if(formElements.candyCane > 0)
    {
        receipt += "<tr><td>PepperMint Candy Cane box</td><td>" + formElements.candyCane + "</td><td>$6</td><td>$" + formElements.candyCaneCost + "</td></tr>";
    }

    if(formElements.bubbleGum > 0)
    {
        receipt += "<tr><td>PepperMint BubbleGum box</td><td>" + formElements.bubbleGum + "</td><td>$7</td><td>$" + formElements.bubbleGumCost + "</td></tr>";
    }

    if(formElements.lollipopCandy > 0)
    {
        receipt += "<tr><td>PepperMint Lollipop Candy box</td><td>" + formElements.lollipopCandy + "</td><td>$8</td><td>$" + formElements.lollipopCandyCost + "</td></tr>";
    }

    if(formElements.cakeLollipop > 0)
    {
        receipt += "<tr><td>PepperMint cake lollipop box</td><td>" + formElements.cakeLollipop + "</td><td>$10</td><td>$" + formElements.cakeLollipopCost + "</td></tr>";
    }

    if(formElements.fudgeLollipop > 0)
    {
        receipt += "<tr><td>PepperMint fudge lollipop box</td><td>" + formElements.fudgeLollipop + "</td><td>$12</td><td>$" + formElements.fudgeLollipopCost + "</td></tr>";
    }

    if(formElements.assortedCandy > 0)
    {
        receipt += "<tr><td>PepperMint Assorted Candy box</td><td>" + formElements.assortedCandy + "</td><td>$15</td><td>$" + formElements.assortedCandyCost + "</td></tr>";
    }

    receipt += "<tr><td colspan=3>Sub Total</td><td>$" + formElements.totalCost + "</td></tr>";

    receipt += "<tr><td colspan=3>GST</td><td>$" + formElements.gst + "</td></tr>";

    receipt += "<tr><td colspan=3>Total</td><td>$" + formElements.overallTotalCost + "</td></tr>";

    receipt += "</table><center></div>";

    output.innerHTML = receipt;
}
