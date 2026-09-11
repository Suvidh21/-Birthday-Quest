// Hogwarts Audio Engine — Real Music + Sound Effects
class HogwartsAudioEngine {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
        this.bgMusicPlaying = false;
        this.bgMusicTimeoutId = null;
        this.bgGainNode = null;
        this.bgAudioElement = null; // For real MP3 playback
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        // Initialize audio element for background music
        if (!this.bgAudioElement) {
            this.bgAudioElement = new Audio('hedwig_theme.mp3');
            this.bgAudioElement.loop = true;
            this.bgAudioElement.volume = 0.3;
        }
    }

    // Realistic typewriter key click using noise burst + filter
    playTypewriterClick() {
        if (this.isMuted) return;
        this.init();
        const now = this.ctx.currentTime;

        // Create white noise buffer (very short click)
        const bufferSize = Math.floor(this.ctx.sampleRate * 0.018); // 18ms click
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 3);
        }

        const noiseSource = this.ctx.createBufferSource();
        noiseSource.buffer = noiseBuffer;

        // Bandpass filter to shape it into a "click"
        const bpFilter = this.ctx.createBiquadFilter();
        bpFilter.type = 'bandpass';
        bpFilter.frequency.setValueAtTime(2800 + Math.random() * 600, now);
        bpFilter.Q.setValueAtTime(1.8, now);

        // Gain envelope — sharp attack, fast decay
        const clickGain = this.ctx.createGain();
        clickGain.gain.setValueAtTime(0.25 + Math.random() * 0.08, now);
        clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

        // Subtle low thud for mechanical feel
        const thudOsc = this.ctx.createOscillator();
        thudOsc.type = 'sine';
        thudOsc.frequency.setValueAtTime(120 + Math.random() * 40, now);
        const thudGain = this.ctx.createGain();
        thudGain.gain.setValueAtTime(0.06, now);
        thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

        noiseSource.connect(bpFilter);
        bpFilter.connect(clickGain);
        clickGain.connect(this.ctx.destination);

        thudOsc.connect(thudGain);
        thudGain.connect(this.ctx.destination);

        noiseSource.start(now);
        thudOsc.start(now);
        thudOsc.stop(now + 0.04);
    }

    // Play magical spell chime
    playWandSpell() {
        if (this.isMuted) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(2400, now + 0.3);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.3);
    }

    // Item collected magical harp arpeggio
    playItemCollected() {
        if (this.isMuted) return;
        this.init();
        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
        
        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.08);

            gain.gain.setValueAtTime(0.2, now + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + idx * 0.08);
            osc.stop(now + idx * 0.08 + 0.4);
        });
    }

    // Dialogue blip sound (for non-typewriter dialogues)
    playDialogueBlip() {
        if (this.isMuted) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(600 + Math.random() * 200, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.05);
    }

    // Alohomora Chest Opening Triumph Fanfare
    playChestUnlock() {
        if (this.isMuted) return;
        this.init();
        const now = this.ctx.currentTime;
        const chord = [392.00, 493.88, 587.33, 783.99, 987.77];
        
        chord.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + 0.2 + idx * 0.05);

            gain.gain.setValueAtTime(0.25, now + 0.2 + idx * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2 + idx * 0.05 + 1.2);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + 0.2 + idx * 0.05);
            osc.stop(now + 0.2 + idx * 0.05 + 1.2);
        });
    }

    // Hedwig's Theme — Real MP3 Playback
    toggleBgMusic() {
        this.init();
        this.bgMusicPlaying = !this.bgMusicPlaying;

        if (this.bgMusicPlaying) {
            this.bgAudioElement.play().catch(err => {
                console.log('Audio play failed:', err);
                // Fallback to synthesized version if MP3 fails
                this.startHedwigsTheme();
            });
        } else {
            this.bgAudioElement.pause();
            this.stopHedwigsTheme();
        }

        return this.bgMusicPlaying;
    }

    startHedwigsTheme() {
        // Fallback synthesized version (kept for compatibility)
        if (this.bgMusicTimeoutId) clearTimeout(this.bgMusicTimeoutId);

        // Hedwig's Theme (accurate note sequence with proper rhythm)
        // Each note: { freq, dur (seconds), rest (gap before next) }
        // B4-E5-G5-F#5-E5-B5-A5(hold)-F#5(hold)-E5-G5-F#5-D#5-E5-B4(hold)
        const melody = [
            // First phrase
            { freq: 493.88, dur: 0.32, rest: 0.05 },   // B4
            { freq: 659.25, dur: 0.52, rest: 0.05 },   // E5
            { freq: 783.99, dur: 0.20, rest: 0.05 },   // G5
            { freq: 739.99, dur: 0.32, rest: 0.05 },   // F#5
            { freq: 659.25, dur: 0.65, rest: 0.05 },   // E5 (held longer)
            { freq: 987.77, dur: 0.32, rest: 0.05 },   // B5
            { freq: 880.00, dur: 0.90, rest: 0.15 },   // A5 (long hold)
            { freq: 739.99, dur: 0.90, rest: 0.25 },   // F#5 (long hold)
            // Second phrase
            { freq: 659.25, dur: 0.52, rest: 0.05 },   // E5
            { freq: 783.99, dur: 0.20, rest: 0.05 },   // G5
            { freq: 739.99, dur: 0.32, rest: 0.05 },   // F#5
            { freq: 622.25, dur: 0.65, rest: 0.05 },   // D#5
            { freq: 659.25, dur: 0.90, rest: 0.15 },   // E5 (held)
            { freq: 493.88, dur: 1.10, rest: 0.50 },   // B4 (long hold + pause)
            // Third phrase (repeat with variation)
            { freq: 493.88, dur: 0.32, rest: 0.05 },   // B4
            { freq: 659.25, dur: 0.52, rest: 0.05 },   // E5
            { freq: 783.99, dur: 0.20, rest: 0.05 },   // G5
            { freq: 739.99, dur: 0.32, rest: 0.05 },   // F#5
            { freq: 659.25, dur: 0.65, rest: 0.05 },   // E5
            { freq: 987.77, dur: 0.32, rest: 0.05 },   // B5
            { freq: 1174.66, dur: 0.32, rest: 0.05 },  // D6
            { freq: 1108.73, dur: 0.32, rest: 0.05 },  // C#6
            { freq: 1046.50, dur: 0.65, rest: 0.05 },  // C6
            { freq: 830.61, dur: 0.32, rest: 0.05 },   // G#5
            { freq: 1046.50, dur: 0.52, rest: 0.05 },  // C6
            { freq: 987.77, dur: 0.20, rest: 0.05 },   // B5
            { freq: 932.33, dur: 0.32, rest: 0.05 },   // A#5
            { freq: 740.00, dur: 0.65, rest: 0.05 },   // F#5
            { freq: 783.99, dur: 0.32, rest: 0.05 },   // G5
            { freq: 659.25, dur: 0.90, rest: 0.15 },   // E5 (held)
            { freq: 493.88, dur: 1.10, rest: 0.80 },   // B4 (long hold + gap before loop)
        ];

        let noteIndex = 0;

        const playNote = () => {
            if (!this.bgMusicPlaying || this.isMuted) return;

            const note = melody[noteIndex];
            const now = this.ctx.currentTime;

            // Celesta-like lead (sine + slight harmonics)
            const osc1 = this.ctx.createOscillator();
            const osc2 = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(note.freq, now);

            // Slight harmonic overtone for celesta bell-like quality
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(note.freq * 2, now);

            const harmGain = this.ctx.createGain();
            harmGain.gain.setValueAtTime(0.04, now);
            harmGain.gain.exponentialRampToValueAtTime(0.001, now + note.dur * 0.7);

            gain.gain.setValueAtTime(0.18, now);
            gain.gain.setValueAtTime(0.18, now + note.dur * 0.6);
            gain.gain.exponentialRampToValueAtTime(0.001, now + note.dur);

            osc1.connect(gain);
            osc2.connect(harmGain);
            harmGain.connect(this.ctx.destination);
            gain.connect(this.ctx.destination);

            osc1.start(now);
            osc1.stop(now + note.dur);
            osc2.start(now);
            osc2.stop(now + note.dur);

            noteIndex = (noteIndex + 1) % melody.length;

            // Schedule next note
            const nextDelay = (note.dur + note.rest) * 1000;
            this.bgMusicTimeoutId = setTimeout(playNote, nextDelay);
        };

        playNote();
    }

    stopHedwigsTheme() {
        if (this.bgMusicTimeoutId) {
            clearTimeout(this.bgMusicTimeoutId);
            this.bgMusicTimeoutId = null;
        }
    }
}

const hogwartsAudio = new HogwartsAudioEngine();
