export const storyIntro = {
  character: 'Mina',
  note:
    'Mina is a fictional composite character. Her route across different cities is a storytelling device that helps compare how digital mutual aid works in different local contexts. The stops draw on real patterns of community care — WhatsApp mutual aid groups, community fridge networks, M-Pesa savings circles, and SMS alert trees — rather than a single documentary case.',
};

export const coreQuestions = [
  {
    id: 'q1',
    title:
      'How do everyday digital tools — group chats, shared spreadsheets, community maps — enable civic participation and bottom-up care outside formal institutions?',
    short:
      'How do everyday tools enable civic participation?',
  },
  {
    id: 'q2',
    title:
      'What platform design choices — around trust, accessibility, language, and privacy — shape who can participate and who gets left out?',
    short:
      'What design choices shape who can participate?',
  },
  {
    id: 'q3',
    title:
      'How does mutual aid differ from charity or institutional support in terms of power, creativity, learning, and reciprocity?',
    short:
      'How is mutual aid different from charity?',
  },
];

export const storyChapters = [
  {
    slug: 'toronto',
    step: 1,
    city: 'Toronto',
    country: 'Canada',
    region: 'North America',
    map: { x: 27, y: 23 },
    title: 'The first message',
    subtitle: 'A weekend food gap becomes a community signal.',
    need: 'Mina needs food before the weekend after her part-time shift is cut.',
    hook:
      'In Toronto, Mina discovers that a WhatsApp group, a Google Sheet, and a shared map pin can do something formal systems often cannot: respond before the office reopens on Monday.',
    story: [
      'Mina is a student who has just lost a shift at work. It is Friday afternoon. Her campus emergency office closes soon, her kitchen is nearly empty, and the weekend is still ahead. On paper there are services she can try. In practice, each one depends on hours, intake, or waiting.',
      'A friend sends her a WhatsApp link to a student mutual aid group. It is not a polished platform. It is a small network built from a group chat with pinned guidelines, a Google Sheet listing volunteer drivers and available pantry items, and a shared Google Maps layer marking community fridges and free food spots across the city. What matters is that it is active, local, and maintained by people who know the area.',
      'Within twenty minutes, someone responds with a screenshot of the fridge map, a pickup time, and a note that an e-transfer grocery card is available. The technology is ordinary — WhatsApp, Google Sheets, a shared map. The civic participation is not. Mina is watching people coordinate care in real time, using tools they already had on their phones.',
    ],
    takeawayCards: [
      {
        label: 'Everyday tools, civic purpose',
        text:
          'WhatsApp groups, Google Sheets, and shared map layers become infrastructure for care when communities organize them intentionally.',
      },
      {
        label: 'Trust through design',
        text:
          'Pinned guidelines, clear pickup instructions, and privacy-conscious posting norms turn a group chat into something people can trust quickly.',
      },
      {
        label: 'Reciprocity starts here',
        text:
          'After receiving help, Mina updates the fridge map with current stock levels and later signs up for a volunteer shift — the line between giving and receiving blurs.',
      },
    ],
    chapterLinks: ['q1', 'q2', 'q3'],
    module: {
      type: 'chat',
      title: 'Interactive scene: the first message',
      description:
        'Move through Mina’s first WhatsApp request. Each choice shows how a group chat, a shared map, and clear norms can lower barriers without turning a need into a formal application.',
      intro:
        'Friday, 4:12 PM. Mina has twelve dollars left, an empty fridge, and less than an hour before the campus office closes. A friend just sent her a WhatsApp link.',
      rounds: [
        {
          prompt: 'How should Mina ask for help first?',
          choices: [
            {
              label:
                'Post a short request in the WhatsApp mutual aid group with her general area and what she needs for the weekend.',
              response:
                'A volunteer replies with a screenshot of the Google Maps fridge layer, a nearby pickup point, and a note that an e-transfer grocery card is available tonight.',
              insight:
                'Bottom-up care works because WhatsApp messages reach people who already share local knowledge and can respond in minutes, not days.',
            },
            {
              label:
                'Wait until Monday and fill out the official emergency request form instead.',
              response:
                'The form may still help later, but the weekend gap remains unsolved right now.',
              insight:
                'Institutional support can matter a great deal, but mutual aid often fills the gap created by time, delay, and office hours.',
            },
            {
              label:
                'Post her full address and phone number publicly on every account she has.',
              response:
                'People might respond, but sharing more than necessary can create new risks and make the request feel less safe.',
              insight:
                'Trust is tied to privacy. Good mutual aid spaces make it possible to ask for help without oversharing.',
            },
          ],
        },
        {
          prompt: 'The chat asks how to make the post clearer. What detail helps most?',
          choices: [
            {
              label:
                'Add whether she can walk or needs pickup, plus any food restrictions.',
              response:
                'Now people can match practical help to the situation instead of guessing.',
              insight:
                'Accessible communication is not just about readability. It is also about giving the network the right level of practical information.',
            },
            {
              label: 'Write only “help please” and leave the rest unclear.',
              response:
                'People still want to help, but several follow-up messages are needed before anyone can act.',
              insight:
                'Clarity reduces friction. Small details can make a platform easier and faster to use.',
            },
            {
              label:
                'Replace the message with a long graphic full of tiny text and several screenshots.',
              response:
                'The post looks polished, but it becomes harder to read on a phone or low-bandwidth connection.',
              insight:
                'Inclusive design often means choosing readable, lightweight communication over visual polish.',
            },
          ],
        },
        {
          prompt: 'Someone brings groceries and shares a community fridge link. What keeps the network reciprocal?',
          choices: [
            {
              label:
                'Mina thanks the group, updates the Google Maps fridge layer with current stock, and signs up for a volunteer shift in the shared spreadsheet.',
              response:
                'Receiving help becomes part of staying connected to the network. Mina is already contributing by keeping the map accurate for the next person.',
              insight:
                'Mutual aid is reciprocal. Updating a shared map or signing up in a spreadsheet means giving and receiving happen through the same tools.',
            },
            {
              label: 'The network closes the WhatsApp thread and never records what worked.',
              response:
                'The immediate need is met, but useful information for the next person disappears from the chat history.',
              insight:
                'Digital mutual aid depends on documentation — archived messages, updated spreadsheets, and current map pins are how the network learns.',
            },
            {
              label:
                'The group asks Mina to prove she deserves support before anyone helps again.',
              response:
                'Some caution may be understandable, but heavy gatekeeping changes the space into something more like formal intake.',
              insight:
                'Mutual aid usually tries to reduce unnecessary barriers rather than reproduce institutional checks.',
            },
          ],
        },
      ],
      completion:
        'By the end of the weekend, Mina has food, a clearer sense of the local network, and a new understanding of digital citizenship as participation in care.',
    },
  },
  {
    slug: 'sao-paulo',
    step: 2,
    city: 'São Paulo',
    country: 'Brazil',
    region: 'South America',
    map: { x: 34, y: 72 },
    title: 'Stories, sheets, and shared routes',
    subtitle: 'Community care becomes visible when coordination is public enough to join.',
    need:
      'A neighbourhood fridge is running low before a holiday weekend, and the network needs to respond quickly.',
    hook:
      'In São Paulo, Mina sees how Instagram stories, a volunteer spreadsheet, and a neighbourhood WhatsApp group turn a community fridge into a creative, self-sustaining civic project.',
    story: [
      'Mina reaches a neighbourhood where a community fridge sits outside a local storefront. It works because many kinds of labour happen around it: people cook, cycle, deliver, clean, translate, design posts, and notice when the shelves are nearly empty.',
      'The digital side is where creativity shows up. Volunteers use Instagram Stories and Reels to document what is in the fridge, share recipe ideas for donated ingredients, and tell short visual stories about the people who keep the project running. A graphic design student creates illustrated infographics explaining how to donate safely. Someone else films a 30-second TikTok showing a full restock cycle, and it gets reshared across the neighbourhood. A shared Google Sheet tracks volunteer shifts, and a WhatsApp group handles real-time coordination: who can pick up a donation at 3pm, which fridge location needs restocking tonight.',
      'This is digital citizenship as creative practice. The tools — Instagram, TikTok, Google Sheets, WhatsApp — are not being used for entertainment or self-promotion. They are being used to make community care visible, inviting, and easy to join. The fridge works because people do not just maintain it. They tell its story, teach others how to contribute, and build a shared identity around the work.',
    ],
    takeawayCards: [
      {
        label: 'Creativity as civic work',
        text:
          'Instagram stories, illustrated guides, and short-form video turn mundane logistics into something neighbours want to follow and join.',
      },
      {
        label: 'Community building through visibility',
        text:
          'When the work is publicly narrated — through social posts, stories, and reels — it invites participation instead of just delivering a service.',
      },
      {
        label: 'Learning through documentation',
        text:
          'Each restock cycle is logged in Google Sheets, discussed in WhatsApp, and reflected on in posts. The network learns from its own activity and teaches newcomers how to contribute.',
      },
    ],
    chapterLinks: ['q1', 'q2'],
    module: {
      type: 'timeline',
      title: 'Interactive section: build the response timeline',
      description:
        'Click the events in the order that best supports a neighbourhood fridge response. Think about visibility, logistics, and what the community needs to know first.',
      events: [
        {
          id: 'signal',
          label: 'A volunteer posts a photo of the nearly empty fridge to the WhatsApp group and Instagram Story.',
          explanation:
            'Someone has to make the need visible before the network can respond. A photo on Instagram is more shareable than a text message — it can reach people outside the core group.',
        },
        {
          id: 'reshare',
          label: 'Organizers repost the update with a designed graphic listing what items are needed most and where to drop them off.',
          explanation:
            'Creative design turns a request into something actionable. An illustrated graphic with clear icons and a drop-off address is easier to share and act on than a wall of text.',
        },
        {
          id: 'routes',
          label: 'Volunteers claim pickup and delivery routes in the shared Google Sheet.',
          explanation:
            'A Google Sheet everyone can edit distributes coordination work. Instead of one organizer managing everything, ten people each claim a task.',
        },
        {
          id: 'map',
          label: 'The public Google Maps layer is updated so residents know where food will be available tonight.',
          explanation:
            'Public-facing information matters because care has to be findable. A map pin with hours and stock status does more than an internal chat message.',
        },
        {
          id: 'reflect',
          label: 'After distribution, the group updates the spreadsheet with what ran low and posts a recap Story for the neighbourhood.',
          explanation:
            'Documentation closes the loop. The spreadsheet becomes a knowledge base, and the recap Story teaches followers what the network does and how to join next time.',
        },
      ],
      completion:
        'The fridge response works because communication, logistics, and learning stay connected. This is digital citizenship as collaborative public problem-solving.',
    },
  },
  {
    slug: 'warsaw',
    step: 3,
    city: 'Warsaw',
    country: 'Poland',
    region: 'Europe',
    map: { x: 53, y: 19 },
    title: 'Translation before intake',
    subtitle: 'Trust grows when a platform explains itself clearly and respects vulnerability.',
    need:
      'Mina is helping a cousin who has arrived in a new city and cannot easily navigate service pages in the local language.',
    hook:
      'In Warsaw, the problem is not only whether support exists. It is whether a Telegram channel, a translated map, and a voice-note FAQ can make it usable for someone who just arrived.',
    story: [
      'Mina is no longer only asking for aid; she is helping someone else find it. A cousin has arrived in the city and can see that resources exist, but most official pages are dense, translated poorly, or written for people who already know the system. The government website is in Polish only. The NGO pages have outdated addresses.',
      'Volunteer-run Telegram channels fill part of that gap. One group maintains a Google Maps layer with multilingual pins marking legal aid, food banks, SIM card distribution points, and medical clinics — each pin annotated with transit directions, opening hours, and wheelchair accessibility. Pinned messages at the top of the channel explain what the group does, what it does not do, and how to request help privately through Signal rather than posting in public. Short voice notes in Ukrainian, Arabic, and English explain how to navigate the city’s transit card system.',
      'This stop focuses on platform design. Trust is not a vague feeling. It is produced through real choices: using Telegram for discoverability but Signal for private requests, keeping the map updated weekly, translating not just words but the context around them. Good design means someone can look at the channel and know within thirty seconds whether it is safe, current, and relevant to them.',
    ],
    takeawayCards: [
      {
        label: 'Transparency',
        text:
          'People trust a resource more when it explains who runs it, what kinds of help it offers, and how current the information is.',
      },
      {
        label: 'Inclusion',
        text:
          'Language access, accessibility notes, and multiple contact paths help more people actually use a platform.',
      },
      {
        label: 'Safety',
        text:
          'Private contact options and clear norms matter when people are new, displaced, or in vulnerable situations.',
      },
    ],
    chapterLinks: ['q2', 'q3'],
    module: {
      type: 'trust',
      title: 'Interactive section: choose the strongest trust signals',
      description:
        'Select up to four features that would make a mutual aid page easier to trust and use. Aim for clarity, access, safety, and inclusion rather than visual polish alone.',
      maxSelect: 4,
      themeLabels: {
        clarity: 'clarity',
        access: 'access',
        safety: 'safety',
        inclusion: 'inclusion',
      },
      options: [
        {
          id: 'pinned-explainer',
          label: 'A pinned explainer showing who runs the network and what kinds of requests it can handle',
          themes: ['clarity', 'trust'],
          points: 2,
          explanation:
            'This lowers uncertainty and makes the platform feel accountable instead of mysterious.',
        },
        {
          id: 'multilingual',
          label: 'Multilingual text plus a voice-note option for people who are more comfortable speaking than typing',
          themes: ['access', 'inclusion'],
          points: 2,
          explanation:
            'Language and literacy shape whether information is usable at all. Multiple formats widen participation.',
        },
        {
          id: 'access-notes',
          label: 'Map markers that include transit, wheelchair, and opening-hour notes',
          themes: ['access'],
          points: 2,
          explanation:
            'A location is not truly accessible if people do not know how to reach it or what barriers they will face.',
        },
        {
          id: 'private-contact',
          label: 'A private contact pathway so people do not have to post personal details publicly',
          themes: ['safety'],
          points: 2,
          explanation:
            'Privacy options are central to trust, especially for people in precarious situations.',
        },
        {
          id: 'conduct',
          label: 'A short code of conduct and a visible “last updated” date',
          themes: ['clarity', 'safety'],
          points: 2,
          explanation:
            'Visible rules and update rhythms signal that a space is maintained, not abandoned.',
        },
        {
          id: 'donor-wall',
          label: 'A giant donation leaderboard highlighting the top contributors',
          themes: ['status'],
          points: 0,
          explanation:
            'This may reward donors, but it does little to help someone understand or safely use the resource.',
        },
        {
          id: 'video-landing',
          label: 'An autoplay video landing page with heavy graphics and very little text',
          themes: ['style'],
          points: 0,
          explanation:
            'Visual polish can be appealing, but it can also add barriers for mobile users and low-bandwidth connections.',
        },
        {
          id: 'policy-paragraph',
          label: 'One long paragraph of formal policy language with no headings or translations',
          themes: ['formality'],
          points: 0,
          explanation:
            'Dense language often reproduces the same barriers that make institutional systems hard to navigate.',
        },
      ],
      completion:
        'A trustworthy mutual aid platform helps people understand what the resource is, how to use it, and how to stay safe while participating.',
    },
  },
  {
    slug: 'nairobi',
    step: 4,
    city: 'Nairobi',
    country: 'Kenya',
    region: 'Africa',
    map: { x: 57, y: 50 },
    title: 'Who gets to decide?',
    subtitle: 'Power looks different when support is reciprocal instead of one-directional.',
    need:
      'Transport costs are threatening Mina’s ability to get to work, and she joins a rotating support network that uses mobile tools to coordinate help.',
    hook:
      'In Nairobi, the key question is not only whether M-Pesa can move money. It is who decides where it goes, who participates in that decision, and whether the person who receives help today can lead the group tomorrow.',
    story: [
      'Mina meets a local support circle — a chama, the Kenyan term for a savings and mutual support group. This one uses a WhatsApp group for daily coordination, M-Pesa for instant transfers, and a shared Google Sheet as a transparent ledger showing who contributed, who received, and what decisions were made. Every member can see the spreadsheet. Contributions are flexible: some send money, others verify matatu route costs, others update the group on which pharmacies have affordable stock this week.',
      'Each week, the group votes in the WhatsApp chat on whose request is most urgent. Someone who received transport fare last month is now the person checking that a new pharmacy listing is accurate. The person who verified routes last week is now the one asking for help with rent. The technology makes this rotation visible: the ledger tracks giving and receiving side by side, and the chat history shows that leadership shifts constantly.',
      'This is civic participation at the neighbourhood scale. The chama is a form of democratic self-governance, and the digital tools — M-Pesa, WhatsApp, Google Sheets — make it faster, more transparent, and more accountable than it could be on paper alone. It is also where mutual aid is most clearly different from charity: no one applies, no one is evaluated, and the people making decisions are the same people affected by them.',
    ],
    takeawayCards: [
      {
        label: 'Civic participation',
        text:
          'Weekly votes in WhatsApp, a transparent M-Pesa ledger, and rotating leadership mean every member is a decision-maker, not just a recipient.',
      },
      {
        label: 'Digital tools distribute power',
        text:
          'A shared Google Sheet makes finances visible to everyone. M-Pesa lets funds move in minutes. The technology flattens hierarchy.',
      },
      {
        label: 'Reciprocity in practice',
        text:
          'The ledger shows that giving and receiving happen side by side. People move between roles constantly, which is fundamentally different from charity.',
      },
    ],
    chapterLinks: ['q3', 'q1'],
    module: {
      type: 'power',
      title: 'Interactive section: sort the support model',
      description:
        'Read each situation and choose whether it sounds most like mutual aid, charity, or institutional support. The goal is to compare how power and participation are organized.',
      choices: [
        { id: 'mutual-aid', label: 'Mutual aid' },
        { id: 'charity', label: 'Charity' },
        { id: 'institutional', label: 'Institutional support' },
      ],
      cards: [
        {
          id: 'vote-fund',
          prompt:
            'Members discuss urgent requests in chat and decide together how to use the shared emergency fund this week.',
          answer: 'mutual-aid',
          explanation:
            'This reflects shared decision-making and collective responsibility rather than top-down distribution.',
        },
        {
          id: 'donor-photo',
          prompt:
            'A campaign posts thank-you photos of donors while recipients have no say in how aid is framed or distributed.',
          answer: 'charity',
          explanation:
            'Charity can help materially, but it often centers donors more than reciprocal participation.',
        },
        {
          id: 'intake-hours',
          prompt:
            'Support is available through listed office hours, formal eligibility checks, and staff-managed appointments.',
          answer: 'institutional',
          explanation:
            'This is a structured service model with centralized rules and delivery processes.',
        },
        {
          id: 'receive-then-help',
          prompt:
            'Someone who received bus fare last month now helps verify route costs and contributes when they are able.',
          answer: 'mutual-aid',
          explanation:
            'Reciprocity is central here. People move between giving and receiving rather than staying fixed in one role.',
        },
        {
          id: 'sponsor-choice',
          prompt:
            'A sponsor chooses who seems most deserving and sets the conditions for how support will be used.',
          answer: 'charity',
          explanation:
            'The donor or sponsor holds the power to decide, which is a key difference from mutual aid.',
        },
        {
          id: 'referral-office',
          prompt:
            'A public office coordinates transport assistance through referrals, forms, and a defined service boundary.',
          answer: 'institutional',
          explanation:
            'This kind of support can be essential, but it is usually governed by administrative procedure rather than reciprocal participation.',
        },
      ],
      completion:
        'The same practical need can be met through very different power relationships. That difference is central to understanding mutual aid.',
    },
  },
  {
    slug: 'manila',
    step: 5,
    city: 'Manila',
    country: 'Philippines',
    region: 'Asia',
    map: { x: 82, y: 43 },
    title: 'Designing for the next storm',
    subtitle: 'Inclusion means building a communication stack that more than one kind of user can enter.',
    need:
      'A storm alert is approaching, and the network must reach people quickly across different devices, languages, and connectivity limits.',
    hook:
      'In Manila, Mina sees that accessibility is not a feature to add later. When a typhoon is approaching, who your SMS tree reaches and who your Viber group misses is a life-and-death design decision.',
    story: [
      'The final stop is future-facing. Mina joins a barangay-level community group preparing for a typhoon alert. The challenge is not just posting information. It is making sure that information reaches people across Nokia feature phones, spotty Globe Telecom connections, Tagalog and Bisaya speakers, elderly neighbours who do not use apps, and volunteers coordinating across three islands.',
      'The group does not rely on one channel. They stack them. An SMS tree built on a simple phone contact list pushes short coded alerts (“SHELTER: Brgy Hall, 6PM, bring water”) to feature phones. A Viber group handles real-time coordination for smartphone users. Voice notes in Tagalog and Bisaya go out through Facebook Messenger, which has the widest reach locally. A volunteer-maintained OpenStreetMap layer tracks shelter locations, flooded roads, and supply distribution points in real time. Another volunteer runs a Google Form collecting damage reports that auto-populates a shared spreadsheet the whole network can see.',
      'This chapter ties the whole project together. Positive social change is not about having the best technology. It is about choosing the right combination of tools for the people you are actually trying to reach. The SMS tree costs almost nothing. The OpenStreetMap edits are contributed by volunteers worldwide. The Viber group is maintained by a retired teacher. Digital citizenship here means building systems that expect difference — in devices, languages, abilities, and connectivity — rather than assuming one ideal user.',
    ],
    takeawayCards: [
      {
        label: 'Accessibility is the design',
        text:
          'SMS for feature phones, Viber for smartphones, voice notes for non-readers, OpenStreetMap for live updates — each layer reaches people the others miss.',
      },
      {
        label: 'Real tools, stacked intentionally',
        text:
          'SMS trees, Facebook Messenger, Viber groups, OpenStreetMap, and Google Forms are not impressive individually. Stacked together, they become resilient infrastructure.',
      },
      {
        label: 'Positive social change',
        text:
          'When a retired teacher, a student mapper, and a barangay captain all contribute to the same alert system, digital tools are enabling genuine community resilience.',
      },
    ],
    chapterLinks: ['q1', 'q2', 'q3'],
    module: {
      type: 'planner',
      title: 'Interactive section: build the outreach stack',
      description:
        'Choose three communication channels for the storm response. Try to cover speed, low-bandwidth access, translation, and two-way feedback instead of picking only what looks most impressive.',
      maxSelect: 3,
      idealTags: ['speed', 'low-bandwidth', 'translation', 'feedback'],
      tagLabels: {
        speed: 'speed',
        'low-bandwidth': 'low-bandwidth access',
        translation: 'translation or language flexibility',
        feedback: 'two-way feedback',
      },
      options: [
        {
          id: 'sms-tree',
          label: 'SMS alert tree with coded shelter updates (works on any phone, no data needed)',
          tags: ['speed', 'low-bandwidth'],
          points: 2,
          explanation:
            'SMS reaches Nokia feature phones and areas with no data signal. It is the only channel that works when the power grid is unstable and cell towers are overloaded.',
        },
        {
          id: 'voice-chain',
          label: 'Facebook Messenger voice notes in Tagalog and Bisaya (widest local reach)',
          tags: ['translation', 'feedback', 'low-bandwidth'],
          points: 2,
          explanation:
            'Facebook Messenger has the highest penetration in the Philippines. Voice notes bypass literacy barriers and work on slow connections. Multilingual audio reaches people text cannot.',
        },
        {
          id: 'public-map',
          label: 'Volunteer-maintained OpenStreetMap layer with live shelter, supply, and road status pins',
          tags: ['feedback', 'speed'],
          points: 2,
          explanation:
            'OpenStreetMap is free, editable by anyone, and can be updated by volunteers worldwide. It makes distributed information spatial — easier to act on when you need directions, not just names.',
        },
        {
          id: 'livestream',
          label: 'High-definition Instagram Live stream with no text summary or offline version',
          tags: ['speed'],
          points: 0,
          explanation:
            'This requires strong data, synchronous viewing, and excludes anyone on a feature phone or limited connection — the people most at risk during a storm.',
        },
        {
          id: 'english-form',
          label: 'Long English-only Google Form requiring detailed written answers before seeing any resources',
          tags: [],
          points: 0,
          explanation:
            'This assumes time, literacy, English fluency, and confidence from people under extreme stress. It recreates institutional barriers in digital form.',
        },
        {
          id: 'volunteer-sheet',
          label: 'Shared Google Sheet for pickup coordination, translations, and supply check-ins',
          tags: ['feedback'],
          points: 1,
          explanation:
            'A Google Sheet is great for internal coordination — but it only helps the team, not the public. It works best paired with outward-facing channels like SMS or Messenger.',
        },
      ],
      completion:
        'A good outreach stack is usually layered. Inclusive communication means planning for different devices, habits, and forms of participation at the same time.',
    },
  },
];

