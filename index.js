

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
