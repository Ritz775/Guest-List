list_of_guests = [];

function enter_name_1() {
  var guest_name = document.getElementById("nameinput1").value;
  list_of_guests.push(guest_name);
  console.log(guest_name);
  console.log(list_of_guests);
  var length_of_names = list_of_guests.length;
  console.log(length_of_names);
  document.getElementById("row").innerHTML = list_of_guests.toString();
}

function show() {
  var i = list_of_guests.join("<br>");
  console.log(list_of_guests);
  document.getElementById("row2").innerHTML = i.toString();
  document.getElementById("hide").style.display = "inline-block";
}

function sorting() {
  list_of_guests.sort();
  var i = list_of_guests.join("<br>");
  console.log(list_of_guests);
  document.getElementById("row3").innerHTML = i.toString();
}

function search() {
  var s = document.getElementById("search").value;
  var found = 0;
  var j;
  for (j = 0; j < list_of_guests.length; j++) {
    if (s == list_of_guests[j]) {
      found = found + 1;
    }
  }

  document.getElementById("row4").innerHTML = "name found " + found + " time/s";
  console.log("name found " + found + " time/s");
}
