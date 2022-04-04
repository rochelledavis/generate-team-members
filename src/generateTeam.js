function generateCard(data) {
    return `
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                ${data.name} <br>
                ${data.title}
            </p>
        </header>
        <div class="card-content">
            <p class="id">ID: ${data.ID}</p>
            <p class="email">Email: ${data.email}</p>
            <p> Office #: ${data.office}</p>
            <p> GitHub: ${data.github}</p>
            <p> School: ${data.school}</p>
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
            <div class="columns is-multiline">    
                <div class="column is-4-desktop">
                    ${generateCard(data)}
                </div>
            </div>
        </div>
    </html>
    `
};

module.exports = generateTeam;