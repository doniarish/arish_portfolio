import { useEffect } from 'react';

const Notification = ({ message, type, visible }) => {
  return (
    <div
      id="notification"
      className={`notification${type ? ` ${type}` : ''}${visible ? ' show' : ''}`}
    >
      {message}
    </div>
  );
};

export default Notification;
