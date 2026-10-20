/**
 * PromptSpark Hub — "Viral AI Prompts, Copied in One Click"
 * ==========================================================
 * Master prompt library data file.
 *
 * Format:
 *   const CATEGORIES = ["All", "Video Prompts", "Image Prompts", "Text Prompts", "Viral Niches"];
 *   const PROMPTS = [ { id, title, category, tool, difficulty, desc, prompt, howto[], tips[], tags[], trending, popularity }, ... ];
 *
 * Field rules:
 *   - id:         unique kebab-case slug, e.g. "cinematic-drone-flyover-veo3"
 *   - title:      SEO-friendly, includes the tool name
 *   - category:   "Video Prompts" | "Image Prompts" | "Text Prompts"
 *   - tool:       "Veo 3" | "Kling" | "Sora" | "Runway" | "Google Flow" |
 *                 "Midjourney" | "Gemini" | "ChatGPT" | "Claude"
 *   - difficulty: "Beginner" | "Intermediate" | "Advanced"
 *   - desc:       1-2 lines, used in cards and meta descriptions
 *   - prompt:     the FULL copyable prompt text (80-200 words), detailed and usable
 *   - howto:      array of 4-6 concrete steps to use it
 *   - tips:       array of 2-3 pro tips
 *   - tags:       3-5 lowercase tags
 *   - trending:   boolean, true for ~8 entries
 *   - popularity: number 50-100
 *
 * APPEND CONTRACT (for the daily cron that adds 10 prompts/day):
 *   1. Each new entry must be an object with EXACTLY these fields in this order:
 *      id, title, category, tool, difficulty, desc, prompt, howto, tips, tags, trending, popularity.
 *   2. `id` MUST be unique across the whole file — the build dedupes by id, so a
 *      duplicate id will silently replace (not duplicate) the existing entry.
 *      Always use a fresh kebab-case slug that includes the tool, e.g. "cozy-room-tour-sora".
 *   3. `category` must match the tool's lane: Video Prompts for Veo 3/Kling/Sora/Runway/Google Flow,
 *      Image Prompts for Midjourney, Text Prompts for Gemini/ChatGPT/Claude.
 *   4. `howto` must have 4-6 steps, `tips` 2-3, `tags` 3-5 lowercase tags, `popularity` 50-100.
 *   5. Append new entries INSIDE the PROMPTS array, before the closing "];".
 *      Do not touch existing entries. Then run `node --check prompts.js`.
 *
 * Example entry for the append job:
 *   {
 *     id: "cozy-room-tour-sora",
 *     title: "Cozy Room Tour Video Prompt for Sora",
 *     category: "Video Prompts",
 *     tool: "Sora",
 *     difficulty: "Beginner",
 *     desc: "A warm, slow-pan tour of a cozy gamer bedroom with fairy lights and rain on the window.",
 *     prompt: "Slow cinematic pan across a cozy gamer bedroom at night, fairy lights glowing warm, rain streaking the window, plush rug, stacked books, soft lo-fi ambience, camera drifts left to right at eye level, shallow depth of field, 16:9, no people, photorealistic, ultra detailed",
 *     howto: [
 *       "Open Sora and start a new video generation.",
 *       "Paste the prompt above into the prompt box.",
 *       "Set aspect ratio to 16:9 and duration to 10 seconds.",
 *       "Generate, then loop or chain two clips for a full tour.",
 *       "Export and post with cozy/aesthetic hashtags."
 *     ],
 *     tips: [
 *       "Swap 'gamer bedroom' for any room type — kitchen, studio, reading nook.",
 *       "Add 'rain sounds' style cues in the caption for ASMR crossover appeal."
 *     ],
 *     tags: ["room tour", "cozy", "aesthetic", "sora", "tiktok"],
 *     trending: false,
 *     popularity: 74
 *   },
 */

const CATEGORIES = ["All", "Video Prompts", "Image Prompts", "Text Prompts", "Viral Niches"];

const PROMPTS = [
  {
    id: "cinematic-drone-flyover-veo3",
    title: "Cinematic Drone Flyover Video Prompt for Veo 3",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Beginner",
    desc: "A sweeping golden-hour drone flyover of a dramatic coastline that looks straight out of a travel film — the single most-shared AI video style on TikTok.",
    prompt: "Breathtaking cinematic drone flyover of a rugged Mediterranean coastline at golden hour, waves crashing against towering cliffs, a lone lighthouse glowing warm on the headland, camera glides forward and slowly descends in one smooth continuous motion, volumetric sunlight breaking through light sea mist, seagulls drifting in the distance, white foam tracing patterns on the dark water below, distant sailboats catching the last light, rich teal and amber color grade, shot on 24mm wide lens, shallow atmospheric haze, 24fps cinematic motion, photorealistic, ultra detailed, 16:9, no text, no watermark, no people in close-up",
    howto: [
      "Open Veo 3 and start a new text-to-video generation.",
      "Paste the full prompt above into the prompt field — keep every camera and lighting detail.",
      "Set aspect ratio to 16:9 (YouTube) or 9:16 (TikTok/Reels) before generating.",
      "Generate 2-3 variations and pick the one with the smoothest camera motion.",
      "Add subtle cinematic music and a location caption, then export and post."
    ],
    tips: [
      "Swap 'Mediterranean coastline' for any landmark — mountains, waterfalls, desert dunes — the formula works everywhere.",
      "If the camera motion stutters, regenerate with 'slow' and 'smooth' emphasized and shorten the clip to 5 seconds."
    ],
    tags: ["drone", "cinematic", "travel", "veo3", "tiktok"],
    trending: true,
    popularity: 98
  },
  {
    id: "asmr-cutting-veo3",
    title: "ASMR Cutting Video Prompt for Veo 3",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Beginner",
    desc: "A hypnotic macro ASMR cutting clip — glass fruit slicing in ultra slow motion. The oddly-satisfying niche that racks up millions of loops.",
    prompt: "Extreme macro close-up of a razor-sharp chef's knife slicing through a translucent glass apple on a dark slate surface, the blade glides in buttery slow motion as crystal shards separate with delicate cracking, each slice falling in perfect rhythm, tiny glass fragments scattering and catching the light, dramatic side lighting catching every refractive edge, shallow depth of field with creamy bokeh background, dark moody studio aesthetic, faint reflections dancing on the slate, 120fps slow-motion feel, hyper-detailed textures, satisfying symmetrical composition, photorealistic, 9:16 vertical, no hands visible, no text, no watermark",
    howto: [
      "Open Veo 3 and paste the prompt into a new text-to-video project.",
      "Choose 9:16 vertical aspect ratio — ASMR content lives on TikTok and Reels.",
      "Generate and check the cut moment frame by frame; the blade contact must look clean.",
      "Layer a crisp slicing sound effect in your editor (Veo 3 visuals + real ASMR audio = viral combo).",
      "Loop the clip seamlessly and post with #asmr #oddlysatisfying hashtags."
    ],
    tips: [
      "Try 'glass watermelon', 'kinetic sand cube', or 'frozen soap' as the cut object for fresh variations.",
      "Keep clips under 8 seconds — short loops get watched 3-5x, which the algorithm loves."
    ],
    tags: ["asmr", "cutting", "satisfying", "veo3", "macro"],
    trending: true,
    popularity: 95
  },
  {
    id: "product-commercial-shot-veo3",
    title: "Luxury Product Commercial Shot Prompt for Veo 3",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Intermediate",
    desc: "A high-end perfume commercial shot with slow-motion liquid and studio lighting — perfect for faceless product affiliate content.",
    prompt: "Luxury perfume commercial shot: a faceted crystal perfume bottle standing on wet black marble, a slow-motion splash of golden liquid arcs around it in mid-air, dramatic rim lighting outlines the glass in warm amber while a cool blue backlight creates depth, camera orbits slowly in a 45-degree arc at product eye level, micro-droplets suspended and sparkling, soft smoke drifting through the background, deep shadows, premium advertising aesthetic, hyper-detailed reflections, 120fps slow-motion feel, photorealistic, 16:9, no text, no hands, no watermark",
    howto: [
      "Open Veo 3 and paste the prompt, swapping 'perfume bottle' for your actual product if needed.",
      "Set 16:9 for YouTube ads or 9:16 for TikTok Shop / Reels product clips.",
      "Generate 3-4 takes; pick the orbit with the most elegant liquid motion.",
      "Add your product name as a lower-third graphic in editing — never bake text into the AI render.",
      "Use it as a B-roll hero shot in product reviews or affiliate videos."
    ],
    tips: [
      "Describe materials precisely ('faceted crystal', 'wet black marble') — Veo 3 renders premium materials far better with specific nouns.",
      "For skincare or supplements, change the liquid color to match the brand palette."
    ],
    tags: ["product", "commercial", "luxury", "veo3", "affiliate"],
    trending: true,
    popularity: 92
  },
  {
    id: "nature-macro-veo3",
    title: "Nature Macro Video Prompt for Veo 3",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Intermediate",
    desc: "A jaw-dropping macro shot of a bee on a dew-covered flower — nature content that stops the scroll cold.",
    prompt: "Stunning macro video of a honeybee collecting pollen on a vibrant purple wildflower at dawn, individual dewdrops glistening like glass beads on the petals, the bee's wings a soft blur of motion while its fuzzy body stays tack sharp, extreme shallow depth of field turning the meadow into a dreamy green bokeh wash, first light of sunrise warming the scene from the side, tiny pollen particles drifting in the air, camera holds steady with a barely-there slow push-in, nature documentary quality, hyper-detailed, photorealistic, 16:9, no text, no watermark",
    howto: [
      "Open Veo 3, paste the prompt, and generate at 16:9 for the fullest detail.",
      "Watch the push-in closely — macro shots fail when the focus plane drifts, so regenerate if the bee goes soft.",
      "Pair with calm nature audio or a trending ambient sound for Reels.",
      "Post in the morning (your audience's time) — nature content performs best at daypart.",
      "Series it: same prompt family with 'butterfly', 'ladybug', or 'spider web' builds a following."
    ],
    tips: [
      "Name the exact insect and flower — generic 'bug on flower' prompts produce mushy results.",
      "'Barely-there slow push-in' keeps the camera subtle; aggressive macro moves break realism."
    ],
    tags: ["nature", "macro", "wildlife", "veo3", "documentary"],
    trending: false,
    popularity: 78
  },
  {
    id: "satisfying-loop-kling",
    title: "Perfect Satisfying Loop Video Prompt for Kling",
    category: "Video Prompts",
    tool: "Kling",
    difficulty: "Beginner",
    desc: "An endlessly looping paint-pour spiral engineered for infinite replays — Kling's motion smoothing makes loops seamless.",
    prompt: "Mesmerizing top-down shot of glossy pastel paint pouring in a continuous spiral onto a spinning canvas, ribbons of pink, lavender, and mint folding into each other in perfect fluid motion, the pattern must loop seamlessly so the end frame matches the start frame exactly, even studio lighting with no harsh shadows, ultra-smooth slow rotation, hypnotic symmetrical composition, satisfying fluid dynamics, macro detail on the paint textures, vibrant but soft color palette, photorealistic, 9:16 vertical, no text, no hands, no watermark",
    howto: [
      "Open Kling and start a text-to-video generation with this prompt.",
      "Set 9:16 vertical and a 5-10 second duration — short is better for loops.",
      "Generate, then trim the last 3-4 frames in your editor so the loop point is invisible.",
      "Add a soft ambient or lo-fi track and post as a loop — watch time compounds on replays.",
      "Duplicate the concept with different color palettes for a series."
    ],
    tips: [
      "Explicitly writing 'end frame matches the start frame' dramatically improves Kling's loop coherence.",
      "Pastel palettes outperform neon for this niche — they feel premium and get saved more."
    ],
    tags: ["loop", "satisfying", "paint", "kling", "oddlysatisfying"],
    trending: true,
    popularity: 93
  },
  {
    id: "anime-scene-kling",
    title: "Anime Rain Scene Video Prompt for Kling",
    category: "Video Prompts",
    tool: "Kling",
    difficulty: "Intermediate",
    desc: "A Studio-Ghibli-style anime girl running through neon-lit Tokyo rain — anime edits are a massive TikTok niche.",
    prompt: "Beautiful anime scene in the style of a modern feature film: a girl with flowing dark hair runs through a rain-soaked Tokyo alley at night, neon signs in pink and cyan reflecting on the wet pavement, her school uniform fluttering, rain streaking diagonally across the frame, camera tracks alongside her in a smooth lateral dolly at waist height, distant city glow and bokeh lights, puddles rippling with each footstep, dramatic rim light on her silhouette, rich saturated colors, fluid 24fps animation motion, clean linework, cinematic composition, 9:16 vertical, no text, no watermark, no photorealism",
    howto: [
      "Open Kling, paste the prompt, and generate in 9:16 vertical.",
      "If the character design drifts between frames, regenerate with a shorter 5-second duration.",
      "Pair with a trending anime audio or phonk track — sound drives this niche.",
      "Add subtle film grain and letterbox bars in editing for the cinematic feel.",
      "Post with anime hashtags and engage the anime-edit community in comments."
    ],
    tips: [
      "Always include 'no photorealism' — otherwise Kling drifts toward live-action faces.",
      "Name a lighting mood ('neon rain', 'sunset rooftop', 'cherry blossom wind') to anchor each scene in a series."
    ],
    tags: ["anime", "rain", "tokyo", "kling", "aesthetic"],
    trending: true,
    popularity: 89
  },
  {
    id: "morphing-transformation-kling",
    title: "Morphing Transformation Video Prompt for Kling",
    category: "Video Prompts",
    tool: "Kling",
    difficulty: "Advanced",
    desc: "A seamless butterfly-to-mechanical metamorphosis morph — transformation videos are pure share bait.",
    prompt: "Seamless morphing transformation sequence: a vivid blue morpho butterfly resting on a dark branch begins to transform, its wings folding and reshaping into brushed-metal mechanical panels with glowing cyan circuitry, the metamorphosis flows in one continuous fluid motion with no cuts, camera slowly pushes in as gears and delicate mechanisms unfold from the wings, dramatic underlighting, floating dust particles, dark elegant background, hyper-detailed mechanical textures blending with organic wing patterns, cinematic sci-fi aesthetic, smooth 24fps motion, photorealistic, 16:9, no text, no watermark",
    howto: [
      "Open Kling and paste the full prompt — morphs need the 'one continuous fluid motion, no cuts' instruction.",
      "Generate at 16:9 and review the midpoint frames where the morph happens.",
      "If the morph jumps, add 'gradual, frame-by-frame transformation' and regenerate.",
      "Time a bass-drop or riser sound effect to the exact morph midpoint in editing.",
      "Try car-to-robot or flower-to-crystal variants once the butterfly version works."
    ],
    tips: [
      "Morphs work best between objects that share a silhouette — butterfly wings to panels, car to robot.",
      "Render at the longest duration Kling allows; rushed morphs look like jump cuts."
    ],
    tags: ["morph", "transformation", "sci-fi", "kling", "viral"],
    trending: false,
    popularity: 81
  },
  {
    id: "sports-highlights-kling",
    title: "Sports Highlights Style Video Prompt for Kling",
    category: "Video Prompts",
    tool: "Kling",
    difficulty: "Advanced",
    desc: "An ESPN-style slow-motion skateboard trick sequence — sports edits pull huge engagement from young audiences.",
    prompt: "Epic sports highlight sequence: a skateboarder launches off a concrete stair set at golden hour, the kickflip captured in dramatic slow motion as the board spins beneath him, camera whips alongside in a dynamic tracking shot then freezes briefly at the peak of the trick, dust kicking up from the wheels, lens flare from the low sun, crowd silhouettes cheering in the blurred background, high-contrast broadcast sports color grade, motion blur on the background with tack-sharp subject, 120fps slow-motion feel, photorealistic, 9:16 vertical, no text overlays, no watermark, no logos",
    howto: [
      "Open Kling, paste the prompt, and generate in 9:16 for Reels/TikTok sports pages.",
      "Check the board physics closely — AI often mangles spinning objects; regenerate until the flip reads clean.",
      "Add punchy sports commentary-style captions and a hype track in editing.",
      "Cut to the beat: place the trick peak on the music drop.",
      "Swap 'skateboarder' for basketball dunks, BMX, or parkour to cover the whole niche."
    ],
    tips: [
      "'Freezes briefly at the peak' gives you the money frame for a thumbnail or cover image.",
      "Golden hour lighting hides AI artifacts better than harsh midday sun."
    ],
    tags: ["sports", "skateboard", "slowmotion", "kling", "highlights"],
    trending: false,
    popularity: 74
  },
  {
    id: "pov-walking-tour-sora",
    title: "POV Walking Tour Video Prompt for Sora",
    category: "Video Prompts",
    tool: "Sora",
    difficulty: "Intermediate",
    desc: "A first-person evening walk through a Kyoto alley — POV travel videos feel real and get saved obsessively.",
    prompt: "Immersive first-person POV walking tour through a narrow Kyoto alley at dusk, traditional wooden machiya houses glowing with warm lantern light on both sides, stone pavement glistening from a recent rain, a cat crossing ahead in the distance, steam rising from a small ramen shop doorway, paper lanterns swaying gently overhead, camera moves at a natural human walking pace with subtle head-bob realism, occasional slow glances left and right, deep blue twilight sky above the rooftops, cinematic travel-film color grade, photorealistic, ultra detailed, 9:16 vertical, no visible person, no text, no watermark",
    howto: [
      "Open Sora and paste the prompt into a new generation.",
      "Use 9:16 vertical — POV content is consumed on phones.",
      "Generate a 10-second clip, then chain 2-3 clips with different alleys for a full tour.",
      "Add authentic ambient audio (footsteps, distant chatter) in editing — sound sells the realism.",
      "Caption it like a real traveler: 'POV: you found the quiet side of Kyoto.'"
    ],
    tips: [
      "'Subtle head-bob realism' is the magic phrase — without it, POV clips feel like drone footage.",
      "Sora handles long coherent walks well; push duration to the max for fewer seams."
    ],
    tags: ["pov", "travel", "kyoto", "sora", "walking"],
    trending: true,
    popularity: 90
  },
  {
    id: "miniature-worlds-sora",
    title: "Miniature Tilt-Shift World Video Prompt for Sora",
    category: "Video Prompts",
    tool: "Sora",
    difficulty: "Advanced",
    desc: "A bustling tiny city rendered as a tilt-shift miniature diorama — the miniature effect is endlessly rewatchable.",
    prompt: "Enchanting tilt-shift miniature world: a tiny coastal fishing village rendered like a handcrafted diorama, miniature boats bobbing in a glassy harbor, tiny figures walking along the pier, seagulls circling a miniature lighthouse, shallow depth of field with the signature tilt-shift blur band across the top and bottom of the frame, camera slowly orbits the scene from a high three-quarter angle, warm afternoon sunlight, hyper-detailed tiny textures on rooftops and water, whimsical storybook atmosphere, subtle life and motion everywhere, photorealistic miniature photography style, 16:9, no text, no watermark",
    howto: [
      "Open Sora, paste the prompt, and generate at 16:9 for maximum diorama detail.",
      "Verify the tilt-shift blur bands are present — they sell the miniature illusion.",
      "Slow the clip to 90% speed in editing for an even more delicate, toy-like feel.",
      "Add gentle music-box or acoustic audio to complete the storybook mood.",
      "Build a series: miniature Tokyo, miniature Paris, miniature spaceport."
    ],
    tips: [
      "The phrase 'handcrafted diorama' plus 'tilt-shift blur band' is what locks the miniature look.",
      "Keep motion subtle — tiny worlds feel real when movement is delicate, not frantic."
    ],
    tags: ["miniature", "tilt-shift", "diorama", "sora", "whimsical"],
    trending: true,
    popularity: 88
  },
  {
    id: "historical-reimagining-sora",
    title: "Historical Reimagining Video Prompt for Sora",
    category: "Video Prompts",
    tool: "Sora",
    difficulty: "Advanced",
    desc: "1920s New York reimagined in vivid color with film grain — history content with a cinematic twist educates and entertains.",
    prompt: "Cinematic historical reimagining: a bustling 1920s New York street corner rendered in vivid lifelike color, vintage automobiles with brass headlamps rolling past, sharply dressed pedestrians in period coats and cloche hats, an elevated train rattling overhead on iron tracks, shop signs and streetlamps glowing warm, subtle 35mm film grain and gentle gate weave for authentic archival feel, camera performs a slow deliberate dolly forward through the crowd, rich period-accurate details on every storefront, warm tungsten and cool daylight mixing naturally, photorealistic, 16:9, no modern elements, no text overlays, no watermark",
    howto: [
      "Open Sora and paste the prompt, choosing your own era and city.",
      "Generate at 16:9 — history content thrives on YouTube as well as Shorts.",
      "Double-check for anachronisms (modern cars, signage) and regenerate if any slip in.",
      "Add a period-appropriate music track and an educational voiceover for watch time.",
      "Title it as a question — 'What did 1920s New York REALLY look like?' — for clicks."
    ],
    tips: [
      "'No modern elements' is essential — one smartphone in frame destroys the illusion.",
      "Film grain plus gate weave sells archival authenticity better than any color grade."
    ],
    tags: ["history", "1920s", "newyork", "sora", "educational"],
    trending: false,
    popularity: 72
  },
  {
    id: "city-timelapse-runway",
    title: "Day-to-Night City Timelapse Prompt for Runway",
    category: "Video Prompts",
    tool: "Runway",
    difficulty: "Beginner",
    desc: "A hypnotic day-to-night skyline timelapse with traffic light trails — timelapses are evergreen high-retention content.",
    prompt: "Stunning day-to-night timelapse of a modern city skyline viewed from across a river, the sun sets behind glass skyscrapers igniting the clouds in orange and pink, city lights flicker on one by one as deep blue twilight settles, car light trails streak along the riverside highway in long red and white ribbons, clouds race across the sky, stars emerging faintly overhead, water reflections shimmering, perfectly smooth accelerated motion with no flicker, cinematic color grade, ultra sharp, photorealistic, 16:9, no text, no watermark",
    howto: [
      "Open Runway and paste the prompt into text-to-video.",
      "Set 16:9 and the longest duration available for a full day-to-night arc.",
      "Watch for flicker between frames — Runway usually handles this well, but regenerate if lights strobe unnaturally.",
      "Add a slow cinematic score; timelapses pair beautifully with orchestral or lo-fi tracks.",
      "Use as an intro/outro background or a standalone Shorts post."
    ],
    tips: [
      "'No flicker' and 'perfectly smooth accelerated motion' are the key phrases for clean timelapses.",
      "River or water in the foreground doubles the visual interest through reflections."
    ],
    tags: ["timelapse", "city", "skyline", "runway", "cinematic"],
    trending: false,
    popularity: 76
  },
  {
    id: "street-food-runway",
    title: "Street Food Slow-Motion Prompt for Runway",
    category: "Video Prompts",
    tool: "Runway",
    difficulty: "Intermediate",
    desc: "Sizzling Bangkok street food in mouth-watering slow motion — food content is one of the highest-engagement niches on Earth.",
    prompt: "Mouth-watering street food scene: a Bangkok night-market stall where a chef tosses noodles in a roaring wok, flames leaping dramatically as steam billows upward, captured in luscious slow motion, glistening oil droplets suspended in the air, vibrant colors of fresh chilies, basil, and shrimp, camera circles the wok in a slow orbit at close range, neon market signs glowing bokeh in the background, dramatic warm tungsten lighting, shallow depth of field, hyper-detailed food textures, appetizing commercial food-film aesthetic, photorealistic, 9:16 vertical, no text, no watermark",
    howto: [
      "Open Runway, paste the prompt, and generate in 9:16 vertical.",
      "Focus your review on the food textures — they must look appetizing, not plasticky.",
      "Add sizzling sound effects in editing; food videos live or die on audio.",
      "Post at lunch or dinner time in your target timezone for maximum cravings.",
      "Localize it: swap Bangkok for Istanbul kebabs, Mexico City tacos, or Karachi BBQ."
    ],
    tips: [
      "Name 3-4 specific ingredients — 'chilies, basil, and shrimp' renders far richer than 'food'.",
      "The slow wok orbit is more dynamic than a static shot and hides minor AI wobble."
    ],
    tags: ["food", "streetfood", "slowmotion", "runway", "bangkok"],
    trending: false,
    popularity: 83
  },
  {
    id: "fashion-lookbook-runway",
    title: "Fashion Lookbook Video Prompt for Runway",
    category: "Video Prompts",
    tool: "Runway",
    difficulty: "Intermediate",
    desc: "A high-fashion editorial lookbook walk with dramatic studio lighting — perfect for faceless fashion affiliate pages.",
    prompt: "High-fashion editorial lookbook video: a model strides confidently toward camera down a minimalist concrete runway space, wearing an avant-garde oversized beige trench coat with structured shoulders, fabric flowing with each step, dramatic single-source side lighting carving strong shadows, camera tracks backward smoothly keeping the model centered in a medium-full shot, subtle slow motion on the turn at the end of the walk, stark gallery-white background with soft vignette, luxury magazine aesthetic, hyper-detailed fabric textures, 24fps cinematic motion, photorealistic, 9:16 vertical, no text, no logos, no watermark",
    howto: [
      "Open Runway and paste the prompt, customizing the outfit description to your niche.",
      "Generate in 9:16 — lookbooks are made for Reels and TikTok.",
      "Check hands and feet closely; regenerate if anatomy glitches appear.",
      "Add a trending fashion audio and on-screen outfit details in editing.",
      "Link similar real outfits in your bio for affiliate revenue."
    ],
    tips: [
      "Describe the garment in detail ('oversized beige trench, structured shoulders') — vague outfits render blandly.",
      "The backward-tracking camera keeps the model framed perfectly and looks professionally shot."
    ],
    tags: ["fashion", "lookbook", "editorial", "runway", "style"],
    trending: false,
    popularity: 79
  },
  {
    id: "epic-space-google-flow",
    title: "Epic Space Flythrough Video Prompt for Google Flow",
    category: "Video Prompts",
    tool: "Google Flow",
    difficulty: "Intermediate",
    desc: "A jaw-dropping nebula flythrough ending on a massive spaceship reveal — space content consistently overperforms.",
    prompt: "Epic space exploration sequence: the camera hurtles through a vast crimson and violet nebula, stars streaking past, wisps of cosmic gas parting to reveal a colossal ringed spaceship emerging from the clouds, its running lights blazing, camera sweeps in a grand arc around the vessel's hull revealing intricate panel details and glowing engine cores, a distant blue planet hangs in the starfield below, volumetric god rays cutting through the nebula dust, IMAX-scale sense of wonder, deep rich blacks, cinematic sci-fi color grade, smooth 24fps motion, photorealistic, ultra detailed, 16:9, no text, no watermark",
    howto: [
      "Open Google Flow and paste the prompt into a new scene.",
      "Use Flow's scene builder to extend the shot: nebula flythrough first, ship reveal second.",
      "Generate at 16:9 for the full IMAX-scale framing.",
      "Add a deep orchestral or synth score — space needs weight in the audio.",
      "Great as a YouTube intro, Shorts hook, or standalone awe post."
    ],
    tips: [
      "Google Flow excels at multi-shot sequences — split the flythrough and the reveal into two connected scenes.",
      "Name specific colors ('crimson and violet') to avoid the generic blue-space look everyone posts."
    ],
    tags: ["space", "sci-fi", "nebula", "googleflow", "cinematic"],
    trending: false,
    popularity: 85
  },
  {
    id: "underwater-dive-google-flow",
    title: "Underwater Coral Reef Dive Prompt for Google Flow",
    category: "Video Prompts",
    tool: "Google Flow",
    difficulty: "Beginner",
    desc: "A serene dive through a sunlit coral reef with a sea turtle — calming underwater videos get incredible watch time.",
    prompt: "Serene underwater diving scene: gliding slowly through a vibrant coral reef garden, shafts of sunlight piercing the turquoise water from above, a graceful sea turtle swimming past the camera in the foreground, schools of small silver fish parting like curtains, colorful corals and swaying sea fans in rich detail, tiny bubbles rising, camera moves in a smooth forward glide at a diver's pace, natural caustic light patterns dancing on the sand, tranquil blue-green color grade, crystal clear water, photorealistic, ultra detailed, 16:9, no text, no watermark, no divers visible",
    howto: [
      "Open Google Flow and paste the prompt for a new underwater scene.",
      "Generate at 16:9 — wide framing sells the scale of the reef.",
      "Check the turtle's motion; marine life is where AI artifacts show first.",
      "Layer gentle underwater ambience audio for a relaxing, high-retention video.",
      "Post as 'relaxing ocean' content — this niche has a devoted, returning audience."
    ],
    tips: [
      "'No divers visible' keeps the scene pristine and avoids awkward AI human rendering underwater.",
      "Caustic light patterns ('dancing on the sand') are the detail that makes underwater AI look real."
    ],
    tags: ["underwater", "ocean", "reef", "googleflow", "relaxing"],
    trending: false,
    popularity: 77
  },
  {
    id: "luxury-lifestyle-google-flow",
    title: "Luxury Yacht Lifestyle Video Prompt for Google Flow",
    category: "Video Prompts",
    tool: "Google Flow",
    difficulty: "Advanced",
    desc: "A cinematic superyacht sunset scene dripping with luxury — aspirational lifestyle content that brands pay for.",
    prompt: "Aspirational luxury lifestyle film: a gleaming white superyacht anchored off a tropical island at sunset, champagne being poured in slow motion on the aft deck with the golden liquid catching the light, an infinity pool on the deck mirroring the orange sky, camera begins with a wide aerial establishing shot then sweeps down to deck level in one fluid move, palm silhouettes on the island shore, gentle waves lapping the hull, warm cinematic color grade with rich golds and deep teals, filmic 24fps motion, photorealistic, ultra detailed, 16:9, no text, no people in close-up, no watermark, no brand logos",
    howto: [
      "Open Google Flow and build this as two connected scenes: aerial wide, then deck-level detail.",
      "Generate at 16:9 for YouTube luxury compilations or 9:16 for Reels.",
      "Keep people distant or absent — AI faces in luxury content break the fantasy fast.",
      "Add a motivational voiceover about success habits to turn views into followers.",
      "Pitch similar clips to travel and finance brands once your page grows."
    ],
    tips: [
      "'No brand logos' protects you from trademark issues when monetizing luxury content.",
      "The aerial-to-deck camera move is what separates amateur clips from film-like ones."
    ],
    tags: ["luxury", "yacht", "lifestyle", "googleflow", "aspirational"],
    trending: false,
    popularity: 71
  },
  {
    id: "viral-youtube-thumbnail-midjourney",
    title: "Viral YouTube Thumbnail Prompt for Midjourney",
    category: "Image Prompts",
    tool: "Midjourney",
    difficulty: "Beginner",
    desc: "A high-CTR YouTube thumbnail formula with bold contrast and expressive faces — thumbnails decide clicks before titles do.",
    prompt: "YouTube thumbnail background image, ultra high contrast, a shocked expressive man pointing at a glowing futuristic holographic chart exploding with green arrows, dramatic red and yellow gradient background, bold empty negative space on the left side for title text, hyper-detailed face with wide eyes and open mouth, cinematic lighting, vibrant saturated colors, crisp edges, subtle glow effects around the hologram, dynamic diagonal composition leading the eye, 16:9 composition, photorealistic, 8k --ar 16:9 --style raw --v 6.1 --no text, watermark, blurry, distorted hands",
    howto: [
      "Open Midjourney (Discord or web) and paste the prompt, replacing the subject with your video topic.",
      "Keep the --ar 16:9 and --no text flags — thumbnails need the exact ratio and zero baked-in text.",
      "Upscale the best of 4 variations, then add your 3-5 word title text in Canva or Photoshop.",
      "Leave the negative space empty in the render — that is where your text goes.",
      "A/B test two thumbnail variants per video; CTR differences of 2%+ are common."
    ],
    tips: [
      "Always leave negative space for text — a thumbnail with no room for words is unusable.",
      "'Shocked expressive face + bold background' remains the highest-CTR formula across niches."
    ],
    tags: ["thumbnail", "youtube", "ctr", "midjourney", "design"],
    trending: false,
    popularity: 91
  },
  {
    id: "minimalist-logo-midjourney",
    title: "Minimalist Logo Design Prompt for Midjourney",
    category: "Image Prompts",
    tool: "Midjourney",
    difficulty: "Intermediate",
    desc: "A clean vector-style logo concept for a tech startup — generate brand identities in minutes, not days.",
    prompt: "Minimalist logo design for a tech startup called Nova, a sleek geometric fox head formed from sharp triangular facets, gradient from electric blue to violet, flat vector style, perfectly symmetrical, centered on a clean white background with generous padding, professional brand identity quality, crisp clean lines, subtle negative space detailing the fox's eyes, no shading gradients on the mark itself, modern sans-serif wordmark below reading NOVA, timeless and scalable design, --ar 1:1 --style raw --v 6.1 --no text errors, watermark, photo, 3d render, clutter",
    howto: [
      "Open Midjourney and paste the prompt, swapping the animal, name, and colors for your brand.",
      "Generate with --ar 1:1 and pick the cleanest, most symmetrical mark.",
      "Upscale, then vectorize in a tool like Vectorizer.ai for a true scalable logo.",
      "Test it at 32px favicon size — if it is unreadable tiny, simplify the prompt.",
      "Recolor variants give you a full brand kit: primary, mono black, mono white."
    ],
    tips: [
      "Midjourney still mangles wordmarks — plan to re-typeset the name yourself in a real font.",
      "'Flat vector style' plus 'no 3d render' keeps results usable as actual logos."
    ],
    tags: ["logo", "branding", "minimalist", "midjourney", "startup"],
    trending: false,
    popularity: 82
  },
  {
    id: "abstract-wall-art-midjourney",
    title: "Abstract Wall Art Print Prompt for Midjourney",
    category: "Image Prompts",
    tool: "Midjourney",
    difficulty: "Beginner",
    desc: "Gallery-worthy abstract wall art in warm earth tones — the exact style that sells as digital prints on Etsy.",
    prompt: "Elegant abstract wall art print, flowing organic shapes in warm terracotta, burnt sienna, cream, and soft gold, layered translucent forms creating gentle depth, subtle grain texture like handmade paper, balanced composition with generous negative space, delicate fine-line accents weaving through the color fields, sophisticated gallery aesthetic, Japandi interior style, soft matte finish look, calming and timeless mood, museum-quality composition, warm ambient gallery lighting feel, ready for large-format printing, high resolution fine-art quality, --ar 4:5 --style raw --v 6.1 --no text, watermark, frame, people, harsh colors",
    howto: [
      "Open Midjourney and paste the prompt, adjusting the palette to your collection theme.",
      "Use --ar 4:5 (portrait print ratio) or 3:2 for landscape prints.",
      "Upscale to max and run through an AI upscaler for true print resolution (300 DPI at your print size).",
      "Offer each design in 5 standard frame ratios for your Etsy listing.",
      "Build collections of 6-10 matching pieces — sets outsell singles."
    ],
    tips: [
      "Earth-tone palettes outsell neon for wall art — they match real living rooms.",
      "Always upscale before selling; buyers notice low resolution on large prints."
    ],
    tags: ["wallart", "abstract", "etsy", "midjourney", "print"],
    trending: false,
    popularity: 75
  },
  {
    id: "cinematic-portrait-midjourney",
    title: "Cinematic Portrait Photography Prompt for Midjourney",
    category: "Image Prompts",
    tool: "Midjourney",
    difficulty: "Advanced",
    desc: "A dramatic Rembrandt-lit portrait with film character — profile pictures and character art that look professionally shot.",
    prompt: "Cinematic portrait photograph of a weathered fisherman in his 60s, deep character lines on his face, Rembrandt lighting with a single warm key light sculpting one side of his face, dark moody background fading to black, salt-and-pepper stubble, piercing blue eyes looking slightly off camera, worn wool sweater texture in detail, shallow depth of field, 85mm lens look, subtle film grain, editorial photography quality, photorealistic, 8k --ar 4:5 --style raw --v 6.1 --no watermark, text, deformed, extra fingers, plastic skin",
    howto: [
      "Open Midjourney and paste the prompt, describing your own subject in the same detail.",
      "Keep --style raw for photographic realism over Midjourney's beautified default.",
      "Zoom into the face at 100% — reject any with asymmetric eyes or waxy skin.",
      "Use as profile pictures, character references, or book/cover art.",
      "For consistent characters, reuse the seed and vary only pose and lighting."
    ],
    tips: [
      "Name the exact lens ('85mm lens look') — it controls the compression and bokeh character.",
      "'Plastic skin' in the negative prompt is the difference between real and mannequin."
    ],
    tags: ["portrait", "photography", "cinematic", "midjourney", "character"],
    trending: false,
    popularity: 73
  },
  {
    id: "ecommerce-product-shot-midjourney",
    title: "E-commerce Product Photography Prompt for Midjourney",
    category: "Image Prompts",
    tool: "Midjourney",
    difficulty: "Intermediate",
    desc: "Studio-quality product photography on a clean background — listing images that lift conversion rates.",
    prompt: "Professional e-commerce product photograph of a matte black ceramic coffee mug with a minimalist white logo, floating slightly above a seamless light-gray studio background with a soft realistic shadow beneath, dramatic softbox lighting from the upper left creating a gentle highlight along the rim, a few coffee beans artfully scattered out of focus in the foreground, subtle steam rising from the mug, ultra sharp product focus, clean commercial catalog quality, balanced exposure with rich blacks, photorealistic, 8k --ar 1:1 --style raw --v 6.1 --no text errors, watermark, hands, cluttered background",
    howto: [
      "Open Midjourney and paste the prompt, replacing the product with yours and describing materials exactly.",
      "Generate at --ar 1:1 for marketplace listings or 4:5 for social ads.",
      "Pick the shot with the cleanest shadow — floating products need believable grounding.",
      "Composite your real logo over the rendered one if Midjourney garbles it.",
      "Generate 3 angles (front, 45-degree, lifestyle) for a complete listing gallery."
    ],
    tips: [
      "Describe materials and finish ('matte black ceramic') — generic 'mug' renders look cheap.",
      "One softbox direction ('upper left') gives the professional catalog look; multi-light prompts get messy."
    ],
    tags: ["product", "ecommerce", "photography", "midjourney", "listing"],
    trending: false,
    popularity: 80
  },
  {
    id: "epic-fantasy-scene-midjourney",
    title: "Epic Fantasy Landscape Prompt for Midjourney",
    category: "Image Prompts",
    tool: "Midjourney",
    difficulty: "Advanced",
    desc: "A breathtaking floating-island fantasy landscape — wallpaper-grade art for covers, posters, and thumbnails.",
    prompt: "Epic fantasy landscape, colossal floating islands draped with waterfalls cascading into clouds below, an ancient stone citadel with glowing windows perched on the largest island, a lone airship with billowing sails crossing the golden-hour sky, flocks of distant birds, volumetric light rays breaking through dramatic clouds, rich teal and amber palette, sense of immense scale with tiny figures on a bridge for perspective, hyper-detailed, painterly realism, fantasy concept art masterpiece --ar 16:9 --v 6.1 --no text, watermark, modern buildings, blurry",
    howto: [
      "Open Midjourney and paste the prompt, swapping the landmarks for your own world.",
      "Use --ar 16:9 for wallpapers and video backgrounds, 2:3 for book covers.",
      "Upscale the winner and enhance details with a second pass.",
      "Add tiny human figures for scale — they make fantasy scenes feel vast.",
      "Sell as prints or use as premium YouTube backgrounds and thumbnails."
    ],
    tips: [
      "'Tiny figures on a bridge for perspective' is what creates the jaw-dropping sense of scale.",
      "Golden-hour lighting unifies busy fantasy compositions that would otherwise feel chaotic."
    ],
    tags: ["fantasy", "landscape", "conceptart", "midjourney", "wallpaper"],
    trending: false,
    popularity: 70
  },
  {
    id: "viral-hooks-writer-chatgpt",
    title: "Viral Hooks Writer Prompt for ChatGPT",
    category: "Text Prompts",
    tool: "ChatGPT",
    difficulty: "Beginner",
    desc: "Turns any video topic into 20 scroll-stopping hooks in seconds — the highest-leverage prompt for short-form creators.",
    prompt: "You are a viral short-form copywriter who has written hooks for 100M+ view videos. I will give you a video topic. Generate 20 video hooks following these rules: each hook must be under 12 words, create an open loop or curiosity gap, speak directly to the viewer using 'you', and avoid clickbait lies — every hook must be deliverable in the video. Mix these 4 styles evenly: 5 contrarian takes, 5 curiosity questions, 5 bold promises with numbers, 5 'mistake you are making' warnings. After the list, rank your top 3 and explain in one line each why they will outperform the rest. My topic is: [PASTE YOUR VIDEO TOPIC HERE]",
    howto: [
      "Open ChatGPT and paste the full prompt above.",
      "Replace [PASTE YOUR VIDEO TOPIC HERE] with your actual topic, e.g. 'budget travel in Thailand'.",
      "Send it and review the 20 hooks — copy your favorites into a swipe file.",
      "Test the top 3 as on-screen text in your next 3 videos and track which wins.",
      "Reuse weekly: fresh hooks for every video is what compounds growth."
    ],
    tips: [
      "The honesty rule ('avoid clickbait lies') keeps your retention high — lying hooks kill watch time.",
      "Ask ChatGPT to rewrite your winner in 5 shorter variants for A/B testing thumbnails."
    ],
    tags: ["hooks", "copywriting", "tiktok", "chatgpt", "viral"],
    trending: true,
    popularity: 96
  },
  {
    id: "video-script-writer-chatgpt",
    title: "Faceless Video Script Writer Prompt for ChatGPT",
    category: "Text Prompts",
    tool: "ChatGPT",
    difficulty: "Intermediate",
    desc: "Generates a complete retention-engineered script with hooks, pattern interrupts, and CTAs for faceless YouTube videos.",
    prompt: "You are a YouTube scriptwriter specializing in faceless channels with 40%+ average retention. Write a complete video script on this topic: [YOUR TOPIC]. Requirements: open with a 15-second hook that states the payoff and opens a curiosity loop; structure the body into 4-6 titled sections, each opening with its own mini-hook; insert a pattern interrupt (rhetorical question, surprising stat, or direct address) every 60-90 seconds; write in spoken conversational English at a 7th-grade reading level, no jargon without explanation; end with a 20-second recap plus a single clear call to action. Target length: [X] minutes, roughly 150 words per minute. Include [VISUAL] cues in brackets suggesting B-roll for each section. Do not include camera directions for a host — this is faceless voiceover only.",
    howto: [
      "Open ChatGPT and paste the prompt.",
      "Fill in [YOUR TOPIC] and [X] minutes (match your planned video length).",
      "Read the script aloud — cut any sentence that feels stiff when spoken.",
      "Feed the final script to your voiceover tool, then edit visuals to the [VISUAL] cues.",
      "Save the prompt as a reusable template for your whole channel."
    ],
    tips: [
      "The [VISUAL] cues turn a script into an editing plan — do not skip them.",
      "Regenerate the hook 3 times and pick the strongest; the first 15 seconds decide everything."
    ],
    tags: ["script", "youtube", "faceless", "chatgpt", "retention"],
    trending: false,
    popularity: 84
  },
  {
    id: "seo-titles-generator-gemini",
    title: "SEO Blog Title Generator Prompt for Gemini",
    category: "Text Prompts",
    tool: "Gemini",
    difficulty: "Beginner",
    desc: "Generates 30 click-worthy, keyword-smart blog titles with search intent labels — blogging SEO in one paste.",
    prompt: "You are an SEO content strategist. My target keyword is: [YOUR KEYWORD]. Generate 30 blog post titles optimized for Google in 2026. Rules: keep titles under 60 characters, place the keyword or a close variant near the front, match one clear search intent per title (informational, commercial, or transactional), and vary the formats — how-tos, lists, comparisons, and question titles. For each title, add a 3-5 word intent label in parentheses and a 1-10 click-potential score. Then list your top 5 with one line each explaining why they will win the click against competing results. No generic titles like 'everything you need to know'.",
    howto: [
      "Open Gemini and paste the prompt.",
      "Replace [YOUR KEYWORD] with your target keyword, e.g. 'ai video prompts'.",
      "Pick the top-scoring titles and check real competition for them in Google.",
      "Use the intent labels to plan which titles become posts vs. landing pages.",
      "Regenerate monthly as search trends shift."
    ],
    tips: [
      "The under-60-character rule prevents truncation in search results — enforce it strictly.",
      "Question-format titles win featured snippets; list formats win clicks."
    ],
    tags: ["seo", "titles", "blogging", "gemini", "keywords"],
    trending: false,
    popularity: 68
  },
  {
    id: "business-ideas-brainstorm-gemini",
    title: "Online Business Ideas Brainstorm Prompt for Gemini",
    category: "Text Prompts",
    tool: "Gemini",
    difficulty: "Intermediate",
    desc: "Generates realistic online business ideas matched to your skills and budget — with honest effort and income framing.",
    prompt: "You are a pragmatic business coach. Help me find realistic online business ideas. My skills: [LIST 3-5 SKILLS]. My available budget: $[AMOUNT]. My available time: [HOURS] per week. Generate 10 business ideas that fit these constraints. For each idea include: what I would actually sell, who pays and why, realistic startup cost, realistic time to first dollar (in weeks, be honest), and the single hardest part nobody talks about. Then rank them by best fit for me and explain your ranking. Important: frame all income as realistic potential based on effort and market conditions — never promise or guarantee any earnings figure. End with the 3 concrete first steps for the top-ranked idea.",
    howto: [
      "Open Gemini and paste the prompt.",
      "Fill in your real skills, budget, and weekly hours — honesty here determines usefulness.",
      "Review the 10 ideas and research the top 3 in the real market before committing.",
      "Ask Gemini to expand the winner into a 30-day action plan.",
      "Revisit quarterly as your skills and budget grow."
    ],
    tips: [
      "The 'hardest part nobody talks about' section is the most valuable — it kills fantasy ideas fast.",
      "Treat income framing as directional, not promised; validate with real market research."
    ],
    tags: ["business", "ideas", "startup", "gemini", "sidehustle"],
    trending: false,
    popularity: 62
  },
  {
    id: "study-planner-gemini",
    title: "Personalized Study Planner Prompt for Gemini",
    category: "Text Prompts",
    tool: "Gemini",
    difficulty: "Beginner",
    desc: "Builds a week-by-week study plan with active recall and spaced repetition tailored to your exam date.",
    prompt: "You are a learning-science tutor. Build me a personalized study plan. Subject: [SUBJECT]. Exam date: [DATE]. My current level: [BEGINNER/INTERMEDIATE/ADVANCED]. Hours I can study per day: [X]. Design a week-by-week plan from today until the exam using evidence-based methods: active recall, spaced repetition, and interleaving — no passive re-reading. For each week list: topics to cover, the exact study technique for each topic, and a short self-test to verify mastery. Include one full rest day per week and a final 7-day revision sprint before the exam. Format it as a clear table I can print. If my hours are too low for the syllabus, say so honestly and suggest what to prioritize.",
    howto: [
      "Open Gemini and paste the prompt.",
      "Fill in your subject, exam date, level, and daily hours.",
      "Print or save the table and follow it week by week.",
      "Each Sunday, paste your progress back and ask Gemini to adjust the plan.",
      "Do the self-tests honestly — they are the whole point."
    ],
    tips: [
      "If Gemini says your hours are too low, believe it — then ask for a prioritized triage plan.",
      "Pair the plan with a flashcard app for the spaced-repetition portion."
    ],
    tags: ["study", "exams", "planner", "gemini", "productivity"],
    trending: false,
    popularity: 58
  },
  {
    id: "productivity-system-claude",
    title: "Personal Productivity System Prompt for Claude",
    category: "Text Prompts",
    tool: "Claude",
    difficulty: "Intermediate",
    desc: "Designs a complete task-and-focus system around your real schedule, energy patterns, and tools — not generic advice.",
    prompt: "You are a productivity consultant who designs systems, not motivation speeches. Interview me first: ask 8 targeted questions about my work type, schedule, energy peaks and slumps, current tools, biggest distractions, and what has failed for me before. Wait for my answers. Then design a complete personal productivity system including: a daily planning ritual under 10 minutes, a task capture and triage method matched to my tools, time-blocking rules built around my energy curve, a weekly review checklist, and a 'bad day' fallback protocol for low-energy days. Keep it to one page of actionable rules — no fluff, no generic tips I have heard before. Reference my answers explicitly so I know the system is built for me.",
    howto: [
      "Open Claude and paste the prompt.",
      "Answer the 8 questions honestly — the system is only as good as your answers.",
      "Copy the one-page system into your notes app where you will see it daily.",
      "Run it for two weeks, then paste what broke and ask Claude to fix those parts.",
      "Keep the 'bad day' protocol visible — it saves more weeks than the perfect-day plan."
    ],
    tips: [
      "Claude's interview-first format beats one-shot advice because it adapts to your constraints.",
      "The weekly review is the load-bearing wall — skip it and the system decays in 3 weeks."
    ],
    tags: ["productivity", "system", "focus", "claude", "planning"],
    trending: false,
    popularity: 65
  },
  {
    id: "storytelling-assistant-claude",
    title: "Creative Storytelling Assistant Prompt for Claude",
    category: "Text Prompts",
    tool: "Claude",
    difficulty: "Advanced",
    desc: "A collaborative fiction partner that develops your story with you — outlines, scenes, dialogue, and ruthless editing.",
    prompt: "You are my collaborative fiction writing partner. We are developing an original short story together. Rules of collaboration: never write the whole story for me in one go — work scene by scene; before drafting each scene, propose 3 direction options and let me choose; when I pick, draft the scene in vivid sensory prose with strong dialogue, then end with 2-3 sharp editorial notes on what is working and what needs cutting; track continuity (names, timeline, motivations) and flag any contradiction immediately; be honest when an idea is weak and propose a stronger alternative. Start by asking me for: genre, protagonist in one line, the central conflict, and the tone. Then propose the story structure before we write scene one.",
    howto: [
      "Open Claude and paste the prompt.",
      "Answer the four setup questions: genre, protagonist, conflict, tone.",
      "Choose scene directions as offered — you stay the author, Claude is the engine.",
      "After each scene, apply the editorial notes before moving on.",
      "Export the finished scenes into your manuscript document."
    ],
    tips: [
      "Scene-by-scene collaboration produces far better fiction than 'write me a story' one-shots.",
      "Ask Claude to argue against your plot twists — surviving critique makes them stronger."
    ],
    tags: ["storytelling", "fiction", "writing", "claude", "creative"],
    trending: false,
    popularity: 60
  },

  {
    id: "untapped-faceless-youtube-niches-chatgpt",
    title: "Find 10 Untapped Faceless YouTube Niches for 2026 — ChatGPT Prompt",
    category: "Text Prompts",
    tool: "ChatGPT",
    difficulty: "Intermediate",
    desc: "A niche-analyst interview that surfaces 10 genuinely under-served faceless YouTube niches for 2026 — each with competition evidence, video titles, and a monetization path.",
    prompt: "You are a YouTube niche analyst who has grown multiple faceless channels past 100K subscribers. My situation: I produce AI-generated video with voiceover content, I have [X] hours per week, and my budget is $[AMOUNT]. Find me 10 untapped or under-served faceless YouTube niches with real 2026 opportunity. For each niche give: the niche name and a one-line concept, why it is under-served right now with concrete evidence rather than hype, estimated competition level (low or medium) with example channel subscriber ranges, 3 specific video titles that would work in it, the primary monetization path (ad revenue, affiliates, sponsors, or digital products), and a production-difficulty rating from 1 to 5. Exclude oversaturated niches like generic motivational compilations, celebrity gossip, and AI-narrated scary stories. Rank all 10 by best risk-adjusted opportunity for a beginner, then end with your single top recommendation and the first 5 videos I should publish in it.",
    howto: [
      "Open ChatGPT and paste the full prompt above.",
      "Replace [X] hours and $[AMOUNT] with your real weekly time and budget.",
      "Read the ranked list and shortlist the 3 niches that excite you most.",
      "For each shortlisted niche, search YouTube to verify the competition claims yourself.",
      "Pick your winner, then ask ChatGPT to expand its first 5 videos into full outlines."
    ],
    tips: [
      "Verify competition manually — search the niche's example titles and check whether small channels are getting views.",
      "A niche you can produce for 6 months beats a 'hotter' niche you will abandon in 3 weeks."
    ],
    tags: ["niche research", "monetization", "chatgpt", "youtube", "creator-niche"],
    trending: true,
    popularity: 97
  },
  {
    id: "viral-tiktok-niches-low-competition-claude",
    title: "Discover Viral TikTok Niches With Low Competition — Claude Prompt",
    category: "Text Prompts",
    tool: "Claude",
    difficulty: "Intermediate",
    desc: "Claude hunts down 12 low-competition TikTok niches with viral formats you can copy — each scored on competition, virality potential, and monetization.",
    prompt: "You are a TikTok growth strategist who studies emerging content formats daily. I want to start a new TikTok account in a niche where competition is still low but viral formats already exist. Interview me first: ask about my skills, whether I will show my face, what tools I can use (AI video, editing apps, camera), and how much time I have daily. Then recommend 12 TikTok niches that fit my answers and meet these criteria: proven viral format (describe the exact format and hook style), fewer than 50 serious creators posting consistently, and a realistic monetization path (TikTok Shop, affiliates, brand deals, or funnel to another platform). For each niche include: 3 example accounts or format references to study, the typical video length and posting cadence, what makes it low-competition right now, and the single biggest trap that kills new creators in it. Score each niche 1-10 on competition (lower is better), virality potential, and monetization. Rank them and recommend your top pick with a 7-day launch plan.",
    howto: [
      "Open Claude and paste the prompt.",
      "Answer the interview questions honestly — your constraints shape the recommendations.",
      "Study the format references for your top 3 niches before choosing.",
      "Post 2-3 videos per day in your chosen niche for the full 7-day launch plan.",
      "Track which format gets the best watch time, then double down on it."
    ],
    tips: [
      "The 'biggest trap' section is the real value — most creators fail on the trap, not the format.",
      "Low competition often means the niche is boring to produce; pick one you can sustain daily."
    ],
    tags: ["niche research", "viral formats", "claude", "tiktok", "creator-niche"],
    trending: true,
    popularity: 94
  },
  {
    id: "profitable-facebook-page-niches-gemini",
    title: "Find Profitable Facebook Page Niches for 2026 — Gemini Prompt",
    category: "Text Prompts",
    tool: "Gemini",
    difficulty: "Beginner",
    desc: "Gemini evaluates 10 Facebook page niches on reach, engagement, and real earning potential — so you build a page that pays, not just posts.",
    prompt: "You are a Facebook monetization consultant who advises page owners on Reels bonuses, in-stream ads, and affiliate income. I want to start a Facebook page in 2026 that can realistically earn money within 6-12 months. Give me 10 page niches ranked by earning potential. For each niche include: the niche concept and target audience (age, interests, country focus), why Facebook's algorithm favors this content type right now, the best content format (Reels compilations, original short clips, image posts, or live), realistic posting frequency, 5 example post ideas with hook-style captions, the monetization stack in order of income potential (in-stream ads, Reels, affiliates, digital products, page flipping), and honest risks like copyright strikes or content saturation. Exclude niches that depend on stolen viral clips — I want original or properly licensed content only. End with a comparison table of the top 3 niches across effort, cost, time-to-first-dollar, and income ceiling, then recommend the single best niche for a solo creator with a phone and a laptop.",
    howto: [
      "Open Gemini and paste the prompt.",
      "Review the comparison table and pick the niche matching your effort tolerance.",
      "Create the Facebook page with a keyword-rich name before someone else takes it.",
      "Publish the 5 example post ideas as your first week of content.",
      "Apply for monetization programs the moment you hit each eligibility threshold."
    ],
    tips: [
      "Original content only — reposted viral clips get demonetized and kill pages overnight.",
      "Check the niche's top pages' follower-to-engagement ratio; inflated followers with dead comments means a dying niche."
    ],
    tags: ["facebook page", "monetization", "gemini", "facebook", "creator-niche"],
    trending: true,
    popularity: 91
  },
  {
    id: "instagram-theme-page-niches-chatgpt",
    title: "Pick a Winning Instagram Theme Page Niche — ChatGPT Prompt",
    category: "Text Prompts",
    tool: "ChatGPT",
    difficulty: "Beginner",
    desc: "ChatGPT compares 10 Instagram theme-page niches on growth speed, content cost, and shoutout revenue — with a 30-day launch blueprint for the winner.",
    prompt: "You are an Instagram theme-page growth expert who has scaled pages to 500K+ followers. I want to start a faceless Instagram theme page. Compare 10 theme-page niches and help me pick one. For each niche give: the niche name and page concept, average growth speed for a consistent new page (slow, medium, or fast) with reasoning, content production cost and time per post, the dominant content format (carousels, Reels, memes, infographics, or quote graphics), 5 specific post ideas with hook captions, monetization options ranked by realistic income (shoutouts, affiliates, digital products, paid promos), and saturation level with one differentiator that would make my page stand out. Exclude niches dominated by mega-pages where a new account cannot compete. After comparing, recommend your top pick and give me a 30-day launch blueprint: daily posting schedule, the first 10 posts in order, hashtag and SEO-caption strategy, and the exact metrics to hit before I consider the page validated.",
    howto: [
      "Open ChatGPT and paste the prompt.",
      "Compare the 10 niches and pick the one with the best growth-to-effort ratio for you.",
      "Set up the page with an SEO-optimized name, bio, and profile picture.",
      "Publish the first 10 posts exactly in the blueprint's order.",
      "At day 30, check the validation metrics before deciding to scale or pivot."
    ],
    tips: [
      "The differentiator matters more than the niche — a fresh angle in a crowded niche beats a perfect pick with generic content.",
      "Save every post idea ChatGPT gives you into a content bank for month two."
    ],
    tags: ["theme page", "shoutouts", "chatgpt", "instagram", "creator-niche"],
    trending: false,
    popularity: 86
  },
  {
    id: "faceless-youtube-intro-veo3",
    title: "Viral Faceless YouTube Niche Channel Intro — Veo 3 Prompt",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Intermediate",
    desc: "A cinematic 8-second channel intro for a faceless niche channel — the polished opener that makes new viewers subscribe on sight.",
    prompt: "Cinematic channel intro ident for a faceless YouTube channel about [NICHE, e.g. deep-sea mysteries]: the camera pushes through drifting particles of glowing blue bioluminescence in dark ocean depths, a colossal whale silhouette glides past in the distance, light rays pierce downward from the surface far above, the channel's emblem — a minimalist glowing anglerfish icon — materializes from the particles and locks into the center of frame with a subtle pulse of light, deep cinematic color grade in midnight blue and electric cyan, epic sense of scale and mystery, smooth 24fps motion, dramatic orchestral swell feeling in the pacing, photorealistic, ultra detailed, 16:9, no text other than the emblem, no watermark, no people",
    howto: [
      "Open Veo 3 and paste the prompt, replacing [NICHE] and the emblem description with your channel's theme.",
      "Generate at 16:9 and review the emblem formation — it must resolve cleanly, not morph oddly.",
      "Generate 2-3 variations and pick the one with the strongest light pulse at the end.",
      "Place it as the first 5-8 seconds of every video for instant brand recognition.",
      "Pair with a signature sound sting so viewers recognize your channel by audio alone."
    ],
    tips: [
      "Keep the emblem simple — complex logos melt into blobs during AI formation.",
      "Re-render the intro quarterly with seasonal color shifts to keep the channel feeling fresh."
    ],
    tags: ["channel intro", "faceless", "veo3", "youtube", "creator-niche"],
    trending: false,
    popularity: 82
  },
  {
    id: "tiktok-niche-content-template-kling",
    title: "TikTok Niche Content Template Video — Kling Prompt",
    category: "Video Prompts",
    tool: "Kling",
    difficulty: "Beginner",
    desc: "A reusable AI video template for daily TikTok niche content — swap one element per post and publish a series that compounds.",
    prompt: "Vertical TikTok video template for a [NICHE, e.g. tiny-home living] content series: opens with a fast 1-second zoom into the hero subject — a miniature cozy cabin interior glowing warm at dusk — then the camera slowly orbits the scene revealing tiny detailed furniture, a flickering fireplace, rain streaking the small round window, the orbit completes exactly one full circle and ends framed on the hero subject again for a perfect loop point, warm amber and deep green color palette, hyper-detailed miniature diorama style, cozy satisfying mood, smooth fluid motion with no jitter, photorealistic, 9:16 vertical, no text, no people, no watermark, engineered so the final frame matches the first frame for seamless looping",
    howto: [
      "Open Kling and paste the prompt, filling in your niche and hero subject.",
      "Generate in 9:16 vertical with a short 5-8 second duration for loopability.",
      "Check the loop point — trim 2-3 frames if the seam is visible.",
      "Publish one variation daily, changing only the hero subject each time.",
      "Add a niche keyword as on-screen text in your editor, never baked into the AI render."
    ],
    tips: [
      "Series formats outperform one-offs — viewers follow for the next variation, not the single clip.",
      "Keep a spreadsheet of hero subjects so you never repeat one within 30 days."
    ],
    tags: ["content template", "loop", "kling", "tiktok", "creator-niche"],
    trending: true,
    popularity: 90
  },
  {
    id: "niche-channel-trailer-google-flow",
    title: "Faceless Niche Channel Trailer Video — Google Flow Prompt",
    category: "Video Prompts",
    tool: "Google Flow",
    difficulty: "Advanced",
    desc: "A 3-scene cinematic trailer that sells a brand-new faceless niche channel in 20 seconds — your pinned video and ad creative in one.",
    prompt: "Three-scene cinematic trailer for a faceless YouTube channel about [NICHE, e.g. lost ancient technologies]. Scene 1: extreme close-up of weathered stone carvings covered in mysterious glowing symbols, dust particles floating in a shaft of light, camera pulls back slowly. Scene 2: sweeping aerial over half-buried desert ruins at golden hour, a sandstorm rolling in on the horizon, camera dives toward a dark temple entrance. Scene 3: inside the temple, a massive ancient mechanism of brass gears begins to turn and glow with blue energy, camera pushes in dramatically as light floods the chamber. Consistent teal-and-gold cinematic grade across all three scenes, epic mysterious mood, filmic 24fps motion, photorealistic, ultra detailed, 16:9, no text, no watermark, no people — build as three connected scenes in Google Flow with matching color and lighting",
    howto: [
      "Open Google Flow and paste the prompt, replacing the niche and scene subjects.",
      "Build the three scenes in order, keeping the color grade consistent across them.",
      "Generate each scene, then join with hard cuts on motion peaks for trailer energy.",
      "Add your voiceover pitch ('This channel reveals...') and a subscribe CTA at the end.",
      "Pin it as your channel trailer and reuse it as ad creative when you run promos."
    ],
    tips: [
      "End scene 3 on the brightest frame — trailers that end dark get fewer clicks.",
      "Write the voiceover first, then time each scene to land on the script's beats."
    ],
    tags: ["channel trailer", "faceless", "googleflow", "youtube", "creator-niche"],
    trending: false,
    popularity: 79
  },
  {
    id: "niche-youtube-thumbnail-pack-midjourney",
    title: "YouTube Niche Channel Thumbnail Pack — Midjourney Prompt",
    category: "Image Prompts",
    tool: "Midjourney",
    difficulty: "Intermediate",
    desc: "A matching set of high-CTR thumbnails for a niche channel — one prompt formula, endless consistent covers that build brand recognition.",
    prompt: "YouTube thumbnail background for a faceless channel about [NICHE, e.g. space mysteries]: a dramatic close-up of [HERO SUBJECT, e.g. a colossal ringed planet looming over a tiny astronaut silhouette], intense contrasting background in deep purple and blazing orange, strong rim lighting on the subject, bold empty negative space on the left third of the frame reserved for title text, hyper-detailed, cinematic lighting, vibrant saturated colors, dynamic diagonal composition pulling the eye to the subject, 16:9 composition, photorealistic, 8k --ar 16:9 --style raw --v 6.1 --no text, watermark, blurry, distorted, washed out",
    howto: [
      "Open Midjourney and paste the prompt, filling in your niche and hero subject.",
      "Keep --ar 16:9 and --no text — thumbnails need exact ratio and zero baked-in text.",
      "Generate 4 variations per video, then upscale the strongest one.",
      "Add your 3-5 word title in Canva using the same font and placement every time.",
      "Reuse the same background color family across all thumbnails so the channel looks unified."
    ],
    tips: [
      "Consistency is the pack's power — same layout, same font, same color family on every thumbnail.",
      "Change only the hero subject per video; viewers should recognize your channel in the feed instantly."
    ],
    tags: ["thumbnails", "ctr", "midjourney", "youtube", "creator-niche"],
    trending: false,
    popularity: 88
  },
  {
    id: "instagram-theme-page-branding-kit-midjourney",
    title: "Instagram Theme Page Branding Kit — Midjourney Prompt",
    category: "Image Prompts",
    tool: "Midjourney",
    difficulty: "Intermediate",
    desc: "A complete visual identity for an Instagram theme page — profile picture, highlight covers, and post backgrounds in one cohesive style.",
    prompt: "Branding kit for an Instagram theme page about [NICHE, e.g. stoic mindset quotes]: 1) a bold minimalist profile picture — a geometric [SYMBOL, e.g. marble bust] icon in gold on a deep charcoal background, perfectly centered, instantly readable at tiny sizes; 2) a set of matching highlight cover icons in the same gold-on-charcoal style, flat vector look; 3) a carousel post background template — dark textured charcoal with a subtle vignette and generous empty center space for quote text, elegant and premium. All pieces share one palette: gold, charcoal, and off-white. Clean professional brand identity, flat vector style, high contrast --ar 1:1 --style raw --v 6.1 --no text errors, watermark, photo, 3d render, clutter, gradients",
    howto: [
      "Open Midjourney and paste the prompt with your niche, symbol, and palette.",
      "Generate the profile picture first — test it at 110px to confirm it reads at small size.",
      "Generate highlight covers as a matching set, one icon per highlight topic.",
      "Use the carousel background template for every quote post to build visual consistency.",
      "Export everything at 1080x1080 and apply the kit across the whole profile at once."
    ],
    tips: [
      "One palette across every asset is what makes a theme page look professional instead of random.",
      "Test the profile picture in dark mode and light mode — gold on charcoal survives both."
    ],
    tags: ["branding kit", "profile", "midjourney", "instagram", "creator-niche"],
    trending: false,
    popularity: 84
  },
  {
    id: "30-day-niche-content-calendar-gemini",
    title: "30-Day Content Calendar for a New Niche — Gemini Prompt",
    category: "Text Prompts",
    tool: "Gemini",
    difficulty: "Beginner",
    desc: "Gemini builds a full 30-day posting calendar for your new niche — every day's format, hook, and CTA planned, with weekly review checkpoints.",
    prompt: "You are a content strategist for new creators. Build me a 30-day content calendar for my new niche channel. My niche: [NICHE]. My platform: [YouTube / TikTok / Instagram / Facebook]. My format: [short-form video / long-form video / carousels / mixed]. My posting capacity: [X] posts per week. My goal for month one: [followers / views / email list / sales]. Design the calendar with these rules: week 1 tests 4-5 different content angles so I learn what works; weeks 2-4 double down on the winning angles with series-style content; every single day entry includes the content format, a specific topic or title, the hook (first line or first 3 seconds), and the call to action. Include 2 rest or batching days per week, one weekly review checkpoint where I paste my analytics and you adjust the plan, and a variety rule so no two consecutive posts use the same format. Flag which 5 posts have the highest viral potential and explain why. End with the 3 metrics that matter most for my platform and goal, and what good month-one numbers look like.",
    howto: [
      "Open Gemini and paste the prompt.",
      "Fill in your niche, platform, format, weekly capacity, and month-one goal.",
      "Save the calendar and batch-produce week 1 content before day 1.",
      "At each weekly checkpoint, paste your analytics back and let Gemini adjust.",
      "After day 30, ask Gemini to build month two from your winning angles."
    ],
    tips: [
      "The weekly review checkpoint is the whole system — a static calendar without feedback loops goes stale fast.",
      "Batch your rest days into production days; consistency beats daily grinding."
    ],
    tags: ["content calendar", "strategy", "gemini", "youtube", "creator-niche"],
    trending: false,
    popularity: 87
  },
  {
    id: "what-if-history-faceless-veo3",
    title: "What-If History Cinematic Scenes — Veo 3 Prompt for Faceless YouTube",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Intermediate",
    desc: "Cinematic alternate-history scenes for faceless YouTube videos — the 'what if' hook that stops scrollers and keeps them watching to the reveal.",
    prompt: "Cinematic alternate-history scene for a faceless YouTube video about [WHAT-IF SCENARIO, e.g. 'what if the Library of Alexandria never burned']: the camera slowly pushes through the grand reading hall of an ancient library that survived into a brass-and-steam future, towering shelves of scrolls and books stretching into golden haze, scholars in flowing robes reading beneath massive hanging astrolabes, dust motes drifting in shafts of warm sunlight from high arched windows, intricate bronze machinery climbing the marble columns, a scribe copying a glowing manuscript at a vast oak desk in the foreground, camera drifts forward at eye level then gently rises into a wide reveal of the hall's impossible scale, deep cinematic grade in amber and teal, volumetric light, photorealistic, ultra detailed, 16:9, no text, no watermark, no modern elements, no people in the far background only",
    howto: [
      "Open Veo 3 and paste the prompt, replacing [WHAT-IF SCENARIO] with your video's hook.",
      "Match the scenario to your script's opening line so the visual pays off the title promise in seconds.",
      "Generate at 16:9 and check the wide reveal — it should feel like a movie establishing shot.",
      "Generate 2-3 scenario variants and pick the one with the strongest sense of impossible scale.",
      "Cut the clip under your voiceover's first 15 seconds — that is where retention is won or lost."
    ],
    tips: [
      "One impossible detail per scene (the brass machinery, the glowing manuscript) beats five — viewers remember the single wonder.",
      "Reuse the same color grade across your 'what if' series so the channel looks like a franchise, not random clips."
    ],
    tags: ["what if history", "faceless", "veo3", "youtube", "creator-niche"],
    trending: true,
    popularity: 91
  },
  {
    id: "relaxing-oddly-satisfying-kling",
    title: "Oddly Satisfying Loop Clips — Kling Prompt for TikTok Niche Pages",
    category: "Video Prompts",
    tool: "Kling",
    difficulty: "Beginner",
    desc: "Perfectly seamless oddly-satisfying loops for TikTok niche pages — the format viewers watch 5 times and the algorithm loves.",
    prompt: "Perfectly seamless looping clip of a hydraulic press slowly crushing a rainbow-layered cube of colored chalk, camera locked off at a slight low angle, the chalk fractures in slow cascades of pastel dust, each colored layer cracking cleanly into the next like geological strata, soft studio lighting on a matte gray background, the press plate rises at the very end exactly matching its start position so the loop point is invisible, macro detail on individual dust particles drifting, rhythmic satisfying visual pacing, bright clean color, 9:16 vertical, ultra detailed, no text, no watermark, no hands, no people",
    howto: [
      "Open Kling and paste the prompt, swapping the chalk cube for any layered object in your niche.",
      "Generate in 9:16 vertical and watch the loop point twice — any jump kills the satisfying effect.",
      "Post with a caption asking a question ('which layer is your favorite?') to pull comments.",
      "Publish 1-2 loops daily; consistency matters more than perfection for this format.",
      "Save your best-performing object types and rotate through them weekly."
    ],
    tips: [
      "Layers and strata are the secret — anything with visible layers (chalk, sand art, stacked soap) loops more satisfyingly than solid objects.",
      "Keep the background matte gray or soft beige; busy backgrounds fight the satisfying effect."
    ],
    tags: ["satisfying loops", "shorts", "kling", "tiktok", "creator-niche"],
    trending: true,
    popularity: 88
  },
  {
    id: "cozy-pov-niche-walk-sora",
    title: "Cozy POV Walking Videos — Sora Prompt for TikTok Niche Pages",
    category: "Video Prompts",
    tool: "Sora",
    difficulty: "Beginner",
    desc: "Relaxing first-person walking videos for cozy TikTok niche pages — the comfort content viewers save and rewatch before sleep.",
    prompt: "First-person POV of a slow relaxing walk through a rain-kissed cherry blossom alley in Kyoto at golden hour, petals drifting down through soft warm light, the camera bobbing gently with each footstep, wet cobblestones reflecting pink blossoms and the warm glow of paper lanterns, old wooden machiya houses lining both sides with noren curtains swaying in the breeze, a cat crossing the path ahead and sitting to watch, distant temple bell in the pacing, shallow depth of field, dreamy cinematic grade in rose gold and soft green, continuous gentle forward motion, 9:16 vertical, photorealistic, ultra detailed, no people in frame, no text, no watermark",
    howto: [
      "Open Sora and paste the prompt, replacing the Kyoto alley with a location that fits your niche.",
      "Generate in 9:16 and confirm the footstep bob feels natural, not seasick.",
      "Add a soft lo-fi or rain-sounds audio track — audio carries half the cozy effect.",
      "Post in the evening hours when comfort content gets saved and shared.",
      "Build a series ('POV walks around the world') so followers come back for the next destination."
    ],
    tips: [
      "One living detail (the cat, a swaying curtain) turns a pretty walk into a moment viewers remember.",
      "Keep every walk the same pace and grade — your page should feel like one long calm world."
    ],
    tags: ["pov walk", "cozy", "sora", "tiktok", "creator-niche"],
    trending: false,
    popularity: 79
  },
  {
    id: "faceless-documentary-explainer-runway",
    title: "Faceless Documentary Explainer Scenes — Runway Prompt",
    category: "Video Prompts",
    tool: "Runway",
    difficulty: "Intermediate",
    desc: "Cinematic explainer B-roll for faceless documentaries — complex topics made visual, no camera crew or filming required.",
    prompt: "Cinematic explainer B-roll for a faceless documentary about [TOPIC, e.g. 'how the human heart pumps blood']: opens on a slow macro push into a hyper-detailed beating heart, glowing red and blue particles flowing through the chambers in perfect rhythm, the camera orbiting smoothly as the anatomy tells the story through light and motion rather than labels, then a sweeping dive through branching arteries rendered like glowing canyon walls, volumetric red-gold light, clean scientific aesthetic with warm cinematic soul, ultra-detailed medical-illustration-come-to-life, smooth 24fps motion, shallow depth of field on the macro shots, 16:9, photorealistic render, no text overlays, no watermark, no people",
    howto: [
      "Open Runway and paste the prompt, replacing [TOPIC] with the concept your script explains.",
      "Generate at 16:9 and watch the full clip against your voiceover timing — trim to the explanation beat.",
      "Use the macro-to-wide structure for every explainer: detail first, then the big picture.",
      "Generate the transition dive as a separate clip so you can reuse it between sections.",
      "Keep one consistent light color across a video's scenes so the science feels like one world."
    ],
    tips: [
      "Let motion replace labels — flowing particles teach better than text overlays and keep viewers watching.",
      "End every explainer scene on the wide reveal; it gives the editor a natural cut point."
    ],
    tags: ["documentary", "explainer", "runway", "youtube", "creator-niche"],
    trending: false,
    popularity: 84
  },
  {
    id: "cinematic-broll-loop-google-flow",
    title: "Cinematic B-Roll Loops — Google Flow Prompt for Instagram Reels",
    category: "Video Prompts",
    tool: "Google Flow",
    difficulty: "Intermediate",
    desc: "Seamless cinematic B-roll loops for Instagram Reels backgrounds — the aspirational visuals niche pages layer quotes and hooks over.",
    prompt: "Seamless cinematic loop for Instagram Reels backgrounds in the [NICHE, e.g. luxury travel] niche: aerial drone shot gliding over a turquoise lagoon at sunrise, a lone overwater villa on stilts in the golden distance, palm shadows rippling across crystal-clear water, soft clouds reflecting perfectly on the glassy surface, the camera moving forward in a slow endless push that loops invisibly back to its starting frame, golden-pink sky gradient melting into the horizon, ultra-smooth motion, vibrant aspirational color grade, dreamy wanderlust mood, 9:16 vertical, photorealistic, ultra detailed, no text, no watermark, no people",
    howto: [
      "Open Google Flow and paste the prompt, replacing [NICHE] with your page's theme.",
      "Generate in 9:16 and scrub the loop point frame by frame — it must be invisible.",
      "Layer your hook text or quote over the lower third, keeping the horizon line clear.",
      "Export at the highest bitrate; compression artifacts ruin glassy water fast.",
      "Build a library of 10-12 loops and rotate them so the page never looks repetitive."
    ],
    tips: [
      "The loop is the product — viewers rewatch a perfect loop 3-4 times, and every rewatch counts as retention.",
      "Sunrise and golden hour grade outperform midday in every niche; shoot the light, not the place."
    ],
    tags: ["b-roll", "loops", "google flow", "instagram", "creator-niche"],
    trending: false,
    popularity: 81
  },
  {
    id: "motivational-cinematic-reel-veo3",
    title: "Motivational Cinematic Reels — Veo 3 Prompt for Instagram Pages",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Intermediate",
    desc: "High-energy cinematic clips for motivational Instagram theme pages — the epic visuals that make a one-line quote go viral.",
    prompt: "High-energy motivational cinematic clip for an Instagram theme page, theme [THEME, e.g. 'discipline beats motivation']: a lone runner sprinting up a misty mountain road at dawn, the camera tracking low beside them kicking up dust and gravel, the sun breaking through torn clouds behind the peak ahead, dramatic slow-motion on each powerful footfall, the runner's silhouette sharp and determined against the blazing sunrise, epic sense of scale and struggle, punchy contrast grade in deep blue and burning orange, subtle film-grain texture, relentless forward momentum in every frame, 9:16 vertical, photorealistic, ultra detailed, no text, no watermark, no other people",
    howto: [
      "Open Veo 3 and paste the prompt, replacing [THEME] with the message of your quote.",
      "Generate in 9:16 and pick the take with the strongest sunrise breakthrough moment.",
      "Place your one-line quote as bold text in the lower third — keep it under 8 words.",
      "Cut the clip to 7-12 seconds; motivational Reels die when they overstay.",
      "Post at 7-9 AM when your audience is deciding what kind of day to have."
    ],
    tips: [
      "Match the visual struggle to the quote's emotion — a lone runner for discipline, a storm for resilience.",
      "One color story per page (here: blue vs orange) makes your grid instantly recognizable."
    ],
    tags: ["motivation", "cinematic", "veo3", "instagram", "creator-niche"],
    trending: false,
    popularity: 86
  },
  {
    id: "viral-odd-photo-post-midjourney",
    title: "Viral 'Wait, Is That Real?' AI Photos — Midjourney Prompt for Facebook",
    category: "Image Prompts",
    tool: "Midjourney",
    difficulty: "Beginner",
    desc: "Scroll-stopping impossible-yet-believable AI photos for Facebook pages — the 'is this real?' reaction that drives shares and comments.",
    prompt: "Hyper-realistic photograph of an impossibly tiny [SUBJECT, e.g. 'baby elephant'] no bigger than a teacup, sitting in the gently cupped palm of a child's hand in a sunlit kitchen, the creature's skin texture and tiny wrinkles rendered in microscopic detail, the child's fingers curled softly around it for scale, warm morning light streaming through a window, shallow depth of field, dust motes floating in the light beam, 85mm lens look, national-geographic realism, vibrant warm color, uncanny, adorable, impossible to scroll past --ar 4:5 --style raw",
    howto: [
      "Open Midjourney and paste the prompt, replacing [SUBJECT] with a tiny version of anything in your niche.",
      "Keep --ar 4:5 for maximum Facebook feed real estate.",
      "Generate 4 variations and pick the one where the scale reads instantly — confusion kills the share.",
      "Post with a caption that plays along ('He fits in one hand!') and ask followers what to name it.",
      "Reply to the first 20 comments fast; early engagement decides whether Facebook pushes the post."
    ],
    tips: [
      "Scale is the whole trick — a familiar object at an impossible size triggers the share reflex.",
      "Warm morning light and shallow depth of field sell the realism; flat light exposes the AI."
    ],
    tags: ["viral photo", "impossible scale", "midjourney", "facebook", "creator-niche"],
    trending: false,
    popularity: 83
  },
  {
    id: "niche-validation-scorecard-chatgpt",
    title: "Niche Validation Scorecard — ChatGPT Prompt Before You Launch",
    category: "Text Prompts",
    tool: "ChatGPT",
    difficulty: "Intermediate",
    desc: "ChatGPT stress-tests your niche idea before you commit months to it — a brutally honest GO, PIVOT, or KILL verdict with evidence.",
    prompt: "You are a ruthless YouTube strategist who has watched hundreds of creators waste a year on dead niches. I am about to commit to a niche and I need you to validate it or kill it before I waste six months. My niche idea: [NICHE]. My format: [faceless AI video / talking head / shorts / mixed]. My skills: [SKILLS]. My weekly time: [X hours]. My budget: $[AMOUNT]. Score my niche from 1 to 10 on each of these 7 criteria: audience demand in 2026 (search volume and watch appetite), competition level (can a brand-new channel realistically break in), monetization potential (RPM ranges, affiliates, sponsors, digital products), content sustainability (can I publish 100+ videos without running dry), production fit (does it match my skills, time, and budget), trend durability (growing, stable, or fading), and differentiation room (is there a fresh angle left). Show your evidence for every score — name real channels, search trends, or data points, no hand-waving. Then give a final verdict: GO, PIVOT (with the exact pivot direction), or KILL (with 3 better niches for my situation). Be brutally honest — a polite wrong answer costs me months of my life.",
    howto: [
      "Open ChatGPT and paste the prompt.",
      "Fill in your niche, format, skills, weekly hours, and budget honestly — inflated inputs get polite lies.",
      "Read the 7 scores before the verdict; a 4 on sustainability kills more channels than competition does.",
      "If the verdict is PIVOT, ask ChatGPT to re-score the pivoted version for comparison.",
      "Save the output and re-run it every 90 days — niches move, and so should you."
    ],
    tips: [
      "Run this BEFORE buying a domain, logo, or equipment — validation is free, commitment is expensive.",
      "The monetization score matters most if this is a business; a fun niche with no RPM is a hobby."
    ],
    tags: ["niche validation", "strategy", "chatgpt", "youtube", "creator-niche"],
    trending: true,
    popularity: 92
  },
  {
    id: "reddit-niche-mining-gemini",
    title: "Reddit Niche Mining — Gemini Prompt for Underserved TikTok Niches",
    category: "Text Prompts",
    tool: "Gemini",
    difficulty: "Beginner",
    desc: "Gemini mines Reddit thread patterns to surface 10 underserved niches for a faceless TikTok page — demand proven by real conversations.",
    prompt: "You are a niche researcher who finds content gold buried in Reddit threads. My goal: find 10 underserved niches I can build a faceless TikTok page around in 2026. My content style: [AI-generated video / screen recordings / slideshows / memes]. My interests: [INTERESTS]. Think like this: imagine scanning these subreddits — [LIST 3-5 SUBREDDITS IN YOUR AREA] — and hunting for patterns: questions asked repeatedly with weak or missing answers, complaints about content nobody makes, small obsessions with only a few hundred upvotes that show real hunger, and comments that say 'I wish someone made videos about this'. For each of the 10 niches give: the niche name, the Reddit evidence pattern behind it (paraphrased like a real thread), why it is specifically underserved on TikTok, 3 video ideas with hooks, the audience pain or desire it serves, and a production-difficulty rating from 1 to 5. Rank all 10 by opportunity, exclude generic advice and motivation niches, and end with your single top pick plus the exact first 7 videos I should post.",
    howto: [
      "Open Gemini and paste the prompt.",
      "Fill in your content style, interests, and 3-5 subreddits you actually know.",
      "Cross-check the top 3 niches by searching them on TikTok — low quality results confirm the gap.",
      "Start with the top pick's 7 videos; do not split energy across niches in month one.",
      "Re-run monthly with fresh subreddits; Reddit surfaces new hungers constantly."
    ],
    tips: [
      "Small subreddits (10K-100K members) hide the best niches — giant ones are already strip-mined.",
      "Complaints are worth more than praise; 'nobody covers X' is a business plan wearing a comment."
    ],
    tags: ["reddit mining", "niche discovery", "gemini", "tiktok", "creator-niche"],
    trending: false,
    popularity: 85
  },
  {
    id: "viral-channel-teardown-claude",
    title: "Viral Channel Teardown — Claude Prompt to Reverse-Engineer Winners",
    category: "Text Prompts",
    tool: "Claude",
    difficulty: "Advanced",
    desc: "Claude reverse-engineers 3 viral channels in your niche from their data — their shared playbook, their gaps, and your differentiated launch plan.",
    prompt: "You are a YouTube growth analyst who reverse-engineers viral channels for a living. I will paste data about 3 viral channels in my target niche, and you will extract their exact playbook so I can build a better version. My niche: [NICHE]. For each channel I will paste: channel name, subscriber count, channel age, top 10 videos (title, views, publish date), average views per video, upload frequency, video length range, and 2-3 sample titles with descriptions. Once I paste all three, produce: (1) the 5 patterns all three share — topics, title formulas, thumbnail style, pacing, hooks; (2) the single thing each channel does BETTER than the other two; (3) the 3 biggest gaps all three leave open — underserved subtopics, weak production areas, missing formats; (4) a one-sentence differentiated positioning statement for my channel; (5) a 10-video launch plan that copies what works and exploits the gaps, ordered for maximum early traction; (6) the 5 weekly metrics that prove the teardown is working. Challenge my assumptions — if my niche pick looks weak after the data, say so plainly and suggest the better adjacent niche.",
    howto: [
      "Open Claude and paste the prompt.",
      "Gather the data for 3 channels: use YouTube search, sort by popular, and copy their top 10 videos each.",
      "Paste all three data sets in one message so Claude compares them together.",
      "Implement the 10-video launch plan in order — the ordering is part of the strategy.",
      "Track the 5 metrics weekly for 6 weeks before judging; teardowns compound."
    ],
    tips: [
      "Pick channels 6-24 months old, not 10-year giants — you want playbooks a new channel can actually copy.",
      "The gaps section is the real prize; everyone copies patterns, almost nobody exploits gaps."
    ],
    tags: ["competitor analysis", "channel teardown", "claude", "youtube", "creator-niche"],
    trending: false,
    popularity: 89
  },
  {
    id: "underwater-sea-creature-niche-master-prompt",
    title: "Underwater Sea Creature Encounters — Viral Niche Master Prompt",
    category: "Viral Niches",
    tool: "Veo 3",
    difficulty: "Beginner",
    desc: "Copy-paste Veo 3 master prompt for the viral underwater sea-creature niche — swap the creature, keep the hook, post on TikTok, Shorts and Reels. Videos in this niche routinely cross 200M views.",
    prompt: "Ultra-macro underwater video, crystal-clear tropical seawater. A giant [CREATURE: spiny lobster / tiger shrimp / red octopus / moray eel / horseshoe crab] moves slowly across a sandy seabed scattered with shells and small rocks. Brilliant god rays pierce down from the water surface, tiny glowing particles drift in the current. A diver's slim metal probe tool enters from the left edge of frame and gently approaches the creature. The creature reacts — antennae sway, tentacles curl, it darts slightly. Cinematic shallow depth of field, National Geographic documentary realism, hyper-detailed textures: wet glistening shell, compound eyes, moving mouthparts. Mysterious deep-sea ambiance, teal-and-orange color grade. No humans visible, only the tool. Vertical 9:16, 8 seconds, seamless loop feel.",
    howto: [
      "Har video mein sirf CREATURE badlo — same prompt, nayi video.",
      "Pehle 1 second mein creature ka close-up rakho — hook wahi hai.",
      "8–15 second max; loop jaisa feel hona chahiye.",
      "Veo 3 (ya Kling/Sora) mein 9:16 vertical aur 8-second clip generate karo, phir trending ocean sound lagao."
    ],
    tips: [
      "TikTok caption mein 'Wait for it' likho aur trending ocean sound use karo.",
      "YouTube Shorts ke title mein creature ka naam zaroor dalo — search se views aate hain.",
      "FB Reels par pehle comment mein 'Part 2?' likho — comments = reach."
    ],
    tags: ["viral-niche", "tiktok", "youtube", "facebook", "faceless", "video"],
    trending: true,
    popularity: 97
  },
  {
    id: "tiny-worlds-macro-timelapse-veo3",
    title: "Tiny Worlds Macro Time-Lapse — Veo 3 Prompt for Faceless YouTube Shorts",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Beginner",
    desc: "A macro time-lapse of a miniature living world — ants hauling crumbs, dew swelling on moss, ladybugs climbing grass-blade skyscrapers. Infinite faceless Shorts material.",
    prompt: "Hypnotic macro time-lapse of a miniature world hidden in plain sight: morning dew drops swelling on a carpet of vivid green moss as tiny ants march in a winding column carrying crumbs twice their size, a ladybug climbs a blade of grass like a skyscraper, clouds race across a blurred blue sky in the bokeh behind, light shifting from cool dawn blue to warm golden morning, extreme close-up at ant eye level, camera locked off for the true time-lapse feel with a barely-perceptible slow push-in, water droplets catching rainbow prisms, hyper-detailed insect textures and moss fibers, shallow depth of field melting the background into dreamy color, Planet Earth documentary realism, mesmerizing rhythm, 24fps cinematic motion, photorealistic, ultra detailed, 9:16 vertical, no text, no watermark, no people",
    howto: [
      "Open Veo 3 and start a new text-to-video generation.",
      "Paste the full prompt above — keep every camera and lighting detail.",
      "Set aspect ratio to 9:16 and duration to 8 seconds before generating.",
      "Generate 2-3 variants and pick the one with the smoothest insect motion.",
      "Layer soft ambient nature audio under the clip in your editor.",
      "Post daily — macro worlds are infinite, so this niche never runs dry."
    ],
    tips: [
      "Swap the world for fresh series: mushroom forest, puddle city, a sprouting seed.",
      "Keep clips under 8 seconds — short loops get watched 3-5x, which the algorithm rewards."
    ],
    tags: ["macro timelapse", "tiny worlds", "youtube", "shorts", "creator-niche"],
    trending: false,
    popularity: 88
  },
  {
    id: "pov-animal-adventure-kling",
    title: "POV Animal Adventure Shorts — Kling Prompt for Viral TikTok Niche Pages",
    category: "Video Prompts",
    tool: "Kling",
    difficulty: "Beginner",
    desc: "First-person animal adventure clips — diving with a falcon, swimming with otters, sprinting with wolves. The POV niche format exploding on TikTok right now.",
    prompt: "Immersive first-person POV video: you ARE a [ANIMAL: peregrine falcon / river otter / arctic wolf / bottlenose dolphin] moving through your world at full speed. Falcon: diving off a cliff edge, wings tucked, wind rushing, the ground rushing up then pulling out over a river valley. Otter: porpoising through crystal river water, sunlight shafts dancing, fish scattering. Wolf: sprinting through fresh snow in a pine forest, breath fogging, trees blurring past. Dolphin: bursting through ocean swells, spray everywhere, the horizon tilting. Naturalistic GoPro-style motion — slight camera shake, authentic speed blur, no tripod smoothness, hyper-detailed fur, feathers and water, realistic physics of movement, ambient natural sound implied: wind, splashes, crunching snow, vertical 9:16, 5-8 seconds, no humans, no text, no watermark, photorealistic wildlife cinematography",
    howto: [
      "Open Kling and start a new text-to-video generation.",
      "Paste the prompt and lock in ONE animal for the clip.",
      "Set 9:16 vertical and 5-10 seconds duration.",
      "Generate 3 variants — pick the one where the motion feels fastest and most real.",
      "Add wind/water sound FX and an on-screen line like 'POV: you are a falcon'.",
      "Post 1-2 per day, rotating animals to build a series followers wait for."
    ],
    tips: [
      "Match the animal to a trending sound — falcon dives over ocean audio pop hardest.",
      "Pin a comment asking 'Which animal next?' — comment velocity is free reach."
    ],
    tags: ["pov", "animals", "tiktok", "faceless", "creator-niche"],
    trending: true,
    popularity: 93
  },
  {
    id: "cozy-mystery-narrator-sora",
    title: "Cozy Mystery Narrator Scenes — Sora Prompt for Faceless YouTube Stories",
    category: "Video Prompts",
    tool: "Sora",
    difficulty: "Intermediate",
    desc: "Dark-cozy mystery scenes for narrated story channels — abandoned mansions, foggy platforms, candlelit libraries. The unsolved-mysteries niche without filming a thing.",
    prompt: "Cinematic cozy-mystery scene for a narrated story video: a [SCENE: abandoned Victorian mansion hallway / foggy 1950s train platform / candlelit old library at midnight], thick fog curling across the floor, dust motes drifting through a single shaft of moonlight from a tall broken window, a grandfather clock ticking with its pendulum swinging, candles guttering in a brass candelabra, camera begins wide and drifts forward slowly down the hallway toward a slightly open door at the end, deep shadows that never quite reveal everything, desaturated blue-grey color grade with warm candlelight accents, fine film grain, subtle vignette, gothic mystery atmosphere like a prestige true-crime documentary, 16:9, slow deliberate camera move, no people, no text, no watermark, photorealistic, ultra detailed",
    howto: [
      "Open Sora and start a new video generation.",
      "Paste the prompt and choose ONE scene for the clip.",
      "Set 16:9 landscape — this niche lives in long-form YouTube.",
      "Generate 2-3 variants and keep the one with the eeriest lighting.",
      "Chain 3-5 scenes into an 8-12 minute story and narrate the mystery over the top.",
      "Add chapters for each story beat — mystery viewers scrub, then stay."
    ],
    tips: [
      "Keep lighting consistent across all scenes in one story — same candlelight grade makes it feel like one film.",
      "Export at 1080p and go long-form; the mystery niche earns on watch time, not just views."
    ],
    tags: ["mystery", "story", "youtube", "faceless", "creator-niche"],
    trending: false,
    popularity: 86
  },
  {
    id: "animated-quote-kinetic-runway",
    title: "Animated Quote Kinetic Reels — Runway Prompt for Instagram Theme Pages",
    category: "Video Prompts",
    tool: "Runway",
    difficulty: "Intermediate",
    desc: "Kinetic typography quote videos — bold words slamming in over cinematic backgrounds. The stoic/motivation theme-page format that gets saved and shared.",
    prompt: "Vertical kinetic typography video for an Instagram motivation page: a dramatic cinematic background of [BACKGROUND: storm clouds breaking over a mountain peak / waves crashing on black rocks at dawn / a lone figure walking a desert road at sunset], bold condensed white typography animating in word by word with punchy staggered timing, each word scaling up slightly on entry then settling, subtle film grain and a dark vignette keeping text readable, smooth ease-out motion, the full quote revealed across 6 seconds then a final hold with a soft light pulse behind the last word, deep moody color grade with one accent color, 9:16 vertical, clean legible type, no watermark, professional motion-design feel",
    howto: [
      "Open Runway and paste the prompt into a text-to-video or Gen-4 project.",
      "Choose 9:16 vertical before generating.",
      "Generate, then check the lettering — if Runway mangles text, overlay your real quote in your editor (common fix).",
      "Pair with a trending audio track at low volume under the motion.",
      "Post 1 per day with niche hashtags and a save-worthy caption."
    ],
    tips: [
      "Lock ONE font and ONE accent color across all videos — theme-page branding is what converts followers.",
      "8-12 word quotes perform best; longer ones get skipped before the payoff."
    ],
    tags: ["quotes", "kinetic typography", "instagram", "reels", "creator-niche"],
    trending: false,
    popularity: 84
  },
  {
    id: "before-after-transformation-google-flow",
    title: "Before/After Transformation Clips — Google Flow Prompt for Facebook Pages",
    category: "Video Prompts",
    tool: "Google Flow",
    difficulty: "Beginner",
    desc: "Satisfying before/after transformations — rusty objects restored, messy rooms flipped, faded photos revived. Facebook's most-shared format, zero filming required.",
    prompt: "Satisfying before-and-after transformation video in one continuous take: start on a [OBJECT: rusty vintage bicycle / cluttered messy bedroom / faded old photograph], grimy, dull and lifeless under flat grey light, then a smooth cinematic wipe — a sweep of light crosses the frame — revealing the SAME object fully restored: gleaming chrome, showroom shine, the bedroom spotless and sunlit, the photograph colorized and vivid, camera pushes in gently as the transformation completes, warm golden light floods the scene, tiny dust particles sparkle in the new light, dramatic satisfying reveal pacing, 1.5 second hold on the before, 4 second glide through the change, 2 second hero hold on the after, rich saturated color grade on the after half, 9:16 vertical or 1:1 for the Facebook feed, no text, no watermark, no people, photorealistic, ultra detailed",
    howto: [
      "Open Google Flow and start a new project.",
      "Paste the prompt and pick ONE object for the transformation.",
      "Generate at 9:16 or 1:1 square for the Facebook feed.",
      "Check the wipe moment frame by frame — the object must stay the SAME object.",
      "Add a 'wait for it' style caption and a trending audio track.",
      "Post and pin a comment like 'Full restoration in the comments?' to drive replies."
    ],
    tips: [
      "Restorations of nostalgic objects outperform room makeovers — nostalgia converts.",
      "Make 3 variants of the same object and release them as a Part 1/2/3 series."
    ],
    tags: ["transformation", "before after", "facebook", "satisfying", "creator-niche"],
    trending: false,
    popularity: 90
  },
  {
    id: "extreme-weather-hyperlapse-veo3",
    title: "Extreme Weather Hyperlapse — Veo 3 Prompt for Viral TikTok Shorts",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Beginner",
    desc: "Dramatic weather hyperlapses — supercells rolling in, lightning forking the sky, blizzards swallowing towns. Weather clips are TikTok's sleeper viral niche.",
    prompt: "Dramatic extreme-weather hyperlapse: a [STORM: supercell thunderstorm / lightning storm at night / blizzard whiteout / desert dust storm] rolling over a [LANDSCAPE: small midwestern town / mountain valley / coastal cliff], time-lapse clouds boiling and rotating, lightning bolts forking across a purple-black sky every few seconds, rain sheets sweeping across the frame in waves, camera locked on a tripod for the classic hyperlapse feel with an ultra-slow 5-degree pan, day-for-night color shift as the storm arrives, hyper-detailed cloud textures and rain streaks, cinematic disaster-documentary grade, tense and awe-inspiring, 24fps with motion blur, 9:16 vertical, 8 seconds, loopable, no text, no watermark, no people, photorealistic",
    howto: [
      "Open Veo 3 and start a new text-to-video generation.",
      "Paste the prompt and choose your storm + landscape combo.",
      "Set 9:16 vertical and 8 seconds duration.",
      "Generate 2 variants and keep the one with the most dramatic sky motion.",
      "Add deep rumble sound FX under the clip.",
      "Caption it with a specific place and time ('Kansas, 4:47 PM') — specificity gets shares."
    ],
    tips: [
      "Night lightning storms get roughly 3x the saves of daytime storms.",
      "Batch 7 clips on Sunday and schedule a full week of posts."
    ],
    tags: ["weather", "hyperlapse", "tiktok", "storm", "creator-niche"],
    trending: false,
    popularity: 87
  },
  {
    id: "impossible-animal-mashup-midjourney",
    title: "Impossible Animal Mashups — Midjourney Prompt for Viral Facebook Posts",
    category: "Image Prompts",
    tool: "Midjourney",
    difficulty: "Intermediate",
    desc: "Impossible-but-believable animal hybrid portraits — lion-owl, octopus-parrot, wolf with butterfly wings. Facebook's 'wait, is that real?' comment magnet.",
    prompt: "Hyperrealistic wildlife photograph of an impossible animal hybrid: a [MASHUP: lion with an owl's feathered face and huge amber eyes / octopus with a parrot's rainbow plumage / wolf with butterfly wings folded like a cloak / horse with a peacock's iridescent tail], the creature stares directly into the camera with uncanny intelligence, natural habitat background softly blurred, golden-hour rim light on fur and feathers, National Geographic cover quality, every hair and feather razor sharp, shallow depth of field, 85mm portrait lens look, the hybrid anatomy must look biologically plausible — seamless fur-to-feather transitions, square 1:1, no text, no watermark, photorealistic --ar 1:1 --style raw",
    howto: [
      "Open Midjourney and paste the prompt with your chosen mashup.",
      "Generate the 4-image grid.",
      "Upscale the one with the most believable, seamless anatomy.",
      "Post to Facebook with a 'wait, is this real?' style caption and a place name.",
      "Reply to the top comments — comment threads are the reach engine."
    ],
    tips: [
      "Believable beats fantastical — seamless blends earn the 'is this real?' comments that feed the algorithm.",
      "Rotate 3 mashups as a series so followers wait for the next drop."
    ],
    tags: ["animal mashup", "midjourney", "facebook", "viral", "creator-niche"],
    trending: true,
    popularity: 91
  },
  {
    id: "untapped-niche-idea-machine-chatgpt",
    title: "Untapped Niche Idea Machine — ChatGPT Prompt for 2026 Niche Discovery",
    category: "Text Prompts",
    tool: "ChatGPT",
    difficulty: "Beginner",
    desc: "ChatGPT interviews you with 8 questions, then surfaces 10 genuinely untapped 2026 content niches scored by demand, competition and faceless-friendliness.",
    prompt: "You are a content-niche research strategist who finds underserved niches before they saturate. Interview me with exactly 8 questions, ONE at a time, waiting for my answers: (1) which platforms will I post on — YouTube, TikTok, Facebook, Instagram? (2) faceless or on-camera? (3) how many hours per week can I create? (4) what topics do I already know well? (5) what tools do I own — AI video, editing apps, camera? (6) do I want fast viral growth or slow compounding income? (7) any niches I refuse to touch? (8) what is my unfair advantage — language, location, job, hobby? After my 8th answer, deliver: a ranked list of 10 niches, each with (a) a one-sentence description, (b) an example of an existing small channel proving demand (under 100K subs), (c) a competition score from 1-10, (d) why it is still untapped in 2026, (e) 3 video ideas I could post this week, (f) the monetization path. End with your top pick and the single reason it wins. Be brutally honest — if my constraints point to a weak niche, say so plainly and redirect me to the better adjacent option.",
    howto: [
      "Open ChatGPT and paste the prompt.",
      "Answer all 8 questions honestly — the output is only as good as your answers.",
      "Score each suggested niche against YOUR available hours, not just the AI's score.",
      "Validate the top 3 with the Niche Validation Scorecard prompt in this library.",
      "Commit to ONE niche for 30 days before judging it."
    ],
    tips: [
      "The 'faceless + under 100K subs proof' filter kills 90% of bad niche ideas before they waste your month.",
      "Rerun this every 90 days — untapped today is saturated next quarter."
    ],
    tags: ["niche discovery", "chatgpt", "creator-niche", "strategy", "youtube"],
    trending: false,
    popularity: 89
  },
  {
    id: "viral-hook-factory-gemini",
    title: "Viral Hook Factory — Gemini Prompt for Titles & Opening Lines",
    category: "Text Prompts",
    tool: "Gemini",
    difficulty: "Beginner",
    desc: "Gemini writes 20 scroll-stopping titles AND 20 opening lines for your niche, ranked by curiosity gap — hooks for YouTube, TikTok, Reels and Facebook.",
    prompt: "You are a viral hook writer for short-form video and YouTube. I will give you my niche and one video topic. Generate hooks in two batches. BATCH 1 — 20 titles, each under 60 characters, in these styles: 4 curiosity-gap, 4 number-led, 4 contrarian, 4 how-to promises, 4 emotional. BATCH 2 — 20 opening lines for the video itself (first 3 seconds, spoken or on-screen), max 12 words each, each creating an open loop the viewer must wait to close. Then rank ALL 40 by predicted click-through for MY platform, top 5 first, with one line each on why it works psychologically. Rules: no clickbait the video cannot pay off, no ALL CAPS, never repeat the same power word twice. My niche: [NICHE]. My platform: [YouTube/TikTok/Instagram/Facebook]. My topic: [TOPIC]. After the rankings, give me the single best title + opening line pairing as my final answer.",
    howto: [
      "Open Gemini, paste the prompt, and fill in your niche, platform and topic.",
      "Generate and read the full ranked list — not just the top 5.",
      "Pick the top-ranked pair but sanity-check it against what your video actually delivers.",
      "A/B test the top 2 titles on similar videos a week apart.",
      "Keep a swipe file of your winning hooks for the next batch."
    ],
    tips: [
      "The open-loop test: if the opening line does not make YOU need to watch, regenerate.",
      "Pair one curiosity title with one promise title each week and compare click-through."
    ],
    tags: ["hooks", "titles", "gemini", "tiktok", "creator-niche"],
    trending: false,
    popularity: 85
  },
  {
    id: "faceless-channel-script-pack-claude",
    title: "Faceless Channel Script Pack — Claude Prompt to Write 30 Niche Scripts",
    category: "Text Prompts",
    tool: "Claude",
    difficulty: "Advanced",
    desc: "Claude writes a 30-day script pack for your faceless channel — hooks, beats, retention tricks and CTAs baked in, with AI-clip descriptions for every beat.",
    prompt: "You are a YouTube scriptwriter for faceless channels with 10M+ views written. I will give you my niche, target video length, and tone. Write me a 30-video script pack — but FIRST ask me these 4 questions one at a time: (1) niche and sub-niche, (2) target length per video (Shorts under 60s or long-form 8-12 min), (3) tone — documentary, funny, mysterious, or motivational, (4) one channel I want to sound like. Then deliver all 30 as: VIDEO [N]: title (under 60 chars), hook (first 15 seconds, word for word), 5-7 beats as bullet points with a retention trick noted on beats 3 and 5 (open loop, pattern interrupt, payoff tease), closing CTA matched to my goal (subs, comments, or watch-next), and the B-roll/AI-clip description for each beat so I can generate visuals in Veo 3, Kling or Sora. Order the 30 from easiest to hardest to produce. Every script must stand alone, but video 30 must tease a series. No filler intros, no 'hey guys welcome back'. Write like a human, grade-8 reading level, spoken rhythm.",
    howto: [
      "Open Claude and paste the prompt.",
      "Answer the 4 setup questions one at a time.",
      "Review the first 3 scripts fully before generating any visuals.",
      "Produce the videos in order — easiest first builds momentum.",
      "Schedule 1 per day or 4 per week and track which beats hold retention."
    ],
    tips: [
      "The B-roll descriptions are the real gold — paste them straight into Veo 3 or Kling.",
      "If a hook feels weak, ask Claude for 3 alternates before producing anything."
    ],
    tags: ["scripts", "youtube", "claude", "faceless", "creator-niche"],
    trending: false,
    popularity: 92
  }
,
  {
    "id": "niche-2026-10-08-soap-cutting-asmr",
    "title": "Satisfying Soap Cutting ASMR (Instagram Reels Niche)",
    "category": "Viral Niches",
    "tool": "Midjourney",
    "difficulty": "Beginner",
    "desc": "ASMR satisfaction triggers an involuntary \"one more watch\" loop — the brain rewards prediction (where will the knife land?) and completion (the clean slice). Every loop is a retention event Instagram's algorithm reads as high quality. Is niche ki videos 112.5M/89.3M/64.7M/48.9M views tak gayi hain.",
    "image": "images/niches/niche-grid-soap-cutting-asmr.jpg",
    "prompt": "Generate a hyper-detailed [CAMERA ANGLE: extreme close-up/macro/top-down] photo of a [SOAP TYPE: layered pastel soap/glitter gold soap/neon swirl soap/flower-shaped soap] being sliced by a [TOOL: metal wire cutter/sharp knife], [ACTION DETAIL: one clean cut lifting a translucent petal curl / perfect cube slices falling / thin slices fanning like petals], [COLOR PALETTE: pastel rainbow pink-lavender-mint / gold and champagne / electric blue-teal swirls / pink-orange-purple], [LIGHTING: soft studio light / dramatic dark background], oddly satisfying ASMR aesthetic, no text, no watermark",
    "howto": [
      "Post 1–2 Reels per day: one soap per video keeps the visual fresh and the edit loopable.",
      "Film in macro; start the cut within the first 2 seconds so the sound hits before the viewer can scroll.",
      "Batch-produce 7 videos in one afternoon (different colors/shapes) and drip them out daily."
    ],
    "tips": [
      "Caption asks a question viewers can't resist: \"Which color should I cut next?\" — comments push it to Reels explore.",
      "Hook = the knife touching the soap in second 0–1. No intro frame.",
      "Loop the cut perfectly (reverse the clip at the end) so Reels auto-replay; replays count as watch time."
    ],
    "tags": [
      "viral-niche",
      "instagram",
      "creator-niche",
      "asmr",
      "satisfying",
      "reels"
    ],
    "trending": true,
    "popularity": 95
  },
  {
    "id": "niche-2026-10-08-kinetic-sand-cutting",
    "title": "Oddly Satisfying Kinetic Sand Cutting (TikTok Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Kinetic sand slicing hits three dopamine levers at once: sensory ASMR (visual + sound), pattern completion (the perfect slice), and novelty (a new shape every video). TikTok's algorithm reads the resulting replays as elite retention. Is niche ki videos 214.6M/176.2M/158.8M/93.4M views tak gayi hain.",
    "image": "images/niches/niche-grid-kinetic-sand-cutting.jpg",
    "prompt": "AI video, [DURATION: 8-15 seconds], vertical 9:16: close-up of [SAND TYPE: rainbow layered kinetic sand / metallic black-gold sand / giant fruit-shaped sand block / pastel galaxy swirl tower] being sliced by a [BLADE: sharp chef knife / wire slicer], [CUT STYLE: perfect cube slices / thin shimmering ribbons / clean halves revealing a patterned interior], [COLOR PALETTE: neon rainbow stripes / black and gold metallic / watermelon red-green / purple-pink-teal galaxy], [LIGHTING: soft studio light / dramatic dark background], synchronized slicing sound, oddly satisfying ASMR aesthetic, seamless loop ending, no text, no watermark",
    "howto": [
      "Open with the blade mid-cut — TikTok's first 2 seconds decide everything.",
      "Alternate slice styles (cubes, ribbons, halves) so no two videos feel identical; viewers binge a variety.",
      "Use TikTok's original audio capture on-site so the platform tags the sound and surfaces you in sound search."
    ],
    "tips": [
      "Title formula: \"I cut [OBJECT] and nobody was ready 😱\" + oddly-specific object (watermelon, galaxy tower). Curiosity beats description.",
      "Start mid-slice with a crisp sound. 2-second rule: if the viewer hears nothing by second 2, they scroll.",
      "End the clip on the freeze-frame of the perfect slice, then reverse it for a seamless loop — loops compound watch time and trigger the viral loop."
    ],
    "tags": [
      "viral-niche",
      "tiktok",
      "creator-niche",
      "asmr",
      "satisfying",
      "oddly-satisfying"
    ],
    "trending": true,
    "popularity": 94
  },
  {
    "id": "niche-2026-10-08-urbex-abandoned-places",
    "title": "Abandoned Places Exploration (YouTube Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Urbex is curiosity you can't resolve by scrolling — a place frozen in time triggers the \"what happened here?\" gap, and viewers keep watching to close it. High average view duration is YouTube's core ranking signal, and this niche manufactures it. Is niche ki videos 38.6M/52.3M/24.1M/15.9M views tak gayi hain.",
    "image": "images/niches/niche-grid-urbex-abandoned-places.jpg",
    "prompt": "Cinematic AI video sequence, [SHOT STYLE: explorer POV with flashlight / aerial drone sweep / slow interior dolly], of [LOCATION: abandoned grand hotel lobby / derelict hospital corridor / overgrown amusement park at golden hour / sunken shipwreck ballroom], key detail: [HAUNTING ELEMENT: cobwebbed chandelier / rusted wheelchair / empty ferris wheel silhouette / diver's light through a broken porthole], [ATMOSPHERE: dust particles in light shafts / vines creeping through broken windows / dramatic sunset], found-footage-realistic textures, subtle camera shake, no people shown fully, no text, no watermark",
    "howto": [
      "Title every video as a place + mystery: \"I Explored [LOCATION] — Nobody Has Been Here in [X] Years\".",
      "Structure: drone establishing shot → walk-in POV → one \"discovery moment\" every 3 minutes to reset attention.",
      "Disclose AI generation in the description when footage is AI-generated — disclosure rules keep the channel monetizable."
    ],
    "tips": [
      "First 30 seconds = the single most shocking room/corridor; the title's promise must appear on screen immediately.",
      "Keyword-first titles under 60 chars: \"Abandoned Hospital Nobody Dared to Enter\" — put the search keyword before the emotion.",
      "Add 3+ chapters from 0:00 (Entrance / The Discovery / The Hidden Room) — chapters lift session time and search snippets."
    ],
    "tags": [
      "viral-niche",
      "youtube",
      "creator-niche",
      "exploration",
      "urbex",
      "documentary"
    ],
    "trending": true,
    "popularity": 93
  },
  {
    id: "deep-sea-alien-creature-pov-veo3",
    title: "Deep Sea Alien Creature POV — Veo 3 Prompt for Viral TikTok Niche Pages",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Beginner",
    desc: "Dive into the midnight zone where bioluminescent creatures look straight-up alien — anglerfish lanterns, siphonophore chains, dumbo octopuses. Deep-sea content is TikTok's ultimate 'I can't look away' niche.",
    prompt: "Cinematic AI deep-sea exploration video: a [CREATURE: giant Pacific octopus unfurling its arms / anglerfish with glowing lure / 40-meter siphonophore chain glowing blue / dumbo octopus flapping its ear fins] drifting through the [ZONE: midnight zone at 1,000 meters / hydrothermal vent field with black smokers / bioluminescent jellyfish bloom / sunken volcanic ridge], the creature turns toward the camera and approaches with slow, hypnotic movement, bioluminescent pulses rippling across its skin in cyan and violet, marine snow drifting through the ROV's headlight beam, tiny laser scale dots visible for size reference, deep blue-black water fading to absolute black, ultra-detailed translucent skin textures, documentary realism, tense and awe-inspiring, subtle camera drift as if on a submersible, 24fps, 9:16 vertical, 8 seconds, loopable, no text, no watermark, no humans, photorealistic",
    howto: [
      "Open Veo 3 and start a new text-to-video generation.",
      "Paste the prompt and pick your creature + zone combo.",
      "Set 9:16 vertical and 8 seconds duration.",
      "Generate 3 variants — keep the one where the creature moves TOWARD the camera (approach = retention).",
      "Add deep ambient rumble + sonar-ping sound design.",
      "Caption with a real depth fact ('This was filmed at 1,000 meters down') — real facts earn saves and shares."
    ],
    tips: [
      "Creatures that 'notice' the camera get 2x the watch time of passive swims — the approach triggers the human threat/curiosity reflex.",
      "Disclose AI generation in the description — deep-sea content without disclosure risks comment backlash and monetization issues."
    ],
    tags: ["deep sea", "tiktok", "veo 3", "creature", "creator-niche"],
    trending: true,
    popularity: 93
  },
  {
    id: "impossible-product-transformation-kling",
    title: "Impossible Product Transformations — Kling Prompt for Viral Instagram Reels",
    category: "Video Prompts",
    tool: "Kling",
    difficulty: "Intermediate",
    desc: "Products that melt, fold and reassemble into something impossible — a sneaker liquefying into a sports car, a lipstick blooming into a rose. Reels' favorite 'how did they do that?' hook.",
    prompt: "Hyper-smooth AI product transformation video for Instagram Reels: a [PRODUCT: white sneaker / matte-black perfume bottle / red lipstick tube / luxury watch] on a seamless [BACKGROUND: pastel studio backdrop / reflective black surface / marble countertop], the product begins to melt, ripple and fold like liquid metal, morphing mid-frame into [RESULT: a miniature sports car / a blooming flower / a soaring bird / a skyscraper], the transformation completes with a satisfying snap as the new object lands and spins once to show its detail, studio product-photography lighting, slow-motion fluid dynamics, every droplet razor sharp, macro detail, seamless physics that look physically real, 24fps, 9:16 vertical, 6-8 seconds, ends on a hold-frame of the final object, no text, no watermark, photorealistic",
    howto: [
      "Open Kling and start a new image-to-video or text-to-video generation.",
      "Paste the prompt and choose your product + transformation pair.",
      "Set 9:16 vertical and 6-8 seconds.",
      "Generate 2-3 variants — keep the one with the cleanest mid-morph moment.",
      "Pair with a trending Reel audio; the visual carries the hook, the audio carries the reach.",
      "Post 1 per day as a series ('Transformation #7') — series build return viewers."
    ],
    tips: [
      "Everyday products morphing into luxury objects = the satisfaction + aspiration combo that gets saved.",
      "End on a 1-second hold of the final object so viewers can screenshot it — screenshots signal interest to the algorithm."
    ],
    tags: ["product", "transformation", "kling", "instagram", "creator-niche"],
    trending: true,
    popularity: 90
  },
  {
    id: "time-travel-street-sora",
    title: "Time-Travel Street Scenes — Sora Prompt for TikTok History Niches",
    category: "Video Prompts",
    tool: "Sora",
    difficulty: "Beginner",
    desc: "The same street, 100 years apart, morphing before your eyes — horse carriages melting into traffic, gas lamps into neon. History TikTok's most rewatched format.",
    prompt: "Seamless AI time-travel video: a slow forward dolly down [STREET: a Paris boulevard / a New York avenue / a London lane / a Tokyo alley] in [ERA A: 1924 — horse-drawn carriages, gas lamps, vintage storefronts, people in period clothing, film-grain sepia tones], then the scene melts and rebuilds around the camera into [ERA B: 2026 — same street with traffic, neon signs, modern storefronts, full color], the camera never cuts — buildings morph, vehicles dissolve and reform, one figure in period dress watches the change happen, matched camera path so the before/after lines up perfectly, cinematic color transition from sepia to full color, ultra-detailed period costumes and architecture, documentary realism, subtle film grain in the past half, 9:16 vertical, 10 seconds, ends holding on the modern street, no text, no watermark, photorealistic",
    howto: [
      "Open Sora and start a new text-to-video generation.",
      "Paste the prompt with your chosen street and era pair.",
      "Set 9:16 vertical and 10 seconds duration.",
      "Generate 2 variants — keep the one where the camera path stays perfectly straight (the dolly sells the illusion).",
      "Add vintage piano or period-appropriate audio that cuts to modern city ambience at the morph.",
      "Caption with a real fact about the street ('This street has looked like this since 1898') — history nerds comment-correct, and comments = reach."
    ],
    tips: [
      "The morph moment should land at exactly the 3-second mark — early enough to hook scrollers, late enough to feel earned.",
      "Pick streets your audience knows personally; local recognition drives the 'wait, I live here' shares."
    ],
    tags: ["history", "tiktok", "sora", "time travel", "creator-niche"],
    trending: false,
    popularity: 88
  },
  {
    id: "storybook-animation-runway",
    title: "Paper-Cut Storybook Animation — Runway Prompt for YouTube Kids & Family Niche",
    category: "Video Prompts",
    tool: "Runway",
    difficulty: "Intermediate",
    desc: "Handcrafted paper-cut storybook worlds that come alive — layered forests, friendly dragons, tiny heroes on big quests. The family niche YouTube's algorithm loves, in a style no one else is making with AI.",
    prompt: "Charming paper-cut stop-motion style animation: [SCENE: a layered paper forest with a tiny paper hero / a friendly paper dragon curled around a paper castle / paper ocean waves with a paper boat voyage / a paper village waking up at sunrise], visible handcrafted texture — torn paper edges, layered depth, gentle puppet-like character motion with 12fps stop-motion charm, warm storybook color palette [PALETTE: autumn forest greens and golds / moonlit blues and silver / sunrise pinks and oranges], soft paper shadows giving real depth, the camera pushes in slowly revealing a story moment: [MOMENT: the hero finds a glowing door / the dragon wakes and smiles / the boat discovers a floating island / the village lights its lanterns], whimsical, cozy, G-rated wonder, gentle parallax as layers shift, 16:9, 8-10 seconds per scene, seamless loops for compilation videos, no text, no watermark",
    howto: [
      "Open Runway and start a new text-to-video generation.",
      "Paste the prompt with your chosen scene and moment.",
      "Generate 8-10 second scenes — these chain into longer story compilations.",
      "Batch 10-15 scenes around ONE story arc, then edit them into a 3-5 minute video.",
      "Add warm narration and gentle music — kids' content needs a human voice track.",
      "Publish the full compilation on YouTube + cut each scene as a Short to feed the channel."
    ],
    tips: [
      "The 'glowing discovery moment' in each scene is the retention beat — never let a scene end without one.",
      "Series arcs ('The Lantern Village, Part 1-10') turn one-time viewers into subscribers — kids rewatch favorites on loop."
    ],
    tags: ["animation", "youtube", "runway", "kids", "creator-niche"],
    trending: false,
    popularity: 84
  },
  {
    id: "satisfying-food-pour-google-flow",
    title: "Satisfying Food Pours — Google Flow Prompt for Viral Facebook Food Pages",
    category: "Video Prompts",
    tool: "Google Flow",
    difficulty: "Beginner",
    desc: "Molten cheese stretching, honey spiraling, chocolate cascading — the macro food pours that stop Facebook scrollers mid-thumb. Food pages live or die on this one format.",
    prompt: "Ultra-satisfying macro food pour video: [POUR: molten mozzarella stretching between two pizza slices / golden honey spiraling off a wooden dipper / glossy chocolate cascading over a lava cake / rainbow cheese sauce flooding loaded fries] in extreme close-up, the pour stretches and folds in hypnotic slow motion, [DETAIL: cheese strands catching the light / honey ribbons coiling perfectly / chocolate sheeting glass-smooth], steam rising softly, rich saturated food colors, cinematic food-commercial lighting with warm highlights, every drip and stretch razor sharp, shallow depth of field, camera locked on the money moment — no wide shots, ASMR-grade visual texture, 9:16 vertical, 6-8 seconds, ends on the perfect cross-section or dip, no text, no watermark, photorealistic",
    howto: [
      "Open Google Flow and start a new text-to-video generation.",
      "Paste the prompt and pick your pour.",
      "Set 9:16 vertical and 6-8 seconds.",
      "Generate 3 variants — the winner is the one with the longest, cleanest stretch.",
      "Overlay a crisp pouring/cheese-pull sound effect at full volume.",
      "Caption with a question foodies can't resist ('Would you take a bite?') — food posts live on comments."
    ],
    tips: [
      "The cross-section reveal at the end is the payoff — a pour without a reveal gets half the shares.",
      "Batch 5 pours in one session and schedule a full week — food pages die on inconsistency."
    ],
    tags: ["food", "satisfying", "google flow", "facebook", "creator-niche"],
    trending: true,
    popularity: 91
  },
  {
    id: "miniature-world-day-night-veo3",
    title: "Miniature World Day-to-Night — Veo 3 Prompt for Faceless YouTube Shorts",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Beginner",
    desc: "A tiny village where day melts into a lantern-lit night in 8 seconds — windows glow, stars ignite, smoke curls from chimneys. Miniature content is Shorts' coziest viral loop.",
    prompt: "Enchanting miniature diorama video: a tiny handcrafted [VILLAGE: alpine village with a church steeple / coastal fishing hamlet with a lighthouse / autumn forest hamlet with cabins / desert oasis town] filmed in extreme tilt-shift miniature style, time-lapse day-to-night: golden afternoon light fades as [TRANSITION: windows flicker on one by one / the lighthouse beam sweeps on / lanterns light along the paths / stars ignite over the dunes], tiny smoke curls from chimneys, a miniature train or boat moves through the scene, hyper-detailed handcrafted textures — tiny roof tiles, pebble paths, microscopic figures, camera performs a slow orbital move around the diorama, cozy cinematic color grade, 9:16 vertical, 8 seconds, seamless loop back to daylight, no text, no watermark, photorealistic",
    howto: [
      "Open Veo 3 and start a new text-to-video generation.",
      "Paste the prompt and choose your village + transition.",
      "Set 9:16 vertical and 8 seconds.",
      "Generate 2 variants — the loop point must be invisible (end frame = start frame).",
      "Add cozy ambient audio: evening crickets fading in as day fades.",
      "Post as a series ('Tiny Village #12') — collectors follow for the set."
    ],
    tips: [
      "The lantern-lighting sequence is the dopamine beat — viewers rewatch to catch every window lighting up.",
      "Warm color grades outperform cool ones 3:1 in this niche — keep it golden and cozy."
    ],
    tags: ["miniature", "veo 3", "youtube", "cozy", "creator-niche"],
    trending: false,
    popularity: 86
  },
  {
    id: "book-nook-interiors-midjourney",
    title: "Dreamy Book-Nook Interiors — Midjourney Prompt for Instagram Book Pages",
    category: "Image Prompts",
    tool: "Midjourney",
    difficulty: "Beginner",
    desc: "Cozy reading corners that bookstagram can't resist — window seats piled with books, fireplace nooks, secret library doors. Book pages grow on aesthetic + wanderlust alone.",
    prompt: "Breathtakingly cozy reading nook interior photograph: a [NOOK: window seat piled with linen cushions and stacked hardcovers / stone fireplace corner with a leather armchair and tea tray / hidden library room behind a bookshelf door / treehouse reading loft with skylights], [MOOD: rain streaking the window / golden afternoon sunbeams / candlelit evening / autumn leaves visible outside], books everywhere — towering shelves, precarious stacks, one open book face-down on the chair, warm cinematic lighting, rich textures: worn leather, knit blankets, wood grain, shot on 35mm film look with soft grain, interior-design-magazine composition, inviting and lived-in, no people, no text, no watermark --ar 4:5 --style raw",
    howto: [
      "Open Midjourney and paste the prompt with your chosen nook and mood.",
      "Generate the 4-image grid.",
      "Upscale the coziest, most 'I want to live there' frame.",
      "Post with a book recommendation caption — the image stops the scroll, the rec starts the comments.",
      "Run it as a weekly series ('Cozy Corner Sunday') — ritual posts get saved."
    ],
    tips: [
      "Rainy-window moods get the most saves in bookstagram — weather outside, warmth inside.",
      "Never repeat the same nook style twice in a row — variety in the grid keeps followers curious."
    ],
    tags: ["books", "interior", "midjourney", "instagram", "creator-niche"],
    trending: false,
    popularity: 83
  },
  {
    id: "keyword-gap-miner-chatgpt",
    title: "Keyword Gap Miner — ChatGPT Prompt to Find Underserved 2026 Content Ideas",
    category: "Text Prompts",
    tool: "ChatGPT",
    difficulty: "Intermediate",
    desc: "ChatGPT hunts the questions your competitors rank for but answer badly — then hands you 20 content gaps you can win this month. Niche discovery for creators who want demand with proof.",
    prompt: "You are an SEO content strategist who finds underserved search demand. I will give you my niche and 3 competitor channels/sites. Do this in 3 phases. PHASE 1 — ask me (one at a time): (1) my niche and sub-niche, (2) my platform — YouTube, TikTok, Facebook, Instagram, or blog, (3) 3 competitors I want to outrank, (4) my format — long-form, Shorts/Reels, or posts. PHASE 2 — gap mining: list 20 content ideas where competitor coverage is thin, weak, or outdated. For EACH idea give: the exact search phrase people type, why current results fail the searcher (thin content, old info, wrong format), the searcher intent in one line, and a difficulty score 1-10. PHASE 3 — rank the 20 by the ratio of demand to difficulty, then give me the top 5 with: a working title under 60 characters, the angle that beats every current result, and the 3 sub-points that make mine the definitive answer. Rules: no generic 'ultimate guide' ideas, every idea must name a specific gap, be honest about which of my top 5 I could still lose and why.",
    howto: [
      "Open ChatGPT and paste the prompt.",
      "Answer the 4 setup questions one at a time.",
      "Take the top 5 ideas and sanity-check each in actual search before committing.",
      "Produce the #1 idea first — it is your fastest win.",
      "Re-run monthly — gaps close as competitors catch up."
    ],
    tips: [
      "The 'why current results fail' column is the whole game — that sentence becomes your video's unique angle.",
      "A difficulty score of 3 or under with real demand is a green light — ship within 7 days before someone else does."
    ],
    tags: ["seo", "niche discovery", "chatgpt", "strategy", "creator-niche"],
    trending: false,
    popularity: 87
  },
  {
    id: "winning-format-decoder-gemini",
    title: "Winning Format Decoder — Gemini Prompt to Reverse-Engineer Viral Video Formats",
    category: "Text Prompts",
    tool: "Gemini",
    difficulty: "Intermediate",
    desc: "Feed Gemini 5 viral videos in your niche and get back the hidden formula — the beat structure, hook pattern and retention tricks you can legally clone. Format analysis, done ethically.",
    prompt: "You are a short-form video format analyst. I will paste the transcripts/descriptions (and view counts) of 5 viral videos in my niche — each over 1M views. For EACH video, extract: (1) the hook — exact first 3 seconds, what it shows and says, (2) the beat structure — timestamp every beat and label it (setup, tension, payoff, twist, CTA), (3) the retention tricks used — open loops, pattern interrupts, text overlays, sound changes, (4) the emotion it sells — curiosity, envy, comfort, outrage, (5) why THIS video won while similar ones died. Then the DECODER: build me the shared FORMULA — the beat template all 5 follow, written as a reusable script skeleton with [BRACKETS] for my content. Then give me 5 video ideas applying the formula to MY niche, each with the hook written word-for-word. Rules: never tell me to copy a video outright — formats yes, content no. Flag any trick that only works once (a trend) vs tricks that work forever (psychology). My niche: [NICHE].",
    howto: [
      "Open Gemini and paste the prompt.",
      "Paste 5 genuinely viral videos from YOUR niche with transcripts.",
      "Study the decoder formula before the 5 ideas — the formula is the asset, ideas are examples.",
      "Apply the skeleton to your next 10 videos and track which beats hold retention.",
      "Re-decode quarterly — formulas decay as audiences learn them."
    ],
    tips: [
      "Videos over 1M views with under 100K-follower creators are the purest signal — the format did the work, not the audience.",
      "Copy the beat structure, never the topic — same skeleton, your stories."
    ],
    tags: ["viral", "format", "gemini", "strategy", "creator-niche"],
    trending: true,
    popularity: 89
  },
  {
    id: "niche-monetization-map-claude",
    title: "Niche Monetization Map — Claude Prompt to Build a 6-Stream Income Plan",
    category: "Text Prompts",
    tool: "Claude",
    difficulty: "Advanced",
    desc: "Claude maps 6 realistic income streams onto YOUR niche — ad revenue, affiliates, digital products and more — with timelines, effort scores and a 90-day build order. Pick your niche with your eyes open.",
    prompt: "You are a creator-economy monetization strategist who prices niches honestly. I will give you my niche, platform, audience size (or zero), and weekly hours. Build my MONETIZATION MAP in 3 parts. PART 1 — 6 income streams that actually fit MY niche: (a) ad revenue / creator funds, (b) affiliate products my audience already buys, (c) a digital product I could make in a weekend, (d) sponsorships — which brands, at what follower count, (e) a service I could sell (editing, consulting, UGC), (f) one unconventional stream for this niche. For EACH: realistic monthly range at 10K, 50K and 200K followers, effort score 1-10, and time-to-first-dollar. PART 2 — the 90-day build order: which stream to start first and why, what to build each month, the one metric that proves it is working. PART 3 — the honest audit: which stream is a trap for my niche (looks good, pays nothing), the income ceiling of this niche vs adjacent niches, and the single pivot that would 3x my earning potential. No hype, no 'the sky is the limit' — give me numbers you would defend. My niche: [NICHE]. My platform: [PLATFORM]. My audience: [SIZE]. My hours/week: [HOURS].",
    howto: [
      "Open Claude and paste the prompt.",
      "Fill in your niche, platform, audience size and weekly hours honestly.",
      "Read the honest audit FIRST — it may change which stream you start with.",
      "Start stream #1 from the 90-day order and ignore the rest until month 2.",
      "Re-run at 10K and 50K followers — the map changes as you grow."
    ],
    tips: [
      "The 'trap stream' warning saves most creators 6 months — niches have ceilings, and the audit names yours.",
      "Time-to-first-dollar beats monthly ceiling when you are starting — a $200 affiliate month in week 3 beats a $2,000 dream in year 2."
    ],
    tags: ["monetization", "niche discovery", "claude", "income", "creator-niche"],
    trending: false,
    popularity: 90
  }
,
{
    id: "storm-chaser-pov-veo3",
    title: "Storm Chaser POV — Veo 3 Prompt for Viral YouTube Shorts",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Intermediate",
    desc: "Driver's-seat storm-chase footage with a tornado funnel tearing across a dark prairie highway — the high-adrenaline POV style that explodes on YouTube Shorts every storm season.",
    prompt: "Hyper-realistic storm chase POV from the driver's seat of a dusty SUV speeding down a rural prairie highway, a massive rotating tornado funnel touching down ahead under pitch-black supercell skies, lightning flickering inside the funnel, rain streaking across the windshield, dashboard gauges glowing, trees bending sideways in the wind, the camera jolts with the vehicle's motion, debris swirling past the headlights, ominous greenish sky tone, cinematic realism, intense motion blur, 9:16 vertical, 24fps, photorealistic, ultra detailed, no text, no watermark, no people in frame",
    howto: [
      "Open Veo 3 and start a new text-to-video generation.",
      "Paste the full prompt exactly — the windshield and dashboard details are what sell the POV realism.",
      "Set aspect ratio to 9:16 for Shorts and TikTok, or 16:9 if you want YouTube long-form B-roll.",
      "Generate 3 variations and keep the clip with the most natural camera shake.",
      "Add a deep storm-rumble sound effect and a caption like 'WAIT FOR THE FUNNEL' before posting."
    ],
    tips: [
      "Storm content spikes with real weather seasons — bank 5-6 clips before peak storm season and drip them out weekly.",
      "Swap 'prairie highway' for 'coastal road' or 'desert plain' to build a whole storm-chase series from this one template."
    ],
    tags: ["storm chase", "youtube", "shorts", "creator-niche", "veo3"],
    trending: true,
    popularity: 96
  },
  {
    id: "talking-pets-comedy-kling",
    title: "Talking Pets Comedy Clips — Kling Prompt for Viral TikTok Niche Pages",
    category: "Video Prompts",
    tool: "Kling",
    difficulty: "Beginner",
    desc: "Pets arguing like sitcom characters — a grumpy bulldog scolding a smug cat over stolen cookies, with natural mouth motion. Talking-pet pages pull millions of TikTok views per month.",
    prompt: "Funny photorealistic clip of a grumpy English bulldog sitting at a tiny kitchen table opposite a smug orange cat, the bulldog's mouth moving naturally as if delivering an angry lecture, a plate of cookies between them, the cat slowly dragging the plate closer with one paw, warm cozy kitchen lighting, comedic timing in the pets' head tilts and blinks, camera locked off at table level, 9:16 vertical, realistic fur detail, smooth lip-sync-ready mouth motion, ultra detailed, no text overlay, no watermark",
    howto: [
      "Open Kling and start a new text-to-video generation.",
      "Paste the prompt exactly as written — the locked-off camera keeps the faces stable for mouth motion.",
      "Generate 2-3 clips and pick the one where the mouth movement looks most natural.",
      "Add your own funny dialogue audio on top using any free voiceover app — Kling's mouth motion sells the lip-sync.",
      "Post as part of a series ('The Pet Court', episode 1, 2, 3...) so viewers follow for the next argument."
    ],
    tips: [
      "Series format beats one-offs: the same two pets in new fights doubles follow rate on TikTok niche pages.",
      "Keep episodes under 12 seconds — talking-pet humor dies if the clip runs long."
    ],
    tags: ["talking pets", "tiktok", "comedy", "creator-niche", "kling"],
    trending: true,
    popularity: 94
  },
  {
    id: "luxury-travel-pov-sora",
    title: "Luxury POV Travel Walkthrough — Sora Prompt for Instagram Theme Pages",
    category: "Video Prompts",
    tool: "Sora",
    difficulty: "Intermediate",
    desc: "First-person walkthrough of a jaw-dropping luxury resort suite and infinity pool at sunset — the aspirational travel aesthetic that grows Instagram theme pages fast.",
    prompt: "Immersive first-person walkthrough of a breathtaking luxury resort: starting in a marble lobby with a cascading chandelier, stepping onto a private balcony overlooking a turquoise ocean, then a slow glide along an infinity pool at golden sunset with palm silhouettes, steam rising off the warm water, a server walking past with champagne, warm cinematic color grade, smooth gimbal-like camera motion, distant waves and ambient resort sounds implied, vertical 9:16, photorealistic, ultra detailed, no text, no watermark, no people in close-up",
    howto: [
      "Open Sora and create a new video generation.",
      "Paste the prompt and keep the three-location sequence — the lobby-to-pool journey is the hook.",
      "Set duration to the maximum available so the walkthrough feels like one continuous glide.",
      "Generate twice and choose the clip with the smoothest camera transitions between scenes.",
      "Layer trending travel audio over the clip and pin a comment naming the 'resort' to drive comment bait."
    ],
    tips: [
      "Never claim the location is real — 'POV: you saved 10 years for this' captions keep it fantasy and safe.",
      "One niche per page: separate accounts for beach resorts, city suites and mountain lodges grow faster than mixed feeds."
    ],
    tags: ["travel", "instagram", "luxury", "creator-niche", "sora"],
    trending: false,
    popularity: 88
  },
  {
    id: "breaking-news-explainer-runway",
    title: "Breaking-News Explainer Loops — Runway Prompt for Viral Facebook Pages",
    category: "Video Prompts",
    tool: "Runway",
    difficulty: "Beginner",
    desc: "Cinematic 'breaking news' style B-roll loops — spinning globes, data streams, city skylines at dawn — the authoritative motion background Facebook explainer pages loop behind their narration.",
    prompt: "Sleek broadcast-news style motion graphic: a slowly rotating glass globe with glowing data arcs connecting continents, holographic numbers and charts rising in the foreground, deep navy and electric-blue studio backdrop with subtle light flares, a sunrise city skyline fading in behind the globe, smooth seamless loop, camera pushes in slowly, premium newsroom aesthetic, 16:9, crisp motion, ultra detailed, no text, no watermark, no real logos",
    howto: [
      "Open Runway and start a text-to-video generation.",
      "Paste the prompt and generate a 10-second clip — the loopable design means one clip covers a full voiceover.",
      "Export the clip and loop it 4-6 times under your narrated script in any free editor.",
      "Record or generate a 30-60 second voiceover explaining one news fact per video.",
      "Post with a news-style title and pin the source link in comments — Facebook rewards informative video hard."
    ],
    tips: [
      "Pick one beat (tech, money, space) — pages that cover 'everything news' grow slower than focused ones.",
      "Regenerate the globe with different accent colors per series so regular viewers recognize your brand instantly."
    ],
    tags: ["news explainer", "facebook", "b-roll", "creator-niche", "runway"],
    trending: false,
    popularity: 82
  },
  {
    id: "infinite-zoom-illusion-google-flow",
    title: "Infinite Zoom Illusion Clips — Google Flow Prompt for Viral Shorts",
    category: "Video Prompts",
    tool: "Google Flow",
    difficulty: "Advanced",
    desc: "A mind-bending infinite zoom — from a galaxy down to a city street, into a coffee cup, down to the molecules — the loop-style illusion that racks up rewatches on TikTok and YouTube Shorts.",
    prompt: "Seamless infinite-zoom illusion video: start on a swirling spiral galaxy, dive through starfields into a glowing night-time city, sweep down one lit street, plunge through a cafe window, drop into a steaming coffee cup, keep diving into the swirling latte art until the foam patterns become a new galaxy — one continuous unbroken zoom with no cuts, smooth accelerating motion, glowing edges and light trails guiding the eye, hypnotic and perfectly loopable, 9:16 vertical, photorealistic with subtle sci-fi glow, ultra detailed, no text, no watermark",
    howto: [
      "Open Google Flow and start a new text-to-video generation.",
      "Paste the prompt exactly — the 'no cuts' and 'continuous zoom' phrases are critical to the illusion.",
      "Generate 3-4 variations and scrub frame by frame to find the smoothest unbroken zoom.",
      "In your editor, duplicate and reverse-copy the clip so it loops perfectly end to start.",
      "Post with 'watch till the end' in the caption — loops double average watch time on Shorts."
    ],
    tips: [
      "Change the final object each video (galaxy → coffee, galaxy → eye, galaxy → city) so the series stays fresh.",
      "Add a rising ambient drone sound — audio buildup makes viewers stay through the full zoom."
    ],
    tags: ["infinite zoom", "tiktok", "illusion", "creator-niche", "google flow"],
    trending: true,
    popularity: 97
  },
  {
    id: "hidden-history-flythrough-veo3",
    title: "Hidden History Site Flythrough — Veo 3 Prompt for Faceless YouTube Channels",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Intermediate",
    desc: "A cinematic drone flythrough of a forgotten ancient ruin swallowed by jungle — the 'lost places' B-roll that powers faceless history and mystery YouTube channels.",
    prompt: "Cinematic aerial flythrough of a forgotten ancient temple complex deep in a misty jungle, moss-covered stone towers and carved doorways half-swallowed by giant roots, the drone glides low through a broken archway into a sunlit courtyard with a collapsed statue, birds scattering, god-rays cutting through canopy mist, dust particles floating in the light, deep greens and warm stone tones, slow majestic camera motion, epic documentary feel, 16:9, photorealistic, ultra detailed, no text, no watermark, no modern objects, no people",
    howto: [
      "Open Veo 3 and start a new text-to-video generation.",
      "Paste the full prompt — the archway-to-courtyard journey gives the clip a story arc.",
      "Set 16:9 for YouTube long-form; generate 2 clips (approach + interior) for a full 20-second sequence.",
      "Lay your mystery narration over the top with reverb — the echoey audio sells 'ancient secret'.",
      "Use one clip per video as the cold open before your title card — it triples retention on history niches."
    ],
    tips: [
      "Never present AI ruins as real discoveries — frame them as 'what it might have looked like' reconstructions.",
      "Build a location library: 10 ruins = 10 videos, one per week, a full content quarter from one afternoon of generating."
    ],
    tags: ["history", "youtube", "faceless", "creator-niche", "veo3"],
    trending: false,
    popularity: 90
  },
  {
    id: "odd-one-out-puzzle-midjourney",
    title: "Odd-One-Out Puzzle Images — Midjourney Prompt for Facebook Engagement",
    category: "Image Prompts",
    tool: "Midjourney",
    difficulty: "Beginner",
    desc: "A 'find the odd one out' puzzle image — 99 identical smiling robots and one winking — the comment-bait format Facebook engagement pages post daily for thousands of comments.",
    prompt: "A clean flat grid of 100 cute smiling robots, all identical bright-blue cartoon robots with round eyes and antenna, EXCEPT one single robot in the grid that is winking with one eye and colored bright red, playful children's-puzzle-book style, crisp vector illustration, vibrant colors on white background, perfectly aligned grid, the odd robot hidden in an unexpected spot, no text, no watermark, ultra detailed, high contrast --ar 1:1 --v 6",
    howto: [
      "Open Midjourney and paste the prompt into the imagine field.",
      "Generate 4 variations and pick the one where the odd robot is genuinely hard to spot.",
      "Download the image and post it with the caption 'Only 1% find it in 10 seconds 👀'.",
      "Reply to early commenters with hints ('look at row 4') to double the comment count.",
      "Post a new puzzle daily at the same hour — consistency trains the Facebook algorithm."
    ],
    tips: [
      "Rotate the 'odd one' mechanic weekly (color, wink, missing antenna, flipped) to stop followers from getting bored.",
      "The next-day reveal post ('here's where it was') gets nearly as many comments as the puzzle itself."
    ],
    tags: ["puzzle", "facebook", "engagement", "creator-niche", "midjourney"],
    trending: false,
    popularity: 86
  },
  {
    id: "niche-gap-scout-chatgpt",
    title: "Niche Gap Scout — ChatGPT Prompt to Find Rising 2026 Content Niches",
    category: "Text Prompts",
    tool: "ChatGPT",
    difficulty: "Intermediate",
    desc: "ChatGPT hunts rising content gaps on your platform — niches with surging search demand and weak competition — and ranks 10 by opportunity score. Launch where the crowd isn't looking yet.",
    prompt: "You are a content-market research analyst with access to 2026 platform trends. My platform: [PLATFORM: YouTube / TikTok / Facebook / Instagram]. My skills or interests: [SKILLS]. My format preference: [FACELESS / ON-CAMERA / AI-GENERATED]. Do this in 4 parts. PART 1 — scan for RISING GAPS: identify 10 niches on my platform where audience demand is growing but creator supply is still thin, and for each give: the niche name, the search trend signal (what people are typing), 3 example channels/pages proving demand, and why incumbents are weak. PART 2 — score each niche 1-10 on: demand growth, competition level, monetization potential, and fit with my skills. PART 3 — rank the top 3 and give each a 30-day validation test: 10 video ideas, the one metric to watch, and the kill criteria (when to quit). PART 4 — name the niche everyone THINKS is hot but is actually saturated in 2026, and explain why latecomers lose there. Be specific — no generic 'fitness' or 'finance' without a sub-niche angle.",
    howto: [
      "Open ChatGPT and paste the prompt.",
      "Fill in your platform, skills and format preference honestly — the ranking depends on it.",
      "Read Part 4 first so you don't accidentally pick the saturated 'hot' niche.",
      "Run the 30-day validation test on your top-ranked niche before committing.",
      "Re-run this quarterly — niche gaps close fast, and new ones open with every platform update."
    ],
    tips: [
      "The kill criteria in Part 3 are the real value — most creators quit winners too early and ride losers too long.",
      "Ask ChatGPT to compare the same niche across two platforms; the winner is usually the one with less competition."
    ],
    tags: ["niche discovery", "chatgpt", "strategy", "creator-niche", "youtube"],
    trending: false,
    popularity: 91
  },
  {
    id: "comment-bait-hook-factory-gemini",
    title: "Comment-Bait Hook Factory — Gemini Prompt for Platform-Specific Viral Hooks",
    category: "Text Prompts",
    tool: "Gemini",
    difficulty: "Beginner",
    desc: "Gemini writes 30 scroll-stopping hooks tailored to YOUR platform's comment culture — TikTok rage-bait, Instagram saves, Facebook debates. Hooks are the cheapest viral lever you own.",
    prompt: "You are a viral-hook copywriter who studies each platform's comment culture. My platform: [PLATFORM]. My niche: [NICHE]. My next video topic: [TOPIC]. Write 30 hooks in 3 batches of 10. BATCH 1 — CURIOSITY hooks (open loops that make people watch to the end). BATCH 2 — COMMENT-BAIT hooks (mildly controversial or debatable statements that make people NEED to reply). BATCH 3 — SAVE/SHARE hooks (promise of value: 'save this', 'send to a friend who...'). Rules: each hook under 12 words, written in the platform's native voice (TikTok = casual chaos, Instagram = aesthetic authority, Facebook = conversational debate, YouTube = bold claim + payoff), zero clickbait lies — every hook must be honestly deliverable by my video. Then rank your top 5 and explain WHY each works psychologically. End with 3 hook formulas I can reuse forever in my niche.",
    howto: [
      "Open Gemini and paste the prompt.",
      "Fill in your platform, niche and the exact topic of your next video.",
      "Pick one hook from the top 5 and use it as your first spoken line AND your on-screen text.",
      "Test 3 different hooks on the same video concept across a week — the data teaches you your audience's triggers.",
      "Save the 3 reusable formulas and apply them to every future video in your niche."
    ],
    tips: [
      "Comment-bait works best when the 'controversial' take is one you can defend — rage you can't back up kills trust.",
      "The first 1.5 seconds decide everything: say the hook before any intro, logo or greeting."
    ],
    tags: ["hooks", "tiktok", "viral", "creator-niche", "gemini"],
    trending: false,
    popularity: 93
  },
  {
    id: "niche-launch-90-day-plan-claude",
    title: "90-Day Niche Launch Plan — Claude Prompt from Idea to First 1,000 Followers",
    category: "Text Prompts",
    tool: "Claude",
    difficulty: "Advanced",
    desc: "Claude builds your complete 90-day launch plan for a new niche page — content calendar, posting cadence, milestone checks — taking you from zero to your first 1,000 followers with a weekly checklist.",
    prompt: "You are a creator-growth coach who has launched 200+ niche pages. My chosen niche: [NICHE]. My platform: [PLATFORM]. My content style: [AI VIDEO / FILMED / CURATED]. My weekly time budget: [HOURS]. Build my 90-DAY LAUNCH PLAN. PHASE 1 (days 1-30) FOUNDATION: profile setup checklist (name, bio formula, profile image concept), the first 15 posts with exact topics and formats, posting cadence, and the 3 metrics that prove the niche is viable. PHASE 2 (days 31-60) ACCELERATION: which 3 posts from phase 1 to double down on, a collaboration/engagement routine (15 min/day), and how to read the analytics to find my winning format. PHASE 3 (days 61-90) MONETIZATION PREP: when to apply for each revenue stream on my platform, the follower milestone that unlocks each, and what to build now so money starts in month 4. Include a weekly checklist I can print, one 'danger zone' warning per phase (the mistake that kills most pages at that stage), and the realistic follower range at day 90. No motivation fluff — only actions, numbers and decisions.",
    howto: [
      "Open Claude and paste the prompt.",
      "Fill in your niche, platform, content style and real weekly hours.",
      "Print the weekly checklist and work it like a job — consistency is the entire strategy.",
      "At each phase boundary, re-read the 'danger zone' warning before changing anything.",
      "On day 90, paste your analytics back into Claude and ask for the next 90-day plan."
    ],
    tips: [
      "The day-30 viability metrics are your permission slip to pivot — don't skip the honest read.",
      "Most pages die in phase 2 from format-hopping; the plan tells you which 3 posts to double down on for a reason."
    ],
    tags: ["launch plan", "instagram", "growth", "creator-niche", "claude"],
    trending: false,
    popularity: 89
  },
  {
      "id": "glass-city-miniature-timelapse-veo3",
      "title": "Glass City Miniature Time-Lapse — Veo 3 Prompt for Faceless YouTube Shorts",
      "category": "Video Prompts",
      "tool": "Veo 3",
      "difficulty": "Beginner",
      "desc": "A glowing miniature glass city that builds itself in time-lapse — tiny lights flicking on, bridges forming, trains gliding — the mesmerizing build-in-miniature format faceless YouTube Shorts channels loop for millions of views.",
      "prompt": "Mesmerizing time-lapse of a miniature city made entirely of glowing translucent glass on a dark reflective table, tiny glass skyscrapers rising floor by floor in fast motion, warm amber window lights flicking on one by one, a tiny glass bridge arching over a glowing blue river, a miniature glass train gliding silently across it, soft clouds of breath-like mist drifting between towers, camera slowly orbits at a low tilt-shift angle so the city looks like a living jewel box, sparkling reflections everywhere, satisfying build-up rhythm, 9:16 vertical, photorealistic macro detail, ultra detailed, no people, no text, no watermark",
      "howto": [
          "Open Veo 3 and start a new text-to-video generation.",
          "Paste the full prompt — keep the tilt-shift and time-lapse wording, they create the miniature illusion.",
          "Set 9:16 vertical for YouTube Shorts and TikTok.",
          "Generate 2-3 versions and pick the one where the city builds in the clearest sequence.",
          "Add a soft piano or lo-fi track, loop the final glowing shot for 2 seconds, and post as 'Watch this glass city wake up'."
      ],
      "tips": [
          "Make it a series: glass city, glass castle, glass harbor — same prompt, new subject, instant content calendar.",
          "The last fully-lit frame is your thumbnail moment — screenshot it for Shorts covers and WhatsApp posts."
      ],
      "tags": [
          "miniature",
          "youtube",
          "timelapse",
          "creator-niche",
          "veo3"
      ],
      "trending": true,
      "popularity": 95
  },
  {
      "id": "rescue-dog-transformation-kling",
      "title": "Rescue Dog Transformation Story — Kling Prompt for Viral TikTok Niche Pages",
      "category": "Video Prompts",
      "tool": "Kling",
      "difficulty": "Beginner",
      "desc": "A heart-melting before/after rescue dog story in one clip — shivering stray to happy, groomed best friend — the emotional transformation format that animal niche pages on TikTok and Facebook grow on.",
      "prompt": "Emotional photorealistic transformation clip in two seamless beats: first a small scruffy stray dog shivering gently under light rain on a quiet street, sad eyes looking at camera, then a warm glowing transition as a kind hand reaches in, and the same dog appears clean, fluffy and smiling in a sunny garden wearing a bright red bandana, tail wagging fast, tongue out happily, butterflies nearby, golden sunlight, shallow depth of field, camera at dog eye-level throughout, smooth emotional storytelling, 9:16 vertical, ultra detailed fur, no text, no watermark",
      "howto": [
          "Open Kling and start a new text-to-video generation.",
          "Paste the prompt exactly — the two-beat structure is what makes the transformation land.",
          "Set 9:16 vertical and generate 2-3 takes; choose the one where the dog looks most like the same dog in both beats.",
          "Add an emotional piano track and a caption like 'Day 1 vs Day 30 — wait for the smile'.",
          "Post in a series (different dogs, same arc) — transformation series build loyal animal-page followers fast."
      ],
      "tips": [
          "Never use real shelter footage claims — caption it as an AI story inspired by real rescues to stay honest and safe.",
          "Pin a comment asking followers to name the dog — naming comments explode reach on animal pages."
      ],
      "tags": [
          "dogs",
          "tiktok",
          "transformation",
          "creator-niche",
          "kling"
      ],
      "trending": true,
      "popularity": 94
  },
  {
      "id": "underwater-volcano-eruption-sora",
      "title": "Underwater Volcano Eruption — Sora Prompt for Viral YouTube Shorts",
      "category": "Video Prompts",
      "tool": "Sora",
      "difficulty": "Intermediate",
      "desc": "An underwater volcano erupting in slow motion — glowing lava meeting deep blue sea, steam bubbles racing up — the awe-and-nature spectacle clip that stops thumbs on YouTube Shorts and TikTok science niches.",
      "prompt": "Spectacular underwater volcano eruption in cinematic slow motion: a rocky seafloor vent cracks open with glowing orange lava veins, molten rock pillows bulge and glow as they meet deep blue water, huge clouds of white steam bubbles race upward toward distant sun rays piercing the surface, small silver fish scatter in a sparkling arc, black volcanic sand swirling, dramatic contrast of fire-orange against deep teal water, camera slowly pushes in then tilts up following the bubbles, awe-inspiring nature-documentary feel, 9:16 vertical, photorealistic, ultra detailed, no people, no text, no watermark",
      "howto": [
          "Open Sora and create a new video generation.",
          "Paste the full prompt — the fire-versus-water contrast is the scroll-stopper, keep every color cue.",
          "Set 9:16 vertical for Shorts and TikTok science niches.",
          "Generate twice and pick the clip with the clearest lava glow and bubble column.",
          "Add a deep rumble sound effect and an opening caption: 'The ocean is on fire — literally'."
      ],
      "tips": [
          "Pair it with a 2-line voiceover fact about real underwater volcanoes to lift it from pretty clip to shareable science content.",
          "Series it: volcano, deep-sea vent, iceberg calving — one 'extreme earth' clip per day builds a bingeable niche page."
      ],
      "tags": [
          "volcano",
          "youtube",
          "nature",
          "creator-niche",
          "sora"
      ],
      "trending": false,
      "popularity": 91
  },
  {
      "id": "retro-futuristic-diner-loop-runway",
      "title": "Retro-Futuristic Diner Loop — Runway Prompt for Instagram Theme Pages",
      "category": "Video Prompts",
      "tool": "Runway",
      "difficulty": "Beginner",
      "desc": "A neon retro-futuristic diner that loops forever — robot waiter gliding past, rain on the window, jukebox glowing — the aesthetic loop Instagram theme pages post for saves and shares.",
      "prompt": "Seamless looping scene inside a retro-futuristic 1950s diner at night: chrome counters and pink neon signs reflecting on a checkered floor, a friendly retro robot waiter gliding past on a smooth track carrying a milkshake, rain streaking the big window behind a glowing jukebox, a vinyl record spinning, steam rising from a coffee cup in the foreground, outside the window a rainy neon city street with flying cars passing in soft blur, cozy nostalgic mood with vibrant pink, teal and chrome palette, camera completely static so the loop is perfect, 9:16 vertical, photorealistic with stylized glow, ultra detailed, no text, no watermark",
      "howto": [
          "Open Runway and start a text-to-video generation.",
          "Paste the prompt — the static camera instruction is what makes the loop seamless.",
          "Set 9:16 vertical and generate a 5-10 second clip.",
          "In your editor, crossfade the last half-second into the first so the loop has no visible jump.",
          "Post to Instagram Reels with a lo-fi or synthwave track and the caption 'POV: dinner in 2087'."
      ],
      "tips": [
          "Aesthetic loops earn saves, not just likes — ask 'which seat are you picking?' in the caption to trigger comments too.",
          "Recolor the neon (pink, mint, sunset orange) to create a matching 3-post grid series for your theme page."
      ],
      "tags": [
          "retro",
          "instagram",
          "loop",
          "creator-niche",
          "runway"
      ],
      "trending": false,
      "popularity": 87
  },
  {
      "id": "aurora-desert-camp-google-flow",
      "title": "Aurora Over a Desert Camp — Google Flow Prompt for Facebook Travel Pages",
      "category": "Video Prompts",
      "tool": "Google Flow",
      "difficulty": "Beginner",
      "desc": "Northern lights rippling over a cozy desert camp — tents glowing warm, camels resting, a sky on fire with green and purple — the wonder-travel clip Facebook pages share by the thousands.",
      "prompt": "Breathtaking night scene of aurora borealis rippling in green, violet and pink waves over a quiet desert camp, two warm glowing canvas tents and a small campfire with gentle sparks in the foreground, two camels resting on golden sand, endless dunes fading into darkness, the Milky Way visible through the moving aurora, reflections of the lights shimmering faintly on the sand, camera in a very slow push-in, peaceful wonder-filled mood, rich saturated colors, 16:9, photorealistic, ultra detailed, no people in close-up, no text, no watermark",
      "howto": [
          "Open Google Flow and start a new text-to-video generation.",
          "Paste the full prompt, keeping the aurora color list — Flow uses it to saturate the sky.",
          "Set 16:9 for Facebook and YouTube, or 9:16 if you are cutting a Reel version too.",
          "Generate 2 versions and choose the one with the smoothest aurora movement.",
          "Add soft ambient wind audio and post with 'Would you sleep here for one night?' to spark comments."
      ],
      "tips": [
          "Impossible-place mashups (aurora + desert, snow + beach) outperform realistic travel clips because viewers share the 'wait, where is this?' feeling.",
          "Cut a 9:16 version from the same generation — one prompt, two platforms, double the reach."
      ],
      "tags": [
          "aurora",
          "facebook",
          "travel",
          "creator-niche",
          "google flow"
      ],
      "trending": false,
      "popularity": 88
  },
  {
      "id": "robot-chef-fail-comedy-veo3",
      "title": "Robot Chef Comedy Fails — Veo 3 Prompt for Viral TikTok Niche Pages",
      "category": "Video Prompts",
      "tool": "Veo 3",
      "difficulty": "Beginner",
      "desc": "A proud robot chef whose cooking goes hilariously wrong — pancake on the ceiling, spaghetti fountain — short slapstick AI comedy built for TikTok niche pages and YouTube Shorts series.",
      "prompt": "Hilarious photorealistic slapstick clip of a proud shiny white robot chef in a bright modern kitchen attempting to flip a pancake, the pancake flies up and sticks flat to the ceiling, the robot looks up slowly with blinking surprised LED eyes, then shrugs with perfect comedic timing while a second pancake lands on its own head like a hat, warm cheerful kitchen lighting, flour dust floating in sunbeams, locked-off camera at counter height, expressive robot body language, family-friendly physical comedy, 9:16 vertical, ultra detailed, no dialogue text, no watermark",
      "howto": [
          "Open Veo 3 and start a new text-to-video generation.",
          "Paste the prompt exactly — the beat order (flip, ceiling, shrug, hat) is the joke structure.",
          "Set 9:16 vertical for TikTok and Shorts comedy niches.",
          "Generate 2-3 takes and pick the one with the clearest comedic pause before the shrug.",
          "Add a boing sound effect on the ceiling stick and post as episode 1 of 'Robot Chef Fails'."
      ],
      "tips": [
          "Number every episode — series numbering turns one funny clip into a follow-worthy TikTok niche page.",
          "Ask viewers 'what should he cook next?' — the top comment becomes your next episode and pre-sells its views."
      ],
      "tags": [
          "robot",
          "tiktok",
          "comedy",
          "creator-niche",
          "veo3"
      ],
      "trending": true,
      "popularity": 93
  },
  {
      "id": "impossible-architecture-gallery-midjourney",
      "title": "Impossible Architecture Gallery — Midjourney Prompt for Instagram Art Pages",
      "category": "Image Prompts",
      "tool": "Midjourney",
      "difficulty": "Intermediate",
      "desc": "Buildings that could never exist — a waterfall flowing UP a spiral tower, stairs looping into the sky — the mind-bending architecture art that Instagram visual pages and Facebook groups share endlessly.",
      "prompt": "Impossible architecture masterpiece: a luminous spiral tower of white stone and glass rising from a turquoise lagoon, a waterfall flowing UPWARD along its spiral ramp into the clouds, tiny staircases looping in physically impossible Escher-like connections between floating balconies with lush gardens, golden sunset light, soft mist, tiny silhouetted visitors on the balconies for scale, dreamlike yet photorealistic rendering, vibrant teal, gold and coral palette, intricate detail, sense of wonder and vertigo --ar 4:5 --v 6 --style raw",
      "howto": [
          "Open Midjourney and paste the prompt into the imagine field.",
          "Generate 4 variations and upscale the one with the clearest impossible element (the upward waterfall).",
          "Post to Instagram at 4:5 — the tall crop fills more feed and stops more thumbs.",
          "Caption it with a question: 'Would you climb to the top floor?' — questions outperform statements on art pages.",
          "Build a weekly series ('Impossible Mondays') so followers return for the next impossible building."
      ],
      "tips": [
          "One impossible element per image reads clearly; three or more turns wonder into confusion.",
          "Save your best seed and reuse it across the series so the buildings feel like one dream city."
      ],
      "tags": [
          "architecture",
          "instagram",
          "surreal",
          "creator-niche",
          "midjourney"
      ],
      "trending": false,
      "popularity": 89
  },
  {
      "id": "micro-niche-validator-chatgpt",
      "title": "Micro-Niche Validator — ChatGPT Prompt to Test a Niche in 7 Days",
      "category": "Text Prompts",
      "tool": "ChatGPT",
      "difficulty": "Intermediate",
      "desc": "Before you commit months to a niche, ChatGPT stress-tests it: demand proof, competitor weaknesses, and a 7-day micro-test with pass/fail numbers. The niche-discovery step most creators skip — and regret.",
      "prompt": "You are a ruthless content-niche validator. I am considering this niche: [NICHE]. Platform: [PLATFORM: YouTube / TikTok / Facebook / Instagram]. My format: [FACELESS AI / ON-CAMERA / MIXED]. Validate it in 5 parts. PART 1 — DEMAND PROOF: list the exact search phrases and comment questions that prove real audience demand, and rate demand 1-10 with reasoning. PART 2 — COMPETITOR X-RAY: describe the top 3 typical channels in this niche, their average views, posting frequency, and the ONE weakness each leaves open for me. PART 3 — THE 7-DAY MICRO-TEST: give me 7 specific video ideas (one per day), each with a hook line, format, and length, designed to test the niche cheaply. PART 4 — PASS/FAIL SCORECARD: the exact numbers (views, watch time, follows per post) that mean PASS, PIVOT or KILL after 7 days. PART 5 — VERDICT: GO or NO-GO in one sentence, and if NO-GO, the nearest adjacent niche that fixes the problem. Be blunt — a fast NO is more valuable than a polite maybe.",
      "howto": [
          "Open ChatGPT and paste the prompt.",
          "Fill in your niche idea, platform and format honestly — vague inputs get vague verdicts.",
          "Read Part 4 before you post anything, so you judge the test by numbers, not feelings.",
          "Run the exact 7-day micro-test, then paste your real results back and ask for the final verdict.",
          "Keep every NO-GO report — the adjacent-niche suggestions in Part 5 are a goldmine of better ideas."
      ],
      "tips": [
          "Validate 3 niche ideas in one afternoon and test only the highest scorer — this is how pros pick winners.",
          "A niche that passes on TikTok often fails on YouTube (different watch-time economics) — validate per platform."
      ],
      "tags": [
          "niche discovery",
          "youtube",
          "validation",
          "creator-niche",
          "chatgpt"
      ],
      "trending": false,
      "popularity": 92
  },
  {
      "id": "trend-early-warning-gemini",
      "title": "Trend Early-Warning System — Gemini Prompt to Catch Niches Before They Peak",
      "category": "Text Prompts",
      "tool": "Gemini",
      "difficulty": "Intermediate",
      "desc": "Gemini builds you a weekly early-warning routine for rising trends in your niche — where to look, what signals matter, and how to post while a trend is still cheap to ride.",
      "prompt": "You are a trend-forecasting analyst for content creators. My niche: [NICHE]. My main platform: [PLATFORM]. Build me a TREND EARLY-WARNING SYSTEM I can run in 20 minutes every Monday. PART 1 — SIGNAL SOURCES: the 8 specific places (search bars, comment sections, adjacent niches, other platforms, seasonal calendars) where trends in my niche appear FIRST, and what exactly to look for in each. PART 2 — SIGNAL SCORING: a simple 1-5 scoring rubric for any trend I spot (search growth, creator count, cross-platform spread, monetization fit) with the minimum score worth acting on. PART 3 — THE 48-HOUR RULE: how to turn a spotted trend into a post within 48 hours — the fast format, the hook formula, and what to skip when speed matters. PART 4 — FALSE ALARMS: 5 signs a 'trend' is actually a one-video fluke or a saturated wave I am already too late for. PART 5 — give me a printable one-page weekly checklist. End with 3 trend predictions for my niche for the next 60 days and the reasoning behind each.",
      "howto": [
          "Open Gemini and paste the prompt with your niche and platform filled in.",
          "Print or save the Part 5 checklist — the system only works if you actually run it weekly.",
          "Score every trend you spot with the Part 2 rubric before filming anything.",
          "When a trend passes the score, use the Part 3 48-hour playbook instead of planning a 'perfect' video.",
          "Re-run the predictions section monthly and grade Gemini's old predictions — it sharpens your own trend instincts."
      ],
      "tips": [
          "Trends usually jump platforms (TikTok first, Reels and Shorts 2-3 weeks later) — spotting the jump is the cheapest growth hack in 2026.",
          "Keep a simple trend log: date spotted, score, posted or skipped, result. After 8 weeks the log tells you which signals YOUR audience rewards."
      ],
      "tags": [
          "trends",
          "tiktok",
          "niche discovery",
          "creator-niche",
          "gemini"
      ],
      "trending": false,
      "popularity": 90
  },
  {
      "id": "viral-series-bible-claude",
      "title": "30-Episode Viral Series Bible — Claude Prompt for Creator Niches",
      "category": "Text Prompts",
      "tool": "Claude",
      "difficulty": "Advanced",
      "desc": "Claude writes your complete series bible: a repeatable format, 30 episode concepts, hooks and cliffhangers — so your niche page never faces a blank page again. Series, not singles, build channels.",
      "prompt": "You are a showrunner for viral short-form series. Build me a 30-EPISODE SERIES BIBLE. My niche: [NICHE]. Platform: [PLATFORM]. Format: [AI VIDEO / FACELESS NARRATION / ON-CAMERA]. Episode length: [30-60 SECONDS]. Include: 1) SERIES PREMISE in one sentence a stranger instantly understands. 2) THE REPEATABLE FORMAT: the fixed opening beat (first 2 seconds, identical every episode), the middle structure, and the closing cliffhanger or callback that makes viewers follow for the next episode. 3) 30 EPISODE CONCEPTS in a table: episode number, title (under 50 characters, keyword-first), the exact opening hook line, the payoff, and which earlier episode it calls back to. 4) CHARACTER/RUNNING GAGS: 3 recurring elements that reward loyal viewers. 5) POSTING RHYTHM: the days, order and pinned-comment strategy for launching the series, plus the 3 metrics that tell me by episode 10 whether to extend to 100 episodes or kill it. Make every episode producible in under one hour with my format. No filler episodes — each one must earn its slot.",
      "howto": [
          "Open Claude and paste the prompt with your niche, platform and format filled in.",
          "Read the repeatable format section twice — consistency of the opening beat is what makes a series bingeable.",
          "Produce episodes in the given order; the callbacks are sequenced on purpose.",
          "After episode 10, paste your real metrics into Claude and ask for the extend-or-kill decision from section 5.",
          "If it extends, ask Claude for episodes 31-100 using the same bible — never change the format mid-series."
      ],
      "tips": [
          "A series bible turns content from daily invention into daily execution — batch-film 5 episodes in one sitting.",
          "The pinned comment should always link the previous episode; binge chains are where series channels actually grow."
      ],
      "tags": [
          "series",
          "facebook",
          "content plan",
          "creator-niche",
          "claude"
      ],
      "trending": true,
      "popularity": 91
  },
  {
      "id": "haunted-house-pov-walkthrough-veo3",
      "title": "Haunted House POV Walkthrough — Veo 3 Prompt for Halloween Shorts",
      "category": "Video Prompts",
      "tool": "Veo 3",
      "difficulty": "Intermediate",
      "desc": "A spine-tingling first-person walkthrough of a candle-lit haunted house — creaking doors, flickering chandeliers, a sudden mirror scare — built for Halloween Shorts that earn rewatches and shares.",
      "prompt": "First-person POV slow walkthrough of a Victorian haunted house interior at night, subtle handheld camera sway, candle-lit corridor with peeling wallpaper and swaying cobwebs, a crystal chandelier flickering overhead, camera pushes through a half-open creaking door into a dusty ballroom where a rocking chair moves on its own, sudden close-up of a cracked mirror reflecting a shadowy figure that vanishes, dust particles floating in cold moonbeams, deep shadows, teal-and-orange horror color grade, fine film grain, 9:16 vertical, photorealistic, 8 seconds, no text overlays, no visible people except silhouettes",
      "howto": [
          "Open Veo 3 and paste the full prompt above into the prompt box.",
          "Set aspect ratio to 9:16 and duration to 8 seconds for Shorts and TikTok.",
          "Generate 2-3 variations and pick the one with the strongest mirror-scare beat.",
          "Add a royalty-free creaking-door and heartbeat sound in your editor — sound sells the scare.",
          "Post with a hook caption like 'wait for the mirror' and pin a comment asking viewers what they saw."
      ],
      "tips": [
          "Upload in the two weeks before Halloween when haunted-house searches spike every year.",
          "The scare must land in the final 2 seconds — late scares drive replays, which drive the algorithm."
      ],
      "tags": ["halloween", "youtube", "horror niche", "creator-niche", "veo 3"],
      "trending": true,
      "popularity": 96
  },
  {
      "id": "fall-foliage-drone-hyperlapse-veo3",
      "title": "Fall Foliage Drone Hyperlapse — Veo 3 Prompt for Autumn TikTok",
      "category": "Video Prompts",
      "tool": "Veo 3",
      "difficulty": "Beginner",
      "desc": "Sweeping autumn drone hyperlapses over crimson forests, misty lakes and winding mountain roads — the cozy fall aesthetic dominating TikTok and Reels every October.",
      "prompt": "Aerial drone hyperlapse over a vast autumn forest at golden hour, crimson red and burnt orange canopy rolling to the horizon, a misty lake below reflecting the colors, camera glides forward then tilts down to reveal a winding mountain road with a single car, clouds racing overhead in timelapse motion, warm sunlight flaring through the treetops, ultra smooth stabilized motion, rich saturated fall colors, 9:16 vertical, photorealistic, cinematic, 10 seconds, no people in close-up, no text overlays",
      "howto": [
          "Paste the prompt into Veo 3, set 9:16 vertical and 10 seconds duration.",
          "Generate once, then generate a second clip with a lower, closer pass for a two-shot edit.",
          "Layer a soft lo-fi or acoustic guitar track underneath at low volume.",
          "Add three on-screen words max, like 'October hits different', in the first second.",
          "Post between 7-9 PM local time when cozy-scroll traffic peaks."
      ],
      "tips": [
          "Pair the clip with a trending autumn audio — sound choice matters more than the visual for this niche.",
          "Make it a series: one hyperlapse per week through November and watch followers compound."
      ],
      "tags": ["autumn", "tiktok", "drone", "creator-niche", "veo 3"],
      "trending": true,
      "popularity": 93
  },
  {
      "id": "pumpkin-carving-timelapse-kling",
      "title": "Pumpkin Carving Timelapse — Kling Prompt for Halloween TikTok",
      "category": "Video Prompts",
      "tool": "Kling",
      "difficulty": "Beginner",
      "desc": "A hypnotic timelapse of a pumpkin transforming into a glowing jack-o'-lantern — the satisfying Halloween craft clip TikTok cannot stop rewatching.",
      "prompt": "Overhead timelapse of hands carving a large orange pumpkin on a rustic wooden table, a carving knife tracing a spooky grinning face, scooping out seeds and pulp in fast motion, the room gradually darkening as a candle is placed inside, the carved face igniting into a warm glowing jack-o'-lantern, tiny embers drifting upward, orange glow pooling on the table, crisp macro detail on every cut, 9:16 vertical, 8 seconds, satisfying pacing, no text overlays",
      "howto": [
          "Open Kling, choose text-to-video, and paste the full prompt.",
          "Set 9:16 and the longest duration Kling allows for a full carve-to-glow arc.",
          "If the glow moment feels rushed, regenerate with 'slow final reveal' added to the prompt.",
          "Add a crisp knife-scrape and candle-whoosh sound effect under the clip.",
          "Caption it with the carve time, real or implied — '6 hours in 8 seconds' always performs."
      ],
      "tips": [
          "Post the same clip as a YouTube Short and Instagram Reel — craft timelapses travel across platforms.",
          "Reply to 'tutorial?' comments with a follow-up carving video to double your output from one idea."
      ],
      "tags": ["halloween", "tiktok", "timelapse", "creator-niche", "kling"],
      "trending": true,
      "popularity": 95
  },
  {
      "id": "rainy-cafe-window-ambience-sora",
      "title": "Rainy Cafe Window Ambience — Sora Prompt for Relaxation Pages",
      "category": "Video Prompts",
      "tool": "Sora",
      "difficulty": "Beginner",
      "desc": "A rain-streaked cafe window with blurred city lights and a steaming coffee — the lo-fi ambience loop that relaxation and study pages play on repeat.",
      "prompt": "Slow cinematic shot through a rain-streaked cafe window at dusk, droplets racing down the glass, warm interior glow with a steaming latte resting on the wooden sill in soft-focus foreground, blurred neon city lights and drifting umbrellas outside, gentle rain streaks catching the light, cozy amber and deep blue palette, shallow depth of field, thin steam curling upward from the cup, 16:9, photorealistic, 10 seconds, seamless loop feel, no people, no text",
      "howto": [
          "Paste the prompt into Sora and generate at 16:9 for Facebook and YouTube.",
          "Ask Sora for a matching 9:16 version for Reels and Shorts from the same prompt.",
          "Loop the clip 3-4 times in your editor to make a 1-minute ambience video.",
          "Layer 10 hours-style rain audio or soft jazz underneath.",
          "Title it for search: 'rainy cafe ambience' beats clever titles for this niche."
      ],
      "tips": [
          "Ambience pages grow on watch time, not virality — longer loops and playlists are the whole game.",
          "Change the season monthly: snow, spring rain, autumn leaves outside the same window."
      ],
      "tags": ["ambience", "facebook", "relaxation niche", "creator-niche", "sora"],
      "trending": false,
      "popularity": 86
  },
  {
      "id": "neon-cyberpunk-city-loop-runway",
      "title": "Neon Cyberpunk City Loop — Runway Prompt for Instagram Reels",
      "category": "Video Prompts",
      "tool": "Runway",
      "difficulty": "Intermediate",
      "desc": "A rain-slicked cyberpunk street glowing with neon signs — the scroll-stopping aesthetic loop Instagram theme pages build audiences on.",
      "prompt": "Seamless loop of a rain-slicked cyberpunk city street at night, towering neon signs in magenta and cyan reflecting on wet asphalt, a lone figure with a glowing umbrella crossing the frame, holographic billboards flickering overhead, steam rising from street vents, camera slowly pushing forward, moody synthwave palette, ultra detailed reflections, 9:16 vertical, 8 seconds, perfect loop point with matching first and last frames, no text overlays, no watermark",
      "howto": [
          "In Runway, use text-to-video with the prompt above and enable loop-friendly generation.",
          "Generate at 9:16, then trim the first and last 3 frames so the loop point is invisible.",
          "Add a synthwave track and let the bass drop land exactly on the loop restart.",
          "Post as a Reel with 3-5 aesthetic hashtags like #cyberpunk and #neonaesthetic.",
          "Pin the loop 3x in one 24-second Reel — tripled watch time on a single generation."
      ],
      "tips": [
          "Aesthetic pages monetize through digital products — link a wallpaper pack once you pass 10k followers.",
          "Keep one fixed color palette across all your loops so the page looks curated, not random."
      ],
      "tags": ["aesthetic", "instagram", "cyberpunk", "creator-niche", "runway"],
      "trending": false,
      "popularity": 88
  },
  {
      "id": "bioluminescent-waves-night-surf-google-flow",
      "title": "Bioluminescent Night Waves — Google Flow Prompt for Viral Reels",
      "category": "Video Prompts",
      "tool": "Google Flow",
      "difficulty": "Intermediate",
      "desc": "Glowing electric-blue waves crashing on a midnight beach — the rare natural-phenomenon clip that explodes on Reels and Shorts.",
      "prompt": "Night beach where bioluminescent waves crash in electric blue, glowing plankton lighting each breaker from within, a surfer silhouette gliding through the luminous surf, stars wheeling in the black sky overhead, wet sand mirroring the blue glow, slow motion on the curling wave crest, deep navy and cyan palette, photorealistic, 9:16 vertical, 10 seconds, no text, no close-up people",
      "howto": [
          "Paste the prompt into Google Flow and generate in 9:16 vertical.",
          "Run 2 generations and stitch the best wave-crash from each into one clip.",
          "Slow the crash moment to 50 percent speed for maximum glow impact.",
          "Use a trending 'nature is unreal' style audio underneath.",
          "Caption with the location-style hook: 'this beach glows at night' — curiosity drives shares."
      ],
      "tips": [
          "Rare-phenomenon clips get saved more than liked — saves are a powerful ranking signal, optimize for them.",
          "Follow up within 48 hours with a 'how this happens' explainer to convert viewers to followers."
      ],
      "tags": ["nature", "instagram", "ocean niche", "creator-niche", "google flow"],
      "trending": true,
      "popularity": 94
  },
  {
      "id": "spooky-halloween-portrait-pack-midjourney",
      "title": "Spooky Halloween Portraits — Midjourney Prompt for Facebook",
      "category": "Image Prompts",
      "tool": "Midjourney",
      "difficulty": "Intermediate",
      "desc": "Gothic Halloween portraits — witches, haunted mansions and pumpkin kings in cinematic detail — built for Facebook posts that collect thousands of shares.",
      "prompt": "Gothic Halloween portrait of a mysterious witch in a Victorian dress standing in a moonlit pumpkin patch, twisted bare trees behind her, bats crossing a huge full moon, glowing jack-o'-lanterns at her feet, intricate lace and fabric detail, cinematic rim lighting, deep purples and burning oranges, hyper detailed, 8k --ar 4:5 --style raw --v 6.1",
      "howto": [
          "Open Midjourney and paste the full prompt including the --ar 4:5 --style raw --v 6.1 parameters.",
          "Generate 4 variations and upscale the one with the strongest moon-and-silhouette composition.",
          "Swap the subject for 3 more: a pumpkin king, a haunted mansion, a black cat familiar — one pack, four posts.",
          "Post one portrait per day in the week before Halloween with a one-line spooky caption.",
          "Ask a question in the caption — 'which one is watching you?' — to trigger comments."
      ],
      "tips": [
          "Portrait-orientation images take more feed space on mobile and earn more shares than landscapes.",
          "Watermark subtly in a corner; viral Halloween images get reposted without credit constantly."
      ],
      "tags": ["halloween", "facebook", "gothic art", "creator-niche", "midjourney"],
      "trending": true,
      "popularity": 92
  },
  {
      "id": "seasonal-content-calendar-chatgpt",
      "title": "Seasonal Content Calendar — ChatGPT Prompt for Q4 Niche Planning",
      "category": "Text Prompts",
      "tool": "ChatGPT",
      "difficulty": "Beginner",
      "desc": "ChatGPT builds your full Halloween-to-New-Year content calendar — video ideas, hooks and posting dates for every seasonal spike from October to January.",
      "prompt": "You are a seasonal content strategist. Build me a complete Q4 CONTENT CALENDAR for my niche. My niche: [NICHE]. My platform: [PLATFORM]. My posting capacity: [VIDEOS PER WEEK]. Cover October (Halloween), November (Thanksgiving and Black Friday), December (Christmas and New Year) and early January. For EACH week give me: 1) the seasonal hook or trend to ride, 2) three video concepts with titles under 50 characters, 3) the exact posting day and time, 4) one evergreen backup video in case a trend dies. Add a trend-jacking column: how to twist each seasonal event to fit MY niche specifically. End with the 5 metrics I should track weekly to double down on what works. Make every idea producible with AI video tools in under one hour.",
      "howto": [
          "Open ChatGPT and paste the prompt, filling in your niche, platform and weekly capacity.",
          "Read the full calendar once, then star the 10 ideas you can film this week.",
          "Ask ChatGPT to expand your top 3 weeks into day-by-day shot lists.",
          "Schedule the seasonal spikes first — Halloween and Christmas content must ship 7-10 days early.",
          "Re-run the prompt monthly with your real metrics pasted in for a self-improving calendar."
      ],
      "tips": [
          "Seasonal content has a hard expiry date — batch-produce October videos in September, never in October.",
          "Save every calendar; after Q4 you will own a reusable seasonal playbook for next year."
      ],
      "tags": ["seasonal", "content plan", "niche discovery", "creator-niche", "chatgpt"],
      "trending": false,
      "popularity": 89
  },
  {
      "id": "platform-arbitrage-finder-gemini",
      "title": "Platform Arbitrage Finder — Gemini Prompt to Port Winning Niches",
      "category": "Text Prompts",
      "tool": "Gemini",
      "difficulty": "Intermediate",
      "desc": "Gemini finds winning niches on one platform that are still empty on another — port proven formats to YouTube, TikTok, Facebook or Instagram before the crowd arrives.",
      "prompt": "You are a cross-platform arbitrage analyst. Find me PROVEN-FORMAT, EMPTY-LANE opportunities. My home platform: [PLATFORM]. My niche or format: [NICHE OR FORMAT]. Step 1: identify 5 creators or formats absolutely dominating this niche on [SOURCE PLATFORM, for example TikTok]. Step 2: check whether the same format exists on [TARGET PLATFORM, for example YouTube Shorts] and score each 1-10 for lane emptiness. Step 3: for the 3 emptiest lanes, explain EXACTLY what must change for the target platform — length, hook style, posting time, thumbnail and title rules. Step 4: give me a 14-day porting plan: day by day, which videos to adapt first and what localized means for each one. Warn me about the 3 ways cross-platform ports usually fail. Base everything on 2026 platform behavior, not generic advice.",
      "howto": [
          "Open Gemini and paste the prompt with your source and target platforms filled in.",
          "Verify the 'empty lane' claims yourself with 10 minutes of searching the target platform.",
          "Pick ONE lane and port 5 videos before judging — one video proves nothing.",
          "Adapt the hook for the new platform first; hooks are the number one port failure point.",
          "After 14 days, ask Gemini to analyze your results and pick the next lane."
      ],
      "tips": [
          "The best arbitrage windows last 3-6 months — speed of execution beats perfection of adaptation.",
          "Document your porting process; 'how I brought this niche to YouTube' becomes content itself."
      ],
      "tags": ["arbitrage", "youtube", "tiktok", "niche discovery", "creator-niche"],
      "trending": false,
      "popularity": 87
  },
  {
      "id": "comment-to-content-engine-claude",
      "title": "Comment-to-Content Engine — Claude Prompt for Viral Video Ideas",
      "category": "Text Prompts",
      "tool": "Claude",
      "difficulty": "Intermediate",
      "desc": "Claude turns your comment section into an endless video-idea machine — mining questions, debates and requests into a ranked, ready-to-film content pipeline.",
      "prompt": "You are an audience-mining strategist. Turn my COMMENTS into CONTENT. I will paste my recent comments below. My niche: [NICHE]. Platform: [PLATFORM]. Do this: 1) CLUSTER the comments into 5-7 themes: questions, debates, requests, praise, complaints. 2) For each theme, write 3 video concepts that answer or exploit it, each with a title under 50 characters and a one-line hook. 3) RANK all concepts by a simple score: comment volume times emotional intensity times ease of production. 4) Write the top 5 as ready-to-film briefs: the hook for the first 3 seconds, the 3 beats of the video, and the call-to-action that generates MORE comments. 5) Give me a weekly comment-mining routine: 20 minutes, exact steps, so the pipeline never runs dry. Comments to analyze: [PASTE COMMENTS].",
      "howto": [
          "Copy 30-50 recent comments from your best-performing videos.",
          "Open Claude, paste the prompt, then paste your comments where indicated.",
          "Film the top-ranked brief first — it is literally what your audience asked for.",
          "Reply to the original commenters when the video ships to seed early engagement.",
          "Repeat weekly; your comment section compounds into an idea asset."
      ],
      "tips": [
          "Debate-theme comments make the best videos — disagreement drives watch time and replies.",
          "Even with 50 followers this works; small audiences leave the most honest comments."
      ],
      "tags": ["audience", "content ideas", "engagement", "creator-niche", "claude"],
      "trending": false,
      "popularity": 90
  }
,
  {
      "id": "miniature-world-asmr-veo3",
      "title": "Miniature World ASMR — Veo 3 Prompt for Viral TikTok Niche Pages",
      "category": "Video Prompts",
      "tool": "Veo 3",
      "difficulty": "Beginner",
      "desc": "Veo 3 builds hyper-detailed miniature worlds — tiny construction sites, pocket-sized ramen shops — in seamless loops that rack up massive TikTok watch time.",
      "prompt": "You are a miniature-world director. Generate a hyper-detailed MINIATURE WORLD video loop in Veo 3. The scene: [SCENE, for example a tiny construction site building a skyscraper, a pocket-sized ramen kitchen with steam rising, a miniature harbor with tiny cargo ships]. Camera: locked-off macro close-up, shallow depth of field, warm cozy lighting. Motion: continuous satisfying activity — tiny workers hammering, mini cranes lifting, chopsticks lifting noodles — every element moving in a natural loop. Texture: extreme detail — dust particles, tiny reflections, realistic materials. Audio mood: soft ASMR — tapping, sizzling, gentle clinks. Rules: no humans at normal scale, no text on screen, no camera cuts — one perfect continuous loop. Aspect ratio 9:16 for TikTok. The loop point must be invisible: the last frame flows into the first. Make it so satisfying that viewers watch it five times without noticing.",
      "howto": [
          "Open Veo 3, paste the prompt, and set aspect ratio to 9:16.",
          "Pick one scene per video — tiny worlds work best when the concept is instantly readable.",
          "Generate 2-3 variations and keep the one with the cleanest loop point.",
          "Add trending ASMR audio in TikTok's editor — soft tapping sounds boost completion rate.",
          "Post with a caption that asks a question ('What should the tiny workers build next?') to drive comments."
      ],
      "tips": [
          "Loop videos earn 2-3x the watch time of linear clips — the invisible loop point is your whole strategy.",
          "Series framing ('Tiny World #12') turns one viral loop into a binge-watching habit.",
          "Zoom crops of the same clip make 3 different posts — reuse every render."
      ],
      "tags": ["tiktok", "asmr", "miniature", "loops", "creator-niche"],
      "trending": false,
      "popularity": 93
  },
  {
      "id": "talking-food-characters-kling",
      "title": "Talking Food Characters — Kling Prompt for Funny TikTok Food Pages",
      "category": "Video Prompts",
      "tool": "Kling",
      "difficulty": "Beginner",
      "desc": "Kling animates funny talking food characters with big personalities — a grumpy avocado, a dramatic pizza slice — the comedy format pulling 100M+ views on TikTok.",
      "prompt": "You are a comedy animator. Create a TALKING FOOD CHARACTER skit in Kling. Character: [FOOD, for example an avocado] with personality [PERSONALITY, for example grumpy old man]. Scene: [SETTING, for example a kitchen counter at night, the inside of a fridge, a restaurant table]. The food item has expressive cartoon eyes and a mouth that syncs to this dialogue: '[DIALOGUE LINE, for example: I have been sitting in this fridge for nine days and nobody respects me.]'. Animation: bouncy, exaggerated squash-and-stretch motion; the character gestures with tiny arms while talking. Camera: medium close-up, slight handheld wobble for comedy energy. Lighting: bright and colorful, the food looks delicious and glossy. Comedy rule: the joke must land in the first 2 seconds — lead with the funniest line, then the setup. No subtitles — the character's voice carries it. 9:16 vertical, 8 seconds, punchy and rewatchable.",
      "howto": [
          "Open Kling, paste the prompt, and fill in your food, personality and dialogue line.",
          "Write the dialogue line first — the whole clip hangs on one funny sentence.",
          "Keep clips under 10 seconds; comedy dies with length.",
          "Add a trending comedic sound or voice filter in TikTok to match the character.",
          "Post daily — talking-food pages win on volume; one character can star in 50 skits."
      ],
      "tips": [
          "Give every food a catchphrase — recurring characters build followers faster than one-off jokes.",
          "Duet and stitch other food videos with your character reacting; free reach from their audience."
      ],
      "tags": ["tiktok", "comedy", "food", "characters", "creator-niche"],
      "trending": false,
      "popularity": 91
  },
  {
      "id": "ai-house-restoration-sora",
      "title": "AI House Restoration Before/After — Sora Prompt for YouTube Niche Channels",
      "category": "Video Prompts",
      "tool": "Sora",
      "difficulty": "Intermediate",
      "desc": "Sora generates cinematic before/after house restorations — decayed rooms transforming into dream interiors — a 100M+ view faceless YouTube niche with insane retention.",
      "prompt": "You are a restoration filmmaker. Create a BEFORE/AFTER house restoration sequence in Sora. The room: [ROOM, for example a Victorian living room, a farmhouse kitchen, a 1970s basement]. Opening shot (0-3s): the room in decay — peeling paint, broken windows, dust in shafts of light, slow push-in. Middle (3-8s): the transformation — paint brightening on walls, furniture materializing, light warming up — a smooth magical time-lapse effect, no cuts, one continuous camera move. Final (8-12s): the restored room in full glory — golden hour light, cozy details, slow orbit revealing every corner. Style: cinematic real estate photography, 24fps feel, rich color grade. Sound mood: satisfying whooshes and warm ambient tones. Rule: the transformation must feel earned — keep the camera moving through the whole 12 seconds so viewers cannot look away. 16:9 for YouTube.",
      "howto": [
          "Open Sora, paste the prompt, and set 16:9 for YouTube (9:16 for Shorts).",
          "Describe the decay vividly — the worse the before, the more satisfying the after.",
          "Generate the full 12-second clip in one pass so the transformation stays continuous.",
          "Pair with a voiceover naming each change ('the floors were rotten...') to hold retention.",
          "Title every video with the format: 'Abandoned [ROOM] to Dream Home'."
      ],
      "tips": [
          "Before/after is the highest-retention format on YouTube — the payoff at the end keeps viewers glued.",
          "End every video teasing the next room; restoration channels binge like TV series."
      ],
      "tags": ["youtube", "restoration", "before-after", "creator-niche"],
      "trending": false,
      "popularity": 94
  },
  {
      "id": "secret-bunker-restoration-runway",
      "title": "Secret Bunker Restoration — Runway Prompt for High-Retention YouTube",
      "category": "Video Prompts",
      "tool": "Runway",
      "difficulty": "Intermediate",
      "desc": "Runway renders secret bunker restorations — a hidden underground shelter rebuilt step by step — the high-retention storytelling format dominating faceless YouTube.",
      "prompt": "You are a cinematic storyteller. Create a SECRET BUNKER RESTORATION scene in Runway. Discovery: [ENTRANCE, for example a rusted hatch behind an abandoned farmhouse, a trapdoor in a forest floor, a sealed door in a basement wall]. Camera descends into darkness — flashlight beam revealing concrete walls, old bunks, dust-covered supplies. Restoration sequence: lights flickering on one by one, rust scrubbing itself off metal, fresh paint spreading across walls, the bunker transforming into a cozy survival retreat — warm lamps, stocked shelves, a glowing fireplace. Style: documentary realism, handheld camera feel, dramatic chiaroscuro lighting. Pacing: discovery slow and mysterious (4s), restoration fast and satisfying (8s), reveal slow and triumphant (4s). 16:9. Sound mood: echoing footsteps, metallic clanks, then warm ambient hum. No people on screen — the bunker is the character.",
      "howto": [
          "Open Runway, paste the prompt, and generate at 16:9.",
          "Story beats matter more than visuals — discovery, transformation, reveal in that order.",
          "Chain 2-3 generated scenes into one 45-60 second video for maximum watch time.",
          "Add a mystery voiceover ('Nobody has opened this hatch in 40 years...') before the reveal.",
          "Use consistent bunker details across episodes so viewers recognize your series."
      ],
      "tips": [
          "Mystery plus transformation is the retention double-punch — viewers stay for both the secret and the payoff.",
          "Number your episodes ('Bunker #7') — serialized restorations outperform one-offs."
      ],
      "tags": ["youtube", "restoration", "storytelling", "creator-niche"],
      "trending": false,
      "popularity": 90
  },
  {
      "id": "primitive-tech-builds-flow",
      "title": "Primitive Tech Builds — Google Flow Prompt for YouTube Niche Channels",
      "category": "Video Prompts",
      "tool": "Google Flow",
      "difficulty": "Intermediate",
      "desc": "Google Flow breaks primitive-tech builds into multi-scene clips — mud huts, bamboo water wheels, stone furnaces — the viral faceless survival niche on YouTube.",
      "prompt": "You are a primitive-technology documentarian. Plan a multi-scene BUILD sequence in Google Flow. The build: [PROJECT, for example a mud-brick hut with thatched roof, a bamboo water wheel, a stone furnace]. Scene 1 (establishing): lush jungle clearing, the builder's hands gathering materials — mud, bamboo, stone. Scene 2 (process): hands shaping bricks, lashing bamboo with vine rope, stacking stones — satisfying close-ups, no faces. Scene 3 (progress): the structure rising, time-lapse feel, camera slowly orbiting. Scene 4 (payoff): the finished build in golden light — smoke from the furnace, water flowing from the wheel. Style: hyper-realistic, nature documentary cinematography, warm earthy grade. Rule: hands only, never faces — the craft is the star. Each scene 6-8 seconds, seamless cuts between them. 16:9 for YouTube. Sound mood: nature ambience, squelching mud, snapping bamboo.",
      "howto": [
          "Open Google Flow, paste the prompt, and generate each of the 4 scenes separately.",
          "Keep 'hands only' in every prompt — faceless is the niche's whole identity.",
          "Stitch scenes in order with simple hard cuts; the build's progress is the transition.",
          "Add text overlays naming each step ('Day 3: firing the bricks') for retention.",
          "Release builds as multi-part series — part 1 discovery drives parts 2 and 3."
      ],
      "tips": [
          "Google Flow's multi-scene strength fits builds perfectly — one prompt per phase keeps quality high.",
          "The 'no talking, just building' format travels globally — no language barrier, worldwide audience."
      ],
      "tags": ["youtube", "survival", "diy", "creator-niche"],
      "trending": false,
      "popularity": 89
  },
  {
      "id": "nature-quote-reels-veo3",
      "title": "Inspirational Nature Quote Reels — Veo 3 Prompt for Instagram & Facebook",
      "category": "Video Prompts",
      "tool": "Veo 3",
      "difficulty": "Beginner",
      "desc": "Veo 3 creates breathtaking nature scenes for inspirational quote reels — waterfalls, sunrises, misty forests — the evergreen format dominating Instagram and Facebook.",
      "prompt": "You are a nature cinematographer. Generate a CINEMATIC NATURE scene in Veo 3 for a quote reel. The landscape: [LANDSCAPE, for example a waterfall in a misty rainforest, a sunrise over mountain peaks, ocean waves under a pink sky]. Camera: slow majestic push-in or gentle aerial drift, 8-10 seconds, no cuts. Lighting: golden hour or soft dawn glow, volumetric light rays, rich saturated colors. Atmosphere: mist, floating particles, birds or water in motion — the scene must feel alive and emotional. Composition: leave the upper third of the frame as clean sky or soft blur — space for quote text overlay. Style: National Geographic realism, ultra-detailed, 24fps cinematic feel. Rule: no people, no buildings, no text in the video itself — pure nature. 9:16 for Reels. The mood should make a viewer stop scrolling in under one second.",
      "howto": [
          "Open Veo 3, paste the prompt, and generate at 9:16.",
          "Leave headroom in the frame — the quote text needs clean space to sit on.",
          "Overlay your quote in a bold, readable font; keep it under 12 words.",
          "Post at sunrise/sunset times in your audience's timezone — quote reels peak with the mood.",
          "Batch 7 scenes in one sitting and schedule a full week of daily posts."
      ],
      "tips": [
          "Quote reels are the lowest-effort, highest-consistency niche — one scene plus one quote, every day.",
          "Ask a question in the caption ('Tag someone who needs this today') to trigger shares and tags."
      ],
      "tags": ["instagram", "facebook", "quotes", "reels", "creator-niche"],
      "trending": false,
      "popularity": 87
  },
  {
      "id": "cozy-autumn-wallpapers-midjourney",
      "title": "Cozy Autumn Phone Wallpapers — Midjourney Prompt for Instagram Theme Pages",
      "category": "Image Prompts",
      "tool": "Midjourney",
      "difficulty": "Beginner",
      "desc": "Midjourney generates cozy autumn phone wallpapers — pumpkin-spice palettes, rainy windows, warm cabins — a seasonal viral category for Instagram theme pages.",
      "prompt": "Cozy autumn phone wallpaper: [SCENE, for example a rain-streaked window overlooking orange maple trees, a warm cabin porch with pumpkins and a steaming mug, a forest path covered in golden leaves]. Style: dreamy photorealism, rich amber and burnt-orange palette, soft bokeh, gentle film grain. Lighting: warm window glow or soft overcast daylight, volumetric mist. Composition: vertical 9:16, strong focal point in the lower two-thirds, soft blurred upper area for clock and widgets. Details: falling leaves, glowing string lights, knitted textures, steam rising — maximum coziness. Mood: nostalgic, calm, the feeling of a perfect October afternoon. Ultra-high detail, no people, no text, no watermark --ar 9:16 --v 6 --style raw",
      "howto": [
          "Open Midjourney, paste the prompt, and pick your scene.",
          "Generate 4 variations and upscale the coziest one.",
          "Post as a carousel — 5 wallpapers in one post outperforms singles.",
          "Add 'comment WALLPAPER for the HD link' to drive engagement.",
          "Repeat weekly with new scenes — seasonal pages grow on freshness."
      ],
      "tips": [
          "Wallpaper accounts grow through saves — saves are Instagram's strongest ranking signal.",
          "October is peak season; start posting autumn content in late September."
      ],
      "tags": ["instagram", "wallpaper", "autumn", "creator-niche"],
      "trending": false,
      "popularity": 86
  },
  {
      "id": "facebook-niche-finder-chatgpt",
      "title": "Facebook Page Niche Finder — ChatGPT Prompt for Underserved FB Niches",
      "category": "Text Prompts",
      "tool": "ChatGPT",
      "difficulty": "Intermediate",
      "desc": "ChatGPT finds underserved Facebook niches in 2026 — hungry audiences with weak competition — before you spend a month posting into the void.",
      "prompt": "You are a Facebook niche analyst. Find me UNDERSERVED page niches for 2026. My constraints: [LANGUAGE], [CONTENT TYPE I can make, for example AI videos, quote images, short clips], [HOURS PER WEEK I can post]. Step 1: list 15 Facebook page niches with strong 2026 demand — use audience signals like group sizes, comment velocity and share rates, not guesses. Step 2: for each niche, score competition 1-10 by checking how many active pages post daily and how original their content is. Step 3: shortlist the 5 niches with the best demand-to-competition ratio and explain WHY each is underserved in one sentence. Step 4: for my top pick, give me a 30-day launch plan — page name ideas, first 20 post concepts, posting times for my timezone, and the exact metrics that tell me to double down or pivot at day 30. Be brutally honest about which niches are saturated traps.",
      "howto": [
          "Open ChatGPT, paste the prompt, and fill in your language, content type and hours.",
          "Verify the top 3 niches yourself — search Facebook and check the biggest pages' posting frequency.",
          "Pick the niche where top pages look lazy — weak competition is your opening.",
          "Launch with the 30-day plan, but judge only at day 30 — Facebook needs time to find your audience.",
          "Re-run with your real metrics monthly to sharpen the strategy."
      ],
      "tips": [
          "Facebook rewards consistency over virality — 2 good posts daily beats 1 viral post weekly.",
          "Niches with active Facebook Groups are gold — built-in audiences you can learn from before launching."
      ],
      "tags": ["facebook", "niche discovery", "creator-niche", "chatgpt"],
      "trending": false,
      "popularity": 88
  },
  {
      "id": "tiktok-hook-opener-pack-gemini",
      "title": "TikTok Hook Script Pack — Gemini Prompt for 7-Second Viral Openers",
      "category": "Text Prompts",
      "tool": "Gemini",
      "difficulty": "Beginner",
      "desc": "Gemini writes 7-second viral openers tailored to your niche — the first 3 seconds decide everything on TikTok, and this prompt hands you 30 of them.",
      "prompt": "You are a TikTok hook writer. Write me 30 VIRAL OPENERS for my niche. My niche: [NICHE]. My typical video: [FORMAT, for example talking-head tips, AI animation clips, screen recordings]. My audience's biggest pain or curiosity: [PAIN POINT]. Rules for every opener: under 7 seconds spoken, one single idea, no greetings, no 'welcome back'. Mix these 5 proven hook types: 1) the bold claim ('This [thing] is lying to you'), 2) the curiosity gap ('Nobody talks about the 3rd one'), 3) the negative hook ('Stop doing [X]'), 4) the number hook ('3 [things] that...'), 5) the story hook ('I tried [X] for 30 days'). For each opener, add the first visual to show on screen and one line explaining why it stops the scroll. End by ranking your top 5 and telling me which to test first this week.",
      "howto": [
          "Open Gemini, paste the prompt, and fill in your niche, format and audience pain point.",
          "Film the top 5 openers first — test all five before writing more.",
          "Read each opener out loud; if it takes more than 7 seconds, cut words.",
          "Track which hook type wins and ask Gemini for 20 more of that type.",
          "Recycle winning openers across new topics — hooks are reusable assets."
      ],
      "tips": [
          "The opener IS the video on TikTok — 80% of viewers decide in the first 3 seconds.",
          "Negative hooks ('stop doing X') consistently outperform positive ones — use them, but deliver real value after."
      ],
      "tags": ["tiktok", "hooks", "scripts", "creator-niche"],
      "trending": false,
      "popularity": 92
  },
  {
      "id": "blue-ocean-niche-scanner-claude",
      "title": "Blue-Ocean Niche Scanner — Claude Prompt for Zero-Competition Creator Niches",
      "category": "Text Prompts",
      "tool": "Claude",
      "difficulty": "Advanced",
      "desc": "Claude scans for zero-competition creator niches — scoring empty lanes by demand, difficulty and monetization — so you launch where nobody else is.",
      "prompt": "You are a blue-ocean strategist for content creators. Find me ZERO-COMPETITION niches. My skills: [SKILLS, for example AI video generation, scriptwriting]. My platforms: [PLATFORMS]. My monetization goal: [GOAL, for example ad revenue, digital products, sponsorships]. Step 1: brainstorm 25 niche candidates at the intersection of my skills and 2026 demand — include weird, specific micro-niches, not broad categories. Step 2: score each 1-10 on three axes: proven audience demand, current competition density, and monetization fit for my goal. Step 3: eliminate anything scoring above 5 on competition — I only want empty lanes. Step 4: for the top 3 survivors, write a full opportunity brief: why the lane is empty, who the audience is, 10 starter video ideas, the format that fits best, and the realistic 90-day milestones. Step 5: name the single biggest risk for each niche and how I would kill the channel fast if the risk materializes. Think like an investor, not a cheerleader.",
      "howto": [
          "Open Claude, paste the prompt, and be specific about your real skills — vague inputs get vague niches.",
          "Manually verify the top 3 lanes are actually empty — search each platform for 15 minutes.",
          "Pick the niche with the clearest monetization path, not just the emptiest lane.",
          "Commit to 30 videos before judging — blue-ocean niches need time for the audience to find you.",
          "Re-run quarterly; today's empty lane is tomorrow's gold rush."
      ],
      "tips": [
          "The best blue-ocean niches look boring to everyone but the audience — weird specificity is a moat.",
          "Document your niche-finding process as content — 'how I found an empty niche' videos perform."
      ],
      "tags": ["niche discovery", "youtube", "tiktok", "creator-niche"],
      "trending": false,
      "popularity": 90
  },
  {
    id: "hidden-miniature-doorways-veo3",
    title: "Hidden Miniature Doorways Video Prompt for Veo 3",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Beginner",
    desc: "Tiny glowing miniature doorways hidden at the base of real-world walls — a magical macro concept built for TikTok's viral curiosity niche.",
    prompt: "Extreme macro video shot of a tiny wooden miniature doorway glowing warm light from within, set at the base of a giant weathered brick wall in a real European old-town street, morning mist drifting past, a miniature iron lantern flickering beside the door, the door slowly creaks open revealing a cozy golden-lit interior with tiny furniture silhouettes, a curious cat's paw reaches in from the edge of frame, dust particles sparkle in a ray of dawn light, shallow depth of field keeping the doorway razor sharp while the giant street blurs dreamily behind, rich warm and cool color contrast, cinematic 24fps motion, photorealistic, ultra detailed, 9:16 vertical, no text, no watermark, no humans",
    howto: [
      "Open Veo 3 and start a new text-to-video generation.",
      "Paste the full prompt exactly as written — the macro framing details matter most.",
      "Set the aspect ratio to 9:16 for TikTok, Shorts and Reels before generating.",
      "Generate 3-4 variations and keep the one with the smoothest door movement.",
      "Add a curiosity hook caption like 'Someone lives under this wall...' with trending ambient audio, then post."
    ],
    tips: [
      "Swap the street for a forest floor, garden wall or bookshelf to start a whole series.",
      "Post a 'making of' version showing the miniature set — behind-the-scenes posts double engagement."
    ],
    tags: ["creator-niche", "tiktok", "youtube", "miniatures", "viral"],
    trending: true,
    popularity: 94
  },
  {
    id: "parkour-animals-stunts-kling",
    title: "Parkour Animals Stunts Video Prompt for Kling",
    category: "Video Prompts",
    tool: "Kling",
    difficulty: "Beginner",
    desc: "Athletic animals performing jaw-dropping parkour stunts in slow motion — a comedy-action niche made for viral TikTok animal pages.",
    prompt: "Slow-motion video of an athletic tabby cat performing a parkour stunt, sprinting up a brick wall in a sunny backyard, launching off the wall mid-air with all four paws extended, then landing gracefully on a wooden fence, tiny dust particles bursting on impact, camera tracks alongside the jump in smooth side-profile motion, joyful golden-hour lighting, backyard slightly blurred with colorful children's toys visible, the cat's fur rippling with motion, comedic timing as a surprised dog watches from a window in the background, exaggerated cinematic sports-commentary energy, vibrant saturated colors, photorealistic fur detail, 24fps smooth motion, 9:16 vertical, no text, no watermark, no humans in frame",
    howto: [
      "Open Kling and start a new text-to-video generation.",
      "Paste the full prompt and keep every motion detail — Kling handles fast action best with explicit direction.",
      "Set aspect ratio to 9:16 and duration to the longest clip for a full stunt arc.",
      "Generate several takes and pick the one with the cleanest landing frame.",
      "Add a sports-commentator voiceover or dramatic music and post with animal-comedy hashtags."
    ],
    tips: [
      "Rotate animals and stunts — dogs, squirrels, raccoons — to keep the page fresh.",
      "Slow the best landing frame into a freeze-frame thumbnail; it boosts click-through."
    ],
    tags: ["creator-niche", "tiktok", "animals", "comedy"],
    trending: true,
    popularity: 96
  },
  {
    id: "city-reclaimed-by-nature-sora",
    title: "City Reclaimed by Nature Video Prompt for Sora",
    category: "Video Prompts",
    tool: "Sora",
    difficulty: "Intermediate",
    desc: "An abandoned city street reclaimed by nature in flowing time-lapse — a cinematic what-if niche that hooks faceless YouTube audiences.",
    prompt: "Stunning AI time-lapse video of an abandoned modern city street being reclaimed by nature, seasons flashing by as vines creep up glass skyscrapers, moss swallows cracked asphalt, wildflowers burst through car roofs, flocks of birds reclaim the sky above broken billboards, rain washes clean then sun dries the scene in fast flowing cycles, camera slowly pushes forward down the empty boulevard in one continuous glide, dramatic shifting light from dawn to storm to dusk, rich greens against grey concrete, hyper-detailed foliage growth, cinematic documentary realism, 24fps, 16:9, no text, no watermark, no people",
    howto: [
      "Open Sora and start a new text-to-video generation.",
      "Paste the prompt in full — Sora's strength is smooth temporal transitions, so keep the season-cycle wording.",
      "Use 16:9 for YouTube and generate the longest duration available.",
      "Generate 2-3 versions and choose the one with the most natural growth motion.",
      "Add a documentary-style narration asking 'what if we all left?' and chapter the video by seasons."
    ],
    tips: [
      "Pair the clip with eerie ambient music — the contrast drives watch time.",
      "Turn it into a series: reclaimed malls, schools, highways each as their own episode."
    ],
    tags: ["creator-niche", "youtube", "nature", "timelapse"],
    trending: false,
    popularity: 91
  },
  {
    id: "retro-fake-commercials-runway",
    title: "Retro Fake Commercials Video Prompt for Runway",
    category: "Video Prompts",
    tool: "Runway",
    difficulty: "Intermediate",
    desc: "Hilarious fake 1950s commercials for absurd products — a retro comedy niche that goes viral on Facebook nostalgia pages.",
    prompt: "Hilarious fake 1950s TV commercial for an absurd product, a robot vacuum cleaner that also makes toast, shot on grainy vintage film with slightly flickering black-and-white-to-color transition, cheerful overly-enthusiastic actor in a period suit demonstrating the toaster vacuum in a retro kitchen, exaggerated smiling family watching in amazement, classic mid-century announcer energy captured in the visuals, corny period styling, jumpy frame rate and film scratches for authenticity, bold pastel color grade, 4:3 framing, comedic timing with a surprising punchline ending, 24fps, no modern elements, no watermark",
    howto: [
      "Open Runway and start a new text-to-video generation.",
      "Paste the prompt and pick your absurd product — the weirder the combo, the funnier the result.",
      "Keep 4:3 framing and film grain cues for the authentic retro look.",
      "Generate a few takes until the punchline moment lands clearly.",
      "Add a retro announcer voiceover in post and post with nostalgia-comedy hashtags."
    ],
    tips: [
      "Write 5 product combos first and shoot them as a weekly series — recurring formats build subscribers.",
      "End every ad with a deadpan fine-print disclaimer; viewers replay it and comment."
    ],
    tags: ["creator-niche", "facebook", "comedy", "retro"],
    trending: false,
    popularity: 88
  },
  {
    id: "reverse-destruction-satisfying-flow",
    title: "Reverse Destruction Video Prompt for Google Flow",
    category: "Video Prompts",
    tool: "Google Flow",
    difficulty: "Beginner",
    desc: "Destruction played in reverse — smashed objects rebuilding themselves — the ultimate satisfying niche for Instagram Reels.",
    prompt: "Hypnotically satisfying video of destruction played in reverse, a smashed ceramic vase flying apart then reassembling piece by piece in mid-air, shards spiraling back together, paint flowing back onto the surface, final vase spinning perfectly restored on a marble table, camera orbits slowly around the scene in one fluid motion, crisp studio lighting against a soft gradient background, macro details of cracks sealing themselves, gentle motion blur on the flying pieces, pastel color palette, clean minimal aesthetic, smooth 24fps motion, photorealistic, 9:16 vertical, no text, no watermark, no humans",
    howto: [
      "Open Google Flow and start a new text-to-video generation.",
      "Paste the prompt — the reverse-timeline wording gives Flow clear motion direction.",
      "Set 9:16 vertical for Reels and TikTok.",
      "Generate 2-3 takes and keep the one where the rebuild reads as one continuous flow.",
      "Loop the clip seamlessly and post with satisfying-ASMR hashtags."
    ],
    tips: [
      "Alternate materials — glass, fruit, pottery — so each post feels like a new episode.",
      "The frame where the object is fully restored makes a perfect loop point."
    ],
    tags: ["creator-niche", "instagram", "satisfying", "reels"],
    trending: false,
    popularity: 93
  },
  {
    id: "luxury-travel-broll-veo3",
    title: "Luxury Travel B-Roll Video Prompt for Veo 3",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Intermediate",
    desc: "Cinematic luxury travel B-roll for faceless travel pages — infinity pools, yachts and golden-hour villas that sell the dream.",
    prompt: "Cinematic luxury travel B-roll sequence for a faceless travel page, drone soaring over a turquoise infinity pool overlooking a tropical ocean at golden hour, slow push-in on a private villa terrace with champagne and fresh fruit, camera glides through a candle-lit beach dinner setup, then rises to reveal a private yacht at sunset, rich cinematic color grade with teal shadows and golden highlights, smooth gimbal-like motion, lens flare kisses, distant palm trees swaying, no people, aspirational quiet-luxury mood, photorealistic, ultra detailed, 24fps, 16:9, no text, no watermark",
    howto: [
      "Open Veo 3 and start a new text-to-video generation.",
      "Paste the prompt and keep the color-grade wording — it sells the luxury mood.",
      "Generate in 16:9 for YouTube, then crop a 9:16 version for Reels and TikTok.",
      "Generate multiple scene variations and stitch 3-4 into a 30-second montage.",
      "Add a trending luxury-lifestyle audio track and a dreamy caption with travel hashtags."
    ],
    tips: [
      "Batch-generate 10 scenes at once — a week of posts from one session.",
      "End each video with a text CTA for a travel deal or newsletter signup to monetize."
    ],
    tags: ["creator-niche", "instagram", "tiktok", "travel"],
    trending: true,
    popularity: 95
  },
  {
    id: "miniature-food-art-midjourney",
    title: "Miniature Food Art Image Prompt for Midjourney",
    category: "Image Prompts",
    tool: "Midjourney",
    difficulty: "Beginner",
    desc: "Hyper-realistic miniature food-art dioramas — tiny chefs on giant food landscapes — a scroll-stopping niche for Facebook food pages.",
    prompt: "Hyper-realistic macro photograph of a miniature food art diorama, a tiny chef figurine decorating a giant strawberry cake slice that looks like a mountain, ladders and scaffolding against the cake, tiny workers carrying blueberry boulders, glossy syrup waterfalls, morning light glowing through fresh mint leaves, shallow depth of field, vibrant appetizing colors, studio-quality food photography, ultra detailed, no text, no watermark",
    howto: [
      "Open Midjourney and paste the prompt above into the imagine bar.",
      "Add --ar 3:2 for Facebook posts or --ar 4:5 for Instagram.",
      "Generate 4 variations and upscale the one with the sharpest tiny-figure detail.",
      "Swap the food — burgers, sushi, pancakes — to build a full series.",
      "Post with a playful caption like 'The world's smallest bakery' and food-niche hashtags."
    ],
    tips: [
      "Keep one consistent 'tiny chef' character across posts so followers recognize the series.",
      "Behind-the-scenes prompts showing the 'construction site' angle get huge shares."
    ],
    tags: ["creator-niche", "facebook", "food", "art"],
    trending: false,
    popularity: 89
  },
  {
    id: "pain-point-niche-miner-chatgpt",
    title: "Audience Pain-Point Niche Miner Prompt for ChatGPT",
    category: "Text Prompts",
    tool: "ChatGPT",
    difficulty: "Advanced",
    desc: "ChatGPT mines real audience pain points to surface creator niches with proven hungry demand — niche discovery before you post a single video.",
    prompt: "You are a niche-discovery researcher for content creators. Your job: find content niches with PROVEN hungry audiences by mining real pain points. Step 1: ask me my interests, skills, and the platforms I prefer. Step 2: brainstorm 30 specific audience pain points in 2026 (frustrations people actively complain about online) that match my skills — phrase each as something a real person would type into Google, YouTube, or Reddit. Step 3: for each pain point, rate 1-10 on three axes: how many people feel it, how badly they want it solved, and how few creators serve it. Step 4: convert the top 10 into content niche concepts with: niche name, target viewer, 10 starter video ideas, the winning format, and one monetization angle per niche. Step 5: rank the top 3 and write a one-paragraph launch thesis for each. Be brutally specific — no broad 'motivation' or 'fitness' niches, only sharp, ownable angles.",
    howto: [
      "Open ChatGPT and paste the full prompt — the five-step structure is what makes it work.",
      "Answer its questions honestly about your real skills; vague inputs get vague niches.",
      "Cross-check the top 3 niches with real searches on YouTube, TikTok and Reddit.",
      "Pick the niche with the strongest pain score, not the most fun one.",
      "Re-run every quarter — pain points shift and new ones appear constantly."
    ],
    tips: [
      "Feed it screenshots of real complaints from Reddit or comments for sharper results.",
      "Ask it to compare two niches head-to-head before you commit."
    ],
    tags: ["creator-niche", "niche-discovery", "youtube", "strategy"],
    trending: false,
    popularity: 92
  },
  {
    id: "trend-remix-generator-gemini",
    title: "Trend Remix Generator Prompt for Gemini",
    category: "Text Prompts",
    tool: "Gemini",
    difficulty: "Intermediate",
    desc: "Gemini remixes proven viral formats into 10 fresh platform-specific versions — ride trends without looking like a copycat.",
    prompt: "You are a viral format analyst. I will give you a trending content format or niche, and you will REMIX it into 10 fresh formats for a different platform. Rules: keep the psychology that makes the original viral (curiosity gap, loop, surprise), but change the subject, setting, or execution so it feels brand new. For each remix give: the original format it borrows from, the platform it is built for (TikTok, Instagram Reels, YouTube Shorts, or Facebook), the 3-second hook, the exact video structure, and why this remix avoids saturation. Then rank all 10 by speed-to-first-viral-video for a brand-new page. End by drafting the first 3 videos of the winning format with full scripts or shot lists. Be concrete and platform-aware — TikTok rewards loops, YouTube rewards retention, Facebook rewards shareability.",
    howto: [
      "Open Gemini and paste the prompt, then name a format you saw going viral this week.",
      "Read all 10 remixes before judging — the best one is rarely the first.",
      "Pick the remix with the fastest path to a first viral video on YOUR platform.",
      "Ask Gemini to expand the winning format's 3 starter videos into full shot lists.",
      "Film the first 3 videos within 48 hours — trends expire fast."
    ],
    tips: [
      "Run this weekly with that week's top trend; it becomes your format factory.",
      "Save winning remixes in a doc — they become your channel's signature series."
    ],
    tags: ["creator-niche", "tiktok", "instagram", "viral"],
    trending: false,
    popularity: 90
  },
  {
    id: "one-video-ten-platforms-claude",
    title: "One Video to Ten Platforms Prompt for Claude",
    category: "Text Prompts",
    tool: "Claude",
    difficulty: "Advanced",
    desc: "Claude turns one video idea into a 10-piece cross-platform content system — maximum reach from minimum filming.",
    prompt: "You are a content repurposing strategist. I will describe ONE long-form video idea (topic, length, key points), and you will turn it into a 10-piece cross-platform content system. Output: 1) the anchor YouTube video with title, chapters, and retention checkpoints, 2) three YouTube Shorts cut from it with hooks and timestamps, 3) three TikToks adapted with trend sounds and text overlays, 4) one Instagram Reel with caption and hashtag set, 5) one Facebook post version with a share-bait hook, 6) a posting schedule across 7 days, and 7) how each piece links back to grow the others. Keep the creator's voice consistent and avoid duplicate content penalties by rewriting hooks per platform. End with the 3 metrics to track per platform for the first week.",
    howto: [
      "Open Claude and paste the prompt, then describe your one video idea in detail.",
      "Review the full 10-piece system before filming — adjust any piece that feels forced.",
      "Film the anchor video first, then cut the Shorts and TikToks from the same footage.",
      "Follow the 7-day posting schedule exactly for the compounding effect.",
      "Track the 3 metrics per platform and double down on whatever wins."
    ],
    tips: [
      "Batch 4 anchor ideas at once and you get a month of content in one session.",
      "Rewrite hooks per platform in your own voice — identical hooks underperform."
    ],
    tags: ["creator-niche", "youtube", "facebook", "repurposing"],
    trending: false,
    popularity: 91
  },
{
  "id": "micro-farm-timelapse-veo3",
  "title": "Micro Farm Timelapse — Veo 3 Prompt for TikTok & YouTube Shorts",
  "category": "Video Prompts",
  "tool": "Veo 3",
  "difficulty": "Beginner",
  "desc": "Grow a tiny thriving farm from seed to harvest in one hyperlapse — the oddly satisfying farm niche pulling millions of views on TikTok and Shorts.",
  "prompt": "Cinematic hyperlapse of a miniature farm on a wooden tabletop, tiny seeds sprouting in fast motion, miniature wheat growing tall and turning golden, a tiny red barn and farmhouse appearing piece by piece, miniature cows and chickens animating into the scene, a small pond filling with sparkling blue water, morning mist drifting over the fields, warm sunrise light shifting to golden afternoon, camera slowly orbiting overhead in one smooth 360-degree arc, tilt-shift miniature effect, ultra-detailed textures, vibrant greens and warm ambers, photorealistic, 9:16 vertical, no text, no watermark, no people",
  "howto": [
    "Open Veo 3 and start a new text-to-video generation.",
    "Paste the full prompt above, keeping every farm-building stage in order.",
    "Set aspect ratio to 9:16 for TikTok, Shorts and Reels.",
    "Generate 2-3 takes and pick the smoothest orbiting motion.",
    "Add a satisfying harvest sound and a farm-niche caption, then post."
  ],
  "tips": [
    "Swap 'farm' for a tiny city or forest for a whole mini-world series.",
    "Post a 'part 2' adding livestock — sequels double this niche's retention."
  ],
  "tags": [
    "creator-niche",
    "tiktok",
    "youtube",
    "farm",
    "timelapse"
  ],
  "trending": true,
  "popularity": 94
},
{
  "id": "glitch-transition-pack-kling",
  "title": "Glitch Transition Pack — Kling Prompt for Viral TikTok Edits",
  "category": "Video Prompts",
  "tool": "Kling",
  "difficulty": "Intermediate",
  "desc": "Generate seamless glitch and morph transitions for niche content — the editing style that keeps viewers watching to the very last frame.",
  "prompt": "Dynamic digital glitch transition, a creator snapping fingers in front of the camera, the frame shatters into glowing RGB pixels that swirl and reassemble, seamless morph into the same person wearing a different outfit in a new background, vibrant neon blue and magenta digital particles, motion blur on the snap, camera locked off and center-framed, high energy, ultra-smooth 60fps motion, vertical 9:16, photorealistic, no text, no watermark",
  "howto": [
    "Open Kling and start a new video generation.",
    "Paste the prompt and describe your own outfit or scene swap.",
    "Keep the camera lock-off cue — it is what makes the morph seamless.",
    "Generate twice and keep the take with the cleanest pixel reassembly.",
    "Cut the clip into your niche video at the 3-second mark for max retention."
  ],
  "tips": [
    "Batch 5 outfit swaps in one session for a full transition pack.",
    "Pair with a trending sound — transitions ride audio trends hardest."
  ],
  "tags": [
    "creator-niche",
    "tiktok",
    "transitions",
    "editing"
  ],
  "trending": true,
  "popularity": 92
},
{
  "id": "deep-sea-creature-reveal-sora",
  "title": "Deep Sea Creature Reveal — Sora Prompt for YouTube Niche Videos",
  "category": "Video Prompts",
  "tool": "Sora",
  "difficulty": "Intermediate",
  "desc": "Reveal a mysterious deep-sea creature emerging from the dark — high-retention faceless ocean content built for YouTube's documentary niche.",
  "prompt": "Dark abyssal ocean trench, a faint blue bioluminescent glow in the distance growing brighter, a colossal ghostly deep-sea creature with glowing eyes slowly emerging from the black water toward the camera, drifting plankton particles catching the light, subtle currents moving strange tentacled organisms, cinematic volumetric lighting, eerie documentary atmosphere, slow dramatic push-in, photorealistic, 16:9, no text, no watermark, nature documentary style",
  "howto": [
    "Open Sora and start a new text-to-video generation.",
    "Paste the full prompt — the slow push-in is the retention engine.",
    "Set 16:9 for YouTube and generate a 10-second clip.",
    "Generate 3 creature variants to build a 'top 5' compilation video.",
    "Add deep-ocean narration audio and chapters for SEO watch time."
  ],
  "tips": [
    "Name a fictional-but-plausible species in the title to spark comments.",
    "Cross-post the best frame to Facebook — ocean pages share heavily."
  ],
  "tags": [
    "creator-niche",
    "youtube",
    "ocean",
    "documentary"
  ],
  "trending": false,
  "popularity": 88
},
{
  "id": "lantern-festival-loop-runway",
  "title": "Lantern Festival Loop — Runway Prompt for Instagram Reels",
  "category": "Video Prompts",
  "tool": "Runway",
  "difficulty": "Beginner",
  "desc": "A seamless loop of glowing lanterns rising into a starry sky — the perfect aesthetic background for Instagram Reels and quote pages.",
  "prompt": "Seamless infinite loop of hundreds of glowing paper lanterns rising into a deep indigo night sky, each lantern trailing soft golden light, silhouettes of ancient temple rooftops below, a gentle breeze swaying the lanterns, stars twinkling, lantern glow reflecting on a calm river surface, dreamy warm color palette, slow upward camera drift matching the lantern motion, ultra detailed, cinematic, 9:16 vertical, no text, no watermark, loopable",
  "howto": [
    "Open Runway and start a text-to-video generation.",
    "Paste the prompt and set duration to 10 seconds for a clean loop.",
    "Use 9:16 vertical for Reels and TikTok.",
    "Check the loop point — regenerate if the last and first frames jump.",
    "Layer motivational text or quotes on top and post daily."
  ],
  "tips": [
    "Quote pages post 2-3 of these daily — consistency wins this niche.",
    "Slow the clip to 0.75x for a dreamier, more premium feel."
  ],
  "tags": [
    "creator-niche",
    "instagram",
    "loop",
    "aesthetic"
  ],
  "trending": false,
  "popularity": 85
},
{
  "id": "volcano-eruption-cinematic-google-flow",
  "title": "Volcano Eruption Cinematic — Google Flow Prompt for Viral Shorts",
  "category": "Video Prompts",
  "tool": "Google Flow",
  "difficulty": "Advanced",
  "desc": "A jaw-dropping cinematic volcano eruption with rivers of lava — disaster-niche content that dominates YouTube Shorts and TikTok.",
  "prompt": "Epic cinematic volcano eruption at dusk, a massive plume of ash rising into a purple-orange sky, rivers of glowing molten lava flowing down dark rocky slopes, lightning crackling inside the ash cloud, slow-motion embers and sparks drifting toward the camera, dramatic low-angle drone shot sweeping over the lava flows, intense orange glow against deep blue twilight, photorealistic, hyper-detailed, 9:16 vertical, no text, no watermark, no people",
  "howto": [
    "Open Google Flow and start a new video generation.",
    "Paste the full prompt with all atmosphere and lighting details.",
    "Choose 9:16 vertical for Shorts and TikTok.",
    "Generate 2-3 takes — keep the one with the most dramatic ash cloud.",
    "Add a shocking fact caption and disaster-niche hashtags before posting."
  ],
  "tips": [
    "First frame must show lava — thumbnails with fire get the highest CTR.",
    "Follow with an 'eruption aftermath' clip for a viral two-part series."
  ],
  "tags": [
    "creator-niche",
    "youtube",
    "tiktok",
    "cinematic",
    "nature"
  ],
  "trending": true,
  "popularity": 93
},
{
  "id": "pet-reaction-compilation-veo3",
  "title": "Pet Reaction Compilation — Veo 3 Prompt for TikTok Pet Pages",
  "category": "Video Prompts",
  "tool": "Veo 3",
  "difficulty": "Beginner",
  "desc": "Hilarious slow-motion pet reaction clips — the funny-animal niche formula powering the biggest pet pages on TikTok and Instagram.",
  "prompt": "Funny slow-motion close-up of a golden retriever's face reacting to a squeaky toy, ears flopping upward, eyes widening comically, mouth open in surprise, bright sunny living room behind, shallow depth of field, 120fps slow-motion feel, vibrant colors, joyful energy, vertical 9:16, photorealistic, ultra-detailed fur, no text, no watermark",
  "howto": [
    "Open Veo 3 and start a new text-to-video generation.",
    "Paste the prompt and swap in your own pet breed and trigger toy.",
    "Generate in 9:16 vertical for TikTok and Reels.",
    "Make 4-5 reaction variants and edit them into a compilation.",
    "Caption it with a relatable question to drive comments."
  ],
  "tips": [
    "Post during US evening hours — pet content peaks after dinner.",
    "The 'before the toy / after the toy' split format triples shares."
  ],
  "tags": [
    "creator-niche",
    "tiktok",
    "instagram",
    "pets",
    "funny"
  ],
  "trending": true,
  "popularity": 95
},
{
  "id": "viral-quote-card-pack-midjourney",
  "title": "Viral Quote Card Pack — Midjourney Prompt for Facebook & Instagram",
  "category": "Image Prompts",
  "tool": "Midjourney",
  "difficulty": "Beginner",
  "desc": "Generate scroll-stopping quote card backgrounds for motivation and money pages — the image format with the highest share rate on Facebook.",
  "prompt": "Minimalist viral quote card background, deep navy gradient with a soft golden light glow in the top corner, elegant empty center space reserved for typography, subtle film grain texture, premium social-media aesthetic, centered composition with generous negative space for text overlay, 4:5 portrait, ultra clean, professional design --ar 4:5 --style raw --v 6.1",
  "howto": [
    "Open Midjourney and paste the prompt into the imagine bar.",
    "Generate 4 variants and upscale the cleanest background.",
    "Add your quote text in Canva using a bold serif font.",
    "Keep text under 12 words — short quotes get shared most.",
    "Post to Facebook and Instagram with the page's branded hashtag."
  ],
  "tips": [
    "Dark backgrounds with gold accents outperform bright ones for money quotes.",
    "Make a 30-card pack in one sitting and schedule a month of posts."
  ],
  "tags": [
    "creator-niche",
    "facebook",
    "instagram",
    "quotes",
    "design"
  ],
  "trending": false,
  "popularity": 83
},
{
  "id": "niche-hook-angle-generator-chatgpt",
  "title": "Niche Hook Angle Generator — ChatGPT Prompt for Untapped Niches",
  "category": "Text Prompts",
  "tool": "ChatGPT",
  "difficulty": "Intermediate",
  "desc": "Discover 10 untapped content angles in any niche with ready-to-film viral hooks — the niche-discovery prompt every faceless creator needs.",
  "prompt": "Act as a YouTube and TikTok growth strategist. I want to start a faceless content channel in this niche: [NICHE]. Do the following: 1) Identify 10 UNDERSERVED sub-niches with high demand and low competition, ranked by opportunity score. 2) For each sub-niche, give 3 specific video ideas with a 5-second viral hook written out word-for-word. 3) Estimate the competition level and the fastest way to stand out. 4) Recommend which platform (YouTube, TikTok, Instagram, Facebook) fits each sub-niche best and why. 5) Give me a 30-day posting plan using only the top 3 sub-niches. Be specific — no generic advice. I need actionable, 2026-ready tactics.",
  "howto": [
    "Open ChatGPT and paste the full prompt above.",
    "Replace [NICHE] with a broad topic like 'personal finance' or 'true crime'.",
    "Review the 10 sub-niches and pick the best demand-to-competition ratio.",
    "Ask follow-ups to expand the top sub-niche into 30 video ideas.",
    "Save the hooks and pair them with your video-generation prompts."
  ],
  "tips": [
    "Run this for 3 different niches and compare opportunity scores.",
    "Feed the winning sub-niche into the niche-validation scorecard prompt next."
  ],
  "tags": [
    "creator-niche",
    "youtube",
    "tiktok",
    "niche-discovery",
    "strategy"
  ],
  "trending": true,
  "popularity": 96
},
{
  "id": "faceless-channel-planner-gemini",
  "title": "Faceless Channel Planner — Gemini Prompt for 90-Day Content Maps",
  "category": "Text Prompts",
  "tool": "Gemini",
  "difficulty": "Intermediate",
  "desc": "Turn one niche idea into a full 90-day faceless content calendar with hooks, scripts and posting schedules — built for YouTube and TikTok.",
  "prompt": "You are a content strategist for faceless channels. My niche is [NICHE], my platform is [PLATFORM], and I post [X] times per week. Create a complete 90-day content plan: 1) Define 4 content pillars with a description of each. 2) Build a week-by-week calendar of video titles — every title must be keyword-rich and curiosity-driven. 3) For each video, write the first 15 seconds of the script (the hook) word-for-word. 4) Suggest the ideal video length and format per platform. 5) Add 2 trend-jacking opportunities per month based on 2026 trends in this niche. Output everything in a clean table format I can copy into a spreadsheet.",
  "howto": [
    "Open Gemini and paste the full prompt above.",
    "Fill in [NICHE], [PLATFORM] and [X] posting frequency.",
    "Copy the calendar into a spreadsheet and sort by week.",
    "Generate the video assets for week 1 before filming or editing.",
    "Review and re-plan every 30 days based on what performed."
  ],
  "tips": [
    "Ask Gemini to re-rank the calendar after your first month of analytics.",
    "The 4-pillar structure keeps channels from drifting off-niche."
  ],
  "tags": [
    "creator-niche",
    "youtube",
    "tiktok",
    "content-planner",
    "strategy"
  ],
  "trending": false,
  "popularity": 89
},
{
  "id": "niche-persona-matcher-claude",
  "title": "Niche Persona Matcher — Claude Prompt to Find Your Profitable Niche",
  "category": "Text Prompts",
  "tool": "Claude",
  "difficulty": "Advanced",
  "desc": "Match your skills and interests to the most profitable creator niche — Claude's deep analysis finds the overlap between passion and money.",
  "prompt": "I want you to act as a niche-market analyst. Interview me first: ask me 10 questions about my skills, interests, available time, budget, equipment, and income goals. Wait for my answers, then analyze them and recommend the 5 most profitable content niches for me in 2026, ranked with: 1) Why each niche fits my profile, 2) Realistic revenue models and earning timelines, 3) Competition level and how to differentiate, 4) Best platform and format (long-form, shorts, reels), 5) A concrete 60-day launch plan for the number-one niche. Be brutally honest about which niches I should AVOID and why. Start by asking me the 10 questions now.",
  "howto": [
    "Open Claude and paste the full prompt above.",
    "Answer all 10 interview questions honestly and in detail.",
    "Review the 5 recommended niches and their revenue timelines.",
    "Pick the number-one niche and ask Claude to expand the 60-day plan.",
    "Combine with the faceless channel planner for a full launch system."
  ],
  "tips": [
    "Redo this quarterly — your skills and the market both change.",
    "The 'niches to avoid' list saves months of wasted effort."
  ],
  "tags": [
    "creator-niche",
    "youtube",
    "niche-discovery",
    "strategy",
    "facebook"
  ],
  "trending": false,
  "popularity": 90
},
{
  "id": "frozen-splash-macro-veo3",
  "title": "Frozen Splash Macro — Veo 3 Prompt for Slow-Motion TikTok Niches",
  "category": "Video Prompts",
  "tool": "Veo 3",
  "difficulty": "Beginner",
  "desc": "Ultra-slow-motion water splash macro clips that stop thumbs mid-scroll — perfect for a faceless satisfying-content TikTok niche.",
  "prompt": "Ultra-slow-motion macro video of a single water droplet hitting a still pool, crown-shaped splash rising in extreme detail, filmed at 960fps, backlit with a warm sunset glow, jewel-toned blue and amber colors, crystalline droplets suspended mid-air, dark elegant background, liquid sculpture aesthetic, photorealistic 4K, satisfying physics, seamless loop-friendly composition.",
  "howto": [
    "Open Veo 3 and paste the full prompt above.",
    "Vary the liquid in each render: water, milk, ink, melted chocolate.",
    "Ask Veo 3 for a 5-8 second clip so it loops cleanly on TikTok.",
    "Generate 10 variations in one batch — this is a volume niche.",
    "Post 1-3 clips daily with a trending satisfying-audio sound."
  ],
  "tips": [
    "Swap the background color weekly (black, deep teal, warm gold) to keep the feed fresh.",
    "Alternate liquids keep viewers commenting 'what liquid is next?' — reply to every one."
  ],
  "tags": [
    "creator-niche",
    "tiktok",
    "slow-motion",
    "satisfying",
    "faceless"
  ],
  "trending": false,
  "popularity": 92
},
{
  "id": "impossible-elevator-reveal-kling",
  "title": "Impossible Elevator Reveal — Kling Prompt for Viral TikTok Transitions",
  "category": "Video Prompts",
  "tool": "Kling",
  "difficulty": "Intermediate",
  "desc": "Seamless 'impossible space' elevator transition clips — the format behind the fastest-growing TikTok transition pages.",
  "prompt": "First-person video: camera stands inside a small vintage elevator as the doors close, ding, doors reopen onto an impossible location — a tropical waterfall cave, neon cyberpunk alley, zero-gravity space station. Smooth camera push-in through the doorway, realistic motion, cinematic lighting matching the new world, 4K, hyper-smooth transition moment, vertical 9:16 framing, viral reveal energy.",
  "howto": [
    "Open Kling and paste the full prompt above.",
    "Swap the 'impossible location' for each clip — keep a list of 20 locations.",
    "Set vertical 9:16 output for TikTok and Reels.",
    "Time the reveal to hit exactly on a music drop.",
    "Post a series: 'Elevator to impossible places #7' — numbering drives follows."
  ],
  "tips": [
    "Use Kling's image-to-video mode with a real elevator photo as the start frame for extra realism.",
    "The weirder the location swap, the higher the watch-through — caves and underwater worlds win."
  ],
  "tags": [
    "creator-niche",
    "tiktok",
    "transitions",
    "viral-format"
  ],
  "trending": false,
  "popularity": 95
},
{
  "id": "foggy-abandoned-park-sora",
  "title": "Foggy Abandoned Amusement Park — Sora Prompt for Mystery YouTube Niches",
  "category": "Video Prompts",
  "tool": "Sora",
  "difficulty": "Intermediate",
  "desc": "Eerie slow drone-style shots of abandoned theme parks in morning fog — the look that powers mystery and urbex-adjacent faceless channels.",
  "prompt": "Slow aerial drone shot drifting through an abandoned amusement park at dawn, thick fog rolling between a rusted Ferris wheel and collapsed roller coaster tracks, vines and moss reclaiming the rides, moody desaturated teal and gray palette with one warm sunbeam breaking through, crows flying across frame, hauntingly beautiful atmosphere, cinematic 24fps, photorealistic, mystery-documentary tone, no people.",
  "howto": [
    "Open Sora and paste the full prompt above.",
    "Request a slow, continuous drift — no cuts — so it reads as drone footage.",
    "Vary the location each time: waterparks, malls, cruise ships, zoos.",
    "Pair with soft ambient narration or dark piano audio.",
    "Publish as 60-90 second shorts with a text teaser: 'This place shut down in 1998.'"
  ],
  "tips": [
    "Add a one-line fictional backstory per park in the caption — comments explode with theories.",
    "The fog is the star: ask Sora for 'thick atmospheric fog' in every render."
  ],
  "tags": [
    "creator-niche",
    "youtube",
    "mystery",
    "faceless",
    "aerial"
  ],
  "trending": false,
  "popularity": 88
},
{
  "id": "living-vintage-travel-posters-runway",
  "title": "Living Vintage Travel Posters — Runway Prompt for Instagram Theme Pages",
  "category": "Video Prompts",
  "tool": "Runway",
  "difficulty": "Beginner",
  "desc": "Retro travel posters that come alive with gentle motion — a scroll-stopping aesthetic for Instagram theme pages.",
  "prompt": "A vintage 1950s travel poster of the Swiss Alps come to life: painted clouds drift slowly, the mountain train puffs gentle steam, birds cross the painted sky, subtle film grain and paper texture, warm nostalgic color palette of teal, cream and burnt orange, the poster's bold title typography stays crisp and static, elegant looping motion, stylized illustration aesthetic, 4K.",
  "howto": [
    "Open Runway and paste the full prompt above.",
    "Start from a real vintage poster image (image-to-video) for the authentic texture.",
    "Keep motion subtle — 20% of what you think is enough.",
    "Caption each post with the poster's year and destination.",
    "Post 1 daily at the same hour to train the algorithm."
  ],
  "tips": [
    "Ask Runway to 'keep the typography perfectly still' so the poster stays readable.",
    "Rotate continents weekly — Japan posters consistently get the most saves."
  ],
  "tags": [
    "creator-niche",
    "instagram",
    "travel",
    "vintage",
    "theme-page"
  ],
  "trending": false,
  "popularity": 86
},
{
  "id": "galaxy-paint-pour-macro-flow",
  "title": "Galaxy Paint Pour Macro — Google Flow Prompt for Satisfying Reels",
  "category": "Video Prompts",
  "tool": "Google Flow",
  "difficulty": "Beginner",
  "desc": "Hypnotic galaxy-colored paint pours in extreme macro — the satisfying-content format that dominates Reels and TikTok saves.",
  "prompt": "Extreme macro video of metallic galaxy paint pouring in slow motion: deep purple, electric blue and molten gold acrylic swirling together into nebula-like patterns, glossy surface reflections, tiny iridescent glitter particles drifting through, studio lighting on a black canvas, mesmerizing fluid dynamics, ultra-detailed 4K, oddly satisfying, loop-friendly ending.",
  "howto": [
    "Open Google Flow and paste the full prompt above.",
    "Change the color palette every clip — viewers collect their favorites.",
    "Ask for 6-10 second clips that loop seamlessly.",
    "Layer a satisfying ASMR-style audio track underneath.",
    "End each caption with a question: 'Ocean or galaxy palette?'"
  ],
  "tips": [
    "Neon-on-black palettes get the highest save rates in this niche.",
    "Batch-render 15 clips on Sunday, drip-feed them all week."
  ],
  "tags": [
    "creator-niche",
    "instagram",
    "tiktok",
    "satisfying",
    "art"
  ],
  "trending": false,
  "popularity": 91
},
{
  "id": "sunrise-ancient-ruins-drone-veo3",
  "title": "Sunrise Over Ancient Ruins — Veo 3 Prompt for Faceless YouTube Channels",
  "category": "Video Prompts",
  "tool": "Veo 3",
  "difficulty": "Intermediate",
  "desc": "Golden-hour drone flyovers of ancient ruins — premium-looking B-roll for faceless history and travel channels.",
  "prompt": "Cinematic drone flyover of ancient Roman ruins at sunrise: camera glides low over broken marble columns toward a grand half-standing temple, golden light flaring through the arches, mist lifting off wild grass, distant mountains turning pink, birds scattering as the drone passes, epic scale, photorealistic, 24fps film look, sweeping orchestral mood, no people, 4K.",
  "howto": [
    "Open Veo 3 and paste the full prompt above.",
    "Swap the civilization per video: Rome, Egypt, Maya, Angkor, Petra.",
    "Request a low, slow push-in — it reads as professional drone work.",
    "Use these as the opening 8 seconds of history explainer videos.",
    "Add a location name and year in on-screen text for authority."
  ],
  "tips": [
    "Always keep 'no people' in the prompt — empty ruins feel more epic.",
    "Egypt and Petra variants pull the strongest click-through in testing."
  ],
  "tags": [
    "creator-niche",
    "youtube",
    "history",
    "travel",
    "faceless"
  ],
  "trending": false,
  "popularity": 90
},
{
  "id": "cute-monster-cafe-midjourney",
  "title": "Cute Monster Café Characters — Midjourney Prompt for Instagram Character Pages",
  "category": "Image Prompts",
  "tool": "Midjourney",
  "difficulty": "Beginner",
  "desc": "Adorable monster baristas in a cozy café world — the character-IP niche that turns followers into a collectible fandom.",
  "prompt": "Pixar-style character portrait of a cute fluffy monster barista with big round eyes and tiny horns, wearing a miniature apron, pouring a latte with a tiny heart in the foam, cozy warm café interior with wooden counters and hanging plants, soft morning light, ultra-detailed fur, kawaii aesthetic, warm color palette, 8k illustration, character sheet consistency, --ar 4:5 --style cute --v 6",
  "howto": [
    "Open Midjourney and paste the full prompt above.",
    "Generate a recurring cast: keep the same monster species across posts.",
    "Vary the scenario daily: latte art, baking, rainy day café, holiday specials.",
    "Post as carousels — 4 monsters per carousel multiplies engagement.",
    "Name each monster and pin a 'meet the crew' post."
  ],
  "tips": [
    "Add '--cref' with your first monster's image URL to keep the character consistent across posts.",
    "Give the café a name and hashtag it — fandoms form around places, not just faces."
  ],
  "tags": [
    "creator-niche",
    "instagram",
    "characters",
    "cute",
    "theme-page"
  ],
  "trending": false,
  "popularity": 87
},
{
  "id": "niche-crossover-machine-chatgpt",
  "title": "Niche Crossover Machine — ChatGPT Prompt to Fuse Two Niches Into One Viral Channel",
  "category": "Text Prompts",
  "tool": "ChatGPT",
  "difficulty": "Advanced",
  "desc": "A niche-discovery engine that fuses two unrelated niches into one original channel concept with zero direct competition.",
  "prompt": "Act as a viral-content strategist. I will give you TWO niches, and you will fuse them into 10 original channel concepts that have never existed. For each concept: 1) The fusion name and one-line premise. 2) Exactly why the crossover creates novelty (the psychological hook). 3) Three content series that could run forever. 4) The target audience overlap and where to find them. 5) A competition check — why no existing channel owns this. 6) Monetization paths unique to this crossover. My two niches are: [NICHE 1] and [NICHE 2]. Rank the 10 concepts from most to least viable for 2026, and for the top 3 give me 5 video titles each that would work as the launch videos.",
  "howto": [
    "Open ChatGPT and paste the full prompt above.",
    "Fill in two niches you genuinely like — passion fuels consistency.",
    "Run the fusion twice with different niche pairs and compare outputs.",
    "Pick the top concept and ask ChatGPT for a 30-video launch calendar.",
    "Launch with the 5 recommended launch videos, one per day."
  ],
  "tips": [
    "Fuse one big niche with one tiny one — the tiny one brings the novelty.",
    "Ask ChatGPT to re-rank after you share your first month's analytics."
  ],
  "tags": [
    "creator-niche",
    "niche-discovery",
    "youtube",
    "tiktok",
    "strategy"
  ],
  "trending": false,
  "popularity": 96
},
{
  "id": "viral-sound-forecaster-gemini",
  "title": "Viral Sound Forecaster — Gemini Prompt to Predict the Next TikTok Audio Trend",
  "category": "Text Prompts",
  "tool": "Gemini",
  "difficulty": "Intermediate",
  "desc": "Turn Gemini into a trend-spotting radar that predicts which audios will blow up on TikTok before they peak.",
  "prompt": "Act as a TikTok trend analyst with real-time pattern recognition. I will describe 5 audios that are currently rising on my For You page. For each: 1) Identify the audio's emotional hook and which creator niches it fits. 2) Estimate its trend stage: emerging, climbing, peaked, or dying. 3) Predict which niches will adopt it next and in what video format. 4) Give me 3 video concepts for MY niche that use this audio while it is still climbing. My niche is: [MY NICHE]. Here are the 5 audios: [DESCRIBE EACH — lyrics, vibe, how creators are using it]. Output a ranked list of which audio I should film for TODAY, with the reasoning for each rank.",
  "howto": [
    "Open Gemini and paste the full prompt above.",
    "Describe the audios accurately — include lyrics, mood, and usage patterns.",
    "Run this every 2-3 days; audio trends move fast.",
    "Film for the #1 ranked audio within hours of the analysis.",
    "Track which predictions hit and feed results back to Gemini to sharpen it."
  ],
  "tips": [
    "Rising audios with under 10K uses are the sweet spot — early enough to ride the wave.",
    "Ask Gemini to explain its trend-stage reasoning so you learn the pattern yourself."
  ],
  "tags": [
    "creator-niche",
    "tiktok",
    "trends",
    "audio",
    "strategy"
  ],
  "trending": false,
  "popularity": 94
},
{
  "id": "competitor-gap-autopsy-claude",
  "title": "Competitor Gap Autopsy — Claude Prompt to Find What Top Channels Miss",
  "category": "Text Prompts",
  "tool": "Claude",
  "difficulty": "Advanced",
  "desc": "A deep competitor audit that finds the exact gaps top channels in your niche leave open — then hands you a plan to fill them.",
  "prompt": "Act as a competitive-intelligence analyst for content creators. I will list 5 top channels/pages in my niche with a short description of what each does. Your job: 1) Map each competitor's content pillars, posting cadence, and audience engagement style. 2) Identify the GAPS — topics, formats, audience segments, and platforms all 5 are ignoring. 3) Rank the gaps by opportunity size for a new creator in 2026. 4) For the top 3 gaps, design a 10-video content sprint I could run in the first month. 5) Write the positioning statement for my channel that owns the biggest gap. 6) List the 3 traps to avoid that these competitors fell into. My niche is [NICHE]. Here are the 5 competitors: [NAME + DESCRIPTION each]. Be specific and evidence-based, not generic.",
  "howto": [
    "Open Claude and paste the full prompt above.",
    "Fill in 5 real competitors with accurate descriptions of their content.",
    "Study the gap ranking — pick ONE gap, not all three, to start.",
    "Ask Claude to expand the winning gap into a 30-day calendar.",
    "Re-run the autopsy quarterly as competitors evolve."
  ],
  "tips": [
    "Include one competitor from a DIFFERENT platform — cross-platform gaps are the biggest opportunities.",
    "The 'traps to avoid' section is gold — it keeps you from copying their ceiling."
  ],
  "tags": [
    "creator-niche",
    "niche-discovery",
    "youtube",
    "facebook",
    "instagram",
    "strategy"
  ],
  "trending": false,
  "popularity": 97
},
{
  "id": "tiny-chef-giant-kitchen-veo3",
  "title": "Tiny Chef's Giant Kitchen — Veo 3 Prompt for Viral TikTok Food Niches",
  "category": "Video Prompts",
  "tool": "Veo 3",
  "difficulty": "Beginner",
  "desc": "A thumb-sized chef cooking a feast inside a giant human kitchen — the mini-world food niche viewers can't stop watching.",
  "prompt": "A tiny miniature chef, no taller than a coffee mug, cooking in a giant human kitchen. He climbs a towering stack of pancakes like stairs, flips a colossal burger patty with a spatula bigger than his body, and slides down a giant wooden spoon like a slide. Warm golden kitchen lighting, steam rising from a huge pot, photorealistic detail, cozy and whimsical, vertical 9:16 framing, camera follows the chef's every move, ultra sharp macro cinematography, satisfying miniature food action, no text, no watermark",
  "howto": [
    "Open Veo 3 and start a new video generation.",
    "Paste the full prompt above into the prompt box.",
    "Set aspect ratio to 9:16 and duration to 8 seconds for TikTok.",
    "Generate 3-4 variations with different dishes (pizza, ramen, pancakes).",
    "Chain the best clips into a 20-second mini-story: prep, cook, serve.",
    "Post with a trending food audio and niche hashtags like #tinyfood."
  ],
  "tips": [
    "Mini-world food clips average 3x the watch time of normal cooking videos — lean into the scale contrast.",
    "Keep the chef's outfit consistent across clips so viewers recognize your series."
  ],
  "tags": [
    "creator-niche",
    "tiktok",
    "food",
    "miniature",
    "viral-content"
  ],
  "trending": true,
  "popularity": 96
},
{
  "id": "slowmo-skatepark-stunts-kling",
  "title": "Slow-Mo Skatepark Stunts — Kling Prompt for Viral TikTok Sports Niches",
  "category": "Video Prompts",
  "tool": "Kling",
  "difficulty": "Intermediate",
  "desc": "Cinematic slow-motion skateboard tricks with dust, drama, and perfect landings — built for sports niche TikTok pages.",
  "prompt": "Ultra slow-motion skateboarder landing a massive kickflip down a concrete stair set at a sunlit skatepark. Dust explodes from the wheels, the board spins frozen mid-air, the rider's face shows total focus. Golden hour light, low camera angle, gritty urban energy, shallow depth of field, 120fps look, 9:16 vertical, cinematic sports-documentary color grade, no logos, no text overlays",
  "howto": [
    "Open Kling and create a new text-to-video generation.",
    "Paste the prompt above and set duration to 5 seconds.",
    "Set aspect ratio to 9:16 for TikTok and Reels.",
    "Generate 5 variations: different tricks (ollie, 360 shuvit, heelflip).",
    "Cut the best moments into a rapid 15-second compilation.",
    "Add a heavy bass drop sound effect on each landing for impact."
  ],
  "tips": [
    "Kling renders fast motion best in short 5-second generations — don't stretch one trick too long.",
    "Pair with trending sports audios; the algorithm loves sports-niche content."
  ],
  "tags": [
    "creator-niche",
    "tiktok",
    "sports",
    "slow-motion",
    "viral-content"
  ],
  "trending": false,
  "popularity": 88
},
{
  "id": "microbial-world-safari-sora",
  "title": "Microbial World Safari — Sora Prompt for YouTube Science Niches",
  "category": "Video Prompts",
  "tool": "Sora",
  "difficulty": "Advanced",
  "desc": "A cinematic expedition through a microscopic world — glowing organisms, drifting particles, documentary narration feel.",
  "prompt": "Cinematic nature-documentary footage of a microscopic world: glowing amoeba-like creatures pulsing with bioluminescent light, tiny hair-like cilia rippling in waves, drifting golden particles floating like dust in sunlight. Camera glides slowly through the alien landscape as if on a safari, deep-focus macro cinematography, rich teal and amber color palette, sense of wonder and scale, 16:9, photorealistic CGI-quality detail, calm and hypnotic, no narration text on screen",
  "howto": [
    "Open Sora and start a new video generation.",
    "Paste the prompt above and choose 16:9 aspect ratio.",
    "Generate at the longest duration available for smooth gliding shots.",
    "Make 3-4 clips exploring different 'regions' of the microscopic world.",
    "Assemble into a 60-second safari with chapter-style text overlays.",
    "Add your own documentary-style voiceover naming each 'species'."
  ],
  "tips": [
    "Science niches have loyal audiences — a 'micro safari' series gives viewers a reason to subscribe.",
    "Keep camera movement slow; fast motion breaks the documentary illusion."
  ],
  "tags": [
    "creator-niche",
    "youtube",
    "science",
    "documentary",
    "viral-content"
  ],
  "trending": false,
  "popularity": 91
},
{
  "id": "graffiti-wall-come-alive-runway",
  "title": "Graffiti Wall Come Alive — Runway Prompt for Urban Art TikTok Niches",
  "category": "Video Prompts",
  "tool": "Runway",
  "difficulty": "Intermediate",
  "desc": "Street art that wakes up and moves — spray-painted characters climbing off the brick wall in vivid urban color.",
  "prompt": "A colorful graffiti mural on a city brick wall slowly comes to life: a spray-painted dragon peels off the bricks and flies in a loop, painted drips flow like water, a cartoon character waves at the camera then steps back into the wall. Raw urban texture, wet-paint shine, vibrant neon and pastel colors, handheld camera energy, slight film grain, 9:16 vertical, magical-realism street art fantasy, photorealistic brick detail, no text",
  "howto": [
    "Open Runway and start a new text-to-video generation.",
    "Paste the prompt above and set aspect ratio to 9:16.",
    "Generate at medium duration for smooth character motion.",
    "Try 3 variations with different mural subjects (dragon, astronaut, robot).",
    "Trim the best 6-second loop and export.",
    "Post with urban hip-hop audio for maximum niche engagement."
  ],
  "tips": [
    "The 'art comes alive' effect performs best when the wall texture stays photorealistic — don't let it go cartoonish.",
    "Film the first frame like a normal street photo so the reveal hits harder."
  ],
  "tags": [
    "creator-niche",
    "tiktok",
    "art",
    "animation",
    "viral-content"
  ],
  "trending": true,
  "popularity": 93
},
{
  "id": "fishbowl-ocean-storm-flow",
  "title": "Fishbowl Ocean Storm — Google Flow Prompt for Satisfying Reels",
  "category": "Video Prompts",
  "tool": "Google Flow",
  "difficulty": "Beginner",
  "desc": "A whole ocean storm raging inside a glass fishbowl — tiny waves, lightning flashes, pure satisfying-loop material.",
  "prompt": "A round glass fishbowl sitting on a wooden table contains an entire miniature ocean storm: tiny crashing waves, flashes of lightning illuminating the water from inside, miniature rain streaking down the glass. Cozy room background softly blurred, dramatic contrast between the calm room and the raging storm in the bowl, hyper-detailed water physics, cinematic lighting, vertical 9:16, mesmerizing and satisfying, loopable motion, no text, no people",
  "howto": [
    "Open Google Flow and start a new video generation.",
    "Paste the prompt above and select 9:16 vertical output.",
    "Generate a 5-second clip designed to loop seamlessly.",
    "Test the loop by playing the clip on repeat — waves should cycle cleanly.",
    "Create variations: storm, calm sunset ocean, frozen arctic sea in the bowl.",
    "Post as a series — viewers binge-watch miniature-world content."
  ],
  "tips": [
    "Seamless loops get rewatched automatically, which the algorithm reads as high retention.",
    "Keep the room background identical across the series for a recognizable brand look."
  ],
  "tags": [
    "creator-niche",
    "instagram",
    "satisfying",
    "loops",
    "viral-content"
  ],
  "trending": false,
  "popularity": 89
},
{
  "id": "desert-dune-surfing-veo3",
  "title": "Desert Dune Surfing — Veo 3 Prompt for Adventure TikTok Niches",
  "category": "Video Prompts",
  "tool": "Veo 3",
  "difficulty": "Intermediate",
  "desc": "Sandboarders carving giant golden dunes at sunset — cinematic adventure content for outdoor niche pages.",
  "prompt": "Epic cinematic shot of sandboarders carving down massive golden desert dunes at sunset, sand spraying like ocean spray, dramatic long shadows, drone-follow camera chasing the lead rider, deep orange and purple sky, sense of speed and freedom, 9:16 vertical, action-sports documentary style, ultra detailed sand texture, warm cinematic color grade, adrenaline and beauty, no text overlays, no logos",
  "howto": [
    "Open Veo 3 and start a new video generation.",
    "Paste the prompt above and set aspect ratio to 9:16.",
    "Generate 4-5 clips at different times of day (sunset, sunrise, midday).",
    "Pick the most dramatic carve and trim to 7 seconds.",
    "Add a cinematic whoosh sound on every turn.",
    "Caption with the location vibe — adventure niches thrive on place fantasy."
  ],
  "tips": [
    "Sunset generations have richer color than midday — always prefer golden hour in your prompt.",
    "Adventure niches convert viewers to followers fast; pin your best dune clip."
  ],
  "tags": [
    "creator-niche",
    "tiktok",
    "adventure",
    "travel",
    "viral-content"
  ],
  "trending": false,
  "popularity": 90
},
{
  "id": "surreal-floating-islands-midjourney",
  "title": "Surreal Floating Islands — Midjourney Prompt for Instagram Fantasy Art Pages",
  "category": "Image Prompts",
  "tool": "Midjourney",
  "difficulty": "Beginner",
  "desc": "Dreamlike floating islands with waterfalls, tiny cabins, and glowing skies — art that stops the scroll.",
  "prompt": "Surreal floating island drifting in a pastel sky, a tiny glowing cabin perched on green moss, a waterfall pouring off the island's edge into clouds below, flocks of small birds circling, soft pink and lavender sunset light, dreamlike fantasy digital art, ultra detailed, volumetric lighting, intricate tiny details to discover, 4:5 portrait composition, breathtaking and serene, no text, no watermark",
  "howto": [
    "Open Midjourney and paste the prompt into the imagine bar.",
    "Add --ar 4:5 for Instagram portrait format.",
    "Generate 4 variations and upscale your favorite.",
    "Create a series: 5 islands with different moods (sunset, storm, dawn, night, autumn).",
    "Post one island per day as a collectible series.",
    "Ask followers in the caption which island they'd live on — drives comments."
  ],
  "tips": [
    "Floating-island art gets saved at very high rates — saves are Instagram's strongest ranking signal.",
    "Keep the cabin small in frame; tiny details make viewers zoom in and stare."
  ],
  "tags": [
    "creator-niche",
    "instagram",
    "fantasy",
    "wallpaper",
    "viral-content"
  ],
  "trending": false,
  "popularity": 87
},
{
  "id": "low-competition-shorts-niches-chatgpt",
  "title": "Low-Competition Shorts Niches — ChatGPT Prompt for Underserved 2026 Niche Ideas",
  "category": "Text Prompts",
  "tool": "ChatGPT",
  "difficulty": "Intermediate",
  "desc": "A niche-discovery prompt that hunts down underserved YouTube Shorts niches with real demand and weak competition.",
  "prompt": "Act as a YouTube Shorts niche strategist with deep knowledge of the 2026 creator landscape. Your task: find me 10 underserved Shorts niches I could launch this month. For each niche, provide: 1) The niche name and a one-line concept. 2) Why it has real viewer demand right now (what trend or curiosity gap drives it). 3) Evidence the competition is weak (what's missing from existing channels). 4) Whether it's faceless-friendly and what tools I'd need (AI video, stock, filming). 5) 5 video ideas that would work in the first week. 6) A competition score from 1-10 and a demand score from 1-10. My constraints: [FACELESS or ON-CAMERA], [LANGUAGES I SPEAK], [TOPICS I LIKE / DISLIKE], [TIME PER WEEK]. Rank the 10 niches by opportunity score and tell me which ONE to pick and why. Be specific — no generic niches like 'motivation' or 'facts'.",
  "howto": [
    "Open ChatGPT and paste the full prompt above.",
    "Fill in your constraints honestly — the output is only as good as your inputs.",
    "Study the opportunity scores; shortlist the top 3 niches.",
    "For each finalist, ask ChatGPT for 30 channel-name ideas.",
    "Search each niche on YouTube to verify the competition really is weak.",
    "Pick ONE niche and commit to 30 Shorts before judging it."
  ],
  "tips": [
    "Niches with demand 8+ and competition under 4 are rare — treat them like gold and move fast.",
    "Re-run this prompt every quarter; underserved niches fill up quickly."
  ],
  "tags": [
    "creator-niche",
    "niche-discovery",
    "youtube",
    "shorts",
    "strategy"
  ],
  "trending": false,
  "popularity": 95
},
{
  "id": "retention-architect-gemini",
  "title": "Retention Architect — Gemini Prompt to Engineer High-Retention Scripts",
  "category": "Text Prompts",
  "tool": "Gemini",
  "difficulty": "Advanced",
  "desc": "Turn Gemini into a retention engineer that rewrites your scripts beat-by-beat for maximum watch time.",
  "prompt": "Act as a video retention engineer who has studied thousands of viral short-form and long-form videos. I will paste my video script. Your job: 1) Score the script's retention strength from 1-100 with reasoning. 2) Rewrite the opening 3 seconds into 3 alternative hooks — each under 12 words, each creating an open loop. 3) Mark every line where viewers are likely to swipe away, and explain why. 4) Insert a pattern interrupt (visual cue, question, or twist) every 5-8 seconds in the rewrite. 5) Add one curiosity gap in the middle that pays off only at the end. 6) Rewrite the call-to-action so it feels like a natural continuation, not an ad. 7) Give me a second-by-second retention curve prediction for the rewritten script. My niche is [NICHE] and my platform is [YOUTUBE / TIKTOK / INSTAGRAM]. Here is my script: [PASTE SCRIPT]. Be ruthless — cut anything that doesn't earn the next second of attention.",
  "howto": [
    "Open Gemini and paste the full prompt above with your script.",
    "Fill in your niche and platform so the rewrite matches the format.",
    "Compare the original and rewritten retention curves.",
    "Apply the top 3 fixes even if you don't use the full rewrite.",
    "Film the 3 alternative hooks as separate videos and test which wins.",
    "Build a checklist from Gemini's feedback and apply it to every future script."
  ],
  "tips": [
    "The 3-second hook test is the highest-leverage use — test hooks before filming the whole video.",
    "Ask Gemini to explain each swipe-away point so you learn the pattern, not just the fix."
  ],
  "tags": [
    "creator-niche",
    "youtube",
    "tiktok",
    "scripts",
    "viral-content"
  ],
  "trending": false,
  "popularity": 98
},
{
  "id": "audience-avatar-builder-claude",
  "title": "Audience Avatar Builder — Claude Prompt to Define Your Niche's Perfect Viewer",
  "category": "Text Prompts",
  "tool": "Claude",
  "difficulty": "Beginner",
  "desc": "Build a crystal-clear picture of your ideal viewer so every video, thumbnail, and title speaks to one real person.",
  "prompt": "Act as an audience researcher for content creators. I will describe my niche and content style. Your job: build my perfect viewer's avatar. 1) Give them a name, age, location, and daily routine. 2) Describe the 3 biggest frustrations or curiosities that make them watch videos like mine. 3) List the 5 YouTube channels or TikTok accounts they already follow and what each gives them that I don't yet. 4) Write the exact words they'd type into search when they're bored at 11pm — 10 search phrases. 5) Describe the thumbnail style that would make THEM stop scrolling (colors, faces, text style). 6) Tell me the 3 topics I should NEVER make because this viewer wouldn't care. 7) Give me 10 video titles written exactly how this viewer thinks. My niche is [NICHE]. My content style is [FACELESS / ON-CAMERA / AI-GENERATED]. Be specific and vivid — this person should feel real enough to picture in the room.",
  "howto": [
    "Open Claude and paste the full prompt above.",
    "Describe your niche and content style in detail.",
    "Read the avatar like a character sheet — print it or pin it.",
    "Use the 10 search phrases as your next 10 video titles.",
    "Check every thumbnail against the avatar's taste before posting.",
    "Rebuild the avatar when you pivot niches or platforms."
  ],
  "tips": [
    "Channels that speak to ONE specific viewer grow faster than channels speaking to 'everyone'.",
    "The 'never make' list saves you months of wasted videos — respect it."
  ],
  "tags": [
    "creator-niche",
    "niche-discovery",
    "youtube",
    "audience",
    "strategy"
  ],
  "trending": false,
  "popularity": 92
},
  {
    "id": "crystal-cave-bloom-veo3",
    "title": "Crystal Cave Bloom — Veo 3 Prompt for Satisfying TikTok Niches",
    "category": "Video Prompts",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "A glowing crystal cave blooming like a living flower — neon mineral formations pulsing with light. Pure satisfying-loop material for faceless TikTok pages.",
    "prompt": "Breathtaking macro time-lapse inside a glowing crystal cave, translucent amethyst and quartz crystals blooming outward like flowers, their facets pulsing with shifting neon light — violet, cyan, and rose-gold. Camera drifts slowly through the cavern in one hypnotic glide, dewdrop-like light refractions dancing across the rock walls, tiny crystal shards glittering as they form. Volumetric god-rays cutting through soft mist, ultra-detailed mineral textures, surreal otherworldly glow, seamless loop motion, photorealistic, 9:16 vertical, no people, no text, no watermark",
    "howto": [
      "Open Veo 3 and start a new text-to-video generation.",
      "Paste the full prompt above and set aspect ratio to 9:16 vertical.",
      "Generate 3 variations with different color palettes (violet, emerald, ruby).",
      "Pick the clip whose bloom motion feels the smoothest and trim to a seamless 6-second loop.",
      "Post with satisfying/ASMR hashtags and pin the best-performing colorway."
    ],
    "tips": [
      "Seamless loops get watched 3-5x on autoplay — that repeated view time is exactly what pushes satisfying clips viral.",
      "Run a color series (one new crystal color per week) so viewers come back to collect them all."
    ],
    "tags": [
      "creator-niche",
      "tiktok",
      "satisfying",
      "crystal",
      "viral-content"
    ],
    "trending": true,
    "popularity": 94
  },
  {
    "id": "rubber-hose-cartoon-kling",
    "title": "Rubber-Hose Cartoon Revival — Kling Prompt for Nostalgia YouTube Niches",
    "category": "Video Prompts",
    "tool": "Kling",
    "difficulty": "Intermediate",
    "desc": "A bouncy 1930s rubber-hose cartoon clip — pie eyes, noodle limbs, ragtime energy. The nostalgia niche that boomers and Gen Z both binge.",
    "prompt": "Vintage 1930s rubber-hose cartoon animation: a cheerful pie-eyed mouse character with noodle arms dances across a grainy black-and-white stage, bouncing to an invisible ragtime beat, oversized white gloves spinning a cane while a mischievous cat bandmate toots a trumpet. Choppy hand-drawn frame wobble, flickering film grain and dust scratches, iris-in opening, exaggerated squash-and-stretch motion, monochrome with warm sepia tint, joyful nostalgic energy, 16:9, no modern elements, no text, no watermark",
    "howto": [
      "Open Kling and start a new text-to-video generation.",
      "Paste the prompt and set 16:9 for YouTube (or 9:16 for Shorts).",
      "Generate 3-4 clips and scrub frame by frame — the character design must stay consistent.",
      "Layer public-domain ragtime audio under the clip so the bounce syncs to the beat.",
      "Add a subtle film-grain overlay in your editor for authentic vintage texture.",
      "Post as the first episode of a weekly 'one gag per week' cartoon series."
    ],
    "tips": [
      "Keep exactly ONE character on screen per clip — extra characters are where AI cartoon generations break.",
      "Nostalgia content gets shared by older viewers to their kids, doubling your reach across generations."
    ],
    "tags": [
      "creator-niche",
      "youtube",
      "nostalgia",
      "cartoon",
      "viral-content"
    ],
    "trending": false,
    "popularity": 88
  },
  {
    "id": "deserted-mall-decay-sora",
    "title": "Deserted Mall Decay — Sora Prompt for Mystery YouTube Niches",
    "category": "Video Prompts",
    "tool": "Sora",
    "difficulty": "Intermediate",
    "desc": "A dead shopping mall slowly decaying in hyperlapse — sunlight creeping across the empty food court as plants take over. Mystery channels eat this up.",
    "prompt": "Haunting cinematic hyperlapse inside a deserted 1990s shopping mall, dawn light creeping through the skylights across an empty food court, plastic chairs stacked and dusty, ferns and moss pushing through cracked tiles, a collapsed ceiling panel letting a waterfall of vines hang down. Camera glides slowly through the atrium in one continuous move, floating dust glowing in the light shafts, faded store signs, eerie quiet grandeur, overgrown liminal beauty, photorealistic, 16:9, no people, no text, no readable logos, no watermark",
    "howto": [
      "Open Sora and start a new text-to-video generation.",
      "Paste the prompt and set aspect ratio to 16:9 with a 10-second duration.",
      "Emphasize 'slow glide' so the camera move stays cinematic and controlled.",
      "Check for readable brand logos on storefronts — regenerate if any appear.",
      "Layer hollow echo ambience (footsteps, distant drips) under the clip.",
      "Chain a dawn clip with a dusk variant for a before/after decay mini-series."
    ],
    "tips": [
      "Abandoned-places content has obsessive watch time — pair it with calm lo-fi narration for maximum retention.",
      "Never imply a real location is abandoned if it isn't — keep it fictional to avoid defamation issues."
    ],
    "tags": [
      "creator-niche",
      "youtube",
      "mystery",
      "urbex",
      "viral-content"
    ],
    "trending": true,
    "popularity": 93
  },
  {
    "id": "neon-rain-cyberpunk-runway",
    "title": "Neon Rain Cyberpunk Streets — Runway Prompt for TikTok Aesthetic Pages",
    "category": "Video Prompts",
    "tool": "Runway",
    "difficulty": "Beginner",
    "desc": "A rain-soaked cyberpunk street glowing with neon reflections — cinematic loop clips for aesthetic TikTok pages.",
    "prompt": "Cinematic rain-soaked cyberpunk street at night, neon signs in pink and cyan reflecting off wet asphalt, steam rising from a grate, a lone figure with an umbrella crossing in the distance. Camera pushes slowly forward through the rain, bokeh light orbs floating, holographic billboards flickering above noodle bars and lantern-lit alleys, rain streaks catching the light, moody synthwave atmosphere, ultra-detailed reflections, photorealistic, 9:16 vertical, seamless loop motion, no readable text, no watermark",
    "howto": [
      "Open Runway and start a new text-to-video generation.",
      "Paste the prompt and set 9:16 vertical with a 5-second duration.",
      "Generate 4 weather variants: heavy rain, light drizzle, thick fog, distant storm.",
      "Pick the cleanest loop and check the seam by playing it on repeat.",
      "Layer trending synthwave or phonk audio under the clip.",
      "Post the 4 variants as an aesthetic loop series across the week."
    ],
    "tips": [
      "Loopable rain clips get infinite replays — the algorithm reads replays as deep retention.",
      "Keep neon colors to two (pink + cyan) for a signature look viewers recognize instantly."
    ],
    "tags": [
      "creator-niche",
      "tiktok",
      "aesthetic",
      "cyberpunk",
      "viral-content"
    ],
    "trending": true,
    "popularity": 92
  },
  {
    "id": "zero-gravity-paint-pour-flow",
    "title": "Zero-Gravity Paint Pour — Google Flow Prompt for Satisfying Instagram Reels",
    "category": "Video Prompts",
    "tool": "Google Flow",
    "difficulty": "Beginner",
    "desc": "Liquid paint blooming in zero gravity — ribbons of color colliding mid-air. The satisfying Reels niche's newest obsession.",
    "prompt": "Mesmerizing zero-gravity paint pour in a dark studio: thick ribbons of iridescent turquoise, magenta, and gold paint blooming and colliding in mid-air, droplets suspended and slowly merging into marbled spheres. Camera orbits the floating paint in a slow 360 arc, studio rim lighting catching every glossy swirl, deep black background, macro detail of colors folding into each other, hypnotic weightless motion, photorealistic, 9:16 vertical, loopable, no hands, no text, no watermark",
    "howto": [
      "Open Google Flow and start a new video generation.",
      "Paste the prompt and select 9:16 vertical output.",
      "Generate 3 clips with different color trios (turquoise-magenta-gold, violet-lime-silver, coral-teal-copper).",
      "Trim each to a seamless 5-second loop.",
      "Post the 3 colorways as a carousel so viewers swipe through all of them.",
      "Repeat weekly with a new palette — paint-pour pages thrive on series consistency."
    ],
    "tips": [
      "The deep black background makes colors explode on phone screens — never use a light background for this niche.",
      "Batch 5 palettes in one sitting so you always have a week of content banked."
    ],
    "tags": [
      "creator-niche",
      "instagram",
      "satisfying",
      "paint",
      "viral-content"
    ],
    "trending": false,
    "popularity": 90
  },
  {
    "id": "golden-age-ocean-liner-sora",
    "title": "Golden-Age Ocean Liner POV — Sora Prompt for TikTok History Niches",
    "category": "Video Prompts",
    "tool": "Sora",
    "difficulty": "Intermediate",
    "desc": "A golden-age 1920s ocean liner deck at sunset — brass railings, vintage deck chairs, the romance of old travel. History TikTok's next big niche.",
    "prompt": "Nostalgic POV walk along the first-class deck of a 1920s ocean liner at sunset: gleaming brass railings, striped deck chairs, a string quartet playing on the far deck, passengers in vintage dress strolling past, seagulls over the wake, the vast ocean stretching to a blazing orange horizon. Camera glides forward in a smooth slow dolly, warm film glow, gentle film grain, art-deco elegance, photorealistic, 9:16 vertical, no modern elements, no text, no watermark",
    "howto": [
      "Open Sora and start a new text-to-video generation.",
      "Paste the prompt and set 9:16 vertical with a 10-second duration.",
      "Scrub the clip for anachronisms — modern railings, sneakers, or phones mean regenerate.",
      "Add vintage jazz or swing audio from a copyright-free library.",
      "Caption it with a real ship-era hook (e.g. 'this is how the rich crossed the Atlantic in 1927').",
      "Post as episode one of a 'golden age of travel' series covering trains, airships, and liners."
    ],
    "tips": [
      "Naming a real liner era in the caption triggers comment debates — comments are free reach.",
      "'Golden age' content gets saved and shared heavily; ask viewers which ship to feature next."
    ],
    "tags": [
      "creator-niche",
      "tiktok",
      "history",
      "travel",
      "viral-content"
    ],
    "trending": false,
    "popularity": 89
  },
  {
    "id": "kawaii-food-mascots-midjourney",
    "title": "Kawaii Food Mascots — Midjourney Prompt for Cute Facebook Sticker Pages",
    "category": "Image Prompts",
    "tool": "Midjourney",
    "difficulty": "Beginner",
    "desc": "Adorable kawaii food mascots — a smiling sushi roll, a blushing bubble-tea cup. Cute-character pages that Facebook's algorithm loves.",
    "prompt": "Adorable kawaii food mascot character lineup, chibi style: a smiling sushi roll with rosy cheeks, a blushing bubble-tea cup with a straw arm waving, a happy croissant wearing a tiny chef hat, a giggling strawberry milk carton. Soft pastel background with floating sparkles, big glossy eyes, thick clean outlines, sticker-sheet composition with 4 characters in a 2x2 grid, glossy 3D render, ultra cute, vibrant candy colors --ar 1:1 --v 6",
    "howto": [
      "Open Midjourney and paste the full prompt including the --ar 1:1 --v 6 parameters.",
      "Generate 4 grids and pick the one with the most consistent art style.",
      "Upscale your favorite grid, then crop each character into its own square.",
      "Remove the backgrounds to turn each mascot into a sticker or page avatar.",
      "Post one mascot per day as a 'meet the crew' reveal series.",
      "Run a 'name the mascot' contest in the comments once all four are revealed."
    ],
    "tips": [
      "Sticker-style cute characters are Facebook's most-shared image format — saves and shares beat likes here.",
      "Keep the same eye style and outline thickness across every character or the set won't feel like a family."
    ],
    "tags": [
      "creator-niche",
      "facebook",
      "kawaii",
      "characters",
      "viral-content"
    ],
    "trending": true,
    "popularity": 95
  },
  {
    "id": "comment-gold-miner-chatgpt",
    "title": "Comment Gold Miner — ChatGPT Prompt to Discover Niches From Viral Comments",
    "category": "Text Prompts",
    "tool": "ChatGPT",
    "difficulty": "Beginner",
    "desc": "Mine viral-video comments to discover niches nobody is serving yet — the comments are a free focus group telling you exactly what to make.",
    "prompt": "You are a niche-discovery strategist. I will paste the comment sections from 5 viral videos in my niche. Your job: (1) extract the 20 most-repeated questions and requests hiding in the comments, (2) cluster them into 5 underserved content themes, (3) for each theme, propose 3 specific video or channel ideas with a working title and one line explaining why the comments prove demand, (4) rank the 5 themes by competition level and revenue potential, (5) give me a 30-day validation plan to test the top theme before I commit. Format everything as a clean report with tables. If I have not told you my niche yet, ask me first.",
    "howto": [
      "Open ChatGPT and paste the prompt above.",
      "Tell it your niche (or answer its question if it asks).",
      "Copy the comment sections from 5 viral videos in that niche and paste them in — summaries work if comments are huge.",
      "Review the ranked themes table and pick the top theme with low competition.",
      "Validate it with 3 test Shorts before building a full channel around it."
    ],
    "tips": [
      "Comments saying 'I wish someone made...' or 'nobody covers...' are pure gold — treat them as direct orders from your future audience.",
      "Repeat this monthly — comment demand shifts fast, and catching a wave early beats having the best production."
    ],
    "tags": [
      "creator-niche",
      "youtube",
      "niche-discovery",
      "comments",
      "strategy"
    ],
    "trending": false,
    "popularity": 87
  },
  {
    "id": "viral-series-bible-gemini",
    "title": "Viral Series Bible — Gemini Prompt to Design Bingeable Shorts Formats",
    "category": "Text Prompts",
    "tool": "Gemini",
    "difficulty": "Intermediate",
    "desc": "Design a bingeable recurring series format for Shorts — the 'episode' structure that turns casual viewers into subscribers.",
    "prompt": "You are a short-form series architect. Help me design a repeatable viral series for TikTok and YouTube Shorts in my niche. First ask me my niche and 3 reference creators. Then deliver a 'Series Bible': (1) a sticky series name plus 5 episode title templates, (2) the exact 3-beat structure every episode follows — hook beat, escalation beat, payoff beat — with timestamps, (3) a signature recurring element viewers will anticipate (a sound, catchphrase, or visual gag), (4) the first 10 episode ideas with hooks, (5) why this format is bingeable — the open loop that pulls viewers into the next episode, (6) the metrics to watch after episode 5 to decide whether to double down or pivot. Make it faceless-friendly with every episode under 60 seconds.",
    "howto": [
      "Open Gemini and paste the prompt above.",
      "Answer its questions: your niche and 3 reference creators.",
      "Save the full Series Bible it returns — this is your format playbook.",
      "Produce episodes 1-3 in one week on a fixed posting schedule.",
      "After episode 5, check the metrics it told you to watch and decide: double down or pivot."
    ],
    "tips": [
      "The signature recurring element is what fans quote and stitch — never skip it, it is the series' brand.",
      "Post episodes on a fixed schedule so both viewers and the algorithm learn when to expect the next one."
    ],
    "tags": [
      "creator-niche",
      "tiktok",
      "youtube",
      "series",
      "viral-content"
    ],
    "trending": true,
    "popularity": 91
  },
  {
    "id": "evergreen-content-vault-claude",
    "title": "Evergreen Content Vault — Claude Prompt for 100 Never-Die Niche Ideas",
    "category": "Text Prompts",
    "tool": "Claude",
    "difficulty": "Intermediate",
    "desc": "Turn one niche into 100 evergreen video ideas that rank and get watched for years — the search-driven vault strategy.",
    "prompt": "You are an evergreen content strategist. I will name my niche. Build me an 'Evergreen Content Vault': (1) 100 video ideas that will still be searched in 3 years, grouped into 10 pillar clusters, (2) each idea with a search-optimized working title and the exact question it answers, (3) label each idea as beginner, intermediate, or advanced viewer intent, (4) a 12-month publishing order starting with the 20 highest-search-volume pillars, (5) for the top 10 ideas, add a 5-point outline I can hand to a scriptwriter, (6) 5 ideas most likely to attract brand sponsors in this niche and why. No trend-chasing topics — only ideas with durable search demand.",
    "howto": [
      "Open Claude and paste the prompt above.",
      "Name your niche and let it build the full vault.",
      "Review the 10 pillar clusters and start with cluster 1's highest-volume titles.",
      "Use the 5-point outlines to brief a scriptwriter or to write scripts yourself.",
      "Publish in the 12-month order given — search volume compounds when pillars interlink."
    ],
    "tips": [
      "Evergreen means compound growth: video #1 still earns views and revenue in year 3 while you sleep.",
      "Refresh titles and thumbnails once a year — updated packaging keeps old videos winning the click."
    ],
    "tags": [
      "creator-niche",
      "youtube",
      "niche-discovery",
      "evergreen",
      "strategy"
    ],
    "trending": false,
    "popularity": 88
  },
  {
    "id": "viral-niche-animal-rescue-heartwarming",
    "title": "Heartwarming Animal Rescues — Before & After (Facebook Viral Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Redemption arc + empathy overload: viewers feel the animal's pain, then get the dopamine payoff of the transformation — and sharing it signals kindness, so every view recruits the next viewer. Is niche ki videos 96.4M/72.8M/55.2M/41.7M views tak gayi hain.",
    "image": "images/niches/niche-grid-animal-rescue-heartwarming.jpg",
    "prompt": "VIDEO PROMPT (Veo 3 / Sora / Kling) — paste as-is:\n\n\"Create a 15-second emotional vertical video of a [ANIMAL] rescue story in three beats. BEAT 1 (0-4s): the [ANIMAL] found [LOCATION], looking [EMOTION: scared / injured / abandoned], desaturated cold tones, shaky handheld camera. BEAT 2 (4-9s): a rescuer's hands gently [ACTION: lifting it out / bottle-feeding / wrapping it in a blanket], warm light slowly rising, hopeful music swell. BEAT 3 (9-15s): full transformation — the [ANIMAL] [HAPPY ENDING: running on a beach / playing with its new family / thriving at a sanctuary], saturated golden colors, pure joy. Photorealistic, cinematic, no on-screen text inside the video.\"\n\n[VARIABLE] slots to remix: [ANIMAL], [LOCATION], [EMOTION], [ACTION], [HAPPY ENDING]",
    "howto": [
      "Step 1 — Generate the 3 beats: use one master prompt per beat (found → rescued → transformed) so the arc is crystal clear in a single clip.",
      "Step 2 — Edit for emotion: cold desaturated grade on beat 1, warm golden grade on beat 3; add a swelling royalty-free music track and one on-screen text line per beat ('Day 1: found on the roadside' → 'Day 30: unrecognizable').",
      "Step 3 — Post with a question caption: 'Would you have stopped to help? 💔→❤️' and reply to every comment in the first hour to push shares."
    ],
    "tips": [
      "Hook rule (Facebook): the first 2 seconds must show the shocking 'before' frame — cold, sad, scroll-stopping. The payoff (transformed animal) comes last to force watch-through.",
      "Caption/title trick: captions are searchable on FB — lead with keywords like 'animal rescue before and after' then a comment-bait question ('Rate this rescue 1-10 🥹').",
      "Post US evening time (7-9pm ET); share the Reel into 2-3 animal-lover groups for the first-push effect."
    ],
    "tags": [
      "viral-niche",
      "facebook",
      "animal-rescue",
      "creator-niche",
      "video-prompts"
    ],
    "trending": true,
    "popularity": 86
  },
  {
    "id": "viral-niche-ai-fashion-lookbook",
    "title": "AI Fashion Lookbook — Outfit Transformations (Instagram Viral Niche)",
    "category": "Viral Niches",
    "tool": "Midjourney",
    "difficulty": "Beginner",
    "desc": "Identity projection + aspirational dressing: everyone imagines THEMSELVES in the outfit, and extreme swaps trigger the 'how did it change so fast?!' replay loop — fashion content is also the most saved category on Instagram. Is niche ki videos 88.9M/67.3M/54.6M/39.2M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-fashion-lookbook.jpg",
    "prompt": "IMAGE PROMPT (Midjourney) — paste as-is:\n\n\"/imagine prompt: full-body fashion lookbook photograph of a model wearing [OUTFIT], [ERA/STYLE: cyberpunk streetwear / 70s disco glam / avant-garde couture], photographed at [LOCATION: neon night street / golden sunset rooftop / minimalist white gallery], hyper-detailed fabric textures, dramatic [LIGHTING: neon rim light / warm sun flare / studio spotlight], high-fashion editorial photography, vibrant saturated colors, shot on 85mm --ar 4:5 --style raw\"\n\n[VARIABLE] slots to remix: [OUTFIT], [ERA/STYLE], [LOCATION], [LIGHTING]. Generate 6-10 variations per theme, then animate into a reel.",
    "howto": [
      "Step 1 — Pick one theme per post (cyberpunk, 70s disco glam, avant-garde couture) and generate 6-8 outfit variations with the master prompt, swapping only the [OUTFIT] and [LOCATION] slots.",
      "Step 2 — Build the reel: stitch looks with a CapCut/Kling morph or beat-synced hard cuts on a trending sound, 4:5 portrait, the single most shocking transformation as frame 1.",
      "Step 3 — Caption it with the look formula: 'POV: you asked AI to dress you for [OCCASION] ✨' + hashtags #aifashion #lookbook #ootd #fashionreels — then pin the best comment."
    ],
    "tips": [
      "Hook rule (Instagram): frame 1 must be the most extreme outfit swap — a streetwear look exploding into couture. No slow build; the swipe decision happens in 1 second.",
      "Caption/title trick: use the 'POV' opener + one searchable keyword line ('AI fashion lookbook 2026') and 5-8 niche hashtags; add the location tag of a fashion capital for Explore reach.",
      "Post as a Reel (not just carousel) and also add the 4 best frames to Stories with a poll sticker ('Which look? 1/2/3/4') to double engagement."
    ],
    "tags": [
      "viral-niche",
      "instagram",
      "fashion",
      "creator-niche",
      "image-prompts"
    ],
    "trending": true,
    "popularity": 85
  },
  {
    "id": "viral-niche-deep-sea-fishing-catch",
    "title": "Deep Sea Fishing Catches — Giant Fish Reveals (TikTok Viral Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Scale shock + primal thrill: a fish bigger than the fisherman breaks the brain's size expectations, and the 'how big is it really?!' curiosity gap forces full watch-through plus comment guessing — TikTok's favorite engagement combo. Is niche ki videos 189.5M/164.2M/131.7M/98.3M views tak gayi hain.",
    "image": "images/niches/niche-grid-deep-sea-fishing-catch.jpg",
    "prompt": "VIDEO PROMPT (Veo 3 / Kling) — paste as-is:\n\n\"Create a 15-second adrenaline vertical video of a deep-sea fishing catch in three beats. BEAT 1 (0-3s): POV of a fishing line straining hard over deep blue open ocean, rod bent double, tense. BEAT 2 (3-8s): the water EXPLODES as a giant [FISH: bluefin tuna / marlin / glowing squid] [ACTION: breaches the surface in slow motion / is hauled aboard the deck], massive splash frozen in the air. BEAT 3 (8-15s): the angler's stunned face next to the massive catch — full-body scale comparison shot proving how huge it is, [SETTING: golden sunrise boat deck / night deck under floodlights]. Hyper-realistic, high adrenaline, no on-screen text inside the video.\"\n\n[VARIABLE] slots to remix: [FISH], [ACTION], [SETTING]",
    "howto": [
      "Step 1 — Generate the catch moment first (beat 2, the water explosion) — it's the clip that carries the whole video; generate 2-3 fish variations and pick the most massive-looking.",
      "Step 2 — Cut ruthlessly: line strain (1s) → explosion (4s slow-mo) → stunned face + scale shot (6s). Add a deep bass 'boom' SFX on the breach and ONE text line: 'Guess the weight 👀'.",
      "Step 3 — Caption with a curiosity gap: 'This fish fought for 40 minutes 😱🎣' + pin your own comment revealing the weight to pull viewers into the comments."
    ],
    "tips": [
      "Hook rule (TikTok): start mid-explosion — the first frame must already be the splash. Any slow 'we're going fishing' intro kills retention before 2s.",
      "Caption/title trick: never reveal the weight in the caption — 'Guess how heavy?!' in text-on-screen + pinned comment keeps the curiosity gap open.",
      "Sound strategy: use a trending sound at low volume under the real audio — TikTok boosts videos riding two audio signals, and the bass-drop-on-breach sync drives replays."
    ],
    "tags": [
      "viral-niche",
      "tiktok",
      "fishing",
      "creator-niche",
      "video-prompts"
    ],
    "trending": true,
    "popularity": 94
  },
  {
    "id": "viral-niche-tiny-house-timelapse",
    "title": "Tiny House Build Timelapses — From Empty Lot to Cozy Home (YouTube Viral Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Transformation arc + money curiosity: viewers get the dopamine of a full build in minutes, then the cost reveal triggers comments ('no way that's $22K!') — aspiration plus an argument equals watch time and shares. Is niche ki videos 18.4M/12.7M/9.3M/6.8M views tak gayi hain.",
    "image": "images/niches/niche-grid-tiny-house-timelapse.jpg",
    "prompt": "VIDEO PROMPT (Veo 3 / Sora / Kling) — paste as-is:\n\n\"Create a cinematic timelapse-style video of a [HOUSE_STYLE: A-frame / container / cabin-on-wheels] tiny house being built in [LOCATION: pine forest / desert / lakeside]. PHASE 1: empty lot at dawn, foundation going down. PHASE 2: rapid timelapse of framing and walls rising under [DAY_PHASE: golden-hour light]. PHASE 3: interior fit-out — [DETAIL: wood stove glowing / loft bed with fairy lights / tiny marble kitchen]. PHASE 4 (the money shot): slow drone glide around the finished tiny home at sunset, warm light in every window, cozy and aspirational. Photorealistic, 16:9, no on-screen text inside the video.\"\n\n[VARIABLE] slots to remix: [HOUSE_STYLE], [LOCATION], [DETAIL], [DAY_PHASE]",
    "howto": [
      "Step 1 — Generate 4-5 build-phase clips with the master prompt below: foundation/framing → walls+roof → interior fit-out → the money-shot reveal. Keep every clip the same [HOUSE_STYLE] and [LOCATION] for continuity.",
      "Step 2 — Edit into an 8-10 minute video: fast timelapse for construction, slow cinematic glide for the reveal; add chapter timestamps starting at 0:00 (Foundation, Framing, Interior, Final Tour).",
      "Step 3 — Publish with a keyword-first title under 60 chars and a thumbnail with 1-5 words max (e.g. '$22K TINY HOUSE')."
    ],
    "tips": [
      "Hook rule (YouTube): open with 5 seconds of the FINISHED house at sunset, then cut to 'here's how we built it for $[COST]' — the finished product first forces the click to pay off.",
      "Title trick: always include the build cost + size — 'We Built a Tiny House for $22K (380 sq ft)' outranks 'Tiny House Tour' every time.",
      "Chapters from 0:00 + a pinned comment asking 'Which phase would you DIY first?' to drive comments."
    ],
    "tags": [
      "viral-niche",
      "youtube",
      "tiny-house",
      "creator-niche",
      "video-prompts"
    ],
    "trending": true,
    "popularity": 81
  },
  {
    "id": "viral-niche-diy-home-hacks",
    "title": "5-Minute DIY Home Hacks — Quick Transformations (Facebook Viral Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Instant payoff + self-efficacy: the viewer thinks 'I could do that this weekend' — that feeling drives saves, and saves are the #1 share trigger on Facebook home content. Is niche ki videos 88.2M/64.5M/51.9M/37.4M views tak gayi hain.",
    "image": "images/niches/niche-grid-diy-home-hacks.jpg",
    "prompt": "VIDEO PROMPT (Veo 3 / Kling) — paste as-is:\n\n\"Create a vertical 20-second DIY home hack video. FIRST HALF (0-8s): a [ROOM] in [BEFORE_STATE: cluttered / dated / dark and dull], slightly desaturated, handheld camera panning across the mess. SECOND HALF (8-20s): instant magical transformation using [HACK: peel-and-stick wallpaper / LED strip lighting / tension-rod storage / spray-paint refresh] — bright saturated colors, smooth glide shot of the finished space, sunlight streaming in, [PROP: fresh flowers / styled shelf / new cushion] as the hero detail. Satisfying, hyper-clean, no on-screen text inside the video.\"\n\n[VARIABLE] slots to remix: [ROOM], [BEFORE_STATE], [HACK], [PROP]",
    "howto": [
      "Step 1 — Generate one continuous before→after clip per hack with the master prompt: ugly 'before' first, satisfying reveal last, same camera angle both halves.",
      "Step 2 — Edit: hard cut on the beat drop of a trending sound, one big on-screen text line ('$0 hack!'), total length 15-30 seconds.",
      "Step 3 — Post with a searchable keyword caption + comment-bait question ('Which room needs this first? 🏠')."
    ],
    "tips": [
      "Hook rule (Facebook): the first 2 seconds MUST show the ugliest 'before' frame possible — the worse it looks, the further the reveal travels.",
      "Caption/title trick: FB search indexes captions — lead with keywords ('5 minute kitchen hack before and after') then a save-bait line ('Save this for your weekend project 📌').",
      "Post 7-9pm ET US time and share the Reel into 2-3 home-decor groups for the first-push effect."
    ],
    "tags": [
      "viral-niche",
      "facebook",
      "diy-home",
      "creator-niche",
      "video-prompts"
    ],
    "trending": true,
    "popularity": 85
  },
  {
    "id": "viral-niche-luxury-lifestyle-reels",
    "title": "Luxury Lifestyle Reels — Cars, Watches & Mansions (Instagram Viral Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Aspiration + status signaling: viewers project themselves into the life, and sharing it signals taste — every share is a free ad to a lookalike audience that wants the same dream. Is niche ki videos 96.7M/74.2M/58.6M/42.1M views tak gayi hain.",
    "image": "images/niches/niche-grid-luxury-lifestyle-reels.jpg",
    "prompt": "VIDEO PROMPT (Veo 3 / Runway) — paste as-is:\n\n\"Create a glossy 7-second vertical luxury lifestyle clip: a [LUXURY_ITEM: black supercar / gold chronograph watch / modern mansion with infinity pool / private yacht deck] in [SETTING: neon city street at night / marble penthouse / tropical coastline at dusk], shot in [LIGHTING: cinematic rim light / golden-hour glow / moody neon reflections], with [MOVEMENT: slow push-in / smooth orbit / elegant pan]. Ultra-premium, high contrast, rich colors, aspirational mood, no on-screen text inside the video.\"\n\n[VARIABLE] slots to remix: [LUXURY_ITEM], [SETTING], [LIGHTING], [MOVEMENT]",
    "howto": [
      "Step 1 — Generate 3-4 glossy 5-8 second clips with the master prompt: one hero [LUXURY_ITEM] per clip, same color grade across all of them.",
      "Step 2 — Edit as a fast-cut carousel Reel: hard cuts every 2-3 seconds on a trending luxury audio, text overlay with the price tag.",
      "Step 3 — Post daily at 12pm + 7pm ET; pin the best performer to your profile. Reply to every 'how much?' comment."
    ],
    "tips": [
      "Hook rule (Instagram): the VERY first frame is the money shot — the car already gleaming, the watch already sparkling. No build-up, Reels punish slow starts.",
      "Caption/title trick: price-tag text overlay ('This watch: $48,000 ⌚') + a caption question ('Rent it or own it?') — price numbers stop thumbs and start comment wars.",
      "Hashtags: 3 broad (#luxury #lifestyle #reels) + 3 niche (#supercarlife #watchcollector #mansiongoals) + rotate 1-2 per post; never the same set twice in a row."
    ],
    "tags": [
      "viral-niche",
      "instagram",
      "luxury",
      "creator-niche",
      "video-prompts"
    ],
    "trending": true,
    "popularity": 87
  },
  {
    "id": "viral-niche-ai-baby-animal-rescue",
    "title": "AI Baby Animal Rescue Stories — Emotional Mini-Stories (TikTok Viral Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Rescue arc = instant empathy + relief dopamine: viewers stay for the happy ending (retention) and share to spread the 'good feeling' — emotional shares are TikTok's strongest viral fuel. Is niche ki videos 182.4M/147.9M/119.3M/86.5M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-baby-animal-rescue.jpg",
    "prompt": "VIDEO PROMPT (Veo 3 / Kling / Sora) — paste as-is:\n\n\"Create a vertical 25-second emotional baby animal rescue story. SCENE 1 (0-6s): a tiny [ANIMAL: elephant calf / panda cub / kitten / duckling] stuck in [DANGER: mud / rain / a cardboard box / a shallow stream], trembling, big sad eyes, close-up, soft morning light. SCENE 2 (6-16s): gentle human hands rescue it, wrap it in a [ITEM: colorful blanket / warm towel], it slowly stops shaking. SCENE 3 (16-25s): the same baby now clean, fed and playing happily in [HAPPY_PLACE: sunny meadow / cozy shelter], tail wagging, pure joy. Photorealistic, warm vibrant colors, emotional storytelling, no on-screen text inside the video.\"\n\n[VARIABLE] slots to remix: [ANIMAL], [DANGER], [ITEM], [HAPPY_PLACE]",
    "howto": [
      "Step 1 — Generate the 3 scenes separately with the master prompt below, keeping the SAME [ANIMAL] description in every scene so the character stays consistent.",
      "Step 2 — Edit in order danger → rescue → happy ending, 20-30 seconds total; add soft emotional piano music and a single text overlay only at the end: 'He's safe now ❤️'.",
      "Step 3 — Post with a story caption ('Day 1 of his new life…') and pin a comment asking viewers to name the baby — naming drives comments hard."
    ],
    "tips": [
      "Hook rule (TikTok): first 2 seconds MUST be the saddest close-up — big eyes, trembling. The rescue payoff only lands if the pain hits instantly.",
      "Caption trick: write it like a diary ('Day 1: he finally ate 🥺') — series framing makes viewers follow for Day 2, 3, 4.",
      "Post 6-9pm ET US time; reply to top comments with a 5-second update clip to feed the algorithm a second video."
    ],
    "tags": [
      "viral-niche",
      "tiktok",
      "animal-rescue",
      "creator-niche",
      "video-prompts"
    ],
    "trending": true,
    "popularity": 92
  },
  {
    "id": "viral-niche-animated-battle-maps",
    "title": "Historical Battles Animated Maps — Troop Movements Explained (YouTube Viral Niche)",
    "category": "Viral Niches",
    "tool": "Kling",
    "difficulty": "Beginner",
    "desc": "Maps turn chaos into a story the brain can follow: every arrow is a mini cliffhanger, so viewers keep watching 'just to see the next move' — strategy curiosity plus clear visuals equals long retention. Is niche ki videos 42.7M/31.5M/24.8M/17.2M views tak gayi hain.",
    "image": "images/niches/niche-grid-animated-battle-maps.jpg",
    "prompt": "VIDEO PROMPT (Kling / Veo 3 / Sora) — paste as-is:\n\n\"Create a stylized animated strategy-map video of the Battle of [BATTLE] in [YEAR]. Start with a detailed illustrated map of [REGION] with mountains, rivers and castles. Animate [SIDE_A: red] troop blocks advancing along glowing arrows from the [DIRECTION_A], while [SIDE_B: blue] forces reposition from the [DIRECTION_B]. Show the flanking move, the clash at [KEY_LOCATION], and the final encirclement with flags falling. Clean flat-cartoon map style, rich colors, smooth camera zooms into each turning point, no on-screen text inside the video (add labels in editing).\"\n\n[VARIABLE] slots to remix: [BATTLE], [YEAR], [REGION], [SIDE_A], [SIDE_B], [DIRECTION_A], [DIRECTION_B], [KEY_LOCATION]",
    "howto": [
      "Step 1 — Generate 4-5 map clips with the master prompt below: setup → advance → clash → turning point → final encirclement, one clip per phase.",
      "Step 2 — Narrate over it with a calm documentary voice-over; add map labels, dates and chapter timestamps in editing (0:00 Setup, Advance, The Trap, Aftermath).",
      "Step 3 — Publish 8-12 minutes, keyword-first title under 60 chars, thumbnail = map + 2-3 bold words + the year (e.g. '1944 — THE TRAP')."
    ],
    "tips": [
      "Hook rule (YouTube): first 15 seconds show the FINAL encirclement map, then say 'How did 300,000 soldiers get trapped? It started here…' — open loop forces the watch.",
      "Title trick: battle name + year + curiosity gap — 'The Battle That Changed Europe in 11 Minutes' beats a plain documentary title every time.",
      "End screen to your previous battle video + a pinned poll ('Which battle next?') — series bingeing is where this niche prints watch hours."
    ],
    "tags": [
      "viral-niche",
      "youtube",
      "history",
      "creator-niche",
      "video-prompts"
    ],
    "trending": true,
    "popularity": 82
  },
  {
    "id": "viral-niche-village-cooking-big",
    "title": "Village Cooking Big Portions — Fire, Feast & Giant Pots (Facebook Viral Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Scale + generosity: a meal cooked for everyone triggers comfort, nostalgia and 'food for the soul' sharing — older Facebook audiences share village-cooking videos to family groups more than almost any other food format. Is niche ki videos 134.6M/98.2M/76.4M/53.9M views tak gayi hain.",
    "image": "images/niches/niche-grid-village-cooking-big.jpg",
    "prompt": "VIDEO PROMPT (Veo 3 / Kling) — paste as-is:\n\n\"Create a vibrant 30-second village cooking video. SCENE 1: a giant [VESSEL: iron pot / huge wok / clay oven] over a roaring open wood fire in a rural courtyard, flames and sparks rising. SCENE 2: a smiling village cook adds a MOUNTAIN of [DISH: biryani rice / flatbreads / stir-fry vegetables / roasted meats] — steam exploding, spices in bright colors, close-ups of sizzling oil. SCENE 3: the finished feast served on huge platters to a happy crowd of [PEOPLE: village families / children / elders] outdoors at golden hour. Photorealistic, warm saturated colors, mouth-watering close-ups, no on-screen text inside the video.\"\n\n[VARIABLE] slots to remix: [VESSEL], [DISH], [PEOPLE]",
    "howto": [
      "Step 1 — Generate the fire, cooking and serving scenes with the master prompt below; keep portions EXAGGERATED — giant is the whole point.",
      "Step 2 — Edit fire → sizzle close-ups → feast reveal; add natural ASMR cooking sounds loud in the mix, total 30-60 seconds for Reels or 3+ minutes for Facebook video.",
      "Step 3 — Caption with searchable keywords ('village cooking big portions') + a share-bait question ('How many people could this feed? 🍲')."
    ],
    "tips": [
      "Hook rule (Facebook): open on the biggest sizzle/steam close-up, not the setup — Facebook's feed rewards instant sensory payoff in the first 2 seconds.",
      "Caption/title trick: lead with quantity — 'Cooking 50KG Biryani for the Whole Village!' Numbers + scale stop scrollers and FB search indexes the caption keywords.",
      "Share the post into 2-3 food/cooking groups right after posting and reply to every comment in the first hour — early engagement decides the push."
    ],
    "tags": [
      "viral-niche",
      "facebook",
      "cooking",
      "creator-niche",
      "video-prompts"
    ],
    "trending": true,
    "popularity": 87
  },
  {
    "id": "viral-niche-home-makeover-before-after",
    "title": "Before/After Home Makeovers — Instant Transformation Reels (Instagram Viral Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Before/after = instant curiosity gap + transformation payoff: the brain cannot scroll away mid-change, and the satisfying reveal triggers saves and shares — the two signals Instagram pushes hardest. Is niche ki videos 94.3M/71.8M/56.2M/38.7M views tak gayi hain.",
    "image": "images/niches/niche-grid-home-makeover-before-after.jpg",
    "prompt": "VIDEO PROMPT (Veo 3 / Kling / Sora) — paste as-is:\n\n\"Create a vertical 12-second home makeover transformation. Start in a dull, messy [ROOM: living room / kitchen / bedroom / backyard] with [OLD FLAWS: peeling paint / cramped clutter / dim yellow light]. Camera pushes in slowly. At second 4, a golden light sweep wipes across the frame and the SAME room instantly transforms into a stunning [NEW STYLE: modern luxury / cozy boho / marble chef kitchen / dream garden patio] with [HERO FEATURE: floor-to-ceiling windows / marble island / fairy lights and plants / glowing pool]. End with a slow reveal pan, bright sunlight, vibrant colors, photorealistic, no text inside the video.\"\n\n[VARIABLE] slots to remix: [ROOM], [OLD FLAWS], [NEW STYLE], [HERO FEATURE]",
    "howto": [
      "Step 1 — Generate the BEFORE and AFTER as two clips with the exact same camera angle and room description — only the style words change, so the transformation lines up perfectly.",
      "Step 2 — Join them in CapCut with a light-sweep / wipe transition at the beat drop (around second 4); total length 10-14 seconds, loop the end frame back to the BEFORE frame.",
      "Step 3 — Post as a Reel with the AFTER frame as cover, caption starting with the cost/time hook (see tips), and pin a comment: 'Which room should I do next?'"
    ],
    "tips": [
      "Hook rule (Instagram): the FIRST frame must be the ugliest BEFORE shot — the contrast is the hook; never start with the pretty room.",
      "Caption trick: lead with a number — 'This kitchen cost $0 to imagine…' or '48 hours in AI, would you live here?' — numbers stop thumbs and spark saves/shares.",
      "Post 7-9pm local; Reels that loop seamlessly get replayed — replays are Instagram's strongest ranking signal in this niche."
    ],
    "tags": [
      "viral-niche",
      "instagram",
      "home-makeover",
      "creator-niche",
      "video-prompts"
    ],
    "trending": true,
    "popularity": 86
  },
  {
    "id": "viral-niche-magnetic-ball-sculptures",
    "title": "Magnetic Ball Sculptures — Satisfying Timelapse Builds (TikTok Viral Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Order-from-chaos is pure brain candy: clicking sounds + watching a shape complete itself holds retention to the last second, and the seamless loop quietly doubles watch time — TikTok's favorite metric. Is niche ki videos 203.4M/168.9M/142.5M/97.6M views tak gayi hain.",
    "image": "images/niches/niche-grid-magnetic-ball-sculptures.jpg",
    "prompt": "VIDEO PROMPT (Veo 3 / Kling / Sora) — paste as-is:\n\n\"Create a vertical 18-second hyper-satisfying magnetic ball build in timelapse. Hundreds of tiny shiny [COLOR SCHEME: rainbow / neon / gold-and-silver] magnetic balls roll, click and snap together on their own, rapidly forming a [SCULPTURE: Eiffel Tower / castle / dragon / giant cube]. Macro close-ups, balls clicking with crisp ASMR sounds, sparkling light reflections. Final 3 seconds: the finished sculpture collapses in slow motion and instantly rebuilds into a perfect spinning sphere — seamless loop, vibrant colors, no text inside the video.\"\n\n[VARIABLE] slots to remix: [COLOR SCHEME], [SCULPTURE]",
    "howto": [
      "Step 1 — Generate the build in 2-3 short clips with the same [COLOR SCHEME] and table background in every prompt, so the sculpture looks consistent.",
      "Step 2 — Speed-ramp the build (2x-4x), keep the natural click sounds loud in the mix, and loop the collapse-rebuild ending back to frame one.",
      "Step 3 — Post with an on-screen question only in the caption/title ('Guess how many balls? 👇') — never burn text into the video itself."
    ],
    "tips": [
      "Hook rule (TikTok): first 2 seconds must already show balls MOVING and clicking — motion + sound in frame one is what stops the scroll in satisfying niches.",
      "Caption trick: ask for a guess ('How many balls? Wrong answers only 😂') — guess-comments are the cheapest comment-bait that actually works on TikTok.",
      "Post 6-10pm ET US; reply to the top guess with a Part 2 build the same week — series sculptures compound fast."
    ],
    "tags": [
      "viral-niche",
      "tiktok",
      "satisfying",
      "asmr",
      "creator-niche",
      "video-prompts"
    ],
    "trending": true,
    "popularity": 95
  },
  {
    "id": "viral-niche-luxury-hotel-tours",
    "title": "Luxury Hotel Room Tours — Cinematic Walkthroughs (YouTube Viral Niche)",
    "category": "Viral Niches",
    "tool": "Kling",
    "difficulty": "Beginner",
    "desc": "Aspirational escapism: viewers get a free taste of a life they cannot afford (yet), so they watch long, save for 'one day', and share as a dream — high watch time plus high-intent travel audience equals strong CPM. Is niche ki videos 47.8M/33.4M/26.1M/18.9M views tak gayi hain.",
    "image": "images/niches/niche-grid-luxury-hotel-tours.jpg",
    "prompt": "VIDEO PROMPT (Kling / Veo 3 / Sora) — paste as-is:\n\n\"Create a cinematic 8-10 minute luxury hotel tour in smooth gimbal walkthrough style. Open the door of a [ROOM TYPE: penthouse suite / overwater villa / skyline spa suite / mountain lodge suite] in [LOCATION: Dubai / Maldives / New York / Swiss Alps]. Slow push-in reveal of [HERO VIEW: glittering sunset skyline / turquoise ocean and infinity pool / marble tub with tower view / fireplace facing snowy peaks]. Glide room to room: bed, bathroom, balcony, hidden details (minibar, lighting, textures). Golden warm light, ultra-detailed, aspirational mood, gentle piano music, no people, no text inside the video.\"\n\n[VARIABLE] slots to remix: [ROOM TYPE], [LOCATION], [HERO VIEW]",
    "howto": [
      "Step 1 — Generate the tour as 8-12 short clips, one per room/space, keeping the same [LOCATION] light and style words in every prompt for a believable single hotel.",
      "Step 2 — Edit in walkthrough order (door → living → bed → bath → balcony finale), add calm narration with the room's 'price per night' revealed only near the end.",
      "Step 3 — Upload with the most extreme room as thumbnail, chapters per room, and pin a comment asking: 'Worth $___ a night? Yes or no?'"
    ],
    "tips": [
      "Hook rule (YouTube): first 15 seconds = door opening + the single most jaw-dropping view. Never start with the hallway or lobby.",
      "Title trick: put the price in the title — 'Inside a $25,000/Night Hotel Suite in [LOCATION]' — price + place is the proven CTR formula in this niche (keep under 60 characters where possible).",
      "Upload Thu/Fri for weekend travel-dreaming traffic; end screen to your previous hotel tour to build binge sessions."
    ],
    "tags": [
      "viral-niche",
      "youtube",
      "luxury-travel",
      "creator-niche",
      "video-prompts"
    ],
    "trending": true,
    "popularity": 83
  },
  {
    "id": "viral-niche-glass-fruit-cutting-asmr",
    "title": "Glass Fruit Cutting ASMR — Crystal-Clear Slicing Satisfying Reels (Facebook Viral Niche)",
    "category": "Viral Niches",
    "tool": "Runway",
    "difficulty": "Beginner",
    "desc": "Two cravings collide — food and the impossible: glass you can slice triggers a curiosity gap ('how does that even sound?'), and the crisp slice sound delivers the ASMR payoff that keeps viewers replaying. Is niche ki videos 187.3M/142.8M/118.5M/86.2M views tak gayi hain.",
    "image": "images/niches/niche-grid-glass-fruit-cutting-asmr.jpg",
    "prompt": "VIDEO PROMPT (Runway / Kling / Veo 3) — paste as-is:\n\n\"Create a vertical 15-second ultra-macro glass fruit ASMR clip. A razor-sharp chef's knife slowly slices a translucent crystal-clear glass [FRUIT: watermelon / strawberry / orange / pineapple] on a dark reflective cutting board. Sparkling crystal shards scatter in slow motion, rainbow light refractions dance through the glass fruit, crisp slicing sounds, hyper-detailed, glossy, vibrant colors, satisfying loop ending — no text inside the video.\"\n\n[VARIABLE] slots to remix: [FRUIT]",
    "howto": [
      "Step 1 — Generate 4 clips, one per [FRUIT], with the exact same dark board + lighting words in every prompt, so the series looks like one account's signature style.",
      "Step 2 — Edit: knife touches the glass fruit in the FIRST second, slow-mo slice through the middle, end on the sparkling cross-section held for 1 second — loop-friendly; keep the real slicing sound loud.",
      "Step 3 — Post as a Facebook Reel, caption asks a question ('Which fruit should be glass next? 🍉'), and reshare to your Page story in the same hour for the distribution boost."
    ],
    "tips": [
      "Hook rule (Facebook): knife must TOUCH the glass fruit within the first second — the scrape sound is the hook; never open with a static fruit shot.",
      "Caption trick: 'Wait for the sound 🔊' + a question — Facebook pushes Reels with active comment threads, and sound-on viewers retain longer.",
      "Post 6–9pm US; repost the best performer as a Story the next morning — Facebook counts Story reshares as a distribution signal."
    ],
    "tags": [
      "viral-niche",
      "facebook",
      "asmr",
      "satisfying",
      "creator-niche",
      "video-prompts"
    ],
    "trending": true,
    "popularity": 93
  },
  {
    "id": "viral-niche-ai-mini-workers",
    "title": "AI Mini Workers — Tiny People, Giant Jobs Whimsical Reels (Instagram Viral Niche)",
    "category": "Viral Niches",
    "tool": "Midjourney",
    "difficulty": "Beginner",
    "desc": "Scale contrast is instant visual candy — the brain loves spotting tiny details, so people zoom, screenshot and tag friends; every tag is free distribution. Is niche ki videos 156.4M/121.7M/98.3M/74.9M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-mini-workers.jpg",
    "prompt": "IMAGE PROMPT (Midjourney) — paste as-is:\n\n\"Whimsical miniature photography scene: tiny workers in [UNIFORM: yellow hard hats / chef whites / painter overalls / repair jumpsuits] doing a [JOB: building / cooking / painting / repairing] on top of a giant [OBJECT: sneaker / pizza slice / strawberry / smartphone], ladders, ropes and scaffolding, extreme scale contrast, vibrant colors, playful, ultra-detailed, cinematic lighting, vertical 4:5 composition --ar 4:5 --style raw, no text\"\n\n[VARIABLE] slots to remix: [UNIFORM], [JOB], [OBJECT]",
    "howto": [
      "Step 1 — Pick 3–4 JOB/OBJECT combos and generate each with the same 'extreme scale contrast, vibrant colors' style words, so the feed looks like one consistent world.",
      "Step 2 — Build a 7–10 slide carousel: odd slides show the full scene, even slides zoom into a single tiny worker — carousels earn double swipe-throughs.",
      "Step 3 — Also post as a Reel (slow Ken Burns zoom on the stills + trending audio), caption: 'Spot the worker who gave up 👇'."
    ],
    "tips": [
      "Hook rule (Instagram): the FIRST frame must show the giant object WITH tiny workers visible — scale shock in frame one, never a slow zoom-in.",
      "Caption trick: 'Which one are you today? 👇' — relatable-identification comments explode on this format; add #aivideo #miniature in the first comment.",
      "Post 11am–1pm or 7–9pm; trending audio with a comedic drop timed to a worker 'falling' doubles shares."
    ],
    "tags": [
      "viral-niche",
      "instagram",
      "miniature",
      "ai-art",
      "creator-niche",
      "image-prompts"
    ],
    "trending": true,
    "popularity": 89
  },
  {
    "id": "viral-niche-night-market-street-food",
    "title": "Night Market Street Food — Sizzling Mega Portions (TikTok Viral Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Hunger is a physiological hook — sizzling mega portions at night fire mirror-neurons for taste and smell, so viewers save it for later, and saves are TikTok's #1 virality lever. Is niche ki videos 231.8M/198.4M/164.2M/129.7M views tak gayi hain.",
    "image": "images/niches/niche-grid-night-market-street-food.jpg",
    "prompt": "VIDEO PROMPT (Veo 3 / Kling) — paste as-is:\n\n\"Create a vertical 12-second sizzling street food money-shot. [DISH: giant meat skewers / loaded noodle wok / towering fried chicken stack / steaming soup dumplings] cooking over roaring open flames at a neon-lit Asian night market. Sparks flying, steam billowing, glistening mega portions, slow-motion flip at the peak sizzle, ultra-detailed food cinematography, vibrant night colors, mouth-watering — no text inside the video\"\n\n[VARIABLE] slots to remix: [DISH]",
    "howto": [
      "Step 1 — Generate 3–4 clips per [DISH], always with 'neon-lit night market' in the prompt, so the channel feels like one consistent world.",
      "Step 2 — Edit: start ON the sizzle (never the menu board), 12–15 seconds, bass-heavy sizzle sound, end on the juiciest frame so it loops cleanly.",
      "Step 3 — Post with a location-style caption ('Bangkok night market hits different 🌙'), pin a comment: 'Part 2 if this hits 100K 🔥'."
    ],
    "tips": [
      "Hook rule (TikTok): first frame = fire + sizzle already happening — the craving fires before the swipe reflex; start with flames, never with talking.",
      "Caption trick: 'POV: you can smell this video 🤤' — sensory captions trigger saves ('must-try' lists), TikTok's strongest food-niche signal.",
      "Post 7–10pm local when people are hungry; reply to 'recipe?' comments with a Part 2 — comment threads keep the video alive for days."
    ],
    "tags": [
      "viral-niche",
      "tiktok",
      "street-food",
      "food",
      "creator-niche",
      "video-prompts"
    ],
    "trending": true,
    "popularity": 97
  },
  {
    "id": "ns-20261014-youtube",
    "title": "Primitive Technology Builds — Viral Mud & Bamboo Engineering Niche (YouTube)",
    "category": "Viral Niches",
    "tool": "Veo 3 / Kling",
    "difficulty": "Beginner",
    "desc": "Completionism + curiosity: viewers cannot stop watching until they see the finished build. Pure process content with no narration creates an ASMR-like loop effect and huge retention — YouTube's algorithm rewards watch time directly. Is niche ki videos 58.9M/46.3M/38.7M/29.4M views tak gayi hain.",
    "image": "images/niches/niche-grid-primitive-tech-builds.jpg",
    "prompt": "Hyper-realistic cinematic video of a [CRAFTSMAN] building a [STRUCTURE] from scratch using only [MATERIALS: mud / bamboo / stone], in a [LOCATION: lush tropical clearing / jungle riverbank / mountain valley]. Sequence: 1) gathering raw materials with bare hands, 2) shaping and molding [MATERIALS] in close-up, 3) assembling the structure brick-by-brick or pole-by-pole, 4) testing the finished [STRUCTURE] — water flowing / fire lit / tool working. Natural sunlight, no narration, pure process sounds, satisfying build payoff.",
    "howto": [
      "Generate 5-8 scene images (material gathering, shaping, assembly, final reveal) with Midjourney image-to-image consistency.",
      "Animate each scene in Veo 3 / Kling with 'no talking, only natural process sounds' in the prompt; keep shots 8-12s.",
      "Edit in sequence, add a satisfying payoff shot at the end, title keyword-first ('I Built a [STRUCTURE] From Mud With My Hands')."
    ],
    "tips": [
      "Open with the finished build for 2 seconds, then rewind to the raw materials — payoff-first hooks win on YouTube.",
      "Add chapters for each build phase — chapters lift average view duration, YouTube's core ranking signal."
    ],
    "tags": [
      "viral-niche",
      "youtube",
      "faceless",
      "primitive-technology",
      "builds"
    ],
    "trending": true,
    "popularity": 83
  },
  {
    "id": "ns-20261014-facebook",
    "title": "Inspirational Quotes over Nature — Viral Quote Reels Niche (Facebook)",
    "category": "Viral Niches",
    "tool": "Midjourney",
    "difficulty": "Beginner",
    "desc": "Emotional resonance + shareability: quotes over beautiful nature trigger a micro-emotional moment that people forward to friends. Facebook's share-first audience multiplies reach, and shares are the strongest ranking signal on Reels. Is niche ki videos 147.2M/118.6M/92.3M/71.8M views tak gayi hain.",
    "image": "images/niches/niche-grid-nature-quote-reels.jpg",
    "prompt": "Breathtaking [LANDSCAPE: mountain sunrise / misty forest / ocean sunset / desert night sky] at [TIME: golden hour / dawn / twilight], ultra detailed, dramatic vibrant colors, awe-inspiring serene mood, negative space in the upper third for [QUOTE TEXT]. Generate the [QUOTE TEXT]: '[SHORT INSPIRATIONAL QUOTE about perseverance / gratitude / fresh starts — max 12 words]'. Cinematic, photorealistic, 9:16 vertical.",
    "howto": [
      "Generate the nature image with Midjourney using the prompt above; keep 9:16 aspect and empty sky space for text.",
      "Add the quote in CapCut with a bold, readable font + subtle shadow; animate text-in only.",
      "Publish as a Facebook Reel with trending audio, caption ending in a question, 3-5 hashtags incl. #motivation."
    ],
    "tips": [
      "Post at 7-9 PM in your audience's timezone — quote reels peak in the evening scroll window.",
      "Pin a comment asking 'Which line hit you hardest?' — comments are Facebook's ranking fuel."
    ],
    "tags": [
      "viral-niche",
      "facebook",
      "quotes",
      "reels",
      "nature"
    ],
    "trending": true,
    "popularity": 89
  },
  {
    "id": "ns-20261014-instagram",
    "title": "Lofi Anime Aesthetic Videos — Viral Peaceful Loop Niche (Instagram)",
    "category": "Viral Niches",
    "tool": "Midjourney / Veo 3",
    "difficulty": "Beginner",
    "desc": "Calm loops = infinite replays: viewers rewatch peaceful anime loops 3-5x while the music plays, which reads as extreme retention. Instagram pushes high-completion Reels hard, and the aesthetic audience saves and shares for mood boards. Is niche ki videos 61.2M/48.7M/39.5M/28.9M views tak gayi hain.",
    "image": "images/niches/niche-grid-lofi-anime-aesthetic.jpg",
    "prompt": "Cozy lofi anime aesthetic illustration of [SCENE: rainy window with city lights / midnight tram / autumn train station / cliffside lighthouse] at [TIME: night / dusk], featuring [CHARACTER: girl with cat / traveler with backpack / empty nostalgic space], [WEATHER: soft rain / drifting leaves / glowing fog]. Hand-painted style, vibrant cozy colors, peaceful dreamy vibe. Animate in Veo 3: gentle 8-second loop — [MOTION: rain sliding down glass / lanterns flickering / leaves falling], seamless return to frame one.",
    "howto": [
      "Generate the base illustration with Midjourney ('hand-painted lofi anime style'); upscale for crispness.",
      "Animate 8s in Veo 3 with subtle looping motion; make the last frame match the first for a perfect loop.",
      "Post as an Instagram Reel with a lofi track, caption with 1-2 niche hashtags (#lofi #animeaesthetic), post at 7-9 PM."
    ],
    "tips": [
      "Loop the animation seamlessly so Reels auto-replay — replays count as watch time.",
      "Post daily at the same golden-hour slot — aesthetic pages grow on rhythm, not one-offs."
    ],
    "tags": [
      "viral-niche",
      "instagram",
      "lofi",
      "anime",
      "aesthetic",
      "reels"
    ],
    "trending": true,
    "popularity": 84
  },
  {
    "id": "ns-20261015-tiktok",
    "title": "AI Miniature Worlds ASMR — Viral Tiny Diorama Loop Niche (TikTok)",
    "category": "Viral Niches",
    "tool": "Kling / Veo 3",
    "difficulty": "Beginner",
    "desc": "Tiny worlds trigger awe and protectiveness; the seamless loop turns every re-watch into retention gold. TikTok's algorithm reads looped replays as high watch time and pushes the video to the FYP automatically. Is niche ki videos 208.3M/174.6M/149.2M/118.8M views tak gayi hain.",
    "image": "images/niches/niche-grid-miniature-world-asmr.jpg",
    "prompt": "Hyper-detailed miniature world diorama video: [WORLD_TYPE: glowing night city / underwater coral reef / enchanted forest / cozy tiny kitchen / tiny desert oasis]. Macro photography style, extreme detail on every tiny element, slow cinematic camera orbit, subtle ambient motion (flickering lights, flowing water, rising steam), vibrant saturated colors, magical lighting. Loop the motion seamlessly so the ending matches the beginning — a perfect natural loop. Vertical 9:16, [DURATION: 8-12 seconds]. No text on screen.",
    "howto": [
      "Generate 4-6 diorama stills in Midjourney/Flux (vary [WORLD_TYPE] per video; keep the same macro style).",
      "Animate each still in Kling / Veo 3 image-to-video with 'seamless loop, gentle continuous motion' — ending frame must match the start.",
      "Layer ASMR ambience in CapCut (rain / water / fireplace sounds); hook = the tiniest surprising detail in second 1 (a tiny person waves); caption trick = comment-bait question like 'Which tiny world would YOU live in?' — comments push the video onto the FYP."
    ],
    "tips": [
      "Start with the ASMR sound inside second 1 — no intro frame, the sound IS the hook.",
      "Keep loops seamless so TikTok compounds watch time on every replay."
    ],
    "tags": [
      "viral-niche",
      "tiktok",
      "faceless",
      "asmr",
      "miniature",
      "ai-video"
    ],
    "trending": true,
    "popularity": 96
  },
  {
    "id": "ns-20261015-youtube",
    "title": "AI House Restoration Before/After — Viral Morph Transformation Niche (YouTube)",
    "category": "Viral Niches",
    "tool": "Google Flow / Veo 3",
    "difficulty": "Beginner",
    "desc": "Transformation content hijacks the brain's completion instinct — viewers physically cannot scroll before seeing the finished result. Before/after is one of YouTube's highest-retention formats, and the algorithm rewards that watch time directly. Is niche ki videos 64.7M/52.1M/41.9M/34.5M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-house-restoration.jpg",
    "prompt": "Take this [BEFORE_PHOTO] of a [ROOM_TYPE: living room / kitchen / bedroom / house facade] — dilapidated, damaged, overgrown. Create a seamless before/after restoration transformation video: same camera angle throughout, the scene gradually morphs — debris dissolves, walls rebuild, paint freshens, furniture appears — ending on a stunning fully renovated [RESTORED_STYLE: modern luxury / farmhouse / Victorian] result with warm inviting light. Smooth 6-second morph, photorealistic, cinematic slow dolly push-in. No text on screen.",
    "howto": [
      "Source before-photos (abandoned-house listings, Reddit r/AbandonedPorn, old real-estate photos) — same angle and framing matter most.",
      "Generate the restored after-version in Midjourney/Flux image-to-image, keeping the exact composition of the before-photo.",
      "Animate the morph in Google Flow / Veo 3 image-to-video; narrate what got fixed each beat. Hook rule = show the AFTER for 1 second first, then 'yeh kaise bana?' open loop; title keyword-first: 'Abandoned Since [YEAR] → Dream [STYLE] Home (AI Restoration)'."
    ],
    "tips": [
      "Title formula: '[Room] Restoration — You Won't Believe the After' — the before/after gap is the click.",
      "Add chapters for each restoration stage; viewers skip ahead but stay longer overall."
    ],
    "tags": [
      "viral-niche",
      "youtube",
      "faceless",
      "restoration",
      "before-after",
      "ai-video"
    ],
    "trending": true,
    "popularity": 84
  },
  {
    "id": "ns-20261015-facebook",
    "title": "AI Miniature Cooking Videos — Viral Tiny Chef Niche (Facebook)",
    "category": "Viral Niches",
    "tool": "Kling / Veo 3",
    "difficulty": "Beginner",
    "desc": "Scale contrast (tiny chef, real food) creates instant delight, and food is Facebook's highest-share category. Every share pushes the reel into new feeds, and Facebook search indexes captions — keyword-rich captions keep it discoverable for months. Is niche ki videos 196.7M/161.3M/138.9M/109.4M views tak gayi hain.",
    "image": "images/niches/niche-grid-miniature-cooking.jpg",
    "prompt": "Ultra-realistic AI miniature cooking video: a tiny chef [CHEF_ACTION: flipping a coin-sized pancake / grilling a thumb-sized burger / piping frosting on a thimble cake / plating a matchbox sushi set] in a hyper-detailed miniature [KITCHEN_STYLE: rustic farmhouse kitchen / modern chef kitchen / outdoor BBQ]. Sizzle implied through visible steam and bubbling, extreme close-up macro shots, shallow depth of field, warm appetizing lighting, satisfying slow-motion final reveal of the finished tiny [DISH]. Square or vertical format, 20-35 seconds. No text on screen.",
    "howto": [
      "Generate the miniature kitchen and tiny chef stills in Midjourney/Flux — keep the scale contrast extreme (tiny chef, real-looking food).",
      "Animate the cooking action in Kling / Veo 3 image-to-video; add sizzling ASMR audio in CapCut.",
      "Caption = the dish name + searchable keywords (miniature cooking, tiny food, satisfying ASMR) + question CTA ('Would you eat this tiny burger?'). Hook rule = the tiny food must be visibly sizzling within the first 2 seconds — a pattern interrupt."
    ],
    "tips": [
      "Hook: the tiny chef's first sizzle inside 2 seconds.",
      "End with 'Part 2 tomorrow?' — episode numbers build a follow-back loop."
    ],
    "tags": [
      "viral-niche",
      "facebook",
      "faceless",
      "cooking",
      "miniature",
      "ai-video",
      "food"
    ],
    "trending": true,
    "popularity": 94
  },
  {
    "id": "ns-20261016-instagram",
    "title": "AI Floor Transformation Reels — Viral Wrecked-to-Luxury Floor Niche (Instagram)",
    "category": "Viral Niches",
    "tool": "Midjourney / Kling",
    "difficulty": "Beginner",
    "desc": "The brain can't resist 'ugly → beautiful' contrast — it's the same dopamine loop as power-washing videos. The seamless morph makes viewers rewatch to catch the exact moment it changes, and replays count as retention that Instagram's algorithm rewards. Is niche ki videos 162.4M/128.7M/104.2M/81.5M views tak gayi hain.",
    "image": "images/niches/niche-grid-floor-transformation.jpg",
    "prompt": "Seamless AI floor transformation reel: a room interior where the [FLOOR_TYPE: glossy white marble with gold veins / herringbone parquet / emerald epoxy resin / blue-and-white ornate tiles] materializes and replaces a cracked, stained old floor in one continuous camera sweep. First frame = wrecked, dirty floor; last frame = the same room with the pristine new floor gleaming. Hyper-realistic interior photography, warm vibrant sunlight, smooth single-take camera move, vertical 9:16. No text on screen.\n\n[VARIABLES]: [FLOOR_TYPE] (pick one per reel), [ROOM_TYPE: living room / bedroom / kitchen / hallway], [LIGHTING: golden morning / bright noon / warm sunset].",
    "howto": [
      "STEP 1 — Generate the two states in Midjourney: same room, same angle, one 'before' (wrecked floor) and one 'after' (luxury floor with your chosen [FLOOR_TYPE]). Keep camera angle identical — consistency sells the transformation.",
      "STEP 2 — Animate the transition in Kling / Veo 3 (image-to-video, 'seamless morph transition'): start on the 'before' frame, morph into the 'after' frame over 5-7 seconds.",
      "STEP 3 — PRO TIP (Instagram hook rule): the wrecked floor must fill the FIRST 0.5 seconds — viewers stop scrolling for 'ugly → beautiful' contrast. Caption trick: 'Wait for the floor 😍' + ask 'Which floor is your favorite? 1, 2, 3 or 4?' — comments = shares = Explore page push."
    ],
    "tips": [
      "Hook = the wrecked floor in frame 1, luxury reveal at second 5.",
      "Post the same project as a Reel AND a carousel — Reels for reach, carousels for saves."
    ],
    "tags": [
      "viral-niche",
      "instagram",
      "faceless",
      "ai-video",
      "transformation",
      "before-after",
      "home-design"
    ],
    "trending": true,
    "popularity": 90
  },
  {
    "id": "ns-20261016-tiktok",
    "title": "Talking Food Characters — Viral Funny AI Food Personality Niche (TikTok)",
    "category": "Viral Niches",
    "tool": "Veo 3 + TTS",
    "difficulty": "Beginner",
    "desc": "Food is universal and faces are magnetic — a talking burger hijacks both. Relatable dialogue in a food's voice ('the pizza judges your diet') makes people tag friends, and tags are TikTok's strongest organic growth signal. Is niche ki videos 178.9M/145.3M/119.8M/92.6M views tak gayi hain.",
    "image": "images/niches/niche-grid-talking-food.jpg",
    "prompt": "Talking food character comedy short: a [FOOD_ITEM: cheeseburger with sunglasses / pair of tacos / mischievous donut / ramen bowl with noodle hair] with big expressive cartoon eyes and an animated mouth, delivering a funny 6-second monologue in a [PERSONALITY: sarcastic teenager / dramatic soap-opera diva / overly confident gym bro / anxious overthinker]. 3D animation style, vibrant colors, expressive lip-sync and exaggerated facial reactions, colorful matching food background, vertical 9:16.\n\nDIALOGUE (copy/paste into your TTS): \"[DIALOGUE: 1-2 short funny lines, relatable complaint or boast — e.g. 'You say diet starts Monday. I've seen 14 Mondays.']\"\n\n[VARIABLES]: [FOOD_ITEM], [PERSONALITY], [DIALOGUE].",
    "howto": [
      "STEP 1 — Generate the character still in Veo 3 / Midjourney (expressive eyes + big mouth are mandatory — they're what carries the comedy).",
      "STEP 2 — Animate + lip-sync in Veo 3 / Kling, then add a character voice in ElevenLabs (exaggerated tone matching [PERSONALITY]). The joke must LAND within 3 seconds.",
      "STEP 3 — PRO TIP (TikTok hook rule): start mid-sentence on the funniest word — no setup, pure punchline. Caption trick: duet/stitch bait like 'POV: your lunch has opinions' — stitches are TikTok's fastest growth lever."
    ],
    "tips": [
      "Give the food character a catchphrase — catchphrases get copied, and copies spread the niche.",
      "Post 2x per day — character niches explode on volume, not single hits."
    ],
    "tags": [
      "viral-niche",
      "tiktok",
      "faceless",
      "ai-video",
      "comedy",
      "talking-food",
      "animation"
    ],
    "trending": true,
    "popularity": 91
  },
  {
    "id": "ns-20261016-youtube",
    "title": "Secret Bunker Restorations — Viral High-Retention Restoration Storytelling (YouTube)",
    "category": "Viral Niches",
    "tool": "Midjourney + Kling / Google Flow",
    "difficulty": "Beginner",
    "desc": "Secret spaces + transformation + discovery = three of YouTube's strongest retention triggers stacked in one video. Viewers stay for the 'what's behind the next door' loop, and long watch time is exactly what the YouTube algorithm pays for with recommendations. Is niche ki videos 47.3M/35.8M/28.4M/19.6M views tak gayi hain.",
    "image": "images/niches/niche-grid-secret-bunker.jpg",
    "prompt": "Secret bunker restoration video: a hidden underground bunker [BUNKER_TYPE: Cold-War military shelter / luxury doomsday apartment / forest-cabin hidden vault / glass-ceiling sky bunker] discovered behind [ENTRANCE: a bookshelf door / a floor hatch / a rock panel], restored room-by-room into a cinematic luxury hideout. Story arc: mysterious entrance reveal → dusty derelict rooms → satisfying restoration montage → final golden-lit reveal walkthrough. Cinematic hyper-realistic, dramatic lighting contrast, 16:9, slow push-in camera moves. No on-screen text; narration-driven.\n\nNARRATION STYLE: [TONE: documentary / mysterious whisper / survival-guide].\n\n[VARIABLES]: [BUNKER_TYPE], [ENTRANCE], [TONE], [THEME: military / luxury / cozy / futuristic].",
    "howto": [
      "STEP 1 — Generate the scene set in Midjourney: entrance reveal shot, 3-4 'derelict' room shots, then the same rooms 'restored' with warm lighting. Keep room geometry consistent.",
      "STEP 2 — Animate slow push-ins in Kling / Google Flow; edit into a 8-12 min arc with chapter markers (entrance → rooms → reveal). Add deep documentary narration via ElevenLabs.",
      "STEP 3 — PRO TIP (YouTube hook rule): open with the most jaw-dropping restored room for 5 seconds BEFORE the title card — YouTube's first-30-seconds retention decides promotion. Title trick: 'I Found a SECRET Bunker... What Was Inside Is Insane' — curiosity gap + 'I' framing = clicks."
    ],
    "tips": [
      "Keyword-first titles under 60 chars: 'Abandoned Bunker Restoration — Sealed for 40 Years'.",
      "Tease the final reveal inside the first 30 seconds — the title's promise must appear on screen."
    ],
    "tags": [
      "viral-niche",
      "youtube",
      "faceless",
      "ai-video",
      "restoration",
      "bunker",
      "storytelling"
    ],
    "trending": true,
    "popularity": 82
  },
  {
    "id": "niche-drama-fruit-videos",
    "title": "AI Drama Fruit Videos — Animated Fruit Soap-Opera Mini-Dramas",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Insaan ka dimaagh unfinished stories ko bhool nahi sakta (Zeigarnik effect) — cliffhanger + cute fruit characters = share + follow ka cocktail. Is niche ki videos 168.9M/134.2M/109.7M/83.6M views tak gayi hain.",
    "image": "images/niches/niche-grid-drama-fruit-videos.jpg",
    "prompt": "Create a 45-second cinematic 3D-animated soap-opera scene: expressive Pixar-style fruit characters in a dramatic moment — [FRUIT CHARACTER A] and [FRUIT CHARACTER B] in a [RELATIONSHIP: lovers / rivals / family] at a [SETTING: restaurant / stage / home]. The story beat is [PLOT TWIST: betrayal / secret revealed / love confession / shocking return]. Exaggerated facial expressions, tears, gasps, dramatic slow-motion close-ups, soap-opera lighting with warm spotlights, emotional orchestral music swells. End on a cliffhanger freeze-frame with the twist unresolved.",
    "howto": [
      "Veo 3 me master prompt paste karo — [VARIABLE] slots apni story se fill karo (har video nayi mini-drama: 'banana ne apple ko dhokha diya!').",
      "CapCut/ElevenLabs AI voice me dramatic narration add karo — 8–10 sec setup, phir twist: 'lekin phir...'.",
      "Facebook Reels me upload karo — caption me episode number + 'Part 2 chahiye? Comment karo' (comments = algorithm boost)."
    ],
    "tips": [
      "HOOK RULE: pehle 3 second me twist ka glimpse dikhao (reverse-engineered hook).",
      "CAPTION TRICK: story ke 2 possible endings likho, viewers ko vote karne do.",
      "SERIES FORMAT: episode numbers — followers binge karte hain, watch time explode hota hai."
    ],
    "tags": [
      "viral-niche",
      "facebook",
      "video",
      "veo-3",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 91
  },
  {
    "id": "niche-spiritual-philosophy-shorts",
    "title": "Faceless Spiritual Philosophy Shorts — Illuminated Wisdom Reels",
    "category": "Viral Niches",
    "tool": "Midjourney",
    "difficulty": "Beginner",
    "desc": "Log spiritual quotes ko save aur share karte hain — saves + shares Instagram algorithm ke do sab se powerful signals hain; beautiful visuals = instant stop-scroll. Is niche ki videos 142.6M/118.4M/94.2M/72.8M views tak gayi hain.",
    "image": "images/niches/niche-grid-spiritual-philosophy-shorts.jpg",
    "prompt": "Ancient illuminated manuscript style artwork: [SYMBOL: golden tree of life / cosmic temple / meditating sage / glowing orb] rendered in gold leaf and intricate detail, luminous mystical glow, [COLOR PALETTE: sunrise gold / deep teal / rose dawn], serene and awe-inspiring, ultra-detailed, cinematic lighting, no text. On-screen text overlay (added in edit): '[ANCIENT WISDOM QUOTE — 1 to 2 lines]'.",
    "howto": [
      "Midjourney me master prompt chalao — har video ke liye naya symbol + color palette.",
      "CapCut me quote text overlay lagao — serif font, gold color, slow zoom-in.",
      "Instagram Reels me post karo — caption me quote + 'Save karo, kal phir yaad aayega' (saves = reach)."
    ],
    "tips": [
      "HOOK RULE: pehli line aisi jo dil ko lage ('Tumhari sab se badi taqat...').",
      "CAPTION TRICK: comment me poochho 'Part 2 me kaunsi wisdom chahiye?'.",
      "POSTING TIME: subah 7–9 AM PKT (US evening) — spiritual content ka golden hour."
    ],
    "tags": [
      "viral-niche",
      "instagram",
      "image",
      "midjourney",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 88
  },
  {
    "id": "niche-ai-reddit-storytime",
    "title": "AI Reddit Storytime Videos — Narrated Drama Stories That Explode Comments",
    "category": "Viral Niches",
    "tool": "Kling / Sora",
    "difficulty": "Beginner",
    "desc": "Moral dilemmas dimaagh ko judge karne pe majboor karte hain — log comment kiye baghair reh nahi sakte; healthy controversy + storytelling = comment-section explosion = algorithm push. Is niche ki videos 201.4M/176.9M/152.3M/124.7M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-reddit-storytime.jpg",
    "prompt": "Cinematic 3D-animated looping background scene for a narrated Reddit story: [SCENE TYPE: courtroom drama / rainy night window / detective desk with mysterious letter / wedding plot twist], moody dramatic lighting, rich colors, subtle looping motion (rain falling / embers rising / clouds moving), no people speaking, no text, vertical 9:16. The story being narrated: '[STORY HOOK: AITA for ___ / I caught my ___ / My wedding was ruined when ___]'.",
    "howto": [
      "Kling/Sora me master prompt se 8-second looping background generate karo.",
      "Reddit se gripping story uthao (r/AITA, r/confession) — apne words me summarize karo, AI voice me narrate karo, 60–90 sec.",
      "TikTok pe post karo — on-screen captions ON (85% log mute pe dekhte hain), hook text first 2 sec me."
    ],
    "tips": [
      "HOOK RULE: story ki sab se shocking line pehle bolo.",
      "CAPTION TRICK: 'Am I wrong? Comments me batao' (comments = viral fuel).",
      "LENGTH: 60–90 sec = Creator Rewards eligible."
    ],
    "tags": [
      "viral-niche",
      "tiktok",
      "video",
      "kling",
      "sora",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 95
  },
  {
    "id": "niche-ai-time-traveller-history",
    "title": "AI Time-Traveller History Vlogs — Cinematic Historical Reenactments",
    "category": "Viral Niches",
    "tool": "Veo 3 / Sora",
    "difficulty": "Beginner",
    "desc": "Insaan history ko textbook se nahi, aankhon se dekhna chahta hai — 'time travel' ka fantasy + vlog ka personal connection = parasocial bond; har episode nayi era = binge-watching. Is niche ki videos 14.8M/11.2M/8.6M/5.9M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-time-traveller-history.jpg",
    "prompt": "Cinematic first-person AI time-traveller vlog scene: [MAIN CHARACTER: young explorer in modern jacket, holding a camera — keep identical across episodes] arriving in [HISTORICAL ERA + YEAR: e.g. ancient Rome 44 BC / Tudor London 1536 / Titanic 1912], at [LOCATION: e.g. Colosseum arena / bustling market / grand ship deck]. Period-accurate details: [COSTUMES], [ARCHITECTURE], [DAILY ACTIVITY: gladiators training / merchants shouting / passengers strolling]. The character reacts with wonder and curiosity, vlog-style. Golden cinematic lighting, photorealistic, immersive wide shots + close-up reactions. NO modern objects accidentally in frame.",
    "howto": [
      "Veo 3 / Sora me master prompt paste karo — [VARIABLE] slots apni kahani se fill karo (Titanic ka deck? Cleopatra ka darbaar? Har episode nayi era).",
      "Consistent main character rakho — same time-traveller ka reference image har episode me reuse karo (character consistency = series feel, followers return).",
      "YouTube pe 8–12 min video banao — title me 'I Time Travelled to...' format, pehle 15 sec me era reveal (hook). Chapters add karo (0:00 Arrival, 2:00 The Market...)."
    ],
    "tips": [
      "HOOK RULE: pehle 15 sec me sab se shocking visual dikhao (jaise 'yeh hai Titanic ka asli deck!').",
      "TITLE TRICK: 'I Time Travelled to [Era]' format — curiosity gap unbeatable.",
      "DESCRIPTION: history hashtags (#AlternateHistory #TimeTravel) + pinned comment me 'Next era kaunsi ho?' (comments = ranking signal)."
    ],
    "tags": [
      "viral-niche",
      "youtube",
      "video",
      "veo-3",
      "sora",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 80
  },
  {
    "id": "niche-ghibli-style-stories",
    "title": "Ghibli-Style AI Story Videos — Cozy Fantasy Mini-Stories",
    "category": "Viral Niches",
    "tool": "Midjourney",
    "difficulty": "Beginner",
    "desc": "Nostalgia sab se powerful emotion hai — cozy fantasy scenes viewers ko bachpan wali safe feeling deti hain; log aise content ko share karte hain taake doosre bhi khush hon. Is niche ki videos 214.8M/176.3M/149.7M/121.5M views tak gayi hain.",
    "image": "images/niches/niche-grid-ghibli-style-stories.jpg",
    "prompt": "Cozy hand-painted anime fantasy style illustration, Studio Ghibli inspired charm: [SUBJECT: little girl with red umbrella / sleepy baby dragon / tiny witch on broomstick] in a [MAGICAL SETTING: glowing flower meadow at dusk / cloud-top cottage / cherry blossom train tunnel / sparkling ocean at sunset]. Add a [MAGICAL ELEMENT: drifting fireflies / floating lanterns / falling petals / leaping dolphins]. Warm nostalgic color palette, soft magical light, dreamy and heartwarming, ultra-detailed, no text.",
    "howto": [
      "Midjourney me master prompt chalao — [VARIABLE] slots fill karke har video ke liye naya magical scene (4–6 second ke cozy clips ki series).",
      "CapCut me soft piano + fireflies/fireplace SFX add karo — emotional 60-sec mini-story (discovery → wonder → warm payoff).",
      "Facebook Reels pe upload karo — caption me 'Yeh dekh kar dil khush ho gaya 🥺 Tag someone who needs this' (shares = reach)."
    ],
    "tips": [
      "HOOK RULE: pehle 2 sec me sab se magical frame (glow + wonder) — scroller ruk jaye.",
      "CAPTION TRICK: 'POV: tumhari childhood wali khushboo' + tag-a-friend line.",
      "SHARE BAIT: cozy content log apne pyaron ko bhejte hain — shares Facebook ka kingmaker signal hai."
    ],
    "tags": [
      "viral-niche",
      "facebook",
      "image",
      "midjourney",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 96
  },
  {
    "id": "niche-ai-cryptid-sightings",
    "title": "AI Cryptid Sighting Reels — Found-Footage Mystery Encounters",
    "category": "Viral Niches",
    "tool": "Veo 3 / Kling",
    "difficulty": "Beginner",
    "desc": "Ambiguity dimaagh ko pareshan karti hai — 'real hai ya fake?' ka sawaal logon ko comment karne pe majboor karta hai; mystery + debate = comments + shares ka double engine. Is niche ki videos 188.2M/152.6M/127.9M/99.4M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-cryptid-sightings.jpg",
    "prompt": "Realistic found-footage style cryptid encounter frame: [CRYPTID: massive hairy Bigfoot / long-necked lake monster / glowing-eyed winged mothman / hovering desert orbs] spotted in a [LOCATION: dense redwood forest / misty mountain lake at dawn / dark pine woods / desert ranch at dusk], captured in [FOOTAGE STYLE: trail camera still / night-vision with flashlight beam / dashcam at night]. Tense mysterious atmosphere, slightly grainy and candid like real wildlife footage, no people speaking, no text.",
    "howto": [
      "Veo 3 / Kling me master prompt se 8–10 sec realistic encounter clip generate karo — [VARIABLE] slots se har video naya cryptid + location.",
      "Trail-cam / night-vision aesthetic rakho — thodi grain, thodi shakiness; zyada perfect mat banao (imperfection = believability).",
      "Instagram Reels pe post karo — caption: 'REAL ya AI? 🤔 Comments me vote karo' + suspenseful audio. AI label lagana mat bhoolo (platform policy)."
    ],
    "tips": [
      "HOOK RULE: pehle 1.5 sec me cryptid ka glimpse — 'did I just see that?' moment.",
      "CAPTION TRICK: 'Real ya AI?' debate bait — comments explode hote hain, saves bhi.",
      "TRENDING AUDIO: creepy ambient sounds use karo — watch time barhta hai."
    ],
    "tags": [
      "viral-niche",
      "instagram",
      "video",
      "veo-3",
      "kling",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 93
  },
  {
    "id": "niche-spotlight-silent-pov-travel-asmr",
    "title": "Silent POV Travel ASMR — 4K First-Person Tours With Pure ASMR Sound (TikTok Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Wanderlust plus ASMR triggers a genuine relaxation response, and with no spoken language the audience is the entire planet. Seamless loops inflate average watch time — the single metric TikTok's algorithm rewards hardest. Is niche ki videos 184.2M/156.7M/132.4M/98.9M views tak gayi hain.",
    "image": "images/niches/niche-grid-silent-pov-travel-asmr.jpg",
    "prompt": "AI video prompt: \"[VARIABLE: LOCATION] first-person POV [VARIABLE: WALKING / DRIVING / BOAT RIDE], no people visible, no talking, no text overlays. Golden-hour cinematic lighting, ultra-detailed 4K. Natural ASMR soundscape only: [VARIABLE: SOUNDSCAPE — e.g. footsteps on gravel / waves lapping / market ambience / tires on snow]. Slow steady camera movement, 45-60 seconds, ending that loops seamlessly back to the start.\"",
    "howto": [
      "Generate the POV clip in Veo 3 / Kling / Sora with a [LOCATION] + [SOUNDSCAPE] combo; keep camera motion slow and steady — fast pans break the ASMR spell.",
      "Strip all music and voice; keep only raw ambient audio. Crossfade the tail into the head so the video loops invisibly and watch time compounds.",
      "Post daily with the location in the caption plus #asmr #povtravel #satisfying — one location series per week builds returning viewers."
    ],
    "tips": [
      "TikTok hook rule: the FIRST frame must be a 'where is this?!' vista — no intro, no logo.",
      "Caption trick: ask 'Guess the country 👇' to trigger comment floods (comments = reach).",
      "Post 7-9 PM in your target audience's timezone; leave duets/stitches on so viewers guess locations on camera."
    ],
    "tags": [
      "viral-niche",
      "tiktok",
      "creator-niche",
      "faceless",
      "asmr",
      "travel"
    ],
    "trending": true,
    "popularity": 92
  },
  {
    "id": "niche-spotlight-ai-horror-story-docs",
    "title": "AI Horror Story Narrations — Mr. Nightmare-Style Creepy True Stories (YouTube Niche)",
    "category": "Viral Niches",
    "tool": "Kling",
    "difficulty": "Beginner",
    "desc": "Fear plus curiosity is the strongest retention cocktail on YouTube — horror audiences binge late at night in long sessions, feeding the session-time metric the algorithm optimizes for. Stories are infinite, free to source, and never go out of season. Is niche ki videos 29.4M/24.8M/19.6M/14.3M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-horror-story-docs.jpg",
    "prompt": "AI visual prompt (Kling / Sora image mode): \"Dark cinematic horror-documentary still for a true scary story video. Scene: [VARIABLE: LOCATION — e.g. abandoned school hallway / foggy forest road / Victorian mansion in a thunderstorm]. One flickering light source, deep shadows, subtle film grain, no text, no faces looking at camera. Mood: [VARIABLE: MOOD — e.g. oppressive silence before a scream / something watching from the dark]. 16:9, photorealistic.\" Voiceover prompt (ElevenLabs / TTS): \"Narrate this true horror story in a slow, low, calm documentary voice: [VARIABLE: STORY — 800-1200 words, first-person witness account, open-loop cliffhanger every 3 minutes].\"",
    "howto": [
      "Source one 10-15 minute true-story script per video (r/nosleep, r/letsnotmeet, local urban legends) with a cliffhanger planted every ~3 minutes.",
      "Generate 8-12 dark AI visuals matching each story beat; animate with slow Ken Burns zooms in CapCut so no frame ever sits still.",
      "Narrate with a deep calm AI voice, layer a low drone + heartbeat SFX underneath, and title it '3 Creepy True [VARIABLE] Stories'."
    ],
    "tips": [
      "YouTube hook rule: the first 15 seconds must deliver the story's scariest single line ('He was standing at the foot of my bed.') — never open with channel intros.",
      "Add chapters per story for retention graphs; thumbnail = one terrified face or glowing doorway, never repeating the title text; end-screen straight into the next story for session time."
    ],
    "tags": [
      "viral-niche",
      "youtube",
      "creator-niche",
      "faceless",
      "horror",
      "storytelling"
    ],
    "trending": true,
    "popularity": 81
  },
  {
    "id": "niche-spotlight-did-you-know-fact-reels",
    "title": "Did-You-Know Fact Reels — Mind-Blowing Facts With Vivid AI Visuals (Facebook Niche)",
    "category": "Viral Niches",
    "tool": "Midjourney",
    "difficulty": "Beginner",
    "desc": "Curiosity gaps are neurologically irresistible — the brain hates an unanswered question and watches to close it. Facts are universally shareable across Facebook's 35-55 core demographic, and every share is free distribution to a lookalike audience. Is niche ki videos 168.5M/142.3M/117.8M/89.4M views tak gayi hain.",
    "image": "images/niches/niche-grid-did-you-know-fact-reels.jpg",
    "prompt": "AI visual prompt (Midjourney / Veo 3): \"Hyper-vivid documentary-style visual for a mind-blowing fact. Subject: [VARIABLE: FACT SUBJECT — e.g. blue whale next to a scuba diver for scale / pyramids of Giza at sunset / giant octopus on a glowing coral reef]. Extreme detail, saturated colors, awe-inspiring composition, vertical 9:16, no text. The fact to visualize: '[VARIABLE: FACT — one shocking true sentence]'.\"",
    "howto": [
      "Pick ONE shocking-but-true fact per Reel (science, animals, history, space) and verify it in 30 seconds — a single false fact kills audience trust permanently.",
      "Generate the visual, then add the fact as bold on-screen text in CapCut plus a curiosity-gap voiceover ('A blue whale's heart is the size of a car...').",
      "Post 1-2 per day, share winners to niche Facebook Groups, and pin your best performer to the top of the page."
    ],
    "tips": [
      "Facebook hook rule: the fact itself must land in the first 1.5 seconds — on screen AND in voiceover, no buildup.",
      "Caption trick: end every post with 'Tag someone who didn't know this 🤯' — shares are Facebook's real currency and this niche earns them.",
      "At $15+ RPM this is a monetization niche: enable in-stream ads from day one."
    ],
    "tags": [
      "viral-niche",
      "facebook",
      "creator-niche",
      "faceless",
      "facts",
      "reels"
    ],
    "trending": true,
    "popularity": 90
  }
];

if (typeof module !== "undefined") {
  module.exports = { CATEGORIES, PROMPTS };
}
