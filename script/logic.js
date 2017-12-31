$(document).ready(function() {
    var name = "";
    var pass = '';
    var flag = 0;
    var users = [
        { username: "ashish", pass: "1234524" },
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
                flag = 1;
                console.log(flag);
                break;
            } else {
                flag = 0;
            }

        }
        console.log(flag);
    }
});