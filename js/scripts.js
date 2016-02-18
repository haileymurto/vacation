$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var temperature = $("select#temperature").val();
    var activities = $("select#activities").val();
    var climate = $("select#climate").val();




    if (temperature === 'hot' && activities === 'beach' && climate === 'ocean') {
        $("#turks").show();
      }

    if (temperature === 'hot' && activities === 'beach' && climate === 'mountain') {
        $("#turks").show();
      }

    if (temperature === 'hot' && activities === 'beach' && climate === 'city') {
        $("#turks").show();
      }

    if (temperature === 'hot' && activities === 'nightlife' && climate === 'ocean') {
        $("#turks").show();
      }

    if (temperature === 'hot' && activities === 'nightlife' && climate === 'mountain') {
        $("#newyork").show();
      }

    if (temperature === 'hot' && activities === 'nightlife' && climate === 'city') {
        $("#newyork").show();
      }

    if (temperature === 'hot' && activities === 'nature' && climate === 'ocean') {
        $("#turks").show();
      }

    if (temperature === 'hot' && activities === 'nature' && climate === 'mountain') {
        $("#iceland").show();
      }

    if (temperature === 'hot' && activities === 'nature' && climate === 'city') {
        $("#iceland").show();
      }

    if (temperature === 'cold' && activities === 'beach' && climate === 'ocean') {
        $("#turks").show();
      }

    if (temperature === 'cold' && activities === 'beach' && climate === 'mountain') {
        $("#iceland").show();
      }

    if (temperature === 'cold' && activities === 'beach' && climate === 'city') {
        $("#newyork").show();
      }

    if (temperature === 'cold' && activities === 'nightlife' && climate === 'ocean') {
        $("#newyork").show();
      }

    if (temperature === 'cold' && activities === 'nightlife' && climate === 'mountain') {
        $("#newyork").show();
      }

    if (temperature === 'cold' && activities === 'nightlife' && climate === 'city') {
        $("#newyork").show();
      }

    if (temperature === 'cold' && activities === 'nature' && climate === 'ocean') {
        $("#iceland").show();
      }

    if (temperature === 'cold' && activities === 'nature' && climate === 'mountain') {
        $("#iceland").show();
      }

    if (temperature === 'cold' && activities === 'nature' && climate === 'city') {
        $("#iceland").show();
      }


    event.preventDefault();
  });
});
