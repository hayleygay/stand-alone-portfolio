// RANDOMIZE HEADER

// Store & Generate Number
var maxRand = 3;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = '/img/fullsize/1.jpg';
var img1 = '/img/fullsize/2.jpg';
var img2 = '/img/fullsize/3.jpg';

// Show Images
$('header img').attr('src', eval('img' + numRand) );

// ACTIVATE GALLERY

$('figure').lightGallery({
    selector: 'a'
});

// THUMBNAILS

$('#aniimated-thumbnials').lightGallery({
    thumbnail:true
}); 