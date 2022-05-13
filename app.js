const fontFamilyItem = document.querySelectorAll(".dropdown-item");
const boldButton = document.querySelector("#bold-btn");
const italicButton = document.querySelector("#italic-btn");
const unorderedlistButton = document.querySelector("#unorderedlist-btn");
const orderedlistButton = document.querySelector("#orderedlist-btn");
const quotesButton = document.querySelector("#quotes-btn");
const monospaceButton = document.querySelector("#monospace-btn");
const linkButton = document.querySelector("#link-btn");

const setFontFamily = (fontName) => {
  console.log(fontName);
  document.execCommand("fontName", false, fontName);
};

boldButton.addEventListener("click", () => {
  document.execCommand("bold");
});

italicButton.addEventListener("click", () => {
  document.execCommand("italic");
});

quotesButton.addEventListener("click", () => {
  const selectedText = document.getSelection();
  document.execCommand(
    "insertHTML",
    false,
    "<blockquote>" + selectedText + "</blockquote>"
  );
});

unorderedlistButton.addEventListener("click", () => {
  document.execCommand("insertUnorderedList");
});

orderedlistButton.addEventListener("click", () => {
  document.execCommand("insertOrderedList");
});

linkButton.addEventListener("click", () => {
  const url = prompt("Enter a URL:", "http://");
  const selectedText = document.getSelection();

  document.execCommand(
    "insertHTML",
    false,
    `<a href=${url} target="_blank">${selectedText}</a>`
  );
});

(function ($) {
  const $dropdownMenuButton = $("#dropdownMenuButton");
  $(".font-family-entry").click(function (e) {
    e.preventDefault();
    const fontName = $(this).data("font-name");
    $dropdownMenuButton.text(fontName);
    setFontFamily(fontName);
  });
})(jQuery);
