var portfolio = [{
        title: 'Waiting',
        path: 'img/waiting.gif',
        thumb: 'img/thumbs/waiting.png',
        description: 'Inspired by an Uber.'
    },{
        title: 'Luxor is Sick',
        path: 'img/luxor.gif',
        thumb: 'img/thumbs/luxor.png',
        description: 'My cat.'
    },{
        title: 'Christmas_1',
        path: 'img/Christmas_1.gif',
        thumb: 'img/thumbs/Christmas_1.png',
        description: 'Christmas trees.'
    },{
        title: 'Noise Cube',
        path: 'img/noise_cube.gif',
        thumb: 'img/thumbs/noise_cube.png',
        description: 'A 3D noise cube.'
    },{
        title: 'Archipelago Sunset',
        path: 'img/archipelago_sunset.gif',
        thumb: 'img/thumbs/archipelago_sunset.png',
        description: 'Sunset in the Swedish archipelago.'
    },{
        title: 'Williamsburg Firetruck',
        path: 'img/wburg_firetruck.gif',
        thumb: 'img/thumbs/wburg_firetruck.png',
        description: 'A firetruck in Williamsburg.'
    },{
        title: 'My First PCB',
        path: 'img/my_first_pcb.jpg',
        thumb: 'img/my_first_pcb.jpg',
        description: 'A DC-DC converter.'
    },{
        title: 'My Last PCB',
        path: 'img/my_last_pcb.jpg',
        thumb: 'img/my_last_pcb.jpg',
        description: 'An audio amplifier controller.'
    }];

var gallery = d3.select('.gallery-container');

var thumbs = d3.select('.slider-container')
    .selectAll('li.thumbnail')
    .data(portfolio);

thumbs.enter().append('li')
    .attr('class', 'thumbnail')
    .append('img')
    .attr('src', function(d) { return d.thumb; });

thumbs.on('click', function(d) {
    gallery.select('.selection-image img').attr('src', d.path);
    gallery.select('.selection-image').classed('not-filled', false);
    gallery.select('.selection-title').text(d.title);
    gallery.select('.selection-description').text(d.description);
});
