//listen for form submition
$('#burger-form').on('submit', function(event) {
    event.preventDefault();

    const burgerdata = {
        burger_name: $('[name=burger-name]').val().trim()
    }
    console.log(burgerdata);

    $.ajax({
        url: '/api/burgers',
        method: 'POST',
        data: burgerdata
    }).then(response => {
        console.log(response);
        location.reload();
    });
});

$('.orderBurger').on('click', function() {
    const burgerId = $(this).attr('data-burgerid');
    console.log('hit')
    $.ajax({
        url: `api/burgers/${burgerId}`,
        method: 'PUT',
        data: {
            eaten: 1
        }
    }).then(response => {
        console.log(response);
        location.reload();
    });
});

$('.deleteBurger').on('click', function() {
    console.log('click')
    const burgerId = $(this).attr('data-burgerid');

    //get burger id
    $.ajax({
        url:`api/burgers/${burgerId}`,
        method: 'DELETE',
    }).then(response => {
        console.log(response);
        location.reload();
    });
});