/* ==========================================================================
   HOGWARTS BIRTHDAY QUEST ENGINE
   Dedicated to Akshi (Bauni Badmash, Leader of Bauni Samajh)
   ========================================================================== */

// Game State variables
let state = {
    collectedItems: new Set(),
    dumbledoreStep: 0,
    currentSceneIndex: 0,
    isQuestStarted: false
};

// Canvas references
let wandCanvas, wandCtx;
let wandParticles = [];
let confettiCanvas, confettiCtx;
let confettiParticles = [];
let sceneCanvases = {};

// On Page Load Initialization
document.addEventListener('DOMContentLoaded', () => {
    initWandCursor();
    initViewportScroll();
    initSceneBackgroundCanvases();
    initConfettiCanvas();
    renderConfigData();
    renderCharacterAvatars();
    startTypewriterEffect();
});

// Render Character SVG Avatar Portraits in Scenes
function renderCharacterAvatars() {
    if (typeof HOGWARTS_CONFIG === 'undefined') return;
    HOGWARTS_CONFIG.fillerCharacters.forEach(char => {
        const box = document.getElementById(`avatar-${char.id}`);
        if (box && char.svgAvatar) {
            box.innerHTML = char.svgAvatar;
        }
    });
}

// Typewriter continuous letter writing effect on Welcome Screen
// NOW with realistic typewriter click sound
function startTypewriterEffect() {
    const typewriterElement = document.getElementById('welcome-typewriter-text');
    if (!typewriterElement) return;

    const fullMessage = 
`Dear Akshi,

Hogwarts is in urgent need of your extraordinary magic! Dark forces have scattered 6 ancient Gryffindor relics across our castle grounds.

I need your help to explore the halls, gather these lost treasures, and unlock the Golden Chest to claim your official Acceptance Letter & Gryffindor glory!

Yours in magic,
Headmaster Albus Dumbledore`;

    let charIdx = 0;
    typewriterElement.innerText = "";

    const typeChar = () => {
        if (charIdx < fullMessage.length) {
            typewriterElement.innerText += fullMessage.charAt(charIdx);
            charIdx++;
            // Use realistic typewriter click (not on spaces/newlines)
            const ch = fullMessage.charAt(charIdx - 1);
            if (ch !== ' ' && ch !== '\n') {
                hogwartsAudio.playTypewriterClick();
            }
            // Vary speed for realism — faster for spaces, normal for letters
            const delay = (ch === ' ' || ch === '\n') ? 15 : 30 + Math.random() * 20;
            setTimeout(typeChar, delay);
        }
    };

    setTimeout(typeChar, 400);
}

// Populate Personalized Data & Photo Attachments from config.js
function renderConfigData() {
    if (typeof HOGWARTS_CONFIG === 'undefined') return;

    // Letter Modal
    const letterName = document.getElementById('letter-recipient-name');
    if (letterName) letterName.innerText = HOGWARTS_CONFIG.recipient.name;

    const letterTitle = document.getElementById('letter-recipient-title');
    if (letterTitle) letterTitle.innerText = `"${HOGWARTS_CONFIG.recipient.title.toUpperCase()} — ${HOGWARTS_CONFIG.recipient.fullTitle.toUpperCase()}"`;

    const letterWishes = document.getElementById('letter-wishes-content');
    if (letterWishes) letterWishes.innerText = HOGWARTS_CONFIG.recipient.personalWishes;

    // Render Photo Attachments Grid inside Letter
    const attachmentsGrid = document.getElementById('letter-attachments-grid');
    if (attachmentsGrid && HOGWARTS_CONFIG.recipient.memories) {
        attachmentsGrid.innerHTML = HOGWARTS_CONFIG.recipient.memories.map(mem => `
            <div class="attached-photo-card" onclick="openLightbox('${mem.src}', '${mem.caption}')">
                <img class="attached-photo-img" src="${encodeURI(mem.src)}" alt="${mem.title}" loading="lazy">
                <div class="attached-photo-info">
                    <div class="attached-photo-title">${mem.icon} ${mem.title}</div>
                    <div class="attached-photo-caption">${mem.caption}</div>
                </div>
            </div>
        `).join('');
    }
}

