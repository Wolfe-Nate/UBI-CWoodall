import React from 'react';
import Nav from './Nav';
// import MediaQuery from 'react-responsive'

function Home() {
  return (
    <div>
      <div>
     <a className='translate' href="/German">Translate</a>
     </div>
      <Nav></Nav>
       

<div className='container'> 

  <div className='what-is-ubi'>
  <h2>WHAT IS UNIVERSAL BASIC INCOME? </h2>
  {/* <button><Link to="/German"> German </Link></button> */}
  
<h4>A society that guarantees every member a periodic payment, enough to enable life in dignity without the necessity to provide anything in return. 
</h4>
<div className='what-is-ubi' >
    <div><img src='icons/time copy.png' width={100} height={100} alt="time"/>
      <div className='text'> <div className='text-title'>PERIODIC</div>  It is a recurring payment (for example, every month) instead of a one-off grant.</div>
    </div>

    <div><img src='icons/coin copy.png' width={100} height={100} alt="coin"/>
    <div className='text'><div className='text-title'>CASH PAYMENT</div>  It is paid in cash, allowing receiptients to convert their benefits into whatever they may like.</div>
    </div>

    <div><img src='icons/world copy.png' width={100} height={100} alt="apple"/>
    <div className='text'><div className='text-title'>UNIVERSAL</div>  It is paid to all, not targeted to a specific population.</div>
    </div>

    <div><img src='icons/puzzle copy.png' width={100} height={100} alt="puzzle"/>
    <div className='text'><div className='text-title'>INDIVIDUAL</div> It is paid on an individual basis (versus house-hold based).</div>
    </div>

    <div><img src='icons/scales copy.png' width={100} height={100} alt="shield"/>
    <div className='text'><div className='text-title'>UNCONDITIONAL</div>  It involves no work requirements or sanctions; it is accessible to those in and out of work, voluntarily or not.</div>
    </div>
    </div>
  </div>
</div>

<br/>

<div className='content-vision'>
  <div id='mission'>
  We have the potential to create a system that allows us to hand the future to our children rather than handing our children a future decided for them.  
    
  </div>

<div className='content-vision-points'>
  <div>
  A transformed society of free individuals who have options, pursue meaningful action, spend more time with their families, express their creative capacities, and give back to society.
</div>
<div>
A fairer and more equitable Germany and world as a result of others emulating the German model of UBI after it has proven successful.
</div>
<div>
Through new methods of political canvassing and by promoting a new narrative around UBI, we will show citizens and leaders alike that this is the detour we must take to prepare ourselves for the future.
</div>
</div>
    </div>
    <br/>
    <br/>
    <br/>
<div className='canvassing-container'>
<table>
  <tr>
    <th>Traditional Canvassing</th>
    <th>Deep Canvassing</th>
  </tr>
  <br/>
  <tr>
    <td>Campaigns control the message by sticking to the script</td>
    <td>Campaigns use a script to help build rapport with voters</td>
  </tr>
  <tr>
    <td>Canvasser delivers a message stating facts and statistics about why the voter should support their cause</td>
    <td>Canvasser starts a two-way conversation</td>
  </tr>
  <tr>
    <td>Under 5 minutes</td>
    <td>Between 10-20 minutes</td>
  </tr>
  <tr>
    <td>Suggests issues of concern to voters</td>
    <td>Learns what matters to voters</td>
  </tr>
</table>
<br/>
<br/>
</div>


<div className='support-title'  id='support'>
  <h1>SUPPORT US and STAY CONNECTED</h1>
<div>Thank you for your interest in supporting our campaign. As a grassroots organization, we are always looking for people who want to get involved and be a part of bringing Grundeinkommen's Graswurzel into reality. Please find below the ways you can help.
</div>
</div>
<div className='support-container'>
<div className='support'>
  
<div className='support-points'>
<a  className='support-points-img' href="http://eepurl.com/icEbcT">
  <img src='icons/volunteer.png' alt="volunteer"/>
</a>
<div className='support-points-title'>VOLUNTEER</div>
Join one of our Deep Canvassing teams in key areas around Germany.
</div>
<div className='support-points'>
<a  className='support-points-img' href="http://www.google.com">
  <img src='icons/donate.png' alt="donate"/>
</a>
<div className='support-points-title'>DONATE</div>
Our campaign runs mostly on individual donations by people like you who want to see a Universal Basic Income come to Germany. 
</div>
<div className='support-points'>
<a  className='support-points-img' href="http://eepurl.com/icEbcT">
  <img src='icons/email.png' alt="email"/>
</a>
<div className='support-points-title'>EMAIL SIGN UP</div>
Add your email to our supporters' list to receive updates from our campaign, such as ongoing projects and upcoming opportunities to support us in your area.
</div>
</div>
</div>


<div className='about-us'>
<div>
<img src='icons/tom.jpg' width={300} alt="person"/>
<div className='bios-name'>Tom Peterson</div>
<div className='bio'>I am the Founder and Lead of this campaign. I am 21 years old and recently moved to Berlin to work toward promoting a UBI. My political experience is primarily as an activist here in Germany, where I have been an organizer for climate strikes in Bad Oldesloe, where I grew up. I have acquired vital experiences and resources from building a Deep Canvassing campaign at Zukunftswahl/Justice is Global Europe and my internship with Justice is Global US. In JIG US, I was a team lead on our US-China Narratives Deep Canvassing project. My goal is to see a world less tied to money and more tied to individual, community, and world progress.  </div>
</div>
<div>
<img src='icons/daphne.jpg' width={300} alt="person"/>
<div className='bios-name'>Daphne Nounesi</div>
<div className='bio'>I am 27 and based in Greece and Canada. I have always been concerned with socio-political affairs and matters of economic justice and I have a Master’s degree in Political Science from the Geneva Graduate Institute. I have experience as a deep canvasser with JIG/People’s Action and have worked with several grassroots and international organizations in grants and project management, administration, diplomacy, and research. As the campaign’s Project Manager, I worked to develop organizational strategy and oversaw task management.</div>
</div>
<div>
<img src='icons/connor.jpg' width={300} alt="person"/>
<div className='bios-name'>Connor Woodall</div>
<div className='bio'>I am 28 and from Rhode Island, USA. My role on this team is the Deep Canvassing Coordinator as well as the Head of Narrative Development. I have a Master’s in Political Science from the University of Colorado Denver. My experiences range from local and state government as well as national and international non-profit progressive organizing. I bring to this team my knowledge of the nuances of human systems, my experience with Deep Canvassing, and my ability to influence others to think differently.</div>
</div>
</div>


<div className="footer bottom-nav">
     
      <a className="bottom-nav" href={"https://github.com/lukerenoe"}>Made by Luke Renoe</a>
    </div>
    
    </div>
    
  );
}

export default Home;