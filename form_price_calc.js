//Form 1- Avatar Retextures
function aRcalculatePrice()
{
    //checkbox price variable
    var checkboxTotal = 0;
    //Base Price
    var base = document.getElementById("basePrice");
    var base_Price = base.value;
    //Variable for all checkboxes
    var ARchecks = document.getElementsByClassName("ARForm");
    //Material Swaps
    var MS = document.getElementById("materialSwaps");
    var MS_price = (MS.options[MS.selectedIndex].value * 5);
    //Color Change Wheels
    var CCW = document.getElementById("CCW");
    var CCW_price = (CCW.options[CCW.selectedIndex].value * 5);

    //calculate checkbox total price
    for (var i=0; i<ARchecks.length; i++)
    {
        if(ARchecks[i].checked)
        {
            checkboxTotal += 10;
        }
    }

    //convert all form data into intergers
    MS_price = parseInt(MS_price);
    CCW_price = parseInt(CCW_price);
    base_Price = parseInt(base_Price);
    checkboxTotal = parseInt(checkboxTotal);

    //calculate total form price
    var ARtotal = base_Price + MS_price + CCW_price + checkboxTotal;

    //print value to ARtotalPrice
    document.getElementById("ARtotalPrice").value = "$" + ARtotal;
}

//Form 3 - Blender Renders
function bRcalculatePrice()
{
    //checkbox price variable
    type_price = 0;
    //YCH Render
    var YCH = document.getElementById("YCH");
    //Custom Render
    var CR = document.getElementById("custom");
    //Extra Characters
    var EC = document.getElementById("extraCharacters");
    var EC_price = (EC.options[EC.selectedIndex].value * 10);

    if (YCH.checked)
    {
        type_price += 20;
    }

    if(CR.checked)
    {
        type_price += 35;
    }
    //convert to int
    type_price = parseInt(type_price);
    //calculate total form price
    var BRtotal = EC_price + type_price;

    //print value to BEtotalPrice
    document.getElementById("BRtotalPrice").value = "$" + BRtotal;
}

//Form 4 - Video Editing
function vEcalculatePrice()
{
    //Get hours selected
    var hours = document.getElementById("hours");
    var hours_price = (hours.options[hours.selectedIndex].value * 15);

    //convert into intergers
    hours_price = parseInt(hours_price);

    //print value to VEtotalPrice
    document.getElementById("VEtotalPrice").value = "$" + hours_price;
}