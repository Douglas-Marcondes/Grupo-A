  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-router@3"></script>
    <script>

    let inputBox = document.querySelector(".input-box"),
                searchIcon = document.querySelector(".icon"),
                closeIcon = document.querySelector(".close-icon");

            searchIcon.addEventListener("click", () => inputBox.classList.add("open"));
            closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));
  
        const Home = { template: '<div class="container"><h2>Início</h2><p>Bem-vindo ao meu site profissional.</p></div>' };
        const Sobre = { template: '<div class="container"><h2>Sobre</h2><p>Conheça mais sobre mim e minha experiência.</p></div>' };
        const Portfolio = { template: '<div class="container"><h2>Portfólio</h2><p>Veja alguns dos meus trabalhos.</p></div>' };
        const Servicos = { template: '<div class="container"><h2>Serviços</h2><p>Descubra os serviços que ofereço.</p></div>' };
        const Contato = { template: '<div class="container"><h2>Contato</h2><p>Entre em contato comigo para discutir oportunidades.</p></div>' };

      
        const routes = [
            { path: '/', component: Home },
            { path: '/sobre', component: Sobre },
            { path: '/portfolio', component: Portfolio },
            { path: '/servicos', component: Servicos },
            { path: '/contato', component: Contato },
        ];

        const router = new VueRouter({
            routes
        });

        // Instância Vue
        new Vue({
            el: '#app',
            router,
            data: {
                siteTitle: 'Meu Site Profissional',
                siteDescription: 'Construído com Vue.js',
                currentYear: new Date().getFullYear(),
            },
        });
    </script>

