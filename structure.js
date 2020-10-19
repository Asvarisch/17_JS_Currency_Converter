/// <reference path="../typings/globals/jquery/index.d.ts" />
    const fieldset = $('<fieldset></fieldset>');
    const forms = $("<form></form>").css({
        'display': 'flex',
        'flex-direction': 'column',
        'flex-wrap': 'wrap'
        
    });
    const inputFrom = $('<input/>').attr({type: 'text', autofocus: true });
    const labelFrom = $('<label></label>').text('From ').append(inputFrom, $('<br></br>'));
    const inputTo = $('<input/>').attr({type: 'text', autofocus: true });
    const labelTo = $('<label></label>').text('To ').append(inputTo, $('<br></br>'));
    const inputSum = $('<input/>').attr({type: 'text', autofocus: true });
    const labelSum = $('<label></label>').text('Sum ').append(inputSum, $('<br></br>'));
    const convertButton = $('<button></button>').text('Convert').css('margin','10px');
    const result = $('<label></label>').text('Result: ').css({
        'display': 'inline',
        'font-size': 'large'
    });
    forms.append(labelFrom, labelTo, labelSum);
    fieldset.append(forms, convertButton);
    forms.children().css('margin','10px');
    $('#root').append(fieldset, $('<br></br>'), result);
