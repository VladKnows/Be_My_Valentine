// ==========================================
// CONFIGURARE POVESTE
// ==========================================
const story = [
    {
        id: 0,
        background: "src/bg_room.jpg",
        text: "Good morning kitty! Will you go in an adventure with me today?",
        options: [
            { text: "No", next: 1 },
            { text: "Yes", next: 6 }
        ]
    },
    {
        id: 1,
        background: "src/bg_room.jpg",
        text: "Why? Are you hungry?",
        options: [
            { text: "No", next: 2 },
            { text: "Yes", next: 3 }
        ]
    },
    {
        id: 2,
        background: "src/bg_room.jpg",
        text: "Are you sleepy?",
        options: [
            { text: "No", next: 4 },
            { text: "Yes", next: 5 }
        ]
    },
    {
        id: 3,
        background: "src/bg_room.jpg",
        text: "Here is your breakfast!",
        showItem: "src/food.jpg", // Asigura-te ca ai poza asta
        options: [
            { text: "Continue", next: 6 },
            { text: "Eat him instead", next: "ENDING_2" }
        ]
    },
    {
        id: 4,
        background: "src/bg_room.jpg",
        text: "Then get up! It's going to be fun!",
        options: null // Enter -> 6
    },
    {
        id: 5,
        background: "src/bg_room.jpg",
        text: "HA HA HA",
        specialEffect: "splash",
        catEmotion: "src/cat_laugh.jpg",
        options: null // Enter -> 6
    },
    {
        id: 6,
        background: "src/bg_room.jpg",
        text: "Now where would you like to go princess?",
        options: [
            { text: "I don't know", next: 7 },
            { text: "Dungeons", next: 8 },
            { text: "Arcade", next: 20 },
            { text: "Sweet Kingdom", next: 36 }
        ]
    },
    {
        id: 7,
        background: "src/bg_room.jpg",
        text: "Pretty please choose...",
        catEmotion: "src/cat_plea.jpg",
        options: [
            { text: "Dungeons", next: 8 },
            { text: "Arcade", next: 20 },
            { text: "Sweet Kingdom", next: 36 }
        ]
    },
    {
        id: 8,
        background: "src/dungeon.jpg",
        text: "...",
        catEmotion: "src/cat_devastated.jpg",
        options: null // -> 9
    },
    {
        id: 9,
        background: "src/dungeon.jpg",
        text: "This is going to be an awful journey.",
        options: null // -> 10
    },
    {
        id: 10,
        background: "src/dungeon.jpg",
        text: "Here we are, where should we go first?",
        options: [
            { text: "Left", next: 11 },
            { text: "Straight", next: 16 },
            { text: "Back", next: 17 }
        ]
    },
    {
        id: 11,
        background: "src/dungeon_inside.jpg",
        text: "This is so creepy...",
        catEmotion: "src/cat_scared.png",
        options: [
            { text: "You go first", next: 12 },
            { text: "Let's go back", next: 10 }
        ]
    },
    {
        id: 12,
        background: "src/dungeon_inside.jpg",
        text: "*sniff* Ok...",
        catEmotion: "src/cat_devastated.jpg",
        options: null // -> 13
    },
    {
        id: 13,
        background: "src/dungeon_inside.jpg",
        text: "Look at this funny thing I found!",
        showItem: "src/labubu.jpg",
        options: [
            { text: "Throw Labubu away", next: 14 },
            { text: "Sacrifice lover", next: 15 }
        ]
    },
    {
        id: 14,
        background: "src/dungeon_inside.jpg",
        text: "We should go back, there is nothing else to be found here.",
        options: null // -> 10
    },
    {
        id: 15,
        background: "src/sacrifice-circle.jpg",
        text: "NOOOOOO WHY ARE YOU DOING THIS!!!! PLEEEEASE RELEASE ME",
        catEmotion: "src/cat_sacrificed.png",
        options: [ { text: "Continue", next: "ENDING_1" } ]
    },
    {
        id: 16,
        background: "src/dungeon_inside.jpg",
        text: "We might be stupid. *Wolves can be heard getting closer*",
        playSound: "wolves",
        options: [
            { text: "Go ahead", next: "ENDING_3" },
            { text: "Go back", next: 10 }
        ]
    },
    {
        id: 17,
        background: "src/bg_room.jpg",
        text: "I'm so glad we got back, where should we go now?",
        options: [
            { text: "Dungeons", next: 18 },
            { text: "Arcade", next: 20 },
            { text: "Sweet Kingdom", next: 35 }
        ]
    },
    {
        id: 18,
        background: "src/Dungeon.jpg",
        text: "We shall go then.",
        catEmotion: "src/cat_mad.png",
        options: null // -> 19
    },
    {
        id: 19,
        background: "src/dungeon_inside.jpg",
        text: "You go first this time.",
        catEmotion: "src/cat_devastated.jpg",
        options: [ { text: "...", next: "ENDING_4" } ]
    },
    {
        id: 20,
        background: "src/bg_arcade.jpg",
        text: "Yippie, arcade you say, let's have some fun!",
        options: null // -> 21
    },
    {
        id: 21,
        background: "src/bg_arcade.jpg",
        text: "What should we play first?",
        options: [
            { text: "Air Hockey", next: 22 },
            { text: "Jumping Game", next: 28 },
            { text: "Basketball", next: 30 }
        ]
    },
    // --- ARCADE GAMES ---
    {
        id: 22,
        background: "src/bg_airhockey.jpg",
        text: "Ok! Let's roll!!",
        options: [ { text: "Continue", next: 23 } ]
    },
    {
        id: 23,
        type: "MINIGAME", // Air Hockey Start
        background: "src/bg_airhockey.jpg",
        text: "Game ON! First to 3 wins!", 
        options: []
    },
    {
        id: 24, // WIN HOCKEY
        background: "src/bg_airhockey.jpg",
        text: "That was fun, I let you win on purpose btw.",
        options: [ { text: "Continue", next: 29 } ]
    },
    {
        id: 25, // LOSE HOCKEY
        background: "src/bg_airhockey.jpg",
        text: "HAHAHA, You lost!",
        catEmotion: "src/cat_laugh.jpg",
        options: [
            { text: "What's so funny?", next: 26 },
            { text: "Stab him", next: "ENDING_7" }
        ]
    },
    {
        id: 26,
        background: "src/bg_airhockey.jpg",
        text: "Just the fact that you are so small and silly!",
        options: [ { text: "Continue", next: 27 } ]
    },
    {
        id: 27, // REPLAY HOCKEY?
        background: "src/bg_airhockey.jpg",
        text: "Want to play again?",
        options: [
            { text: "Yes", next: 22 }, 
            { text: "No", next: 29 } 
        ]
    },
    {
        id: 28, // Jumping Game Start
        type: "MINIGAME_JUMP", 
        background: "src/bg_jumping.jpg",
        text: "Avoid the obstacles! Press SPACE or Click to Jump!",
        options: [] 
    },
    {
        id: 30, // Basketball Game Start
        type: "MINIGAME_BASKET",
        background: "src/bg_basket.jpg",
        text: "Score 3 out of 5! Press SPACE when the bar is GREEN!",
        options: []
    },
    // Nota: Am sters dublura de ID:30 care era aici inainte
    {
        id: 29, // HUB ARCADE
        background: "src/bg_arcade.jpg",
        text: "This was fun! What should we play now?",
        options: "DYNAMIC_ARCADE" 
    },
    {
        id: 31,
        background: "src/bg_arcade.jpg",
        text: "I'm kind of shy, it's hard for me to ask.",
        catEmotion: "src/shy_cat.png",
        options: [
            { text: "It's ok baby!", next: 32 },
            { text: "Don't say it.", next: "ENDING_5" }
        ]
    },
    {
        id: 32,
        background: "src/bg_arcade.jpg",
        text: "Ok... I will try.",
        catEmotion: "src/shy_cat.png",
        options: null // -> 33
    },
    {
        id: 33,
        background: "src/bg_arcade.jpg",
        text: "Will you be my valentine?",
        catEmotion: "src/cat_flowers.png",
        options: [
            { text: "YES!!!! Of course!!!!", next: "ENDING_6" },
            { text: "No.", next: 34 }
        ]
    },
    {
        id: 34,
        background: "src/bg_arcade.jpg",
        text: "Ok... I see how it is...",
        catEmotion: "src/cat_sad.png",
        options: null // -> 35
    },
    {
        id: 35,
        background: "src/bg_arcade.jpg",
        text: "This is why I bought you more flowers!!",
        catEmotion: "src/cat_flowers_2.png",
        options: [
            { text: "YES!!!!", next: "ENDING_6" },
            { text: "Still no.", next: "ENDING_5" }
        ]
    },
    {
        id: 36,
        background: "src/bg_sweet.jpg",
        text: "To be continued...",
        options: [
            { text: "*Not implemented*", next: "ENDING_8" },
        ]
    }
];

