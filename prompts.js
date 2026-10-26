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
  },
  {
    id: "viral-channel-trailer-veo3",
    title: "Viral Faceless Channel Trailer — Veo 3 Prompt for New YouTube Niches",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Intermediate",
    desc: "Launch any faceless niche channel with an 8-second cinematic trailer that sells the whole niche in one glance — the fastest way to look established from day one.",
    prompt: "Create a cinematic 8-second channel trailer for a brand-new faceless YouTube niche channel. Open on a black screen with a deep bass hit, then smash-cut through three 2-second hyper-detailed scenes that define the niche: [NICHE — e.g. abandoned places / ocean mysteries / luxury tech]. Scene 1: extreme close-up macro shot pulling back to reveal the full scene, dramatic rim lighting, slow motion. Scene 2: sweeping aerial drone move, golden-hour haze, particles drifting through the air. Scene 3: slow push-in on the most iconic object of the niche, lens flare, shallow depth of field. Final beat: a bold 3D chrome channel name slams into center frame with a shockwave ring and glowing embers. Photorealistic, 16:9, ultra-detailed textures, film grain, dramatic color grade, epic trailer energy, no people, no watermarks, smooth deliberate camera moves.",
    howto: [
      "Open Veo 3 and start a new 16:9 video generation.",
      "Replace [NICHE] with your channel's exact niche and [channel name] with your brand.",
      "Paste the full prompt and generate 2-3 variations.",
      "Pick the variation with the strongest final title-slam frame.",
      "Upload it as your YouTube channel trailer and pin it to your homepage."
    ],
    tips: [
      "Swap the three scenes to match any niche — the trailer formula works for history, tech, animals, or mysteries.",
      "Add a 1-second black flash between scenes for extra trailer punch and higher perceived production value."
    ],
    tags: ["youtube", "creator-niche", "channel trailer", "veo 3", "faceless"],
    trending: true,
    popularity: 96
  },
  {
    id: "satisfying-repair-loop-kling",
    title: "Satisfying Object Restoration Loop — Kling Prompt for Viral TikTok Niche Pages",
    category: "Video Prompts",
    tool: "Kling",
    difficulty: "Beginner",
    desc: "A rusty vintage object restored to gleaming new in a seamless 5-second loop — the restoration niche is one of TikTok's most rewatchable formats.",
    prompt: "Generate a seamless 5-second vertical loop of a satisfying object restoration for a TikTok niche page. Subject: a rusty vintage [OBJECT — e.g. pocket watch / lantern / bicycle bell] centered on a dark wooden workbench under warm workshop lighting. The loop: rust and grime visibly dissolve and flake away in waves as polished metal gleams through beneath, tiny sparks and dust particles floating upward, the object slowly rotating 360 degrees. Start and end frames must be identical so the loop is invisible. Hyper-detailed macro textures — brushed steel, oil sheen, wood grain. Cinematic warm color grade, shallow depth of field, subtle camera drift, 9:16 vertical, photorealistic, no hands, no text, no watermark, mesmerizing satisfying-loop energy built for endless replays.",
    howto: [
      "Open Kling and choose a 5-second 9:16 vertical generation.",
      "Replace [OBJECT] with any rusty vintage item that fits your niche.",
      "Paste the prompt and generate until the loop point is seamless.",
      "Post with restoration and satisfying hashtags plus your niche tag.",
      "Reply to 'how did you do this?' comments with a link to your page for follower conversion."
    ],
    tips: [
      "Batch-generate 5 different objects in one sitting to stock a full week of daily posts.",
      "Objects with moving parts (gears, hinges, lids) get 2-3x more saves than static ones."
    ],
    tags: ["tiktok", "creator-niche", "restoration", "kling", "satisfying"],
    trending: false,
    popularity: 91
  },
  {
    id: "lost-city-documentary-sora",
    title: "Lost City Documentary Opener — Sora Prompt for Mystery YouTube Niche Channels",
    category: "Video Prompts",
    tool: "Sora",
    difficulty: "Intermediate",
    desc: "A fog-shrouded lost city revealed at dawn — a premium documentary-style opener that gives mystery niche channels instant authority.",
    prompt: "Create a 10-second cinematic documentary opener for a mystery YouTube niche channel. Aerial shot: a fog-shrouded ancient lost city at dawn — crumbling stone temples, overgrown plazas, a river of mist winding between ruins, birds scattering as the camera glides low over broken rooftops. The camera slowly descends through the fog layer, revealing carved stone faces and collapsed colonnades in golden-pink sunrise light, dust motes drifting. The visual rhythm builds like a score: a slow ominous push-in, growing scale, an eerie calm before the title reveal. Photorealistic, 16:9, ultra-detailed stone and foliage textures, volumetric fog, cinematic color grade, film grain, no people, no modern objects, no text — mysterious and awe-inspiring, the kind of opener viewers associate with premium documentary channels.",
    howto: [
      "Open Sora and start a new 16:9 generation at maximum duration.",
      "Paste the prompt exactly, keeping the fog and sunrise lighting cues.",
      "Generate 2 variations and pick the one with the cleanest descent through the fog.",
      "Add your channel title card over the final 2 seconds in your editor.",
      "Reuse the same opener across videos to build a recognizable series brand."
    ],
    tips: [
      "Pair this opener with a whispered voiceover hook for a 40%+ average view duration lift.",
      "Change 'lost city' to any location — sunken ships, desert ruins, ice caves — for a whole mystery series."
    ],
    tags: ["youtube", "creator-niche", "documentary", "sora", "mystery"],
    trending: false,
    popularity: 88
  },
  {
    id: "neon-product-loop-runway",
    title: "Neon Product Ad Loop — Runway Prompt for Instagram Reels Niche Pages",
    category: "Video Prompts",
    tool: "Runway",
    difficulty: "Beginner",
    desc: "A product floating in pulsing neon light trails — a scroll-stopping 6-second loop built for Instagram Reels product and gadget niche pages.",
    prompt: "Generate a 6-second seamless vertical product loop for an Instagram Reels niche page. A sleek [PRODUCT — e.g. perfume bottle / smartwatch / sneaker] floats and slowly rotates at the center of a dark studio void, wrapped in pulsing neon light trails — electric blue and hot magenta — that orbit the product like energy ribbons. Tiny light particles sparkle off the product's reflective surfaces; every 2 seconds a soft shockwave ripple of color washes across the frame. Background: pure black with a faint neon grid floor reflection. Loop point invisible — start and end frames identical. Hyper-glossy product rendering, cinematic lighting, 9:16 vertical, ultra-smooth motion, no hands, no text, no watermark — built to stop thumbs mid-scroll and loop endlessly in Reels.",
    howto: [
      "Open Runway and start a 6-second 9:16 text-to-video generation.",
      "Replace [PRODUCT] with the item your niche page features.",
      "Paste the prompt and generate until the loop is seamless.",
      "Post as a Reel with trending audio underneath at low volume.",
      "Pin your best-performing loop to your profile grid."
    ],
    tips: [
      "Blue-magenta neon outperforms all other color pairs for gadget and beauty niches.",
      "Add a price or 'link in bio' text overlay in Instagram's editor — never burn it into the AI video."
    ],
    tags: ["instagram", "creator-niche", "product", "runway", "ads"],
    trending: false,
    popularity: 85
  },
  {
    id: "emotional-rescue-short-google-flow",
    title: "Emotional Animal Rescue Short — Google Flow Prompt for Facebook Viral Pages",
    category: "Video Prompts",
    tool: "Google Flow",
    difficulty: "Intermediate",
    desc: "A complete cry-then-smile rescue story in 12 seconds — engineered for Facebook shares, comments, and the animal-niche algorithm.",
    prompt: "Create a 12-second emotional animal-rescue short for a Facebook viral page, structured as a 3-beat story. Beat 1 (4s): a small shivering [ANIMAL — e.g. puppy / kitten / duckling] alone in the rain under a gray sky, slow push-in, muted colors, heartbreaking vulnerability. Beat 2 (4s): warm hands gently lift the animal; the camera follows upward as rain stops and golden sunlight breaks through clouds, the color grade warming dramatically. Beat 3 (4s): the now-clean, happy animal runs toward camera across a sunlit meadow, tail wagging, slow motion, lens flare, pure joy. Photorealistic, 16:9, cinematic emotional arc, film grain, no text overlays, no watermarks, no dialogue — a complete cry-then-smile story in 12 seconds, engineered for Facebook shares and comments.",
    howto: [
      "Open Google Flow and generate in 16:9 for Facebook feed placement.",
      "Replace [ANIMAL] with the rescue animal your page features.",
      "Generate each 4-second beat separately for maximum control, then join them.",
      "Post with a caption asking viewers to name the animal — comments explode reach.",
      "Share to relevant animal-lover Facebook groups for the first-hour push."
    ],
    tips: [
      "The rain-to-sunlight color shift is the share trigger — make beat 2's transition as dramatic as possible.",
      "End on a freeze-frame of the happy animal for a perfect shareable thumbnail."
    ],
    tags: ["facebook", "creator-niche", "animals", "google flow", "story"],
    trending: false,
    popularity: 90
  },
  {
    id: "underwater-city-drone-veo3",
    title: "Underwater Ruins Drone Flyover — Veo 3 Prompt for TikTok Discovery Niches",
    category: "Video Prompts",
    tool: "Veo 3",
    difficulty: "Beginner",
    desc: "A drone dives beneath turquoise water into a sunken ancient city — pure wonder-bait for TikTok discovery and mystery niche pages.",
    prompt: "Generate a breathtaking 8-second vertical drone flyover of sunken ancient ruins for a TikTok discovery niche. The camera skims just above crystal-clear turquoise water, then dives beneath the surface in one continuous move — revealing a vast submerged city: toppled marble columns, a half-buried temple, schools of silver fish streaming through broken archways, sunbeams piercing the water in god rays. The drone weaves between columns, tiny bubbles trailing, then rises back above the waves as seabirds scatter. Photorealistic, 9:16 vertical, ultra-detailed underwater caustics and marble textures, cinematic teal-and-gold grade, smooth continuous camera motion, no people, no text, no watermark — pure wonder-bait built for the 'wait, what is this place?' comment section.",
    howto: [
      "Open Veo 3 and start a 9:16 vertical generation.",
      "Paste the prompt exactly — the continuous dive move is the viral mechanic.",
      "Generate 3 variations and keep the one with the smoothest water transition.",
      "Post with a curiosity caption like 'Archaeologists don't want you to see this'.",
      "Duet or stitch the top comment asking 'where is this?' to double the video's life."
    ],
    tips: [
      "God rays and fish schools are the two details viewers screenshot — make sure both are prominent.",
      "Swap 'sunken city' for 'ice cave' or 'lava tube' to spin off a whole discovery series."
    ],
    tags: ["tiktok", "creator-niche", "drone", "veo 3", "ruins"],
    trending: false,
    popularity: 87
  },
  {
    id: "niche-thumbnail-pack-midjourney",
    title: "Viral Niche Thumbnail Pack — Midjourney Prompt for YouTube CTR in Any Niche",
    category: "Image Prompts",
    tool: "Midjourney",
    difficulty: "Intermediate",
    desc: "A reusable Midjourney thumbnail formula — peak emotion, clean negative space, 3-element rule — that lifts CTR for any YouTube niche channel.",
    prompt: "Design a viral YouTube thumbnail concept in Midjourney that works for ANY niche: a hyper-expressive [SUBJECT — e.g. shocked explorer / giant product / dramatic animal] filling the right two-thirds of frame, mouth open or eyes wide in peak emotion, dramatic rim lighting, ultra-detailed skin/fur/metal textures. Background: a bold, simple, high-contrast scene hinting at the video's payoff — explosion of color, glowing portal, before/after split. Leave the left third as clean negative space in a solid punchy color for the title text you'll add later. Style: --ar 16:9 --style raw --v 6.1, punchy saturated colors, crisp edges readable at 120px wide, 3-element maximum rule — subject, background payoff, empty space. No text in the image itself. Render 4 variations, pick the one with the strongest single emotion, and reuse the seed for a consistent channel look.",
    howto: [
      "Open Midjourney and replace [SUBJECT] with the emotional focal point of your video.",
      "Paste the prompt and render 4 variations in 16:9.",
      "Pick the variation with the single strongest emotion, readable at thumbnail size.",
      "Add 3-5 words of bold title text in the left-third negative space with your editor.",
      "A/B test two thumbnail variants per video using YouTube's Test & Compare."
    ],
    tips: [
      "Never put text inside the Midjourney image — AI text renders badly and kills CTR.",
      "Reuse the same seed across a series so your channel grid looks instantly recognizable."
    ],
    tags: ["youtube", "creator-niche", "thumbnails", "midjourney", "ctr"],
    trending: false,
    popularity: 93
  },
  {
    id: "hidden-niche-goldmine-chatgpt",
    title: "Hidden Niche Goldmine — ChatGPT Prompt to Find Underserved Creator Niches",
    category: "Text Prompts",
    tool: "ChatGPT",
    difficulty: "Beginner",
    desc: "A ruthless niche-market analyst prompt that scores 25 sub-niches and hands you the top 7 underserved, monetizable creator niches with a 30-day content plan.",
    prompt: "You are a ruthless niche-market analyst for faceless content creators. My goal: find UNDERSERVED, monetizable creator niches for [PLATFORM: YouTube / TikTok / Facebook / Instagram] in 2026. Step 1: list 25 candidate sub-niches inside the broad topic of [BROAD TOPIC — e.g. history / finance / animals / DIY]. Step 2: for each, score 1-10 on: search demand, competition level (inverse), advertiser value (CPM potential), content repeatability, and AI-production feasibility. Step 3: rank them and present the top 7 as a table with scores, why each is underserved, and the exact viewer it attracts. Step 4: for the #1 niche, give me a 30-day content calendar: 12 video ideas with titles, hooks (first 3 seconds), and the AI tool to produce each (Veo 3, Kling, Sora, Runway, Google Flow, Midjourney). Step 5: list 5 existing channels in adjacent niches I can study, and what each one gets wrong that I can exploit. Be brutally honest — kill weak ideas, don't flatter me.",
    howto: [
      "Open ChatGPT and replace [PLATFORM] and [BROAD TOPIC] with your targets.",
      "Paste the full prompt and let it complete all 5 steps before interrupting.",
      "Copy the top-7 table into a doc — this is your niche shortlist.",
      "Run the prompt again with a different broad topic to compare opportunity sets.",
      "Validate the #1 pick by searching the platform for existing competition before committing."
    ],
    tips: [
      "Run it once per platform — the same broad topic produces totally different winners on TikTok vs YouTube.",
      "Ask ChatGPT to 'steelman the case AGAINST the #1 niche' to catch blind spots before you invest."
    ],
    tags: ["youtube", "creator-niche", "niche discovery", "chatgpt", "research"],
    trending: true,
    popularity: 97
  },
  {
    id: "platform-niche-ranker-gemini",
    title: "Platform Niche Ranker — Gemini Prompt to Pick the Best Niche for Each Platform",
    category: "Text Prompts",
    tool: "Gemini",
    difficulty: "Intermediate",
    desc: "Score one niche idea across YouTube, TikTok, Facebook, and Instagram — get a GO/ADAPT/SKIP verdict per platform plus a ranked launch order.",
    prompt: "You are a cross-platform content strategist. I have a niche idea: [YOUR NICHE — e.g. AI-restored historical photos / miniature cooking / urban exploration]. Score this ONE niche separately for YouTube, TikTok, Facebook, and Instagram on: audience size for the niche, competition density, algorithm fit (does the platform reward this format?), monetization paths, and growth speed in 2026. Present a 4-column comparison table with scores out of 10 and a verdict per platform: GO / ADAPT / SKIP. For every GO or ADAPT platform, specify the exact format to post (video length, aspect ratio, posting frequency), the first 10 video/post ideas tailored to that platform's culture, and the AI tool chain to produce them (Veo 3, Kling, Sora, Runway, Google Flow, Midjourney). End with a ranked launch order — which platform first, second, third — and the one metric per platform that tells me within 30 days whether to double down or pivot.",
    howto: [
      "Open Gemini and replace [YOUR NICHE] with your concrete niche idea.",
      "Paste the full prompt and review the 4-column comparison table.",
      "Start with the #1 ranked platform only — don't launch everywhere at once.",
      "Use the 10 platform-tailored ideas as your first month of content.",
      "Re-run monthly: platform algorithms shift, and verdicts change."
    ],
    tips: [
      "An ADAPT verdict usually means 'right niche, wrong format' — the format fix is in the prompt's output.",
      "Save the launch order — creators who chase all four platforms at once burn out by week three."
    ],
    tags: ["tiktok", "creator-niche", "strategy", "gemini", "platforms"],
    trending: false,
    popularity: 89
  },
  {
    id: "viral-format-deconstructor-claude",
    title: "Viral Format Deconstructor — Claude Prompt to Reverse-Engineer Winning Niche Formats",
    category: "Text Prompts",
    tool: "Claude",
    difficulty: "Advanced",
    desc: "Feed Claude 3-5 viral videos from your niche and get back their viral DNA plus a reusable format blueprint with 10 original video ideas.",
    prompt: "You are a viral-content forensic analyst. I will paste [LINKS or DESCRIPTIONS of 3-5 top-performing videos/posts] in my niche: [NICHE]. Deconstruct each one into its viral DNA: the exact hook mechanism in the first 3 seconds, the retention curve (what happens at 0:05, 0:15, 0:30 to stop the swipe), the emotional payload, the comment-bait element, the share trigger, and the loop/replay mechanic. Then build me a FORMAT BLUEPRINT: a reusable template combining the strongest DNA from all examples — with fill-in-the-blank slots for my own topics, timing markers, and the visual/audio beats an AI video tool (Veo 3, Kling, Sora, Runway, Google Flow) needs to execute it. Finally, give me 10 original video ideas using this blueprint that none of the analyzed creators have done, each with a predicted-virality score and the single biggest risk that could make it flop. No generic advice — everything must trace back to the examples I gave you.",
    howto: [
      "Open Claude and replace [NICHE] plus paste your 3-5 example videos or detailed descriptions.",
      "Paste the full prompt and study the viral DNA breakdown for patterns.",
      "Save the FORMAT BLUEPRINT as your channel's production template.",
      "Produce the highest predicted-virality idea first using the listed AI tool chain.",
      "After each video, feed Claude the results to refine the blueprint."
    ],
    tips: [
      "Pick examples from the last 90 days only — viral mechanics decay fast.",
      "The 'biggest risk' section is the real gold: it tells you what to fix before you publish."
    ],
    tags: ["youtube", "creator-niche", "analysis", "claude", "formats"],
    trending: false,
    popularity: 92
  },
  {
    "id": "niche-spotlight-ai-dark-psychology-reels",
    "title": "Dark Psychology Mind Tricks (Instagram Reels Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Your brain is wired to seek self-knowledge — mind-blowing psychology facts trigger the information-gap curiosity loop, and they get saved 3-5x more than talking-head videos because viewers bookmark them to re-read. Is niche ki videos 96.2M/74.8M/58.3M/42.7M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-dark-psychology-reels.jpg",
    "prompt": "AI video, [DURATION: 10-20 seconds], vertical 9:16: cinematic scene illustrating [MIND TRICK: the 'doorway effect' making you forget why you entered a room / the Zeigarnik effect keeping unfinished tasks in your mind / mirroring body language to build instant trust / the foot-in-the-door technique / scarcity making objects feel more valuable / the Baader-Meinhof phenomenon / the 'Ben Franklin effect'], visual style: [VISUAL STYLE: glowing brain neurons in purple and gold / puppet-master chessboard with golden strings / hypnotic galaxy spiral reflected in an eye / silhouetted figure among frozen statues], lighting: [LIGHTING: neon magenta-cyan glow on dark / dramatic spotlight / moonlit blue vs warm amber], suspenseful cinematic camera drift, the [KEY MOMENT: the realization hits at second 8 — a visual punch like the strings snapping], mysterious, curiosity-driving, no text, no watermark, no people speaking",
    "howto": [
      "Pick one mind trick per Reel; generate the cinematic visual in Veo 3, then add a voice-over explaining the trick (AI voice or your own) — voice + visuals = the full package.",
      "Hook formula: on-screen text 'Your brain is lying to you. Here's how:' in the first 1.5 seconds — psychology content lives or dies on the hook.",
      "Batch 7 tricks per week from one listicle ('12 Dark Psychology Tricks') so content never runs dry.",
      "Use Reels' native text-on-screen tool (not baked-in text) so Instagram indexes the keywords.",
      "Post in the evening (7-10 PM local) when curiosity-driven scroll mode peaks."
    ],
    "tips": [
      "Caption trick: end with 'Save this — you'll need trick #3 tomorrow.' Saves are Instagram's strongest ranking signal.",
      "Never reveal the trick's name in the first 3 seconds — name it only at the end so viewers watch through (open loop).",
      "Cross-post the same Reel to Shorts/TikTok with platform-native captions for triple distribution."
    ],
    "tags": [
      "viral-niche",
      "instagram",
      "creator-niche",
      "psychology",
      "reels",
      "faceless"
    ],
    "trending": true,
    "popularity": 95
  }
,
  {
    "id": "niche-spotlight-ai-horror-storytime",
    "title": "AI Horror Storytime Parts (TikTok Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Fear is the strongest retention drug — cliffhanger horror storytime turns viewers into binge-watchers, and TikTok reads the resulting completion rate as elite quality. Is niche ki videos 198.4M/167.2M/143.8M/115.9M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-horror-storytime.jpg",
    "prompt": "AI video, [DURATION: 45-60 seconds], vertical 9:16: [SCENE: abandoned asylum corridor with flickering lights / child's bedroom at midnight with a dark silhouette in the closet / foggy forest road with a handprint on the windshield / flooded basement with a rocking chair moving alone], [STORY BEAT: the narrator reaches the twist — the figure steps closer / the silhouette's head turns / the handprint appears FROM INSIDE / the chair stops as the light swings to reveal...], [MOOD: found-footage realism / slow cinematic dread / sudden jump-scare payoff], desaturated [COLOR GRADE: blue-grey with blood-red accent / cold moonlight blue vs sickly amber], camera moves like a frightened person backing away slowly, pure dread, no text, no watermark, no visible actors' faces",
    "howto": [
      "Split each story into 3-5 'Part' videos (60s each); end every part on a cliffhanger ('...and that's when the light went out. Part 4?').",
      "Script the narration with a simple 3-beat arc: normal setup, one wrong detail, implication of danger.",
      "Generate one key visual per story beat in Veo 3, then assemble in CapCut: slow zooms + heartbeat SFX + sudden silence.",
      "Record the narration in a calm, almost-bored voice — the contrast between a calm voice and scary visuals amplifies fear (the Mr. Nightmare technique).",
      "Pin Part 1 on your profile and link parts in comments so new viewers binge the whole story."
    ],
    "tips": [
      "Hook = the scariest line of the story spoken in the first 2 seconds ('The rocking chair was moving. Nobody was in the room.') — never start with 'welcome back'.",
      "Title formula: 'PART [N] — the [OBJECT] [DID SOMETHING IMPOSSIBLE]' — the impossible action is the curiosity gap.",
      "Post at 9-11 PM when viewers are alone in the dark — horror retention spikes at night."
    ],
    "tags": [
      "viral-niche",
      "tiktok",
      "creator-niche",
      "horror",
      "storytelling",
      "faceless"
    ],
    "trending": true,
    "popularity": 96
  }
