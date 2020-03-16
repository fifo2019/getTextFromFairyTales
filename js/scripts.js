function appendText(data) {
    let textBox = `<p class="text-box">`;

    for (let item in data.text) {
        textBox += `${data.text[item]}</br>`;
    }

    textBox += `</p>`;

    $(textBox).appendTo('.text-wrp');
}


$(function() {
    $('.js-create-btn').click(function () {
        $.getJSON("https://api.myjson.com/bins/jcmhn", function (data) {
            $('.js-create-btn').fadeOut(400);
            setTimeout(function () {
                appendText(data);
            }, 600);
        });
    })
});