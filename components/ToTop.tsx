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
        <button title='Back to top' className='scroll'
            onClick={() => { scrollToTop() }}>
            <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
            <style jsx>{`
            .scroll {
                opacity: 0.3;
                background-color: aqua;
                width: 40px;
                height: 40px;
                position: fixed;
                bottom: 10px;
                right: 10px;
                border-radius: 5px;
                border: none;
              }
              .scroll:hover {
                opacity: 1;
              }
                .arrow-up {
                    color: white;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-top: -9px;
                    margin-left: -5px;
                }
            `}</style>
        </button>
    );
}