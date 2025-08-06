/**
 * Animation frame hook for smooth updates
 */

import { useEffect, useRef } from "react";

export function useAnimationFrame(
  callback: () => void,
  targetFps: number = 60
): void {
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const callbackRef = useRef(callback);

  // Update callback ref to avoid stale closures
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const targetFrameTime = 1000 / targetFps;

    const animate = (currentTime: number) => {
      if (previousTimeRef.current !== null) {
        const deltaTime = currentTime - previousTimeRef.current;

        // Only update if enough time has passed for target FPS
        if (deltaTime >= targetFrameTime) {
          callbackRef.current();
          previousTimeRef.current = currentTime;
        }
      } else {
        // First frame
        previousTimeRef.current = currentTime;
        callbackRef.current();
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    // Start animation loop
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
      previousTimeRef.current = null;
    };
  }, [targetFps]);
}
