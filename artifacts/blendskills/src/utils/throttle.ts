/**
 * Throttle function to limit execution frequency
 * Ensures a function is called at most once per delay period
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeoutId: NodeJS.Timeout | null = null;

  return function (...args: Parameters<T>) {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall;

    if (timeSinceLastCall >= delay) {
      lastCall = now;
      func(...args);
    } else {
      // Clear previous timeout to ensure latest args are used
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      // Schedule call with remaining delay
      const remainingDelay = delay - timeSinceLastCall;
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        func(...args);
        timeoutId = null;
      }, remainingDelay);
    }
  };
}
