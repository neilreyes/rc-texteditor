(function ($) {
  const paper = $("#paper");
  const render = $("#render");
  const $dropdownMenuButton = $("#dropdownMenuButton");
  const $fontFamilyEntry = $(".font-family-entry");
  const $boldButton = $("#bold-btn");
  const $italicButton = $("#italic-btn");
  const $unorderedlistButton = $("#unorderedlist-btn");
  const $orderedlistButton = $("#orderedlist-btn");
  const $quotesButton = $("#quotes-btn");
  const $linkButton = $("#link-btn");
  const $formLink = $("#form-link");
  const $buttonSave = $("#buttonSave");

  const setFontFamily = (event, fontName) => {
    event.preventDefault();
    $dropdownMenuButton.text(fontName);
    document.execCommand("fontName", false, fontName);
  };

  const setBlockquote = () => {
    const selectedText = document.getSelection();

    document.execCommand(
      "insertHTML",
      false,
      "<blockquote>" + selectedText + "</blockquote>"
    );
  };

  const setLink = () => {
    const url = prompt("Enter a link:", "http://");
    const selectedText = document.getSelection();

    document.execCommand(
      "insertHTML",
      false,
      `<a href=${url} target="_blank">${selectedText}</a>`
    );
  };

  const saveContent = () => {
    render.html(`${paper.html()}`);
  };

  $fontFamilyEntry.click(function (event) {
    const fontName = $(this).data("font-name");
    setFontFamily(event, fontName);
  });

  $boldButton.click(() => document.execCommand("bold"));

  $italicButton.click(() => document.execCommand("italic"));

  $unorderedlistButton.click(() => document.execCommand("insertUnorderedList"));

  $orderedlistButton.click(() => document.execCommand("insertOrderedList"));

  $quotesButton.click(() => setBlockquote());

  $linkButton.click(() => setLink());

  $buttonSave.click(() => saveContent());
})(jQuery);
