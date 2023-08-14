  //show and hide dropdown list item on button click
  function show_hide() {
    var click = document.getElementById("list-items");
    var btn = document.querySelector(".menu-button");
    if (click.style.display === "none") {
       click.style.display = "block";
       btn.innerHTML = '<i class="fa-solid fa-bars fa-rotate-90 fa-2xl" style="color: #d8dadf;"></i>';
       click.classList.add('anim');
    } else {
       click.style.display = "none";
       btn.innerHTML = '<i class="fa-solid fa-bars fa-2xl" style="color: #e6e7ea;"></i>';
    }
   
 }