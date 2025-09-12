// Simple error handler for development
if (process.env.NODE_ENV === 'development') {
  // Suppress known development errors
  const originalError = console.error;
  console.error = (...args: any[]) => {
    const message = args[0]?.toString() || '';
    if (!message.includes('isDragging') && !message.includes('autoinsert.js')) {
      originalError.apply(console, args);
    }
  };
}
