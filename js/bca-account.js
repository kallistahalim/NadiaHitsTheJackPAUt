var buttonClicked = false;

$("#wedding-gift").click(function () {

    if (buttonClicked === false) {
        console.log("clicked!");
        buttonClicked = true;
        $("#paulus-address").html("<br>Jl. Dharma Puri Raya Blok F6 No.27A, RT.4/RW.8, Semanan, Kec. Kalideres, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11850, Indonesia");
        $("#image-bca").html("<img src='./images/8.jpeg' id='bca-paulus'>");
        $("#bank-account-number").html("BCA 549013495 a/n Paulus Julizar Hartanto")
    } else {
        $("#paulus-address").empty();
        $("#image-bca").empty();
        $("#bank-account-number").empty();
        buttonClicked = false;
    }
});