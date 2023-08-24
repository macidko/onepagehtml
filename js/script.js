"use strict";

// Add event listener to execute code after DOM content loads
window.addEventListener("DOMContentLoaded", () => {

  // Declare variables to be used globally
  let createLiTag,
    tagId,
    tagDetailObj,
    attrList,
    allTags,
    modifiedFrameSrcPath;

  // Get necessary elements from the DOM
  const tagsUl = document.getElementById("tags"), // Ul element for tags
    tagDetail = document.getElementById("tagDetails"), // Tag detail section
    tagIdAttr = document.querySelector(".tagInfo"), // Tag ID element
    tagHeader = document.querySelector(".tagHeader"), // Tag header element
    tagDesc = document.querySelector(".tagDecTxt"), // Tag description element
    tagCode = document.querySelector(".code"), // Tag code example element
    tagNote = document.querySelector(".note"), // Tag note element
    tagIframe = document.getElementById("iframe"), // Iframe element
    newIframeSrc = new URL("https://codepen.io/onepagehtml/embed/?default-tab=html%2Cresult"), // Default iframe URL
    newIframePenSrc = new URL("https://codepen.io/onepagehtml/pen/"), // Default pen URL
    searchInput = document.getElementById("search"); // Search input element

  // Function to create HTML elements
  function createElem(tagName, idName, className, text, appendElem) {
    createLiTag = document.createElement(tagName);
    createLiTag.setAttribute("id", idName);
    createLiTag.classList.add(className);
    createLiTag.textContent = text;
    appendElem.append(createLiTag);
    allTags = document.querySelectorAll(".tag"); // Get all tag elements
  }

  // Function to set the iframe source
  function setIframeSrc(iframeSrc) {
    let iframeSrcPath = iframeSrc; // New code will be inserted here
    newIframeSrc.pathname = "/onepagehtml/embed/" + iframeSrcPath;
    newIframePenSrc.pathname = "/onepagehtml/pen/" + iframeSrcPath;
    modifiedFrameSrcPath = newIframeSrc.toString();
    tagIframe.setAttribute("src", modifiedFrameSrcPath);
  }

  // Function to change the displayed data in the tag detail section
  function changeDetailData(tagId, tagHeaderText, tagDescText, tagCodeExample, tagNoteText, iframeSrc) {
    setIframeSrc(iframeSrc);
    tagIdAttr.setAttribute("id", tagId);
    tagHeader.textContent = tagHeaderText;
    tagDesc.textContent = tagDescText;
    tagCode.textContent = tagCodeExample;
    tagNote.textContent = tagNoteText;
  }

  // Function to handle the close button action
  function closeButton(e) {
    let clsbtn = document.getElementById("cls"); // Select the close button

    if (
      e.target.id !== undefined &&
      e.target.id !== null &&
      e.target.id !== ""
    ) {
      tagDetail.style.display = "block"; // Show tag detail section
      clsbtn.addEventListener("click", () => {
        tagDetail.style.display = "none"; // Hide tag detail section
      });
    }
  }

  // Function for search functionality
  function search() {
    searchInput.addEventListener("keyup", function (e) {
      let searchValue = e.target.value.trim().toLowerCase(); // Get search value

      // Iterate through all tag elements and handle display
      Array.from(allTags).forEach(tag => {
        let tagContent = tag.textContent.trim().toLowerCase();
        if (tagContent.includes(searchValue)) {
          tag.style.display = "block"; // Display the tag
        } else {
          tag.style.display = "none"; // Hide the tag
        }
      });
    });
  }

  // Fetch JSON data
  fetch("../json/data.json")
    .then(response => response.json())
    .then(data => {
      tagId = data[0]; // Tag IDs
      tagDetailObj = data[1]; // Tag detail objects
      attrList = data[2]; // Attribute lists

      // Function to show tag details
      function showTagDetail(element, index) {
        createElem("li", tagId[index], "tag", tagId[index], tagsUl);
        createLiTag.addEventListener("click", function (e) {
          let tagDetailData = tagDetailObj[index]; // Get tag detail data
          // Update the displayed tag detail information
          changeDetailData(tagDetailData[0], tagDetailData[1], tagDetailData[2], tagDetailData[3], tagDetailData[4], tagDetailData[6]);
          closeButton(e); // Handle close button action
        });
      }

      // Iterate through tag IDs and show tag details
      Object.keys(tagId).forEach((element, index) => {
        showTagDetail(element, index);
      });

      search(); // Initialize search functionality

    });
});
