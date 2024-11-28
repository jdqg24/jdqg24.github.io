(function () {
    const openModalButton = document.getElementById("openModal");
    const modalOverlay = document.getElementById("modalOverlay");
    const closeModalButton = document.getElementById("closeModal");
  
    // Open modal
    openModalButton.addEventListener("click", () => {
      modalOverlay.style.display = "flex";
    });
  
    // Close modal when clicking the close button
    closeModalButton.addEventListener("click", () => {
      modalOverlay.style.display = "none";
    });
  
    // Close modal when clicking outside the modal content
    modalOverlay.addEventListener("click", (event) => {
      if (event.target === modalOverlay) {
        modalOverlay.style.display = "none";
      }
    });
  })();
  