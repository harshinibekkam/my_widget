 define("DS/Helloworld/scripts/Helloworld", [], function(){
    var myWidget = {
        onLoad: function(){
            // Get values from widget preferences
            var type = widget.getValue("Type");
            var name = widget.getValue("Name");
            var revision = widget.getValue("Revision");

            /* Optional: alert for debugging
            alert("Type: " + type);
            alert("Name: " + name);
            alert("Revision: " + revision);*/

            // Display values in the widget body
            widget.body.innerHTML = 
                "<div class='main-container'>" +
                    "<p><strong>Type:</strong> " + type + "</p>" +
                    "<p><strong>Name:</strong> " + name + "</p>" +
                    "<p><strong>Revision:</strong> " + revision + "</p>" +
                "</div>";
        },
    };

    // Register the onLoad function
    widget.addEvent('onLoad', myWidget.onLoad);
});
