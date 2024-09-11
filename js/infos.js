let infoPopUp = document.getElementById("info-popup");

function openLegalNotice() {
  infoPopUp.classList.remove("d-none");
  infoPopUp.innerHTML = generateLegalNoticeHTML();
}

function generateLegalNoticeHTML() {
  return /*html*/ `
        <div class="legal-notice-content">
            <h2>Impressum</h2>
            <div class='impressum'>
            <p>Angaben gemäß § 5 DDG</p>
            <p>Anna Fritz <br> 
                Plantagenweg 13<br> 
                31303 Burgdorf <br></p>
            <p> <strong>Vertreten durch: </strong><br>
                Anna Fritz<br></p>
            <p><strong>Kontakt:</strong> <br>
                Telefon: +49 15785094457<br>
                E-Mail: <a href='mailto:anna_eida@gmx.de'>anna_eida@gmx.de</a></br></p>
                <p><strong>Haftungsausschluss: </strong><br><br><strong>Haftung für Inhalte</strong><br><br>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br><strong>Haftung für Links</strong><br><br>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br><br><strong>Urheberrecht</strong><br><br>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.<br><br><strong>Datenschutz</strong><br><br>
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br>
                <br><br><strong>Google Analytics</strong><br><br>
                Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.<br><br><strong>Google AdSense</strong><br><br>
                Diese Website benutzt Google Adsense, einen Webanzeigendienst der Google Inc., USA (''Google''). Google Adsense verwendet sog. ''Cookies'' (Textdateien), die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Google Adsense verwendet auch sog. ''Web Beacons'' (kleine unsichtbare Grafiken) zur Sammlung von Informationen. Durch die Verwendung des Web Beacons können einfache Aktionen wie der Besucherverkehr auf der Webseite aufgezeichnet und gesammelt werden. Die durch den Cookie und/oder Web Beacon erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) werden an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website im Hinblick auf die Anzeigen auszuwerten, um Reports über die Websiteaktivitäten und Anzeigen für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Das Speichern von Cookies auf Ihrer Festplatte und die Anzeige von Web Beacons können Sie verhindern, indem Sie in Ihren Browser-Einstellungen ''keine Cookies akzeptieren'' wählen (Im MS Internet-Explorer unter ''Extras > Internetoptionen > Datenschutz > Einstellung''; im Firefox unter ''Extras > Einstellungen > Datenschutz > Cookies''); wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</p><br> 
                <!-- Website Impressum von <a href="https://www.impressum-generator.de">impressum-generator.de</a> -->
        </div>
   `;
}

function openControlLayout() {
  infoPopUp.classList.remove("d-none");
  infoPopUp.innerHTML = generateControlLayoutHTML();
}

function generateControlLayoutHTML() {
  return /*html*/ `
        <h1>Control Layout</h1>
        <div class="layout-content">
            <div class="panel-icon-cont">
                <img class="panel-icon" src="../img/icons/arrow-left.svg" alt="arrow left">
            </div>
            <div class="panel-icon-cont">
                <img class="panel-icon" src="../img/icons/arrow-right.svg" alt="arrow left">
            </div>
            <div class="panel-icon-cont">
                <img class="panel-icon" src="../img/icons/space-key.svg" alt="arrow left">
            </div>
            <div class="panel-icon-cont">
                <h2 class="white">D</h2>
                <!-- <img class="panel-icon" src="../img/icons/arrow-left.svg" alt="arrow left"> -->
            </div>
        </div>
    `;
}

function openPepeStory() {
    infoPopUp.classList.remove("d-none");
    infoPopUp.innerHTML = generatePepeStoryHTML();
  }  

function generatePepeStoryHTML() {
    return /*html*/ `
          <div class="pepe-story">
              <h2>Pepe Peligroso<br> & <br>the Invasion of <br>El pollo loco</h2>
              <div class=''>
              <p>High up in the sun-scorched heights of the Sierra Madre lies a small, almost forgotten village called Real de Catorce. Once a magnificent silver mining town, its people toiled deep beneath the earth in search of fortune. But as silver prices plummeted and the mines dried up, the town’s glory faded away. Today, it’s a ghost town, surrounded by the unforgiving desert of San Luis Potosí, with only a handful of inhabitants left, living in quiet harmony with the past – until that fateful day when everything changed.<br><br>
                One morning, an ominous clucking echoed through the dusty streets. The villagers awoke in fear as hundreds of chickens descended upon the town. But these were no ordinary chickens. They were faster, more aggressive, and deadlier than anything anyone had ever seen. Leading them was the legendary <strong>El Pollo Loco</strong> – a colossal, monstrous creature that seemed to spawn an endless wave of new chickens, as if sent by the depths of hell itself.<br><br>
                No one dared to face the crazed chicken army. The villagers fled, barricading themselves in their homes or hiding in the abandoned mines. But one man stayed behind – the brave Pepe Peligroso, an unassuming yet fiery-hearted soul with the courage of a hero. Pepe was the owner of the town’s last remaining factory, where he had once produced spicy salsa bottles to sell to the few tourists who wandered into the ghost town.<br><br>
                Pepe knew he had no choice. These chickens weren’t just a nuisance – they were a threat to the entire village. While the others cowered in fear, Pepe resolved to take matters into his own hands. Luckily, he had an unusual weapon: his salsa factory. He realized that the fiery salsa he produced in vast quantities could be the perfect ammunition against the chicken invasion. With the power of chili heat, he could drive the crazed chickens away – or at least slow them down long enough to save the village.<br><br>
                The chickens, however, underestimated Pepe Peligroso. Armed with salsa sauce-bottles and secret fiery recipes known only to him, Pepe took on the rampaging chicken army. Every salsa shot he fired sizzled through the air, and the chickens recoiled as though whipped by flames. But Pepe knew that stopping the smaller chickens wasn’t enough – he had to defeat <strong>El Pollo Loco</strong>, the source of this strange invasion.<br><br>
                Join Pepe Peligroso on his wild mission to save the village and defeat <strong>El Pollo Loco</strong>. Use spicy salsa weapons, build new gadgets, and discover the chicken army’s weaknesses. It’s a race against time – and against a clucking horde. But with courage, humor, and plenty of salsa, Pepe will triumph.<br><br>
                Because one thing is certain: in Real de Catorce, things are about to get very, very hot.</p>
          </div>
     `;
  }
  