// ==========================================
// VARIABILE DE STARE
// ==========================================
let isTyping = false;
let isMinigameActive = false; // VAR NOUA IMPORTANTA
let charIndex = 0;
let typingSpeed = 30;
let talkInterval;
let selectedOptionIndex = 0;
let currentOptions = [];
let playedArcadeGames = new Set(); 

// DOM ELEMENTS
const bgElement = document.getElementById("game-background");
const textElement = document.getElementById("dialogue-text");
const catImage = document.getElementById("cat-image");
const optionsContainer = document.getElementById("options-container");
const nextIndicator = document.getElementById("next-indicator");
const splashOverlay = document.getElementById("splash-overlay");
const itemDisplay = document.getElementById("item-display");
const itemImage = document.getElementById("item-image");
const wolfAudio = document.getElementById("sfx-wolves");

// ==========================================
// INITIALIZARE & LOGICA PRINCIPALA
// ==========================================
function initGame() {
    loadScene(0);
    document.addEventListener('keydown', handleInput);
}

// ENDINGS
function triggerEnding(endingId) {
    textElement.innerHTML = "";
    optionsContainer.innerHTML = "";
    optionsContainer.classList.add("hidden");
    stopMouthAnimation();
    
    let endingText = "";
    let finalImg = "src/cat_closed.png";
    
    // Reset background styles just in case
    bgElement.style.backgroundColor = ""; 

    switch(endingId) {
        case "ENDING_1": 
            endingText = "Ending 1: It wasn't funny. You sacrificed the cat."; 
            finalImg = "src/cat_sacrificed.png";
            break;
        case "ENDING_2": 
            endingText = "Ending 2: Feast. You ate the cat."; 
            finalImg = "src/cat_dead.png"; 
            break;
        case "ENDING_3": 
            endingText = "Ending 3: Eaten by wolves."; 
            finalImg = "src/cat_eaten.png";
            bgElement.style.backgroundImage = "url('src/bg_wolves.jpg')";
            break;
        case "ENDING_4": 
            endingText = "Ending 4: You have been sacrificed."; 
            break;
        case "ENDING_5": 
            endingText = "Ending 5: Shot to death. Don't break hearts."; 
            bgElement.style.backgroundImage = "none";
            bgElement.style.backgroundColor = "darkred";
            break;
        case "ENDING_6": 
            endingText = "HAPPY VALENTINE'S DAY! ❤️ Ending 6: Love Wins!"; 
            bgElement.style.backgroundImage = "url('src/bg_love.jpg')";
            finalImg = "src/cat_happy.png";
            createHearts();
            break;
        case "ENDING_7": 
            endingText = "Ending 7: Prison. You couldn't handle the loss."; 
            bgElement.style.backgroundImage = "url('src/bg_prison.png')";
            finalImg = "src/cat_prison.png";
            break;
        case "ENDING_8":
            endingText = "Ending 8: KILL BABY IRL.";
            finalImg = "src/cat_evil.png";
            break;
    }

    textElement.innerText = endingText;
    catImage.src = finalImg;
}

