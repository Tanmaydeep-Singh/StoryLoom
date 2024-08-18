
import FeaturedStoryCard from './FeaturedStoryCard';

export default function FeaturedStories() {
  const featuredStories = [
    {
      "id": "12",
      "title": "The Moonlit Kingdom",
      "genre": "Fantasy",
      "image": "https://i.pinimg.com/564x/d7/3d/f7/d73df74141f0f90948941b3bb3880ec3.jpg",
      "story": "In a hidden realm that only appears under the light of a full moon, a young prince named Elion discovers his destiny. The Moonlit Kingdom, a magical land filled with mythical creatures and enchanted beings, has been protected by an ancient spell that keeps it hidden from the mortal world. When the spell is broken by a malevolent sorceress seeking to conquer the kingdom, Elion must embark on a quest to restore balance. Guided by a wise old sage and accompanied by a band of loyal companions, Elion travels through enchanted forests, across shimmering lakes, and into the heart of the kingdom’s mysteries. Along the way, he learns about his own lineage and the powerful magic that runs through his veins. His journey is fraught with challenges, including battles with dark creatures and trials of courage. Ultimately, Elion must harness his newfound powers and unite the kingdom’s disparate factions to defeat the sorceress and save the realm from eternal darkness."
  },
  {
      "id": "13",
      "title": "The Quantum Paradox",
      "genre": "Science Fiction",
      "image": "https://i.pinimg.com/564x/76/eb/14/76eb1492285385f97293f7353b18c1f5.jpg",
      "story": "Dr. Lena Ortiz, a physicist working on cutting-edge quantum research, accidentally discovers a way to communicate with parallel universes. Her breakthrough reveals that her universe is just one of many, each with its own version of reality. As Lena explores these parallel worlds, she encounters alternate versions of herself and discovers that a catastrophic event is affecting all universes simultaneously. The key to preventing this disaster lies in understanding a quantum paradox that connects the universes. Lena teams up with her counterparts from different realities to unravel the paradox and find a solution. They face numerous challenges, including dealing with hostile forces from alternate universes and navigating complex quantum theories. Through their combined efforts, Lena and her allies manage to stabilize the quantum rift and prevent the collapse of all realities. The experience transforms Lena’s understanding of existence and highlights the interconnectedness of all things."
  },
  {
      "id": "14",
      "title": "The Shadow’s Edge",
      "genre": "Thriller",
      "image": "https://i.pinimg.com/564x/d1/64/fc/d164fcdf87e24167f351402bb498e2a5.jpg",
      "story": "Detective Maya Reynolds was known for her unflinching dedication to solving the toughest cases. When a series of chilling murders began plaguing the city, each crime scene marked with a cryptic symbol, Maya was called in to investigate. The murders appeared to follow a pattern, but the motive remained elusive. As Maya delved deeper into the case, she discovered that the symbol was linked to an underground organization with a history of corruption and violence. The organization, known as The Shadow’s Edge, was involved in illegal activities and had a hidden agenda. Maya’s investigation put her in danger, as she uncovered a network of deceit and betrayal that reached the highest echelons of power. She had to navigate a web of lies, with everyone around her seeming to have their own secrets. As she closed in on the truth, Maya faced a personal betrayal that threatened to undermine her resolve. In a dramatic showdown, she uncovered the leader of The Shadow’s Edge and brought the organization’s dark activities to light, restoring justice to the city and exposing the corruption that had been hidden for so long."
  }
    // Add more stories related to the genre
  ];

  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white shadow-lg">
      FEATURED STORIES
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {featuredStories.map((story) => (
        <FeaturedStoryCard
          key={story.id}
          id={story.id}
          image={story.image}
          title={story.title}
          story={story.story}
        />
      ))}
    </div>
  </div>
  
  );
}
