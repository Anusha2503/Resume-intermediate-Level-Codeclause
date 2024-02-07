function generateResume() {
    const name = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const summary = document.getElementById('input-summary').value;
    const school = document.getElementById('input-school').value;
    const pucollege = document.getElementById('input-pucollege').value;
    const ugcollege = document.getElementById('input-ugcollege').value;
    const sslcpercentage = document.getElementById('input-sslcpercentage').value;
    const pucpercentage = document.getElementById('input-pucpercentage').value;
    const degree = document.getElementById('input-degree').value;
    const hobbies = document.getElementById('input-hobbies').value;
    const skills = document.getElementById('input-skills').value;
    const achievements = document.getElementById('input-achievements').value;
    const projects = document.getElementById('input-projects').value;
    const additionalDetails = document.getElementById('input-additional-details').value;

    const resumePreview = document.getElementById('resume-preview');
    resumePreview.innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>${summary}</p>
        <h4>Education</h4>
        <p><strong>School:</strong> ${school}</p>
        <p><strong>PU College:</strong> ${pucollege}</p>
        <p><strong>UG College:</strong> ${ugcollege}</p>
        <p><strong>SSLC Percentage:</strong> ${sslcpercentage}</p>
        <p><strong>PUC Percentage:</strong> ${pucpercentage}</p>
        <p><strong>Degree:</strong> ${degree}</p>
        <h4>Hobbies</h4>
        <p>${hobbies}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Achievements</h4>
        <p>${achievements}</p>
        <h4>Projects</h4>
        <p>${projects}</p>
        <h4>Additional Details</h4>
        <p>${additionalDetails}</p>
        <!-- Add more sections as needed -->
    `;
}
