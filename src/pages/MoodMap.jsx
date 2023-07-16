import AnimatedAvatar from "../components/AnimatedAvatar";
import Emoji from "../components/Emoji";
import Thermometer from "../components/Thermometer";
import WordOfTheDay from "../components/WordOfTheDay";
import ReminderQuote from "../components/ReminderQuote";
import { useGet } from "../hooks/useGet";
import axios from "axios";

export default function MoodMap() {
  const { data: entries} = useGet(); 
  const sortedEntries = entries
    ?.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )
    .slice(0, 7)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)); 

  const uuid = localStorage.getItem("userId");

  function moodPercentage() {
    if (!sortedEntries || sortedEntries.length === 0) {
      return 0;
    }
    let totalMood = 0;
    sortedEntries.forEach((entry) => {
      totalMood += entry.mood; 
    });

    const averageMood = totalMood / sortedEntries.length; 
    return averageMood * 25; 
  }

  return (
    <div className="flex flex-col justify-around items-center w-full h-full">
      <h1
        data-testid="h1"
        className="text-4xl sm:text-4xl text-center px-4 mt-4"
      >
        My Week
      </h1>
      <div className="flex justify-between">
        {sortedEntries
          ? sortedEntries.map((entry) => (
              <Emoji
                data-testid="emoji-component"
                key={entry.id}
                mood={entry.mood}
                date={new Date(entry.createdAt).toLocaleString("en-GB", {
                  weekday: "short",
                })}
              />
            ))
          : null}
      </div>
      <WordOfTheDay data-testid="word-of-the-day" />
      <div className="flex w-full justify-evenly mt-4">
        <Thermometer mood={moodPercentage()} />
        <div className="flex flex-row relative">
          <div className="flex flex-wrap mb-32 text-center items-center justify-center w-36 sm:w-44 sm:max-h-48 sm:max-w-48 bg-contain bg-no-repeat bg-center bg-[url('/speech-bubble.avif')]">
            <ReminderQuote />
          </div>
          <div className="transform -scale-x-100 mt-36 sm:mt-40 mr-4 sm:mr-0">
            <AnimatedAvatar height={20} width={20} smh={32} smw={32}/>
          </div>
        </div>
      </div>
    </div>
  );
}
