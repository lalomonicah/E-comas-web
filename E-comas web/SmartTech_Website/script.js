document.addEventListener('DOMContentLoaded', () => {
  const cartButtons = document.querySelectorAll('[data-product]');
  const toast = document.querySelector('.toast');
  let cartCount = 0;
  let toastTimer;

  cartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      cartCount += 1;
      const productName = button.dataset.product;
      if (toast) {
        toast.textContent = `${productName} added to cart. ${cartCount} ${cartCount === 1 ? 'item' : 'items'} in your cart.`;
        toast.hidden = false;
        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(() => { toast.hidden = true; }, 2800);
      }
    });
  });

  document.querySelectorAll('[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const status = form.querySelector('.form-status');
      if (status) {
        status.textContent = form.classList.contains('registration-form')
          ? 'Your details passed validation. Connect this form to a secure service to complete registration.'
          : 'Your message is ready. Connect this form to a service to send it to our team.';
      }
    });
  });
});
