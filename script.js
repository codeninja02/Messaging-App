// checkboxes' status

var ch1 = false;
var ch2 = false;
var ch3 = false;
var ch4 = false;

var unsubscribe;

// Input Management

var max_chars = 20;

var groups_array_name = [
    "General Discussion",
    "Web Development",
    "Code & Ask",
    "Challenges",
    "Off Topic General",
    "Anime",
    "Music",
    "Maths & Science",
    "Javascript",
    "Python"
];

var stickers_array = [
    "https://steamuserimages-a.akamaihd.net/ugc/948455238665292615/A916B1B7B504F4745BC230BE36AA5C19164998FA/",
    "https://i.pinimg.com/originals/0b/9d/b5/0b9db507469a0a92401c742a216a5fc8.gif",
    "https://i.gifer.com/4eXL.gif",
    "https://media.discordapp.net/attachments/785173137854955521/797442888078196746/caa2.gif",
    "https://media.tenor.com/images/760ee8f212d72613a2e23ab2954893bd/tenor.gif",
    "https://images-ext-1.discordapp.net/external/8AV1OzrAVOgGCNf-7D-Vvs1TrVEPOcKzmj3RPcVx-B8/https/media.discordapp.net/attachments/361066413923893249/792508564232732722/aqua.gif",
    "https://media.tenor.com/images/bf139869d81cd9b73144d6b941ebb733/tenor.gif",
    "https://64.media.tumblr.com/8ec8fc212104efc693b15c915d78da17/3e951e5af26c5a39-35/s540x810/f71eb68df86ce794dbb4de93a7d4593d86ce44d6.gifv",
    "https://i.pinimg.com/originals/25/e0/45/25e0450a39f1c01fef9cac41a2da14bb.gif",
    "https://media.tenor.com/images/acc4116372dcc4b342cb1a00ae657151/tenor.gif",
    "https://media.tenor.com/images/00a6ecf0b9c158c3ed27425cc94a2392/tenor.gif",
    "https://media3.giphy.com/media/fxe8v45NNXFd4jdaNI/giphy.gif",
];
var color_array = ["#8B80F9", "#C19875", "#294C60", "#ffa363", "#f24856", "#ffa046", "#02948d", "#6290C8", "#7f39c9", "#00d6a1", "#7B8CDE", "#cd7cc9", "#3E92CC", "#0fbd76"];

$('#emailSignUp1').on('keydown', function (event) {
    // var regex = new RegExp("^[a-zA-Z0-9]+$");
    // var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // if (!regex.test(key)) {
    //    event.preventDefault();
    //    return false;
    // }
});

$('#emailSignUp1').on('focusout', function () {

    if($("#emailSignUp1").val().trim().toLowerCase().length !== 0){
        $(".username__s_1_L").css({display: "block", filter: "opacity(1)"});
        $(".username__tick_1").css({display: "none", filter: "opacity(0)"});
        $(".username__s_1").css({display: "none", filter: "opacity(0)"});
        $(".username__s_2").css({display: "none", filter: "opacity(0)"});

        let docRef = db.collection("users624024").doc( $('#emailSignUp1').val().trim().toLowerCase() );
        docRef.get().then(function(doc) {
            $(".username__s_1_L").css({display: "none", filter: "opacity(0)"});
            if (doc.exists) {
                $(".username__s_1").css({display: "block", filter: "opacity(1)"});
                $(".username__s_2").css({display: "block", filter: "opacity(1)"});
            } else {
                $(".username__tick_1").css({display: "block", filter: "opacity(1)"});
            }
        }).catch(function(error) {
            // console.log("Error getting document:", error);
        });

    }

});

$('#passwordSignUp1').on('keydown', function (event) {
    // var regex = new RegExp("^[a-zA-Z0-9]+$");
    // var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // if (!regex.test(key)) {
    //    event.preventDefault();
    //    return false;
    // }
});

$('#emailLogIn2').on('keydown', function (event) {
    // var regex = new RegExp("^[a-zA-Z0-9]+$");
    // var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // if (!regex.test(key)) {
    //    event.preventDefault();
    //    return false;
    // }
});

$('#passwordLogIn2').on('keydown', function (event) {
    // var regex = new RegExp("^[a-zA-Z0-9]+$");
    // var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // if (!regex.test(key)) {
    //    event.preventDefault();
    //    return false;
    // }
});

function limitKeypress(event, value, maxLength) {
    if (value != undefined && value.toString().length >= maxLength) {
        event.preventDefault();
    }
}

function initializeScreen(){
    $(".groups-container").css({display: "block"});
    $(".groups-filter-container").css({display: "none"});
    setTimeout(function(){
        $("#splashScreen").css({filter: "opacity(0)"});
        $(".section__1").css({transform: "translateX(" + 0 + "px"});
    }, 800)
    setTimeout(function(){
        $("#splashScreen").css({display: "none"});
    }, 1000);
}

initializeScreen();

$("#ch1").on("click", function(){
    if(ch1 == false){
        $("#ch1").css({backgroundColor: "white"});
        ch1 = true;
    } else {
        $("#ch1").css({backgroundColor: "transparent"});
        ch1 = false;
    }
});

$("#ch2").on("click", function(){
    if(ch2 == false){
        $("#ch2").css({backgroundColor: "white"});
        ch2 = true;
    } else {
        $("#ch2").css({backgroundColor: "transparent"});
        ch2 = false;
    }
});

$("#ch3").on("click", function(){
    if(ch3 == false){
        $("#ch3").css({backgroundColor: "white"});
        ch3 = true;
    } else {
        $("#ch3").css({backgroundColor: "transparent"});
        ch3 = false;
    }
});


$("#ch4").on("click", function(){
    if(ch4 == false){
        $("#ch4").css({backgroundColor: "white"});
        ch4 = true;
    } else {
        $("#ch4").css({backgroundColor: "transparent"});
        ch4 = false;
    }
});

$("#goToLogin").on("click", function(){
    $(".signup").addClass("hidden-si-lo-1");
    $(".login").addClass("hidden-si-lo-1");
    setTimeout(function(){
        $(".signup").css({display: "none"});
        $(".login").css({display: "flex"});
        $(".login").removeClass("hidden-si-lo-1");
    }, 400);
});

