let pronouns = ['the','our'];
let adjs = ['great', 'big' ];
let nouns = ['jogger','racoon'];
let domains = []

let domainGenerator = document.getElementById('app')

for(let i=0; i < pronouns.length; i++){
    let currentPronoun = pronouns[i]
    for(let x=0; x<adjs.length; x++){
        let currentAdj = adjs[x]
        for(let z=0; z<nouns.length; z++){
            let currentNoun = nouns[z]
            let newDomain = `${currentPronoun}${currentAdj}${currentNoun}.com` 
            domains.push(newDomain)
        }
    }
}
for(let i=0; i<domains.length; i++){
    let currentDomain = domains[i]

    let newElement = document.createElement("h3")
    newElement.innerHTML = currentDomain
    domainGenerator.appendChild(newElement)
}