import { Component } from '@angular/core';

@Component({
  selector: 'publishing/Kollationsvorgang_mit_eHinman',
  template: `
    <br/><h1><em>eHinman &ndash; Kollationstool für Musikdrucke </em></h1>
<p>&nbsp; </p> <p class="center"> <font size="4"> Schon in den 1940-er Jahren wurde in der Shakespeare-Forschung für den meist mühsamen Vergleich unterschiedlicher Auflagen eine Apparatur entwickelt, die über ein kompliziertes  Beleuchtungsfahren mit Hilfe von Spiegeln die Seiten zweier Exemplare so übereinanderblendete, dass Eingriffe in die Platten leicht erkennbar waren. Dieses von Charlton Hinman entwickelte und patentierte Verfahren („Hinman-Collator“) gab den Anstoß zur Entwicklung eines musikbezogenen „eHinman“, der den elektronischen Vergleich von Mehrfachabzügen historischer Druckplatten erlaubt, aber auch in modernem Notensatz in Korrekturprozessen einsetzbar ist. <br/>

Ein vergleichbares Tool hat vor einigen Jahren bereits Laurent Pugin im Rahmen des Aruspix-Projekts an der McGill University entwickelt – dort für Musikdrucke des 16./17. Jahrhunderts. Das Verfahren ist ähnlich (Übereinanderblenden der unterschiedlich eingefärbten Einträge der Seiten, um Identität und Varianz auf einen Blick erkennen zu können), zielt aber als Vorstufe eines Optical Music Recognition-Prozesses letztlich auf die komplette Erfassung der Inhalte und ihrer Varianten, was im Bereich der älteren Musiküberlieferung angesichts des beschränkteren Zeichenvorrats eher realisierbar ist. <br/>

Das nun im Rahmen der im ZenMEM entwickelten Werkzeuge für digitale Musikedition entstehende eHinman-Tool zielt dagegen auf einen Vergleich von Musik auch des 18.-20. Jahrhunderts, d.h. Musik mit einer größeren Zeichendichte (Artikulation, Dynamik, Bogensetzung usw.), die feingranularere Vergleichsmöglichkeiten erfordert (auch im Hinblick auf Schlüsselformen, Balkensteigungen, Notenabstände usw.). Daher genügt in vielen Fällen nicht die simple Überblendung transparenter Vorlagen, sondern durch die Beanspruchung der Druckplatten bei wiederholten Nachdrucken sind auch vertikale und horizontale bzw. perspektivische Korrektur- und Skalierungsmöglichkeiten erforderlich. Darüber hinaus soll das Werkzeug auch dazu dienen, bei zeilenfall-identischem Nachstich mit horizontalen und vertikalen Dehnungen rascher Differenzen auffinden zu können. Dies muss sowohl auf Seitenebene als auch in Teilbereichen der Seiten funktionieren – erst damit wird das Werkzeug wirklich praxistauglich. Eine Lupenfunktion soll bei undeutlichen Sachverhalten Detailstudien erlauben. <br/>

Neben der Möglichkeit des parallelen Blätterns durch vorhandene Digitalisate in den gängigen Formaten (*.jpg, *.tiff, *.png, *.pdf) ist geplant, eine direkte Kollation von Digitalisaten zu realisieren, die von den Gedächtnisinstitutionen im IIIF-Format zur Verfügung gestellt werden. <br/>

Die bisherigen Tests mit dem Werkzeug haben bereits gezeigt, dass das Ausmaß der Eingriffe in die historischen Druckplatten erheblich größer ist als bislang angenommen. Insofern kann dieses Tool auch einen wertvollen Beitrag zur Materialitätsforschung und zur vernachlässigten Geschichte des Notendrucks leisten. Dass es daneben die Korrekturvorgänge im Bereich des Notenneusatzes wesentlich erleichtert, ist ein willkommener Nebeneffekt. </font> </p> <br/><br/>

<p class="center"><font size="6"> Bibliographie </font> <br/>
<font size="2"> Steven Escar Smith, „‘The Eternal Verities Verified’: Charlton Hinman and the Roots of Mechanical Collation“, in: <em> Studies in Bibliography </em>, 53 (2000), S. 129-161 <br/>
Steven Excar Smith, „‘Armadillos of Invention’: A Census of Mechanical Collators“, in: <em> Studies in Bibliography</em>, 55 (2002), S. 133-170<br/>
Laurent Pugin: „Aruspix: An Automatic Sourc-Comparison System“, in: <em> Music Analysis East and West</em>, hg. von Walter B. Hewlett u. Eleanor Selfridge-Field (<em>Computing in Musicology</em>,14), Cambridge (MA) 2006, S. 50-51<br/>
Laurent Pugin, „Editing Renaissance Music: The Aruspix Project“, in: <em> Digitale Edition zwischen Experiment und Standardisierung. Musik – Text – Codierung</em>, hg. von Peter Stadler und Joachim Veit (<em>Beihefte zur Editio, Internationales Jahrbuch für Editionswissenschaften</em>, Bd. 31) Tübingen 2009, S. 147–155<br/>
<br/>
Links:<br/>
<a href="http://www.aruspix.net/index.html">http://www.aruspix.net/index.html</a>
<br/>
</font></p>
  `,

  styles: [`
    .displayed {
      display:block;
      margin-left:auto;
      margin-right:auto;
      }
    .center {
      display:block;
      margin-left:5%;
      margin-right:5%;
      }
    h1 {
        text-align:center;
    }
  `],
})
export class PublicationEHinmanComponent {

}