$("#goToSignUp").on("click", function(){
    $(".login").addClass("hidden-si-lo-1");
    $(".signup").addClass("hidden-si-lo-1");
    setTimeout(function(){
        $(".login").css({display: "none"});
        $(".signup").css({display: "flex"});
        $(".signup").removeClass("hidden-si-lo-1");
    }, 400);
});

function showAlert(head, desc){
    $(".alert-heading").text(head)
    $(".alert-description").text(desc)
    $(".alert").css({display: "flex", opacity: 0});
    setTimeout(function(){
        $(".alert").css({display: "flex", opacity: 1});
        $(".alert-container").css({transform: "scale(1)", filter: "opacity(1)"});
    }, 20)
}

function closeAlert(){
    $(".alert-container").css({transform: "scale(0.9)", filter: "opacity(0)"});
    setTimeout(function(){
        $(".alert").css({opacity: 0});
    }, 100);
    setTimeout(function(){
        $(".alert").css({display: "none"});
    }, 10)
}

$(".alert-button").on("click", function(){
    closeAlert();
});

$("#tooltipContainer").on("click", function(){
    $(".tooltip").css({filter: "opacity(0)", transform: "translateY(10px)"});
    setTimeout(function(){
        $("#tooltipContainer").css({display: "none"});
    }, 200)
});

$("#tooltipContainer2").on("click", function(){
    $(".tooltip2").css({filter: "opacity(0)", transform: "translateY(10px)"});
    setTimeout(function(){
        $("#tooltipContainer2").css({display: "none"});
    }, 200)
})

function showTooltip(msg, offset, height){
    $("#tooltipText").text(msg);
    $("#tooltipContainer").css({top: offset - height})
    $("#tooltipContainer").css({display: "block"});
    setTimeout(function(){
        $(".tooltip").css({filter: "opacity(1)", transform: "translateY(0px)"});
    }, 200);
    setTimeout(function(){
        $(".tooltip").css({filter: "opacity(0)", transform: "translateY(10px)"});
    }, 2000);
    setTimeout(function(){
        $("#tooltipContainer").css({display: "none"});
    }, 2200);
}

function showTooltip2(msg){
    $("#tooltipText2").text(msg);
    $("#tooltipContainer2").css({display: "block"});
    setTimeout(function(){
        $(".tooltip2").css({filter: "opacity(1)", transform: "translateY(0px)"});
    }, 200);
    setTimeout(function(){
        $(".tooltip2").css({filter: "opacity(0)", transform: "translateY(10px)"});
    }, 2000)
    setTimeout(function(){
        $("#tooltipContainer2").css({display: "none"});
    }, 2200)
}

function showToast(msg){
    $(".bottom-toast-1").text(msg);
    $(".bottom-toast-1").addClass("bottom-toast-1-open");
    setTimeout(function(){
        $(".bottom-toast-1").removeClass("bottom-toast-1-open");
    }, 2400);
}

// Signup / Login ----

var userVal;
var userColor;
var userUID;

// Signup

const checker = value =>
  !profanityChecker.some(element => value.includes(element));

$("#signUpBtn1").on("click", function(){

    let profanityCheck = checker($("#emailSignUp1").val().toLowerCase());
    userVal = undefined;

    if( $("#emailSignUp1").val().length == 0 ){
        showTooltip("Your username cannot be empty", $("#emailSignUp1").offset().top, $("#emailSignUp1").outerHeight());
    } else {
        if( $("#passwordSignUp1").val().length == 0 ){
            showTooltip("Your password cannot be empty", $("#passwordSignUp1").offset().top, $("#passwordSignUp1").outerHeight());
        } else {

        if( !profanityCheck ){
            showTooltip("You can't use this username", $("#emailSignUp1").offset().top, $("#emailSignUp1").outerHeight());
        } else {

            if( ch1 == false ){
                showTooltip("You can't proceed without accepting our terms and conditions", $("#ch1C").offset().top, 68);
            } else {
                if( ch2 == false ){
                    showTooltip("You can't proceed without accepting our conditions", $("#ch2C").offset().top, 68);
                } else {

                    $("input").prop('disabled', true);
                    $(".section__1").css({pointerEvents: "none"});
                    $("#signUpText1").css({transform: "translateY(-32px)", filter: "opacity(0)"});
                    setTimeout(function(){
                        $("#signUpText1").css({display: "none"});
                        $(".signUpLoader1").css({display: "block"});
                    }, 200);
                    setTimeout(function(){
                        $(".signUpLoader1").css({transform: "translateY(0px)", filter: "opacity(1)"});
                    }, 220);

                    firebase.auth().createUserWithEmailAndPassword($("#emailSignUp1").val().trim().toLowerCase() + "@user.com", $("#passwordSignUp1").val().trim())
                    .then((user) => {
                        
                        userUID = user.user.uid;
                        userColor = Math.floor(Math.random() * (color_array.length - 0 + 1)) + 0;
                        userVal = {
                            name: $("#emailSignUp1").val().trim().toLowerCase(),
                            status: "normal",
                            color: userColor
                        };

                        db.collection("users624024").doc($("#emailSignUp1").val().trim().toLowerCase()).set({
                            name: $("#emailSignUp1").val().trim().toLowerCase(),
                            status: "normal",
                            color: userColor
                        })
                        .then(function() {
                            $(".signUpLoader1").css({transform: "translateY(32px)", filter: "opacity(0)"});
                            setTimeout(function(){
                                $(".signUpLoader1").css({display: "none"});
                                $("#signUpText1").css({display: "block"});
                            }, 200);
                            setTimeout(function(){
                                $("#signUpText1").css({transform: "translateY(0px)", filter: "opacity(1)"});
                            }, 220);
                            setTimeout(function(){
                                $(".section__1").css({filter: "brightness(0.8)"});
                                $(".signup").css({transform: "scale(0.9)"});
                                $(".login").css({transform: "scale(0.9)"});
                                $("#superbody2").css({transform: "translateX(0px)"});
                                $(".title-bar-t").css({transform: "translateX(0px)"});
                            }, 400);
                            setTimeout(function(){
                                $("input").prop('disabled', false);
                                $(".section__1").css({pointerEvents: "auto"});
                            }, 600);
                            showMessages();

                        })
                        .catch(function(error) {
                            let errorCode = error.code;
                            let errorMessage = error.message;
                            showToast("There was an error while creating your account");
                            $(".signUpLoader1").css({transform: "translateY(32px)", filter: "opacity(0)"});
                            setTimeout(function(){
                                $(".signUpLoader1").css({display: "none"});
                                $("#signUpText1").css({display: "block"});
                            }, 200);
                            setTimeout(function(){
                                $("#signUpText1").css({transform: "translateY(0px)", filter: "opacity(1)"});
                            }, 220);
                            $("input").prop('disabled', false);
                            $(".section__1").css({pointerEvents: "auto"});
                        });
                    })
                    .catch((error) => {
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        showToast("There was an error while creating your account");
                        $(".signUpLoader1").css({transform: "translateY(32px)", filter: "opacity(0)"});
                        setTimeout(function(){
                            $(".signUpLoader1").css({display: "none"});
                            $("#signUpText1").css({display: "block"});
                        }, 200);
                        setTimeout(function(){
                            $("#signUpText1").css({transform: "translateY(0px)", filter: "opacity(1)"});
                        }, 220);
                        $("input").prop('disabled', false);
                        $(".section__1").css({pointerEvents: "auto"});
                    });

                }
            }

            }

        }
    }

});

