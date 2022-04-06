// function hideOffice(data) {
//     if (data.office === 'undefined'){
//         return html` class="is-hidden"` 
//     } else {
//         return ''
//     }
// }

// function hideGithub(data) {
//     if (data.github === 'undefined'){
//         return html` class="is-hidden"` 
//     } else {
//         return ''
//     }
// };

// function hideSchool(data) {
//     if (data.school === 'undefined'){
//         return html` class="is-hidden"` 
//     } else {
//         return ''
//     }
// }

function generateCard(data) {
    return `
    <div class="columns is-multiline">    
        <div class="column is-4-desktop">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        ${data.name} <br>
                        ${data.getRole()}
                    </p>
                </header>
                <div class="card-content">
                    <p>ID: ${data.ID}</p>
                    <p>Email: <a href = "mailto:${data.email}">${data.email}</a></p>
                    <p${hideOffice()}> Office #: ${data.office}</p>
                    <p${hideGithub()}> GitHub: <a href = "https://github.com/${data.github}">${data.github}</a></p>
                    <p${hideSchool()}> School: ${data.school}</p>
                </div>
            </div>
        </div>
    </div>`
};

//function to generate html page
function generateTeam(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Members</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";">
    </head>
    <body>
        <nav class="navbar has-background-info-dark">
            <div>
                <h1 class="has-text-justified has-text-white is-size-1 p-4">Team Members</h1>
            </div>
        </nav>
        <div class="section">
            ${data.map(card => generateCard(card)).join(" ")}
        </div>
    </html>
    `
};



module.exports = generateTeam;