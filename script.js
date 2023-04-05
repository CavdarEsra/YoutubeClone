
  $(document).ready(function() {
    $('.sidebar').show();
    $('.sidebar2').hide();
    
    $('.toogleButon').click(function() {
      if ($('.sidebar').is(':visible')) {
        $('.sidebar').hide();
        $('.sidebar2').show();
        $('.main').css('width', '93%');
      } else {
        $('.sidebar').show();
        $('.sidebar2').hide();
        $('.main').css('width', '85%');
      }
    });
  });



// var apiKey = 'YoutubeAPIyaz';
// function getYouTubeData() {
//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     type: 'GET',
//     data: {
//       key: apiKey,
//       q: 'kedi',
//       part: 'snippet',
//       maxResults: 10 
//     },
//     success: function(data) {
//       processData(data);
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       alert('AJAX Error: ' + textStatus + ' ' + errorThrown);
//     }
//   });
// }

// function processData(data) {
//   var videoList = '';

//   for (var i = 0; i < data.items.length; i++) {
//     var video = data.items[i];
//     videoList += '<div class="video">';
//     videoList += '<h2>' + video.snippet.title + '</h2>';
//     videoList += '<p>' + video.snippet.description + '</p>';
//     videoList += '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + video.id.videoId + '" frameborder="0" allowfullscreen></iframe>';
//     videoList += '</div>';
//   }

//   $('#videos').html(videoList);
// }

// getYouTubeData();


// $(document).ready(function() {
//     $('.toggleButon').click(function() {
//       $('.sidebar').toggleClass('close');
//     });
//   });


 