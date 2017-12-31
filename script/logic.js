$(document).ready(function() {
    $(".result").hide();
    var name = "";
    var pass = '';
    var flag = 0;
    var users = [
        { username: "ashish", pass: "123", pro: "abc", impro: "xyz" },
        { username: "animesh", pass: "animesh123" },
        { username: "shilpi", pass: "shilpi123" },
        { username: "manisha", pass: "123manisha" },
        { username: "chetna mam", pass: "123" },
        { username: "aditya", pass: "123452" },
    ];
    var l = users.length;
    $("#start").click(function() {
        name = $('#mySelect :selected').text();
        if (name == "animesh")
            console.log("yes")

    });
    $("#passGo").click(function() {
        pass = $('#pass').val();

        check(name, pass);
    });

    function check(username, pass) {
        console.log(username);
        console.log(pass);
        for (var i = 0; i < l; i++) {
            if (users[i].username == username && users[i].pass == pass) {
                flag = i;
                console.log(flag);
                work(flag);
                break;
            } else {
                flag = 0;
            }

        }
    }

    function work(flag) {
        $(".info").hide();
        $(".result").show();
        var welcome = "Welcome " + users[flag].username + " let's unbox your Message...";
        $(".a_name").html(welcome);
        var pr = users[flag].pro;
        var im = users[flag].impro;
        $(".pro").html(pr);
        $(".impro").html(im);


    }
});