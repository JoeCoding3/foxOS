function launch (path = "") {
    let optsStr = `popup,left=0,top=0,width=${screen.width},height=${screen.height}`
    open(path, "_blank", optsStr)
}
