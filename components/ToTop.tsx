import React, { useState, useEffect, useRef } from 'react';

type propsType = {
    scrollStepInPx: number,
    delayInMs: number
}
export default function ToTop(props: propsType) {
    const intervalRef = useRef<NodeJS.Timeout | number | undefined>();

    const [isTop, setTop] = useState(true);

    function scrollToTop() {
        setTop(false)
    }

    function StopInterval() {
        clearInterval(Number(intervalRef.current));
        setTop(true)
    }

    useEffect(() => {
        if (!isTop) {
            var id = setInterval(() => {

                window.scroll(0, window.pageYOffset - props.scrollStepInPx);
                if (window.pageYOffset <= 0) {
                    StopInterval()
                }
            }, props.delayInMs);
            intervalRef.current = id
        } else {
            // StopInterval()
        }

        return () => {
            id && clearInterval(id)
        };
    });
    return (

        <div title='Back to top' className='scroll'
            onClick={() => { scrollToTop() }}>
            <div className="scroll-i">
                <svg className="arrow-up" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9.27 3.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H13.5v1a1 1 0 01-1 1h-5a1 1 0 01-1-1v-1H3.654c-.875 0-1.328-1.045-.73-1.684L9.27 3.047zM6.5 15.5a1 1 0 011-1h5a1 1 0 011 1v1a1 1 0 01-1 1h-5a1 1 0 01-1-1v-1z" clipRule="evenodd"></path>
                </svg>
            </div>
            <style jsx>{`
            .scroll {
                cursor: pointer;
                opacity: 0.3;
                background-color: #000;
                text-align:center;
                position: fixed;
                bottom: 15px;
                right: 15px;
                border-radius: 5px;
                border: none;
                
              }
              .scroll:hover {
                opacity: .7;
              }
              .scroll-i{
                  width:40px;
                  height:40px;
                  line-height:40px;
              }
                .arrow-up {
                    vertical-align: text-top;
                    color: white;
                }
            `}</style>
        </div>
    );
}