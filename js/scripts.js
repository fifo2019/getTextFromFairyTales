function appendText(data) {
    let textBox = `<p class="text-box">`;

    for (let item in data.text) {
        textBox += `${data.text[item]}</br>`;
    }

    textBox += `</p>`;

    textBox = textBox.replace(/{/g, "<span class='text-update'>{");
    textBox = textBox.replace(/}/g, "}</span>");

    $(textBox).appendTo('.text-wrp');
}


$(function() {
    let $body = $('body');

    $body.on('click', '.js-create-btn', function () {
        $.getJSON("https://api.myjson.com/bins/jcmhn", function (data) {
            $('.text-create-wrp').fadeOut(200);
            setTimeout(function () {
                appendText(data);
                $('.text-processing').css("display", "flex");
                $('.text-create-wrp').remove()
            }, 200);
        });
    });


    $body.on('click', '.js-text-update-btn', function () {
        let $selectedElement = $(this).prev();
        let nameElement = $selectedElement[0].name;
        let valueElement = $selectedElement[0].value;

        $('.text-update').each(function () {
            if (this.innerHTML === `{${nameElement}}`) {
                this.innerHTML = valueElement;
            }
        })
    })
});