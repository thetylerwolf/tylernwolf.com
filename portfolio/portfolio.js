var portfolio = [{
        title: 'Waiting',
        path: 'waiting.gif',
        thumb: 'thumbs/waiting.png',
        description: 'Inspired by an Uber.'
    },{
        title: 'Luxor Feels Sick',
        path: 'luxor.gif',
        thumb: 'thumbs/luxor.png',
        description: 'My cat.'
    },{
        title: 'Christmas_1',
        path: 'Christmas_1.gif',
        thumb: 'thumbs/Christmas_1.png',
        description: 'Christmas trees.'
    },{
        title: 'Noise Cube',
        path: 'noise_cube.gif',
        thumb: 'thumbs/noise_cube.png',
        description: 'A 3D noise cube.'
    },{
        title: 'Archipelago Sunset',
        path: 'archipelago_sunset.gif',
        thumb: 'thumbs/archipelago_sunset.png',
        description: 'Sunset in the Swedish archipelago.'
    },{
        title: 'Williamsburg Firetruck',
        path: 'wburg_firetruck.gif',
        thumb: 'thumbs/wburg_firetruck.png',
        description: 'A firetruck in Williamsburg.'
    },{
        title: 'My First PCB',
        path: 'my_first_pcb.jpg',
        thumb: 'thumbs/my_first_pcb.jpg',
        description: 'A DC-DC converter.'
    },{
        title: 'My Last PCB',
        path: 'my_last_pcb.jpg',
        thumb: 'thumbs/my_last_pcb.jpg',
        description: 'An audio amplifier controller.'
    }];

var gallery = d3.select('.gallery-container');

var thumbs = d3.select('.slider-container')
    .selectAll('li.thumbnail')
    .data(portfolio);

var s3 = 'http://media.tylernwolf.com.s3.amazonaws.com/'

var mainImage = document.getElementById('gallery-image');

mainImage.onload = function() {
    d3.select(this).classed('hidden',false);
    gallery.select('.loading-container').classed('hidden', true);
}

thumbs.enter().append('li')
    .attr('class', 'thumbnail')
    .append('img')
    .attr('src', function(d) { return s3 + d.thumb; });

thumbs.on('click', function(d) {
    if(gallery.select('.selection-image img').attr('src') == s3 + d.path)
        return;

    gallery.select('.loading-container').classed('hidden', false);
    gallery.select('.selection-image img').classed('hidden', true);
    gallery.select('.selection-image img').attr('src', s3 + d.path);
    gallery.select('.selection-image').classed('not-filled', false);
    gallery.select('.selection-title').text(d.title);
    gallery.select('.selection-description').text(d.description);
});
