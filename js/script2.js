//CREATE LAG LI TAGS *START*
let tagId = ["comment", "doctype", "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colegroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "head", "header", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"]

const tagsUl = document.getElementById("tags")
for (let i = 0; i < tagId.length; i++) {
    const createLi = document.createElement("li")
    createLi.setAttribute("id", tagId[i])
    createLi.classList.add("tag")
    createLi.textContent = tagId[i]
    tagsUl.append(createLi)
}
//CREATE LAG LI TAGS *END*

let tagDetailObj = {
    comment: ["commentAttr", "comment", "You can add comments to your HTML source by using the following;", "&lt;!-- Write your comments here --&gt;", " Note: Comments are not displayed by the browser, but they can help document your HTML source code.", "None", "Comment", "qBKOVJm"],
    doctype: ["doctypeAttr", "doctype", "All HTML documents must start with a <!DOCTYPE> declaration. The declaration is not an HTML tag. It is an \"information\" to the browser about what document type to expect.", "&lt;! DOCTYPE html&gt;", " Note: The &lt;!DOCTYPE&gt; declaration is NOT case sensitive.", "None", "!DOCTYPE html", "NWLRWbW"],
    a: ["aAttr", "a", "The &lt;a&gt; tag defines a hyperlink, which is used to link from one page to another.", "&lt;a href='URL'>Text&lt;/a&gt;", " Note: If the <a> tag has no href attribute, it is only a placeholder for a hyperlink.<br>A linked page is normally displayed in the current browser window, unless you specify another target.", "download<br>href<br>hreflang<br>media<br>ping<br>referrerpolicy<br>rel<br>target<br>type<br>", "a", "QWVKWpj"],
    abbr: ["abbrAttr", "abbr", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "abbr", "YzOrRoP"],
    address: ["addressAttr", "address", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "address", "ZEMXmdj"],
    area: ["areaAttr", "area", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "area", "xxaXQoe"],
    article: ["articleAttr", "article", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "article", "oNPGQKv"],
    aside: ["asideAttr", "aside", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "aside", "gOdGQVw"],
    audio: ["audioAttr", "audio", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "audio", "VwGMqZY"],
    b: ["bAttr", "b", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "b", "PodJXYb"],
    base: ["baseAttr", "base", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "base", "bGxoObR"],
    bdi: ["bdiAttr", "bdi", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "bdi", "KKxXbPQ"],
    bdo: ["bdoAttr", "bdo", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "bdo", "ExewGYr"],
    blockquote: ["blockquoteAttr", "blockquote", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "blockquote", "RwYLEwr"],
    body: ["bodyAttr", "body", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "body", "YzOrBPr"],
    br: ["brAttr", "br", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "br", "ZEMXwGE"],
    button: ["buttonAttr", "button", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "button", "xxaXMGE"],
    canvas: ["canvasAttr", "canvas", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "canvas", "dyqVaoR"],
    caption: ["captionAttr", "caption", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "caption", "GRXMzJx"],
    center: ["centerAttr", "center", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "center", "bGxozdQ"],
    cite: ["citeAttr", "cite", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "cite", "WNgZPvP"],
    code: ["codeAttr", "code", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "code", "XWPeOmm"],
    col: ["colAttr", "col", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "col", "abaLXvZ"],
    colegroup: ["colegroupAttr", "colegroup", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "colgroup", "LYJzqpW"],
    data: ["dataAttr", "data", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "data", "RwYLvWx"],
    datalist: ["datalistAttr", "datalist", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "datalist", "BaOwMoO"],
    dd: ["ddAttr", "dd", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "dd", "yLxzZYm"],
    del: ["delAttr", "del", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "del", "rNZGPxO"],
    details: ["detailsAttr", "details", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "details", "abaLXdm"],
    dfn: ["dfnAttr", "dfn", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "dfn", "qBMPgbr"],
    dialog: ["dialogAttr", "dialog", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "dialog", "GRXMzod"],
    dir: ["dirAttr", "dir", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "dir", "KKxXJVj"],
    div: ["divAttr", "div", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "div", "bGxozEO"],
    dl: ["dlAttr", "dl", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "dl", "zYJEeqq"],
    dt: ["dtAttr", "dt", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "dt", "JjarxXE"],
    em: ["emAttr", "em", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "em", "YzOrBqE"],
    embed: ["embedAttr", "embed", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "embed", "RwYLvaQ"],
    fieldset: ["fieldsetAttr", "fieldset", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "fieldset", "WNgZPwm"],
    figcaption: ["figcaptionAttr", "figcaption", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "figcaption", "poOWGyM"],
    figure: ["figureAttr", "figure", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "figure", "XWPeOKX"],
    footer: ["footerAttr", "footer", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "footer", "LYJzqRL"],
    form: ["formAttr", "form", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "form", "VwGrYxK"],
    h1: ["h1Attr", "h1", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "h1-h6", "xxaXMRg"],
    head: ["headAttr", "head", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "head", "YzOrBpY"],
    header: ["headerAttr", "header", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "header", "RwYLvoM"],
    hr: ["hrAttr", "hr", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "hr", "MWqELPe"],
    html: ["htmlAttr", "html", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "html", "XWPeOxM"],
    i: ["iAttr", "i", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "i", "LYJzqgQ"],
    iframe: ["iframeAttr", "iframe", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "iframe", "GRXMzYP"],
    img: ["imgAttr", "img", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "img", "WNgZPYN"],
    input: ["inputAttr", "input", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "input", "yLxzZQO"],
    ins: ["insAttr", "ins", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "ins", "abaLXQy"],
    kbd: ["kbdAttr", "kbd", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "kbd", "LYJzqXQ"],
    label: ["labelAttr", "label", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "label", "vYzebQz"],
    legend: ["legendAttr", "legend", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "legend", "OJoxdaG"],
    li: ["liAttr", "li", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "li", "jOvGdXP"],
    link: ["linkAttr", "link", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "link", "KKxXJbd"],
    main: ["mainAttr", "main", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "main", "xxaXMmP"],
    map: ["mapAttr", "map", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "map", "LYJzqMd"],
    mark: ["markAttr", "mark", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "mark", "vYzebvV"],
    meta: ["metaAttr", "meta", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "meta", "PodJVXg"],
    meter: ["meterAttr", "meter", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "meter", "jOvGddb"],
    nav: ["navAttr", "nav", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "nav", "XWPeOOR"],
    noscript: ["noscriptAttr", "noscript", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "noscript", "qBMPggx"],
    object: ["objectAttr", "object", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "object", "VwGMggB"],
    ol: ["olAttr", "ol", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "ol", "mdGBvva"],
    optgroup: ["optgroupAttr", "optgroup", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "optgroup", "OJoxddY"],
    option: ["optionAttr", "option", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "option", "NWLaoJW"],
    output: ["outputAttr", "output", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "output", "ZEMXwPB"],
    p: ["pAttr", "p", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "p", "mdGBvoa"],
    param: ["paramAttr", "param", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "param", "wvErNOV"],
    picture: ["pictureAttr", "picture", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "picture", "WNgZPWb"],
    pre: ["preAttr", "pre", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "pre", "yLxzZrJ"],
    progress: ["progressAttr", "progress", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "progress", "XWPeOQg"],
    q: ["qAttr", "q", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "q", "LYJzqvm"],
    rp: ["rpAttr", "rp", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "rp", "bGxozyG"],
    rt: ["rtAttr", "rt", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "rt", "MWqELdb"],
    ruby: ["rubyAttr", "ruby", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "ruby", "abaLXrV"],
    s: ["sAttr", "s", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "s", "qBMPgGo"],
    samp: ["sampAttr", "samp", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "samp", "dyqVaEj"],
    script: ["scriptAttr", "script", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "script", "OJoxdYe"],
    section: ["sectionAttr", "section", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "section", "KKxXJjz"],
    select: ["selectAttr", "select", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "select", "yLxzZda"],
    small: ["smallAttr", "small", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "small", "rNZGPEm"],
    source: ["sourceAttr", "source", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "source", "LYJzqKm"],
    span: ["spanAttr", "span", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "span", "VwGMgJG"],
    strong: ["strongAttr", "strong", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "strong", "BaOwMgX"],
    style: ["styleAttr", "style", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "style", "QWVqYej"],
    sub: ["subAttr", "sub", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "sub", "eYLGxqW"],
    summary: ["summaryAttr", "summary", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "summary", "Exewrqb"],
    sup: ["supAttr", "sup", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "sup", "vYzebov"],
    svg: ["svgAttr", "svg", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "svg", "gOdGqVJ"],
    table: ["tableAttr", "table", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "table", "QWVqoLy"],
    tbody: ["tbodyAttr", "tbody", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "tbody", "yLxzwBV"],
    td: ["tdAttr", "td", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "td", "XWPeGra"],
    template: ["templateAttr", "template", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "template", "YzOrgKR"],
    textarea: ["textareaAttr", "textarea", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "textarea", "jOvGJOq"],
    tfoot: ["tfootAttr", "tfoot", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "tfoot", "yLxzwLV"],
    th: ["thAttr", "th", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "th", "eYLGXYW"],
    thead: ["theadAttr", "thead", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "thead", "xxaXBxY"],
    time: ["timeAttr", "time", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "time", "VwGMRwE"],
    title: ["titleAttr", "title", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "title", "BaOwbyB"],
    tr: ["trAttr", "tr", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "tr", "QWVqowy"],
    track: ["trackAttr", "track", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "track", "ZEMXPYK"],
    u: ["uAttr", "u", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "u", "LYJzaEB"],
    ul: ["ulAttr", "ul", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "ul", "VwGMRYV"],
    var: ["varAttr", "var", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "var", "PodJLwM"],
    video: ["videoAttr", "video", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "video", "BaOwbNa"],
    wbr: ["wbrAttr", "wbr", "açıklama", "&lt;! DOCTYPE&gt;", " Note:", "None", "wbr", "jOvGJPr"]
}

