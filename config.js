// Hogwarts Birthday Quest Configuration for Akshi
const HOGWARTS_CONFIG = {
    recipient: {
        name: "AKSHI CHHANGANI",
        shortName: "Akshi",
        title: "Bauni Badmash",
        fullTitle: "Leader of the Bauni Samajh",
        house: "GRYFFINDOR",
        personalWishes: "Wishing you a truly magical Birthday filled with endless joy, extraordinary spells, infinite happiness, and epic adventures! You are officially the most legendary wizard of our time! 🎉⚡✨",
        studentIdCard: "ChatGPT Image Jul 4, 2026, 12_47_10 AM.png",
        platformTicket: "download (8).jpg",
        memories: [
            { title: "Official Student ID", src: "ChatGPT Image Jul 4, 2026, 12_47_10 AM.png", caption: "Registered Hogwarts Student ID Card — House of Gryffindor", icon: "🆔" },
            { title: "Gryffindor Portrait", src: "ChatGPT Image Jul 4, 2026, 12_37_12 AM.png", caption: "Akshi in Full Gryffindor Robes", icon: "🦁" },
            { title: "Hogwarts Scrapbook", src: "ChatGPT Image Jul 4, 2026, 12_59_29 AM.png", caption: "Master of Spells & Leader of Bauni Samajh", icon: "📖" },
            { title: "Platform 9 ¾ Ticket", src: "download (8).jpg", caption: "London to Hogwarts Express Ticket — Special Pass", icon: "🎟️" },
            { title: "Hogsmeade Castle View", src: "hogsmeade_.jpg", caption: "Hogsmeade Scenery View", icon: "🏰" }
        ]
    },

    // 6 Quest Items naturally placed in Hogwarts scenes
    questItems: [
        {
            id: "snitch",
            name: "The Golden Snitch",
            location: "Courtyard",
            sceneIndex: 0,
            icon: "⚡",
            description: "Fluttering gently near the snowy courtyard wall. It carries the first key snippet!",
            hint: "Look near the illuminated courtyard archway!"
        },
        {
            id: "sorting_hat",
            name: "The Sorting Hat",
            location: "Great Hall",
            sceneIndex: 1,
            icon: "🎩",
            description: "Resting on the High Table. It whispers: 'Unmistakable bravery and wit... GRYFFINDOR!'",
            hint: "Check the wooden feast tables in the Great Hall!"
        },
        {
            id: "marauders_map",
            name: "The Marauder's Map",
            location: "Library",
            sceneIndex: 2,
            icon: "📜",
            description: "Tucked inside an ancient leather tome. 'I solemnly swear that I am up to no good.'",
            hint: "Search among the glowing bookshelves in the Restricted Section!"
        },
        {
            id: "felix_felicis",
            name: "Felix Felicis (Liquid Luck)",
            location: "Potions Dungeon",
            sceneIndex: 3,
            icon: "🧪",
            description: "A glowing golden vial of pure good luck for your upcoming birthday year!",
            hint: "Gleaming on the dungeon potions desk next to green cauldrons!"
        },
        {
            id: "elder_wand",
            name: "The Elder Wand",
            location: "Astronomy Tower",
            sceneIndex: 4,
            icon: "🪄",
            description: "Resting on the moonlit stone balcony ledge, channeling star light!",
            hint: "Gazing up at the stars atop the Astronomy Tower balcony!"
        },
        {
            id: "gryffindor_crest",
            name: "Gryffindor Crest Key",
            location: "Common Room",
            sceneIndex: 5,
            icon: "🦁",
            description: "The golden lion crest key. The final artifact to unlock your Birthday Chest!",
            hint: "Hanging above the warm fireplace in Gryffindor Common Room!"
        }
    ],

    // Harry Potter Characters — Detailed SVG Portraits
    fillerCharacters: [
        {
            id: "hagrid",
            name: "Rubeus Hagrid",
            sceneIndex: 0,
            avatarIcon: "🧙‍♂️",
            characterPhoto: "hagrid.jpg",
            svgAvatar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="58" fill="#1a0f06" stroke="#f5d061" stroke-width="3"/>
                <!-- Moleskin coat -->
                <path d="M20 95 Q 25 65, 60 62 Q 95 65, 100 95 L 100 120 L 20 120 Z" fill="#4a3520"/>
                <path d="M35 70 L 45 95 L 60 80 L 75 95 L 85 70" fill="none" stroke="#6b4a2e" stroke-width="2"/>
                <!-- Face -->
                <ellipse cx="60" cy="52" rx="22" ry="20" fill="#c9956b"/>
                <!-- Massive wild hair & beard -->
                <path d="M15 35 Q 20 10, 60 8 Q 100 10, 105 35 Q 110 65, 95 85 Q 80 95, 60 98 Q 40 95, 25 85 Q 10 65, 15 35 Z" fill="#1a0d04" opacity="0.95"/>
                <!-- Face cutout -->
                <ellipse cx="60" cy="48" rx="16" ry="13" fill="#c9956b"/>
                <!-- Beetle black eyes -->
                <circle cx="53" cy="46" r="3" fill="#000"/><circle cx="67" cy="46" r="3" fill="#000"/>
                <circle cx="54" cy="45" r="1" fill="#fff"/><circle cx="68" cy="45" r="1" fill="#fff"/>
                <!-- Rosy cheeks -->
                <circle cx="48" cy="51" r="4" fill="#d4826a" opacity="0.4"/>
                <circle cx="72" cy="51" r="4" fill="#d4826a" opacity="0.4"/>
                <!-- Nose -->
                <ellipse cx="60" cy="50" rx="4" ry="3" fill="#b5845e"/>
                <!-- Mouth in beard -->
                <path d="M54 56 Q 60 60 66 56" stroke="#8b5e3c" stroke-width="1.5" fill="none"/>
                <!-- Bushy eyebrows -->
                <path d="M46 40 Q 53 37, 56 40" stroke="#1a0d04" stroke-width="3" fill="none"/>
                <path d="M64 40 Q 67 37, 74 40" stroke="#1a0d04" stroke-width="3" fill="none"/>
            </svg>`,
            dialogue: "Ah! Happy Birthday, Akshi! I'm just tendin' to the Pygmy Puffs and giant pumpkins. Dumbledore's relyin' on ya to find those lost Gryffindor relics!",
            actionText: "Hagrid hands you a piping hot mug of Butterbeer! 🍺"
        },
        {
            id: "dobby",
            name: "Dobby the House-Elf",
            sceneIndex: 1,
            avatarIcon: "🧦",
            characterPhoto: null, // Will use SVG avatar as fallback
            svgAvatar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="58" fill="#1c2536" stroke="#f5d061" stroke-width="3"/>
                <!-- Pillowcase body -->
                <path d="M40 78 L 38 115 L 82 115 L 80 78 Q 60 72, 40 78 Z" fill="#d4c9a8" stroke="#a89e80" stroke-width="1"/>
                <!-- Head (big for elf) -->
                <ellipse cx="60" cy="52" rx="24" ry="22" fill="#c9b897"/>
                <!-- Giant bat ears (LEFT) -->
                <path d="M36 50 Q 8 30, 12 55 Q 14 62, 36 58 Z" fill="#c9b897" stroke="#a89e80" stroke-width="1"/>
                <path d="M34 52 Q 14 38, 16 55 Q 17 58, 34 56 Z" fill="#d4a8a0" opacity="0.5"/>
                <!-- Giant bat ears (RIGHT) -->
                <path d="M84 50 Q 112 30, 108 55 Q 106 62, 84 58 Z" fill="#c9b897" stroke="#a89e80" stroke-width="1"/>
                <path d="M86 52 Q 106 38, 104 55 Q 103 58, 86 56 Z" fill="#d4a8a0" opacity="0.5"/>
                <!-- Giant green tennis-ball eyes -->
                <ellipse cx="48" cy="50" rx="10" ry="11" fill="#88b04b"/>
                <ellipse cx="72" cy="50" rx="10" ry="11" fill="#88b04b"/>
                <circle cx="48" cy="49" r="5" fill="#2d5a1e"/><circle cx="72" cy="49" r="5" fill="#2d5a1e"/>
                <circle cx="48" cy="49" r="2.5" fill="#000"/><circle cx="72" cy="49" r="2.5" fill="#000"/>
                <circle cx="50" cy="47" r="1.5" fill="#fff"/><circle cx="74" cy="47" r="1.5" fill="#fff"/>
                <!-- Nose (long pointy) -->
                <path d="M58 54 Q 60 62, 62 54" fill="#b5a283" stroke="#a09070" stroke-width="0.8"/>
                <!-- Happy mouth -->
                <path d="M52 64 Q 60 70, 68 64" stroke="#7a6a55" stroke-width="1.5" fill="none"/>
                <!-- Sock on ear! -->
                <path d="M10 42 L 8 28 Q 12 24, 16 30 L 14 42" fill="#740001" stroke="#f5d061" stroke-width="1"/>
            </svg>`,
            dialogue: "Dobby is so happy to see Akshi! Dobby has baked a giant floating birthday cake for the Leader of Bauni Samajh!",
            actionText: "Dobby snaps his fingers and makes birthday sparkles dance in the air! ✨"
        },
        {
            id: "hermione",
            name: "Hermione Granger",
            sceneIndex: 2,
            avatarIcon: "📚",
            characterPhoto: "hermione.jpg",
            svgAvatar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="58" fill="#2a1520" stroke="#f5d061" stroke-width="3"/>
                <!-- Gryffindor robes -->
                <path d="M32 80 L 28 120 L 92 120 L 88 80 Q 60 72, 32 80 Z" fill="#1a1a2e"/>
                <!-- Gryffindor tie -->
                <path d="M56 78 L 54 100 L 60 102 L 66 100 L 64 78 Z" fill="#740001"/>
                <path d="M55 82 L 65 82 M55 86 L 65 86 M55 90 L 65 90 M55 94 L 65 94" stroke="#f5d061" stroke-width="1.5"/>
                <!-- White collar -->
                <path d="M48 78 L 60 84 L 72 78" fill="none" stroke="#fff" stroke-width="2"/>
                <!-- Bushy brown hair (signature Hermione) -->
                <path d="M22 40 Q 18 15, 60 10 Q 102 15, 98 40 Q 105 60, 95 80 Q 85 90, 60 88 Q 35 90, 25 80 Q 15 60, 22 40 Z" fill="#5c3317"/>
                <!-- Hair texture waves -->
                <path d="M28 45 Q 35 35, 30 50 Q 25 60, 30 70" stroke="#6b3c1f" stroke-width="2" fill="none"/>
                <path d="M92 45 Q 85 35, 90 50 Q 95 60, 90 70" stroke="#6b3c1f" stroke-width="2" fill="none"/>
                <path d="M35 30 Q 45 22, 50 30" stroke="#6b3c1f" stroke-width="1.5" fill="none"/>
                <path d="M70 30 Q 75 22, 85 30" stroke="#6b3c1f" stroke-width="1.5" fill="none"/>
                <!-- Face -->
                <ellipse cx="60" cy="52" rx="20" ry="19" fill="#f3c8a5"/>
                <!-- Brown eyes -->
                <ellipse cx="52" cy="49" rx="4" ry="4.5" fill="#fff"/>
                <ellipse cx="68" cy="49" rx="4" ry="4.5" fill="#fff"/>
                <circle cx="52" cy="49" r="2.5" fill="#3b2314"/><circle cx="68" cy="49" r="2.5" fill="#3b2314"/>
                <circle cx="53" cy="48" r="1" fill="#fff"/><circle cx="69" cy="48" r="1" fill="#fff"/>
                <!-- Eyebrows -->
                <path d="M47 44 Q 52 42, 56 44" stroke="#3b2314" stroke-width="1.5" fill="none"/>
                <path d="M64 44 Q 68 42, 73 44" stroke="#3b2314" stroke-width="1.5" fill="none"/>
                <!-- Nose -->
                <path d="M58 52 Q 60 56, 62 52" fill="none" stroke="#d4a888" stroke-width="1"/>
                <!-- Smile -->
                <path d="M52 60 Q 60 66, 68 60" stroke="#c0392b" stroke-width="1.5" fill="none"/>
                <!-- Rosy cheeks -->
                <circle cx="46" cy="56" r="3.5" fill="#e8a0a0" opacity="0.35"/>
                <circle cx="74" cy="56" r="3.5" fill="#e8a0a0" opacity="0.35"/>
            </svg>`,
            dialogue: "Happy Birthday, Akshi! Did you know? In ancient runes, 'Bauni Badmash' translates to 'Master of Supreme Magic'! Keep searching for the artifacts!",
            actionText: "Hermione levitates three glowing spellbooks into a flying birthday arch! 📚✨"
        },
        {
            id: "snape",
            name: "Professor Snape",
            sceneIndex: 3,
            avatarIcon: "🧪",
            characterPhoto: null, // Will use SVG avatar as fallback
            svgAvatar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="58" fill="#0a0d14" stroke="#f5d061" stroke-width="3"/>
                <!-- Black robes -->
                <path d="M28 80 L 22 120 L 98 120 L 92 80 Q 60 70, 28 80 Z" fill="#0d0d0d"/>
                <!-- High collar -->
                <path d="M40 78 L 45 85 L 55 80 M 80 78 L 75 85 L 65 80" stroke="#1a1a1a" stroke-width="2" fill="#111"/>
                <!-- Greasy black curtain hair -->
                <path d="M25 35 Q 30 12, 60 10 Q 90 12, 95 35 Q 100 60, 90 85 L 85 95 Q 60 90, 35 95 L 30 85 Q 20 60, 25 35 Z" fill="#0a0a0a"/>
                <!-- Straight hair strands -->
                <path d="M30 40 L 28 75" stroke="#151515" stroke-width="1.5"/>
                <path d="M35 35 L 32 70" stroke="#151515" stroke-width="1"/>
                <path d="M90 40 L 92 75" stroke="#151515" stroke-width="1.5"/>
                <path d="M85 35 L 88 70" stroke="#151515" stroke-width="1"/>
                <!-- Pale sallow face -->
                <ellipse cx="60" cy="50" rx="19" ry="20" fill="#e8d8c8"/>
                <!-- Hooked nose -->
                <path d="M60 42 L 57 56 L 63 55" fill="#d4c4b0" stroke="#c4b09a" stroke-width="0.8"/>
                <!-- Dark eyes with heavy lids -->
                <ellipse cx="50" cy="47" rx="4" ry="3.5" fill="#fff"/>
                <ellipse cx="70" cy="47" rx="4" ry="3.5" fill="#fff"/>
                <circle cx="50" cy="47" r="2.5" fill="#000"/><circle cx="70" cy="47" r="2.5" fill="#000"/>
                <!-- Heavy brows -->
                <path d="M44 42 Q 50 39, 55 42" stroke="#000" stroke-width="2" fill="none"/>
                <path d="M65 42 Q 70 39, 76 42" stroke="#000" stroke-width="2" fill="none"/>
                <!-- Thin stern mouth -->
                <path d="M52 62 L 68 62" stroke="#8a6e60" stroke-width="1.5"/>
                <!-- Dark circles under eyes -->
                <path d="M46 51 Q 50 53, 54 51" stroke="#c4b09a" stroke-width="0.8" fill="none"/>
                <path d="M66 51 Q 70 53, 74 51" stroke="#c4b09a" stroke-width="0.8" fill="none"/>
            </svg>`,
            dialogue: "Hmm... 100 points to Gryffindor for Akshi's birthday. Take care not to disturb the Felix Felicis potion...",
            actionText: "Snape hands you a glowing golden elixir with a subtle nod! 🧪"
        },
        {
            id: "luna",
            name: "Luna Lovegood",
            sceneIndex: 4,
            avatarIcon: "👓",
            characterPhoto: "luna.jpg",
            svgAvatar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="58" fill="#182736" stroke="#f5d061" stroke-width="3"/>
                <!-- Ravenclaw robes -->
                <path d="M34 82 L 30 120 L 90 120 L 86 82 Q 60 74, 34 82 Z" fill="#1a1a3e"/>
                <!-- Ravenclaw tie -->
                <path d="M56 80 L 54 100 L 60 102 L 66 100 L 64 80 Z" fill="#0e1a40"/>
                <path d="M55 84 L 65 84 M55 88 L 65 88 M55 92 L 65 92" stroke="#946b2d" stroke-width="1.5"/>
                <!-- Long blonde wavy hair -->
                <path d="M22 38 Q 25 10, 60 8 Q 95 10, 98 38 Q 105 65, 95 90 Q 88 105, 75 110 Q 60 112, 45 110 Q 32 105, 25 90 Q 15 65, 22 38 Z" fill="#f7e08b"/>
                <!-- Hair waves texture -->
                <path d="M30 50 Q 28 60, 32 75 Q 30 85, 35 95" stroke="#e6cf6b" stroke-width="2" fill="none"/>
                <path d="M90 50 Q 92 60, 88 75 Q 90 85, 85 95" stroke="#e6cf6b" stroke-width="2" fill="none"/>
                <path d="M40 25 Q 50 18, 55 28" stroke="#e6cf6b" stroke-width="1.5" fill="none"/>
                <!-- Face -->
                <ellipse cx="60" cy="50" rx="19" ry="18" fill="#fce4d6"/>
                <!-- Spectrespecs (multicolored oversized glasses) -->
                <circle cx="48" cy="47" r="10" fill="none" stroke="#e91e63" stroke-width="3"/>
                <circle cx="48" cy="47" r="8" fill="rgba(233,30,99,0.15)"/>
                <circle cx="72" cy="47" r="10" fill="none" stroke="#00bcd4" stroke-width="3"/>
                <circle cx="72" cy="47" r="8" fill="rgba(0,188,212,0.15)"/>
                <line x1="58" y1="47" x2="62" y2="47" stroke="#666" stroke-width="2"/>
                <!-- Dreamy eyes behind spectrespecs -->
                <circle cx="48" cy="47" r="3" fill="#87CEEB"/><circle cx="72" cy="47" r="3" fill="#87CEEB"/>
                <circle cx="48" cy="47" r="1.5" fill="#000"/><circle cx="72" cy="47" r="1.5" fill="#000"/>
                <!-- Nose -->
                <path d="M58 52 Q 60 55, 62 52" fill="none" stroke="#e0c0a8" stroke-width="1"/>
                <!-- Serene smile -->
                <path d="M52 58 Q 60 64, 68 58" stroke="#c0795a" stroke-width="1.5" fill="none"/>
                <!-- Radish earrings! -->
                <circle cx="28" cy="65" r="4" fill="#e74c3c"/>
                <path d="M27 61 L 29 61 L 28 58" fill="#27ae60"/>
                <circle cx="92" cy="65" r="4" fill="#e74c3c"/>
                <path d="M91 61 L 93 61 L 92 58" fill="#27ae60"/>
                <!-- Cork necklace -->
                <path d="M45 72 Q 50 75, 55 72 Q 60 75, 65 72 Q 70 75, 75 72" stroke="#8d6e4c" stroke-width="1.5" fill="none"/>
            </svg>`,
            dialogue: "Happy Birthday, Akshi! Look through my Spectrespecs! Friendly birthday Wrackspurts are whispering secret wishes around you!",
            actionText: "Luna hands you a pair of enchanted 3D Spectrespecs! 👓✨"
        },
        {
            id: "ron",
            name: "Ron Weasley",
            sceneIndex: 5,
            avatarIcon: "♟️",
            characterPhoto: "ron.jpg",
            svgAvatar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="58" fill="#2a1510" stroke="#f5d061" stroke-width="3"/>
                <!-- Gryffindor robes -->
                <path d="M32 82 L 28 120 L 92 120 L 88 82 Q 60 74, 32 82 Z" fill="#1a1a2e"/>
                <!-- Gryffindor tie -->
                <path d="M56 80 L 54 100 L 60 102 L 66 100 L 64 80 Z" fill="#740001"/>
                <path d="M55 84 L 65 84 M55 88 L 65 88 M55 92 L 65 92" stroke="#f5d061" stroke-width="1.5"/>
                <!-- White collar -->
                <path d="M48 80 L 60 86 L 72 80" fill="none" stroke="#fff" stroke-width="2"/>
                <!-- Bright red/orange Weasley hair -->
                <path d="M25 38 Q 28 14, 60 10 Q 92 14, 95 38 Q 98 55, 90 70 Q 85 78, 60 76 Q 35 78, 30 70 Q 22 55, 25 38 Z" fill="#d35400"/>
                <!-- Hair parted, messy texture -->
                <path d="M55 12 Q 60 8, 65 12" stroke="#e67e22" stroke-width="2" fill="none"/>
                <path d="M40 18 Q 48 12, 52 18" stroke="#c0470a" stroke-width="1.5" fill="none"/>
                <path d="M68 18 Q 72 12, 80 18" stroke="#c0470a" stroke-width="1.5" fill="none"/>
                <!-- Face -->
                <ellipse cx="60" cy="50" rx="20" ry="19" fill="#fce4d6"/>
                <!-- Freckles! -->
                <circle cx="48" cy="54" r="1" fill="#d4826a" opacity="0.6"/>
                <circle cx="45" cy="56" r="1" fill="#d4826a" opacity="0.5"/>
                <circle cx="51" cy="56" r="0.8" fill="#d4826a" opacity="0.5"/>
                <circle cx="72" cy="54" r="1" fill="#d4826a" opacity="0.6"/>
                <circle cx="75" cy="56" r="1" fill="#d4826a" opacity="0.5"/>
                <circle cx="69" cy="56" r="0.8" fill="#d4826a" opacity="0.5"/>
                <!-- Blue eyes -->
                <ellipse cx="52" cy="48" rx="4" ry="4.5" fill="#fff"/>
                <ellipse cx="68" cy="48" rx="4" ry="4.5" fill="#fff"/>
                <circle cx="52" cy="48" r="2.5" fill="#2980b9"/><circle cx="68" cy="48" r="2.5" fill="#2980b9"/>
                <circle cx="53" cy="47" r="1" fill="#fff"/><circle cx="69" cy="47" r="1" fill="#fff"/>
                <!-- Eyebrows -->
                <path d="M47 43 Q 52 41, 56 43" stroke="#c0470a" stroke-width="1.5" fill="none"/>
                <path d="M64 43 Q 68 41, 73 43" stroke="#c0470a" stroke-width="1.5" fill="none"/>
                <!-- Long nose -->
                <path d="M59 46 Q 60 54, 62 54" fill="none" stroke="#e0c0a8" stroke-width="1"/>
                <!-- Big grin -->
                <path d="M50 60 Q 60 68, 70 60" stroke="#c0392b" stroke-width="2" fill="none"/>
                <!-- Rosy ears -->
                <ellipse cx="38" cy="52" rx="4" ry="6" fill="#fce4d6" stroke="#e8c0a0" stroke-width="0.5"/>
                <ellipse cx="82" cy="52" rx="4" ry="6" fill="#fce4d6" stroke="#e8c0a0" stroke-width="0.5"/>
            </svg>`,
            dialogue: "Knight to E4! Happy Birthday, Akshi! You're almost at the chest — open it and claim your Gryffindor letter!",
            actionText: "Ron moves a wizard chess piece with a triumphant thud! ♟️"
        }
    ],

    // Secret Hogwarts Lore & Intriguing Facts
    triviaScrolls: [
        {
            id: "trivia_kitchen",
            title: "🔮 Secret Hogwarts Mystery",
            sceneIndex: 0,
            icon: "✨",
            content: "To enter the secret Hogwarts Kitchens, wizards must tickle a painted green pear on a bowl of fruit painting until it giggles and turns into a doorknob!"
        },
        {
            id: "trivia_peeves",
            title: "⚡ Forbidden Castle Lore",
            sceneIndex: 1,
            icon: "👻",
            content: "Peeves the Poltergeist was born when Hogwarts was founded over 1,000 years ago from the collective chaotic energy of thousands of mischievous students!"
        },
        {
            id: "trivia_room_requirement",
            title: "📜 Hidden Room of Requirement",
            sceneIndex: 2,
            icon: "🚪",
            content: "The Room of Requirement only appears when a wizard walks past Barnabas the Barmy tapestry 3 times thinking deeply of what they need!"
        },
        {
            id: "trivia_hufflepuff",
            title: "🧪 Secret House Passwords",
            sceneIndex: 3,
            icon: "🛢️",
            content: "Hufflepuff is the only house with a security system that douses impostors in vinegar if they tap the wrong barrel!"
        },
        {
            id: "trivia_ravenclaw",
            title: "🔭 The Eagle Knocker Riddle",
            sceneIndex: 4,
            icon: "🦅",
            content: "Ravenclaw Tower has no password! An enchanted bronze eagle knocker asks a deep riddle, and if answered correctly, grants entry to anyone!"
        },
        {
            id: "trivia_dumbledore",
            title: "👑 Headmaster's Secret Sweet",
            sceneIndex: 5,
            icon: "🍋",
            content: "Professor Dumbledore's favorite Muggle candy is Sherbet Lemons, and the password to his Headmaster's office is often named after his favorite sweets!"
        }
    ]
};
