var client_id = '73d111677079497b9c66f07ea1a4f1b0';

$(function(){
  var colorEmotions = {};
  _.each($('.background'), function(colorDom){
    colorEmotions[$(colorDom).attr('id')] = $(colorDom).css("background-color");
  });

  var tagFetchTasks = {}
  _.each(colorEmotions, function(color, emotion){
    tagFetchTasks[emotion] = function(callback){
      $.ajax({
        url: 'https://api.instagram.com/v1/tags/' + emotion + '?client_id=' + client_id,
        dataType: "jsonp",
        success: function(response){
          callback(null, response.data.media_count);
        }
      });
    };
  });

  async.parallel(tagFetchTasks, function(err, results){
    console.log(JSON.stringify(results, null, 3));
  });
});