function loadScene(stepId) {
    // 1. Verificăm dacă e ending
    if (typeof stepId === 'string' && stepId.startsWith("ENDING")) {
        triggerEnding(stepId);
        return;
    }

    const scene = story.find(s => s.id === stepId);
    if (!scene) return;

    // --- SALVĂM CĂ AM JUCAT JOCUL ---
    if ([22, 28, 30].includes(stepId)) {
        playedArcadeGames.add(stepId);
    }

    // 2. Verificăm Minigames
    if (scene.type === "MINIGAME") {
        startAirHockey();
        bgElement.style.backgroundImage = `url('${scene.background}')`;
        return; 
    }
    if (scene.type === "MINIGAME_JUMP") {
        startDinoGame();
        bgElement.style.backgroundImage = `url('${scene.background}')`;
        return;
    }
    if (scene.type === "MINIGAME_BASKET") {
        startBasketGame();
        bgElement.style.backgroundImage = `url('${scene.background}')`;
        return;
    }

    // 3. Resetăm UI
    textElement.innerHTML = "";
    optionsContainer.innerHTML = "";
    optionsContainer.classList.add("hidden");
    nextIndicator.classList.add("hidden");
    itemDisplay.classList.add("hidden");
    splashOverlay.classList.remove("active");
    
    // 4. Background & Emotion
    if (scene.background) bgElement.style.backgroundImage = `url('${scene.background}')`;
    
    if (scene.catEmotion) {
        catImage.setAttribute("data-default", scene.catEmotion);
        catImage.src = scene.catEmotion;
    } else {
        catImage.setAttribute("data-default", "src/cat_closed.png");
        catImage.src = "src/cat_closed.png";
    }

    // 5. Items & Effects
    if (scene.showItem) {
        itemDisplay.classList.remove("hidden");
        itemImage.src = scene.showItem;
    }
    if (scene.specialEffect === "splash") {
        splashOverlay.classList.add("active");
        setTimeout(() => splashOverlay.classList.remove("active"), 500);
    }
    if (scene.playSound === "wolves") {
        wolfAudio.play().catch(e => console.log("Audio req interaction"));
    }

    // --- MODIFICARE AICI: Verificăm dacă blocăm animația ---
    // Lista ID-urilor unde pisica NU trebuie să miște gura
    const staticScenes = [11, 12, 15, 18, 19, 31, 32, 33, 34, 35];
    const shouldFreeze = staticScenes.includes(scene.id);

    // 6. Options Logic
    if (scene.options === "DYNAMIC_ARCADE") {
        currentOptions = generateArcadeOptions();
        if (currentOptions.length === 1 && currentOptions[0].next === 31) {
             startTyping("Baby, after all this fun, I'd like to ask you something...", false);
        } else {
             startTyping(scene.text, shouldFreeze);
        }
    } else {
        currentOptions = scene.options;
        // Trimitem 'shouldFreeze' către funcția de scris
        startTyping(scene.text, shouldFreeze);
    }

    selectedOptionIndex = 0;
}

