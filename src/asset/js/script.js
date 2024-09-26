let url = new URL(location.href)
let popup = url.searchParams.get("popup") == "true"
if (popup) {
    registerAllApps()
    
    let imgs = document.querySelectorAll("img")
    for (let img of imgs) {
        img.draggable = false
        img.oncontextmenu = ev => ev.preventDefault()
    }
} else {
    launch("./foxOS.html?popup=true")
    close()
}
