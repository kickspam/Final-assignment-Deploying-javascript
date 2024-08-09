// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
document.getElementById('submit-button').addEventListener('click', function(event) {
    // Prevent the default form submission action
    event.preventDefault();

    // Get the contact-page element
    const contactPage = document.getElementById('contact-page');
    
    // Create a new <p> element
    const thankYouMessage = document.createElement('p');
    
    // Set the text content of the <p> element
    thankYouMessage.textContent = 'Thank you for your message';
    
    // Apply style to the <p> element
    thankYouMessage.style.fontSize = '24px';
    
    // Clear the contact-page content and append the thank you message
    contactPage.innerHTML = ''; // Clear current content
    contactPage.appendChild(thankYouMessage); // Add thank you message
});
