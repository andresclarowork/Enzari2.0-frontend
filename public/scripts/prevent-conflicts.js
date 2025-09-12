// Prevent variable conflicts
(function() {
  'use strict';
  try {
    if (window.hasOwnProperty('isDragging')) {
      delete window.isDragging;
    }
    Object.defineProperty(window, 'isDragging', {
      value: false,
      writable: true,
      configurable: false
    });
  } catch (e) {
    // Silently handle errors
  }
})();
