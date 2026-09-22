# AM Industries — Portfolio (Mike)

---

## Getting Mike (AI) Working — FREE Setup

Mike runs on **Groq** — completely free, no credit card needed.

1. Go to **https://console.groq.com**
2. Sign up (free)
3. Click **API Keys** → **Create API Key**
4. Copy the key
5. Open the `.env` file in this folder
6. Replace `your_groq_api_key_here` with your actual key
7. Save the file

That's it. Mike is now live. The key is used by the Vercel API function and is
never bundled into the browser.

> **Note:** When you deploy to Vercel, add `GROQ_API_KEY` as an environment variable in your Vercel project settings with the same key value.

---

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

For local AI requests, run the project with Vercel's local runtime instead:

```bash
npx vercel dev
```

---

## Deploying to Vercel

1. Push this folder to a GitHub repo (make sure `.env` is in `.gitignore` — it already is)
2. Go to **vercel.com** → New Project → Import your repo
3. Framework: **Vite** (auto-detected)
4. Under **Environment Variables**, add:
  - Name: `GROQ_API_KEY`
   - Value: your Groq API key
5. Deploy

---

## Swapping Your Photo

**Background portrait (hero):**
Replace `public/images/bg_me.jpg` with your cinematic portrait.
The CSS already applies grayscale + contrast treatment.

**Contact card portrait:**
Replace `public/images/card_me_3.png` with a clear face crop.

---

## Adding Gallery Photos

Open `src/sections/Gallery.jsx` and add items to the `galleryItems` array:

```js
{
  src: '/images/your-photo.jpg',   // place photo in public/images/
  caption: 'Short caption here',
  category: 'competition',         // competition | project | team | life
},
```

---

## Adding Project Images

1. Place your image in `public/images/` (e.g. `green-route.jpg`)
2. Open `src/data/index.js`
3. Find the project and update `image: null` to `image: '/images/green-route.jpg'`

---

## Updating Content

Everything lives in `src/data/index.js`:
- `identityPhrases` — cycling hero text
- `projects` — project cards + case studies
- `experience` — timeline
- `achievements` — competition record
- `posts` — field notes
- `mikeSystemPrompt` — Mike's entire knowledge base (update this as your story grows)

---

## Adding a New Post

```js
{
  id: 5,
  title: 'Your title',
  tag: 'idea',           // observation | lesson | build-log | idea
  date: 'Sep 2026',
  image: '/images/post-image.jpg',   // optional
  excerpt: 'One-line preview.',
  content: 'Full content. Use \n\n for paragraph breaks.',
},
```
