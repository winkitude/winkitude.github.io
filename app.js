// replace this entire code block with the config found in the firebase dashboard
// for your created database
var config = {
    apiKey: "AIzaSyAXAxRvCIYRYeStu1g7j-8nWDQBEWXxsVI",
    authDomain: "js58-test-app.firebaseapp.com",
    databaseURL: "https://js58-test-app.firebaseio.com",
    projectId: "js58-test-app",
    storageBucket: "js58-test-app.appspot.com",
    messagingSenderId: "829807584998"
  };
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

$(function(){
  $('#add-button').on('click', function(){
    console.log($('#new-item').val());

// todo-items is made up. could have been chicken
// when we hit push, we will be given back a thunk (something performed later on) from firebase
    var value = $('#new-item').val();
// grab a reference to the "todo-items" key in firebase
//and then create a new item that we set data on    
    var item = database.ref("/todo-items").push();
// call the key value whatever we want again could be chicken
    item.set({value: value})
  });

// grab a reference to the todo-items key and...
  database.ref("/todo-items").on("value", function(snapshot){
  	// console.log(snapshot.val());
    var list = $('#list-items');
    list.empty()
  	// list.append('<li>this is a test</>')
  	snapshot.forEach(function(listItem){
  	  var item = listItem.val().value;
  	  list.append('<li data-id="' + listItem.key + '">' + item + ' <a href=# class="remove">remove</a></li>');
  	});
  });

  $('#list-items').on('click', 'li a', function(){
  var itemId = $(this).parent().data('id');
  database.ref("/todo-items/" + itemId).remove();
});
});
