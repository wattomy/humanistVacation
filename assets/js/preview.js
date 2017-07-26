$(document).ready(function()
{
    $("#prev_image").click(function(){
        prev();
    });
    $("#next_image").click(function(){
        next();
    });
    $("#close_image").click(function(){
        close();
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            close();
        }
    });
});

// This function is used to close the preview of the image whenever sombody click on close button
function close()
{
    $('#slideshow_image').fadeOut(300,function()
    {
        document.getElementById("slideshow_image").style.visibility="hidden";
        document.getElementById("slideshow_image").style.display="none";
        document.getElementById("prev_image").style.visibility="hidden";
        document.getElementById("prev_image").style.display="none";
        document.getElementById("next_image").style.visibility="hidden";
        document.getElementById("next_image").style.display="none";
        document.getElementById("close_image").style.visibility="hidden";
        document.getElementById("close_image").style.display="none";
    });
    $('#manualSlide').hide();
    $('.help-buttons').hide();
}

function visibility()
{
    document.getElementById("slideshow_image").style.visibility="visible";
    document.getElementById("slideshow_image").style.display="block";
    document.getElementById("prev_image").style.visibility="visible";
    document.getElementById("prev_image").style.display="block";
    document.getElementById("next_image").style.visibility="visible";
    document.getElementById("next_image").style.display="block";
    document.getElementById("close_image").style.visibility="visible";
    document.getElementById("close_image").style.display="block";
}

// This function is used to preview the image whenever sombody click on any image
function big_image(src,index)
{
    $("#slideshow_image").fadeIn(1000);
    $('#slideshow_image').attr('src',src);
    visibility();
    document.getElementById("img_no").value=index;
}

// This function is used to slide previous images on preview whenever somebody clicks on previous button
function prev()
{
    visibility();
    $('#slideshow_image').fadeOut(300,function()
    {
        var prev_val=document.getElementById("img_no").value;
        var prev_val=Number(prev_val)-1;

        if(prev_val<=0)
        {
            prev_val=32;
        }
        var img=document.getElementById("gallery");

        $('#slideshow_image').attr('src',"public/images/welcome/" + prev_val + ".jpg");
        document.getElementById("img_no").value=prev_val;
    });

    $('#slideshow_image').fadeIn(1000);
}

// This function is used to slide next images on preview whenever somebody clicks on next button
function next()
{
    visibility();
    $('#slideshow_image').fadeOut(300,function()
    {
        var next_val=document.getElementById("img_no").value;
        var next_val=Number(next_val)+1;

        if(next_val>32)
        {
            next_val=1;
        }
        var img=document.getElementById("gallery");

        $('#slideshow_image').attr('src',"public/images/welcome/" + next_val + ".jpg");

        document.getElementById("img_no").value=next_val;
    });

    $('#slideshow_image').fadeIn(1000);
}
