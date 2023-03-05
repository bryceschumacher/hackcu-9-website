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
        if (data.length != 0) {
            data.forEach((election) => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            card.style.border = "1px solid black";

            const h1 = document.createElement('h1')
            h1.textContent = election.name
            h1.style.color = "Black";
            h1.style.textAlign = "center";

            const p = document.createElement('p')
            p.textContent = 'Start Date: ' + election.start_date
            p.style.textAlign = "center";
            p.style.color = "Gray";

            const p2 = document.createElement('p')
            p2.textContent = 'Location: ' + election.location.name
            p2.style.textAlign = "center";
            p2.style.color = "Gray";
            

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
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
    }

    request.send()
}
renderOne();


function renderOne() {
    var chart = new Taucharts.Chart({
        type: 'horizontal-stacked-bar',
        y: 'website',
        x: 'percent',
        color: 'politics',
        plugins: [Taucharts.api.plugins.get('tooltip')()], 
        data: [
                {
                    website: 'Fox News',
                    politics: 'liberal leaning',
                    percent: 7
                },
                {
                    website: 'Fox News',
                    politics: 'conservative leaning',
                    percent: 93
                },
                {
                    website: 'Facebook',
                    politics: 'liberal leaning',
                    percent: 51
                },
                {
                    website: 'Facebook',
                    politics: 'conservative leaning',
                    percent: 49
                },
                {
                    website: 'Pinterest',
                    politics: 'liberal leaning',
                    percent: 51
                },
                {
                    website: 'Pinterest',
                    politics: 'conservative leaning',
                    percent: 49
                },
                {
                    website: 'Youtube',
                    politics: 'liberal leaning',
                    percent: 52
                },
                {
                    website: 'Youtube',
                    politics: 'conservative leaning',
                    percent: 48
                },
                {
                    website: 'Snapchat',
                    politics: 'liberal leaning',
                    percent: 56
                },
                {
                    website: 'Snapchat',
                    politics: 'conservative leaning',
                    percent: 44
                },
                {
                    website: 'LinkedIn',
                    politics: 'liberal leaning',
                    percent: 58
                },
                {
                    website: 'LinkedIn',
                    politics: 'conservative leaning',
                    percent: 42
                },
                {
                    website: 'TikTok',
                    politics: 'liberal leaning',
                    percent: 59
                },
                {
                    website: 'TikTok',
                    politics: 'conservative leaning',
                    percent: 41
                },
                {
                    website: 'CNN',
                    politics: 'liberal leaning',
                    percent: 62
                },
                {
                    website: 'CNN',
                    politics: 'conservative leaning',
                    percent: 38
                },
                {
                    website: 'Instagram',
                    politics: 'liberal leaning',
                    percent: 62
                },
                {
                    website: 'Instagram',
                    politics: 'conservative leaning',
                    percent: 38
                },
                {
                    website: 'WhatsApp',
                    politics: 'liberal leaning',
                    percent: 65
                },
                {
                    website: 'WhatsApp',
                    politics: 'conservative leaning',
                    percent: 35
                },
                {
                    website: 'Twitter',
                    politics: 'liberal leaning',
                    percent: 65
                },
                {
                    website: 'Twitter',
                    politics: 'conservative leaning',
                    percent: 35
                },
                {
                    website: 'Reddit',
                    politics: 'liberal leaning',
                    percent: 65
                },
                {
                    website: 'Reddit',
                    politics: 'conservative leaning',
                    percent: 35
                },
                {
                    website: 'NYTimes',
                    politics: 'liberal leaning',
                    percent: 84
                },
                {
                    website: 'NYTimes',
                    politics: 'conservative leaning',
                    percent: 16
                },
        ]
    });
    chart.renderTo('#bar');
}