// Login

$("#signUpBtn2").on("click", function(){

    if( $("#emailLogIn2").val().length == 0 ){
        showTooltip("Your username cannot be empty", $("#emailLogIn2").offset().top, $("#emailLogIn2").outerHeight());
    } else {
        if( $("#passwordLogIn2").val().length == 0 ){
            showTooltip("Your password cannot be empty", $("#passwordLogIn2").offset().top, $("#passwordLogIn2").outerHeight());
        } else {
            if( ch3 == false ){
                showTooltip("You can't proceed without accepting our terms and conditions", $("#ch3C").offset().top, 68);
            } else {
                if( ch4 == false ){
                    showTooltip("You can't proceed without accepting our conditions", $("#ch4C").offset().top, 68);
                } else {

                    $("input").prop('disabled', true);
                    $(".section__1").css({pointerEvents: "none"});
                    $("#signUpText2").css({transform: "translateY(-32px)", filter: "opacity(0)"});
                    setTimeout(function(){
                        $("#signUpText2").css({display: "none"});
                        $(".signUpLoader2").css({display: "block"});
                    }, 200);
                    setTimeout(function(){
                        $(".signUpLoader2").css({transform: "translateY(0px)", filter: "opacity(1)"});
                    }, 220);

                    firebase.auth().signInWithEmailAndPassword($("#emailLogIn2").val().trim().toLowerCase() + "@user.com", $("#passwordLogIn2").val())
                    .then((user) => {

                        let docRef = db.collection("users624024").doc($("#emailLogIn2").val().trim().toLowerCase());

                        docRef.get().then(function(doc) {
                            if (doc.exists) {

                                userUID = user.user.uid;
                                userVal = doc.data();
                                $(".signUpLoader2").css({transform: "translateY(32px)", filter: "opacity(0)"});
                                setTimeout(function(){
                                    $(".signUpLoader2").css({display: "none"});
                                    $("#signUpText2").css({display: "block"});
                                }, 200);
                                setTimeout(function(){
                                    $("#signUpText2").css({transform: "translateY(0px)", filter: "opacity(1)"});
                                }, 220);
                                setTimeout(function(){
                                    $(".section__1").css({filter: "brightness(0.8)"});
                                    $(".signup").css({transform: "scale(0.9)"});
                                    $(".login").css({transform: "scale(0.9)"});
                                    $("#superbody2").css({transform: "translateX(0px)"});
                                    $(".title-bar-t").css({transform: "translateX(0px)"});
                                }, 400);
                                setTimeout(function(){
                                    $("input").prop('disabled', false);
                                    $(".section__1").css({pointerEvents: "auto"});
                                }, 600);
                                showMessages();
                            } else {
                                // No such document
                            }
                        }).catch(function(error) {
                            showToast("There was an error while logging into your account");
                            $(".signUpLoader2").css({transform: "translateY(32px)", filter: "opacity(0)"});
                            setTimeout(function(){
                                $(".signUpLoader2").css({display: "none"});
                                $("#signUpText2").css({display: "block"});
                            }, 200);
                            setTimeout(function(){
                                $("#signUpText2").css({transform: "translateY(0px)", filter: "opacity(1)"});
                            }, 220);
                            $("input").prop('disabled', false);
                            $(".section__1").css({pointerEvents: "auto"});
                        });

                    })
                    .catch((error) => {
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        showToast("There was an error while logging into your account");
                        $(".signUpLoader2").css({transform: "translateY(32px)", filter: "opacity(0)"});
                        setTimeout(function(){
                            $(".signUpLoader2").css({display: "none"});
                            $("#signUpText2").css({display: "block"});
                        }, 200);
                        setTimeout(function(){
                            $("#signUpText2").css({transform: "translateY(0px)", filter: "opacity(1)"});
                        }, 220);
                        $("input").prop('disabled', false);
                        $(".section__1").css({pointerEvents: "auto"});
                    });

                }
            }
        }
    }

});

$("#searchInput").on("focus", function(){
    $(".search-bar-1").css({background: "white", border: "2px solid #48a9ff"});
    // $("#superbody2").css({background: "#fcfcfc"});
    // $(".title-bar-t").css({background: "#fcfcfc"});
});

$("#searchInput").on("focusout", function(){
    $(".search-bar-1").css({background: "#eff5ff", border: "2px solid transparent"});
    // $("#superbody2").css({background: "white"});
    // $(".title-bar-t").css({background: "white"});
});

var DEBUG = false;
if(!DEBUG){
    if(!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "info"];
    for(var i=0;i<methods.length;i++){
        console[methods[i]] = function(){};
    }
}

