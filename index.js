
function showForm(type) {
    const section = document.getElementById('formSection');
    const content = document.getElementById('formContent');
    
    // Toggle visibility
    if (section.style.display === 'block' && content.innerHTML.includes(type)) {
        section.style.display = 'none';
        return;
    }
    
    section.style.display = 'block';

    if (type === 'login') {
        content.innerHTML = `
            <h2 class="mb-4">Welcome Back! 🍰</h2>
            <form action="login.php" method="POST">
                <div class="mb-3">
                    <label for="loginEmail" class="form-label">Email address:</label>
                    <input type="email" class="form-control" id="loginEmail"  name="loginEmail" placeholder="Enter your email" required>
                </div>
                <div class="mb-3">
                    <label for="loginPassword" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="loginPassword" name="loginPassword" placeholder="Enter your password" required>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="rememberMe">
                    <label class="form-check-label" for="rememberMe">Remember me</label>
                </div>
                <p class="mb-3">Don't have an account? <a href="#" onclick="showForm('signup')">Signup</a></p>
                <p class="text-muted">Or, login with</p>
                <div class="d-flex justify-content-center gap-3 mb-4">
                    <a href="#" class="btn btn-outline-primary"><i class="bi bi-facebook me-2"></i>Facebook</a>
                    <a href="#" class="btn btn-outline-danger"><i class="bi bi-google me-2"></i>Google</a>
                </div>
                <button type="submit" class="btn btn-login w-100">Login</button>
            </form>
        `;
    } else {
        content.innerHTML = `
            <h2 class="mb-4">Create Account 🎉</h2>
            <form action="signup.php" method="POST">
                <div class="mb-3">
                    <label for="signupName" class="form-label">Full Name:</label>
                    <input type="text" class="form-control" id="signupName" name="signupName" placeholder="Enter your full name" required>
                </div>
                <div class="mb-3">
                    <label for="signupEmail" class="form-label">Email address:</label>
                    <input type="email" class="form-control" id="signupEmail" name="signupEmail" placeholder="Enter your email" required>
                </div>
                <div class="mb-3">
                    <label for="signupPassword" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="signupPassword" name="signupPassword" placeholder="Create a password" required>
                </div>
                <div class="mb-3">
                    <label for="signupConfirmPassword" class="form-label">Confirm Password:</label>
                    <input type="password" class="form-control" id="signupConfirmPassword" name="signupConfirmPassword" placeholder="Confirm your password" required>
                </div>
                <p class="mb-3">Already have an account? <a href="#" onclick="showForm('login')">Login</a></p>
                <p class="text-muted">Or, signup with</p>
                <div class="d-flex justify-content-center gap-3 mb-4">
                    <a href="#" class="btn btn-outline-primary"><i class="bi bi-facebook me-2"></i>Facebook</a>
                    <a href="#" class="btn btn-outline-danger"><i class="bi bi-google me-2"></i>Google</a>
                </div>
                <button type="submit" class="btn btn-login w-100">Sign up</button>
            </form>
        `;
    }
    
    // Scroll to form for better UX
    section.scrollIntoView({ behavior: 'smooth' });
}

// Close form when clicking outside
document.addEventListener('click', function(event) {
    const formSection = document.getElementById('formSection');
    if (formSection.style.display === 'block' && 
        !formSection.contains(event.target) && 
        event.target.className !== 'btn btn-warning me-2' && 
        event.target.className !== 'btn btn-warning') {
        formSection.style.display = 'none';
    }
});
