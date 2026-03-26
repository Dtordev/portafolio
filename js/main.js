const technologies = [
    { Nombre: 'Angular', Link: 'assets/images/tech/angular.png', Color: '#dd0031', Visible: true },
    { Nombre: 'Azure', Link: 'assets/images/tech/azure.png', Color: '#37bcee', Visible: false },
    { Nombre: 'C#', Link: 'assets/images/tech/csharp.png', Color: '#a179dc', Visible: true },
    { Nombre: 'CSS', Link: 'assets/images/tech/css.png', Color: '#039be5', Visible: false },
    { Nombre: 'Docker', Link: 'assets/images/tech/docker.png', Color: '#099cec', Visible: false },
    { Nombre: 'Flutter', Link: 'assets/images/tech/flutter.png', Color: '#20bcfd', Visible: false },
    { Nombre: 'Git', Link: 'assets/images/tech/git.png', Color: '#f05133', Visible: true },
    { Nombre: 'HTML', Link: 'assets/images/tech/html.png', Color: '#ef652a', Visible: true },
    { Nombre: 'Java', Link: 'assets/images/tech/java.png', Color: '#e01e21', Visible: false },
    { Nombre: 'JavaScript', Link: 'assets/images/tech/javascript.png', Color: '#f7df1e', Visible: true },
    { Nombre: 'Kubernetes', Link: 'assets/images/tech/kubernetes.png', Color: '#326de6', Visible: false },
    { Nombre: 'MariaDB', Link: 'assets/images/tech/mariadb.png', Color: '#006064', Visible: false },
    { Nombre: 'mongoDB', Link: 'assets/images/tech/mongodb.png', Color: '#11aa50', Visible: false },
    { Nombre: '.NET Core', Link: 'assets/images/tech/dotnetcore.png', Color: '#6d409d', Visible: true },
    { Nombre: 'Node.js', Link: 'assets/images/tech/nodejs.png', Color: '#80be01', Visible: false },
    { Nombre: 'PHP', Link: 'assets/images/tech/php.png', Color: '#8a94bf', Visible: false },
    { Nombre: 'Python', Link: 'assets/images/tech/python.png', Color: '#3571a3', Visible: true },
    { Nombre: 'React', Link: 'assets/images/tech/react.png', Color: '#61dafb', Visible: false },
    { Nombre: 'Scrum', Link: '', Color: '', Visible: false },
    { Nombre: 'Springboot', Link: 'assets/images/tech/springboot.png', Color: '#6db33f', Visible: false },
    { Nombre: 'SQL Server', Link: 'assets/images/tech/sql.png', Color: '#8ec7fa', Visible: true },
    { Nombre: 'TypeScript', Link: 'assets/images/tech/typescript.png', Color: '#007acc', Visible: true },
];

document.addEventListener("DOMContentLoaded", () => {
    let html1st = '';
    let html2nd = '';
    let itech = 0;
    shuffle(technologies);

    for (let i = 0; i < technologies.length; i++) {
        const item = technologies[i];

        if (item.Visible && itech < 6) {
            itech++;
            html1st += `
                <div class="tech">
                    <h4>${item.Nombre}</h4>
                    <img style="--clr: ${item.Color}" src="${item.Link}">
                </div>`;
        } else {
            html2nd += `
                <a>
                    <div>${item.Nombre}</div>
                </a>`;
        }

        if (i > 14) break;
    }

    document.getElementById("technologies").innerHTML = html1st;
    document.getElementById("knowledge").innerHTML = html2nd;
})

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}