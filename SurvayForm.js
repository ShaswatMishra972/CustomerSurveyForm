document.getElementById("myform").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("FirstName").value = "";
    document.getElementById("LastName").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("con").value = "";
    document.getElementById("pro").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    var radioButton = document.getElementsByName("selection");
    for (var i = 0; i < radioButton.length; i++) {
        radioButton[i].checked = false;
    }
})
