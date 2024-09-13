"use client";

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import authMedia from '@/app/_assets/auth-img.png'

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const page = usePathname().split('/').pop();

    const leftToRightVariants = {
        initial: { x: -100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 100, opacity: 0 },
    };

    const rightToLeftVariants = {
        initial: { x: 100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: -100, opacity: 0 },
    };

    const isLoginPage = page === 'login';

    return (
        <motion.div
            className="shadow-md rounded-xl overflow-hidden bg-white flex items-center justify-center w-[80%] h-[85%]"
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {isLoginPage ? (
                <>
                    <motion.div
                        className='w-1/2 h-full'
                        variants={leftToRightVariants}
                    >
                        <Image className='w-full h-full object-cover object-center' alt='auth-media' src={authMedia} />
                    </motion.div>

                    <motion.div
                        className='w-1/2 h-full flex flex-col gap-y-10 items-center justify-center'
                        variants={rightToLeftVariants}
                    >
                        {children}
                        <p className='text-muted-foreground text-sm flex gap-x-1.5'>
                            <span>Don&apos;t have an account yet?</span>
                            <Link
                                className='text-blue-500 hover:underline'
                                href="/auth/register"
                            >
                                Register
                            </Link>
                        </p>
                    </motion.div>
                </>
            ) : (
                <>
                    <motion.div
                        className='w-1/2 h-full flex flex-col gap-y-10 items-center justify-center'
                        variants={leftToRightVariants}
                    >
                        {children}
                        <p className='text-muted-foreground text-sm flex gap-x-1.5'>
                            <span>Already have an account?</span>
                            <Link
                                className='text-blue-500 hover:underline'
                                href="/auth/login"
                            >
                                Login
                            </Link>
                        </p>
                    </motion.div>

                    <motion.div
                        className='w-1/2 h-full'
                        variants={rightToLeftVariants}
                    >
                        <Image className='w-full h-full object-cover object-center' alt='auth-media' src={authMedia} />
                    </motion.div>
                </>
            )}
        </motion.div>
    )
}
