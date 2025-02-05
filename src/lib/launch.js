let url = new URL(location.href)
let popup = url.searchParams.get("popup") == "true"
if (popup) {
    registerAllApps()
    
    let imgs = document.querySelectorAll("img")
    for (let img of imgs) {
        img.draggable = false
        img.oncontextmenu = ev => ev.preventDefault()
    }

    (async function () {
        for (let img of imgs) {
            if (img.complete) continue
            await new Promise(resolve => img.onload = resolve)
        }
    })()
} else {
    let questionIndex = location.href.lastIndexOf("?")
    let url = ""
    if (questionIndex == -1) url = location.href.substring(location.href.lastIndexOf("/") + 1)
    else url = location.href.substring(location.href.lastIndexOf("/") + 1, questionIndex)
    url = `./${url}?popup=true`

    let win = launch(url)
    if (win == null) document.body.innerText = "Error opening initial popup!\nPlease disable your popup blocker and reload."
    else close()
}
