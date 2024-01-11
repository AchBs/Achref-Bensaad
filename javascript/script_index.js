function support(){
    
        // Prompt the user for donation amount
        var donationAmount = prompt("How much would you like to donate?");
        
        // Check if the user entered a valid amount
        if (donationAmount !== null && !isNaN(donationAmount) && donationAmount !== "") {
            // Display a thank you message with the donated amount
            alert("Thank you for donating $" + donationAmount);
        } else {
            // Display a message if the user cancels or enters an invalid amount
            alert("Donation canceled or invalid amount entered.");
        }
    
}