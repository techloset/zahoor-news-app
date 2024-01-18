import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import BreakingNewsAlert from "./components/News/BreakingNewsAlert";
import NewsSection from "./components/News/NewsSection";
import TopStory from "./components/TopStory";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="sm:mx-[277px] sm:max-w-[1920px] flex sm:gap-[50px] flex-col items-center">
        <TopStory
          _id="01"
          byLine="Zahoor Ahmad"
          headline="Cake meme reflects coronavirus absurdity in a world where nothing is what it seems"
          description="Earlier this month, a viral video depicting hyper-realistic cakes as everyday items had folks on social media double-guessing every other post, and sometimes even their own realities, effectively launching the next meme : “Is this real or is this cake?”"
          imageSource="https://www.nytimes.com/images/2024/01/05/arts/05lythgoe-resigns/05lythgoe-resigns-articleLarge.jpg"
          imageAlternative="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quos?"
          key={1}
          pubishedAt="2024-1-4"
          url="https://www.nytimes.com/2024/01/05/arts/television/nigel-lythgoe-sytycd-judge-sexual-assault.html"
        />
        <BreakingNewsAlert />
        <NewsSection />
      </div>
      <Footer />
    </div>
  );
}
