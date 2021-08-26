const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddys(data))

}
loadBuddy()

const displayBuddys = buddy => {
    const buddys = buddy.results;
    console.log(buddys)
    const div = document.getElementById('buddy')
    for (buddy of buddys) {
        const p = document.createElement('p')
        p.innerText = `
    name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
    email: ${buddy.email}
    phone: ${buddy.phone}
    location: ${buddy.location.city} ${buddy.location.state} ${buddy.location.country}
    gender: ${buddy.gender}
    `
        div.appendChild(p)
    }
}