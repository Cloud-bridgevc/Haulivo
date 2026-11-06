// Fictional sample data for the Haulivo prototype. Any resemblance to real records is coincidental.
export const seed = {
  "team": [
    {
      "name": "Segun Bakare",
      "role": "Fleet Manager"
    },
    {
      "name": "Ifeanyi Obi",
      "role": "Dispatcher"
    },
    {
      "name": "Maryam Abubakar",
      "role": "Dispatcher"
    },
    {
      "name": "Kehinde Lawal",
      "role": "Planning Analyst"
    },
    {
      "name": "Joy Etim",
      "role": "Customer Service"
    }
  ],
  "items": [
    {
      "id": "HLV-301",
      "title": "Order 4471 — 30t cement to Abuja depot",
      "subtitle": "Truck T-14 · departed Obajana 07:10",
      "group": "Obajana–Abuja",
      "metrics": [
        [
          "Window",
          "14:00–16:00"
        ],
        [
          "Predicted arrival",
          "18:40 ± 50m"
        ],
        [
          "Delay drivers",
          "Loading + corridor"
        ],
        [
          "Customer",
          "Depot 3"
        ]
      ],
      "flags": [
        {
          "label": "Likely to miss window",
          "severity": "high",
          "confidence": 0.78,
          "explanation": "Loading took 4h 10m against a 1h 30m median, and the corridor has slowed after overnight rain. Similar trips arrived 2–3 hours late.",
          "evidence": [
            [
              "Loading time",
              "4h 10m (median 1h 30m)",
              "Plant gate log"
            ],
            [
              "Corridor speed today",
              "−28% vs norm",
              "Fleet GPS"
            ],
            [
              "Similar trips (rain)",
              "+2h 35m median",
              "Trip history"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "HLV-302",
      "title": "Order 4502 — FMCG to Ibadan distributor",
      "subtitle": "Truck T-09 · at Lagos warehouse",
      "group": "Lagos–Ibadan",
      "metrics": [
        [
          "Window",
          "11:00–13:00"
        ],
        [
          "Predicted arrival",
          "12:20 ± 25m"
        ],
        [
          "Status",
          "Loading"
        ],
        [
          "Customer",
          "Distributor 12"
        ]
      ],
      "flags": [
        {
          "label": "Tight window",
          "severity": "low",
          "confidence": 0.66,
          "explanation": "On track if departure happens by 09:30. Every 15 minutes later raises late risk by about 12 points.",
          "evidence": [
            [
              "Planned departure",
              "09:30",
              "Dispatch plan"
            ],
            [
              "Typical run time",
              "2h 35m",
              "Trip history"
            ],
            [
              "Distributor gate wait",
              "20m median",
              "Site dwell history"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "HLV-303",
      "title": "Order 4488 — rice to Kano mill",
      "subtitle": "Truck T-22 · waiting at customer site",
      "group": "Kano–Kaduna",
      "metrics": [
        [
          "On site since",
          "05:40"
        ],
        [
          "Waiting",
          "6h 20m"
        ],
        [
          "Site median",
          "1h 50m"
        ],
        [
          "Next trip",
          "At risk"
        ]
      ],
      "flags": [
        {
          "label": "Long site wait",
          "severity": "medium",
          "confidence": 0.84,
          "explanation": "The truck has waited 6h 20m at the mill, more than three times the usual. The next scheduled load from Kaduna will miss its slot unless reassigned.",
          "evidence": [
            [
              "Dwell time",
              "6h 20m",
              "Geofence events"
            ],
            [
              "Site median dwell",
              "1h 50m",
              "Site dwell history"
            ],
            [
              "Next load slot",
              "14:00 Kaduna",
              "Dispatch plan"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "HLV-304",
      "title": "Order 4510 — containers from Apapa",
      "subtitle": "Truck T-31 · terminal queue",
      "group": "Lagos–Ibadan",
      "metrics": [
        [
          "Appointment",
          "10:00"
        ],
        [
          "Queue position",
          "~40"
        ],
        [
          "Predicted exit",
          "15:30 ± 1h 10m"
        ],
        [
          "Container",
          "40ft"
        ]
      ],
      "flags": [
        {
          "label": "Terminal delay",
          "severity": "high",
          "confidence": 0.71,
          "explanation": "Queue length and recent exit rates suggest a five-hour wait. The downstream delivery in Ibadan is likely to slip to the next day.",
          "evidence": [
            [
              "Exit rate (last 3h)",
              "9 trucks/h",
              "Fleet GPS"
            ],
            [
              "Queue estimate",
              "~40 trucks",
              "Driver check-in"
            ],
            [
              "Delivery window",
              "Today 16:00–18:00",
              "Order record"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "HLV-305",
      "title": "Order 4495 — fertiliser to Bida",
      "subtitle": "Truck T-05 · rural road segment",
      "group": "Abuja–Bida",
      "metrics": [
        [
          "Window",
          "Tomorrow 09:00"
        ],
        [
          "Predicted arrival",
          "Tomorrow 08:10"
        ],
        [
          "Road condition",
          "Unpaved 42km"
        ],
        [
          "Weather",
          "Heavy rain forecast"
        ]
      ],
      "flags": [
        {
          "label": "Weather risk",
          "severity": "medium",
          "confidence": 0.62,
          "explanation": "Heavy rain is forecast on a 42 km unpaved stretch where past trips slowed sharply after rain. The prediction is less certain because only 11 past trips used this route.",
          "evidence": [
            [
              "Past trips on route",
              "11",
              "Trip history"
            ],
            [
              "Rain-day slowdown",
              "+3h median",
              "Trip history"
            ],
            [
              "Forecast",
              "38mm overnight",
              "Weather feed"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "HLV-306",
      "title": "Order 4520 — cement to Lokoja site",
      "subtitle": "Truck T-18 · not yet loaded",
      "group": "Obajana–Abuja",
      "metrics": [
        [
          "Planned load",
          "13:00"
        ],
        [
          "Plant queue",
          "~26 trucks"
        ],
        [
          "Predicted load",
          "16:30"
        ],
        [
          "Window",
          "Today 18:00"
        ]
      ],
      "flags": [
        {
          "label": "Loading queue",
          "severity": "medium",
          "confidence": 0.75,
          "explanation": "The plant queue is long for the time of day. Swapping with T-14’s next job would protect the higher-priority window.",
          "evidence": [
            [
              "Queue length",
              "~26 trucks",
              "Plant gate log"
            ],
            [
              "Load rate",
              "7 trucks/h",
              "Plant gate log"
            ],
            [
              "Alternative",
              "Swap with T-14 job 4533",
              "Dispatch optimiser"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "HLV-307",
      "title": "Order 4466 — beverages to Onitsha",
      "subtitle": "Truck T-27 · unscheduled stop",
      "group": "Benin–Onitsha",
      "metrics": [
        [
          "Stopped since",
          "10:05"
        ],
        [
          "Location",
          "Off route 3km"
        ],
        [
          "Window",
          "15:00–17:00"
        ],
        [
          "Driver contact",
          "Not yet"
        ]
      ],
      "flags": [
        {
          "label": "Unscheduled stop",
          "severity": "low",
          "confidence": 0.55,
          "explanation": "The truck has been stationary off-route for 50 minutes. This often reflects refuelling, a repair or a checkpoint; dispatcher contact is suggested.",
          "evidence": [
            [
              "Stationary",
              "50 min",
              "Fleet GPS"
            ],
            [
              "Known fuel stations nearby",
              "1",
              "Location data"
            ],
            [
              "Prior stops here",
              "3 (all refuelling)",
              "Trip history"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "HLV-308",
      "title": "Order 4477 — maize to Lagos feed mill",
      "subtitle": "Truck T-11 · late departure",
      "group": "Kano–Kaduna",
      "metrics": [
        [
          "Planned departure",
          "06:00"
        ],
        [
          "Actual",
          "09:45"
        ],
        [
          "Predicted arrival",
          "Late by 4h"
        ],
        [
          "Customer",
          "Feed mill 2"
        ]
      ],
      "flags": [
        {
          "label": "Late departure",
          "severity": "high",
          "confidence": 0.86,
          "explanation": "A late start pushes arrival past the mill’s receiving hours. Customer notification is recommended now.",
          "evidence": [
            [
              "Departure delay",
              "3h 45m",
              "Geofence events"
            ],
            [
              "Mill receiving hours",
              "Until 17:00",
              "Customer profile"
            ],
            [
              "Predicted arrival",
              "19:10 ± 40m",
              "Trip model"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "HLV-309",
      "title": "Order 4530 — packaging to Abeokuta",
      "subtitle": "Truck T-02 · on schedule",
      "group": "Lagos–Ibadan",
      "metrics": [
        [
          "Window",
          "12:00–14:00"
        ],
        [
          "Predicted arrival",
          "12:45 ± 15m"
        ],
        [
          "Status",
          "In transit"
        ],
        [
          "Customer",
          "Plant 4"
        ]
      ],
      "flags": [],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    }
  ]
};
