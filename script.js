//AJAX
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10");
xhr.setRequestHeader("X-RapidAPI-Key", "233125d3d6msh3758c64bfba44d7p194893jsncc4a386b0991");
xhr.setRequestHeader("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");

xhr.send(data);

// $(document).ready(function() {
//     let eskiSidebar = $(".sidebar");
//     let eskiMain = $(".main");
//     console.log(eskiSidebar);
//     $(".toogleButon").click(function(){
//         eskiSidebar.animate({
//             width: 10% 
//         },1000);
//         eskiMain.animate({
//             width: 90% 
//         },1000);

//     })
// });

// $(document).ready(function() {
//     $(".toggleButon").click(function() {
//       if($(".sidebar").is(":visible")) {
//         $(".sidebar").hide();
//         $(".sidebar2").show();
//       } else {
//         $(".sidebar").show();
//         $(".sidebar").hide();
//       }
//     });
//   });


// $(document).ready(function() {
//     $('.toggleButon').click(function() {
//       $('.sidebar').toggleClass('sidebar2');
//       $('#main').toggleClass('main2');
//     });
//   });


// $(document).ready(function() {
//    if($(".toggleButon").on("click", function (){
//     if($(".main").hasClass(".active")){
//         $('.main').removeClass(".active")
//     }
//     else{
//         $('.main').addClass(".active")
//     }
//    }));
// });