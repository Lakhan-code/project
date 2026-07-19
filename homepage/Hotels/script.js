
      let hotels = [];
      fetch("hotels.json")
        .then((r) => r.json())
        .then((d) => {
          hotels = d;
          render(d);
        });
      function render(arr) {
        const box = document.getElementById("list");
        box.innerHTML = "";
        arr.forEach((h) => {
          box.innerHTML += `<div class="col-lg-4 col-md-6"><div class="card h-100 shadow-sm">
<img src="${h.image}">
<div class="card-body">
<h5>${h.name}</h5>
<p>${h.city}, ${h.state}</p>
<p>⭐ ${h.rating}</p>
<p class="price">₹${h.price}/Night</p>
<p>${h.wifi ? "📶 WiFi " : ""}${h.breakfast ? "🍳 Breakfast " : ""}${h.pool ? "🏊 Pool" : ""}</p>
<button class="btn btn-primary w-100">Book Now</button>
</div></div></div>`;
        });
      }
      function filterHotels() {
        const k = document.getElementById("q").value.toLowerCase();
        render(
          hotels.filter((h) =>
            (h.name + " " + h.city + " " + h.state).toLowerCase().includes(k),
          ),
        );
      }
   const Search = document.getElementById("list").addEventListener('click', function(){
  alert("This Feature Coming Soon ☺️")

});