,
  {
    "id": "niche-spotlight-ai-fantasy-mini-movies",
    "title": "AI Fantasy Mini-Movies (YouTube Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "AI erased Hollywood's budget barrier — bedroom creators now make blockbuster fantasy mini-movies that trigger awe, the rarest and most shareable emotion on YouTube. Is niche ki videos 61.4M/48.7M/35.2M/27.8M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-fantasy-mini-movies.jpg",
    "prompt": "AI video, [DURATION: 8-12 seconds per shot, chain 6-10 shots], 16:9 cinematic: [SHOT: a colossal dragon with emerald scales circling a moonlit cliffside castle / a mermaid warrior in pearl armor riding a giant seahorse through bioluminescent coral arches / a lone hero raising a flaming sword before a colossal stone golem awakening / luminous sky whales gliding past floating islands and a tiny airship], [FANTASY WORLD DETAIL: ancient runes glowing on stone / waterfalls pouring off floating islands / star-waterfalls in the night sky], [LIGHTING: moonlit teal and gold / bioluminescent blue-magenta / ember-lit orange and purple / pink-violet sunset], epic blockbuster cinematography, slow majestic camera moves, orchestral-scale grandeur, no text, no watermark, no modern objects",
    "howto": [
      "Write a 60-90s micro-story first (hero, impossible wonder, twist) — the fantasy visuals only work with a real narrative spine.",
      "Generate each shot in Veo 3 with the SAME [FANTASY WORLD DETAIL] phrase repeated so all shots share one coherent world.",
      "Assemble 6-10 shots in CapCut/Premiere, add royalty-free epic music, one title card at the start: '[WORLD NAME] — Part 1'.",
      "Publish as Shorts AND long-form: the same mini-movie as a 60s Short funnels viewers to the 5-8 min 'full movie' upload.",
      "End every mini-movie mid-moment ('the golem opened its eyes —') and pin a comment: 'Full story drops Friday' to build returning viewers."
    ],
    "tips": [
      "Thumbnail rule: one impossible creature + one tiny human for scale — scale contrast is the #1 CTR driver in fantasy.",
      "Title formula: '[SHE/HE] [DID THE IMPOSSIBLE] — AI Fantasy Film' — the impossible claim is the click.",
      "Publish 2-3x/week on a schedule: the channel that posts fantasy worlds on time builds a fandom, not just views."
    ],
    "tags": [
      "viral-niche",
      "youtube",
      "creator-niche",
      "fantasy",
      "ai-film",
      "faceless"
    ],
    "trending": true,
    "popularity": 94
  },
{
  "id": "abandoned-space-station-flythrough-veo3",
  "title": "Abandoned Space Station Flythrough — Veo 3 Prompt for Sci-Fi TikTok Niches",
  "category": "Video Prompts",
  "tool": "Veo 3",
  "difficulty": "Beginner",
  "desc": "Derelict space stations are TikTok's newest 'liminal horror' obsession — slow flythroughs of flickering mega-structures pull millions of views because viewers cannot look away from beautiful decay.",
  "prompt": "Slow cinematic flythrough of an abandoned space station interior in zero gravity. The camera drifts down a vast corridor lit only by flickering red emergency lights, dust motes and drifting paper floating in the air. It pushes through a torn bulkhead into a colossal observation dome cracked open to a swirling violet nebula, sparks drifting lazily from severed cables. Finally it glides onto the dark command deck where a single monitor still blinks green in the darkness. Liminal-space horror atmosphere, eerie and silent, ultra-detailed sci-fi cinematography, volumetric god rays, 9:16 vertical, photorealistic, no people, no text.",
  "howto": [
    "Open Veo 3 and paste the prompt above into the prompt box.",
    "Set aspect ratio to 9:16 and duration to 10-12 seconds for TikTok.",
    "Generate 3 clips (corridor, dome, command deck) and join them in CapCut.",
    "Add a low ambient drone sound or trending space audio — keep it quiet, the silence is the hook.",
    "Post with a curiosity caption ('NASA deleted this footage 👀') and reply to comments with Part 2."
  ],
  "tips": [
    "Never show people or text on screen — liminal horror works because the viewer's brain fills the emptiness.",
    "Swap 'space station' for 'underwater lab' or 'Antarctic station' to run the same format as a series.",
    "Post between 9-11 PM local time; late-night scrollers retain 2-3x longer on horror."
  ],
  "tags": [
    "sci-fi",
    "space",
    "horror",
    "tiktok",
    "creator-niche"
  ],
  "trending": true,
  "popularity": 94
},
{
  "id": "tiny-bug-barber-shop-kling",
  "title": "Tiny Bug Barber Shop — Kling Prompt for Comedy TikTok Niche Pages",
  "category": "Video Prompts",
  "tool": "Kling",
  "difficulty": "Beginner",
  "desc": "Tiny-world comedy is a retention machine: a miniature barbershop for insects gives viewers a joke, a world, and a 'wait, what happens next?' loop in 12 seconds.",
  "prompt": "Vertical 12-second comedy clip: a tiny barbershop built inside a hollow glowing mushroom, serving INSECTS. A beetle barber in a tiny apron carefully trims the antennae of a nervous ladybug sitting on a thimble chair, a spider sweeps the floor with a matchstick broom, warm fairy-light bulbs strung overhead, shaving foam swirls made of morning dew. The camera does a slow push-in, then a quick whip-pan to a hand-painted 'NEXT CUSTOMER' sign where an impatient caterpillar taps its tiny watch. Pixar-style 3D animation, big expressive cartoon eyes, warm cozy lighting, 9:16 vertical, no text except the sign, ultra cute and detailed.",
  "howto": [
    "Open Kling, start a new text-to-video generation and paste the prompt.",
    "Use 9:16 and the longest duration setting for a full mini-story arc.",
    "Generate 2-3 variants and keep the one where the 'next customer' gag lands.",
    "Add cartoon SFX (snip, boing, record-scratch) — silent cute clips underperform.",
    "Build a series: new 'customers' (snail, ant, butterfly) each week for returning viewers."
  ],
  "tips": [
    "The punchline lives in the last 2 seconds — the waiting customer gag is the loop bait.",
    "Character consistency sells the series: keep 'the beetle barber' identical in every episode.",
    "Pin a comment asking 'who should be next?' — comment answers become your episode queue."
  ],
  "tags": [
    "comedy",
    "tiny-world",
    "tiktok",
    "creator-niche",
    "kling"
  ],
  "trending": true,
  "popularity": 92
},
{
  "id": "lighthouse-keeper-storm-pov-sora",
  "title": "Lighthouse Keeper Storm POV — Sora Prompt for Faceless YouTube Horror Niches",
  "category": "Video Prompts",
  "tool": "Sora",
  "difficulty": "Intermediate",
  "desc": "First-person storm footage triggers primal awe: a lighthouse lantern room during a night storm delivers cinematic terror with zero filming, zero actors, zero budget.",
  "prompt": "First-person POV from inside a lighthouse lantern room during a violent night storm. Rain hammers the curved glass in sheets, lightning splits the black sky and silhouettes towering waves crashing against the rocks below. The giant rotating lamp sweeps its beam across the chaos, the camera slowly creaking with the rotation to follow the light. A distant ship silhouette struggles in the swell. Salt mist blasts the windows, an oil lamp flickers warm inside the room. Gothic maritime horror atmosphere, oppressive and beautiful, ultra-realistic storm cinematography, 9:16 vertical, no people, no dialogue.",
  "howto": [
    "Open Sora, paste the prompt, set 9:16 and 10 seconds.",
    "Generate 4-5 clips with the same 'lighthouse storm' seed words for consistency.",
    "Layer real storm audio (rain, thunder, creaking metal) under the clips.",
    "Chain clips into a 45-60s Short with escalating lightning strikes as the arc.",
    "Title it like found footage: 'The keeper vanished in 1987 — this was his last shift'."
  ],
  "tips": [
    "Never explain the story in the video — found-footage mystery doubles comment rates.",
    "Add one jump-frame (a shadow passing the glass at 0:32) for replay value.",
    "The same Sora workflow works for 'abandoned fire lookout' or 'ship bridge' variants."
  ],
  "tags": [
    "horror",
    "storm",
    "youtube",
    "creator-niche",
    "sora",
    "faceless"
  ],
  "trending": false,
  "popularity": 88
},
{
  "id": "origami-world-buildup-runway",
  "title": "Origami World Build-Up — Runway Prompt for Satisfying Instagram Reels",
  "category": "Video Prompts",
  "tool": "Runway",
  "difficulty": "Beginner",
  "desc": "Watch-time gold: a blank table folding itself into a paper world triggers the 'must see the finished version' reflex that pushes Reels past 1M views.",
  "prompt": "Satisfying build-up video on a clean white table: invisible hands fold a vast origami world from flat paper. A paper crane takes flight over folded paper mountains, an origami whale dives through a rippling paper sea, a cherry-blossom tree blooms from a single square of pink paper. The camera slowly orbits the table as each creation locks into place with a crisp snap. Paper rustle ASMR energy, crisp visible folds and textures, soft studio lighting, pastel color palette, clean minimal background, 9:16 vertical, hyper-satisfying, no text.",
  "howto": [
    "Open Runway, paste the prompt into text-to-video, 9:16, 10 seconds.",
    "Generate one clip per 'creation' (crane, whale, tree) for a multi-shot build-up.",
    "Cut on each 'snap' fold — hard cuts on the sound of paper keep retention high.",
    "Add subtle paper-rustle and pop SFX timed to every fold.",
    "Caption with a countdown ('wait for the tree 🌸') to force full watches."
  ],
  "tips": [
    "Film-style rule: the finished world must be visible for at least 3 full seconds — the payoff IS the watch time.",
    "Swap the theme monthly (origami ocean, origami city) and keep the same audio for brand recall.",
    "Save the final frame as a carousel post — Reels viewers save build-ups, saves drive the algorithm."
  ],
  "tags": [
    "origami",
    "satisfying",
    "instagram",
    "creator-niche",
    "runway"
  ],
  "trending": false,
  "popularity": 86
},
{
  "id": "molten-metal-pour-macro-flow",
  "title": "Molten Metal Pour Macro — Google Flow Prompt for Satisfying Reels Niches",
  "category": "Video Prompts",
  "tool": "Google Flow",
  "difficulty": "Intermediate",
  "desc": "Liquid metal is ASMR for the eyes: extreme-macro slow-motion pours of glowing metal dominate satisfying compilations because nobody can scroll past liquid fire.",
  "prompt": "Extreme macro slow-motion of glowing molten metal pouring in a hypnotic orange stream into a dark mold. Sparks bloom like fireworks, the metal surface ripples like liquid sunlight, and glowing embers drift upward through the darkness. The camera pushes impossibly close until the molten glow fills the entire frame, then pulls back as the metal cools through cherry red to charcoal black, crackling with glowing fracture patterns. Mesmerizing ASMR visuals, deep blacks against blazing orange, dramatic contrast, 9:16 vertical, ultra detailed, no text, no watermark.",
  "howto": [
    "Open Google Flow, paste the prompt, generate at 9:16.",
    "Generate the pour AND the cooling shot separately for a two-act clip.",
    "Slow the cooling shot to 0.5x — the color shift red-to-black is the retention peak.",
    "Layer deep metallic rumble audio under the pour; cut to silence at the final frame.",
    "End on the cracked black surface — the texture makes viewers rewatch."
  ],
  "tips": [
    "Never add music with lyrics — satisfying clips perform best with pure texture audio.",
    "One color palette per clip: orange-on-black only; mixed palettes kill the hypnotic effect.",
    "This prompt doubles as a YouTube Shorts 'oddly satisfying' channel pillar — batch 10 pours in one session."
  ],
  "tags": [
    "macro",
    "satisfying",
    "instagram",
    "creator-niche",
    "google-flow"
  ],
  "trending": false,
  "popularity": 84
},
{
  "id": "space-elevator-ride-veo3",
  "title": "Space Elevator Ride POV — Veo 3 Prompt for Viral YouTube Shorts Niches",
  "category": "Video Prompts",
  "tool": "Veo 3",
  "difficulty": "Beginner",
  "desc": "Awe is the most shareable emotion on Shorts: a first-person space-elevator ride from cloud level to orbit gives viewers a wonder-hit no real footage can match.",
  "prompt": "First-person ride up a space elevator: the camera looks out a glass pod window as the Earth curves below. Clouds shrink away, the sun rises in a razor-thin line of blue atmosphere, stars fade in above as the climber glides silently up the glowing ribbon cable. A slow tilt reveals the counterweight station gleaming in orbit above. The whole journey feels peaceful and awe-inspiring, like the quietest rollercoaster ever built. IMAX-quality space cinematography, photorealistic Earth, 9:16 vertical, no text, no people.",
  "howto": [
    "Open Veo 3, paste the prompt, 9:16, 10-12 seconds.",
    "Generate 3 clips: ascent, the atmosphere line, the station reveal — same ribbon-cable description each time.",
    "Join in CapCut with slow crossfades; no hard cuts — smoothness IS the aesthetic.",
    "Use a swelling ambient track that peaks exactly at the station reveal.",
    "Caption: 'One day this will be a real commute 🚀' — future-framing drives shares."
  ],
  "tips": [
    "The reveal shot (station in orbit) must be the thumbnail frame — scale contrast drives CTR.",
    "Add a tiny progress bar ('ALTITUDE: 100km → 36,000km') for educational channels.",
    "Comment bait: pin 'Would you ride it? 👇' — yes/no questions get 3x the comments."
  ],
  "tags": [
    "space",
    "sci-fi",
    "youtube",
    "creator-niche",
    "veo3"
  ],
  "trending": false,
  "popularity": 90
},
{
  "id": "chibi-profession-characters-midjourney",
  "title": "Chibi Profession Character Pack — Midjourney Prompt for Instagram Theme Pages",
  "category": "Image Prompts",
  "tool": "Midjourney",
  "difficulty": "Beginner",
  "desc": "Cute sells on autopilot: chibi profession characters are the backbone of sticker packs, merch, and theme pages with 500K+ followers — one prompt builds the whole cast.",
  "prompt": "Chibi character illustration, kawaii anime style: a cheerful [PROFESSION] with an oversized round head tilted playfully, huge sparkling eyes, blushing cheeks, and a tiny body, wearing a detailed [UNIFORM OR KEY TOOL OF THE PROFESSION]. The character stands proudly in a miniature scene of their workplace with [3-4 SCENE ELEMENTS, e.g. stethoscope, medicine cabinet, potted plant for a nurse]. Soft pastel background with subtle sparkles, thick clean linework, vibrant happy colors, premium sticker-art style, centered composition, clean white margin around the character --ar 1:1 --niji 6",
  "howto": [
    "Open Midjourney, paste the prompt and replace [PROFESSION], [UNIFORM OR KEY TOOL], and [SCENE ELEMENTS].",
    "Use --niji 6 for the kawaii anime look; --ar 1:1 keeps sticker proportions.",
    "Generate 4 variants, upscale the cutest, then remove the background with any bg-remover.",
    "Batch 20 professions in one session — you now own a full sticker pack.",
    "Post as a carousel ('Rate these 1-10 👇') or sell the pack on Etsy/Redbubble."
  ],
  "tips": [
    "Consistency trick: reuse the SAME seed phrase 'oversized round head, huge sparkling eyes' verbatim so the whole pack matches.",
    "Professions with strong props (chef, astronaut, barista) outperform generic ones 3-to-1.",
    "Facebook sticker-style pages pay real money for exclusive character packs — DM page admins with samples."
  ],
  "tags": [
    "chibi",
    "characters",
    "instagram",
    "facebook",
    "creator-niche"
  ],
  "trending": false,
  "popularity": 82
},
{
  "id": "no-film-niche-finder-chatgpt",
  "title": "No-Film Niche Finder — ChatGPT Prompt to Find Creator Niches With Zero Filming",
  "category": "Text Prompts",
  "tool": "ChatGPT",
  "difficulty": "Beginner",
  "desc": "The biggest excuse is 'I have no camera': this ChatGPT prompt hands you 20 faceless niches ranked by competition, each runnable with AI visuals alone.",
  "prompt": "Act as a faceless-content strategist who studies viral channels daily. List 20 content niches I can run on [PLATFORM] in 2026 without ever filming myself, showing my face, or buying physical products — using only AI-generated visuals plus my voice or an AI voiceover. For each niche give: (1) niche name, (2) why it works RIGHT NOW in 2026, (3) 3 specific video ideas I could post this week, (4) difficulty 1-5, (5) monetization potential (ads, affiliates, digital products). Rank all 20 from lowest competition to highest. Exclude niches needing on-camera talent, real-world filming, or physical inventory. Be specific — no generic answers like 'motivational videos'.",
  "howto": [
    "Open ChatGPT, paste the prompt and replace [PLATFORM] with YouTube, TikTok, or Instagram.",
    "Copy the ranked list into a doc and highlight the 5 with difficulty 1-2.",
    "For your top 3, ask a follow-up: 'Give me 30 video titles for niche #1'.",
    "Validate each finalist: search the platform — under 50 serious channels means green light.",
    "Pick ONE, commit to 30 videos in 60 days before judging it."
  ],
  "tips": [
    "Run the prompt once per platform — the same niche can be low-competition on TikTok and saturated on YouTube.",
    "Ask for the list twice and compare: niches appearing in both runs are the most robust.",
    "The 'why it works RIGHT NOW' column is your content angle — turn it into your channel's pinned intro video."
  ],
  "tags": [
    "niche-discovery",
    "faceless",
    "youtube",
    "creator-niche",
    "chatgpt"
  ],
  "trending": true,
  "popularity": 96
},
{
  "id": "platform-format-porter-gemini",
  "title": "Platform Format Porter — Gemini Prompt to Clone One Viral Format Across YouTube, TikTok, Facebook & Instagram",
  "category": "Text Prompts",
  "tool": "Gemini",
  "difficulty": "Intermediate",
  "desc": "One idea, four platforms, zero extra filming: this Gemini prompt reverse-engineers any viral video and rewrites it natively for YouTube, TikTok, Facebook, and Instagram.",
  "prompt": "You are a multi-platform content strategist. Here is a viral [SOURCE PLATFORM] video format — [PASTE A DESCRIPTION OR TRANSCRIPT OF THE VIDEO]: First, break it down into its core mechanics: the hook structure, the pacing pattern, the visual pattern, and the sound strategy. Then give me the EXACT adaptation for each of YouTube Shorts, TikTok, Facebook Reels, and Instagram Reels — same idea, but with the rewritten hook, the ideal length, the on-screen text rules, and the posting nuance for EACH platform. Finish with 3 'same format, brand-new topic' variations I can produce this week without filming anything new.",
  "howto": [
    "Open Gemini, paste the prompt with a real viral video's description or transcript.",
    "Save the 4-platform breakdown as your channel's format bible.",
    "Produce the TikTok version first (fastest feedback), then port winners to the other three.",
    "Keep the visual pattern identical across platforms; only the hook and length change.",
    "Track which platform's version wins per format — double down on the winner's nuance."
  ],
  "tips": [
    "Feed Gemini winners from SMALLER platforms — formats that win on TikTok often explode on Facebook Reels where competition is thinner.",
    "The 'sound strategy' line is the hidden gold: audio trends rarely port automatically, so follow Gemini's per-platform sound swaps.",
    "Re-run the prompt monthly with that month's viral format — your format library becomes a compounding asset."
  ],
  "tags": [
    "youtube",
    "tiktok",
    "facebook",
    "instagram",
    "creator-niche"
  ],
  "trending": false,
  "popularity": 89
},
{
  "id": "trend-to-evergreen-funnel-claude",
  "title": "Trend-to-Evergreen Funnel — Claude Prompt to Build a 365-Day Niche Calendar",
  "category": "Text Prompts",
  "tool": "Claude",
  "difficulty": "Advanced",
  "desc": "Trends die, systems don't: this Claude prompt converts ONE viral trend into a full 365-day content calendar of pillars, trend-riders, and recycled winners.",
  "prompt": "You are a senior content strategist for faceless creator channels. Take this trending topic in my niche: [TREND]. Build me a complete 365-day content system for a faceless [PLATFORM] channel where I can produce [X] hours per week. Deliver: (A) 12 'pillar' evergreen videos that will still get views in 2 years, (B) 36 'trend-riding' videos mapped to seasonal spikes through the year, (C) 12 'recycled' ideas that repackage my best performers with new angles. Output as a month-by-month table: month | video title | format | why this video compounds. Prioritize ideas I can make with AI-generated visuals and voiceover only. No filler — every row must earn its place.",
  "howto": [
    "Open Claude, paste the prompt, fill in [TREND], [PLATFORM], and [X] hours.",
    "Export the calendar table into a spreadsheet — this is your year.",
    "Start with the 3 pillar videos of the current quarter; they anchor everything.",
    "Batch-produce each month's 3 trend-riders in one weekend session.",
    "Review quarterly: promote the best performer into a pillar and recycle the worst."
  ],
  "tips": [
    "The 'why this video compounds' column is your SEO brief — paste it into your title/description workflow.",
    "Feed Claude your actual analytics after month 1 ('these 3 videos won') and ask it to re-rank the remaining calendar.",
    "Pillar videos should be 20% longer than trend-riders — depth is what makes them rank for years."
  ],
  "tags": [
    "trends",
    "evergreen",
    "youtube",
    "creator-niche",
    "claude"
  ],
  "trending": false,
  "popularity": 87
}

