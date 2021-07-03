var buttonClicked = false;

$(".wedding-gift-button").click(function () {

    if (buttonClicked === false) {
        console.log("clicked!");
        buttonClicked = true;
        $("#image-bca").html("<img src='./images/8.jpeg' id='bca-paulus'>");
        $("#bank-account-number").html("BCA 5490513495 a/n Paulus Julizar Hartanto")
    } else {
        $("#image-bca").empty();
        $("#bank-account-number").empty();
        buttonClicked = false;
    }
});