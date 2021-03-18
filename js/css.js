// *響鈴條件
const optionsCard = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1
}

let isObserverCardStart = false

// *callback
let callbackCard = (entries) => {
  if (isObserverCardStart) {
    entries.forEach(entry => {
      entry.target.classList.toggle("focus")
      if (entry.isIntersecting) console.log("進入可視範圍")
    })
  }

  console.log(entries)
  isObserverCardStart = true
}

// *製作鈴鐺
const observerCard = new IntersectionObserver(callbackCard, optionsCard)

// *目標對象
cards.forEach(card => {
  observerCard.observe(card)
})
