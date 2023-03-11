//CREATE LI TAGS *START*
//tag id array
let tagId = ["comment", "doctype", "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colegroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "head", "header", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"]

const tagsUl = document.getElementById("tags")//li tag append area

for (let i = 0; i < tagId.length; i++) {
    const createLi = document.createElement("li")//create li tag
    createLi.setAttribute("id", tagId[i]) //set id
    createLi.classList.add("tag") //add class
    createLi.textContent = tagId[i] //set text
    tagsUl.append(createLi) //append
}
//CREATE LI TAGS *END*
//ATTR LIST *START*
let attrList = {
    comment: ["comment1", "comment2", "comment3"],
    doctype: ["doc1", "doc2", "doc3"],
    a: ["a1", "a2", "a3"],
    abbr: ["abbr1", "abbr2", "abbr3"],
    address: ["address1", "address2", "address3"],
    area: ["area1", "area2", "area3"],
    article: ["article1", "article2", "article3"],
    aside: ["aside1", "aside2", "aside3"],
    audio: ["audio1", "audio2", "audio3"],
    b: ["attr1", "attr2", "attr3"],
    base: [],
    bdi: [],
    bdo: [],
    blockquote: [],
    body: [],
    br: [],
    button: [],
    canvas: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: [],
    colegroup: [],
    data: [],
    datalist: [],
    dd: [],
    del: [],
    details: [],
    dfn: [],
    dialog: [],
    dir: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    embed: [],
    fieldset: [],
    figcaption: [],
    figure: [],
    footer: [],
    form: [],
    h1: [],
    head: [],
    header: [],
    hr: [],
    html: [],
    i: [],
    iframe: [],
    img: [],
    input: [],
    ins: [],
    kbd: [],
    label: [],
    legend: [],
    li: [],
    link: [],
    main: [],
    map: [],
    mark: [],
    meta: [],
    meter: [],
    nav: [],
    noscript: [],
    object: [],
    ol: [],
    optgroup: [],
    option: [],
    output: [],
    p: [],
    param: [],
    picture: [],
    pre: [],
    progress: [],
    q: [],
    rp: [],
    rt: [],
    ruby: [],
    s: [],
    samp: [],
    script: [],
    section: [],
    select: [],
    small: [],
    source: [],
    span: [],
    strong: [],
    style: [],
    sub: [],
    summary: [],
    sup: [],
    svg: [],
    table: [],
    tbody: [],
    td: [],
    template: [],
    textarea: [],
    tfoot: [],
    th: [],
    thead: [],
    time: [],
    title: [],
    tr: [],
    track: [],
    u: [],
    ul: [],
    var: [],
    video: [],
    wbr: [],
}
//ATTR LIST *END*

