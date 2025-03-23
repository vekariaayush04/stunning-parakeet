const textArea = document.getElementById("text-area")
const content = document.getElementById("content")

textArea.addEventListener("input",(e) => {
    e.preventDefault()
    const text = e.target.value
    const data= text.split("\n")
    let html = ""
    data.forEach((d)=>{
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
    }) 
    content.innerHTML = html
})