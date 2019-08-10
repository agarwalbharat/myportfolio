const loadData = () => {
    var settings = {
        "url": "data.json",
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
        },
    };
    $.ajax(settings).done(function (doc) {
        console.log(doc);
        displayDetails(doc);
    }).fail(function (data) {
        if (data.status == 404) {
            alert('Data can\'t be load, please try again later');
        }
        if (data.status == 400) {
            alert("We Can't Connect to server right now, Try to refresh page");
        }

    });
};

const displayDetails = (doc) => {
    document.getElementById('name').textContent = doc.name;
    document.getElementById('title').textContent = doc.title;
    document.getElementById('intro').textContent = doc.intro;
    document.getElementById('location').textContent = doc.contact.location;
    document.getElementById('phone').textContent = doc.contact.phone;
    document.getElementById('email').textContent = doc.contact.email;

    const skills = document.getElementById('skills');
    doc.skills.forEach(element => {
        const skilltitle = document.createElement('h3');
        const skillbarlist = document.createElement('div');
        const skillbar = document.createElement('div');

        skilltitle.className = "w3-wide";
        skillbarlist.className = "w3-white";
        skillbar.className = "w3-dark-grey";
        skillbar.style = "height:28px;width:" + element.rating + "%";

        skilltitle.textContent = element.title;

        skillbarlist.appendChild(skillbar);
        skills.appendChild(skilltitle);
        skills.appendChild(skillbarlist);

    });
};