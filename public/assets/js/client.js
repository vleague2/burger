$(function() {
    $(".devour").click(function() {  
        let id = this.id;

        $.ajax('/api/burgers/' + id, {
            type: 'PUT'
        }).then( function() {
            location.reload();
        })
    })

    $("#submit").click(function() {
        event.preventDefault();

        let burgerName = {burgername: $("#burger-input").val().trim()};

        if (!$("#burger-input").val().trim()) {
            $("#textHelp").css('display', 'block');
        }

        else {
            $.ajax('/api/burgers', {
                type: 'POST',
                data: burgerName
            }).then( function() {
                location.reload();
            })
        }
    })
});