// setTimeout(function(){
//     $(".signUpLoader2").css({transform: "translateY(32px)", filter: "opacity(0)"});
//     setTimeout(function(){
//         $(".signUpLoader2").css({display: "none"});
//         $("#signUpText2").css({display: "block"});
//     }, 200);
//     setTimeout(function(){
//         $("#signUpText2").css({transform: "translateY(0px)", filter: "opacity(1)"});
//     }, 220);
//     setTimeout(function(){
//         $(".section__1").css({filter: "brightness(0.8)"});
//         $(".signup").css({transform: "scale(0.9)"});
//         $(".login").css({transform: "scale(0.9)"});
//         $("#superbody2").css({transform: "translateX(0px)"});
//         $(".title-bar-t").css({transform: "translateX(0px)"});
//         $(".title-bar-t").css({transform: "translateX(0px)"});
//     }, 400);
//     setTimeout(function(){
//         $("input").prop('disabled', false);
//         $(".section__1").css({pointerEvents: "auto"});
//     }, 600);
// }, 1000);

// showMessages();

// Section 2

var roomsData;
var reRData;

function setGroups(arg){
    $(".groups-container").html("");
    for(let i = 0; i < groups_array_name.length; i++){
        let lastSender = checker(reRData[i].data.lastSender) ? reRData[i].data.lastSender : "***";
        let lastMessage = checker(reRData[i].data.lastMessage) ? reRData[i].data.lastMessage : "***";
        lastSender = ((lastSender).length > 10) ? (lastSender).substring(0, 10) + '...' : lastSender;
        lastMessage = ((lastMessage).length > 10) ? (lastMessage).substring(0, 10) + '...' : lastMessage;
        lastSender = lastSender.replace(/</g,"");
        lastSender = lastSender.replace(/>/g,"");
        lastSender = lastSender.replace(/\/>/g,"");
        lastMessage = lastMessage.replace(/</g,"");
        lastMessage = lastMessage.replace(/>/g,"");
        lastMessage = lastMessage.replace(/\/>/g,"");
        let el = 
        `
        <div id="${reRData[i].id}" class="group">
            <div class="group-container-1">
                <div class="group-icon-1">
                    <img class="group-icon-image" src="https://cdn0.iconfinder.com/data/icons/twitter-ui-flat/48/Twitter_UI-19-512.png" alt="icon">
                </div>
            </div>
            <div class="group-container-2">
                <div class="group-title-1">
                    ${groups_array_name[i]}
                </div>
                <div class="group-message-1">
                ${"<b>" + lastSender + ": " + "</b>" + lastMessage}
                </div>
            </div>
            <div class="group-container-3">
                <div class="group-timestamp-1">
                    ${reRData[i].data.timestamp.toDate().toLocaleTimeString('en-US').split(":")[0] + ":" + reRData[i].data.timestamp.toDate().toLocaleTimeString('en-US').split(":")[1]}
                </div>
            </div>
        </div>
        `;
        $(".groups-container").append(el);
        $("#" + reRData[i].id).on("click", function(){
            if(unsubscribe !== undefined){
                unsubscribe();
            }
            showChatScreen(reRData[i].id, groups_array_name[i]);
        });
    }
    $(".group:last-child").addClass("group2");
}

function setFilterGroups(arg){
    $(".groups-filter-container").html("");
    for(let i = 0; i < arg.length; i++){
        let lastSender = checker(arg[i].data.lastSender) ? arg[i].data.lastSender : "***";
        lastSender = ((lastSender).length > 10) ? (lastSender).substring(0, 10) + '...' : lastSender;
        let lastMessage = checker(arg[i].data.lastMessage) ? arg[i].data.lastMessage : "***";
        lastMessage = ((lastMessage).length > 10) ? (lastMessage).substring(0, 10) + '...' : lastMessage;
        lastSender = lastSender.replace(/</g,"");
        lastSender = lastSender.replace(/>/g,"");
        lastSender = lastSender.replace(/\/>/g,"");
        lastMessage = lastMessage.replace(/</g,"");
        lastMessage = lastMessage.replace(/>/g,"");
        lastMessage = lastMessage.replace(/\/>/g,"");
        let el = 
        `
        <div name="${arg[i].id}" class="group ${arg[i].id}">
            <div class="group-container-1">
                <div class="group-icon-1">
                    <img class="group-icon-image" src="https://cdn0.iconfinder.com/data/icons/twitter-ui-flat/48/Twitter_UI-19-512.png" alt="icon">
                </div>
            </div>
            <div class="group-container-2">
                <div class="group-title-1">
                    ${arg[i].data.name}
                </div>
                <div class="group-message-1">
                ${"<b>" + lastSender + ": " + "</b>" + lastMessage}
                </div>
            </div>
            <div class="group-container-3">
                <div class="group-timestamp-1">
                    ${arg[i].data.timestamp.toDate().toLocaleTimeString('en-US').split(":")[0] + ":" + arg[i].data.timestamp.toDate().toLocaleTimeString('en-US').split(":")[1]}
                </div>
            </div>
        </div>
        `;
        $(".groups-filter-container").append(el);
        $("." + arg[i].id).on("click", function(){
            if(unsubscribe !== undefined){
                unsubscribe();
            }
            showChatScreen(arg[i].id, groups_array_name[i]);
        });
    }
}

function showMessages(){

    $("#messagesLoaderContainer").css({display: "flex"});
    setTimeout(function(){
        $("#messagesLoaderContainer").css({filter: "opacity(1)"});
    }, 20);

    db
    .collection("_rooms728346_")
    .orderBy("serial", "desc")
    .onSnapshot((snapshot) => {

        $("#messagesLoaderContainer").css({filter: "opacity(0)"});
        setTimeout(function(){
            $("#messagesLoaderContainer").css({display: "none"});
        }, 200);
        setTimeout(function(){
            $(".groups-container").css({display: "block", filter: "opacity(1)"});
        }, 220);
        setTimeout(function(){
            $(".groups-container").css({filter: "opacity(1)"});
        }, 240);

        reRData = snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }));

        try {
            setGroups(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        } catch (err) {
            
        }

    });

}

