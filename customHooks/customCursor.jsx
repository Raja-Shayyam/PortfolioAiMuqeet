// import { useEffect, useRef } from 'react';

// export const CustomCursor = () => {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       const { clientX, clientY } = e;
//       cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
//     };
//     window.addEventListener('mousemove', moveCursor);
//     return () => window.removeEventListener('mousemove', moveCursor);
//   }, []);

//   return (
//     <>
//       <style>{`body, body * { cursor: none !important; }`}</style>
//       <div
//         ref={cursorRef}
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '24px',
//           height: '24px',
//           borderRadius: '50%',
//           border: '2px solid #4647d3',
//           pointerEvents: 'none',  // Allows clicking through
//           zIndex: 9999,
//           transition: 'transform 0.05s linear, width 0.2s, height 0.2s',
//         }}
//       />
//     </>
//   );
// };

// components/CustomCursor.jsx


// import { useEffect, useRef, useState } from 'react';
// import { Box } from '@mui/material';

// export const CustomCursor = () => {
//   const cursorDotRef = useRef(null);
//   const cursorOutlineRef = useRef(null);
//   const rafId = useRef(null);

//   // State for hover effects
//   const [isHovered, setIsHovered] = useState(false);
//   // const [size, setIsized] = useState();
//   const [isClicked, setIsClicked] = useState(false);

//   useEffect(() => {
//     // Hide default cursor globally
//     document.body.style.cursor = 'none';
//     // Add class to all interactive elements (optional, for styling)
//     document.querySelectorAll('a, button, [role="button"], .clickable').forEach(el => {
//       el.style.cursor = 'none';
//     });

//     const onMouseMove = (e) => {
//       const { clientX, clientY } = e;

//       // Cancel any pending frame
//       if (rafId.current) cancelAnimationFrame(rafId.current);

//       // Schedule update on next paint
//       rafId.current = requestAnimationFrame(() => {
//         if (cursorDotRef.current) {
//           cursorDotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
//         }
//         if (cursorOutlineRef.current) {
//           // Outline lags slightly behind for a smooth trail effect (optional)
//           cursorOutlineRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
//         }
//       });
//     };

//     const onMouseDown = () => setIsClicked(true);
//     const onMouseUp = () => setIsClicked(false);

//     // Hover detection using event delegation
//     const onMouseOver = (e) => {
//       const target = e.target;

//       if (target.matches('a,Button, button, [role="button"], .clickable')) {
//         // const rect = target.getBoundingClientRect();
//         // console.log(target, 'e', e, 't', rect);
//         setIsHovered(true);
//         // setIsized({
//         //   h: rect.height,
//         //   w: rect.width
//         // })
//       }
//     };
//     const onMouseOut = (e) => {
//       const target = e.target;
//       if (target.matches('a, button, [role="button"], .clickable')) {
//         setIsHovered(false);
//       }
//     };

//     window.addEventListener('mousemove', onMouseMove, { passive: true });
//     window.addEventListener('mousedown', onMouseDown);
//     window.addEventListener('mouseup', onMouseUp);
//     document.addEventListener('mouseover', onMouseOver);
//     document.addEventListener('mouseout', onMouseOut);

//     return () => {
//       document.body.style.cursor = '';
//       window.removeEventListener('mousemove', onMouseMove);
//       window.removeEventListener('mousedown', onMouseDown);
//       window.removeEventListener('mouseup', onMouseUp);
//       document.removeEventListener('mouseover', onMouseOver);
//       document.removeEventListener('mouseout', onMouseOut);
//       if (rafId.current) cancelAnimationFrame(rafId.current);
//     };
//   }, []);

//   return (
//     <>
//       {/* Small dot cursor (exact position) */}
//       <Box
//         ref={cursorDotRef}
//         sx={{
//           position: 'fixed',
//           top: -4,
//           left: -4,
//           width: 8,
//           height: 8,
//           borderRadius: '50%',
//           backgroundColor: '#4647d3',
//           pointerEvents: 'none',
//           zIndex: 99999,
//           transition: 'transform 0.1s ease-out, width 0.2s, height 0.2s, background 0.2s',
//           ...(isHovered && {
//             width: 20,
//             height: 20,
//             // width: size.w,
//             // height: size.h,
//             backgroundColor: 'transparent',
//             border: '2px solid #4647d3',
//             // border: '2px solid #0c0c28',
//           }),
//           ...(isClicked && {
//             transform: 'scale(0.s8)',
//           }),
//         }}
//       />

//       {/* Optional: larger trailing outline for aesthetics */}
//       <Box
//         ref={cursorOutlineRef}
//         sx={{
//           position: 'fixed',
//           top: -16,
//           left: -16,
//           width: 32,
//           height: 32,
//           borderRadius: '50%',
//           border: '1px solid rgba(70, 71, 211, 0.3)',
//           pointerEvents: 'none',
//           zIndex: 99998,
//           transition: 'transform 0.25s ease-out, opacity 0.2s',
//           opacity: isHovered ? 0 : 0.6,
//         }}
//       />
//     </>
//   );
// };


// components/CustomCursor.jsx
import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import '../Css/customCursor.css'

// CustomCursor.jsx

// export const CustomCursor = () => {
//   const dotRef = useRef(null);
//   const ringRef = useRef(null);

//   useEffect(() => {
//     const onMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       if (dotRef.current) {
//         dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
//       }
//       if (ringRef.current) {
//         ringRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
//       }
//     };

//     window.addEventListener('mousemove', onMouseMove);
//     return () => window.removeEventListener('mousemove', onMouseMove);
//   }, []);

//   return (
//     <>
//       <div ref={dotRef} className="cursor-dot" />
//       <div ref={ringRef} className="cursor-ring" />
//     </>
//   );
// };

