$(document).ready(function() {

    // HIDE COMMENTS FORM ON LOAD
    $('#commentForm').hide();

    // TOGGLE COMMENTS FORM WHEN ADD COMMENT BUTTON IS CLICK
    $('.showCommentForm').click(function() {
        $('#commentForm').slideToggle(750);
    });
    
});
