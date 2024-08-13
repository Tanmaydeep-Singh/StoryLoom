import { useRef } from "react";
import { useInView } from "framer-motion";

const YTranslateCubic = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="bg-gradient-to-b from-[#010509]  via-transparent to-transparent  " style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        >
            {children}

        </section>
    );
}

export default YTranslateCubic;