// Lightbox Modal for Photo Enlarge
function openLightbox(src, caption) {
    hogwartsAudio.playWandSpell();
    const lightbox = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');

    if (lightbox && img && cap) {
        img.src = src;
        cap.innerText = caption;
        lightbox.classList.add('active');
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) lightbox.classList.remove('active');
}

// Start Quest from Welcome Screen
function startHogwartsQuest() {
    hogwartsAudio.playWandSpell();
    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.classList.add('hidden');
    }
    state.isQuestStarted = true;
    updateDumbledoreDialogue("Splendid, Akshi! Scroll or click Next Room to explore the 6 halls of Hogwarts.");
}

// Toggle Audio Loop
function toggleAudio() {
    const playing = hogwartsAudio.toggleBgMusic();
    const label = document.getElementById('audio-label');
    const icon = document.getElementById('audio-icon');
    if (label && icon) {
        label.innerText = playing ? "Music: ON" : "Music: OFF";
        icon.innerText = playing ? "🎶" : "🎵";
    }
}

/* ==========================================================================
   STAGE NAVIGATION & AUTOMATIC SCROLLING (IMPROVED)
   ========================================================================== */
function scrollToSceneIndex(index) {
    const targetIdx = Math.max(0, Math.min(index, 5));
    if (targetIdx === state.currentSceneIndex) return; // No need to scroll to same scene

    state.currentSceneIndex = targetIdx;

    const world = document.getElementById('horizontal-world');
    if (world) {
        world.style.transform = `translateX(-${targetIdx * 100}vw)`;

        // Add scene transition effect
        world.style.opacity = '0.7';
        setTimeout(() => {
            world.style.opacity = '1';
        }, 200);
    }

    onSceneChanged(targetIdx);
}

function navPrevScene() {
    hogwartsAudio.playWandSpell();
    scrollToSceneIndex(state.currentSceneIndex - 1);
}

function navNextScene() {
    hogwartsAudio.playWandSpell();
    scrollToSceneIndex(state.currentSceneIndex + 1);
}

function initViewportScroll() {
    const viewport = document.getElementById('game-viewport');
    if (!viewport) return;

    // Mouse wheel navigation with debouncing
    let wheelTimeout;
    viewport.addEventListener('wheel', (e) => {
        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
            if (e.deltaY > 0) {
                navNextScene();
            } else if (e.deltaY < 0) {
                navPrevScene();
            }
        }, 50);
        e.preventDefault();
    }, { passive: false });

    // Touch/Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;

    viewport.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - go to next scene
                navNextScene();
            } else {
                // Swipe right - go to previous scene
                navPrevScene();
            }
        }
    }

    // Keyboard arrow navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            navNextScene();
        } else if (e.key === 'ArrowLeft') {
            navPrevScene();
        }
    });
}

function onSceneChanged(sceneIdx) {
    const sceneNames = [
        "COURTYARD",
        "GREAT HALL",
        "LIBRARY",
        "DUNGEON",
        "ASTRONOMY TOWER",
        "COMMON ROOM"
    ];

    const tagEl = document.getElementById('hud-scene-tag');
    if (tagEl) {
        tagEl.innerText = sceneNames[sceneIdx] || "HOGWARTS";
    }

    // Hide/Show Prev & Next Navigation Buttons appropriately
    const prevBtn = document.getElementById('nav-btn-prev');
    const nextBtn = document.getElementById('nav-btn-next');
    if (prevBtn) prevBtn.style.display = sceneIdx === 0 ? 'none' : 'flex';
    if (nextBtn) nextBtn.style.display = sceneIdx === 5 ? 'none' : 'flex';
}

/* ==========================================================================
   WAND CURSOR & LUMOS PARTICLE ENGINE
   ========================================================================== */
