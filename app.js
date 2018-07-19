var html;
var person = [];


const data = $.ajax({
  url: 'https://randomuser.me/api/?results=16',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    for (i=0; i < data.info.results; i++) {
    const firstName = data.results[i].name.first;
    const lastName = data.results[i].name.last;
    const email = data.results[i].email;
    const birthDay = data.results[i].dob.date.substring(0,10);
    const phoneNumber = data.results[i].cell;
    const street = data.results[i].location.street;
    const state = data.results[i].location.state;
    const city = data.results[i].location.city;
    const postcode = data.results[i].location.postcode;
    const picture = data.results[i].picture.large;
    person[i] = [firstName, lastName, email, birthDay, phoneNumber, street, state, city, postcode, picture];


    html = `<div class='person' id='${i}'><li><a href="${picture}" rel="lightbox" title="Designed by <a href='${picture}' target='_blank'>${firstName}</a>"><img src="${picture}" width="150" height="150"></a><p class='personTitle'>${firstName} ${lastName}</p><p class='subinfo'>${email}</p><p class='subinfo2'>${city}</p><em><p class='phone'>${phoneNumber}</p><p class='address'>${street}, ${postcode}</p><p class='birthday'>Birthday: ${birthDay}</p></li></div>`


    $('.clearfix').append(html);



}

$('div.person').click(function(){
  console.log('sdfsdfsd')
  setTimeout(function(){
  $('#jquery-lightbox').append(html);
}, 300);
});


$('.personTitle').css('textTransform', 'capitalize');
$('.subinfo2').css('textTransform', 'capitalize');

// $(function(){
//   $('.person').lightBox({
//     containerResizeSpeed: 250,
//     fixedNavigation: false
//   });
// });
}

});
