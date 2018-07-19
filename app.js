const data = $.ajax({
  url: 'https://randomuser.me/api/?results=16',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    for (i=0; i < data.info.results; i++) {
    const firstName = data.results[i].name.first;
    const lastName = data.results[i].name.last;
    const email = data.results[i].email;
    const birthDay = data.results[i].dob.date;
    const phoneNumber = data.results[i].cell;
    const street = data.results[i].location.street;
    const state = data.results[i].location.state;
    const city = data.results[i].location.city;
    const postcode = data.results[i].location.postcode;
    const picture = data.results[i].picture.large;


    const html = `<div class='person'><li><a href="${picture}" rel="lightbox" title="Designed by <a href='${picture}' target='_blank'>${firstName}</a>"><img src="${picture}" width="150" height="150"></a><p class='personTitle'>${firstName} ${lastName}</p><p class='subinfo'>${email}</p><p class='subinfo2'>${city}</p></li></div>`
    $('.clearfix').append(html);
}

$('.personTitle').css('textTransform', 'capitalize');
$('.subinfo2').css('textTransform', 'capitalize');

$(function(){
  $('a[rel=lightbox]').lightBox({
    containerResizeSpeed: 250,
    fixedNavigation: true
  });
});
}






});
