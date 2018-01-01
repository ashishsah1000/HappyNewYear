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
            username: "anjali",
            pass: "anjali111",
            pro: "Hello Anjali, Happy New Year. May this year bring lots of happiness to your life. Well, For your pros, you are a really helpful person. You believe in inspiring others.  The inspiring, helpful nature you have is an amenity for you. I hope you get all you want in your life.  You are quite intelligent, helpful and supportive. Your love for music is something I like very much, I enjoy singing the songs with you.  Keep helping others and keep inspiring others. Doing that will make a better society and even lead us to a better human race.",
            impro: "You have to understand the difference between right and wrong. They can deviate you from being a good human being apart from that they can also get you in many problems. So have a look. Well, you are quite helpful and kudos for that..."
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
        {
            username: "saroj mam",
            pass: "123saroj",
            pro: "Hello Saroj mam, Happy New Year. May this year bring lots of happiness to your life. Well, For your pros, you are a really a true teacher. I was not present whole year in the school but still, I liked your way. You explained each and every point to the students. Despite I was a very doubtful person you still tried to clarify my doubts. Never let this thing to pave away from you mam. I am really thankful for what you taught.Keep helping others and keep inspiring others. Doing that will make a better society and even lead us to a better human race.",
            impro: "I never know...beacuse I was not for a longer period in the school. So sorry mam."
        },
        {
            username: "ajay",
            pass: "ajay100",
            pro: "Hello Ajay, Happy New Year. May this year bring lots of happiness to your life. Well, For your pros, you are really a hardworking, intelligent and ambitious person. That even brings profit to your life. You try to cooperate with others and that is the amenity you have got. You are the person who has the power to muster everyone. kudos for that...Keep helping others and keep inspiring others. Doing that will make a better society and even lead us to a better human race.",
            impro: "You have to discriminate between good and bad. That can help you to make you a better person. You sometimes create chaos, Believe me, my friend life is beyond our thinking. Search for the things that will help you in augment."
        },
        {
            username: "petels",
            pass: "petels123",
            pro: "Hello, Friends, Happy New Year. I am really chuffed you are here. Prayer is something which can lead you to greed and disaster if done in wrong way. We, humans, are very selfish we always pray for ourself (god give me a beautiful  Gf, Bf, God please give me good marks thou the teacher is going to give you marks - _ -). This year try praying for others, Pray for this world happiness. What will you get in result? Immense Peace and satisfaction.  - Ashish",
            impro: "Sorry, For getting a detailed info about you...you can personal message me.I will create it for you. This ID is universal Id. That will be a fun PM me ;)"
        },
        {
            username: "saswati mam",
            pass: "mam123",
            pro: "Hello mam...Happy New Year....Mam, I am really thankful to you because due to you only, I was able to understand the life better. You are a perfect teacher, I have become your compliant. The days I spent with you, helped me to augment in my real life. Mam, you have got an amazing way of teaching. Even you have proved love is powerful than hatred. Thanks, mam.  Keep helping others and keep inspiring others. Doing that will make a better society and even lead us to a better human race.",
            impro: "Nothing I can say about you. But yess...app akele akele ghumte rhte hai... -_-"
        },
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