HTMLElement.prototype.appendMultiline = function (code) {
    let container = document.createElement("div")
    container.innerHTML = code
    this.append(...container.children)
}