$("#logoutBtn1").on("click", function(){
    firebase.auth().signOut().then(() => {

        $(".section__1").css({filter: "brightness(1)"});
        $(".signup").css({transform: "scale(1)"});
        $(".login").css({transform: "scale(1)"});
        $("#superbody2").css({transform: "translateX(" + window.innerWidth + "px"});
        $(".title-bar-t").css({transform: "translateX(100vw)"});

        $("input").prop('disabled', false);
        $(".section__1").css({pointerEvents: "auto"});
        
    }).catch((error) => {
        showToast("There was an error")
    });
});

function filterByValue(array, value) {
    let s = value;
    let values = array;
    // return array.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1);
    let re = RegExp(`.*${s.toLowerCase().split("").join(".*")}.*`);
    return values.filter((v) => v.data.name.toLowerCase().match(re));
}

$("#searchInput").on("focus", function(){
    $(".groups-container").css({display: "none"});
    $(".groups-filter-container").css({display: "block"});
});

$("#searchInput").on("focusout", function(){
    if(this.value.length == 0){
        $(".groups-container").css({display: "block"});
        $(".groups-filter-container").css({display: "none"});
    } else {
        $(".groups-container").css({display: "none"});
        $(".groups-filter-container").css({display: "block"});
    }
});

$("#searchInput").keydown(function(event){
    if(event.keyCode == 8){
        $("#searchInput").val("");
        return false;
    }
});

$("#searchInput").on("keydown", function(e){

    setTimeout(function(){
        if( $("#searchInput").val().length !== 0 ){
            // try {
                setFilterGroups(filterByValue(reRData, $("#searchInput").val()));
            // } catch (err) {}
        } else {
            try {
                setFilterGroups([]);
            } catch (err) {}
        }
    }, 0);

});

$("#goBackToGroupScr").on("click", function(){
    $(".superbody-2").css({filter: "brightness(1)"});
    $(".section__2").css({transform: "scale(1)"});
    $("#superbody3").css({transition: "0.2s"})
    setTimeout(function(){
        $("#superbody3").css({transform: "translateX(100vw)"});
    }, 0)

    $(".title-bar-t").css({filter: "brightness(1)"});
    $(".title-name-t").css({transform: "scale(1)"});
    $(".title-logout-t").css({transform: "scale(1)"});

    if($("#superbody2").scrollTop() == 0){
        // $(".superbody-2").css("box-shadow", "inset 0px 0px 0px transparent");
    } else {
    //   $(".superbody-2").css("box-shadow", "rgb(240 248 255) 0px 2px 4px inset");
    }
});

$("#superbody2").scroll(function () {
  
    if($(this).scrollTop() == 0){
        $(".superbody-2").css("box-shadow", "inset 0px 0px 0px transparent");
    } else {
      $(".superbody-2").css("box-shadow", "rgb(240 248 255) 0px 2px 4px inset");
    }
    
});

document.getElementById("messageInput").addEventListener("input", function(){
    if(this.value.length == 0){
        $(".message-btn-container").css({color: "#88898a"});
    } else {
        $(".message-btn-container").css({color: "#3165ff"});
    }
});

// $("#messageInput").on("keydown", function(){

//     if(this.value.length == 0){
//         $(".message-btn-container").css({color: "#88898a"});
//     } else {
//         $(".message-btn-container").css({color: "#0040ff"});
//     }

// });

var chatScreenValue;
var chatMsgsVal;
var chatScreenID;
var tCVal;

