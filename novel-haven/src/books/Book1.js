import "../css/Book.css";
import FullBook from "../components/FullBook.js";

const Book1 = () => {
    return (
        <div>
            <FullBook title="The Housemaid is Watching" 
            image="images/watching.jpg" 
            alt="The Housemaid Is Watching" 
            author="Freida McFadden" 
            year="2024" 
            genre="Drama" 
            extendedDescription="You must be our new neighbors! Mrs. Lowell gushes and waves across the picket fence. I clutch my daughter’s hand and smile back: but the second Mrs. Lowell sees my husband a strange expression crosses her face. In that moment I make a promise. We finally have a family home. My past is far, far behind us. And I’ll do anything to keep it that way… I used to clean other people’s houses—now, I can’t believe this home is actually mine. The charming kitchen, the quiet cul-de-sac, the huge yard where my kids can play. My husband and I saved for years to give our children the life they deserve. Even though I’m wary of our new neighbor Mrs. Lowell, when she invites us over for dinner it’s our chance to make friends. Her maid opens the door wearing a white apron, her hair in a tight bun. I know exactly what it’s like to be in her shoes. But her cold stare gives me chills… The Lowells’ maid isn’t the only strange thing on our street. I’m sure I see a shadowy figure watching us. My husband leaves the house late at night. And when I meet a woman who lives across the way, her words chill me to the bone: Be careful of your neighbors. Did I make a terrible mistake moving my family here? I thought I’d left my darkest secrets behind. But could this quiet suburban street be the most dangerous place of all?" 
            price="$17.99"
            chapter1="3"
            chapter2="7"
            chapter3="10"></FullBook>
        </div>
    );
};

export default Book1;