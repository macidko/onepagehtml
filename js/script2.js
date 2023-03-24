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
    comment: ["commentAttr", "comment", "The comment tag is used to insert comments in the source code. Comments are not displayed in the browsers.", "&lt;!-- Write your comments here --&gt;", 'Note: You can use the comment tag to "hide" scripts from browsers without support for scripts (so they don\'t show them as plain text)', "Comment", "qBKOVJm"],
    doctype: ["doctypeAttr", "doctype", 'All HTML documents must start with a &lt;!DOCTYPE&gt; declaration. The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.', "&lt;! DOCTYPE html&gt;", "Note: The &lt;!DOCTYPE&gt; declaration is NOT case sensitive.", "!DOCTYPE html", "NWLRWbW"],
    a: ["aAttr", "a", "The &lt;a&gt; tag defines a hyperlink, which is used to link from one page to another. The most important attribute of the <a> element is the href attribute, which indicates the link's destination.", "&lt;a href='URL'>Text&lt;/a&gt;", "Note: If the &lt;a&gt; tag has no href attribute, it is only a placeholder for a hyperlink.", "download<br>href<br>hreflang<br>media<br>ping<br>referrerpolicy<br>rel<br>target<br>type<br>", "a", "QWVKWpj"],
    abbr: ["abbrAttr", "abbr", 'The &lt;abbr&gt; tag defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".', '&lt;abbr&gt;&lt;/abbr&gt;', "Note: Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element.", "abbr", "YzOrRoP"],
    address: ["addressAttr", "address", "The &lt;address&gt; tag defines the contact information for the author/owner of a document or an article. The contact information can be an email address, URL, physical address, phone number, social media handle, etc.", "&lt;address&gt;&lt;/address&gt;", "Note: The text in the &lt;address&gt; element usually renders in italic, and browsers will always add a line break before and after the &lt;address&gt; element.", "address", "ZEMXmdj"],
    area: ["areaAttr", "area", "The &lt;area&gt; tag defines an area inside an image map (an image map is an image with clickable areas). &lt;area&gt; elements are always nested inside a &lt;map&gt; tag.", '&lt;area shape="" coords="" alt="" href=""&gt;', "Note: The usemap attribute in &lt;img&gt; is associated with the &lt;map&gt; element's name attribute, and creates a relationship between the image and the map.", "area", "xxaXQoe"],
    article: ["articleAttr", "article", "The &lt;article&gt; tag specifies independent, self-contained content. An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.", "&lt;article&gt&lt;/article&gt;", "Note: The &lt;article&gt; element does not render as anything special in a browser. However, you can use CSS to style the <article> element", "article", "oNPGQKv"],
    aside: ["asideAttr", "aside", "The &lt;aside&gt; tag defines some content aside from the content it is placed in. The aside content should be indirectly related to the surrounding content.", "&lt;! DOCTYPE&gt;", "Note: The &lt;aside&gt; element does not render as anything special in a browser. However, you can use CSS to style the <aside> element", "aside", "gOdGQVw"],
    audio: ["audioAttr", "audio", "The &lt;audio&gt; tag is used to embed sound content in a document, such as music or other audio streams. The &lt;audio&gt; tag contains one or more &lt;source&gt; tags with different audio sources. The browser will choose the first source it supports. The text between the &lt;audio&gt; and &lt;/audio&gt; tags will only be displayed in browsers that do not support the &lt;audio&gt; element.", "&lt;! DOCTYPE&gt;", "Note: For video files, look at the &lt;video&gt; tag.", "audio", "VwGMqZY"],
    b: ["bAttr", "b", "The &lt;b&gt; tag specifies bold text without any extra importance.", "&lt;! DOCTYPE&gt;", "Note: According to the HTML5 specification, the &lt;b&gt; tag should be used as a LAST resort when no other tag is more appropriate.", "b", "PodJXYb"],
    base: ["baseAttr", "base", "The &lt;base&gt; tag specifies the base URL and/or target for all relative URLs in a document. The &lt;base&gt; tag must have either an href or a target attribute present, or both.", "&lt;! DOCTYPE&gt;", "Note: There can only be one single &lt;base&gt; element in a document, and it must be inside the &lt;head&gt; element.", "base", "bGxoObR"],
    bdi: ["bdiAttr", "bdi", "The &lt;bdi&gt; tag isolates a part of text that might be formatted in a different direction from other text outside it. This element is useful when embedding user-generated content with an unknown text direction.", "&lt;! DOCTYPE&gt;", "Note: BDI stands for Bi-Directional Isolation.", "bdi", "KKxXbPQ"],
    bdo: ["bdoAttr", "bdo", "The &lt;bdo&gt; tag is used to override the current text direction.", "&lt;! DOCTYPE&gt;", "Note: BDO stands for Bi-Directional Override.", "bdo", "ExewGYr"],
    blockquote: ["blockquoteAttr", "blockquote", "The &lt;blockquote&gt; tag specifies a section that is quoted from another source. Browsers usually indent <blockquote> elements (look at example below to see how to remove the indentation).", "&lt;! DOCTYPE&gt;", "Note: Use &lt;q&gt; for inline (short) quotations.", "blockquote", "RwYLEwr"],
    body: ["bodyAttr", "body", "The &lt;body&gt; tag defines the document's body. The &lt;body&gt; element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.", "&lt;! DOCTYPE&gt;", "Note: There can only be one &lt;body&gt; element in an HTML document.", "body", "YzOrBPr"],
    br: ["brAttr", "br", "The &lt;br&gt; tag inserts a single line break.", "&lt;! DOCTYPE&gt;", "Note: Use the &lt;br&gt; tag to enter line breaks, not to add space between paragraphs.", "br", "ZEMXwGE"],
    button: ["buttonAttr", "button", "The &lt;button&gt; tag defines a clickable button. Inside a &lt;button&gt; element you can put text (and tags like &lt;i&gt;, &lt;b&gt;, &lt;strong&gt, &lt;br&gt;, &lt;img&gt;, etc.). That is not possible with a button created with the &lt;input&gt; element!", "&lt;! DOCTYPE&gt;", "Note: Always specify the type attribute for a &lt;button&gt; element, to tell browsers what type of button it is.", "button", "xxaXMGE"],
    canvas: ["canvasAttr", "canvas", "The &lt;canvas&gt; tag is used to draw graphics, on the fly, via scripting (usually JavaScript).", "&lt;! DOCTYPE&gt;", "Note: Etiket &lt;canvas&gt; şeffaftır ve yalnızca grafikler için bir kapsayıcıdır, grafikleri fiilen çizmek için bir komut dosyası kullanmalısınız.", "canvas", "dyqVaoR"],
    caption: ["captionAttr", "caption", "The &lt;caption&gt; tag defines a table caption. The &lt;caption&gt; tag must be inserted immediately after the &lt;table&gt; tag.", "&lt;! DOCTYPE&gt;", "Note: By default, a table caption will be center-aligned above a table. However, the CSS properties text-align and caption-side can be used to align and place the caption.", "caption", "GRXMzJx"],
    cite: ["citeAttr", "cite", "The &lt;cite&gt; tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).", "&lt;! DOCTYPE&gt;", "Note: The text in the &lt;cite&gt; element usually renders in italic.", "cite", "WNgZPvP"],
    code: ["codeAttr", "code", "The &lt;code&gt; tag is used to define a piece of computer code. The content inside is displayed in the browser's default monospace font.", "&lt;! DOCTYPE&gt;", "Note: This tag is not deprecated. However, it is possible to achieve richer effect by using CSS", "code", "XWPeOmm"],
    col: ["colAttr", "col", "The &lt;col&gt; tag specifies column properties for each column within a &lt;colgroup&gt; element.", "&lt;! DOCTYPE&gt;", "Note: The &lt;col&gt; tag is useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row.", "col", "abaLXvZ"],
    colegroup: ["colegroupAttr", "colegroup", "The &lt;colgroup&gt; tag specifies a group of one or more columns in a table for formatting. The &lt;colgroup&gt; tag is useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row.", "&lt;! DOCTYPE&gt;", "Note: The &lt;colgroup&gt; tag must be a child of a &lt;table&gt; element, after any &lt;caption&gt; elements and before any &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;, and &lt;tr&gt; elements.", "colgroup", "LYJzqpW"],
    data: ["dataAttr", "data", "The &lt;data&gt; tag is used to add a machine-readable translation of a given content. This element provides both a machine-readable value for data processors, and a human-readable value for rendering in a browser.", "&lt;! DOCTYPE&gt;", "Note: If the content is time- or date-related, use the &lt;time&gt; element instead.", "data", "RwYLvWx"],
    datalist: ["datalistAttr", "datalist", 'The &lt;datalist&gt; tag is used to provide an "autocomplete" feature for &lt;input&gt; elements. Users will see a drop-down list of pre-defined options as they input data.', "&lt;! DOCTYPE&gt;", "Note: The &lt;datalist&gt; element's id attribute must be equal to the &lt;input&gt; element's list attribute (this binds them together).", "datalist", "BaOwMoO"],
    dd: ["ddAttr", "dd", "The &lt;dd&gt; tag is used to describe a term/name in a description list.", "&lt;! DOCTYPE&gt;", "Note: Inside a &lt;dd&gt; tag you can put paragraphs, line breaks, images, links, lists, etc.", "dd", "yLxzZYm"],
    del: ["delAttr", "del", "The &lt;del&gt; tag defines text that has been deleted from a document. Browsers will usually strike a line through deleted text.", "&lt;! DOCTYPE&gt;", "Note: Tip: Also look at the &lt;ins&gt; tag to markup inserted text.", "del", "rNZGPxO"],
    details: ["detailsAttr", "details", "The &lt;details&gt; tag specifies additional details that the user can open and close on demand.", "&lt;! DOCTYPE&gt;", "Note: The &lt;summary&gt; tag is used in conjunction with &lt;details&gt; to specify a visible heading for the details.", "details", "abaLXdm"],
    dfn: ["dfnAttr", "dfn", 'The &lt;dfn&gt; tag stands for the "definition element", and it specifies a term that is going to be defined within the content.', "&lt;! DOCTYPE&gt;", "Note: The nearest parent of the &lt;dfn&gt; tag must also contain the definition/explanation for the term.", "dfn", "qBMPgbr"],
    dialog: ["dialogAttr", "dialog", "The &lt;dialog&gt; tag defines a dialog box or subwindow.", "&lt;! DOCTYPE&gt;", "Note: The &lt;dialog&gt; element makes it easy to create popup dialogs and modals on a web page.", "dialog", "GRXMzod"],
    div: ["divAttr", "div", "The &lt;div&gt; tag defines a division or a section in an HTML document.", "&lt;! DOCTYPE&gt;", "Note: By default, browsers always place a line break before and after the &lt;div&gt; element.", "div", "bGxozEO"],
    dl: ["dlAttr", "dl", "The &lt;dl&gt; tag defines a description list.", "&lt;! DOCTYPE&gt;", "Note:The &lt;dl&gt; tag is used in conjunction with &lt;dt&gt; (defines terms/names) and &lt;dd&gt; (describes each term/name).", "dl", "zYJEeqq"],
    dt: ["dtAttr", "dt", "The &lt;dt&gt; tag defines a term/name in a description list.", "&lt;! DOCTYPE&gt;", "Note: The &lt;dt&gt; tag is used in conjunction with &lt;dl&gt; (defines a description list) and &lt;dd&gt; (describes each term/name).", "dt", "JjarxXE"],
    em: ["emAttr", "em", "The &lt;em&gt; tag is used to define emphasized text. The content inside is typically displayed in italic.", "&lt;! DOCTYPE&gt;", "Note: A screen reader will pronounce the words in &lt;em&gt; with an emphasis, using verbal stress.", "em", "YzOrBqE"],
    embed: ["embedAttr", "embed", "The <embed> tag defines a container for an external resource, such as a web page, a picture, a media player, or a plug-in application.", "&lt;! DOCTYPE&gt;", "Note: Most browsers no longer support Java Applets and Plug-ins. ActiveX controls are no longer supported in any browsers. The support for Shockwave Flash has also been turned off in modern browsers.", "embed", "RwYLvaQ"],
    fieldset: ["fieldsetAttr", "fieldset", "The <fieldset> tag is used to group related elements in a form. The &lt;fieldset&gt; tag draws a box around the related elements.", "&lt;! DOCTYPE&gt;", " Note: Tip: The <legend> tag is used to define a caption for the &lt;fieldset&gt; element.", "fieldset", "WNgZPwm"],
    figcaption: ["figcaptionAttr", "figcaption", "The <figcaption> tag defines a caption for a &lt;figure&gt; element.", "&lt;! DOCTYPE&gt;", "Note: The <figcaption> element can be placed as the first or last child of the &lt;figure&gt; element.", "figcaption", "poOWGyM"],
    figure: ["figureAttr", "figure", "The &lt;figure&gt; tag specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.", "&lt;! DOCTYPE&gt;", "Note: Tip: The &lt;figcaption&gt; element is used to add a caption for the &lt;figure&gt; element.", "figure", "XWPeOKX"],
    footer: ["footerAttr", "footer", "The &lt;footer&gt; tag defines a footer for a document or section.", "&lt;! DOCTYPE&gt;", " Note: Contact information inside a &lt;footer&gt; element should go inside an &lt;address&gt; tag.", "footer", "LYJzqRL"],
    form: ["formAttr", "form", "The &lt;form&gt; tag is used to create an HTML form for user input.", "&lt;! DOCTYPE&gt;", "Note: The &lt;form&gt; element can contain one or more of the following form elements: \<br\>&lt;input&gt;&lt;textarea&gt;&lt;button&gt;&lt;select&gt;&lt;option&gt;&lt;optgroup&gt;&lt;fieldset&gt;&lt;label&gt;&lt;output&gt;", "form", "VwGrYxK"],
    h1: ["h1Attr", "h1", "The &lt;h1&gt; to &lt;h6&gt; tags are used to define HTML headings. &lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least important heading.", "&lt;h1&gt;This is heading 1&lt;/h1&gt;", "Note: Only use one &lt;h1&gt; per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with &lt;h1&gt;, then use &lt;h2&gt;, and so on.", "h1-h6", "xxaXMRg"],
    head: ["headAttr", "head", "The &lt;head&gt; element is a container for metadata (data about data) and is placed between the &lt;html&gt; tag and the &lt;body&gt; tag.", "&lt;! DOCTYPE&gt;", "Note: The following elements can go inside the &lt;head&gt; element:&lt;title&gt; (required in every HTML document)&lt;style&gt;&lt;base&gt;&lt;link&gt;&lt;meta&gt;&lt;script&gt;&lt;noscript&gt;", "head", "YzOrBpY"],
    header: ["headerAttr", "header", "The &lt;header&gt; element represents a container for introductory content or a set of navigational links.", "&lt;! DOCTYPE&gt;", "Note: You can have several &lt;header&gt; elements in one HTML document. However, &lt;header&gt; cannot be placed within a &lt;footer&gt;, &lt;address&gt; or another &lt;header&gt; element.", "header", "RwYLvoM"],
    hr: ["hrAttr", "hr", "The &lt;hr&gt; tag defines a thematic break in an HTML page (e.g. a shift of topic).", "&lt;hr&gt;", " Note: The &lt;hr&gt; element is most often displayed as a horizontal rule that is used to separate content (or define a change) in an HTML page.", "hr", "MWqELPe"],
    html: ["htmlAttr", "html", "The <html> tag represents the root of an HTML document.", "&lt;html&gt;&lt;/html&gt;", "Note: You should always include the lang attribute inside the &lt;html&gt; tag, to declare the language of the Web page. This is meant to assist search engines and browsers.", "html", "XWPeOxM"],
    i: ["iAttr", "i", "The &lt;i&gt; tag defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.", "&lt;i&gt&lt;/i&gt;", "Note: The &lt;i&gt; tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc.", "i", "LYJzqgQ"],
    iframe: ["iframeAttr", "iframe", "The &lt;iframe&gt; tag specifies an inline frame. An inline frame is used to embed another document within the current HTML document.", "&lt;! DOCTYPE&gt;", "Note:  It is a good practice to always include a title attribute for the &lt;iframe&gt;. This is used by screen readers to read out what the content of the &lt;iframe&gt; is.", "iframe", "GRXMzYP"],
    img: ["imgAttr", "img", "The &lt;img&gt; tag is used to embed an image in an HTML page.", "&lt;! DOCTYPE&gt;", "Note: Also, always specify the width and height of an image. If width and height are not specified, the page might flicker while the image loads.", "img", "WNgZPYN"],
    input: ["inputAttr", "input", "The &lt;input&gt; tag specifies an input field where the user can enter data.", "&lt;! DOCTYPE&gt;", "Note: Look at the type attribute to see examples for each input type!", "input", "yLxzZQO"],
    ins: ["insAttr", "ins", "The &lt;ins&gt; tag defines a text that has been inserted into a document. Browsers will usually underline inserted text.", "&lt;! DOCTYPE&gt;", "Note: Also look at the &lt;del&gt; tag to markup deleted text.", "ins", "abaLXQy"],
    kbd: ["kbdAttr", "kbd", "The &lt;kbd&gt; tag is used to define keyboard input. The content inside is displayed in the browser's default monospace font.", "&lt;! DOCTYPE&gt;", "Note: his tag is not deprecated. However, it is possible to achieve richer effect by using CSS", "kbd", "LYJzqXQ"],
    label: ["labelAttr", "label", "The <label> tag defines a label for several elements", "&lt;! DOCTYPE&gt;", "Note: The for attribute of &lt;label&gt; must be equal to the id attribute of the related element to bind them together. A label can also be bound to an element by placing the element inside the &lt;label&gt; element. ", "label", "vYzebQz"],
    legend: ["legendAttr", "legend", "The &lt;legend&gt; tag defines a caption for the &lt;fieldset&gt; element.", "&lt;! DOCTYPE&gt;", "Note:", "legend", "OJoxdaG"],
    li: ["liAttr", "li", "The <li> tag defines a list item. The &lt;li&gt; tag is used inside ordered lists(&lt;ol&gt;), unordered lists (&lt;ul&gt;), and in menu lists (&lt;menu&gt;).", "&lt;! DOCTYPE&gt;", "Note: Use CSS to style lists.", "li", "jOvGdXP"],
    link: ["linkAttr", "link", "The &lt;link&gt; tag defines the relationship between the current document and an external resource. The &lt;link&gt; tag is most often used to link to external style sheets or to add a favicon to your website.", "&lt;! DOCTYPE&gt;", "Note: The &lt;link&gt; element is an empty element, it contains attributes only.", "link", "KKxXJbd"],
    main: ["mainAttr", "main", "The &lt;main&gt; tag specifies the main content of a document.", "&lt;! DOCTYPE&gt;", "Note: There must not be more than one &lt;main&gt; element in a document. The &lt;main&gt; element must NOT be a descendant of an &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;, &lt;header&gt;, or &lt;nav&gt; element.", "main", "xxaXMmP"],
    map: ["mapAttr", "map", "The &lt;map&gt; tag is used to define an image map. An image map is an image with clickable areas.", "&lt;! DOCTYPE&gt;", " Note: The <map> element contains a number of &lt;area&gt; elements, that defines the clickable areas in the image map.", "map", "LYJzqMd"],
    mark: ["markAttr", "mark", "The &lt;mark&gt; tag defines text that should be marked or highlighted.", "&lt;mark&gt;&lt;/mark&gt;", "Note:", "mark", "vYzebvV"],
    meta: ["metaAttr", "meta", "The &lt;meta&gt; tag defines metadata about an HTML document. Metadata is data (information) about data.", "&lt;! DOCTYPE&gt;", "Note: Metadata will not be displayed on the page, but is machine parsable.", "meta", "PodJVXg"],
    meter: ["meterAttr", "meter", "The &lt;meter&gt; tag defines a scalar measurement within a known range, or a fractional value. This is also known as a gauge.", "&lt;! DOCTYPE&gt;", "Note: The &lt;meter&gt; tag should not be used to indicate progress (as in a progress bar). For progress bars, use the &lt;progress&gt; tag.", "meter", "jOvGddb"],
    nav: ["navAttr", "nav", "The &lt;nav&gt; tag defines a set of navigation links.", "&lt;! DOCTYPE&gt;", "Note: Notice that NOT all links of a document should be inside a &lt;nav&gt; element. The &lt;nav&gt; element is intended only for major blocks of navigation links.", "nav", "XWPeOOR"],
    noscript: ["noscriptAttr", "noscript", "The &lt;noscript&gt; tag defines an alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support script.", "&lt;! DOCTYPE&gt;", "Note: The &lt;noscript&gt; element can be used in both &lt;head&gt; and &lt;body&gt;. When used inside &lt;head&gt;, the &lt;noscript&gt; element could only contain &lt;link&gt;, &lt;style&gt;, and &lt;meta&gt; elements.", "noscript", "qBMPggx"],
    object: ["objectAttr", "object", "The &lt;object&gt; tag defines a container for an external resource.", "&lt;! DOCTYPE&gt;", "Note: The external resource can be a web page, a picture, a media player, or a plug-in application.", "object", "VwGMggB"],
    ol: ["olAttr", "ol", "The &lt;ol&gt; tag defines an ordered list. An ordered list can be numerical or alphabetical.", "&lt;! DOCTYPE&gt;", "Note: Use CSS to style lists.", "ol", "mdGBvva"],
    optgroup: ["optgroupAttr", "optgroup", "The &lt;optgroup&gt; tag is used to group related options in a &lt;select&gt; element (drop-down list).", "&lt;! DOCTYPE&gt;", "Note: If you have a long list of options, groups of related options are easier to handle for a user.", "optgroup", "OJoxddY"],
    option: ["optionAttr", "option", "The &lt;option&gt; tag defines an option in a select list.", "&lt;! DOCTYPE&gt;", "Note: The &lt;option&gt; tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server on form submission.", "option", "NWLaoJW"],
    output: ["outputAttr", "output", "The &lt;output&gt; tag is used to represent the result of a calculation (like one performed by a script).", "&lt;! DOCTYPE&gt;", " Note:", "output", "ZEMXwPB"],
    p: ["pAttr", "p", "The &lt;p&gt; tag defines a paragraph.", "&lt;! DOCTYPE&gt;", "Note: Browsers automatically add a single blank line before and after each &lt;p&gt; element.", "p", "mdGBvoa"],
    param: ["paramAttr", "param", "The <param> tag is used to define parameters for an <object> element.", "&lt;! DOCTYPE&gt;", " Note:", "param", "wvErNOV"],
    picture: ["pictureAttr", "picture", "The &lt;picture&gt; tag gives web developers more flexibility in specifying image resources.", "&lt;! DOCTYPE&gt;", 'Note:  The &lt;picture&gt; element works "similar" to &lt;video&gt; and &lt;audio&gt;. You set up different sources, and the first source that fits the preferences is the one being used.', "picture", "WNgZPWb"],
    pre: ["preAttr", "pre", "The &lt;pre&gt; tag defines preformatted text.", "&lt;! DOCTYPE&gt;", "Note: Text in a &lt;pre&gt; element is displayed in a fixed-width font, and the text preserves both spaces and line breaks. The text will be displayed exactly as written in the HTML source code.", "pre", "yLxzZrJ"],
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