const tagArray = document.getElementsByClassName("tag")
let tagDetailTag = document.getElementById("tagDetails")

for (let j = 0; j < tagArray.length; j++) {
    tagArray[j].addEventListener("click", function () {
        let tagDetailObjItems = tagDetailObj[tagId[j]]

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
                        <ul class="attrListUl">
                            <h3 class="attrListH">Attributes</h3>
                            <li class="attrListLi" id="test">${tagDetailObjItems[5]}</li>
                        </ul>
                    </div>
                    <div class="attrShow">
                    <iframe height="300" style="width: 100%;" scrolling="no" title="${tagDetailObjItems[6]}" src="https://codepen.io/onepagehtml/embed/${tagDetailObjItems[7]}?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                    See the Pen <a href="https://codepen.io/onepagehtml/pen/${tagDetailObjItems[7]}">${tagDetailObjItems[6]}</a> by onepagehtml (<a href="https://codepen.io/onepagehtml">@onepagehtml</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                  </iframe>                    
                  </div>
                </div>
            </div>
        </div>
        `
        tagDetailTag.innerHTML = tagDetailTemplate

        let attrId = this.id
        if (attrId != null && (attrId != undefined) & (attrId != "")) {
            tagDetailTag.style.display = "inline-block";
            let clsbtn = document.getElementById("cls");
            clsbtn.addEventListener("click", () => {
                document.getElementById(`${tagId[j]}` + "Attr").remove()
                tagDetailTag.style.display = "none";
                clsbtn.remove()
            })
        }
    })
}

