d3.json('/data/entries.json', function(data) {
  var entries = data.entries;

  var slider = d3.select('#gallery-right .gallery-inner .links');

  var entryRect = slider.selectAll('a').data(entries);

  var entryRectEnter = entryRect.enter().append('a').attr('class','entry')

  entryRectEnter
      .text(function(d) { return d.title + ' - ' + d.date; })
      .attr('href', function(d) { return d.url; })
      ;

  var hoverWait = false;

  slider.selectAll('a').each(function(d,i) {
    d3.select(this)
      .on('mousemove', function() {

        var leftPanel = d3.select('#panel-left');
        var sliderTop = parseInt(slider.style('top'));

        leftPanel.select('.title').text(function() { return d.title });

        leftPanel.select('.explanation').text(function() { return d.description })

        if (hoverWait) return;

        if(this.offsetTop + this.offsetHeight + sliderTop > window.innerHeight) {
          d3.select('.gallery-inner')
            .transition().duration(750)
              .style('top', (sliderTop - this.offsetHeight + 20) + 'px')

          hoverWait = true;
        }
        else if (this.offsetTop + sliderTop < 0) {
          d3.select('.gallery-inner')
            .transition().duration(750)
              .style('top', Math.min((sliderTop + this.offsetHeight), 0) + 'px')

          hoverWait = true;
        }

        if(hoverWait) setTimeout(function() { hoverWait = false }, 750)
      })
      .on('mouseout', function() {
        var leftPanel = d3.select('#panel-left')

        leftPanel.select('.title').property('innerHTML','Tyler Wolf')
        // leftPanel.select('.date').text('')
        leftPanel.select('.explanation').text('')
      })

    });

})