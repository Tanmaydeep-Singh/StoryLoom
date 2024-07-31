import { motion } from "framer-motion"

export default function StoyCard(){
    return (
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} 
        className=" w-[175px] h-[175px] bg-mediumGreen rounded-md p-2 m-2">


        <h1>HELLO</h1>
        </motion.div>
    )
}