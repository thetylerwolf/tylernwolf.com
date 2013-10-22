var gallery = d3.select('#gallery-right .gallery-inner');

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
var dayEnter = day.enter().append('div').attr('class', 'day column large-1 small-1');

day
  .style('background-color', function(d,i,j) {
    var currentDay = j+1;
    console.log(d,j,todayDate(d,currentDay))
    if(currentDay > daysInMonth(d+1,0)) return 'transparent';
    return now.getTime() > seconds(d,currentDay) ? dayColors[today(d, currentDay)] : '#000';
  })
  .style('border', function(d,i,j) {
    var currentDay = j+1;
    if(currentDay > daysInMonth(d+1,0)) return 'transparent';
    return '1px solid ' + (now.getTime() > seconds(d,currentDay) ? '#fff' : dayColors[today(d, currentDay)]);
  })
  .on('mouseover',function(d,i,j) {
    var currentDay = j+1;
    if(currentDay > daysInMonth(d+1,0)) return;
    d3.select('#panel-left .date').property('innerHTML',todayDate(d,currentDay).toLocaleDateString());
  })
  .on('mouseout',function() { d3.select('#panel-left .date').property('innerHTML',new Date().toLocaleDateString()); })