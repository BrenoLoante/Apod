function searchImg() {

    const searchDate = $('#date').val();
    const key = '7Yblb8MhcpO1fWGqPBTyG0aZ8RagGmXPSSMjdKSG';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${searchDate}`;

    $.ajax({
        type: 'GET',
        url: url,

        success: function (response) {
            const divExplanation = $('<img src="' + response.url + '"><div id="sobre"><h2>"' +
                response.title + '"</h2><p>"' + response.explanation + '"</p></div>'
            );

            $("#sobre-nasa").html(divExplanation);
        },
    });
}