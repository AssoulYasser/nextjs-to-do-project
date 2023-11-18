export default function Container(
    {TopBar, Children}: {TopBar: React.ReactNode, Children: React.ReactNode;}
) {
    return <div className='relative w-full py-3'>
            <header className={`absolute w-full px-[24px]`}>
                {TopBar}
            </header>
            <main className={`w-full mx-[16px]`}>
                {Children}
            </main>
        </div>
}
