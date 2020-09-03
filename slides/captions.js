function showCaptions() {
  var captionWindow = window.open("", "myWindow", "width=500, height=500")

  var element = document.getElementsByClassName("notes");
  for (var i=0; i<element.length; i++) {
    console.log(i)
    var slide = element[i].parentElement
    console.log(slide)
    var title = slide.getElementsByTagName("h2")
    var titleText
    if (title.length > 0) {
       titleText = title[0].textContent;
    } else {
       titleText = slide.getElementsByTagName("h3")[0].textContent
    }
    
    console.log(title.textContent)

    var text = element[i].innerHTML;

    captionWindow.document.write("<h2>")
    captionWindow.document.write(titleText)
    captionWindow.document.write("</h2>")
    captionWindow.document.write("<div>")
    captionWindow.document.write(text)
    captionWindow.document.write("</div>")
  }
}

function hideCaptions() {
  var element = document.getElementsByClassName("caption");
  for (var i=0; i<element.length; i++) {
    element[i].style.display = "none";
  }
}
