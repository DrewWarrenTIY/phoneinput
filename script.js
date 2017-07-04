$('body').on('keypress', '.phone-input', function(ev) {
  // http://unixpapa.com/js/key.html
  // charCode on some browsers, keyCode on some browsers, webkit keyCode 0 for most inputs.
  var key = ev.charCode || ev.keyCode || 0;
  var number = $(this);
  console.log("keyCode: ", key)

  // on keypress, if input is blank, add opening parenthesis
  if (number.val().length === 0) {
    number.val(number.val() + '(');
  }

  // Auto formatting
  if (key !== 8 && key !== 9) {
    if (number.val().length === 4) {
      number.val(number.val() + ')');
    }
    if (number.val().length === 5) {
      number.val(number.val() + ' ');
    }
    if (number.val().length === 9) {
      number.val(number.val() + '-');
    }
    if (number.val().length === 14) {
      number.val(number.val().slice(0, 13));
    }
  }

  // only allow numbers, and special keys
  return ( key == 8 ||    // backspace
    key == 9 ||           // tab
    key == 13 ||          // enter (allows use in form to submit)
    (key >= 48 && key <= 57)); // 0 - 9
});

// When user focus targets input, add opening paren.
// Ensure curser remains at end of line by replacing value with itself.
$('body').on('focus', '.phone-input', function() {
  number = $(this);

  if (number.val().length === 0) {
    number.val('(');
  } else {
    var val = number.val();
    number.val('').val(val);
  }
});

// Remove the opening parenthesis if user focus leaves the input.
$('body').on('blur', '.phone-input', function() {
  number = $(this);

  if (number.val() === '(') {
    number.val('');
  }
});
