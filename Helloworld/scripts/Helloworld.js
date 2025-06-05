define("DS/Helloworld/scripts/Helloworld",[], function(){
    var myWidget={
        onLoad: function(){
            widget.body.innerHTML="<div class='main-container'><p>helloooooooooo!</p></div>";

        },
    };
    return myWidget;
 //widget.addEvent('onLoad',myWidget.onLoad);
    });
