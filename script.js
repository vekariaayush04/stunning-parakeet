const textArea = document.getElementById("text-area")
const content = document.getElementById("content")

textArea.addEventListener("input",(e) => {
    e.preventDefault()
    const text = e.target.value
    const data = text.split("\n")
    
    let html = ""
    data.forEach((d)=>{
        d = escapeHTML(d);
        const boldRegex = /\*\*.*?\*\*/g
        const italicRegex = /\_.*?\_/g
        const strikeRegex = /\~\~.*?\~\~/g
        const underlineRegex = /\_\_.*?\_\_/g
        const found = d.match(boldRegex)
        const ifound = d.match(italicRegex)
        const sfound = d.match(strikeRegex)
        const ufound = d.match(underlineRegex)
        if(found){

            found.forEach((w) => {
                d = d.replace(w, `<b>${w.slice(2,w.length - 2)}</b>`)
            })
        }
        if(ifound && !ufound){
            
            ifound.forEach((w) => {
                d = d.replace(w, `<i>${w.slice(1,w.length - 1)}</i>`)
            })
        }   
        if(sfound){            
            sfound.forEach((w) => {
                d = d.replace(w, `<s>${w.slice(2,w.length - 2)}</s>`)
            })
        }
        if(ufound){
            ufound.forEach((w) => {
                d = d.replace(w, `<u>${w.slice(2,w.length - 2)}</u>`)
            })
        }
        
        if(d.startsWith("##### ")){
            html += `<h5 id="heading5">\n${d.slice(5)}</h5>`
        }else if(d.startsWith("#### ")){
            html += `<h4 id="heading4">\n${d.slice(4)}</h4>`
        }else if(d.startsWith("### ")){
            html += `<h3 id="heading3">\n${d.slice(3)}</h3>`
        }else if(d.startsWith("## ")){
            html += `<h2 id="heading2">\n${d.slice(2)}</h2>`
        }else if(d.startsWith("# ")){
            html += `<h1 id="heading">\n${d.slice(1)}</h1><hr/>`
        }else if(d === ""){
            html += `<br/>`
        }
        else if(d === "---"){
            html += `<hr/><hr/><hr/>`
        }
        else if(d.startsWith("- ")){
            html += `<ul><li>${d.slice(1)}</li></ul>`
        }else{
            html += `<p>\n${d}</p>`
        }
        // console.log(html);
    }) 
    content.innerHTML = html
})


function escapeHTML(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }