 define("DS/Helloworld/scripts/Helloworld",[], function(){
    var myWidget={
        onLoad: function(){
        widget.setValue("Type","Pen-type");    
        var type = widget.getValue("Type");
      //  alert("type::"+type);
         var type = widget.getValue("Name");
       // alert("type::"+type);
         var type = widget.getValue("Revision");
       // alert("type::"+type);
            widget.body.innerHTML="<div class='main-container'><p>helloooooooooo!</p></div>";

        },
    };
   // return myWidget;
 widget.addEvent('onLoad',myWidget.onLoad);
    });
