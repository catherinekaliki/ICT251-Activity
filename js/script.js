document.querySelectorAll('.expand-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    const target = document.getElementById(button.dataset.target);
    target.hidden = !target.hidden;
    button.textContent = target.hidden ? 'Show Details' : 'Hide Details';
  });
});
// ==========================================
// FEATURE 1: Compulsory Form Validation & Live Preview
// ==========================================
const form = document.getElementById('portfolio-form');
const errorDisplay = document.getElementById('form-error');
const previewContainer = document.getElementById('preview-container');
const previewText = document.getElementById('preview-text');

form.addEventListener('submit', function(event) {
    // Keep form submission local
    event.preventDefault();
    
    errorDisplay.textContent = "";
    previewContainer.classList.add('hidden');
    
    const nameVal = document.getElementById('user-name').value.trim();
    const emailVal = document.getElementById('user-email').value.trim();
    const msgVal = document.getElementById('message').value.trim();
    
    // Validate structural requirements
    if (nameVal === "" || msgVal === "") {
        errorDisplay.textContent = "Error: Name and Message fields cannot be left empty or full of whitespace.";
        return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;
    if (!emailPattern.test(emailVal)) {
        errorDisplay.textContent = "Error: Please input a structurally valid email address format.";
        return;
    }
    
    // Display local preview securely
    previewText.textContent = `Success! The data was validated successfully. 
    Name: ${nameVal} 
    Email: ${emailVal} 
    Message Summary: ${msgVal}`;
    
    previewContainer.classList.remove('hidden');
    form.reset();
});

// ==========================================
// FEATURE 2: Light / Dark Theme Switch
// ==========================================
const themeBtn = document.getElementById('theme-toggle');
if(themeBtn){ 
themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
}

// ==========================================
// FEATURE 4: Study Hours Calculator
// ==========================================
const calcBtn = document.getElementById('calc-btn');
const calcResult = document.getElementById('calc-result');

if(calcBtn && calcResult){ 
  calcBtn.addEventListener('click', function () {
     const hours = parseFloat(document.getElementById('hours-per-day').value);
     const days = parseInt(document.getElementById('days-per-week').value);

    if (isNaN(hours) || isNaN(days) || hours <= 0 || days < 1 || days > 7) {
        calcResult.textContent = "Invalid entry. Ensure hours are positive and days are between 1 and 7.";
        calcResult.style.color = "#e53e3e";
        return;
    }

    const totalHours = hours * days;
    calcResult.textContent = `Estimated study allocation: ${totalHours} total weekly hours.`;
    calcResult.style.color = "#2f855a";
});
}

 