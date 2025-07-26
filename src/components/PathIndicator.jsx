import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = ['main', 'skills', 'education', 'projects', 'contact'];

export default function PathIndicator() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  /* ----------  WHICH SECTION IS VISIBLE?  ---------- */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = SECTIONS.indexOf(e.target.id);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: 0.40 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const indicatorBody = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center
                 hidden lg:flex"          /* hide on mobile */
    >
      {SECTIONS.map((id, i) => (
        <div key={id} className="relative flex flex-col items-center">
          {/* dot */}
          {/* Tooltip */}
          <AnimatePresence>
            {hovered === i && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 8 }}
              exit={{ opacity: 0, x: -8 }}
              className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-black px-3 py-1 text-xs text-white shadow-lg"
              transition={{ duration: 0.2 }}
            >
            Go to {id.charAt(0).toUpperCase() + id.slice(1)}
            </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            onClick={() =>
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
            }
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}

            animate={{
              backgroundColor:
                i === active || i < active ? '#864ab2' : '#9CA3AF',
              scale: i === active ? 1.35 : 1,
            }}
            className="w-3 h-3 rounded-full cursor-pointer"
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          />
          {/* line */}
          {i !== SECTIONS.length - 1 && (
            <motion.div
              animate={{ backgroundColor: i < active ? '#864ab2' : '#9CA3AF' }}
              className="w-[2px] h-10"
            />
          )}
        </div>
      ))}
    </motion.div>
  );

  /* --------------------------------------------------
     Don’t show when the first section is active
  -------------------------------------------------- */
  return (
    <AnimatePresence>
      {active !== 0 && indicatorBody /* ← hidden on main */ }
    </AnimatePresence>
  );
}