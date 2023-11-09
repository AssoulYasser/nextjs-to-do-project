import NavBar from '@/app/components/NavBar/index'
import HomeScreen from './components/Home';

export default function Home() {
    return (
        <main className='h-screen w-screen overflow-x-hidden
            flex flex-col
        '>
            <HomeScreen />
            <NavBar />
        </main>
    );
}
