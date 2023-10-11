import { useRef, useEffect } from 'react';

export default function useInterval(callback:any = ()=>{}, delay:number=3000) {
    const stableCallback = useRef(callback);

    useEffect(() => {
        stableCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => stableCallback.current();

        if (typeof delay !== 'number') return;

        const t = setInterval(tick, delay);

        return () => clearInterval(t);
    }, [delay]);
}