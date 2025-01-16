"use client";

import clsx from "clsx";
import { title } from "../primitives";
import { Title } from "../title";
import { motion } from 'framer-motion'

const AboutTitle = () => {
    return (
        <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} whileInView={{ opacity: 1 }} className={clsx(title(), "flex-1 flex items-center my-10 gap-5 px-2")}>
            <h2 className={'text-nowrap text-secondary'}>
                About Us
            </h2>
            <motion.div className='h-0.5 bg-secondary bg-opacity-20' initial={{ width: 0 }} transition={{ duration: 2 }} whileInView={{ width: '100%' }} />
        </motion.div>
    )
}

export default AboutTitle