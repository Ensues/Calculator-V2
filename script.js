

var $keys = $('button');
var $total = $('.total');
var $summary = $('.summary');
var decimal = false;
var operators = ['+', '-', '×', '÷'];

$keys.click(function () {
    var keyVal = $(this).data('val');
    output = $summary.html();
    var lastChar = output[output.length - 1];

    if (keyVal == 'clear') {
        $total.html('0');
        $summary.html('');
        decimal = false;
    }
    else if (keyVal == '←') {
        if (output.length > 0) {
            $summary.html(output.slice(0, -1));
        }
    }
    else if (keyVal == '=') {
        output = output.replace(/×/g, '*').replace(/÷/g, '/');
        if (operators.indexOf(lastChar) > -1 || lastChar == '.')
            return;
        if (output) {
            $total.html(Math.round(eval(output) * 10000000) / 10000000);
        }
        $summary.addClass('complete');
        decimal = false;
    }
    else if ($(this).hasClass('operator')) {
        if ($summary.is('.complete')) {
            $summary.removeClass('complete');
        }
        if (output !== '' && operators.indexOf(lastChar) === -1) {
            $summary.html($summary.html() + keyVal);
        } else if (output === '' && keyVal === '-') {
            $summary.html($summary.html() + keyVal);
        } else if (operators.indexOf(lastChar) > -1) {
            $summary.html(output.slice(0, -1) + keyVal);
        }
        decimal = false;
    }
    else if (keyVal == '.') {
        if ($summary.is('.complete')) {
            $summary.html('0' + keyVal);
            $summary.removeClass('complete');
        } else if (output == '') {
            $summary.html('0' + keyVal);
        } else {
            const lastNumber = output.split(/[\+\-\×\÷]/).pop();
            if (!lastNumber.includes('.')) {
                $summary.html($summary.html() + keyVal);
            }
        }
    } else {
        if ($summary.is('.complete')) {
            $summary.html(keyVal);
            $summary.removeClass('complete');
        } else {
            $summary.html($summary.html() + keyVal);
        }
    }
});