export const insightPanels = [
  {
    id: 'q1',
    title:
      'How do everyday digital tools enable civic participation and bottom-up care outside formal institutions?',
    answer:
      'The most effective tools in this project are not purpose-built aid platforms. They are WhatsApp groups, Google Sheets, shared map layers, M-Pesa transfers, and Instagram Stories — everyday tools repurposed for civic coordination. They work because they reduce delay, circulate local knowledge, and let ordinary people organize care directly, without waiting for institutional approval or office hours.',
    evidence: [
      {
        slug: 'toronto',
        title: 'Toronto',
        text:
          'A WhatsApp group, a Google Sheet of pantry items, and a shared Google Maps layer helped Mina meet a weekend food need before any formal office reopened.',
      },
      {
        slug: 'sao-paulo',
        title: 'São Paulo',
        text:
          'Instagram Stories, TikTok restock videos, and a volunteer Google Sheet turned a community fridge into visible, joinable civic infrastructure.',
      },
      {
        slug: 'manila',
        title: 'Manila',
        text:
          'An SMS tree, Viber group, OpenStreetMap layer, and Google Forms damage report system coordinated typhoon response across devices and languages.',
      },
    ],
    implications: [
      'Civic participation does not require special platforms — it requires intentional use of the tools people already have.',
      'Bottom-up care works by linking small, specific pieces of digital information into a public support network.',
      'Digital citizenship includes the ability to coordinate, maintain, and teach others how to use these networks.',
    ],
  },
  {
    id: 'q2',
    title:
      'What platform design choices shape who can participate and who gets left out?',
    answer:
      'Trust and inclusion are not abstract qualities. They are produced through specific design decisions: using Telegram for public discovery but Signal for private requests, keeping a map updated weekly, translating not just words but context, choosing SMS alongside Viber because not everyone has a smartphone. Every choice about language, bandwidth, privacy, and update frequency determines who can use a platform and who cannot.',
    evidence: [
      {
        slug: 'warsaw',
        title: 'Warsaw',
        text:
          'A Telegram channel with multilingual Google Maps pins, Signal for private contact, and voice notes in three languages turned a confusing information landscape into something navigable.',
      },
      {
        slug: 'toronto',
        title: 'Toronto',
        text:
          'Pinned WhatsApp guidelines and privacy-conscious posting norms let Mina ask for help without oversharing personal information.',
      },
      {
        slug: 'manila',
        title: 'Manila',
        text:
          'Stacking SMS, Viber, Facebook Messenger, and OpenStreetMap meant each channel reached people the others missed — designing for difference rather than one ideal user.',
      },
    ],
    implications: [
      'A platform feels trustworthy when it explains itself, stays current, and respects vulnerability — not when it looks polished.',
      'Accessibility includes language, bandwidth, device type, literacy, privacy, and social confidence. Visual design is only one part.',
      'Inclusion means offering multiple ways in, because no single tool works for everyone.',
    ],
  },
  {
    id: 'q3',
    title:
      'How does mutual aid differ from charity or institutional support in terms of power, creativity, learning, and reciprocity?',
    answer:
      'Mutual aid differs because it organizes care through reciprocal participation rather than one-way giving. In a Nairobi chama, the person who received M-Pesa fare last month is the person verifying pharmacy prices this week. In São Paulo, the volunteer who designed the Instagram infographic also restocks the fridge. People move between roles — giving, receiving, creating, teaching — which is fundamentally different from charity’s donor-recipient divide or an institution’s staff-client structure.',
    evidence: [
      {
        slug: 'nairobi',
        title: 'Nairobi',
        text:
          'Weekly WhatsApp votes, a transparent M-Pesa ledger in Google Sheets, and rotating leadership meant every member was a decision-maker, not just a recipient.',
      },
      {
        slug: 'toronto',
        title: 'Toronto',
        text:
          'Mina moved from receiving groceries to updating the Google Maps fridge layer and later volunteering — reciprocity made visible through the same tools.',
      },
      {
        slug: 'sao-paulo',
        title: 'São Paulo',
        text:
          'Volunteers who designed social media posts, filmed TikTok restock videos, and maintained the spreadsheet were all doing creative civic work — not just distributing food.',
      },
    ],
    implications: [
      'Power matters: who decides, who creates, who is visible, and who is invited to participate shapes the meaning of support.',
      'Creativity and learning are part of mutual aid, not separate — designing posts, documenting processes, and teaching newcomers are all forms of contribution.',
      'The project does not reject institutional support; it shows that mutual aid solves different problems through different power relationships.',
    ],
  },
];

