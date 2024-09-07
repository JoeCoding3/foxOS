function init () {
    registerAllApps()
    setupImgs()
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
let hideElems = document.querySelectorAll("img.hide")
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

if (parent == window) {
    let loc = location.href
    loc = "." + loc.substring(loc.lastIndexOf("/"))
    launch(loc, true, true)
} else init()
