document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('login-btn');
    const form = document.getElementById('login-form');
  
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
  
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
  
      // Habilitar ou desabilitar o botão de login
      loginBtn.disabled = !isFormValid;
    }
  
    // Adicionar eventos de validação
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
  
    // Validar o formulário ao submeter
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      if (!loginBtn.disabled) {
        alert('Login successful!');
        form.reset();
        validateForm(); // Revalida os campos para desabilitar o botão novamente
        
        // Redirecionar para o index.html após o login bem-sucedido
        window.location.href = '../index/index.html';
      }
    });
  });
