import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const localValue = localStorage.getItem(key);
        let valueToInitialize;
        if (localValue) {
            valueToInitialize = JSON.parse(localValue);
        } else if (typeof initialValue === "function") {
            valueToInitialize = initialValue();
        } else {
            valueToInitialize = initialValue;
        }

        return valueToInitialize;
    });

    useEffect(() => {
        if (value === undefined) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [value, key]);

    return [value, setValue];
}
