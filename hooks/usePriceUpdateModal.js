'use client';

import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'dinopizza_price_update_seen';
// Άλλαξε το version όταν αλλάξεις το μήνυμα -> θα ξαναεμφανιστεί σε όλους
const CURRENT_VERSION = 'v1';

export function usePriceUpdateModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Τρέχει μόνο client-side
        try {
            const seen = sessionStorage.getItem(STORAGE_KEY);
            if (seen !== CURRENT_VERSION) {
                // Μικρό delay για smoother UX μετά το hydration
                const timer = setTimeout(() => setIsOpen(true), 400);
                return () => clearTimeout(timer);
            }
        } catch {
            // sessionStorage μπορεί να είναι unavailable (private mode, SSR check)
            setIsOpen(true);
        }
    }, []);

    const close = useCallback(() => {
        try {
            sessionStorage.setItem(STORAGE_KEY, CURRENT_VERSION);
        } catch {
            // sessionStorage μπορεί να είναι unavailable, αλλά το modal πρέπει να κλείσει
        }

        setIsOpen(false);
    }, []);

    return { isOpen, close };
}
