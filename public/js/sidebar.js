document.addEventListener('DOMContentLoaded', function() {
    // Seu código que manipula o DOM vai aqui.
    var sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.addEventListener('click', function() {
        console.log('Sidebar clicked!');
      });
    }
  
    var someElement = document.getElementById('some-element-id');
    if (someElement) {
      someElement.classList.add('new-class');
    }
  });
  