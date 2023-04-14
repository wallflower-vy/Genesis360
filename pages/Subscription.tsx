import SubScriptionHeader from '@/Components/Dashboard/SubScriptionHeader'
import {useState} from 'react'
import React from 'react'
import OtherSubscription from './OtherSubscription';
import CurrentSubscription from './CurrentSubscription';



const Subscription = () => {
  const [subscription, setsubscription] = useState('subscription');

  const handleLinkClick = (link: string) => {
    setsubscription(link);
  };
  const renderContent = () => {
    switch (subscription) {
      case 'subscription':
        return <CurrentSubscription />;
      case 'other':
        return <OtherSubscription />;
      
      default:
        return null;
    }
  };
  return (
    <div>
        <SubScriptionHeader onClickLink={handleLinkClick} activeLink={subscription} />
        {renderContent()}
        
      
     
    </div>
  )
}

export default Subscription