function showChats(){

    $("#chatAreaContainer").html("");

    for(let i = 0; i < chatScreenValue.length; i++){

        if(chatScreenValue[i].data.uid == userUID){
            if(
                chatScreenValue[i].data.message.includes("[sticker]") &&
                chatScreenValue[i].data.message.length == 20 &&
                (typeof(parseInt(chatScreenValue[i].data.message.substring(9, 11))) == "number") &&
                parseInt(chatScreenValue[i].data.message.substring(9, 11)) >= 0 &&
                parseInt(chatScreenValue[i].data.message.substring(9, 11)) <= 12)
            {
                let el =
                `
                <div class="chat-box-item rec-chat-container">
                    <div class="rec-m-m-c-2" style="background: #cddaff;">
                        <div class="rec-msg-c">
                            <div class="sender-gif">
                                <img class="sender-gif-img" src="${stickers_array[parseInt(chatScreenValue[i].data.message.substring(9, 11)) - 1]}">
                            </div>
                        </div>
                        <div class="rec-time-2" style="color: #243567;">
                        ${chatScreenValue[i].data.timestamp.toDate().toLocaleTimeString('en-US').split(":")[0] + ":" + chatScreenValue[i].data.timestamp.toDate().toLocaleTimeString('en-US').split(":")[1]}
                        </div>
                    </div>
                </div>
                `;
                $("#chatAreaContainer").append(el);
            } else {
                let msg = chatScreenValue[i].data.message;
                msg = msg.replace(/</g,"");
                msg = msg.replace(/>/g,"");
                msg = msg.replace(/\/>/g,"");
                let el =
                `
                <div class="chat-box-item rec-chat-container">
                    <div class="rec-m-m-c-1">
                        <div class="rec-msg-c">
                            ${msg}
                        </div>
                        <div class="rec-time">
                            ${chatScreenValue[i].data.timestamp.toDate().toLocaleTimeString('en-US').split(":")[0] + ":" + chatScreenValue[i].data.timestamp.toDate().toLocaleTimeString('en-US').split(":")[1]}
                        </div>
                    </div>
                </div>
                `;
                $("#chatAreaContainer").append(el);
            }
        } else {
            if(
                chatScreenValue[i].data.message.includes("[sticker]") &&
                chatScreenValue[i].data.message.length == 20 &&
                (typeof(parseInt(chatScreenValue[i].data.message.substring(9, 11))) == "number") &&
                parseInt(chatScreenValue[i].data.message.substring(9, 11)) >= 0 &&
                parseInt(chatScreenValue[i].data.message.substring(9, 11)) <= 12
            ){

                let color = (chatScreenValue[i].data.uid == "5mjMJm4YLCSFYrqUfUD2jcSGEde2") ? "background: url(https://res.cloudinary.com/dpj9ddsjf/image/upload/v1610832281/coffee60_y9lnpm.png); background-size: cover; background-repeat: no-repeat; background-position: center; color: transparent; filter: sepia(0.2);" : "background: " +  color_array[chatScreenValue[i].data.color];

                let el = 
                `
                <div class="chat-box-item sender-chat-container">
                    <div class="sender-pfp-icon-2" style="${color}">
                        ${chatScreenValue[i].data.name.substring(0, 1).toUpperCase()}
                    </div>
                    <div class="sender-msg-container-2">
                        <div class="sender-name">
                            <span class="s-n--1" style="color: ${(chatScreenValue[i].data.uid == "5mjMJm4YLCSFYrqUfUD2jcSGEde2") ? "#504937" : color_array[chatScreenValue[i].data.color]}">
                                ${chatScreenValue[i].data.name}
                            </span>
                        </div>
                        <div class="sender-gif">
                            <img class="sender-gif-img" src="${stickers_array[parseInt(chatScreenValue[i].data.message.substring(9, 11)) - 1]}">
                        </div>
                        <div class="sender-time">
                            ${chatScreenValue[i].data.timestamp.toDate().toLocaleTimeString('en-US').split(":")[0] + ":" + chatScreenValue[i].data.timestamp.toDate().toLocaleTimeString('en-US').split(":")[1]}
                        </div>
                    </div>
                </div>
                `;
                $("#chatAreaContainer").append(el);
                
            } else {
                // box-shadow: 0px 0px 8px 2px rgb(255 209 51 / 29%);
                let status = false;
                status = (chatScreenValue[i].data.status == "normal") ?
                false : status;
                status = (chatScreenValue[i].data.status == "pro") ?
                "PRO" : status;
                status = (chatScreenValue[i].data.status == "aimu") ?
                "AIMU" : status;
                status = (chatScreenValue[i].data.status == "member") ?
                "MEMBER" : status;
                status = (chatScreenValue[i].data.status == "bot" || chatScreenValue[i].data.uid == "8KP1hhhRZrSRQN8TieNxpVND3z12") ?
                "BOT" : status;
                status = (chatScreenValue[i].data.status == "creator" || chatScreenValue[i].data.uid == "5mjMJm4YLCSFYrqUfUD2jcSGEde2") ?
                "CREATOR" : status;
                let statusStyle = chatScreenValue[i].data.status == "normal" ? "display: none" : "display: block";

                // let color = color_array[chatScreenValue[i].data.color];

                let color = (chatScreenValue[i].data.uid == "5mjMJm4YLCSFYrqUfUD2jcSGEde2") ?
                "background: url(https://res.cloudinary.com/dpj9ddsjf/image/upload/v1610832281/coffee60_y9lnpm.png); background-size: cover; background-repeat: no-repeat; background-position: center; color: transparent; filter: sepia(0.2);" 
                : (chatScreenValue[i].data.uid == "7gYhh228NlbSemddKuwGddczBZ03") ? "background: url(https://pbs.twimg.com/profile_images/1328121638680997894/pGQDvYl-_400x400.jpg); background-size: cover; background-repeat: no-repeat; background-position: center; color: transparent; filter: sepia(0.2);border: 2px solid #4f8bcf;" :
                "background: " + color_array[chatScreenValue[i].data.color];

                let msg = chatScreenValue[i].data.message;
                msg = checker(msg) ? msg : "***";
                msg = msg.replace(/</g,"");
                msg = msg.replace(/>/g,"");
                msg = msg.replace(/\/>/g,"");

                let el =
                `
                <div class="chat-box-item sender-chat-container">
                    <div class="sender-pfp-icon" style="${color}">
                        ${chatScreenValue[i].data.name.substring(0, 1).toUpperCase()}
                    </div>
                    <div class="sender-msg-container">
                        <div class="sender-name">
                            <span class="s-n--1" style="color: ${(chatScreenValue[i].data.uid == "5mjMJm4YLCSFYrqUfUD2jcSGEde2") ? "#FF5722" : color_array[chatScreenValue[i].data.color]}">${chatScreenValue[i].data.name}</span>
                            <span class="s-n--2" style="${statusStyle}">${status}</span>
                        </div>
                        <div class="sender-message">
                            ${msg}
                        </div>
                        <div class="sender-time">
                            ${chatScreenValue[i].data.timestamp.toDate().toLocaleTimeString('en-US').split(":")[0] + ":" + chatScreenValue[i].data.timestamp.toDate().toLocaleTimeString('en-US').split(":")[1]}
                        </div>
                    </div>
                </div>
                `;
                $("#chatAreaContainer").append(el);
            }
        }

        if(true){
            $("#chatAreaContainer").animate({ scrollTop: $("#chatAreaContainer")[0].scrollHeight}, 0);
        }

    }

}

function showChatScreen(id, name){

    $("#chatAreaContainer").html("");
    chatScreenID = id;

    $(".title-name-2").text(name);

    $(".superbody-2").css({filter: "brightness(0.8)"});
    $(".section__2").css({transform: "scale(0.96)"});
    $("#superbody3").css({transform: "translateX(0px)"});
    setTimeout(function(){
        $("#superbody3").css({transition: "0s"});
    }, 200)

    $(".title-bar-t").css({filter: "brightness(0.8)"});
    $(".title-name-t").css({transform: "scale(0.96)"});
    $(".title-logout-t").css({transform: "scale(0.96)"});

    // $(".superbody-2").css("box-shadow", "inset 0px 0px 0px transparent");

    $(".chat-aupc-loader").css({display: "block"});
    $(".chat-aupc-text").css({display: "none"});

    unsubscribe = db.collection("_rooms728346_")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {

            chatScreenValue = snapshot.docs.map((doc) => doc.data());

            if(chatScreenValue.length == 0){
                $(".chat-aupc-loader").css({display: "none"});
                $(".chat-aupc-text").css({display: "block"});
            } else {

                $(".chat-aupc-loader").css({display: "none"});
                $(".chat-aupc-text").css({display: "none"});
                chatScreenValue = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }));
                try {
                    showChats();
                } catch (err) {
                    
                }

            }

            if(chatScreenValue.length > 20){
                db.collection("_rooms728346_").doc(id).collection("messages").doc(chatScreenValue[0].id).delete().then(function() {
                    // console.log("Document successfully deleted!");
                }).catch(function(error) {
                    // console.error("Error removing document: ", error);
                });
            }

    });

}

