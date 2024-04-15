'use client'

import {Header} from "@/components/Header/header";
import {Presentacion} from "@/components/Presentacion/Presentacion";
import {SobreMiComponent} from "@/components/Presentacion/SobreMiComponent";
export default function Home() {
  return (
    <main className='absolute top-0 z-[-2] h-screen w-full bg-dark-50 dark:bg-dark-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,153,255,0.25),rgba(255,255,255,0))]'>
        <Header />
        <Presentacion />
        <SobreMiComponent />
    </main>
  );
}