export const audienceGuides = [
  {
    id: 'students',
    title: 'Student organizations and campus groups',
    why:
      'You already use WhatsApp groups, Google Sheets, Instagram, and shared drives. This project shows how those same tools can be organized for care, not just club promotion — and how small design choices (pinned guidelines, privacy norms, a shared map) make the difference between a noisy group chat and genuine mutual support.',
    useCases: [
      'Build a Google Maps layer of campus and off-campus resources (food banks, free pantries, emergency contacts) and share it through your existing group chats.',
      'Pin clear posting norms in your WhatsApp or Discord group so requests feel safe and specific from the start.',
      'Create roles beyond donating: someone can maintain the map, someone can translate, someone can design Instagram posts that explain how the system works.',
    ],
    related: ['toronto', 'manila'],
  },
  {
    id: 'organizers',
    title: 'Community organizers and small nonprofits',
    why:
      'The story map shows that trust is built through real platform choices: using Telegram for public updates but Signal for private requests, keeping your Google Maps pins current, and stacking SMS with social media so you reach more than one type of user.',
    useCases: [
      'Audit your public-facing channels: does your Telegram or Facebook group explain who runs it, what it can help with, and when it was last updated?',
      'Stack your communication: pair social media with SMS or voice notes so you reach people without smartphones or strong data connections.',
      'Document what your volunteers learn after each response in a shared doc or spreadsheet, so the network gets easier to navigate over time.',
    ],
    related: ['sao-paulo', 'warsaw', 'manila'],
  },
  {
    id: 'individuals',
    title: 'Individuals looking for support or ways to contribute',
    why:
      'You do not need to be an organizer to participate in mutual aid. This project shows how sending one helpful WhatsApp message, updating one map pin, or designing one social media post is already a form of digital citizenship.',
    useCases: [
      'See that asking for help in a mutual aid group is participation, not failure — and that the details you share (location, restrictions, availability) help the network work faster.',
      'Find roles that match your skills: translation, map maintenance, graphic design for social posts, verifying information, or just resharing updates to your own contacts.',
      'Learn from the Nairobi chapter that giving and receiving happen side by side — the person you help this month may be the person who helps you next.',
    ],
    related: ['toronto', 'nairobi'],
  },
];