function generateArcadeOptions() {
    let opts = [];
    if (!playedArcadeGames.has(22)) opts.push({ text: "Air Hockey", next: 22 });
    if (!playedArcadeGames.has(28)) opts.push({ text: "Jumping Game", next: 28 });
    if (!playedArcadeGames.has(30)) opts.push({ text: "Basketball", next: 30 });
    
    if (opts.length === 0) {
        return [{ text: "What is it?", next: 31 }];
    }
    return opts;
}

function startTyping(text, stopAnimation = false) {
    isTyping = true;
    charIndex = 0;
    
    if (!stopAnimation) {
        startMouthAnimation();
    }

    function typeChar() {
        if (charIndex < text.length) {
            textElement.innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, typingSpeed);
        } else {
            isTyping = false;
            stopMouthAnimation();
            
            if (currentOptions && currentOptions.length > 0) {
                showOptions();
            } else {
                nextIndicator.classList.remove("hidden");
            }
        }
    }
    typeChar();
}

function startMouthAnimation() {
    let mouthOpen = false;
    const defaultImg = catImage.getAttribute("data-default");
    
    if (talkInterval) clearInterval(talkInterval);
    talkInterval = setInterval(() => {
        mouthOpen = !mouthOpen;
        if (mouthOpen) {
            catImage.src = "src/cat_open.png";
        } else {
            catImage.src = defaultImg;
        }
    }, 80);
}

function stopMouthAnimation() {
    clearInterval(talkInterval);
    catImage.src = catImage.getAttribute("data-default") || "src/cat_closed.png";
}

function showOptions() {
    optionsContainer.classList.remove("hidden");
    optionsContainer.innerHTML = "";
    currentOptions.forEach((opt, index) => {
        const div = document.createElement("div");
        div.className = "option";
        if (index === 0) div.classList.add("selected");
        div.innerText = opt.text;
        optionsContainer.appendChild(div);
    });
}

