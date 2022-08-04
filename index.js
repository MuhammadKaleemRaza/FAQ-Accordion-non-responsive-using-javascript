let accoridon = document.querySelectorAll('.faq-container .accordion');

accoridon.forEach((acco) => {
    acco.onclick = () => {
        accoridon.forEach(subAcc => {
            subAcc.classList.remove('active')
        })
        acco.classList.add('active')
    }
})