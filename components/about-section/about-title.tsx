"use client";

import clsx from "clsx";
import { title } from "../primitives";
import { Title } from "../title";
import { motion } from 'framer-motion'

const AboutTitle = () => {
    return (
        <div className={clsx(title(), "flex-1 flex items-center my-10 gap-5 px-2")}>
            <Title className={'text-nowrap text-primary'}>
                About Us
            </Title>
            <motion.div className='h-0.5 bg-primary bg-opacity-20' initial={{ width: 0, opacity: 0 }} transition={{ duration: 2 }} whileInView={{ width: '100%', opacity: 1 }} />
        </div>
    )
}

export default AboutTitle