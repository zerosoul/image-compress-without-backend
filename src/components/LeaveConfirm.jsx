import React, { useEffect } from 'react';
function popup(e) {
  // Cancel the event
  e.preventDefault();
  // Chrome requires returnValue to be set
  e.returnValue = '';
  return '您的数据将不会被保存，确定离开吗？';
}
export default function LeaveConfirm({ trigger = false }) {
  useEffect(() => {
    if (trigger) {
      window.addEventListener('beforeunload', popup);
    } else {
      window.removeEventListener('beforeunload', popup);
    }
    return () => {
      window.removeEventListener('beforeunload', popup);
    };
  }, [trigger]);
  return <div></div>;
}
