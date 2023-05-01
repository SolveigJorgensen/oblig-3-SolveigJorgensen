function bestill(){

    const billetter = {
        film : $("#film").val(),
        antall : $("#antall").val(),
        fornavn : $("#fnavn").val(),
        etternavn : $("#enavn").val(),
        telefonnr : $("#telfnr").val(),
        epost : $("#epost").val(),
    }

    if(sjekkInput(billetter)){

        $.post("/lagre", billetter, function (){
            hentArray();
        });
        console.log("hei");
        deleteInput();
    }
}

function deleteInput(){
    $("#antall").val("");
    $("#fnavn").val("");
    $("#enavn").val("");
    $("#telfnr").val("");
    $("#epost").val("");
}

function sjekkInput(billetter){
    let isValid = true
    if(billetter.antall === ""){
        document.getElementById("e1").innerHTML = "Skriv inn antall";
        isValid = false
    }
    else {
        document.getElementById("e1").innerHTML = "";
    }
    if(billetter.fornavn === ""){
        document.getElementById("e2").innerHTML = "Skriv inn navn";
        isValid = false
    }
    else {
        document.getElementById("e2").innerHTML = "";
    }
    if(billetter.etternavn === ""){
        document.getElementById("e3").innerHTML = "Skriv inn navn";
        isValid = false
    }
    else {
        document.getElementById("e3").innerHTML = "";
    }
    if(billetter.telefonnr === ""){
        document.getElementById("e4").innerHTML = "Skriv inn telfnr";
        isValid = false
    }
    else {
        document.getElementById("e4").innerHTML = "";
    }
    if(billetter.epost === ""){
        document.getElementById("e5").innerHTML = "Skriv inn epost";
        isValid = false
    }
    else {
        document.getElementById("e5").innerHTML = "";
    }
    return isValid
}
function hentArray() {
    $.get("/hentArray", function (data) {
        formaterData(data);
    });
}
function formaterData(Billetter) {
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Navn</th><th>Etternavn</th><th>Telfnr</th><th>Epost</th>" +
        "</tr>";

    for(const x of Billetter){
        ut += "<table><tr>";
        ut += "<td>"+x.film+"</td><td>"+x.antall+"</td><td>"+x.fornavn+"</td><td>"+x.etternavn+"</td><td>"+x.telefonnr+"</td><td>"+x.epost+"</td>";
        ut+= "</tr>";
    } ut += "</table>";

    $("#array").html(ut);
}

function slettArr(){
    $.get("/slettArr", function(){
        hentArray();
    });
    $("#array").html("");
}

