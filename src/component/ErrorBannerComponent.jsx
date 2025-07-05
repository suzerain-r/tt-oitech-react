import React from 'react';
import '../style/error-banner.css';

export default function ErrorBannerComponent({ message }) {
    return (
        <div className="error-banner">
            {message}
        </div>
    );
}