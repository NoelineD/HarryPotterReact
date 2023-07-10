import "./index.css";
import React, { useState } from "react";
import HarryPotter from "../assets/hpotter.webp"

const StoryHP = () => {

  return (
    <div className="StoryHPContainer"> 
     <img className="ImgHarry" src={HarryPotter} ></img> 
    <div className="mediumpContainer"> 
     <h2 id="HPstory" className="FontTitle">Harry Potter's story</h2> <br/>
     <p className="Fonts">
Harry becomes a student at Hogwarts and is sorted into Gryffindor House. He gains the friendship of Ron Weasley, a member of a large but poor wizarding family, and Hermione Granger, a witch of non-magical, or Muggle, parentage. Harry encounters the school's potions master, Severus Snape, who displays a dislike for him; the rich pure-blood Draco Malfoy whom he develops an enmity with; and the Defence Against the Dark Arts teacher, Quirinus Quirrell, who turns out to be allied with Lord Voldemort. The first book concludes with Harry's confrontation with Voldemort, who, in his quest to regain a body, yearns to gain the power of the Philosopher's Stone, a substance that bestows everlasting life. </p>
</div>
      
     <div className="mediumpContainer">
      <h2 id="Hogwarts" className="FontTitle">Hogwart's Story</h2><br/>
     <p className="Fonts"> Hogwarts School, located somewhere in the Highlands of Scotland, consisted of the large Hogwarts Castle and extensive school grounds surrounding it, which included sloping lawns, flowerbeds, vegetable patches, as well as a loch (called the Black Lake), a large dense forest (called the Forbidden Forest), several greenhouses and other outbuildings, and a full-size Quidditch Pitch. The castle was set upon huge rocks above the Black Lake. Its three highest towers were the Astronomy, Ravenclaw, and Gryffindor Towers. The castle's 142 staircases were known to change position.Hogwarts was founded around 990 A.D. by four of the greatest wizards and witches of the age: Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw, and Salazar Slytherin. They each represented an aspect of personality that they wanted to bring out in new students.[13] They also placed certain protective enchantments in place to ensure the well-being of their students.  
     </p> 
    </div> 

    <div className="Pcontainer"> 
      <h2 id="Houses" className="FontTitle">The Four Houses</h2><br/>
    <p className="Fonts">Hogwarts is divided into four houses, each bearing the last name of its founder: Godric Gryffindor, Salazar Slytherin, Rowena Ravenclaw and Helga Hufflepuff. Throughout the school year, the houses compete for the House Cup, gaining and losing points based on actions such as performance in class and rule violations. The house with the highest end-of-year total wins and has its colours displayed in the Great Hall for the following school year. Each house also has its own Quidditch team that competes for the Quidditch Cup. These two competitions breed rivalries between the houses. Houses at Hogwarts are living and learning communities for their students. Each house is under the authority of one of the Hogwarts staff members. In the early days of Hogwarts, the four founders hand-picked students for their Houses. When the founders worried how students would be selected after their deaths, Godric Gryffindor took his hat off and they each added knowledge to it, allowing the Sorting Hat to choose the students by judging each student's qualities and placing them in the most appropriate house. The student's own choices may affect the decision: the clearest example is the Hat telling Harry that he would do well in Slytherin in the first book, but ultimately selecting Gryffindor after Harry asks it not to put him in Slytherin. </p>
    </div>

    <div className="Pcontainer"> 
      <h2 id="Gryffindor" className="FontTitle">Gryffindor</h2><br/>
    <p className="Fonts">Gryffindor values courage, bravery, nerve, and chivalry. Gryffindor's mascot is the lion, and its colours are scarlet red and gold (maroon and gold on the ties and scarves). During the books, the Head of this house is the Transfiguration Professor and Deputy Headmistress, Minerva McGonagall until she becomes headmistress, and the house ghost is Sir Nicholas de Mimsy-Porpington, more commonly known as Nearly Headless Nick. According to Rowling, Gryffindor corresponds roughly to the element of fire.[9] The founder of the house is Godric Gryffindor.

   The Gryffindor common room is in one of the castle's highest towers, and its entrance is on the seventh floor in the east wing of the castle and is guarded by a painting of The Fat Lady, who is garbed in a pink dress. She permits entry only after being given the correct password, as was established in the third book, when Sirius Black tried forcing entry into the tower, only to be blocked by The Fat Lady after he could not give the correct password. In the first book, Neville Longbottom tends to forget the password and must wait near the painting until other Gryffindors arrive to open the way.</p>
    </div>

    <div className="mediumpContainer"> 
      <h2 id="Ravenclaw" className="FontTitle">Ravenclaw</h2><br/>
    <p className="Fonts">Ravenclaw values intelligence, learning, wisdom and wit.The house mascot is an eagle and the house colours are blue and bronze (blue and silver in the Harry Potter and Fantastic Beasts films and on the ties and scarves). During the books, the head of this house is the Charms teacher, Professor Filius Flitwick, and the house ghost is the Grey Lady. According to Rowling, Ravenclaw corresponds roughly to the element of air. The founder of this house is Rowena Ravenclaw.

The dormitories are in Ravenclaw Tower, on the west side of Hogwarts. The common room is round and filled with blue hangings and armchairs, has a domed ceiling painted with stars and features a replica statue of Rowena wearing her diadem. Harry also notes that Ravenclaws "have a spectacular view of the surrounding mountains". A logical riddle must be solved to gain entry, whereas the Gryffindor and Slytherin common rooms only require a password. Professor McGonagall, the head of the Gryffindor House, solves the riddle accurately. </p>
    </div>

    <div className="smallpContainer "> 
      
      <h2 id="Hufflepuff" className="FontTitle">Hufflepuff</h2><br/>
    <p className="Fonts"> Hufflepuff values hard work, patience, justice, and loyalty. The house mascot is the badger, and canary yellow and black (or golden yellow and graphite in the Fantastic Beasts films) are its colours. During the books, the Head of this house is the Herbology Professor Pomona Sprout, and the house ghost is the Fat Friar. According to Rowling, Hufflepuff corresponds roughly to the element of earth. The founder of this house is Helga Hufflepuff.

The entrance to the Hufflepuff dormitories and common room entrance is concealed in a pile of large barrels in an alcove in the corridor that holds the kitchen. To enter, one must tap the barrel two from the bottom in the middle of the second row in the rhythm of "Helga Hufflepuff". </p>
    </div>

    <div className="Pcontainer"> 
      <h2 id="Slytherin" className="FontTitle">Slytherin</h2><br/>
    <p className="Fonts">Slytherin values ambition, cunning, leadership, and resourcefulness; the Sorting Hat said in Harry Potter and the Philosopher's Stone that Slytherins will do anything to get their way. The house mascot of Slytherin is the serpent, and the house colours are green and silver. Throughout the series, until the seventh book, the Head of House is Professor Severus Snape. Then, the previous Head of House Professor Horace Slughorn comes out of retirement, re-assuming authority after Snape becomes headmaster. The ghost of Slytherin house is The Bloody Baron. According to Rowling, Slytherin corresponds roughly to the element of water. The founder of this house is Salazar Slytherin.

The Slytherin dormitories and common room are reached by speaking a password to a patch of bare stone wall in the dungeons, which causes a hidden door to open. The Sorting Hat claims that blood purity is a factor in selecting Slytherins, although this is not mentioned until the fifth book. There is no reason to believe, however, that Muggle-born students are not sorted there, merely that pure-blooded students are more desirable to that house, as there are several examples of half-bloods in the house – such as Snape and Tom Riddle/Voldemort – and Harry himself was only excluded from the house at his own insistence.</p>
    </div>

     <div className="Pcontainer">
      <h2 id="founders" className="FontTitle"> The Four founders </h2> <br/>
      <p className="Fonts" > Image des 4 personnes <br></br>
      Although the four founders cooperated well for a time, however, shortly after founding the school, Slytherin had a falling out with the other founders about blood purity, and wanted to admit only pure-blood students. He felt pure-blooded students deserved to learn magic, and those of other ancestry such as Muggle-borns and half-bloods, were unworthy. The other three founders all disagreed, especially Gryffindor. Slytherin left the school, but not before secretly building the Chamber of Secrets. He foretold that only his own heir would be able to open it once they arrived at the school, and the heir would unleash a murderous basilisk living inside to purge the school of all Muggle-born students. Despite the fact that the founders of Hogwarts were effectively in charge of the school during their time, neither of them held the title of headmaster or headmistress of the school,[15] as that was only used sometime after Slytherin's departure, and held by another wizard, who was the first person to be entrusted the stewardship of Hogwarts Castle and the surrounding grounds after the three remaining founders passed away.</p>
    </div>

      <div className="Pcontainer"><h2 id="Typicalyear" className="FontTitle"> Typical Year</h2> <br/>
      <p className="Fonts"> Term began on 1 September. Students usually reached Hogwarts via the Hogwarts Express, which left Platform 9¾ of London's King's Cross Station at 11 a.m. sharp.[1] There seemed to be other ways of entering the school, such as via broomsticks or Floo Powder, or simply Apparating to a nearby location such as Hogsmeade. Missing the Hogwarts Express for any reason was a very serious problem, but would not cost the student points as long as they got there before the term had officially started.[26] The Hogwarts Express brought the students to Hogsmeade station. First years traditionally crossed the Black Lake in boats with the gamekeeper, travelling under an opening in the rocks upon which Hogwarts was built, through a curtain of ivy, and finally into an underground harbour. The Start-of-Term Feast took place in the Great Hall. This feast included the Sorting Ceremony, followed by a few words from the current Headmaster or Headmistress. The banquet started after this, including large quantities of food and drink. The feast was closed with a few more words from the Headmaster or headmistress, including the usual "start-of-term notices". Hogwarts's school year was structured in a similar way to other non-magical schools and colleges in the UK, with a three-term year punctuated by holidays at Christmas and Easter and bounded by the long summer holiday of nine weeks. Students had the option of staying at Hogwarts for the winter and spring holidays. Those who chose to stay at the castle during the Christmas holidays did not have lessons and attended a feast on Christmas Day. Only students of the third year and above were allowed to visit Hogsmeade, the local village.</p>
      </div>
      
     
    </div>
  )
}

export default StoryHP;