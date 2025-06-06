 define("DS/Helloworld/scripts/Helloworld", [], function(){
    var myWidget = {
        onLoad: function() {
            // Get values from widget preferences
            var type = widget.getValue("Type") || "";
            var name = widget.getValue("Name") || "";
            var revision = widget.getValue("Revision") || "";

            // Inject HTML with clean structure and styling
            widget.body.innerHTML = `
                <style>
                    .main-container {
                        font-family: Arial, sans-serif;
                        max-width: 400px;
                        padding: 20px;
                        background-color: #f9f9f9;
                        border-radius: 8px;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                        margin: auto;
                    }
                    .form-group {
                        margin-bottom: 15px;
                    }
                    .form-group label {
                        display: block;
                        font-weight: bold;
                        margin-bottom: 5px;
                    }
                    .form-group input {
                        width: 100%;
                        padding: 8px;
                        box-sizing: border-box;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                    }
                    .button-group {
                        text-align: right;
                        margin-top: 20px;
                    }
                    .button-group button {
                        padding: 8px 16px;
                        margin-left: 10px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                    }
                    #doneBtn {
                        background-color: #4CAF50;
                        color: white;
                    }
                    #cancelBtn {
                        background-color: #f44336;
                        color: white;
                    }
                    #resultDisplay {
                        margin-top: 20px;
                        padding: 10px;
                        background-color: #e7f3fe;
                        border-left: 5px solid #2196F3;
                    }
                </style>

                <div class='main-container'>
                    <form id='dynamicForm'>
                        <div class='form-group'>
                            <label for='typeInput'>Type</label>
                            <input type='text' id='typeInput' name='type' value='${type}' />
                        </div>
                        <div class='form-group'>
                            <label for='nameInput'>Name</label>
                            <input type='text' id='nameInput' name='name' value='${name}' />
                        </div>
                        <div class='form-group'>
                            <label for='revisionInput'>Revision</label>
                            <input type='text' id='revisionInput' name='revision' value='${revision}' />
                        </div>

                        <div class='button-group'>
                            <button type='button' id='cancelBtn'>Cancel</button>
                            <button type='submit' id='doneBtn'>Done</button>
                        </div>
                    </form>

                    <div id='resultDisplay'></div>
                </div>
            `;

            // Done button (submit)
            document.getElementById("dynamicForm").addEventListener("submit", function(event) {
                event.preventDefault();

                var newType = document.getElementById("typeInput").value.trim();
                var newName = document.getElementById("nameInput").value.trim();
                var newRevision = document.getElementById("revisionInput").value.trim();

                document.getElementById("resultDisplay").innerHTML = `
                    <strong>Submitted Values:</strong>
                    <p>Type: ${newType}</p>
                    <p>Name: ${newName}</p>
                    <p>Revision: ${newRevision}</p>
                `;
            });

            // Cancel button
            document.getElementById("cancelBtn").addEventListener("click", function() {
                // Reset to original values
                document.getElementById("typeInput").value = type;
                document.getElementById("nameInput").value = name;
                document.getElementById("revisionInput").value = revision;

                document.getElementById("resultDisplay").innerHTML = `<p><em>Changes canceled.</em></p>`;
            });
        },
    };

    widget.addEvent('onLoad', myWidget.onLoad);
});