function handleInput(e) {
    // 1. Daca se scrie text SAU e un minigame activ, ignoram inputul de meniu
    if (isTyping || isMinigameActive) return;

    // 2. Navigare Optiuni
    if (currentOptions && currentOptions.length > 0) {
        const optionsElements = document.querySelectorAll(".option");
        
        if (e.key === "ArrowRight") {
            selectedOptionIndex = (selectedOptionIndex + 1) % currentOptions.length;
        } else if (e.key === "ArrowLeft") {
            selectedOptionIndex = (selectedOptionIndex - 1 + currentOptions.length) % currentOptions.length;
        } else if (e.key === "Enter") {
            const nextStepId = currentOptions[selectedOptionIndex].next;
            loadScene(nextStepId);
            return;
        }

        optionsElements.forEach(el => el.classList.remove("selected"));
        if(optionsElements[selectedOptionIndex]) {
            optionsElements[selectedOptionIndex].classList.add("selected");
        }
    } 
    // 3. Navigare Simpla (Enter pentru next)
    else if (e.key === "Enter") {
        // Logica manuala de tranzitie cand nu sunt optiuni
        const scene = story.find(s => s.text === textElement.innerText || (s.options === "DYNAMIC_ARCADE" && textElement.innerText.startsWith("Baby,")));
        
        if (scene) {
            if (scene.id === 4) loadScene(6);
            else if (scene.id === 5) loadScene(6);
            else if (scene.id === 8) loadScene(9);
            else if (scene.id === 9) loadScene(10);
            else if (scene.id === 12) loadScene(13);
            else if (scene.id === 14) loadScene(10);
            else if (scene.id === 18) loadScene(19);
            else if (scene.id === 20) loadScene(21);
            else if (scene.id === 22) loadScene(23); // AirHockey Intro -> Game
            else if (scene.id === 24 || scene.id === 26) loadScene(29); // Win -> Hub
            else if (scene.id === 27) loadScene(29); // Hockey Replay No -> Hub
            else if (scene.id === 32) loadScene(33);
            else if (scene.id === 34) loadScene(35);
        }
    }
}

function createHearts() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "30px";
    heart.style.animation = "floatUp 4s linear";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
    setTimeout(createHearts, 300);
}

// ==========================================
// MINIGAME 1: AIR HOCKEY
// ==========================================
let hockeyInterval;
const hCanvas = document.getElementById("hockey-canvas");
const hCtx = hCanvas.getContext("2d");

let ball = { x: 150, y: 200, dx: 4, dy: 4, radius: 8 };
let player = { x: 150, y: 380, width: 60, height: 10, score: 0 };
let computer = { x: 150, y: 20, width: 60, height: 10, score: 0 };

function startAirHockey() {
    isMinigameActive = true; // BLOCHEAZA MENIUL
    player.score = 0;
    computer.score = 0;
    resetBall();
    
    hCanvas.classList.remove("hidden");
    document.querySelector(".dialogue-box").classList.add("hidden"); 
    hCanvas.addEventListener("mousemove", movePaddle);
    hockeyInterval = requestAnimationFrame(updateHockey);
}

function movePaddle(e) {
    const rect = hCanvas.getBoundingClientRect();
    const root = document.documentElement;
    let mouseX = e.clientX - rect.left - root.scrollLeft;
    player.x = mouseX - player.width / 2;
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > hCanvas.width) player.x = hCanvas.width - player.width;
}

function resetBall() {
    ball.x = hCanvas.width / 2;
    ball.y = hCanvas.height / 2;
    ball.dx = 4 * (Math.random() > 0.5 ? 1 : -1);
    ball.dy = 4 * (Math.random() > 0.5 ? 1 : -1);
}

function updateHockey() {
    hCtx.fillStyle = "#222";
    hCtx.fillRect(0, 0, hCanvas.width, hCanvas.height);
    
    // Draw elements
    hCtx.fillStyle = "#00f"; hCtx.fillRect(player.x, player.y, player.width, player.height);
    hCtx.fillStyle = "#f00"; hCtx.fillRect(computer.x, computer.y, computer.width, computer.height);
    hCtx.beginPath(); hCtx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    hCtx.fillStyle = "#fff"; hCtx.fill(); hCtx.closePath();

    // Scores
    hCtx.font = "30px VT323"; hCtx.fillStyle = "rgba(255, 255, 255, 0.5)";
    hCtx.fillText(computer.score, 10, 140); hCtx.fillText(player.score, 10, 280);

    // Physics
    ball.x += ball.dx; ball.y += ball.dy;
    if (ball.x + ball.radius > hCanvas.width || ball.x - ball.radius < 0) ball.dx = -ball.dx;

    // AI
    let targetX = ball.x - computer.width / 2;
    if (computer.x < targetX) computer.x += 3.5;
    else computer.x -= 3.5;
    if (computer.x < 0) computer.x = 0;
    if (computer.x + computer.width > hCanvas.width) computer.x = hCanvas.width - computer.width;

    // Collision
    if (ball.y + ball.radius > player.y && ball.x > player.x && ball.x < player.x + player.width) {
        ball.dy = -Math.abs(ball.dy);
        ball.dx += (ball.x - (player.x + player.width/2)) * 0.1;
    }
    if (ball.y - ball.radius < computer.y + computer.height && ball.x > computer.x && ball.x < computer.x + computer.width) {
        ball.dy = Math.abs(ball.dy);
    }

    // Goals
    if (ball.y > hCanvas.height) { computer.score++; resetBall(); }
    else if (ball.y < 0) { player.score++; resetBall(); }

    if (player.score >= 3) endHockey(true);
    else if (computer.score >= 3) endHockey(false);
    else hockeyInterval = requestAnimationFrame(updateHockey);
}