function initWandCursor() {
    wandCanvas = document.getElementById('wand-canvas');
    if (!wandCanvas) return;
    wandCtx = wandCanvas.getContext('2d');

    const resizeWand = () => {
        wandCanvas.width = window.innerWidth;
        wandCanvas.height = window.innerHeight;
    };
    resizeWand();
    window.addEventListener('resize', resizeWand);

    window.addEventListener('mousemove', (e) => {
        createWandSparkle(e.clientX, e.clientY);
    });

    window.addEventListener('click', (e) => {
        hogwartsAudio.playWandSpell();
        for (let i = 0; i < 15; i++) {
            createWandSparkle(e.clientX, e.clientY, true);
        }
    });

    animateWandSparkles();
}

function createWandSparkle(x, y, isBurst = false) {
    const speed = isBurst ? 4 : 1.5;
    wandParticles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed - (isBurst ? 1 : 0.5),
        size: Math.random() * (isBurst ? 5 : 3) + 1,
        color: Math.random() > 0.3 ? '#f5d061' : '#00f2fe',
        alpha: 1,
        life: Math.random() * 20 + 20
    });
}

function animateWandSparkles() {
    wandCtx.clearRect(0, 0, wandCanvas.width, wandCanvas.height);

    for (let i = wandParticles.length - 1; i >= 0; i--) {
        const p = wandParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 1 / p.life;

        if (p.alpha <= 0) {
            wandParticles.splice(i, 1);
            continue;
        }

        wandCtx.save();
        wandCtx.globalAlpha = p.alpha;
        wandCtx.fillStyle = p.color;
        wandCtx.shadowBlur = 10;
        wandCtx.shadowColor = p.color;
        wandCtx.beginPath();
        wandCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        wandCtx.fill();
        wandCtx.restore();
    }

    requestAnimationFrame(animateWandSparkles);
}

/* ==========================================================================
   ANIMATED SCENE CANVAS PARTICLES
   ========================================================================== */
function initSceneBackgroundCanvases() {
    const scenes = ['courtyard', 'great-hall', 'library', 'dungeon', 'astronomy', 'common-room'];
    scenes.forEach(id => {
        const canvas = document.getElementById(`canvas-${id}`);
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            sceneCanvases[id] = { canvas, ctx: canvas.getContext('2d'), particles: generateSceneParticles(id) };
        }
    });

    animateSceneCanvases();
}

function generateSceneParticles(type) {
    const list = [];
    const count = 30;
    for (let i = 0; i < count; i++) {
        list.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 3 + 1,
            speedY: Math.random() * 0.8 + 0.2,
            speedX: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.8 + 0.2,
            type: type
        });
    }
    return list;
}

