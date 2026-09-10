function classifyPassword(password) {

    
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);

    const conditions = [hasUpper, hasLower, hasDigit, hasSpecial];
    const count = conditions.filter(Boolean).length;

    if (password.length >= 8 && count === 4) {
        return "Strong";
    }

    if (password.length >= 6 && count >= 2) {
        return "Medium";
    }

    return "Weak";
}

console.log(classifyPassword("Abc123!@")); // Strong
console.log(classifyPassword("Abc123"));   // Medium
console.log(classifyPassword("hello"));    // Weak