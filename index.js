const containerCard = document.getElementById("container-card")
const loadingNew = document.getElementById("loadingNew")
const cards = document.querySelectorAll(".card")

let isObserverStart = false
let imgIdx = 9

// *響鈴條件：設定和控制在哪些情況下，呼叫 callback 函式
const optionsCard = {
  // 觀察範圍(設為 null 時，預設為 viewport)，必須要是所有目標元素的父元素
  root: null,
  // 設定 root 周圍的 margin — 能有效的「擴大或縮小這個用來觀察的盒子範圍」
  rootMargin: "0px 0px 0px 0px",
  // 設定目標元素的可見度達到多少比例時，觸發 callback 函式
  threshold: 1
}

// *觸發 callback：目標進入或離開 viewport 時觸發此 callback 函式
let callbackCard = (entries) => {
  // 進入畫面會先觀察到全部
  console.log(entries)

  // 各個元素的觀察與觸發
  if (isObserverStart) {
    console.log(entries)
    entries.forEach(entry => entry.target.style.opacity = "0.5")

    // 增加三張圖
    if (imgIdx == 30) return
    for (let i = 0; i < 3; i++) {
      imgIdx++
      loadingNew.insertAdjacentHTML("beforebegin",
        `<div class="card">
          <img src="https://picsum.photos/300/300/?random=${imgIdx}">
        </div>`
      )
    }
  }

  // 正式進入觀察
  isObserverStart = true
}

// *製作鈴鐺：Intersection Observer
const observerAddCard = new IntersectionObserver(callbackCard, optionsCard)

// *設定觀察對象：告訴 observer 要觀察哪個目標元素
observerAddCard.observe(loadingNew)
// cards.forEach(target => observerAddCard.observe(target))



// 開始觀察某個獵物：observer.observe(el)
// 取消觀察某個獵物：observer.unobserve(el)
// 自爆，關掉這個觀察器：observer.disconnect()


// 參考來源：
// https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E8%AA%8D%E8%AD%98-intersection-observer-api-%E5%AF%A6%E4%BD%9C-lazy-loading-%E5%92%8C-infinite-scroll-c8d434ad218c

// https://www.letswrite.tw/intersection-oserver-basic/ 較清楚