document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', function () {
        const currentlyOpen = document.querySelector('.accordion.open');
        const parent = this.parentElement;

        if (currentlyOpen && currentlyOpen !== parent) {
          currentlyOpen.classList.remove('open');
        }

        parent.classList.toggle('open');
      });
    });

    // Ensure the first dropdown is open by default
    window.addEventListener('DOMContentLoaded', () => {
      const firstAccordion = document.querySelector('.accordion');
      firstAccordion.classList.add('open');
    });