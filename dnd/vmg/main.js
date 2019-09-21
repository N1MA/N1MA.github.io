(function() {
  'use strict';

  var TYPE_LOOKS = 1;
  var TYPE_GROSS = 2;
  var TYPE_INCOMP = 3;
  var TYPE_SMELL = 4;
  var TYPE_META = 5;
  var TYPE_GENERAL = 6;
  var TYPE_LOSE = 7;
  var TYPE_DUMB = 8;
  var TYPE_LAME = 9;
  var TYPE_FAMILY = 10;

  var data = [
    { type: TYPE_LOOKS, value: "I don't know whether to use charm person or hold monster!" },
    {
      type: TYPE_LOOKS,
      value:
        "(Sung) There once was the ugliest fellow I knew, with his face twisted up and of horrid hue, but now he's taken second place, now that I have glimpsed your face!"
    },
    { type: TYPE_LOOKS, value: "You're the reason baby gnomes cry!" },
    {
      type: TYPE_LOOKS,
      value: "Ugh. What the hell is that all over your face? Oh...it's just your face!"
    },
    { type: TYPE_LOOKS, value: "I've seen more threatening geckos!" },
    {
      type: TYPE_LOOKS,
      value: 'Beauty is in the eye of the Beholder...which is what you look like. A Beholder.'
    },
    {
      type: TYPE_LOOKS,
      value: "I'm glad you're tall...It means there's more of you I can despise!"
    },
    { type: TYPE_LOOKS, value: 'Hey, have you ever been mistaken for a (insert)' },
    {
      type: TYPE_LOOKS,
      value: "Some day you'll meet a doppelganger of yourself and be disappointed!"
    },
    {
      type: TYPE_LOOKS,
      value: "You're lucky to be born beautiful, unlike me, who was born to be a liar!"
    },
    {
      type: TYPE_LOOKS,
      value: "I could say you're as ugly as an ogre, but that would be an insult to ogres!"
    },
    { type: TYPE_LOOKS, value: 'You are uglier than puking upwards.' },
    {
      type: TYPE_LOOKS,
      value: "I'm tempted to just cast Darkness on you so I don't have to look at you."
    },
    { type: TYPE_LOOKS, value: 'You look like the armpit of an unshaven bog hag!' },
    { type: TYPE_LOOKS, value: "You look like a scab on a troll's wart!" },
    { type: TYPE_LOOKS, value: 'No loot is worth having to look at you!' },
    { type: TYPE_LOOKS, value: "There is no beholder's eye in which you are beautiful!" },
    { type: TYPE_LOOKS, value: 'Your ugly face makes a good argument against raising the dead!' },
    {
      type: TYPE_LOOKS,
      value: 'When your god put teeth in your mouth, he ruined a perfectly good asshole!'
    },
    {
      type: TYPE_LOOKS,
      value: 'You look like your mother, and your mother, looks like your father!'
    },
    { type: TYPE_LOOKS, value: "Could you go get your husband, I don't like fighting ugly women!" },
    { type: TYPE_LOOKS, value: 'Did your mother cast a darkness spell to feed you!' },
    {
      type: TYPE_LOOKS,
      value: "No wonder you're hiding behind cover, I'd hide too with a face like that!"
    },
    {
      type: TYPE_LOOKS,
      value:
        "Do you have a pen? Well you'd better get back to it before the farmer knows you are missing!"
    },
    {
      type: TYPE_LOOKS,
      value: "Quick grab some fire...no wait, it's ok, it's not an actual troll!"
    },
    {
      type: TYPE_LOOKS,
      value:
        "Were you once hit by a melf's acid arrow or have you always looked like a half eaten marrow!"
    },
    {
      type: TYPE_LOOKS,
      value:
        'By looking at you, now I know what you get when you scrape out the bottom of the barrel!'
    },
    {
      type: TYPE_LOOKS,
      value:
        "I wish I still had that blindness spell, then I wouldn't have to endure that face anymore!"
    },
    {
      type: TYPE_LOOKS,
      value:
        "I was wondering what you are, you're fat enough to be an ogre, but I've never seen an ogre THAT ugly before!"
    },
    {
      type: TYPE_LOOKS,
      value:
        'By the gods your ugly, I bet your father regrets not pulling out when he had the chance!'
    },
    {
      type: TYPE_LOOKS,
      value:
        "Do you know, that if you were at a party surrounded by female zombies, the only thing you'd pull is a hamstring!"
    },
    {
      type: TYPE_LOOKS,
      value:
        "Wait, so you're the manifestation of a divine being of supreme power and malevolence, and you chose that face? Do they even have mirrors on your plane of existence!"
    },
    { type: TYPE_LOOKS, value: 'Green skin was sooo last season!' },
    { type: TYPE_LOOKS, value: 'You are uglier than a dead toad with measles!' },
    { type: TYPE_LOOKS, value: "Ooh, new monster! Oh, no sorry, it's just an ugly one." },
    { type: TYPE_LOOKS, value: "Ahhh a hideous fiend! Oh wait no, you're just ugly." },
    { type: TYPE_LOOKS, value: 'You’re the Biggest Kobold I’ve ever seen.' },
    { type: TYPE_LOOKS, value: "Damn, you're ugly enough to be collecting warlock autographs" },
    { type: TYPE_LOOKS, value: "I don't know whether to charm person or beast!" },
    { type: TYPE_LOOKS, value: "If you had any more teeth... you'd have one!" },
    {
      type: TYPE_LOOKS,
      value: "I'm not saying your fat, but when I just cast levitate you're somehow immune!"
    },
    {
      type: TYPE_LOOKS,
      value: "Look at that gentlemen, we've found the ugliest whore in the brothel!"
    },
    { type: TYPE_LOOKS, value: 'The only thing uglier than your outfit is your face!' },
    {
      type: TYPE_LOOKS,
      value:
        "I'm not saying you're fat, but you'd ride a horse rather less well than another horse would!"
    },
    {
      type: TYPE_GROSS,
      value: 'Hey, you pox ridden dung heap, I bet not even a starving vampire would go near you!'
    },
    {
      type: TYPE_GROSS,
      value: "Even evard's black tentacles wouldn't touch something as gross as you!"
    },
    {
      type: TYPE_GROSS,
      value: 'Would you like me to remove that curse? Oh my mistake, you were just born that way!'
    },
    {
      type: TYPE_GROSS,
      value: "If I were you, I'd go and get my money back for that remove curse spell!"
    },
    {
      type: TYPE_GROSS,
      value: 'Tell me, did you run away from your parents, or did they run away from you!'
    },
    { type: TYPE_GROSS, value: 'I envy people that have never met you!' },
    {
      type: TYPE_GROSS,
      value: "I'd call you breeding stock, but even farm animals have standards!"
    },
    { type: TYPE_GROSS, value: 'Even trolls find you repulsive!' },
    { type: TYPE_GROSS, value: 'What demon did your mother consort with to have you!' },
    { type: TYPE_GROSS, value: "You look like you've blown a goat, I kid you not!" },
    {
      type: TYPE_GROSS,
      value:
        'So, if the Gods are responsible for all creation, what kind of fucked up off day did they have to make you!'
    },
    { type: TYPE_GROSS, value: "Learn from your father's mistake, become a eunuch!" },
    { type: TYPE_GROSS, value: 'So, is it true the blind tarts by the docks turned you down!' },
    { type: TYPE_GROSS, value: "I would use my sword on you but I don't want any shit on it!" },
    { type: TYPE_GROSS, value: 'I wish you were clean enough to spit on you.' },
    { type: TYPE_GROSS, value: "If you were any more inbred you'd be a sandwich!" },
    {
      type: TYPE_GROSS,
      value:
        'You look like you were poured into your clothes but someone forgot to say "when" to stop!'
    },
    { type: TYPE_GROSS, value: "I'm not sure Prestidigitation is powerful enough to clean you up" },
    { type: TYPE_GROSS, value: 'is there no more room in the abyss for you?' },
    { type: TYPE_INCOMP, value: "You're like a dragon, only shit!" },
    {
      type: TYPE_INCOMP,
      value: "I swear, if you were any worse at this, you'd be doing our job for us!"
    },
    { type: TYPE_INCOMP, value: "You're like a trained ape, only, without the training!" },
    {
      type: TYPE_INCOMP,
      value: 'Well, my time of not taking you seriously is coming to a middle!'
    },
    { type: TYPE_INCOMP, value: 'Ah, I see the serfs got a hold of the weapons again!' },
    { type: TYPE_INCOMP, value: 'A wet cat is tougher than you!' },
    {
      type: TYPE_INCOMP,
      value: 'A goblin with one hand nailed to a tree would be more of a threat than you!'
    },
    {
      type: TYPE_INCOMP,
      value:
        "OMG. Why don't you give me your weapon so I can hit myself with it, because that'd be more effective than you trying it!"
    },
    {
      type: TYPE_INCOMP,
      value: "You call that an attack, I've seen dead kittens hit harder than that!"
    },
    { type: TYPE_INCOMP, value: "You're like the plague except a plague can kill!" },
    {
      type: TYPE_INCOMP,
      value: "Very impressive, I think I'll hire you out for children's parties!"
    },
    { type: TYPE_INCOMP, value: "You're like a gnome on stilts, real cute, but it's not working!" },
    {
      type: TYPE_INCOMP,
      value: "I'd say you were a worthy opponent, but I once fought a flumph wielding a dandelion!"
    },
    {
      type: TYPE_INCOMP,
      value: "If this fight gets any harder, I'll have to switch it up to folk music!"
    },
    {
      type: TYPE_INCOMP,
      value:
        'In a country where anyone can be anything, I will never understand why you chose to be mediocre!'
    },
    { type: TYPE_INCOMP, value: "I'd draw my rapier, but I wouldn't want to make you jealous!" },
    {
      type: TYPE_INCOMP,
      value: 'You remind me of a kitten I owned once. Weak, lazy, and unintelligent.'
    },
    { type: TYPE_INCOMP, value: 'The god of futile fights appreciates your devotion.' },
    { type: TYPE_INCOMP, value: "You're a disappointment to your ancestors!" },
    { type: TYPE_INCOMP, value: 'Your fighting stance looks like an unfolded lawn chair!' },
    { type: TYPE_INCOMP, value: "I'm afraid, sir, you are experiencing delusions of adequacy!" },
    { type: TYPE_INCOMP, value: "I've heard of schoolgirls with better fighting skills than you!" },
    {
      type: TYPE_INCOMP,
      value: 'You do know the pointy end is suppose to go in the other guy, right!'
    },
    {
      type: TYPE_INCOMP,
      value: 'You spell like a barbarian! Spell! I said spell! (against a caster/magic user)'
    },
    { type: TYPE_INCOMP, value: 'You have the dexterity of a rhino! And only half the looks!' },
    { type: TYPE_INCOMP, value: 'Oh such a big sword. You compensating for something!' },
    {
      type: TYPE_INCOMP,
      value: 'Just how many wands of enfeeblement do you have shoved up your ass!'
    },
    { type: TYPE_INCOMP, value: 'Well, now I know what the opposite of awesome is!' },
    { type: TYPE_INCOMP, value: 'You swing like a halfling!' },
    {
      type: TYPE_INCOMP,
      value: "I'm sorry, we were looking for an actual fight, have you seen one?"
    },
    {
      type: TYPE_INCOMP,
      value:
        'If you are going to behave like a barbarian, you could at least learn to fight like one!'
    },
    {
      type: TYPE_INCOMP,
      value:
        "Everyone is allowed to make a mistake now and then, but I feel you're abusing the privilege!"
    },
    {
      type: TYPE_INCOMP,
      value: 'There are more holes in your capabilities than in Dwarven cheese!'
    },
    {
      type: TYPE_INCOMP,
      value:
        'You have all the grace of an antelope. A pregnant antelope, but an antelope nonetheless!'
    },
    {
      type: TYPE_INCOMP,
      value:
        "You call that an attack. My great grandmother could do better than that and she's dead!"
    },
    { type: TYPE_INCOMP, value: "The only foe you've dropped is my expectations!" },
    { type: TYPE_INCOMP, value: 'You have so many weapons, yet so little skill!' },
    {
      type: TYPE_INCOMP,
      value: "I didn't think anyone could be wholly incompetent, but I stand corrected!"
    },
    { type: TYPE_INCOMP, value: "Congratulations! You're a failure." },
    { type: TYPE_INCOMP, value: 'At this rate, I will die from old age before you kill me.' },
    { type: TYPE_INCOMP, value: 'Okay, you may attack now. Wait, that WAS your attack?' },
    {
      type: TYPE_INCOMP,
      value: 'Trying to make the party laugh is supposed to be my job, not yours'
    },
    { type: TYPE_SMELL, value: 'What smells worse than a goblin? Oh yeah, you!' },
    { type: TYPE_SMELL, value: 'Your magic is as bad as your breath!' },
    { type: TYPE_SMELL, value: "Your Breath would put an otyugh off it's breakfast!" },
    {
      type: TYPE_SMELL,
      value: "What's that smell? I thought breath weapons were supposed to come out of your mouth!"
    },
    { type: TYPE_SMELL, value: 'OMG. And I thought troglodytes smelt bad!' },
    {
      type: TYPE_SMELL,
      value: 'Phew! Have you just cast stinking cloud or do you always smell like that!'
    },
    { type: TYPE_SMELL, value: 'What smells worse than a dead goblin? A live one!' },
    { type: TYPE_SMELL, value: "You're so pungent, sewers are masked by your stench." },
    {
      type: TYPE_SMELL,
      value:
        "Ugh. I never thought I'd miss the smell of dwarf! Congratulations. You've gone nose deaf."
    },
    {
      type: TYPE_SMELL,
      value: 'Sorry, I prefer not to argue with someone whose breath smells like ass!'
    },
    { type: TYPE_SMELL, value: 'Ahh. That explains the smell!' },
    { type: TYPE_SMELL, value: 'Your stench is incredible, you make even paladins wretch.' },
    {
      type: TYPE_SMELL,
      value:
        'Stand back please, the last time I smelled breath so bad, I was facing a green dragon!'
    },
    {
      type: TYPE_SMELL,
      value:
        "You smell so foul that when you die you'll end up mummified because not even your microbes will dare eat your corpse!"
    },
    { type: TYPE_META, value: 'Your mother takes up more tiles than a gelatinous cube!' },
    {
      type: TYPE_META,
      value: "You are the worst example of your class that I've ever come across!"
    },
    {
      type: TYPE_META,
      value: 'Animal friendship was the only way your parents could get puppies to play with you!'
    },
    {
      type: TYPE_META,
      value:
        "Do you know what happens to a (insert) when it fails it's save? Neither do I, but based on what happened to your comrade, my money's on 'dies horribly'!"
    },
    { type: TYPE_META, value: 'Charisma was OBVIOUSLY your dump stat!' },
    { type: TYPE_META, value: 'Your challenge rating has to be in the negatives.' },
    { type: TYPE_META, value: 'You are so damn clumsy your 0 level spells are called willtrips!' },
    { type: TYPE_META, value: "Your lack of personal hygiene doesn't require a perception check!" },
    { type: TYPE_META, value: 'You are irrelevant to the main plotline!' },
    {
      type: TYPE_META,
      value: 'You are a one dimensional character that lacks even a generic backstory!'
    },
    { type: TYPE_META, value: "You aren't being the person Mr. Rodgers thought you could be!" },
    { type: TYPE_META, value: "You monolog like a subpar 60's Batman villain!" },
    { type: TYPE_META, value: 'Your doomsday device looks like it was built by ikea!' },
    {
      type: TYPE_META,
      value:
        "If I knew darkvision meant I still had to look at your ugly mug at night I'd have rolled human!"
    },
    { type: TYPE_META, value: 'It takes you a whole day to cook minute rice!' },
    { type: TYPE_META, value: 'When you fail your next attack roll, think of me!' },
    { type: TYPE_META, value: 'What depraved DM thought up YOU?!' },
    { type: TYPE_META, value: "Doesn't anybody know not to make Constitution their dump stat?!" },
    {
      type: TYPE_META,
      value: 'I thought every humanoid had enough intelligence to have an alignment.'
    },
    { type: TYPE_META, value: 'You look so bad you give others exhaustion automatically.' },
    { type: TYPE_META, value: 'Go back to CR 0 where you belong!' },
    { type: TYPE_META, value: 'A Wild Magic Sorcerer has better control than you!' },
    { type: TYPE_GENERAL, value: "Someday, you'll go far and I hope you stay there!" },
    { type: TYPE_GENERAL, value: 'Your very existence is an insult to all!' },
    {
      type: TYPE_GENERAL,
      value: 'Whomever is willing to have sex with you, is just too lazy to jerk off!'
    },
    { type: TYPE_GENERAL, value: "If I wanted to hear something from an asshole, I'd fart!" },
    {
      type: TYPE_GENERAL,
      value:
        "I'd like to see things from your point of view, but I can't get my head that far up my arse!"
    },
    {
      type: TYPE_GENERAL,
      value:
        "Stop me if you've heard this one. The sole purpose of your existence is to serve as a speed bump on others path to greatness - okay you definitely should of stopped me by now!"
    },
    { type: TYPE_GENERAL, value: "Why don't you summon yourself some real friends!" },
    {
      type: TYPE_GENERAL,
      value:
        'You must be thrilled that you can bring joy to everyone in a room by such a simple act of leaving it!'
    },
    {
      type: TYPE_GENERAL,
      value: "Gentleman, we're in luck. Normally a man must pay admission for such entertainment!"
    },
    {
      type: TYPE_GENERAL,
      value: 'Sir, I would insult you, but mother nature has beaten me to the punch!'
    },
    {
      type: TYPE_GENERAL,
      value:
        'Somewhere out there is a tree, tirelessly producing oxygen so you can breathe. I think you owe it an apology!'
    },
    { type: TYPE_GENERAL, value: 'Believe in yourself because no one else does!' },
    {
      type: TYPE_GENERAL,
      value:
        "Well, I hear you're quite the investigator. Been looking into anything lately, apart from glory hole's!"
    },
    { type: TYPE_GENERAL, value: 'You plebeian wretch!' },
    { type: TYPE_LOSE, value: "You're going to make an excellent belt!" },
    { type: TYPE_LOSE, value: "On a scale of 1 - 10, you're proper screwed!" },
    {
      type: TYPE_LOSE,
      value:
        "One day I'm going to make a ballad of this fight. Tell me your name, I hope it rhymes with horribly slaughtered!"
    },
    {
      type: TYPE_LOSE,
      value: "Didn't there used to be like twice as many of you guys? What's up with that, huh!"
    },
    {
      type: TYPE_LOSE,
      value: 'Wait, wait, I just need to ask, what do you need us to put on your headstone!?'
    },
    { type: TYPE_LOSE, value: 'Do you even have a name? You are so dead.' },
    { type: TYPE_LOSE, value: "Do you even have a last name? Hahaha didn't think so!" },
    { type: TYPE_LOSE, value: "Call the undertaker, if you're lucky you'll get a bulk rate!" },
    { type: TYPE_LOSE, value: "I've seen fungi with more charm!" },
    { type: TYPE_LOSE, value: 'Is this really how you pictured your life turning out?' },
    { type: TYPE_DUMB, value: 'It gives me a headache just trying to think down to your level!' },
    { type: TYPE_DUMB, value: "You're not a complete idiot...Some parts are obviously missing!" },
    { type: TYPE_DUMB, value: 'Are you always stupid, or are you making a special effort today!' },
    {
      type: TYPE_DUMB,
      value:
        "I'd like to leave you with one thought...but I'm not sure you have anywhere to put it!"
    },
    { type: TYPE_DUMB, value: 'If ignorance is bliss, you must be the happiest person alive!' },
    { type: TYPE_DUMB, value: 'Well...I have met sharper loaves of bread!' },
    {
      type: TYPE_DUMB,
      value:
        "I'm guessing you're one of those idiot savants I keep hearing about, apart from the savant part!"
    },
    { type: TYPE_DUMB, value: "If your brain exploded, it wouldn't even mess up your hair!" },
    {
      type: TYPE_DUMB,
      value: 'Your brains are drier than the leftover hardtack at the end of a journey.'
    },
    { type: TYPE_DUMB, value: "Somewhere, Your depriving a village of it's idiot!" },
    {
      type: TYPE_DUMB,
      value: "You're so stupid, if an illithid tried to eat your brain, it would starve to death!"
    },
    { type: TYPE_DUMB, value: "Huh? I didn't cast Feeblemind yet." },
    {
      type: TYPE_DUMB,
      value:
        "I was going to cast detect thoughts, but I don't think I'm going to find anything up there!"
    },
    { type: TYPE_DUMB, value: "You're not even intelligent enough to understand my words." },
    {
      type: TYPE_DUMB,
      value: 'I was thinking of casting feeblemind, but I doubt it would work on you!'
    },
    { type: TYPE_DUMB, value: "I've received more witty banter from zombies!" },
    { type: TYPE_DUMB, value: 'your wits are even duller than your blade' },
    {
      type: TYPE_DUMB,
      value: 'If stupidity ever becomes valuable, people would be fighting over your brain!'
    },
    { type: TYPE_DUMB, value: 'If only your talent for conversation matched your urge to do so!' },
    {
      type: TYPE_DUMB,
      value:
        "Sir, I regret all the insults that I may throw at you. Half will be too kind, and the rest you probably won't understand!"
    },
    {
      type: TYPE_DUMB,
      value: "I'll explain, and I'll use small words so that you are sure to understand!"
    },
    {
      type: TYPE_DUMB,
      value: "I'd teach you some manners, but I doubt you are capable of learning them!"
    },
    {
      type: TYPE_DUMB,
      value:
        'Your mouth is like the door of a brothel: whenever you open it someone gets fucked up.'
    },
    { type: TYPE_DUMB, value: "If a mindflayer ever attacks us you're safe!" },
    { type: TYPE_DUMB, value: 'Look at that gentlemen, it can speak common!' },
    { type: TYPE_DUMB, value: 'If I throw you some peanuts, would you do a trick!' },
    { type: TYPE_DUMB, value: "I've washed more brains off my weapon than there is in your head!" },
    {
      type: TYPE_DUMB,
      value:
        "I see you're so dumb you're convinced that you'll somehow succeed where better have failed."
    },
    {
      type: TYPE_DUMB,
      value:
        'I\'d say you were dropped on your head as a child, but "thrown" seems like a more fitting word!'
    },
    { type: TYPE_DUMB, value: 'Fresh from illithids, are we?' },
    {
      type: TYPE_DUMB,
      value:
        'I would challenge you to a battle of wits, but I hate to fight against an unarmed opponent!'
    },
    {
      type: TYPE_DUMB,
      value: "I'd say you're as dumb as a rock, but rocks offer better conversation!"
    },
    { type: TYPE_DUMB, value: "You're as dumb as an ogre and half as charming!" },
    { type: TYPE_DUMB, value: 'Your stupidity would give an illithid indigestion!' },
    { type: TYPE_DUMB, value: 'You’re so dense, light bends around you!' },
    {
      type: TYPE_DUMB,
      value: "I don't think you're stupid, I'm guessing you just have bad luck when you think!"
    },
    { type: TYPE_DUMB, value: 'Now we know who the spare is!' },
    {
      type: TYPE_DUMB,
      value: "Isn't it rather dangerous to use one's entire vocabulary in a single sentence!"
    },
    {
      type: TYPE_DUMB,
      value:
        '(After using Prestidigitation to make your breath appear cold), you say I see dumb people!'
    },
    {
      type: TYPE_DUMB,
      value:
        "It's pointless to make fun of you because it will take you the rest of the day to figure out!"
    },
    { type: TYPE_DUMB, value: 'You act as if stupidity is a virtue!' },
    {
      type: TYPE_DUMB,
      value: "You couldn't pour water out of a boot with the instructions on the heel!"
    },
    {
      type: TYPE_DUMB,
      value: "Why don't you go lick a branch or whatever a dumb ass like you does in private!"
    },
    {
      type: TYPE_DUMB,
      value: 'Is your ass jealous of the amount of shit that just came out of your mouth!'
    },
    {
      type: TYPE_DUMB,
      value: 'have you see a big stupid thing around here? I seem to have lost mine'
    },
    { type: TYPE_LAME, value: 'You would bore the legs off a village idiot!' },
    {
      type: TYPE_LAME,
      value: 'I can tell your reservoir of courage is fed by the tributary running down your leg!'
    },
    { type: TYPE_LAME, value: 'Who are you again?' },
    {
      type: TYPE_LAME,
      value:
        "Sorry, I don't remember ordering a drink, serving boy. You should go back into the kitchen!"
    },
    {
      type: TYPE_LAME,
      value: 'You lack the spine and testicular fortitude to be much of a challenge to me!'
    },
    { type: TYPE_LAME, value: "You aren't important enough for a specific insult!" },
    {
      type: TYPE_LAME,
      value: "How does it feel that you're not worthy of anyone casting a decent spell on you!"
    },
    {
      type: TYPE_LAME,
      value: "I'm glad your sister/wife let you off the chain long enough to come out to play!"
    },
    {
      type: TYPE_LAME,
      value: "I'd call you a pile of dung, but you lack both the depth and the warmth!"
    },
    {
      type: TYPE_LAME,
      value: 'I think you should see a healer and ask for a prescription for some balls!'
    },
    {
      type: TYPE_LAME,
      value: "Anyone who told you to be yourself couldn't of given you worse advice!"
    },
    { type: TYPE_LAME, value: "Well you found your life's purpose. A warning to others!" },
    {
      type: TYPE_FAMILY,
      value:
        "Your mother's so ugly, folk turn to stone just incase they might happen to catch a glimpse of her face!"
    },
    { type: TYPE_FAMILY, value: "Your momma's so ugly, clerics try to turn her!" },
    {
      type: TYPE_FAMILY,
      value:
        "Are you a half orc crossed with a pig? Oh yeah, there are some things a pig wouldn't do!"
    },
    {
      type: TYPE_FAMILY,
      value: "I would contact your mother about your death, but I don't speak goblin!"
    },
    {
      type: TYPE_FAMILY,
      value: 'Your mother was a kobold and your father smelled of elderberries!'
    },
    {
      type: TYPE_FAMILY,
      value: "I'd insult your parents, but you probably don't know who they are!"
    },
    {
      type: TYPE_FAMILY,
      value: "I heard what happened to your mother, it's not everyday your reflection kills you!"
    },
    {
      type: TYPE_FAMILY,
      value:
        'I would try to insult your father, but you were probably mistaken for a half orc, and disowned!'
    },
    {
      type: TYPE_FAMILY,
      value:
        "What's the difference between a troll and your mother? One's a stinking ugly monster, and the other is a troll!"
    },
    { type: TYPE_FAMILY, value: 'Your mother was so stupid, zombies made her a dunce hat!' },
    {
      type: TYPE_FAMILY,
      value:
        'Your mother is so fat that making a joke here would detract from the seriousness of her condition!'
    },
    {
      type: TYPE_FAMILY,
      value:
        "What's the difference between a dragon and a mallard with a cold? One's a sick duck and I forget the punchline, but your mother's a whore!"
    },
    {
      type: TYPE_FAMILY,
      value:
        'I think I bedded your mother and your sister. How quaint that they are the same person!'
    },
    { type: TYPE_FAMILY, value: 'Your mother is about to become a nameless stray dog!' },
    {
      type: TYPE_FAMILY,
      value: "How does it feel to know you'll never be the man your mother was!"
    },
    { type: TYPE_FAMILY, value: 'Your mother is disappointed in you.' },
    { type: TYPE_FAMILY, value: "Your mother is so ugly she'd make a sea hag die of horror!" },
    { type: TYPE_FAMILY, value: 'Lay down your arms....just like your mother last night!' },
    { type: TYPE_FAMILY, value: "I'd insult your mother, but you were insult enough!" },
    { type: TYPE_FAMILY, value: 'You look FAR too much like your granddad!' },
    {
      type: TYPE_FAMILY,
      value: "Your mothers a great lay, but you'd know that already, wouldn't you!"
    },
    { type: TYPE_FAMILY, value: 'So does failure run in your family!' },
    { type: TYPE_FAMILY, value: "You couldn't hit the broad side of your mother's ass!" },
    {
      type: TYPE_FAMILY,
      value:
        "I hear your mother died falling from a flying broom, so I'm guessing you live your life the same as your mother does in death. An unrecognisable roadside feature!"
    },
    {
      type: TYPE_FAMILY,
      value:
        "I'm guessing you weigh 50lbs while wet, which is the same as your sister when you found her drowned in her own cauldron!"
    },
    {
      type: TYPE_FAMILY,
      value:
        "I don't know what cursed thing your mother slept with under a full moon, but she owes us all an apology!"
    },
    {
      type: TYPE_FAMILY,
      value: 'You look like your father would be disappointed in you if he stayed!'
    },
    { type: TYPE_FAMILY, value: 'How the **** are you the sperm that won?' },
    { type: TYPE_FAMILY, value: 'You adopted stepchild of a cauliflower!' },
    { type: TYPE_FAMILY, value: "We all make mistakes, I'm sure your parents are good people!" },
    { type: TYPE_FAMILY, value: 'You make an easy target, just like your mother!' }
  ];

  document.getElementById('type-options').addEventListener('click', function(e) {
    if (e.srcElement.classList.contains('type-btn')) {
      showOneRandomly(+e.srcElement.getAttribute('data-type'));
    }
  });

  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function showOneRandomly(type) {
    var val;
    if (type === 0) {
      val = randomItem(data).value;
    } else {
      var filter_data = data.filter(function(x) {
        return x.type === type;
      });
      val = randomItem(filter_data).value;
    }

    document.getElementById('displayer').innerText = val;
  }
})();
