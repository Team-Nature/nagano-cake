// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require_tree .


$(function(){
  $("#item_image").on("change", function(e){
    var reader = new FileReader();
    reader.onload = function(e){
      $(".image").attr("src", e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  });

  $("input[name='order[addresses]']").change(function(){
    if($("#order_addresses_new_address").prop("checked")){
      $("#order_select_address").prop("disabled", true);
      $("#order_deliver_postcode").prop("disabled", false);
      $("#order_deliver_address").prop("disabled", false);
      $("#order_deliver_name").prop("disabled", false);
    }else if($("#order_addresses_deliver_address").prop("checked")){
      $("#order_select_address").prop("disabled", false)
      $("#order_deliver_postcode").prop("disabled", true);
      $("#order_deliver_address").prop("disabled", true);
      $("#order_deliver_name").prop("disabled", true);
    }else{
      $("#order_select_address").prop("disabled", true)
      $("#order_deliver_postcode").prop("disabled", true);
      $("#order_deliver_address").prop("disabled", true);
      $("#order_deliver_name").prop("disabled", true);
    }
  })
});