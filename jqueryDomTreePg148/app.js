

var newHeadingText = prompt('enter new heading text');
$('h1').text(newHeadingText).fadeIn(3000).fadeOut(3000);
$('h1').text(newHeadingText).slideUp(1000).slideDown(1000);

// for (var i = 0; i < 3; i += 1) {
//     var hobby = prompt('tell me about your hobbies');
//     $('body').append("<p>" + hobby + "</p>");
// }