var emotionCounts = {};

$(function(){
  var client_id = '73d111677079497b9c66f07ea1a4f1b0';

  var colorEmotions = {};
  _.each($('.background'), function(colorDom){
    colorEmotions[$(colorDom).attr('id')] = $(colorDom).css("background-color");
  });

  // var emotionCounts = {};
  _.each(colorEmotions, function(color, emotion){
    $.ajax({
      url: 'https://api.instagram.com/v1/tags/' + emotion + '?client_id=' + client_id,
      dataType: "jsonp",
      success: function(response){
        emotionCounts[emotion] = response.data.media_count;
      }
    });
  });

  console.log(JSON.stringify(emotionCounts, null, 3));
});

