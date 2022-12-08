import React from 'react';

import Nav from './Nav'; //english nav bar

function German() {
    return (
        <div className='body'>
            <Nav></Nav>

            <div className='main-container'>
                <div className='what-is-ubi'>
                    <h2>WAS IST DAS BEDINGUNGSLOSE GRUNDEINKOMMEN? </h2>


                    <h4>Eine Gesellschaft, die es jedem Mitglied garantiert Zyklische Zahlungen zu erhalten, die
                        ausreichen in Würde zu leben, ohne etwas beitragen zu müssen.
                    </h4>
                    <div className='what-is-ubi'>
                        <div><img src='public/assets/images/time copy.png' width={100} height={100} alt="time"/>
                            <div className='text'>
                                <div className='text-title'>ZYKLISCH</div>
                                Es ist eine sich wiederholende Zahlung (z.B. Monatlich) anstelle einer einmaligen
                                Förderung.
                            </div>
                        </div>


                        <div><img src='public/icons/coin copy.png' width={100} height={100} alt="coin"/>
                            <div className='text'>
                                <div className='text-title'>GELD ZAHLUNG</div>
                                Es wird in bar ausgezahlt, so dass die Empfänger ihre Bedürfnisse ohne Bedingungen
                                erfüllen können.
                            </div>
                        </div>

                        <div><img src='https://grundeinkommens-de.s3.us-west-2.amazonaws.com/world+copy.png' width={100} height={100} alt="apple"/>
                            <div className='text'>
                                <div className='text-title'>UNIVERSELL</div>
                                Es wird an jeden gezahlt, nicht abgezielt auf einen bestimmten Bevölkerungsteil.
                            </div>
                        </div>

                        <div><img src='public/icons/puzzle copy.png' width={100} height={100} alt="puzzle"/>
                            <div className='text'>
                                <div className='text-title'>INDIVIDUELL</div>
                                Es wird individuell gezahlt (versus Haushaltsbasis).
                            </div>
                        </div>

                        <div><img src='public/icons/scales copy.png' width={100} height={100} alt="shield"/>
                            <div className='text'>
                                <div className='text-title'>BEDINGUNGSLOS</div>
                                Es beinhaltet keine Anforderungen wie Arbeit oder Sanktionen;
                                es ist sowohl für Arbeitende, Arbeitssuchende und Arbeitlose zugänglich.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br/>

            <div className='content-vision'>
                <div id='mission'>
                    Wir haben das Potenzial, ein System zu erschaffen, welches uns ermöglicht,
                    unseren Kindern die Zukunft zu übergeben, anstatt Ihnen eine Zukunft zu geben,
                    die für sie entschieden wurde.
                </div>

                <div className='content-vision-points'>
                    <div>
                        Eine transformierte Gesellschaft freier Individuen welche die Möglichkeiten haben,
                        bedeutungsvollen Einsatz zu zeigen, mehr Zeit mit ihren Familien verbringen,
                        kreative Fähigkeiten zum Ausdruck bringen und an die Gesellschaft zurückgeben.
                    </div>
                    <div>
                        Ein gerechteres Deutschland und als Folge von nachahmen eine bessere Welt.
                    </div>
                    <div>
                        Durch neue Methoden des political canvassing und Förderung einer neuen Sichtweise auf das
                        Bedingungslose Grundeinkommen werden wir Bürgern und Politikern gleichermaßen zeigen,
                        dass dies der Umweg ist, den wir gehen müssen, um uns auf die Zukunft vorzubereiten.
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
                        <td>Kampagnen kontrollieren die Botschaft, indem sie am Skript festhalten.</td>
                        <td>Kampagnen nutzen ein Skript um Beziehungen zum Wähler aufzubauen.</td>
                    </tr>
                    <tr>
                        <td>Canvasser liefern eine Aussage unterstreichen diese mit Fakten und Statistiken weshalb der Wähler sie unterstützen sollte.
                        </td>
                        <td>Canvasser beginnen eine zweiwege Konversation</td>
                    </tr>
                    <tr>
                        <td>Unter 5 Minuten</td>
                        <td>Zwischen 10-20 Minuten</td>
                    </tr>
                    <tr>
                        <td>Suggests issues of concern to voters</td>
                        <td>Learns what matters to voters</td>
                    </tr>
                </table>
                <br/>
                <br/>
            </div>


            <div className='support-title' id='support'>
                <h1>UNTERSTÜTZE UNS und BLEIB IN VERBINDUNG</h1>
                <div>Vielen Dank für Ihr Interesse unsere Kampagne zu unterstützen.
                    Als eine grassroots organization suchen wir immer nach Personen,
                    die sich beteiligen möchten *(((Organization name here)))* zu realisieren.

                    Nachfolgend finden Sie Möglichkeiten, wie Sie helfen können.
                </div>
            </div>
            <div className='support-container'>
                <div className='support'>

                    <div className='support-points'>
                        <a className='support-points-img' href="http://eepurl.com/icEbcT">
                            <img src='https://grundeinkommens-de.herokuapp.com/volunteer.png' alt="volunteer"/>
                        </a>
                        <div className='support-points-title'>VOLUNTEER</div>
                        Tritt einem unserer Deep Canvassing Gruppen in Schlüsselgebieten in Deutschland bei.
                    </div>
                    <div className='support-points'>
                        <a className='support-points-img' href="http://www.google.com">
                            <img src='../public/icons/donate.png' alt="donate"/>
                        </a>
                        <div className='support-points-title'>SPENDEN</div>
                        Unsere Kampagne verlässt sich größtenteils auf individuelle Spenden vom Menschen wie Ihnen,
                        die das Bedingungslose Grundeinkommen in Deutschland realisieren möchten.
                    </div>
                    <div className='support-points'>
                        <a className='support-points-img' href="http://eepurl.com/icEbcT">
                            <img src='../public/icons/email.png' alt="email"/>
                        </a>
                        <div className='support-points-title'>EMAIL ANMELDEN</div>
                        Füde deine E-Mail Addresse zu unserer Unterstützerliste hinzu,
                        um Aktualisierungen unserer Kampagne zu erhalten, wie laufend Projekte und bevorstehende Möglichkeiten,
                        uns in Ihrer Nähe zu unterstützen.
                    </div>
                </div>
            </div>


            <div className='about-us'>
                <div>
                    <img
                        src='../public/icons/tom.jpg'
                        alt="person"/>
                    <div className='bios-name'>Tom Peterson</div>
                    <div className='bio'>I am the Founder and Lead of this campaign. I am 21 years old and recently moved to Berlin to work toward promoting a UBI. My political experience is primarily as an activist here in Germany, where I have been an organizer for climate strikes in Bad Oldesloe, where I grew up. I have acquired vital experiences and resources from building a Deep Canvassing campaign at Zukunftswahl/Justice is Global Europe and my internship with Justice is Global US. In JIG US, I was a team lead on our US-China Narratives Deep Canvassing project. My goal is to see a world less tied to money and more tied to individual, community, and world progress.
                    </div>
                </div>
                <div>
                    <img
                        src='../public/icons/daphne.jpg'
                        alt="person"/>
                    <div className='bios-name'>Daphne Nounesi</div>
                    <div className='bio'>I am 27 and based in Greece and Canada. I have always been concerned with socio-political affairs and matters of economic justice and I have a Master’s degree in Political Science from the Geneva Graduate Institute. I have experience as a deep canvasser with JIG/People’s Action and have worked with several grassroots and international organizations in grants and project management, administration, diplomacy, and research. As the campaign’s Project Manager, I worked to develop organizational strategy and oversaw task management
                    </div>
                </div>
                <div>
                    <img
                        src='../public/icons/connor.jpg'
                    alt="person"/>
                    <div className='bios-name'>Connor Woodall</div>
                    <div className='bio'>I am 28 and from Rhode Island, USA. My role on this team is the Deep Canvassing Coordinator as well as the Head of Narrative Development. I have a Master’s in Political Science from the University of Colorado Denver. My experiences range from local and state government as well as national and international non-profit progressive organizing. I bring to this team my knowledge of the nuances of human systems, my experience with Deep Canvassing, and my ability to influence others to think differently.
                    </div>
                </div>
            </div>

{/* 
            <div className="footer bottom-nav">

                <a className="bottom-nav" href={"https://github.com/lukerenoe"}>Social-media-link</a>
                <a className="bottom-nav" href={"https://www.lrenoe.com/"}>Social-media-link</a>
                <a className="bottom-nav" href={"https://www.linkedin.com/in/luke-renoe-28b0aaa3/"}>LinkdIn</a>

            </div> */}

            </div>

    
    );
}

export default German;
