import { addToggletipFor } from "toggletip";

const createCopyButton = () => {
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("btn", "btn-primary", "btn-copy-ex");
  button.title = "Copy to clipboard";
  button.type = "submit";
  button["aria-label"] = "Copy to clipboard";
  button.innerHTML = "<i class='fa fa-copy'></i>";
  return button;
};

document.querySelectorAll(".highlight > pre").forEach((e) => {
  e.classList.add("hasCopyButton");
  e.prepend(createCopyButton());
});

/**
 * Select the text of the given node for easy copying
 * @param {Node} node
 */
const selectText = (node) => {
  const selection = globalThis.getSelection();
  const range = document.createRange();
  range.selectNodeContents(node);
  selection.removeAllRanges();
  selection.addRange(range);
};

const handleClipboardCopy = async (codeElement, copyButton) => {
  try {
    await navigator.clipboard.writeText(codeElement.textContent);
    copyButton.showToggletip("Copied!", 2000);
  } catch (error) {
    // When clipboard access is not allowed, we select the text so it can easily be copied manually.
    console.error(error.message);
    selectText(codeElement);
    copyButton.showToggletip("Copy using Ctrl+C or Command+C!", 10000);
  }
};

// Initialize toggletips:
document.querySelectorAll(".btn-copy-ex").forEach((copyButton) => {
  addToggletipFor(copyButton);
  const codeElement = copyButton.parentNode.querySelector("code");

  copyButton.addEventListener("click", () =>
    handleClipboardCopy(codeElement, copyButton)
  );
});
