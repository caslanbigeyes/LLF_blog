"use client"


export const Criterion = ({ func }) => {
    const { JSDOM } = require("jsdom");

    const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
    const { document } = dom.window;

    console.log(document.querySelector("p").textContent); // 输出 "Hello world"
    console.log(func, 'func')
    function updateSunState() {
        const sun = document.getElementById('sun');
        const now = new Date();
        const hours = now.getHours();

        // 假设日出在6点，日落在18点  
        if (hours >= 6 && hours < 18) {
            sun.className = 'sun day'; // 白天  
        } else {
            sun.className = 'sun night'; // 夜晚  
        }
    }

    // 初始状态  
    updateSunState();

    // 每分钟更新一次状态（可以根据需要调整时间间隔）  
    setInterval(updateSunState, 60000);
    return (
        <div className='app' onClick={func}>
            <div className='sky'>
                <div className='background-left'></div>
                <div className='background-right'></div>
                <div id="sun" className='sun day'></div>
                <div className='buildings'>
                    <div className='building building-21'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-22'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-23'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-24'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-25'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-11'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-12'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-13'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-14'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-15'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-1'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-2'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-3'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-4'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-5'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-6'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-7'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-8'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-9'>
                        <div className='top'></div>
                    </div>
                    <div className='building building-10'>
                        <div className='top'></div>
                    </div>
                </div>
            </div>
            <div className='ground'>
                <div className='road left'></div>
                <div className='road left bis'></div>
                <div className='road right'></div>
                <div className='road right bis'></div>
                <div className='road center road-0'></div>
                <div className='road center road-1'></div>
                <div className='road center road-2'></div>
                <div className='road center road-3'></div>
                <div className='road center road-4'></div>
                <div className='road center road-5'></div>
                <div className='wave vertical left wave-0'></div>
                <div className='wave vertical left wave-1'></div>
                <div className='wave vertical left wave-2'></div>
                <div className='wave vertical left wave-3'></div>
                <div className='wave vertical left wave-4'></div>
                <div className='wave vertical left wave-5'></div>
                <div className='wave vertical right wave-0'></div>
                <div className='wave vertical right wave-1'></div>
                <div className='wave vertical right wave-2'></div>
                <div className='wave vertical right wave-3'></div>
                <div className='wave vertical right wave-4'></div>
                <div className='wave vertical right wave-5'></div>
                <div className='wave horizontal left wave-10'></div>
                <div className='wave horizontal left wave-11'></div>
                <div className='wave horizontal left wave-12'></div>
                <div className='wave horizontal left wave-13'></div>
                <div className='wave horizontal left wave-14'></div>
                <div className='wave horizontal left wave-15'></div>
                <div className='wave horizontal left wave-16'></div>
                <div className='wave horizontal left wave-17'></div>
                <div className='wave horizontal left wave-18'></div>
                <div className='wave horizontal left wave-19'></div>
                <div className='wave horizontal right wave-10'></div>
                <div className='wave horizontal right wave-11'></div>
                <div className='wave horizontal right wave-12'></div>
                <div className='wave horizontal right wave-13'></div>
                <div className='wave horizontal right wave-14'></div>
                <div className='wave horizontal right wave-15'></div>
                <div className='wave horizontal right wave-16'></div>
                <div className='wave horizontal right wave-17'></div>
                <div className='wave horizontal right wave-18'></div>
                <div className='wave horizontal right wave-19'></div>
            </div>
        </div>

    );
};