//TAG DETAIL OBJECT *START*
let tagDetailObj = {
    comment: ["commentAttr", "comment", "You can add comments to your HTML source by using the following;", "&lt;!-- Write your comments here --&gt;", " Note: Comments are not displayed by the browser, but they can help document your HTML source code.", "Comment", "qBKOVJm"],
    doctype: ["doctypeAttr", "doctype", "All HTML documents must start with a <!DOCTYPE> declaration. The declaration is not an HTML tag. It is an \"information\" to the browser about what document type to expect.", "&lt;! DOCTYPE html&gt;", " Note: The &lt;!DOCTYPE&gt; declaration is NOT case sensitive.", "!DOCTYPE html", "NWLRWbW"],
    a: ["aAttr", "a", "The &lt;a&gt; tag defines a hyperlink, which is used to link from one page to another.", "&lt;a href='URL'>Text&lt;/a&gt;", " Note: If the <a> tag has no href attribute, it is only a placeholder for a hyperlink.<br>A linked page is normally displayed in the current browser window, unless you specify another target.", "download<br>href<br>hreflang<br>media<br>ping<br>referrerpolicy<br>rel<br>target<br>type<br>", "a", "QWVKWpj"],
    abbr: ["abbrAttr", "abbr", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "abbr", "YzOrRoP"],
    address: ["addressAttr", "address", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "address", "ZEMXmdj"],
    area: ["areaAttr", "area", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "area", "xxaXQoe"],
    article: ["articleAttr", "article", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "article", "oNPGQKv"],
    aside: ["asideAttr", "aside", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "aside", "gOdGQVw"],
    audio: ["audioAttr", "audio", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "audio", "VwGMqZY"],
    b: ["bAttr", "b", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "b", "PodJXYb"],
    base: ["baseAttr", "base", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "base", "bGxoObR"],
    bdi: ["bdiAttr", "bdi", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "bdi", "KKxXbPQ"],
    bdo: ["bdoAttr", "bdo", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "bdo", "ExewGYr"],
    blockquote: ["blockquoteAttr", "blockquote", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "blockquote", "RwYLEwr"],
    body: ["bodyAttr", "body", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "body", "YzOrBPr"],
    br: ["brAttr", "br", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "br", "ZEMXwGE"],
    button: ["buttonAttr", "button", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "button", "xxaXMGE"],
    canvas: ["canvasAttr", "canvas", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "canvas", "dyqVaoR"],
    caption: ["captionAttr", "caption", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "caption", "GRXMzJx"],
    center: ["centerAttr", "center", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "center", "bGxozdQ"],
    cite: ["citeAttr", "cite", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "cite", "WNgZPvP"],
    code: ["codeAttr", "code", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "code", "XWPeOmm"],
    col: ["colAttr", "col", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "col", "abaLXvZ"],
    colegroup: ["colegroupAttr", "colegroup", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "colgroup", "LYJzqpW"],
    data: ["dataAttr", "data", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "data", "RwYLvWx"],
    datalist: ["datalistAttr", "datalist", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "datalist", "BaOwMoO"],
    dd: ["ddAttr", "dd", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "dd", "yLxzZYm"],
    del: ["delAttr", "del", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "del", "rNZGPxO"],
    details: ["detailsAttr", "details", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "details", "abaLXdm"],
    dfn: ["dfnAttr", "dfn", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "dfn", "qBMPgbr"],
    dialog: ["dialogAttr", "dialog", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "dialog", "GRXMzod"],
    dir: ["dirAttr", "dir", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "dir", "KKxXJVj"],
    div: ["divAttr", "div", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "div", "bGxozEO"],
    dl: ["dlAttr", "dl", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "dl", "zYJEeqq"],
    dt: ["dtAttr", "dt", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "dt", "JjarxXE"],
    em: ["emAttr", "em", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "em", "YzOrBqE"],
    embed: ["embedAttr", "embed", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "embed", "RwYLvaQ"],
    fieldset: ["fieldsetAttr", "fieldset", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "fieldset", "WNgZPwm"],
    figcaption: ["figcaptionAttr", "figcaption", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "figcaption", "poOWGyM"],
    figure: ["figureAttr", "figure", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "figure", "XWPeOKX"],
    footer: ["footerAttr", "footer", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "footer", "LYJzqRL"],
    form: ["formAttr", "form", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "form", "VwGrYxK"],
    h1: ["h1Attr", "h1", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "h1-h6", "xxaXMRg"],
    head: ["headAttr", "head", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "head", "YzOrBpY"],
    header: ["headerAttr", "header", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "header", "RwYLvoM"],
    hr: ["hrAttr", "hr", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "hr", "MWqELPe"],
    html: ["htmlAttr", "html", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "html", "XWPeOxM"],
    i: ["iAttr", "i", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "i", "LYJzqgQ"],
    iframe: ["iframeAttr", "iframe", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "iframe", "GRXMzYP"],
    img: ["imgAttr", "img", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "img", "WNgZPYN"],
    input: ["inputAttr", "input", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "input", "yLxzZQO"],
    ins: ["insAttr", "ins", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "ins", "abaLXQy"],
    kbd: ["kbdAttr", "kbd", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "kbd", "LYJzqXQ"],
    label: ["labelAttr", "label", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "label", "vYzebQz"],
    legend: ["legendAttr", "legend", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "legend", "OJoxdaG"],
    li: ["liAttr", "li", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "li", "jOvGdXP"],
    link: ["linkAttr", "link", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "link", "KKxXJbd"],
    main: ["mainAttr", "main", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "main", "xxaXMmP"],
    map: ["mapAttr", "map", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "map", "LYJzqMd"],
    mark: ["markAttr", "mark", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "mark", "vYzebvV"],
    meta: ["metaAttr", "meta", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "meta", "PodJVXg"],
    meter: ["meterAttr", "meter", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "meter", "jOvGddb"],
    nav: ["navAttr", "nav", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "nav", "XWPeOOR"],
    noscript: ["noscriptAttr", "noscript", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "noscript", "qBMPggx"],
    object: ["objectAttr", "object", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "object", "VwGMggB"],
    ol: ["olAttr", "ol", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "ol", "mdGBvva"],
    optgroup: ["optgroupAttr", "optgroup", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "optgroup", "OJoxddY"],
    option: ["optionAttr", "option", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "option", "NWLaoJW"],
    output: ["outputAttr", "output", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "output", "ZEMXwPB"],
    p: ["pAttr", "p", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "p", "mdGBvoa"],
    param: ["paramAttr", "param", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "param", "wvErNOV"],
    picture: ["pictureAttr", "picture", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "picture", "WNgZPWb"],
    pre: ["preAttr", "pre", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "pre", "yLxzZrJ"],
    progress: ["progressAttr", "progress", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "progress", "XWPeOQg"],
    q: ["qAttr", "q", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "q", "LYJzqvm"],
    rp: ["rpAttr", "rp", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "rp", "bGxozyG"],
    rt: ["rtAttr", "rt", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "rt", "MWqELdb"],
    ruby: ["rubyAttr", "ruby", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "ruby", "abaLXrV"],
    s: ["sAttr", "s", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "s", "qBMPgGo"],
    samp: ["sampAttr", "samp", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "samp", "dyqVaEj"],
    script: ["scriptAttr", "script", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "script", "OJoxdYe"],
    section: ["sectionAttr", "section", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "section", "KKxXJjz"],
    select: ["selectAttr", "select", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "select", "yLxzZda"],
    small: ["smallAttr", "small", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "small", "rNZGPEm"],
    source: ["sourceAttr", "source", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "source", "LYJzqKm"],
    span: ["spanAttr", "span", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "span", "VwGMgJG"],
    strong: ["strongAttr", "strong", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "strong", "BaOwMgX"],
    style: ["styleAttr", "style", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "style", "QWVqYej"],
    sub: ["subAttr", "sub", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "sub", "eYLGxqW"],
    summary: ["summaryAttr", "summary", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "summary", "Exewrqb"],
    sup: ["supAttr", "sup", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "sup", "vYzebov"],
    svg: ["svgAttr", "svg", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "svg", "gOdGqVJ"],
    table: ["tableAttr", "table", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "table", "QWVqoLy"],
    tbody: ["tbodyAttr", "tbody", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "tbody", "yLxzwBV"],
    td: ["tdAttr", "td", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "td", "XWPeGra"],
    template: ["templateAttr", "template", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "template", "YzOrgKR"],
    textarea: ["textareaAttr", "textarea", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "textarea", "jOvGJOq"],
    tfoot: ["tfootAttr", "tfoot", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "tfoot", "yLxzwLV"],
    th: ["thAttr", "th", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "th", "eYLGXYW"],
    thead: ["theadAttr", "thead", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "thead", "xxaXBxY"],
    time: ["timeAttr", "time", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "time", "VwGMRwE"],
    title: ["titleAttr", "title", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "title", "BaOwbyB"],
    tr: ["trAttr", "tr", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "tr", "QWVqowy"],
    track: ["trackAttr", "track", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "track", "ZEMXPYK"],
    u: ["uAttr", "u", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "u", "LYJzaEB"],
    ul: ["ulAttr", "ul", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "ul", "VwGMRYV"],
    var: ["varAttr", "var", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "var", "PodJLwM"],
    video: ["videoAttr", "video", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "video", "BaOwbNa"],
    wbr: ["wbrAttr", "wbr", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "wbr", "jOvGJPr"]
}
//TAG DETAIL OBJECT *END*

