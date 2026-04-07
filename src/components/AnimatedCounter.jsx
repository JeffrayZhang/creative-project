import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ value, suffix = '', duration = 1.2 }) {
  const num = parseInt(value, 10);
  const isNum = !isNaN(num);
  const [display, setDisplay] = useState(isNum ? '0' : value);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!isNum || started.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const step = (now) => {
            const t = Math.min((now - t0) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(String(Math.round(eased * num)));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num, isNum, duration]);

  if (!isNum) return <>{value}</>;

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
