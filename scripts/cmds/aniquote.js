module.exports = {
  config: {
    name: "aniquote",
    author: "Jun",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "random anime quotes",
    },
  },

  onStart: async function ({ api, event }) {
    const { threadID, messageID, senderID } = event;

    // Array of anime quotes
    const animeQuotes1 = [
      "If you don’t share someone’s pain, you can never understand them\\~ Nagato Uzumaki\(Naruto Shippuden)",
      "Whatever you lose, you’ll find it again. But what you throw away you’ll never get back\\~ Himura Kenshin\(Rurouni Kenshin)",
      "We don’t have to know what tomorrow holds! That’s why we can live for everything we’re worth today\\~ Natsu Dragneel\(Fairy Tail)",
      "Being weak is nothing to be ashamed of… Staying weak is\\~ Fuegoleon Vermillion\(Black Clover)",
      "Don’t beg for things. Do it yourself, or else you won’t get anything\\~ Renton Thurston\(Zia Rein)",
      "Thinking you’re no good and worthless is the worst thing you can do\\~ Doraemon\(Doraemon)",
      "If you can’t do something, then don’t. Focus on what you can do\\~ Shiroe\(Log Horizon)",
      "When you lose sight of your path, listen for the destination in your heart\\~ Allen Walker\(D.Gray Man)",
      "Life is nota game of luck. If you wanna win, work hard\\~ Sora\(No Game No Life)",
    ];

    const animeQuotes2 = [
      "No matter how hard or impossible it is, never lose sight of your goal\\~ Monkey D Luffy\(One Piece)",
      "The world isn’t perfect. But it’s there for us, doing the best it can….that’s what makes it so damn beautiful\\~ Roy Mustang\(Full Metal Alchemist)",
      "Knowing you’re different is only the beginning. If you accept these differences you’ll be able to get past them and grow even closer\\~ Miss Kobayashi\(Dragon Maid)",
      "You can’t win a game by doing nothing. And if someone else wins it for you then you haven’t accomplished anything. Life is the same way\\~ Junichirou Kagami\(Denpa Kyoushi)",
      "Just like games, no matter how well you have things lined up in your life, there’s always something to keep you on your toes\\~ Junichirou Kagami\(Denpa Kyoushi)",
      "Do exactly as you like. That is the true meaning of pleasure. Pleasure leads to joy and joy leads to happiness\\~ Gilgamesh\(Fate Zero)",
      "The concept of hope is nothing more than giving up. A word that holds no true meaning\\~ Madara Uchiha\(Naruto Shippuden)",
      "The longer you live… The more you realize that reality is just made of pain, suffering and emptiness\\~ Madara Uchiha\(Naruto Shippuden)",
      "There’s no way we could meet. But one thing is certain. If we see each other, we’ll know. That you were the one who was inside me. That I was the one who was inside you\\~ Mitsuha Miyamizu\(Kimi No Nawa)",
      "Treasure the experience. Dreams fade away after you wake up\\Hitoha Miyamizu\(Kimi No Nawa)",
      "I wanted to tell you that… Wherever you may end up in this world, I will be searching for you\\~ Taki Tachibana\(Kimi No Nawa)",
      "Death isn’t kind. It’s dark and black and as far as you… As faras you can see, it’s endless\\~ Kira Yoshikage\(Jojo’s Bizarre Adventure)",
    ];

    // Get random anime quote from either array
    const randomAnimeQuote =
      Math.random() < 0.5
        ? animeQuotes1[Math.floor(Math.random() * animeQuotes1.length)]
        : animeQuotes2[Math.floor(Math.random() * animeQuotes2.length)];

    // Send the quote as a message to the thread
    api.sendMessage(
      `Here's your random anime quote:\\${randomAnimeQuote}`,
      threadID
    );

    // Log that the command was used
    console.log(`Aniquote command used by ${senderID}`);
  },

  onEnd: async function ({ api, event }) {
    const { threadID } = event;

    // Send message indicating the countdown has ended
    api.sendMessage(
      "Aniquote countdown has ended! Use the command again to get a new quote.",
      threadID
    );
  },
};