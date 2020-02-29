const problems = Database.getProblems()

const cardPlaceElement = document.querySelector('[data-cardsplace]')

for (const problem of problems) {
    const html = Card.getHTML(problem)
    cardPlaceElement.append(html)
}