function endHockey(playerWon) {
    isMinigameActive = false; // DEBLOCHEAZA MENIUL
    cancelAnimationFrame(hockeyInterval);
    hCanvas.classList.add("hidden");
    hCanvas.removeEventListener("mousemove", movePaddle);
    document.querySelector(".dialogue-box").classList.remove("hidden");
    if (playerWon) loadScene(24);
    else loadScene(25);
}

// ==========================================
// MINIGAME 2: DINO JUMP
// ==========================================
let jumpInterval;
const jumpCanvas = document.getElementById("jump-canvas");
const jumpCtx = jumpCanvas.getContext("2d");

let dino = { x: 50, y: 150, width: 30, height: 30, dy: 0, jumpPower: -10, grounded: true };
let obstacles = [];
let jumpScore = 0;
let gameSpeed = 5;
let isJumpingGameRunning = false;

function startDinoGame() {
    isMinigameActive = true; // IMPORTANT
    dino.y = 150; dino.dy = 0; obstacles = []; jumpScore = 0; gameSpeed = 5;
    isJumpingGameRunning = true;

    document.querySelector(".dialogue-box").classList.add("hidden");
    jumpCanvas.classList.remove("hidden");

    document.addEventListener("keydown", dinoJumpControl);
    jumpCanvas.addEventListener("mousedown", dinoJumpControl);
    jumpInterval = requestAnimationFrame(updateDinoGame);
}

function dinoJumpControl(e) {
    // PREVENT DEFAULT SPACE SCROLLING
    if (e.code === "Space") e.preventDefault();

    if ((e.code === "Space" || e.type === "mousedown") && dino.grounded) {
        dino.dy = dino.jumpPower;
        dino.grounded = false;
    }
}

function updateDinoGame() {
    if (!isJumpingGameRunning) return;
    jumpCtx.fillStyle = "#222"; jumpCtx.fillRect(0, 0, jumpCanvas.width, jumpCanvas.height);
    jumpCtx.fillStyle = "#555"; jumpCtx.fillRect(0, 180, jumpCanvas.width, 20);

    dino.dy += 0.6; dino.y += dino.dy;
    if (dino.y > 150) { dino.y = 150; dino.dy = 0; dino.grounded = true; }

    jumpCtx.fillStyle = "#ff0055"; jumpCtx.fillRect(dino.x, dino.y, dino.width, dino.height);

    if (Math.random() < 0.015) obstacles.push({ x: jumpCanvas.width, y: 150, width: 20, height: 30 });

    for (let i = 0; i < obstacles.length; i++) {
        let obs = obstacles[i];
        obs.x -= gameSpeed;
        jumpCtx.fillStyle = "#00ff00"; jumpCtx.fillRect(obs.x, obs.y, obs.width, obs.height);

        if (dino.x < obs.x + obs.width && dino.x + dino.width > obs.x && dino.y < obs.y + obs.height && dino.y + dino.height > obs.y) {
            endDinoGame(false); return;
        }
    }
    obstacles = obstacles.filter(obs => obs.x > -50);
    jumpScore++;
    
    jumpCtx.fillStyle = "white"; jumpCtx.font = "20px VT323";
    jumpCtx.fillText("Distance: " + Math.floor(jumpScore/10), 10, 30);

    if (jumpScore > 1000) endDinoGame(true);
    else jumpInterval = requestAnimationFrame(updateDinoGame);
}

