define("DS/Helloworld/scripts/Helloworld",[], function(){
    var myWidget={
        onLoad: function(){
            widget.body.innerHTML="<div class='main-container'><p>hello, world Harshi!</p></div>";

        },
    };
 widget.addEvent('onLoad',myWidget.onLoad);
    });
