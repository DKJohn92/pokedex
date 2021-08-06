import React from 'react'
import BackArrowPng from '../assets/arrow.png'
import Image from 'next/image';
import Link from 'next/link'

export default function BackArrow() {
    return (
        <div className="absolute left-12 pt-4">
            <Link href="/">
                <a  className="flex">
                    <Image height="24" width="24" src={BackArrowPng} alt="Back"/>
                    <span className="pl-6">Back to PokeDex</span>       
                </a>
            </Link>
        </div>
    )
}
