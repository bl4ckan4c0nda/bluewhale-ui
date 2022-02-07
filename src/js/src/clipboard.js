import ClipboardJS from "clipboard"

let clipboard = new ClipboardJS('.copyButton')
clipboard.on('success',function (e){
    // btn Element
    let trigger = e.trigger
    // btn copy text
    let copyText = trigger.querySelector('.copyText')
    // Change button text
    copyText.innerHTML = "کپی شد"
    // Change button text to default
    setTimeout(() => {copyText.innerHTML = "کپی"}, 800);
    // Clear Selection
    e.clearSelection();
})
clipboard.on('error', function(e) {
    console.log(e);
});