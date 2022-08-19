import React from 'react';
import Nav from './Nav';
import Image from 'react-bootstrap/Button';
import Footer from './Footer';
// import Apple from '../Icons'
function Header() {
  return (
    
    <div className="header">
      <Nav></Nav>
    
<div className='container'> 
  <div className='what-is-ubi'>
  <h2>WHAT IS UNIVERSAL BASIC INCOME? </h2>

<h4>A society that guarantees every member a periodic payment, enough to enable life in dignity without the necessity to provide anything in return. 
</h4>
<div className='what-is-ubi' >
    <div
    
    ><img src='icons/time.png' width={100} height={100} alt="time"/>
      <div className='text'>PERIODIC <br/> It is a recurring payment (for example, every month) instead of a one-off grant.</div>
    </div>
    <div><img src='icons/coin.png' width={100} height={100} alt="coin"/>
    <div className='text'>CASH PAYMENT <br/> It is paid in cash, allowing receiptients to convert their benefits into whatever they may like.</div>
    </div>
    <div><img src='icons/apple.png' width={100} height={100} alt="apple"/>
    <div className='text'>UNIVERSAL <br/> It is paid to all, not targeted to a specific population.</div>
    </div>
    <div><img src='icons/puzzle.png' width={100} height={100} alt="puzzle"/>
    <div className='text'>INDIVIDUAL<br/> It is paid on an individual basis (versus house-hold based).</div>
    </div>
    <div><img src='icons/shield.png' width={100} height={100} alt="shield"/>
    <div className='text'>UNCONDITIONAL <br/> It involves no work requirements or sanctions; it is accessible to those in and out of work, voluntarily or not.</div>
    </div>
    </div>
  </div>
</div>
     <div className='vision'>

A transformed society of free individuals who have options, express their creative capacities, pursue meaningful action, spend more time with their families, and give back to society. 
<br/>
<br/>
A fairer and more equitable world as a result of others emulating the German model of UBI after it has proven successful.
<br/>
<br/>
Through new methods of political canvassing and by promoting a new narrative around UBI, we will show citizens and leaders alike that this is the detour we must take to prepare ourselves for the future and create a more equitable world.
    </div>

<div className='vision'>
How to Take Action: Please join us in this fight for a better Germany and a better world. We need help preparing our campaign for its initial launch and you can assist by fundraising, assisting with developing a narrative and financing models for UBI, or by taking part in our deep canvassing campaign in 2023. There is potential for other forms of collaboration or ways to be a part of the team and we are open to ideas so please reach out if you have any. Please contact cmwoodall11@gmail.com if you have any questions or would like to speak to someone about collaborating on this campaign. 

About: (Name of organization) is the brainchild of European and American activists who sought to find a path towards a more equitable and fair economy. All of us had often felt exasperated by the sheer number of social, economic, environmental, and political problems plaguing society in our era. We sought to come up with a policy that, all though it may not fix all, will address enough of them in meaningful ways, both directly and indirectly. Lastly, it is simple enough to both understand and implement. We believe that if UBI is successful, it can turn the tide and shift our world in a more promising direction.

Experienced in the method of Deep Canvassing, our team believes in the capacity to use our knowledge and empathy to build relations, make the case for UBI, and influence how everyday people understand it; to turn otherwise unfamiliar people into diehard supporters, who will form a powerful base for the promotion of UBI in Germany.

Put the link to the case statement here. (PDF)

<h3>Our Approach: </h3>

We want to implement an unconditional basic income in Germany 
 
The core component of our campaign is Deep Canvassing.
Deep Canvassing is a form of open conversation that combines empathy, storytelling, curiosity (asking questions and seeking understanding), and a shared self-interest in one-on-one conversations to help provide an understanding of an issue through engaging their emotions and getting them to reflect. This approach is used primarily in the U.S. and has proven successful in changing attitudes about political issues. At least 10% of the people spoken to using the Deep Canvassing method change in the long term. With traditional campaigning, the rate is 1% and is not long-lasting. This is because they try to push data and statistics rather than connecting and having a conversation with the individual.

In Germany, we first want to conduct Deep Canvassing in 6 regions (2 rural, 2 suburban/small towns, and 2 metropolitans) to show that unconditional basic income is a winning issue everywhere. Afterward, we want to scale up our activities and approach parties and individuals to make the BGE the topic of the next election campaign.

</div>

<div className='vision'>
<h2>TAKE ACTION </h2>

Thank you for your interest in supporting our campaign. As a grassroots organization, we are always looking for people who want to get involved and be a part of bringing (Organization name here)  into reality. Please find below the ways you can help.

<h2>VOLUNTEER</h2>
Join one of our Deep Canvassing teams in key areas around Germany. Click here for all current opportunities.

<h2>DONATE</h2>
Thank you for considering donating to our campaign. Our campaign runs mostly on individual donations by people like you who want to see a Universal Basic Income come to Germany. Click here to donate.

<h2>EMAIL SIGN UP</h2>
Add your email to our supporters’ list so you can receive updates from our campaign, such as ongoing projects and upcoming opportunities to support us in your area.

<h2>WORK WITH US</h2>
You can find any open employment opportunities here.

</div>
<div className="footer bottom-nav">
     
      <a className="bottom-nav" href={"https://github.com/lukerenoe"}>Social-media-link</a>
      <a className="bottom-nav" href={"https://www.lrenoe.com/"}>Social-media-link</a>
      <a className="bottom-nav" href={"https://www.linkedin.com/in/luke-renoe-28b0aaa3/"}>LinkdIn</a>
    
    </div>
    
    </div>
    
  );
}

export default Header;

