# 🎂 Bhakti's Birthday Surprise Website 🎉

A handcrafted, interactive birthday surprise website dedicated to **Bhakti** for her special day (October 20, 2026), built with a warm, celebratory, and respectful best-friend aesthetic!

---

## ✨ Features & Highlights

1. **🌟 Grand Welcome Screen**
   - Full-screen animated intro: *"Hey Bhakti, Someone Has a Special Surprise for You... 🎁"*
   - Floating stars, sparkles, and gentle ambient stardust.
   - Interactive *"Open Your Surprise 🎁"* reveal button that smoothly transitions into the birthday experience.

2. **🎉 Birthday Hero Section**
   - Elegant glowing birthday typography: *"Happy Birthday, Bhakti! 🎂✨"*
   - Dedicated message: *"Today is all about you. May your smile always shine brighter than the stars, your heart stay full of happiness, and your life be filled with beautiful memories."*
   - Floating celebration balloons and celebratory confetti buttons.
   - **Live IST Digital Celebration Countdown Ticker** counting down the joyful hours of her birthday.

3. **🎂 Interactive 3D Birthday Cake**
   - Tiered celebration cake with glowing candle flames.
   - Interactive button to **"Blow Out the Candles 🎂"** (animates flames to gentle smoke & sparkles).
   - Confetti blast with *"Make a Wish, Bhakti! ✨"* confirmation card.
   - Option to relight candles and celebrate again.

4. **💌 Heartfelt Birthday Note**
   - Animated envelope with an antique wax seal.
   - Clicking opens the envelope and smoothly unfolds the heartfelt letter.
   - Signed respectfully as a cherished friend: *"Your friend always, Cheers & Best Wishes ✨"*.
   - Entirely customizable from a single configuration file (`src/config/birthdayData.ts`).

5. **📸 Memory Gallery & Lightbox**
   - Elegant polaroid-style glassmorphism photo cards with hover tilt and zoom effects.
   - Lightbox modal with next/previous navigation, full-screen view, and captions.
   - Graceful fallback for all photos so broken images never appear.

6. **🎁 Surprise Gift Box Unboxing**
   - 3D gift box with ribbon.
   - Unwraps on click with celebratory confetti showers.
   - Reveals: *"One More Reason to Smile Today — YOU! 🌟"*
   - Typewriter animation typing out a warm, uplifting tribute celebrating her friendship and kindness.

7. **🎵 Ambient Background Music**
   - Visible toggle in the navigation bar with animated equalizer wave bars.
   - Starts only after user interaction (clicking "Open Your Surprise" or the music button).
   - Built-in resilient Web Audio API piano chime music box synthesizer fallback — plays offline without depending on external MP3 URLs!

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS + Vanilla CSS glassmorphism & 3D keyframe animations
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti

---

## 🚀 How to Run Locally

1. Open PowerShell or Terminal in the project directory:
   ```bash
   cd C:\Users\Dhruvit\.gemini\antigravity-ide\scratch\bhakti-birthday-surprise
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

---

## ⚙️ How to Personalize Everything (Single Config File)

All text, gallery photos, and music can be customized in **one single file**:
📂 [`src/config/birthdayData.ts`](./src/config/birthdayData.ts)

### 1. Changing Photos
In `src/config/birthdayData.ts`, replace the image URLs in the `gallery` array:
```typescript
{
  id: "mem-1",
  url: "https://your-domain.com/photo.jpg", // or local path "/photos/photo1.jpg"
  fallbackUrl: "...",
  title: "A Great Memory",
  subtitle: "That fun afternoon we all hung out!",
  dateTag: "Best Memories",
}
```
> **Tip:** You can place personal photos in the `public/` directory (e.g., `public/photos/bhakti1.jpg`) and refer to them as `/photos/bhakti1.jpg`.

### 2. Changing the Letter
Edit the `letter` object in `src/config/birthdayData.ts`:
```typescript
letter: {
  salutation: "Dear Bhakti,",
  paragraphs: [
    "Happy Birthday to someone who deserves all the happiness in the world! ❤️",
    // add or edit any paragraphs you want
  ],
  closing: "Your friend always,",
  signature: "Cheers & Best Wishes ✨",
}
```

### 3. Adding Custom Background Music
To use a custom MP3 audio track:
1. Place your MP3 file into the `public/` folder as `public/music.mp3`.
2. The player will automatically load and stream it with the fallback synth if unavailable.

---

## 🌐 Deployment (Vercel & Netlify)

### To Vercel:
1. Push this folder to a GitHub repository.
2. Import the project on [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**!

### To Netlify:
1. Drag and drop the `dist/` folder directly into [Netlify Drop](https://app.netlify.com/drop).
2. Or link your GitHub repository with build command `npm run build` and publish directory `dist`.
