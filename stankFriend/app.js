var friends = ["dave", "tim", "Matt"];


$('#main-heading').text('my friends').fadeIn(3000).slideUp(2000).slideDown(2000);

for (var i = 0; i < friends.length; i += 1) {
    var randomFriend = friends[Math.floor(Math.random() * friends.length)];
    $('body').append("<p>" + randomFriend + " stanks " + "</p>").hide(3000).fadeIn(2000);

}