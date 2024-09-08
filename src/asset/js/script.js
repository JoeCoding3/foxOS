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
        if (hide) document.body.className = ""
        else document.body.className = "hide"
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
