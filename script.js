document.write('document.written() text')
document.write('<h1>document.written() header1</h1>')
let count = 0
let a_tag = document.getElementsByTagName("a")
for (let i = 0; i < a_tag.length; i++) {
  if (a_tag[i].getAttribute("href")[0] == "#") {
    count++
  }
}
document.write(count, "<br>")
//document.write(a_tag[0].innerHTML, "<br>")
document.write(document.getElementsByTagName("form").length, "<br>")
//document.write(document.getElementsByTagName("form")[0].name, "<br>")
document.write(document.getElementsByTagName("img").length, "<br>")
//document.write(document.getElementsByTagName("img").id, "<br>")
document.write(document.getElementsByTagName("a").length, "<br>")
//document.write(document.getElementsByTagName("a").id, "<br>")
document.write(document.domain, "<br>")
document.write(document.URL, "<br>")
document.write(document.title, "<br>")
document.write(document.URL, "<br>")

btn = document.getElementById("js_btn")
function disableJsButton() {
  btn.disabled = true
}
document.write(btn.name, "<br>")
document.write(btn.type, "<br>")
document.write(btn.innerHTML, "<br>")
document.write(btn.parentElement.id, "<br>")

frm = document.getElementById("js_frm")
for (i = 0; i < frm.children.length; i++) {
  document.write(frm.children[i].value, "<br>")
}
document.write(frm.action, "<br>")
document.write(frm.enctype, "<br>")
document.write(frm.children.length, "<br>")
document.write(frm.method, "<br>")
document.write(frm.name, "<br>")
frm.reset()

img = document.getElementById("js_img")
img.align = "middle"
document.write(img.alt, "<br>")
img.border = "1"
img.height = img.width = "100"
document.write(img.src = "https://sun9-26.userapi.com/c543103/v543103667/6aff4/NWMdfzzdkd8.jpg", "<br>")

document.addEventListener("mousedown", randomMouseFunction)
function randomMouseFunction() {
  document.write(["left", "middle", "right"][Number(event.which) - 1], "<br>")
  document.write(event.pageX, " ", event.pageY, "<br>")
  document.write(event.clientX, " ", event.clientY, "<br>")
  document.write(event.target, "<br>")
  document.write(event.type, "<br>")
}
document.addEventListener("keydown", randomKeyFunction)
function randomKeyFunction() {
  document.write(event.code, "<br>")
  document.write(event.type, "<br>")
}

tbl = document.getElementById("js_tbl")
tbl.border = "1"
tbl.cellPadding = "5"
tbl.cellSpacing = "5"
tbl.style.borderStyle = "dashed"
tbl.appendChild(document.createElement("caption")).innerHTML = "captiIiiiiIIIooOOoOOOooOn"
tbl_row = tbl.children[0].children[1]
tbl.deleteRow(1)
tbl.children[0].appendChild(tbl_row)
tbl_row.style.textAlign = "right"
tbl_row.style.verticalAlign = "bottom"
//tbl.style.height = "400"
tbl_row.children[0].style.textAlign = "left"
tbl_row.children[0].style.verticalAlign = "top"
tbl_row.children[0].innerHTML = "Bill"
tbl_row.children[0].setAttribute("colspan", "2")