export const furtherReading = [
  {
    id: 'spade-2020',
    author: 'Spade, D.',
    year: 2020,
    title: 'Mutual Aid: Building Solidarity During This Crisis (and the Next)',
    publisher: 'Verso Books',
    note: 'A foundational text on how mutual aid differs from charity and state services, with practical guidance for building networks.',
  },
  {
    id: 'kropotkin-1902',
    author: 'Kropotkin, P.',
    year: 1902,
    title: 'Mutual Aid: A Factor of Evolution',
    publisher: 'William Heinemann',
    note: 'The classic argument that cooperation, not only competition, drives survival and social organization.',
  },
  {
    id: 'solnit-2009',
    author: 'Solnit, R.',
    year: 2009,
    title: 'A Paradise Built in Hell: The Extraordinary Communities That Arise in Disaster',
    publisher: 'Viking',
    note: 'Documents how communities self-organize during crises, often outperforming formal institutions in the immediate aftermath.',
  },
  {
    id: 'costanza-chock-2020',
    author: 'Costanza-Chock, S.',
    year: 2020,
    title: 'Design Justice: Community-Led Practices to Build the Worlds We Need',
    publisher: 'MIT Press',
    note: 'Explores how design processes can center the voices of those most affected by outcomes, directly relevant to platform trust and inclusion.',
  },
  {
    id: 'big-door-brigade',
    author: 'Big Door Brigade',
    year: 2020,
    title: 'What Is Mutual Aid?',
    publisher: null,
    note: 'A widely shared introductory explainer that distinguishes mutual aid from charity and social services.',
  },
];

export const responsiblePractice = [
  'Verify public information before sharing it widely, especially hours, locations, and contact methods.',
  'Avoid pressuring people to disclose more personal information than they need to access support.',
  'Offer more than one way to participate so care is not limited to people with money, time, or strong internet access.',
  'Document what worked and what was confusing so the next person encounters fewer barriers.',
];
