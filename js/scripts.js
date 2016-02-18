$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var temperature = $("select#temperature").val();
    var activities = $("select#activities").val();
    var climate = $("select#climate").val();




    if (temperature === 'hot' && activities === 'beach' && climate === 'ocean') {
        $("#newyork").hide();
        $("#iceland").hide();
        $("#turks").show();
      }

    if (temperature === 'hot' && activities === 'beach' && climate === 'mountain') {
        $("#newyork").hide();
        $("#iceland").hide();
        $("#turks").show();
      }

    if (temperature === 'hot' && activities === 'beach' && climate === 'city') {
        $("#newyork").hide();
        $("#iceland").hide();
        $("#turks").show();
      }

    if (temperature === 'hot' && activities === 'nightlife' && climate === 'ocean') {
        $("#newyork").hide();
        $("#iceland").hide();
        $("#turks").show();
      }

    if (temperature === 'hot' && activities === 'nightlife' && climate === 'mountain') {
        $("#turks").hide();
        $("#iceland").hide();
        $("#newyork").show();
      }

    if (temperature === 'hot' && activities === 'nightlife' && climate === 'city') {
        $("#turks").hide();
        $("#iceland").hide();
        $("#newyork").show();
      }

    if (temperature === 'hot' && activities === 'nature' && climate === 'ocean') {
        $("#newyork").hide();
        $("#iceland").hide();
        $("#turks").show();
      }

    if (temperature === 'hot' && activities === 'nature' && climate === 'mountain') {
        $("#newyork").hide();
        $("#turks").hide();
        $("#iceland").show();
      }

    if (temperature === 'hot' && activities === 'nature' && climate === 'city') {
        $("#newyork").hide();
        $("#turks").hide();
        $("#iceland").show();
      }

    if (temperature === 'cold' && activities === 'beach' && climate === 'ocean') {
        $("#newyork").hide();
        $("#iceland").hide();
        $("#turks").show();
      }

    if (temperature === 'cold' && activities === 'beach' && climate === 'mountain') {
        $("#newyork").hide();
        $("#turks").hide();
        $("#iceland").show();
      }

    if (temperature === 'cold' && activities === 'beach' && climate === 'city') {
        $("#turks").hide();
        $("#iceland").hide();
        $("#newyork").show();
      }

    if (temperature === 'cold' && activities === 'nightlife' && climate === 'ocean') {
        $("#turks").hide();
        $("#iceland").hide();
        $("#newyork").show();
      }

    if (temperature === 'cold' && activities === 'nightlife' && climate === 'mountain') {
        $("#turks").hide();
        $("#iceland").hide();
        $("#newyork").show();
      }

    if (temperature === 'cold' && activities === 'nightlife' && climate === 'city') {
        $("#turks").hide();
        $("#iceland").hide();
        $("#newyork").show();
      }

    if (temperature === 'cold' && activities === 'nature' && climate === 'ocean') {
        $("#turks").hide();
        $("#newyork").hide();
        $("#iceland").show();
      }

    if (temperature === 'cold' && activities === 'nature' && climate === 'mountain') {
        $("#turks").hide();
        $("#newyork").hide();
        $("#iceland").show();
      }

    if (temperature === 'cold' && activities === 'nature' && climate === 'city') {
        $("#turks").hide();
        $("#newyork").hide();
        $("#iceland").show();
      }


    event.preventDefault();
  });
});
