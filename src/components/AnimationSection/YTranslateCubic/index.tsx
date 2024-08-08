import { useRef } from "react";
import { useInView } from "framer-motion";

const YTranslateCubic = ({ children }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className=" my-10 md:mt-20" style={{
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
