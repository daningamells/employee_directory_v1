var person = [];

const data = $.ajax({ //ajax call to fetch data
    url: 'https://randomuser.me/api/?results=16&nat=gb',
    dataType: 'json',
    success: function(data) {
        for (i = 0; i < data.info.results; i++) {
            const firstName = data.results[i].name.first;
            const lastName = data.results[i].name.last;
            const email = data.results[i].email;
            const birthDay = data.results[i].dob.date.substring(0, 10);
            const phoneNumber = data.results[i].cell;
            const street = data.results[i].location.street;
            const state = data.results[i].location.state;
            const city = data.results[i].location.city;
            const postcode = data.results[i].location.postcode;
            const picture = data.results[i].picture.large;
            person[i] = [firstName, lastName, email, birthDay, phoneNumber, street, state, city, postcode, picture];
            html = `<div class='person' id='${i}'><li><a href="#" rel="lightbox" title="Designed by <a href='${picture}' target='_blank'>${firstName}</a>"><img src="${picture}" width="150" height="150"></a><p class='personTitle'>${firstName} ${lastName}</p><p class='subinfo'>${email}</p><p class='subinfo2'>${city}</p></li></div>`;
            $('.clearfix').append(html);

        }

        $('div.person').click(function(e) { //function to create create lightbox html

            let pobj = $(this);
            var id = pobj["0"].id;
            var html2 = `<div class='personLB'><span class='arrow2'><p id="left-arrow"><</p> <a href="#" class="cancel">&times;</a><img class='imageLB' src="${person[id][9]}" width="150" height="150"></a><p id="right-arrow">></p></span><p class='personTitleLB'>${person[id][0]} ${person[id][1]}</p><p class='subinfoLBemail'>${person[id][2]}</p><p class='subinfo2LB'>${person[id][7]}</p><hr><span class='lbsub'><p class='phoneLB'>${person[id][4]}</p><p class='addressLB'>${person[id][5]}, ${person[id][8]}</p><p class='birthdayLB'>Birthday: ${person[id][3]}</p></span></div>`;

            $("#cover").css("display", "flex");
            setTimeout(function() {
                $('#cover').append(html2);
                $('a.cancel').click(function() {
                    $("#cover").css("display", "none");
                    $('.personLB').remove();

                });

                $('p#right-arrow').click(function(e) { // function to make arrows assign a new id and select new employee
                    var newID = parseInt(id) + 1;

                    if (newID === 16) {
                        newID = 0;
                    }

                    $("#cover").css("display", "none");
                    $('.personLB').remove();
                    $('#' + newID).trigger('click');


                });

                $('p#left-arrow').click(function(e) {
                    newID = parseInt(id) + -1;

                    if (newID === -1) {
                        newID = 15;
                    }

                    $("#cover").css("display", "none");
                    $('.personLB').remove();
                    $('#' + newID).trigger('click');


                });

            }, 300);

        });

        $('.personTitle').css('textTransform', 'capitalize'); // Capitalise correct fields
        $('.subinfo2, .subinfoLB').css('textTransform', 'capitalize');

    }
});

$('#search button').click(function() { // Function to create search
    var term = $('#search input').val().toLowerCase();
    $('.personTitle').each(function(index, value) {
        var matchTerm = $(this).html();

        if (matchTerm.indexOf(term) === -1) {
            $(this).closest("div").hide();

        } else if (matchTerm.indexOf(term) != -1) {
            $(this).closest("div").show();

        }

        if (term === '') {
            $(".person").show();
            console.log('empty');

        }
    });

});
