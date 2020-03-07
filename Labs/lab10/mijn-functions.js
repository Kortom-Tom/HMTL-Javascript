var euro_dollarkoers = '1.36';
var dollar_eurokoers = '0.74';
var euro_roebelkoers = '48.40';
var roebel_eurokoers = '0.02';

function exchange(bedrag,conversie){


    var bedrag = document.getElementById("bedrag").value;
    var k = document.getElementById("conversie").value;
    if (k == 'euro/dollar' ){
        return bedrag * euro_dollarkoers;
    }
    else if (k == "dollar/euro"){
        return bedrag * dollar_eurokoers;
    }
    else if (k == "rubels/euro"){
        return bedrag * roebel_eurokoers;
    }
    else if (k == "euro/rubels"){
        return bedrag * euro_roebelkoers;
    }



}