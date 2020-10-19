/// <reference path="../typings/globals/jquery/index.d.ts" />

const baseUrl = 'http://data.fixer.io/api/latest?access_key=691294d4aafb2afeb4a5c05345fa961b';
convertButton.on('click', function () {
    result.children().remove();
    fetch(`${baseUrl}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('' + response.status);
            }
        })
        .then(parsedJson => parsedJson.rates)
        .then(rates => {
            const from = inputFrom.val().trim().toUpperCase();
            const to = inputTo.val().trim().toUpperCase();
            const sum = inputSum.val().trim();
            const res = ((rates[to] / rates[from]) * sum).toFixed(4) + ` ${to}`;
            result.append($('<p></p>').text(res).css('display', 'inline'));
            clearInputs();
        })
        .catch(e => console.log(e.message));
});

function clearInputs() {
    inputFrom.val('');
    inputTo.val('');
    inputSum.val('');
}
