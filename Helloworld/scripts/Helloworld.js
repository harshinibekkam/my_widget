 define("DS/Helloworld/scripts/Helloworld", [], function(){
    var myWidget = {
        onLoad: function() {
            // Get values from widget preferences
            var type = widget.getValue("Type") || "";
            var name = widget.getValue("Name") || "";
            var revision = widget.getValue("Revision") || "";

            // Inject two "pages": one for form, one for submitted values
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
                    #backBtn {
                        background-color: #2196F3;
                        color: white;
                    }
                    .page {
                        display: none;
                    }
                    .active {
                        display: block;
                    }
                </style>

                <div class='main-container'>
                    <!-- Page 1: Form -->
                    <div id='formPage' class='page active'>
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
                    </div>

                    <!-- Page 2: Confirmation -->
                    <div id='resultPage' class='page'>
                        <h3>Submitted Values</h3>
                        <p><strong>Type:</strong> <span id='displayType'></span></p>
                        <p><strong>Name:</strong> <span id='displayName'></span></p>
                        <p><strong>Revision:</strong> <span id='displayRevision'></span></p>
                        <div class='button-group'>
                            <button id='backBtn'>Back</button>
                        </div>
                    </div>
                </div>
            `;

            // Handle form submit
            document.getElementById("dynamicForm").addEventListener("submit", function(event) {
                event.preventDefault();

                // Get form values
                const newType = document.getElementById("typeInput").value.trim();
                const newName = document.getElementById("nameInput").value.trim();
                const newRevision = document.getElementById("revisionInput").value.trim();

                // Display values on next page
                document.getElementById("displayType").textContent = newType;
                document.getElementById("displayName").textContent = newName;
                document.getElementById("displayRevision").textContent = newRevision;

                // Navigate to result page
                document.getElementById("formPage").classList.remove("active");
                document.getElementById("resultPage").classList.add("active");
            });

            // Cancel button resets to original values
            document.getElementById("cancelBtn").addEventListener("click", function() {
                document.getElementById("typeInput").value = type;
                document.getElementById("nameInput").value = name;
                document.getElementById("revisionInput").value = revision;
                alert("Changes canceled");
            });

            // Back button to go from result page to form
            document.getElementById("backBtn").addEventListener("click", function() {
                document.getElementById("resultPage").classList.remove("active");
                document.getElementById("formPage").classList.add("active");
            });
        }
    };

    widget.addEvent('onLoad', myWidget.onLoad);
});
