// RANDOMIZE HEADER

// Store & Generate Number
var maxRand = 3;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = 'http://unsplash.it/200/200';
var img1 = 'http://unsplash.it/300/300';
var img2 = 'http://unsplash.it/400/400';

// Show Images
$('header img').attr('src', eval('img' + numRand) );