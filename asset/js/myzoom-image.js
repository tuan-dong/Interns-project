$(document).ready(function(){
    $('[data-toggle="zoom"]').each(function () {
        $(this).zoom({
            url: $(this).attr('data-image'),
            duration: 0
        });
    });
});   