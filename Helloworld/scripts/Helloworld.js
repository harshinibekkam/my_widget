define("DS/Helloworld/scripts/Helloworld", [], function(){
    var myWidget = {
        onLoad: function() {
            // Get initial values from widget preferences
            var type = widget.getValue("Type") || "";
            var name = widget.getValue("Name") || "";
            var revision = widget.getValue("Revision") || "";

            // Display a dynamic form with current values
            widget.body.innerHTML = 
                "<div class='main-container'>" +
                    "<form id='dynamicForm'>" +

                        "<label for='typeInput'><strong>Type:</strong></label><br>" +
                        "<input type='text' id='typeInput' name='type' value='" + type + "' /><br><br>" +

                        "<label for='nameInput'><strong>Name:</strong></label><br>" +
                        "<input type='text' id='nameInput' name='name' value='" + name + "' /><br><br>" +

                        "<label for='revisionInput'><strong>Revision:</strong></label><br>" +
                        "<input type='text' id='revisionInput' name='revision' value='" + revision + "' /><br><br>" +

                        "<button type='submit' id='doneBtn'>Done</button> " +
                        "<button type='button' id='cancelBtn'>Cancel</button>" +

                    "</form>" +

                    "<div id='resultDisplay' style='margin-top:15px;'></div>" +
                "</div>";

            // Handle Done (form submission)
            document.getElementById("dynamicForm").addEventListener("submit", function(event) {
                event.preventDefault(); // Prevent reload

                var newType = document.getElementById("typeInput").value;
                var newName = document.getElementById("nameInput").value;
                var newRevision = document.getElementById("revisionInput").value;

                // Display updated values
                document.getElementById("resultDisplay").innerHTML = 
                    "<p><strong>Updated Type:</strong> " + newType + "</p>" +
                    "<p><strong>Updated Name:</strong> " + newName + "</p>" +
                    "<p><strong>Updated Revision:</strong> " + newRevision + "</p>";
            });

            // Handle Cancel (reset form to original values)
            document.getElementById("cancelBtn").addEventListener("click", function() {
                document.getElementById("typeInput").value = type;
                document.getElementById("nameInput").value = name;
                document.getElementById("revisionInput").value = revision;

                document.getElementById("resultDisplay").innerHTML = "<p><em>Changes canceled.</em></p>";
            });
        },
    };

    // Register the onLoad function
    widget.addEvent('onLoad', myWidget.onLoad);
});
