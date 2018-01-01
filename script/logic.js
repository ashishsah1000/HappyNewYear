$(document).ready(function() {
    $(".result").hide();
    $(".error").hide();
    $(".succ").hide();
    $(".fail").hide();
    var name = "";
    var pass = '';
    var flag = 0;
    var users = [{
            username: "ashish",
            pass: "123",
            pro: "You are really a great guy, But all you need to have a attention on your goals thats all",
            impro: "i dont know what to say."
        },
        {
            username: "chandan sir",
            pass: "chandan123",
            pro: "Hello Sir, Happy New Year. May this year bring lots of happiness to your life. Well, For your pros, you are quite chuffed and jovial kind of person. You help everyone and the main thing you do, You help them mentally. The talking nature you have is an amenity for you. I hope you get all you want in your life. Sir, Keep helping others and keep inspiring others. Doing that will make a better society and even lead us to a better human race.",
            impro: "The things you need to improve, you just need to get started with your dreams or interest as soon as possible. Try to attend TM as much as possible because it links us to many people of different profession."
        },
        {
            username: "gourav",
            pass: "gourav110",
            pro: "Hey animesh I am glad to see you...",
            impro: "many thing to be improved"
        },
        { username: "shilpi", pass: "shilpi123", pro: "", impro: "" },
        {
            username: "manisha",
            pass: "123manisha",
            pro: "Hello Manisha, Happy New Year. May this year bring lots of happiness to your life. Well, For your pros, you are an honest and trustful person. You believe in true love and that's the main part of you, Very few people are so.  The honest nature you have is an amenity for you. I hope you get all you want in your life.  You are quite intelligent and you even go against of the wrong dowers. You are heart is full of emotions and you can't see anyone doing wrong. Keep helping others and keep inspiring others. Doing that will make a better society and even lead us to a better human race.",
            impro: "The things you need to improve, you just need to get started with your dreams or interest as soon as possible, unprejudicial about the problems you may have. Try to focus on your dream first and achieve that...We have to travel a lot :) and try to understand others perspective. Sometimes no one is wrong, will always pray for your happiness."
        },
        {
            username: "chetna mam",
            pass: "chetna123",
            pro: "Hello Chetna Mam, Happy New Year. May this year bring lots of happiness to your life. Well, For your pros, you are an honest and trustful person. You believe in inspiring others.  The inspiring nature you have is an amenity for you. I hope you get all you want in your life.  You are quite intelligent and you even go against of the wrong dowers. You support others and want to make a better society, Even you seem to be successful.  Keep helping others and keep inspiring others. Doing that will make a better society and even lead us to a better human race.",
            impro: "The things you need to improve: Mam you are my teacher but still as I will tell, because I had said that. Sometimes you are unprejudicial about few students. May you be quite busy...but it feels happy when we get your advice...Well, thanks Mam for supporting us. "
        },
        { username: "aditya", pass: "123452", pro: "", impro: "" },
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
                $(".error").show();
                $(".fail").show();
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
        $(".error").show();
        $(".succ").show();
        $(".fail").hide();


    }
});