function endDinoGame(won) {
    isMinigameActive = false; // IMPORTANT
    isJumpingGameRunning = false;
    cancelAnimationFrame(jumpInterval);
    document.removeEventListener("keydown", dinoJumpControl);
    jumpCanvas.removeEventListener("mousedown", dinoJumpControl);
    jumpCanvas.classList.add("hidden");
    document.querySelector(".dialogue-box").classList.remove("hidden");
    loadScene(29);
}

// ==========================================
// MINIGAME 3: BASKETBALL
// ==========================================
let basketInterval;
const basketCanvas = document.getElementById("basket-canvas");
const basketCtx = basketCanvas.getContext("2d");

let shotsLeft = 5; let scoreBasket = 0;
let barPosition = 0; let barDirection = 1; let barSpeed = 2;
let gameState = "AIMING";
let resultText = ""; let resultColor = "white";

function startBasketGame() {
    isMinigameActive = true;
    shotsLeft = 5; scoreBasket = 0; gameState = "AIMING"; barSpeed = 2;
    
    document.querySelector(".dialogue-box").classList.add("hidden");
    basketCanvas.classList.remove("hidden");
    
    document.addEventListener("keydown", basketControl);
    basketCanvas.addEventListener("mousedown", basketControl);
    basketInterval = requestAnimationFrame(updateBasketGame);
}

function basketControl(e) {
    if (e.code === "Space") e.preventDefault();

    if ((e.code === "Space" || e.type === "mousedown") && gameState === "AIMING") {
        shootBall();
    }
}

function shootBall() {
    gameState = "ANIMATING"; shotsLeft--;
    let hit = (barPosition > 40 && barPosition < 60);
    if (hit) { scoreBasket++; resultText = "SCORE!"; resultColor = "#00ff00"; }
    else { resultText = "MISS!"; resultColor = "#ff0000"; }

    setTimeout(() => {
        if (shotsLeft > 0) { gameState = "AIMING"; barSpeed += 0.5; barPosition = 0; }
        else { endBasketGame(); }
    }, 1500);
}

function updateBasketGame() {
    basketCtx.fillStyle = "#222"; basketCtx.fillRect(0, 0, basketCanvas.width, basketCanvas.height);
    
    // Hoop
    basketCtx.fillStyle = "white"; basketCtx.fillRect(150, 50, 100, 80);
    basketCtx.strokeStyle = "red"; basketCtx.strokeRect(170, 90, 60, 40);
    basketCtx.beginPath(); basketCtx.moveTo(170, 130); basketCtx.lineTo(230, 130);
    basketCtx.strokeStyle = "orange"; basketCtx.lineWidth = 5; basketCtx.stroke();

    // Stats
    basketCtx.fillStyle = "white"; basketCtx.font = "24px VT323";
    basketCtx.fillText(`Shots: ${shotsLeft} | Score: ${scoreBasket}`, 10, 30);

    if (gameState === "AIMING") {
        barPosition += barSpeed * barDirection;
        if (barPosition > 100 || barPosition < 0) barDirection *= -1;
        basketCtx.beginPath(); basketCtx.arc(200, 300, 20, 0, Math.PI*2);
        basketCtx.fillStyle = "orange"; basketCtx.fill();
    } else {
        basketCtx.fillStyle = resultColor; basketCtx.font = "40px VT323";
        basketCtx.fillText(resultText, 140, 250);
    }

    // Power Bar
    let barWidth = 300, barHeight = 20, barX = 50, barY = 350;
    basketCtx.fillStyle = "#555"; basketCtx.fillRect(barX, barY, barWidth, barHeight);
    basketCtx.fillStyle = "#00ff00"; basketCtx.fillRect(barX + (barWidth * 0.4), barY, barWidth * 0.2, barHeight);
    let cursorX = barX + (barPosition / 100) * barWidth;
    basketCtx.fillStyle = "white"; basketCtx.fillRect(cursorX - 2, barY - 5, 4, barHeight + 10);

    basketInterval = requestAnimationFrame(updateBasketGame);
}

function endBasketGame() {
    isMinigameActive = false; // IMPORTANT
    cancelAnimationFrame(basketInterval);
    document.removeEventListener("keydown", basketControl);
    basketCanvas.removeEventListener("mousedown", basketControl);
    basketCanvas.classList.add("hidden");
    document.querySelector(".dialogue-box").classList.remove("hidden");
    loadScene(29);
}

// CSS injection for hearts
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes floatUp {
    to { transform: translateY(-110vh); opacity: 0; }
}`;
document.head.appendChild(styleSheet);

initGame();