function skyraCheck(msg, username){

    if((msg.toLowerCase().trim() == "s!help")){
        alert("Hey " + userVal.name + "! I am Skyra.\n\nHere are the commands which you can use with me:\n\n• s!toss Tosses a coin\n\n• s!dice Rolls a dice\n\n• s!height Tells your screen's height\n\n• s!width Tells your screen's width\n\n• s!joke Tells a random joke\n\n• s!weather <city> Tells the weather of your city\n\n• s!temp <city> Tells the temperature of your city\n\n• s!simp <name> Can tell anyone's simpness :>");
    }

    if(msg.includes("s!")){
        if(msg == "s!toss"){
            let randomInt = Math.round(Math.random());
            let output = (randomInt == 0) ? "Heads" : "Tails";
            db.collection("_rooms728346_")
            .doc(chatScreenID)
            .collection("messages")
            .add({
                message: output,
                name: "skyra",
                color: 0,
                status: "bot",
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                uid: "7gYhh228NlbSemddKuwGddczBZ03"
            }).then(() => {
                
            });
        } else if(msg.toLowerCase().trim() == "s!dice"){
            let randomInt = Math.floor(Math.random() * 6) + 1;
            let output = `${username} rolled the dice and got ${randomInt}`;
            db.collection("_rooms728346_")
            .doc(chatScreenID)
            .collection("messages")
            .add({
                message: output,
                name: "skyra",
                color: 0,
                status: "bot",
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                uid: "7gYhh228NlbSemddKuwGddczBZ03"
            }).then(() => {
                
            });
        } else if(msg.toLowerCase().trim() == "s!height"){
            let height = $(window).height();
            let output = `Your screen's document height is ${height}px`;
            db.collection("_rooms728346_")
            .doc(chatScreenID)
            .collection("messages")
            .add({
                message: output,
                name: "skyra",
                color: 0,
                status: "bot",
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                uid: "7gYhh228NlbSemddKuwGddczBZ03"
            }).then(() => {
                
            });
        } else if(msg.toLowerCase().trim() == "s!width"){
            let width = $(window).width();
            let output = `Your screen's document width is ${width}px`;
            db.collection("_rooms728346_")
            .doc(chatScreenID)
            .collection("messages")
            .add({
                message: output,
                name: "skyra",
                color: 0,
                status: "bot",
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                uid: "7gYhh228NlbSemddKuwGddczBZ03"
            }).then(() => {
                
            });
        } else if(msg.toLowerCase().trim() == "s!joke"){

            $.getJSON("https://official-joke-api.appspot.com/jokes/programming/random", function(data) {

                let output;
                let punchline = data[0].punchline;
                let setup = data[0].setup;
                output = `${setup}... ${punchline}`;
                db.collection("_rooms728346_")
                .doc(chatScreenID)
                .collection("messages")
                .add({
                    message: output,
                    name: "skyra",
                    color: 0,
                    status: "bot",
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    uid: "7gYhh228NlbSemddKuwGddczBZ03"
                }).then(() => {
                    
                });

            });

        } else if(msg.toLowerCase().includes("s!simp")){

            if(msg.toLowerCase().trim().replace("s!simp", "") == ""){
                let randomInt = (username == "programmer" || username == "utsav") ? 0 : Math.floor(Math.random() * 100) + 1;
                let output = `${username} is ${randomInt}% simp!`;
                db.collection("_rooms728346_")
                .doc(chatScreenID)
                .collection("messages")
                .add({
                    message: output,
                    name: "skyra",
                    color: 0,
                    status: "bot",
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    uid: "7gYhh228NlbSemddKuwGddczBZ03"
                }).then(() => {
                    
                });
            } else {
                let nameOfSimp = msg.toLowerCase().trim().replace("s!simp", "").trim().toLowerCase();
                let randomInt = (nameOfSimp == "programmer" || nameOfSimp == "utsav") ? 0 : Math.floor(Math.random() * 100) + 1;
                let output = `${nameOfSimp} is ${randomInt}% simp!`;
                db.collection("_rooms728346_")
                .doc(chatScreenID)
                .collection("messages")
                .add({
                    message: output,
                    name: "skyra",
                    color: 0,
                    status: "bot",
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    uid: "7gYhh228NlbSemddKuwGddczBZ03"
                }).then(() => {
                    
                });
            }

        } else if(msg.toLowerCase().includes("s!weather")){

            if(msg.toLowerCase().trim().replace("s!weather", "") == ""){

                let output = `Hey ${username}, you forgot to enter the city. Here's an example: s!weather <london>`;
                db.collection("_rooms728346_")
                .doc(chatScreenID)
                .collection("messages")
                .add({
                    message: output,
                    name: "skyra",
                    color: 0,
                    status: "bot",
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    uid: "7gYhh228NlbSemddKuwGddczBZ03"
                }).then(() => {
                    
                });

            } else {
                
                let cityName = msg.toLowerCase().trim().replace("s!weather", "").trim().toLowerCase();
                try {
                    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=018970dba0bb4f2438f8c13e49e5a1fb", function(data) {
                        let weather = data.weather[0].main;
                        let cityNameIN = msg.toLowerCase().trim().replace("s!weather", "").trim().toLowerCase();
                        let output = `Today is ${(weather.toLowerCase() == "clouds" ? "Cloudy" : weather)} in ${cityNameIN}`;
                        db.collection("_rooms728346_")
                        .doc(chatScreenID)
                        .collection("messages")
                        .add({
                            message: output,
                            name: "skyra",
                            color: 0,
                            status: "bot",
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            uid: "7gYhh228NlbSemddKuwGddczBZ03"
                        }).then(() => {
                            
                        });
                    });
                } catch (err) {
                    
                }

            }

        } else if(msg.toLowerCase().includes("s!temp")){

            if(msg.toLowerCase().trim().replace("s!temp", "") == ""){

                let output = `Hey ${username}, you forgot to enter the city. Here's an example: s!temp <london>`;
                db.collection("_rooms728346_")
                .doc(chatScreenID)
                .collection("messages")
                .add({
                    message: output,
                    name: "skyra",
                    color: 0,
                    status: "bot",
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    uid: "7gYhh228NlbSemddKuwGddczBZ03"
                }).then(() => {
                    
                });

            } else {
                
                let cityName = msg.toLowerCase().trim().replace("s!temp", "").trim().toLowerCase();
                try {
                    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=018970dba0bb4f2438f8c13e49e5a1fb", function(data) {
                        let weather = Math.floor(data.main.temp);
                        let cityNameIN = msg.toLowerCase().trim().replace("s!temp", "").trim().toLowerCase();
                        let output = `Today's temperature in ${cityNameIN} is ${weather}°F`;
                        db.collection("_rooms728346_")
                        .doc(chatScreenID)
                        .collection("messages")
                        .add({
                            message: output,
                            name: "skyra",
                            color: 0,
                            status: "bot",
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            uid: "7gYhh228NlbSemddKuwGddczBZ03"
                        }).then(() => {
                            
                        });
                    });
                } catch (err) {
                    
                }

            }

        }
    }

}

