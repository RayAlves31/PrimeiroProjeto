document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const registerBtn = document.getElementById('register-btn');
    const form = document.getElementById('register-form');
  
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
  
    // Função para validar o email
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Função para validar o formulário e habilitar/desabilitar o botão
    function validateForm() {
      let isFormValid = true;
  
      // Validação de Email
      if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        emailError.style.display = 'block';
        emailInput.classList.add('invalid');
        isFormValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        emailInput.classList.add('invalid');
        isFormValid = false;
      } else {
        emailError.style.display = 'none';
        emailInput.classList.remove('invalid');
      }
  
      // Validação de Senha
      if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        passwordError.style.display = 'block';
        passwordInput.classList.add('invalid');
        isFormValid = false;
      } else {
        passwordError.style.display = 'none';
        passwordInput.classList.remove('invalid');
      }
  
      // Validação de Confirmação de Senha
      if (confirmPasswordInput.value.trim() === '') {
        confirmPasswordError.textContent = 'Please confirm your password.';
        confirmPasswordError.style.display = 'block';
        confirmPasswordInput.classList.add('invalid');
        isFormValid = false;
      } else if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordError.style.display = 'block';
        confirmPasswordInput.classList.add('invalid');
        isFormValid = false;
      } else {
        confirmPasswordError.style.display = 'none';
        confirmPasswordInput.classList.remove('invalid');
      }
  
      // Habilitar ou desabilitar o botão de registro
      registerBtn.disabled = !isFormValid; // Desabilitar botão se o formulário não for válido
    }
  
    // Adicionar eventos de validação
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);
  
    // Validar o formulário ao submeter
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      if (!registerBtn.disabled) {
        alert('Registration successful!');
        form.reset();
        validateForm(); // Revalida os campos para desabilitar o botão novamente
        window.location.href = '../login/login.html';
      }
    });
  });
