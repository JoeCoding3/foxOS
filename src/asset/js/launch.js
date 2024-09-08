function launch (path = "", ab = true, init = false) {
    let optsStr = `popup,left=0,top=0,width=${screen.width},height=${screen.height}`
    let jsStr = `<script>onunload = function () { close() }; setTimeout(() => dispatchEvent(new Event("load")), 100)<\/script>`
    let frameStr = `<iframe style="width: 100%; height: 100%; position: absolute; left: 0px; top: 0px;" frameborder="0" src="${path}"><\/iframe>${jsStr}`
    
    let url = path.startsWith("http") || path.startsWith(".")
    if (url) {
        if (ab) {
            let win = open(undefined, "_blank", optsStr)
            if (win == null) {
                document.body.innerText = "Please allow popups and reload."
                stop()
            } else {
                win.document.write(frameStr)
                if (init) {
                    document.body.innerText = ""
                    close()
                }
            }
        } else open(path, "_blank", optsStr)
    } else open(undefined, "_blank", optsStr).document.write(atob(path.substring(3)) + jsStr)
}
