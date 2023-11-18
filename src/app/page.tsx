import Image from "next/image"
import PersonImage from '@/../public/Person.jpg'
import tailwindColors from "../../colors"
import Container from "./components/Container"
import { IoMdSettings } from "react-icons/io";

export default function Home() {
    return <Container 
        TopBar = {TopBar()}
        Children={Content()}
    />
}

function TopBar() {
    const foregroundColor = tailwindColors.foreground
    return <div className='
        flex flex-row h-[100px] w-full
    '>
        <Image src={PersonImage} height={75} alt='null' 
            className="rounded-full"
        />
        <div className='flex flex-col my-auto ml-3'>
            <h3 className=''>Good Morning</h3>
            <h2 className=''>UNNAMED</h2>
        </div>
        <IoMdSettings size={30} className='fill-foreground-light dark:fill-foreground-dark ml-auto h-full' />

    </div>
}

function Content() {
    return <div className="mt-[120px] flex flex-col">
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
        <h5>ABC</h5>
    </div>
}