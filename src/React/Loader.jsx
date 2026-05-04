import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./css/loader.css";

let loaderAlreadyShown = false;

export default function Loader({ children }) {
  const [loading, setLoading] = useState(() => !loaderAlreadyShown);

  useEffect(() => {
    if (loaderAlreadyShown) {
      setLoading(false);
      return;
    }

    loaderAlreadyShown = true;

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  const savedTheme = localStorage.getItem("theme");
  const darkMode = savedTheme !== "light";

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            className={`loader-screen ${
              darkMode ? "loader-dark" : "loader-light"
            }`}
            initial={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 1.45,
              filter: "blur(18px)",
            }}
            transition={{
              duration: 1.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              className="loader-content"
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -30,
                scale: 1.08,
              }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1>rohith.dev</h1>

              <div className="loader-line">
                <span></span>
              </div>

              {/* <p>Building experiences</p> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}