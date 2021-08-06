import React from 'react';
import Head from 'next/head';

type LayoutProps = {
    title: string,
    children: React.ReactNode,
}

export default function Layout({ title, children }:LayoutProps){
    return(
        <div className="bg-[#f5f5f5] w-full">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container mx-auto w-full pt-8 min-h-screen">
                {children}
            </main>
        </div>
    )
}