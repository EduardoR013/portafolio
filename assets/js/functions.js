/*
  Oscar Angel Espinoza Reyes.
  GitHub: https://github.com/oscar-er
  Sitio Web: https://weboscarreyes.alwaysdata.net
*/

function navbarToggle(elementButton, elementList) {
    var buttonDisplay = document.getElementById(elementButton);
    var listUl = document.getElementById(elementList);
  
    buttonDisplay.addEventListener("click", function() {
      listUl.classList.toggle("view");
    });
  }
  
  function openModal(elementModal, elementClose) {
    var windowModal = document.getElementById(elementModal);
    var buttonClose = document.getElementById(elementClose);
    var elementBody = document.getElementsByTagName("body")[0];
  
    windowModal.style.display = "block";
    elementBody.style.overflow = "hidden";
  
    window.onclick = function(event) {
      if (event.target == windowModal) {
        windowModal.style.display = "none";
        elementBody.style.overflow = "visible";
      }
    }
  
    buttonClose.onclick = function() {
      windowModal.style.display = "none";
      elementBody.style.overflow = "visible";
    }
  
  }