const tagArray = document.getElementsByClassName("tag")//li tag array
let tagDetailTag = document.getElementById("tagDetails")//tag detail area

//TAG DETAIL *START*
for (let j = 0; j < tagArray.length; j++) {

    tagArray[j].addEventListener("click", function () {
        let tagDetailObjItems = tagDetailObj[tagId[j]] 

        //TAG DETAIL TEMPLATE *START*
        let tagDetailTemplate = `
    <div class="closebutton" id="cls">
    <i class="fa-solid fa-circle-xmark fa-2x" id="cls"></i>
  </div>
            <div id="${tagDetailObjItems[0]}" class="tagInfo">
            <div class="tagHeader marginT20">${tagDetailObjItems[1]}</div>
            <div class="tagDesc">
                <div class="tagDectxt marginTRL20">${tagDetailObjItems[2]}</div>
                <code class="marginT20" style="color: #0e960c">${tagDetailObjItems[3]}</code>
                <div class="note">${tagDetailObjItems[4]}</div>
            </div>
            <div class="tagAttrs">
                <div class="attrs">
                    <div class="attrList">
                        <ul id="attrListUl">
                            <h3 class="attrListH">Attributes</h3>
                        </ul>
                    </div>
                    <div id="attrShow">
                    <iframe height="300" style="width: 100%;" scrolling="no" title="${tagDetailObjItems[5]}" src="https://codepen.io/onepagehtml/embed/${tagDetailObjItems[6]}?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                    See the Pen <a href="https://codepen.io/onepagehtml/pen/${tagDetailObjItems[6]}">${tagDetailObjItems[5]}</a> by onepagehtml (<a href="https://codepen.io/onepagehtml">@onepagehtml</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                  </iframe>                    
                  </div>
                </div>
            </div>
        </div>
        `
        //TAG DETAIL TEMPLATE *END*

        tagDetailTag.innerHTML = tagDetailTemplate //tagdetail append

        let attrId = this.id //get current item id
        if (attrId != null && (attrId != undefined) & (attrId != "")) { //id check
            tagDetailTag.style.display = "inline-block"; //show tag detail div
            let clsbtn = document.getElementById("cls"); //select close button

            clsbtn.addEventListener("click", () => { //close button click
                document.getElementById(`${tagId[j]}` + "Attr").remove() //current tag div remove
                tagDetailTag.style.display = "none"; //close tag detail hide
                clsbtn.remove() //remove close button
            })
        }
        //ATTR ADDING *START*
        let currentAttrList = attrList[tagId[j]] //current item attrs
        const attrListUl = document.getElementById("attrListUl") //attr append area

        currentAttrList.forEach((element, index) => { //add all attrs
            //attr template
            let attrListTemplate = 
                `
                    <li class="attr${index}">${element}</li>   
                `
            attrListUl.innerHTML += attrListTemplate //adding attrs

            let iframeDiv = document.getElementById("attrShow") //select parent div

            //iframe template for attr
            // iframe.innerHTML = 
            //     `
            //     <iframe height="300" style="width: 100%;" scrolling="no" title="${tagDetailObjItems[5]}" src="https://codepen.io/onepagehtml/embed/${tagDetailObjItems[6]}?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            //     See the Pen <a href="https://codepen.io/onepagehtml/pen/${tagDetailObjItems[6]}">${tagDetailObjItems[5]}</a> by onepagehtml (<a href="https://codepen.io/onepagehtml">@onepagehtml</a>)
            //     on <a href="https://codepen.io">CodePen</a>.
            //     </iframe>         
            //     `
        });
        //ATTR ADDING *END*
    })
}
//TAG DETAIL *END*