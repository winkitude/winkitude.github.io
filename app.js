$(function(){

  var database = firebase.database();
  var simpsons = database.ref('/simpsons');


  // Add items to database //
  $('#add-item-btn').on('click', function(e){
    e.preventDefault();
    location.reload();

    var itemLove = $('#simp-love').val();
    var itemLover = $('#simp-lover').val();
    var itemConnection = $('#simp-connection').val();
    var itemEpisode = $('#simp-episode').val();

   // console.log("Values", itemLove, itemLover, itemConnection, itemEpisode);

    var newItem = simpsons.push();
    newItem.set({ name: itemLove, lover: itemLover, type: itemConnection, episode: itemEpisode });
    $('.simp-row').empty();
});

  simpsons.on('value', function(items){
    items.forEach(function(item){  
      // DATABASE //
      var id = item.key;
      var nameSimpson = item.val().name;
      var loverSimpson = item.val().lover;
      var typeLove = item.val().type;
      var episodeLove = item.val().episode;

      // IMAGE //
      var baseURL = "https://accesscontrolalloworiginall.herokuapp.com/https://frinkiac.com/api/search?q=";
      var baseImgURL = "https://frinkiac.com/img/";
      var searchURL = baseURL + nameSimpson + " " + loverSimpson
      // console.log(searchURL)



      $.get(searchURL, function(response){
         console.log(response[0])
         
        var i = 0
        
        var episodeNumber = response[i].Episode;
        var photoNumber = response[i].Timestamp;
        var simpsonPhoto = baseImgURL + episodeNumber + "/" + photoNumber;


        var newElement = '<tr class="simp-row">' +
        '<td>' + nameSimpson + '</td>' +
        '<td>' + loverSimpson + '</td>' +
        '<td>' + typeLove + '</td>' +
        '<td>' + episodeLove + '</td>' +
        '<td class="simp-pic">' + '<img src="' + simpsonPhoto + '" width="100px" height="76px"></td>' + 
      //'<td>' + '<a href="#" class="refresh-btn">Refresh</a>' + '</td>'
        '</tr>';

        $('#simp-table').append(newElement);  
        
        

        // // REFRESH BUTTON
        // $('.refresh-btn').on('click', function(event){
        //   event.preventDefault();
        //    console.log("hello");
         
        //   var episodeNumber = response[i++].Episode;
        //   var photoNumber = response[i++].Timestamp;
        //   var simpsonPhotoUpdate = baseImgURL + episodeNumber + "/" + photoNumber;
        //   console.log(simpsonPhotoUpdate);
        //   var updatedPhotoElement =  '<td class="simp-pic">' + '<img src="' + simpsonPhotoUpdate + '" width="100px" height="76px"></td>' + 
        //   '<td>' + '<a href="#" class="refresh-btn">Refresh</a>' + '</td>';
        //  $('.simp-pic').remove();
        //  $('.simp-pic').append(updatedPhotoElement);
        // });       
      



       
      });
    });
  });
});

//TABLE SORTER //
function sortTable(n) {

  var table = document.getElementById("simp-table");
  var switching = true;
  var shouldSwitch = "";
  var switchcount = "";
  var rows = "";   
  var dir = "asc"; 
  
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
   
    for (var i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      var x = rows[i].getElementsByTagName("TD")[n];
      var y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++; 
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
 