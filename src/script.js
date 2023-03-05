function doQuery() {
    const app = document.getElementById('body-identity')

    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    // app.appendChild(logo)
    app.appendChild(container)
    var input_elections = document.getElementById("input-elections").value
    // our input is case sensitive, so we need the first char to be uppercase (e.g. Colorado)
    if (input_elections[0] == input_elections[0].toLowerCase()) {
        // ch1 is lowercase
        var temp = input_elections[0].toUpperCase()
        input_elections = temp + input_elections.substring(1)
    }
    console.log(input_elections);
    var req_param = 'https://v3.openstates.org/events?jurisdiction=' + input_elections + '&deleted=false&require_bills=false&apikey=f62e1aa9-1827-4a9c-847b-a6173812175a&page=1&per_page=20'
    console.log(req_param)
    var request = new XMLHttpRequest()

    request.open('GET', req_param, true)
    request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)['results']
    console.log(data);
    if (request.status >= 200 && request.status < 400) {
        data.forEach((election) => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const h1 = document.createElement('h1')
        h1.textContent = election.name

        const p = document.createElement('p')
        p.textContent = 'Start Date: ' + election.start_date

        const p2 = document.createElement('p')
        p2.textContent = 'Location: ' + election.location.name
        

        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
        card.appendChild(p2)
        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
    }

    request.send()
}