angular.module('tylerwolf').factory('entries',['$interval', function entriesFactory($interval) {
    return [
            {
              date: "2/22/14",
              title: "Jade/Stylus Bootstrap",
              description: "Gruntfile and npm package to get a jade/stylus-based project up and running",
              url:"https://github.com/thetylerwolf/sketchfindatagen",
              external: true
            },
            {
              date:"8/9/13",
              title:"Color Calendar",
              description: "A color calendar that fills in as time passes. Inspired by 'A Colorful New Year', a poster by Niklaus Troxler. Best viewed with a large window size.",
              url:"#/creative/entry_8_9_13",
              id:"entry_8_9_13",
              op: function() {

                var gallery = d3.select('#content');
                gallery.append('div').attr('class', 'date')

                var calendarWrap = gallery.append('div').attr('class','calendar-wrap');

                var now = new Date();

                var year = undefined || now.getYear() + 1900;

                var dayColors = ['#258ace','#b80f74','#57bc3c','#372885','#f85921','#0b95b9','#f5db0a']

                var daysInMonth = function(month) {
                  return new Date(year, month, 0).getDate();
                };
                var today = function(month, day) {
                  return new Date(year, month, day).getDay();
                }
                var seconds = function(month,day) {
                  return new Date(year, month, day).getTime();
                }
                var yearStartDay = function(year) {
                  return new Date(year, 0,1).getDay();
                }
                var todayDate = function(month, day) {
                  return new Date(year, month, day);
                }

                var row = calendarWrap.selectAll('div.row').data(d3.range(1,32));
                var rowEnter = row.enter().append('div').attr('class', 'row');

                var day = row.selectAll('div.day').data(d3.range(0,12));
                var dayEnter = day.enter().append('div').attr('class', 'day col-xl-1 col-sm-1');

                day
                  .style('background-color', function(d,i,j) {
                    var currentDay = j+1;
                    if(currentDay > daysInMonth(d+1,0)) return 'transparent';
                    return now.getTime() > seconds(d,currentDay) ? dayColors[today(d, currentDay)] : '#333';
                  })
                  .style('border', function(d,i,j) {
                    var currentDay = j+1;
                    if(currentDay > daysInMonth(d+1,0)) return 'transparent';
                    return '1px solid ' + (now.getTime() > seconds(d,currentDay) ? '#fff' : dayColors[today(d, currentDay)]);
                  })
                  .on('mouseover',function(d,i,j) {
                    var currentDay = j+1;
                    if(currentDay > daysInMonth(d+1,0)) return;
                    d3.select('.date').property('innerHTML',todayDate(d,currentDay).toLocaleDateString());
                  })
                  .on('mouseout',function() { d3.select('.date').property('innerHTML',new Date().toLocaleDateString()); })
              }
            },
            {
              date:"7/19/13",
              title:"HSL Color Picker",
              description: "An HSL colorpicker built in D3.",
              url:"#/creative/entry_7_19_13",
              id:"entry_7_19_13",
              op: function() {
                var color = window.location.hash;
                var copi = cp.colorpicker();
                var colorData = cp.colorSystems.hsla;
                var content = d3.select('#content');

                content.attr('class', 'colorpicker');
                content.append('svg').attr('style','height:200px;');
                var a = content.append('div').attr('class', 'gh-link').append('a');
                a.attr('href','https://github.com/thetylerwolf/d3-colorpicker')
                  .text('See it on Github');

                d3.select('#content svg')
                  .datum(colorData)
                  .call(copi)

                copi.dispatch.on('cpupdate', function(d) {
                  d3.select('#hslValue').text(cp.converters.dataToHslaString(d));
                  d3.select('.gh-link a').style('color',cp.converters.dataToHslaString(colorData))
                });

                d3.select('#hslValue').text(cp.converters.dataToHslaString(colorData))
                d3.select('.gh-link a').style('color',cp.converters.dataToHslaString(colorData))
              }
            },
            {
              date:"10/23/12",
              title:"Happy Worm",
              description: "An experiment in sensory integration.",
              url:"#/creative/entry_10_23_12",
              id:"entry_10_23_12",
              op: function() {
                var mouse = [480,250],
                    current = [480,250],
                    color = ['#31a354', '#74c476', '#a1d99b', '#c7e9c0','#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#756bb1', '#9e9ac8', '#bcbddc', '#dadaeb', '#636363', '#969696', '#bdbdbd', '#d9d9d9'],
                    count = 0,
                    i = 0,
                    xRate = 0,
                    yRate = 0
                    baseRate = 3.5;

                var svg = d3.select('#content').append('svg')
                  // .attr('width',960)
                  // .attr('height',500)
                  .on('mousemove', updateLocation);


                function updateLocation() {
                  mouse = [d3.event.x,d3.event.y];
                }


                function move() {
                  xRate = mouse[0] - current[0];
                  yRate = mouse[1] - current[1];

                  if (Math.abs(xRate) == Math.abs(yRate)) {
                    xRate = baseRate;
                    yRate = baseRate;
                  } else {
                    if(Math.abs(xRate) > Math.abs(yRate)) { 
                      yRate = baseRate * yRate/Math.abs(xRate);
                      xRate = xRate > 0 ? baseRate : -baseRate;
                    }
                    else {
                      xRate = baseRate * xRate/Math.abs(yRate);
                      yRate = yRate > 0 ? baseRate : -baseRate;
                    }
                  }

                  current[0] += xRate;
                  current[1] += yRate;

                }

                function tunnel() {

                    d3.select('svg').append('circle')
                      .attr('cx', Math.round(current[0]))
                      .attr('cy', Math.round(current[1]))
                      .style('fill', color[i++ % 16])
                      .attr('r', 0)
                    .transition()
                      .duration(9000)
                      .attr('r', 960)
                      .remove();

                    move();
                };

                return $interval(tunnel, 300 * (1 + baseRate/11));
              }
            },
            {
              date:"10/12/12",
              title:"Leaderboard",
              description: "A leaderboard designed to update with incoming data.",
              url:"#/creative/entry_10_12_12",
              id:"entry_10_12_12",
              op: function() {
                var d = [],
                data = [],
                leaders = 10,
                iColor = []
                bColor = [];

              for (i = 0; i < 15 ; i++) {
                d = d.concat(c(i));
              }

              function c(i) {
                return {
                  label: "Competitor " + i,
                  value: (Math.random() * 100)
                };
              }

              function color(i) {
                var color = ["goldenrod","silver","chocolate"];
                if (color[i])
                  return color[i];
                else return 0;
              }

              function indColor() {
                for(j=0; j<d.length; j++) {
                  if(!iColor[d[j].label])
                    iColor[d[j].label] = "hsl(" + j * 360/20 + ",60% " + ",40% )";
                }
              }

              function borColor() {
                for(j=0; j<d.length; j++) {
                  if(!bColor[d[j].label])
                    bColor[d[j].label] = "hsl(" + j * 360/20 + ",90% " + ",40% )";
                }
              }

              borColor();
              indColor();

              var tops = d.sort(function(a, b) { return b.value - a.value;}).slice(0,leaders);


              var margin = {top: 30, right: 40, bottom:10, left:40},
                width = parseInt(d3.select('#content').style('width')),
                height = window.innerHeight - 200 - margin.top - margin.bottom;

              var x = d3.scale.linear()
                  .domain([0, d3.max(data)])
                  .rangeRound([0,width]);

              var y=d3.scale.ordinal()
                  .domain(tops.map(function(d) {return d.label;}))
                  .rangeBands([0,height]);

              var list = d3.select("#content").append("svg")
                  .attr("class", "list")
                  .attr('style','height:' + (height + margin.top + margin.bottom) + ';')
                  .attr("width", width)
                  .attr("height", height + margin.top + margin.bottom);

              //===========DRAW===============================================
              //===========DRAW===============================================

              list.selectAll("rect")
                  .data(tops,(function(d) {return d.label;}))
                .enter().append("rect")
                  .attr("x", margin.left)
                  .attr("y", function(d) {return margin.top +y(d.label);})
                  .attr("rx", 5)
                .attr("ry",5)
                  .attr("width", width - margin.right - 5)
                  .attr("height", function(d) {return y.rangeBand() - 6;})
                  .attr("fill", function(d,i) {return iColor[d.label]})
                  .attr("stroke", bColor[d.label]);

              list.selectAll(".bar")
                  .data(tops,function(d) {return d.label;})
                .enter().append("text")
                  .attr("class", "bar")
                  .attr("x", margin.left + 10)
                  .attr("y", function(d) { return margin.top + y(d.label) + y.rangeBand() / 2; })
                  .attr("dy", ".35em")
                  .attr("text-anchor", "start")
                  .attr("fill", "white")
                  .text(function(d,i) {return i+1 + ". " + d.label;});


              //================================================================================
              //================================================================================    

              function redraw(newData) {
                tops = newData.sort(function(a, b) { return b.value - a.value;}).slice(0,leaders);

                var rect = list.selectAll("rect")
                  .data(tops,(function(d) {return d.label;}));

                var text = list.selectAll(".bar")
                    .data(tops,(function(d) {return d.label;}))

                var AUM = list.selectAll(".aum")
                  .data(tops,function(d) {return d.label;})

                x = d3.scale.linear()
                  .domain([0, d3.max(data)])
                  .rangeRound([0,width]);

                y=d3.scale.ordinal()
                  .domain(tops.map(function(d) {return d.label;}))
                  .rangeBands([0,height]);


                rect.enter().append("rect")
                  .attr("x", margin.left)
                  .attr("y", height + margin.top + margin.bottom)
                    .attr("width", width - margin.right - 5)
                    .attr("height", function(d) {return y.rangeBand() - 6;})
                    .attr("fill", "white")
                    .attr("stroke", "white");

                rect.transition()
                  .duration(750)
                  .attr("rx", 3)
                  .attr("ry",3)
                    .attr("y", function(d) {return margin.top + y(d.label);} )
                    .attr("fill", function(d) {return iColor[d.label]})
                    .attr("stroke-width", 6)
                    .attr("stroke", function(d,i) {return (color(i)) ? color(i) : bColor[d.label];});

                  rect.exit().transition()
                    .duration(750)
                    .attr("y", height + margin.top + margin.bottom)
                    .remove();

                text.enter().append("text")
                    .attr("class", "bar")
                    .attr("x", margin.left + 10)
                    .attr("y", height + margin.top + margin.bottom + 20 )
                    .attr("text-anchor", "start")
                    .attr("fill", "white")
                    .text(String);

                text.transition()
                  .duration(750)
                  .attr("x", margin.left + 10)
                    .attr("y", function(d) { return margin.top + y(d.label) + y.rangeBand() / 2 ; })
                    .attr("dy", ".35em")
                    .attr("text-anchor", "start")
                    .attr("fill", "white")
                    .text(function(d,i) {return i+1 + ". " + d.label;});

                text.exit().transition()
                  .remove();
              //=================AUM=======================
              //=================AUM=======================

                AUM.enter().append("text")
                    .attr("class", "aum")
                    .attr("x", margin.left + width - margin.right - 10)
                    .attr("y", height + margin.top + margin.bottom )
                    .attr("text-anchor", "end")
                    .attr("fill", "white")
                    .text(String);

                AUM.transition()
                  .duration(750)
                  .attr("x", margin.left + width - 55)
                    .attr("y", function(d) { return margin.top + y(d.label) + y.rangeBand() / 2 ; })
                    .attr("dy", ".35em")
                    .attr("text-anchor", "end")
                    .attr("fill", "white")
                    .text(function(d,i) {return "Score: " + d.value;});

                AUM.exit().transition()
                  .remove();

              }

              return $interval(function() {
                //d = [];
                for (i = 0; i < 15 ; i++) {
                  d[i].value = (parseFloat(d[i].value) + Math.random()*100).toFixed(0);
                }
                indColor();
                redraw(d);
                }, 2000);
              }
            }
        ];
}]);