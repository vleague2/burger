// WHEN DOC IS DONE LOADING
$(function() {

    // ON-CLICK FUNCTIONS

    // when user clicks one of the devour buttons
    $(".devour").click(function() {  

        // pull the id of the button
        let id = this.id;

        // send a put request with the id added to the url
        $.ajax('/api/burgers/' + id, {
            type: 'PUT'
        }).then( function() {
            
            // then reload the page
            location.reload();
        })
    })

    // when the user clicks the submit button to add a burger
    $("#submit").click(function() {

        // prevent it from submitting a form/redirecting
        event.preventDefault();

        // if the user didn't input anything
        if (!$("#burger-input").val().trim()) {

            // show the helper text on the index page
            $("#textHelp").css('display', 'block');
        }

        else {
            // pull the burger name from the input and put into an object
            let burgerName = {burgername: $("#burger-input").val().trim()};

            // send a post request to the server with the burgername object
            $.ajax('/api/burgers', {
                type: 'POST',
                data: burgerName
            }).then( function() {

                // then reload the page
                location.reload();
            })
        }
    })
});