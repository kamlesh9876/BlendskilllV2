/**
 * Detect device capabilities and performance tier
 * Used to optimize rendering based on device hardware
 */

export interface DeviceCapabilities {
  isLowEnd: boolean;
  isMobile: boolean;
  maxParticles: number;
  maxRipples: number;
  canvasPixelRatio: number;
  throttleMs: number;
}

export function getDeviceCapabilities(): DeviceCapabilities {
  const isMobile = /iPhone|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // Check device memory (if available)
  const deviceMemory = (navigator as any).deviceMemory || 4;
  const isLowEnd = deviceMemory <= 2 || isMobile;

  // Detect high refresh rate
  const matchMedia = window.matchMedia('(update: fast)');
  const isHighRefresh = matchMedia.matches;

  return {
    isLowEnd,
    isMobile,
    // Reduce particles on low-end devices
    maxParticles: isLowEnd ? 100 : 500,
    // Limit ripples on low-end devices
    maxRipples: isLowEnd ? 8 : 20,
    // Use device pixel ratio but cap at 2 for performance
    canvasPixelRatio: Math.min(window.devicePixelRatio || 1, 2),
    // Tighter throttle on low-end devices
    throttleMs: isLowEnd ? 32 : isHighRefresh ? 8 : 16,
  };
}
