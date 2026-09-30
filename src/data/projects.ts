export interface Project {
  id: string;
  slug: string;
  title: string;
  year?: string;
  summary: string;
  description: string[];
  tags: string[];
  status?: 'in-progress' | 'released' | 'planning';
  screenshots?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  links?: {
    label: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'starker',
    slug: 'starker',
    title: 'Starker',
    year: '2025',
    summary:
      'A native iOS gym tracker: workouts, a thousand-exercise library, routines, and a voice coach. Your data stays on your phone.',
    description: [
      'I used to log sessions in a spreadsheet my coach emailed me. Starker is the native Swift rewrite of that habit: start a workout, add sets, rest, done. No account. SQLite on device is the source of truth.',
      'The library ships with around a thousand exercises, searchable in Spanish and English, with muscle maps and volume from what you actually lifted. Routines are templates that materialize into sessions. The rest timer can sit on the Lock Screen as a Live Activity.',
      'There is also a coach you can talk to. It only listens when you hold the mic. I am not trying to replace a real trainer; I wanted something that knows your last squat without opening a chat app.',
    ],
    tags: ['SwiftUI', 'SwiftData', 'WidgetKit', 'Speech', 'iOS'],
    status: 'released',
    screenshots: [
      {
        src: './screenshots/starker-training.jpg',
        alt: 'Starker training screen showing the workout dashboard and routines',
        caption: 'Training home',
      },
      {
        src: './screenshots/starker-exercise.jpg',
        alt: 'Starker exercise detail screen with exercise guidance and history tabs',
        caption: 'Exercise detail',
      },
    ],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/es/app/stark-ltd/id6749888405',
      },
    ],
  },
  {
    id: 'mesa',
    slug: 'mesa',
    title: 'Mesa',
    year: '2026',
    summary:
      'A food diary for Spanish supermarkets. Ten thousand products live on the phone, and the weight trend knows a big dinner from fat.',
    description: [
      'Mesa is a food diary in Spanish, like the supermarkets in its catalogue. Adding food is a search over about ten thousand products from Mercadona, Lidl, Consum and Aldi, plus everyday staples. They ship inside the app in SQLite, built by a handful of Python scripts, so search needs no network and there is no account.',
      'Today is a timeline of meals with three thin bars for protein, carbs and fat. Recipes are ingredient lists you add by the quarter, half or whole. The app learns the hour: it suggests what you usually eat around now, and a widget offers the four foods you tend to log at this time. One button copies the day so far, with what is left, as a prompt to paste into whichever assistant you like.',
      'The Trends tab is where the maths lives. Targets come from Mifflin–St Jeor, your activity and a pace you choose. Weigh-ins can be read off the scale with the camera. A smoothed weight line sets aside spikes, like an evening weigh-in after a big dinner, and combines the trend with what you logged to estimate what you actually burn, at 7,000 kcal a kilo. It then gives two dates for your goal weight: one from the formula, one from your habits.',
    ],
    tags: ['SwiftUI', 'SwiftData', 'Swift Charts', 'Vision', 'WidgetKit', 'SQLite'],
    status: 'in-progress',
    screenshots: [
      {
        src: './screenshots/mesa-today.png',
        alt: 'Mesa Today screen with 1,824 of 1,956 calories eaten, protein, carbs and fat bars, and a timeline of five meals',
        caption: 'Today',
      },
      {
        src: './screenshots/mesa-trends.png',
        alt: 'Mesa Trends screen with two goal-weight dates, seven-day macro bars and a daily intake chart against estimated expenditure',
        caption: 'Trends',
      },
      {
        src: './screenshots/mesa-add.png',
        alt: 'Mesa add-food sheet with saved recipes and foods suggested for this hour of the day',
        caption: 'Adding food',
      },
      {
        src: './screenshots/mesa-recipe.png',
        alt: 'Mesa recipe page with ingredient calories, quarter, half and whole portions, and a time picker',
        caption: 'A recipe, by the half',
      },
    ],
  },
  {
    id: 'bank-tracker',
    slug: 'bank-tracker',
    title: 'Bank Tracker',
    year: '2026',
    summary:
      'Every Apple Pay tap becomes an expense. No bank login; spending is logged on-device, with budgets and categories that learn.',
    description: [
      'Pay as usual. A one-time Shortcuts automation on the Wallet Transaction trigger writes merchant, amount, and card into the app. After that you do not open it to log a coffee.',
      'Correct a category once and that merchant stays learned. Weekly or monthly budgets fire at thresholds you pick. Recurring charges count themselves. Rent can sit in totals without eating the grocery budget.',
      'The log never leaves the iPhone. Widgets on the Home Screen and Lock Screen show the month. Cash and missed taps can be entered by hand; Wallet history cannot be imported, which is an Apple limit, not a feature I skipped.',
    ],
    tags: ['SwiftUI', 'App Intents', 'Shortcuts', 'WidgetKit', 'Superwall'],
    status: 'in-progress',
    screenshots: [
      {
        src: './screenshots/bank-overview.png',
        alt: 'Bank Tracker overview with monthly spending, budget, subscriptions and categories',
        caption: 'Monthly overview',
      },
      {
        src: './screenshots/bank-payments.png',
        alt: 'Bank Tracker payment history with merchant, time, card and amount',
        caption: 'Captured payments',
      },
    ],
    links: [
      {
        label: 'Site',
        url: 'https://getbanktracker.vercel.app/',
      },
    ],
  },
  {
    id: 'rise',
    slug: 'rise',
    title: 'Rise',
    year: '2026',
    summary:
      'An alarm you have to earn your way out of: 15 seconds of push-ups, checked on-device with the front camera.',
    description: [
      'AlarmKit rings through Silent mode and Focus. The alert offers Rise or Give Up. Give Up burns the streak and nags you ninety seconds later. Rise opens the camera.',
      'The front camera runs Vision body-pose on the capture queue. A progress ring only moves while you are actually going through pushups. Fifteen active seconds silences the alarm. Frames are never recorded or uploaded.',
      'If you abandon the session, a shadow alarm already waiting in AlarmKit fires. No background execution tricks. There are other wake missions too — math, a barcode on a bottle in the kitchen — for mornings when the floor is not an option.',
    ],
    tags: ['SwiftUI', 'AlarmKit', 'Vision', 'AVFoundation', 'Firebase'],
    status: 'in-progress',
    screenshots: [
      {
        src: './screenshots/rise-home.jpg',
        alt: 'Rise home screen with streak, next alarm and wake-up mission',
        caption: 'Alarm home',
      },
      {
        src: './screenshots/rise-streak.jpg',
        alt: 'Rise streak screen showing a run of completed wake-ups',
        caption: 'Wake-up streak',
      },
    ],
  },
  {
    id: 'frontier',
    slug: 'frontier',
    title: 'Frontier',
    year: '2026',
    summary:
      'Market studies built from live search results, reviews, communities, and AI answers. Every finding points to its evidence.',
    description: [
      'Frontier crawls a homepage, derives category and buyer prompts, then collects rankings, reviews, communities, PageSpeed, and AI-answer probes in parallel. Distill is TypeScript. Language models never invent the numbers.',
      'Synthesis is allowed to write findings only from distilled data. A claim that cites evidence the run does not have is dropped. The report is drawers of proof, not a vibe.',
      'The authenticated product is a workspace: visibility for a brand, questions ranked by absence, a work queue of detector opportunities, dated studies. I built it because most “AI market research” reads like a confident intern with no footnotes.',
    ],
    tags: ['Next.js', 'Supabase', 'Inngest', 'AI SDK', 'DataForSEO'],
    status: 'in-progress',
  },
  {
    id: 'pokeweb',
    slug: 'pokeweb',
    title: 'Pokeweb',
    year: '2026',
    summary:
      'Edit Pokémon DS games in the browser. Your ROM stays on your machine; no hex editor required.',
    description: [
      'Drop a .nds file. The app detects the title, indexes Pokémon, trainers, and wild areas, and lets you edit, undo, and export. Nothing is uploaded. The engine is Rust compiled to WebAssembly; the shell is a web app.',
      'Platinum is the working vertical slice — Spanish Europe (CPUS) is the cart I verify against. Other titles detect and export; editors stay off until a layout exists.',
      'Project files store diffs and hashes, not the game. Bring your own dump. This is a tool I wanted as a kid and could not have built then.',
    ],
    tags: ['Rust', 'WebAssembly', 'TypeScript', 'NDS'],
    status: 'in-progress',
  },
  {
    id: 'inkpair',
    slug: 'inkpair',
    title: 'Inkpair',
    year: '2026',
    summary:
      'A private, hand-drawn notebook for two. Send a note, or draw together while you’re on a FaceTime call.',
    description: [
      'Ballpen, a grainy pencil, a multiply highlighter, eraser. Width, opacity, undo, two-finger pan. The renderer is Core Graphics with a cached stroke image — not PencilKit, not Metal. Pencil grain is deterministic so both phones draw the same mark.',
      'You invite exactly one iCloud person. Notes live in a shared CloudKit zone. A Home Screen widget shows the latest note you received. Failed sends stay as drafts and retry.',
      'SharePlay is for when you are already on FaceTime: point batches over GroupSessionMessenger, late-join replay, per-author undo. Send still snapshots into the notebook. It is a two-person app on purpose.',
    ],
    tags: ['SwiftUI', 'Core Graphics', 'CloudKit', 'SharePlay', 'WidgetKit'],
    status: 'in-progress',
    screenshots: [
      {
        src: './screenshots/inkpair-notebook.png',
        alt: 'Inkpair notebook screen for composing and sharing a hand-drawn note',
        caption: 'The shared notebook',
      },
    ],
  },
  {
    id: 'yeppers',
    slug: 'yeppers',
    title: 'Yeppers',
    summary: 'The answer to “Have we finished that endpoint?” It stuck as the project name.',
    description: [
      'Someone asked if we had finished an endpoint. We answered “Yeppers.” That answer became the project name.',
    ],
    tags: [],
  },
];

export const statusConfig = {
  'in-progress': { label: 'In progress' },
  released: { label: 'Released' },
  planning: { label: 'Planning' },
};

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
