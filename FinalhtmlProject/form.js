$('form input[type ="text"]').on('blur', function () {
    console.log('you entered', this.value);
    var name = this.value;
    if (name.length < 1) {
        $("#namemsg").html("user name required");
        //  console.log("user name required");
    } else {

        $("#namemsg").html("");
    }
});

$('form input[type ="email"]').on('blur', function () {
    console.log('you entered', this.value);
    var email = this.value;
    var at = "@";
    var dot = ".";
    if (email.includes(at) && email.includes(dot) && (email.length > 0)) {
        //console.log("Valid email");

        $("#emailmsg").html("");
    } else {
        // console.log('Invalid email.');

        $("#emailmsg").html("Invalid Email");
    }

});

var pswd = "pass";
$('form input[id ="pswd"]').on('blur', function () {
    console.log('you entered', this.value);
    pswd = this.value;
    if (pswd.length < 8) {
        console.log("Password requires minimum 8 charactes");

        $("#pswdmsg").html("Password requires minimum 8 charactes");
    } else {
        // console.log('Strong Password');
        $("#pswdmsg").html("  ");
        console.log("success");
    }

});

$('form input[id ="cpswd"]').on('blur', function () {
    console.log('you entered', this.value);
    var cpswd = this.value;
    if (cpswd.length < 8) {

        $("#cpswd").removeClass("is-valid");
        $("#cpswd").addClass("is-invalid");

    }
    if (pswd === cpswd) {

        //console.log('Password Confirmed');

        $("#cpswd").removeClass("is-invalid");

        $("#cpswd").addClass("is-valid");
    } else {

        // console.log('Password Missmatch');

        $("#cpswd").removeClass("is-valid");
        $("#cpswd").addClass("is-invalid");


    }
});


$('form input[type="date"]').on('blur', function () {
    var dob = $('#dob').val();

    var now = new Date();
    var s = now.getFullYear();
    var k = new Date(dob);
    var q = k.getFullYear();
    var dif = s - q;
    console.log(dif);

    if (dif < 18) {

        $("#age").html(`You need a parent's permission to
                    join.<br>Tick here if your child can join:
                    <input type="checkbox" name="agree" value="yes">`);
    } else {
        $("#age").html(" ");

    }

});




$("#button2").click(function () {

    var newtext = $("#newtext").val();
    $(".logDiv").append('<div id="bid" onclick="myFunction()" class="five">' + newtext + '</div>');
    var count = ($("div #bid").length);
    $(".countfield").text(count);
});

function countChar(val) {
    var len = val.value.length;
    if (len >= 10) {
        val.value = val.value.substring(0, 3);
    } else {
        $('#charNum').text(140 - len);
    }
};
