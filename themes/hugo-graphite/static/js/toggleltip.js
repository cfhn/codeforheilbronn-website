/**
 * Update position for an `fixed` positioned toggletip element.
 * Toggletip is always positioned left of the target element.
 * Toggletip must be visible before reposition, so that its size is correctly determined.
 * 
 * @param {HTMLElement} toggletip
 * @param {HTMLElement} target
 */
const updateToggletipPosition = (toggletip, target) => {
  if (!toggletip || !target) {
    return;
  }

  const targetRect = target.getBoundingClientRect();
  const positionedElRect = toggletip.getBoundingClientRect();

  const left = targetRect.left - positionedElRect.width - 4;
  const top =
    targetRect.top + targetRect.height / 2 - positionedElRect.height / 2;

  toggletip.style.left = `${left}px`;
  toggletip.style.top = `${top}px`;
};

const createToggletip = () => {
  const element = document.createElement("div");
  element.style = "position: fixed;"
  element.className = "tooltip";
  element.popover = "auto"; // managed by js
  element.role = "status"; // for a11y purposes it's a status element
  return element;
};

/**
 *
 * @param {HTMLElement} target
 */
export const addToggletipFor = (target) => {
  const toggletip = createToggletip();
  target.after(toggletip);

  /**
   *
   * @param {string} text
   * @param {number | undefined} duration
   */
  target.showToggletip = (text, duration) => {
    toggletip.innerText = text;
    toggletip.showPopover();
    updateToggletipPosition(toggletip, target);

    if (duration) {
      setTimeout(() => toggletip.hidePopover(), duration);
    }
  };
};
