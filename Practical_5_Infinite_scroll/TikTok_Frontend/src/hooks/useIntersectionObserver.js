import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = {}) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options
    });

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return [targetRef, isVisible];
};

export default useIntersectionObserver;
