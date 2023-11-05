
$(document).ready(function() {

    $("#register-button").click(function() {
        var firstName = $("#typeNameX").val();
        var email = $("#typeEmailX").val();
        var password = $("#typePasswordX").val();

        // Check if the email is already in use
        var isEmailInUse = false; // Initialize the flag

        //Validate email format
        if(email.indexOf("@") === -1) {
            $("#registration-error-message").text("Invalid email format.");
            return;
        }

        // Perform a GET request to check if the email is in use
        $.ajax({
            url: "http://localhost:8080/api/users",
            type: "GET",
            contentType: "application/json",
            success: function(usersData) {
                isEmailInUse = usersData.some(function(user) {
                    return user.email === email;
                });

                if (isEmailInUse) {
                    // Show an error message if email is already in use
                    $("#registration-error-message").text("This email is already in use.");
                } else {
                    // Perform validation and send POST request
                    if (firstName && email && password) {
                        $.ajax({
                            url: "http://localhost:8080/api/users",
                            type: "POST",
                            data: JSON.stringify({
                                firstName: firstName,
                                email: email,
                                password: password
                            }),
                            async: true,
                            contentType: "application/json",
                            success: function() {
                                console.log("Registration successful");
                                window.location.href = "mainPage.html";
                            },
                            error: function() {
                                console.log("Registration error");
                            }
                        });
                    } else {
                        console.log("Incomplete registration form");
                        // Show an error message on the registration form
                        $("#registration-error-message").text("Please fill out all fields.");
                    }
                }
            },
            error: function() {
                console.error("Error retrieving user data");
            }
        });
    });

    // Login
    $("#button-login").click(function() {
        var email = $("#typeEmailX").val();
        var password = $("#typePasswordX").val();

        // Perform validation and send GET request
        if (email && password) {
            $.ajax({
                url: "http://localhost:8080/api/users",
                type: "GET",
                contentType: "application/json",
                success: function(usersData) {
                    console.log()
                    var foundUser = usersData.find(function(user) {
                        return user.email === email && user.password === password;
                    });

                    if (foundUser) {
                        console.log("Login successful:", foundUser);
                        window.location.href = "mainPage.html";
                    } else {
                        console.error("Login failed");
                        $("#login-error-message").text("Invalid credentials. Please try again.");
                    }
                },
                error: function() {
                    console.error("Error retrieving user data");
                }
            });
        } else {
            console.log("Incomplete login form");
            // Show an error message on the login form
            $("#login-error-message").text("Please enter both email and password.");
        }
    });

    // Logout
    $("#button-logout").click(function() {
        console.log("hello check me out bitch");

        $.ajax({
            url: "http://localhost:8080/api/users",
            async: true,
            success: function() {
                // Redirect the user to the login page
                window.location.href = "loginPage.html";
            },
            error: function() {
                console.log("Logout error");
            }
        });
    });
/* 
    populateScoringBoard function() {
        $.ajax({
            url: "http://localhost:8080/api/users", 
            type: "UPDATE",
            async: true,
            success: function() {
                // Redirect the user to the login page
                window.location.href = "loginPage.html";
            },
            error: function() {
                console.log("Error going back");
            }
    } */


   /*  updateScore function() {
        $.ajax({
            url: "http://localhost:8080/api/users", 
            type: "UPDATE",
            async: true,
            success: function() {
                // Redirect the user to the login page
                window.location.href = "loginPage.html";
            },
            error: function() {
                console.log("Error going back");
            }
    }
 */
    //Update button
    /* $("#button-update").click(function() {
        console.log("hello check me out bitch I'm so done please let me go");
        $.ajax({
            url: "http://localhost:8080/api/users", 
            type: "UPDATE",
            async: true,
            success: function() {
                // Redirect the user to the login page
                window.location.href = "loginPage.html";
            },
            error: function() {
                console.log("Error going back");
            }
            
        });
    }); */

    //Back from creating an account to the login page
    $("#button-back").click(function() {
        console.log("hello check me out bitch I'm so done please let me go");
        $.ajax({
            url: "http://localhost:8080/api/users", 
            type: "GET",
            async: true,
            success: function() {
                // Redirect the user to the login page
                window.location.href = "loginPage.html";
            },
            error: function() {
                console.log("Error going back");
            }
        });
    });
});
 
