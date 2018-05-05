$(function() {
    $(".devour").click(function() {  
        let id = this.id;

        $.ajax('/api/burgers/' + id, {
            type: 'PUT'
        }).then( function() {
            console.log("yes");
            location.reload();
        })
    })
});