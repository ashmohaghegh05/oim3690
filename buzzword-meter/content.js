const DEFAULT_BUZZWORDS = [
  "thrive",
  "impact",
  "cross-functional",
  "fast-paced",
  "leverage",
  "end-to-end",
  "ownership",
  "passionate",
  "ambiguity",
  "innovative",
  "world-class",
  "best-in-class",
  "self-starter",
  "north star",
  "seamless",
  "synergy"
];

async function countBuzzwordsOnPage() {
  try {
    const settings = await chrome.storage.sync.get({
      enabled: true,
      customWords: []
    });

    if (!settings.enabled) {
      return;
    }

    const pageText = document.body.innerText.toLowerCase();
    const customWords = settings.customWords || [];

    // Avoid counting a default word twice if it is also in the custom list.
    const extraWords = customWords.filter(function(word) {
      return !DEFAULT_BUZZWORDS.includes(word);
    });

    const wordsToCount = DEFAULT_BUZZWORDS.concat(extraWords);
    const counts = [];

    for (const word of wordsToCount) {
      const count = pageText.split(word).length - 1;

      if (count > 0) {
        counts.push({
          word: word,
          count: count
        });
      }
    }

    showBuzzwordBanner(counts);
  } catch (error) {
    console.error("Buzzword Meter could not read its settings:", error);
  }
}

function showBuzzwordBanner(counts) {
  const banner = document.createElement("section");
  banner.id = "buzzword-meter-banner";

  const total = counts.reduce(function(sum, item) {
    return sum + item.count;
  }, 0);

  const heading = document.createElement("strong");
  heading.textContent = "Buzzword Meter: " + total + " match(es)";
  banner.appendChild(heading);

  if (counts.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No words from your list were found.";
    banner.appendChild(message);
  } else {
    const list = document.createElement("ul");

    for (const item of counts) {
      const listItem = document.createElement("li");
      listItem.textContent = item.word + ": " + item.count;
      list.appendChild(listItem);
    }

    banner.appendChild(list);
  }

  document.body.prepend(banner);
}

countBuzzwordsOnPage();
