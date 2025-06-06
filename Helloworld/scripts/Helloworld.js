 define("DS/Helloworld/scripts/Helloworld", [], function(){
    var myWidget = {
        onLoad: function(){
            // Get values from widget preferences
            var type = widget.getValue("Type");
            var name = widget.getValue("Name");
            var revision = widget.getValue("Revision");

            // Build HTML content with a form
            widget.body.innerHTML = 
                "<div class='main-container'>" +
                    "<p><strong>Type:</strong> " + type + "</p>" +
                    "<p><strong>Name:</strong> " + name + "</p>" +
                    "<p><strong>Revision:</strong> " + revision + "</p>" +
                    "<hr/>" +
                    "<form id='myForm'>" +
                        "<label for='input1'>Enter some text:</label><br>" +
                        "<input type='text' id='input1' name='input1' placeholder='Type here...' /><br><br>" +

                        "<label for='select1'>Choose an option:</label><br>" +
                        "<select id='select1' name='select1'>" +
                            "<option value='option1'>Option 1</option>" +
                            "<option value='option2'>Option 2</option>" +
                        "</select><br><br>" +

                        "<input type='submit' value='Submit' />" +
                    "</form>" +

                    "<div id='formResult' style='margin-top: 10px;'></div>" +
                "</div>";

            // Handle form submission
            document.getElementById("myForm").addEventListener("submit", function(event) {
                event.preventDefault(); // Prevent page reload

                var inputText = document.getElementById("input1").value;
                var selectedOption = document.getElementById("select1").value;

                // Display the result
                document.getElementById("formResult").innerHTML = 
                    "<p><strong>You entered:</strong> " + inputText + "</p>" +
                    "<p><strong>You selected:</strong> " + selectedOption + "</p>";
            });
        },
    };

    // Register the onLoad function
    widget.addEvent('onLoad', myWidget.onLoad);
});
