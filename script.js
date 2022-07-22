var allListMenuItem = $(".content").find(".hover");
allListMenuItem.each(function() {
    $(this).css('flex-basis', 100 / (allListMenuItem.length) + '%');
});
$('.hover').click(function(){
    console.log(this);
    link = $(this).attr("link");
    window.open(link);
});

$(document).on('ready', function() {
    console.log('ngaaaa');
});