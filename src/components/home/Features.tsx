import { ContentSection } from "./ContentSection";

export function Features() {
  return (
    <div className="bg-[rgb(11,29,38)]">
      <ContentSection
        id="get-started"
        number="01"
        tag="GET STARTED"
        title="What level of hiker are you?"
        description={
          <>
            Determining what level of hiker you are can be an important tool
            when planning future hikes. This hiking level guide will help you
            plan hikes according to different hike ratings set by various
            websites like All Trails and Modern Hiker. What type of hiker are
            you – novice, moderate, advanced moderate, expert, or super
            backpacker?
            <br />
            <a
              href="#read-more"
              className="text-yellow-400 font-bold block mt-4"
            ></a>
          </>
        }
        imageUrl="/src/img/01.svg"
      />

      <ContentSection
        id="equipment"
        number="02"
        tag="HIKING ESSENTIALS"
        title="Picking the right Hiking Gear!"
        description={
          <>
            The nice thing about beginning hiking is that you don't really need
            any special gear, you can probably get away with things you already
            have. Let's start with clothing. A typical mistake hiking beginners
            make is wearing jeans and regular clothes, which will get heavy and
            chafe if they get sweaty or wet.
            <br />
            <a
              href="#read-more"
              className="text-yellow-400 font-bold block mt-4"
            ></a>
          </>
        }
        imageUrl="/src/img/01 (1).svg"
        isReversed
      />

      <ContentSection
        id="beyond"
        number="03"
        tag="WHERE YOU GO IS THE KEY"
        title="Understanding Your Map & Timing"
        description={
          <>
            To start, print out the hiking guide and map. If it's raining, throw
            them in a Zip-Lock bag. Read over the guide, study the map, and have
            a good idea of what to expect. I like to know what my next landmark
            is as I hike. For example, I'll read the guide and know that say, in
            a mile, I make a right turn at the junction.
            <br />
            <a
              href="#read-more"
              className="text-yellow-400 font-bold block mt-4"
            ></a>
          </>
        }
        imageUrl="/src/img/01 (2).svg"
      />
    </div>
  );
}
