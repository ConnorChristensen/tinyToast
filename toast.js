function toast(type, text) {
    // create a div. thats the toast
    var toastEl = document.createElement('div')
    // add a paragraph in it. Thats the text
    var toastText = document.createElement('p')
    // add the text to the toast
    toastEl.appendChild(toastText)
    // set the contents of the text
    toastText.innerHTML = text
    // add the class name to the toast so the css
    // can find it and set the type
    toastEl.className = "toast " + type
    // add the toast to the page
    document.body.appendChild(toastEl)
    // remove the toast after 5 seconds
    setTimeout(function() {
        document.body.removeChild(toastEl)
    }, 5000)
}
