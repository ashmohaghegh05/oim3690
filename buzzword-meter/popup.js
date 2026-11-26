const enabledCheckbox = document.querySelector("#enabled");
const wordInput = document.querySelector("#word-input");
const addWordButton = document.querySelector("#add-word");
const customWordList = document.querySelector("#custom-word-list");
const statusMessage = document.querySelector("#status");

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

async function loadSettings() {
  try {
    const settings = await chrome.storage.sync.get({
      enabled: true,
      customWords: []
    });

    enabledCheckbox.checked = settings.enabled;
    showCustomWords(settings.customWords);
  } catch (error) {
    statusMessage.textContent = "Could not load your saved settings.";
    console.error("Buzzword Meter settings error:", error);
  }
}

async function saveEnabledSetting() {
  try {
    await chrome.storage.sync.set({
      enabled: enabledCheckbox.checked
    });

    statusMessage.textContent =
      "Setting saved. Refresh the Lever job page to apply it.";
  } catch (error) {
    statusMessage.textContent = "Could not save that setting.";
    console.error("Buzzword Meter settings error:", error);
  }
}

async function addCustomWord() {
  const word = wordInput.value.trim().toLowerCase();

  if (word === "") {
    statusMessage.textContent = "Type a word or phrase first.";
    return;
  }

  if (DEFAULT_BUZZWORDS.includes(word)) {
    statusMessage.textContent =
      "That word is already in the default list.";
    return;
  }

  try {
    const settings = await chrome.storage.sync.get({
      customWords: []
    });

    if (settings.customWords.includes(word)) {
      statusMessage.textContent = "That word is already on your list.";
      return;
    }

    const updatedWords = settings.customWords.concat(word);

    await chrome.storage.sync.set({
      customWords: updatedWords
    });

    wordInput.value = "";
    showCustomWords(updatedWords);
    statusMessage.textContent =
      "Word added. Refresh the Lever job page to apply it.";
  } catch (error) {
    statusMessage.textContent = "Could not save that word.";
    console.error("Buzzword Meter settings error:", error);
  }
}

async function removeCustomWord(wordToRemove) {
  try {
    const settings = await chrome.storage.sync.get({
      customWords: []
    });

    const updatedWords = settings.customWords.filter(function(word) {
      return word !== wordToRemove;
    });

    await chrome.storage.sync.set({
      customWords: updatedWords
    });

    showCustomWords(updatedWords);
    statusMessage.textContent =
      "Word removed. Refresh the Lever job page to apply it.";
  } catch (error) {
    statusMessage.textContent = "Could not remove that word.";
    console.error("Buzzword Meter settings error:", error);
  }
}

function showCustomWords(words) {
  customWordList.textContent = "";

  if (words.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.textContent = "No custom words yet.";
    customWordList.appendChild(emptyItem);
    return;
  }

  words.forEach(function(word) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(word + " "));

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "remove-word";
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function() {
      removeCustomWord(word);
    });

    item.appendChild(removeButton);
    customWordList.appendChild(item);
  });
}

enabledCheckbox.addEventListener("change", saveEnabledSetting);
addWordButton.addEventListener("click", addCustomWord);

wordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addCustomWord();
  }
});

loadSettings();
