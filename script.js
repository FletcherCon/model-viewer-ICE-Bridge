// Display errors on the page itself
window.addEventListener('error', (event) => {
  console.error('Error:', event.message);
  alert('Error: ' + event.message);
});

// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');
    }
  }
};

const viewer = document.querySelector('model-viewer');
viewer.addEventListener('progress', onProgress);

// AR Status Debugging
viewer.addEventListener('ar-status', (event) => {
  console.log('AR Status:', event.detail.status);
  alert('AR Status: ' + event.detail.status);
});

// AR Session started/ended
viewer.addEventListener('ar-tracking', (event) => {
  console.log('AR Tracking:', event.detail.status);
  alert('AR Tracking: ' + event.detail.status);
});

// Model loaded
viewer.addEventListener('load', () => {
  console.log('Model loaded successfully');
  alert('Model loaded');
});

// Error handling
viewer.addEventListener('error', (event) => {
  console.error('Model Viewer Error:', event.detail);
  alert('Model Error: ' + JSON.stringify(event.detail));
});
