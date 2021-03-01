// function highlightWordAtXY(x, y) {
//     // // Get the parent element
//     // var par = document.elementFromPoint(x, y),
//     //     // textContent or innerText ?
//     //     t = "textContent" in par ? "textContent" : "innerText",
//     //     // Get the text of the element. No pun intended on the par[t].
//     //     text = par[t],
//     //     result;
    
//     // Wrap a span around every word
//     par.innerHTML = text.replace(/\b(\w+)\b/g, "<span>$1</span>");

//     // Get the elementFromPoint again, should be a span this time
//     result = document.elementFromPoint(x, y);

//     // Check we actually clicked on a word
//     if (result == par)
//         return false;
    
//     // // Wrap HTML text around the text at x, y
//     // result[t] = '<span class="highlight">' + result[t] + '</span>';
    
//     // // Restore the content with the wrapped text
//     // par.innerHTML = par[t];
// }

// $('h4, p').click(function (evt) {
//     // Remove the current highlight
//     $(".highlight").text(function () { return $(this).text(); });
//     highlightWordAtXY(evt.clientX, evt.clientY);
// });



// //split the paragraph by space
// var words = $( ".highlight-paragraph" ).text().split( /\s+/ );

// //join splited words with span tag
// var text = words.join( "</span> <span>" );

// // change paragraph text with words surrounded by span tag
// $( ".highlight-paragraph" ).html( "<span>" + text + "</span>" );

// // to highlight clicked word
// $(".highlight-paragraph span" ).on( "click", function() {
//     $( this ).toggleClass( "highlight");
// });



// var words = $( "p" ).first().text().split( /\s+/ );
// var text = words.join( "</span> <span>" );
// $( "p" ).first().html( "<span>" + text + "</span>" );
// $( "span" ).on( "click", function() {
// $( this ).css( "background-color", "black" );
// });


// $('span').each(function() {
//     var $this = $(this);
//     $this.html($this.text().replace(/\b(\w+)\b/g, "<span>$1</span>"));
// });

// $('span').click(
//     function() { 
//         $(this).css('background-color','#ffff66');
//     }
// );

var e = document.getElementById('highlight-paragraph');

e.innerHTML = e.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="word">$2</span>');

e.addEventListener('click', function(ev) {
  if (ev.target.classList.contains('word')) {
    ev.target.classList.toggle('highlighted');
    highlighted.innerHTML = 'Highlighted: ' + e.querySelectorAll('.highlighted').length;
  }
}, true);



// var e = document.getElementById('highlight-paragraph');

// e.innerHTML = e.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="word">$2</span>');

//     $(e).click(function (event) {
//             $(event.target).css("color", "white");
//         });