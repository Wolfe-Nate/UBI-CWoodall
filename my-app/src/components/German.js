import React from 'react';
import Nav from './Nav'; //english nav bar

function German() {
    return (
        <div>
            <Nav></Nav>

            <div className='main-container'>
                <div className='what-is-ubi'>
                    <h2>WAS IST DAS BEDINGUNGSLOSE GRUNDEINKOMMEN? </h2>

                    <h4>Eine Gesellschaft, die es jedem Mitglied garantiert Zyklische Zahlungen zu erhalten, die
                        ausreichen in Würde zu leben, ohne etwas beitragen zu müssen.
                    </h4>
                    <div className='what-is-ubi'>
                        <div><img src='icons/time copy.png' width={100} height={100} alt="time"/>
                            <div className='text'>
                                <div className='text-title'>ZYKLISCH</div>
                                Es ist eine sich wiederholende Zahlung (z.B. Monatlich) anstelle einer einmaligen
                                Förderung.
                            </div>
                        </div>

                        <div><img src='icons/coin copy.png' width={100} height={100} alt="coin"/>
                            <div className='text'>
                                <div className='text-title'>GELD ZAHLUNG</div>
                                Es wird in bar ausgezahlt, so dass die Empfänger ihre Bedürfnisse ohne Bedingungen
                                erfüllen können.
                            </div>
                        </div>

                        <div><img src='icons/world copy.png' width={100} height={100} alt="apple"/>
                            <div className='text'>
                                <div className='text-title'>UNIVERSELL</div>
                                Es wird an jeden gezahlt, nicht abgezielt auf einen bestimmten Bevölkerungsteil.
                            </div>
                        </div>

                        <div><img src='icons/puzzle copy.png' width={100} height={100} alt="puzzle"/>
                            <div className='text'>
                                <div className='text-title'>INDIVIDUELL</div>
                                Es wird individuell gezahlt (versus Haushaltsbasis).
                            </div>
                        </div>

                        <div><img src='icons/scales copy.png' width={100} height={100} alt="shield"/>
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
                        <a className='support-points-img' href="http://www.google.com">
                            <img src='icons/volunteer.png' alt="volunteer"/>
                        </a>
                        <div className='support-points-title'>VOLUNTEER</div>
                        Tritt einem unserer Deep Canvassing Gruppen in Schlüsselgebieten in Deutschland bei.
                    </div>
                    <div className='support-points'>
                        <a className='support-points-img' href="http://www.google.com">
                            <img src='icons/donate.png' alt="donate"/>
                        </a>
                        <div className='support-points-title'>SPENDEN</div>
                        Unsere Kampagne verlässt sich größtenteils auf individuelle Spenden vom Menschen wie Ihnen,
                        die das Bedingungslose Grundeinkommen in Deutschland realisieren möchten.
                    </div>
                    <div className='support-points'>
                        <a className='support-points-img' href="http://www.mailchimp.com">
                            <img src='icons/email.png' alt="email"/>
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
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwX4NnEoLQzUoRBuuXY-51GmaYemDy6miXdjTPaNxAg&s'
                        width={300} alt="person"/>
                    <div className='bios-name'>Connor Woodall</div>
                    <div className='bio'>Connor is an activist and organizer who has found his passion in this work and
                        the people in these spaces. He has worked in non-profit and international organizations and has
                        spent time in local, county, and state governments. With a Master's in Political Science, he has
                        become a huge proponent of system thinking and innovative ways to design our world to move
                        Humanity to a more hopeful future.
                    </div>
                </div>
                <div>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwX4NnEoLQzUoRBuuXY-51GmaYemDy6miXdjTPaNxAg&s'
                        width={300} alt="person"/>
                    <div className='bios-name'>Connor Woodall</div>
                    <div className='bio'>Connor is an activist and organizer who has worked in non-profit and
                        international organizations. He has spent time in local, county, and state governments. With a
                        Master's in Political Science, he has become a huge proponent of system thinking and innovative
                        ways to design our world to move Humanity to a more hopeful future.
                    </div>
                </div>
                <div>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwX4NnEoLQzUoRBuuXY-51GmaYemDy6miXdjTPaNxAg&s'
                        width={300} alt="person"/>
                    <div className='bios-name'>Connor Woodall</div>
                    <div className='bio'>Connor is an activist and organizer who has found his passion in this work and
                        the people in these spaces. He has worked in non-profit and international organizations and has
                        spent time in local, county, and state governments. With a Master's in Political Science, he has
                        become a huge proponent of system thinking and innovative ways to design our world to move
                        Humanity to a more hopeful future.
                    </div>
                </div>
            </div>


            <div className="footer bottom-nav">

                <a className="bottom-nav" href={"https://github.com/lukerenoe"}>Social-media-link</a>
                <a className="bottom-nav" href={"https://www.lrenoe.com/"}>Social-media-link</a>
                <a className="bottom-nav" href={"https://www.linkedin.com/in/luke-renoe-28b0aaa3/"}>LinkdIn</a>

            </div>

        </div>
    );
}

export default German;
