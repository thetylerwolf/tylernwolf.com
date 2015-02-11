d3.json('/data/entries.json', function(data) {
  var entries = data.entries;

  // var colors = ["#9e1010", "#9e2710", "#be8513", "#328e1f", "#20598d", "#4f1ca0"]
  var colors = ["#68B841","#D9AB27", "#C23D23", "#9E3CD9", "#2587CF", "#C22E2B"]

  //['#dbb700','#9d2810'];

  // var randomColor = function() { return colors[parseInt(Math.random() * colors.length)]; };

  // var randomGradient = function() {
  //   var a = parseInt(Math.random()),
  //       b = parseInt(Math.random());

  //   while(Math.abs(a - b) < 2) {
  //       a = parseInt(Math.random());
  //   }

  //   return [colors[a], colors[b]];
  // }

  // var colorScale = d3.scale.linear().domain([0,entries.length - 1]).range(randomGradient());

  d3.shuffle(colors);

  var colorScale = function(i) { return colors[i]; }

  var slider = d3.select('#gallery-right .gallery-inner');

  var entryRect = slider.selectAll('a').data(entries);

  var entryRectEnter = entryRect.enter().append('a').append('div').attr('class','entry')

  var entryRectDiv = entryRect.select('.entry')

  var entryDate = entryRectEnter.append('div').attr('class','entry-date')

  entryRectEnter
      // .style('height','0%')
      // .text(function(d) { return d.title; })
      .style('color', '#262626')

  entryRect.attr('href', function(d) { return d.url; })

  entryRectDiv
    .transition().delay(750).duration(1000)
      .style('background-color',function(d,i) { return colorScale(i); /*colors[i % colors.length]*/})
      .style('height','30%')
      .style('max-height','175px')
      .style('color','#fff')

  entryDate
      .text(function(d) { return d.date; })

  var hoverWait = false;

  entryRectDiv.each(function(d,i) {
    d3.select(this)
      .on('mousemove', function() {

        var leftPanel = d3.select('#panel-left');
        var sliderTop = parseInt(slider.style('top'));

        leftPanel.select('.title').text(function() { return d.title })//.property('innerHTML',function() { return d.title })
        // leftPanel.select('.date').text(function() { return d.date })
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

        leftPanel.select('.title').property('innerHTML','Tyler<br>Wolf')
        // leftPanel.select('.date').text('')
        leftPanel.select('.explanation').text('')
      })

    });

  // slider.style('height', function(d) {
  //   var newHeight = d3.sum(entryRect[0], function(d) { return d.offsetHeight})
  //   return (newHeight < window.innerHeight) ? '100%' :
  //   newHeight + 'px';
  // })

})