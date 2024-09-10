function init () {
    registerAllApps()
    setupImgs()
    hideElems = document.querySelectorAll("img.hide")
    setupHideToggle()
}
function setupImgs () {
    let imgs = document.querySelectorAll("img")
    for (let img of imgs) {
        img.draggable = false
        img.oncontextmenu = ev => ev.preventDefault()
    }
}
let hide = false
let hideElems = null
function setupHideToggle () {
    function toggleHidden () {
        for (let elem of hideElems) {
            if (hide) elem.style.display = "block"
            else elem.style.display = "none"
        }
        hide = !hide
    }
    toggleHidden()
    bgImg.onmousedown = function (ev) {
        if (ev.button == 1) toggleHidden()
    }
}

let url = new URL(location.href)
let popup = url.searchParams.get("popup") == "true"
if (popup) init()
else {
    launch("./foxOS.html?popup=true")
    close()
}
