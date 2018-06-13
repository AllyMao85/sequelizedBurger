// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
   
    $("body").on('click', "button[class='devour']", function(event) {
      event.preventDefault();
      console.log($(this).siblings(".list").val());
      var id = $(this).parent().attr("id");
      var newburgername = $(this).siblings(".list").val();
      var devoured = true;
      console.log("changed burger id: " + id);
      console.log("changed burger name: " + newburgername);
      var changedburger = {
        burger_name: newburgername,
        devoured: true
      };
     console.log(changedburger);
    // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
         type: "PUT",
         data: changedburger
      }).then(
        function() {
           console.log("changed burger name to", newburgername);
        // Reload the page to get the updated list
           location.reload();  //this doesn't work, you have to refresh the page
         }
        );
     });
      // Check input( $( this ).val() ) for validity here
   
   //
    //$("body").on('click', "button[id=submit]", function(event) {
    $("#submit").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log($(this).siblings(".newburger").val().trim());
      var newburger = {
        burger_name: $(this).siblings(".newburger").val(),
        devoured: false
      };
       console.log(newburger);
      // Send the POST request.
      // $.post("/api/burgers",newburger)
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      })
      .then(function(data) {
          console.log("created new burger");  
          // Reload the page to get the updated list
          location.reload();
        }
      );

    

    });

  }); 