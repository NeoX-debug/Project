    // Gestion du bouton hamburger pour afficher/cacher le menu mobile
    document.querySelector(".menu-toggle").addEventListener("click", function() {
        const menu = document.querySelector(".menu");
        // On vérifie le style display, et on le bascule entre "flex" et "none"
        if (menu.style.display === "flex") {
          menu.style.display = "none";
        } else {
          menu.style.display = "flex";
        }
      });
  
      // Gestion du clic sur "Services" pour afficher/cacher le sous-menu en mode mobile
      // On applique cet événement uniquement en mode mobile
      const serviceToggle = document.querySelector(".service-toggle");
      serviceToggle.addEventListener("click", function(e) {
        // Empêche le comportement par défaut du lien
        e.preventDefault();
        // Seul le comportement en mode mobile (petites résolutions)
        if (window.innerWidth <= 768) {
          const submenu = this.nextElementSibling;
          // Bascule la classe "show" pour afficher ou cacher le sous-menu
          submenu.classList.toggle("show");
        }
      });