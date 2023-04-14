



interface clickProps {
  activeLink: string;
  onClickLink: (link: string) => void;
}

const SubScriptionHeader = ({activeLink,onClickLink}:clickProps) => {
  
  return (
    <div className='flex gap-10 items-center'>
        <p className='font-extrabold text-[30px] text-green'>Subscription</p>
        <p  className={`${activeLink === 'subscription' ? 'activesub' : '' } p-2 text-xl font-semibold text-green cursor-pointer `}onClick={() => onClickLink('subscription')}>CurrentSubscription</p>
        <p className={`${activeLink === 'other' ? 'activesub' : '' } p-2 text-xl font-semibold text-green cursor-pointer `}  onClick={() => onClickLink('other')} >Other Subscription Packages</p>
    </div>
  )
}

export default SubScriptionHeader