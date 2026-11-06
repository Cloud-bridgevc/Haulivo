// Site copy for Haulivo. A proposed startup concept: fictional team, illustrative pricing.
const site = {
  "name": "Haulivo",
  "tagline": "Better dispatch decisions for difficult delivery routes.",
  "categories": [
    "AI",
    "Logistics",
    "Fleet Management"
  ],
  "about": "Haulivo gives fleet teams a clearer view of delivery risk. Its AI predicts delays and helps dispatchers adjust plans using the operating history of their own routes.",
  "logoSvg": "<rect width=\"32\" height=\"32\" rx=\"9\" fill=\"#1c1410\"/><path d=\"M6 21h4l3-9h6l3 9h4\" fill=\"none\" stroke=\"#ff7a1a\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"11\" cy=\"23\" r=\"2.2\" fill=\"#ffd166\"/><circle cx=\"21\" cy=\"23\" r=\"2.2\" fill=\"#ffd166\"/>",
  "words": {
    "records": "trips",
    "decider": "dispatchers and fleet managers",
    "sources": "GPS history, loading times and customer-site dwell times",
    "model": "Trip-duration models trained on each fleet’s own GPS, loading and dwell history predict arrival windows and explain the drivers of delay risk.",
    "store": "Amazon Location Service"
  },
  "hero": {
    "eyebrow": "Delivery risk for haulage fleets",
    "before": "Know which deliveries need attention ",
    "em": "before customers call",
    "after": ".",
    "points": [
      "Predicted arrival times from your own routes",
      "Late-risk trips flagged hours ahead",
      "Dispatchers stay in control of every change"
    ],
    "floatTitle": "ETA slipping 3h 40m",
    "floatText": "Loading delay at plant + Lokoja corridor"
  },
  "problem": {
    "title": "Dispatch runs on phone calls and guesswork.",
    "text": "A truck waits five hours to load, a corridor slows after rain, a customer site keeps drivers queuing overnight. Dispatchers learn about it from calls and WhatsApp messages, usually after the delivery window has passed.",
    "fragments": [
      "Arrival times promised from memory, not data",
      "Loading queues nobody measures",
      "Customer-site waits that wreck the next trip",
      "Delays reported by the customer, not the system"
    ]
  },
  "solution": {
    "title": "Predict the delay. Adjust the plan. Keep the promise.",
    "text": "Haulivo learns from your fleet’s own GPS history, loading times and site waits to predict how long each trip will really take, and flags deliveries likely to miss their windows while there is still time to act.",
    "capabilities": [
      {
        "title": "Trip-time prediction",
        "text": "Arrival estimates that reflect your routes, loading points and customer sites, with a confidence range.",
        "demoLabel": "Predicted arrival",
        "demoValue": "16:40 ± 50 min"
      },
      {
        "title": "Late-risk alerts",
        "text": "Trips likely to miss their delivery windows are ranked by risk and customer impact.",
        "demoLabel": "Window miss risk",
        "demoValue": "78% · Order 4471"
      },
      {
        "title": "Dispatch suggestions",
        "text": "Recommends swaps, departure changes or route adjustments, explained by the data behind them.",
        "demoLabel": "Suggestion",
        "demoValue": "Swap trucks T-14 ↔ T-09"
      }
    ]
  },
  "stepsTitle": "From the gate to the customer, with fewer surprises.",
  "steps": [
    [
      "Connect",
      "Link your GPS or telematics provider and upload trip, loading and customer-site records."
    ],
    [
      "Learn",
      "Haulivo builds trip-time models for your own routes, plants and customer sites."
    ],
    [
      "Predict",
      "Every active trip gets a predicted arrival and a late-risk score."
    ],
    [
      "Adjust",
      "Dispatchers review suggestions, change plans, and every decision is logged."
    ]
  ],
  "audiencesTitle": "For fleets moving goods on demanding routes.",
  "audiences": [
    {
      "title": "Cement distributors",
      "text": "Manage plant loading queues and long intercity trips to depots and sites.",
      "outcome": "More trips per truck"
    },
    {
      "title": "FMCG distribution fleets",
      "text": "Keep tight delivery windows across distributors and retailers.",
      "outcome": "Fewer missed windows"
    },
    {
      "title": "Agricultural haulage firms",
      "text": "Plan seasonal surges and rural roads that change with the weather.",
      "outcome": "Better harvest planning"
    },
    {
      "title": "Port haulage operators",
      "text": "Plan around terminal queues and container appointment slots.",
      "outcome": "Shorter port waits"
    }
  ],
  "publicSector": {
    "title": "Coordinate public fleet movements with real delivery data.",
    "text": "State-owned transport and supply agencies can use Haulivo to coordinate fleet movements, monitor delivery performance and plan around corridors that cause recurring delays.",
    "points": [
      "Delivery performance by route, depot and corridor",
      "Early warning on supply deliveries likely to run late",
      "Evidence for road and corridor improvement planning",
      "Every dispatch decision recorded with a reason"
    ]
  },
  "ai": {
    "title": "The model predicts the delay. Dispatchers decide the move.",
    "intro": "Haulage involves safety, drivers and customers. Haulivo informs dispatch decisions; it never takes them.",
    "does": [
      "Predicts trip duration and arrival windows",
      "Flags deliveries at risk of running late",
      "Suggests swaps, departure times and route options",
      "Explains which factors drive each prediction"
    ],
    "never": [
      "Dispatches trucks or reroutes drivers on its own",
      "Pushes drivers beyond safe driving hours",
      "Scores or disciplines individual drivers",
      "Shares location data outside your organisation"
    ]
  },
  "pricing": {
    "model": "Monthly fee per active vehicle, with an enterprise integration tier.",
    "tiers": [
      {
        "name": "Fleet",
        "summary": "For fleets up to 50 trucks.",
        "price": "₦15k",
        "unit": "/ vehicle / month",
        "features": [
          "Trip-time predictions",
          "Late-risk alerts",
          "Dispatch board",
          "GPS provider integration"
        ],
        "cta": "Request a pilot"
      },
      {
        "name": "Operations",
        "summary": "For multi-depot operators.",
        "price": "₦12k",
        "unit": "/ vehicle / month",
        "features": [
          "From 50 vehicles",
          "Everything in Fleet",
          "Dispatch suggestions",
          "Site and corridor analytics",
          "Customer ETA sharing"
        ],
        "cta": "Request a pilot",
        "featured": true
      },
      {
        "name": "Enterprise",
        "summary": "For integrated logistics operations.",
        "price": "Custom",
        "unit": "",
        "features": [
          "ERP and TMS integration",
          "Custom models per business unit",
          "Dedicated support",
          "Data residency options"
        ],
        "cta": "Talk to us"
      }
    ]
  },
  "team": [
    {
      "name": "Tunde Arowolo",
      "role": "Founder/CEO",
      "initials": "TA",
      "bio": "Fleet operations manager with intercity distribution experience.",
      "focus": [
        "Fleet operations",
        "Distribution",
        "Customer partnerships"
      ]
    },
    {
      "name": "Aisha Gidado",
      "role": "Co-founder",
      "initials": "AG",
      "bio": "Transport economist focused on freight efficiency.",
      "focus": [
        "Freight economics",
        "Corridor analysis",
        "Strategy"
      ]
    },
    {
      "name": "Chidinma Ezeani",
      "role": "CTO",
      "initials": "CE",
      "bio": "ML engineer specialising in geospatial prediction.",
      "focus": [
        "Geospatial ML",
        "Prediction",
        "Platform"
      ]
    }
  ],
  "faq": [
    [
      "Do we need new trackers?",
      "Usually not. Haulivo connects to common GPS and telematics providers. A pilot can start from exported trip history."
    ],
    [
      "How much history does it need?",
      "Three to six months of GPS and trip data gives useful predictions for regular routes. New routes start with wider confidence ranges."
    ],
    [
      "Will drivers be scored?",
      "No. Haulivo predicts trip risk from route, site and loading patterns. It is not a driver-scoring or disciplinary tool."
    ],
    [
      "Is Haulivo a live product?",
      "Not yet. Haulivo is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype runs on fictional data in your browser."
    ],
    [
      "Does the AI make decisions?",
      "No. Haulivo flags, ranks and explains. Dispatchers and fleet managers review the evidence and record every decision with a reason."
    ],
    [
      "How would our data be protected?",
      "In production, data would be encrypted, isolated per customer, access-controlled by role and never used to train models for other customers. Data-sharing terms are agreed before any pilot."
    ]
  ],
  "purpose": {
    "eyebrow": "Why Haulivo exists",
    "manifesto": "Most of what Nigeria eats, builds and sells travels by truck. Every hour lost in a loading queue or at a customer gate is an hour of a driver’s life and a business’s margin. We think those hours can be predicted, and many can be saved.",
    "purpose": "Help haulage teams predict delivery risk and act early, using the operating history of their own routes.",
    "why": "When freight runs late, shelves empty, construction stalls and drivers spend nights waiting at gates. Better information at dispatch is one of the cheapest ways to move goods more reliably.",
    "stakesTitle": "The cost of unreliable freight.",
    "stats": [
      {
        "value": 90,
        "prefix": "~",
        "suffix": "%",
        "label": "Share of Nigeria’s freight moved by road.",
        "source": "The Guardian Nigeria",
        "url": "https://guardian.ng/?p=2580432"
      },
      {
        "value": 4,
        "prefix": "~",
        "suffix": "%",
        "label": "Share of GDP lost to fragmented, unreliable and costly transport, according to the World Bank.",
        "source": "The Guardian Nigeria, citing the World Bank",
        "url": "https://guardian.ng/?p=2861796"
      },
      {
        "value": 3.2,
        "dec": 1,
        "prefix": "₦",
        "suffix": "trn",
        "label": "Estimated annual loss to transport inefficiencies in Nigeria.",
        "source": "AllAfrica",
        "url": "https://allafrica.com/stories/202606230257.html"
      }
    ],
    "changeTitle": "From chasing trucks by phone to seeing risk early.",
    "before": [
      "ETAs promised from memory",
      "Delays discovered when the customer calls",
      "Loading and site waits nobody measures",
      "Dispatch plans fixed at the start of the day"
    ],
    "after": [
      "Predicted arrivals from your own route history",
      "Late-risk trips flagged hours ahead",
      "Waits measured by plant, site and corridor",
      "Plans adjusted as conditions change"
    ],
    "principlesTitle": "What we believe about dispatch technology.",
    "principles": [
      [
        "Your routes, your data",
        "Models learn from your own operating history, not generic averages."
      ],
      [
        "Safety is not negotiable",
        "No suggestion should push a driver beyond safe hours or speeds."
      ],
      [
        "Dispatchers decide",
        "Haulivo recommends; experienced people make the call."
      ],
      [
        "Explain every prediction",
        "A risk score is useless without the reasons behind it."
      ],
      [
        "Drivers are partners",
        "We measure routes and sites, not drivers."
      ],
      [
        "Start simple",
        "Work with the trackers and spreadsheets fleets already have."
      ]
    ],
    "letterTitle": "Why we are building Haulivo.",
    "letter": [
      "Tunde ran intercity distribution fleets and spent too many evenings on the phone with drivers stuck at plant gates or customer depots, trying to work out which promises could still be kept.",
      "Aisha studied freight efficiency and could see in the data how much time was lost waiting, not driving. Chidinma had built geospatial models and knew they could learn the patterns dispatchers carried in their heads.",
      "Haulivo brings those together: predictions grounded in each fleet’s own history, explained clearly, and left in the hands of dispatchers who know their routes and their drivers."
    ],
    "visionTitle": "Where Haulivo is going.",
    "visionIntro": "From delay alerts to smarter planning across the network.",
    "vision": [
      {
        "stage": "Now",
        "title": "Concept and prototype",
        "text": "An interactive prototype on fictional data, and conversations with fleet operators."
      },
      {
        "stage": "Next",
        "title": "Fleet pilots",
        "text": "Back-testing trip predictions on historical GPS data with early partners."
      },
      {
        "stage": "Then",
        "title": "Live dispatch",
        "text": "Real-time late-risk alerts and suggestions on the dispatch board."
      },
      {
        "stage": "Later",
        "title": "Network planning",
        "text": "Depot, site and corridor insights that shape longer-term logistics plans."
      }
    ],
    "statsNote": "Figures are published estimates from the sources linked; they describe the wider problem, not results from this product."
  },
  "app": {
    "title": "Dispatch risk board",
    "subtitle": "Active trips ranked by predicted risk of missing their delivery windows, for dispatcher review.",
    "itemNoun": "trip",
    "itemNounPlural": "trips",
    "groupLabel": "corridor",
    "queueTitle": "Trip risk queue",
    "humanNote": "Predictions inform dispatch. Dispatchers decide every change.",
    "decisions": {
      "confirm": "Act on alert",
      "dismiss": "No action needed",
      "escalate": "Escalate to ops manager"
    },
    "roles": [
      {
        "id": "lead",
        "label": "Fleet Manager",
        "can": [
          "view",
          "note",
          "assign",
          "decide",
          "escalate",
          "export"
        ]
      },
      {
        "id": "reviewer",
        "label": "Dispatcher",
        "can": [
          "view",
          "note",
          "assign",
          "decide"
        ]
      },
      {
        "id": "analyst",
        "label": "Planning Analyst",
        "can": [
          "view",
          "note",
          "escalate"
        ]
      },
      {
        "id": "auditor",
        "label": "Customer Service",
        "can": [
          "view",
          "export"
        ]
      }
    ],
    "examples": [
      "Which trips need review first?",
      "Summarise the review status",
      "Show Lagos–Ibadan",
      "Explain HLV-305"
    ],
    "refuse": "\\b(speed up|drive faster|skip (the )?rest|no rest|discipline|sack|fire the driver|punish|overtime)",
    "refuseText": "Haulivo can explain delay risk, but it will not suggest unsafe driving, skipped rest or driver discipline. Those decisions sit with fleet managers and safety policy.",
    "refuseExamples": [
      "Tell the driver to skip rest and drive faster",
      "Should we discipline the driver of T-14?",
      "Can we punish late drivers?"
    ]
  },
  "slug": "haulivo",
  "url": "https://www.haulivo.com",
  "email": "hello@haulivo.com",
  "stepsNote": "Haulivo recommends and ranks. Every outcome is recorded by a named person, with a reason, in an audit log.",
  "safeguards": [
    [
      "People decide",
      "Every trip is confirmed, dismissed or escalated by dispatchers and fleet managers, never by the model."
    ],
    [
      "Evidence first",
      "Each flag links to the GPS history, loading times and customer-site dwell times behind it, so a reviewer can check the reasoning before acting."
    ],
    [
      "Confidence shown",
      "Scores come with a confidence level and the data gaps that lower it, so weak signals are not mistaken for facts."
    ],
    [
      "Role-based access",
      "Permissions are set per role: who can view, comment, assign, decide, escalate or export."
    ],
    [
      "Complete audit trail",
      "Assignments, notes and decisions are time-stamped with the person and reason, and can be exported."
    ],
    [
      "Your data stays yours",
      "Customer data is isolated per tenant, encrypted at rest and in transit, and never used to train models for other customers."
    ]
  ],
  "architectureIntro": "How Haulivo would run in production: ingestion of GPS history, loading times and customer-site dwell times, models that score and explain, and a review workspace with a full audit trail.",
  "architecture": [
    [
      "Ingest",
      "Amazon S3 · AWS Transfer Family · API Gateway",
      "Secure upload and API connections for GPS history, loading times and customer-site dwell times."
    ],
    [
      "Prepare",
      "AWS Glue · AWS Step Functions",
      "Validation, cleaning and matching of records, with data-quality checks logged."
    ],
    [
      "Model",
      "Amazon SageMaker",
      "Trip-duration models trained on each fleet’s own GPS, loading and dwell history predict arrival windows and explain the drivers of delay risk."
    ],
    [
      "Store",
      "Amazon Aurora PostgreSQL · Amazon Location Service",
      "Records, scores, evidence links and decisions in a tenant-isolated database."
    ],
    [
      "Review",
      "AWS Amplify · Amazon CloudFront · Amazon Cognito",
      "The web workspace, with single sign-on and role-based permissions."
    ],
    [
      "Govern",
      "AWS CloudTrail · AWS KMS · Amazon CloudWatch",
      "Encryption keys per tenant, access logging and monitoring of model behaviour."
    ]
  ],
  "early": {
    "title": "Pilot Haulivo with your own team.",
    "text": "We are looking for a small number of early partners to shape Haulivo. A pilot starts with a sample of your historical data and a fixed review period, so you can judge the results before committing.",
    "steps": [
      "Tell us about your team and the records you work with.",
      "A founder replies personally to arrange a short call.",
      "We agree a pilot scope, data-sharing terms and how success will be measured."
    ]
  }
};
export default site;
