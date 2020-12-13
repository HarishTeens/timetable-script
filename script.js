$("table:eq(10) td").slice(12).each(function(){
    const title=$(this).attr("title");
    if(title&&title.length>0){
        const modifiedTitle=title.split(":")[1].trim().split(" ").map(each=>each[0]).join("");
        const type=title.split(":")[2].trim();        
        console.log(type);
        const color=(type=="Theory}"?"red":"black");
        $(this).html(modifiedTitle).css("color",color)       
    }
})