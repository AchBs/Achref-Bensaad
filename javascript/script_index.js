function support() {
    while (true) {
        var donationAmount = prompt("How much would you like to donate?");

        if (donationAmount === null) {
            alert("Donation canceled.");
            break;
        } else if (!isNaN(donationAmount) && donationAmount !== "") {
            alert("Thank you for donating $" + donationAmount);
            break;
        } else {
            alert("Invalid amount entered. Please try again.");
        }
    }
}
