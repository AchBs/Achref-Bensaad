const urlParams = new URLSearchParams(window.location.search);
            const dogName = urlParams.get('dogName');
            
            
            document.getElementById('dogName').value = dogName;

function thankyou(){
    alert("Thank you for Submitting your informations");
    alert("We will look into your request and will soon get back to you")
}