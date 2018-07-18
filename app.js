const data = $.ajax({
  url: 'https://randomuser.me/api/?results=16',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    for (i=0; i < data.info.results; i++) {
    const firstName = data.results[i].name.first;
    const lastName = data.results[i].name.last;
    const email = data.results[i].email
    birthDay
    phoneNumber
    address
    postcode
    console.log(firstName);

  }}
});