function animateSceneCanvases() {
    Object.keys(sceneCanvases).forEach(key => {
        const { canvas, ctx, particles } = sceneCanvases[key];
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            if (key === 'courtyard') {
                p.y += p.speedY;
                p.x += p.speedX;
                if (p.y > canvas.height) p.y = 0;
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
            } else if (key === 'great-hall') {
                p.y -= p.speedY * 0.3;
                if (p.y < 0) p.y = canvas.height;
                ctx.fillStyle = `rgba(245, 208, 97, ${p.opacity})`;
            } else if (key === 'dungeon') {
                p.y -= p.speedY * 0.5;
                if (p.y < 0) p.y = canvas.height;
                ctx.fillStyle = `rgba(80, 200, 120, ${p.opacity * 0.5})`;
            } else if (key === 'astronomy') {
                p.opacity += (Math.random() - 0.5) * 0.05;
                if (p.opacity < 0.1) p.opacity = 0.1;
                if (p.opacity > 0.9) p.opacity = 0.9;
                ctx.fillStyle = `rgba(0, 242, 254, ${p.opacity})`;
            } else {
                p.y -= p.speedY * 0.6;
                p.x += p.speedX;
                if (p.y < 0) p.y = canvas.height;
                ctx.fillStyle = `rgba(255, 120, 40, ${p.opacity})`;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
    });

    requestAnimationFrame(animateSceneCanvases);
}

/* ==========================================================================
   ITEM COLLECTION & AUTOMATIC NEXT STAGE NAVIGATION
   ========================================================================== */
function collectItem(itemId) {
    if (state.collectedItems.has(itemId)) return;

    state.collectedItems.add(itemId);
    hogwartsAudio.playItemCollected();

    const itemObj = HOGWARTS_CONFIG.questItems.find(q => q.id === itemId);
    if (!itemObj) return;

    const slotIdx = state.collectedItems.size - 1;
    const slotEl = document.getElementById(`slot-${slotIdx}`);
    if (slotEl) {
        slotEl.classList.add('collected');
        slotEl.querySelector('.slot-icon').innerText = itemObj.icon;
        slotEl.querySelector('.slot-tooltip').innerText = itemObj.name;
    }

    const targetElement = event.currentTarget;
    if (targetElement) {
        targetElement.style.transform = 'scale(0) rotate(180deg)';
        targetElement.style.opacity = '0';
        setTimeout(() => targetElement.style.pointerEvents = 'none', 300);
    }

    showModal(
        itemObj.icon,
        `RELIC RECOVERED (${state.collectedItems.size}/6)`,
        itemObj.name,
        `${itemObj.description}<br><br><em>Headmaster Dumbledore: "Magnificent work, Akshi!"</em>`,
        null
    );

    updateDumbledoreDialogue(`Great job! You found ${itemObj.name}! (${state.collectedItems.size}/6 collected)`);

    // Automatic Navigation to Next Stage on Relic Collect!
    setTimeout(() => {
        if (state.collectedItems.size < 6) {
            scrollToSceneIndex(itemObj.sceneIndex + 1);
        }
    }, 1500);

    if (state.collectedItems.size === 6) {
        const badge = document.getElementById('chest-status-badge');
        if (badge) {
            badge.innerText = "UNLOCKED! Click to open with Alohomora ✨";
            badge.style.background = "linear-gradient(135deg, #00b09b, #96c93d)";
            badge.style.color = "#fff";
        }
        setTimeout(() => {
            scrollToSceneIndex(5); // Go to Gryffindor Common Room!
            updateDumbledoreDialogue("ALOHOMORA! All 6 relics gathered! Head to Gryffindor Common Room and open the Golden Chest!");
        }, 1200);
    }
}

/* ==========================================================================
   INTERACTIVE FILLERS & SECRET MYSTERIES
   ========================================================================== */
function interactFiller(charId) {
    hogwartsAudio.playDialogueBlip();
    const charObj = HOGWARTS_CONFIG.fillerCharacters.find(c => c.id === charId);
    if (!charObj) return;

    // Use character photo if available, otherwise fallback to SVG
    const characterVisual = charObj.characterPhoto
        ? `<img src="${charObj.characterPhoto}" alt="${charObj.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">`
        : charObj.svgAvatar;

    showModal(
        null,
        `HOGWARTS WIZARD CONVERSATION`,
        charObj.name,
        `"${charObj.dialogue}"<br><br><small style="color: var(--gold-glow); font-weight:600;">${charObj.actionText}</small>`,
        characterVisual
    );
}

function showTrivia(triviaId) {
    hogwartsAudio.playDialogueBlip();
    const triviaObj = HOGWARTS_CONFIG.triviaScrolls.find(t => t.id === triviaId);
    if (!triviaObj) return;

    showModal(
        triviaObj.icon || "✨",
        "SECRET HOGWARTS LORE",
        triviaObj.title,
        triviaObj.content,
        null
    );
}

/* ==========================================================================
   DUMBLEDORE DIALOGUE SYSTEM
   ========================================================================== */
function updateDumbledoreDialogue(text) {
    const card = document.getElementById('dumbledore-card-overlay');
    const textBody = document.getElementById('dumbledore-text-body');
    if (!card || !textBody) return;

    card.classList.remove('hidden');
    textBody.innerText = text;
    hogwartsAudio.playDialogueBlip();
}

function nextDumbledoreDialogue() {
    hogwartsAudio.playWandSpell();
    const card = document.getElementById('dumbledore-card-overlay');
    if (card) {
        card.classList.add('hidden');
    }
}

/* ==========================================================================
   MODAL MANAGER
   ========================================================================== */
function showModal(icon, tag, title, bodyHTML, svgContent = null) {
    const iconHeader = document.getElementById('modal-icon');
    const svgWrapper = document.getElementById('modal-char-svg-wrapper');

    if (svgContent) {
        if (iconHeader) iconHeader.style.display = 'none';
        if (svgWrapper) {
            svgWrapper.innerHTML = svgContent;
            svgWrapper.style.display = 'block';
        }
    } else {
        if (svgWrapper) svgWrapper.style.display = 'none';
        if (iconHeader) {
            iconHeader.style.display = icon ? 'block' : 'none';
            iconHeader.innerText = icon || "✨";
        }
    }

    document.getElementById('modal-tag').innerText = tag;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerHTML = bodyHTML;

    const modal = document.getElementById('general-modal');
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    hogwartsAudio.playWandSpell();
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

/* ==========================================================================
   GOLDEN CHEST UNLOCK & ACCEPTANCE LETTER REVEAL
   ========================================================================== */
function attemptChestOpen() {
    if (state.collectedItems.size < 6) {
        const remaining = 6 - state.collectedItems.size;
        hogwartsAudio.playDialogueBlip();
        showModal(
            "🔒",
            "THE CHEST IS SEALED",
            "Gryffindor Chest Locked",
            `Headmaster Dumbledore: "You need all 6 relics to unlock the chest! Find the remaining ${remaining} item(s)."`,
            null
        );
        return;
    }

    hogwartsAudio.playChestUnlock();
    
    const chestIcon = document.getElementById('chest-icon');
    if (chestIcon) chestIcon.innerText = "🔓✨";

    setTimeout(() => {
        const letterModal = document.getElementById('letter-modal-overlay');
        if (letterModal) letterModal.classList.add('active');
        celebrateFireworks();
    }, 800);
}

/* ==========================================================================
   CONFETTI & FIREWORKS ENGINE FOR BIRTHDAY REVEAL
   ========================================================================== */
function initConfettiCanvas() {
    confettiCanvas = document.getElementById('confetti-canvas');
    if (!confettiCanvas) return;
    confettiCtx = confettiCanvas.getContext('2d');

    const resizeConfetti = () => {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    };
    resizeConfetti();
    window.addEventListener('resize', resizeConfetti);

    animateConfetti();
}

function celebrateFireworks() {
    hogwartsAudio.playChestUnlock();
    for (let i = 0; i < 150; i++) {
        confettiParticles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight * 0.5,
            vx: (Math.random() - 0.5) * 8,
            vy: Math.random() * 5 - 8,
            size: Math.random() * 8 + 4,
            color: ['#f5d061', '#740001', '#00f2fe', '#ffffff', '#ffdf79'][Math.floor(Math.random() * 5)],
            alpha: 1,
            gravity: 0.15
        });
    }
}

function animateConfetti() {
    if (confettiCtx && confettiCanvas) {
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

        for (let i = confettiParticles.length - 1; i >= 0; i--) {
            const p = confettiParticles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.alpha -= 0.008;

            if (p.alpha <= 0) {
                confettiParticles.splice(i, 1);
                continue;
            }

            confettiCtx.save();
            confettiCtx.globalAlpha = p.alpha;
            confettiCtx.fillStyle = p.color;
            confettiCtx.fillRect(p.x, p.y, p.size, p.size);
            confettiCtx.restore();
        }
    }

    requestAnimationFrame(animateConfetti);
}
