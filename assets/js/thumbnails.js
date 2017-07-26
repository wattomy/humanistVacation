var looping = 77;
//Making nice little thumbanils out of images that are initially available
jQuery(document).ready(function() {
    makeGallery();
    jQuery('.imgs').nailthumb({
        imageCustomFinder: function(el){
            var image = $('<img />').attr('src',el.attr('href').replace('/full/','/small/')).css('display','none');
            image.attr('alt',el.attr('title'));
            el.append(image);
            return image;
        },
        titleAttr:'alt'
    });
});

function makeGallery() {
//Msg that will be split for every thumbnail, making a small story; msg for the rest of thumbnails
    var msg = "Every summer is full of adventures. It is similar to every Human-IST project except for the beautiful beaches and refreshing crystal-clear water.";
    var enjoymsg = "Life is like a mirror, we get the best results when we smile at it. With a sea next to you, you cannot but smile.";
    var msgString = msg.split(" ");
    var count = 56;
    for (var images = [], i = 0; i < count - 1; ++i) images[i] = i + 1; // make an array with numbers(images name) in order

    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    shuffle(images); //randomize the order of images

//actually adding the images as thumbnails
    for (var i = 1; i < count; i++) {
        var name = "public/images/welcomeThumbnails/" + images[i - 1] + '.jpg';
        if (msgString[i - 1] !== undefined) {
            $('#thumbnails').append('<a class="imgs nailthumb-container" id="' + images[i - 1] + '" title="' + msgString[i - 1] + '" href=' + name + '></a>');
        } else {
            $('#thumbnails').append('<a class="imgs nailthumb-container" title="' + enjoymsg + '" href=' + name + '></a>');
        }
    }

    //Automatic slideshow
    var next = 0;
    //changing the images on the slideshow every 5sec
    looping = window.setInterval(function(){
        $('.slides').children('img').remove();
        var name = "public/images/welcome/" + images[next] + '.jpg';
        $('.slides').append('<img id="' + images[next] + '" src="' + name + '">');
        next++; //increment data array id
        if (next==count) next=0; //repeat from start
    },5000);

    //closing/hiding slideshow
    $('#closeSlide').click(function(){
        clearInterval(looping);
        $('.slides').hide();
    });
}

$(document).ready(function() {
    var enjoymsg = "Life is like a mirror, we get the best results when we smile at it. With a sea next to you, you cannot but smile.";

    manualSlide();
//opening manually images
    function manualSlide() {
    $('a.imgs').click(function (e) {
        e.preventDefault();
        //closing/hiding slideshow
        clearInterval(looping);
        $('.slides').hide();

        $('#manualSlide').show();
        //switching to folder with HQ images
        var url = this.href;
        url = url.replace('Thumbnails', '');

        //setting image in the center and help buttons
        big_image(url, this.id);
        $('.help-buttons').show();
        $('.help-buttons').focus();
    });
}

//        opening folder
$('.folder').click(function(e){
    $(this).toggleClass('opened'); //marking the folder

    var country = $(this).children('span.folder-title')[0].id;
    var countryDiv = $('#' + country.toLowerCase() + '-thumbnails');
    if(!($(countryDiv).children().length)) { //If element has no children ie imgs, then load
        country = country.toUpperCase();
        var name = "public/" + country + 'Thumbnails' +  "/";

        if (country == "RO") {
            var count = 38;
        } else if (country == "CRO") {
            var count = 77;
        } else if (country == "BIH") {
            var count = 10;
        } else if (country == "MNE") {
            var count = 14;
        }
        for (var i = 1; i < count; i++) {
            $(countryDiv).append('<a class="imgs nailthumb-container" title="' + enjoymsg + '" href=' + name + i + ".jpg" + '></a>');
        }
        $(countryDiv).children('.imgs').nailthumb({
            imageCustomFinder: function (el) {
                var image = $('<img />').attr('src', el.attr('href').replace('/full/', '/small/')).css('display', 'none');
                image.attr('alt', el.attr('title'));
                el.append(image);
                return image;
            },
            titleAttr: 'alt'
        });
    }
    $(countryDiv).toggle();
    $(countryDiv).focus();
    manualSlide();

});
});