

document.addEventListener("DOMContentLoaded", function() {

    var link = document.getElementById("textojanela");

    link.addEventListener("click", function(event) {

      event.preventDefault();
  
      alert("Conta criada com sucesso");
  
      window.location.href = link.href;
    });
  });
  
let inputBox = document.querySelector(".input-box"),
                searchIcon = document.querySelector(".icon"),
                closeIcon = document.querySelector(".close-icon");

            searchIcon.addEventListener("click", () => inputBox.classList.add("open"));
            closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));

            document.getElementById('item-flutuante').addEventListener('mouseover', function() {
                document.getElementById('janela-flutuante').classList.add('show');
            });
            
            document.getElementById('item-flutuante').addEventListener('mouseout', function() {
                document.getElementById('janela-flutuante').classList.remove('show');
            });

            document.getElementById('janela-flutuante').addEventListener('mouseover', function() {
                document.getElementById('janela-flutuante').classList.add('show');
            });

            document.getElementById('janela-flutuante').addEventListener('mouseout', function() {
                document.getElementById('janela-flutuante').classList.remove('show');
            });

            document.getElementById('item-flutuante').addEventListener('click', function() {
                document.getElementById('janela-flutuante').classList.add('show');
            });
            let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("carousel-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 1000); // Change image every 10 seconds
}