,
  {
    "id": "niche-spotlight-ai-diy-craft-builds",
    "title": "AI DIY Craft Builds (Facebook Niche)",
    "category": "Viral Niches",
    "tool": "Google Flow",
    "difficulty": "Beginner",
    "desc": "Realistic AI craftsman videos so lifelike viewers can't tell they're AI — pages in this niche run 9.8M+ followers on pure AI content. Is niche ki videos 189.4M/164.8M/141.2M/117.6M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-diy-craft-builds.jpg",
    "prompt": "Realistic AI video, [DURATION: 6-8 seconds], 9:16 vertical: [SCENE: a skilled craftsman assembling a miniature wooden cabin in a warm workshop / the same craftsman repairing a vintage radio on a cluttered workbench / hands carving an ornate wooden owl, wood curls flying / tiny craftsmen building a tiny house on a giant workbench], [CHARACTER: describe once and reuse in EVERY video, e.g. 'weathered man in a brown leather apron, rolled-up sleeves, silver-streaked beard'], warm tungsten workshop lighting, shallow depth of field, hyper-detailed wood grain and tool textures, subtle camera push-in, photorealistic, no text, no watermark, no cartoon look, no morphing",
    "howto": [
      "Create ONE consistent craftsman character first (ChatGPT image: describe him once, save the description) — reuse it in every prompt so viewers follow a 'person', not random clips.",
      "Generate 6-8s clips in Google Flow with the master prompt above, swapping only [SCENE] each time.",
      "Add an ElevenLabs voiceover: one curiosity sentence per video — 'He spent 40 days building this…'",
      "Edit in CapCut: hard cuts every 2-3 seconds, real workshop ASMR sounds under the voiceover.",
      "Post 1-2x/day as Reels + in-page video; pin 'Full build on the page' to grow followers, not just views."
    ],
    "tips": [
      "Hook rule: first frame must show the FINISHED object, then rewind to the build — 'Wait till you see how he made this…'",
      "Caption trick: '100% AI — can you believe it? 🤯' sparks comment debates that the algorithm rewards.",
      "Keep the same apron/character across 30+ videos — consistency turns casual viewers into subscribers."
    ],
    "tags": [
      "viral-niche",
      "facebook",
      "diy",
      "crafts",
      "faceless",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 93
  }
,
  {
    "id": "niche-spotlight-ai-dream-home-tours",
    "title": "AI Dream Home Tours (Instagram Niche)",
    "category": "Viral Niches",
    "tool": "Midjourney",
    "difficulty": "Beginner",
    "desc": "Impossible AI-generated luxury homes — floating mansions, cave villas, treehouse estates — the most-saved content format on Reels. Is niche ki posts 148.3M/121.9M/103.7M/84.5M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-dream-home-tours.jpg",
    "prompt": "Cinematic architectural photograph, [HOME: a glass mansion floating above a waterfall at sunset, infinity pool merging into the sky / a luxury villa carved inside a glowing cave with a turquoise underground pool, lanterns and tropical plants / an extravagant multi-level treehouse mansion at dusk, glowing windows, rope bridges / a futuristic glass dome home in a desert at twilight, purple-orange sky, stars appearing], [LIGHTING DETAIL: dramatic sunset clouds / warm lantern glow / magical dusk light / violet twilight], ultra-luxury interior design visible, 8k architectural photography, dramatic composition --ar 4:5 --style raw",
    "howto": [
      "Generate 4-6 dream-home images in Midjourney with the master prompt above, swapping only [HOME] each time.",
      "Animate each image in Runway or Kling (slow push-in, 5 seconds each) to turn them into Reels-ready clips.",
      "Build a 20-30s Reel: 4 homes, one on-screen hook: 'Which one would you pick? 🏡'",
      "Caption with a question + 3 luxury hashtags + #aidreamhome for discovery.",
      "Post daily at 7-9 PM; reply to every 'where is this?' comment with 'All AI — which should I build next?'"
    ],
    "tips": [
      "Hook rule: lead the Reel with the MOST impossible home — saves happen in the first 3 seconds.",
      "Title trick: 'Houses that don't exist (yet)' outperforms 'dream homes' because of the curiosity gap.",
      "Repost the same 4 homes as a carousel — carousels get 2x the saves of Reels in this niche."
    ],
    "tags": [
      "viral-niche",
      "instagram",
      "luxury",
      "real-estate",
      "architecture",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 91
  }
,
  {
    "id": "niche-spotlight-ai-true-crime-cold-cases",
    "title": "AI True Crime Cold Cases (TikTok Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Unsolved-mystery retellings with dark cinematic AI visuals — the faceless storytelling format that dominates TikTok's top Creator Rewards RPM. Is niche ki videos 173.6M/149.8M/126.4M/98.2M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-true-crime-cold-cases.jpg",
    "prompt": "Dark cinematic AI video, [DURATION: 7-10 seconds], 9:16 vertical: [SCENE: an abandoned cabin in a foggy forest at night, one window glowing / a detective's evidence board with pinned photos and red string in a lamplit dark room / an empty foggy highway at night, distant headlights approaching / old case files, a magnifying glass and a flickering candle on a desk in a dark archive], eerie unresolved mood, single strong light source, dramatic shadows, film-noir teal-and-amber grade, slow creeping camera push-in, no people in close-up, no text, no watermark",
    "howto": [
      "Pick a real unsolved case (public records/Wikipedia) — never name living suspects or present theories as fact.",
      "Write a 45-60s script: the mystery in 15s, three creepy facts, end mid-question ('…and the door was locked from the INSIDE.').",
      "Generate 4-5 clips in Veo 3 with the master prompt above, matching one clip to each script beat.",
      "ElevenLabs narration, slow and low; burn captions ON (most viewers watch muted first).",
      "Post 1-2x/day; pin 'Part 2 tomorrow' and reply to comments with the next clue to pull followers back."
    ],
    "tips": [
      "Hook rule: open with the single creepiest fact — never with 'this is the story of…'",
      "Caption trick: 'Nobody has solved this in 40 years 😨' — open loops drive profile visits and follows.",
      "Always add 'case files are public record' in the caption to avoid misinformation flags."
    ],
    "tags": [
      "viral-niche",
      "tiktok",
      "true-crime",
      "mystery",
      "storytelling",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 94
  },
  {
    "id": "breakfast-rush-hyperlapse-veo3",
    "title": "Breakfast Rush Hyperlapse — Veo 3 Prompt for Viral TikTok Food Niches",
    "category": "Video Prompts",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "A dawn-to-brunch hyperlapse of a street-food breakfast stall — steam, sizzles and sunrise compressed into 8 loopable seconds. Food hyperlapses are TikTok's most rewatched niche: one pan, one camera move, infinite loops.",
    "prompt": "Generate an 8-second vertical (9:16) hyperlapse video in Veo 3 of a bustling street-food breakfast stall from pre-dawn darkness to morning rush. Style: warm cinematic food cinematography, shallow depth of field, golden-hour glow. The camera slowly arcs right-to-left across the stall. SHOW: the vendor lighting the grill in blue dark (second 0-1), eggs cracking and sizzling in extreme close-up (1-2), steam billowing past the lens (2-3), a queue of hands receiving wrapped food at hyper-speed (3-5), sunrise flaring through the steam (5-6), then the frame freezing on one perfect steaming plate sliding toward the camera (6-8). Loop-friendly: the last frame must visually match the first frame's angle so it repeats seamlessly. Details: crackling oil sounds implied, vibrant orange-and-gold palette, film-grain texture, NO people faces in focus, NO text overlays, NO watermarks.",
    "howto": [
      "Open Veo 3, set output to 9:16 vertical, 8 seconds, and paste the prompt above.",
      "Render 3 variations (change only the food: tacos, paratha, pancakes) and keep the most loopable one.",
      "Export and upload to TikTok as a seamless loop with trending breakfast ASMR audio.",
      "Caption format: 'POV: the stall that feeds 400 people before 8am 🍳'",
      "Post between 7-9 AM local time; duet-stitch food creators commenting on technique.",
      "Repeat weekly with a new stall/cuisine — the format IS the niche."
    ],
    "tips": [
      "The loop point is everything: Veo's 'match last frame to first' instruction is what turns 8 seconds into infinite watch time.",
      "Keep faces out of focus — faceless food loops get saved 3x more than vendor close-ups in this niche.",
      "Test the same clip with 3 different trending sounds before declaring a winner; sound picks the winner more than the visual does."
    ],
    "tags": [
      "tiktok",
      "food",
      "hyperlapse",
      "viral-niche",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 94
  },
  {
    "id": "mythical-beast-rescue-kling",
    "title": "Mythical Beast Rescue — Kling Prompt for Fantasy YouTube Niche Channels",
    "category": "Video Prompts",
    "tool": "Kling",
    "difficulty": "Intermediate",
    "desc": "A cinematic rescue scene where a tiny dragon is freed from a crystal trap — the 'creature rescue' format that turned pet-rescue channels into multi-million-subscriber fantasy empires.",
    "prompt": "Generate a 10-second 16:9 cinematic fantasy clip in Kling: a moonlit forest clearing, bioluminescent mist, and a small injured baby dragon (iridescent teal scales, torn wing) trapped inside a translucent crystal cage. The camera starts in a slow aerial push-in. At second 3, a cloaked figure steps forward and places a glowing hand on the crystal — cracks spiderweb outward in slow motion. At second 6 the crystal SHATTERS in crystalline slow-motion shards; the dragon's wing flutters free, and it looks directly into the camera with huge amber eyes. Final 2 seconds: the dragon hops onto the figure's outstretched hand as the mist swirls. Style: photorealistic fantasy film still, volumetric moonlight, shallow focus on the dragon's eyes at the end, particles of crystal dust hanging in the air. Sound-implied: a deep resonant crack, then a soft chime. NO dialogue, NO text, NO watermark, no cartoon look — strictly live-action cinematic realism.",
    "howto": [
      "Open Kling, set 16:9, 10 seconds, and paste the prompt — render the clip twice and keep the better eye-contact take.",
      "Add a licensed fantasy orchestral swell in editing, timed to the crystal shatter.",
      "Upload to YouTube as a Short AND a 60s looped 'creature rescue story' with a one-line narration hook.",
      "Title format: 'He freed the last dragon of the crystal forest 🐉'",
      "Batch 5 beasts (phoenix chick, moonfox kit, stone golem cub) — one universe, many uploads.",
      "Pin a comment: 'Which beast should we rescue next?' to harvest comment ideas."
    ],
    "tips": [
      "The money frame is second 8: direct eye contact from the creature — thumbnails cut from that frame double CTR in this niche.",
      "Serializing one rescue per week builds a returning audience; viewers subscribe to see 'what gets rescued next'.",
      "Kling nails creature fur/scale detail at 10s length — longer renders drift, so never stretch this prompt past 12 seconds."
    ],
    "tags": [
      "youtube",
      "fantasy",
      "animals",
      "storytelling",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 92
  },
  {
    "id": "abandoned-asylum-descent-sora",
    "title": "Abandoned Asylum Descent — Sora Prompt for Horror TikTok Niche Pages",
    "category": "Video Prompts",
    "tool": "Sora",
    "difficulty": "Intermediate",
    "desc": "A slow flashlight descent down a decaying asylum stairwell — the found-footage dread format that dominates horror TikTok, no actors or sets needed.",
    "prompt": "Generate a 10-second vertical (9:16) found-footage horror clip in Sora: first-person POV descending a crumbling concrete stairwell inside an abandoned asylum at night. Lighting: a single shaky flashlight beam cutting through dust motes, emergency-exit sign glowing red at the bottom landing. SHOW: the flashlight sweeps left to reveal peeling paint and a wheelchair silhouette covered in cobwebs (second 2), the beam jerks right as a door SLAMS somewhere below (second 4 — audio-implied thud), the descent continues, and at second 8 the beam lands on a child's shoe sitting alone on the bottom step. Hold on the shoe. Style: ultra-realistic bodycam aesthetic, lens flare from the flashlight, subtle camera shake, film grain, desaturated teal-and-black palette with only the red exit sign for color. NO jump-scare face, NO monster reveal, NO text overlays, NO watermark. The terror comes from what is NOT shown.",
    "howto": [
      "Open Sora, set 9:16 vertical, 10 seconds, paste the prompt, and render until you get the shoe frame perfectly centered.",
      "Layer a faint heartbeat sound under the clip — it triples average watch time on horror clips.",
      "Post as a 3-part series: 'Part 1: we went in. Part 2 is worse.' — episodic dread is this niche's growth engine.",
      "Caption: 'Nobody claimed the building after 1987. The shoe is still there.'",
      "Reply to every 'what was that' comment with the next part — comments ARE the algorithm fuel here.",
      "Publish between 9 PM - midnight for maximum 'watching in the dark' shares."
    ],
    "tips": [
      "Never show the monster: clips that END on an unexplained object outperform jump-scare clips 2:1 in saves.",
      "The flashlight sweep is your retention curve — re-render if the beam lingers anywhere too long before second 4.",
      "Sora's grain sells realism; don't 'clean up' the footage in editing — polish kills found-footage credibility."
    ],
    "tags": [
      "tiktok",
      "horror",
      "urbex",
      "pov",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 88
  },
  {
    "id": "glass-marble-rollercoaster-runway",
    "title": "Glass Marble Rollercoaster — Runway Prompt for Satisfying Instagram Reels Niches",
    "category": "Video Prompts",
    "tool": "Runway",
    "difficulty": "Beginner",
    "desc": "A glowing glass marble racing down an impossible spiral track — the oddly-satisfying physics loop that Instagram's algorithm can't stop recommending.",
    "prompt": "Generate an 8-second vertical (9:16) satisfying-physics clip in Runway: a luminous amber glass marble rolling down an elaborate hand-built wooden rollercoaster track with spiral drops, see-saw levers, and chime bars, all on a dark walnut tabletop. Camera: smooth tracking shot glued to the marble, alternating with a top-down overview every 2 seconds. SHOW: the marble released at the top (second 0), spiraling down through a copper funnel that spins it faster (1-3), tripping a row of tiny brass bells in ascending pitch (3-5), launching off a final ramp and landing in a glass bowl with a soft *tink* (5-7), then the camera settles on the marble gently rocking to a stop (7-8). Loop-friendly: final resting position matches the release frame's composition for a seamless repeat. Style: warm studio lighting, macro-sharp focus on the marble, bokeh background, rich amber-and-walnut palette, ASMR-grade implied sound. NO hands visible, NO text, NO watermark.",
    "howto": [
      "Open Runway, set 9:16 vertical, 8 seconds, paste the prompt, and render 2-3 takes until the bowl landing is clean.",
      "Add real marble-rolling ASMR audio or a trending 'satisfying' sound — audio is 50% of the satisfaction.",
      "Post to Instagram Reels with a caption like 'Wait for the chime bars 🔊'",
      "Make 3 variants (different marble colors/tracks) and post them as a carousel teaser + 3 Reels — a mini-series.",
      "Cross-post to TikTok and YouTube Shorts; this niche ports perfectly across all three.",
      "Pin the comment 'Track 4 was the hardest to build' to spark 'how is this real' debate."
    ],
    "tips": [
      "The bell sequence at seconds 3-5 is the dopamine peak — re-render until the pitch ascent is clearly visible.",
      "Dark tabletop + glowing marble is the highest-contrast combo in this niche; bright backgrounds underperform.",
      "Series it: viewers who save one marble run follow to collect the whole 'track collection'."
    ],
    "tags": [
      "instagram",
      "satisfying",
      "oddlysatisfying",
      "viral-niche",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 93
  },
  {
    "id": "jellyfish-bloom-timelapse-flow",
    "title": "Jellyfish Bloom Timelapse — Google Flow Prompt for Ocean Facebook Niches",
    "category": "Video Prompts",
    "tool": "Google Flow",
    "difficulty": "Beginner",
    "desc": "Hundreds of jellyfish pulsing through a sunlit blue void in timelapse — the calming 'nature therapy' format Facebook's older audience shares endlessly.",
    "prompt": "Generate a 10-second horizontal (16:9) cinematic timelapse in Google Flow: a massive bloom of moon jellyfish drifting upward through deep blue water toward a shimmering sunlit surface. SHOW: the frame opens dark and quiet (second 0-1), then dozens of translucent bells emerge from below, pulsing in synchronized waves (1-4), light rays pierce the water column as the swarm thickens (4-6), a single large jellyfish with trailing oral arms glides close past the camera in sharp focus (6-8), and the bloom dissolves into glowing particles rising into the light (8-10). Style: BBC-documentary underwater cinematography, bioluminescent edge glow on each bell, volumetric god rays, deep sapphire-to-cyan gradient, ultra-smooth slow drift. Implied sound: deep sub-bass swell. NO divers, NO text, NO watermark, no aquarium glass — pure open ocean.",
    "howto": [
      "Open Google Flow, set 16:9, 10 seconds, paste the prompt, and render until the close-pass jellyfish is tack-sharp.",
      "Overlay gentle ambient piano or ocean sounds in editing — Facebook's 35+ audience watches these with sound ON.",
      "Upload as a Facebook Reel AND a native 16:9 video post; the feed post gets the shares, the Reel gets the reach.",
      "Caption: '500 million years of perfection. No thoughts, just pulse. 🪼'",
      "Turn on 'loop' in the player description; calming loops get rewatched 4-6x on Facebook.",
      "Series idea: 'One creature, one minute of calm' — daily ocean therapy builds a loyal share-base."
    ],
    "tips": [
      "The second-6 close pass is the thumbnail AND the hook — nothing else in the frame should compete with it.",
      "Facebook shares explode when you name the species in the caption; 'Moon jellyfish (Aurelia aurita)' beats 'jellyfish'.",
      "Timelapse + pulse sync is the retention trick: viewers subconsciously breathe with the rhythm and stay."
    ],
    "tags": [
      "facebook",
      "ocean",
      "nature",
      "calming",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 86
  },
  {
    "id": "viral-finance-thumbnail-pack-midjourney",
    "title": "Viral Finance Thumbnail Pack — Midjourney Prompt for YouTube CTR in Finance Niches",
    "category": "Image Prompts",
    "tool": "Midjourney",
    "difficulty": "Intermediate",
    "desc": "Cinematic money-visual thumbnails with shocked-expert energy — the exact thumbnail formula behind finance YouTube's highest-CTR videos, generated in one Midjourney batch.",
    "prompt": "Create a YouTube thumbnail image in Midjourney --ar 16:9 --v 6 --style raw: a dramatic 3D-rendered scene of a golden hundred-dollar bill tornado spiraling upward from a cracked smartphone screen, a shocked businessman silhouette at the bottom edge reacting with hands on head, dark navy background with glowing green stock-chart lines rising behind the tornado, cinematic rim lighting on the bills, hyper-detailed currency texture, shallow depth of field, vibrant gold-and-emerald color pop against the dark background. Leave the TOP-RIGHT quadrant empty for title text. Composition rules: one dominant object (the money tornado), maximum 2 colors glowing, extreme contrast, readable at 120px wide, NO text rendered in the image, NO watermark, NO photorealistic faces (silhouette only). --chaos 15",
    "howto": [
      "Open Midjourney, paste the prompt, and generate 4 variants — swap only the object (tornado of coins, burning credit card, vault door) for a matching set.",
      "Pick the variant with the strongest single focal point at 120px wide — shrink it to test before choosing.",
      "Add 1-4 words of bold condensed text (e.g. '$10,000 TRUTH') in your editor using the empty top-right quadrant.",
      "A/B test thumbnails on your 2 best-performing finance videos first — CTR lift shows within 48 hours.",
      "Keep a 'winner gallery' of every thumbnail above 8% CTR; re-brief Midjourney on the winners monthly.",
      "Reuse the formula across videos: same background system, new hero object = instant channel branding."
    ],
    "tips": [
      "The empty-quadrant rule is what separates amateur thumbnails from pro ones — never let Midjourney fill the whole frame.",
      "Silhouette > face: faceless thumbnails keep the mystery and outperform talking-head crops in finance by a wide margin.",
      "'--chaos 15' gives you usable variety without breaking the composition; push it higher and the money tornado turns abstract."
    ],
    "tags": [
      "youtube",
      "finance",
      "thumbnails",
      "ctr",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 95
  },
  {
    "id": "profitable-micro-niche-excavator-chatgpt",
    "title": "Profitable Micro-Niche Excavator — ChatGPT Prompt to Find High-RPM Faceless Niches",
    "category": "Text Prompts",
    "tool": "ChatGPT",
    "difficulty": "Advanced",
    "desc": "Digs 50 layers deep past 'obvious' niches to surface micro-niches with high advertiser RPM, low competition, and AI-producible content — the research edge faceless channels pay consultants for.",
    "prompt": "You are a YouTube niche researcher who has analyzed 10,000 faceless channels. I want to start a faceless [SHORTS or LONG-FORM] channel I can run with AI-generated visuals and voiceover only, working [X] hours per week. Excavate 10 MICRO-niches for me — each one must be a specific sub-niche (not 'finance' but '1950s diner menu recreations', not 'true crime' but 'unsolved lighthouse disappearances'). For EACH micro-niche give me: (1) the exact audience (age + why they watch), (2) the advertiser profile that pays high RPM here, (3) 3 reference channels under 100K subs already winning, (4) why it's UNDERSERVED right now, (5) the 5 first videos to publish in order, (6) a competition score /10 and an RPM estimate /10. Then rank all 10 by (RPM × ease-of-production ÷ competition) and tell me your #1 pick with the reason a consultant would charge $500 for. Be brutally honest about which picks are traps.",
    "howto": [
      "Open ChatGPT, paste the prompt, and fill in [SHORTS or LONG-FORM] and your weekly [X] hours.",
      "Verify the #1 pick's competition score yourself: search the niche on YouTube and count quality competitors.",
      "Check the 3 reference channels' Social Blade growth — declining views = dying niche, walk away.",
      "Run the prompt again with a different X-hours value; niches change when your production capacity changes.",
      "Pick ONE niche and commit 30 videos before judging — niche-hopping resets the algorithm's learning.",
      "Save the full output as your channel bible; revisit the other 9 picks when you're ready to expand."
    ],
    "tips": [
      "The 'why it's underserved' field is the real gold — it tells you your content angle before you make video one.",
      "Ask ChatGPT 'which of these 10 will still work in 2028?' as a follow-up; longevity filters out fad traps.",
      "High RPM + low competition + AI-producible is a triangle — if ChatGPT can't defend all three, it's not your niche."
    ],
    "tags": [
      "youtube",
      "faceless",
      "niche-discovery",
      "strategy",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 96
  },
  {
    "id": "rival-niche-translator-gemini",
    "title": "Rival Niche Translator — Gemini Prompt to Reverse-Engineer Competitors' Niches for YouTube, TikTok, Facebook & Instagram",
    "category": "Text Prompts",
    "tool": "Gemini",
    "difficulty": "Intermediate",
    "desc": "Feed Gemini any competitor's channel and get their niche decoded — then translated into your own winnable version for YouTube, TikTok, Facebook, and Instagram.",
    "prompt": "You are a competitive-intelligence analyst for creator channels. Here is a competitor I want to learn from: [CHANNEL NAME + LINK, or paste their 10 best video titles]: Decode their niche into a formula: (A) the exact audience psychographic, (B) the 3 content pillars they rotate, (C) their hook template (show me the sentence structure, not just examples), (D) their upload cadence and why it works, (E) the ONE thing they do badly that I can exploit. Then translate their formula into MY version for each platform: give me a differentiated channel angle for YouTube, TikTok, Facebook, and Instagram — same proven demand, but positioned so I'm not a clone. Finish with my first 10 video titles (2-3 per platform) using their hook template but my angle, and a 90-day plan to overtake them in their weakest pillar. Ethical framing throughout: reverse-engineer the strategy, never copy content.",
    "howto": [
      "Open Gemini, paste the prompt with a real competitor's channel link or their 10 top video titles.",
      "Save the 'formula' section — it's a reusable template for analyzing ANY future competitor.",
      "Pick ONE platform to attack first (the one where the rival's weakest pillar lives).",
      "Write the 10 titles into your content calendar before making anything — strategy before production.",
      "Track the rival's uploads for 2 weeks while you produce; timing your launch against their gaps doubles early traction.",
      "Re-run the analysis quarterly — niches drift, and the exploitable weakness moves."
    ],
    "tips": [
      "The 'what they do badly' section is your entire launch strategy — most creators never attack it, so the lane is open.",
      "Don't pick the biggest competitor: mid-size channels (50K-500K) have proven formulas but haven't fortified their weak pillar yet.",
      "Gemini's platform translations are the differentiator — a YouTube niche and a TikTok niche are never the same product."
    ],
    "tags": [
      "youtube",
      "tiktok",
      "facebook",
      "instagram",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 89
  },
  {
    "id": "zero-competition-niche-validator-claude",
    "title": "Zero-Competition Niche Validator — Claude Prompt to Score Any Niche Before You Commit",
    "category": "Text Prompts",
    "tool": "Claude",
    "difficulty": "Advanced",
    "desc": "A 10-point forensic audit that scores any niche idea on demand, competition, monetization, and AI-producibility — so you never waste 6 months on a dead-end channel again.",
    "prompt": "You are a ruthless niche auditor. I am considering this niche: [NICHE IDEA]. Score it 0-100 across these 10 dimensions, with evidence and a verdict for each: (1) Search demand — is anyone actually looking for this? (2) Competition density — how many quality creators already own it? (3) Content durability — will these videos still get views in 3 years? (4) Production cost — can I make 100 videos with AI tools + [X] hours/week? (5) Monetization depth — ad RPM, affiliates, digital products, sponsors (rank each)? (6) Format repeatability — is there a template I can run 100 times without going stale? (7) Platform fit — rank YouTube/TikTok/Facebook/Instagram for this niche and explain the winner. (8) Trend risk — is this a wave or a foundation? (9) Audience loyalty — will viewers subscribe, or just watch and leave? (10) Exit options — could I sell this channel or brand later? Then give a final GO / NO-GO verdict, the 3 biggest risks, and the single experiment (one video, under $20) that would prove or kill the niche in 7 days.",
    "howto": [
      "Open Claude, paste the prompt, fill in [NICHE IDEA] and your weekly [X] hours.",
      "Read the verdict last — read the 10 scores first so the verdict can't bias you.",
      "Run the $20 experiment Claude prescribes before any branding, logos, or channel setup.",
      "Score 3-5 niche ideas back-to-back and compare the totals — the winner usually surprises you.",
      "Re-validate your CURRENT niche annually; a GO in 2024 can be a NO-GO in 2026.",
      "Keep every audit in one doc — your future self will thank you when comparing expansion options."
    ],
    "tips": [
      "Dimension 6 (format repeatability) kills more niches than competition does — a niche you can't templatize is a hobby, not a channel.",
      "The $20 experiment is the whole prompt in one move: if you can't design a cheap test, the niche is too expensive to learn.",
      "Ask Claude to argue AGAINST its own verdict as a follow-up; the counter-argument reveals the blind spots."
    ],
    "tags": [
      "niche-discovery",
      "strategy",
      "youtube",
      "validation",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 87
  },
  {
    "id": "cozy-campfire-storytime-kling",
    "title": "Cozy Campfire Storytime — Kling Prompt for Viral Facebook Story Niches",
    "category": "Video Prompts",
    "tool": "Kling",
    "difficulty": "Beginner",
    "desc": "A crackling campfire under a star-swept sky with drifting embers — the ultimate 'stop scrolling and breathe' background loop for Facebook storytelling pages.",
    "prompt": "Generate a 10-second 16:9 cinematic loop in Kling: a cozy campfire burning in a stone fire-ring at night, deep in a pine forest clearing. SHOW: flames dancing in warm orange and gold (0-3), a shower of glowing embers rising and drifting toward a Milky-Way sky (3-6), the camera slowly pulling back to reveal a wooden log bench beside the fire with a folded blanket on it (6-8), then settling into a gentle hold on the flames (8-10). Style: ultra-realistic cinematic night photography, firelight flickering across nearby pine trunks, tack-sharp embers against soft bokeh, deep navy sky with visible stars, rich amber-and-navy palette. Loop-friendly: the final flame pattern must flow into the opening frame for a seamless repeat. Implied sound: crackling fire, distant owl. NO people, NO tents with logos, NO text, NO watermark — pure atmosphere.",
    "howto": [
      "Open Kling, set 16:9, 10 seconds, paste the prompt, and render until the ember shower is dense and golden.",
      "Overlay a real campfire-crackle ASMR track — Facebook's storytelling audience keeps these loops running for minutes.",
      "Use it as the evergreen background for narrated story videos: your voiceover + this loop = a whole niche format.",
      "Post one 'campfire story' per evening (7-9 PM) with a one-line hook: 'The night the lights went out in our village...'",
      "Loop it 6x for a 60-second Reel version — long loops rack up watch time on Facebook.",
      "Seasonal variants (snow falling, autumn leaves, fireflies) keep the same page fresh year-round."
    ],
    "tips": [
      "The empty log bench is a storytelling magnet — viewers imagine themselves there, and saves skyrocket.",
      "Narration > music for this niche: a calm voice over the fire beats any soundtrack for watch time.",
      "Never rush the ember shower (seconds 3-6): it's the visual hook that stops the scroll."
    ],
    "tags": [
      "facebook",
      "storytelling",
      "cozy",
      "ambience",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 84
  }
,
  {
    "id": "niche-spotlight-ai-kurzgesagt-style-explainers",
    "title": "AI-Animated Educational Explainers (YouTube Niche)",
    "category": "Viral Niches",
    "tool": "Google Flow",
    "difficulty": "Intermediate",
    "desc": "Colourful Kurzgesagt-style AI explainer animations — black holes, deep oceans, dinosaur extinctions, DNA — the faceless niche with premium CPMs. Is niche ki videos 42.8M/31.5M/24.9M/18.2M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-kurzgesagt-style-explainers.jpg",
    "prompt": "Colourful flat-vector explainer animation in Kurzgesagt style, 16:9: [TOPIC: a tiny astronaut drifting beside a giant swirling purple-orange black hole with cartoon planets / a tiny diver descending into a glowing deep-ocean trench beside a giant friendly whale shark / a giant blazing meteor streaking toward cartoon dinosaurs looking up in panic / a tiny lab-suited character walking across a giant twisting pink-cyan DNA bridge with cute round bacteria floating like balloons], minimalist geometric shapes, rich gradient backgrounds, tiny character for scale, calm curiosity mood, subtle parallax motion, no text, no watermark, no photorealism",
    "howto": [
      "Pick one big-question topic per video (black holes, oceans, extinctions, DNA) — the question itself is the hook.",
      "Generate 4-6 animated scenes in Google Flow with the master prompt above, swapping only [TOPIC] each time; keep the same flat-vector style across all scenes.",
      "Add an AI voiceover (ElevenLabs, calm clear tone): script the video as 'What if…' or 'Why does…' — one question per scene.",
      "Edit at 6-10 min: pattern interrupts every 20-30s with a new visual gag (tiny characters, scale gags, duck-shaped satellites).",
      "Title it like an explainer: 'Why [TOPIC] Is Stranger Than You Think' — YouTube search + suggested traffic compounds for years in this niche."
    ],
    "tips": [
      "Hook rule: the first 15 seconds must deliver the title promise with a jaw-dropping visual (meteor hitting Earth in flat-vector style) — 71% of viewers decide in the first few seconds.",
      "Title trick: keyword-first + curiosity ('Black Holes Explained in 6 Minutes') — educational search intent ranks for years.",
      "Repurpose the same explainer into a 30s Short with the single craziest frame as the hook — YouTube's algorithm pushes shorts to a whole new audience."
    ],
    "tags": [
      "viral-niche",
      "youtube",
      "explainers",
      "animation",
      "faceless",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 91
  }
,
  {
    "id": "niche-spotlight-talking-pet-diaries",
    "title": "AI Talking-Pet Diaries (Facebook Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Anthropomorphic pets with first-person narration — pet confessions, sibling drama, treat heists; the most-shareable format on Facebook Reels. Is niche ki videos 148.6M/119.3M/96.8M/74.2M views tak gayi hain.",
    "image": "images/niches/niche-grid-talking-pet-diaries.jpg",
    "prompt": "Photorealistic funny AI video, 9:16 vertical, [PET + SCENE: golden retriever in a kitchen mid-confession, one paw raised like it's telling a story, confetti falling / sassy tabby cat at a tiny desk like a talk-show host, dramatic paw point at camera, spotlight / pug in a detective trench coat with a tiny magnifying glass, caught beside a giant cookie jar, tongue out / two fluffy kittens in a soap-opera showdown on a couch, one accusing paw pointed, spilled treat bowl between them], [PERSONALITY: overconfident golden retriever / judgmental tabby host / sneaky pug detective / dramatic kitten duo — reuse the SAME pet description in every video], expressive human-like gestures, warm cinematic lighting, natural lip-sync-ready pacing, no text, no watermark, no cartoon look",
    "howto": [
      "Lock ONE pet character (describe the golden retriever once — breed, colour, 'sweater or no sweater') and reuse the exact description in every prompt so viewers follow a 'personality', not random animals.",
      "Generate 15-20s clips in Veo 3 with the master prompt above, swapping only [PET + SCENE]; each clip = one 'diary entry'.",
      "Add first-person voiceover (ElevenLabs, playful voice): the pet 'talks' — 'Day 47: the humans still don't know I did it.'",
      "Edit with word-by-word captions — most Facebook viewers watch on mute; captions carry the comedy.",
      "Post 1-2x/day as Reels + page video; pin 'New episode daily' so followers return for the series, not just one clip."
    ],
    "tips": [
      "Hook rule: first frame = the pet staring INTO the camera mid-gesture — eye contact stops the scroll on Facebook.",
      "Caption trick: 'He finally told the truth' — curiosity-gap captions get saved AND shared; shares are this niche's growth engine.",
      "Give the pet a recurring catchphrase ('The cookie jar was already like that.') — catchphrases turn casual viewers into subscribers."
    ],
    "tags": [
      "viral-niche",
      "facebook",
      "pets",
      "comedy",
      "faceless",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 95
  }
,
  {
    "id": "niche-spotlight-historical-what-if-reels",
    "title": "Historical What If Reels (Instagram Niche)",
    "category": "Viral Niches",
    "tool": "Midjourney",
    "difficulty": "Beginner",
    "desc": "Counterfactual scenarios in cinematic AI imagery — Rome never falls, dinosaurs in modern cities, a 1969 moon colony — polarizing comments drive massive reach. Is niche ki reels 86.4M/69.7M/52.3M/38.9M views tak gayi hain.",
    "image": "images/niches/niche-grid-historical-what-if-reels.jpg",
    "prompt": "Cinematic photorealistic alternate-history scene, [SCENARIO: Roman soldiers in classical armour beside a futuristic glass skyscraper in a sunlit neo-Roman city, flying ships above marble temples, golden-hour light / giant brachiosaurus walking through a modern city street between glass skyscrapers, tiny amazed onlookers, dramatic sunset / 1969-style astronauts planting a flag outside a retro-futuristic glass moon colony dome, Earth rising over the lunar horizon / the ancient Library of Alexandria reimagined intact and vast, soaring marble halls, holographic star maps, warm god-rays], epic scale contrast, dramatic lighting, ultra-detailed, 8k, --ar 4:5 --style raw",
    "howto": [
      "Generate 4 'what if' scenes in Midjourney with the master prompt above, swapping only [SCENARIO] each time.",
      "Animate each image in Kling or Runway (slow cinematic push-in, 4-5s each) — motion turns a pretty picture into a Reel.",
      "Build a 20-30s Reel: one on-screen question — 'What if Rome never fell?' — no voiceover needed, text hook carries it.",
      "Caption with a debate bait: 'Would this be better or worse?' — polarizing comments are this niche's reach engine.",
      "Post daily 7-9 PM; repost the best performer as a carousel — carousels get 2x the saves in this niche."
    ],
    "tips": [
      "Hook rule: lead with the MOST impossible image (dinosaur in a modern city) — Reels are judged in the first 1.4 seconds.",
      "Title trick: 'What if [X] never happened' outperforms 'Alternate history of X' — the conditional phrasing invites imagination, not just information.",
      "Pin your own comment starting the debate ('I'd move to neo-Rome tomorrow.') — seeded comments pull lurkers into the argument and boost ranking."
    ],
    "tags": [
      "viral-niche",
      "instagram",
      "history",
      "what-if",
      "faceless",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 89
  }
,
  {
    "id": "frozen-waterfall-collapse-veo3",
    "title": "Frozen Waterfall Collapse — Veo 3 Prompt for Viral TikTok Nature Niches",
    "category": "Video Prompts",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "A colossal frozen waterfall cracking, groaning and collapsing in slow motion — the primal nature spectacle that stops every scroller in their tracks and dominates TikTok's nature-niche feeds.",
    "prompt": "Generate a 9-second 9:16 vertical cinematic video in Veo 3: a towering frozen waterfall in an icy canyon, blue glacial ice veined with white frost. TIMELINE: (0-2) low rumble, deep fissures spiderweb across the ice face, tiny ice shards tinkling down (2-5) the central column buckles — a thunderous CRACK as a 20-metre slab of blue ice breaks free and tumbles in slow motion, exploding into glittering fragments (5-7) the dust cloud of ice crystals billows toward camera, backlit by cold winter sun (7-9) settling reveal of the raw rock face behind, mist drifting. Style: hyper-realistic nature documentary, 8K detail on fracture patterns, cool arctic palette of cyan, steel blue and white, dramatic side lighting. Implied sound: deep glacial groan, cracking thunder, crystalline shatter. NO people, NO text, NO watermark — pure frozen spectacle.",
    "howto": [
      "Open Veo 3, set 9:16 vertical, 9 seconds, paste the prompt, and render until the slab break reads as one massive crack, not many small chips.",
      "Cut a 3-second 'moment of impact' version too — the collapse instant is the standalone clip that goes viral as a duet/stitch bait.",
      "Layer a real glacial-crack audio sample underneath (freesound.org) — sound sells 80% of this niche's shock factor.",
      "Hook text overlay: 'The moment 10,000 years of ice gives up' — TikTok's nature audience shares anything that feels geological and ancient.",
      "Post between 6-8 PM PKT when US nature-watchers are scrolling; cold-climate visuals paradoxically perform best in warm months.",
      "Series it: one waterfall per climate (Iceland, Canadian Rockies, Himalayas, Norway) — same prompt, swapped locations, a whole niche channel."
    ],
    "tips": [
      "Slow motion is the whole game: if Veo renders it too fast, re-prompt with '0.25x speed, dreamlike suspension' — fast ice looks like TV static.",
      "The blue-ice translucency is your thumbnail frame: scrub to the slab mid-tumble for a clickbait-perfect still.",
      "Never put people in the frame — scale ambiguity makes viewers watch twice to guess how big it really is."
    ],
    "tags": [
      "tiktok",
      "nature",
      "waterfall",
      "viral-loop",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 86
  }
,
  {
    "id": "neon-night-market-hawker-veo3",
    "title": "Neon Night Market Hawker — Veo 3 Prompt for Viral YouTube Street-Food Niches",
    "category": "Video Prompts",
    "tool": "Veo 3",
    "difficulty": "Intermediate",
    "desc": "A rain-slicked night market where a street-food hawker tosses flaming noodles through steam and neon — the cinematic street-food opener every viral food niche channel needs.",
    "prompt": "Generate a 10-second 16:9 cinematic video in Veo 3: a bustling night market lane at 11 PM, rain-polished cobblestones mirroring pink, cyan and amber neon signs in Chinese and Thai script. ACTION: (0-3) slow dolly-in past crowded stalls, steam rising from grills (3-6) the hero moment — a hawker in a white apron launches a burst of noodles high into the air from a roaring wok, flames licking up, droplets of oil catching the neon (6-8) macro shot of the noodles arcing, glistening, each strand sharp against dark background (8-10) they land back in the wok with a sizzle, the hawker's satisfied grin. Style: hyper-realistic cinematic street photography, shallow depth of field, wet-surface reflections, rich neon-noir palette. Implied sound: wok sizzle, crowd murmur, sizzling fat, distant vendor calls. NO readable brand logos, NO text overlays, NO watermark.",
    "howto": [
      "Open Veo 3, 16:9, 10 seconds, paste the prompt — the noodle-toss (seconds 3-6) must read as one confident motion, re-render if it looks stiff.",
      "Use this as the signature opener for every video in the niche: same market, different dishes — instant channel identity.",
      "Add real sizzling-wok foley and a lo-fi beat underneath; street-food niches live or die on mouth-watering audio.",
      "Title pattern: '[DISH] Cooked at 1000°C on a Rainy Night' — weather + heat + place beats generic 'street food' titles.",
      "Shoot a 60-second Short version first to test the hook, then expand winners into 8-minute long-form 'night market walks'.",
      "Swap the hawker and dish per episode (dumplings, satay, roti) — the market stays the recurring character."
    ],
    "tips": [
      "Neon reflections on wet ground are free production value — ask for 'mirror-gloss puddles' if the render looks dry.",
      "The macro noodle shot is your thumbnail: freeze at second 6 and crop tight — steam + strands + fire beats any face.",
      "Keep signs illegible or generic: readable real shop names can trigger content-ID style disputes on food channels."
    ],
    "tags": [
      "youtube",
      "street-food",
      "night-market",
      "cinematic",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 90
  }
,
  {
    "id": "sky-lantern-release-kling",
    "title": "Sky Lantern Release Loop — Kling Prompt for Viral Instagram Reels Niches",
    "category": "Video Prompts",
    "tool": "Kling",
    "difficulty": "Beginner",
    "desc": "Hundreds of glowing sky lanterns rising over a moonlit lake in a perfect loop — the dreamlike ambience clip that Instagram's serenity-niche pages run on repeat.",
    "prompt": "Generate a 10-second 9:16 vertical loop in Kling: a moonlit mountain lake at blue hour, a crowd of tiny silhouetted figures on a wooden dock releasing paper sky lanterns. TIMELINE: (0-3) lanterns ignite one by one — warm orange blooms against indigo sky (3-6) a wave of 200+ lanterns lifts off together, drifting up and outward in a gentle spiral (6-8) their reflections shimmer and stretch across the black water (8-10) camera eases back into the opening composition — one lantern still low near the dock, ready to ignite again. Loop-perfect: the final frame must match the first so the repeat is invisible. Style: ultra-realistic night cinematography, silky water reflections, warm-cool contrast (amber lanterns vs indigo sky), gentle grain. Implied sound: soft wind, water lapping, distant laughter, paper rustle. NO faces in close-up, NO text, NO watermark.",
    "howto": [
      "Open Kling, 9:16, 10 seconds, paste the prompt, and check the loop point — the lantern near the dock at 0:00 and 10:00 must sit in the same spot.",
      "Loop it 3x into a 30-second Reel — seamless loops are the #1 retention hack on Instagram; viewers rewatch without realising.",
      "Pair with a trending ambient audio or a soft piano track; serenity pages grow on saves and shares, so pick music people DM to friends.",
      "Caption formula: 'Tag someone you'd watch this with' — comment-driven engagement pushes Reels into Explore.",
      "Post 8-10 PM local time of your audience; lanterns read as a wind-down ritual and perform best before bed.",
      "Seasonal swaps (cherry blossoms over the lake, autumn mist, first snow) keep one page evergreen all year."
    ],
    "tips": [
      "The single low lantern near the dock is your loop anchor — if Kling drops it, add 'one unlit lantern resting on the dock in frame' to the prompt.",
      "Reflection stretch on water doubles the visual magic: ask for 'long vertical reflections' if the lake renders too flat.",
      "Never show lit faces in close-up — anonymous silhouettes let every viewer project themselves into the scene."
    ],
    "tags": [
      "instagram",
      "lantern",
      "ambience",
      "loop",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 83
  }
,
  {
    "id": "deep-jungle-temple-reveal-sora",
    "title": "Deep Jungle Temple Reveal — Sora Prompt for Faceless YouTube Adventure Niches",
    "category": "Video Prompts",
    "tool": "Sora",
    "difficulty": "Intermediate",
    "desc": "A drone pushing through dense jungle canopy to reveal a forgotten temple glowing with bioluminescent moss — the discovery shot that powers faceless exploration channels.",
    "prompt": "Generate a 12-second 16:9 cinematic video in Sora: an aerial drone deep in an unmapped rainforest at dawn. TIMELINE: (0-3) flying inches above the canopy, leaves whipping past, mist curling (3-6) the drone crests a ridge — below, a colossal stone temple complex swallowed by jungle, broken towers draped in vines (6-9) descending spiral around the central pyramid, its carved doorways glowing faintly with bioluminescent moss (9-12) final low push toward a dark doorway, light flaring from within as if something just woke up. Style: hyper-realistic expedition cinematography, god rays slicing through canopy gaps, wet-leaf detail, moss greens against weathered grey stone, faint teal glow accents. Implied sound: rotor hum, bird calls, leaf rustle, deep stone groan at the reveal. NO people, NO text, NO watermark — pure discovery.",
    "howto": [
      "Open Sora, 16:9, 12 seconds, paste the prompt — the canopy-to-temple reveal at second 3-6 is the money shot; re-render until the pyramid reads instantly.",
      "This clip IS the niche's business card: narrate over it ('Nobody has entered this temple in 400 years...') and you have a channel format.",
      "Add expedition foley (machete, insects, distant calls) plus a low drone under the narration — adventure channels sell immersion.",
      "Title pattern: 'We Found a Temple Google Maps Won't Show You' — mystery + map-proof exclusivity drives the click.",
      "Cut the final 2 seconds (the glowing doorway) as a standalone Short with the caption 'Part 2 if this hits 100k' — built-in sequel demand.",
      "Swap the ruin per episode (sunken city, cliff monastery, desert ziggurat) — one prompt skeleton, infinite lost places."
    ],
    "tips": [
      "Bioluminescent moss is the signature: if the temple renders as plain grey stone, re-prompt with 'glowing teal moss veins pulsing faintly' — mystery needs a light source.",
      "The doorway flare at the end is your cliffhanger — never show what's inside; the comments section will write your next episode.",
      "Keep the drone fast over canopy and slow over the temple — the speed change is a free, wordless 'pay attention' cue."
    ],
    "tags": [
      "youtube",
      "adventure",
      "exploration",
      "temple",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 89
  }
,
  {
    "id": "liquid-metal-portrait-morph-runway",
    "title": "Liquid Metal Portrait Morph — Runway Prompt for Viral TikTok Art Niches",
    "category": "Video Prompts",
    "tool": "Runway",
    "difficulty": "Advanced",
    "desc": "A classical marble statue melting into liquid chrome and reforming as a futuristic portrait — the surreal transformation loop that dominates TikTok's AI-art niche.",
    "prompt": "Generate an 8-second 9:16 vertical morph in Runway: a weathered marble bust of a classical statue on a black pedestal, dark studio void. TIMELINE: (0-2) hairline cracks spread across the marble, molten silver seeping through (2-4) the bust liquefies — flowing, dripping, pooling into a mirror of liquid chrome (4-6) the pool rises and sculpts itself into a futuristic portrait: smooth chrome head with glowing circuit-etched eyes (6-8) it hardens into polished metal, one circuit eye pulsing — then a single droplet falls, beginning to reverse the change. Style: hyper-detailed 3D render, studio reflections on liquid metal, marble grain vs mirror finish, monochrome silver palette with one cyan accent in the eyes. Implied sound: deep rumble, liquid slosh, metallic crystalline ping. NO text, NO watermark — pure metamorphosis.",
    "howto": [
      "Open Runway, 9:16, 8 seconds, paste the prompt — the 2-4 second liquefaction must look like flowing metal, not a dissolve; use Runway's morph/image-to-video controls for precision.",
      "The near-loop ending (droplet starting to reverse) makes viewers rewatch to catch the cycle — loop it 2x for a 16-second TikTok.",
      "Pair with a trending transition sound or a bass drop timed to the marble crack at 0:02 — art niches sync to audio hard.",
      "Hook caption: 'POV: 500 years of art history in 8 seconds' — the classical-to-future arc is the whole pitch.",
      "Series it: swap the statue per episode (Greek god → robot, Venus → cyborg, pharaoh → android) — one morph engine, endless characters.",
      "Pin a comment with the prompt so followers try it themselves — art niches grow fastest when viewers become creators."
    ],
    "tips": [
      "Chrome reflections need something to reflect: add 'surrounded by faint floating light orbs' if the metal renders flat black.",
      "The glowing circuit eyes are your thumbnail frame — freeze at second 7, crop on the face.",
      "Never let the morph rush: 2 full seconds of pure liquid in the middle is what makes people say 'how?!' and rewatch."
    ],
    "tags": [
      "tiktok",
      "art",
      "morph",
      "ai-art",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 85
  }
,
  {
    "id": "cherry-blossom-storm-flow",
    "title": "Cherry Blossom Storm — Google Flow Prompt for Viral Facebook Reels Niches",
    "category": "Video Prompts",
    "tool": "Google Flow",
    "difficulty": "Beginner",
    "desc": "A Japanese temple garden caught in a swirling storm of cherry blossom petals — the soft, shareable beauty loop that Facebook's nature-aesthetic pages can't stop reposting.",
    "prompt": "Generate a 10-second 9:16 vertical loop in Google Flow: a serene Japanese temple garden at golden hour — a vermilion pagoda, a koi pond, a stone lantern path. TIMELINE: (0-2) a gentle breeze stirs, petals beginning to lift from ancient cherry trees (2-5) the storm peaks — thousands of pink petals swirling in a slow vortex around the pagoda, koi darting beneath the surface (5-8) petals settling onto the pond like pink snow, ripples spreading (8-10) one petal lands on the stone lantern in the foreground — the exact frame we opened on. Loop-perfect: opening and closing frames must match for an invisible repeat. Style: ultra-realistic cinematic nature, warm golden light through pink petals, glassy water reflections, delicate depth of field. Implied sound: soft wind, petal rustle, distant temple bell, water trickle. NO people, NO text, NO watermark — pure tranquility.",
    "howto": [
      "Open Google Flow, 9:16, 10 seconds, paste the prompt — verify the loop point by comparing frame 0 and frame 10 side by side; the petal on the lantern must sit identically.",
      "Loop 3x for a 30-second Reel; Facebook's serenity audience watches these on repeat, and loops farm watch-time silently.",
      "Overlay a soft piano or koto track — aesthetic pages get saved and shared on music fit alone.",
      "Caption: 'Send this to someone who needs 30 seconds of calm' — DM-able content spreads faster than comment-bait on Facebook.",
      "Post Sunday mornings; calm content overperforms on weekends when people are doomscrolling for relief.",
      "Seasonal twins: autumn maple storm, winter snow over the same garden — one location, four viral seasons."
    ],
    "tips": [
      "The petal vortex (seconds 2-5) is the hook — if it renders as a light sprinkle, add 'dense, dramatic petal storm' and re-render.",
      "The koi darting under petals is a bonus scroll-stopper: visible orange flashes under pink water double the detail viewers notice on rewatch.",
      "Keep the pagoda slightly off-center — centered landmarks look like postcards; off-center looks like cinema."
    ],
    "tags": [
      "facebook",
      "spring",
      "ambience",
      "loop",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 84
  }
,
  {
    "id": "viral-horror-thumbnail-pack-midjourney",
    "title": "Viral Horror Thumbnail Pack — Midjourney Prompt for YouTube Horror-Niche CTR",
    "category": "Image Prompts",
    "tool": "Midjourney",
    "difficulty": "Intermediate",
    "desc": "A reusable Midjourney formula for bone-chilling horror thumbnails — shadowy figures, impossible faces, one terrifying focal point — built to spike click-through rate in any horror niche.",
    "prompt": "YouTube thumbnail composition, 16:9, hyper-detailed horror illustration: [SUBJECT: a shadowy figure standing at the end of a pitch-black hallway, its face an impossibly wide smile in the darkness / a cracked porcelain doll face filling the frame, one eye socket empty and dripping black / a silhouetted hand pressing from INSIDE a fogged window, fingers too long / an abandoned crib in a decaying nursery, something standing in the corner that wasn't there before], deep blacks and blood-red accent lighting, volumetric fog, cinematic rim light outlining the horror, extreme contrast, one single terrifying focal point, negative space on the left for title text, photorealistic, 8K detail, --ar 16:9 --style raw --v 6.1",
    "howto": [
      "Paste the prompt into Midjourney, swap only [SUBJECT] per thumbnail — the formula (darkness + one focal terror + red accent) is what trains your audience's click reflex.",
      "Generate 4 variants per subject with --chaos 15 — horror thumbnails are A/B-tested, not guessed; keep the one that scares YOU most.",
      "Compose with the rule of thirds: the horror sits on the right third, left side stays dark and empty for your title text in YouTube Studio.",
      "Add your title text AFTER generation (Canva/Photoshop) — Midjourney text renders are unreliable; 2-4 words max ('IT WAS INSIDE').",
      "Test at 10% zoom: if the horror doesn't read as a thumbnail-sized smudge of dread, the concept is too complex — simplify.",
      "Build a 20-thumbnail vault from one session: batch-generate subjects on Sunday, drip them across the month's uploads."
    ],
    "tips": [
      "Red accent lighting is the cheat code — human eyes snap to red in a feed of dark thumbnails; never skip it.",
      "The empty eye socket / too-long fingers rule: horror thumbnails win on ONE wrong detail, not a busy scene — less is scarier.",
      "Mirror your best performer: once a thumbnail crosses 10% CTR, generate 5 'sibling' variants with the same composition and new subjects."
    ],
    "tags": [
      "youtube",
      "thumbnails",
      "horror",
      "ctr",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 88
  }
,
  {
    "id": "cross-border-niche-importer-chatgpt",
    "title": "Cross-Border Niche Importer — ChatGPT Prompt to Steal Proven Niches Across Countries",
    "category": "Text Prompts",
    "tool": "ChatGPT",
    "difficulty": "Beginner",
    "desc": "A ChatGPT niche-discovery system that finds proven viral formats in other countries and rebuilds them for YOUR market before local competitors catch on — the arbitrage move nobody talks about.",
    "prompt": "Act as a global content-arbitrage strategist. My market: [YOUR COUNTRY / LANGUAGE]. My platform: [YouTube / TikTok / Facebook / Instagram]. Step 1: list 10 viral creator niches currently exploding in OTHER countries (Japan, Brazil, Korea, Germany, Indonesia...) that barely exist in my market yet — for each, give the niche name, the country where it boomed, one example channel with subscriber count, and WHY it worked there (cultural trigger, format innovation, or platform gap). Step 2: for the 3 strongest candidates, score them 1-10 on: local demand potential, production cost, competition gap in MY market, and monetization (RPM/ad rates). Step 3: for the top pick, write a 30-day launch plan: the exact first 10 video ideas adapted to my culture/language, the hook formula for each, and the ONE local twist that makes it feel native instead of copied. Rules: no generic niches (no 'vlogs', 'gaming', 'motivation'); every pick must have proof of virality abroad; flag any niche that needs on-camera presence or a budget over $100/month.",
    "howto": [
      "Paste the prompt into ChatGPT (GPT-4 or better), fill in [YOUR COUNTRY / LANGUAGE] and platform — specificity is what makes the arbitrage picks usable.",
      "Verify the top 3 picks yourself: search the example channels, check their last 10 videos' view counts — ChatGPT hallucinates channel names sometimes.",
      "Pick the niche with the biggest competition gap, not the biggest views abroad — you're importing a PROVEN format into an empty market.",
      "Localize the twist hard: language, humor, music, references — the import must feel homegrown by episode 3 or viewers smell the copy.",
      "Launch with a 10-video sprint in 14 days; arbitrage windows close when the second importer arrives.",
      "Re-run the prompt quarterly — cross-border trends rotate, and today's empty market is next year's crowded one."
    ],
    "tips": [
      "The 'proof of virality abroad' rule is the whole prompt — without it you get ChatGPT's generic niche list, which everyone already has.",
      "Target countries 2-3 trend cycles ahead of yours (Korea/Japan for formats, Brazil for volume) — they're your free R&D lab.",
      "Save the output as your channel's strategy doc — the 30-day plan doubles as your content calendar for month one."
    ],
    "tags": [
      "niche-discovery",
      "chatgpt",
      "arbitrage",
      "strategy",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 87
  }
,
  {
    "id": "shorts-niche-rpm-ranker-gemini",
    "title": "Shorts-Niche RPM Ranker — Gemini Prompt to Rank YouTube Shorts Niches Before You Commit",
    "category": "Text Prompts",
    "tool": "Gemini",
    "difficulty": "Intermediate",
    "desc": "A Gemini niche-validation engine that ranks YouTube Shorts niches by RPM, competition density and growth velocity — so you commit to a profitable niche, not just a popular one.",
    "prompt": "Act as a YouTube Shorts monetization analyst with access to current creator-economy data. I am choosing ONE Shorts niche to commit to for 6 months. Candidate niches: [LIST 3-5, e.g. 'AI history facts', 'satisfying restoration', 'scary stories', 'money tips']. For EACH niche, produce: (1) RPM estimate range for Shorts monetization (and why it differs from long-form), (2) competition density score 1-10 with the 3 dominant channels and their subscriber counts, (3) growth velocity — are new channels still breaking through in 2026, with 2 examples of channels that grew fast recently, (4) content durability — will this niche's videos still earn in 12 months or is it trend-dependent, (5) production reality — hours per video, AI-tool costs, on-camera requirement. Then RANK all candidates with a final verdict: the one niche to pick, the one to avoid, and the exact positioning angle that lets a new channel stand out in the winner (e.g. 'not scary stories — but scary stories told by AI historical figures'). Be brutally honest: flag any niche where the math doesn't work.",
    "howto": [
      "Paste into Gemini (1.5 Pro or better), list your 3-5 real candidate niches — the prompt only works on niches you're genuinely considering.",
      "Cross-check the RPM ranges against 2-3 creator income reports or forums — AI estimates drift; triangulate before you bet 6 months.",
      "Weight 'new channels breaking through in 2026' heavier than raw RPM — a high-RPM niche with zero new winners is a closed club.",
      "Take the winning positioning angle literally: 'not X — but Y' is how you enter a crowded niche without fighting the incumbents.",
      "Re-run after your first 30 Shorts with real analytics pasted in — Gemini recalibrates the ranking against YOUR actual data.",
      "Share the output with nobody — your ranked niche list is a competitive asset; keep the arbitrage."
    ],
    "tips": [
      "The 'be brutally honest' line matters — without it, Gemini cheerleads every niche; with it, you get the kill-list you actually need.",
      "Shorts RPM ≠ long-form RPM: the prompt forces the distinction, which is where most niche-pickers get burned.",
      "One committed niche beats three half-tested ones — the ranking exists to end deliberation, not extend it."
    ],
    "tags": [
      "youtube",
      "niche-discovery",
      "rpm",
      "shorts",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 86
  }
,
  {
    "id": "niche-moat-builder-claude",
    "title": "Niche Moat Builder — Claude Prompt to Design a Channel Angle Nobody Can Copy",
    "category": "Text Prompts",
    "tool": "Claude",
    "difficulty": "Advanced",
    "desc": "A Claude strategy prompt that designs your channel's un-copyable moat — the signature format, character or world that makes YOUR niche impossible to clone, even when the niche itself is crowded.",
    "prompt": "Act as a brand strategist for faceless creator channels. My niche: [YOUR NICHE, e.g. 'AI horror stories on YouTube']. My tools: [e.g. Sora, ElevenLabs, CapCut]. My constraints: [e.g. 2 hours/day, $50/month, no on-camera]. Design my channel's MOAT — the thing competitors cannot copy without looking like thieves. Deliver: (1) SIGNATURE FORMAT — a repeatable video structure unique to me (e.g. 'every story ends with the monster addressing the viewer by name'), with a template for episode 1, (2) SIGNATURE CHARACTER/WORLD — a recurring narrator, mascot or setting with a one-paragraph bible (appearance, voice, catchphrase, rules of the world), (3) SIGNATURE STYLE — the exact visual/audio fingerprint (color grade, font, music style, pacing) described precisely enough to brief an editor, (4) DEFENSIBILITY TEST — 5 ways a copycat would try to clone me and why each fails, (5) 90-DAY MOAT DEEPENING PLAN — what I add at day 30, 60 and 90 to make the moat wider (lore drops, community rituals, format twists). Rules: the moat must work faceless; it must be executable inside my constraints; no generic advice ('be consistent', 'find your voice') — every recommendation must be specific to MY niche.",
    "howto": [
      "Paste into Claude, fill in niche, tools and constraints honestly — the moat is only defensible if it's buildable inside YOUR limits.",
      "Read the defensibility test first: if you can imagine a copycat beating any of the 5 scenarios, iterate the prompt with that scenario as a new constraint.",
      "Build the signature character/world FIRST (part 2) — formats get copied in weeks, but a beloved character takes months to clone.",
      "Document the style fingerprint (part 3) as a one-page brief and hand it to every editor/VA — moats die when the style drifts.",
      "Execute the 90-day deepening plan on schedule: lore and rituals are what turn viewers into a community that defends you.",
      "Re-run quarterly with your analytics — the moat evolves as the niche matures and copycats get smarter."
    ],
    "tips": [
      "The 'no generic advice' rule is load-bearing — without it, Claude writes motivational fluff; with it, you get a buildable strategy.",
      "A moat is not a niche — the niche is WHERE you compete, the moat is WHY you win there; never confuse the two.",
      "Start the community ritual by episode 5, not episode 50 — early rituals compound; late rituals feel forced."
    ],
    "tags": [
      "niche-discovery",
      "strategy",
      "branding",
      "faceless",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 88
  }
,
  {
    "id": "niche-spotlight-ai-mythology-legends",
    "title": "AI Mythology Legends (TikTok Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Greek/Norse myths retold as epic cinematic AI shorts — Zeus, Medusa, the Kraken and the Underworld with open-loop cliffhangers. Is niche ki videos 192.5M/167.4M/143.8M/118.9M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-mythology-legends.jpg",
    "prompt": "Epic cinematic AI mythology scene, [MYTH FIGURE: Zeus hurling a lightning bolt from storm clouds above Mount Olympus, marble temples trembling below / Medusa emerging from shadow in a dark ancient temple, snake hair writhing, petrified warriors in the foreground / a kraken's colossal tentacles rising from a stormy sea beside a Greek trireme, waves crashing / Cerberus guarding the gates of the underworld, rivers of glowing blue fire], dramatic god-light, slow cinematic camera push, volumetric fog, ultra-detailed, mythological epic scale, 9:16 vertical, photorealistic fantasy",
    "howto": [
      "Pick one myth + one cliffhanger line; paste the master prompt into Veo 3 swapping only [MYTH FIGURE], 9:16, 6-8 seconds.",
      "Script a 3-line voiceover (ElevenLabs 'epic narrator' voice): the setup, the shocking twist, 'Part 2 if this hits 10K likes' — narration is the retention engine, the visual is the hook.",
      "Cut the video to END mid-twist (Zeus mid-throw, Medusa mid-turn) — TikTok punishes finished stories in this niche; open loops double comments.",
      "Post 2-3x/day 6-10 PM PKT; pin your own comment with the myth's real ending to seed replies.",
      "Series it: one god per week (Zeus week, Hades week, Loki week) — the audience returns for 'their' god, not random myths."
    ],
    "tips": [
      "Hook rule: the FIRST frame must be the most impossible image (a kraken the size of a warship) — TikTok judges mythology reels in the first 1.4 seconds.",
      "Caption trick: 'What the history books DON'T tell you about [god]' — curiosity gaps beat summaries; never explain the myth in the caption, only tease it.",
      "Open-loop line: end every video with 'but what he did NEXT angered the gods…' — mythology viewers binge part 2s more than any other niche's audience."
    ],
    "tags": [
      "viral-niche",
      "tiktok",
      "mythology",
      "greek-myths",
      "faceless",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 92
  }
,
  {
    "id": "niche-spotlight-ai-sleep-stories",
    "title": "AI Sleep Stories & Bedtime Narrations (YouTube Niche)",
    "category": "Viral Niches",
    "tool": "Midjourney",
    "difficulty": "Beginner",
    "desc": "Calm AI bedtime narrations for adults over dreamy AI worlds — whales in starry seas, lantern forests, moonlit cabins. Is niche ki videos 24.6M/19.8M/15.4M/11.7M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-sleep-stories.jpg",
    "prompt": "Dreamlike serene illustration, [DREAM SCENE: a giant glowing whale floating across a starry night ocean under the Milky Way, bioluminescent waves below / a cozy lantern-lit forest path winding into soft glowing mist, fireflies drifting, a tiny lit door in an ancient tree / an enormous full moon rising over misty purple mountains, a small warm-lit cabin below / floating islands with waterfalls pouring into golden clouds, a tiny airship drifting through dream light], soft luminous glow, deep blues and warm amber, slow drifting camera, painterly detail, cozy wonder, no people, ultra-detailed --ar 16:9 --style raw",
    "howto": [
      "Generate 6-8 dream scenes in Midjourney with the master prompt, swapping only [DREAM SCENE] — keep one fixed color palette (deep blue + amber) so the whole channel feels like one dream.",
      "Write a slow 10-15 minute bedtime narration in ChatGPT: second-person, present tense, no conflict — 'you drift down the lantern path…' — read it at 0.85x speed in ElevenLabs with a soft, low voice.",
      "Animate each image in Kling/Runway with a slow 8-10s drift; crossfade between scenes — hard cuts wake the sleeper, fades keep them in the dream.",
      "Title the video 'Fall Asleep In [X] Minutes | [Dream Scene]' — the search term IS the promise; no clickbait, sleepers return to what worked.",
      "Upload 10pm PKT, 3x per week; the same viewer watches nightly — this niche compounds through loyalty, not virality."
    ],
    "tips": [
      "Hook rule: the first 60 seconds decide everything — a whispered 'close your eyes…' over the moonrise scene sets the contract; never start with an intro or logo.",
      "Title trick: '[Minutes] to Fall Asleep' beats 'Sleep Story Ep 12' — time-to-sleep is the searchable promise; front-load the number.",
      "Pacing: one scene per 90-120 seconds, narration pauses 5-8s between lines — silence is content in this niche; rushing is the #1 channel killer."
    ],
    "tags": [
      "viral-niche",
      "youtube",
      "sleep-stories",
      "meditation",
      "faceless",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 90
  }
,
  {
    "id": "niche-spotlight-ai-money-finance-reels",
    "title": "AI Money & Finance Tips Reels (Facebook Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Personal-finance hacks and money-moment AI visuals for Facebook Reels — vault bursts, golden coin rains, mansion sunsets. Is niche ki reels 178.9M/152.4M/129.7M/104.3M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-money-finance-reels.jpg",
    "prompt": "Luxurious cinematic money-moment scene, [MONEY MOMENT: a rain of golden coins and dollar bills falling into outstretched hands, glowing vault light behind / a luxury mansion with a supercar at golden sunset, cinematic aerial angle / a giant rising stock chart built from glowing gold bars ascending through clouds / a massive bank-vault door swinging open, golden light bursting out, coins spilling forward], rich golds and deep greens, dramatic rim light, slow cinematic camera move, ultra-detailed, aspirational financial fantasy, 9:16 vertical, photorealistic",
    "howto": [
      "Generate one money-moment in Veo 3 per finance tip, swapping only [MONEY MOMENT] — the visual is pure pattern-interrupt; the tip itself comes from the caption/voiceover.",
      "Write 3-line voiceovers in ChatGPT: the wrong rule everyone believes, the correction, the payoff — e.g. 'The 50/30/20 rule is wrong. Here's why.' — money myths corrected get saved more than money tips.",
      "Voice it in ElevenLabs with a confident, direct tone — finance Reels live or die on authority; hesitation in the voice kills shares.",
      "Caption with the full tip written out (3 short lines) so the Reel works muted — 70% of Facebook Reels play without sound.",
      "Post daily 7-9 PM PKT; reshare the best performer as a story — money content gets sent in DMs, and DMs are this niche's hidden reach engine."
    ],
    "tips": [
      "Hook rule: the visual must scream money in frame one (vault door bursting open) — finance scrollers decide in under a second whether you're talking about THEIR money.",
      "Caption trick: 'Stop doing [common habit]' outperforms '5 tips for saving' — contrarian corrections are saved 3x more than generic tips on Facebook Reels.",
      "Credibility line: start the voiceover with a number ('$4.2M lost to this one mistake…') — specific numbers borrow authority you don't have to earn on camera."
    ],
    "tags": [
      "viral-niche",
      "facebook",
      "finance",
      "money",
      "faceless",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 91
  }
,
  {
    "id": "magnetic-sand-sculpture-veo3",
    "title": "Magnetic Sand Sculpture Timelapse — Veo 3 Prompt for Satisfying TikTok Niches",
    "category": "Video Prompts",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Glossy black magnetic sand rising into castles, waves and spires under an invisible force — a hypnotic satisfying spectacle engineered for TikTok's loop-obsessed feeds.",
    "prompt": "Generate an 8-second 9:16 vertical hyper-detailed timelapse video in Veo 3: a tray of glossy black magnetic sand on a dark walnut table. TIMELINE: (0-2) the sand lies flat and still under a moody spotlight (2-5) an invisible magnetic force pulls the sand upward — it rises in rippling waves, forming a perfect miniature castle with spires and battlements, tiny iron towers sprouting one by one (5-7) the castle melts into a rolling ocean wave of sand, crests curling (7-8) it settles back into a smooth mirror-like plane. Style: macro photography, extreme close-ups of granules clumping and chaining, warm amber side-light glinting off each particle, deep black background, satisfying physics, no cuts, no text, no watermark. Sound implied: soft metallic whispering.",
    "howto": [
      "Open Veo 3, set 9:16 vertical, 8 seconds, paste the full prompt, and render until the sand motion reads as one continuous magnetic pull.",
      "Loop the clip 3x with a 0.2s crossfade for a seamless 24-second satisfying loop — loops double watch time in this niche.",
      "Add a soft metallic ASMR track underneath (search magnetic sand ASMR on royalty-free libraries) — sound is half the satisfaction.",
      "Hook caption: This sand is alive — TikTok's satisfying niche shares anything that looks physically impossible.",
      "Post daily at 7-9 PM PKT; pin a comment asking viewers to name the next shape — comments feed the algorithm."
    ],
    "tips": [
      "If the sand motion stutters, re-prompt with fluid, magnetic, no jitter and shorten to 5 seconds — choppy particles kill the effect.",
      "The castle-formation frame is your thumbnail: scrub to the tallest spire moment for a tap-worthy still.",
      "Alternate black sand with golden sand weekly — same prompt, new color, a whole series from one entry."
    ],
    "tags": [
      "tiktok",
      "satisfying",
      "sand-art",
      "timelapse",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 84
  }
,
  {
    "id": "firefighter-ants-rescue-veo3",
    "title": "Tiny Firefighter Ants Rescue — Veo 3 Prompt for Viral TikTok Story Niches",
    "category": "Video Prompts",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "A brave squad of tiny ant firefighters rescuing a trapped ladybug from a smoldering matchbox blaze — miniature storytelling with heart, built for TikTok story niches.",
    "prompt": "Generate a 10-second 9:16 vertical cinematic video in Veo 3: a tiny world inside a garden. SCENE: a ladybug trapped under a smoldering fallen matchstick, tiny embers glowing. A brave squad of four firefighter ants in miniature red helmets rushes in — one drags a leaf-hose, two lift the matchstick together with synchronized effort, the fourth sprays a mist of dewdrops that hisses the embers out. TIMELINE: (0-3) chaos and glowing embers, ladybug struggling (3-7) the ant team arrives and works as a unit (7-9) steam clears, ladybug climbs free (9-10) the squad stands on the leaf, antennae raised in victory. Style: Pixar-like miniature realism, warm sunset backlight, macro detail, emotional and heroic, no text, no watermark.",
    "howto": [
      "Open Veo 3, 9:16 vertical, 10 seconds, paste the prompt, and generate until the ant team reads as four distinct characters.",
      "Cut a 4-second victory pose ending clip — the triumphant final frame is the standalone shareable that goes viral.",
      "Score it with a tiny orchestral swell (epic trailer music at 2x speed works) — heroism needs a soundtrack.",
      "Caption: The tiniest heroes of the garden — story-niche viewers follow for characters, not one-offs.",
      "Series it: one rescue per episode (bee in a spider web, worm in a puddle) — same prompt, swapped animals, a whole channel."
    ],
    "tips": [
      "Keep the ants' red helmets consistent across episodes — viewers latch onto visual mascots fast.",
      "If Veo renders six legs wrong, re-generate with stylized, Pixar-like, not photoreal insects — charm beats accuracy here.",
      "Post the full story AND the 4-second victory clip on the same day — the short clip funnels viewers to the full episode."
    ],
    "tags": [
      "tiktok",
      "mini-world",
      "storytelling",
      "rescue",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 87
  }
,
  {
    "id": "chess-piece-battle-kling",
    "title": "Giant Chess Piece Battle — Kling Prompt for Epic YouTube Shorts Niches",
    "category": "Video Prompts",
    "tool": "Kling",
    "difficulty": "Intermediate",
    "desc": "Towering chess armies clashing on a marble battlefield — rooks smashing, queens sweeping, kings advancing — cinematic fantasy warfare that rules YouTube Shorts' epic niches.",
    "prompt": "Generate a 9-second 16:9 cinematic video in Kling: a colossal chess battlefield of black marble. TIMELINE: (0-2) aerial sweep over ranked armies — white pawns braced in shield formation, black knights looming (2-5) the clash: a giant white rook smashes through a black bishop, fragments exploding in slow motion, a black knight rears and charges (5-7) the white queen slides in with blinding speed, sweeping three pieces aside in a shockwave (7-9) dust settles, the white king advances one square, crown gleaming. Style: epic fantasy warfare, Game-of-Thrones scale, dramatic low angles, dust and debris physics, metallic sheen on carved pieces, golden-hour storm light, photorealistic, no text, no watermark.",
    "howto": [
      "Open Kling, set 16:9, 9 seconds, paste the prompt, and render until the rook-smash impact reads as one clean hit.",
      "Add deep battle rumbles and stone-cracking SFX — epic scale lives in the sound design.",
      "Hook text: White to move. The board is at war. — Shorts' epic audience loves a lore line in frame one.",
      "Alternate piece POVs across episodes (knight's charge, pawn's last stand) — one prompt, a whole battle saga.",
      "Post at 8-10 PM PKT when US fantasy fans scroll; reply to every what opening is this comment — engagement gold."
    ],
    "tips": [
      "Slow motion on the impact frame is everything: if Kling renders it too fast, re-prompt with 0.3x slow-motion impact.",
      "The queen's shockwave sweep makes the thumbnail — freeze the dust-ring mid-blast for the click.",
      "Keep a consistent white vs black color grade across episodes so the series is instantly recognizable."
    ],
    "tags": [
      "youtube",
      "chess",
      "epic",
      "shorts",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 85
  }
,
  {
    "id": "blacksmith-forge-pov-sora",
    "title": "Medieval Blacksmith Forge POV — Sora Prompt for Cozy YouTube Craft Niches",
    "category": "Video Prompts",
    "tool": "Sora",
    "difficulty": "Beginner",
    "desc": "First-person sparks, glowing steel and rhythmic hammer strikes in a medieval forge — ASMR craftsmanship that powers YouTube's cozy craft-niche channels.",
    "prompt": "Generate a 10-second 16:9 immersive POV video in Sora: the viewer's hands are the blacksmith's. TIMELINE: (0-2) POV over the anvil, a glowing orange horseshoe pulled from the forge with tongs, sparks drifting (2-6) rhythmic hammer strikes — each hit sends a fan of sparks toward camera, the metal reshaping under every blow (6-8) the shoe plunges into a water barrel, a burst of steam rolls over the lens (8-10) lift the finished glowing shoe, steam hissing off. Style: gritty medieval realism, heat shimmer, sweat-level intimacy, forge-fire flicker lighting, ASMR hammer rhythm, 24fps cinematic, photorealistic, no text, no watermark.",
    "howto": [
      "Open Sora, set 16:9, 10 seconds, paste the prompt, and render until the hammer strikes land in a steady rhythm.",
      "Layer real blacksmith ASMR audio (hammer clangs, water hiss) — craft niches are watched WITH sound.",
      "Overlay a 3-line process caption (heat, hammer, quench) — viewers love feeling they learned something.",
      "Chain 2-3 clips for a 30-second forge session; the steam-burst transition hides the cuts.",
      "Series it: one tool per episode (horseshoe, dagger, axe head) — same prompt, new metal, endless content."
    ],
    "tips": [
      "POV hands must stay believable: if Sora warps fingers, re-generate with gloved hands — gloves hide a lot.",
      "The steam burst is your mid-video hook — place it at 60% to stop the scroll-off.",
      "Warm color grade sells the heat: push oranges and deep shadows in any free editor."
    ],
    "tags": [
      "youtube",
      "craft",
      "blacksmith",
      "pov",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 82
  }
,
  {
    "id": "comic-panel-animation-runway",
    "title": "Comic Panel Come-Alive Loops — Runway Prompt for Instagram Anime Niches",
    "category": "Video Prompts",
    "tool": "Runway",
    "difficulty": "Intermediate",
    "desc": "Static manga pages bursting into animated loops — ink igniting into color, heroes breaking panel borders — the format Instagram anime niche pages can't stop sharing.",
    "prompt": "Generate an 8-second 9:16 vertical animation loop in Runway: a static manga page coming alive. TIMELINE: (0-2) camera pushes into a black-and-white comic panel of a hero mid-leap (2-5) the panel's ink lines ignite with color — speed lines streak, the hero breaks the panel border, debris flies toward the viewer (5-7) a second panel ignites below showing the villain's shocked face, halftone dots rippling (7-8) seamless loop back to the still page. Style: anime key-visual quality, bold cel shading, dynamic panel-break effects, ink-to-color transformation, high energy, no text beyond on-page sound effects, no watermark.",
    "howto": [
      "Open Runway, 9:16 vertical, 8 seconds, paste the prompt, and render until the panel-break moment reads cleanly.",
      "Match the loop point precisely — the last frame must melt back into the still page or the loop feels broken.",
      "Add whoosh and paper-rip SFX on the break moment — sound makes the illusion snap.",
      "Caption: The panel he broke — anime pages engage hardest on specific character moments, not generic effects.",
      "Series it: one iconic scene per week — same prompt, new manga page, a whole niche feed."
    ],
    "tips": [
      "Keep the original page's art style consistent in the animation — style drift breaks the magic.",
      "The hero-leaping frame is your cover image: export it as the Reel cover for 2x the taps.",
      "Avoid real copyrighted manga pages for monetized accounts — use original or licensed art to stay safe."
    ],
    "tags": [
      "instagram",
      "comic",
      "anime",
      "animation",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 83
  }
,
  {
    "id": "glass-butterfly-metamorphosis-flow",
    "title": "Glass Butterfly Metamorphosis — Google Flow Prompt for Satisfying Facebook Reels",
    "category": "Video Prompts",
    "tool": "Google Flow",
    "difficulty": "Beginner",
    "desc": "A glass chrysalis shattering open as a luminous butterfly unfolds in ultra-slow motion — transformation magic Facebook Reels audiences watch to the very last frame.",
    "prompt": "Generate a 9-second 9:16 vertical ultra-slow-motion video in Google Flow: a glass chrysalis hanging from a blossom branch at dawn. TIMELINE: (0-3) the translucent chrysalis glows from within, hairline cracks of golden light spreading (3-6) the shell shatters outward in dreamlike slow motion, shards tumbling as a luminous glass-winged butterfly unfolds its wings, each vein glowing (6-8) the butterfly lifts off, scattering prismatic light across the morning dew (8-9) it rises out of frame, petals swaying. Style: macro nature documentary, impossible glass realism, pastel dawn palette, floating dust motes, emotional and serene, no text, no watermark.",
    "howto": [
      "Open Google Flow, 9:16 vertical, 9 seconds, paste the prompt, and render until the wing-unfold reads as one graceful motion.",
      "Add a gentle chime-and-shatter SFX bed — transformation niches live on delicate sound.",
      "Hook text: Watch what hatches from glass — curiosity-gap captions hold Reels viewers to the end.",
      "Post 6-8 PM PKT; this niche over-indexes with female 25-44 viewers — Facebook's most loyal savers.",
      "Series it: one glass creature per week (dragonfly, moth, beetle) — same prompt, new metamorphosis."
    ],
    "tips": [
      "Slow motion is the product: if it renders too fast, re-prompt with dreamlike 0.2x time until the wings float.",
      "The wings-fully-open frame is your thumbnail — prismatic light on dew is irresistible.",
      "Keep backgrounds soft and pastel — busy backgrounds fight the glass detail."
    ],
    "tags": [
      "facebook",
      "butterfly",
      "transformation",
      "satisfying",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 81
  }
,
  {
    "id": "pet-portrait-oil-paintings-midjourney",
    "title": "Viral Pet Portrait Oil Paintings — Midjourney Prompt for Facebook Pet Niches",
    "category": "Image Prompts",
    "tool": "Midjourney",
    "difficulty": "Beginner",
    "desc": "Regal oil-painting portraits of ordinary pets in royal attire — the cute-meets-classy image format Facebook pet niches share by the millions.",
    "prompt": "Regal oil painting portrait, [PET: a chubby orange tabby cat in an 18th-century admiral's navy coat with gold epaulettes / a pug in a velvet Renaissance duke's robe with a lace collar / a parrot in a tiny Napoleonic general's uniform with medals], dramatic Rembrandt lighting, deep emerald library background with blurred bookshelves, photorealistic brushwork, intricate fur and feather detail, noble dignified expression, museum-quality fine art, rich oil paint texture visible on the canvas, elegant oval inner vignette, 4:5 portrait composition --ar 4:5 --v 6.1 --style raw",
    "howto": [
      "Open Midjourney, paste the prompt, swap [PET] for your breed, and generate 4 variations.",
      "Upscale the sharpest face — pet portraits live or die on the eyes.",
      "Post with the pet's title as caption (Admiral Whiskers, reporting for duty) — character names drive shares.",
      "Run a weekly royal portrait slot — followers start submitting their own pets, which is free content.",
      "Offer prints via a simple store link — this niche converts shares into sales better than any other."
    ],
    "tips": [
      "Add the breed name to the prompt (Maine Coon, French Bulldog) — Midjourney nails specific breeds better than generic cat.",
      "Keep one lighting style across the series so the page looks like a real gallery.",
      "Ask permission before painting followers' pets, and credit the owner — goodwill fuels the next 100 submissions."
    ],
    "tags": [
      "facebook",
      "pets",
      "portrait",
      "midjourney",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 86
  }
,
  {
    "id": "niche-saturation-scanner-chatgpt",
    "title": "Niche Saturation Scanner — ChatGPT Prompt to Detect Oversaturated Niches in 2026",
    "category": "Text Prompts",
    "tool": "ChatGPT",
    "difficulty": "Intermediate",
    "desc": "A systematic ChatGPT framework that scores any creator niche on saturation, entry cost and timing — so you never launch into a crowded niche blind in 2026.",
    "prompt": "Act as a ruthless creator-economy analyst. I will give you a niche; you will run a SATURATION SCAN. Step 1: estimate current creator supply (how many channels or pages post in this niche weekly, rough tiers). Step 2: estimate demand signals (search interest trend, viral outliers in the last 90 days, advertiser interest). Step 3: score 1-10 on four axes — competition density, differentiation room, monetization depth, entry cost. Step 4: deliver a verdict: ENTER NOW / ENTER WITH AN ANGLE / AVOID — with the exact angle that would make entry work, or the reason avoidance is final. Step 5: name 3 adjacent micro-niches with lower saturation. Be brutally honest — no motivational fluff. My niche: [YOUR NICHE HERE]",
    "howto": [
      "Open ChatGPT, paste the prompt, replace [YOUR NICHE HERE] with the niche you are considering.",
      "Run the scan 3 times with slightly different niche phrasings — consensus across runs is the signal.",
      "Take the ENTER WITH AN ANGLE output seriously: that angle is your channel's positioning.",
      "Cross-check the verdict against real data: search the niche on YouTube and TikTok and count quality competitors.",
      "Save the micro-niche list — it is your backup plan if the main niche fails the scan."
    ],
    "tips": [
      "Be specific with the niche (AI-generated satisfying sand art, not satisfying) — vague inputs get vague scores.",
      "Ask ChatGPT to cite WHY it scored each axis — the reasoning matters more than the numbers.",
      "Re-run the scan every quarter — saturation is a moving target, not a one-time verdict."
    ],
    "tags": [
      "niche-discovery",
      "chatgpt",
      "strategy",
      "2026",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 79
  }
,
  {
    "id": "cross-platform-comment-harvester-gemini",
    "title": "Cross-Platform Comment Harvester — Gemini Prompt to Mine Viral Topic Angles",
    "category": "Text Prompts",
    "tool": "Gemini",
    "difficulty": "Beginner",
    "desc": "Turn comment sections across YouTube, TikTok, Facebook and Instagram into an endless viral-topic pipeline with this Gemini comment-mining prompt.",
    "prompt": "Act as a viral-content researcher. I will paste comment threads from YouTube, TikTok, Facebook and Instagram videos in my niche. Your job: COMMENT HARVESTING. Step 1: extract the 10 most-repeated questions and pain points. Step 2: flag unanswered questions the original creator ignored — those are my content gaps. Step 3: identify the emotional triggers (what made people argue, laugh, or tag friends). Step 4: turn each finding into 3 video titles with hooks, platform-tagged for youtube, tiktok, facebook, or instagram based on where the comment appeared. Step 5: rank the 10 topics by viral potential with a one-line reason each. Ignore generic praise; hunt for friction, curiosity and desire. Comments: [PASTE COMMENTS HERE]",
    "howto": [
      "Pick 3-5 viral videos in your niche and copy 50-100 comments from each platform into one doc.",
      "Open Gemini, paste the prompt with your comments, and run it on a large context window.",
      "Pick the top 3 ranked topics and script videos this week — speed beats perfection here.",
      "Reply to the original unanswered questions with your video link — the commenter becomes your first viewer.",
      "Re-harvest monthly — comment gold replenishes as trends shift."
    ],
    "tips": [
      "Mine competitor comments, not just your own — the best gaps live under other people's videos.",
      "Sort comments by newest sometimes — fresh complaints reveal trends before they peak.",
      "Keep a running harvest doc; patterns across months become your content calendar."
    ],
    "tags": [
      "youtube",
      "tiktok",
      "facebook",
      "instagram",
      "creator-niche"
    ],
    "trending": false,
    "popularity": 88
  }
,
  {
    "id": "viewer-to-subscriber-loyalty-claude",
    "title": "Viewer-to-Subscriber Loyalty Loop — Claude Prompt to Convert Viral Views Into Subs",
    "category": "Text Prompts",
    "tool": "Claude",
    "difficulty": "Advanced",
    "desc": "A Claude-built content system that turns one-time viral viewers into loyal subscribers — hooks, series arcs and community triggers for 2026 creator niches.",
    "prompt": "Act as a channel-growth strategist for faceless creator niches. I will describe my viral video and niche. Build me a LOYALTY LOOP SYSTEM. Part 1: DIAGNOSIS — why did this video go viral but not convert (hook analysis, expectation mismatch, missing next-step). Part 2: SERIES ARCHITECTURE — design a 5-video arc where each video ends on an open loop that only the next video closes, so casual viewers must subscribe to finish the story. Part 3: COMMUNITY TRIGGERS — 3 comment rituals, 1 recurring catchphrase, and a pinned-comment template that turn viewers into a community. Part 4: SUBSCRIBE MECHANICS — 3 subscribe CTAs that feel like value (not begging), placed at the exact retention timestamps. Part 5: 30-day calendar mapping the arc to posting slots. No generic advice — everything must reference my niche. My video: [DESCRIBE VIDEO + NICHE]",
    "howto": [
      "Open Claude, paste the prompt, and describe your best-performing viral video and niche in detail.",
      "Implement the 5-video arc immediately — the open-loop structure is the core mechanic.",
      "Film the catchphrase and comment ritual into every video from now on — consistency builds identity.",
      "Place the subscribe CTAs at Claude's suggested timestamps; test and adjust by retention graph.",
      "Track subscriber-per-view before and after — if it doesn't double in 30 days, re-run with a sharper diagnosis."
    ],
    "tips": [
      "Feed Claude your actual analytics (retention drops, traffic sources) — the diagnosis gets 10x sharper.",
      "The open loop must be a genuine mystery, not a trick — viewers smell clickbait instantly.",
      "One ritual is enough to start — three at once feels forced to new viewers."
    ],
    "tags": [
      "growth",
      "strategy",
      "subscribers",
      "creator-niche",
      "youtube"
    ],
    "trending": false,
    "popularity": 80
  },
  {
    "id": "niche-spotlight-ai-productivity-hacks-reels",
    "title": "AI Productivity Hacks Reels (Instagram Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "15-30 second AI productivity tip Reels for Instagram — glowing desk setups, desk transformations and calendar hacks that viewers save and share. Is niche ki reels 142.8M/118.5M/96.3M/74.1M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-productivity-hacks-reels.jpg",
    "prompt": "Bright energetic productivity scene, [PRODUCTIVITY MOMENT: a glowing futuristic desk with holographic checklists floating above a laptop at sunrise / a chaotic messy desk transforming into a perfectly organized neon desk in one smooth morph / a smartphone with a giant glowing calendar and colorful app icons bursting out of the screen / a cozy plant-filled workspace with a laptop dashboard, coffee and hourglass in golden morning light], vivid saturated colors, crisp detail, motivational energy, 9:16 vertical, photorealistic",
    "howto": [
      "Generate one productivity moment in Veo 3 per tip, swapping only [PRODUCTIVITY MOMENT] — the visual is the pattern-interrupt; the tip itself comes from the voiceover and caption.",
      "Write the tip as ONE line in ChatGPT: the painful problem + the 10-second fix — e.g. 'Your to-do list is lying to you. Do the 2-minute rule instead.' — one tip per Reel, never three.",
      "Voice it in ElevenLabs with a fast, upbeat tone — productivity Reels live on energy; a slow voice makes a 20-second tip feel like a lecture.",
      "Caption the full tip in 3 short lines so the Reel works muted — Instagram Reels are saved most when the value is readable without sound.",
      "Post daily 7-9 AM PKT (before work hours) and pin a comment asking 'Which hack should I test next?' — morning posters get the save-and-share crowd."
    ],
    "tips": [
      "Hook rule: the first frame must show the transformation or the glowing setup — productivity scrollers save what looks instantly achievable, not what sounds smart.",
      "Caption trick: 'Stop doing [common habit]' beats '5 productivity tips' — contrarian corrections are saved far more than generic lists on Reels.",
      "Save-bait line: end with 'Save this for Monday morning' — the save is Instagram's strongest ranking signal, and productivity content is built for it."
    ],
    "tags": [
      "viral-niche",
      "instagram",
      "productivity",
      "life-hacks",
      "faceless",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 90
  },
  {
    "id": "niche-spotlight-ai-workplace-revenge-stories",
    "title": "AI Workplace Revenge Stories (TikTok Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Viral workplace revenge and karma stories for TikTok — smug bosses, sticky-note pranks and triumphant walkouts told in 60-second AI shorts. Is niche ki videos 196.3M/171.8M/148.2M/122.6M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-workplace-revenge-stories.jpg",
    "prompt": "Dramatic cinematic office scene, [WORKPLACE MOMENT: a smug boss pointing at a calm confident employee in a bright modern office, coworkers watching / a triumphant employee walking out carrying a cardboard box while coworkers cheer and confetti falls / an office chair completely covered in bright colorful sticky notes, a surprised boss beside it / a proud employee holding a golden trophy at their desk, coworkers applauding, a sulking boss in the background], vivid color, cinematic lighting, expressive faces, story-telling composition, 9:16 vertical, photorealistic",
    "howto": [
      "Generate one workplace moment in Veo 3 per story beat, swapping only [WORKPLACE MOMENT] — keep the same boss and employee look across clips so the series feels like one show.",
      "Script a 60-second story in ChatGPT: the injustice (15s), the quiet setup (20s), the revenge payoff (20s), 'Part 2 if this hits 10K likes' — the payoff must land in the last 10 seconds, never earlier.",
      "Voice it in ElevenLabs with a deadpan, gossipy storyteller tone — workplace revenge works on schadenfreude, and a calm voice makes the karma hit harder.",
      "Cut the video to END right after the payoff line — TikTok rewards replays in this niche; viewers rewatch the boss's face the second the story ends.",
      "Post 2x/day 6-10 PM PKT and series it by character (the same boss every week) — the audience returns for 'their' villain, not random offices."
    ],
    "tips": [
      "Hook rule: open on the boss's worst line ('You're replaceable.') — workplace viewers decide in 1 second whether the story is THEIR story.",
      "Caption trick: 'My boss said this on my LAST day…' — first-person confession captions outperform summaries; never spoil the revenge in the caption.",
      "Comment bait: pin 'Have you ever had a boss like this?' — most of this audience relates to a bad boss, and relatable anger is the comment engine."
    ],
    "tags": [
      "viral-niche",
      "tiktok",
      "workplace",
      "revenge-stories",
      "faceless",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 93
  },
  {
    "id": "niche-spotlight-ai-space-science-videos",
    "title": "AI Space Science Explained (YouTube Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Awe-inspiring AI space science videos for YouTube — black holes, exoplanets, nebulae and alien ocean worlds explained in cinematic style. Is niche ki videos 38.4M/29.7M/22.5M/16.9M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-space-science-videos.jpg",
    "prompt": "Awe-inspiring cinematic space scene, [COSMIC SUBJECT: a massive black hole with a glowing orange accretion disk bending light around a doomed star / an astronaut floating before a gigantic ringed exoplanet with purple-teal clouds and glowing auroras / a glowing stellar nursery nebula in pink, violet and gold with newborn stars shining through cosmic dust / a sleek spaceship approaching a mysterious alien ocean planet with glowing blue seas and two small moons], vast cosmic scale, ultra-detailed, dramatic starlight, 16:9 widescreen, photorealistic",
    "howto": [
      "Generate one cosmic subject in Veo 3 per video section, swapping only [COSMIC SUBJECT] — the visual carries the awe; the narration carries the science.",
      "Script an 8-12 minute explainer in ChatGPT: one cosmic question per video ('What happens if you fall into a black hole?'), answered in 3 acts — the mystery, the science, the mind-bending twist.",
      "Voice it in ElevenLabs with a calm, wonder-filled documentary tone — space viewers stay for awe, not hype; shouting kills the cosmic mood.",
      "Title with the question, not the topic: 'What If You Fell Into a Black Hole?' beats 'Black Hole Explained' — questions are the searchable curiosity gap.",
      "Upload 2x/week 8 PM PKT with chapters (00:00 the question, 02:30 the science, 08:00 the twist) — chapters lift retention on long-form science content."
    ],
    "tips": [
      "Hook rule: the first 15 seconds must show the most impossible image (light bending around a black hole) — space scrollers decide on scale, not on facts.",
      "Title trick: 'What If' + a terrifying scenario outperforms every other space title format — fear plus wonder is the highest-CTR emotion pair in science.",
      "Retention line: tease the twist at 30 seconds ('and the answer breaks physics') — space viewers stay when they know a paradox is coming."
    ],
    "tags": [
      "viral-niche",
      "youtube",
      "space",
      "science",
      "faceless",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 88
  },
  {
    "id": "tiny-astronauts-cupcake-veo3",
    "title": "Tiny Astronauts Land on a Giant Cupcake — Veo 3 Prompt for Viral TikTok Story Niches",
    "category": "Video Prompts",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Adorable miniature astronauts explore a giant frosted cupcake in a viral TikTok story format — tiny ladders, cherry landings and frosting rivers that viewers cannot scroll past.",
    "prompt": "Adorable ultra-detailed miniature world, tiny astronauts in white space suits with oversized helmets [LANDING MOMENT: planting a tiny flag on top of a giant swirled pink frosting mountain while a cherry the size of a boulder glows beside them / rappelling down the side of a giant cupcake on a thin candy rope toward a river of glossy chocolate frosting / planting a tiny striped flag on a mountain of rainbow sprinkles as a spoon the size of a bridge casts a shadow / waving from a tiny rocket parked on a crumbly cookie crater beside a glowing cherry], soft warm kitchen light, shallow depth of field, playful wonder, crisp macro detail, 9:16 vertical, photorealistic",
    "howto": [
      "Paste the prompt into Veo 3 and pick ONE [LANDING MOMENT] per clip — one moment per video keeps the story readable in 8 seconds.",
      "Keep the same astronaut design across the series (white suit, oversized helmet, tiny flag) so viewers recognize the characters instantly.",
      "Generate 3 clips per story (landing, exploration, surprise) and cut them into one 20-30 second TikTok with a tiny 'mission log' caption on each beat.",
      "Add a soft, wonder-filled voiceover or trending gentle audio — miniature worlds perform best when the sound feels like a bedtime adventure.",
      "Post daily at 7-9 PM PKT and end every video with 'Where should they land next?' — audience suggestions become your next 10 videos."
    ],
    "tips": [
      "Hook rule: the first frame must show the scale joke (tiny astronaut vs giant cherry) — miniature content wins or dies in the first second.",
      "Caption trick: 'They landed on the WRONG planet...' outperforms a plain description — the cupcake reveal is the payoff, never the caption.",
      "Series trick: number the missions (Mission 07: The Cupcake) — collectors binge numbered series far more than one-off cute clips."
    ],
    "tags": [
      "creator-niche",
      "tiktok",
      "miniature",
      "cute",
      "storytelling"
    ],
    "trending": true,
    "popularity": 90
  },
  {
    "id": "bubble-city-commute-kling",
    "title": "Bubble City Floating Commute — Kling Prompt for Viral YouTube Shorts Niches",
    "category": "Video Prompts",
    "tool": "Kling",
    "difficulty": "Intermediate",
    "desc": "Commuters float to work inside giant iridescent bubbles over a pastel skyline — a dreamlike Shorts format built for replays and 'wait, how?' comments.",
    "prompt": "Dreamlike pastel sky-city, commuters drifting to work inside giant transparent iridescent bubbles [COMMUTE MOMENT: a sleepy office worker sipping coffee inside a bubble that bobs gently past floating traffic lights / a schoolgirl waving from her bubble as it glides between candy-colored skyscrapers and floating gardens / a courier pedalling a tiny bicycle inside a bubble, parcels bobbing around him like balloons / a whole family floating together in one giant bubble, picnic basket and dog in tow, over a sunrise skyline], soft glowing light, gentle motion, whimsical scale, crisp detail, 9:16 vertical, cinematic",
    "howto": [
      "Paste the prompt into Kling and pick ONE [COMMUTE MOMENT] per clip — Kling handles gentle floating motion beautifully, so let the bubble drift, do not force fast action.",
      "Generate the same skyline twice (morning and golden hour) and reuse it across the series so the city feels like a real place viewers return to.",
      "Cut each Short to 25-35 seconds: the commute setup (5s), the floating journey (15s), one delightful surprise (a bubble bump, a floating cat) at the end.",
      "Use calm lo-fi or dreamy music — the contrast between an ordinary commute and a magical sky is the whole joke, and loud music kills it.",
      "Title every Short as a question ('What if your commute looked like THIS?') and pin a comment asking viewers what their bubble would carry."
    ],
    "tips": [
      "Hook rule: open mid-air, already floating — never start on the ground, or viewers think it is an ordinary city video.",
      "Replay trick: hide one tiny detail per video (a floating cat, a bubble dog) and mention it in the pinned comment — replays drive Shorts distribution.",
      "Thumbnail trick: one giant bubble against the skyline, one tiny human inside — scale contrast is the click."
    ],
    "tags": [
      "creator-niche",
      "youtube",
      "surreal",
      "shorts",
      "fantasy"
    ],
    "trending": false,
    "popularity": 84
  },
  {
    "id": "clockwork-library-sora",
    "title": "Victorian Clockwork Library — Sora Prompt for Cozy YouTube Story Niches",
    "category": "Video Prompts",
    "tool": "Sora",
    "difficulty": "Intermediate",
    "desc": "A gaslit library where brass gears turn the pages and clockwork owls shelve the books — cozy, mysterious YouTube storytelling that viewers watch to the end.",
    "prompt": "Cozy Victorian clockwork library, warm gaslight, brass gears and polished wood [LIBRARY MOMENT: a clockwork owl with glowing amber eyes shelving leather-bound books that slide themselves into place / brass gears beneath the floor turning a giant orrery above a reading desk where a cat naps on an open atlas / a tiny brass librarian winding a key in the back of a walking book-cart that hums down the aisle / rain tapping the tall arched windows while a hidden door of bookshelves swings open on silent gears], rich amber tones, gentle camera drift, magical realism, 16:9 widescreen, cinematic",
    "howto": [
      "Paste the prompt into Sora and pick ONE [LIBRARY MOMENT] per scene — Sora's slow camera drift suits this niche, so ask for gentle movement, never fast cuts.",
      "Build a 6-10 minute story video from 5-6 scenes: the library at dusk, the owl's rounds, the hidden door, the secret room, the closing shot.",
      "Narrate with a calm, warm storyteller voice — cozy audiences stay for the voice as much as the visuals, so record narration first and cut visuals to it.",
      "Write the title as a mystery ('The Library That Winds Itself') rather than a description — curiosity gaps carry cozy long-form retention.",
      "Upload weekly at 8 PM PKT with chapters for each scene — chapters lift retention on 8+ minute cozy content dramatically."
    ],
    "tips": [
      "Hook rule: the first 15 seconds must show something impossible (a book shelving itself) — cozy viewers still need a reason not to click away.",
      "Sound trick: layer soft ticking, page turns and rain under the narration — cozy niches are watched as ambience, and bad audio ends the session.",
      "Series trick: one hidden detail per episode (the same brass key, the same sleeping cat) rewards returning viewers and builds a lore-hungry audience."
    ],
    "tags": [
      "creator-niche",
      "youtube",
      "cozy",
      "fantasy",
      "storytelling"
    ],
    "trending": false,
    "popularity": 82
  },
  {
    "id": "neon-arcade-pinball-runway",
    "title": "Neon Arcade Pinball World — Runway Prompt for Viral Instagram Reels Niches",
    "category": "Video Prompts",
    "tool": "Runway",
    "difficulty": "Beginner",
    "desc": "A player shrinks into a giant neon pinball machine — bumpers, flippers and jackpot lights in a high-energy Reels format made for shares.",
    "prompt": "High-energy neon arcade world, electric pink, cyan and purple glow [PINBALL MOMENT: a tiny player in a glowing jacket bouncing off a giant chrome bumper as lights explode around them / flippers the size of cars launching a chrome ball through a tunnel of neon rings toward a flashing jackpot sign / a player surfing on top of a giant pinball, dodging spinning bumpers and collecting glowing stars / the machine tilting as a crowd of neon silhouettes cheers and confetti made of light rains down], fast playful motion, sharp neon reflections, arcade energy, 9:16 vertical, vibrant",
    "howto": [
      "Paste the prompt into Runway and pick ONE [PINBALL MOMENT] per clip — one stunt per Reel keeps the energy high and the edit simple.",
      "Generate 3 clips per Reel (launch, chaos, jackpot) and cut them fast: 1-2 seconds per shot, with a beat drop exactly on the jackpot moment.",
      "Pair with a high-energy trending audio — Reels in arcade and gaming niches live or die on the sound matching the bounce.",
      "Caption with a score ('SCORE: 9,999,990 — one flip away from the jackpot') so the Reel reads as a game, not just a pretty clip.",
      "Post 1-2x per day at 6-9 PM PKT and use the same player character every time — recurring characters turn one-off Reels into a show."
    ],
    "tips": [
      "Hook rule: start mid-bounce, lights already exploding — arcade scrollers decide in under a second, and a slow setup loses them.",
      "Share trick: end on a near-miss ('SO CLOSE!') instead of a clean win — near-misses get shared to friends far more than perfect runs.",
      "Color trick: keep pink, cyan and purple as your only palette — a strict palette makes the whole page look like one brand at a glance."
    ],
    "tags": [
      "creator-niche",
      "instagram",
      "arcade",
      "neon",
      "reels"
    ],
    "trending": false,
    "popularity": 86
  },
  {
    "id": "honey-pour-spiral-flow",
    "title": "Golden Honey Pour Spiral — Google Flow Prompt for Satisfying Facebook Reels",
    "category": "Video Prompts",
    "tool": "Google Flow",
    "difficulty": "Beginner",
    "desc": "Thick golden honey spirals onto warm bread, fruit and pancakes in slow, glossy ribbons — pure satisfying Reels bait for Facebook food pages.",
    "prompt": "Macro satisfying food scene, thick golden honey pouring in a slow glossy ribbon [POUR MOMENT: honey spiralling onto a stack of warm pancakes, dripping down the sides in slow motion / honey ribbons folding over a slice of crusty bread, glistening in warm morning light / a honey dipper twirling a long golden thread above a bowl of fresh berries and yogurt / honey cascading over a honeycomb, droplets catching the light like amber jewels], warm golden tones, extreme macro detail, slow luxurious motion, 9:16 vertical, photorealistic",
    "howto": [
      "Paste the prompt into Google Flow and pick ONE [POUR MOMENT] per clip — satisfying content works on one perfect pour, never a montage.",
      "Generate each pour at the slowest motion setting — the glossy fold of the ribbon is the entire payoff, and rushing it ruins the clip.",
      "Cut to 15-25 seconds with natural sticky sounds or soft ASMR audio — Facebook food Reels are watched muted often, so the visual must carry it alone.",
      "Caption with one line only ('Sound on for this one') plus the food name — satisfying pages grow on shares, and short captions get shared more.",
      "Post in the morning (8-10 AM PKT) when food cravings peak, and batch 7 pours in one session for a full week of daily posts."
    ],
    "tips": [
      "Hook rule: the first frame must already show honey mid-pour — a jar sitting still is a scroll-past, a ribbon already falling is a stop.",
      "Loop trick: cut the clip so the last frame matches the first — seamless loops double average watch time on satisfying Reels.",
      "Variety trick: rotate the base (pancakes, bread, berries, honeycomb) weekly — the pour stays the star, but a new base stops the page feeling repetitive."
    ],
    "tags": [
      "creator-niche",
      "facebook",
      "satisfying",
      "food",
      "asmr"
    ],
    "trending": false,
    "popularity": 88
  },
  {
    "id": "snow-globe-village-veo3",
    "title": "Snow Globe Village Comes Alive — Veo 3 Prompt for Viral Facebook Holiday Niches",
    "category": "Video Prompts",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Shake a snow globe and the tiny village inside wakes up — carollers, a train and a skating pond in a heartwarming holiday format Facebook loves to share.",
    "prompt": "Heartwarming miniature winter village inside a glass snow globe, soft snowfall drifting [VILLAGE MOMENT: tiny carollers in red scarves singing outside a glowing bakery as a miniature train circles the square / children skating on a frozen pond beside a Christmas tree that lights up one bulb at a time / a tiny postman on a sled delivering glowing letters while smoke curls from cottage chimneys / the whole village cheering as fireworks of golden sparks burst above the rooftops], warm window light, gentle snowfall, cozy magic, crisp miniature detail, 9:16 vertical, photorealistic",
    "howto": [
      "Paste the prompt into Veo 3 and pick ONE [VILLAGE MOMENT] per clip — one village scene per video keeps the holiday magic focused.",
      "Open every video with a hand shaking the globe (generate this as a separate 3-second clip) — the shake is the ritual that tells viewers 'the magic is starting'.",
      "Build a 30-45 second story: the shake, two village moments, and a warm closing frame (the whole village glowing at night).",
      "Use a gentle holiday instrumental — Facebook holiday content is shared by families, and calm music makes it share-safe for every age.",
      "Post from late November through December at 7-9 PM PKT, and series it by village (the same bakery, the same train) so viewers follow the village like a show."
    ],
    "tips": [
      "Hook rule: the shake in the first 2 seconds is the hook — viewers who see the globe shake stay to see what wakes up inside.",
      "Share trick: end with a warm line on screen ('Merry Christmas from the little village') — holiday shares spike on content that carries the greeting itself.",
      "Evergreen trick: keep the village free of year-specific references — a good snow-globe video earns again every single December."
    ],
    "tags": [
      "creator-niche",
      "facebook",
      "holiday",
      "winter",
      "miniature"
    ],
    "trending": true,
    "popularity": 91
  },
  {
    "id": "mushroom-village-illustrations-midjourney",
    "title": "Whimsical Mushroom Village Illustrations — Midjourney Prompt for Instagram Storybook Pages",
    "category": "Image Prompts",
    "tool": "Midjourney",
    "difficulty": "Intermediate",
    "desc": "Storybook mushroom cottages with glowing windows, snail mail carriers and lantern-lit paths — a whimsical illustration series Instagram saves by the thousand.",
    "prompt": "Whimsical storybook illustration, a cozy village of mushroom cottages with glowing amber windows and curling chimneys [VILLAGE SCENE: a snail mail carrier in a tiny red cap delivering glowing letters along a lantern-lit moss path / mushroom cottages with striped roofs, flower-box windows and a frog sitting on a toadstool reading a book / a night market of fireflies, acorn lanterns and a mouse baker selling tiny berry tarts / a rainy mushroom village with puddle reflections, umbrellas made of leaves and warm light in every window], soft painterly texture, rich color, charming detail, storybook magic, --ar 4:5 --style raw --v 6.1",
    "howto": [
      "Paste the prompt into Midjourney and pick ONE [VILLAGE SCENE] per image — one scene per post keeps the village coherent instead of cluttered.",
      "Generate 4 variations per scene and pick the one with the warmest windows and cleanest composition — storybook art is judged on coziness, not complexity.",
      "Post as a 4-5 image carousel (one village, five corners of it) — carousels earn saves on Instagram because viewers swipe to see the whole village.",
      "Caption each carousel with a one-line micro-story ('The snail mail is late again — the letters glow when they are happy') to turn art into a world.",
      "Post 3-4x per week at 7-9 PM PKT and keep one recurring character (the snail carrier) in every carousel — followers return for characters, not just art."
    ],
    "tips": [
      "Style trick: lock one palette (moss green, amber, cream) across the whole series — a consistent palette makes the page instantly recognizable in the feed.",
      "Save-bait trick: end carousels with a 'spot the frog' frame — hidden-detail frames are saved and shared far more than plain art posts.",
      "Monetization trick: once a village has 20+ images, bundle them as phone wallpapers or a coloring pack — storybook audiences buy the world, not single images."
    ],
    "tags": [
      "creator-niche",
      "instagram",
      "storybook",
      "illustration",
      "whimsical"
    ],
    "trending": false,
    "popularity": 83
  },
  {
    "id": "rising-subculture-niche-finder-chatgpt",
    "title": "Rising Subculture Niche Finder — ChatGPT Prompt to Spot Creator Niches Before They Explode",
    "category": "Text Prompts",
    "tool": "ChatGPT",
    "difficulty": "Advanced",
    "desc": "Find fast-rising subcultures and turn them into first-mover channels — a niche-discovery prompt that scores trend velocity, competition and monetization before you commit.",
    "prompt": "You are a trend-spotting strategist for faceless content creators. Step 1: list 15 fast-rising subcultures, hobbies or internet tribes in 2026, each with 2-3 pieces of evidence (search growth, viral posts, new communities, product launches). Step 2: for each subculture, score it 1-10 on trend velocity, audience size, competition level, content supply difficulty and monetization potential, and explain each score in one line. Step 3: rank the top 5 and, for each, give 3 channel angles that have NOT been done to death, 10 video ideas with hooks, the best platform (YouTube, TikTok, Facebook or Instagram) and why, and the first 30-day posting plan. Step 4: flag the 3 riskiest picks and what would kill them. Rules: no generic niches (fitness, cooking, finance), every claim must cite a signal, and the final output must be a decision table I can act on today.",
    "howto": [
      "Paste the prompt into ChatGPT and add your constraints at the end (faceless or on-camera, your weekly hours, your budget) — constraints sharpen the shortlist dramatically.",
      "Run it once per month, not daily — subcultures move monthly, and re-running weekly just reshuffles noise into false urgency.",
      "Take the top 3 ranked niches and validate each with one week of real research (search the platform, count serious competitors, check monetization) before committing.",
      "Pick ONE niche and ONE angle from the output — the prompt's job is to narrow, and creators fail by launching three niches at once.",
      "Re-run with 'exclude everything from the last run' to force fresh picks each month and build a pipeline of backup niches."
    ],
    "tips": [
      "Evidence rule: reject any subculture whose evidence is only vibes — demand a number, a post, or a community for every pick.",
      "First-mover rule: the best pick is usually rank 2-3, not rank 1 — rank 1 is where everyone else is already rushing.",
      "Kill-switch rule: write down what would make you quit the niche BEFORE launching — it stops sunk-cost months later."
    ],
    "tags": [
      "creator-niche",
      "youtube",
      "niche-discovery",
      "trends",
      "strategy"
    ],
    "trending": true,
    "popularity": 92
  },
  {
    "id": "niche-audience-language-decoder-gemini",
    "title": "Niche Audience Language Decoder — Gemini Prompt to Speak Your Niche's Native Slang",
    "category": "Text Prompts",
    "tool": "Gemini",
    "difficulty": "Intermediate",
    "desc": "Decode the exact words, jokes and phrases your niche audience actually uses — so your titles, hooks and scripts sound like an insider, not an outsider.",
    "prompt": "You are a community linguist for content creators. I will give you my niche: [NICHE]. Step 1: research how this audience actually talks — analysis of comments, forums, subreddits and viral videos — and build a language map: 20 slang terms and inside jokes with plain-English meanings, 10 phrases fans use to praise content, 10 phrases that instantly mark someone as an outsider, and 5 taboo topics or jokes to avoid. Step 2: rewrite my 5 video titles and 5 hooks in the audience's native voice, keeping each under 60 characters where the platform demands it. Step 3: give me 10 comment-reply templates in the audience's voice that spark replies instead of likes. Step 4: warn me about 3 phrases that sound authentic but are already cringe or overused. Output must be a copy-paste voice guide I can hand to any scriptwriter.",
    "howto": [
      "Paste the prompt into Gemini, replace [NICHE] with your exact niche (not a broad category — 'retro handheld gaming', not 'gaming'), and paste 3-5 of your own titles for rewriting.",
      "Feed Gemini 5-10 real comments from your niche's top videos first — real comments beat Gemini's memory and make the slang map accurate.",
      "Use the voice guide for every script, title and reply for 30 days — consistency in voice is what turns viewers into community members.",
      "Refresh the map quarterly — slang decays fast, and last year's inside joke is this year's outsider marker.",
      "Hand the guide to any editor or writer before they touch a script — one off-voice video can cost a niche audience's trust."
    ],
    "tips": [
      "Insider test: if a real fan would not say it in a comment, do not put it in a title — audiences forgive bad video quality, never fake slang.",
      "Reply trick: the 10 comment templates are the highest-ROI part — replies in the audience's voice convert commenters into subscribers.",
      "Taboo rule: the 5 taboos matter more than the 20 slang terms — one wrong joke can end a niche channel faster than a bad month of videos."
    ],
    "tags": [
      "creator-niche",
      "tiktok",
      "audience",
      "hooks",
      "scripting"
    ],
    "trending": false,
    "popularity": 79
  },
  {
    "id": "burnout-proof-content-system-claude",
    "title": "Burnout-Proof Content System — Claude Prompt to Plan 90 Days Without Burning Out",
    "category": "Text Prompts",
    "tool": "Claude",
    "difficulty": "Advanced",
    "desc": "A 90-day posting system built around batching, rest weeks and reusable formats — so creators grow a channel without burning out in month two.",
    "prompt": "You are a creator-systems coach. Build me a burnout-proof 90-day content system for my niche: [NICHE], posting [X] times per week on [PLATFORM]. Step 1: design 4 reusable content formats (one easy, one medium, one high-effort, one community-driven) with a production time budget for each. Step 2: lay out a 12-week calendar with batching days, one rest week per month, and buffer videos banked before day one. Step 3: give me a weekly workflow (filming day, editing day, posting day, analytics day) that fits in [HOURS] hours per week, with tasks I can delegate or automate marked clearly. Step 4: define 5 early-warning signs of burnout and a 'minimum viable week' plan for each — what to post when energy is zero. Step 5: set 3 growth checkpoints (day 30, 60, 90) with metrics and a decision rule for doubling down or pivoting. Output as a week-by-week plan I can follow without thinking.",
    "howto": [
      "Paste the prompt into Claude and fill every bracket honestly (real hours, real niche, real platform) — a system built on fantasy hours collapses in week two.",
      "Bank 2 weeks of buffer videos BEFORE day one — buffers are the difference between a rest week and a dead channel.",
      "Follow the weekly workflow exactly for the first month before customizing — systems fail when creators redesign them before testing them.",
      "At each checkpoint, apply the decision rule as written — pivot or double down on the numbers, not on how tired you feel that week.",
      "Re-run at day 90 with your real analytics — the second 90 days should be built on your data, not on guesses."
    ],
    "tips": [
      "Rest-week rule: a scheduled rest week is not quitting — channels that rest on schedule outlast channels that burn out by month three.",
      "Format rule: the easy format is your survival format — on a zero-energy week, the easy format IS the plan, not a failure.",
      "Delegation trick: delegate editing before anything else — editing is the first task that burns creators out, and the easiest to hand off."
    ],
    "tags": [
      "creator-niche",
      "youtube",
      "planning",
      "productivity",
      "systems"
    ],
    "trending": false,
    "popularity": 81
  },
  {
    "id": "niche-spotlight-ai-stoic-motivation-reels",
    "title": "AI Stoic Motivation Reels (Facebook Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Timeless Stoic wisdom Reels for Facebook — marble statues, sunrise cliffs and candlelit libraries paired with 2,000-year-old quotes that still hit today. Is niche ki reels 168.4M/142.7M/118.9M/92.5M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-stoic-motivation-reels.jpg",
    "prompt": "Cinematic stoic wisdom scene, [STOIC MOMENT: a marble statue of Marcus Aurelius glowing in warm golden sunrise light with soft mist / a philosopher in a flowing robe standing alone on a cliff above a sea of clouds at dawn / an ancient Roman statue holding a laurel wreath as storm clouds part and golden sunbeams break through / a philosopher writing by candlelight in a cozy ancient library filled with scrolls], warm golden tones, dramatic light, timeless and inspiring, 9:16 vertical, photorealistic",
    "howto": [
      "Generate one stoic moment in Veo 3 per Reel, swapping only [STOIC MOMENT] — the statue or sunrise image is the scroll-stopper; the quote comes from the voiceover and caption.",
      "Pick ONE quote per Reel from Marcus Aurelius, Seneca or Epictetus in ChatGPT — one idea per Reel, never a quote list; a single line people can remember beats five they forget.",
      "Voice it in ElevenLabs with a calm, deep, slow documentary tone — Stoicism sells on gravity, not hype; a shouting voice kills the ancient-wisdom mood instantly.",
      "Caption the quote in 2 short lines so the Reel works muted — Facebook Reels autoplay silent, and a quotable caption is what gets screenshotted and shared.",
      "Post daily 8-10 PM PKT and pin a comment asking 'Which quote do you live by?' — evening philosophy viewers comment their own life story, and comments push Reels further."
    ],
    "tips": [
      "Hook rule: the first frame must be the statue in golden light, not a talking head — Facebook scrollers stop for beauty, then stay for the quote.",
      "Caption trick: 'Marcus Aurelius wrote this 2,000 years ago — it is more relevant today than ever' — the 2,000-year time gap is the curiosity hook that makes people read on.",
      "Share bait: end with 'Send this to someone who needs it today' — Stoic quotes are shared as personal messages more than any other Reel format."
    ],
    "tags": [
      "viral-niche",
      "facebook",
      "stoicism",
      "motivation",
      "faceless",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 89
  },
  {
    "id": "niche-spotlight-ai-health-nutrition-reels",
    "title": "AI Health & Nutrition Reels (Instagram Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Science-backed health and nutrition tip Reels for Instagram — glowing superfood bowls, sunrise runs and kitchen transformations that viewers save for later. Is niche ki reels 154.2M/128.6M/104.3M/81.7M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-health-nutrition-reels.jpg",
    "prompt": "Bright vibrant health scene, [HEALTH MOMENT: a glowing bowl of superfoods — berries, avocado and greens — bursting with fresh energy on a sunny kitchen table / a runner at sunrise in a green park with golden light and fresh morning air / colorful fresh fruits and vegetables being chopped with splashing water droplets in a bright modern kitchen / a peaceful morning yoga stretch by a sunny window with plants, a glass of water and fresh fruit], vivid saturated colors, fresh and energizing, 9:16 vertical, photorealistic",
    "howto": [
      "Generate one health moment in Veo 3 per Reel, swapping only [HEALTH MOMENT] — the fresh, colorful visual is the pattern-interrupt; the tip comes from the voiceover and caption.",
      "Write the tip as ONE line in ChatGPT: the common mistake + the science-backed fix — e.g. 'Skipping breakfast is not fasting — your body needs protein within an hour of waking.' — one tip per Reel, never three.",
      "Voice it in ElevenLabs with a warm, energetic, friendly tone — health Reels live on trust and energy; a robotic voice makes a nutrition tip feel like an ad.",
      "Caption the full tip in 3 short lines so the Reel works muted — Instagram health content is saved most when the value is readable without sound.",
      "Post daily 7-9 AM PKT (before breakfast) and pin a comment asking 'What is your go-to healthy breakfast?' — morning health posters catch the save-and-share crowd at exactly the right moment."
    ],
    "tips": [
      "Hook rule: the first frame must show the glowing superfood bowl or the sunrise run — health scrollers save what looks instantly fresh and doable, not what sounds scientific.",
      "Caption trick: 'Stop doing [common health habit]' beats '5 health tips' — contrarian corrections are saved far more than generic lists on Reels.",
      "Save-bait line: end with 'Save this for your next grocery run' — the save is Instagram's strongest ranking signal, and health content is built for it."
    ],
    "tags": [
      "viral-niche",
      "instagram",
      "health",
      "nutrition",
      "faceless",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 88
  },
  {
    "id": "niche-spotlight-ai-quiz-trivia-videos",
    "title": "AI Quiz & Trivia Videos (TikTok Niche)",
    "category": "Viral Niches",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Interactive quiz and trivia videos for TikTok — glowing question marks, puzzle brains and golden trophies that make viewers play along and comment their score. Is niche ki videos 212.8M/186.5M/159.3M/127.4M views tak gayi hain.",
    "image": "images/niches/niche-grid-ai-quiz-trivia-videos.jpg",
    "prompt": "Exciting colorful quiz-show scene, [QUIZ MOMENT: a giant glowing golden question mark floating over a game-show stage with confetti and bright lights / a brain made of glowing colorful puzzle pieces on a dark stage under spotlights / a golden trophy on a podium surrounded by colorful balloons and confetti in a bright studio / mysterious glowing treasure chests and ancient artifacts in a dramatic quiz-show setting with moody lighting], vivid color, dramatic lighting, playful and curiosity-driving, 9:16 vertical, photorealistic",
    "howto": [
      "Generate one quiz moment in Veo 3 per question, swapping only [QUIZ MOMENT] — the game-show visual is the hook; the question comes from the voiceover and on-screen text.",
      "Script each video in ChatGPT as 5 questions with a 5-second think timer: easy first, impossible last — the last question must be so hard that most viewers fail it, because failure drives comments.",
      "Voice it in ElevenLabs with a fast, playful game-show host tone — quiz videos live on energy and suspense; a slow voice makes a 5-second timer feel like a lecture.",
      "End every video with 'Comment your score out of 5' — the comment-your-score hook is the entire growth engine of this niche; never end on the answer, end on the challenge.",
      "Post 2x/day 12 PM and 7 PM PKT and series it by theme (geography week, logo week, riddle week) — themed series turn one viral video into a daily habit for viewers."
    ],
    "tips": [
      "Hook rule: open on the hardest question first as a teaser ('Only 1% get this one') — quiz scrollers decide in 1 second whether they can beat the quiz.",
      "Caption trick: 'I bet you cannot get 5/5' — a direct challenge caption outperforms any summary; viewers watch to prove the caption wrong.",
      "Comment bait: pin 'What did you score? Be honest!' — scores are the comment engine, and TikTok pushes videos whose comments grow fastest."
    ],
    "tags": [
      "viral-niche",
      "tiktok",
      "quiz",
      "trivia",
      "faceless",
      "creator-niche"
    ],
    "trending": true,
    "popularity": 92
  },
  {
    "id": "frozen-hot-chocolate-volcano-veo3",
    "title": "Frozen Hot Chocolate Volcano — Veo 3 Prompt for Viral TikTok Winter Niches",
    "category": "Video Prompts",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "A volcano that erupts with thick hot chocolate instead of lava, freezing mid-air into glossy chocolate icicles — a winter wonder clip built for replays and 'wait, what?' comments.",
    "prompt": "Magical winter wonderland, a snow-covered volcano erupting with thick glossy hot chocolate [ERUPTION MOMENT: a slow-motion chocolate lava flow freezing into sparkling chocolate icicles as it hits the snow / tiny marshmallow villagers skiing down a chocolate river that steams in the cold air / a giant mug the size of a house catching the chocolate eruption like a fountain / chocolate snowflakes the size of dinner plates drifting over a cozy village of gingerbread houses], warm golden light against blue snow, rich creamy browns, playful wonder, crisp detail, 9:16 vertical, photorealistic",
    "howto": [
      "Paste the prompt into Veo 3 and pick ONE [ERUPTION MOMENT] per clip — one impossible food moment per video keeps the wonder readable in 8 seconds.",
      "Keep the volcano design identical across the series (same snowy peak, same glossy chocolate) so viewers recognize the format instantly.",
      "Generate 3 clips per story (eruption, freeze, village reaction) and cut them into one 20-30 second TikTok with a cozy winter sound.",
      "Add a warm, amazed voiceover or a trending winter audio — food-wonder clips perform best when the sound feels like a holiday movie trailer.",
      "Post daily at 7-9 PM PKT through winter and end every video with 'What should erupt next?' — audience suggestions become your next 10 videos."
    ],
    "tips": [
      "Hook rule: the first frame must show chocolate mid-eruption, not the mountain — impossible food wins or dies in the first second.",
      "Caption trick: 'This volcano does NOT erupt lava...' outperforms a plain description — the chocolate reveal is the payoff, never the caption.",
      "Series trick: number the eruptions (Eruption 04: Hot Chocolate) — collectors binge numbered series far more than one-off cute clips."
    ],
    "tags": [
      "creator-niche",
      "tiktok",
      "winter",
      "food",
      "satisfying"
    ],
    "trending": true,
    "popularity": 90
  },
  {
    "id": "tiny-librarians-giant-books-veo3",
    "title": "Tiny Librarians Shelve Giant Books — Veo 3 Prompt for Cozy YouTube Shorts Niches",
    "category": "Video Prompts",
    "tool": "Veo 3",
    "difficulty": "Beginner",
    "desc": "Miniature librarians in cardigans climb ladders, push carts and stamp giant books in a warm wooden library — a cozy Shorts format built for calm, bingeable viewing.",
    "prompt": "Cozy miniature library world, tiny librarians in knitted cardigans and round glasses [LIBRARY MOMENT: climbing a tall wooden ladder to shelve a book taller than three of them stacked / pushing a tiny brass cart piled with glowing books down a polished wooden aisle / stamping a giant open book with a stamp the size of a dinner plate as golden dust puffs up / reading by lamplight on top of a giant open book while rain taps the library windows], warm amber lamplight, rich wood tones, gentle and heartwarming, crisp macro detail, 9:16 vertical, photorealistic",
    "howto": [
      "Paste the prompt into Veo 3 and pick ONE [LIBRARY MOMENT] per clip — one quiet task per video keeps the cozy mood unbroken.",
      "Keep the same librarian characters across the series (same cardigans, same glasses, same brass cart) so viewers bond with them like a cast.",
      "Generate 3 clips per story (morning opening, a shelving adventure, lights-out) and cut them into one 30-45 second Short with soft piano or rain audio.",
      "Add a soft, slow voiceover or no voice at all — cozy content performs best when the sound feels like a reading nook, not a sales pitch.",
      "Post daily at 8-10 PM PKT and end every video with 'Which book should they shelve next?' — book lovers will answer, and answers become your next videos."
    ],
    "tips": [
      "Hook rule: the first frame must show the scale joke (tiny librarian vs giant book) — miniature content wins or dies in the first second.",
      "Caption trick: 'The library opens at midnight...' outperforms a plain description — a tiny secret world is the hook, not the task.",
      "Series trick: give each librarian a name and a job (Milo shelves, Nora stamps) — named characters turn viewers into fans."
    ],
    "tags": [
      "creator-niche",
      "youtube",
      "cozy",
      "miniature",
      "storytelling"
    ],
    "trending": true,
    "popularity": 88
  },
  {
    "id": "floating-umbrella-parade-kling",
    "title": "Floating Umbrella City Rain Parade — Kling Prompt for Viral Instagram Reels Niches",
    "category": "Video Prompts",
    "tool": "Kling",
    "difficulty": "Intermediate",
    "desc": "A whole city parades through the rain under floating, glowing umbrellas that drift like lanterns — a dreamlike Reels format built for saves and shares.",
    "prompt": "Dreamlike rainy city at dusk, crowds strolling beneath hundreds of floating glowing umbrellas [PARADE MOMENT: a red umbrella the size of a car drifting slowly over a wet cobblestone street reflecting neon signs / children chasing a runaway glowing umbrella down a shimmering alley / a brass band marching under umbrellas that change color with every note / a couple sharing one giant transparent umbrella as golden rain sparkles around them], cinematic reflections, vivid neon against deep blue rain, joyful and magical, smooth motion, 9:16 vertical, photorealistic",
    "howto": [
      "Paste the prompt into Kling and pick ONE [PARADE MOMENT] per clip — one magical rain scene per Reel keeps the dream intact.",
      "Keep the umbrella palette consistent (warm reds, golds and teals) so the series feels like one city, not random clips.",
      "Generate 3 clips per story (street, chase, finale) and cut them into one 15-25 second Reel with a dreamy instrumental track.",
      "Add gentle rain sound plus the music — Reels with layered natural sound get saved far more than music-only edits.",
      "Post daily at 6-8 PM PKT and end with 'Tag someone you would share an umbrella with' — the tag is the share engine of this niche."
    ],
    "tips": [
      "Hook rule: the first frame must show an umbrella floating with nobody holding it — impossible physics is the scroll-stopper.",
      "Caption trick: 'It rains umbrellas in this city...' beats any summary — mystery captions earn the tap, explanations do not.",
      "Save-bait line: end with 'Save this for a rainy day' — the save is Instagram's strongest ranking signal, and dreamy content is built for it."
    ],
    "tags": [
      "creator-niche",
      "instagram",
      "rain",
      "dreamlike",
      "city"
    ],
    "trending": true,
    "popularity": 89
  },
  {
    "id": "abandoned-train-garden-sora",
    "title": "Abandoned Train Station Garden — Sora Prompt for Mystery YouTube Niches",
    "category": "Video Prompts",
    "tool": "Sora",
    "difficulty": "Intermediate",
    "desc": "A forgotten train station where nature has taken over — vines on the ticket office, wildflowers on the platform, one train that still arrives at midnight.",
    "prompt": "Hauntingly beautiful abandoned train station reclaimed by nature [STATION MOMENT: a slow camera push through vines covering the ticket office as sunlight breaks through the broken roof / wildflowers swaying on the platform where a rusted bench still faces the tracks / a single vintage train rolling silently into the overgrown station at midnight with all its windows glowing / a fox sleeping curled on a moss-covered suitcase beside the timetable board], soft golden-hour light, rich greens against rusted metal, mysterious and peaceful, cinematic slow motion, 9:16 vertical, photorealistic",
    "howto": [
      "Paste the prompt into Sora and pick ONE [STATION MOMENT] per clip — one mystery beat per video keeps viewers watching to the end.",
      "Keep the same station design across the series (same platform, same rusted bench) so returning viewers feel they are revisiting a place.",
      "Generate 3 clips per story (arrival, exploration, midnight train) and cut them into one 40-60 second YouTube Short with a soft, curious voiceover.",
      "Voice it with a calm, wondering tone — mystery niches live on questions, and a rushed voice kills the atmosphere.",
      "Post 3x/week at 8 PM PKT and end every video with 'What do you think happened here?' — unanswered questions are the comment engine of mystery content."
    ],
    "tips": [
      "Hook rule: the first frame must show nature somewhere it should not be (flowers on a platform) — the wrongness is the hook.",
      "Caption trick: 'Nobody has bought a ticket here since 1987...' outperforms any summary — a date plus a mystery beats a description.",
      "Series trick: number the stations (Station 03: The Garden Line) — explorers binge numbered mysteries like episodes."
    ],
    "tags": [
      "creator-niche",
      "youtube",
      "mystery",
      "abandoned",
      "nature"
    ],
    "trending": true,
    "popularity": 87
  },
  {
    "id": "paper-lantern-dragon-runway",
    "title": "Paper Lantern Dragon Festival Loop — Runway Prompt for Viral Facebook Reels Niches",
    "category": "Video Prompts",
    "tool": "Runway",
    "difficulty": "Beginner",
    "desc": "A paper lantern dragon weaves through a night festival, its glowing body made of a hundred floating lanterns — a seamless loop built for Facebook Reels replays.",
    "prompt": "Vibrant night festival, a majestic dragon made entirely of glowing paper lanterns [FESTIVAL MOMENT: the lantern dragon weaving between market stalls as crowds cheer and reach up / the dragon's tail of lanterns rising into the sky like a river of light / children releasing small lanterns that join the dragon's glowing body / the dragon looping overhead and diving toward the camera in a perfect seamless loop], warm gold and red glow against deep night blue, joyful celebration, smooth looping motion, 9:16 vertical, photorealistic",
    "howto": [
      "Paste the prompt into Runway and pick ONE [FESTIVAL MOMENT] per clip — one celebration beat per Reel keeps the energy high.",
      "Design the loop so the last frame matches the first (dragon overhead, same angle) so Facebook viewers replay without noticing the cut.",
      "Generate 2-3 clips per festival (dragon arrival, crowd moment, sky finale) and cut them into one 15-20 second Reel with festive drum music.",
      "Add crowd cheers under the music — festival Reels with real celebration sound get shared far more than music-only edits.",
      "Post daily at 7-9 PM PKT and end with 'Share this with someone who loves festivals' — the share ask is the growth engine on Facebook."
    ],
    "tips": [
      "Hook rule: the first frame must show the dragon already in motion — a still lantern is decoration, a moving dragon is a show.",
      "Caption trick: 'Wait for the tail...' outperforms any summary — a promised payoff keeps viewers through the loop.",
      "Loop trick: test the loop 3 times before posting — a visible cut kills replays, and replays are the whole format."
    ],
    "tags": [
      "creator-niche",
      "facebook",
      "festival",
      "lantern",
      "celebration"
    ],
    "trending": true,
    "popularity": 88
  },
  {
    "id": "chameleon-paint-pour-flow",
    "title": "Color-Changing Chameleon Paint Pour — Google Flow Prompt for Satisfying TikTok Niches",
    "category": "Video Prompts",
    "tool": "Google Flow",
    "difficulty": "Beginner",
    "desc": "A chameleon walks across a canvas while paint pours around it, and its skin shifts to match every color it touches — satisfying, strange, and impossible to scroll past.",
    "prompt": "Mesmerizing satisfying art scene, a tiny chameleon walking slowly across a white canvas as thick glossy paint pours around it [POUR MOMENT: the chameleon turning vivid teal as a wave of teal paint flows past its feet / its tail curling into a spiral of gold paint that matches its new golden skin / rainbow paint ribbons pouring from above while the chameleon shifts through every color in sequence / the finished canvas revealed as a perfect chameleon portrait painted by its own color-changing walk], glossy paint textures, vivid saturated color, hypnotic and playful, smooth slow motion, 9:16 vertical, photorealistic",
    "howto": [
      "Paste the prompt into Google Flow and pick ONE [POUR MOMENT] per clip — one color change per video keeps the satisfaction pure.",
      "Keep the same chameleon and canvas style across the series (same size, same white canvas) so viewers recognize the format instantly.",
      "Generate 3 clips per story (first pour, color shift, reveal) and cut them into one 15-25 second TikTok with a soft ASMR pour sound.",
      "Add the paint sound loud and the music quiet — satisfying content lives on texture sound, and loud music buries it.",
      "Post daily at 6-8 PM PKT and end with 'Which color should it turn next?' — color votes are the comment engine of satisfying niches."
    ],
    "tips": [
      "Hook rule: the first frame must show paint already pouring — a dry canvas is a skip, a pour is a watch.",
      "Caption trick: 'It paints itself...' outperforms any summary — the impossible claim is the hook, the clip is the proof.",
      "Satisfying rule: never cut mid-pour — viewers stay for the complete transformation, and a cut is a lost viewer."
    ],
    "tags": [
      "creator-niche",
      "tiktok",
      "satisfying",
      "paint",
      "animals"
    ],
    "trending": true,
    "popularity": 89
  },
  {
    "id": "vintage-halloween-posters-midjourney",
    "title": "Vintage Halloween Movie Poster Pack — Midjourney Prompt for Facebook October Pages",
    "category": "Image Prompts",
    "tool": "Midjourney",
    "difficulty": "Intermediate",
    "desc": "Retro 1950s-style Halloween movie posters — grinning pumpkins, haunted drive-ins and friendly ghosts — a Facebook image pack built for October shares.",
    "prompt": "Vintage 1950s Halloween movie poster style, [POSTER SUBJECT: a grinning jack-o-lantern driving a classic convertible past a haunted drive-in theater under a huge full moon / a friendly ghost family having a picnic on a hill of candy corn at dusk / a black cat in a bow tie conducting an orchestra of skeletons in a pumpkin patch / a witch on a bicycle delivering candy under streetlights in a small autumn town], bold retro typography space at top, aged paper texture, rich orange and teal palette, playful spooky charm, highly detailed illustration, 4:5 portrait",
    "howto": [
      "Paste the prompt into Midjourney and pick ONE [POSTER SUBJECT] per image — one poster per post keeps the pack collectible.",
      "Generate a set of 6 posters with the same retro style (same paper texture, same palette) so the page looks like a real vintage series.",
      "Upscale your favorite, add the movie-style title in a retro font in any editor, and post one poster per day through October.",
      "Caption each poster like a real movie listing ('Now showing: The Pumpkin Drive-In') — the joke is the share engine.",
      "Post daily at 7 PM PKT and pin a comment asking 'Which one should be a real movie?' — votes drive comments and reach."
    ],
    "tips": [
      "Hook rule: the poster must read at thumbnail size — one big character, one big moon, nothing else competing.",
      "Caption trick: fake showtimes ('Showing nightly until Halloween!') outperform plain descriptions — roleplay beats promotion.",
      "Series trick: number the posters (Poster 04 of 06) — collectors save numbered sets far more than random images."
    ],
    "tags": [
      "creator-niche",
      "facebook",
      "halloween",
      "vintage",
      "posters"
    ],
    "trending": true,
    "popularity": 86
  },
  {
    "id": "dead-end-niche-autopsy-chatgpt",
    "title": "Dead-End Niche Autopsy — ChatGPT Prompt to Kill Losing Niches Before They Waste 90 Days",
    "category": "Text Prompts",
    "tool": "ChatGPT",
    "difficulty": "Intermediate",
    "desc": "A brutal, honest niche audit: feed ChatGPT your niche idea and get a verdict on whether it can ever pay, with the exact evidence — before you spend 90 days on it.",
    "prompt": "Act as a ruthless content strategist who has audited 500 faceless channels. Autopsy this niche idea: [NICHE IDEA]. Score it 0-100 on 5 tests: (1) Search demand — are people actively looking for this in 2026, with proof from real search behavior? (2) Competition density — how many channels already own this space, and can a new channel realistically outrank them? (3) Monetization — list every realistic income stream for this niche with honest RPM ranges, and flag any niche that cannot pay. (4) Content supply — can I make 100 videos in this niche without repeating myself? Give 20 video titles to prove it or admit it cannot. (5) Staying power — will this niche still exist in 2 years, or is it a trend that dies in 6 months? End with a one-line verdict: KILL IT, FIX IT (with the one fix), or GO ALL IN — and if the verdict is KILL, suggest 3 adjacent niches that pass all 5 tests.",
    "howto": [
      "Paste the prompt into ChatGPT, replace [NICHE IDEA] with your exact niche, and run it once per idea — never batch 5 ideas, or the verdicts get shallow.",
      "Challenge any score above 80: ask 'Show me the evidence for that score' and make it defend the number before you trust it.",
      "Run your top 3 niche ideas through it, then compare verdicts side by side — the winner is the niche with the highest monetization AND staying power, not the highest total.",
      "If the verdict is FIX IT, apply the one fix and re-run the autopsy — a niche that passes on the second run is often stronger than one that passed first try.",
      "Save every autopsy in one document — in 6 months you will know exactly which niches you killed and why, and you will stop re-pitching dead ideas to yourself."
    ],
    "tips": [
      "Honesty rule: the prompt only works if you let it kill your favorite idea — creators who argue with the verdict waste the audit.",
      "Evidence trick: always demand the 20 video titles — if it cannot write 20, the niche cannot feed a channel, no matter how exciting it sounds.",
      "Timing trick: run this audit BEFORE you make a logo, a name or a single video — branding a dead niche is the most expensive mistake in this business."
    ],
    "tags": [
      "creator-niche",
      "youtube",
      "tiktok",
      "niche-discovery",
      "strategy"
    ],
    "trending": true,
    "popularity": 91
  },
  {
    "id": "platform-title-rewriter-gemini",
    "title": "Platform Title Rewriter — Gemini Prompt for YouTube, TikTok, Facebook & Instagram Titles",
    "category": "Text Prompts",
    "tool": "Gemini",
    "difficulty": "Beginner",
    "desc": "One video, four titles: feed Gemini your topic and get a title rewritten for each platform's algorithm — because the title that wins on YouTube flops on TikTok.",
    "prompt": "Act as a viral title strategist who writes for YouTube, TikTok, Facebook and Instagram every day. Take this video topic: [VIDEO TOPIC]. Write 5 titles for EACH platform (20 total), following each platform's rules: YouTube titles must be curiosity-driven, under 60 characters, with the keyword first and no clickbait that the video cannot deliver. TikTok titles must be short, spoken-language hooks under 30 characters that work as on-screen text. Facebook titles must be emotional and shareable, written so a 45-year-old shares them with family. Instagram titles must be save-worthy, promising a result the viewer wants to keep ('Save this for...'). After the 20 titles, rank the single best title per platform and explain in one sentence why it wins on THAT platform and would fail on the others.",
    "howto": [
      "Paste the prompt into Gemini, replace [VIDEO TOPIC] with your video's real topic, and generate the 20 titles before you edit — titles shape the edit, not the other way round.",
      "Pick the ranked winner per platform as your starting title, but test one alternate per platform in the first 24 hours if the video underperforms.",
      "Keep a title swipe file: paste every winning title into one document with its platform and view count, so your next 100 titles start from proof, not guesses.",
      "Never copy a title across platforms unchanged — the prompt's whole point is that each algorithm rewards different psychology.",
      "Re-run the prompt for your next video with the previous winner as an example ('in the style of...') to build a personal title voice over time."
    ],
    "tips": [
      "Keyword rule: the YouTube title must contain the exact phrase viewers search — curiosity without the keyword is invisible to search.",
      "Platform rule: if a title works everywhere, it is probably generic — the best titles feel slightly wrong on the other three platforms.",
      "Test trick: change only the title on an underperforming video and watch 48 hours — a title swap is the cheapest A/B test a creator has."
    ],
    "tags": [
      "creator-niche",
      "youtube",
      "tiktok",
      "facebook",
      "instagram",
      "titles"
    ],
    "trending": true,
    "popularity": 90
  },
  {
    "id": "faceless-voice-bible-claude",
    "title": "Faceless Channel Voice Bible — Claude Prompt to Lock One Voice Across 100 Videos",
    "category": "Text Prompts",
    "tool": "Claude",
    "difficulty": "Intermediate",
    "desc": "The document every serious faceless channel needs: a voice bible that locks your tone, pace, phrases and rules so video 100 sounds like video 1 — and viewers recognize you instantly.",
    "prompt": "Act as a channel strategist who builds faceless brands. Create a complete Voice Bible for my channel. My niche is [NICHE], my audience is [AUDIENCE], and my personality is [3 ADJECTIVES, e.g. calm, curious, witty]. The Voice Bible must include: (1) A 3-sentence voice statement — how the channel sounds in one breath. (2) Tone rules: 5 things the voice ALWAYS does and 5 things it NEVER does. (3) Sentence style: average sentence length, how hooks are written, how videos end — with 3 example hooks and 3 example closers in this voice. (4) Signature phrases: 5 catchphrases the channel repeats so viewers recognize it, and where each one goes in a video. (5) A 10-point consistency checklist I can run against any script before recording, so a hired writer or AI can match the voice. End with a 30-second sample script opening in this voice on the topic [SAMPLE TOPIC].",
    "howto": [
      "Paste the prompt into Claude, fill in [NICHE], [AUDIENCE], the 3 adjectives and [SAMPLE TOPIC], and generate the full Voice Bible in one run.",
      "Print the consistency checklist and run every script through it before recording — one off-voice video confuses viewers more than one bad video.",
      "Give the Voice Bible to anyone who writes or voices for the channel, including AI tools: paste it at the top of every script prompt as the style guide.",
      "Revisit the bible every 25 videos and update only one rule at a time — a voice that changes slowly feels like growth, one that changes overnight feels like a new channel.",
      "Test recognition: play 10 seconds of a new video to a viewer of an old one and ask 'is this the same channel?' — if they hesitate, the bible needs tightening."
    ],
    "tips": [
      "Recognition rule: viewers subscribe to a voice, not a topic — two channels in the same niche win or lose on voice alone.",
      "Signature trick: repeat the same closer in every video for 30 videos before judging it — catchphrases feel awkward to the creator long before they feel familiar to the audience.",
      "Writer rule: never brief a writer with 'make it sound like us' — brief them with the bible, or every writer invents a different channel."
    ],
    "tags": [
      "creator-niche",
      "youtube",
      "faceless",
      "branding",
      "voice"
    ],
    "trending": true,
    "popularity": 89
  }
];

if (typeof module !== "undefined") {
  module.exports = { CATEGORIES, PROMPTS };
}
