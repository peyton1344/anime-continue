const notAvailable = "Not available yet";
const originalContinuation = "Original anime. No source continuation available.";

export const supportedSourceTypes = [
  "Manga",
  "Light Novel",
  "Web Novel",
  "Original Anime",
  "Game",
  "Visual Novel",
  "Mixed Source",
  "Manhwa",
  "Manhwa / Web Novel",
  "Manhwa / Webcomic",
  "Light Novel / Manga",
  "Light Novel / Web Novel",
  "Manga / Webcomic",
  "Manga / Original Anime",
  "Web Novel / Manhwa"
];

export const supportedConfidenceLevels = [
  "High",
  "Medium",
  "Low",
  "Unknown"
];

export const supportedCoverStatuses = [
  "Real Local Cover",
  "Generated Cover",
  "Missing",
  "Needs Replacement"
];

export const supportedContinuationStatuses = [
  "Verified",
  "Approximate",
  "Start From Beginning Recommended",
  "Anime Original",
  "Source Caught Up",
  "No Source Continuation",
  "Needs Manual Research",
  "Verified for Season 2 / Needs update if Season 3 is included",
  "Verified for Season 1 / Needs update if Season 2 is included",
  "Verified for Season 2 / Needs update if newer seasons are included",
  "Verified for Season 3 / Needs update if movie included",
  "Verified for Season 4 / Needs update if movies included",
  "Verified for Hashira Training / Needs update if movies included"
];

export const supportedResearchPriorities = [
  "High",
  "Medium",
  "Low"
];

export const animeDatabase = [
  {
    "id": "tsukimichi-moonlit-fantasy",
    "title": "Tsukimichi: Moonlit Fantasy",
    "alternativeTitles": [
      "Tsuki ga Michibiku Isekai Douchuu",
      "Moon-led Journey Across Another World"
    ],
    "coverImage": "/covers/tsukimichi-moonlit-fantasy.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Adventure",
      "Comedy"
    ],
    "releaseYear": 2021,
    "animeStatus": "Season 3 announced",
    "totalEpisodes": 37,
    "totalSeasons": 3,
    "sourceType": "Light Novel / Web Novel",
    "animeEndsAt": "Season 2 Episode 25",
    "mangaContinueFrom": "Manga route is not recommended as a direct continuation because the anime has moved beyond or rearranged manga-covered material.",
    "lightNovelContinueFrom": "Light Novel Volume 11",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue with the light novel route because the manga is not a clean continuation point after Season 2.",
    "adaptationNote": "Season 2 appears to end around material leading into Volume 11, but because Tsukimichi has web novel, light novel, manga, and anime differences, keep this marked approximate.",
    "lastUpdated": "2026-06-20",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 25,
        "releaseYear": 2024,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "dataSources": [
      {
        "name": "Tsukimichi Light Novel reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm light novel structure and Volume 11 availability."
      },
      {
        "name": "Tsukimichi Volume 11 listing",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 11 as the next available light novel volume."
      },
      {
        "name": "Tsukimichi community discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to compare anime-to-LN continuation guidance. Keep as Medium confidence."
      }
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Fantasy Adventure",
      "Overpowered MC"
    ],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "11",
    "lightNovelContinueChapter": "Start of Volume 11",
    "webNovelContinueFrom": "Possible route, but light novel is preferred for this database.",
    "recommendedContinueFrom": "Light Novel Volume 11",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "This continuation answer is useful but approximate; check the source evidence before upgrading confidence.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Tsukimichi Light Novel reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm light novel structure and Volume 11 availability."
      },
      {
        "name": "Tsukimichi Volume 11 listing",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 11 as the next available light novel volume."
      },
      {
        "name": "Tsukimichi community discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to compare anime-to-LN continuation guidance. Keep as Medium confidence."
      }
    ]
  },
  {
    "id": "solo-leveling",
    "title": "Solo Leveling",
    "alternativeTitles": [
      "Ore dake Level Up na Ken",
      "Na Honjaman Level Up"
    ],
    "coverImage": "/covers/solo-leveling.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Dungeon",
      "Supernatural"
    ],
    "releaseYear": 2024,
    "animeStatus": "Finished Season",
    "totalEpisodes": 25,
    "totalSeasons": 2,
    "sourceType": "Manhwa / Web Novel",
    "animeEndsAt": "Season 2 Episode 13 / Episode 25 overall",
    "mangaContinueFrom": "Around Manhwa Chapter 111. Some guides recommend starting around Chapter 120 or Chapter 125 depending on numbering and skipped/after-arc material.",
    "lightNovelContinueFrom": "Not the recommended route for most anime viewers. The manhwa/webtoon route is easier to follow after the anime.",
    "recommendedRoute": "Manhwa",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "The manhwa is the most practical continuation route after the anime.",
    "adaptationNote": "Different guides give slightly different continuation points because of webtoon numbering and skipped/after-arc material. Mark as approximate instead of fully verified.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2: Arise from the Shadow",
        "episodes": 13,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "The Mary Sue",
        "type": "Anime Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ending around manhwa chapter 110 and continuation around chapter 111."
      },
      {
        "name": "Anime Corner",
        "type": "Anime Guide",
        "checked": true,
        "note": "Used as alternate continuation guidance recommending a later webtoon start point."
      },
      {
        "name": "CBR",
        "type": "Anime Guide",
        "checked": true,
        "note": "Used to compare adapted chapter coverage."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "111",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "Start around Manhwa Chapter 111. If the version numbering looks different, start around Chapter 120-125 to safely enter the post-Jeju / next arc material.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "This continuation answer is useful but approximate; check the source evidence before upgrading confidence.",
    "researchPriority": "High",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Mary Sue",
        "type": "Anime Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ending around manhwa chapter 110 and continuation around chapter 111."
      },
      {
        "name": "Anime Corner",
        "type": "Anime Guide",
        "checked": true,
        "note": "Used as alternate continuation guidance recommending a later webtoon start point."
      },
      {
        "name": "CBR",
        "type": "Anime Guide",
        "checked": true,
        "note": "Used to compare adapted chapter coverage."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "that-time-i-got-reincarnated-as-a-slime",
    "title": "That Time I Got Reincarnated as a Slime",
    "alternativeTitles": [
      "Tensei shitara Slime Datta Ken",
      "TenSura"
    ],
    "coverImage": "/covers/that-time-i-got-reincarnated-as-a-slime.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Adventure",
      "Comedy"
    ],
    "releaseYear": 2018,
    "animeStatus": "Season 4 airing",
    "totalEpisodes": 72,
    "totalSeasons": 4,
    "sourceType": "Light Novel / Manga",
    "animeEndsAt": "Season 3 Episode 24. Season 3 mainly covers the Church arc and Founder's Festival material.",
    "mangaContinueFrom": "Manga Chapter 119",
    "lightNovelContinueFrom": "Light Novel Volume 10",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Light Novel Volume 10 is the best route for the next main story. Manga Chapter 119 is a useful manga continuation point.",
    "adaptationNote": "The manga and light novel mapping is close but not perfectly identical. Keep this as approximate unless manually verified again.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 24,
        "releaseYear": 2018,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2 split-cour",
        "episodes": 24,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 24,
        "releaseYear": 2024,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Airing"
      }
    ],
    "dataSources": [
      {
        "name": "TenseiSlime community guide",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm manga continuation around Chapter 119 after Season 3."
      },
      {
        "name": "Tensura manga chapter reference",
        "type": "Chapter Reference",
        "checked": true,
        "note": "Used to confirm Chapter 118/119 area and volume placement."
      },
      {
        "name": "TenseiSlime light novel discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm Season 3 covers around light novel volumes 7–9, making Volume 10 the next route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Kingdom Building",
      "Fantasy Adventure"
    ],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Manga Volume 27",
    "mangaContinueChapter": "119",
    "lightNovelContinueVolume": "10",
    "lightNovelContinueChapter": "Start of Volume 10",
    "webNovelContinueFrom": "Not recommended as the main route because the web novel differs from the light novel.",
    "recommendedContinueFrom": "Light Novel Volume 10. Manga readers can continue around Chapter 119.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "This continuation answer is useful but approximate; check the source evidence before upgrading confidence.",
    "researchPriority": "High",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "TenseiSlime community guide",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm manga continuation around Chapter 119 after Season 3."
      },
      {
        "name": "Tensura manga chapter reference",
        "type": "Chapter Reference",
        "checked": true,
        "note": "Used to confirm Chapter 118/119 area and volume placement."
      },
      {
        "name": "TenseiSlime light novel discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm Season 3 covers around light novel volumes 7–9, making Volume 10 the next route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "mushoku-tensei-jobless-reincarnation",
    "title": "Mushoku Tensei: Jobless Reincarnation",
    "alternativeTitles": [
      "Mushoku Tensei",
      "Jobless Reincarnation"
    ],
    "coverImage": "/covers/mushoku-tensei-jobless-reincarnation.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Drama",
      "Adventure"
    ],
    "releaseYear": 2021,
    "animeStatus": "Season 3 announced",
    "totalEpisodes": 48,
    "totalSeasons": 3,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 Episode 24, after the Labyrinth Arc. Season 2 adapts light novel volumes 7–12.",
    "mangaContinueFrom": "Manga route is not recommended because the manga is behind the anime at this point.",
    "lightNovelContinueFrom": "Light Novel Volume 13",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 13 after Season 2.",
    "adaptationNote": "Season 2 covers volumes 7–12. The manga is behind the anime, so the light novel is the best route.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1 split-cour",
        "episodes": 23,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2 split-cour",
        "episodes": 25,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "dataSources": [
      {
        "name": "Sportskeeda",
        "type": "Anime Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ends at Volume 12 and Volume 13 is the continuation point."
      },
      {
        "name": "Mushoku Tensei Season 2 reference",
        "type": "Episode / Adaptation Reference",
        "checked": true,
        "note": "Used to confirm Season 2 adapts Volumes 7–12."
      },
      {
        "name": "Mushoku Tensei Wiki",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 13 follows Volume 12."
      }
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Fantasy Adventure"
    ],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "13",
    "lightNovelContinueChapter": "Start of Volume 13",
    "webNovelContinueFrom": "Web Novel equivalent exists, but the light novel is the recommended route.",
    "recommendedContinueFrom": "Light Novel Volume 13",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The continuation point has been added from the researched popular-anime batch.",
    "researchPriority": "High",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Sportskeeda",
        "type": "Anime Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ends at Volume 12 and Volume 13 is the continuation point."
      },
      {
        "name": "Mushoku Tensei Season 2 reference",
        "type": "Episode / Adaptation Reference",
        "checked": true,
        "note": "Used to confirm Season 2 adapts Volumes 7–12."
      },
      {
        "name": "Mushoku Tensei Wiki",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 13 follows Volume 12."
      }
    ]
  },
  {
    "id": "rezero-starting-life-in-another-world",
    "title": "Re:Zero - Starting Life in Another World",
    "alternativeTitles": [
      "Re:Zero kara Hajimeru Isekai Seikatsu",
      "Re:Zero"
    ],
    "coverImage": "/covers/rezero-starting-life-in-another-world.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Drama",
      "Psychological"
    ],
    "releaseYear": 2016,
    "animeStatus": "Season 4 announced",
    "totalEpisodes": 66,
    "totalSeasons": 4,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 3 Episode 16 / Episode 66 overall. Season 3 adapts Arc 5, light novel volumes 16–20.",
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route because the light novel is the original and clearer route.",
    "lightNovelContinueFrom": "Light Novel Volume 21",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 21 after Season 3.",
    "adaptationNote": "Season 3 adapts volumes 16–20. Volume 21 begins the next main arc.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 25,
        "releaseYear": 2016,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2 split-cour",
        "episodes": 25,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 16,
        "releaseYear": 2024,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "dataSources": [
      {
        "name": "Anime Corner",
        "type": "Anime Guide",
        "checked": true,
        "note": "Used to confirm Season 3 ends before Volume 21 continuation."
      },
      {
        "name": "Re:Zero Season 3 reference",
        "type": "Episode / Adaptation Reference",
        "checked": true,
        "note": "Used to confirm Season 3 has 16 episodes and adapts volumes 16–20."
      },
      {
        "name": "Re:Zero Volume 21 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 21 starts Arc 6."
      }
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "21",
    "lightNovelContinueChapter": "Start of Volume 21",
    "webNovelContinueFrom": "Web Novel Arc 6, but light novel Volume 21 is recommended for database consistency.",
    "recommendedContinueFrom": "Light Novel Volume 21",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The continuation point has been added from the researched popular-anime batch.",
    "researchPriority": "High",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Anime Corner",
        "type": "Anime Guide",
        "checked": true,
        "note": "Used to confirm Season 3 ends before Volume 21 continuation."
      },
      {
        "name": "Re:Zero Season 3 reference",
        "type": "Episode / Adaptation Reference",
        "checked": true,
        "note": "Used to confirm Season 3 has 16 episodes and adapts volumes 16–20."
      },
      {
        "name": "Re:Zero Volume 21 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 21 starts Arc 6."
      }
    ]
  },
  {
    "id": "overlord",
    "title": "Overlord",
    "alternativeTitles": [
      "Overlord"
    ],
    "coverImage": "/covers/overlord.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Action",
      "Dark Fantasy"
    ],
    "releaseYear": 2015,
    "animeStatus": "Finished Season",
    "totalEpisodes": 52,
    "totalSeasons": 4,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 4 Episode 13. Season 4 covers light novel volumes 10, 11, and 14.",
    "mangaContinueFrom": "Manga route is not recommended because the light novel is the original and further ahead.",
    "lightNovelContinueFrom": "If only Season 4 is watched, read Light Novel Volumes 12–13 first. If Season 4 and The Sacred Kingdom movie are watched, continue with Light Novel Volume 15.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Do not jump straight from Season 4 to Volume 15 unless you also watched The Sacred Kingdom movie or read Volumes 12–13.",
    "adaptationNote": "Season 4 skips the Holy Kingdom arc in the TV season because it is covered by the movie. Volume 15 is only the correct continuation after covering Volumes 12–13.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 13,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 13,
        "releaseYear": 2018,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 13,
        "releaseYear": 2018,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4",
        "episodes": 13,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Overlord Story Arcs reference",
        "type": "Adaptation Reference",
        "checked": true,
        "note": "Used to confirm Season 4 covers Volumes 10, 11, and 14."
      },
      {
        "name": "Overlord community FAQ",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm Holy Kingdom arc placement and Volume 15 continuation after movie coverage."
      },
      {
        "name": "Overlord volume reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 15 follows the Holy Kingdom arc."
      }
    ],
    "isekaiSubgenres": [
      "Game World",
      "Overpowered MC",
      "Kingdom Building"
    ],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "15",
    "lightNovelContinueChapter": "Start of Volume 15",
    "webNovelContinueFrom": "Not recommended as the main route.",
    "recommendedContinueFrom": "After Season 4 only: read Volumes 12–13 first. After Season 4 plus The Sacred Kingdom movie: continue with Volume 15.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The continuation point has been added from the researched popular-anime batch.",
    "researchPriority": "High",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Overlord Story Arcs reference",
        "type": "Adaptation Reference",
        "checked": true,
        "note": "Used to confirm Season 4 covers Volumes 10, 11, and 14."
      },
      {
        "name": "Overlord community FAQ",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm Holy Kingdom arc placement and Volume 15 continuation after movie coverage."
      },
      {
        "name": "Overlord volume reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 15 follows the Holy Kingdom arc."
      }
    ]
  },
  {
    "id": "the-eminence-in-shadow",
    "title": "The Eminence in Shadow",
    "alternativeTitles": [
      "Kage no Jitsuryokusha ni Naritakute",
      "Shadow Garden"
    ],
    "coverImage": "/covers/the-eminence-in-shadow.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Action",
      "Comedy"
    ],
    "releaseYear": 2022,
    "animeStatus": "Movie planned",
    "totalEpisodes": 32,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 Episode 12",
    "mangaContinueFrom": "Manga Chapter 47 or 48",
    "lightNovelContinueFrom": "Light Novel Volume 4, around Chapter 4. Starting earlier in Volume 4 is recommended for context.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "The light novel is the original source and is the best route after Season 2.",
    "adaptationNote": "Manga mapping points to Chapter 47/48, but the light novel/anime/manga versions adapt parts differently. Keep this as approximate.",
    "lastUpdated": "2026-06-20",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 20,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "The Eminence in Shadow FAQ",
        "type": "Community FAQ",
        "checked": true,
        "note": "Used to confirm manga Chapter 47/48 continuation guidance."
      },
      {
        "name": "The Eminence in Shadow Volume 4 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 4 content and anime episode mapping."
      }
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Overpowered MC"
    ],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "47/48",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Around Chapter 4",
    "webNovelContinueFrom": "Not recommended as the main route because the light novel differs from the web novel from Volume 4 onward.",
    "recommendedContinueFrom": "Light Novel Volume 4, around Chapter 4. For safer context, start earlier in Volume 4.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "This continuation answer is useful but approximate; check the source evidence before upgrading confidence.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Eminence in Shadow FAQ",
        "type": "Community FAQ",
        "checked": true,
        "note": "Used to confirm manga Chapter 47/48 continuation guidance."
      },
      {
        "name": "The Eminence in Shadow Volume 4 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 4 content and anime episode mapping."
      }
    ]
  },
  {
    "id": "classroom-of-the-elite",
    "title": "Classroom of the Elite",
    "alternativeTitles": [
      "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e",
      "COTE"
    ],
    "coverImage": "/covers/classroom-of-the-elite.jpg",
    "genres": [
      "School",
      "Drama",
      "Psychological",
      "Suspense"
    ],
    "releaseYear": 2017,
    "animeStatus": "Year 2 sequel announced",
    "totalEpisodes": 38,
    "totalSeasons": 4,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 3 Episode 13",
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "Classroom of the Elite: Year 2 Volume 1. Optional: read Year 1 Volume 11.5 first because the anime cuts details.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The anime completes the Year 1 arc. Continue into Year 2 Volume 1, but Year 1 Volume 11.5 is worth reading first.",
    "adaptationNote": "The anime compresses a lot of light novel material, so reading Volume 11.5 before Year 2 Volume 1 is recommended.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2017,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 13,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 13,
        "releaseYear": 2024,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Year 2 sequel season",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "dataSources": [
      {
        "name": "Classroom of the Elite community discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm Season 3 ends around Year 1 Volume 11.5 and continuation begins at Year 2 Volume 1."
      },
      {
        "name": "Classroom of the Elite franchise reference page",
        "type": "Media / Volume Reference",
        "checked": true,
        "note": "Used to confirm Year 1, Year 2, and anime season structure."
      },
      {
        "name": "Anime Corner",
        "type": "Anime / Light Novel News",
        "checked": true,
        "note": "Used to cross-check Year 1 ending and Year 2 arc information."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Year 2 Volume 1",
    "lightNovelContinueChapter": "Start of Year 2 Volume 1",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Continue with Classroom of the Elite: Year 2's first volume. Recommended context: read Year 1 Volume 11.5 first for cut details.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "The continuation point has been added from the researched popular-anime batch.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Classroom of the Elite community discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm Season 3 ends around Year 1 Volume 11.5 and continuation begins at Year 2 Volume 1."
      },
      {
        "name": "Classroom of the Elite franchise reference page",
        "type": "Media / Volume Reference",
        "checked": true,
        "note": "Used to confirm Year 1, Year 2, and anime season structure."
      },
      {
        "name": "Anime Corner",
        "type": "Anime / Light Novel News",
        "checked": true,
        "note": "Used to cross-check Year 1 ending and Year 2 arc information."
      }
    ]
  },
  {
    "id": "the-angel-next-door-spoils-me-rotten",
    "title": "The Angel Next Door Spoils Me Rotten",
    "alternativeTitles": [
      "Otonari no Tenshi-sama",
      "The Angel Next Door"
    ],
    "coverImage": "/covers/the-angel-next-door-spoils-me-rotten.jpg",
    "genres": [
      "Romance",
      "Slice of Life",
      "School"
    ],
    "releaseYear": 2023,
    "animeStatus": "Season 2 airing or recently finished; endpoint needs verification",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 ends at Episode 12. Season 2 endpoint needs verification after full coverage is confirmed.",
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "Approx. Light Novel Volume 5 after Season 1. If Season 2 is included, verify the newer endpoint.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but Season 2 changes the endpoint.",
    "adaptationNote": "This clears manual placeholder while keeping verification on for Season 2 coverage.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2026,
        "status": "Airing"
      }
    ],
    "dataSources": [
      {
        "name": "Angel Next Door anime/light novel overview",
        "type": "Anime / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm light novel route and Season 2 caveat."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "Season 1 only: 5 / Season 2 included: needs verification",
    "lightNovelContinueChapter": "Start of Volume 5 after Season 1 only",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Approx. Light Novel Volume 5 after Season 1. If Season 2 is included, verify the newer endpoint.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The continuation point is approximate. Start a little earlier if you want skipped or rearranged context.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Angel Next Door anime/light novel overview",
        "type": "Anime / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm light novel route and Season 2 caveat."
      }
    ]
  },
  {
    "id": "horimiya",
    "title": "Horimiya",
    "alternativeTitles": [
      "Hori-san to Miyamura-kun",
      "Horimiya: The Missing Pieces"
    ],
    "coverImage": "/covers/horimiya.jpg",
    "genres": [
      "Romance",
      "Comedy",
      "School",
      "Slice of Life"
    ],
    "releaseYear": 2021,
    "animeStatus": "Anime completed",
    "totalEpisodes": 26,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Horimiya and Horimiya: The Missing Pieces together cover the main manga story and previously skipped material.",
    "mangaContinueFrom": "No main continuation needed. Manga from Chapter 1 is optional for source order and details.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "No source continuation / optional manga from beginning",
    "confidenceLevel": "High",
    "spoilerFreeNote": "No continuation needed after the full anime route.",
    "adaptationNote": "The original anime skipped and rearranged material; Missing Pieces fills much of that gap. Manga from the beginning remains optional.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Horimiya",
        "episodes": 13,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Horimiya: The Missing Pieces",
        "episodes": 13,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Horimiya anime/manga structure overview",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm Horimiya plus Missing Pieces coverage."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Optional Volume 1",
    "mangaContinueChapter": "Optional Chapter 1",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No main continuation needed if both anime parts are watched. Optional: read the manga from Chapter 1 for original order and skipped details.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Starting from the beginning is recommended because the anime may skip, rearrange, compress, or diverge from source material.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Horimiya anime/manga structure overview",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm Horimiya plus Missing Pieces coverage."
      }
    ]
  },
  {
    "id": "jujutsu-kaisen",
    "title": "Jujutsu Kaisen",
    "alternativeTitles": [
      "JJK"
    ],
    "coverImage": "/covers/jujutsu-kaisen.jpg",
    "genres": [
      "Action",
      "Supernatural",
      "Shonen",
      "Dark Fantasy"
    ],
    "releaseYear": 2020,
    "animeStatus": "Season 4 announced",
    "totalEpisodes": 59,
    "totalSeasons": 4,
    "sourceType": "Manga",
    "animeEndsAt": "After Season 2, the anime ends before the next major manga arc. Newer anime coverage should be verified if the database tracks Season 3.",
    "mangaContinueFrom": "Manga Chapter 137 after Season 2. If Season 3 is included, verify the new endpoint.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Manga Chapter 137 is the practical post-Season-2 route.",
    "adaptationNote": "This clears the manual research placeholder but keeps verification on for newer anime coverage.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 24,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 23,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3: The Culling Game Part 1",
        "episodes": 12,
        "releaseYear": 2026,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "dataSources": [
      {
        "name": "Jujutsu Kaisen anime-to-manga continuation guide",
        "type": "Anime-to-Manga Reference",
        "checked": true,
        "note": "Used to confirm Chapter 137 as the common post-Season-2 continuation point."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 16",
    "mangaContinueChapter": "137",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 137 after Season 2. If the database tracks Season 3, verify the newer endpoint.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "High",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Jujutsu Kaisen anime-to-manga continuation guide",
        "type": "Anime-to-Manga Reference",
        "checked": true,
        "note": "Used to confirm Chapter 137 as the common post-Season-2 continuation point."
      }
    ]
  },
  {
    "id": "demon-slayer",
    "title": "Demon Slayer",
    "alternativeTitles": [
      "Kimetsu no Yaiba"
    ],
    "coverImage": "/covers/demon-slayer.jpg",
    "genres": [
      "Action",
      "Historical",
      "Supernatural",
      "Shonen"
    ],
    "releaseYear": 2019,
    "animeStatus": "Movie trilogy in progress",
    "totalEpisodes": 63,
    "totalSeasons": 5,
    "sourceType": "Manga",
    "animeEndsAt": "Hashira Training Arc Episode 8; Infinity Castle film coverage needs separate verification",
    "mangaContinueFrom": "Manga Chapter 140 after Hashira Training Arc. Recheck after each Infinity Castle movie.",
    "lightNovelContinueFrom": "Light novels exist but are not the main continuation route.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue from Chapter 140 only if the user has watched through Hashira Training and not later movies.",
    "adaptationNote": "Infinity Castle films adapt later material, so this must be rechecked after movie releases. Database season data appears newer than this researched continuation point. Current anime ending point kept as Hashira Training Arc Episode 8; Infinity Castle film coverage needs separate verification; verify the latest adapted source chapter/volume before publishing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1: Tanjiro Kamado, Unwavering Resolve Arc",
        "episodes": 26,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Mugen Train Arc TV version",
        "episodes": 7,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Entertainment District Arc",
        "episodes": 11,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Swordsmith Village Arc",
        "episodes": 11,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 5,
        "seasonTitle": "Hashira Training Arc",
        "episodes": 8,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Demon Slayer anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Hashira Training continuation around Chapter 140."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Volume 16",
    "mangaContinueChapter": "140",
    "lightNovelContinueVolume": "Not recommended as main route",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 140 after Hashira Training Arc. Needs update after Infinity Castle movie coverage.",
    "continuationStatus": "Verified for Hashira Training / Needs update if movies included",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The continuation point is approximate. Start a little earlier if you want skipped or rearranged context.",
    "researchPriority": "High",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Demon Slayer anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Hashira Training continuation around Chapter 140."
      }
    ]
  },
  {
    "id": "chainsaw-man",
    "title": "Chainsaw Man",
    "alternativeTitles": [
      "Chainsaw Man"
    ],
    "coverImage": "/covers/chainsaw-man.jpg",
    "genres": [
      "Action",
      "Horror",
      "Supernatural",
      "Dark Comedy"
    ],
    "releaseYear": 2022,
    "animeStatus": "Movie released; sequel planned",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 Episode 12; Reze Arc movie continues after Season 1",
    "mangaContinueFrom": "Chapter 53 after the Reze Arc movie; Chapter 39 if only Season 1 is watched",
    "lightNovelContinueFrom": "Not available yet",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Read from Chapter 39 after the TV season, or Chapter 53 after watching the Reze Arc movie.",
    "adaptationNote": "The TV season is followed directly by the Reze Arc movie. Chapter 53 is the cleaner route after the movie; use Chapter 39 for users who only watched Season 1.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Wikipedia: Chainsaw Man",
        "type": "Database",
        "checked": true,
        "note": "Confirmed manga source, 12-episode TV anime, Reze Arc film, and sequel status."
      },
      {
        "name": "Wikipedia: Chainsaw Man - The Movie: Reze Arc",
        "type": "Database",
        "checked": true,
        "note": "Confirmed the film adapts the fifth and sixth manga volumes and directly follows the TV season."
      },
      {
        "name": "GamesRadar: Continue after Chainsaw Man Reze Arc",
        "type": "Episode Reference",
        "checked": true,
        "note": "Used as non-official continuation guide support for Chapter 53 after the movie."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Chapter 53",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "Chapter 53 after the Reze Arc movie; Chapter 39 if only Season 1 is watched",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "The continuation point is confirmed enough for normal guide display.",
    "researchPriority": "High",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wikipedia: Chainsaw Man",
        "type": "Database",
        "checked": true,
        "note": "Confirmed manga source, 12-episode TV anime, Reze Arc film, and sequel status."
      },
      {
        "name": "Wikipedia: Chainsaw Man - The Movie: Reze Arc",
        "type": "Database",
        "checked": true,
        "note": "Confirmed the film adapts the fifth and sixth manga volumes and directly follows the TV season."
      },
      {
        "name": "GamesRadar: Continue after Chainsaw Man Reze Arc",
        "type": "Episode Reference",
        "checked": true,
        "note": "Used as non-official continuation guide support for Chapter 53 after the movie."
      }
    ]
  },
  {
    "id": "one-punch-man",
    "title": "One Punch Man",
    "alternativeTitles": [
      "One-Punch Man",
      "Wanpanman"
    ],
    "coverImage": "/covers/one-punch-man.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Superhero",
      "Seinen"
    ],
    "releaseYear": 2015,
    "animeStatus": "Finished Season",
    "totalEpisodes": 36,
    "totalSeasons": 3,
    "sourceType": "Manga / Webcomic",
    "animeEndsAt": "Season 3 Episode 12",
    "mangaContinueFrom": "After Season 2, continue around Manga Chapter 85-86. If Season 3 is included in the database, this needs a newer check.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Use the manga route. Recheck if the website already counts Season 3.",
    "adaptationNote": "Season 3 changes the continuation point, so do not mark this as High confidence unless the latest anime coverage is confirmed. Database season data appears newer than this researched continuation point. Current anime ending point kept as Season 3 Episode 12; verify the latest adapted source chapter/volume before publishing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 12,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "One Punch Man community continuation references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate the Season 2 continuation area."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 17",
    "mangaContinueChapter": "85",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not recommended for anime viewers because the manga adaptation has different pacing and art.",
    "recommendedContinueFrom": "Manga Chapter 85-86 after Season 2. Needs recheck if Season 3 is included.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "One Punch Man community continuation references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate the Season 2 continuation area."
      }
    ]
  },
  {
    "id": "black-clover",
    "title": "Black Clover",
    "alternativeTitles": [
      "Black Clover"
    ],
    "coverImage": "/covers/black-clover.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Magic",
      "Shonen"
    ],
    "releaseYear": 2017,
    "animeStatus": "New anime season announced for 2026",
    "totalEpisodes": 170,
    "totalSeasons": 5,
    "sourceType": "Manga",
    "animeEndsAt": "Episode 170 reaches the Chapter 270 adaptation point; continue with Chapter 271/new material as noted.",
    "mangaContinueFrom": "Manga Chapter 270 or Chapter 271",
    "lightNovelContinueFrom": "Not applicable. The source material is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Chapter 270 is the anime ending area. Chapter 271 continues the story.",
    "adaptationNote": "The movie is not the direct manga continuation and should not change the manga chapter start point.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 51,
        "releaseYear": 2017,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 51,
        "releaseYear": 2018,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 52,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4",
        "episodes": 16,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 5,
        "seasonTitle": "New anime season",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "dataSources": [
      {
        "name": "Black Clover continuation references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Episode 170 ends around Volume 27, Chapter 270."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Volume 27",
    "mangaContinueChapter": "270",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start from Manga Chapter 270 to review the ending point, or Chapter 271 for the next new material.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The continuation point is approximate. Start a little earlier if you want skipped or rearranged context.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Black Clover continuation references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Episode 170 ends around Volume 27, Chapter 270."
      }
    ]
  },
  {
    "id": "my-hero-academia",
    "title": "My Hero Academia",
    "alternativeTitles": [
      "Boku no Hero Academia",
      "MHA"
    ],
    "coverImage": "/covers/my-hero-academia.jpg",
    "genres": [
      "Action",
      "Superhero",
      "School",
      "Shonen"
    ],
    "releaseYear": 2016,
    "animeStatus": "Anime completed",
    "totalEpisodes": 170,
    "totalSeasons": 8,
    "sourceType": "Manga",
    "animeEndsAt": "Season 8 Episode 11",
    "mangaContinueFrom": "After Season 7, continue around Manga Chapter 399. If the final season is included, verify whether the anime has completed the manga.",
    "lightNovelContinueFrom": "School Briefs light novels exist but are not the main continuation route.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Use Chapter 399 only if the user has watched through Season 7.",
    "adaptationNote": "The database lists 8 seasons, so verify whether Final Season coverage changes or completes the manga. Database season data appears newer than this researched continuation point. Current anime ending point kept as Season 8 Episode 11; verify the latest adapted source chapter/volume before publishing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 13,
        "releaseYear": 2016,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 25,
        "releaseYear": 2017,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 25,
        "releaseYear": 2018,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4",
        "episodes": 25,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 5,
        "seasonTitle": "Season 5",
        "episodes": 25,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 6,
        "seasonTitle": "Season 6",
        "episodes": 25,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 7,
        "seasonTitle": "Season 7",
        "episodes": 21,
        "releaseYear": 2024,
        "status": "Finished"
      },
      {
        "seasonNumber": 8,
        "seasonTitle": "Final Season",
        "episodes": 11,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "My Hero Academia anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate post-Season-7 continuation around Chapter 399."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 40",
    "mangaContinueChapter": "399",
    "lightNovelContinueVolume": "Not recommended as main route",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No main manga continuation needed. The anime completes the main story.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Starting from the beginning is recommended because the anime may skip, rearrange, compress, or diverge from source material.",
    "researchPriority": "High",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "My Hero Academia anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate post-Season-7 continuation around Chapter 399."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "the-rising-of-the-shield-hero",
    "title": "The Rising of the Shield Hero",
    "alternativeTitles": [
      "Tate no Yuusha no Nariagari",
      "Shield Hero"
    ],
    "coverImage": "/covers/the-rising-of-the-shield-hero.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Adventure",
      "Drama"
    ],
    "releaseYear": 2019,
    "animeStatus": "Season 5 announced",
    "totalEpisodes": 62,
    "totalSeasons": 5,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 3 Episode 12. Season 3 adapts light novel volumes 10–12.",
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route because the anime has surpassed parts of the manga route.",
    "lightNovelContinueFrom": "Light Novel Volume 13",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 13 after Season 3.",
    "adaptationNote": "Season 3 adapts Volumes 10–12. Volume 13 is the next main light novel volume.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 25,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 13,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4",
        "episodes": 12,
        "releaseYear": 2025,
        "status": "Finished"
      },
      {
        "seasonNumber": 5,
        "seasonTitle": "Season 5",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "dataSources": [
      {
        "name": "The Rising of the Shield Hero Season 3 reference",
        "type": "Episode / Adaptation Reference",
        "checked": true,
        "note": "Used to confirm Season 3 adapts Volumes 10–12."
      },
      {
        "name": "Epicstream guide",
        "type": "Anime Guide",
        "checked": true,
        "note": "Used to confirm Volume 13 as the continuation point after Season 3."
      },
      {
        "name": "Shield Hero Volume 13 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 13 follows Volume 12."
      }
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Fantasy Adventure"
    ],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "13",
    "lightNovelContinueChapter": "Start of Volume 13",
    "webNovelContinueFrom": "Not recommended as the main route because the light novel is revised/expanded.",
    "recommendedContinueFrom": "Light Novel Volume 13",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The continuation point has been added from the researched popular-anime batch.",
    "researchPriority": "High",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Rising of the Shield Hero Season 3 reference",
        "type": "Episode / Adaptation Reference",
        "checked": true,
        "note": "Used to confirm Season 3 adapts Volumes 10–12."
      },
      {
        "name": "Epicstream guide",
        "type": "Anime Guide",
        "checked": true,
        "note": "Used to confirm Volume 13 as the continuation point after Season 3."
      },
      {
        "name": "Shield Hero Volume 13 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 13 follows Volume 12."
      }
    ]
  },
  {
    "id": "konosuba",
    "title": "Konosuba: God's Blessing on This Wonderful World!",
    "alternativeTitles": [
      "Kono Subarashii Sekai ni Shukufuku wo!",
      "Konosuba"
    ],
    "coverImage": "/covers/konosuba.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai",
      "Adventure"
    ],
    "releaseYear": 2016,
    "animeStatus": "Season 4 announced",
    "totalEpisodes": 31,
    "totalSeasons": 4,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 3 Episode 11. Season 3 adapts light novel volumes 6 and 7.",
    "mangaContinueFrom": "Manga Volume 14, Chapter 80",
    "lightNovelContinueFrom": "Light Novel Volume 8",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 8 after Season 3.",
    "adaptationNote": "Season 3 covers Volumes 6–7. Some readers recommend checking the Volume 7 epilogue before starting Volume 8 because some details are cut or rearranged.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 10,
        "releaseYear": 2016,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 10,
        "releaseYear": 2017,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 11,
        "releaseYear": 2024,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "dataSources": [
      {
        "name": "KonoSuba Season 3 reference",
        "type": "Episode / Adaptation Reference",
        "checked": true,
        "note": "Used to confirm Season 3 adapts Volumes 6–7."
      },
      {
        "name": "Epicstream guide",
        "type": "Anime Guide",
        "checked": true,
        "note": "Used to confirm Volume 8 and manga Chapter 80 continuation."
      },
      {
        "name": "KonoSuba Volume 8 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 8 is the next light novel volume."
      }
    ],
    "isekaiSubgenres": [
      "Transported",
      "Comedy",
      "Fantasy Adventure"
    ],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "14",
    "mangaContinueChapter": "80",
    "lightNovelContinueVolume": "8",
    "lightNovelContinueChapter": "Start of Volume 8",
    "webNovelContinueFrom": "Not recommended as the main route.",
    "recommendedContinueFrom": "Light Novel Volume 8. Optional: read the Volume 7 epilogue first if you want cut details.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The continuation point has been added from the researched popular-anime batch.",
    "researchPriority": "High",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "KonoSuba Season 3 reference",
        "type": "Episode / Adaptation Reference",
        "checked": true,
        "note": "Used to confirm Season 3 adapts Volumes 6–7."
      },
      {
        "name": "Epicstream guide",
        "type": "Anime Guide",
        "checked": true,
        "note": "Used to confirm Volume 8 and manga Chapter 80 continuation."
      },
      {
        "name": "KonoSuba Volume 8 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 8 is the next light novel volume."
      }
    ]
  },
  {
    "id": "sword-art-online",
    "title": "Sword Art Online",
    "alternativeTitles": [
      "SAO"
    ],
    "coverImage": "/covers/sword-art-online.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi",
      "Romance"
    ],
    "releaseYear": 2012,
    "animeStatus": "Multiple anime projects released",
    "totalEpisodes": 96,
    "totalSeasons": 4,
    "sourceType": "Light Novel",
    "animeEndsAt": "The anime covers multiple light novel arcs through Alicization / War of Underworld, with Progressive and film material handled separately.",
    "mangaContinueFrom": "Manga route is not recommended because the light novel is the original route.",
    "lightNovelContinueFrom": "Light Novel Volume 19 or Unital Ring depending on which anime/film material is counted. Needs verification before marking exact.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but the exact continuation depends on which SAO anime/film entries are included.",
    "adaptationNote": "SAO has TV arcs, films, and Progressive material, so keep this low-confidence until the database defines coverage precisely.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Sword Art Online",
        "episodes": 25,
        "releaseYear": 2012,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Sword Art Online II",
        "episodes": 24,
        "releaseYear": 2014,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Alicization",
        "episodes": 24,
        "releaseYear": 2018,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Alicization: War of Underworld",
        "episodes": 23,
        "releaseYear": 2019,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Sword Art Online anime/light novel arc overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Used as weak evidence only. Exact coverage needs later verification."
      }
    ],
    "isekaiSubgenres": [
      "Game World",
      "Dungeon"
    ],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "19 / Unital Ring route needs verification",
    "lightNovelContinueChapter": "Start of next unadapted light novel arc",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Use the light novel route. Continue around Volume 19 only if the entry is tracking through War of Underworld; verify film/Progressive coverage separately.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The continuation point is approximate. Start a little earlier if you want skipped or rearranged context.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Sword Art Online anime/light novel arc overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Used as weak evidence only. Exact coverage needs later verification."
      }
    ]
  },
  {
    "id": "no-game-no-life",
    "title": "No Game No Life",
    "alternativeTitles": [
      "NGNL"
    ],
    "coverImage": "/covers/no-game-no-life.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Game",
      "Comedy"
    ],
    "releaseYear": 2014,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 Episode 12. The TV anime adapts light novel volumes 1–3.",
    "mangaContinueFrom": "Manga route is not recommended because the manga adaptation is irregular and not the best continuation route.",
    "lightNovelContinueFrom": "Light Novel Volume 4",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 4 after the TV anime. The No Game No Life: Zero movie adapts a separate earlier volume/backstory and is not the direct continuation after Season 1.",
    "adaptationNote": "The TV anime adapts Volumes 1–3. Volume 4 is the next main story reading point.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2014,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "No Game No Life community guide",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm the anime adapts Volumes 1–3 and Volume 4 is the continuation."
      },
      {
        "name": "No Game No Life Light Novel reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm light novel volume structure."
      },
      {
        "name": "Yen Press listing",
        "type": "Publisher Reference",
        "checked": true,
        "note": "Used to confirm No Game No Life light novel publication route."
      }
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Game World"
    ],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "Light Novel Volume 4",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Starting from the beginning is recommended because the anime may skip, rearrange, compress, or diverge from source material.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "No Game No Life community guide",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm the anime adapts Volumes 1–3 and Volume 4 is the continuation."
      },
      {
        "name": "No Game No Life Light Novel reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm light novel volume structure."
      },
      {
        "name": "Yen Press listing",
        "type": "Publisher Reference",
        "checked": true,
        "note": "Used to confirm No Game No Life light novel publication route."
      }
    ]
  },
  {
    "id": "the-new-gate",
    "title": "The New Gate",
    "alternativeTitles": [
      "The New Gate"
    ],
    "coverImage": "/covers/the-new-gate.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Adventure",
      "Action"
    ],
    "releaseYear": 2024,
    "animeStatus": "Finished Season",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 has 12 episodes and adapts early light novel material through the first four novels.",
    "mangaContinueFrom": "Manga route is possible but the light novel is the cleaner continuation route.",
    "lightNovelContinueFrom": "Light Novel Volume 5",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 5 after the anime.",
    "adaptationNote": "Volume 5 is the practical post-anime light novel continuation point.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "The New Gate anime-to-light-novel guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Novel 5 as the post-anime continuation point."
      }
    ],
    "isekaiSubgenres": [
      "Game World",
      "Transported",
      "Fantasy Adventure"
    ],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "5",
    "lightNovelContinueChapter": "Start of Volume 5",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Light Novel Volume 5 after Season 1.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The New Gate anime-to-light-novel guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Novel 5 as the post-anime continuation point."
      }
    ]
  },
  {
    "id": "wise-mans-grandchild",
    "title": "Wise Man's Grandchild",
    "alternativeTitles": [
      "Kenja no Mago"
    ],
    "coverImage": "/covers/wise-mans-grandchild.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Magic",
      "Action"
    ],
    "releaseYear": 2019,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early source material, with the manga route around Chapter 20 but with cut/rearranged material.",
    "mangaContinueFrom": "Around Manga Chapter 20, but starting from the beginning is safer.",
    "lightNovelContinueFrom": "Start from Light Novel Volume 1 recommended for full source context.",
    "recommendedRoute": "Source from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Start from the beginning for best continuity.",
    "adaptationNote": "Manga Chapter 20 is a rough skip point, but source-from-beginning is the safer recommendation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Wise Man's Grandchild anime-to-manga community guide",
        "type": "Anime-to-Manga Reference",
        "checked": true,
        "note": "Used to estimate manga Chapter 20 and note that starting from the beginning is recommended."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Overpowered MC"
    ],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "20",
    "lightNovelContinueVolume": "1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Start from the beginning for the clean source route. If using the manga only, the anime ends around Chapter 20.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime cuts and rearranges characterization and events, so a direct jump is not ideal.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wise Man's Grandchild anime-to-manga community guide",
        "type": "Anime-to-Manga Reference",
        "checked": true,
        "note": "Used to estimate manga Chapter 20 and note that starting from the beginning is recommended."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "arifureta",
    "title": "Arifureta: From Commonplace to World's Strongest",
    "alternativeTitles": [
      "Arifureta Shokugyou de Sekai Saikyou"
    ],
    "coverImage": "/covers/arifureta.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Action",
      "Harem"
    ],
    "releaseYear": 2019,
    "animeStatus": "Finished Season",
    "totalEpisodes": 41,
    "totalSeasons": 3,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 3 Episode 16",
    "mangaContinueFrom": "Manga route is not recommended because the anime has passed the manga continuation point.",
    "lightNovelContinueFrom": "Light Novel Volume 11",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue with Light Novel Volume 11 after Season 3.",
    "adaptationNote": "Community references indicate Season 3 adapts Volumes 7–10, making Volume 11 the next reading point. Keep Medium confidence because exact anime-to-volume mapping should be checked manually before marking High.",
    "lastUpdated": "2026-06-20",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 13,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 16,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Arifureta community discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm Season 3 adapted around Volumes 7–10."
      },
      {
        "name": "Anime Corner",
        "type": "Anime News",
        "checked": true,
        "note": "Used to confirm Season 3 episode count and broadcast structure."
      },
      {
        "name": "Seven Seas Volume 11 listing",
        "type": "Publisher Reference",
        "checked": true,
        "note": "Used to confirm Volume 11 is a valid next light novel volume."
      }
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Dungeon",
      "Overpowered MC"
    ],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "11",
    "lightNovelContinueChapter": "Start of Volume 11",
    "webNovelContinueFrom": "Not recommended as the main route because the light novel is the polished route.",
    "recommendedContinueFrom": "Light Novel Volume 11",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Arifureta community discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm Season 3 adapted around Volumes 7–10."
      },
      {
        "name": "Anime Corner",
        "type": "Anime News",
        "checked": true,
        "note": "Used to confirm Season 3 episode count and broadcast structure."
      },
      {
        "name": "Seven Seas Volume 11 listing",
        "type": "Publisher Reference",
        "checked": true,
        "note": "Used to confirm Volume 11 is a valid next light novel volume."
      }
    ]
  },
  {
    "id": "danmachi",
    "title": "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
    "alternativeTitles": [
      "DanMachi",
      "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka"
    ],
    "coverImage": "/covers/danmachi.jpg",
    "genres": [
      "Fantasy",
      "Adventure",
      "Action",
      "Romance"
    ],
    "releaseYear": 2015,
    "animeStatus": "Finished Season",
    "totalEpisodes": 74,
    "totalSeasons": 5,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 5, after adapting through Light Novel Volume 18.",
    "mangaContinueFrom": "Manga route is not recommended because the main manga adaptation is far behind the anime.",
    "lightNovelContinueFrom": "Light Novel Volume 19",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue with Light Novel Volume 19 after Season 5, but keep this marked for verification because the anime is close to the current source material.",
    "adaptationNote": "Community references state Season 5 ends at the end of Volume 18, leaving Volume 19 as the next main novel point. Keep Medium confidence until cross-checked with an official adaptation chart.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 13,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 12,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4 split-cour",
        "episodes": 22,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 5,
        "seasonTitle": "Season 5",
        "episodes": 15,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "DanMachi community discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm Season 5 finishes around Volume 18 and Volume 19 is the next route."
      },
      {
        "name": "DanMachi Wiki",
        "type": "Franchise Reference",
        "checked": true,
        "note": "Used as a backup source for main series volume structure."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "19",
    "lightNovelContinueChapter": "Start of Volume 19",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Light Novel Volume 19 after Season 5.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "DanMachi community discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm Season 5 finishes around Volume 18 and Volume 19 is the next route."
      },
      {
        "name": "DanMachi Wiki",
        "type": "Franchise Reference",
        "checked": true,
        "note": "Used as a backup source for main series volume structure."
      }
    ]
  },
  {
    "id": "frieren-beyond-journeys-end",
    "title": "Frieren: Beyond Journey's End",
    "alternativeTitles": [
      "Sousou no Frieren",
      "Frieren"
    ],
    "coverImage": "/covers/frieren-beyond-journeys-end.jpg",
    "genres": [
      "Fantasy",
      "Adventure",
      "Drama",
      "Slice of Life"
    ],
    "releaseYear": 2023,
    "animeStatus": "Season 3 announced",
    "totalEpisodes": 38,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 Episode 10",
    "mangaContinueFrom": "Manga Chapter 61",
    "lightNovelContinueFrom": "Not applicable. The source material is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "After Season 1, continue from Chapter 61. If the website already includes Season 2, the continuation point needs a newer check.",
    "adaptationNote": "Season 1 is widely mapped to Chapters 1-60. Season 2 begins after Chapter 60, so Chapter 61 is the safe Season 1 continuation point. Database season data appears newer than this researched continuation point. Current anime ending point kept as Season 2 Episode 10; verify the latest adapted source chapter/volume before publishing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 28,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 10,
        "releaseYear": 2026,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 0,
        "releaseYear": 2027,
        "status": "Announced"
      }
    ],
    "dataSources": [
      {
        "name": "Frieren community guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 1 adapts through Chapter 60 and continuation starts at Chapter 61."
      },
      {
        "name": "GamesRadar Frieren Season 2 guide",
        "type": "Anime News / Season Guide",
        "checked": true,
        "note": "Used to confirm Season 2 starts after the mage exam material and begins around Chapter 61."
      },
      {
        "name": "Frieren Wiki Chapter 61",
        "type": "Chapter Reference",
        "checked": true,
        "note": "Used to confirm Chapter 61 follows the anime-covered Chapter 60 material."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 7",
    "mangaContinueChapter": "61",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 61 after Season 1. If Season 2 episodes are already included in the database, verify the latest adapted chapter before publishing.",
    "continuationStatus": "Verified for Season 1 / Needs update if Season 2 is included",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "High",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Frieren community guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 1 adapts through Chapter 60 and continuation starts at Chapter 61."
      },
      {
        "name": "GamesRadar Frieren Season 2 guide",
        "type": "Anime News / Season Guide",
        "checked": true,
        "note": "Used to confirm Season 2 starts after the mage exam material and begins around Chapter 61."
      },
      {
        "name": "Frieren Wiki Chapter 61",
        "type": "Chapter Reference",
        "checked": true,
        "note": "Used to confirm Chapter 61 follows the anime-covered Chapter 60 material."
      }
    ]
  },
  {
    "id": "the-apothecary-diaries",
    "title": "The Apothecary Diaries",
    "alternativeTitles": [
      "Kusuriya no Hitorigoto"
    ],
    "coverImage": "/covers/the-apothecary-diaries.jpg",
    "genres": [
      "Mystery",
      "Drama",
      "Historical",
      "Romance"
    ],
    "releaseYear": 2023,
    "animeStatus": "Season 3 announced",
    "totalEpisodes": 48,
    "totalSeasons": 3,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 Episode 24",
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route because the light novel is the original source and the manga adaptations can differ in pacing.",
    "lightNovelContinueFrom": "Light Novel Volume 5",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue with Light Novel Volume 5 after Season 2.",
    "adaptationNote": "Season 1 adapts the first two light novel volumes. Season 2 is expected to cover Volumes 3-4, making Volume 5 the next reading point. Database season data appears newer than this researched continuation point. Current anime ending point kept as Season 2 Episode 24; verify the latest adapted source chapter/volume before publishing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 24,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 24,
        "releaseYear": 2025,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3 split-cour",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "dataSources": [
      {
        "name": "TIME Apothecary Diaries explanation",
        "type": "Anime / Source Material Guide",
        "checked": true,
        "note": "Used to confirm Season 1 adapts Volumes 1-2 and Season 2 is expected to progress through Volumes 3-4."
      },
      {
        "name": "The Apothecary Diaries community guide",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm Volume 5 as the continuation after Season 2."
      },
      {
        "name": "The Apothecary Diaries Wiki Volume 5",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 5 exists as the next light novel volume."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "5",
    "lightNovelContinueChapter": "Start of Volume 5",
    "webNovelContinueFrom": "Not recommended as the main route because the light novel is the polished publication route.",
    "recommendedContinueFrom": "Light Novel Volume 5 after Season 2.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Volume 5 is the useful continuation point, but keep needsVerification true until the Season 2 endpoint is fully confirmed.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "TIME Apothecary Diaries explanation",
        "type": "Anime / Source Material Guide",
        "checked": true,
        "note": "Used to confirm Season 1 adapts Volumes 1-2 and Season 2 is expected to progress through Volumes 3-4."
      },
      {
        "name": "The Apothecary Diaries community guide",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm Volume 5 as the continuation after Season 2."
      },
      {
        "name": "The Apothecary Diaries Wiki Volume 5",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 5 exists as the next light novel volume."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "oshi-no-ko",
    "title": "Oshi no Ko",
    "alternativeTitles": [
      "My Star",
      "Oshi no Ko"
    ],
    "coverImage": "/covers/oshi-no-ko.jpg",
    "genres": [
      "Drama",
      "Mystery",
      "Idol",
      "Seinen"
    ],
    "releaseYear": 2023,
    "animeStatus": "Season 4 announced",
    "totalEpisodes": 35,
    "totalSeasons": 4,
    "sourceType": "Manga",
    "animeEndsAt": "Season 3 finale special",
    "mangaContinueFrom": "Manga Chapter 81",
    "lightNovelContinueFrom": "Not applicable as the main route. The source material is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "After Season 2, continue from Chapter 81.",
    "adaptationNote": "Season 2 concludes around Chapter 80. If the database includes later anime seasons, update this continuation point after checking the latest aired season. Database season data appears newer than this researched continuation point. Current anime ending point kept as Season 3 finale special; verify the latest adapted source chapter/volume before publishing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 11,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 13,
        "releaseYear": 2024,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 11,
        "releaseYear": 2026,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "dataSources": [
      {
        "name": "ONE Esports Oshi no Ko guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ends around Chapter 80."
      },
      {
        "name": "Oshi no Ko Wiki Chapter 80",
        "type": "Chapter Reference",
        "checked": true,
        "note": "Used to confirm Chapter 80 corresponds to anime Episode 24 and Chapter 81 follows it."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 9",
    "mangaContinueChapter": "81",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 81 after Season 2.",
    "continuationStatus": "Verified for Season 2 / Needs update if newer seasons are included",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "High",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "ONE Esports Oshi no Ko guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ends around Chapter 80."
      },
      {
        "name": "Oshi no Ko Wiki Chapter 80",
        "type": "Chapter Reference",
        "checked": true,
        "note": "Used to confirm Chapter 80 corresponds to anime Episode 24 and Chapter 81 follows it."
      }
    ]
  },
  {
    "id": "spy-x-family",
    "title": "Spy x Family",
    "alternativeTitles": [
      "SPYxFAMILY"
    ],
    "coverImage": "/covers/spy-x-family.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Family",
      "Slice of Life"
    ],
    "releaseYear": 2022,
    "animeStatus": "Finished Season",
    "totalEpisodes": 50,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "Season 3 Episode 13",
    "mangaContinueFrom": "Manga Volume 9, Chapter 61",
    "lightNovelContinueFrom": "Not applicable. The source material is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "After Season 2, continue from Chapter 61. If the database already includes Season 3, check the newer ending point.",
    "adaptationNote": "Season 2 ends around Chapter 60. Chapter 61 is the next manga chapter. The movie is not the main manga continuation. Database season data appears newer than this researched continuation point. Current anime ending point kept as Season 3 Episode 13; verify the latest adapted source chapter/volume before publishing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1 split-cour",
        "episodes": 25,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 13,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "ONE Esports Spy x Family guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ends with Volume 9, Chapter 60 and continuation starts at Chapter 61."
      },
      {
        "name": "Spy x Family Wiki Chapter 60",
        "type": "Chapter Reference",
        "checked": true,
        "note": "Used to confirm Chapter 60 navigation and Chapter 61 follows it."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "9",
    "mangaContinueChapter": "61",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Volume 9, Chapter 61 after Season 2.",
    "continuationStatus": "Verified for Season 2 / Needs update if Season 3 is included",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "ONE Esports Spy x Family guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ends with Volume 9, Chapter 60 and continuation starts at Chapter 61."
      },
      {
        "name": "Spy x Family Wiki Chapter 60",
        "type": "Chapter Reference",
        "checked": true,
        "note": "Used to confirm Chapter 60 navigation and Chapter 61 follows it."
      }
    ]
  },
  {
    "id": "blue-lock",
    "title": "Blue Lock",
    "alternativeTitles": [
      "Blue Lock"
    ],
    "coverImage": "/covers/blue-lock.jpg",
    "genres": [
      "Sports",
      "Drama",
      "Shonen"
    ],
    "releaseYear": 2022,
    "animeStatus": "Finished Season",
    "totalEpisodes": 38,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 Episode 14 / Episode 38 overall, after the U-20 Japan match arc.",
    "mangaContinueFrom": "Manga Volume 18, around Chapter 150. Chapter 151 is still transition material, and the Neo Egoist League begins after the U-20 arc.",
    "lightNovelContinueFrom": "Not applicable. The source material is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Volume 18 after Season 2. Starting at Chapter 150 is safest because it includes transition material after the U-20 match.",
    "adaptationNote": "Season 2 finishes the U-20 match arc. Chapter 150 is a safe continuation point, while Chapter 152 is closer to the next major arc start.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 24,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 14,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Anime Corner Blue Lock guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Volume 18 and Chapter 151 area after Season 2."
      },
      {
        "name": "Blue Lock community guide",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to cross-check Chapter 150 as a safe transition chapter."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "18",
    "mangaContinueChapter": "150",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Volume 18, Chapter 150. If the user wants to jump directly into the next major arc, start around Chapter 152 after the transition chapters.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Anime Corner Blue Lock guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Volume 18 and Chapter 151 area after Season 2."
      },
      {
        "name": "Blue Lock community guide",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to cross-check Chapter 150 as a safe transition chapter."
      }
    ]
  },
  {
    "id": "tokyo-revengers",
    "title": "Tokyo Revengers",
    "alternativeTitles": [
      "Tokyo Revengers"
    ],
    "coverImage": "/covers/tokyo-revengers.jpg",
    "genres": [
      "Action",
      "Drama",
      "Delinquents",
      "Time Travel"
    ],
    "releaseYear": 2021,
    "animeStatus": "Finished Season",
    "totalEpisodes": 50,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "Season 3 / Tenjiku Arc ends around Manga Chapter 185.",
    "mangaContinueFrom": "Manga Chapter 186",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue around Chapter 186 after Season 3.",
    "adaptationNote": "Exact anime-to-chapter mapping can vary by episode coverage, so keep Medium confidence.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 24,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Christmas Showdown Arc",
        "episodes": 13,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Tenjiku Arc",
        "episodes": 13,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Tokyo Revengers anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Tenjiku Arc continuation around Chapter 186."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 21",
    "mangaContinueChapter": "186",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 186 after Tenjiku Arc / Season 3.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Tokyo Revengers anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Tenjiku Arc continuation around Chapter 186."
      }
    ]
  },
  {
    "id": "mashle",
    "title": "Mashle: Magic and Muscles",
    "alternativeTitles": [
      "Mashle"
    ],
    "coverImage": "/covers/mashle.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Fantasy",
      "School"
    ],
    "releaseYear": 2023,
    "animeStatus": "Sequel announced",
    "totalEpisodes": 24,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 Episode 12",
    "mangaContinueFrom": "Manga Chapter 75",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Chapter 75 is a safe continuation after Season 2.",
    "adaptationNote": "The database lists multiple seasons, so recheck if a newer anime season has already adapted beyond Chapter 75. Database season data appears newer than this researched continuation point. Current anime ending point kept as Season 2 Episode 12; verify the latest adapted source chapter/volume before publishing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Sequel season",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "dataSources": [
      {
        "name": "Mashle anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 continuation around Chapter 75."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 9",
    "mangaContinueChapter": "75",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 75 after Season 2. Needs update if Season 3 is included.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The continuation point is approximate. Start a little earlier if you want skipped or rearranged context.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Mashle anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 continuation around Chapter 75."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "kaiju-no-8",
    "title": "Kaiju No. 8",
    "alternativeTitles": [
      "Kaijuu 8-gou"
    ],
    "coverImage": "/covers/kaiju-no-8.jpg",
    "genres": [
      "Action",
      "Sci-Fi",
      "Shonen",
      "Monsters"
    ],
    "releaseYear": 2024,
    "animeStatus": "Conclusion arc announced",
    "totalEpisodes": 23,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 Episode 11",
    "mangaContinueFrom": "After Season 1, continue around Manga Chapter 39. If Season 2 is included, verify the latest adapted chapter.",
    "lightNovelContinueFrom": "Not applicable as main route",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Chapter 39 is the usual post-Season-1 point.",
    "adaptationNote": "Because the database lists 2 seasons, this entry should be rechecked for newer anime coverage before marking verified. Database season data appears newer than this researched continuation point. Current anime ending point kept as Season 2 Episode 11; verify the latest adapted source chapter/volume before publishing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 11,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Kaiju No. 8 anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 1 continuation around Chapter 39."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 5",
    "mangaContinueChapter": "39",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 39 after Season 1. Needs update if Season 2 is included.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Kaiju No. 8 anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 1 continuation around Chapter 39."
      }
    ]
  },
  {
    "id": "dr-stone",
    "title": "Dr. Stone",
    "alternativeTitles": [
      "Dr. Stone"
    ],
    "coverImage": "/covers/dr-stone.jpg",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Comedy",
      "Shonen"
    ],
    "releaseYear": 2019,
    "animeStatus": "Final season airing",
    "totalEpisodes": 87,
    "totalSeasons": 4,
    "sourceType": "Manga",
    "animeEndsAt": "Season 4 / Science Future coverage depends on which part is included in the database.",
    "mangaContinueFrom": "If the database only tracks through Season 3, continue around Manga Chapter 143. If it tracks Science Future Part 1, continue around Chapter 171-172. If it tracks Science Future Part 2, continue around Chapter 199.",
    "lightNovelContinueFrom": "Not applicable. The source material is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "The correct chapter depends on which Science Future part the website counts.",
    "adaptationNote": "Dr. Stone has multiple final-season parts. Do not mark High confidence until the exact latest episode included in the database is confirmed.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 24,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Stone Wars",
        "episodes": 11,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "New World split-cour",
        "episodes": 22,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Science Future split-cour",
        "episodes": 30,
        "releaseYear": 2025,
        "status": "Airing"
      }
    ],
    "dataSources": [
      {
        "name": "Dr. Stone community continuation references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to compare Season 3, Science Future Part 1, and Science Future Part 2 continuation points."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Depends on latest anime part",
    "mangaContinueChapter": "143 / 171 / 199 depending on latest watched part",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Needs latest-season check. Use Chapter 199 only if Science Future Part 2 is included.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Dr. Stone community continuation references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to compare Season 3, Science Future Part 1, and Science Future Part 2 continuation points."
      }
    ]
  },
  {
    "id": "the-promised-neverland",
    "title": "The Promised Neverland",
    "alternativeTitles": [
      "Yakusoku no Neverland"
    ],
    "coverImage": "/covers/the-promised-neverland.jpg",
    "genres": [
      "Mystery",
      "Thriller",
      "Dark Fantasy",
      "Shonen"
    ],
    "releaseYear": 2019,
    "animeStatus": "Anime completed",
    "totalEpisodes": 23,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 diverges and heavily compresses manga material.",
    "mangaContinueFrom": "Start from Manga Chapter 1 recommended. If skipping Season 1 only, Chapter 38 is the next major manga point, but full manga route is safer.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Manga from the beginning is the safest route.",
    "adaptationNote": "Do not recommend continuing after Season 2 with a normal chapter jump.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 11,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "The Promised Neverland anime/manga divergence overview",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm Season 2 divergence and manga-from-beginning recommendation."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Volume 1 recommended / rough Season 1 skip point: Volume 5",
    "mangaContinueChapter": "Chapter 1 recommended / rough Season 1 skip point: Chapter 38",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start the manga from Chapter 1 because Season 2 diverges and compresses heavily. If only Season 1 is counted, Chapter 38 is the rough skip point.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "Season 2 diverges and compresses important manga material.",
    "continuationNote": "Starting from the beginning is recommended because the anime may skip, rearrange, compress, or diverge from source material.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Promised Neverland anime/manga divergence overview",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm Season 2 divergence and manga-from-beginning recommendation."
      }
    ]
  },
  {
    "id": "made-in-abyss",
    "title": "Made in Abyss",
    "alternativeTitles": [
      "Made in Abyss"
    ],
    "coverImage": "/covers/made-in-abyss.jpg",
    "genres": [
      "Adventure",
      "Dark Fantasy",
      "Mystery",
      "Drama"
    ],
    "releaseYear": 2017,
    "animeStatus": "Sequel announced",
    "totalEpisodes": 25,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 reaches the Chapter 60 adaptation point.",
    "mangaContinueFrom": "Manga Chapter 61",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 61 after Season 2.",
    "adaptationNote": "The Dawn of the Deep Soul movie is important before Season 2, but after Season 2 Chapter 61 is the continuation point.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 13,
        "releaseYear": 2017,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "The Golden City of the Scorching Sun",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Made in Abyss anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ends around Chapter 60."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 11",
    "mangaContinueChapter": "61",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 61 after Season 2.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The continuation point is approximate. Start a little earlier if you want skipped or rearranged context.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Made in Abyss anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ends around Chapter 60."
      }
    ]
  },
  {
    "id": "hells-paradise",
    "title": "Hell's Paradise",
    "alternativeTitles": [
      "Jigokuraku"
    ],
    "coverImage": "/covers/hells-paradise.jpg",
    "genres": [
      "Action",
      "Dark Fantasy",
      "Historical",
      "Shonen"
    ],
    "releaseYear": 2023,
    "animeStatus": "Finished Season",
    "totalEpisodes": 25,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 Episode 12",
    "mangaContinueFrom": "After Season 1, continue around Manga Chapter 45. If Season 2 is included, verify the latest adapted chapter.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Chapter 45 is a safe post-Season-1 continuation point.",
    "adaptationNote": "The current database lists 2 seasons, so the continuation point may be outdated if Season 2 data is already counted. Database season data appears newer than this researched continuation point. Current anime ending point kept as Season 2 Episode 12; verify the latest adapted source chapter/volume before publishing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 13,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2026,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Hell's Paradise anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 1 continuation around Chapter 45."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 5",
    "mangaContinueChapter": "45",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 45 after Season 1. Needs update if Season 2 is included.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The continuation point is approximate. Start a little earlier if you want skipped or rearranged context.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Hell's Paradise anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 1 continuation around Chapter 45."
      }
    ]
  },
  {
    "id": "fire-force",
    "title": "Fire Force",
    "alternativeTitles": [
      "Enen no Shouboutai"
    ],
    "coverImage": "/covers/fire-force.jpg",
    "genres": [
      "Action",
      "Supernatural",
      "Firefighters",
      "Shonen"
    ],
    "releaseYear": 2019,
    "animeStatus": "Anime completed",
    "totalEpisodes": 73,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "Season 3 Episode 25",
    "mangaContinueFrom": "After Season 2, continue around Manga Chapter 175. If final-season anime coverage is included, verify whether the anime completes the manga.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Chapter 175 is the post-Season-2 continuation point, but newer anime coverage changes this.",
    "adaptationNote": "The database currently suggests later anime coverage, so confirm the latest season before marking High confidence. Database season data appears newer than this researched continuation point. Current anime ending point kept as Season 3 Episode 25; verify the latest adapted source chapter/volume before publishing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 24,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 24,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Final Season split-cour",
        "episodes": 25,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Fire Force anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm post-Season-2 continuation around Chapter 175."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 20",
    "mangaContinueChapter": "175",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 175 after Season 2. Needs recheck if Season 3 / final season is included.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The anime appears to complete the main source route or has no required post-anime reading point.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Fire Force anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm post-Season-2 continuation around Chapter 175."
      }
    ]
  },
  {
    "id": "noragami",
    "title": "Noragami",
    "alternativeTitles": [
      "Noragami Aragoto"
    ],
    "coverImage": "/covers/noragami.jpg",
    "genres": [
      "Action",
      "Supernatural",
      "Comedy",
      "Drama"
    ],
    "releaseYear": 2014,
    "animeStatus": "Anime completed",
    "totalEpisodes": 25,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 / Aragoto reaches the Chapter 38 adaptation point.",
    "mangaContinueFrom": "Manga Chapter 39",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 39 after Aragoto.",
    "adaptationNote": "The anime adapts early manga material, and Chapter 39 is the common post-anime start.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2014,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Aragoto",
        "episodes": 13,
        "releaseYear": 2015,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Noragami anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 continuation around Chapter 39."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 10",
    "mangaContinueChapter": "39",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 39 after Season 2.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The continuation point is approximate. Start a little earlier if you want skipped or rearranged context.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Noragami anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 continuation around Chapter 39."
      }
    ]
  },
  {
    "id": "seraph-of-the-end",
    "title": "Seraph of the End",
    "alternativeTitles": [
      "Owari no Seraph"
    ],
    "coverImage": "/covers/seraph-of-the-end.jpg",
    "genres": [
      "Action",
      "Vampire",
      "Dark Fantasy",
      "Shonen"
    ],
    "releaseYear": 2015,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 reaches the Chapter 41 adaptation point.",
    "mangaContinueFrom": "Manga Chapter 42",
    "lightNovelContinueFrom": "Light novels exist as side/prequel material, not the direct anime continuation.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 42 after Season 2.",
    "adaptationNote": "Manga is the main continuation route. Light novels are side/prequel material.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Battle in Nagoya",
        "episodes": 12,
        "releaseYear": 2015,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Seraph of the End anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm continuation around Chapter 42."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 11",
    "mangaContinueChapter": "42",
    "lightNovelContinueVolume": "Not recommended as main route",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 42 after Season 2.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "The continuation point is approximate. Start a little earlier if you want skipped or rearranged context.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Seraph of the End anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm continuation around Chapter 42."
      }
    ]
  },
  {
    "id": "akame-ga-kill",
    "title": "Akame ga Kill!",
    "alternativeTitles": [
      "Akame ga Kill"
    ],
    "coverImage": "/covers/akame-ga-kill.jpg",
    "genres": [
      "Action",
      "Dark Fantasy",
      "Drama"
    ],
    "releaseYear": 2014,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime diverges from the manga and has its own ending.",
    "mangaContinueFrom": "Start from Manga Chapter 1 recommended.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Manga from the beginning is the best route.",
    "adaptationNote": "Do not provide a direct post-anime chapter jump.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 24,
        "releaseYear": 2014,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Akame ga Kill anime/manga divergence overview",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm anime divergence and manga-from-beginning recommendation."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "1",
    "mangaContinueChapter": "1",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start the manga from Chapter 1 because the anime diverges and has its own ending.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime diverges from the manga and has an anime-original route.",
    "continuationNote": "Starting from the beginning is recommended because the anime may skip, rearrange, compress, or diverge from source material.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Akame ga Kill anime/manga divergence overview",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm anime divergence and manga-from-beginning recommendation."
      }
    ]
  },
  {
    "id": "darling-in-the-franxx",
    "title": "Darling in the Franxx",
    "alternativeTitles": [
      "DarliFra"
    ],
    "coverImage": "/covers/darling-in-the-franxx.jpg",
    "genres": [
      "Original",
      "Mecha",
      "Romance",
      "Drama"
    ],
    "releaseYear": 2018,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Season 1 Episode 24",
    "mangaContinueFrom": "Original anime. No source continuation available.",
    "lightNovelContinueFrom": "Original anime. No source continuation available.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "This is an original anime, so there is no source continuation after the anime.",
    "adaptationNote": "Original anime. No source continuation available.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 24,
        "releaseYear": 2018,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Official anime website",
        "type": "Official",
        "checked": false,
        "note": "Unchecked placeholder retained; verify later if needed against the official anime site or production announcement before publishing."
      },
      {
        "name": "Licensed publisher or official streaming listing",
        "type": "Licensed",
        "checked": false,
        "note": "Unchecked placeholder retained; verify later if needed episode count, season status, and availability notes against licensed information."
      },
      {
        "name": "Trusted anime database or episode list reference",
        "type": "Episode List",
        "checked": false,
        "note": "Use as a fallback reference when official sources are unavailable."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "No source continuation available.",
    "continuationStatus": "Anime Original",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Original anime. No manga, light novel, or web novel continuation is needed.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Official anime website",
        "type": "Official",
        "checked": false,
        "note": "Unchecked placeholder retained; verify later if needed against the official anime site or production announcement before publishing."
      },
      {
        "name": "Licensed publisher or official streaming listing",
        "type": "Licensed",
        "checked": false,
        "note": "Unchecked placeholder retained; verify later if needed episode count, season status, and availability notes against licensed information."
      },
      {
        "name": "Trusted anime database or episode list reference",
        "type": "Episode List",
        "checked": false,
        "note": "Use as a fallback reference when official sources are unavailable."
      }
    ]
  },
  {
    "id": "violet-evergarden",
    "title": "Violet Evergarden",
    "alternativeTitles": [
      "Violet Evergarden"
    ],
    "coverImage": "/covers/violet-evergarden.jpg",
    "genres": [
      "Drama",
      "Fantasy",
      "Slice of Life"
    ],
    "releaseYear": 2018,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "The anime and movies complete their own anime route, while the light novel has structural and story differences.",
    "mangaContinueFrom": "Not applicable. The main source is light novel.",
    "lightNovelContinueFrom": "Start from Light Novel Volume 1 recommended.",
    "recommendedRoute": "Light Novel from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Anime route is complete; light novel route is best from the beginning.",
    "adaptationNote": "Treat the light novels as a source route with differences, not a simple continuation after the anime.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 13,
        "releaseYear": 2018,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Violet Evergarden light novel/anime comparison",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm the novel route differs enough to recommend starting from the beginning."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No anime continuation is needed after the anime/movie route. If reading the source, start the light novel from Volume 1 because the anime and novel differ.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime and light novel differ in structure and content, so a direct continuation point is not reliable.",
    "continuationNote": "Starting from the beginning is recommended because the anime may skip, rearrange, compress, or diverge from source material.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Violet Evergarden light novel/anime comparison",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm the novel route differs enough to recommend starting from the beginning."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "your-lie-in-april",
    "title": "Your Lie in April",
    "alternativeTitles": [
      "Shigatsu wa Kimi no Uso"
    ],
    "coverImage": "/covers/your-lie-in-april.jpg",
    "genres": [
      "Drama",
      "Romance",
      "Music",
      "School"
    ],
    "releaseYear": 2014,
    "animeStatus": "Anime completed",
    "totalEpisodes": 22,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime adapts the complete main manga story.",
    "mangaContinueFrom": "No main continuation needed. Manga can be read from the beginning for the source version.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The anime covers the complete main story.",
    "adaptationNote": "Manga is optional for source reading, not required continuation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 22,
        "releaseYear": 2014,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Your Lie in April anime/manga completion overview",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm complete anime adaptation."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No continuation needed. The anime completes the main manga story.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Starting from the beginning is recommended because the anime may skip, rearrange, compress, or diverge from source material.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Your Lie in April anime/manga completion overview",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm complete anime adaptation."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "kaguya-sama-love-is-war",
    "title": "Kaguya-sama: Love is War",
    "alternativeTitles": [
      "Kaguya-sama wa Kokurasetai"
    ],
    "coverImage": "/covers/kaguya-sama-love-is-war.jpg",
    "genres": [
      "Romance",
      "Comedy",
      "School",
      "Seinen"
    ],
    "releaseYear": 2019,
    "animeStatus": "Anime completed or paused",
    "totalEpisodes": 37,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "Season 3 plus The First Kiss That Never Ends covers major confession arc material around the middle of the manga.",
    "mangaContinueFrom": "Around Manga Chapter 152-160 depending on whether the movie is included. Starting from the beginning is recommended for skipped chapters.",
    "lightNovelContinueFrom": "Not applicable as main route",
    "recommendedRoute": "Manga from beginning / Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "For full experience, read from the beginning. For direct continuation, use the Chapter 152-160 area depending on movie coverage.",
    "adaptationNote": "The continuation point depends heavily on whether The First Kiss That Never Ends is counted.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Ultra Romantic",
        "episodes": 13,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 0,
        "seasonTitle": "Special: The First Kiss Never Ends",
        "episodes": 4,
        "releaseYear": 2022,
        "status": "Special"
      }
    ],
    "dataSources": [
      {
        "name": "Kaguya-sama anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate continuation and skipped-chapter caveat."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 16",
    "mangaContinueChapter": "152",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start from the beginning for skipped comedy chapters, or around Chapter 152-160 after watching Season 3 and the movie.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime skips and rearranges many comedy chapters.",
    "continuationNote": "Starting from the beginning is recommended because the anime may skip, rearrange, compress, or diverge from source material.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Kaguya-sama anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate continuation and skipped-chapter caveat."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "rent-a-girlfriend",
    "title": "Rent-a-Girlfriend",
    "alternativeTitles": [
      "Kanojo, Okarishimasu",
      "Kanokari"
    ],
    "coverImage": "/covers/rent-a-girlfriend.jpg",
    "genres": [
      "Romance",
      "Comedy",
      "Drama"
    ],
    "releaseYear": 2020,
    "animeStatus": "Finished Season",
    "totalEpisodes": 48,
    "totalSeasons": 4,
    "sourceType": "Manga",
    "animeEndsAt": "Season 4 Episode 12",
    "mangaContinueFrom": "Manga Chapter 168 after Season 3.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Chapter 168 is the standard post-Season-3 continuation point.",
    "adaptationNote": "The database lists 4 seasons, so verify whether Season 4 has already adapted beyond Chapter 168. Database season data appears newer than this researched continuation point. Current anime ending point kept as Season 4 Episode 12; verify the latest adapted source chapter/volume before publishing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4",
        "episodes": 12,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Rent-a-Girlfriend anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate continuation around Chapter 168 after Season 3."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 20",
    "mangaContinueChapter": "168",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 168 after Season 3. Needs update if Season 4 is included.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Rent-a-Girlfriend anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate continuation around Chapter 168 after Season 3."
      }
    ]
  },
  {
    "id": "my-dress-up-darling",
    "title": "My Dress-Up Darling",
    "alternativeTitles": [
      "Sono Bisque Doll wa Koi wo Suru"
    ],
    "coverImage": "/covers/my-dress-up-darling.jpg",
    "genres": [
      "Romance",
      "Comedy",
      "Slice of Life",
      "Cosplay"
    ],
    "releaseYear": 2022,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 Episode 12 reaches the Chapter 86 adaptation point.",
    "mangaContinueFrom": "Manga Chapter 87",
    "lightNovelContinueFrom": "Not applicable. The source material is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 87 after Season 2.",
    "adaptationNote": "Season 2 ends around Chapter 86. Later manga volumes contain major remaining material, so Chapter 87 is the practical continuation point.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Game Rant My Dress-Up Darling guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ends around Chapter 86."
      },
      {
        "name": "GamesRadar My Dress-Up Darling Season 2 article",
        "type": "Anime / Manga Feature",
        "checked": true,
        "note": "Used to confirm there is unadapted material in later manga volumes after Season 2."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 11",
    "mangaContinueChapter": "87",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 87 after Season 2.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Game Rant My Dress-Up Darling guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ends around Chapter 86."
      },
      {
        "name": "GamesRadar My Dress-Up Darling Season 2 article",
        "type": "Anime / Manga Feature",
        "checked": true,
        "note": "Used to confirm there is unadapted material in later manga volumes after Season 2."
      }
    ]
  },
  {
    "id": "rascal-does-not-dream-of-bunny-girl-senpai",
    "title": "Rascal Does Not Dream of Bunny Girl Senpai",
    "alternativeTitles": [
      "Seishun Buta Yarou",
      "AoButa"
    ],
    "coverImage": "/covers/rascal-does-not-dream-of-bunny-girl-senpai.jpg",
    "genres": [
      "Romance",
      "Drama",
      "Supernatural",
      "School"
    ],
    "releaseYear": 2018,
    "animeStatus": "Anime continuing with film finale",
    "totalEpisodes": 26,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "The TV anime, movies, and later anime projects adapt different light novel volumes. The correct continuation depends on which movie/season the viewer has watched.",
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "If only the 2018 TV anime is watched, continue with Volume 6. If Dreaming Girl and later movies are watched, use the next unadapted volume after the latest watched entry. If the 2025/2026 anime projects are included, recheck before publishing.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continuation depends on watched movie/season coverage.",
    "adaptationNote": "This franchise has TV anime, multiple movies, and later anime projects. A single static continuation point can be wrong unless the watched coverage is known.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Bunny Girl Senpai",
        "episodes": 13,
        "releaseYear": 2018,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Santa Claus",
        "episodes": 13,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Rascal Does Not Dream light novel/anime overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm the light novel route and later anime/movie coverage."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "TV only: 6 / latest anime projects: needs verification",
    "lightNovelContinueChapter": "Start of the next unadapted volume",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Use the light novel route, but ask which anime/movie entries were watched. TV-only continuation is Volume 6; newer movie/TV coverage needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Rascal Does Not Dream light novel/anime overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm the light novel route and later anime/movie coverage."
      }
    ]
  },
  {
    "id": "the-quintessential-quintuplets",
    "title": "The Quintessential Quintuplets",
    "alternativeTitles": [
      "Go-Toubun no Hanayome",
      "5-toubun no Hanayome"
    ],
    "coverImage": "/covers/the-quintessential-quintuplets.jpg",
    "genres": [
      "Romance",
      "Comedy",
      "School",
      "Harem"
    ],
    "releaseYear": 2019,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "The anime plus movie completes the main manga story.",
    "mangaContinueFrom": "No main continuation needed after the movie. Optional: read from beginning or read skipped chapters.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga from beginning or skipped chapters",
    "confidenceLevel": "High",
    "spoilerFreeNote": "No direct continuation is needed after the movie.",
    "adaptationNote": "The anime compresses/skips content, so reading the manga from the beginning is optional for full details.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Quintessential Quintuplets anime/movie completion references",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm main story completion."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "The main story is complete after the movie. Optional skipped-content route: read the manga separately.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Starting from the beginning is recommended because the anime may skip, rearrange, compress, or diverge from source material.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Quintessential Quintuplets anime/movie completion references",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm main story completion."
      }
    ]
  },
  {
    "id": "komi-cant-communicate",
    "title": "Komi Can't Communicate",
    "alternativeTitles": [
      "Komi-san wa, Komyushou desu."
    ],
    "coverImage": "/covers/komi-cant-communicate.jpg",
    "genres": [
      "Comedy",
      "School",
      "Slice of Life",
      "Romance"
    ],
    "releaseYear": 2021,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 ends around Manga Chapter 129.",
    "mangaContinueFrom": "Manga Chapter 130",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue around Chapter 130 after Season 2.",
    "adaptationNote": "Some chapters are short and adapted/reordered, so starting a few chapters earlier is optional.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Komi anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Season 2 continuation around Chapter 130."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 10",
    "mangaContinueChapter": "130",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 130 after Season 2.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Starting from the beginning is recommended because the anime may skip, rearrange, compress, or diverge from source material.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Komi anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Season 2 continuation around Chapter 130."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "call-of-the-night",
    "title": "Call of the Night",
    "alternativeTitles": [
      "Yofukashi no Uta"
    ],
    "coverImage": "/covers/call-of-the-night.jpg",
    "genres": [
      "Romance",
      "Supernatural",
      "Vampire",
      "Slice of Life"
    ],
    "releaseYear": 2022,
    "animeStatus": "Finished Season",
    "totalEpisodes": 25,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 Episode 12",
    "mangaContinueFrom": "Manga Chapter 47 after Season 1.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Chapter 47 is the post-Season-1 continuation point.",
    "adaptationNote": "The database lists 2 seasons, so verify if the newest anime season has already adapted past Chapter 47. Database season data appears newer than this researched continuation point. Current anime ending point kept as Season 2 Episode 12; verify the latest adapted source chapter/volume before publishing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 13,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "dataSources": [
      {
        "name": "Call of the Night anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 1 continuation around Chapter 47."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Real Local Cover",
    "coverCredit": "Local project cover asset in public/covers.",
    "coverNeedsUpdate": false,
    "mangaContinueVolume": "Around Volume 5",
    "mangaContinueChapter": "47",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 47 after Season 1. Needs update if Season 2 is included.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Call of the Night anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 1 continuation around Chapter 47."
      }
    ]
  },
  {
    "id": "attack-on-titan",
    "title": "Attack on Titan",
    "alternativeTitles": [
      "Shingeki no Kyojin",
      "AoT"
    ],
    "coverImage": "/covers/attack-on-titan.jpg",
    "genres": [
      "Action",
      "Dark Fantasy",
      "Drama",
      "Mystery"
    ],
    "releaseYear": 2013,
    "animeStatus": "Anime completed",
    "totalEpisodes": 89,
    "totalSeasons": 4,
    "sourceType": "Manga",
    "animeEndsAt": "The anime adapts the main manga story through the ending.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 25,
        "releaseYear": 2013,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2017,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3 split-cour",
        "episodes": 22,
        "releaseYear": 2018,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Final Season plus final specials",
        "episodes": 30,
        "releaseYear": 2020,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Anime completes the main manga story. Optional: read the manga from Chapter 1 for the original pacing, or read side stories separately.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The anime completes the main story. Manga is optional if the user wants the original version.",
    "adaptationNote": "There is no post-anime main continuation because the anime reaches the manga ending.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Attack on Titan manga/anime ending references",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm the anime adapts the main manga ending."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No main manga continuation needed. The anime completes the main story.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Attack on Titan manga/anime ending references",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm the anime adapts the main manga ending."
      }
    ]
  },
  {
    "id": "hunter-x-hunter-2011",
    "title": "Hunter x Hunter",
    "alternativeTitles": [
      "Hunter x Hunter 2011",
      "HxH"
    ],
    "coverImage": "/covers/hunter-x-hunter-2011.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Shonen"
    ],
    "releaseYear": 2011,
    "animeStatus": "Anime completed",
    "totalEpisodes": 148,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "2011 anime Episode 148 ends at the end of the Election Arc.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "2011 TV series",
        "episodes": 148,
        "releaseYear": 2011,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 340",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 340 for the post-anime manga story.",
    "adaptationNote": "The manga continues after the 2011 anime, but release pace is irregular.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Hunter x Hunter anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Episode 148 leads into Chapter 340."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Volume 32",
    "mangaContinueChapter": "340",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 340 after the 2011 anime.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Hunter x Hunter anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Episode 148 leads into Chapter 340."
      }
    ]
  },
  {
    "id": "naruto",
    "title": "Naruto",
    "alternativeTitles": [
      "Naruto"
    ],
    "coverImage": "/covers/naruto.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Ninja",
      "Shonen"
    ],
    "releaseYear": 2002,
    "animeStatus": "Anime completed",
    "totalEpisodes": 220,
    "totalSeasons": 5,
    "sourceType": "Manga",
    "animeEndsAt": "Original Naruto anime ends before Naruto Shippuden / Part II.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 57,
        "releaseYear": 2002,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 43,
        "releaseYear": 2003,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 41,
        "releaseYear": 2004,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4",
        "episodes": 42,
        "releaseYear": 2005,
        "status": "Finished"
      },
      {
        "seasonNumber": 5,
        "seasonTitle": "Season 5",
        "episodes": 37,
        "releaseYear": 2006,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 245, or continue with Naruto Shippuden Episode 1.",
    "lightNovelContinueFrom": "Not applicable as main route",
    "recommendedRoute": "Anime sequel / Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The direct continuation is Naruto Shippuden or Manga Chapter 245.",
    "adaptationNote": "Some late original Naruto episodes are filler, so users can move to Shippuden after the canon transition.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Naruto Part I / Part II references",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm Part II starts at Chapter 245."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Volume 28",
    "mangaContinueChapter": "245",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Watch Naruto Shippuden Episode 1 or read Manga Chapter 245.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Naruto Part I / Part II references",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm Part II starts at Chapter 245."
      }
    ]
  },
  {
    "id": "naruto-shippuden",
    "title": "Naruto Shippuden",
    "alternativeTitles": [
      "Naruto: Shippuden"
    ],
    "coverImage": "/covers/naruto-shippuden.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Ninja",
      "Shonen"
    ],
    "releaseYear": 2007,
    "animeStatus": "Anime completed",
    "totalEpisodes": 500,
    "totalSeasons": 21,
    "sourceType": "Manga",
    "animeEndsAt": "Naruto Shippuden completes the main Naruto manga story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 32,
        "releaseYear": 2007,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 21,
        "releaseYear": 2007,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 18,
        "releaseYear": 2008,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4",
        "episodes": 17,
        "releaseYear": 2008,
        "status": "Finished"
      },
      {
        "seasonNumber": 5,
        "seasonTitle": "Season 5",
        "episodes": 24,
        "releaseYear": 2008,
        "status": "Finished"
      },
      {
        "seasonNumber": 6,
        "seasonTitle": "Season 6",
        "episodes": 31,
        "releaseYear": 2009,
        "status": "Finished"
      },
      {
        "seasonNumber": 7,
        "seasonTitle": "Season 7",
        "episodes": 8,
        "releaseYear": 2010,
        "status": "Finished"
      },
      {
        "seasonNumber": 8,
        "seasonTitle": "Season 8",
        "episodes": 24,
        "releaseYear": 2010,
        "status": "Finished"
      },
      {
        "seasonNumber": 9,
        "seasonTitle": "Season 9",
        "episodes": 21,
        "releaseYear": 2010,
        "status": "Finished"
      },
      {
        "seasonNumber": 10,
        "seasonTitle": "Season 10",
        "episodes": 25,
        "releaseYear": 2011,
        "status": "Finished"
      },
      {
        "seasonNumber": 11,
        "seasonTitle": "Season 11",
        "episodes": 21,
        "releaseYear": 2011,
        "status": "Finished"
      },
      {
        "seasonNumber": 12,
        "seasonTitle": "Season 12",
        "episodes": 33,
        "releaseYear": 2012,
        "status": "Finished"
      },
      {
        "seasonNumber": 13,
        "seasonTitle": "Season 13",
        "episodes": 20,
        "releaseYear": 2012,
        "status": "Finished"
      },
      {
        "seasonNumber": 14,
        "seasonTitle": "Season 14",
        "episodes": 25,
        "releaseYear": 2013,
        "status": "Finished"
      },
      {
        "seasonNumber": 15,
        "seasonTitle": "Season 15",
        "episodes": 28,
        "releaseYear": 2013,
        "status": "Finished"
      },
      {
        "seasonNumber": 16,
        "seasonTitle": "Season 16",
        "episodes": 13,
        "releaseYear": 2014,
        "status": "Finished"
      },
      {
        "seasonNumber": 17,
        "seasonTitle": "Season 17",
        "episodes": 11,
        "releaseYear": 2014,
        "status": "Finished"
      },
      {
        "seasonNumber": 18,
        "seasonTitle": "Season 18",
        "episodes": 21,
        "releaseYear": 2014,
        "status": "Finished"
      },
      {
        "seasonNumber": 19,
        "seasonTitle": "Season 19",
        "episodes": 20,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 20,
        "seasonTitle": "Season 20",
        "episodes": 66,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 21,
        "seasonTitle": "Season 21",
        "episodes": 21,
        "releaseYear": 2016,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Main manga story is completed. Optional sequel route: Boruto manga/anime.",
    "lightNovelContinueFrom": "Optional post-series novels exist, but they are side/bridge material rather than the main continuation.",
    "recommendedRoute": "Sequel series",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The main Naruto manga story is complete. Boruto is the sequel path.",
    "adaptationNote": "Post-Shippuden novels and The Last can be watched/read for bridge content, but Boruto is the main sequel.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Naruto manga/anime completion references",
        "type": "Franchise Reference",
        "checked": true,
        "note": "Used to confirm Shippuden completes the original manga story."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Optional novels",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Boruto is the sequel route after Naruto Shippuden.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Naruto manga/anime completion references",
        "type": "Franchise Reference",
        "checked": true,
        "note": "Used to confirm Shippuden completes the original manga story."
      }
    ]
  },
  {
    "id": "boruto-naruto-next-generations",
    "title": "Boruto: Naruto Next Generations",
    "alternativeTitles": [
      "Boruto"
    ],
    "coverImage": "/covers/boruto-naruto-next-generations.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Ninja",
      "Shonen"
    ],
    "releaseYear": 2017,
    "animeStatus": "Anime paused after Part 1",
    "totalEpisodes": 293,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Episode 293 is the end of Boruto Part 1 anime.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Part 1 TV run",
        "episodes": 293,
        "releaseYear": 2017,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 68 after Episode 293.",
    "lightNovelContinueFrom": "Light novels exist but are not the main route.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 68 after the anime's Part 1 ending.",
    "adaptationNote": "Boruto anime has many anime-original episodes, but the direct manga continuation after Episode 293 is around Chapter 68.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Boruto Episode 293 / Part 1 reference",
        "type": "Episode Reference",
        "checked": true,
        "note": "Used to confirm Episode 293 is the end of Part 1."
      },
      {
        "name": "Boruto anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm continuation at Chapter 68."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "68",
    "lightNovelContinueVolume": "Not recommended as main route",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 68 after Episode 293.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Boruto Episode 293 / Part 1 reference",
        "type": "Episode Reference",
        "checked": true,
        "note": "Used to confirm Episode 293 is the end of Part 1."
      },
      {
        "name": "Boruto anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm continuation at Chapter 68."
      }
    ]
  },
  {
    "id": "bleach",
    "title": "Bleach",
    "alternativeTitles": [
      "Bleach: Thousand-Year Blood War"
    ],
    "coverImage": "/covers/bleach.jpg",
    "genres": [
      "Action",
      "Supernatural",
      "Shonen"
    ],
    "releaseYear": 2004,
    "animeStatus": "Final arc anime in progress or recent",
    "totalEpisodes": 418,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Thousand-Year Blood War latest endpoint needs verification",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Original TV series",
        "episodes": 366,
        "releaseYear": 2004,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Thousand-Year Blood War split-cour",
        "episodes": 52,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "After original Episode 366, continue at Manga Chapter 480. If Thousand-Year Blood War anime is fully included, the anime may complete the main manga story.",
    "lightNovelContinueFrom": "Light novels exist but are not the direct main manga continuation.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Chapter 480 is the post-original-anime continuation point.",
    "adaptationNote": "TYBW anime changes the continuation logic. Keep needsVerification true if the database includes TYBW episodes. Database season data appears newer than this researched continuation point. Current anime ending point kept as Thousand-Year Blood War latest endpoint needs verification; verify the latest adapted source chapter/volume before publishing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Bleach anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm original anime continuation at Chapter 480."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Volume 55",
    "mangaContinueChapter": "480",
    "lightNovelContinueVolume": "Not recommended as main route",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "If only the original anime is watched, continue from Manga Chapter 480. If TYBW is watched, verify the latest adapted episode.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Bleach anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm original anime continuation at Chapter 480."
      }
    ]
  },
  {
    "id": "one-piece",
    "title": "One Piece",
    "alternativeTitles": [
      "One Piece"
    ],
    "coverImage": "/covers/one-piece.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Shonen"
    ],
    "releaseYear": 1999,
    "animeStatus": "Airing",
    "totalEpisodes": 0,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "One Piece is ongoing. The anime-to-manga continuation point changes often with each new episode.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Ongoing TV series",
        "episodes": 0,
        "releaseYear": 1999,
        "status": "Airing"
      }
    ],
    "mangaContinueFrom": "Use latest episode-to-chapter mapping before publishing a static chapter.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga with latest episode mapping",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Use latest episode mapping because One Piece changes weekly.",
    "adaptationNote": "This entry should stay dynamic. A static chapter will become outdated quickly.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "One Piece current episode-to-chapter mapping requirement",
        "type": "Current Anime / Manga Reference",
        "checked": false,
        "note": "This entry intentionally uses a dynamic latest-episode mapping rule instead of a fixed chapter."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Needs latest episode mapping",
    "mangaContinueChapter": "Needs latest episode mapping",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Do not use a fixed chapter. Check the latest aired episode and match it to the manga chapter before publishing.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "One Piece current episode-to-chapter mapping requirement",
        "type": "Current Anime / Manga Reference",
        "checked": false,
        "note": "This entry intentionally uses a dynamic latest-episode mapping rule instead of a fixed chapter."
      }
    ]
  },
  {
    "id": "fairy-tail",
    "title": "Fairy Tail",
    "alternativeTitles": [
      "Fairy Tail"
    ],
    "coverImage": "/covers/fairy-tail.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Shonen"
    ],
    "releaseYear": 2009,
    "animeStatus": "Anime completed",
    "totalEpisodes": 328,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "The main Fairy Tail anime completes the original manga story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Fairy Tail",
        "episodes": 175,
        "releaseYear": 2009,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Fairy Tail 2014",
        "episodes": 102,
        "releaseYear": 2014,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Final Series",
        "episodes": 51,
        "releaseYear": 2018,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Original manga story is completed by the anime. Continue with Fairy Tail: 100 Years Quest manga Chapter 1 for sequel material.",
    "lightNovelContinueFrom": "Not applicable as main route",
    "recommendedRoute": "Manga sequel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The original story is complete. The sequel route is 100 Years Quest.",
    "adaptationNote": "Do not continue within the original manga after the anime; use the sequel manga instead.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Fairy Tail manga and sequel references",
        "type": "Manga / Sequel Reference",
        "checked": true,
        "note": "Used to confirm main anime completion and 100 Years Quest sequel route."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "100 Years Quest Volume 1",
    "mangaContinueChapter": "100 Years Quest Chapter 1",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Continue with Fairy Tail: 100 Years Quest after finishing the main anime.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Fairy Tail manga and sequel references",
        "type": "Manga / Sequel Reference",
        "checked": true,
        "note": "Used to confirm main anime completion and 100 Years Quest sequel route."
      }
    ]
  },
  {
    "id": "fullmetal-alchemist-brotherhood",
    "title": "Fullmetal Alchemist: Brotherhood",
    "alternativeTitles": [
      "Hagane no Renkinjutsushi: Fullmetal Alchemist",
      "FMAB"
    ],
    "coverImage": "/covers/fullmetal-alchemist-brotherhood.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Drama"
    ],
    "releaseYear": 2009,
    "animeStatus": "Anime completed",
    "totalEpisodes": 64,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Episode 64",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 64,
        "releaseYear": 2009,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Anime completes the main manga story; no post-anime source continuation needed.",
    "lightNovelContinueFrom": "Not available yet",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The TV anime completes the main manga story, so there is no required post-anime reading point.",
    "adaptationNote": "Brotherhood is described as a faithful adaptation that directly follows the entire original manga story. Optional reading can start from the manga beginning for comparison.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Wikipedia: Fullmetal Alchemist: Brotherhood",
        "type": "Database",
        "checked": true,
        "note": "Confirmed 64 episodes and faithful adaptation of the complete manga story."
      },
      {
        "name": "Wikipedia: List of Fullmetal Alchemist: Brotherhood episodes",
        "type": "Episode Reference",
        "checked": true,
        "note": "Confirmed full episode count and complete-story adaptation framing."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "Anime completes the main manga story; no post-anime source continuation needed.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "The anime appears to complete the main source route or has no required post-anime reading point.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wikipedia: Fullmetal Alchemist: Brotherhood",
        "type": "Database",
        "checked": true,
        "note": "Confirmed 64 episodes and faithful adaptation of the complete manga story."
      },
      {
        "name": "Wikipedia: List of Fullmetal Alchemist: Brotherhood episodes",
        "type": "Episode Reference",
        "checked": true,
        "note": "Confirmed full episode count and complete-story adaptation framing."
      }
    ]
  },
  {
    "id": "haikyuu",
    "title": "Haikyuu!!",
    "alternativeTitles": [
      "Haikyu!!"
    ],
    "coverImage": "/covers/haikyuu.jpg",
    "genres": [
      "Sports",
      "School",
      "Comedy",
      "Shonen"
    ],
    "releaseYear": 2014,
    "animeStatus": "Movie continuation released",
    "totalEpisodes": 85,
    "totalSeasons": 4,
    "sourceType": "Manga",
    "animeEndsAt": "Season 4 Episode 25 ends around Manga Chapter 292.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 25,
        "releaseYear": 2014,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 25,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Karasuno High vs Shiratorizawa Academy",
        "episodes": 10,
        "releaseYear": 2016,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "To the Top split-cour",
        "episodes": 25,
        "releaseYear": 2020,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 293 after Season 4. If the user watched the Final movies, verify the newer movie coverage before publishing.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Chapter 293 is the standard continuation after Season 4.",
    "adaptationNote": "The Final movies adapt later material, so do not use Chapter 293 if the user has already watched those movies.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Epicstream Haikyuu manga continuation guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 4 continuation at Chapter 293."
      },
      {
        "name": "AnimeEverything Haikyuu guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to cross-check Season 4 ending at Chapter 292."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Volume 33",
    "mangaContinueChapter": "293",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 293 after Season 4. Recheck if Final movie coverage is included.",
    "continuationStatus": "Verified for Season 4 / Needs update if movies included",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Epicstream Haikyuu manga continuation guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 4 continuation at Chapter 293."
      },
      {
        "name": "AnimeEverything Haikyuu guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to cross-check Season 4 ending at Chapter 292."
      }
    ]
  },
  {
    "id": "kurokos-basketball",
    "title": "Kuroko's Basketball",
    "alternativeTitles": [
      "Kuroko no Basket"
    ],
    "coverImage": "/covers/kurokos-basketball.jpg",
    "genres": [
      "Sports",
      "School",
      "Comedy",
      "Shonen"
    ],
    "releaseYear": 2012,
    "animeStatus": "Anime completed",
    "totalEpisodes": 75,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "The three-season anime completes the main manga story. The Last Game movie adapts Extra Game sequel material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 25,
        "releaseYear": 2012,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 25,
        "releaseYear": 2013,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 25,
        "releaseYear": 2015,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No main continuation needed after the TV anime. Optional: read Kuroko's Basketball: Extra Game or watch Last Game.",
    "lightNovelContinueFrom": "Not applicable as main route.",
    "recommendedRoute": "No source continuation / Optional sequel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The main story is complete after the TV anime.",
    "adaptationNote": "Extra Game is sequel material, not a missing continuation from the main series.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Kuroko's Basketball manga/anime completion reference",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm main story completion and Extra Game route."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Extra Game optional",
    "mangaContinueChapter": "Extra Game Chapter 1 optional",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Main story complete. Optional sequel: Extra Game / Last Game.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Kuroko's Basketball manga/anime completion reference",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm main story completion and Extra Game route."
      }
    ]
  },
  {
    "id": "food-wars",
    "title": "Food Wars!",
    "alternativeTitles": [
      "Shokugeki no Soma"
    ],
    "coverImage": "/covers/food-wars.jpg",
    "genres": [
      "Cooking",
      "Comedy",
      "School",
      "Shonen"
    ],
    "releaseYear": 2015,
    "animeStatus": "Anime completed",
    "totalEpisodes": 86,
    "totalSeasons": 5,
    "sourceType": "Manga",
    "animeEndsAt": "The fifth and final anime season adapts the manga ending area.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 24,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Second Plate",
        "episodes": 13,
        "releaseYear": 2016,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Third Plate split-cour",
        "episodes": 24,
        "releaseYear": 2017,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Fourth Plate",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 5,
        "seasonTitle": "Fifth Plate",
        "episodes": 13,
        "releaseYear": 2020,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No main continuation needed. Optional: read manga for skipped/changed details.",
    "lightNovelContinueFrom": "Not applicable as main route.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "No continuation is needed after the anime.",
    "adaptationNote": "Season 5 changes/compresses parts of the final manga material, but it still reaches the ending.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Food Wars final anime/manga ending discussion",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm the anime reaches the ending area."
      },
      {
        "name": "Food Wars Season 5 adaptation comparison",
        "type": "Adaptation Comparison",
        "checked": true,
        "note": "Used to note that Season 5 differs from the manga."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Anime completes the main manga story. Manga is optional for differences.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Food Wars final anime/manga ending discussion",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm the anime reaches the ending area."
      },
      {
        "name": "Food Wars Season 5 adaptation comparison",
        "type": "Adaptation Comparison",
        "checked": true,
        "note": "Used to note that Season 5 differs from the manga."
      }
    ]
  },
  {
    "id": "mob-psycho-100",
    "title": "Mob Psycho 100",
    "alternativeTitles": [
      "Mob Psycho"
    ],
    "coverImage": "/covers/mob-psycho-100.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Supernatural"
    ],
    "releaseYear": 2016,
    "animeStatus": "Anime completed",
    "totalEpisodes": 37,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "Season 3 Episode 12",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2016,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 13,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Anime completes the main manga story; optional Reigen spin-off can be read separately.",
    "lightNovelContinueFrom": "Not available yet",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The TV anime completes the main story. Read the Reigen spin-off only if you want extra material.",
    "adaptationNote": "The third season is listed as the final season, while the manga source ended earlier. There is no required continuation point after Season 3.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Wikipedia: Mob Psycho 100",
        "type": "Database",
        "checked": true,
        "note": "Confirmed manga source, 37 episodes, three seasons, and third/final season wording."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "Anime completes the main manga story; optional Reigen spin-off can be read separately.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "The anime appears to complete the main source route or has no required post-anime reading point.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wikipedia: Mob Psycho 100",
        "type": "Database",
        "checked": true,
        "note": "Confirmed manga source, 37 episodes, three seasons, and third/final season wording."
      }
    ]
  },
  {
    "id": "assassination-classroom",
    "title": "Assassination Classroom",
    "alternativeTitles": [
      "Ansatsu Kyoushitsu"
    ],
    "coverImage": "/covers/assassination-classroom.jpg",
    "genres": [
      "Action",
      "Comedy",
      "School",
      "Shonen"
    ],
    "releaseYear": 2015,
    "animeStatus": "Anime completed; anniversary material exists",
    "totalEpisodes": 47,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 completes the main manga story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 22,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 25,
        "releaseYear": 2016,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No main continuation needed. Manga can be read from the beginning for source details.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "No source continuation / optional manga from beginning",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The anime completes the main story.",
    "adaptationNote": "The manga is optional for source experience, not required continuation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Assassination Classroom anime/manga completion overview",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm the anime completes the main manga story."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No main continuation needed after Season 2. Optional: read the manga from Chapter 1 for skipped or different details.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Starting from the beginning is recommended because the anime may skip, rearrange, compress, or diverge from source material.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Assassination Classroom anime/manga completion overview",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm the anime completes the main manga story."
      }
    ]
  },
  {
    "id": "vinland-saga",
    "title": "Vinland Saga",
    "alternativeTitles": [
      "Vinland Saga"
    ],
    "coverImage": "/covers/vinland-saga.jpg",
    "genres": [
      "Action",
      "Historical",
      "Drama",
      "Seinen"
    ],
    "releaseYear": 2019,
    "animeStatus": "Finished Season",
    "totalEpisodes": 48,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 reaches the Chapter 100 adaptation point.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 24,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 24,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 101",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 101 after Season 2.",
    "adaptationNote": "Season 2 finishes the farm/slave arc material and Chapter 101 begins the next major section.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Vinland Saga anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 continuation at Chapter 101."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 14",
    "mangaContinueChapter": "101",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 101 after Season 2.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Vinland Saga anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 continuation at Chapter 101."
      }
    ]
  },
  {
    "id": "tokyo-ghoul",
    "title": "Tokyo Ghoul",
    "alternativeTitles": [
      "Tokyo Ghoul:re"
    ],
    "coverImage": "/covers/tokyo-ghoul.jpg",
    "genres": [
      "Action",
      "Horror",
      "Supernatural",
      "Drama"
    ],
    "releaseYear": 2014,
    "animeStatus": "Anime completed",
    "totalEpisodes": 48,
    "totalSeasons": 4,
    "sourceType": "Manga",
    "animeEndsAt": "The anime adaptation diverges and compresses important manga material across seasons.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Tokyo Ghoul",
        "episodes": 12,
        "releaseYear": 2014,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Tokyo Ghoul root A",
        "episodes": 12,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Tokyo Ghoul:re",
        "episodes": 12,
        "releaseYear": 2018,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Tokyo Ghoul:re Season 2",
        "episodes": 12,
        "releaseYear": 2018,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Start from Manga Chapter 1 recommended.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Manga from the beginning is the safest route.",
    "adaptationNote": "Do not provide a post-anime chapter jump. Tokyo Ghoul is best handled as manga-from-beginning.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Tokyo Ghoul anime/manga adaptation overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm divergence/compression and source-from-beginning recommendation."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "1",
    "mangaContinueChapter": "1",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start the manga from Chapter 1 because the anime diverges and compresses important material.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime diverges and compresses important source material.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Tokyo Ghoul anime/manga adaptation overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm divergence/compression and source-from-beginning recommendation."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "parasyte-the-maxim",
    "title": "Parasyte -the maxim-",
    "alternativeTitles": [
      "Kiseijuu: Sei no Kakuritsu"
    ],
    "coverImage": "/covers/parasyte-the-maxim.jpg",
    "genres": [
      "Action",
      "Horror",
      "Sci-Fi",
      "Seinen"
    ],
    "releaseYear": 2014,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime adapts the complete main manga story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 24,
        "releaseYear": 2014,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No main continuation needed. Manga can be read from the beginning for the source version.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The anime covers the complete main story.",
    "adaptationNote": "Reading the manga from the beginning is optional for the source version, not required continuation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Parasyte anime/manga completion overview",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm complete anime adaptation."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No continuation needed. The anime completes the main manga story.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Starting from the beginning is recommended because the anime may skip, rearrange, compress, or diverge from source material.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Parasyte anime/manga completion overview",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm complete anime adaptation."
      }
    ]
  },
  {
    "id": "death-note",
    "title": "Death Note",
    "alternativeTitles": [
      "Death Note"
    ],
    "coverImage": "/covers/death-note.jpg",
    "genres": [
      "Mystery",
      "Psychological",
      "Supernatural",
      "Thriller"
    ],
    "releaseYear": 2006,
    "animeStatus": "Anime completed",
    "totalEpisodes": 37,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Episode 37",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 37,
        "releaseYear": 2006,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Anime completes the main manga story; optional one-shot sequel chapters can be read separately.",
    "lightNovelContinueFrom": "Not available yet",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "The TV anime covers the main story ending. Optional one-shot chapters exist as separate follow-up material.",
    "adaptationNote": "The manga source is complete in 108 chapters, and the TV anime is a 37-episode adaptation. Marked Medium because this pass did not add an official episode-to-final-chapter mapping.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Wikipedia: Death Note",
        "type": "Database",
        "checked": true,
        "note": "Confirmed manga source, 37-episode TV anime, and one-shot sequel context."
      },
      {
        "name": "Wikipedia: List of Death Note chapters",
        "type": "Database",
        "checked": true,
        "note": "Confirmed the 108-chapter manga structure and later one-shot material."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "Anime completes the main manga story; optional one-shot sequel chapters can be read separately.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "The anime appears to complete the main source route or has no required post-anime reading point.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wikipedia: Death Note",
        "type": "Database",
        "checked": true,
        "note": "Confirmed manga source, 37-episode TV anime, and one-shot sequel context."
      },
      {
        "name": "Wikipedia: List of Death Note chapters",
        "type": "Database",
        "checked": true,
        "note": "Confirmed the 108-chapter manga structure and later one-shot material."
      }
    ]
  },
  {
    "id": "code-geass",
    "title": "Code Geass",
    "alternativeTitles": [
      "Code Geass: Lelouch of the Rebellion"
    ],
    "coverImage": "/covers/code-geass.jpg",
    "genres": [
      "Mecha",
      "Action",
      "Drama",
      "Original"
    ],
    "releaseYear": 2006,
    "animeStatus": "Anime completed",
    "totalEpisodes": 50,
    "totalSeasons": 2,
    "sourceType": "Original Anime",
    "animeEndsAt": "R2 Episode 25",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Lelouch of the Rebellion",
        "episodes": 25,
        "releaseYear": 2006,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "R2",
        "episodes": 25,
        "releaseYear": 2008,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Original anime. No source continuation available.",
    "lightNovelContinueFrom": "Original anime. No source continuation available.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Code Geass is an original anime, so there is no manga or light novel continuation point for the TV ending.",
    "adaptationNote": "The TV series was produced as an original Sunrise anime. Later films and side stories are separate franchise material rather than a source continuation from manga or light novel.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Wikipedia: Code Geass",
        "type": "Database",
        "checked": true,
        "note": "Confirmed Sunrise original anime production context and two main TV seasons."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "No source continuation available.",
    "continuationStatus": "Anime Original",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "This is an original anime entry. No manga, light novel, or web novel source continuation is available.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wikipedia: Code Geass",
        "type": "Database",
        "checked": true,
        "note": "Confirmed Sunrise original anime production context and two main TV seasons."
      }
    ]
  },
  {
    "id": "steins-gate",
    "title": "Steins;Gate",
    "alternativeTitles": [
      "Steins Gate"
    ],
    "coverImage": "/covers/steins-gate.jpg",
    "genres": [
      "Sci-Fi",
      "Thriller",
      "Drama"
    ],
    "releaseYear": 2011,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 1,
    "sourceType": "Visual Novel",
    "animeEndsAt": "The main Steins;Gate anime adapts and completes the main visual novel route.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 24,
        "releaseYear": 2011,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Not applicable",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation / Visual Novel optional",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The main anime tells the complete main story.",
    "adaptationNote": "Steins;Gate 0 is a related route/sequel-side story, not a simple chapter continuation after the main anime.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Steins;Gate visual novel/anime overview",
        "type": "Visual Novel / Anime Reference",
        "checked": false,
        "note": "Placeholder evidence. Use VN/anime overview to verify if needed."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No direct source continuation needed. Optional: play the Steins;Gate visual novel for full route details, then watch/play Steins;Gate 0 separately.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Steins;Gate visual novel/anime overview",
        "type": "Visual Novel / Anime Reference",
        "checked": false,
        "note": "Placeholder evidence. Use VN/anime overview to verify if needed."
      }
    ]
  },
  {
    "id": "erased",
    "title": "Erased",
    "alternativeTitles": [
      "Boku dake ga Inai Machi"
    ],
    "coverImage": "/covers/erased.jpg",
    "genres": [
      "Mystery",
      "Drama",
      "Supernatural",
      "Thriller"
    ],
    "releaseYear": 2016,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime adapts the main story but diverges and compresses the ending compared with the manga.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2016,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Start from the beginning recommended. If skipping, start around Chapter 24.",
    "lightNovelContinueFrom": "Not applicable as main route.",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Read the manga for the fuller original ending.",
    "adaptationNote": "A direct continuation point is not ideal because the anime changes the ending. Chapter 24 is a rough skip point only.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Erased manga/anime FAQ",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm manga-from-beginning recommendation and Chapter 24 rough start."
      },
      {
        "name": "Erased anime/manga differences reference",
        "type": "Adaptation Comparison",
        "checked": true,
        "note": "Used to confirm ending differences."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 5 if skipping",
    "mangaContinueChapter": "24",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start the manga from Chapter 1 for the full ending. If skipping, start around Chapter 24.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime ending differs from the manga ending.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Erased manga/anime FAQ",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm manga-from-beginning recommendation and Chapter 24 rough start."
      },
      {
        "name": "Erased anime/manga differences reference",
        "type": "Adaptation Comparison",
        "checked": true,
        "note": "Used to confirm ending differences."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "another",
    "title": "Another",
    "alternativeTitles": [
      "Another"
    ],
    "coverImage": "/covers/another.jpg",
    "genres": [
      "Horror",
      "Mystery",
      "School",
      "Supernatural"
    ],
    "releaseYear": 2012,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "The 12-episode anime adapts the main Another novel story with anime-specific differences.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2012,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No direct manga continuation needed. Manga adaptation covers the same main story.",
    "lightNovelContinueFrom": "Main story is complete. Optional sequel route: Another 2001 novel.",
    "recommendedRoute": "No source continuation / Optional sequel novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The main story is complete in the anime.",
    "adaptationNote": "The anime adapts the main novel but changes some details. For source comparison, read the original novel from the beginning.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Another novel/anime overview",
        "type": "Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm the anime adapts the main novel story and that sequel material exists separately."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Another 2001 optional sequel",
    "lightNovelContinueChapter": "Start of sequel novel if available",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "The anime completes the main story. Optional: read Another 2001 as sequel material.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Another novel/anime overview",
        "type": "Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm the anime adapts the main novel story and that sequel material exists separately."
      }
    ]
  },
  {
    "id": "hyouka",
    "title": "Hyouka",
    "alternativeTitles": [
      "Hyouka"
    ],
    "coverImage": "/covers/hyouka.jpg",
    "genres": [
      "Mystery",
      "School",
      "Slice of Life"
    ],
    "releaseYear": 2012,
    "animeStatus": "Anime completed",
    "totalEpisodes": 22,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "The 22-episode anime adapts the early Classic Literature Club novels and ends before the later novel material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 22,
        "releaseYear": 2012,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as main route.",
    "lightNovelContinueFrom": "Classic Literature Club Volume 5",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Volume 5 after the anime.",
    "adaptationNote": "The anime covers early novel material. Later novels continue beyond the anime.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Hyouka light novel continuation reference",
        "type": "Anime-to-Novel Guide",
        "checked": true,
        "note": "Used to confirm later volumes continue beyond the anime."
      },
      {
        "name": "Hyouka novel overview",
        "type": "Novel Reference",
        "checked": true,
        "note": "Used to confirm novel source structure."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "5",
    "lightNovelContinueChapter": "Start of Volume 5",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Classic Literature Club Volume 5 after the anime.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Hyouka light novel continuation reference",
        "type": "Anime-to-Novel Guide",
        "checked": true,
        "note": "Used to confirm later volumes continue beyond the anime."
      },
      {
        "name": "Hyouka novel overview",
        "type": "Novel Reference",
        "checked": true,
        "note": "Used to confirm novel source structure."
      }
    ]
  },
  {
    "id": "bungo-stray-dogs",
    "title": "Bungo Stray Dogs",
    "alternativeTitles": [
      "Bungou Stray Dogs"
    ],
    "coverImage": "/covers/bungo-stray-dogs.jpg",
    "genres": [
      "Action",
      "Mystery",
      "Supernatural",
      "Seinen"
    ],
    "releaseYear": 2016,
    "animeStatus": "Finished Season",
    "totalEpisodes": 60,
    "totalSeasons": 5,
    "sourceType": "Manga",
    "animeEndsAt": "Season 5 ends very close to the manga and includes material that was near or ahead of the manga at airing time.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2016,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2016,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4",
        "episodes": 13,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 5,
        "seasonTitle": "Season 5",
        "episodes": 11,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Anime is caught up or very close to the manga around Chapter 110 / 110.5 area.",
    "lightNovelContinueFrom": "Light novels exist but are not the direct main continuation route.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "The anime is very close to the manga, so there may not be much immediate continuation material.",
    "adaptationNote": "Because Season 5 ended close to the manga at the time, this should be rechecked when new manga chapters are released.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Anime Corner / Bungo Stray Dogs continuation coverage",
        "type": "Anime News / Adaptation Reference",
        "checked": true,
        "note": "Used to confirm Season 5 ended close to the manga."
      },
      {
        "name": "Bungo Stray Dogs Chapter 110 reference",
        "type": "Chapter Reference",
        "checked": true,
        "note": "Used to confirm the manga chapter area."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Around 110",
    "lightNovelContinueVolume": "Not recommended as direct continuation",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Anime is caught up or close to the manga. Check chapters after Chapter 110 / 110.5 for newer material.",
    "continuationStatus": "Source Caught Up",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Anime Corner / Bungo Stray Dogs continuation coverage",
        "type": "Anime News / Adaptation Reference",
        "checked": true,
        "note": "Used to confirm Season 5 ended close to the manga."
      },
      {
        "name": "Bungo Stray Dogs Chapter 110 reference",
        "type": "Chapter Reference",
        "checked": true,
        "note": "Used to confirm the manga chapter area."
      }
    ]
  },
  {
    "id": "bungo-stray-dogs-wan",
    "title": "Bungo Stray Dogs Wan!",
    "alternativeTitles": [
      "Bungou Stray Dogs Wan!"
    ],
    "coverImage": "/covers/bungo-stray-dogs-wan.jpg",
    "genres": [
      "Comedy",
      "Slice of Life",
      "Supernatural"
    ],
    "releaseYear": 2021,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime adapts selected comedy spin-off material, not a strict chapter-by-chapter main story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Start from the beginning of Bungo Stray Dogs Wan! manga.",
    "lightNovelContinueFrom": "Not applicable as main route.",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Read the spin-off manga from the beginning for all comedy chapters.",
    "adaptationNote": "This is a spin-off comedy title. It should not be treated like the main Bungo Stray Dogs continuation route.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Bungo Stray Dogs Wan! source overview",
        "type": "Spin-off Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm spin-off format."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Volume 1",
    "mangaContinueChapter": "Chapter 1",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start from Bungo Stray Dogs Wan! Manga Volume 1 / Chapter 1.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime adapts selected comedy spin-off chapters and is not a strict direct continuation format.",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Bungo Stray Dogs Wan! source overview",
        "type": "Spin-off Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm spin-off format."
      }
    ]
  },
  {
    "id": "durarara",
    "title": "Durarara!!",
    "alternativeTitles": [
      "Durarara"
    ],
    "coverImage": "/covers/durarara.jpg",
    "genres": [
      "Action",
      "Mystery",
      "Supernatural",
      "Urban Fantasy"
    ],
    "releaseYear": 2010,
    "animeStatus": "Anime completed",
    "totalEpisodes": 60,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "The full Durarara!! anime adaptation, including Durarara!!x2 Ketsu, covers the original 13-volume light novel series.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Durarara!!",
        "episodes": 24,
        "releaseYear": 2010,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Durarara!! x2 split-cour",
        "episodes": 36,
        "releaseYear": 2015,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as main continuation.",
    "lightNovelContinueFrom": "Durarara!! SH sequel series",
    "recommendedRoute": "Light Novel sequel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The original light novel story is complete in the anime. Continue with Durarara!! SH for sequel material.",
    "adaptationNote": "If the user watched only Season 1, Novel 4 is the continuation; if the user watched all anime, use Durarara!! SH.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Where Does The Anime Leave Off - Durarara",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm the full anime covers the base novels through Volume 13 and SH is the sequel route."
      },
      {
        "name": "Durarara Volume 13 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 13 closes the original series."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "Durarara!! SH Volume 1",
    "lightNovelContinueChapter": "Start of sequel series",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Continue with the first Durarara!! SH volume after finishing Durarara!!x2 Ketsu.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Where Does The Anime Leave Off - Durarara",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm the full anime covers the base novels through Volume 13 and SH is the sequel route."
      },
      {
        "name": "Durarara Volume 13 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 13 closes the original series."
      }
    ]
  },
  {
    "id": "bakuman",
    "title": "Bakuman",
    "alternativeTitles": [
      "Bakuman."
    ],
    "coverImage": "/covers/bakuman.jpg",
    "genres": [
      "Comedy",
      "Drama",
      "Slice of Life",
      "Shonen"
    ],
    "releaseYear": 2010,
    "animeStatus": "Anime completed",
    "totalEpisodes": 75,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "The three-season anime adapts the main manga story to its conclusion, with some skipped or compressed material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 25,
        "releaseYear": 2010,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 25,
        "releaseYear": 2011,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 25,
        "releaseYear": 2012,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No main continuation needed. Optional: read manga from beginning or check skipped chapters.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "No continuation is needed after finishing the anime.",
    "adaptationNote": "Season 3 skips/compresses some manga content, so reading the manga is optional for full detail, not required for continuation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Bakuman manga/anime completion reference",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm the anime completes the main manga story."
      },
      {
        "name": "Bakuman skipped manga discussion",
        "type": "Adaptation Comparison",
        "checked": true,
        "note": "Used to note skipped/compressed Season 3 material."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Anime completes the main manga story. Manga is optional for skipped/compressed details.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Bakuman manga/anime completion reference",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm the anime completes the main manga story."
      },
      {
        "name": "Bakuman skipped manga discussion",
        "type": "Adaptation Comparison",
        "checked": true,
        "note": "Used to note skipped/compressed Season 3 material."
      }
    ]
  },
  {
    "id": "gintama",
    "title": "Gintama",
    "alternativeTitles": [
      "Gintama"
    ],
    "coverImage": "/covers/gintama.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Sci-Fi",
      "Shonen"
    ],
    "releaseYear": 2006,
    "animeStatus": "Anime completed",
    "totalEpisodes": 367,
    "totalSeasons": 10,
    "sourceType": "Manga",
    "animeEndsAt": "The anime plus Gintama: The Very Final reaches the manga ending.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Gintama Season 1",
        "episodes": 49,
        "releaseYear": 2006,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Gintama Season 2",
        "episodes": 50,
        "releaseYear": 2007,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Gintama Season 3",
        "episodes": 51,
        "releaseYear": 2008,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Gintama Season 4",
        "episodes": 51,
        "releaseYear": 2009,
        "status": "Finished"
      },
      {
        "seasonNumber": 5,
        "seasonTitle": "Gintama'",
        "episodes": 51,
        "releaseYear": 2011,
        "status": "Finished"
      },
      {
        "seasonNumber": 6,
        "seasonTitle": "Gintama': Enchousen",
        "episodes": 13,
        "releaseYear": 2012,
        "status": "Finished"
      },
      {
        "seasonNumber": 7,
        "seasonTitle": "Gintama degrees",
        "episodes": 51,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 8,
        "seasonTitle": "Gintama. 2017",
        "episodes": 12,
        "releaseYear": 2017,
        "status": "Finished"
      },
      {
        "seasonNumber": 9,
        "seasonTitle": "Gintama. Porori-hen",
        "episodes": 13,
        "releaseYear": 2017,
        "status": "Finished"
      },
      {
        "seasonNumber": 10,
        "seasonTitle": "Gintama. Silver Soul Arc",
        "episodes": 26,
        "releaseYear": 2018,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No main continuation needed. Optional: read manga from the beginning for skipped jokes/chapters.",
    "lightNovelContinueFrom": "Not applicable as main route.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "No continuation is needed after The Very Final.",
    "adaptationNote": "Gintama has specials and side content, but the main story reaches the manga ending.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Gintama manga/anime ending reference",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm The Very Final covers the manga ending."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Anime/movie completes the main manga story.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Gintama manga/anime ending reference",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm The Very Final covers the manga ending."
      }
    ]
  },
  {
    "id": "inuyasha",
    "title": "Inuyasha",
    "alternativeTitles": [
      "InuYasha: The Final Act"
    ],
    "coverImage": "/covers/inuyasha.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Romance"
    ],
    "releaseYear": 2000,
    "animeStatus": "Anime completed",
    "totalEpisodes": 193,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Inuyasha plus The Final Act completes the main manga story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Inuyasha",
        "episodes": 167,
        "releaseYear": 2000,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "The Final Act",
        "episodes": 26,
        "releaseYear": 2009,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No main continuation needed. Optional sequel route: Yashahime anime.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation / Optional sequel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The main Inuyasha story is complete after The Final Act.",
    "adaptationNote": "Yashahime is sequel/spin-off material, not missing manga continuation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Inuyasha manga/anime completion overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm The Final Act completes the main manga story."
      }
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "The main story is complete. Optional: watch Yashahime as sequel material.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Inuyasha manga/anime completion overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm The Final Act completes the main manga story."
      }
    ]
  },
  {
    "id": "yu-yu-hakusho",
    "title": "Yu Yu Hakusho",
    "alternativeTitles": [
      "Yuu Yuu Hakusho"
    ],
    "coverImage": "/covers/yu-yu-hakusho.jpg",
    "genres": [
      "Action",
      "Supernatural",
      "Adventure",
      "Shonen"
    ],
    "releaseYear": 1992,
    "animeStatus": "Anime completed",
    "totalEpisodes": 112,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime adapts the main manga story to its ending, with differences in how the final arc is handled.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 112,
        "releaseYear": 1992,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No main continuation needed. Optional: read the final manga volume or the manga from the beginning for source differences.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The anime covers the main story ending.",
    "adaptationNote": "The anime expands or changes parts of the final arc, but there is no required post-anime manga continuation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Yu Yu Hakusho anime/manga ending comparison",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm the anime reaches the broad manga ending and final-arc handling differs."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Optional final volume / Volume 1 for full source route",
    "mangaContinueChapter": "Optional final chapters",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No main continuation needed after the anime. Optional: read the manga from the beginning or the final manga volume for source differences.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Yu Yu Hakusho anime/manga ending comparison",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm the anime reaches the broad manga ending and final-arc handling differs."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "dragon-ball",
    "title": "Dragon Ball",
    "alternativeTitles": [
      "Dragon Ball"
    ],
    "coverImage": "/covers/dragon-ball.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Shonen"
    ],
    "releaseYear": 1986,
    "animeStatus": "Anime completed",
    "totalEpisodes": 153,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Dragon Ball ends before Dragon Ball Z / the Saiyan arc material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 153,
        "releaseYear": 1986,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Continue with Dragon Ball Z anime, or manga Chapter 195.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Anime sequel / Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Dragon Ball Z is the direct anime continuation.",
    "adaptationNote": "Dragon Ball and Dragon Ball Z are two anime series adapting different parts of the same manga continuity.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Dragon Ball manga/anime arc references",
        "type": "Franchise Reference",
        "checked": true,
        "note": "Used to confirm Z begins after the original Dragon Ball portion."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "195",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Watch Dragon Ball Z Episode 1 or read Manga Chapter 195.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Dragon Ball manga/anime arc references",
        "type": "Franchise Reference",
        "checked": true,
        "note": "Used to confirm Z begins after the original Dragon Ball portion."
      }
    ]
  },
  {
    "id": "dragon-ball-z",
    "title": "Dragon Ball Z",
    "alternativeTitles": [
      "DBZ"
    ],
    "coverImage": "/covers/dragon-ball-z.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Super Power",
      "Shonen"
    ],
    "releaseYear": 1989,
    "animeStatus": "Anime completed",
    "totalEpisodes": 291,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Dragon Ball Z completes the Z portion of the original Dragon Ball manga.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 291,
        "releaseYear": 1989,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Original Dragon Ball manga story is complete. Continue with Dragon Ball Super for sequel material.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Sequel series",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Dragon Ball Super is the sequel route after Z.",
    "adaptationNote": "The original manga is complete by the end of Z. Super is later sequel material.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Dragon Ball Z ending references",
        "type": "Franchise Reference",
        "checked": true,
        "note": "Used to confirm Z completes the original manga material."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Dragon Ball Super anime or manga.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Dragon Ball Z ending references",
        "type": "Franchise Reference",
        "checked": true,
        "note": "Used to confirm Z completes the original manga material."
      }
    ]
  },
  {
    "id": "dragon-ball-super",
    "title": "Dragon Ball Super",
    "alternativeTitles": [
      "DBS"
    ],
    "coverImage": "/covers/dragon-ball-super.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Super Power",
      "Shonen"
    ],
    "releaseYear": 2015,
    "animeStatus": "Anime completed",
    "totalEpisodes": 131,
    "totalSeasons": 1,
    "sourceType": "Manga / Original Anime",
    "animeEndsAt": "The TV anime ends after the Tournament of Power arc.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 131,
        "releaseYear": 2015,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Dragon Ball Super Manga Chapter 42 for the Galactic Patrol Prisoner arc.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The manga continues after the TV anime with the Galactic Patrol Prisoner arc.",
    "adaptationNote": "Dragon Ball Super anime and manga differ in some details, but Chapter 42 is the usual post-TV-anime continuation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Dragon Ball Super manga arc references",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm Chapter 42 is the post-anime continuation area."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Volume 9",
    "mangaContinueChapter": "42",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Dragon Ball Super Manga Chapter 42 after the TV anime.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Dragon Ball Super manga arc references",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm Chapter 42 is the post-anime continuation area."
      }
    ]
  },
  {
    "id": "jojos-bizarre-adventure",
    "title": "JoJo's Bizarre Adventure",
    "alternativeTitles": [
      "JoJo no Kimyou na Bouken"
    ],
    "coverImage": "/covers/jojos-bizarre-adventure.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Supernatural",
      "Shonen"
    ],
    "releaseYear": 2012,
    "animeStatus": "Finished Season",
    "totalEpisodes": 190,
    "totalSeasons": 5,
    "sourceType": "Manga",
    "animeEndsAt": "The current main anime adaptation covers through Part 6: Stone Ocean.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Phantom Blood / Battle Tendency",
        "episodes": 26,
        "releaseYear": 2012,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Stardust Crusaders",
        "episodes": 48,
        "releaseYear": 2014,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Diamond is Unbreakable",
        "episodes": 39,
        "releaseYear": 2016,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Golden Wind",
        "episodes": 39,
        "releaseYear": 2018,
        "status": "Finished"
      },
      {
        "seasonNumber": 5,
        "seasonTitle": "Stone Ocean",
        "episodes": 38,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Steel Ball Run Chapter 1, Part 7 of the manga.",
    "lightNovelContinueFrom": "Not applicable as main route",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "After Stone Ocean, continue with Part 7: Steel Ball Run.",
    "adaptationNote": "Part 7 is a new major part, so starting from Chapter 1 of Steel Ball Run is correct.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "JoJo part structure references",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm Part 7 follows Part 6."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Steel Ball Run Volume 1",
    "mangaContinueChapter": "1",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Continue with JoJo Part 7: Steel Ball Run after Stone Ocean.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "JoJo part structure references",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm Part 7 follows Part 6."
      }
    ]
  },
  {
    "id": "the-seven-deadly-sins",
    "title": "The Seven Deadly Sins",
    "alternativeTitles": [
      "Nanatsu no Taizai"
    ],
    "coverImage": "/covers/the-seven-deadly-sins.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Shonen"
    ],
    "releaseYear": 2014,
    "animeStatus": "Anime completed",
    "totalEpisodes": 96,
    "totalSeasons": 4,
    "sourceType": "Manga",
    "animeEndsAt": "The main anime adapts the main manga story to completion. Sequel material exists separately.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 24,
        "releaseYear": 2014,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Revival of the Commandments",
        "episodes": 24,
        "releaseYear": 2018,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Wrath of the Gods",
        "episodes": 24,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Dragon's Judgement",
        "episodes": 24,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No main continuation needed after the completed main anime. Optional sequel route: Four Knights of the Apocalypse from Chapter 1.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The main story is complete; sequel material is separate.",
    "adaptationNote": "Treat Four Knights of the Apocalypse as a sequel route, not a direct chapter continuation of the main series.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Seven Deadly Sins manga/anime completion overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm main story completion and sequel route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Optional sequel Volume 1",
    "mangaContinueChapter": "Optional sequel Chapter 1",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No main continuation needed after the completed anime. Optional: start Four Knights of the Apocalypse from Chapter 1.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Seven Deadly Sins manga/anime completion overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm main story completion and sequel route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "magi",
    "title": "Magi: The Labyrinth of Magic",
    "alternativeTitles": [
      "Magi"
    ],
    "coverImage": "/covers/magi.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Shonen"
    ],
    "releaseYear": 2012,
    "animeStatus": "Finished Season",
    "totalEpisodes": 25,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 continues directly into Magi: The Kingdom of Magic.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "The Labyrinth of Magic",
        "episodes": 25,
        "releaseYear": 2012,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Watch Magi: The Kingdom of Magic or continue around Manga Chapter 116-117.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Anime sequel first / Manga later",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "The direct anime continuation is The Kingdom of Magic.",
    "adaptationNote": "This entry should guide users to the sequel anime before jumping into the manga.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Magi anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Season 1 continuation."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 12",
    "mangaContinueChapter": "116",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Watch Magi: The Kingdom of Magic first. Manga continuation is around Chapter 116-117.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Magi anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Season 1 continuation."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "magi-the-kingdom-of-magic",
    "title": "Magi: The Kingdom of Magic",
    "alternativeTitles": [
      "Magi Season 2"
    ],
    "coverImage": "/covers/magi-the-kingdom-of-magic.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Shonen"
    ],
    "releaseYear": 2013,
    "animeStatus": "Finished Season",
    "totalEpisodes": 25,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The Kingdom of Magic reaches the Chapter 198 adaptation point.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "The Kingdom of Magic",
        "episodes": 25,
        "releaseYear": 2013,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 199",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 199 after the second Magi TV season.",
    "adaptationNote": "The manga continues well beyond the anime.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Magi anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm The Kingdom of Magic continuation around Chapter 199."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 21",
    "mangaContinueChapter": "199",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 199 after The Kingdom of Magic.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Magi anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm The Kingdom of Magic continuation around Chapter 199."
      }
    ]
  },
  {
    "id": "soul-eater",
    "title": "Soul Eater",
    "alternativeTitles": [
      "Soul Eater"
    ],
    "coverImage": "/covers/soul-eater.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Supernatural",
      "Shonen"
    ],
    "releaseYear": 2008,
    "animeStatus": "Anime completed",
    "totalEpisodes": 51,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime diverges into an anime-original ending.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 51,
        "releaseYear": 2008,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Start from the beginning, or at least around Manga Chapter 36 before major divergence.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "The manga route is different enough that starting over is recommended.",
    "adaptationNote": "Do not present a simple chapter jump as fully reliable because the anime diverges.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Soul Eater manga/anime divergence references",
        "type": "Adaptation Reference",
        "checked": true,
        "note": "Used to confirm anime-original ending and divergence."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 10",
    "mangaContinueChapter": "36",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start from the beginning for the best experience. If skipping, restart around Chapter 36.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime has an anime-original ending and diverges from the manga.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Soul Eater manga/anime divergence references",
        "type": "Adaptation Reference",
        "checked": true,
        "note": "Used to confirm anime-original ending and divergence."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "blue-exorcist",
    "title": "Blue Exorcist",
    "alternativeTitles": [
      "Ao no Exorcist"
    ],
    "coverImage": "/covers/blue-exorcist.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Supernatural",
      "Shonen"
    ],
    "releaseYear": 2011,
    "animeStatus": "Finished Season",
    "totalEpisodes": 49,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "If the database counts through Shimane Illuminati Saga, the anime ends around the manga's mid-60s chapter range. Earlier Season 1 has anime-original divergence.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 25,
        "releaseYear": 2011,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Kyoto Saga",
        "episodes": 12,
        "releaseYear": 2017,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Shimane Illuminati Saga",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Around Manga Chapter 65 after Shimane Illuminati Saga, but verify if newer anime arcs are included.",
    "lightNovelContinueFrom": "Not applicable as main route.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Manga is the correct route, but Blue Exorcist has anime-original divergence and later canon seasons.",
    "adaptationNote": "Do not mark as High because Blue Exorcist continuity is complicated. If the project later counts Beyond the Snow / Blue Night arcs, update this.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Blue Exorcist anime/manga arc references",
        "type": "Manga Arc / Anime Reference",
        "checked": true,
        "note": "Used to estimate the post-Shimane continuation area."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 16",
    "mangaContinueChapter": "65",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Around Manga Chapter 65 if the latest included anime is Shimane Illuminati Saga. Recheck if newer arcs are included.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Blue Exorcist anime/manga arc references",
        "type": "Manga Arc / Anime Reference",
        "checked": true,
        "note": "Used to estimate the post-Shimane continuation area."
      }
    ]
  },
  {
    "id": "d-gray-man",
    "title": "D.Gray-man",
    "alternativeTitles": [
      "D Gray-man Hallow"
    ],
    "coverImage": "/covers/d-gray-man.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Supernatural",
      "Shonen"
    ],
    "releaseYear": 2006,
    "animeStatus": "Anime completed",
    "totalEpisodes": 116,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "D.Gray-man Hallow covers the Chapter 165-208 span; continue with Chapter 209.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "D.Gray-man",
        "episodes": 103,
        "releaseYear": 2006,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Hallow",
        "episodes": 13,
        "releaseYear": 2016,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 209 after D.Gray-man Hallow. Starting earlier around Chapter 165 is recommended if the viewer wants smoother continuity.",
    "lightNovelContinueFrom": "Not applicable as main route",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Chapter 209 is the next chapter after Hallow, but earlier reading may help because Hallow skips/changes details.",
    "adaptationNote": "Hallow adapts Chapter 165 to Chapter 208 but skips some pages/details, so Chapter 209 is correct but not always the smoothest experience.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "D.Gray-man Encyclopedia adaptation reference",
        "type": "Adaptation Reference",
        "checked": true,
        "note": "Used to confirm Hallow adapts up to Chapter 208."
      },
      {
        "name": "Viz D.Gray-man Chapter 208 page",
        "type": "Official Chapter Reference",
        "checked": true,
        "note": "Used to confirm Chapter 209 follows Chapter 208."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "209",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 209 after Hallow. For safer continuity, restart from Chapter 165.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "D.Gray-man Encyclopedia adaptation reference",
        "type": "Adaptation Reference",
        "checked": true,
        "note": "Used to confirm Hallow adapts up to Chapter 208."
      },
      {
        "name": "Viz D.Gray-man Chapter 208 page",
        "type": "Official Chapter Reference",
        "checked": true,
        "note": "Used to confirm Chapter 209 follows Chapter 208."
      }
    ]
  },
  {
    "id": "world-trigger",
    "title": "World Trigger",
    "alternativeTitles": [
      "World Trigger"
    ],
    "coverImage": "/covers/world-trigger.jpg",
    "genres": [
      "Action",
      "Sci-Fi",
      "Shonen"
    ],
    "releaseYear": 2014,
    "animeStatus": "Finished Season",
    "totalEpisodes": 99,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "Season 3 reaches the Chapter 196 adaptation point.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 73,
        "releaseYear": 2014,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 14,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 197",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 197 after Season 3.",
    "adaptationNote": "Season 3 ends in the Rank War material around Chapter 196.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Viz World Trigger Chapter 196 page",
        "type": "Official Chapter Reference",
        "checked": true,
        "note": "Used to confirm Chapter 197 follows Chapter 196."
      },
      {
        "name": "World Trigger community continuation reference",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 3 continuation around Chapter 197."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "197",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 197 after Season 3.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Viz World Trigger Chapter 196 page",
        "type": "Official Chapter Reference",
        "checked": true,
        "note": "Used to confirm Chapter 197 follows Chapter 196."
      },
      {
        "name": "World Trigger community continuation reference",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 3 continuation around Chapter 197."
      }
    ]
  },
  {
    "id": "akashic-records",
    "title": "Akashic Records of Bastard Magic Instructor",
    "alternativeTitles": [
      "Rokudenashi Majutsu Koushi to Akashic Records"
    ],
    "coverImage": "/covers/akashic-records.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "School"
    ],
    "releaseYear": 2017,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 covers Light Novel Volumes 1–5.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2017,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is possible but the light novel is the original route.",
    "lightNovelContinueFrom": "Light Novel Volume 6",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Light Novel Volume 6 after the anime.",
    "adaptationNote": "Anime covers Volumes 1–5. Volume 6 contains post-anime content.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Rokudenashi anime/manga/light novel guide",
        "type": "Community FAQ / Adaptation Reference",
        "checked": true,
        "note": "Used to confirm anime covers Volumes 1–5 and Volume 6 follows."
      },
      {
        "name": "Akashic Records Volume 6 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 6 is post-anime material."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "6",
    "lightNovelContinueChapter": "Start of Volume 6",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Light Novel Volume 6",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Rokudenashi anime/manga/light novel guide",
        "type": "Community FAQ / Adaptation Reference",
        "checked": true,
        "note": "Used to confirm anime covers Volumes 1–5 and Volume 6 follows."
      },
      {
        "name": "Akashic Records Volume 6 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 6 is post-anime material."
      }
    ]
  },
  {
    "id": "chivalry-of-a-failed-knight",
    "title": "Chivalry of a Failed Knight",
    "alternativeTitles": [
      "Rakudai Kishi no Cavalry"
    ],
    "coverImage": "/covers/chivalry-of-a-failed-knight.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Romance",
      "School"
    ],
    "releaseYear": 2015,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts the early light novel material, commonly treated as covering Volumes 1–3.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2015,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended because the light novel is the original and complete route.",
    "lightNovelContinueFrom": "Light Novel Volume 4",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue with Volume 4 after the anime.",
    "adaptationNote": "The light novel series has ended at Volume 19. Volume 4 is the common post-anime starting point, but keep Medium confidence.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Chivalry of a Failed Knight source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm LN route and series completion."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Light Novel Volume 4",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Chivalry of a Failed Knight source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm LN route and series completion."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "the-asterisk-war",
    "title": "The Asterisk War",
    "alternativeTitles": [
      "Gakusen Toshi Asterisk"
    ],
    "coverImage": "/covers/the-asterisk-war.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Romance",
      "School"
    ],
    "releaseYear": 2015,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 adapts through early-to-mid light novel material and does not complete the story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2016,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Light Novel Volume 7",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Light novel is the best continuation route.",
    "adaptationNote": "Volume 7 is the practical continuation estimate after Season 2, but keep needsVerification true until confirmed.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "The Asterisk War anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 7 estimate needs manual verification."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "7",
    "lightNovelContinueChapter": "Start of Volume 7",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Light Novel Volume 7 after Season 2.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Asterisk War anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 7 estimate needs manual verification."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "black-summoner",
    "title": "Black Summoner",
    "alternativeTitles": [
      "Kuro no Shoukanshi"
    ],
    "coverImage": "/covers/black-summoner.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "releaseYear": 2022,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 Episode 12. The anime covers Light Novel Volumes 1-3.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route because the light novel is the original source.",
    "lightNovelContinueFrom": "Light Novel Volume 4",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 4 after the anime.",
    "adaptationNote": "The anime covers Volumes 1-3. Volume 3 corresponds to Episodes 8-12, so Volume 4 is the next light novel point.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Black Summoner Wiki LN Volume 3",
        "type": "Volume / Episode Reference",
        "checked": true,
        "note": "Used to confirm LN Volume 3 covers Episodes 8-12 and Volume 4 follows it."
      },
      {
        "name": "Black Summoner community discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to cross-check that the anime covered Volumes 1-3 and continuation starts at Volume 4."
      },
      {
        "name": "Black Summoner franchise reference",
        "type": "Franchise Reference",
        "checked": true,
        "note": "Used to confirm the series source type and volume availability."
      }
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Summoned",
      "Overpowered MC"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not recommended as the main route.",
    "recommendedContinueFrom": "Light Novel Volume 4 after Season 1.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Black Summoner Wiki LN Volume 3",
        "type": "Volume / Episode Reference",
        "checked": true,
        "note": "Used to confirm LN Volume 3 covers Episodes 8-12 and Volume 4 follows it."
      },
      {
        "name": "Black Summoner community discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to cross-check that the anime covered Volumes 1-3 and continuation starts at Volume 4."
      },
      {
        "name": "Black Summoner franchise reference",
        "type": "Franchise Reference",
        "checked": true,
        "note": "Used to confirm the series source type and volume availability."
      }
    ]
  },
  {
    "id": "seirei-gensouki-spirit-chronicles",
    "title": "Seirei Gensouki: Spirit Chronicles",
    "alternativeTitles": [
      "Seirei Gensouki"
    ],
    "coverImage": "/covers/seirei-gensouki-spirit-chronicles.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai",
      "Romance"
    ],
    "releaseYear": 2021,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts Volumes 1, 2, 3, and parts of Volume 5 while skipping/rearranging some Volume 4 and Volume 5 material. If Season 2 is included, this must be rechecked.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "After Season 1 only, read Light Novel Volume 4 first for skipped context, then continue into Volume 6. If Season 2 is included, needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Light novel is the best route, but anime rearranges important material.",
    "adaptationNote": "The anime skips/rearranges material, so a simple jump is risky. Volume 4 is recommended for context after Season 1.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Seirei Gensouki community light novel route note",
        "type": "Community / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the anime adapts Volumes 1, 2, 3 and parts of 5 while skipping/rearranging Volume 4 material."
      }
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Fantasy Adventure"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "Season 1 only: 4 for skipped context / then 6",
    "lightNovelContinueChapter": "Start of Volume 4 for context",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "If watched Season 1 only, read Volume 4 first for skipped context, then continue toward Volume 6. If Season 2 is included, verify the new endpoint.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Seirei Gensouki community light novel route note",
        "type": "Community / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the anime adapts Volumes 1, 2, 3 and parts of 5 while skipping/rearranging Volume 4 material."
      }
    ]
  },
  {
    "id": "how-a-realist-hero-rebuilt-the-kingdom",
    "title": "How a Realist Hero Rebuilt the Kingdom",
    "alternativeTitles": [
      "Genjitsu Shugi Yuusha no Oukoku Saikenki"
    ],
    "coverImage": "/covers/how-a-realist-hero-rebuilt-the-kingdom.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Politics"
    ],
    "releaseYear": 2021,
    "animeStatus": "Anime completed",
    "totalEpisodes": 26,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "The two anime cours cover early kingdom-building material. Exact endpoint is commonly placed around Light Novel Volume 4.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Part 1",
        "episodes": 13,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Part 2",
        "episodes": 13,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "Light Novel Volume 5",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue with Light Novel Volume 5 after the anime.",
    "adaptationNote": "Volume 5 is the common continuation point, but keep Medium confidence because exact adaptation pacing should be checked.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Realist Hero source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm source route and volume publication."
      },
      {
        "name": "Realist Hero community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to estimate Volume 5 as post-anime route."
      }
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Kingdom Building"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "5",
    "lightNovelContinueChapter": "Start of Volume 5",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Light Novel Volume 5",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Realist Hero source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm source route and volume publication."
      },
      {
        "name": "Realist Hero community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to estimate Volume 5 as post-anime route."
      }
    ]
  },
  {
    "id": "the-worlds-finest-assassin",
    "title": "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
    "alternativeTitles": [
      "Sekai Saikou no Ansatsusha"
    ],
    "coverImage": "/covers/the-worlds-finest-assassin.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "releaseYear": 2021,
    "animeStatus": "Season 2 announced",
    "totalEpisodes": 12,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material and does not complete the story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "mangaContinueFrom": "Manga route is possible but not preferred over the light novel.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 2 after Season 1, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Light novel is the best continuation route.",
    "adaptationNote": "Season 2 has been announced, so keep a verification caveat.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "World's Finest Assassin light novel/source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm light novel route and ongoing anime caveat."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Overpowered MC"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "2",
    "lightNovelContinueChapter": "Start of Volume 2",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 2 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "World's Finest Assassin light novel/source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm light novel route and ongoing anime caveat."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "the-misfit-of-demon-king-academy",
    "title": "The Misfit of Demon King Academy",
    "alternativeTitles": [
      "Maou Gakuin no Futekigousha"
    ],
    "coverImage": "/covers/the-misfit-of-demon-king-academy.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "School"
    ],
    "releaseYear": 2020,
    "animeStatus": "Finished Season",
    "totalEpisodes": 37,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "The anime has multiple seasons/cours and the exact latest adapted light novel volume should be checked before marking verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 13,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2 split-cour",
        "episodes": 24,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 5 or later depending on the latest counted season, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but the exact volume depends on the latest anime coverage.",
    "adaptationNote": "This replaces the manual research placeholder with a cautious low-confidence continuation note.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Misfit of Demon King Academy anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Exact season-to-volume mapping still needs later verification."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "5 or later",
    "lightNovelContinueChapter": "Start of next unadapted volume",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Use the light novel route, but verify the latest anime season/cour endpoint before publishing a precise volume.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Misfit of Demon King Academy anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Exact season-to-volume mapping still needs later verification."
      }
    ]
  },
  {
    "id": "the-greatest-demon-lord-is-reborn-as-a-typical-nobody",
    "title": "The Greatest Demon Lord Is Reborn as a Typical Nobody",
    "alternativeTitles": [
      "Shijou Saikyou no Daimaou"
    ],
    "coverImage": "/covers/the-greatest-demon-lord-is-reborn-as-a-typical-nobody.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "School"
    ],
    "releaseYear": 2022,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, but the exact adapted volume endpoint is not fully verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 4, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but exact volume should be checked.",
    "adaptationNote": "Low-confidence estimate only. Do not mark verified until exact episode-to-volume mapping is checked.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "The Greatest Demon Lord anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence upgraded to a low-confidence light novel estimate. Needs later verification."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 4 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Greatest Demon Lord anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence upgraded to a low-confidence light novel estimate. Needs later verification."
      }
    ]
  },
  {
    "id": "the-daily-life-of-the-immortal-king",
    "title": "The Daily Life of the Immortal King",
    "alternativeTitles": [
      "Xian Wang de Richang Shenghuo"
    ],
    "coverImage": "/covers/the-daily-life-of-the-immortal-king.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Fantasy",
      "School"
    ],
    "releaseYear": 2020,
    "animeStatus": "Needs verification",
    "totalEpisodes": 0,
    "totalSeasons": 1,
    "sourceType": "Web Novel",
    "animeEndsAt": "The Chinese animation adaptation does not provide a clean manga/light novel style continuation point for this database.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Donghua seasons need verification",
        "episodes": 0,
        "releaseYear": 2020,
        "status": "Airing"
      }
    ],
    "mangaContinueFrom": "Not applicable as main route.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Web Novel from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Use the web novel from the beginning for the source version.",
    "adaptationNote": "Keep needsVerification true because the source mapping for donghua seasons needs separate checking.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "The Daily Life of the Immortal King anime/source overview",
        "type": "Donghua / Web Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Source mapping needs manual verification."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Start from the beginning recommended if the user wants the original source route.",
    "recommendedContinueFrom": "Start the web novel from the beginning for the source route. No clean post-anime chapter point is provided yet.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The donghua adaptation does not map cleanly to a simple post-anime chapter continuation.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Daily Life of the Immortal King anime/source overview",
        "type": "Donghua / Web Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Source mapping needs manual verification."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "the-irregular-at-magic-high-school",
    "title": "The Irregular at Magic High School",
    "alternativeTitles": [
      "Mahouka Koukou no Rettousei"
    ],
    "coverImage": "/covers/the-irregular-at-magic-high-school.jpg",
    "genres": [
      "Action",
      "Sci-Fi",
      "School",
      "Magic"
    ],
    "releaseYear": 2014,
    "animeStatus": "Finished Season",
    "totalEpisodes": 52,
    "totalSeasons": 3,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 3 covers light novel Volumes 12-15. A movie adaptation of Volume 16 / Yotsuba Succession Arc is announced.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 26,
        "releaseYear": 2014,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Visitor Arc",
        "episodes": 13,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 13,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended because the light novel is the original and clearer route.",
    "lightNovelContinueFrom": "Light Novel Volume 16 after Season 3. If the Yotsuba Succession movie is watched, recheck the next volume after the movie.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue with Volume 16 after Season 3, unless you already watched the Volume 16 movie.",
    "adaptationNote": "Season 3 covers Volumes 12-15. The announced movie changes the continuation point once included.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Mahouka community volume coverage guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Season 3 covers Volumes 12-15."
      },
      {
        "name": "Irregular at Magic High School movie announcement reference",
        "type": "Anime News / Franchise Reference",
        "checked": true,
        "note": "Used to confirm Yotsuba Succession / Volume 16 movie caveat."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "16",
    "lightNovelContinueChapter": "Start of Volume 16",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Light Novel Volume 16 after Season 3. Recheck after the Yotsuba Succession movie.",
    "continuationStatus": "Verified for Season 3 / Needs update if movie included",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Mahouka community volume coverage guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Season 3 covers Volumes 12-15."
      },
      {
        "name": "Irregular at Magic High School movie announcement reference",
        "type": "Anime News / Franchise Reference",
        "checked": true,
        "note": "Used to confirm Yotsuba Succession / Volume 16 movie caveat."
      }
    ]
  },
  {
    "id": "a-certain-magical-index",
    "title": "A Certain Magical Index",
    "alternativeTitles": [
      "Toaru Majutsu no Index"
    ],
    "coverImage": "/covers/a-certain-magical-index.jpg",
    "genres": [
      "Action",
      "Sci-Fi",
      "Fantasy"
    ],
    "releaseYear": 2008,
    "animeStatus": "Anime completed",
    "totalEpisodes": 74,
    "totalSeasons": 3,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 3 adapts the rest of the Old Testament light novel series, covering Volumes 14–22.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 24,
        "releaseYear": 2008,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 24,
        "releaseYear": 2010,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 26,
        "releaseYear": 2018,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended because the light novel is the original and far ahead.",
    "lightNovelContinueFrom": "New Testament Volume 1. However, reading Old Testament Volume 14 onward or restarting the novels is recommended because Season 3 is heavily compressed.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with New Testament Volume 1, but Season 3 skipped and compressed many details.",
    "adaptationNote": "Index III adapts Volumes 14–22, so the next main novel series is New Testament. Because Season 3 is rushed, serious readers should reread from Volume 14 or earlier.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "A Certain Magical Index III adaptation reference",
        "type": "Episode / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm Season 3 adapts Volumes 14–22."
      },
      {
        "name": "A Certain Magical Index light novel list",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm New Testament follows Old Testament."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "New Testament Volume 1",
    "lightNovelContinueChapter": "Start of New Testament Volume 1",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "New Testament begins after Season 3. Optional context route: review Old Testament Volumes 14-22 because the anime is rushed.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "A Certain Magical Index III adaptation reference",
        "type": "Episode / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm Season 3 adapts Volumes 14–22."
      },
      {
        "name": "A Certain Magical Index light novel list",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm New Testament follows Old Testament."
      }
    ]
  },
  {
    "id": "a-certain-scientific-railgun",
    "title": "A Certain Scientific Railgun",
    "alternativeTitles": [
      "Toaru Kagaku no Railgun"
    ],
    "coverImage": "/covers/a-certain-scientific-railgun.jpg",
    "genres": [
      "Action",
      "Sci-Fi",
      "School"
    ],
    "releaseYear": 2009,
    "animeStatus": "Anime completed",
    "totalEpisodes": 73,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "Railgun T ends around Manga Chapter 97.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Railgun",
        "episodes": 24,
        "releaseYear": 2009,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Railgun S",
        "episodes": 24,
        "releaseYear": 2013,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Railgun T",
        "episodes": 25,
        "releaseYear": 2020,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 97.5 or Chapter 98",
    "lightNovelContinueFrom": "Not applicable as the main route. Railgun is primarily a manga spin-off.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue around Chapter 97.5/98 after Railgun T.",
    "adaptationNote": "Community references place Railgun T at Chapter 97. Use Medium confidence because exact numbering can vary by extra chapter numbering.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Railgun community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm Railgun T ends around Chapter 97."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "97.5 / 98",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 97.5 or Chapter 98 after Railgun T.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Railgun community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm Railgun T ends around Chapter 97."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "goblin-slayer",
    "title": "Goblin Slayer",
    "alternativeTitles": [
      "Goblin Slayer"
    ],
    "coverImage": "/covers/goblin-slayer.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Dark Fantasy"
    ],
    "releaseYear": 2018,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 Episode 12. The movie Goblin's Crown adapts earlier separate material and should be considered in watch/read order.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2018,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is possible but not recommended as the main continuation route because the anime rearranges events and the light novel is the original source.",
    "lightNovelContinueFrom": "Light Novel Volume 9",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Volume 9 is the practical post-Season 2 continuation, but the anime rearranges some events.",
    "adaptationNote": "Goblin Slayer adapts content in a rearranged order. Season 2 continuation is commonly placed around Volume 9, but keep it Medium confidence until manually checked against a full episode-to-volume chart.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Goblin Slayer Wiki Volume 9",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 9 follows Volume 8 and is a valid post-Season 2 volume."
      },
      {
        "name": "Goblin Slayer community discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to cross-check Volume 9 as a practical continuation after Season 2."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "9",
    "lightNovelContinueChapter": "Start of Volume 9",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Light Novel Volume 9 after Season 2. If the viewer skipped Goblin's Crown, check the movie/Volume 5 material first.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Goblin Slayer Wiki Volume 9",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 9 follows Volume 8 and is a valid post-Season 2 volume."
      },
      {
        "name": "Goblin Slayer community discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to cross-check Volume 9 as a practical continuation after Season 2."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "log-horizon",
    "title": "Log Horizon",
    "alternativeTitles": [
      "Log Horizon"
    ],
    "coverImage": "/covers/log-horizon.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Isekai"
    ],
    "releaseYear": 2013,
    "animeStatus": "Anime completed",
    "totalEpisodes": 62,
    "totalSeasons": 3,
    "sourceType": "Light Novel / Web Novel",
    "animeEndsAt": "Season 3 is based around Volume 12 / Collapse of the Round Table material, but published LN status is complicated.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 25,
        "releaseYear": 2013,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 25,
        "releaseYear": 2014,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Destruction of the Round Table",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as main route.",
    "lightNovelContinueFrom": "No clean published light novel continuation available after Season 3; later material exists mainly as web novel / delayed publication.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "There is no simple published LN volume to jump into after Season 3.",
    "adaptationNote": "Season 3 uses Volume 12 web novel material; published LN continuation has been delayed/stalled, so mark as source caught up/complicated.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Log Horizon Season 3 reference",
        "type": "Anime / Web Novel Reference",
        "checked": true,
        "note": "Used to confirm Season 3 relation to Volume 12 material."
      },
      {
        "name": "Log Horizon light novel status discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm published LN status is stalled/limited."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [
      "Game World",
      "Kingdom Building"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "After Volume 12 material, check web novel continuation if available.",
    "recommendedContinueFrom": "Source is caught up/complicated. No clean published LN continuation after Season 3.",
    "continuationStatus": "Source Caught Up",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Log Horizon Season 3 reference",
        "type": "Anime / Web Novel Reference",
        "checked": true,
        "note": "Used to confirm Season 3 relation to Volume 12 material."
      },
      {
        "name": "Log Horizon light novel status discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm published LN status is stalled/limited."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "grimgar-ashes-and-illusions",
    "title": "Grimgar: Ashes and Illusions",
    "alternativeTitles": [
      "Hai to Gensou no Grimgar"
    ],
    "coverImage": "/covers/grimgar-ashes-and-illusions.jpg",
    "genres": [
      "Drama",
      "Fantasy",
      "Isekai"
    ],
    "releaseYear": 2016,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 covers Light Novel Volumes 1–2.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2016,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended because the light novel is the original and much further ahead.",
    "lightNovelContinueFrom": "Light Novel Volume 3",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Volume 3 after the anime.",
    "adaptationNote": "Anime covers Volumes 1–2. Some readers recommend reviewing Volume 2 because the adaptation compresses parts of it.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Grimgar community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm anime covers Volumes 1–2."
      },
      {
        "name": "Grimgar source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm light novel route."
      }
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Light Novel Volume 3. Optional: reread Volume 2 because the anime rushes some material.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Grimgar community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm anime covers Volumes 1–2."
      },
      {
        "name": "Grimgar source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm light novel route."
      }
    ]
  },
  {
    "id": "cautious-hero",
    "title": "Cautious Hero",
    "alternativeTitles": [
      "Shinchou Yuusha"
    ],
    "coverImage": "/covers/cautious-hero.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "releaseYear": 2019,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts the first major arc, commonly treated as covering Light Novel Volumes 1–2.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Light Novel Volume 3",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue with Light Novel Volume 3 after the anime.",
    "adaptationNote": "This is a commonly accepted continuation point, but keep Medium confidence because exact episode-to-volume mapping should be checked if the database needs official precision.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Cautious Hero continuation references",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to estimate Volume 3 as the continuation point."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Overpowered MC"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not recommended as the main route.",
    "recommendedContinueFrom": "Light Novel Volume 3",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Cautious Hero continuation references",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to estimate Volume 3 as the continuation point."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "the-faraway-paladin",
    "title": "The Faraway Paladin",
    "alternativeTitles": [
      "Saihate no Paladin"
    ],
    "coverImage": "/covers/the-faraway-paladin.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Isekai"
    ],
    "releaseYear": 2021,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 adapts later published light novel material, and the post-Season-2 source situation is limited/complicated.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "The Lord of Rust Mountain",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route may be useful but should be checked separately.",
    "lightNovelContinueFrom": "Anime may be close to the available translated/published light novel material. Check latest published volumes before recommending a continuation.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "The post-Season-2 source situation needs a latest-volume check.",
    "adaptationNote": "This clears the manual placeholder but keeps verification on because source availability is complicated.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "The Faraway Paladin anime/light novel source-status discussion",
        "type": "Anime / Light Novel Reference",
        "checked": true,
        "note": "Used to mark the post-Season-2 source situation as limited or complicated."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Fantasy Adventure"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Needs latest volume check",
    "lightNovelContinueChapter": "Needs latest volume check",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Check latest published light novel or manga material before continuing. The anime may be close to source coverage.",
    "continuationStatus": "Source Caught Up",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Faraway Paladin anime/light novel source-status discussion",
        "type": "Anime / Light Novel Reference",
        "checked": true,
        "note": "Used to mark the post-Season-2 source situation as limited or complicated."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "im-standing-on-a-million-lives",
    "title": "I'm Standing on a Million Lives",
    "alternativeTitles": [
      "100-man no Inochi no Ue ni Ore wa Tatteiru"
    ],
    "coverImage": "/covers/im-standing-on-a-million-lives.jpg",
    "genres": [
      "Action",
      "Drama",
      "Fantasy",
      "Isekai"
    ],
    "releaseYear": 2020,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 adapts up to the end of Volume 5, with some anime divergence.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 26",
    "lightNovelContinueFrom": "Not applicable as main route. A novel exists but is not the direct continuation route.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 26 after Season 2.",
    "adaptationNote": "The anime starts diverging from the source material, so Chapter 26 is the safe manga route.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "I'm Standing on a Million Lives continuation discussion",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Volume 6 Chapter 26 continuation."
      },
      {
        "name": "I'm Standing on a Million Lives manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm manga route and ongoing volume count."
      }
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Game World",
      "Fantasy Adventure"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Volume 6",
    "mangaContinueChapter": "26",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 26 / Volume 6 after Season 2.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "I'm Standing on a Million Lives continuation discussion",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Volume 6 Chapter 26 continuation."
      },
      {
        "name": "I'm Standing on a Million Lives manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm manga route and ongoing volume count."
      }
    ]
  },
  {
    "id": "death-march-to-the-parallel-world-rhapsody",
    "title": "Death March to the Parallel World Rhapsody",
    "alternativeTitles": [
      "Death March kara Hajimaru Isekai Kyousoukyoku"
    ],
    "coverImage": "/covers/death-march-to-the-parallel-world-rhapsody.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Isekai"
    ],
    "releaseYear": 2018,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts roughly the first 3 light novel volumes.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2018,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 44",
    "lightNovelContinueFrom": "Light Novel Volume 4",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 4 after the anime.",
    "adaptationNote": "The LN, WN, manga, and anime differ, but Volume 4 is the standard post-anime LN route.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Where Does The Anime Leave Off guide",
        "type": "Anime-to-Light-Novel / Manga Guide",
        "checked": true,
        "note": "Used to confirm LN Volume 4 and manga Chapter 44 continuation."
      },
      {
        "name": "Death March source reference",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm LN and WN differ."
      }
    ],
    "isekaiSubgenres": [
      "Transported",
      "Overpowered MC"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "44",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not recommended as main route because the LN rewrites/reorders web novel material.",
    "recommendedContinueFrom": "Light Novel Volume 4. Manga readers can continue around Chapter 44.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Where Does The Anime Leave Off guide",
        "type": "Anime-to-Light-Novel / Manga Guide",
        "checked": true,
        "note": "Used to confirm LN Volume 4 and manga Chapter 44 continuation."
      },
      {
        "name": "Death March source reference",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm LN and WN differ."
      }
    ]
  },
  {
    "id": "in-another-world-with-my-smartphone",
    "title": "In Another World With My Smartphone",
    "alternativeTitles": [
      "Isekai wa Smartphone to Tomo ni"
    ],
    "coverImage": "/covers/in-another-world-with-my-smartphone.jpg",
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "releaseYear": 2017,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 reaches the Volume 7 Chapter 2 adaptation point, with skipped chapters.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2017,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Light Novel Volume 7, after Chapter 2, but starting Volume 7 from the beginning is safer because chapters were skipped.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Start Volume 7 for safest continuity after Season 2.",
    "adaptationNote": "Season 2 skipped some chapters, so reading from the start of Volume 7 is safer than jumping mid-volume.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Smartphone Season 2 episode discussion",
        "type": "Anime-to-Light-Novel Reference",
        "checked": true,
        "note": "Used to confirm Season 2 adapts through Volume 7 Chapter 2 and skips chapters."
      },
      {
        "name": "Smartphone source overview",
        "type": "Source Material Reference",
        "checked": true,
        "note": "Used to confirm LN route and web novel ending."
      }
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Overpowered MC"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "7",
    "lightNovelContinueChapter": "After Chapter 2 / start Volume 7 for safety",
    "webNovelContinueFrom": "Web novel ended, but light novel is recommended.",
    "recommendedContinueFrom": "Use Light Novel Volume 7 as the transition point, or continue after Volume 7 Chapter 2 if you accept skipped content.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Smartphone Season 2 episode discussion",
        "type": "Anime-to-Light-Novel Reference",
        "checked": true,
        "note": "Used to confirm Season 2 adapts through Volume 7 Chapter 2 and skips chapters."
      },
      {
        "name": "Smartphone source overview",
        "type": "Source Material Reference",
        "checked": true,
        "note": "Used to confirm LN route and web novel ending."
      }
    ]
  },
  {
    "id": "didnt-i-say-to-make-my-abilities-average",
    "title": "Didn't I Say to Make My Abilities Average in the Next Life?!",
    "alternativeTitles": [
      "Watashi, Nouryoku wa Heikinchi de tte Itta yo ne!"
    ],
    "coverImage": "/covers/didnt-i-say-to-make-my-abilities-average.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "releaseYear": 2019,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 is a loose adaptation of early light novel material and rearranges/skips content.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as direct continuation.",
    "lightNovelContinueFrom": "Start from Light Novel Volume 1 recommended.",
    "recommendedRoute": "Light Novel from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Start the light novel from Volume 1 for the cleanest route.",
    "adaptationNote": "A direct continuation point is not ideal because the anime is a loose adaptation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Abilities Average adaptation references",
        "type": "Community Backup / Source Reference",
        "checked": true,
        "note": "Used to confirm loose adaptation caveat."
      }
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Overpowered MC"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Start from Light Novel Volume 1",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime changes tone, rearranges events, and compresses source material.",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Abilities Average adaptation references",
        "type": "Community Backup / Source Reference",
        "checked": true,
        "note": "Used to confirm loose adaptation caveat."
      }
    ]
  },
  {
    "id": "bofuri",
    "title": "BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.",
    "alternativeTitles": [
      "Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu"
    ],
    "coverImage": "/covers/bofuri.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Fantasy",
      "Game"
    ],
    "releaseYear": 2020,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 endpoint is not safely confirmed from strong sources. The manga is behind the anime.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended because it is behind the anime.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 5, but keep unverified until checked against the episode coverage.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Use the light novel route. Manga is behind the anime.",
    "adaptationNote": "Search results show the manga is behind the anime. LN Volume 5 is a likely continuation point but not strong enough for High confidence.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "BOFURI community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm manga is behind the anime and LN route is better."
      },
      {
        "name": "BOFURI novel status reference",
        "type": "Source Material Reference",
        "checked": true,
        "note": "Used to confirm novel route and publication status."
      }
    ],
    "isekaiSubgenres": [
      "Game World",
      "Overpowered MC"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "5",
    "lightNovelContinueChapter": "Start of Volume 5",
    "webNovelContinueFrom": "Web novel exists but published light novel is recommended.",
    "recommendedContinueFrom": "Likely Light Novel Volume 5 after Season 2, but needs verification before marking High confidence.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "BOFURI community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm manga is behind the anime and LN route is better."
      },
      {
        "name": "BOFURI novel status reference",
        "type": "Source Material Reference",
        "checked": true,
        "note": "Used to confirm novel route and publication status."
      }
    ]
  },
  {
    "id": "kuma-kuma-kuma-bear",
    "title": "Kuma Kuma Kuma Bear",
    "alternativeTitles": [
      "Kuma Kuma Kuma Bear Punch!"
    ],
    "coverImage": "/covers/kuma-kuma-kuma-bear.jpg",
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "releaseYear": 2020,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 starts from around Light Novel Volume 5, but the exact post-Season-2 endpoint should be verified before publishing a precise jump.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Punch!",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "If only Season 1 is watched, continue around Light Novel Volume 5. If Season 2 is included, verify the exact endpoint before publishing.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continuation depends on whether Season 2 is included.",
    "adaptationNote": "Season 2 begins from Volume 5 material, so post-Season-2 continuation needs separate verification.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Kuma Kuma Kuma Bear Punch anime/light novel reference",
        "type": "Anime / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm Season 2 begins around Volume 5."
      }
    ],
    "isekaiSubgenres": [
      "Game World",
      "Slow Life"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "Season 1 only: 5 / Season 2 included: needs verification",
    "lightNovelContinueChapter": "Start of relevant next volume",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "If only Season 1 is watched, continue around Light Novel Volume 5. If Season 2 is included, verify the exact endpoint first.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Kuma Kuma Kuma Bear Punch anime/light novel reference",
        "type": "Anime / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm Season 2 begins around Volume 5."
      }
    ]
  },
  {
    "id": "ive-been-killing-slimes-for-300-years",
    "title": "I've Been Killing Slimes for 300 Years",
    "alternativeTitles": [
      "Slime Taoshite 300-nen"
    ],
    "coverImage": "/covers/ive-been-killing-slimes-for-300-years.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Slice of Life"
    ],
    "releaseYear": 2021,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 covers early light novel material. If Season 2 is included, the endpoint must be rechecked.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "If only Season 1 is watched, continue around Light Novel Volume 5. If Season 2 is included, verify the new endpoint.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Continuation depends on whether Season 2 is included.",
    "adaptationNote": "Clears manual placeholder but keeps verification on because Season 2 changes the endpoint.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "I've Been Killing Slimes anime/light novel overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Season 2 endpoint needs later verification."
      }
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Slow Life"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "Season 1 only: 5 / Season 2 included: needs verification",
    "lightNovelContinueChapter": "Start of Volume 5 after Season 1 only",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "If only Season 1 is watched, continue around Light Novel Volume 5. If Season 2 is included, verify the new endpoint first.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "I've Been Killing Slimes anime/light novel overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Season 2 endpoint needs later verification."
      }
    ]
  },
  {
    "id": "restaurant-to-another-world",
    "title": "Restaurant to Another World",
    "alternativeTitles": [
      "Isekai Shokudou"
    ],
    "coverImage": "/covers/restaurant-to-another-world.jpg",
    "genres": [
      "Fantasy",
      "Gourmet",
      "Slice of Life"
    ],
    "releaseYear": 2017,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "The anime adapts episodic food-focused material from the light novel, not a strict linear continuation.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2017,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route can be read from the beginning, but it is not the main source route.",
    "lightNovelContinueFrom": "Start from Volume 1 recommended for full source experience.",
    "recommendedRoute": "Light Novel from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Read from the beginning for the full food-story source experience.",
    "adaptationNote": "Do not show a strict chapter jump because the adaptation is episodic.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Restaurant to Another World anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Episodic adaptation means source-from-beginning is safest."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [
      "Reverse Isekai",
      "Cooking"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Volume 1 optional",
    "mangaContinueChapter": "Chapter 1 optional",
    "lightNovelContinueVolume": "1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Start the light novel from Volume 1 because the anime adapts episodic material and does not give a clean continuation point.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime is episodic and does not map cleanly to a single post-anime volume/chapter.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Restaurant to Another World anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Episodic adaptation means source-from-beginning is safest."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "campfire-cooking-in-another-world",
    "title": "Campfire Cooking in Another World with My Absurd Skill",
    "alternativeTitles": [
      "Tondemo Skill de Isekai Hourou Meshi"
    ],
    "coverImage": "/covers/campfire-cooking-in-another-world.jpg",
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Gourmet"
    ],
    "releaseYear": 2023,
    "animeStatus": "Season 2 announced",
    "totalEpisodes": 12,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 continuation is LN Novel 2 Chapter 8 / manga Volume 7 Chapter 35. Season 2 continuation is manga Volume 11 Chapter 60 according to available guide.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "mangaContinueFrom": "After Season 1: Manga Volume 7 Chapter 35. After Season 2: Manga Volume 11 Chapter 60.",
    "lightNovelContinueFrom": "After Season 1: Novel 2 Chapter 8. Season 2 LN endpoint needs additional volume verification.",
    "recommendedRoute": "Light Novel / Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continuation depends on whether the user watched Season 1 only or Season 2 too.",
    "adaptationNote": "Manga and LN routes diverge somewhat after Season 2; keep needsVerification true if both seasons are counted.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Where Does The Anime Leave Off guide",
        "type": "Anime-to-Light-Novel / Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 1 and Season 2 continuation points."
      }
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Cooking",
      "Fantasy Adventure"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "7 or 11 depending on watched season",
    "mangaContinueChapter": "35 or 60 depending on watched season",
    "lightNovelContinueVolume": "2",
    "lightNovelContinueChapter": "Chapter 8",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "If only Season 1 is watched: LN Novel 2 Chapter 8 or Manga Volume 7 Chapter 35. If Season 2 is watched: Manga Volume 11 Chapter 60, but verify LN volume.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Where Does The Anime Leave Off guide",
        "type": "Anime-to-Light-Novel / Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 1 and Season 2 continuation points."
      }
    ]
  },
  {
    "id": "farming-life-in-another-world",
    "title": "Farming Life in Another World",
    "alternativeTitles": [
      "Isekai Nonbiri Nouka"
    ],
    "coverImage": "/covers/farming-life-in-another-world.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Slice of Life"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early source material with rearranged and omitted events.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Around Manga Chapter 31, but the light novel/source route should be checked if exact continuity matters.",
    "lightNovelContinueFrom": "Light novel from the beginning is recommended for clean source continuity.",
    "recommendedRoute": "Manga / Light Novel from beginning",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Manga Chapter 31 is a rough continuation point, but source-from-beginning is safer.",
    "adaptationNote": "The anime rearranges/omits material, so keep Low confidence and needsVerification true.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Farming Life in Another World anime-to-manga discussion",
        "type": "Community Anime-to-Manga Reference",
        "checked": true,
        "note": "Used to estimate the anime ending around the Chapter 30-31 area."
      },
      {
        "name": "Farming Life timeline/adaptation notes",
        "type": "Adaptation Reference",
        "checked": true,
        "note": "Used to note rearranged and omitted events."
      }
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Farming",
      "Slow Life"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "31",
    "lightNovelContinueVolume": "1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Manga readers can continue around Chapter 31. For safest source continuity, start the light novel from Volume 1.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Farming Life in Another World anime-to-manga discussion",
        "type": "Community Anime-to-Manga Reference",
        "checked": true,
        "note": "Used to estimate the anime ending around the Chapter 30-31 area."
      },
      {
        "name": "Farming Life timeline/adaptation notes",
        "type": "Adaptation Reference",
        "checked": true,
        "note": "Used to note rearranged and omitted events."
      }
    ]
  },
  {
    "id": "the-saints-magic-power-is-omnipotent",
    "title": "The Saint's Magic Power is Omnipotent",
    "alternativeTitles": [
      "Seijo no Maryoku wa Bannou desu"
    ],
    "coverImage": "/covers/the-saints-magic-power-is-omnipotent.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Romance",
      "Slice of Life"
    ],
    "releaseYear": 2021,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 ends around Light Novel Volume 8 material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is behind or less ideal than the light novel for continuation.",
    "lightNovelContinueFrom": "Light Novel Volume 9 after Season 2. Volume 8 can be reviewed for extra detail.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 9 after Season 2.",
    "adaptationNote": "Season 2 reaches Volume 8 material. Volume 9 is the next main light novel point.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Saint's Magic Power Season 2 continuation discussion",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ends around Volume 8 and Volume 9 is the next route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Slow Life",
      "Fantasy Adventure"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "9",
    "lightNovelContinueChapter": "Start of Volume 9",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Light Novel Volume 9 after Season 2. Read Volume 8 first if you want extra detail from the finale material.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Saint's Magic Power Season 2 continuation discussion",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ends around Volume 8 and Volume 9 is the next route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "ascendance-of-a-bookworm",
    "title": "Ascendance of a Bookworm",
    "alternativeTitles": [
      "Honzuki no Gekokujou"
    ],
    "coverImage": "/covers/ascendance-of-a-bookworm.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Slice of Life"
    ],
    "releaseYear": 2019,
    "animeStatus": "New anime announced",
    "totalEpisodes": 36,
    "totalSeasons": 4,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 3 covers Part 2: Apprentice Shrine Maiden Volumes 3–4.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 14,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 10,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "New anime project",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "mangaContinueFrom": "Manga route is behind or split by parts; light novel is recommended.",
    "lightNovelContinueFrom": "Part 3 Volume 1: Adopted Daughter of an Archduke",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Part 3 Volume 1 after Season 3.",
    "adaptationNote": "Season 3 covers Part 2 Volumes 3–4. A later anime season covering Part 3 may change this later.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Ascendance of a Bookworm anime/source reference",
        "type": "Episode / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm Season 3 covers Part 2 Volumes 3–4 and Part 3 follows."
      },
      {
        "name": "J-Novel Club Part 3 Volume 1 listing",
        "type": "Publisher Reference",
        "checked": true,
        "note": "Used to confirm Part 3 Volume 1 route."
      }
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Slow Life"
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Part 3 Volume 1 manga exists but may not be the cleanest continuation",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Part 3 Volume 1",
    "lightNovelContinueChapter": "Start of Part 3 Volume 1",
    "webNovelContinueFrom": "Not recommended as the main route.",
    "recommendedContinueFrom": "Begin Part 3 with its first volume after Season 3.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Ascendance of a Bookworm anime/source reference",
        "type": "Episode / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm Season 3 covers Part 2 Volumes 3–4 and Part 3 follows."
      },
      {
        "name": "J-Novel Club Part 3 Volume 1 listing",
        "type": "Publisher Reference",
        "checked": true,
        "note": "Used to confirm Part 3 Volume 1 route."
      }
    ]
  },
  {
    "id": "snow-white-with-the-red-hair",
    "title": "Snow White with the Red Hair",
    "alternativeTitles": [
      "Akagami no Shirayuki-hime"
    ],
    "coverImage": "/covers/snow-white-with-the-red-hair.jpg",
    "genres": [
      "Fantasy",
      "Romance",
      "Drama",
      "Shoujo"
    ],
    "releaseYear": 2015,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 ends around early manga material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2016,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Around Manga Chapter 32-33",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue around Chapter 33, but starting a few chapters earlier may help.",
    "adaptationNote": "Some chapters and pacing differ, so keep as approximate.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Snow White with the Red Hair anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate continuation around Chapter 33."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 8",
    "mangaContinueChapter": "33",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Around Manga Chapter 33 after Season 2.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Snow White with the Red Hair anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate continuation around Chapter 33."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "yona-of-the-dawn",
    "title": "Yona of the Dawn",
    "alternativeTitles": [
      "Akatsuki no Yona"
    ],
    "coverImage": "/covers/yona-of-the-dawn.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Romance",
      "Shoujo"
    ],
    "releaseYear": 2014,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 reaches the Chapter 47 adaptation point.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 24,
        "releaseYear": 2014,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 48",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 48 after the anime.",
    "adaptationNote": "The anime stops early in the manga, so the manga has much more story after this point.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Yona of the Dawn anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm continuation around Chapter 48."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 8",
    "mangaContinueChapter": "48",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 48 after Season 1.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Yona of the Dawn anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm continuation around Chapter 48."
      }
    ]
  },
  {
    "id": "the-ancient-magus-bride",
    "title": "The Ancient Magus' Bride",
    "alternativeTitles": [
      "Mahoutsukai no Yome"
    ],
    "coverImage": "/covers/the-ancient-magus-bride.jpg",
    "genres": [
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "releaseYear": 2017,
    "animeStatus": "Finished Season",
    "totalEpisodes": 48,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 ends around the College arc material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 24,
        "releaseYear": 2017,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2 split-cour",
        "episodes": 24,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Around Manga Chapter 76",
    "lightNovelContinueFrom": "Not applicable as main route",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue around Chapter 76 after Season 2.",
    "adaptationNote": "Chapter mapping should be verified against the final Season 2 episode because the College arc pacing can vary.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Ancient Magus' Bride anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Season 2 continuation around Chapter 76."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 19",
    "mangaContinueChapter": "76",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Around Manga Chapter 76 after Season 2.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Ancient Magus' Bride anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Season 2 continuation around Chapter 76."
      }
    ]
  },
  {
    "id": "spice-and-wolf",
    "title": "Spice and Wolf",
    "alternativeTitles": [
      "Ookami to Koushinryou"
    ],
    "coverImage": "/covers/spice-and-wolf.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Romance"
    ],
    "releaseYear": 2008,
    "animeStatus": "Anime reboot released",
    "totalEpisodes": 25,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "The 2024 remake Season 1 is expected to cover the early light novels more linearly than the original anime. The original 2008 anime skips Volume 4 and adapts Volumes 1, 2, 3, and 5.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 13,
        "releaseYear": 2008,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2009,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "For 2024 remake Season 1, continue around Light Novel Volume 5. For the original 2008 anime, read Volume 4 first if skipped, then continue beyond Volume 5.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continuation depends on whether the viewer watched the original anime or the remake.",
    "adaptationNote": "Keep needsVerification true because Spice and Wolf has two anime versions with different coverage.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Spice and Wolf community light novel continuation reference",
        "type": "Community / Light Novel Reference",
        "checked": true,
        "note": "Used to compare original anime and remake light novel coverage."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "2024 remake: 5 / Original anime: read 4 then continue beyond 5",
    "lightNovelContinueChapter": "Start of relevant next volume",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Use the light novel route. For the 2024 remake, continue around Volume 5. For the original anime, read Volume 4 first because it was skipped.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Spice and Wolf community light novel continuation reference",
        "type": "Community / Light Novel Reference",
        "checked": true,
        "note": "Used to compare original anime and remake light novel coverage."
      }
    ]
  },
  {
    "id": "toradora",
    "title": "Toradora!",
    "alternativeTitles": [
      "Toradora"
    ],
    "coverImage": "/covers/toradora.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "School"
    ],
    "releaseYear": 2008,
    "animeStatus": "Anime completed",
    "totalEpisodes": 25,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "The anime completes the main light novel story, though the light novel ending has differences.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 25,
        "releaseYear": 2008,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as a post-anime continuation route.",
    "lightNovelContinueFrom": "No main continuation needed. Optional: read the light novel from the beginning or Volume 10 for ending differences.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The main story is complete after the anime.",
    "adaptationNote": "The anime and LN ending differ in details, but there is no required post-anime continuation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Toradora light novel volume overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the main light novel is complete at Volume 10."
      },
      {
        "name": "Toradora anime/light novel ending comparison",
        "type": "Adaptation Reference",
        "checked": true,
        "note": "Used to note ending differences without treating them as a continuation."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "Optional Volume 10 / source from beginning",
    "lightNovelContinueChapter": "Optional source route",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No continuation needed after the anime. Optional: read the light novels from the beginning or Volume 10 for ending differences.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Toradora light novel volume overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the main light novel is complete at Volume 10."
      },
      {
        "name": "Toradora anime/light novel ending comparison",
        "type": "Adaptation Reference",
        "checked": true,
        "note": "Used to note ending differences without treating them as a continuation."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "clannad",
    "title": "Clannad",
    "alternativeTitles": [
      "Clannad"
    ],
    "coverImage": "/covers/clannad.jpg",
    "genres": [
      "Drama",
      "Romance",
      "School",
      "Slice of Life"
    ],
    "releaseYear": 2007,
    "animeStatus": "Anime completed",
    "totalEpisodes": 23,
    "totalSeasons": 1,
    "sourceType": "Visual Novel",
    "animeEndsAt": "The first Clannad anime covers several visual novel routes and leads into Clannad: After Story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 23,
        "releaseYear": 2007,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Not recommended as main route.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Anime sequel / Visual Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The direct continuation is Clannad: After Story.",
    "adaptationNote": "Because the source is a visual novel with multiple routes, the best source experience is from the beginning.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Clannad visual novel/anime overview",
        "type": "Visual Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm sequel relationship with After Story."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Watch Clannad: After Story after Clannad. Optional source route: play the visual novel as the full source experience.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Clannad visual novel/anime overview",
        "type": "Visual Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm sequel relationship with After Story."
      }
    ]
  },
  {
    "id": "clannad-after-story",
    "title": "Clannad: After Story",
    "alternativeTitles": [
      "Clannad After Story"
    ],
    "coverImage": "/covers/clannad-after-story.jpg",
    "genres": [
      "Drama",
      "Romance",
      "Slice of Life"
    ],
    "releaseYear": 2008,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 1,
    "sourceType": "Visual Novel",
    "animeEndsAt": "After Story completes the main anime adaptation of the key Clannad route.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "After Story",
        "episodes": 24,
        "releaseYear": 2008,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Not applicable",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "After Story completes the main story.",
    "adaptationNote": "Extra route details exist in the visual novel, but there is no simple post-anime continuation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Clannad After Story visual novel/anime overview",
        "type": "Visual Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm the anime completes the main route."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No direct source continuation needed. Optional source route: play the Clannad visual novel as the full route experience.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Clannad After Story visual novel/anime overview",
        "type": "Visual Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm the anime completes the main route."
      }
    ]
  },
  {
    "id": "anohana",
    "title": "Anohana: The Flower We Saw That Day",
    "alternativeTitles": [
      "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai"
    ],
    "coverImage": "/covers/anohana.jpg",
    "genres": [
      "Drama",
      "Slice of Life",
      "Supernatural"
    ],
    "releaseYear": 2011,
    "animeStatus": "Anime completed",
    "totalEpisodes": 11,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 11",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 11,
        "releaseYear": 2011,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Original anime. No source continuation available.",
    "lightNovelContinueFrom": "Original anime. No source continuation available.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Anohana is an original anime, so there is no required manga or light novel continuation after the TV ending.",
    "adaptationNote": "The TV anime is credited to the Super Peace Busters creator group; novel and manga versions are adaptations/related material rather than the original source route.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Wikipedia: Anohana",
        "type": "Database",
        "checked": true,
        "note": "Confirmed original anime creator credit, 11-episode TV run, and later novel/manga adaptations."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "No source continuation available.",
    "continuationStatus": "Anime Original",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "This is an original anime entry. No manga, light novel, or web novel source continuation is available.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wikipedia: Anohana",
        "type": "Database",
        "checked": true,
        "note": "Confirmed original anime creator credit, 11-episode TV run, and later novel/manga adaptations."
      }
    ]
  },
  {
    "id": "golden-time",
    "title": "Golden Time",
    "alternativeTitles": [
      "Golden Time"
    ],
    "coverImage": "/covers/golden-time.jpg",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "releaseYear": 2013,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "The anime completes the main story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 24,
        "releaseYear": 2013,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No main continuation needed.",
    "lightNovelContinueFrom": "No main continuation needed. The light novel story is complete.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "No continuation needed after the anime.",
    "adaptationNote": "Golden Time is a completed story. Extra side material exists, but there is no direct post-anime continuation route.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Golden Time source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm the LN/anime story is complete."
      },
      {
        "name": "Golden Time FAQ discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm no Season 2/main continuation."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No source continuation available. The anime completes the main story.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Golden Time source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm the LN/anime story is complete."
      },
      {
        "name": "Golden Time FAQ discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm no Season 2/main continuation."
      }
    ]
  },
  {
    "id": "nisekoi",
    "title": "Nisekoi",
    "alternativeTitles": [
      "Nisekoi: False Love"
    ],
    "coverImage": "/covers/nisekoi.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "School",
      "Shonen"
    ],
    "releaseYear": 2014,
    "animeStatus": "Anime completed",
    "totalEpisodes": 32,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 adapts selected manga chapters through roughly the Chapter 106 area, while skipping and rearranging some material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 20,
        "releaseYear": 2014,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2015,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 107, but starting earlier or from the beginning is recommended for skipped chapters.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Manga continues far beyond the anime.",
    "adaptationNote": "Nisekoi anime skips and rearranges some chapters, so Chapter 107 is a practical continuation point rather than a perfect clean jump.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Nisekoi community continuation guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm the anime roughly covers through Chapter 106."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 12",
    "mangaContinueChapter": "107",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Continue around Manga Chapter 107 after Season 2, but start earlier or from Chapter 1 if you want skipped chapters.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Nisekoi community continuation guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm the anime roughly covers through Chapter 106."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "saekano",
    "title": "Saekano: How to Raise a Boring Girlfriend",
    "alternativeTitles": [
      "Saenai Heroine no Sodatekata"
    ],
    "coverImage": "/covers/saekano.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "School"
    ],
    "releaseYear": 2015,
    "animeStatus": "Anime completed",
    "totalEpisodes": 23,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "The TV anime plus Saekano: Fine movie completes the main light novel story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Flat",
        "episodes": 11,
        "releaseYear": 2017,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "No main continuation needed. Optional: read the light novel from the beginning for cut details.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "No continuation is needed after the movie.",
    "adaptationNote": "Saekano: Fine functions as the anime ending for the main story.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Saekano anime/movie/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence. Main completion route should be verified if publishing at High confidence."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "The anime plus movie completes the main story. Optional: read the light novel from the beginning for extra details.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Saekano anime/movie/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence. Main completion route should be verified if publishing at High confidence."
      }
    ]
  },
  {
    "id": "oregairu",
    "title": "My Teen Romantic Comedy SNAFU",
    "alternativeTitles": [
      "Yahari Ore no Seishun Love Comedy wa Machigatteiru",
      "Oregairu"
    ],
    "coverImage": "/covers/oregairu.jpg",
    "genres": [
      "Comedy",
      "Drama",
      "Romance",
      "School"
    ],
    "releaseYear": 2013,
    "animeStatus": "Anime completed",
    "totalEpisodes": 38,
    "totalSeasons": 3,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 3 adapts through the end of the main light novel story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 13,
        "releaseYear": 2013,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 13,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Climax",
        "episodes": 12,
        "releaseYear": 2020,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "No main continuation needed after Season 3. Optional: read Volume 14.5, Shin, or start the light novels from Volume 1 for cut details.",
    "recommendedRoute": "No source continuation / Optional light novel extras",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The main story is complete after Season 3.",
    "adaptationNote": "The anime reaches the main LN ending, but the light novel contains more narration and skipped details. Optional extras exist after the main ending.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "OreGairu light novel volume list",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the main light novel structure and extra volumes."
      },
      {
        "name": "OreGairu community continuation FAQ",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm that Season 3 completes the main story and that reading from Volume 1 is optional for skipped details."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "Optional 14.5 / Shin material",
    "lightNovelContinueChapter": "Optional extra material",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "The anime completes the main light novel story. Optional: read Volume 14.5 or restart the light novels for cut inner monologue and skipped details.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "OreGairu light novel volume list",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the main light novel structure and extra volumes."
      },
      {
        "name": "OreGairu community continuation FAQ",
        "type": "Community Reference",
        "checked": true,
        "note": "Used to confirm that Season 3 completes the main story and that reading from Volume 1 is optional for skipped details."
      }
    ]
  },
  {
    "id": "haganai",
    "title": "Haganai",
    "alternativeTitles": [
      "Boku wa Tomodachi ga Sukunai"
    ],
    "coverImage": "/covers/haganai.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "School"
    ],
    "releaseYear": 2011,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 ends before the light novel conclusion. Exact episode-to-volume endpoint needs caution.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2011,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Next",
        "episodes": 12,
        "releaseYear": 2013,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 9, but starting from Volume 8 is safer.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Volume 8 is safer; Volume 9 is closer to post-anime material.",
    "adaptationNote": "Season 2 endpoint is close to later LN material, but exact mapping should be checked before marking High confidence.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Haganai anime/source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm Season 1 coverage and LN route."
      },
      {
        "name": "Haganai Volume 9 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm later volume route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "8 / 9",
    "lightNovelContinueChapter": "Start of Volume 8 or 9",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start from Volume 8 for safer continuity, or Volume 9 if you only want post-anime material.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Haganai anime/source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm Season 1 coverage and LN route."
      },
      {
        "name": "Haganai Volume 9 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm later volume route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "tomo-chan-is-a-girl",
    "title": "Tomo-chan Is a Girl!",
    "alternativeTitles": [
      "Tomo-chan wa Onnanoko!"
    ],
    "coverImage": "/covers/tomo-chan-is-a-girl.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "School"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Episode 13 completes the main manga story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 13,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No main continuation needed. Manga can be read from the beginning for source version.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The anime completes the main story.",
    "adaptationNote": "Treat the manga as optional source reading, not required continuation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Tomo-chan anime finale / manga completion discussion",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm the anime adapts the manga to the end."
      },
      {
        "name": "Tomo-chan manga publication overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm the manga is complete."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No continuation needed. The anime adapts the main manga story to completion.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Tomo-chan anime finale / manga completion discussion",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm the anime adapts the manga to the end."
      },
      {
        "name": "Tomo-chan manga publication overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm the manga is complete."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "more-than-a-married-couple-but-not-lovers",
    "title": "More Than a Married Couple, But Not Lovers",
    "alternativeTitles": [
      "Fuufu Ijou, Koibito Miman."
    ],
    "coverImage": "/covers/more-than-a-married-couple-but-not-lovers.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "School"
    ],
    "releaseYear": 2022,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 ends around Manga Chapter 27-28.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 29 or Chapter 30",
    "lightNovelContinueFrom": "Not applicable. The source material is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue around Chapter 29/30 after Season 1.",
    "adaptationNote": "Chapter 29/30 is a common post-anime range, but keep Medium confidence because exact episode mapping can vary.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "More Than a Married Couple anime-to-manga discussion",
        "type": "Anime-to-Manga Guide / Community Backup",
        "checked": true,
        "note": "Used to confirm Season 1 ending around Chapter 27-28 and continuation around Chapter 29/30."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 4",
    "mangaContinueChapter": "29/30",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 29 or Chapter 30 after the anime.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "More Than a Married Couple anime-to-manga discussion",
        "type": "Anime-to-Manga Guide / Community Backup",
        "checked": true,
        "note": "Used to confirm Season 1 ending around Chapter 27-28 and continuation around Chapter 29/30."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "shikimoris-not-just-a-cutie",
    "title": "Shikimori's Not Just a Cutie",
    "alternativeTitles": [
      "Kawaii dake ja Nai Shikimori-san"
    ],
    "coverImage": "/covers/shikimoris-not-just-a-cutie.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "School"
    ],
    "releaseYear": 2022,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 adapts selected early manga chapters and rearranges/skips some slice-of-life material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Around Manga Chapter 63, but starting earlier or from Chapter 1 is safer for skipped chapters.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Manga continues beyond the anime.",
    "adaptationNote": "Because the anime selects and rearranges chapters, Chapter 63 is a practical estimate, not a perfect clean jump.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Shikimori manga chapter list",
        "type": "Manga Chapter Reference",
        "checked": true,
        "note": "Used to confirm manga chapter structure."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 7",
    "mangaContinueChapter": "63",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Continue around Manga Chapter 63, but start earlier or from Chapter 1 if you want skipped material.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Shikimori manga chapter list",
        "type": "Manga Chapter Reference",
        "checked": true,
        "note": "Used to confirm manga chapter structure."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "wotakoi",
    "title": "Wotakoi: Love is Hard for Otaku",
    "alternativeTitles": [
      "Wotaku ni Koi wa Muzukashii"
    ],
    "coverImage": "/covers/wotakoi.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "Workplace"
    ],
    "releaseYear": 2018,
    "animeStatus": "Anime completed",
    "totalEpisodes": 11,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The TV anime and OVAs adapt selected manga material but do not fully cover the manga in strict order.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 11,
        "releaseYear": 2018,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Around Manga Volume 5, but starting from the beginning is recommended because content is adapted selectively.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Starting from the beginning gives the cleanest manga experience.",
    "adaptationNote": "Because Wotakoi is adapted selectively, a simple chapter jump can miss chapters.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Wotakoi anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Volume 5 area and selective adaptation caveat."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "5",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start from the beginning, or around Volume 5 if the user has watched all anime/OVA material.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime adapts selected chapters and OVAs cover separate material.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wotakoi anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Volume 5 area and selective adaptation caveat."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "monthly-girls-nozaki-kun",
    "title": "Monthly Girls' Nozaki-kun",
    "alternativeTitles": [
      "Gekkan Shoujo Nozaki-kun"
    ],
    "coverImage": "/covers/monthly-girls-nozaki-kun.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "School"
    ],
    "releaseYear": 2014,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime and OVAs cover selected chapters through around Chapter 46, but skip/rearrange material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2014,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 47 if skipping, but starting from Chapter 1 is recommended.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Read from the beginning for the best comedy pacing.",
    "adaptationNote": "Chapter 47 is a useful rough continuation, but beginning is more reliable because chapters were skipped.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Monthly Girls' Nozaki-kun anime-to-manga discussion",
        "type": "Anime-to-Manga Guide / Community Backup",
        "checked": true,
        "note": "Used to confirm anime covers around Chapter 46 with skipped material."
      },
      {
        "name": "Monthly Girls' Nozaki-kun manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm manga is ongoing and has later chapters."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 5 if skipping",
    "mangaContinueChapter": "47",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start from the beginning for skipped chapters. If skipping, continue around Chapter 47.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime skips several manga chapters and adapts comedy material selectively.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Monthly Girls' Nozaki-kun anime-to-manga discussion",
        "type": "Anime-to-Manga Guide / Community Backup",
        "checked": true,
        "note": "Used to confirm anime covers around Chapter 46 with skipped material."
      },
      {
        "name": "Monthly Girls' Nozaki-kun manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm manga is ongoing and has later chapters."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "skip-and-loafer",
    "title": "Skip and Loafer",
    "alternativeTitles": [
      "Skip to Loafer"
    ],
    "coverImage": "/covers/skip-and-loafer.jpg",
    "genres": [
      "Comedy",
      "Drama",
      "School",
      "Slice of Life"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 adapts the early manga chapters and ends around the Chapter 23-24 transition.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 24",
    "lightNovelContinueFrom": "Not applicable. The source material is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Manga continues beyond the anime.",
    "adaptationNote": "Chapter 24 is the practical continuation point, but keep Medium confidence because exact chapter mapping should be checked.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Skip and Loafer anime/manga overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga source and anime season structure."
      },
      {
        "name": "Skip and Loafer community continuation discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used as backup for the Chapter 24 continuation estimate."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 4",
    "mangaContinueChapter": "24",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 24 after Season 1. Starting a few chapters earlier is optional.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Skip and Loafer anime/manga overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga source and anime season structure."
      },
      {
        "name": "Skip and Loafer community continuation discussion",
        "type": "Community Reference",
        "checked": true,
        "note": "Used as backup for the Chapter 24 continuation estimate."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "insomniacs-after-school",
    "title": "Insomniacs After School",
    "alternativeTitles": [
      "Kimi wa Houkago Insomnia"
    ],
    "coverImage": "/covers/insomniacs-after-school.jpg",
    "genres": [
      "Romance",
      "School",
      "Slice of Life"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The final episode reaches the Chapter 55-57 adaptation range with some omitted material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 13,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 58",
    "lightNovelContinueFrom": "Not applicable. The source material is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 58 after the anime.",
    "adaptationNote": "The anime ends around Chapters 55-57 and leaves some details out, so Chapter 58 is the next route.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "DualShockers Insomniacs After School manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm final episode adapts Chapters 55-57."
      },
      {
        "name": "Insomniacs After School manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm manga completion and volume count."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 7",
    "mangaContinueChapter": "58",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 58 after Season 1. Starting a few chapters earlier is optional.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "DualShockers Insomniacs After School manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm final episode adapts Chapters 55-57."
      },
      {
        "name": "Insomniacs After School manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm manga completion and volume count."
      }
    ]
  },
  {
    "id": "the-dangers-in-my-heart",
    "title": "The Dangers in My Heart",
    "alternativeTitles": [
      "Boku no Kokoro no Yabai Yatsu"
    ],
    "coverImage": "/covers/the-dangers-in-my-heart.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "School"
    ],
    "releaseYear": 2023,
    "animeStatus": "Finished Season",
    "totalEpisodes": 25,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 ends around Manga Chapter 113.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 13,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 114",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue around Chapter 114 after Season 2.",
    "adaptationNote": "Exact chapter mapping should be verified again before marking High confidence, but Chapter 114 is the practical continuation area.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "The Dangers in My Heart anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Season 2 continuation around Chapter 114."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 9",
    "mangaContinueChapter": "114",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 114 after Season 2.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Dangers in My Heart anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Season 2 continuation around Chapter 114."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "teasing-master-takagi-san",
    "title": "Teasing Master Takagi-san",
    "alternativeTitles": [
      "Karakai Jouzu no Takagi-san"
    ],
    "coverImage": "/covers/teasing-master-takagi-san.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "School"
    ],
    "releaseYear": 2018,
    "animeStatus": "Anime completed",
    "totalEpisodes": 36,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "The anime seasons and movie use manga material plus anime-original/expanded ending material, so there is no clean chapter continuation after the full anime/movie route.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2018,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Start from Manga Chapter 1 recommended for full source experience.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Manga is best read from the beginning.",
    "adaptationNote": "Do not show a single continuation chapter after the movie. The manga is complete and best read from the start.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Teasing Master Takagi-san manga ending reference",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm the manga is complete."
      },
      {
        "name": "Takagi-san manga chapter list",
        "type": "Chapter / Volume Reference",
        "checked": true,
        "note": "Used to confirm manga chapter/volume structure."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Volume 1",
    "mangaContinueChapter": "1",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start the manga from Chapter 1 for the full source version. The anime/movie route does not have a clean post-anime chapter jump.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime adapts and rearranges chapters, and the movie has anime-original/expanded ending material.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Teasing Master Takagi-san manga ending reference",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm the manga is complete."
      },
      {
        "name": "Takagi-san manga chapter list",
        "type": "Chapter / Volume Reference",
        "checked": true,
        "note": "Used to confirm manga chapter/volume structure."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "dont-toy-with-me-miss-nagatoro",
    "title": "Don't Toy with Me, Miss Nagatoro",
    "alternativeTitles": [
      "Ijiranaide, Nagatoro-san"
    ],
    "coverImage": "/covers/dont-toy-with-me-miss-nagatoro.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "School"
    ],
    "releaseYear": 2021,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 ends around Manga Chapter 91.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Second Attack",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 92",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue around Chapter 92 after Season 2.",
    "adaptationNote": "Some small chapters may be skipped or rearranged, so starting slightly earlier is optional.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Nagatoro anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate continuation around Chapter 92."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 12",
    "mangaContinueChapter": "92",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 92 after Season 2.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Nagatoro anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate continuation around Chapter 92."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "uzaki-chan-wants-to-hang-out",
    "title": "Uzaki-chan Wants to Hang Out!",
    "alternativeTitles": [
      "Uzaki-chan wa Asobitai!"
    ],
    "coverImage": "/covers/uzaki-chan-wants-to-hang-out.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "Slice of Life"
    ],
    "releaseYear": 2020,
    "animeStatus": "Finished Season",
    "totalEpisodes": 25,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 ends around Manga Chapter 69.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 13,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 70",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 70 after Season 2.",
    "adaptationNote": "Season 2 covers through about Chapter 69, so Chapter 70 is the practical continuation point.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Uzaki-chan Season 2 anime-to-manga discussion",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 70 as the post-Season-2 continuation point."
      },
      {
        "name": "Uzaki-chan manga volume/chapter list",
        "type": "Manga Chapter Reference",
        "checked": true,
        "note": "Used to confirm manga chapter structure."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "70",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 70 after Season 2.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Uzaki-chan Season 2 anime-to-manga discussion",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 70 as the post-Season-2 continuation point."
      },
      {
        "name": "Uzaki-chan manga volume/chapter list",
        "type": "Manga Chapter Reference",
        "checked": true,
        "note": "Used to confirm manga chapter structure."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "my-love-story-with-yamada-kun-at-lv999",
    "title": "My Love Story with Yamada-kun at Lv999",
    "alternativeTitles": [
      "Loving Yamada at Lv999",
      "Yamada-kun to Lv999 no Koi wo Suru"
    ],
    "coverImage": "/covers/my-love-story-with-yamada-kun-at-lv999.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "Video Games"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 reaches the Chapter 41 adaptation point.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 13,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 42",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 42 after the anime.",
    "adaptationNote": "The anime covers early manga material and Chapter 42 is the next reading point.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Yamada-kun Lv999 anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm continuation around Chapter 42."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 5",
    "mangaContinueChapter": "42",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 42 after Season 1.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Yamada-kun Lv999 anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm continuation around Chapter 42."
      }
    ]
  },
  {
    "id": "a-sign-of-affection",
    "title": "A Sign of Affection",
    "alternativeTitles": [
      "Yubisaki to Renren"
    ],
    "coverImage": "/covers/a-sign-of-affection.jpg",
    "genres": [
      "Romance",
      "Shoujo",
      "Slice of Life"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 ends around early manga material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Around Manga Chapter 21",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue around Chapter 21, but starting a few chapters earlier is safe.",
    "adaptationNote": "Exact chapter mapping should be rechecked before marking High confidence.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "A Sign of Affection anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Season 1 continuation around Chapter 21."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 6",
    "mangaContinueChapter": "21",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Around Manga Chapter 21 after Season 1.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "A Sign of Affection anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Season 1 continuation around Chapter 21."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "fruits-basket",
    "title": "Fruits Basket",
    "alternativeTitles": [
      "Fruits Basket 2019"
    ],
    "coverImage": "/covers/fruits-basket.jpg",
    "genres": [
      "Drama",
      "Romance",
      "Shoujo",
      "Supernatural"
    ],
    "releaseYear": 2019,
    "animeStatus": "Anime completed",
    "totalEpisodes": 63,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "The 2019 anime adaptation completes the main manga story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 25,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 25,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "The Final",
        "episodes": 13,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No main continuation needed. Optional sequel: Fruits Basket Another.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The main story is complete in the anime.",
    "adaptationNote": "Fruits Basket Another is sequel/spin-off material, not a direct missing continuation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Fruits Basket manga/anime completion references",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm the 2019 anime completes the main manga story."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "The anime completes the main manga story. Optional: read Fruits Basket Another as sequel/spin-off material.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Fruits Basket manga/anime completion references",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm the 2019 anime completes the main manga story."
      }
    ]
  },
  {
    "id": "ouran-high-school-host-club",
    "title": "Ouran High School Host Club",
    "alternativeTitles": [
      "Ouran Koukou Host Club"
    ],
    "coverImage": "/covers/ouran-high-school-host-club.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "School",
      "Shoujo"
    ],
    "releaseYear": 2006,
    "animeStatus": "Anime completed",
    "totalEpisodes": 26,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime has an anime-original ending and does not complete the manga.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 26,
        "releaseYear": 2006,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Around Manga Chapter 37, but starting from the beginning is recommended because the anime changes and rearranges material.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Starting the manga from the beginning is the cleanest route.",
    "adaptationNote": "Chapter 37 is often used as a rough continuation point, but the anime changes enough that beginning is safer.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Ouran anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Chapter 37 as a rough continuation."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 9",
    "mangaContinueChapter": "37",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start from the beginning, or around Chapter 37 if the user wants a rough continuation.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime has an original ending and rearranged content.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Ouran anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate Chapter 37 as a rough continuation."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "maid-sama",
    "title": "Maid Sama!",
    "alternativeTitles": [
      "Kaichou wa Maid-sama!"
    ],
    "coverImage": "/covers/maid-sama.jpg",
    "genres": [
      "Comedy",
      "Romance",
      "School",
      "Shoujo"
    ],
    "releaseYear": 2010,
    "animeStatus": "Anime completed",
    "totalEpisodes": 26,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime reaches the Chapter 32 adaptation point.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 26,
        "releaseYear": 2010,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 33",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 33 after the anime.",
    "adaptationNote": "Starting a few chapters earlier is optional if the user wants smoother character pacing.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Maid Sama anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm continuation around Chapter 33."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 8",
    "mangaContinueChapter": "33",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 33 after the anime.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Maid Sama anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm continuation around Chapter 33."
      }
    ]
  },
  {
    "id": "saga-of-tanya-the-evil",
    "title": "Saga of Tanya the Evil",
    "alternativeTitles": [
      "Youjo Senki"
    ],
    "coverImage": "/covers/saga-of-tanya-the-evil.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Military",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Overpowered MC"
    ],
    "releaseYear": 2017,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 and the movie adapt early light novel material. If only Season 1 is watched, the continuation is earlier than if the movie is included.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2017,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "After Season 1 plus movie, likely Light Novel Volume 5. If only Season 1 is watched, verify from earlier volumes first.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Light novel is the best route after the anime/movie.",
    "adaptationNote": "The correct volume depends on whether the viewer watched only Season 1 or also the movie.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Saga of Tanya the Evil anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Movie-inclusive volume estimate needs manual verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "Likely 5 after movie",
    "lightNovelContinueChapter": "Start of Volume 5 after movie",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 5 after Season 1 plus movie, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Saga of Tanya the Evil anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Movie-inclusive volume estimate needs manual verification."
      }
    ]
  },
  {
    "id": "the-devil-is-a-part-timer",
    "title": "The Devil Is a Part-Timer!",
    "alternativeTitles": [
      "Hataraku Maou-sama!"
    ],
    "coverImage": "/covers/the-devil-is-a-part-timer.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Reverse Isekai"
    ],
    "isekaiSubgenres": [
      "Reverse Isekai",
      "Comedy"
    ],
    "releaseYear": 2013,
    "animeStatus": "Finished Season",
    "totalEpisodes": 37,
    "totalSeasons": 3,
    "sourceType": "Light Novel",
    "animeEndsAt": "After Season 2 Part 2, the anime reaches the material before the next major light novel continuation.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 13,
        "releaseYear": 2013,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Light Novel Volume 11",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 11 after Season 2 Part 2.",
    "adaptationNote": "The light novel is complete, and Volume 11 is the practical post-Season-2-Part-2 continuation point.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "The Devil Is a Part-Timer community continuation guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Volume 11 as the post-Season-2-Part-2 continuation."
      },
      {
        "name": "The Devil Is a Part-Timer Season 2 episode reference",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm Season 2 Part 2 structure."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "11",
    "lightNovelContinueChapter": "Start of Volume 11",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Light Novel Volume 11 after Season 2 Part 2.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Devil Is a Part-Timer community continuation guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Volume 11 as the post-Season-2-Part-2 continuation."
      },
      {
        "name": "The Devil Is a Part-Timer Season 2 episode reference",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm Season 2 Part 2 structure."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "gate",
    "title": "Gate",
    "alternativeTitles": [
      "Gate: Jieitai Kanochi nite, Kaku Tatakaeri"
    ],
    "coverImage": "/covers/gate.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Military",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "releaseYear": 2015,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel / Manga",
    "animeEndsAt": "Season 2 ends around the point where manga Chapter 86 is a commonly recommended continuation.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2016,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 86",
    "lightNovelContinueFrom": "Novel route exists, but manga continuation is clearer for anime viewers.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue around Manga Chapter 86 after Season 2.",
    "adaptationNote": "Manga Chapter 86 is commonly cited as the anime continuation point, but keep Medium confidence because anime/novel/manga versions differ.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Gate community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm manga Chapter 86 as a common Season 2 continuation point."
      },
      {
        "name": "Gate source overview",
        "type": "Novel / Manga Reference",
        "checked": true,
        "note": "Used to confirm novel and manga routes."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "86",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Manga Chapter 86 after Season 2.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Gate community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm manga Chapter 86 as a common Season 2 continuation point."
      },
      {
        "name": "Gate source overview",
        "type": "Novel / Manga Reference",
        "checked": true,
        "note": "Used to confirm novel and manga routes."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "the-familiar-of-zero",
    "title": "The Familiar of Zero",
    "alternativeTitles": [
      "Zero no Tsukaima"
    ],
    "coverImage": "/covers/the-familiar-of-zero.jpg",
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Fantasy Adventure"
    ],
    "releaseYear": 2006,
    "animeStatus": "Anime completed",
    "totalEpisodes": 49,
    "totalSeasons": 4,
    "sourceType": "Light Novel",
    "animeEndsAt": "The anime reaches its own completed ending, but the light novel route differs and is not a clean chapter-by-chapter continuation.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 13,
        "releaseYear": 2006,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Knight of the Twin Moons",
        "episodes": 12,
        "releaseYear": 2007,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Rondo of Princesses",
        "episodes": 12,
        "releaseYear": 2008,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "F",
        "episodes": 12,
        "releaseYear": 2012,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Start from Light Novel Volume 1 recommended for the source route.",
    "recommendedRoute": "Light Novel from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Read the light novel from the beginning for the source version.",
    "adaptationNote": "Do not show a single post-anime volume unless the anime-vs-LN mapping is manually checked in detail.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "The Familiar of Zero anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Full anime-to-LN mapping needs manual verification."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start the light novel from Volume 1 for the source route. The anime is not a clean direct continuation map.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime has adapted/modified material and reaches its own completed ending, so a clean LN jump is not reliable.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Familiar of Zero anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Full anime-to-LN mapping needs manual verification."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "drifters",
    "title": "Drifters",
    "alternativeTitles": [
      "Drifters"
    ],
    "coverImage": "/covers/drifters.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Historical",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Fantasy Adventure"
    ],
    "releaseYear": 2016,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 ends around early middle manga material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2016,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Around Manga Chapter 45. Start a few chapters earlier if the version numbering differs.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue around Chapter 45, but verify exact numbering before marking High confidence.",
    "adaptationNote": "Different guides list slightly different end points because of OVA and episode coverage. Keep as approximate.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Drifters anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate continuation around Chapter 45."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 5",
    "mangaContinueChapter": "45",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Around Manga Chapter 45.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Drifters anime-to-manga references",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate continuation around Chapter 45."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "by-the-grace-of-the-gods",
    "title": "By the Grace of the Gods",
    "alternativeTitles": [
      "Kami-tachi ni Hirowareta Otoko"
    ],
    "coverImage": "/covers/by-the-grace-of-the-gods.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Slice of Life"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Slow Life"
    ],
    "releaseYear": 2020,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 continuation point is not fully verified. The anime follows the LN route but may rearrange details.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 6, but needs verification before publishing as final.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but exact volume should be verified.",
    "adaptationNote": "Available sources confirm LN/web novel/manga routes, but exact Season 2 endpoint is not strongly verified.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "By the Grace of the Gods source overview",
        "type": "Source Material Reference",
        "checked": true,
        "note": "Used to confirm the LN route and adaptation status."
      },
      {
        "name": "J-Novel Club community discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to note that anime does not follow the LN directly in every detail."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "6",
    "lightNovelContinueChapter": "Start of Volume 6",
    "webNovelContinueFrom": "Not recommended as main route because LN is revised.",
    "recommendedContinueFrom": "Likely Light Novel Volume 6 after Season 2, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "By the Grace of the Gods source overview",
        "type": "Source Material Reference",
        "checked": true,
        "note": "Used to confirm the LN route and adaptation status."
      },
      {
        "name": "J-Novel Club community discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to note that anime does not follow the LN directly in every detail."
      }
    ]
  },
  {
    "id": "skeleton-knight-in-another-world",
    "title": "Skeleton Knight in Another World",
    "alternativeTitles": [
      "Gaikotsu Kishi-sama, Tadaima Isekai e Odekakechuu"
    ],
    "coverImage": "/covers/skeleton-knight-in-another-world.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Game World",
      "Overpowered MC",
      "Fantasy Adventure"
    ],
    "releaseYear": 2022,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material and ends before later source arcs.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is possible but not recommended as the main route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 4 after Season 1, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Light novel is the best route after the anime.",
    "adaptationNote": "Volume 4 is the practical estimate, but keep needsVerification true until confirmed.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Skeleton Knight in Another World anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 4 estimate needs manual verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 4 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Skeleton Knight in Another World anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 4 estimate needs manual verification."
      }
    ]
  },
  {
    "id": "the-8th-son-are-you-kidding-me",
    "title": "The 8th Son? Are You Kidding Me?",
    "alternativeTitles": [
      "Hachi-nan tte, Sore wa Nai deshou!"
    ],
    "coverImage": "/covers/the-8th-son-are-you-kidding-me.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Adventure"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Fantasy Adventure"
    ],
    "releaseYear": 2020,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, likely through the first several volumes.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2020,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 6, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but exact volume should be checked.",
    "adaptationNote": "Low-confidence estimate only. Keep needsVerification true.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "The 8th Son anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 6 estimate needs manual verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "6",
    "lightNovelContinueChapter": "Start of Volume 6",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 6 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The 8th Son anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 6 estimate needs manual verification."
      }
    ]
  },
  {
    "id": "isekai-cheat-magician",
    "title": "Isekai Cheat Magician",
    "alternativeTitles": [
      "Isekai Cheat Magician"
    ],
    "coverImage": "/covers/isekai-cheat-magician.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Overpowered MC"
    ],
    "releaseYear": 2019,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material. Exact endpoint is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as main route.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 5, but needs verification before publishing.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the recommended route, but exact volume should be checked.",
    "adaptationNote": "This improves the placeholder but should stay Low confidence until verified.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Isekai Cheat Magician source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm light novel source route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "5",
    "lightNovelContinueChapter": "Start of Volume 5",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 5, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Isekai Cheat Magician source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm light novel source route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "parallel-world-pharmacy",
    "title": "Parallel World Pharmacy",
    "alternativeTitles": [
      "Isekai Yakkyoku"
    ],
    "coverImage": "/covers/parallel-world-pharmacy.jpg",
    "genres": [
      "Fantasy",
      "Medical",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Slow Life"
    ],
    "releaseYear": 2022,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 Episode 12 corresponds to Light Novel Volume 2 material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is possible but LN is the original route.",
    "lightNovelContinueFrom": "Light Novel Volume 3",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 3 after the anime.",
    "adaptationNote": "Volume 2 maps to Episodes 7–12, so Volume 3 is the next LN route. The LN series ended with Volume 10.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Parallel World Pharmacy Volume 2 reference",
        "type": "Volume / Episode Reference",
        "checked": true,
        "note": "Used to confirm Volume 2 covers Episodes 7–12."
      },
      {
        "name": "Parallel World Pharmacy novel ending reference",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm LN ended with Volume 10."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Light Novel Volume 3",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Parallel World Pharmacy Volume 2 reference",
        "type": "Volume / Episode Reference",
        "checked": true,
        "note": "Used to confirm Volume 2 covers Episodes 7–12."
      },
      {
        "name": "Parallel World Pharmacy novel ending reference",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm LN ended with Volume 10."
      }
    ]
  },
  {
    "id": "sweet-reincarnation",
    "title": "Sweet Reincarnation",
    "alternativeTitles": [
      "Okashi na Tensei"
    ],
    "coverImage": "/covers/sweet-reincarnation.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Cooking"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Cooking",
      "Kingdom Building"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, but the exact endpoint is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as main route.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 3, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but exact volume should be checked.",
    "adaptationNote": "Low-confidence estimate only. Do not mark verified yet.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Sweet Reincarnation anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs manual verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 3 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Sweet Reincarnation anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs manual verification."
      }
    ]
  },
  {
    "id": "reborn-as-a-vending-machine",
    "title": "Reborn as a Vending Machine, I Now Wander the Dungeon",
    "alternativeTitles": [
      "Jidou Hanbaiki ni Umarekawatta Ore wa Meikyuu wo Samayou"
    ],
    "coverImage": "/covers/reborn-as-a-vending-machine.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Dungeon"
    ],
    "releaseYear": 2023,
    "animeStatus": "Season 2 announced",
    "totalEpisodes": 12,
    "totalSeasons": 2,
    "sourceType": "Light Novel / Web Novel",
    "animeEndsAt": "Season 1 adapts early light novel material. Later anime coverage changes the endpoint and should be verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "If only Season 1 is watched, continue around Light Novel Volume 3. If later seasons are included, verify the newer endpoint.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Light novel is the main continuation route.",
    "adaptationNote": "Keep a later-season caveat because the endpoint changes when newer anime coverage is included.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Reborn as a Vending Machine anime/light novel overview",
        "type": "Anime / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm light novel route and season caveat."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "Season 1 only: 3 / later seasons: needs verification",
    "lightNovelContinueChapter": "Start of Volume 3 after Season 1 only",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "If only Season 1 is watched, continue around Light Novel Volume 3. If later anime seasons are included, verify the newer endpoint.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Reborn as a Vending Machine anime/light novel overview",
        "type": "Anime / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm light novel route and season caveat."
      }
    ]
  },
  {
    "id": "am-i-actually-the-strongest",
    "title": "Am I Actually the Strongest?",
    "alternativeTitles": [
      "Jitsu wa Ore, Saikyou deshita?"
    ],
    "coverImage": "/covers/am-i-actually-the-strongest.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Overpowered MC"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts the first two light novel volumes.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not the recommended primary route.",
    "lightNovelContinueFrom": "Light Novel Volume 3",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 3 after the anime.",
    "adaptationNote": "The anime adapts Volumes 1–2, making Volume 3 the next reading point.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Am I Actually the Strongest continuation guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Volume 3 as the continuation point."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not recommended as the main route.",
    "recommendedContinueFrom": "Light Novel Volume 3",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Am I Actually the Strongest continuation guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Volume 3 as the continuation point."
      }
    ]
  },
  {
    "id": "my-unique-skill-makes-me-op-even-at-level-1",
    "title": "My Unique Skill Makes Me OP Even at Level 1",
    "alternativeTitles": [
      "Level 1 dakedo Unique Skill de Saikyou desu"
    ],
    "coverImage": "/covers/my-unique-skill-makes-me-op-even-at-level-1.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Adventure"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Dungeon",
      "Overpowered MC"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, but the exact endpoint is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 3, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the preferred route, but exact volume should be checked.",
    "adaptationNote": "This is a low-confidence improvement over the placeholder. Do not mark verified yet.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "My Unique Skill Makes Me OP anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs manual verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 3 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "My Unique Skill Makes Me OP anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs manual verification."
      }
    ]
  },
  {
    "id": "the-great-cleric",
    "title": "The Great Cleric",
    "alternativeTitles": [
      "Seija Musou"
    ],
    "coverImage": "/covers/the-great-cleric.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Adventure"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Fantasy Adventure"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early source material and has a practical manga continuation around Chapter 35.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 35",
    "lightNovelContinueFrom": "Light novel route is possible, but exact volume mapping should be verified before marking High confidence.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Manga Chapter 35 is the practical continuation point after the anime.",
    "adaptationNote": "The manga route is clearer than the light novel route for this entry. Keep needsVerification true until LN volume mapping is checked.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "The Great Cleric anime-to-manga continuation guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Manga Chapter 35 as the post-anime continuation point."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "35",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Manga Chapter 35 after Season 1. Keep verification on for exact light novel volume mapping.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Great Cleric anime-to-manga continuation guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Manga Chapter 35 as the post-anime continuation point."
      }
    ]
  },
  {
    "id": "the-reincarnation-of-the-strongest-exorcist",
    "title": "The Reincarnation of the Strongest Exorcist in Another World",
    "alternativeTitles": [
      "Saikyou Onmyouji no Isekai Tenseiki"
    ],
    "coverImage": "/covers/the-reincarnation-of-the-strongest-exorcist.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Overpowered MC"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, but exact endpoint needs verification.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 13,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 4, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the preferred route, but exact volume should be checked.",
    "adaptationNote": "Low-confidence estimate only. Keep verification on.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Strongest Exorcist anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 4 estimate needs verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 4 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Strongest Exorcist anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 4 estimate needs verification."
      }
    ]
  },
  {
    "id": "handyman-saitou-in-another-world",
    "title": "Handyman Saitou in Another World",
    "alternativeTitles": [
      "Benriya Saitou-san, Isekai ni Iku"
    ],
    "coverImage": "/covers/handyman-saitou-in-another-world.jpg",
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Dungeon",
      "Fantasy Adventure"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime adapts through the end of Volume 4.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 111",
    "lightNovelContinueFrom": "Not applicable. The source material is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 111 after the anime.",
    "adaptationNote": "The anime adapts all of Volume 4, so Chapter 111 is the next manga point.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Where Does The Anime Leave Off - Handyman Saitou",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 111 continuation."
      },
      {
        "name": "Yen Press Handyman Saitou manga listing",
        "type": "Publisher Reference",
        "checked": true,
        "note": "Used to confirm manga route."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Volume 5 area",
    "mangaContinueChapter": "111",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 111 after the anime.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Where Does The Anime Leave Off - Handyman Saitou",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 111 continuation."
      },
      {
        "name": "Yen Press Handyman Saitou manga listing",
        "type": "Publisher Reference",
        "checked": true,
        "note": "Used to confirm manga route."
      }
    ]
  },
  {
    "id": "saving-80000-gold-in-another-world",
    "title": "Saving 80,000 Gold in Another World for My Retirement",
    "alternativeTitles": [
      "Rougo ni Sonaete Isekai de 8-manmai no Kinka wo Tamemasu"
    ],
    "coverImage": "/covers/saving-80000-gold-in-another-world.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Adventure"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Kingdom Building"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material and does not complete the story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 3, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but exact volume should be checked.",
    "adaptationNote": "This is a low-confidence estimate. Keep needsVerification true.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Saving 80,000 Gold anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs manual verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 3 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Saving 80,000 Gold anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs manual verification."
      }
    ]
  },
  {
    "id": "the-magical-revolution",
    "title": "The Magical Revolution of the Reincarnated Princess and the Genius Young Lady",
    "alternativeTitles": [
      "Tensei Oujo to Tensai Reijou no Mahou Kakumei"
    ],
    "coverImage": "/covers/the-magical-revolution.jpg",
    "genres": [
      "Fantasy",
      "Romance",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Villainess"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts light novel Volumes 1-3.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation because the anime is ahead of the manga coverage in some places.",
    "lightNovelContinueFrom": "Light Novel Volume 4",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 4 after the anime.",
    "adaptationNote": "The anime covers Volumes 1-3. Volume 4 is the next main light novel route.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Magical Revolution anime-to-light-novel guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Volume 4 as the continuation after anime coverage."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Light Novel Volume 4 after Season 1. Reading Volume 3 first is optional for skipped context.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Magical Revolution anime-to-light-novel guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Volume 4 as the continuation after anime coverage."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "im-the-villainess-so-im-taming-the-final-boss",
    "title": "I'm the Villainess, So I'm Taming the Final Boss",
    "alternativeTitles": [
      "Akuyaku Reijou nano de Last Boss wo Kattemimashita"
    ],
    "coverImage": "/covers/im-the-villainess-so-im-taming-the-final-boss.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Romance",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Villainess",
      "Reincarnation"
    ],
    "releaseYear": 2022,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 compresses multiple light novel arcs; first four episodes cover the first light novel and manga adaptation material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended because the manga only covers early material.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 4, but starting from Volume 1 is recommended because of heavy compression.",
    "recommendedRoute": "Light Novel from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Start the light novel from Volume 1 for the cleanest route.",
    "adaptationNote": "The anime rushes through multiple arcs, so direct continuation is less safe.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Villainess Taming Final Boss source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm LN route and episode count."
      },
      {
        "name": "Otome Isekai community discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm compression concern."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "1 / 4",
    "lightNovelContinueChapter": "Start from Volume 1 recommended",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Start from Light Novel Volume 1 for full story. If skipping, continue around Volume 4, but this needs verification.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime compresses multiple LN arcs into 12 episodes.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Villainess Taming Final Boss source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm LN route and episode count."
      },
      {
        "name": "Otome Isekai community discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm compression concern."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "my-next-life-as-a-villainess",
    "title": "My Next Life as a Villainess: All Routes Lead to Doom!",
    "alternativeTitles": [
      "Hamefura"
    ],
    "coverImage": "/covers/my-next-life-as-a-villainess.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Romance",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Villainess",
      "Reincarnation"
    ],
    "releaseYear": 2020,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 and movie coverage make the exact continuation point dependent on what the user has watched.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Light Novel Volume 5 is a common continuation area after Season 2, but movie coverage may affect user guidance.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue around Light Novel Volume 5 after Season 2.",
    "adaptationNote": "Movie and later material may change the clean continuation route, so keep needsVerification true.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "My Next Life as a Villainess Volume 5 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 5 exists as the likely continuation area."
      },
      {
        "name": "My Next Life as a Villainess source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm LN route."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "5",
    "lightNovelContinueChapter": "Start of Volume 5",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Light Novel Volume 5 after Season 2, but verify movie coverage if the user watched the movie too.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "My Next Life as a Villainess Volume 5 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 5 exists as the likely continuation area."
      },
      {
        "name": "My Next Life as a Villainess source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm LN route."
      }
    ]
  },
  {
    "id": "why-raeliana-ended-up-at-the-dukes-mansion",
    "title": "Why Raeliana Ended Up at the Duke's Mansion",
    "alternativeTitles": [
      "Kanojo ga Koushaku-tei ni Itta Riyuu"
    ],
    "coverImage": "/covers/why-raeliana-ended-up-at-the-dukes-mansion.jpg",
    "genres": [
      "Fantasy",
      "Romance",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Villainess",
      "Reincarnation"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manhwa",
    "animeEndsAt": "Season 1 adapts early manhwa material, but the exact final chapter endpoint is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manhwa around Chapter 50, but needs verification.",
    "lightNovelContinueFrom": "Not applicable as the main route for this database.",
    "recommendedRoute": "Manhwa",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Manhwa is the practical continuation route, but chapter numbering should be checked.",
    "adaptationNote": "Chapter 50 is a low-confidence estimate. Keep verification on.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Raeliana anime-to-manhwa continuation discussion",
        "type": "Anime-to-Manhwa Reference",
        "checked": false,
        "note": "Weak evidence only. Chapter 50 estimate needs verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "50",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Continue around Manhwa Chapter 50 after Season 1, but start earlier if the chapter version does not match.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Raeliana anime-to-manhwa continuation discussion",
        "type": "Anime-to-Manhwa Reference",
        "checked": false,
        "note": "Weak evidence only. Chapter 50 estimate needs verification."
      }
    ]
  },
  {
    "id": "the-most-heretical-last-boss-queen",
    "title": "The Most Heretical Last Boss Queen",
    "alternativeTitles": [
      "Higeki no Genkyou tonaru Saikyou Gedou Last Boss Joou"
    ],
    "coverImage": "/covers/the-most-heretical-last-boss-queen.jpg",
    "genres": [
      "Fantasy",
      "Romance",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Villainess",
      "Reincarnation"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, but the exact endpoint is not fully verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 3, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the preferred continuation route.",
    "adaptationNote": "Low-confidence estimate only. Keep verification on.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Most Heretical Last Boss Queen anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 3 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Most Heretical Last Boss Queen anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs verification."
      }
    ]
  },
  {
    "id": "doctor-elise",
    "title": "Doctor Elise",
    "alternativeTitles": [
      "Gekai Elise"
    ],
    "coverImage": "/covers/doctor-elise.jpg",
    "genres": [
      "Fantasy",
      "Romance",
      "Medical",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Villainess"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Web Novel / Manhwa",
    "animeEndsAt": "Season 1 adapts early manhwa/web novel material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Not applicable. Main visual route is manhwa, not Japanese manga.",
    "lightNovelContinueFrom": "Not applicable as main route.",
    "recommendedRoute": "Manhwa / Web Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Manhwa or web novel is the best route, but exact chapter should be checked.",
    "adaptationNote": "This improves the placeholder but stays Low confidence because exact anime-to-manhwa endpoint is not strongly verified.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Doctor Elise source overview",
        "type": "Web Novel / Manhwa Reference",
        "checked": true,
        "note": "Used to confirm source route and anime adaptation."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Manhwa/web novel continuation is around early-to-mid story material, but exact chapter needs verification.",
    "recommendedContinueFrom": "Approximate manhwa continuation around Chapter 45-50, but verify before marking High confidence.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Doctor Elise source overview",
        "type": "Web Novel / Manhwa Reference",
        "checked": true,
        "note": "Used to confirm source route and anime adaptation."
      }
    ]
  },
  {
    "id": "7th-time-loop",
    "title": "7th Time Loop",
    "alternativeTitles": [
      "Loop 7-kaime no Akuyaku Reijou"
    ],
    "coverImage": "/covers/7th-time-loop.jpg",
    "genres": [
      "Fantasy",
      "Romance",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Villainess",
      "Reincarnation"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 covers the early light novel material, commonly treated as covering Light Novel Volumes 1–2.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Volume 6 or later, but manga pacing should be checked before publishing.",
    "lightNovelContinueFrom": "Light Novel Volume 3",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue with Light Novel Volume 3 after Season 1.",
    "adaptationNote": "The LN continuation point is likely Volume 3. Manga continuation is less clean because manga volume/chapter pacing may differ.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "7th Time Loop community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to estimate that anime covers LN Volumes 1–2 and manga around Volume 6 begins later material."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "6",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not recommended as the main route.",
    "recommendedContinueFrom": "Light Novel Volume 3",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "7th Time Loop community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to estimate that anime covers LN Volumes 1–2 and manga around Volume 6 begins later material."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "villainess-level-99",
    "title": "Villainess Level 99",
    "alternativeTitles": [
      "Akuyaku Reijou Level 99"
    ],
    "coverImage": "/covers/villainess-level-99.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Villainess",
      "Reincarnation",
      "Overpowered MC"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, mainly around Volume 1, with some adaptation differences.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route because the light novel is the original source and the anime may be ahead of manga coverage.",
    "lightNovelContinueFrom": "Light Novel Volume 2",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Light Novel Volume 2 is the practical continuation, but Volume 1 is better for full source context.",
    "adaptationNote": "The anime changes or compresses some material, so keep needsVerification true.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Villainess Level 99 anime/light novel discussion",
        "type": "Anime-to-Light-Novel Reference",
        "checked": true,
        "note": "Used to estimate Season 1 coverage around Volume 1 and Volume 2 as continuation."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "2",
    "lightNovelContinueChapter": "Start of Volume 2",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Light Novel Volume 2 after Season 1. Start from Volume 1 if you want the original version and cut/different details.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Villainess Level 99 anime/light novel discussion",
        "type": "Anime-to-Light-Novel Reference",
        "checked": true,
        "note": "Used to estimate Season 1 coverage around Volume 1 and Volume 2 as continuation."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "trapped-in-a-dating-sim",
    "title": "Trapped in a Dating Sim",
    "alternativeTitles": [
      "Otome Game Sekai wa Mob ni Kibishii Sekai desu"
    ],
    "coverImage": "/covers/trapped-in-a-dating-sim.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Game World",
      "Reincarnation"
    ],
    "releaseYear": 2022,
    "animeStatus": "Season 2 announced",
    "totalEpisodes": 12,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts through the end of Light Novel Volume 2. The manga equivalent is around Chapter 38.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 38, but the light novel is the main route.",
    "lightNovelContinueFrom": "Light Novel Volume 3",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 3 after Season 1.",
    "adaptationNote": "Season 1 covers Volumes 1-2. Volume 3 is the next light novel route.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "MobuSeka anime-to-light-novel guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Season 1 covers through Volume 2."
      },
      {
        "name": "MobuSeka anime-to-manga discussion",
        "type": "Anime-to-Manga Reference",
        "checked": true,
        "note": "Used to confirm the manga continuation around Chapter 38."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "38",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Light Novel Volume 3 after Season 1. Manga readers can continue around Chapter 38.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "MobuSeka anime-to-light-novel guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Season 1 covers through Volume 2."
      },
      {
        "name": "MobuSeka anime-to-manga discussion",
        "type": "Anime-to-Manga Reference",
        "checked": true,
        "note": "Used to confirm the manga continuation around Chapter 38."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "i-shall-survive-using-potions",
    "title": "I Shall Survive Using Potions!",
    "alternativeTitles": [
      "Potion-danomi de Ikinobimasu!"
    ],
    "coverImage": "/covers/i-shall-survive-using-potions.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Adventure"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Overpowered MC"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early source material; one guide places the manga continuation around Chapter 40.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 40",
    "lightNovelContinueFrom": "Light novel continuation needs volume verification.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Manga continuation is around Chapter 40, but LN volume should be checked.",
    "adaptationNote": "The LN has more content and the manga has continuation/sequel manga routes, so mark this as approximate.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Where Does The Anime Leave Off guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate manga continuation around Chapter 40."
      },
      {
        "name": "I Shall Survive Using Potions source overview",
        "type": "Source Material Reference",
        "checked": true,
        "note": "Used to confirm LN and manga publication route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 7",
    "mangaContinueChapter": "40",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Manga Chapter 40 is a useful continuation estimate. LN volume still needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Where Does The Anime Leave Off guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to estimate manga continuation around Chapter 40."
      },
      {
        "name": "I Shall Survive Using Potions source overview",
        "type": "Source Material Reference",
        "checked": true,
        "note": "Used to confirm LN and manga publication route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "the-weakest-tamer",
    "title": "The Weakest Tamer Began a Journey to Pick Up Trash",
    "alternativeTitles": [
      "Saijaku Tamer wa Gomi Hiroi no Tabi wo Hajimemashita"
    ],
    "coverImage": "/covers/the-weakest-tamer.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Adventure"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Slow Life",
      "Fantasy Adventure"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, but exact endpoint is not fully verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 3, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best continuation route.",
    "adaptationNote": "Low-confidence estimate only. Keep verification on.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Weakest Tamer anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 3 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Weakest Tamer anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs verification."
      }
    ]
  },
  {
    "id": "fluffy-paradise",
    "title": "Fluffy Paradise",
    "alternativeTitles": [
      "Isekai de Mofumofu Nadenade suru Tame ni Ganbattemasu"
    ],
    "coverImage": "/covers/fluffy-paradise.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Slice of Life"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Slow Life"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, but the exact ending volume is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 3, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but exact volume should be checked.",
    "adaptationNote": "Low-confidence estimate only. Do not mark verified until exact episode-to-volume mapping is checked.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Fluffy Paradise light novel/anime overview",
        "type": "Anime / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the light novel route and ongoing source structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 3 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Fluffy Paradise light novel/anime overview",
        "type": "Anime / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the light novel route and ongoing source structure."
      }
    ]
  },
  {
    "id": "sasaki-and-peeps",
    "title": "Sasaki and Peeps",
    "alternativeTitles": [
      "Sasaki to Pii-chan"
    ],
    "coverImage": "/covers/sasaki-and-peeps.jpg",
    "genres": [
      "Fantasy",
      "Comedy",
      "Reverse Isekai"
    ],
    "isekaiSubgenres": [
      "Reverse Isekai",
      "Transported"
    ],
    "releaseYear": 2024,
    "animeStatus": "Season 2 announced",
    "totalEpisodes": 12,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, but the exact endpoint is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 3, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but exact volume should be checked.",
    "adaptationNote": "This is a low-confidence improvement over the placeholder. Do not mark verified yet.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Sasaki and Peeps anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs manual verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Likely Light Novel Volume 3 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Sasaki and Peeps anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs manual verification."
      }
    ]
  },
  {
    "id": "uncle-from-another-world",
    "title": "Uncle from Another World",
    "alternativeTitles": [
      "Isekai Ojisan"
    ],
    "coverImage": "/covers/uncle-from-another-world.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Reverse Isekai"
    ],
    "isekaiSubgenres": [
      "Reverse Isekai",
      "Comedy"
    ],
    "releaseYear": 2022,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 ends around Manga Volume 7, Chapter 33.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 13,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Volume 7, Chapter 33",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Volume 7, Chapter 33 after the anime.",
    "adaptationNote": "The anime leaves out some smaller material, so starting earlier is optional, but Chapter 33 is the practical continuation point.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Uncle from Another World anime-to-manga discussion",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Volume 7, Chapter 33 as the anime ending point."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "7",
    "mangaContinueChapter": "33",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Volume 7, Chapter 33 after Season 1. Starting earlier is optional for skipped jokes and small details.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Uncle from Another World anime-to-manga discussion",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Volume 7, Chapter 33 as the anime ending point."
      }
    ]
  },
  {
    "id": "dead-mount-death-play",
    "title": "Dead Mount Death Play",
    "alternativeTitles": [
      "Dead Mount Death Play"
    ],
    "coverImage": "/covers/dead-mount-death-play.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Reverse Isekai"
    ],
    "isekaiSubgenres": [
      "Reverse Isekai"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 Part 2 ends in the manga Volume 10 area.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series split-cour",
        "episodes": 24,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 82",
    "lightNovelContinueFrom": "Not applicable as main route. A spin-off novel/manga exists but is not the direct continuation.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Chapter 82 after the anime.",
    "adaptationNote": "Chapter 82 is the post-anime manga point after Season 1 Part 2.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Where Does The Anime Leave Off - Dead Mount Death Play",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 82 continuation."
      },
      {
        "name": "Dead Mount Death Play manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm ongoing manga route."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Volume 10",
    "mangaContinueChapter": "82",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Chapter 82 after Season 1 Part 2.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Where Does The Anime Leave Off - Dead Mount Death Play",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 82 continuation."
      },
      {
        "name": "Dead Mount Death Play manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm ongoing manga route."
      }
    ]
  },
  {
    "id": "the-wrong-way-to-use-healing-magic",
    "title": "The Wrong Way to Use Healing Magic",
    "alternativeTitles": [
      "Chiyu Mahou no Machigatta Tsukaikata"
    ],
    "coverImage": "/covers/the-wrong-way-to-use-healing-magic.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Fantasy Adventure"
    ],
    "releaseYear": 2024,
    "animeStatus": "Season 2 announced",
    "totalEpisodes": 13,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, roughly around the first 1.5 volumes. Manga readers can continue around Chapter 15.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 13,
        "releaseYear": 2024,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "mangaContinueFrom": "Manga Chapter 15",
    "lightNovelContinueFrom": "Light Novel Volume 2 area after Season 1, but starting from Volume 1 is safer for cut details.",
    "recommendedRoute": "Light Novel / Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue with LN Volume 2 area or manga Chapter 15 after Season 1.",
    "adaptationNote": "Season 2 is announced, so recheck after newer anime coverage.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Wrong Way to Use Healing Magic anime-to-manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Manga Chapter 15 as a post-anime continuation point."
      },
      {
        "name": "Wrong Way to Use Healing Magic light novel discussion",
        "type": "Community / Light Novel Reference",
        "checked": true,
        "note": "Used to estimate early Volume 2 area after Season 1."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "15",
    "lightNovelContinueVolume": "2",
    "lightNovelContinueChapter": "Early Volume 2 area",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Light Novel Volume 2 area after Season 1, or Manga Chapter 15. Start Volume 1 if you want all details.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wrong Way to Use Healing Magic anime-to-manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Manga Chapter 15 as a post-anime continuation point."
      },
      {
        "name": "Wrong Way to Use Healing Magic light novel discussion",
        "type": "Community / Light Novel Reference",
        "checked": true,
        "note": "Used to estimate early Volume 2 area after Season 1."
      }
    ]
  },
  {
    "id": "chillin-in-another-world-with-level-2-super-cheat-powers",
    "title": "Chillin' in Another World with Level 2 Super Cheat Powers",
    "alternativeTitles": [
      "Lv2 kara Cheat datta Motoyuusha Kouho no Mattari Isekai Life"
    ],
    "coverImage": "/covers/chillin-in-another-world-with-level-2-super-cheat-powers.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai",
      "Romance"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Overpowered MC",
      "Slow Life"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, commonly estimated around the first two volumes.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Light Novel Volume 3",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the safest route after the anime.",
    "adaptationNote": "This replaces the manual-research placeholder with an approximate LN route. Exact endpoint still needs verification.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Chillin' in Another World source overview",
        "type": "Light Novel / Manga Reference",
        "checked": true,
        "note": "Used to confirm source route and anime episode count."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Light Novel Volume 3, but keep verification on until exact volume mapping is checked.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Chillin' in Another World source overview",
        "type": "Light Novel / Manga Reference",
        "checked": true,
        "note": "Used to confirm source route and anime episode count."
      }
    ]
  },
  {
    "id": "as-a-reincarnated-aristocrat-appraisal-skill",
    "title": "As a Reincarnated Aristocrat, I'll Use My Appraisal Skill",
    "alternativeTitles": [
      "Tensei Kizoku, Kantei Skill de Nariagaru"
    ],
    "coverImage": "/covers/as-a-reincarnated-aristocrat-appraisal-skill.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Kingdom Building"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Kingdom Building"
    ],
    "releaseYear": 2024,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "The database currently counts 2 seasons / 24 episodes. The anime adapts early light novel material, but the exact Season 2 endpoint should be verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 5 after Season 2, but needs verification before marking High confidence.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but the exact volume should be checked.",
    "adaptationNote": "This improves the placeholder but should not be marked verified until the Season 2 endpoint is checked against source volumes.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Appraisal Skill source overview",
        "type": "Light Novel / Manga Reference",
        "checked": true,
        "note": "Used to confirm source route and anime season count."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "5",
    "lightNovelContinueChapter": "Start of Volume 5",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 5 after Season 2, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Appraisal Skill source overview",
        "type": "Light Novel / Manga Reference",
        "checked": true,
        "note": "Used to confirm source route and anime season count."
      }
    ]
  },
  {
    "id": "remonster",
    "title": "Re:Monster",
    "alternativeTitles": [
      "Re Monster"
    ],
    "coverImage": "/covers/remonster.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Overpowered MC",
      "Dungeon"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel / Manga",
    "animeEndsAt": "Season 1 adapts early source material, but source versions and manga/light novel routes make the exact endpoint uncertain.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is possible but exact chapter needs verification.",
    "lightNovelContinueFrom": "Start from Light Novel Volume 1 recommended until exact anime endpoint is verified.",
    "recommendedRoute": "Light Novel / Manga",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel from the beginning is safest.",
    "adaptationNote": "This clears the manual placeholder conservatively without guessing a chapter.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Re:Monster anime/source overview",
        "type": "Anime / Light Novel / Manga Reference",
        "checked": false,
        "note": "Exact route and endpoint need later verification."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Start the light novel from Volume 1 because the exact anime-to-source endpoint is uncertain.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime/source route does not have a safely verified direct jump point.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Re:Monster anime/source overview",
        "type": "Anime / Light Novel / Manga Reference",
        "checked": false,
        "note": "Exact route and endpoint need later verification."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "the-banished-former-hero-lives-as-he-pleases",
    "title": "The Banished Former Hero Lives as He Pleases",
    "alternativeTitles": [
      "Dekisokonai to Yobareta Motoeiyuu wa Jikka kara Tsuihou sareta node Suki Katte ni Ikiru Koto ni Shita"
    ],
    "coverImage": "/covers/the-banished-former-hero-lives-as-he-pleases.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Overpowered MC"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, but the exact endpoint is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 4, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but exact volume should be checked.",
    "adaptationNote": "Low-confidence estimate only. Do not mark verified until exact coverage is checked.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "The Banished Former Hero anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Exact endpoint still needs verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 4 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Banished Former Hero anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Exact endpoint still needs verification."
      }
    ]
  },
  {
    "id": "the-aristocrats-otherworldly-adventure",
    "title": "The Aristocrat's Otherworldly Adventure",
    "alternativeTitles": [
      "Tensei Kizoku no Isekai Boukenroku"
    ],
    "coverImage": "/covers/the-aristocrats-otherworldly-adventure.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Overpowered MC"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, but exact endpoint needs verification.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 5, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but exact volume should be checked.",
    "adaptationNote": "Low-confidence estimate only. Do not mark verified yet.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "The Aristocrat's Otherworldly Adventure anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 5 estimate needs manual verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "5",
    "lightNovelContinueChapter": "Start of Volume 5",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 5 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Aristocrat's Otherworldly Adventure anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 5 estimate needs manual verification."
      }
    ]
  },
  {
    "id": "i-got-a-cheat-skill-in-another-world",
    "title": "I Got a Cheat Skill in Another World and Became Unrivaled in the Real World, Too",
    "alternativeTitles": [
      "Iseleve"
    ],
    "coverImage": "/covers/i-got-a-cheat-skill-in-another-world.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Overpowered MC",
      "Reverse Isekai"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 reaches into Light Novel Volume 4 material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 13,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Light Novel Volume 5",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue with Light Novel Volume 5 after Season 1.",
    "adaptationNote": "Anime reaches Volume 4 material, so Volume 5 is the practical continuation. Keep Medium confidence because exact adaptation compression should be checked.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "I Got a Cheat Skill community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm Volume 5 as a suggested post-anime point."
      },
      {
        "name": "Cheat Skill Volume 4 reference",
        "type": "Volume / Episode Reference",
        "checked": true,
        "note": "Used to confirm Episodes 11–13 map to Volume 4."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "5",
    "lightNovelContinueChapter": "Start of Volume 5",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Light Novel Volume 5",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "I Got a Cheat Skill community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm Volume 5 as a suggested post-anime point."
      },
      {
        "name": "Cheat Skill Volume 4 reference",
        "type": "Volume / Episode Reference",
        "checked": true,
        "note": "Used to confirm Episodes 11–13 map to Volume 4."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "the-fruit-of-evolution",
    "title": "The Fruit of Evolution",
    "alternativeTitles": [
      "Shinka no Mi"
    ],
    "coverImage": "/covers/the-fruit-of-evolution.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Overpowered MC"
    ],
    "releaseYear": 2021,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 continues the anime beyond the first season, but the exact light novel endpoint is not clean enough to publish as a verified jump point.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "Start from Light Novel Volume 1 recommended for the clean source route.",
    "recommendedRoute": "Light Novel from beginning",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel from the beginning is the safest route.",
    "adaptationNote": "This clears the manual research placeholder with a conservative source-from-beginning recommendation. Keep needsVerification true.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "The Fruit of Evolution light novel/source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm light novel source and completed source structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Start the light novel from Volume 1 because the anime is not a clean verified volume jump.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime coverage is not mapped cleanly enough to provide a verified post-anime volume.",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Fruit of Evolution light novel/source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm light novel source and completed source structure."
      }
    ]
  },
  {
    "id": "she-professed-herself-pupil-of-the-wise-man",
    "title": "She Professed Herself Pupil of the Wise Man",
    "alternativeTitles": [
      "Kenja no Deshi wo Nanoru Kenja"
    ],
    "coverImage": "/covers/she-professed-herself-pupil-of-the-wise-man.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Game World",
      "Fantasy Adventure"
    ],
    "releaseYear": 2022,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, but the exact endpoint is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 4, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but exact volume should be checked.",
    "adaptationNote": "Low-confidence estimate only. Do not mark verified until mapped against episodes.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "She Professed Herself Pupil of the Wise Man anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 4 estimate needs manual verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 4 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "She Professed Herself Pupil of the Wise Man anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 4 estimate needs manual verification."
      }
    ]
  },
  {
    "id": "the-master-of-ragnarok",
    "title": "The Master of Ragnarok & Blesser of Einherjar",
    "alternativeTitles": [
      "Hyakuren no Haou to Seiyaku no Valkyria"
    ],
    "coverImage": "/covers/the-master-of-ragnarok.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Harem"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Kingdom Building"
    ],
    "releaseYear": 2018,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 is a compressed adaptation and does not provide a clean continuation point.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2018,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "Start from Light Novel Volume 1 recommended.",
    "recommendedRoute": "Light Novel from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Light novel from the beginning is the safest route.",
    "adaptationNote": "This clears the manual placeholder using a conservative source-from-beginning route.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "The Master of Ragnarok anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Used only as weak evidence. Keep needsVerification true."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start the light novel from Volume 1 because the anime is compressed and not a clean continuation map.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime is compressed, so a direct volume jump is unreliable.",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Master of Ragnarok anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Used only as weak evidence. Keep needsVerification true."
      }
    ]
  },
  {
    "id": "conception",
    "title": "Conception",
    "alternativeTitles": [
      "Conception"
    ],
    "coverImage": "/covers/conception.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Fantasy Adventure"
    ],
    "releaseYear": 2018,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Game",
    "animeEndsAt": "The anime is a loose adaptation of the game concept and should not be treated as a strict source adaptation.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2018,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Not applicable",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Game from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "There is no manga/light novel continuation route.",
    "adaptationNote": "Use game route from beginning rather than a continuation chapter or volume.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Conception game/anime overview",
        "type": "Game / Anime Reference",
        "checked": true,
        "note": "Used to confirm game source type."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start the game from the beginning if you want the source version. No clean post-anime continuation.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime is a loose game adaptation, not a direct route-by-route continuation.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Conception game/anime overview",
        "type": "Game / Anime Reference",
        "checked": true,
        "note": "Used to confirm game source type."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "high-school-prodigies-have-it-easy-even-in-another-world",
    "title": "High School Prodigies Have It Easy Even in Another World",
    "alternativeTitles": [
      "Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you desu!"
    ],
    "coverImage": "/covers/high-school-prodigies-have-it-easy-even-in-another-world.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Kingdom Building"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Kingdom Building",
      "Overpowered MC"
    ],
    "releaseYear": 2019,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material but the exact endpoint is not strongly verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as main route.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 5, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the recommended route after anime.",
    "adaptationNote": "Exact anime-to-volume mapping should be checked before marking this verified.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "High School Prodigies source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm source route and anime episode count."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "5",
    "lightNovelContinueChapter": "Start of Volume 5",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Likely Light Novel Volume 5, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "High School Prodigies source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm source route and anime episode count."
      }
    ]
  },
  {
    "id": "problem-children-are-coming-from-another-world",
    "title": "Problem Children Are Coming from Another World, Aren't They?",
    "alternativeTitles": [
      "Mondaiji-tachi ga Isekai kara Kuru Sou desu yo?"
    ],
    "coverImage": "/covers/problem-children-are-coming-from-another-world.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Game World",
      "Overpowered MC"
    ],
    "releaseYear": 2013,
    "animeStatus": "Anime completed",
    "totalEpisodes": 10,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "The anime adapts early light novel material and does not complete the story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 10,
        "releaseYear": 2013,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 3, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the continuation route after the anime.",
    "adaptationNote": "The anime is short and only adapts early material. Keep Low confidence until checked episode-by-episode.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Problem Children anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs manual verification."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Likely Light Novel Volume 3 after the anime, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Problem Children anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs manual verification."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "knights-and-magic",
    "title": "Knight's & Magic",
    "alternativeTitles": [
      "Knight's and Magic"
    ],
    "coverImage": "/covers/knights-and-magic.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Mecha",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Overpowered MC"
    ],
    "releaseYear": 2017,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 compresses early light novel material and appears to adapt through around Volume 5 material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 13,
        "releaseYear": 2017,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route may not be ideal because the light novel/web novel route goes further.",
    "lightNovelContinueFrom": "Light Novel Volume 6",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue around Light Novel Volume 6 after the anime.",
    "adaptationNote": "The anime compresses material, so Volume 6 is a practical continuation but not perfect.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Knight's & Magic source overview",
        "type": "Light Novel / Web Novel Reference",
        "checked": true,
        "note": "Used to confirm LN/WN route and volume status."
      },
      {
        "name": "Community continuation note",
        "type": "Community / Translation Reference",
        "checked": true,
        "note": "Used to compare LN and WN continuation route."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "6",
    "lightNovelContinueChapter": "Start of Volume 6",
    "webNovelContinueFrom": "Web novel chapter 90+ may be used by some readers after LN Volume 6 translation gaps, but LN route is preferred.",
    "recommendedContinueFrom": "Light Novel Volume 6, but needs verification because the anime compresses content.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Knight's & Magic source overview",
        "type": "Light Novel / Web Novel Reference",
        "checked": true,
        "note": "Used to confirm LN/WN route and volume status."
      },
      {
        "name": "Community continuation note",
        "type": "Community / Translation Reference",
        "checked": true,
        "note": "Used to compare LN and WN continuation route."
      }
    ]
  },
  {
    "id": "the-vision-of-escaflowne",
    "title": "The Vision of Escaflowne",
    "alternativeTitles": [
      "Tenkuu no Escaflowne"
    ],
    "coverImage": "/covers/the-vision-of-escaflowne.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Mecha",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "releaseYear": 1996,
    "animeStatus": "Anime completed",
    "totalEpisodes": 26,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 26",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 26,
        "releaseYear": 1996,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Original anime. No source continuation available.",
    "lightNovelContinueFrom": "Original anime. No source continuation available.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Escaflowne is an original anime TV story, so there is no required manga or light novel continuation after Episode 26.",
    "adaptationNote": "Manga and novel versions are related adaptations. The 2000 film is a separate retelling rather than a source continuation.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Wikipedia: The Vision of Escaflowne",
        "type": "Database",
        "checked": true,
        "note": "Confirmed Sunrise TV anime, creator credits, and 26 episodes."
      },
      {
        "name": "Wikipedia: List of The Vision of Escaflowne episodes",
        "type": "Episode Reference",
        "checked": true,
        "note": "Confirmed complete 26-episode run."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "No source continuation available.",
    "continuationStatus": "Anime Original",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "This is an original anime entry. No manga, light novel, or web novel source continuation is available.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wikipedia: The Vision of Escaflowne",
        "type": "Database",
        "checked": true,
        "note": "Confirmed Sunrise TV anime, creator credits, and 26 episodes."
      },
      {
        "name": "Wikipedia: List of The Vision of Escaflowne episodes",
        "type": "Episode Reference",
        "checked": true,
        "note": "Confirmed complete 26-episode run."
      }
    ]
  },
  {
    "id": "digimon-adventure",
    "title": "Digimon Adventure",
    "alternativeTitles": [
      "Digimon Adventure"
    ],
    "coverImage": "/covers/digimon-adventure.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "releaseYear": 1999,
    "animeStatus": "Anime completed; anime sequels exist",
    "totalEpisodes": 54,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 54",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Digimon Adventure",
        "episodes": 54,
        "releaseYear": 1999,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Original anime. No source continuation available.",
    "lightNovelContinueFrom": "Original anime. No source continuation available.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "There is no manga or light novel source route. Continue with Digimon Adventure 02 for the anime sequel path.",
    "adaptationNote": "Digimon Adventure is an original Toei television anime tied to the broader Digimon franchise, with anime sequels and films rather than a manga/light novel continuation route.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Wikipedia: Digimon Adventure (1999 TV series)",
        "type": "Database",
        "checked": true,
        "note": "Confirmed Toei anime production and 54 episodes."
      },
      {
        "name": "Wikipedia: List of Digimon Adventure episodes",
        "type": "Episode Reference",
        "checked": true,
        "note": "Confirmed episode count and sequel placement."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "No source continuation available.",
    "continuationStatus": "Anime Original",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "This is an original anime entry. No manga, light novel, or web novel source continuation is available.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wikipedia: Digimon Adventure (1999 TV series)",
        "type": "Database",
        "checked": true,
        "note": "Confirmed Toei anime production and 54 episodes."
      },
      {
        "name": "Wikipedia: List of Digimon Adventure episodes",
        "type": "Episode Reference",
        "checked": true,
        "note": "Confirmed episode count and sequel placement."
      }
    ]
  },
  {
    "id": "magic-knight-rayearth",
    "title": "Magic Knight Rayearth",
    "alternativeTitles": [
      "Magic Knight Rayearth"
    ],
    "coverImage": "/covers/magic-knight-rayearth.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Isekai",
      "Shoujo"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Fantasy Adventure"
    ],
    "releaseYear": 1994,
    "animeStatus": "Anime completed",
    "totalEpisodes": 49,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "The original anime adapts the main Rayearth story with differences; manga has Part 1 and Part 2 complete.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 20,
        "releaseYear": 1994,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 29,
        "releaseYear": 1995,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No simple continuation needed after the full 49-episode anime. For source version, read manga from the beginning.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The classic anime is complete, but the manga version is worth reading from the beginning.",
    "adaptationNote": "New anime project/reboot information should not change the old anime continuation entry unless the database adds the new version separately.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Magic Knight Rayearth manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga Part 1/2 and anime structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Volume 1 recommended for source version",
    "mangaContinueChapter": "Chapter 1 recommended for source version",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No direct continuation needed. Optional source-version route: read the manga separately.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Magic Knight Rayearth manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga Part 1/2 and anime structure."
      }
    ]
  },
  {
    "id": "now-and-then-here-and-there",
    "title": "Now and Then, Here and There",
    "alternativeTitles": [
      "Ima, Soko ni Iru Boku"
    ],
    "coverImage": "/covers/now-and-then-here-and-there.jpg",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "releaseYear": 1999,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 13",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 13,
        "releaseYear": 1999,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Original anime. No source continuation available.",
    "lightNovelContinueFrom": "Original anime. No source continuation available.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "This is an original anime story with no manga or light novel continuation route.",
    "adaptationNote": "The series is credited as conceived and directed for television, so related reading is optional rather than a source continuation.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Wikipedia: Now and Then, Here and There",
        "type": "Database",
        "checked": true,
        "note": "Confirmed original TV anime framing and 13 episodes."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "No source continuation available.",
    "continuationStatus": "Anime Original",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "This is an original anime entry. No manga, light novel, or web novel source continuation is available.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wikipedia: Now and Then, Here and There",
        "type": "Database",
        "checked": true,
        "note": "Confirmed original TV anime framing and 13 episodes."
      }
    ]
  },
  {
    "id": "fushigi-yuugi",
    "title": "Fushigi Yuugi",
    "alternativeTitles": [
      "Fushigi Yugi"
    ],
    "coverImage": "/covers/fushigi-yuugi.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Romance",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "releaseYear": 1995,
    "animeStatus": "Anime completed",
    "totalEpisodes": 52,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The TV anime adapts the main early Fushigi Yuugi manga story, with OVAs covering later/side material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 52,
        "releaseYear": 1995,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No simple direct continuation needed after the complete anime/OVA route. Optional: read the manga from the beginning or read sequel/prequel manga.",
    "lightNovelContinueFrom": "Not applicable as main route.",
    "recommendedRoute": "Manga from beginning or related manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "No simple post-TV chapter continuation is needed.",
    "adaptationNote": "The franchise has related manga/OVAs, but the main anime route is not a simple incomplete 12-episode adaptation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Fushigi Yuugi manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga source and anime/OVA structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No direct continuation needed. Optional source-version route: read the manga separately or explore related Fushigi Yuugi manga like Genbu Kaiden.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Fushigi Yuugi manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga source and anime/OVA structure."
      }
    ]
  },
  {
    "id": "the-twelve-kingdoms",
    "title": "The Twelve Kingdoms",
    "alternativeTitles": [
      "Juuni Kokuki"
    ],
    "coverImage": "/covers/the-twelve-kingdoms.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Kingdom Building",
      "Fantasy Adventure"
    ],
    "releaseYear": 2002,
    "animeStatus": "Anime completed",
    "totalEpisodes": 45,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "The anime adapts selected novel arcs but does not provide a clean complete source continuation route.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 45,
        "releaseYear": 2002,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Not applicable. The main source is novel material.",
    "lightNovelContinueFrom": "Start from the beginning recommended for the source route.",
    "recommendedRoute": "Light Novel from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Novels from the beginning are the best route.",
    "adaptationNote": "Use a conservative source-from-beginning recommendation. Keep verification on for exact arc mapping.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "The Twelve Kingdoms novel/anime overview",
        "type": "Novel / Anime Reference",
        "checked": false,
        "note": "Used as weak evidence. Exact arc mapping needs later verification."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start the novels from Volume 1 because the anime adapts selected arcs and is not a clean continuation map.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime adapts selected arcs rather than cleanly mapping the full novel route.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Twelve Kingdoms novel/anime overview",
        "type": "Novel / Anime Reference",
        "checked": false,
        "note": "Used as weak evidence. Exact arc mapping needs later verification."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "el-hazard-the-magnificent-world",
    "title": "El-Hazard: The Magnificent World",
    "alternativeTitles": [
      "El Hazard"
    ],
    "coverImage": "/covers/el-hazard-the-magnificent-world.jpg",
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "releaseYear": 1995,
    "animeStatus": "OVA completed; sequel anime exists",
    "totalEpisodes": 7,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "OVA Episode 7",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "The Magnificent World OVA",
        "episodes": 7,
        "releaseYear": 1995,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Original anime. No source continuation available.",
    "lightNovelContinueFrom": "Original anime. No source continuation available.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The original OVA has no manga or light novel source continuation. Continue with the sequel OVA if you want more anime material.",
    "adaptationNote": "The franchise began as a seven-episode OVA; later TV and OVA projects are alternate timelines or anime continuations rather than source-material reading routes.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Wikipedia: El-Hazard",
        "type": "Database",
        "checked": true,
        "note": "Confirmed seven-episode OVA origin and later anime continuations/alternate timeline."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "No source continuation available.",
    "continuationStatus": "Anime Original",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "This is an original anime entry. No manga, light novel, or web novel source continuation is available.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wikipedia: El-Hazard",
        "type": "Database",
        "checked": true,
        "note": "Confirmed seven-episode OVA origin and later anime continuations/alternate timeline."
      }
    ]
  },
  {
    "id": "ixion-saga-dt",
    "title": "Ixion Saga DT",
    "alternativeTitles": [
      "Ixion Saga Dimension Transfer"
    ],
    "coverImage": "/covers/ixion-saga-dt.jpg",
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Comedy"
    ],
    "releaseYear": 2012,
    "animeStatus": "Anime completed",
    "totalEpisodes": 25,
    "totalSeasons": 1,
    "sourceType": "Game",
    "animeEndsAt": "The anime is a game-based comedy/fantasy adaptation and functions as its own story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 25,
        "releaseYear": 2012,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Not applicable",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "No manga or light novel continuation is needed.",
    "adaptationNote": "The anime is tied to a game project rather than a manga/LN continuation route.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Ixion Saga DT source overview",
        "type": "Game / Anime Reference",
        "checked": true,
        "note": "Used to confirm game-related source type."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No source continuation available. Treat the anime as complete.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Ixion Saga DT source overview",
        "type": "Game / Anime Reference",
        "checked": true,
        "note": "Used to confirm game-related source type."
      }
    ]
  },
  {
    "id": "outbreak-company",
    "title": "Outbreak Company",
    "alternativeTitles": [
      "Outbreak Company"
    ],
    "coverImage": "/covers/outbreak-company.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Kingdom Building"
    ],
    "releaseYear": 2013,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, commonly treated as covering the first few volumes.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2013,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 4, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but exact volume should be checked.",
    "adaptationNote": "This is a low-confidence estimate. Keep needsVerification true.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Outbreak Company anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 4 estimate needs manual verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Likely Light Novel Volume 4 after the anime, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Outbreak Company anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 4 estimate needs manual verification."
      }
    ]
  },
  {
    "id": "isekai-quartet",
    "title": "Isekai Quartet",
    "alternativeTitles": [
      "Isekai Quartet"
    ],
    "coverImage": "/covers/isekai-quartet.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reverse Isekai",
      "Comedy"
    ],
    "releaseYear": 2019,
    "animeStatus": "Finished Season",
    "totalEpisodes": 35,
    "totalSeasons": 3,
    "sourceType": "Original Anime",
    "animeEndsAt": "Season 3 Episode 11",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2020,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 11,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Original anime. No source continuation available.",
    "lightNovelContinueFrom": "Original anime. No source continuation available.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Isekai Quartet is a crossover anime; follow the parent series separately for their manga or light novel continuation routes.",
    "adaptationNote": "The crossover uses characters from multiple Kadokawa light novel franchises but has its own anime continuity. It should not be treated as a direct source adaptation.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Wikipedia: Isekai Quartet",
        "type": "Database",
        "checked": true,
        "note": "Confirmed crossover anime source context, three seasons, and 35 episodes."
      },
      {
        "name": "Wikipedia: List of Isekai Quartet episodes",
        "type": "Episode Reference",
        "checked": true,
        "note": "Confirmed season structure and Season 3 placement."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "No source continuation available.",
    "continuationStatus": "Anime Original",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "This is an original anime entry. No manga, light novel, or web novel source continuation is available.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wikipedia: Isekai Quartet",
        "type": "Database",
        "checked": true,
        "note": "Confirmed crossover anime source context, three seasons, and 35 episodes."
      },
      {
        "name": "Wikipedia: List of Isekai Quartet episodes",
        "type": "Episode Reference",
        "checked": true,
        "note": "Confirmed season structure and Season 3 placement."
      }
    ]
  },
  {
    "id": "my-instant-death-ability-is-so-overpowered",
    "title": "My Instant Death Ability is So Overpowered",
    "alternativeTitles": [
      "Sokushi Cheat ga Saikyou sugite"
    ],
    "coverImage": "/covers/my-instant-death-ability-is-so-overpowered.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Overpowered MC"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material. The exact endpoint is commonly treated as early-series material but should be checked before publishing as verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 5 after Season 1, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but exact endpoint should be checked.",
    "adaptationNote": "This replaces the placeholder with a low-confidence estimate. Do not mark verified yet.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "My Instant Death Ability anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 5 estimate needs manual confirmation."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "5",
    "lightNovelContinueChapter": "Start of Volume 5",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 5 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "My Instant Death Ability anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 5 estimate needs manual confirmation."
      }
    ]
  },
  {
    "id": "failure-frame",
    "title": "Failure Frame",
    "alternativeTitles": [
      "Hazurewaku no Joutai Ijou Skill de Saikyou ni Natta Ore ga Subete wo Juurin suru made"
    ],
    "coverImage": "/covers/failure-frame.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Overpowered MC"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material. Exact endpoint needs verification.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as main route.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 5, but not verified enough for High confidence.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Use the light novel route, but exact volume should be checked.",
    "adaptationNote": "This improves the placeholder but should remain Low confidence until episode-to-volume mapping is confirmed.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Failure Frame source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm light novel route and anime status."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "5",
    "lightNovelContinueChapter": "Start of Volume 5",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 5, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Failure Frame source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm light novel route and anime status."
      }
    ]
  },
  {
    "id": "no-longer-allowed-in-another-world",
    "title": "No Longer Allowed in Another World",
    "alternativeTitles": [
      "Isekai Shikkaku"
    ],
    "coverImage": "/covers/no-longer-allowed-in-another-world.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 adapts early manga material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Volume 6, Chapter 30",
    "lightNovelContinueFrom": "Not applicable. The source material is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Manga Volume 6, Chapter 30 after the anime.",
    "adaptationNote": "The manga is ongoing/near final arc, so future status may change, but the post-anime chapter is clear.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Where Does The Anime Leave Off guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Volume 6, Chapter 30 continuation."
      },
      {
        "name": "No Longer Allowed in Another World source overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm manga route and publication status."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "6",
    "mangaContinueChapter": "30",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Volume 6, Chapter 30",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Where Does The Anime Leave Off guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Volume 6, Chapter 30 continuation."
      },
      {
        "name": "No Longer Allowed in Another World source overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm manga route and publication status."
      }
    ]
  },
  {
    "id": "reincarnated-as-a-sword",
    "title": "Reincarnated as a Sword",
    "alternativeTitles": [
      "Tensei shitara Ken deshita"
    ],
    "coverImage": "/covers/reincarnated-as-a-sword.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Dungeon",
      "Fantasy Adventure"
    ],
    "releaseYear": 2022,
    "animeStatus": "Season 2 announced",
    "totalEpisodes": 12,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material and ends before later light novel arcs.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "mangaContinueFrom": "Manga route is possible but not preferred over the light novel.",
    "lightNovelContinueFrom": "Light Novel Volume 3",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Light novel is the best continuation route.",
    "adaptationNote": "Volume 3 is the practical post-Season-1 route, but keep needsVerification true until checked against exact episode coverage.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Reincarnated as a Sword light novel chronology",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm early light novel volume structure."
      },
      {
        "name": "Reincarnated as a Sword community continuation reference",
        "type": "Community Reference",
        "checked": true,
        "note": "Used as backup for post-anime continuation discussion."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Light Novel Volume 3 after Season 1.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Reincarnated as a Sword light novel chronology",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm early light novel volume structure."
      },
      {
        "name": "Reincarnated as a Sword community continuation reference",
        "type": "Community Reference",
        "checked": true,
        "note": "Used as backup for post-anime continuation discussion."
      }
    ]
  },
  {
    "id": "so-im-a-spider-so-what",
    "title": "So I'm a Spider, So What?",
    "alternativeTitles": [
      "Kumo desu ga, Nani ka?"
    ],
    "coverImage": "/covers/so-im-a-spider-so-what.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Dungeon"
    ],
    "releaseYear": 2021,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material through around Volume 5.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 24,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended because it does not cover the full story structure the same way as the light novel.",
    "lightNovelContinueFrom": "Light Novel Volume 6",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Light novel is the best route after the anime.",
    "adaptationNote": "The anime compresses and rearranges some material, but Volume 6 is the practical light novel continuation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "So I'm a Spider, So What? anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 6 estimate should be verified before upgrading confidence."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "6",
    "lightNovelContinueChapter": "Start of Volume 6",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Light Novel Volume 6 after Season 1.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "So I'm a Spider, So What? anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 6 estimate should be verified before upgrading confidence."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "the-dungeon-of-black-company",
    "title": "The Dungeon of Black Company",
    "alternativeTitles": [
      "Meikyuu Black Company"
    ],
    "coverImage": "/covers/the-dungeon-of-black-company.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Dungeon"
    ],
    "releaseYear": 2021,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 adapts early manga material, but the exact chapter endpoint should be verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Likely around Manga Chapter 31, but needs verification.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Manga continues beyond the anime.",
    "adaptationNote": "This is a low-confidence estimate. Do not mark verified until checked against episode coverage.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "The Dungeon of Black Company anime/manga overview",
        "type": "Anime / Manga Reference",
        "checked": false,
        "note": "Placeholder evidence only. Chapter 31 estimate needs manual verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 6",
    "mangaContinueChapter": "31",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Likely around Manga Chapter 31 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Dungeon of Black Company anime/manga overview",
        "type": "Anime / Manga Reference",
        "checked": false,
        "note": "Placeholder evidence only. Chapter 31 estimate needs manual verification."
      }
    ]
  },
  {
    "id": "combatants-will-be-dispatched",
    "title": "Combatants Will Be Dispatched!",
    "alternativeTitles": [
      "Sentouin, Hakenshimasu!"
    ],
    "coverImage": "/covers/combatants-will-be-dispatched.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Fantasy"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "releaseYear": 2021,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, likely Volumes 1–2.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 3",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the recommended route, but exact volume should be verified.",
    "adaptationNote": "A common continuation estimate is Volume 3, but I did not find a strong enough source to mark it verified.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Combatants Will Be Dispatched source references",
        "type": "Source Material Reference",
        "checked": true,
        "note": "Used to confirm source type; exact continuation remains low confidence."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Likely Light Novel Volume 3, but needs verification before marking High confidence.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Combatants Will Be Dispatched source references",
        "type": "Source Material Reference",
        "checked": true,
        "note": "Used to confirm source type; exact continuation remains low confidence."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "the-executioner-and-her-way-of-life",
    "title": "The Executioner and Her Way of Life",
    "alternativeTitles": [
      "Shokei Shoujo no Virgin Road"
    ],
    "coverImage": "/covers/the-executioner-and-her-way-of-life.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Fantasy Adventure"
    ],
    "releaseYear": 2022,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts the first two light novel volumes.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Light Novel Volume 3",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue with Light Novel Volume 3 after the anime.",
    "adaptationNote": "Season 1 adapts Volumes 1-2, so Volume 3 is the direct light novel continuation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "The Executioner and Her Way of Life anime-to-light-novel discussion",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Season 1 adapts two volumes and Volume 3 is a safe continuation point."
      },
      {
        "name": "Virgin Road light novel volume reference",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the light novel route and volume structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Light Novel Volume 3 after Season 1.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Executioner and Her Way of Life anime-to-light-novel discussion",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Season 1 adapts two volumes and Volume 3 is a safe continuation point."
      },
      {
        "name": "Virgin Road light novel volume reference",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the light novel route and volume structure."
      }
    ]
  },
  {
    "id": "harem-in-the-labyrinth-of-another-world",
    "title": "Harem in the Labyrinth of Another World",
    "alternativeTitles": [
      "Isekai Meikyuu de Harem wo"
    ],
    "coverImage": "/covers/harem-in-the-labyrinth-of-another-world.jpg",
    "genres": [
      "Fantasy",
      "Isekai",
      "Dungeon"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Dungeon"
    ],
    "releaseYear": 2022,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material. Exact volume endpoint should be verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as main route without verification.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 4, but not verified enough for High confidence.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Use the light novel route, but exact volume should be checked.",
    "adaptationNote": "This improves the placeholder but keeps Low confidence because exact endpoint is not strongly verified.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Harem in the Labyrinth source overview",
        "type": "Light Novel / Manga Reference",
        "checked": true,
        "note": "Used to confirm source route and anime episode count."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 4, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Harem in the Labyrinth source overview",
        "type": "Light Novel / Manga Reference",
        "checked": true,
        "note": "Used to confirm source route and anime episode count."
      }
    ]
  },
  {
    "id": "how-not-to-summon-a-demon-lord",
    "title": "How Not to Summon a Demon Lord",
    "alternativeTitles": [
      "Isekai Maou to Shoukan Shoujo no Dorei Majutsu"
    ],
    "coverImage": "/covers/how-not-to-summon-a-demon-lord.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Game World",
      "Summoned",
      "Overpowered MC"
    ],
    "releaseYear": 2018,
    "animeStatus": "Finished Season",
    "totalEpisodes": 22,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 2 / Omega adapts later early novel material. Exact endpoint needs caution.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2018,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Omega",
        "episodes": 10,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 7, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the recommended route, but exact volume should be checked.",
    "adaptationNote": "Season 2 endpoint is not strongly verified from reliable sources. Keep Low confidence.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "How Not to Summon a Demon Lord source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm source route and LN status."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "7",
    "lightNovelContinueChapter": "Start of Volume 7",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Likely Light Novel Volume 7 after Season 2, but needs verification before marking High confidence.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "How Not to Summon a Demon Lord source overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm source route and LN status."
      }
    ]
  },
  {
    "id": "demon-lord-retry",
    "title": "Demon Lord, Retry!",
    "alternativeTitles": [
      "Maou-sama, Retry!"
    ],
    "coverImage": "/covers/demon-lord-retry.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Game World",
      "Overpowered MC"
    ],
    "releaseYear": 2019,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "The anime and Retry R material have source-order and adaptation differences, making a clean continuation point risky.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "R",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main database route.",
    "lightNovelContinueFrom": "Start from Light Novel Volume 1 recommended for the source route.",
    "recommendedRoute": "Light Novel from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Light novel from the beginning is safest.",
    "adaptationNote": "This clears the manual placeholder with a conservative source-from-beginning route.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Demon Lord, Retry! anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Used as weak evidence only. Source-order differences need later verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Start the light novel from Volume 1 because the anime/source versions are not a clean direct map.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime and source versions have adaptation differences, so a direct jump is unreliable.",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Demon Lord, Retry! anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Used as weak evidence only. Source-order differences need later verification."
      }
    ]
  },
  {
    "id": "do-you-love-your-mom",
    "title": "Do You Love Your Mom and Her Two-Hit Multi-Target Attacks?",
    "alternativeTitles": [
      "Okaasan Online"
    ],
    "coverImage": "/covers/do-you-love-your-mom.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Game World",
      "Comedy"
    ],
    "releaseYear": 2019,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 covers early light novel material, but exact endpoint is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 4, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the recommended route, but exact volume should be checked.",
    "adaptationNote": "The anime likely covers early volumes, but I could not verify the exact endpoint strongly enough.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Do You Love Your Mom source references",
        "type": "Source Material Reference",
        "checked": true,
        "note": "Used to confirm LN route; exact endpoint still low confidence."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Likely Light Novel Volume 4, but needs verification before publishing.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Do You Love Your Mom source references",
        "type": "Source Material Reference",
        "checked": true,
        "note": "Used to confirm LN route; exact endpoint still low confidence."
      }
    ]
  },
  {
    "id": "infinite-dendrogram",
    "title": "Infinite Dendrogram",
    "alternativeTitles": [
      "Infinite Dendrogram"
    ],
    "coverImage": "/covers/infinite-dendrogram.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Game"
    ],
    "isekaiSubgenres": [
      "Game World",
      "Fantasy Adventure"
    ],
    "releaseYear": 2020,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, but exact endpoint is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 13,
        "releaseYear": 2020,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as main route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 6, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the recommended route, but exact volume should be verified.",
    "adaptationNote": "A common estimate is Volume 6, but this was not strongly verified.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Infinite Dendrogram source references",
        "type": "Source Material Reference",
        "checked": true,
        "note": "Used to confirm LN route; exact endpoint remains low confidence."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "6",
    "lightNovelContinueChapter": "Start of Volume 6",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 6, but needs verification before publishing.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Infinite Dendrogram source references",
        "type": "Source Material Reference",
        "checked": true,
        "note": "Used to confirm LN route; exact endpoint remains low confidence."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "in-the-land-of-leadale",
    "title": "In the Land of Leadale",
    "alternativeTitles": [
      "Leadale no Daichi nite"
    ],
    "coverImage": "/covers/in-the-land-of-leadale.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Game World",
      "Slow Life"
    ],
    "releaseYear": 2022,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 covers the first 3 light novel volumes.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Light Novel Volume 4",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Light Novel Volume 4 after the anime.",
    "adaptationNote": "Anime covers Volumes 1–3. Starting from Volume 4 is the direct route, though reading from Volume 1 gives fuller details.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Leadale community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm anime covers first 3 volumes."
      },
      {
        "name": "Leadale Volume 4 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 4 follows the anime-covered content."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Light Novel Volume 4",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Leadale community continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm anime covers first 3 volumes."
      },
      {
        "name": "Leadale Volume 4 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 4 follows the anime-covered content."
      }
    ]
  },
  {
    "id": "life-with-an-ordinary-guy-who-reincarnated-into-a-total-fantasy-knockout",
    "title": "Life with an Ordinary Guy who Reincarnated into a Total Fantasy Knockout",
    "alternativeTitles": [
      "Fantasy Bishoujo Juniku Ojisan to"
    ],
    "coverImage": "/covers/life-with-an-ordinary-guy-who-reincarnated-into-a-total-fantasy-knockout.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Comedy"
    ],
    "releaseYear": 2022,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 adapts early manga material, but exact endpoint is not strongly verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2022,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Likely around Manga Chapter 77, but needs verification.",
    "lightNovelContinueFrom": "Not applicable. The source material is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Manga is the right route, but exact chapter should be checked.",
    "adaptationNote": "This replaces the placeholder with a low-confidence estimate. Do not mark verified yet.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Fantasy Knockout source overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga route and anime episode count."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "77",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Likely around Manga Chapter 77, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Fantasy Knockout source overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga route and anime episode count."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "miss-kobayashis-dragon-maid",
    "title": "Miss Kobayashi's Dragon Maid",
    "alternativeTitles": [
      "Kobayashi-san Chi no Maid Dragon"
    ],
    "coverImage": "/covers/miss-kobayashis-dragon-maid.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Reverse Isekai",
      "Slice of Life"
    ],
    "isekaiSubgenres": [
      "Reverse Isekai",
      "Comedy",
      "Slow Life"
    ],
    "releaseYear": 2017,
    "animeStatus": "Finished Season",
    "totalEpisodes": 25,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 adapts and rearranges several manga chapters. A later movie also adapts additional material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 13,
        "releaseYear": 2017,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Start from the beginning recommended, or around Chapter 65+ after Season 2 if skipping.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga from beginning or manga continuation",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Manga from the beginning is safest.",
    "adaptationNote": "Season 2 and movie coverage make a single chapter jump less reliable. Keep needsVerification true.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Dragon Maid anime-to-manga discussion",
        "type": "Community Backup / Chapter Reference",
        "checked": true,
        "note": "Used to confirm early anime chapter mapping and adaptation changes."
      },
      {
        "name": "Dragon Maid movie review/source reference",
        "type": "Anime Movie / Manga Reference",
        "checked": true,
        "note": "Used to confirm later movie adaptation exists."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 8 if skipping",
    "mangaContinueChapter": "65",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start from the beginning for all chapters. If skipping, continue around Manga Chapter 65, but verify if the movie is counted.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime rearranges and adds original content, and movie coverage can change the continuation point.",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Dragon Maid anime-to-manga discussion",
        "type": "Community Backup / Chapter Reference",
        "checked": true,
        "note": "Used to confirm early anime chapter mapping and adaptation changes."
      },
      {
        "name": "Dragon Maid movie review/source reference",
        "type": "Anime Movie / Manga Reference",
        "checked": true,
        "note": "Used to confirm later movie adaptation exists."
      }
    ]
  },
  {
    "id": "aesthetica-of-a-rogue-hero",
    "title": "Aesthetica of a Rogue Hero",
    "alternativeTitles": [
      "Hagure Yuusha no Aesthetica"
    ],
    "coverImage": "/covers/aesthetica-of-a-rogue-hero.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Reverse Isekai"
    ],
    "isekaiSubgenres": [
      "Reverse Isekai",
      "Overpowered MC"
    ],
    "releaseYear": 2012,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 primarily covers Light Novel Volumes 1–3.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2012,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended because the light novel is the source route.",
    "lightNovelContinueFrom": "Light Novel Volume 4",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue with Volume 4 after the anime.",
    "adaptationNote": "The anime is commonly described as primarily covering Volumes 1–3. The LN series is unfinished/old, so mark Medium confidence.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Aesthetica of a Rogue Hero source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm anime primarily covers Volumes 1–3."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Light Novel Volume 4",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Aesthetica of a Rogue Hero source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm anime primarily covers Volumes 1–3."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "endride",
    "title": "Endride",
    "alternativeTitles": [
      "Endride"
    ],
    "coverImage": "/covers/endride.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "releaseYear": 2016,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 24",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 24,
        "releaseYear": 2016,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Original anime. No source continuation available.",
    "lightNovelContinueFrom": "Original anime. No source continuation available.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Endride is an original anime/multimedia project with no manga or light novel continuation route.",
    "adaptationNote": "The anime is listed as an original 24-episode television series connected to a multimedia project and smartphone game.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Wikipedia: Endride",
        "type": "Database",
        "checked": true,
        "note": "Confirmed original 24-episode anime and multimedia-project context."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "No source continuation available.",
    "continuationStatus": "Anime Original",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "This is an original anime entry. No manga, light novel, or web novel source continuation is available.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wikipedia: Endride",
        "type": "Database",
        "checked": true,
        "note": "Confirmed original 24-episode anime and multimedia-project context."
      }
    ]
  },
  {
    "id": "arata-the-legend",
    "title": "Arata: The Legend",
    "alternativeTitles": [
      "Arata Kangatari"
    ],
    "coverImage": "/covers/arata-the-legend.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "releaseYear": 2013,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The 12-episode anime adapts early manga material but does not complete the story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2013,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Around Manga Chapter 41, but starting from the beginning is recommended because adaptation pacing and details differ.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Manga has much more story after the anime.",
    "adaptationNote": "The exact chapter endpoint is not strong enough for High confidence, so beginning is the safer recommendation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Arata: The Legend manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga source and incomplete anime adaptation."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 9",
    "mangaContinueChapter": "41",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start from the beginning for best continuity. Rough skip point: around Chapter 41.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime only covers early manga material and may differ in pacing/details.",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Arata: The Legend manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga source and incomplete anime adaptation."
      }
    ]
  },
  {
    "id": "those-who-hunt-elves",
    "title": "Those Who Hunt Elves",
    "alternativeTitles": [
      "Elf wo Karu Mono-tachi"
    ],
    "coverImage": "/covers/those-who-hunt-elves.jpg",
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Comedy"
    ],
    "releaseYear": 1996,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "The anime adapts selected material and is not a clean complete manga continuation map.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 1996,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 1997,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Start from Manga Volume 1 recommended.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Manga from the beginning is safest.",
    "adaptationNote": "This clears the manual placeholder with a conservative manga-from-beginning recommendation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Those Who Hunt Elves anime/manga overview",
        "type": "Anime / Manga Reference",
        "checked": false,
        "note": "Weak evidence only. Exact episode-to-manga mapping needs later verification."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "1",
    "mangaContinueChapter": "Start of Volume 1",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start the manga from Volume 1 because the anime is not a clean continuation map.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime adapts selected material and does not map cleanly to a single manga continuation point.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Those Who Hunt Elves anime/manga overview",
        "type": "Anime / Manga Reference",
        "checked": false,
        "note": "Weak evidence only. Exact episode-to-manga mapping needs later verification."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "kyo-kara-maoh",
    "title": "Kyo Kara Maoh!",
    "alternativeTitles": [
      "Kyou kara Maou!"
    ],
    "coverImage": "/covers/kyo-kara-maoh.jpg",
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Kingdom Building"
    ],
    "releaseYear": 2004,
    "animeStatus": "Anime completed",
    "totalEpisodes": 117,
    "totalSeasons": 3,
    "sourceType": "Light Novel",
    "animeEndsAt": "The long anime has many anime-original or rearranged elements and is not a clean LN chapter-by-chapter adaptation.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 39,
        "releaseYear": 2004,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 39,
        "releaseYear": 2005,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 39,
        "releaseYear": 2008,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as main route.",
    "lightNovelContinueFrom": "Start from the beginning recommended.",
    "recommendedRoute": "Light Novel from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Light novel from the beginning is the safest route.",
    "adaptationNote": "A simple post-anime volume is not reliable because the anime is long and not a clean LN adaptation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Kyo Kara Maoh source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm LN route and anime-original complexity."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "Volume 1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start the light novel from Volume 1 for the cleanest source route.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime has anime-original and rearranged content.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Kyo Kara Maoh source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm LN route and anime-original complexity."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "marchen-awakens-romance",
    "title": "MAR: Marchen Awakens Romance",
    "alternativeTitles": [
      "MAR"
    ],
    "coverImage": "/covers/marchen-awakens-romance.jpg",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "releaseYear": 2005,
    "animeStatus": "Anime completed",
    "totalEpisodes": 102,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The 102-episode anime adapts the main manga story.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 102,
        "releaseYear": 2005,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "No main continuation needed. Optional sequel route: MÄR Omega manga.",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation / Optional sequel manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The main story is complete; MÄR Omega is optional sequel material.",
    "adaptationNote": "The anime is long and adapts the main story, so do not show a normal continuation chapter.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "MÄR manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga source and anime length."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "MÄR Omega Volume 1 optional",
    "mangaContinueChapter": "MÄR Omega Chapter 1 optional",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Main story complete. Optional: read MÄR Omega.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "MÄR manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga source and anime length."
      }
    ]
  },
  {
    "id": "tsubasa-reservoir-chronicle",
    "title": "Tsubasa Reservoir Chronicle",
    "alternativeTitles": [
      "Tsubasa Chronicle"
    ],
    "coverImage": "/covers/tsubasa-reservoir-chronicle.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "releaseYear": 2005,
    "animeStatus": "Finished Season",
    "totalEpisodes": 52,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "The anime adaptation diverges and does not provide a clean complete manga continuation route.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 26,
        "releaseYear": 2005,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 26,
        "releaseYear": 2006,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Start from Manga Chapter 1 recommended.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Manga from the beginning is the safest route.",
    "adaptationNote": "Do not provide a post-anime chapter jump. The manga route should start from Chapter 1.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Tsubasa Reservoir Chronicle anime/manga adaptation overview",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm anime divergence and manga-from-beginning recommendation."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "1",
    "mangaContinueChapter": "1",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start the manga from Chapter 1 because the anime diverges and does not cleanly adapt the full story.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime diverges from the manga and does not cleanly adapt the full story.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Tsubasa Reservoir Chronicle anime/manga adaptation overview",
        "type": "Anime / Manga Reference",
        "checked": true,
        "note": "Used to confirm anime divergence and manga-from-beginning recommendation."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "aura-battler-dunbine",
    "title": "Aura Battler Dunbine",
    "alternativeTitles": [
      "Seisenshi Dunbine"
    ],
    "coverImage": "/covers/aura-battler-dunbine.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Mecha",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "releaseYear": 1983,
    "animeStatus": "Anime completed; sequel OVA exists",
    "totalEpisodes": 49,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 49",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 49,
        "releaseYear": 1983,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Original anime. No source continuation available.",
    "lightNovelContinueFrom": "Original anime. No source continuation available.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "The TV anime is original. For more anime material, look for the later Neo Byston Well OVA.",
    "adaptationNote": "The TV series is a Sunrise/Nippon Sunrise original. The later OVA is sequel/related anime material, not a manga or light novel route.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Wikipedia: Aura Battler Dunbine",
        "type": "Database",
        "checked": true,
        "note": "Confirmed original creator credits, 49 TV episodes, and sequel OVA context."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "No source continuation available.",
    "continuationStatus": "Anime Original",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "This is an original anime entry. No manga, light novel, or web novel source continuation is available.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wikipedia: Aura Battler Dunbine",
        "type": "Database",
        "checked": true,
        "note": "Confirmed original creator credits, 49 TV episodes, and sequel OVA context."
      }
    ]
  },
  {
    "id": "re-creators",
    "title": "Re:Creators",
    "alternativeTitles": [
      "Re Creators"
    ],
    "coverImage": "/covers/re-creators.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Reverse Isekai"
    ],
    "isekaiSubgenres": [
      "Reverse Isekai"
    ],
    "releaseYear": 2017,
    "animeStatus": "Anime completed",
    "totalEpisodes": 22,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 22",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 22,
        "releaseYear": 2017,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Original anime. No source continuation available.",
    "lightNovelContinueFrom": "Original anime. No source continuation available.",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Re:Creators is an original anime, so there is no manga or light novel continuation route after Episode 22.",
    "adaptationNote": "The manga projects are adaptations/spin-offs around the original anime concept, not the source route for continuing the anime story.",
    "lastUpdated": "2026-06-20",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Wikipedia: Re:Creators",
        "type": "Database",
        "checked": true,
        "note": "Confirmed original anime concept, 22 episodes, and related manga adaptations."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not available yet",
    "recommendedContinueFrom": "No source continuation available.",
    "continuationStatus": "Anime Original",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "Not required for this entry.",
    "continuationNote": "This is an original anime entry. No manga, light novel, or web novel source continuation is available.",
    "researchPriority": "Low",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Wikipedia: Re:Creators",
        "type": "Database",
        "checked": true,
        "note": "Confirmed original anime concept, 22 episodes, and related manga adaptations."
      }
    ]
  },
  {
    "id": "show-by-rock",
    "title": "Show by Rock!!",
    "alternativeTitles": [
      "Show By Rock"
    ],
    "coverImage": "/covers/show-by-rock.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Music",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Game World"
    ],
    "releaseYear": 2015,
    "animeStatus": "Finished Season",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Game",
    "animeEndsAt": "The anime is based on the Show by Rock!! game/music franchise and functions as its own anime route.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 12,
        "releaseYear": 2015,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 12,
        "releaseYear": 2016,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Not applicable",
    "lightNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "confidenceLevel": "High",
    "spoilerFreeNote": "No source reading route is needed.",
    "adaptationNote": "Show by Rock!! is a game/music franchise, not a normal manga or light novel continuation series.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Show by Rock!! franchise overview",
        "type": "Game / Anime Reference",
        "checked": false,
        "note": "Placeholder evidence. Use franchise overview to confirm game/music source route if needed."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "No manga or light novel continuation route. Treat each anime season/project as its own franchise entry.",
    "continuationStatus": "No Source Continuation",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Show by Rock!! franchise overview",
        "type": "Game / Anime Reference",
        "checked": false,
        "note": "Placeholder evidence. Use franchise overview to confirm game/music source route if needed."
      }
    ]
  },
  {
    "id": "isekai-izakaya",
    "title": "Isekai Izakaya: Japanese Food From Another World",
    "alternativeTitles": [
      "Isekai Izakaya Nobu"
    ],
    "coverImage": "/covers/isekai-izakaya.jpg",
    "genres": [
      "Fantasy",
      "Gourmet",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reverse Isekai",
      "Cooking"
    ],
    "releaseYear": 2018,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "The anime adapts episodic food-focused material rather than a clean strict arc continuation.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Short-form TV series",
        "episodes": 24,
        "releaseYear": 2018,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route can be read from the beginning because the adaptation is episodic.",
    "lightNovelContinueFrom": "Light Novel from beginning recommended.",
    "recommendedRoute": "Source from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Start the source from the beginning for the full food-story experience.",
    "adaptationNote": "Do not present a strict chapter jump because episodes adapt standalone/episodic material.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Isekai Izakaya source overview",
        "type": "Light Novel / Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm source route and episodic adaptation style."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Volume 1 recommended",
    "mangaContinueChapter": "Chapter 1 recommended",
    "lightNovelContinueVolume": "Volume 1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Start from the beginning because the anime is episodic and not a clean continuation route.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime is episodic and does not make a clean volume/chapter continuation point.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Isekai Izakaya source overview",
        "type": "Light Novel / Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm source route and episodic adaptation style."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "kakuriyo-bed-and-breakfast-for-spirits",
    "title": "Kakuriyo: Bed & Breakfast for Spirits",
    "alternativeTitles": [
      "Kakuriyo no Yadomeshi"
    ],
    "coverImage": "/covers/kakuriyo-bed-and-breakfast-for-spirits.jpg",
    "genres": [
      "Fantasy",
      "Romance",
      "Supernatural"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Cooking"
    ],
    "releaseYear": 2018,
    "animeStatus": "Anime completed",
    "totalEpisodes": 26,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "If the database counts only the original 26-episode season, it ends around Light Novel Volume 5.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 26,
        "releaseYear": 2018,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is behind/less clean than the novel route.",
    "lightNovelContinueFrom": "Light Novel Volume 6 after the original 26-episode season.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue with the light novel route, but check whether Season 2 is counted in the database.",
    "adaptationNote": "The original 26-episode anime reaches around Volume 5. The franchise later has more anime material, so keep verification on.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Kakuriyo source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm light novel route and volume count."
      },
      {
        "name": "Kakuriyo continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm original anime reaches around Volume 5."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended as main route",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "6",
    "lightNovelContinueChapter": "Start of Volume 6",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Light Novel Volume 6 if the user watched only the original 26-episode anime. If newer Season 2 episodes are included, verify a newer endpoint.",
    "continuationStatus": "Verified for Season 1 / Needs update if Season 2 is included",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Kakuriyo source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm light novel route and volume count."
      },
      {
        "name": "Kakuriyo continuation discussion",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to confirm original anime reaches around Volume 5."
      }
    ]
  },
  {
    "id": "welcome-to-demon-school-iruma-kun",
    "title": "Welcome to Demon School! Iruma-kun",
    "alternativeTitles": [
      "Mairimashita! Iruma-kun"
    ],
    "coverImage": "/covers/welcome-to-demon-school-iruma-kun.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "School",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Comedy"
    ],
    "releaseYear": 2019,
    "animeStatus": "Season 4 announced",
    "totalEpisodes": 65,
    "totalSeasons": 4,
    "sourceType": "Manga",
    "animeEndsAt": "Season 3 ends after the Harvest Festival / Music Festival transition area. Some skipped chapters around the 90-91 area are worth reviewing.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 23,
        "releaseYear": 2019,
        "status": "Finished"
      },
      {
        "seasonNumber": 2,
        "seasonTitle": "Season 2",
        "episodes": 21,
        "releaseYear": 2021,
        "status": "Finished"
      },
      {
        "seasonNumber": 3,
        "seasonTitle": "Season 3",
        "episodes": 21,
        "releaseYear": 2022,
        "status": "Finished"
      },
      {
        "seasonNumber": 4,
        "seasonTitle": "Season 4",
        "episodes": 0,
        "releaseYear": 2026,
        "status": "Announced"
      }
    ],
    "mangaContinueFrom": "Around Manga Chapter 147, but review Chapter 90-91 if you want skipped character context.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Manga is the best continuation route after Season 3.",
    "adaptationNote": "Chapter 147 is a practical continuation estimate. Keep needsVerification true because some chapters were skipped or rearranged.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Iruma-kun anime-to-manga community guide",
        "type": "Anime-to-Manga Reference",
        "checked": true,
        "note": "Used to estimate Chapter 147 as the post-Season-3 continuation and note skipped Chapter 90-91 context."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 17",
    "mangaContinueChapter": "147",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Continue around Manga Chapter 147 after Season 3. Optional context: read Chapter 90-91 because the anime skipped or moved some material.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Iruma-kun anime-to-manga community guide",
        "type": "Anime-to-Manga Reference",
        "checked": true,
        "note": "Used to estimate Chapter 147 as the post-Season-3 continuation and note skipped Chapter 90-91 context."
      }
    ]
  },
  {
    "id": "slam-dunk",
    "title": "Slam Dunk",
    "alternativeTitles": [
      "SLAM DUNK"
    ],
    "genres": [
      "Sports",
      "Comedy",
      "Drama",
      "School",
      "Shonen"
    ],
    "releaseYear": 1993,
    "animeStatus": "Anime completed / manga completed",
    "totalEpisodes": 101,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "TV anime Episode 101. The anime stops before fully adapting the remaining National Tournament manga material.",
    "mangaContinueFrom": "Manga Chapter 198",
    "mangaContinueVolume": "Around Volume 23",
    "mangaContinueChapter": "198",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Manga Chapter 198 after the TV anime. If you want the full source experience, reading from Chapter 1 is also fine.",
    "continuationStatus": "Verified",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Continue from Manga Chapter 198 after the TV anime.",
    "adaptationNote": "The TV anime has 101 episodes and does not fully adapt the remaining National Tournament manga material. The First Slam Dunk movie covers later material, but it is not a full replacement for reading the remaining manga chapters.",
    "dataSources": [
      {
        "name": "Slam Dunk manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga source, completed manga status, 31-volume manga structure, and 101-episode anime structure."
      },
      {
        "name": "Slam Dunk anime-to-manga continuation guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 198 as the practical post-TV-anime continuation point."
      }
    ],
    "sourceEvidence": [
      {
        "name": "Slam Dunk manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga source, completed manga status, 31-volume manga structure, and 101-episode anime structure."
      },
      {
        "name": "Slam Dunk anime-to-manga continuation guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 198 as the practical post-TV-anime continuation point."
      }
    ],
    "isekaiSubgenres": [],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover image is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21"
  },
  {
    "id": "the-red-ranger-becomes-an-adventurer-in-another-world",
    "title": "The Red Ranger Becomes an Adventurer in Another World",
    "alternativeTitles": [
      "Sentai Red Isekai de Boukensha ni Naru"
    ],
    "coverImage": "/covers/the-red-ranger-becomes-an-adventurer-in-another-world.jpg",
    "genres": [
      "Action",
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Transported",
      "Fantasy Adventure"
    ],
    "releaseYear": 2025,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 adapts early manga material, but the exact final adapted chapter is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Start from Manga Chapter 1 recommended until exact anime endpoint is verified.",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Manga from the beginning is safest until exact coverage is checked.",
    "adaptationNote": "This clears the manual placeholder without guessing a chapter.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Red Ranger anime/manga overview",
        "type": "Anime / Manga Reference",
        "checked": false,
        "note": "Exact chapter endpoint still needs verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "1",
    "mangaContinueChapter": "1",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start the manga from Chapter 1 for now. Exact post-anime chapter needs verification.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "Exact anime-to-manga endpoint is not verified yet.",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Red Ranger anime/manga overview",
        "type": "Anime / Manga Reference",
        "checked": false,
        "note": "Exact chapter endpoint still needs verification."
      }
    ]
  },
  {
    "id": "beheneko",
    "title": "I'm a Behemoth, an S-Ranked Monster, but Mistaken for a Cat",
    "alternativeTitles": [
      "Beheneko"
    ],
    "coverImage": "/covers/beheneko.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Dungeon"
    ],
    "releaseYear": 2025,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel/manga material, but the exact endpoint is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is possible but not recommended as the main database route.",
    "lightNovelContinueFrom": "Start from Light Novel Volume 1 recommended until the anime endpoint is verified.",
    "recommendedRoute": "Light Novel from beginning",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel from the beginning is safest for now.",
    "adaptationNote": "This clears the manual placeholder without guessing a volume.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Beheneko anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Exact endpoint still needs verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Start the light novel from Volume 1 until the anime endpoint is verified.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The exact anime-to-source endpoint is not verified.",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Beheneko anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Exact endpoint still needs verification."
      }
    ]
  },
  {
    "id": "from-bureaucrat-to-villainess",
    "title": "From Bureaucrat to Villainess: Dad's Been Reincarnated!",
    "alternativeTitles": [
      "Akuyaku Reijou Tensei Ojisan"
    ],
    "coverImage": "/covers/from-bureaucrat-to-villainess.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Villainess",
      "Reincarnation",
      "Comedy"
    ],
    "releaseYear": 2025,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 adapts early manga material, but the exact final adapted chapter is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Start from Manga Chapter 1 recommended until exact endpoint is verified.",
    "lightNovelContinueFrom": "Not applicable. The main source route is manga.",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Manga from the beginning is safest for now.",
    "adaptationNote": "This clears the manual placeholder without guessing a chapter.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "From Bureaucrat to Villainess anime/manga overview",
        "type": "Anime / Manga Reference",
        "checked": false,
        "note": "Exact anime-to-manga endpoint still needs verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "1",
    "mangaContinueChapter": "1",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start the manga from Chapter 1 until the exact anime endpoint is verified.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The exact anime-to-manga endpoint is not verified.",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "From Bureaucrat to Villainess anime/manga overview",
        "type": "Anime / Manga Reference",
        "checked": false,
        "note": "Exact anime-to-manga endpoint still needs verification."
      }
    ]
  },
  {
    "id": "the-beginning-after-the-end",
    "title": "The Beginning After the End",
    "alternativeTitles": [
      "TBATE"
    ],
    "coverImage": "/covers/the-beginning-after-the-end.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Fantasy Adventure",
      "Overpowered MC"
    ],
    "releaseYear": 2025,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Web Novel / Manhwa",
    "animeEndsAt": "The anime adapts early web novel/manhwa material, but the exact endpoint depends on latest aired episode coverage.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2025,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manhwa route possible, but exact chapter needs latest-episode verification.",
    "lightNovelContinueFrom": "Not applicable as Japanese light novel route.",
    "recommendedRoute": "Manhwa / Web Novel from beginning",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Source from the beginning is safest for now.",
    "adaptationNote": "This clears the manual placeholder without guessing a chapter.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "The Beginning After the End anime/source overview",
        "type": "Anime / Web Novel / Manhwa Reference",
        "checked": false,
        "note": "Latest episode-to-source mapping needs later verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not available yet",
    "mangaContinueChapter": "Not available yet",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Start from the beginning recommended until the latest anime endpoint is verified.",
    "recommendedContinueFrom": "Start from the beginning for the source route until the latest anime endpoint is verified.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The exact anime-to-source endpoint depends on latest episode coverage and is not safely verified.",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "The Beginning After the End anime/source overview",
        "type": "Anime / Web Novel / Manhwa Reference",
        "checked": false,
        "note": "Latest episode-to-source mapping needs later verification."
      }
    ]
  },
  {
    "id": "a-wild-last-boss-appeared",
    "title": "A Wild Last Boss Appeared!",
    "alternativeTitles": [
      "Yasei no Last Boss ga Arawareta!"
    ],
    "coverImage": "/covers/a-wild-last-boss-appeared.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Game World",
      "Overpowered MC"
    ],
    "releaseYear": 2025,
    "animeStatus": "Announced",
    "totalEpisodes": 0,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Anime adaptation status and final adapted endpoint should be verified before publishing a precise continuation point.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "Season 1",
        "episodes": 0,
        "releaseYear": 2025,
        "status": "Announced"
      }
    ],
    "mangaContinueFrom": "Manga route is possible but not recommended as the main route.",
    "lightNovelContinueFrom": "Start from Light Novel Volume 1 recommended until the anime endpoint is verified.",
    "recommendedRoute": "Light Novel from beginning",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel from the beginning is safest for now.",
    "adaptationNote": "This clears the manual placeholder without guessing a volume.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "A Wild Last Boss Appeared anime/light novel overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Weak evidence only. Exact anime endpoint still needs verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Start the light novel from Volume 1 until the anime endpoint is verified.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The exact anime-to-light-novel endpoint is not verified.",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "A Wild Last Boss Appeared anime/light novel overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Weak evidence only. Exact anime endpoint still needs verification."
      }
    ]
  },
  {
    "id": "ill-become-a-villainess-who-goes-down-in-history",
    "title": "I'll Become a Villainess Who Goes Down in History",
    "alternativeTitles": [
      "Rekishi ni Nokoru Akujo ni Naru zo"
    ],
    "coverImage": "/covers/ill-become-a-villainess-who-goes-down-in-history.jpg",
    "genres": [
      "Fantasy",
      "Romance",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Villainess",
      "Reincarnation"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material. Exact endpoint is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 13,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as main route.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 4, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the recommended route, but exact volume should be checked.",
    "adaptationNote": "This is an approximate improvement over the placeholder. Do not mark verified yet.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Villainess Who Goes Down in History source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm source route and anime status."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 4, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Villainess Who Goes Down in History source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm source route and anime status."
      }
    ]
  },
  {
    "id": "loner-life-in-another-world",
    "title": "Loner Life in Another World",
    "alternativeTitles": [
      "Hitoribocchi no Isekai Kouryaku"
    ],
    "coverImage": "/covers/loner-life-in-another-world.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Dungeon"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, but the exact final adapted volume is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is possible, but the light novel is the main source route.",
    "lightNovelContinueFrom": "Likely Light Novel Volume 4 or 5, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but exact volume should be checked.",
    "adaptationNote": "Low-confidence estimate only. Keep verification on until episode-to-volume mapping is confirmed.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Loner Life in Another World light novel/anime overview",
        "type": "Anime / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the light novel route and ongoing volume structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "4 or 5",
    "lightNovelContinueChapter": "Start of next unadapted volume",
    "webNovelContinueFrom": "Not recommended as the main database route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 4 or 5 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Loner Life in Another World light novel/anime overview",
        "type": "Anime / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the light novel route and ongoing volume structure."
      }
    ]
  },
  {
    "id": "a-journey-through-another-world",
    "title": "A Journey Through Another World: Raising Kids While Adventuring",
    "alternativeTitles": [
      "Isekai Yururi Kikou"
    ],
    "coverImage": "/covers/a-journey-through-another-world.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Reincarnation",
      "Slow Life",
      "Fantasy Adventure"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel / Web Novel",
    "animeEndsAt": "Season 1 has 12 episodes and adapts early light novel material, but the exact post-anime volume endpoint is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route because the light novel is the main source route.",
    "lightNovelContinueFrom": "Start from Light Novel Volume 1 recommended until the exact anime endpoint is verified.",
    "recommendedRoute": "Light Novel from beginning",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Light novel from the beginning is safest.",
    "adaptationNote": "This clears the manual placeholder with a conservative source-from-beginning recommendation.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "A Journey Through Another World anime/light novel overview",
        "type": "Anime / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the series is a light novel adaptation with a 12-episode anime season."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "1",
    "lightNovelContinueChapter": "Start of Volume 1",
    "webNovelContinueFrom": "Possible route, but not recommended as the main database route.",
    "recommendedContinueFrom": "Start the light novel from Volume 1 for the clean source route until the exact anime endpoint is verified.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The exact anime-to-light-novel endpoint is not safely verified, so starting from the beginning is the cleanest source route.",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "A Journey Through Another World anime/light novel overview",
        "type": "Anime / Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the series is a light novel adaptation with a 12-episode anime season."
      }
    ]
  },
  {
    "id": "quality-assurance-in-another-world",
    "title": "Quality Assurance in Another World",
    "alternativeTitles": [
      "Kono Sekai wa Fukanzen Sugiru"
    ],
    "coverImage": "/covers/quality-assurance-in-another-world.jpg",
    "genres": [
      "Adventure",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Game World",
      "Fantasy Adventure"
    ],
    "releaseYear": 2024,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 has 13 episodes and adapts early manga material through the Volume 6 / Chapter 35 area.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 13,
        "releaseYear": 2024,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Volume 6, Chapter 35",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "High",
    "spoilerFreeNote": "Continue from Volume 6, Chapter 35 after the anime.",
    "adaptationNote": "The anime is a fairly close adaptation, so Chapter 35 is a useful continuation point.",
    "lastUpdated": "2026-06-21",
    "needsVerification": false,
    "dataSources": [
      {
        "name": "Quality Assurance in Another World anime-to-manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Volume 6, Chapter 35 as the post-anime continuation point."
      },
      {
        "name": "Kodansha official Quality Assurance in Another World listing",
        "type": "Official Manga Reference",
        "checked": true,
        "note": "Used to confirm manga source route and publisher information."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "6",
    "mangaContinueChapter": "35",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Manga Volume 6, Chapter 35 after Season 1.",
    "continuationStatus": "Verified",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Quality Assurance in Another World anime-to-manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Volume 6, Chapter 35 as the post-anime continuation point."
      },
      {
        "name": "Kodansha official Quality Assurance in Another World listing",
        "type": "Official Manga Reference",
        "checked": true,
        "note": "Used to confirm manga source route and publisher information."
      }
    ]
  },
  {
    "id": "summoned-to-another-world-for-a-second-time",
    "title": "Summoned to Another World for a Second Time",
    "alternativeTitles": [
      "Isekai Shoukan wa Nidome desu"
    ],
    "coverImage": "/covers/summoned-to-another-world-for-a-second-time.jpg",
    "genres": [
      "Action",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Fantasy Adventure"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, but the exact volume endpoint is not safely verified.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as the main route.",
    "lightNovelContinueFrom": "Likely around Light Novel Volume 3, but needs verification.",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the best route, but exact volume should be checked.",
    "adaptationNote": "Low-confidence estimate only. Keep needsVerification true.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Summoned to Another World for a Second Time anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs manual verification."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not recommended as main route.",
    "recommendedContinueFrom": "Likely Light Novel Volume 3 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Summoned to Another World for a Second Time anime/source overview",
        "type": "Anime / Light Novel Reference",
        "checked": false,
        "note": "Placeholder evidence only. Volume 3 estimate needs manual verification."
      }
    ]
  },
  {
    "id": "kemono-michi-rise-up",
    "title": "Kemono Michi: Rise Up",
    "alternativeTitles": [
      "Hataage! Kemono Michi"
    ],
    "coverImage": "/covers/kemono-michi-rise-up.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Isekai"
    ],
    "isekaiSubgenres": [
      "Summoned",
      "Comedy",
      "Fantasy Adventure"
    ],
    "releaseYear": 2019,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime adapts early manga material with comedy-focused pacing.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2019,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Around Manga Chapter 35-40, but starting from the beginning is safer.",
    "lightNovelContinueFrom": "Not applicable. The source material is manga.",
    "recommendedRoute": "Manga from beginning",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Read the manga from the beginning for all jokes and skipped content.",
    "adaptationNote": "Exact continuation is low confidence. Beginning is the safest route.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Kemono Michi source overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga route and anime episode count."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Around Volume 5",
    "mangaContinueChapter": "35-40",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Start from the beginning for safest continuity. Rough skip point: around Chapter 35-40.",
    "continuationStatus": "Start From Beginning Recommended",
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "Comedy chapters and adaptation pacing make the exact chapter jump less reliable.",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Kemono Michi source overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga route and anime episode count."
      }
    ]
  },
  {
    "id": "full-dive-this-ultimate-next-gen-full-dive-rpg",
    "title": "Full Dive: This Ultimate Next-Gen Full Dive RPG Is Even Shittier than Real Life!",
    "alternativeTitles": [
      "Full Dive RPG"
    ],
    "coverImage": "/covers/full-dive-this-ultimate-next-gen-full-dive-rpg.jpg",
    "genres": [
      "Comedy",
      "Fantasy",
      "Game"
    ],
    "isekaiSubgenres": [
      "Game World",
      "Comedy"
    ],
    "releaseYear": 2021,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material, likely the first two volumes.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2021,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga route is not recommended as main continuation.",
    "lightNovelContinueFrom": "Light Novel Volume 3",
    "recommendedRoute": "Light Novel",
    "confidenceLevel": "Low",
    "spoilerFreeNote": "Light novel is the recommended route after the anime.",
    "adaptationNote": "Common route is Volume 3, but exact volume mapping should be checked before marking verified.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Full Dive source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm light novel source route."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueVolume": "3",
    "lightNovelContinueChapter": "Start of Volume 3",
    "webNovelContinueFrom": "Not applicable",
    "recommendedContinueFrom": "Light Novel Volume 3, but keep verification until exact mapping is confirmed.",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Full Dive source overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm light novel source route."
      }
    ]
  },
  {
    "id": "a-playthrough-of-a-certain-dudes-vrmmo-life",
    "title": "A Playthrough of a Certain Dude's VRMMO Life",
    "alternativeTitles": [
      "Toaru Ossan no VRMMO Katsudouki"
    ],
    "coverImage": "/covers/a-playthrough-of-a-certain-dudes-vrmmo-life.jpg",
    "genres": [
      "Fantasy",
      "Game",
      "Slice of Life"
    ],
    "isekaiSubgenres": [
      "Game World",
      "Slow Life",
      "Fantasy Adventure"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 has 12 episodes and adapts early light novel/manga material.",
    "seasonsBreakdown": [
      {
        "seasonNumber": 1,
        "seasonTitle": "TV series",
        "episodes": 12,
        "releaseYear": 2023,
        "status": "Finished"
      }
    ],
    "mangaContinueFrom": "Manga Volume 4, Chapter 32",
    "lightNovelContinueFrom": "Light novel route needs exact volume verification; manga continuation is clearer.",
    "recommendedRoute": "Manga",
    "confidenceLevel": "Medium",
    "spoilerFreeNote": "Continue with the manga around Volume 4, Chapter 32 after the anime.",
    "adaptationNote": "Manga continuation has a clearer reference than light novel continuation. Keep LN route unverified.",
    "lastUpdated": "2026-06-21",
    "needsVerification": true,
    "dataSources": [
      {
        "name": "Where Does The Anime Leave Off guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm manga continuation at Volume 4, Chapter 32."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because the local cover path is not available yet.",
    "coverNeedsUpdate": true,
    "mangaContinueVolume": "4",
    "mangaContinueChapter": "32",
    "lightNovelContinueVolume": "Not available yet",
    "lightNovelContinueChapter": "Not available yet",
    "webNovelContinueFrom": "Not recommended as the main route.",
    "recommendedContinueFrom": "Manga Volume 4, Chapter 32",
    "continuationStatus": "Approximate",
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "continuationNote": "Continuation guidance is available from the local database. Check the confidence and verification badges before publishing.",
    "researchPriority": "Medium",
    "needsManualResearch": false,
    "sourceEvidence": [
      {
        "name": "Where Does The Anime Leave Off guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm manga continuation at Volume 4, Chapter 32."
      }
    ]
  },
  {
    "id": "ao-haru-ride",
    "title": "Ao Haru Ride",
    "alternativeTitles": [
      "Blue Spring Ride",
      "Aoharaido"
    ],
    "coverImage": "/covers/ao-haru-ride.jpg",
    "genres": [
      "Romance",
      "School",
      "Shoujo",
      "Drama",
      "Slice of Life"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Finished",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 reaches the Chapter 14 adaptation point; continue with Chapter 15.",
    "mangaContinueFrom": "Manga Chapter 15",
    "mangaContinueVolume": "Volume 4",
    "mangaContinueChapter": "15",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Manga Chapter 15",
    "continuationStatus": "Verified",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Continue from Chapter 15 after the anime.",
    "adaptationNote": "The anime is fairly faithful and ends around Chapter 14. Chapter 15 is the next clean manga point, but starting a few chapters earlier is optional for smoother pacing.",
    "dataSources": [
      {
        "name": "Ao Haru Ride chapter continuation references",
        "type": "Anime-to-Manga Guide / Chapter Reference",
        "checked": true,
        "note": "Used to confirm the anime ends around Chapter 14 and Chapter 15 follows."
      },
      {
        "name": "VIZ Ao Haru Ride Chapter 15 listing",
        "type": "Official Chapter Reference",
        "checked": true,
        "note": "Used to confirm Chapter 15 exists as the next manga chapter."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "Ao Haru Ride chapter continuation references",
        "type": "Anime-to-Manga Guide / Chapter Reference",
        "checked": true,
        "note": "Used to confirm the anime ends around Chapter 14 and Chapter 15 follows."
      },
      {
        "name": "VIZ Ao Haru Ride Chapter 15 listing",
        "type": "Official Chapter Reference",
        "checked": true,
        "note": "Used to confirm Chapter 15 exists as the next manga chapter."
      }
    ]
  },
  {
    "id": "kimi-ni-todoke",
    "title": "Kimi ni Todoke: From Me to You",
    "alternativeTitles": [
      "Kimi ni Todoke",
      "From Me to You"
    ],
    "coverImage": "/covers/kimi-ni-todoke.jpg",
    "genres": [
      "Romance",
      "School",
      "Shoujo",
      "Slice of Life",
      "Drama"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Ongoing / New anime announced possible",
    "totalEpisodes": 42,
    "totalSeasons": 3,
    "sourceType": "Manga",
    "animeEndsAt": "Season 2 ends around Manga Chapter 46. Season 3 exists, but the exact Season 3 manga endpoint needs careful verification before publishing a final chapter number.",
    "mangaContinueFrom": "After Season 2: Manga Chapter 47. After Season 3: Needs manual verification.",
    "mangaContinueVolume": "After Season 2: around Volume 11 / Season 3 endpoint not safely verified",
    "mangaContinueChapter": "47 after Season 2 / Season 3 endpoint needs verification",
    "lightNovelContinueFrom": "Not recommended as main route. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "If watched through Season 2, continue from Manga Chapter 47. If watched Season 3, mark as needs verification until the exact Season 3 endpoint is checked.",
    "continuationStatus": "Approximate",
    "confidenceLevel": "Medium",
    "needsVerification": true,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Manga is the best route. Season 2 continuation is clear, but Season 3 continuation needs a newer check.",
    "adaptationNote": "Kimi ni Todoke manga is complete with 30 volumes. Season 2 ends around Chapter 46. Because Season 3 was released much later and has longer episodes, keep the latest continuation point marked for verification.",
    "dataSources": [
      {
        "name": "Kimi ni Todoke Season 2 chapter guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ends around Chapter 46."
      },
      {
        "name": "Kimi ni Todoke chapter list",
        "type": "Manga Chapter Reference",
        "checked": true,
        "note": "Used to confirm the manga is complete and has 30 volumes."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "Kimi ni Todoke Season 2 chapter guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Season 2 ends around Chapter 46."
      },
      {
        "name": "Kimi ni Todoke chapter list",
        "type": "Manga Chapter Reference",
        "checked": true,
        "note": "Used to confirm the manga is complete and has 30 volumes."
      }
    ]
  },
  {
    "id": "lovely-complex",
    "title": "Lovely Complex",
    "alternativeTitles": [
      "Love Com",
      "Lovely Complex"
    ],
    "coverImage": "/covers/lovely-complex.jpg",
    "genres": [
      "Romance",
      "Comedy",
      "School",
      "Shoujo"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Finished",
    "totalEpisodes": 24,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime has 24 episodes and adapts a large part of the manga, but it compresses and omits later-half material.",
    "mangaContinueFrom": "Manga from beginning or around later manga volumes for skipped material",
    "mangaContinueVolume": "Start from Volume 1 recommended / later material around Volume 10+ if skipping",
    "mangaContinueChapter": "Start from Chapter 1 recommended",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga from beginning",
    "recommendedContinueFrom": "Start from the beginning for the full manga experience.",
    "continuationStatus": "Start From Beginning Recommended",
    "confidenceLevel": "Medium",
    "needsVerification": true,
    "needsManualResearch": false,
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime compresses and omits parts of the later manga material.",
    "spoilerFreeNote": "The anime gives a satisfying romance route, but the manga has fuller material.",
    "adaptationNote": "Lovely Complex has 17 manga volumes and a 24-episode anime. Because the anime compresses later material, a clean single chapter continuation is not ideal.",
    "dataSources": [
      {
        "name": "Lovely Complex manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga volume count and anime episode count."
      },
      {
        "name": "Lovely Complex anime vs manga comparison",
        "type": "Adaptation Comparison",
        "checked": true,
        "note": "Used to confirm the anime omits and compresses later manga material."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "Lovely Complex manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga volume count and anime episode count."
      },
      {
        "name": "Lovely Complex anime vs manga comparison",
        "type": "Adaptation Comparison",
        "checked": true,
        "note": "Used to confirm the anime omits and compresses later manga material."
      }
    ]
  },
  {
    "id": "say-i-love-you",
    "title": "Say \"I Love You\".",
    "alternativeTitles": [
      "Sukitte Ii na yo.",
      "Suki-tte Ii na yo"
    ],
    "coverImage": "/covers/say-i-love-you.jpg",
    "genres": [
      "Romance",
      "School",
      "Shoujo",
      "Drama"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Finished",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 covers early manga material, roughly the first several volumes.",
    "mangaContinueFrom": "Manga Chapter 29 is a cautious continuation estimate, but starting from Chapter 1 is also recommended for full context.",
    "mangaContinueVolume": "Around Volume 8",
    "mangaContinueChapter": "29",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Manga Chapter 29 after the anime. Optional full-context route: read earlier chapters too.",
    "continuationStatus": "Approximate",
    "confidenceLevel": "Medium",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The manga is complete, so it is safe to continue with the manga after the anime.",
    "adaptationNote": "The manga is complete and has much more story after the anime. Exact chapter mapping is less clear than some other romance adaptations, so keep Medium confidence.",
    "dataSources": [
      {
        "name": "Say I Love You manga completion reference",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm the manga is complete."
      },
      {
        "name": "Say I Love You chapter/volume reference",
        "type": "Manga Chapter Reference",
        "checked": true,
        "note": "Used to map later chapter ranges by volume."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "Say I Love You manga completion reference",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm the manga is complete."
      },
      {
        "name": "Say I Love You chapter/volume reference",
        "type": "Manga Chapter Reference",
        "checked": true,
        "note": "Used to map later chapter ranges by volume."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "my-little-monster",
    "title": "My Little Monster",
    "alternativeTitles": [
      "Tonari no Kaibutsu-kun"
    ],
    "coverImage": "/covers/my-little-monster.jpg",
    "genres": [
      "Romance",
      "Comedy",
      "School",
      "Shoujo"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Finished",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 reaches the Chapter 16 adaptation point.",
    "mangaContinueFrom": "Manga Chapter 16 or Chapter 17",
    "mangaContinueVolume": "Volume 4",
    "mangaContinueChapter": "16/17",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Manga Chapter 16 for overlap, or Chapter 17 for new material.",
    "continuationStatus": "Verified",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Continue from Chapter 16/17 after the anime.",
    "adaptationNote": "The anime covers early manga material and the manga continues far beyond it. Starting at Chapter 16 gives a small overlap and safer transition.",
    "dataSources": [
      {
        "name": "Where Does The Anime Leave Off - My Little Monster",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 16 as the anime ending area."
      },
      {
        "name": "My Little Monster manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm manga completion and volume count."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "Where Does The Anime Leave Off - My Little Monster",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 16 as the anime ending area."
      },
      {
        "name": "My Little Monster manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm manga completion and volume count."
      }
    ]
  },
  {
    "id": "bloom-into-you",
    "title": "Bloom Into You",
    "alternativeTitles": [
      "Yagate Kimi ni Naru"
    ],
    "coverImage": "/covers/bloom-into-you.jpg",
    "genres": [
      "Romance",
      "School",
      "Drama",
      "Girls Love"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Finished",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 reaches the Chapter 24 adaptation point; continue with Chapter 25.",
    "mangaContinueFrom": "Manga Chapter 25",
    "mangaContinueVolume": "Volume 5",
    "mangaContinueChapter": "25",
    "lightNovelContinueFrom": "Not applicable as main route. Side novels exist but the main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Manga Chapter 25 / Volume 5",
    "continuationStatus": "Verified",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Continue from Chapter 25 after the anime.",
    "adaptationNote": "The anime adapts about the first 24 chapters. The manga is complete, so Chapter 25 is the next main story point.",
    "dataSources": [
      {
        "name": "Bloom Into You anime-to-manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 24/25 continuation."
      },
      {
        "name": "Bloom Into You manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm the manga is complete."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "Bloom Into You anime-to-manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 24/25 continuation."
      },
      {
        "name": "Bloom Into You manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm the manga is complete."
      }
    ]
  },
  {
    "id": "kubo-wont-let-me-be-invisible",
    "title": "Kubo Won't Let Me Be Invisible",
    "alternativeTitles": [
      "Kubo-san wa Mob wo Yurusanai"
    ],
    "coverImage": "/covers/kubo-wont-let-me-be-invisible.jpg",
    "genres": [
      "Romance",
      "Comedy",
      "School",
      "Slice of Life"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Finished",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 ends around Manga Chapter 44.",
    "mangaContinueFrom": "Manga Chapter 45, but starting from Chapter 1 is also fine because the chapters are short and slice-of-life.",
    "mangaContinueVolume": "Around Volume 5",
    "mangaContinueChapter": "45",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Manga Chapter 45 after the anime.",
    "continuationStatus": "Approximate",
    "confidenceLevel": "Medium",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Continue around Chapter 45 after the anime.",
    "adaptationNote": "The manga is complete. Anime ending is commonly placed around Chapter 44, so Chapter 45 is the practical continuation point, but keep Medium confidence.",
    "dataSources": [
      {
        "name": "Kubo-san community continuation reference",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to estimate anime ending around Chapter 44."
      },
      {
        "name": "Kubo Won't Let Me Be Invisible manga ending reference",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm the manga is complete."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "Kubo-san community continuation reference",
        "type": "Community Backup",
        "checked": true,
        "note": "Used to estimate anime ending around Chapter 44."
      },
      {
        "name": "Kubo Won't Let Me Be Invisible manga ending reference",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm the manga is complete."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "boarding-school-juliet",
    "title": "Boarding School Juliet",
    "alternativeTitles": [
      "Kishuku Gakkou no Juliet",
      "Juliet of Boarding School"
    ],
    "coverImage": "/covers/boarding-school-juliet.jpg",
    "genres": [
      "Romance",
      "Comedy",
      "School",
      "Shounen"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Finished",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 reaches the Chapter 19 adaptation point; continue with Chapter 19.",
    "mangaContinueFrom": "Manga Chapter 19",
    "mangaContinueVolume": "Around Volume 4",
    "mangaContinueChapter": "19",
    "lightNovelContinueFrom": "Not recommended as main route. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Manga Chapter 19",
    "continuationStatus": "Verified",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Continue from Chapter 19 after the anime.",
    "adaptationNote": "The manga is complete with 16 volumes. Chapter 19 is a safe continuation point because the anime ends while adapting early Chapter 19 material.",
    "dataSources": [
      {
        "name": "Boarding School Juliet anime-to-manga discussion",
        "type": "Anime-to-Manga Guide / Community Backup",
        "checked": true,
        "note": "Used to confirm Chapter 19 as the continuation point."
      },
      {
        "name": "Boarding School Juliet manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm manga completion and volume count."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "Boarding School Juliet anime-to-manga discussion",
        "type": "Anime-to-Manga Guide / Community Backup",
        "checked": true,
        "note": "Used to confirm Chapter 19 as the continuation point."
      },
      {
        "name": "Boarding School Juliet manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm manga completion and volume count."
      }
    ]
  },
  {
    "id": "the-ice-guy-and-his-cool-female-colleague",
    "title": "The Ice Guy and His Cool Female Colleague",
    "alternativeTitles": [
      "Koori Zokusei Danshi to Cool na Douryou Joshi",
      "The Ice Guy and the Cool Girl"
    ],
    "coverImage": "/covers/the-ice-guy-and-his-cool-female-colleague.jpg",
    "genres": [
      "Romance",
      "Comedy",
      "Josei",
      "Workplace",
      "Fantasy"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Finished",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 adapts most of the first five manga volumes and ends before Chapter 41.",
    "mangaContinueFrom": "Manga Chapter 41",
    "mangaContinueVolume": "Volume 5 / Volume 6 area",
    "mangaContinueChapter": "41",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Manga Chapter 41",
    "continuationStatus": "Verified",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Continue from Chapter 41 after the anime.",
    "adaptationNote": "The anime rearranges some chapter order but covers much of the early manga. Chapter 41 is the recommended continuation point.",
    "dataSources": [
      {
        "name": "Where Does The Anime Leave Off - Ice Guy",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 41 as the continuation point."
      },
      {
        "name": "The Ice Guy manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm manga route and volume availability."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "Where Does The Anime Leave Off - Ice Guy",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 41 as the continuation point."
      },
      {
        "name": "The Ice Guy manga overview",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm manga route and volume availability."
      }
    ]
  },
  {
    "id": "my-happy-marriage",
    "title": "My Happy Marriage",
    "alternativeTitles": [
      "Watashi no Shiawase na Kekkon"
    ],
    "coverImage": "/covers/my-happy-marriage.jpg",
    "genres": [
      "Romance",
      "Drama",
      "Historical",
      "Fantasy"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Ongoing / New anime announced",
    "totalEpisodes": 26,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts early light novel material and continues into Volume 3 afterward. Season 2 finished with Episode 26 overall, but the exact post-Season-2 light novel endpoint should be verified before marking as final.",
    "mangaContinueFrom": "Manga route is behind the anime and not recommended as the main continuation route.",
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueFrom": "After Season 1: Light Novel Volume 3. After Season 2: likely later than Volume 4, but exact endpoint needs verification.",
    "lightNovelContinueVolume": "After Season 1: 3 / After Season 2: needs verification",
    "lightNovelContinueChapter": "Start of Volume 3 after Season 1",
    "webNovelContinueFrom": "Not recommended as main route. Use published light novel route.",
    "recommendedRoute": "Light Novel",
    "recommendedContinueFrom": "If watched Season 1 only, continue from Light Novel Volume 3. If watched Season 2, keep as needs verification until exact Volume 5+ endpoint is confirmed.",
    "continuationStatus": "Approximate",
    "confidenceLevel": "Medium",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Light novel is the best route. Manga is behind the anime.",
    "adaptationNote": "Season 2 ended in 2025 and another anime project was announced, so the latest continuation point should be checked carefully before showing a final volume number.",
    "dataSources": [
      {
        "name": "My Happy Marriage light novel continuation guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Volume 3 as the post-Season-1 continuation."
      },
      {
        "name": "My Happy Marriage Season 2 finale / new anime news",
        "type": "Anime News",
        "checked": true,
        "note": "Used to confirm Season 2 ended and new anime was announced."
      },
      {
        "name": "My Happy Marriage light novel overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the published light novel route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "My Happy Marriage light novel continuation guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Volume 3 as the post-Season-1 continuation."
      },
      {
        "name": "My Happy Marriage Season 2 finale / new anime news",
        "type": "Anime News",
        "checked": true,
        "note": "Used to confirm Season 2 ended and new anime was announced."
      },
      {
        "name": "My Happy Marriage light novel overview",
        "type": "Light Novel Reference",
        "checked": true,
        "note": "Used to confirm the published light novel route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "id": "the-pet-girl-of-sakurasou",
    "title": "The Pet Girl of Sakurasou",
    "alternativeTitles": [
      "Sakurasou no Pet na Kanojo"
    ],
    "coverImage": "/covers/the-pet-girl-of-sakurasou.jpg",
    "genres": [
      "Romance",
      "Comedy",
      "School",
      "Drama",
      "Slice of Life"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Finished",
    "totalEpisodes": 24,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 reaches the Light Novel Volume 6 adaptation point, with nearby material included.",
    "mangaContinueFrom": "Manga route is not recommended as main route.",
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueFrom": "Light Novel Volume 7",
    "lightNovelContinueVolume": "7",
    "lightNovelContinueChapter": "Start of Volume 7",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Light Novel",
    "recommendedContinueFrom": "Light Novel Volume 7",
    "continuationStatus": "Verified",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Continue from Volume 7 after the anime.",
    "adaptationNote": "The anime covers roughly through Volume 6. Volume 7 is the next main light novel route, but official English availability may be limited depending on region.",
    "dataSources": [
      {
        "name": "Sakurasou light novel continuation references",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm the anime ends around Volume 6 and Volume 7 follows."
      },
      {
        "name": "Sakurasou Volume 7 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 7 follows Volume 6."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "Sakurasou light novel continuation references",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm the anime ends around Volume 6 and Volume 7 follows."
      },
      {
        "name": "Sakurasou Volume 7 reference",
        "type": "Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 7 follows Volume 6."
      }
    ]
  },
  {
    "id": "tsuki-ga-kirei",
    "title": "Tsuki ga Kirei",
    "alternativeTitles": [
      "Tsukigakirei",
      "As the Moon, So Beautiful"
    ],
    "coverImage": "/covers/tsuki-ga-kirei.jpg",
    "genres": [
      "Romance",
      "School",
      "Coming of Age",
      "Slice of Life"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Finished",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "The anime is an original 12-episode complete story.",
    "mangaContinueFrom": "Not applicable. No main manga source continuation.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable. No main light novel source continuation.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "recommendedContinueFrom": "No source continuation available. The anime is the complete main story.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The anime is complete. No manga or light novel continuation is needed.",
    "adaptationNote": "Tsuki ga Kirei is an original anime, so it should be shown as a complete anime-original romance story.",
    "dataSources": [
      {
        "name": "Tsuki ga Kirei original anime reference",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm it is an original anime with 12 episodes."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "Tsuki ga Kirei original anime reference",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm it is an original anime with 12 episodes."
      }
    ]
  },
  {
    "id": "just-because",
    "title": "Just Because!",
    "alternativeTitles": [
      "Just Because"
    ],
    "coverImage": "/covers/just-because.jpg",
    "genres": [
      "Romance",
      "School",
      "Drama",
      "Slice of Life"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Finished",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "The anime is an original 12-episode complete story.",
    "mangaContinueFrom": "Not applicable. No main manga source continuation.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable. No main light novel source continuation.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "recommendedContinueFrom": "No source continuation available. The anime is the complete main story.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The anime is complete and does not need manga or light novel continuation.",
    "adaptationNote": "Just Because! is an original anime, so the website should not show a manga/light novel reading route.",
    "dataSources": [
      {
        "name": "Just Because original anime reference",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm it is an original anime project."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "Just Because original anime reference",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm it is an original anime project."
      }
    ]
  },
  {
    "id": "tada-never-falls-in-love",
    "title": "Tada Never Falls in Love",
    "alternativeTitles": [
      "Tada-kun wa Koi wo Shinai"
    ],
    "coverImage": "/covers/tada-never-falls-in-love.jpg",
    "genres": [
      "Romance",
      "Comedy",
      "School",
      "Slice of Life"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Finished",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "The anime is an original 13-episode complete story.",
    "mangaContinueFrom": "Not applicable. No main manga source continuation.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "A novel adaptation exists, but it is not the main continuation route.",
    "lightNovelContinueVolume": "Not recommended as continuation",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "recommendedContinueFrom": "No source continuation available. The anime is the complete main story.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The anime is complete. No manga or light novel continuation is needed.",
    "adaptationNote": "Tada Never Falls in Love is an original anime. There is a novel adaptation, but it is not a post-anime continuation route.",
    "dataSources": [
      {
        "name": "Tada Never Falls in Love original anime reference",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm the anime is original and has 13 episodes."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "Tada Never Falls in Love original anime reference",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm the anime is original and has 13 episodes."
      }
    ]
  },
  {
    "id": "plastic-memories",
    "title": "Plastic Memories",
    "alternativeTitles": [
      "PlaMemo"
    ],
    "coverImage": "/covers/plastic-memories.jpg",
    "genres": [
      "Romance",
      "Drama",
      "Sci-Fi"
    ],
    "isekaiSubgenres": [],
    "animeStatus": "Finished",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "The anime is an original 13-episode complete story.",
    "mangaContinueFrom": "Not applicable. No main manga source continuation.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable. No main light novel source continuation.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "recommendedContinueFrom": "No source continuation available. The anime is the complete main story.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The anime is complete and has no main manga or light novel continuation.",
    "adaptationNote": "Plastic Memories is an original anime. Do not show manga/light novel continuation fields as if they exist.",
    "dataSources": [
      {
        "name": "Plastic Memories original anime reference",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm Plastic Memories is an original 13-episode anime."
      }
    ],
    "lastUpdated": "2026-06-21",
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no licensed local cover image was provided.",
    "coverNeedsUpdate": true,
    "sourceEvidence": [
      {
        "name": "Plastic Memories original anime reference",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm Plastic Memories is an original 13-episode anime."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "alya-sometimes-hides-her-feelings-in-russian",
    "title": "Alya Sometimes Hides Her Feelings in Russian",
    "alternativeTitles": [
      "Roshidere",
      "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
      "Alya-san"
    ],
    "genres": [
      "Romance",
      "Comedy",
      "School",
      "Slice of Life"
    ],
    "releaseYear": 2024,
    "animeStatus": "Season 2 announced / continuation endpoint may need update after Season 2",
    "totalEpisodes": 12,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "Season 1 adapts the early light novel story through the end-of-term material, leading into Volume 4.",
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route because the light novel is the original source.",
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueFrom": "Light Novel Volume 4",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Light Novel",
    "recommendedContinueFrom": "Light Novel Volume 4 after Season 1. Recheck after Season 2 airs.",
    "continuationStatus": "Verified for Season 1 / Needs update if Season 2 is included",
    "confidenceLevel": "High",
    "needsVerification": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Continue with Light Novel Volume 4 after Season 1.",
    "adaptationNote": "Season 1 covers the early light novel material. Volume 4 begins the next main school-break/student-council retreat material. Keep a Season 2 caveat because the continuation point will change after new episodes.",
    "dataSources": [
      {
        "name": "Roshidere light novel Volume 4 reference",
        "type": "Light Novel Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 4 as the next useful light novel point after Season 1 material."
      },
      {
        "name": "Roshidere Season 1 coverage discussion",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Season 1 maps to the early light novel volumes."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Roshidere light novel Volume 4 reference",
        "type": "Light Novel Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 4 as the next useful light novel point after Season 1 material."
      },
      {
        "name": "Roshidere Season 1 coverage discussion",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used to confirm Season 1 maps to the early light novel volumes."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "dandadan",
    "title": "Dandadan",
    "alternativeTitles": [
      "Dan Da Dan"
    ],
    "genres": [
      "Action",
      "Comedy",
      "Supernatural",
      "Sci-Fi",
      "Romance",
      "Shonen"
    ],
    "releaseYear": 2024,
    "animeStatus": "Season 2 exists or needs endpoint verification depending on database coverage",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 ends around the Chapter 33/34 transition.",
    "mangaContinueFrom": "Manga Chapter 34",
    "mangaContinueVolume": "Around Volume 5",
    "mangaContinueChapter": "34",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Manga Chapter 34 after Season 1. If Season 2 is included, verify the newer endpoint.",
    "continuationStatus": "Verified for Season 1 / Needs update if Season 2 is included",
    "confidenceLevel": "Medium",
    "needsVerification": true,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Continue around Chapter 34 after Season 1.",
    "adaptationNote": "Season 1 ends at the start of the next manga section. Because later anime coverage may already exist, keep needsVerification true until the latest watched season is known.",
    "dataSources": [
      {
        "name": "Dandadan anime-to-manga continuation guides",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 34 as the post-Season-1 reading point."
      },
      {
        "name": "Official Dandadan manga listing",
        "type": "Official Manga Reference",
        "checked": true,
        "note": "Used to confirm manga route and ongoing chapter structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Dandadan anime-to-manga continuation guides",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 34 as the post-Season-1 reading point."
      },
      {
        "name": "Official Dandadan manga listing",
        "type": "Official Manga Reference",
        "checked": true,
        "note": "Used to confirm manga route and ongoing chapter structure."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "sakamoto-days",
    "title": "Sakamoto Days",
    "alternativeTitles": [
      "SAKAMOTO DAYS"
    ],
    "genres": [
      "Action",
      "Comedy",
      "Shonen",
      "Crime"
    ],
    "releaseYear": 2025,
    "animeStatus": "Season 1 Part 2 exists / latest endpoint needs verification",
    "totalEpisodes": 11,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 Part 1 ends before the next major manga material and commonly maps to the Chapter 37/38 area.",
    "mangaContinueFrom": "Manga Chapter 38 after Part 1. If Part 2 is included, verify the newer endpoint.",
    "mangaContinueVolume": "Volume 5 after Part 1",
    "mangaContinueChapter": "38",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Manga Chapter 38 after Season 1 Part 1. If Part 2 is included, recheck the latest adapted chapter.",
    "continuationStatus": "Approximate",
    "confidenceLevel": "Medium",
    "needsVerification": true,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Manga is the best continuation route after the anime.",
    "adaptationNote": "Part 1 has 11 episodes and continuation is around Chapter 38. Because Part 2 coverage changes the endpoint, later coverage needs verification and this should stay Medium confidence.",
    "dataSources": [
      {
        "name": "Sakamoto Days Part 1 manga continuation guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 38 / Volume 5 as the Part 1 continuation point."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Sakamoto Days Part 1 manga continuation guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 38 / Volume 5 as the Part 1 continuation point."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "wind-breaker",
    "title": "Wind Breaker",
    "alternativeTitles": [
      "WIND BREAKER"
    ],
    "genres": [
      "Action",
      "School",
      "Delinquents",
      "Shonen"
    ],
    "releaseYear": 2024,
    "animeStatus": "Season 2 finished / future seasons possible",
    "totalEpisodes": 25,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 ends at Chapter 41. Season 2 coverage reaches later manga material around Chapter 90.",
    "mangaContinueFrom": "After Season 1: Chapter 42. After Season 2: around Chapter 91.",
    "mangaContinueVolume": "After Season 1: Volume 6 / After Season 2: around Volume 12",
    "mangaContinueChapter": "42 after Season 1 / 91 after Season 2",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "If watched Season 1 only, continue from Chapter 42. If watched Season 2, continue around Chapter 91.",
    "continuationStatus": "Approximate",
    "confidenceLevel": "Medium",
    "needsVerification": true,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Manga is the best continuation route. Choose the chapter based on the latest season watched.",
    "adaptationNote": "Season 1 to Chapter 42 is well supported. Season 2 endpoint should still be verified before marking High confidence.",
    "dataSources": [
      {
        "name": "Wind Breaker anime-to-manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 42 after Season 1 and around Chapter 91 after Season 2."
      },
      {
        "name": "Official K Manga chapter listing",
        "type": "Official Manga Reference",
        "checked": true,
        "note": "Used to confirm Chapter 41 and Chapter 42 placement."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Wind Breaker anime-to-manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 42 after Season 1 and around Chapter 91 after Season 2."
      },
      {
        "name": "Official K Manga chapter listing",
        "type": "Official Manga Reference",
        "checked": true,
        "note": "Used to confirm Chapter 41 and Chapter 42 placement."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "blue-box",
    "title": "Blue Box",
    "alternativeTitles": [
      "Ao no Hako"
    ],
    "genres": [
      "Romance",
      "Sports",
      "School",
      "Drama",
      "Shonen"
    ],
    "releaseYear": 2024,
    "animeStatus": "Season 1 finished / later coverage needs verification",
    "totalEpisodes": 25,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 ends with Chapter 79 material, with some Chapter 80 content adapted earlier/out of order.",
    "mangaContinueFrom": "Manga Chapter 81",
    "mangaContinueVolume": "Volume 10",
    "mangaContinueChapter": "81",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Manga Chapter 81 after Season 1.",
    "continuationStatus": "Verified",
    "confidenceLevel": "High",
    "needsVerification": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Continue from Chapter 81 after Season 1.",
    "adaptationNote": "Season 1 ends with Chapter 79 as the final endpoint, but the anime rearranges some Chapter 80 content, making Chapter 81 the cleanest continuation point.",
    "dataSources": [
      {
        "name": "Blue Box anime-to-manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 81 as the practical post-Season-1 continuation point."
      },
      {
        "name": "Official Blue Box manga listing",
        "type": "Official Manga Reference",
        "checked": true,
        "note": "Used to confirm manga source route."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Blue Box anime-to-manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 81 as the practical post-Season-1 continuation point."
      },
      {
        "name": "Official Blue Box manga listing",
        "type": "Official Manga Reference",
        "checked": true,
        "note": "Used to confirm manga source route."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "bocchi-the-rock",
    "title": "Bocchi the Rock!",
    "alternativeTitles": [
      "Bocchi the Rock",
      "Botchi Za Rokku"
    ],
    "genres": [
      "Comedy",
      "Music",
      "Slice of Life"
    ],
    "releaseYear": 2022,
    "animeStatus": "Season 2 announced",
    "totalEpisodes": 12,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 adapts early manga material through roughly the end of Volume 2.",
    "mangaContinueFrom": "Manga Volume 3, around Chapter 22/23",
    "mangaContinueVolume": "3",
    "mangaContinueChapter": "22/23",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Manga Volume 3, around Chapter 22/23 after Season 1. Recheck after Season 2.",
    "continuationStatus": "Approximate",
    "confidenceLevel": "Medium",
    "needsVerification": true,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Manga continues after Season 1, but Season 2 will change the continuation point.",
    "adaptationNote": "Because this is a 4-koma manga and the anime adapts material with rearranged pacing, Volume 3 is safer than giving only one strict chapter.",
    "dataSources": [
      {
        "name": "Bocchi the Rock manga volume reference",
        "type": "Manga Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 2/3 structure."
      },
      {
        "name": "Bocchi the Rock Season 2 announcement reference",
        "type": "Anime News",
        "checked": true,
        "note": "Used to keep a Season 2 caveat."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Bocchi the Rock manga volume reference",
        "type": "Manga Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 2/3 structure."
      },
      {
        "name": "Bocchi the Rock Season 2 announcement reference",
        "type": "Anime News",
        "checked": true,
        "note": "Used to keep a Season 2 caveat."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "lycoris-recoil",
    "title": "Lycoris Recoil",
    "alternativeTitles": [
      "LycoReco"
    ],
    "genres": [
      "Action",
      "Slice of Life",
      "Original Anime"
    ],
    "releaseYear": 2022,
    "animeStatus": "Original anime / sequel or new project may exist",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Season 1 Episode 13 completes the main original anime season.",
    "mangaContinueFrom": "Not applicable. Manga adaptations are not the main continuation route.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable as a direct continuation route.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation / Anime sequel if released",
    "recommendedContinueFrom": "No manga or light novel continuation is required after Season 1. Watch official sequel anime material if released.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The main route is anime-original.",
    "adaptationNote": "Lycoris Recoil is an original anime. Do not show manga or light novel chapters as a direct continuation.",
    "dataSources": [
      {
        "name": "Lycoris Recoil franchise overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime route."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Lycoris Recoil franchise overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime route."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "cyberpunk-edgerunners",
    "title": "Cyberpunk: Edgerunners",
    "alternativeTitles": [
      "Cyberpunk Edgerunners"
    ],
    "genres": [
      "Action",
      "Sci-Fi",
      "Drama"
    ],
    "releaseYear": 2022,
    "animeStatus": "Finished original anime",
    "totalEpisodes": 10,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "The 10-episode anime is a complete standalone story set in the Cyberpunk universe.",
    "mangaContinueFrom": "Not applicable. No main manga continuation route.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable. No main light novel continuation route.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "recommendedContinueFrom": "No source continuation needed. The anime is a complete standalone story.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The anime is complete as a standalone story.",
    "adaptationNote": "Do not add manga/light novel continuation because the anime is an original standalone project.",
    "dataSources": [
      {
        "name": "Cyberpunk: Edgerunners anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm 10-episode standalone anime format."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Cyberpunk: Edgerunners anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm 10-episode standalone anime format."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "eighty-six",
    "title": "86 Eighty-Six",
    "alternativeTitles": [
      "86",
      "86 -Eighty Six-"
    ],
    "genres": [
      "Action",
      "Sci-Fi",
      "Drama",
      "Military"
    ],
    "releaseYear": 2021,
    "animeStatus": "Anime completed for current season",
    "totalEpisodes": 23,
    "totalSeasons": 1,
    "sourceType": "Light Novel",
    "animeEndsAt": "The anime adapts the first three light novel volumes.",
    "mangaContinueFrom": "Manga route is not recommended as the main continuation route.",
    "mangaContinueVolume": "Not recommended",
    "mangaContinueChapter": "Not recommended",
    "lightNovelContinueFrom": "Light Novel Volume 4",
    "lightNovelContinueVolume": "4",
    "lightNovelContinueChapter": "Start of Volume 4",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Light Novel",
    "recommendedContinueFrom": "Light Novel Volume 4 after the anime.",
    "continuationStatus": "Verified",
    "confidenceLevel": "High",
    "needsVerification": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Continue with Light Novel Volume 4 after the anime.",
    "adaptationNote": "The anime covers the first three light novel volumes. Volume 4 begins the next major story section.",
    "dataSources": [
      {
        "name": "86 light novel Volume 4 reference",
        "type": "Light Novel Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 4 as the next source route after the anime-covered material."
      },
      {
        "name": "86 anime-to-light-novel community guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used as backup for Volume 4 continuation."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "86 light novel Volume 4 reference",
        "type": "Light Novel Volume Reference",
        "checked": true,
        "note": "Used to confirm Volume 4 as the next source route after the anime-covered material."
      },
      {
        "name": "86 anime-to-light-novel community guide",
        "type": "Anime-to-Light-Novel Guide",
        "checked": true,
        "note": "Used as backup for Volume 4 continuation."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "cowboy-bebop",
    "title": "Cowboy Bebop",
    "alternativeTitles": [
      "Cowboy Bebop"
    ],
    "genres": [
      "Action",
      "Sci-Fi",
      "Space",
      "Drama"
    ],
    "releaseYear": 1998,
    "animeStatus": "Anime completed",
    "totalEpisodes": 26,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 26 completes the main original anime story.",
    "mangaContinueFrom": "Not applicable. Manga adaptations are not the main continuation route.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "recommendedContinueFrom": "No source continuation needed. Optional: watch the movie as extra anime material.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The anime is complete.",
    "adaptationNote": "Cowboy Bebop is an original anime. Do not show manga or light novel chapters as direct continuation.",
    "dataSources": [
      {
        "name": "Cowboy Bebop anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime format and episode count."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Cowboy Bebop anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime format and episode count."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "neon-genesis-evangelion",
    "title": "Neon Genesis Evangelion",
    "alternativeTitles": [
      "Evangelion",
      "NGE"
    ],
    "genres": [
      "Mecha",
      "Psychological",
      "Drama",
      "Sci-Fi"
    ],
    "releaseYear": 1995,
    "animeStatus": "Anime completed",
    "totalEpisodes": 26,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 26 completes the TV anime route. The End of Evangelion is the key companion film.",
    "mangaContinueFrom": "Manga route is an alternate adaptation, not a direct post-anime continuation.",
    "mangaContinueVolume": "Not recommended as direct continuation",
    "mangaContinueChapter": "Not recommended as direct continuation",
    "lightNovelContinueFrom": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Anime film / alternate adaptations",
    "recommendedContinueFrom": "Watch The End of Evangelion after the TV anime. Manga is an alternate version, not a direct continuation.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The main follow-up is the anime film, not manga chapters.",
    "adaptationNote": "Evangelion is anime-original. Rebuild movies and manga should be treated as alternate versions, not normal source continuation.",
    "dataSources": [
      {
        "name": "Neon Genesis Evangelion franchise overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime route and companion film structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Neon Genesis Evangelion franchise overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime route and companion film structure."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "puella-magi-madoka-magica",
    "title": "Puella Magi Madoka Magica",
    "alternativeTitles": [
      "Madoka Magica",
      "Mahou Shoujo Madoka Magica"
    ],
    "genres": [
      "Drama",
      "Fantasy",
      "Psychological",
      "Magical Girl"
    ],
    "releaseYear": 2011,
    "animeStatus": "Anime completed / movie continuation exists",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "The 12-episode TV anime completes the main TV story.",
    "mangaContinueFrom": "Manga adaptations are not the main continuation route.",
    "mangaContinueVolume": "Not recommended as direct continuation",
    "mangaContinueChapter": "Not recommended as direct continuation",
    "lightNovelContinueFrom": "Not applicable as main route",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Anime movie continuation",
    "recommendedContinueFrom": "After the TV anime, watch the sequel movie route rather than searching for manga chapters.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The main continuation is anime/movie material.",
    "adaptationNote": "Madoka Magica is an original anime. Manga versions are adaptations or side material, not the main route.",
    "dataSources": [
      {
        "name": "Madoka Magica franchise overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime and movie continuation route."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Madoka Magica franchise overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime and movie continuation route."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "psycho-pass",
    "title": "Psycho-Pass",
    "alternativeTitles": [
      "PSYCHO-PASS"
    ],
    "genres": [
      "Sci-Fi",
      "Crime",
      "Psychological",
      "Action"
    ],
    "releaseYear": 2012,
    "animeStatus": "Anime franchise with multiple seasons and films",
    "totalEpisodes": 41,
    "totalSeasons": 3,
    "sourceType": "Original Anime",
    "animeEndsAt": "The franchise is anime-original with multiple seasons and films rather than one manga/light novel source route.",
    "mangaContinueFrom": "Not applicable as direct continuation.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable as direct continuation.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Anime release order",
    "recommendedContinueFrom": "Continue through the official anime seasons and films in release/story order. No manga/light novel continuation route is needed.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Follow the anime franchise order.",
    "adaptationNote": "Psycho-Pass is anime-original. This episode count covers the main TV seasons only; films should be treated as extra anime franchise material, and any manga/novels should be treated as adaptations or side material, not the main continuation route.",
    "dataSources": [
      {
        "name": "Psycho-Pass franchise overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime franchise structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Psycho-Pass franchise overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime franchise structure."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "samurai-champloo",
    "title": "Samurai Champloo",
    "alternativeTitles": [
      "Samurai Champloo"
    ],
    "genres": [
      "Action",
      "Adventure",
      "Historical",
      "Comedy"
    ],
    "releaseYear": 2004,
    "animeStatus": "Anime completed",
    "totalEpisodes": 26,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 26 completes the main original anime story.",
    "mangaContinueFrom": "Not applicable. Manga is not a direct continuation route.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "recommendedContinueFrom": "No source continuation needed. The anime is complete.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The anime is complete.",
    "adaptationNote": "Samurai Champloo is an original anime, so do not show manga/light novel continuation.",
    "dataSources": [
      {
        "name": "Samurai Champloo anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime format and episode count."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Samurai Champloo anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime format and episode count."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "death-parade",
    "title": "Death Parade",
    "alternativeTitles": [
      "Death Parade"
    ],
    "genres": [
      "Drama",
      "Psychological",
      "Mystery",
      "Supernatural"
    ],
    "releaseYear": 2015,
    "animeStatus": "Anime completed",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 12 completes the main original anime story.",
    "mangaContinueFrom": "Not applicable. No main manga continuation route.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable. No main light novel continuation route.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "recommendedContinueFrom": "No source continuation needed. The anime is complete.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The anime is complete.",
    "adaptationNote": "Death Parade is an original anime expanded from the Death Billiards short. No manga/light novel continuation is needed.",
    "dataSources": [
      {
        "name": "Death Parade anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime format and episode count."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Death Parade anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime format and episode count."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "gurren-lagann",
    "title": "Gurren Lagann",
    "alternativeTitles": [
      "Tengen Toppa Gurren Lagann"
    ],
    "genres": [
      "Action",
      "Mecha",
      "Adventure",
      "Sci-Fi"
    ],
    "releaseYear": 2007,
    "animeStatus": "Anime completed",
    "totalEpisodes": 27,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 27 completes the main original anime story.",
    "mangaContinueFrom": "Not applicable as direct continuation.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable as direct continuation.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "recommendedContinueFrom": "No source continuation needed. The anime is complete.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The anime is complete.",
    "adaptationNote": "Gurren Lagann is anime-original. Manga versions are adaptations, not the direct continuation route.",
    "dataSources": [
      {
        "name": "Gurren Lagann anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime format and episode count."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Gurren Lagann anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime format and episode count."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "kill-la-kill",
    "title": "Kill la Kill",
    "alternativeTitles": [
      "KILL la KILL"
    ],
    "genres": [
      "Action",
      "Comedy",
      "School",
      "Original Anime"
    ],
    "releaseYear": 2013,
    "animeStatus": "Anime completed",
    "totalEpisodes": 24,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 24 completes the main original anime story. OVA material is optional extra anime content.",
    "mangaContinueFrom": "Not applicable. Manga is an adaptation, not a direct continuation route.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "recommendedContinueFrom": "No source continuation needed. Optional: watch the OVA/extra anime material.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The anime is complete.",
    "adaptationNote": "Kill la Kill is anime-original. Do not show manga chapters as a continuation route.",
    "dataSources": [
      {
        "name": "Kill la Kill anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime route."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Kill la Kill anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime route."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "needsManualResearch": false,
    "id": "angel-beats",
    "title": "Angel Beats!",
    "alternativeTitles": [
      "Angel Beats"
    ],
    "genres": [
      "Drama",
      "Comedy",
      "Supernatural",
      "School"
    ],
    "releaseYear": 2010,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 13 completes the main original anime story.",
    "mangaContinueFrom": "Manga side material exists but is not the main post-anime continuation.",
    "mangaContinueVolume": "Not recommended as direct continuation",
    "mangaContinueChapter": "Not recommended as direct continuation",
    "lightNovelContinueFrom": "Not applicable as direct continuation",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation / optional side material",
    "recommendedContinueFrom": "No source continuation needed after the anime. Side manga/visual novel material can be treated as optional.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The anime is complete.",
    "adaptationNote": "Angel Beats! is anime-original. Side materials exist but should not be shown as a required continuation route.",
    "dataSources": [
      {
        "name": "Angel Beats anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime format and episode count."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Angel Beats anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime format and episode count."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "charlotte",
    "title": "Charlotte",
    "alternativeTitles": [
      "Charlotte"
    ],
    "genres": [
      "Drama",
      "Supernatural",
      "School",
      "Original Anime"
    ],
    "releaseYear": 2015,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 13 completes the main original anime story.",
    "mangaContinueFrom": "Manga adaptation exists but is not the main continuation route.",
    "mangaContinueVolume": "Not recommended as direct continuation",
    "mangaContinueChapter": "Not recommended as direct continuation",
    "lightNovelContinueFrom": "Not applicable as direct continuation",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "recommendedContinueFrom": "No source continuation needed. The anime is complete.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The anime is complete.",
    "adaptationNote": "Charlotte is anime-original. Manga versions are adaptations, not the main continuation route.",
    "dataSources": [
      {
        "name": "Charlotte anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime format and episode count."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Charlotte anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime format and episode count."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "great-pretender",
    "title": "Great Pretender",
    "alternativeTitles": [
      "GREAT PRETENDER"
    ],
    "genres": [
      "Crime",
      "Comedy",
      "Drama",
      "Adventure"
    ],
    "releaseYear": 2020,
    "animeStatus": "Original anime franchise / later anime material may exist",
    "totalEpisodes": 23,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "The original TV anime completes its main case-based story arc.",
    "mangaContinueFrom": "Manga route is not a required continuation.",
    "mangaContinueVolume": "Not recommended as direct continuation",
    "mangaContinueChapter": "Not recommended as direct continuation",
    "lightNovelContinueFrom": "Not applicable as direct continuation",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Anime sequel / no source continuation",
    "recommendedContinueFrom": "No manga or light novel continuation is needed. Watch official sequel anime material if included.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The main route is anime-original.",
    "adaptationNote": "Great Pretender is an original anime. Treat later anime projects as anime sequels, not manga/light novel continuation.",
    "dataSources": [
      {
        "name": "Great Pretender anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Great Pretender anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime structure."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "odd-taxi",
    "title": "Odd Taxi",
    "alternativeTitles": [
      "ODDTAXI"
    ],
    "genres": [
      "Mystery",
      "Drama",
      "Comedy",
      "Original Anime"
    ],
    "releaseYear": 2021,
    "animeStatus": "Anime completed / movie recap-followup exists",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Original Anime",
    "animeEndsAt": "Episode 13 completes the main TV anime story.",
    "mangaContinueFrom": "Manga adaptation is not the main continuation route.",
    "mangaContinueVolume": "Not recommended as direct continuation",
    "mangaContinueChapter": "Not recommended as direct continuation",
    "lightNovelContinueFrom": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Anime / movie material",
    "recommendedContinueFrom": "No manga/light novel continuation needed. Optional: watch the movie material after the TV anime.",
    "continuationStatus": "Anime Original",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The TV anime is complete.",
    "adaptationNote": "Odd Taxi is anime-original. The movie should be treated as anime follow-up/recap material, not source reading continuation.",
    "dataSources": [
      {
        "name": "Odd Taxi anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime route and episode count."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Odd Taxi anime overview",
        "type": "Anime Reference",
        "checked": true,
        "note": "Used to confirm original anime route and episode count."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "pluto",
    "title": "Pluto",
    "alternativeTitles": [
      "PLUTO"
    ],
    "genres": [
      "Mystery",
      "Sci-Fi",
      "Drama",
      "Seinen"
    ],
    "releaseYear": 2023,
    "animeStatus": "Anime completed",
    "totalEpisodes": 8,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The 8-episode anime adapts the complete Pluto manga story.",
    "mangaContinueFrom": "No main continuation needed. Manga can be read from the beginning for the source version.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "recommendedContinueFrom": "No continuation needed. The anime completes the main manga story.",
    "continuationStatus": "No Source Continuation",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The anime covers the complete main story.",
    "adaptationNote": "Pluto is a complete adaptation of a finished manga. Reading the manga is optional for source experience.",
    "dataSources": [
      {
        "name": "Pluto manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm complete manga adaptation and episode count."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Pluto manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm complete manga adaptation and episode count."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "monster",
    "title": "Monster",
    "alternativeTitles": [
      "Naoki Urasawa's Monster"
    ],
    "genres": [
      "Mystery",
      "Thriller",
      "Drama",
      "Seinen"
    ],
    "releaseYear": 2004,
    "animeStatus": "Anime completed",
    "totalEpisodes": 74,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime adapts the complete main manga story.",
    "mangaContinueFrom": "No main continuation needed. Manga can be read from the beginning for the source version.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "recommendedContinueFrom": "No continuation needed. The anime completes the main manga story.",
    "continuationStatus": "No Source Continuation",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The anime covers the complete main story.",
    "adaptationNote": "Monster is a complete anime adaptation of the manga. Reading from the beginning is optional for source experience.",
    "dataSources": [
      {
        "name": "Monster manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm completed anime adaptation."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Monster manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm completed anime adaptation."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "berserk",
    "title": "Berserk",
    "alternativeTitles": [
      "Berserk 1997",
      "Kenpuu Denki Berserk"
    ],
    "genres": [
      "Action",
      "Dark Fantasy",
      "Drama",
      "Seinen"
    ],
    "releaseYear": 1997,
    "animeStatus": "Multiple anime adaptations / source continuation is best handled through manga",
    "totalEpisodes": 25,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The 1997 anime adapts the Golden Age material but is not a clean complete adaptation.",
    "mangaContinueFrom": "Start from the beginning recommended. If skipping after the 1997 anime, continue around Volume 13, but this is not ideal.",
    "mangaContinueVolume": "Volume 1 recommended / rough skip point: Volume 13",
    "mangaContinueChapter": "Chapter 1 recommended / rough skip point varies by edition",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga from beginning",
    "recommendedContinueFrom": "Start the manga from Volume 1 for the full source route. Do not rely on a clean anime-to-chapter jump.",
    "continuationStatus": "Start From Beginning Recommended",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime adaptations skip, rearrange, or omit important source material.",
    "spoilerFreeNote": "The manga is the best route from the beginning.",
    "adaptationNote": "Berserk has multiple anime adaptations and incomplete coverage. The cleanest recommendation is manga from the beginning.",
    "dataSources": [
      {
        "name": "Berserk manga/anime adaptation overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga route and incomplete anime adaptation structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Berserk manga/anime adaptation overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga route and incomplete anime adaptation structure."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "claymore",
    "title": "Claymore",
    "alternativeTitles": [
      "Claymore"
    ],
    "genres": [
      "Action",
      "Dark Fantasy",
      "Adventure",
      "Shonen"
    ],
    "releaseYear": 2007,
    "animeStatus": "Anime completed with anime-original ending",
    "totalEpisodes": 26,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The anime adapts early-to-mid manga material and then diverges with an anime-original ending.",
    "mangaContinueFrom": "Start from the beginning recommended. Rough skip point is around Chapter 50, but beginning is safer.",
    "mangaContinueVolume": "Volume 1 recommended / rough skip point around Volume 11",
    "mangaContinueChapter": "Chapter 1 recommended / rough skip point around Chapter 50",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga from beginning",
    "recommendedContinueFrom": "Start the manga from Chapter 1 because the anime diverges near the ending.",
    "continuationStatus": "Start From Beginning Recommended",
    "confidenceLevel": "Medium",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime changes/diverges near the ending, so a clean continuation point is unreliable.",
    "spoilerFreeNote": "Manga is the best route for the full story.",
    "adaptationNote": "Claymore's anime-original ending makes a direct continuation messy. Starting the manga from the beginning is safer.",
    "dataSources": [
      {
        "name": "Claymore anime/manga adaptation overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm anime-original ending and manga route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Claymore anime/manga adaptation overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm anime-original ending and manga route."
      },
      {
        "name": "Master Verify human review",
        "type": "Editorial Verification",
        "checked": true,
        "note": "Continuation point reviewed during Master Verify pass. Codex should not perform new research for this patch."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "dorohedoro",
    "title": "Dorohedoro",
    "alternativeTitles": [
      "Dorohedoro"
    ],
    "genres": [
      "Action",
      "Dark Fantasy",
      "Comedy",
      "Seinen"
    ],
    "releaseYear": 2020,
    "animeStatus": "Season 2 announced or airing depending on coverage",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 adapts early manga material. Later anime coverage should be verified if Season 2 is included.",
    "mangaContinueFrom": "Around Manga Chapter 40 after Season 1, but needs verification.",
    "mangaContinueVolume": "Around Volume 7",
    "mangaContinueChapter": "40",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Around Manga Chapter 40 after Season 1, but verify if Season 2 is included.",
    "continuationStatus": "Approximate",
    "confidenceLevel": "Low",
    "needsVerification": true,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Manga continues beyond the anime.",
    "adaptationNote": "Dorohedoro manga is complete, but anime continuation depends on whether later seasons are counted. Keep Low confidence until episode-to-chapter mapping is confirmed.",
    "dataSources": [
      {
        "name": "Dorohedoro manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga completion and anime season structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Dorohedoro manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga completion and anime season structure."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "delicious-in-dungeon",
    "title": "Delicious in Dungeon",
    "alternativeTitles": [
      "Dungeon Meshi"
    ],
    "genres": [
      "Fantasy",
      "Adventure",
      "Comedy",
      "Gourmet"
    ],
    "releaseYear": 2024,
    "animeStatus": "Season 1 finished / Season 2 announced",
    "totalEpisodes": 24,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 ends at the Chapter 52 adaptation point.",
    "mangaContinueFrom": "Manga Chapter 53",
    "mangaContinueVolume": "Volume 8",
    "mangaContinueChapter": "53",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Manga Chapter 53 / Volume 8 after Season 1. Recheck after Season 2.",
    "continuationStatus": "Verified for Season 1 / Needs update if Season 2 is included",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Continue from Chapter 53 after Season 1.",
    "adaptationNote": "Season 1 ends at Chapter 52. The manga is complete, but Season 2 will change the anime continuation point after it airs.",
    "dataSources": [
      {
        "name": "Delicious in Dungeon anime-to-manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 53 / Volume 8 as the post-Season-1 continuation."
      },
      {
        "name": "Delicious in Dungeon manga completion reference",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm the manga is complete."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Delicious in Dungeon anime-to-manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Chapter 53 / Volume 8 as the post-Season-1 continuation."
      },
      {
        "name": "Delicious in Dungeon manga completion reference",
        "type": "Manga Reference",
        "checked": true,
        "note": "Used to confirm the manga is complete."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "zom-100-bucket-list-of-the-dead",
    "title": "Zom 100: Bucket List of the Dead",
    "alternativeTitles": [
      "Zom 100"
    ],
    "genres": [
      "Comedy",
      "Action",
      "Survival",
      "Seinen"
    ],
    "releaseYear": 2023,
    "animeStatus": "Season 1 finished",
    "totalEpisodes": 12,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 adapts early manga material through the first major travel/survival section.",
    "mangaContinueFrom": "Around Manga Chapter 23",
    "mangaContinueVolume": "Around Volume 6",
    "mangaContinueChapter": "23",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Around Manga Chapter 23 after Season 1, but needs verification.",
    "continuationStatus": "Approximate",
    "confidenceLevel": "Medium",
    "needsVerification": true,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Manga continues beyond the anime.",
    "adaptationNote": "Chapter 23 is a useful estimate, but keep needsVerification true until episode-to-chapter mapping is checked.",
    "dataSources": [
      {
        "name": "Zom 100 anime/manga overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga route and anime season structure."
      },
      {
        "name": "Zom 100 community continuation note",
        "type": "Community Reference",
        "checked": false,
        "note": "Used only as weak backup for Chapter 23 estimate; keep Medium confidence."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Zom 100 anime/manga overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm manga route and anime season structure."
      },
      {
        "name": "Zom 100 community continuation note",
        "type": "Community Reference",
        "checked": false,
        "note": "Used only as weak backup for Chapter 23 estimate; keep Medium confidence."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "wistoria-wand-and-sword",
    "title": "Wistoria: Wand and Sword",
    "alternativeTitles": [
      "Tsue to Tsurugi no Wistoria",
      "Wistoria"
    ],
    "genres": [
      "Action",
      "Fantasy",
      "School",
      "Shonen"
    ],
    "releaseYear": 2024,
    "animeStatus": "Season 2 announced",
    "totalEpisodes": 12,
    "totalSeasons": 2,
    "sourceType": "Manga",
    "animeEndsAt": "Season 1 ends around the Volume 5 / Chapter 20 transition, with some anime-original setup after the dungeon material.",
    "mangaContinueFrom": "Manga Volume 5, Chapter 20",
    "mangaContinueVolume": "5",
    "mangaContinueChapter": "20",
    "lightNovelContinueFrom": "Not applicable. The main source is manga.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "Manga",
    "recommendedContinueFrom": "Manga Volume 5, Chapter 20 after Season 1. Recheck after Season 2.",
    "continuationStatus": "Verified for Season 1 / Needs update if Season 2 is included",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Continue from Volume 5, Chapter 20 after Season 1.",
    "adaptationNote": "Season 1 ends after dungeon material and includes some anime-original setup, so Volume 5 Chapter 20 is the safest manga continuation point.",
    "dataSources": [
      {
        "name": "Wistoria anime-to-manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Volume 5 Chapter 20 as the post-Season-1 continuation."
      },
      {
        "name": "Wistoria official anime Season 2 website",
        "type": "Official Anime Reference",
        "checked": true,
        "note": "Used to keep a Season 2 caveat."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Wistoria anime-to-manga guide",
        "type": "Anime-to-Manga Guide",
        "checked": true,
        "note": "Used to confirm Volume 5 Chapter 20 as the post-Season-1 continuation."
      },
      {
        "name": "Wistoria official anime Season 2 website",
        "type": "Official Anime Reference",
        "checked": true,
        "note": "Used to keep a Season 2 caveat."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "tower-of-god",
    "title": "Tower of God",
    "alternativeTitles": [
      "Kami no Tou",
      "Tower of God"
    ],
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Manhwa"
    ],
    "releaseYear": 2020,
    "animeStatus": "Multiple seasons / latest endpoint needs verification",
    "totalEpisodes": 13,
    "totalSeasons": 2,
    "sourceType": "Manhwa / Web Novel",
    "animeEndsAt": "Season 1 adapts the first main webtoon section. Later seasons change the continuation point.",
    "mangaContinueFrom": "Not applicable. Main route is webtoon/manhwa.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "If watched Season 1 only, continue around Webtoon Season 2, Episode 0 / Chapter 80. If later anime seasons are included, verify the newer endpoint.",
    "recommendedRoute": "Manhwa / Webtoon",
    "recommendedContinueFrom": "If watched Season 1 only, continue around Webtoon Season 2 Episode 0 / Chapter 80. Recheck if Season 2 anime is included.",
    "continuationStatus": "Approximate",
    "confidenceLevel": "Medium",
    "needsVerification": true,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "Webtoon is the best continuation route.",
    "adaptationNote": "The numeric episode count is Season 1 only. Later season episode coverage should be verified before updating the continuation point, and needsVerification should remain true.",
    "dataSources": [
      {
        "name": "Tower of God webtoon/anime overview",
        "type": "Webtoon / Anime Reference",
        "checked": true,
        "note": "Used to confirm webtoon route and multi-season anime structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Tower of God webtoon/anime overview",
        "type": "Webtoon / Anime Reference",
        "checked": true,
        "note": "Used to confirm webtoon route and multi-season anime structure."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "the-god-of-high-school",
    "title": "The God of High School",
    "alternativeTitles": [
      "God of High School",
      "GOH"
    ],
    "genres": [
      "Action",
      "Martial Arts",
      "Supernatural",
      "Manhwa"
    ],
    "releaseYear": 2020,
    "animeStatus": "Anime completed",
    "totalEpisodes": 13,
    "totalSeasons": 1,
    "sourceType": "Manhwa / Webcomic",
    "animeEndsAt": "The anime compresses and rearranges early webtoon material heavily.",
    "mangaContinueFrom": "Not applicable. Main route is webtoon/manhwa.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Start from the beginning recommended.",
    "recommendedRoute": "Manhwa / Webtoon from beginning",
    "recommendedContinueFrom": "Start the webtoon from the beginning because the anime is heavily compressed.",
    "continuationStatus": "Start From Beginning Recommended",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": true,
    "whyStartFromBeginning": "The anime compresses a large amount of webtoon content and changes pacing.",
    "spoilerFreeNote": "Webtoon from the beginning is the safest route.",
    "adaptationNote": "A clean post-anime chapter jump is not recommended because of compression and rearranged pacing.",
    "dataSources": [
      {
        "name": "The God of High School anime/webtoon overview",
        "type": "Webtoon / Anime Reference",
        "checked": true,
        "note": "Used to confirm source route and compressed anime adaptation."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "The God of High School anime/webtoon overview",
        "type": "Webtoon / Anime Reference",
        "checked": true,
        "note": "Used to confirm source route and compressed anime adaptation."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "hellsing-ultimate",
    "title": "Hellsing Ultimate",
    "alternativeTitles": [
      "Hellsing OVA",
      "Hellsing Ultimate OVA"
    ],
    "genres": [
      "Action",
      "Supernatural",
      "Horror",
      "Seinen"
    ],
    "releaseYear": 2006,
    "animeStatus": "OVA completed",
    "totalEpisodes": 10,
    "totalSeasons": 1,
    "sourceType": "Manga",
    "animeEndsAt": "The 10-episode OVA adapts the main Hellsing manga story to completion.",
    "mangaContinueFrom": "No main continuation needed. Manga can be read from the beginning for source version.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable as main route.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation",
    "recommendedContinueFrom": "No continuation needed. The OVA completes the main manga story.",
    "continuationStatus": "No Source Continuation",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The OVA completes the main story.",
    "adaptationNote": "Hellsing Ultimate is the closer manga adaptation. Do not use the older TV anime as the main continuation route.",
    "dataSources": [
      {
        "name": "Hellsing Ultimate manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm OVA completion of the main manga story."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Hellsing Ultimate manga/anime overview",
        "type": "Manga / Anime Reference",
        "checked": true,
        "note": "Used to confirm OVA completion of the main manga story."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "fate-zero",
    "title": "Fate/Zero",
    "alternativeTitles": [
      "Fate Zero"
    ],
    "genres": [
      "Action",
      "Fantasy",
      "Supernatural",
      "Drama"
    ],
    "releaseYear": 2011,
    "animeStatus": "Anime completed",
    "totalEpisodes": 25,
    "totalSeasons": 2,
    "sourceType": "Light Novel",
    "animeEndsAt": "The anime completes the Fate/Zero light novel story.",
    "mangaContinueFrom": "Not applicable as main route.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "No continuation needed. Fate/Zero is complete.",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation / Fate route order",
    "recommendedContinueFrom": "Fate/Zero is complete. Continue to Fate/stay night routes if following the wider Fate story order.",
    "continuationStatus": "No Source Continuation",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The Fate/Zero story is complete.",
    "adaptationNote": "Fate/Zero is a prequel light novel adaptation. Treat later Fate entries as related routes, not a direct chapter continuation.",
    "dataSources": [
      {
        "name": "Fate/Zero light novel/anime overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm complete anime adaptation."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Fate/Zero light novel/anime overview",
        "type": "Light Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm complete anime adaptation."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "fate-stay-night-unlimited-blade-works",
    "title": "Fate/stay night: Unlimited Blade Works",
    "alternativeTitles": [
      "Fate UBW",
      "Unlimited Blade Works"
    ],
    "genres": [
      "Action",
      "Fantasy",
      "Supernatural",
      "Drama"
    ],
    "releaseYear": 2014,
    "animeStatus": "Anime completed",
    "totalEpisodes": 26,
    "totalSeasons": 2,
    "sourceType": "Visual Novel",
    "animeEndsAt": "The anime completes the Unlimited Blade Works route of the Fate/stay night visual novel.",
    "mangaContinueFrom": "Not applicable as main route.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation / visual novel route optional",
    "recommendedContinueFrom": "No direct continuation needed. Optional: play the Fate/stay night visual novel for all routes.",
    "continuationStatus": "No Source Continuation",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The UBW route is complete.",
    "adaptationNote": "This is one route of a visual novel. Heaven's Feel and other Fate entries should be treated as alternate/related routes, not simple continuation chapters.",
    "dataSources": [
      {
        "name": "Fate/stay night visual novel/anime route overview",
        "type": "Visual Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm route-based adaptation structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Fate/stay night visual novel/anime route overview",
        "type": "Visual Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm route-based adaptation structure."
      }
    ]
  },
  {
    "coverImage": "",
    "isekaiSubgenres": [],
    "seasonsBreakdown": [],
    "id": "fate-stay-night-heavens-feel",
    "title": "Fate/stay night: Heaven's Feel",
    "alternativeTitles": [
      "Fate Heaven's Feel",
      "Heaven's Feel"
    ],
    "genres": [
      "Action",
      "Fantasy",
      "Supernatural",
      "Drama"
    ],
    "releaseYear": 2017,
    "animeStatus": "Film trilogy completed",
    "totalEpisodes": 3,
    "totalSeasons": 1,
    "sourceType": "Visual Novel",
    "animeEndsAt": "The film trilogy completes the Heaven's Feel route of the Fate/stay night visual novel.",
    "mangaContinueFrom": "Not applicable as main route.",
    "mangaContinueVolume": "Not applicable",
    "mangaContinueChapter": "Not applicable",
    "lightNovelContinueFrom": "Not applicable",
    "lightNovelContinueVolume": "Not applicable",
    "lightNovelContinueChapter": "Not applicable",
    "webNovelContinueFrom": "Not applicable",
    "recommendedRoute": "No source continuation / visual novel route optional",
    "recommendedContinueFrom": "No direct continuation needed. Optional: play the Fate/stay night visual novel for all routes.",
    "continuationStatus": "No Source Continuation",
    "confidenceLevel": "High",
    "needsVerification": false,
    "needsManualResearch": false,
    "shouldStartFromBeginning": false,
    "whyStartFromBeginning": "",
    "spoilerFreeNote": "The Heaven's Feel route is complete after the film trilogy.",
    "adaptationNote": "This is one route of a visual novel. Treat it as a completed route, not a manga/light novel continuation.",
    "dataSources": [
      {
        "name": "Fate/stay night Heaven's Feel route overview",
        "type": "Visual Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm route-based film trilogy structure."
      }
    ],
    "coverStatus": "Generated Cover",
    "coverCredit": "Generated CSS cover fallback because no local cover is provided.",
    "coverNeedsUpdate": true,
    "lastUpdated": "2026-06-21",
    "sourceEvidence": [
      {
        "name": "Fate/stay night Heaven's Feel route overview",
        "type": "Visual Novel / Anime Reference",
        "checked": true,
        "note": "Used to confirm route-based film trilogy structure."
      }
    ]
  }
];
