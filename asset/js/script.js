$.getJSON('http://api.wipmania.com/jsonp?callback=?', function (data) {
  //alert('Latitude: ' + data.latitude +
       // '\nLongitude: ' + data.longitude +
        //'\nCountry: ' + data.address.country);
});



$(function () {
  
    // attaching click handler to links
    $(".active > a").click(function (e) {

        // cancel the default behaviour
        e.preventDefault();

        // get the address of the link
        var href = $(this).attr('href');


        // getting the desired element for working with it later
        var $wrap = $('#content');

        $wrap
            // removing old data
            .html('')

            // slide it up


            // load the remote page
            .load(href + '#content', function () {
                var pathname = window.location.pathname;
                if (pathname.toLowerCase().indexOf("en.html") >= 0) {
                     $(".en").show();

                } else {
                    $(".tr").show();
                }
                $wrap.slideDown();
            });
    });

});
