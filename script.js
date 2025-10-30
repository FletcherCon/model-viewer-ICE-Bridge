// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    // Fixed: Check if element exists before trying to access it
    const centerPrompt = event.target.querySelector('.center-pre-prompt');
    if (centerPrompt) {
      centerPrompt.classList.add('hide');
    }
  }
};

document.querySelector('model-viewer').addEventListener('progress', o
