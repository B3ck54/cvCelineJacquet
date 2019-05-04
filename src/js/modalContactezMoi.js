$(document).ready(function() {
    // open modal
    $('#open_modal').click(function() {
        $('#modal_to_open').css({
            'display': 'block'
        });
    });

    //close modal
    $('#close_modal').dblclick(function() {
        $('#modal_to_open').css({
            'display': 'none'
        });
    });
});