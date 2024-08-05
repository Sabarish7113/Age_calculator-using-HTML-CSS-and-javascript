document.getElementById('calculateButton').addEventListener('click', function() {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();
    
    if (!isNaN(birthDate)) {
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        document.getElementById('resultContainer').innerText = `You are ${age} years old.`;
    } else {
        document.getElementById('resultContainer').innerText = 'Please enter a valid birth date.';
    }
});