$("#messageBtnContainer").on("click", function(){

    $("#messageInput").focus();
    if( $("#messageInput").val().length !== 0 ){
        let profanityCheck = checker($("#messageInput").val().toLowerCase());
        if($("#messageInput").val().trim() == "hello"){
            profanityCheck = true;
        }
        if(!profanityCheck) {
            showTooltip2("You can't send this message. Reason: Profanity");
        } else {
            $("#messageBtnContainer").css({display: "none"});
            $("#messageBBLoading4").css({display: "flex"});
            $("body").css({pointerEvents: "none"});
            let senderSim;
            let msgToSend;
            if((userVal.name).length > 16) {
                senderSim = (userVal.name).substring(0, 14) + "..."
            } else {
                senderSim = userVal.name;
            }
            if($("#messageInput").val().trim().length > 62){
                msgToSend = $("#messageInput").val().trim().substring(0, 60);
            } else {
                msgToSend = $("#messageInput").val().trim();
            }

            msgToSend = msgToSend.replace(/</g,"");
            msgToSend = msgToSend.replace(/>/g,"");
            msgToSend = msgToSend.replace(/\/>/g,"");

            db.collection("_rooms728346_")
            .doc(chatScreenID)
            .collection("messages")
            .add({
                message: msgToSend,
                name: senderSim,
                color: userVal.color,
                status: userVal.status,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                uid: userUID
            }).then(() => {
                $("#messageInput").val("");
                $("body").css({pointerEvents: "auto"});
                $("#messageBtnContainer").css({color: "#88898a"});
                $("#messageBtnContainer").css({display: "flex"});
                $("#messageBBLoading4").css({display: "none"});
                $("#messageInput").focus();
                skyraCheck(msgToSend, senderSim);
                let roomsDocRef = db.collection("_rooms728346_").doc(chatScreenID);
                return roomsDocRef.update({
                    lastMessage: msgToSend,
                    lastSender: senderSim,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(function() {

                })
                .catch(function(err) {
                    
                });
            });
        }
    }

});

var _originalSize = $(window).width() + $(window).height()
$(window).resize(function(){

  if($(window).width() + $(window).height() != _originalSize){
    // Keyboard Visible
    $("#chatAreaContainer").animate({ scrollTop: $("#chatAreaContainer")[0].scrollHeight}, 0);
  }else{
    // Keyboard Not Visible
  }

});

// Stickers

$("#stickerOpenBtn").on("click", function(){
    $("#messageInput").focus();
    if($(".sticker-opts-c-2").css("filter") == "opacity(0)"){
        $("#stickerOptsContainer").css({display: "block"});
        setTimeout(function(){
            $(".sticker-opts-c-2").css({transform: "translateY(0px)", filter: "opacity(1)"})
            $(".sticker-ni-1").css({color: "rgb(49, 101, 255)"});
        }, 0);
    } else {
        $(".sticker-opts-c-2").css({transform: "translateY(10px)", filter: "opacity(0)"})
        $(".sticker-ni-1").css({color: "rgb(136 137 138)"});
        setTimeout(function(){
            $("#stickerOptsContainer").css({display: "none"});
        }, 200);
    }
    
});

$(".sticker").on("click", function(){

    $("#messageInput").focus();

    let senderSim;
    let id1 = (this.id).replace("sticker", "");
    let id2 = (this.id).replace("sticker", "").length == 1 ? "0" + id1 : id1;
    let msgToSend = "[sticker]" + id2 + "[sticker]";
    if((userVal.name).length > 16) {
        senderSim = (userVal.name).substring(0, 14) + "..."
    } else {
        senderSim = userVal.name;
    }

    $("#messageBtnContainer").css({display: "none"});
    $("#messageBBLoading4").css({display: "flex"});
    $("body").css({pointerEvents: "none"});

    db.collection("_rooms728346_")
    .doc(chatScreenID)
    .collection("messages")
    .add({
        message: msgToSend,
        name: senderSim,
        color: userVal.color,
        status: userVal.status,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        uid: userUID
    }).then(() => {
        $("body").css({pointerEvents: "auto"});
        $("#messageBtnContainer").css({color: "#88898a"});
        $("#messageBtnContainer").css({display: "flex"});
        $("#messageBBLoading4").css({display: "none"});
        $("#messageInput").focus();
        $(".sticker-opts-c-2").css({transform: "translateY(10px)", filter: "opacity(0)"})
        $(".sticker-ni-1").css({color: "rgb(136 137 138)"});
        setTimeout(function(){
            $("#stickerOptsContainer").css({display: "none"});
        }, 200);
        let roomsDocRef = db.collection("_rooms728346_").doc(chatScreenID);
        return roomsDocRef.update({
            lastMessage: "[sticker]",
            lastSender: senderSim,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function() {

        })
        .catch(function(err) {
        });
    });

});
