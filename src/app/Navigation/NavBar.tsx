'use client';
import Link from 'next/link';
import Image from 'next/image';
import HomeIcon from '../../../public/home.svg';
import OutlinedHomeIcon from '../../../public/outlined-home.svg';
import TaskIcon from '../../../public/task-square.svg';
import OutlinedTaskIcon from '../../../public/outlined-task-square.svg';
import CalendarIcon from '../../../public/calendar.svg';
import OutlinedCalendarIcon from '../../../public/outlined-calendar.svg';
import AddTaskIcon from '../../../public/add-square.svg';
import OutlinedAddTaskIcon from '../../../public/outlined-add-square.svg';
import { usePathname } from 'next/navigation';
import { home, tasks, calendar, addTask } from './EndPoints';

export default function NavBar() {
    const path = usePathname();

    return (
        <div
            className='absolute md:static 
                bottom-0 md:bottom-auto
                shadow-md md:shadow-xl transform rotate-180
            '
        >
            <nav
                className='
                    w-screen h-[64px] md:w-[64px] lg:w-[300px] md:h-screen
                    transform rotate-180
                    flex flex-row md:flex-col
                    justify-around items-center
                '
            >
                <Link
                    href={home}
                    className='nav-link ripple-parent'
                    onClick={() => {}}
                >
                    <div className='ripple' />
                    <Image
                        src={path === home ? HomeIcon : OutlinedHomeIcon}
                        alt='Home'
                        width={24}
                    />
                    <h1 className={`nav-title ${path === home ? `text-primary` : null }`}>Home</h1>
                </Link>
                <Link
                    href={tasks}
                    className='nav-link ripple-parent'
                    onClick={() => {}}
                >
                    <div className='ripple' />
                    <Image
                        src={path === tasks ? TaskIcon : OutlinedTaskIcon}
                        alt='Task'
                        width={24}
                    />
                    <h1 className={`nav-title ${path === tasks ? `text-primary` : null }`}>Tasks</h1>
                </Link>
                <Link
                    href={calendar}
                    className='nav-link ripple-parent'
                    onClick={() => {}}
                >
                    <div className='ripple' />
                    <Image
                        src={
                            path === calendar
                                ? CalendarIcon
                                : OutlinedCalendarIcon
                        }
                        alt='Calendar'
                        width={24}
                    />
                    <h1 className={`nav-title ${path === calendar ? `text-primary` : null }`}>Calendar</h1>
                </Link>
                <Link
                    href={addTask}
                    className='nav-link ripple-parent'
                    onClick={() => {}}
                >
                    <div className='ripple' />
                    <Image
                        src={
                            path === addTask ? AddTaskIcon : OutlinedAddTaskIcon
                        }
                        alt='Add Task'
                        width={24}
                    />
                    <h1 className={`nav-title ${path === addTask ? `text-primary` : null }`}>Add Task</h1>
                </Link>
            </nav>
        </div>
    );
}
