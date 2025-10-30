const teamsList = document.querySelectorAll("ul.teams .team");
const footerPage5 = document.getElementById("footerPage5");

const activeTeamsArr = [...teamsList].filter((team) => {
    return team.classList.contains("active-team");
})

let activeTeams = activeTeamsArr.length;

function handleFooterCheck() {
    if (activeTeams === 0) {
        footerPage5.classList.remove("active-footer");
    } else {
        footerPage5.classList.add("active-footer");
    }
}

teamsList.forEach((team) => {
    team.addEventListener("click", () => {
        team.classList.toggle("active-team");
        if (team.classList.contains("active-team")) {
            activeTeams++;
        } else {
            activeTeams--;
        }
        handleFooterCheck();
    })
})