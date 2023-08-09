import { useEffect } from 'react';
import './Notification.css'


const Notification = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 2000);
        return () => clearTimeout(timer); 
    }, [onClose]);

    return (
        <div className="notification" onClick={onClose}>
            {message}
        </div>
    );
};


export default Notification;