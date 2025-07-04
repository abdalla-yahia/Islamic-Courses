/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as icon from '@/Components/Icons/icons'
import { LegacyRef, useEffect, useMemo, useRef, useState } from 'react';
import Stations from './Radio_Station';

export default function RadioQuran() {
    const [Radios, setRadios] = useState<Array<{ id?: string, url: string, name: string, category?: string }>>([{ url: '', name: '', category: '', id: '' }])
    const [selectedOption, setSelectedOption] = useState(Radios[0]);
    const [urlRadio, seturlRadio] = useState('')
    const [play, setplay] = useState(false)
    const [mute, SetMute] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [RadioName, setRadioName] = useState('')
    const [SearchText, SetSearchText] = useState('')
    const categories = [...new Set(Stations.map((el) => el.category))].sort((a, b) => a > b ? 1 : -1)
    const refAudio = useRef<HTMLAudioElement>() as unknown as { current: { muted: boolean | undefined, volume: number, play: () => void, pause: () => void } }
    const buttonRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    // Fetch Radios
    const fetchRadios = async () => {
        try {
            setRadios(Stations as unknown as [{ id: string, url: string, name: string, category: string }])
        } catch (error) {
            throw new Error(error as unknown as string)
        }
    }

    useEffect(() => {
        fetchRadios()
    }, [])

    useMemo(() => {
        if (RadioName) {
            document.title = `${RadioName}`;
            document.querySelector('meta[name="description"]')?.setAttribute('content', `راديو ${RadioName} خاص بالموقع الرسمي لفضيلة الشيخ الدكتور خالد منصور حفظه الله , يحتوي على المنهج العلمي لكل طالب علم يسعى إلى الإرتقاء في سلم طلب العلم الشرعي وفق منهج علمي على الكتاب والسنة`);
        }
    }, [RadioName])

    const selectNext = () => {
        const currentIndex = Radios.indexOf(selectedOption);
        const nextIndex = (currentIndex + 1) % Radios.length;
        setSelectedOption(Radios[nextIndex]);
        seturlRadio(Radios[nextIndex]?.url)
        setRadioName(Radios[nextIndex]?.name)
    };

    const selectPrev = () => {
        const currentIndex = Radios.indexOf(selectedOption);
        const prevIndex = (currentIndex - 1 + Radios.length) % Radios.length;
        setSelectedOption(Radios[prevIndex]);
        seturlRadio(Radios[prevIndex]?.url)
        setRadioName(Radios[prevIndex]?.name)
    };

    const selectMute = () => {
        refAudio.current.muted !== undefined && (refAudio.current.muted = true)
        SetMute(!mute)
    }

    const selectUnMute = () => {
        refAudio.current.muted === true && (refAudio.current.muted = false)
        SetMute(!mute)
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                toggle &&
                buttonRef.current && !buttonRef.current.contains(e.target as Node) &&
                listRef.current && !listRef.current.contains(e.target as Node)
            ) {
                setToggle(false);
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setToggle(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [toggle]);

    return (
        <div className='w-full bg-[#9f6301] rounded'>
            <div ref={buttonRef} onClick={() => { setToggle(!toggle) }} className="w-full scrollbar-hide flex flex-row-reverse justify-between items-center my-1 rounded h-fit px-2 text-white shadow bg-[#9f6301]">
                <input value={SearchText} onChange={(e) => { SetSearchText(e.target.value); setToggle(true) }} type="search" name="" id="" className='m-2 px-2 z-40 outline-none rounded bg-[#674d20] text-white w-[70%] self-center' placeholder=' بحث عن إذاعة ....' />
                <div className="flex relative justify-start items-start w-full" dir='rtl'>
                    <span className='flex justify-between items-center w-full'>
                        <span className="text-lg cursor-pointer font-bold text-primary_color">{RadioName || 'اختر الإذاعة'}</span>
                        <icon.MdKeyboardDoubleArrowDown />
                    </span>
                    {toggle && <div ref={listRef} className='bg-[#5b3f12] radiolist rounded-md absolute left-0 top-[100%] w-[80%] z-40 max-h-[400px] scrollbar-hide overflow-y-scroll text-accent_color flex justify-start items-start flex-col'>
                        {
                            Radios?.length > 0 && SearchText === '' ?
                                (
                                    <>
                                        {
                                            categories && categories.map((category, index) => {
                                                return <div key={index} className='text-2xl flex flex-col w-full justify-start items-start font-bold text-text_color border-b-2 border-red-600'>
                                                    <h1 className='bg-slate-400 w-full flex flex-col  justify-start items-start rounded-md px-2'>
                                                        {category}
                                                    </h1>
                                                    <div className='flex flex-col justify-start items-start'>
                                                        {Radios?.filter(el => el?.category === category).map((radio) =>
                                                            <span onClick={() => { seturlRadio(radio?.url); setToggle(false); setRadioName(radio?.name); setplay(true) }} className='hover:bg-background_color line-clamp-1 text-sm  text-text_color hover:text-text_color px-2 py-1 cursor-pointer rounded' key={radio?.id} title={radio?.name}>{radio?.name}</span>)
                                                        }
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </>
                                )

                                : (Radios?.filter(el => el.name.includes(SearchText))).map((radio, index) =>
                                    <span onClick={() => { seturlRadio(radio?.url); setToggle(false); setRadioName(radio?.name); setplay(true); SetSearchText('') }} className='hover:bg-background_color text-text_color hover:text-text_color px-2 py-1 cursor-pointer rounded' key={index} title={radio?.name}>{radio?.name}</span>)
                        }
                    </div>}
                </div>
            </div>
            {/*Player Radio Box */}
            <div className="w-full flex justify-evenly items-center rounded h-5 px-2 py-1 bg-[#9f6301] shadow">
                <icon.VscUnmute onClick={() => { selectMute(); setplay(false); setToggle(false) }} className={`${mute ? 'hidden' : 'block'} cursor-pointer hover:text-blue-600 shadow `} />
                <icon.VscMute onClick={() => { selectUnMute(); setplay(true); setToggle(false) }} className={`${!mute ? 'hidden' : 'block  text-gray-600'} cursor-pointer hover:text-blue-600 shadow `} />
                <icon.TbPlayerTrackNextFilled onClick={() => { selectNext(); setplay(true); setToggle(false) }} className='cursor-pointer hover:text-blue-600 shadow ' />
                <icon.FaPause onClick={() => { refAudio?.current?.pause(); setplay(false); setToggle(false) }} className={`${!play && 'text-blue-600'} cursor-pointer hover:text-blue-600 shadow `} />
                <icon.FaPlay onClick={() => { refAudio?.current?.play(); setplay(true); setToggle(false) }} className={`${play && 'text-blue-600'} cursor-pointer hover:text-blue-600 shadow `} />
                <icon.TbPlayerTrackPrevFilled onClick={() => { selectPrev(); setplay(true); setToggle(false) }} className='cursor-pointer hover:text-blue-600 shadow ' />
            </div>
            <input defaultValue={100} onChange={(e) => { refAudio.current.volume !== undefined && (refAudio.current.volume = parseInt(e.target.value) / 100) }} type="range" name="" id="" className='rotate-180 w-full h-1 shadow cursor-grabbing ' />
            <audio ref={refAudio as unknown as LegacyRef<HTMLAudioElement>} src={urlRadio} controls autoPlay className='hidden' />
        </div>
    )
}
