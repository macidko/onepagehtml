var tagDetails = document.getElementById("tagDetails");
var clsbtn = document.getElementById("cls");
var attrId, selectTag;
//CLASS ID - TAGDETAIL DIV
var items = document.getElementsByClassName("tag");
for (var i = 0; i < items.length; i++) {
  console.log(items[i]);

  items[i].addEventListener("click", function () {
    attrId = this.id;
    selectTag = document.getElementById(this.id + "Attr");
    console.log("attrId = ", attrId, "selectTag", selectTag);
    if (attrId != null && (attrId != undefined) & (attrId != "")) {
      tagDetails.style.display = "inline-block";
      selectTag.style.display = "initial";
    }
  });
}
//CLOSE BUTTON FUNC
clsbtn.addEventListener("click", function () {
  tagDetails.style.display = "none";
  selectTag.style.display = "none";
});
