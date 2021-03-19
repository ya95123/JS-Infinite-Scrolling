// *響鈴條件
const optionsCard = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1
}

// *callback
let callbackCard = (entries) => {
  entries.forEach(entry => {
    entry.isIntersecting ? entry.target.classList.add("focus") : entry.target.classList.remove("focus")
  })
}

// *製作鈴鐺
const observerCard = new IntersectionObserver(callbackCard, optionsCard)

// *目標對象
cards.forEach(card => {
  observerCard.observe(card)
})
