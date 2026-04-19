'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslations } from 'next-intl';
import { usePriceUpdateModal } from '@/hooks/usePriceUpdateModal';

export default function PriceUpdateModal() {
    const t = useTranslations('PriceUpdateModal');
    const { isOpen, close } = usePriceUpdateModal();
    const closeBtnRef = useRef(null);
    const [mounted, setMounted] = useState(false);

    // Χρειάζεται για να δουλέψει το portal μόνο client-side (αποφυγή SSR mismatch)
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = 'hidden';
        closeBtnRef.current?.focus();

        const onKeyDown = (e) => {
            if (e.key === 'Escape') close();
        };
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, close]);

    if (!mounted || !isOpen) return null;

    const modalContent = (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="priceUpdateModalTitle"
            aria-describedby="priceUpdateModalDesc"
            onClick={close}
            className="price-modal-overlay"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="price-modal-panel bg-white rounded-4 shadow-lg"
            >
                <div className="text-center p-4 p-md-5">
                    {/* Icon */}
                    <div
                        className="price-modal-icon d-inline-flex align-items-center justify-content-center rounded-circle bg-warning-subtle mb-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className="text-warning"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                        >
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                    </div>

                    <h2 id="priceUpdateModalTitle" className="h4 fw-bold mb-3">
                        {t('title')}
                    </h2>

                    <p id="priceUpdateModalDesc" className="text-secondary mb-4">
                        {t('description')}
                    </p>

                    <button
                        ref={closeBtnRef}
                        type="button"
                        className="btn btn-danger btn-lg w-100 fw-semibold"
                        onClick={close}
                    >
                        {t('cta')}
                    </button>
                </div>
            </div>

        </div>
    );

    // Render στο body μέσω portal για να αποφύγουμε parent container issues
    return createPortal(modalContent, document.body);
}