export const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);   // Trailing gradient ring
  const bracketLeftRef = useRef(null);  // Left bracket [
  const bracketRightRef = useRef(null); // Right bracket ]
  const rafId = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredRect, setHoveredRect] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // Hide default cursor globally
    document.body.style.cursor = 'none';
    document.querySelectorAll('a, button, [role="button"], .clickable').forEach(el => {
      el.style.cursor = 'none';
    });

    // const onMouseMove = (e) => {
    //   const { clientX, clientY } = e;
    //   console.log('mousemove', clientX, clientY); // Already confirmed working

    //   console.log('dot ref exists?', !!cursorDotRef.current); // Should be true
    //   console.log('ring ref exists?', !!cursorRingRef.current); // Should be true

    //   // Check if RAF is being scheduled
    //   console.log('scheduling RAF');
    //   // ... rest
    // };
    // const onMouseMove = (e) => {
    //   const { clientX, clientY } = e;

    //   if (cursorDotRef.current) {
    //     cursorDotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    //   }
    //   if (cursorRingRef.current) {
    //     cursorRingRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    //   }
    // };

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePos({ x: clientX, y: clientY });

      // console.log('rfid not working');
      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        // console.log('rfid working');

        // Dot follows exactly
        if (cursorDotRef.current) {
          cursorDotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
        }
        // Gradient ring lags slightly (0.95 factor) for smooth trailing
        if (cursorRingRef.current) {
          const lagX = clientX * 0.95 + (cursorRingRef.current._x || clientX) * 0.05;
          const lagY = clientY * 0.95 + (cursorRingRef.current._y || clientY) * 0.05;
          cursorRingRef.current._x = lagX;
          cursorRingRef.current._y = lagY;
          cursorRingRef.current.style.transform = `translate3d(${lagX}px, ${lagY}px, 0)`;
        }
      });
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseOver = (e) => {
      const target = e.target;
      if (target.matches('a, button, [role="button"], .clickable')) {
        const rect = target.getBoundingClientRect();
        setHoveredRect(rect);
        setIsHovered(true);
      }
    };
    // window.addEventListener('mousemove', (e) => console.log(e.clientX, e.clientY));

    const onMouseOut = (e) => {
      const target = e.target;
      if (target.matches('a, button,[role="tablist"], [role="button"], .clickable')) {
        setIsHovered(false);
        setHoveredRect(null);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // In the useEffect that updates bracket positions
  useEffect(() => {
    if (isHovered && hoveredRect && bracketLeftRef.current && bracketRightRef.current) {
      const padding = 12; // distance from element edges
      const centerY = hoveredRect.top + hoveredRect.height / 2;
      const leftX = hoveredRect.left - padding;
      const rightX = hoveredRect.right + padding;

      // Left bracket
      bracketLeftRef.current.style.left = `${leftX}px`;
      bracketLeftRef.current.style.top = `${centerY}px`;

      // Right bracket
      bracketRightRef.current.style.left = `${rightX}px`;
      bracketRightRef.current.style.top = `${centerY}px`;
    }
  }, [isHovered, hoveredRect]);

  // Update bracket positions when hovered
  // useEffect(() => {
  //   if (isHovered && hoveredRect && bracketLeftRef.current && bracketRightRef.current) {
  //     const padding = 12; // distance from element edges
  //     const leftX = hoveredRect.left - padding;
  //     const leftY = hoveredRect.top + hoveredRect.height / 2;
  //     const rightX = hoveredRect.right + padding;
  //     const rightY = hoveredRect.top + hoveredRect.height / 2;

  //     bracketLeftRef.current.style.transform = `translate3d(${leftX}px, ${leftY}px, 0)`;
  //     bracketRightRef.current.style.transform = `translate3d(${rightX}px, ${rightY}px, 0)`;
  //   }
  // }, [isHovered, hoveredRect, mousePos]); // mousePos not used but included for completeness

  return (
    <>
      {/* Global style to hide default cursor */}
      {/* <style>{`
          `}</style> */}

      {/* Gradient Trailing Ring (Option 2) */}
      <Box
        ref={cursorRingRef}
        sx={{
          position: 'fixed',
          top: -20,
          left: -20,
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(70,71,211,0.2) 0%, rgba(129,38,207,0.1) 70%, transparent 100%)',
          backdropFilter: 'blur(2px)',
          border: '1px solid rgba(83,221,252,0.3)',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform',
          transition: 'width 0.3s, height 0.3s, opacity 0.2s',
          opacity: isHovered ? 0 : 0.8,
          ...(isClicked && {
            width: 50,
            height: 50,
            background: 'radial-gradient(circle, rgba(129,38,207,0.3) 0%, transparent 80%)',
          }),
        }}
      />

      {/* Minimal Dot (Option 1) */}
      <Box
        ref={cursorDotRef}
        sx={{
          position: 'fixed',
          top: -4,
          left: -4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#4647d3',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          transition: 'transform 0.1s ease-out, width 0.2s, height 0.2s, background 0.2s, border 0.2s',
          ...(isHovered && {
            width: 16,
            height: 16,
            backgroundColor: 'transparent',
            border: '2px solid #53ddfc',
          }),
          ...(isClicked && {
            transform: 'scale(0.8)',
          }),
        }}
      />
      <div
        ref={bracketLeftRef}
        className={`custom-cursor-bracket ${isHovered ? 'visible' : ''}`}
      >
        {'<'}
      </div>
      <div
        ref={bracketRightRef}
        className={`custom-cursor-bracket ${isHovered ? 'visible' : ''} ms-1`}
      >
        {'/>'}
      </div>
    </>
  );
};