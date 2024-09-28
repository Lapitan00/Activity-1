
function greetUser() {
    // Get the value from the input field
    const name = document.getElementById('nameInput').value;

    // Create a greeting message
    const message = 'Hello, ' + name + '! Welcome to our site.';
    

    // Display the message in the paragraph with id 'greetingMessage'
    document.getElementById('greetingMessage').textContent = message;

}


function showImage() {
    // Get the image element by its ID
    const img = document.getElementById('responseImage');
    
    // Set the source of the image to the path of your image file
    img.src = 'tenor.gif'; // Update this path to match your image file's location
    
    // Optionally, make the image visible if it's hidden
    img.style.display = 'block';
}