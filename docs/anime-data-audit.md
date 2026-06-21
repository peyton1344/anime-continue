# Anime Data Audit

Generated from `src/data/animeDatabase.js`.

## Summary

* Total anime entries: 265
* Duplicate ids: 0
* Duplicate titles: 0
* Duplicate alternative titles: 0
* Entries with missing important fields: 0
* Entries with High confidence: 85
* Entries with Medium confidence: 76
* Entries with Low confidence: 22
* Entries with Unknown confidence: 82
* Entries needing verification: 179
* Entries needing manual research: 91
* Entries that look structurally safe: 147
* Entries that need human fact-checking: 225

## Critical Issues

| Severity | id | Title | Problem | Current Value | Suggested Fix |
| -- | -- | -- | -- | -- | -- |
| Medium | a-certain-magical-index | A Certain Magical Index | shouldStartFromBeginning is false but recommendation says to start from the beginning | New Testament Volume 1 after Season 3. Recommended safer route: read Old Testament Volume 14–22 first because the anime is rushed. | Align shouldStartFromBeginning with recommendation text. |
| Low | ao-haru-ride | Ao Haru Ride | animeEndsAt wording is vague for a High confidence entry | Season 1 ends around Manga Chapter 14. | Make the endpoint more precise or lower confidence. |
| Medium | ascendance-of-a-bookworm | Ascendance of a Bookworm | shouldStartFromBeginning is false but recommendation says to start from the beginning | Part 3 Volume 1 after Season 3. | Align shouldStartFromBeginning with recommendation text. |
| Low | black-clover | Black Clover | animeEndsAt wording is vague for a High confidence entry | Episode 170 ends around Manga Chapter 270. | Make the endpoint more precise or lower confidence. |
| Low | bloom-into-you | Bloom Into You | animeEndsAt wording is vague for a High confidence entry | Season 1 adapts through around Manga Chapter 24. | Make the endpoint more precise or lower confidence. |
| Low | boarding-school-juliet | Boarding School Juliet | animeEndsAt wording is vague for a High confidence entry | Season 1 ends around Manga Chapter 19. | Make the endpoint more precise or lower confidence. |
| Medium | clannad | Clannad | shouldStartFromBeginning is false but recommendation says to start from the beginning | Watch Clannad: After Story after Clannad. For source route, play the visual novel from the beginning. | Align shouldStartFromBeginning with recommendation text. |
| Medium | clannad-after-story | Clannad: After Story | shouldStartFromBeginning is false but recommendation says to start from the beginning | No direct source continuation needed. For full route details, play the Clannad visual novel from the beginning. | Align shouldStartFromBeginning with recommendation text. |
| Medium | classroom-of-the-elite | Classroom of the Elite | shouldStartFromBeginning is false but recommendation says to start from the beginning | Year 2 Volume 1. Recommended: read Year 1 Volume 11.5 first for cut details. | Align shouldStartFromBeginning with recommendation text. |
| Low | d-gray-man | D.Gray-man | animeEndsAt wording is vague for a High confidence entry | D.Gray-man Hallow adapts from around Chapter 165 up to Chapter 208. | Make the endpoint more precise or lower confidence. |
| Medium | darling-in-the-franxx | Darling in the Franxx | High confidence while needsVerification is true | High / Anime Original | Align confidence, verification, and manual research flags. |
| Medium | darling-in-the-franxx | Darling in the Franxx | High confidence while needsManualResearch is true | High / Anime Original | Align confidence, verification, and manual research flags. |
| Medium | darling-in-the-franxx | Darling in the Franxx | No source continuation route while needsManualResearch is true | No source continuation | Explain uncertainty or clear the manual research flag. |
| Medium | durarara | Durarara!! | shouldStartFromBeginning is false but recommendation says to start from the beginning | Durarara!! SH Volume 1 after finishing Durarara!!x2 Ketsu. | Align shouldStartFromBeginning with recommendation text. |
| Medium | fairy-tail | Fairy Tail | shouldStartFromBeginning is false but recommendation says to start from the beginning | Fairy Tail: 100 Years Quest Chapter 1 after finishing the main anime. | Align shouldStartFromBeginning with recommendation text. |
| Medium | fushigi-yuugi | Fushigi Yuugi | shouldStartFromBeginning is false but recommendation says to start from the beginning | Read the manga from the beginning for source version, or explore related Fushigi Yuugi manga like Genbu Kaiden. | Align shouldStartFromBeginning with recommendation text. |
| Medium | in-another-world-with-my-smartphone | In Another World With My Smartphone | shouldStartFromBeginning is false but recommendation says to start from the beginning | Start Light Novel Volume 7 from the beginning, or continue after Volume 7 Chapter 2 if you accept skipped content. | Align shouldStartFromBeginning with recommendation text. |
| Low | in-another-world-with-my-smartphone | In Another World With My Smartphone | animeEndsAt wording is vague for a High confidence entry | Season 2 adapts from around Light Novel Volume 3 Chapter 3 through Volume 7 Chapter 2, with skipped chapters. | Make the endpoint more precise or lower confidence. |
| Low | insomniacs-after-school | Insomniacs After School | animeEndsAt wording is vague for a High confidence entry | The final episode adapts around Manga Chapters 55-57 with some omitted material. | Make the endpoint more precise or lower confidence. |
| Medium | jojos-bizarre-adventure | JoJo's Bizarre Adventure | shouldStartFromBeginning is false but recommendation says to start from the beginning | JoJo Part 7: Steel Ball Run Chapter 1 after Stone Ocean. | Align shouldStartFromBeginning with recommendation text. |
| Low | made-in-abyss | Made in Abyss | animeEndsAt wording is vague for a High confidence entry | Season 2 ends around Manga Chapter 60. | Make the endpoint more precise or lower confidence. |
| Low | magi-the-kingdom-of-magic | Magi: The Kingdom of Magic | animeEndsAt wording is vague for a High confidence entry | The Kingdom of Magic ends around Manga Chapter 198. | Make the endpoint more precise or lower confidence. |
| Medium | magic-knight-rayearth | Magic Knight Rayearth | shouldStartFromBeginning is false but recommendation says to start from the beginning | No direct continuation needed. Read the manga from the beginning for the source version. | Align shouldStartFromBeginning with recommendation text. |
| Low | maid-sama | Maid Sama! | animeEndsAt wording is vague for a High confidence entry | The anime ends around Manga Chapter 32. | Make the endpoint more precise or lower confidence. |
| Low | my-dress-up-darling | My Dress-Up Darling | animeEndsAt wording is vague for a High confidence entry | Season 2 Episode 12, ending around Manga Chapter 86. | Make the endpoint more precise or lower confidence. |
| Low | my-little-monster | My Little Monster | animeEndsAt wording is vague for a High confidence entry | Season 1 ends around Manga Chapter 16. | Make the endpoint more precise or lower confidence. |
| Low | my-love-story-with-yamada-kun-at-lv999 | My Love Story with Yamada-kun at Lv999 | animeEndsAt wording is vague for a High confidence entry | Season 1 ends around Manga Chapter 41. | Make the endpoint more precise or lower confidence. |
| Low | noragami | Noragami | animeEndsAt wording is vague for a High confidence entry | Season 2 / Aragoto ends around Manga Chapter 38. | Make the endpoint more precise or lower confidence. |
| Medium | say-i-love-you | Say "I Love You". | shouldStartFromBeginning is false but recommendation says to start from the beginning | Manga Chapter 29, or start from Chapter 1 for full context. | Align shouldStartFromBeginning with recommendation text. |
| Low | seraph-of-the-end | Seraph of the End | animeEndsAt wording is vague for a High confidence entry | Season 2 ends around Manga Chapter 41. | Make the endpoint more precise or lower confidence. |
| Medium | the-apothecary-diaries | The Apothecary Diaries | Needs Manual Research status while needsManualResearch is false | Medium / Needs Manual Research | Align confidence, verification, and manual research flags. |
| Low | the-pet-girl-of-sakurasou | The Pet Girl of Sakurasou | animeEndsAt wording is vague for a High confidence entry | Season 1 adapts through around Light Novel Volume 6, with some details from nearby material. | Make the endpoint more precise or lower confidence. |
| Medium | the-quintessential-quintuplets | The Quintessential Quintuplets | shouldStartFromBeginning is false but recommendation says to start from the beginning | The main story is complete after the movie. Read from the beginning if you want skipped content. | Align shouldStartFromBeginning with recommendation text. |
| Low | vinland-saga | Vinland Saga | animeEndsAt wording is vague for a High confidence entry | Season 2 ends around Manga Chapter 100. | Make the endpoint more precise or lower confidence. |
| Low | world-trigger | World Trigger | animeEndsAt wording is vague for a High confidence entry | Season 3 ends around Manga Chapter 196. | Make the endpoint more precise or lower confidence. |
| Low | yona-of-the-dawn | Yona of the Dawn | animeEndsAt wording is vague for a High confidence entry | Season 1 ends around Manga Chapter 47. | Make the endpoint more precise or lower confidence. |

## Suspicious Confidence / Verification Issues

| id | Title | Confidence | Needs Verification | Needs Manual Research | Problem |
| -- | -- | -- | -- | -- | -- |
| darling-in-the-franxx | Darling in the Franxx | High | Yes | Yes | High confidence while needsVerification is true |
| darling-in-the-franxx | Darling in the Franxx | High | Yes | Yes | High confidence while needsManualResearch is true |
| the-apothecary-diaries | The Apothecary Diaries | Medium | Yes | No | Needs Manual Research status while needsManualResearch is false |

## Missing or Weak Data Sources

| id | Title | Confidence | Problem with Sources | Suggested Action |
| -- | -- | -- | -- | -- |
| a-journey-through-another-world | A Journey Through Another World: Raising Kids While Adventuring | Unknown | Vague source name(s): A Journey Through Another World source overview | Replace vague source labels with clearer source names or stronger notes. |
| a-wild-last-boss-appeared | A Wild Last Boss Appeared! | Unknown | Vague source name(s): A Wild Last Boss Appeared source overview | Replace vague source labels with clearer source names or stronger notes. |
| a-wild-last-boss-appeared | A Wild Last Boss Appeared! | Unknown | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| akame-ga-kill | Akame ga Kill! | Low | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| another | Another | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| another | Another | High | High confidence entry relies on a single weak or vague source | Add corroborating source evidence or downgrade confidence. |
| arata-the-legend | Arata: The Legend | Low | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| as-a-reincarnated-aristocrat-appraisal-skill | As a Reincarnated Aristocrat, I'll Use My Appraisal Skill | Low | Vague source name(s): Appraisal Skill source overview | Replace vague source labels with clearer source names or stronger notes. |
| bakuman | Bakuman | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| blue-exorcist | Blue Exorcist | Medium | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| bungo-stray-dogs-wan | Bungo Stray Dogs Wan! | Medium | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| chillin-in-another-world-with-level-2-super-cheat-powers | Chillin' in Another World with Level 2 Super Cheat Powers | Low | Vague source name(s): Chillin' in Another World source overview | Replace vague source labels with clearer source names or stronger notes. |
| clannad | Clannad | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| clannad | Clannad | High | High confidence entry relies on a single weak or vague source | Add corroborating source evidence or downgrade confidence. |
| clannad-after-story | Clannad: After Story | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| clannad-after-story | Clannad: After Story | High | High confidence entry relies on a single weak or vague source | Add corroborating source evidence or downgrade confidence. |
| conception | Conception | Medium | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| darling-in-the-franxx | Darling in the Franxx | High | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| dead-mount-death-play | Dead Mount Death Play | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| demon-lord-retry | Demon Lord, Retry! | Unknown | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| doctor-elise | Doctor Elise | Low | Vague source name(s): Doctor Elise source overview | Replace vague source labels with clearer source names or stronger notes. |
| doctor-elise | Doctor Elise | Low | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| durarara | Durarara!! | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| erased | Erased | Medium | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| failure-frame | Failure Frame | Low | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| farming-life-in-another-world | Farming Life in Another World | Unknown | Vague source name(s): Farming Life in Another World source overview | Replace vague source labels with clearer source names or stronger notes. |
| farming-life-in-another-world | Farming Life in Another World | Unknown | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| fluffy-paradise | Fluffy Paradise | Unknown | Vague source name(s): Fluffy Paradise source overview | Replace vague source labels with clearer source names or stronger notes. |
| fluffy-paradise | Fluffy Paradise | Unknown | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| food-wars | Food Wars! | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| from-bureaucrat-to-villainess | From Bureaucrat to Villainess: Dad's Been Reincarnated! | Unknown | Vague source name(s): From Bureaucrat to Villainess source overview | Replace vague source labels with clearer source names or stronger notes. |
| from-bureaucrat-to-villainess | From Bureaucrat to Villainess: Dad's Been Reincarnated! | Unknown | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| full-dive-this-ultimate-next-gen-full-dive-rpg | Full Dive: This Ultimate Next-Gen Full Dive RPG Is Even Shittier than Real Life! | Low | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| fushigi-yuugi | Fushigi Yuugi | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| fushigi-yuugi | Fushigi Yuugi | High | High confidence entry relies on a single weak or vague source | Add corroborating source evidence or downgrade confidence. |
| gintama | Gintama | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| handyman-saitou-in-another-world | Handyman Saitou in Another World | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| harem-in-the-labyrinth-of-another-world | Harem in the Labyrinth of Another World | Low | Vague source name(s): Harem in the Labyrinth source overview | Replace vague source labels with clearer source names or stronger notes. |
| harem-in-the-labyrinth-of-another-world | Harem in the Labyrinth of Another World | Low | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| high-school-prodigies-have-it-easy-even-in-another-world | High School Prodigies Have It Easy Even in Another World | Low | Vague source name(s): High School Prodigies source overview | Replace vague source labels with clearer source names or stronger notes. |
| high-school-prodigies-have-it-easy-even-in-another-world | High School Prodigies Have It Easy Even in Another World | Low | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| horimiya | Horimiya | Medium | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| how-not-to-summon-a-demon-lord | How Not to Summon a Demon Lord | Low | Vague source name(s): How Not to Summon a Demon Lord source overview | Replace vague source labels with clearer source names or stronger notes. |
| hyouka | Hyouka | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| ill-become-a-villainess-who-goes-down-in-history | I'll Become a Villainess Who Goes Down in History | Low | Vague source name(s): Villainess Who Goes Down in History source overview | Replace vague source labels with clearer source names or stronger notes. |
| ill-become-a-villainess-who-goes-down-in-history | I'll Become a Villainess Who Goes Down in History | Low | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| beheneko | I'm a Behemoth, an S-Ranked Monster, but Mistaken for a Cat | Unknown | Vague source name(s): Beheneko source overview | Replace vague source labels with clearer source names or stronger notes. |
| beheneko | I'm a Behemoth, an S-Ranked Monster, but Mistaken for a Cat | Unknown | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| im-standing-on-a-million-lives | I'm Standing on a Million Lives | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| ive-been-killing-slimes-for-300-years | I've Been Killing Slimes for 300 Years | Unknown | Vague source name(s): I've Been Killing Slimes source overview | Replace vague source labels with clearer source names or stronger notes. |
| ive-been-killing-slimes-for-300-years | I've Been Killing Slimes for 300 Years | Unknown | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| insomniacs-after-school | Insomniacs After School | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| inuyasha | Inuyasha | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| inuyasha | Inuyasha | High | High confidence entry relies on a single weak or vague source | Add corroborating source evidence or downgrade confidence. |
| isekai-cheat-magician | Isekai Cheat Magician | Low | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| isekai-izakaya | Isekai Izakaya: Japanese Food From Another World | Medium | Vague source name(s): Isekai Izakaya source overview | Replace vague source labels with clearer source names or stronger notes. |
| isekai-izakaya | Isekai Izakaya: Japanese Food From Another World | Medium | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| ixion-saga-dt | Ixion Saga DT | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| ixion-saga-dt | Ixion Saga DT | High | High confidence entry relies on a single weak or vague source | Add corroborating source evidence or downgrade confidence. |
| kakuriyo-bed-and-breakfast-for-spirits | Kakuriyo: Bed & Breakfast for Spirits | Medium | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| kemono-michi-rise-up | Kemono Michi: Rise Up | Low | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| kuma-kuma-kuma-bear | Kuma Kuma Kuma Bear | Unknown | Vague source name(s): Kuma Kuma Kuma Bear source overview | Replace vague source labels with clearer source names or stronger notes. |
| kurokos-basketball | Kuroko's Basketball | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| kyo-kara-maoh | Kyo Kara Maoh! | Medium | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| life-with-an-ordinary-guy-who-reincarnated-into-a-total-fantasy-knockout | Life with an Ordinary Guy who Reincarnated into a Total Fantasy Knockout | Low | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| loner-life-in-another-world | Loner Life in Another World | Unknown | Vague source name(s): Loner Life source overview | Replace vague source labels with clearer source names or stronger notes. |
| loner-life-in-another-world | Loner Life in Another World | Unknown | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| magic-knight-rayearth | Magic Knight Rayearth | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| magic-knight-rayearth | Magic Knight Rayearth | High | High confidence entry relies on a single weak or vague source | Add corroborating source evidence or downgrade confidence. |
| marchen-awakens-romance | MAR: Marchen Awakens Romance | High | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| marchen-awakens-romance | MAR: Marchen Awakens Romance | High | High confidence entry relies on a single weak or vague source | Add corroborating source evidence or downgrade confidence. |
| miss-kobayashis-dragon-maid | Miss Kobayashi's Dragon Maid | Medium | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| monthly-girls-nozaki-kun | Monthly Girls' Nozaki-kun | Medium | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| more-than-a-married-couple-but-not-lovers | More Than a Married Couple, But Not Lovers | Medium | dataSources and sourceEvidence names differ | Synchronize sourceEvidence with dataSources or remove stale evidence. |
| my-instant-death-ability-is-so-overpowered | My Instant Death Ability is So Overpowered | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| oregairu | My Teen Romantic Comedy SNAFU | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| my-unique-skill-makes-me-op-even-at-level-1 | My Unique Skill Makes Me OP Even at Level 1 | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| nisekoi | Nisekoi | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| one-piece | One Piece | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| outbreak-company | Outbreak Company | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| problem-children-are-coming-from-another-world | Problem Children Are Coming from Another World, Aren't They? | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| quality-assurance-in-another-world | Quality Assurance in Another World | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| rascal-does-not-dream-of-bunny-girl-senpai | Rascal Does Not Dream of Bunny Girl Senpai | Unknown | 2 data source(s) have checked: false | Verify or keep the entry in review. |
| remonster | Re:Monster | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| reborn-as-a-vending-machine | Reborn as a Vending Machine, I Now Wander the Dungeon | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| reincarnated-as-a-sword | Reincarnated as a Sword | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| restaurant-to-another-world | Restaurant to Another World | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| saekano | Saekano: How to Raise a Boring Girlfriend | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| saga-of-tanya-the-evil | Saga of Tanya the Evil | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| sasaki-and-peeps | Sasaki and Peeps | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| saving-80000-gold-in-another-world | Saving 80,000 Gold in Another World for My Retirement | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| seirei-gensouki-spirit-chronicles | Seirei Gensouki: Spirit Chronicles | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| she-professed-herself-pupil-of-the-wise-man | She Professed Herself Pupil of the Wise Man | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| shikimoris-not-just-a-cutie | Shikimori's Not Just a Cutie | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| show-by-rock | Show by Rock!! | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| skeleton-knight-in-another-world | Skeleton Knight in Another World | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| skip-and-loafer | Skip and Loafer | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| so-im-a-spider-so-what | So I'm a Spider, So What? | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| spice-and-wolf | Spice and Wolf | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| steins-gate | Steins;Gate | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| summoned-to-another-world-for-a-second-time | Summoned to Another World for a Second Time | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| sweet-reincarnation | Sweet Reincarnation | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| sword-art-online | Sword Art Online | Low | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| teasing-master-takagi-san | Teasing Master Takagi-san | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-8th-son-are-you-kidding-me | The 8th Son? Are You Kidding Me? | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-aristocrats-otherworldly-adventure | The Aristocrat's Otherworldly Adventure | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-asterisk-war | The Asterisk War | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-banished-former-hero-lives-as-he-pleases | The Banished Former Hero Lives as He Pleases | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-beginning-after-the-end | The Beginning After the End | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-daily-life-of-the-immortal-king | The Daily Life of the Immortal King | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-devil-is-a-part-timer | The Devil Is a Part-Timer! | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-dungeon-of-black-company | The Dungeon of Black Company | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-executioner-and-her-way-of-life | The Executioner and Her Way of Life | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-familiar-of-zero | The Familiar of Zero | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-faraway-paladin | The Faraway Paladin | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-fruit-of-evolution | The Fruit of Evolution | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-great-cleric | The Great Cleric | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-greatest-demon-lord-is-reborn-as-a-typical-nobody | The Greatest Demon Lord Is Reborn as a Typical Nobody | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-irregular-at-magic-high-school | The Irregular at Magic High School | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-magical-revolution | The Magical Revolution of the Reincarnated Princess and the Genius Young Lady | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-master-of-ragnarok | The Master of Ragnarok & Blesser of Einherjar | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-misfit-of-demon-king-academy | The Misfit of Demon King Academy | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-most-heretical-last-boss-queen | The Most Heretical Last Boss Queen | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-new-gate | The New Gate | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-promised-neverland | The Promised Neverland | Low | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-red-ranger-becomes-an-adventurer-in-another-world | The Red Ranger Becomes an Adventurer in Another World | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-reincarnation-of-the-strongest-exorcist | The Reincarnation of the Strongest Exorcist in Another World | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-saints-magic-power-is-omnipotent | The Saint's Magic Power is Omnipotent | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-seven-deadly-sins | The Seven Deadly Sins | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-titans-bride | The Titan's Bride | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-twelve-kingdoms | The Twelve Kingdoms | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-weakest-tamer | The Weakest Tamer Began a Journey to Pick Up Trash | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-worlds-finest-assassin | The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| the-wrong-way-to-use-healing-magic | The Wrong Way to Use Healing Magic | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| those-who-hunt-elves | Those Who Hunt Elves | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| tokyo-ghoul | Tokyo Ghoul | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| tomo-chan-is-a-girl | Tomo-chan Is a Girl! | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| toradora | Toradora! | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| trapped-in-a-dating-sim | Trapped in a Dating Sim | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| tsubasa-reservoir-chronicle | Tsubasa Reservoir Chronicle | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| uncle-from-another-world | Uncle from Another World | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| uzaki-chan-wants-to-hang-out | Uzaki-chan Wants to Hang Out! | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| villainess-level-99 | Villainess Level 99 | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| violet-evergarden | Violet Evergarden | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| welcome-to-demon-school-iruma-kun | Welcome to Demon School! Iruma-kun | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| why-raeliana-ended-up-at-the-dukes-mansion | Why Raeliana Ended Up at the Duke's Mansion | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| wise-mans-grandchild | Wise Man's Grandchild | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| your-lie-in-april | Your Lie in April | Medium | 3 data source(s) have checked: false | Verify or keep the entry in review. |
| yu-yu-hakusho | Yu Yu Hakusho | Unknown | 3 data source(s) have checked: false | Verify or keep the entry in review. |

## Source Type and Route Mismatch

No issues found.

## Episode / Season Count Problems

| id | Title | Episodes | Seasons | Problem | Suggested Fix |
| -- | -- | -- | -- | -- | -- |
| ascendance-of-a-bookworm | Ascendance of a Bookworm | 36 | 4 | Anime status mentions announced/airing/new season but continuation is fully verified | Add a newer-season caveat or keep needsVerification true. |
| black-clover | Black Clover | 170 | 5 | Anime status mentions announced/airing/new season but continuation is fully verified | Add a newer-season caveat or keep needsVerification true. |
| classroom-of-the-elite | Classroom of the Elite | 38 | 4 | Anime status mentions announced/airing/new season but continuation is fully verified | Add a newer-season caveat or keep needsVerification true. |
| konosuba | Konosuba: God's Blessing on This Wonderful World! | 31 | 4 | Anime status mentions announced/airing/new season but continuation is fully verified | Add a newer-season caveat or keep needsVerification true. |
| made-in-abyss | Made in Abyss | 25 | 2 | Anime status mentions announced/airing/new season but continuation is fully verified | Add a newer-season caveat or keep needsVerification true. |
| mushoku-tensei-jobless-reincarnation | Mushoku Tensei: Jobless Reincarnation | 48 | 3 | Anime status mentions announced/airing/new season but continuation is fully verified | Add a newer-season caveat or keep needsVerification true. |
| rezero-starting-life-in-another-world | Re:Zero - Starting Life in Another World | 66 | 4 | Anime status mentions announced/airing/new season but continuation is fully verified | Add a newer-season caveat or keep needsVerification true. |
| the-rising-of-the-shield-hero | The Rising of the Shield Hero | 62 | 5 | Anime status mentions announced/airing/new season but continuation is fully verified | Add a newer-season caveat or keep needsVerification true. |

## Entries That Should Stay Needs Verification

| id | Title | Current Confidence | Reason |
| -- | -- | -- | -- |
| 7th-time-loop | 7th Time Loop | Medium | Needs verification, Approximate continuation |
| a-certain-scientific-railgun | A Certain Scientific Railgun | Medium | Needs verification, Approximate continuation |
| a-journey-through-another-world | A Journey Through Another World: Raising Kids While Adventuring | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| a-playthrough-of-a-certain-dudes-vrmmo-life | A Playthrough of a Certain Dude's VRMMO Life | Medium | Needs verification, Approximate continuation |
| a-sign-of-affection | A Sign of Affection | Medium | Needs verification, Approximate continuation |
| a-wild-last-boss-appeared | A Wild Last Boss Appeared! | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| aesthetica-of-a-rogue-hero | Aesthetica of a Rogue Hero | Medium | Needs verification, Approximate continuation |
| akame-ga-kill | Akame ga Kill! | Low | Needs manual research, Needs verification, Low confidence |
| arata-the-legend | Arata: The Legend | Low | Needs verification, Low confidence |
| arifureta | Arifureta: From Commonplace to World's Strongest | Medium | Needs verification, Approximate continuation |
| as-a-reincarnated-aristocrat-appraisal-skill | As a Reincarnated Aristocrat, I'll Use My Appraisal Skill | Low | Needs verification, Low confidence, Approximate continuation |
| assassination-classroom | Assassination Classroom | Medium | Needs manual research, Needs verification |
| bleach | Bleach | Medium | Needs verification, Approximate continuation |
| blue-exorcist | Blue Exorcist | Medium | Needs verification, Approximate continuation |
| bofuri | BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense. | Low | Needs verification, Low confidence, Approximate continuation |
| bungo-stray-dogs | Bungo Stray Dogs | Medium | Needs verification |
| bungo-stray-dogs-wan | Bungo Stray Dogs Wan! | Medium | Needs verification |
| by-the-grace-of-the-gods | By the Grace of the Gods | Low | Needs verification, Low confidence, Approximate continuation |
| call-of-the-night | Call of the Night | Medium | Needs verification, Approximate continuation |
| campfire-cooking-in-another-world | Campfire Cooking in Another World with My Absurd Skill | Medium | Needs verification, Approximate continuation |
| cautious-hero | Cautious Hero | Medium | Needs verification, Approximate continuation |
| chillin-in-another-world-with-level-2-super-cheat-powers | Chillin' in Another World with Level 2 Super Cheat Powers | Low | Needs verification, Low confidence, Approximate continuation |
| chivalry-of-a-failed-knight | Chivalry of a Failed Knight | Medium | Needs verification, Approximate continuation |
| combatants-will-be-dispatched | Combatants Will Be Dispatched! | Low | Needs verification, Low confidence, Approximate continuation |
| conception | Conception | Medium | Needs verification |
| darling-in-the-franxx | Darling in the Franxx | High | Needs manual research, Needs verification |
| demon-lord-retry | Demon Lord, Retry! | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| demon-slayer | Demon Slayer | Medium | Needs verification, Verified with newer-season caveat |
| didnt-i-say-to-make-my-abilities-average | Didn't I Say to Make My Abilities Average in the Next Life?! | Medium | Needs verification |
| do-you-love-your-mom | Do You Love Your Mom and Her Two-Hit Multi-Target Attacks? | Low | Needs verification, Low confidence, Approximate continuation |
| doctor-elise | Doctor Elise | Low | Needs verification, Low confidence, Approximate continuation |
| dont-toy-with-me-miss-nagatoro | Don't Toy with Me, Miss Nagatoro | Medium | Needs verification, Approximate continuation |
| dr-stone | Dr. Stone | Medium | Needs verification, Approximate continuation |
| drifters | Drifters | Medium | Needs verification, Approximate continuation |
| erased | Erased | Medium | Needs verification |
| failure-frame | Failure Frame | Low | Needs verification, Low confidence, Approximate continuation |
| farming-life-in-another-world | Farming Life in Another World | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| fire-force | Fire Force | Medium | Needs verification, Approximate continuation |
| fluffy-paradise | Fluffy Paradise | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| frieren-beyond-journeys-end | Frieren: Beyond Journey's End | Medium | Needs verification, Verified with newer-season caveat |
| from-bureaucrat-to-villainess | From Bureaucrat to Villainess: Dad's Been Reincarnated! | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| full-dive-this-ultimate-next-gen-full-dive-rpg | Full Dive: This Ultimate Next-Gen Full Dive RPG Is Even Shittier than Real Life! | Low | Needs verification, Low confidence, Approximate continuation |
| gate | Gate | Medium | Needs verification, Approximate continuation |
| goblin-slayer | Goblin Slayer | Medium | Needs verification, Approximate continuation |
| haganai | Haganai | Medium | Needs verification, Approximate continuation |
| haikyuu | Haikyuu!! | Medium | Needs verification, Verified with newer-season caveat |
| harem-in-the-labyrinth-of-another-world | Harem in the Labyrinth of Another World | Low | Needs verification, Low confidence, Approximate continuation |
| hells-paradise | Hell's Paradise | Medium | Needs verification, Approximate continuation |
| high-school-prodigies-have-it-easy-even-in-another-world | High School Prodigies Have It Easy Even in Another World | Low | Needs verification, Low confidence, Approximate continuation |
| horimiya | Horimiya | Medium | Needs manual research, Needs verification |
| how-a-realist-hero-rebuilt-the-kingdom | How a Realist Hero Rebuilt the Kingdom | Medium | Needs verification, Approximate continuation |
| how-not-to-summon-a-demon-lord | How Not to Summon a Demon Lord | Low | Needs verification, Low confidence, Approximate continuation |
| i-got-a-cheat-skill-in-another-world | I Got a Cheat Skill in Another World and Became Unrivaled in the Real World, Too | Medium | Needs verification, Approximate continuation |
| i-shall-survive-using-potions | I Shall Survive Using Potions! | Medium | Needs verification, Approximate continuation |
| ill-become-a-villainess-who-goes-down-in-history | I'll Become a Villainess Who Goes Down in History | Low | Needs verification, Low confidence, Approximate continuation |
| beheneko | I'm a Behemoth, an S-Ranked Monster, but Mistaken for a Cat | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| im-the-villainess-so-im-taming-the-final-boss | I'm the Villainess, So I'm Taming the Final Boss | Medium | Needs verification |
| ive-been-killing-slimes-for-300-years | I've Been Killing Slimes for 300 Years | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| infinite-dendrogram | Infinite Dendrogram | Low | Needs verification, Low confidence, Approximate continuation |
| danmachi | Is It Wrong to Try to Pick Up Girls in a Dungeon? | Medium | Needs verification, Approximate continuation |
| isekai-cheat-magician | Isekai Cheat Magician | Low | Needs verification, Low confidence, Approximate continuation |
| isekai-izakaya | Isekai Izakaya: Japanese Food From Another World | Medium | Needs verification |
| jujutsu-kaisen | Jujutsu Kaisen | Medium | Needs verification, Verified with newer-season caveat |
| kaguya-sama-love-is-war | Kaguya-sama: Love is War | Medium | Needs verification |
| kaiju-no-8 | Kaiju No. 8 | Medium | Needs verification, Approximate continuation |
| kakuriyo-bed-and-breakfast-for-spirits | Kakuriyo: Bed & Breakfast for Spirits | Medium | Needs verification, Verified with newer-season caveat |
| kemono-michi-rise-up | Kemono Michi: Rise Up | Low | Needs verification, Low confidence |
| kimi-ni-todoke | Kimi ni Todoke: From Me to You | Medium | Needs verification, Approximate continuation |
| knights-and-magic | Knight's & Magic | Medium | Needs verification, Approximate continuation |
| komi-cant-communicate | Komi Can't Communicate | Medium | Needs verification, Approximate continuation |
| kubo-wont-let-me-be-invisible | Kubo Won't Let Me Be Invisible | Medium | Needs verification, Approximate continuation |
| kuma-kuma-kuma-bear | Kuma Kuma Kuma Bear | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| kyo-kara-maoh | Kyo Kara Maoh! | Medium | Needs verification |
| life-with-an-ordinary-guy-who-reincarnated-into-a-total-fantasy-knockout | Life with an Ordinary Guy who Reincarnated into a Total Fantasy Knockout | Low | Needs verification, Low confidence, Approximate continuation |
| log-horizon | Log Horizon | Medium | Needs verification |
| loner-life-in-another-world | Loner Life in Another World | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| lovely-complex | Lovely Complex | Medium | Needs verification |
| magi | Magi: The Labyrinth of Magic | Medium | Needs verification, Approximate continuation |
| mashle | Mashle: Magic and Muscles | Medium | Needs verification, Approximate continuation |
| miss-kobayashis-dragon-maid | Miss Kobayashi's Dragon Maid | Medium | Needs verification |
| monthly-girls-nozaki-kun | Monthly Girls' Nozaki-kun | Medium | Needs verification |
| more-than-a-married-couple-but-not-lovers | More Than a Married Couple, But Not Lovers | Medium | Needs verification, Approximate continuation |
| my-happy-marriage | My Happy Marriage | Medium | Needs verification, Approximate continuation |
| my-hero-academia | My Hero Academia | Medium | Needs verification, Approximate continuation |
| my-instant-death-ability-is-so-overpowered | My Instant Death Ability is So Overpowered | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| my-next-life-as-a-villainess | My Next Life as a Villainess: All Routes Lead to Doom! | Medium | Needs verification, Approximate continuation |
| oregairu | My Teen Romantic Comedy SNAFU | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| my-unique-skill-makes-me-op-even-at-level-1 | My Unique Skill Makes Me OP Even at Level 1 | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| nisekoi | Nisekoi | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| one-piece | One Piece | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| one-punch-man | One Punch Man | Medium | Needs verification, Approximate continuation |
| oshi-no-ko | Oshi no Ko | Medium | Needs verification, Verified with newer-season caveat |
| ouran-high-school-host-club | Ouran High School Host Club | Medium | Needs verification |
| outbreak-company | Outbreak Company | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| parasyte-the-maxim | Parasyte -the maxim- | Medium | Needs manual research, Needs verification |
| problem-children-are-coming-from-another-world | Problem Children Are Coming from Another World, Aren't They? | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| quality-assurance-in-another-world | Quality Assurance in Another World | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| rascal-does-not-dream-of-bunny-girl-senpai | Rascal Does Not Dream of Bunny Girl Senpai | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| remonster | Re:Monster | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| reborn-as-a-vending-machine | Reborn as a Vending Machine, I Now Wander the Dungeon | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| reincarnated-as-a-sword | Reincarnated as a Sword | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| rent-a-girlfriend | Rent-a-Girlfriend | Medium | Needs verification, Approximate continuation |
| restaurant-to-another-world | Restaurant to Another World | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| saekano | Saekano: How to Raise a Boring Girlfriend | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| saga-of-tanya-the-evil | Saga of Tanya the Evil | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| sasaki-and-peeps | Sasaki and Peeps | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| saving-80000-gold-in-another-world | Saving 80,000 Gold in Another World for My Retirement | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| say-i-love-you | Say "I Love You". | Medium | Needs verification, Approximate continuation |
| seirei-gensouki-spirit-chronicles | Seirei Gensouki: Spirit Chronicles | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| she-professed-herself-pupil-of-the-wise-man | She Professed Herself Pupil of the Wise Man | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| shikimoris-not-just-a-cutie | Shikimori's Not Just a Cutie | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| show-by-rock | Show by Rock!! | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| skeleton-knight-in-another-world | Skeleton Knight in Another World | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| skip-and-loafer | Skip and Loafer | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| snow-white-with-the-red-hair | Snow White with the Red Hair | Medium | Needs verification, Approximate continuation |
| so-im-a-spider-so-what | So I'm a Spider, So What? | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| solo-leveling | Solo Leveling | Medium | Needs verification, Approximate continuation |
| soul-eater | Soul Eater | Medium | Needs verification |
| spice-and-wolf | Spice and Wolf | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| spy-x-family | Spy x Family | Medium | Needs verification, Verified with newer-season caveat |
| steins-gate | Steins;Gate | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| summoned-to-another-world-for-a-second-time | Summoned to Another World for a Second Time | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| sweet-reincarnation | Sweet Reincarnation | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| sword-art-online | Sword Art Online | Low | Needs manual research, Needs verification, Low confidence, Approximate continuation |
| teasing-master-takagi-san | Teasing Master Takagi-san | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| that-time-i-got-reincarnated-as-a-slime | That Time I Got Reincarnated as a Slime | Medium | Needs verification, Approximate continuation |
| the-8th-son-are-you-kidding-me | The 8th Son? Are You Kidding Me? | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-ancient-magus-bride | The Ancient Magus' Bride | Medium | Needs verification, Approximate continuation |
| the-angel-next-door-spoils-me-rotten | The Angel Next Door Spoils Me Rotten | Low | Needs manual research, Needs verification, Low confidence, Approximate continuation |
| the-apothecary-diaries | The Apothecary Diaries | Medium | Needs verification |
| the-aristocrats-otherworldly-adventure | The Aristocrat's Otherworldly Adventure | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-asterisk-war | The Asterisk War | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-banished-former-hero-lives-as-he-pleases | The Banished Former Hero Lives as He Pleases | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-beginning-after-the-end | The Beginning After the End | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-daily-life-of-the-immortal-king | The Daily Life of the Immortal King | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-dangers-in-my-heart | The Dangers in My Heart | Medium | Needs verification, Approximate continuation |
| the-devil-is-a-part-timer | The Devil Is a Part-Timer! | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-dungeon-of-black-company | The Dungeon of Black Company | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-eminence-in-shadow | The Eminence in Shadow | Medium | Needs verification, Approximate continuation |
| the-executioner-and-her-way-of-life | The Executioner and Her Way of Life | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-familiar-of-zero | The Familiar of Zero | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-faraway-paladin | The Faraway Paladin | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-fruit-of-evolution | The Fruit of Evolution | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-great-cleric | The Great Cleric | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-greatest-demon-lord-is-reborn-as-a-typical-nobody | The Greatest Demon Lord Is Reborn as a Typical Nobody | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-irregular-at-magic-high-school | The Irregular at Magic High School | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-magical-revolution | The Magical Revolution of the Reincarnated Princess and the Genius Young Lady | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-master-of-ragnarok | The Master of Ragnarok & Blesser of Einherjar | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-misfit-of-demon-king-academy | The Misfit of Demon King Academy | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-most-heretical-last-boss-queen | The Most Heretical Last Boss Queen | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-new-gate | The New Gate | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-promised-neverland | The Promised Neverland | Low | Needs manual research, Needs verification, Low confidence |
| the-red-ranger-becomes-an-adventurer-in-another-world | The Red Ranger Becomes an Adventurer in Another World | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-reincarnation-of-the-strongest-exorcist | The Reincarnation of the Strongest Exorcist in Another World | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-saints-magic-power-is-omnipotent | The Saint's Magic Power is Omnipotent | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-seven-deadly-sins | The Seven Deadly Sins | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-titans-bride | The Titan's Bride | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-twelve-kingdoms | The Twelve Kingdoms | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-weakest-tamer | The Weakest Tamer Began a Journey to Pick Up Trash | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-worlds-finest-assassin | The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| the-wrong-way-to-use-healing-magic | The Wrong Way to Use Healing Magic | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| those-who-hunt-elves | Those Who Hunt Elves | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| tokyo-ghoul | Tokyo Ghoul | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| tokyo-revengers | Tokyo Revengers | Medium | Needs verification, Approximate continuation |
| tomo-chan-is-a-girl | Tomo-chan Is a Girl! | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| toradora | Toradora! | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| trapped-in-a-dating-sim | Trapped in a Dating Sim | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| tsubasa-reservoir-chronicle | Tsubasa Reservoir Chronicle | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| tsukimichi-moonlit-fantasy | Tsukimichi: Moonlit Fantasy | Medium | Needs verification, Approximate continuation |
| uncle-from-another-world | Uncle from Another World | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| uzaki-chan-wants-to-hang-out | Uzaki-chan Wants to Hang Out! | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| villainess-level-99 | Villainess Level 99 | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| violet-evergarden | Violet Evergarden | Unknown | Needs manual research, Unknown confidence, Needs verification |
| welcome-to-demon-school-iruma-kun | Welcome to Demon School! Iruma-kun | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| why-raeliana-ended-up-at-the-dukes-mansion | Why Raeliana Ended Up at the Duke's Mansion | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| wise-mans-grandchild | Wise Man's Grandchild | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| wotakoi | Wotakoi: Love is Hard for Otaku | Medium | Needs verification |
| your-lie-in-april | Your Lie in April | Medium | Needs manual research, Needs verification |
| yu-yu-hakusho | Yu Yu Hakusho | Unknown | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |

## Entries That Look Safe

| id | Title | Confidence | Continue From | Reason |
| -- | -- | -- | -- | -- |
| 7th-time-loop | 7th Time Loop | Medium | Light Novel Volume 3 | No obvious structural conflict found by local audit. |
| a-certain-magical-index | A Certain Magical Index | High | New Testament Volume 1 after Season 3. Recommended safer route: read Old Testament Volume 14–22 first because the anime is rushed. | No obvious structural conflict found by local audit. |
| a-certain-scientific-railgun | A Certain Scientific Railgun | Medium | Manga Chapter 97.5 or Chapter 98 after Railgun T. | No obvious structural conflict found by local audit. |
| a-playthrough-of-a-certain-dudes-vrmmo-life | A Playthrough of a Certain Dude's VRMMO Life | Medium | Manga Volume 4, Chapter 32 | No obvious structural conflict found by local audit. |
| a-sign-of-affection | A Sign of Affection | Medium | Around Manga Chapter 21 after Season 1. | No obvious structural conflict found by local audit. |
| aesthetica-of-a-rogue-hero | Aesthetica of a Rogue Hero | Medium | Light Novel Volume 4 | No obvious structural conflict found by local audit. |
| akashic-records | Akashic Records of Bastard Magic Instructor | High | Light Novel Volume 6 | No obvious structural conflict found by local audit. |
| am-i-actually-the-strongest | Am I Actually the Strongest? | High | Light Novel Volume 3 | No obvious structural conflict found by local audit. |
| anohana | Anohana: The Flower We Saw That Day | High | No source continuation available. | No obvious structural conflict found by local audit. |
| another | Another | High | The anime completes the main story. Optional: read Another 2001 as sequel material. | No obvious structural conflict found by local audit. |
| ao-haru-ride | Ao Haru Ride | High | Manga Chapter 15 | No obvious structural conflict found by local audit. |
| arifureta | Arifureta: From Commonplace to World's Strongest | Medium | Light Novel Volume 11 | No obvious structural conflict found by local audit. |
| attack-on-titan | Attack on Titan | High | No main manga continuation needed. The anime completes the main story. | No obvious structural conflict found by local audit. |
| aura-battler-dunbine | Aura Battler Dunbine | High | No source continuation available. | No obvious structural conflict found by local audit. |
| bakuman | Bakuman | High | Anime completes the main manga story. Manga is optional for skipped/compressed details. | No obvious structural conflict found by local audit. |
| black-summoner | Black Summoner | High | Light Novel Volume 4 after Season 1. | No obvious structural conflict found by local audit. |
| bleach | Bleach | Medium | If only the original anime is watched, continue from Manga Chapter 480. If TYBW is watched, verify the latest adapted episode. | No obvious structural conflict found by local audit. |
| bloom-into-you | Bloom Into You | High | Manga Chapter 25 / Volume 5 | No obvious structural conflict found by local audit. |
| blue-exorcist | Blue Exorcist | Medium | Around Manga Chapter 65 if the latest included anime is Shimane Illuminati Saga. Recheck if newer arcs are included. | No obvious structural conflict found by local audit. |
| blue-lock | Blue Lock | High | Manga Volume 18, Chapter 150. If the user wants to jump directly into the next major arc, start around Chapter 152 after the transition chapters. | No obvious structural conflict found by local audit. |
| boarding-school-juliet | Boarding School Juliet | High | Manga Chapter 19 | No obvious structural conflict found by local audit. |
| boruto-naruto-next-generations | Boruto: Naruto Next Generations | High | Manga Chapter 68 after Episode 293. | No obvious structural conflict found by local audit. |
| bungo-stray-dogs | Bungo Stray Dogs | Medium | Anime is caught up or close to the manga. Check chapters after Chapter 110 / 110.5 for newer material. | No obvious structural conflict found by local audit. |
| bungo-stray-dogs-wan | Bungo Stray Dogs Wan! | Medium | Start from Bungo Stray Dogs Wan! Manga Volume 1 / Chapter 1. | No obvious structural conflict found by local audit. |
| call-of-the-night | Call of the Night | Medium | Manga Chapter 47 after Season 1. Needs update if Season 2 is included. | No obvious structural conflict found by local audit. |
| campfire-cooking-in-another-world | Campfire Cooking in Another World with My Absurd Skill | Medium | If only Season 1 is watched: LN Novel 2 Chapter 8 or Manga Volume 7 Chapter 35. If Season 2 is watched: Manga Volume 11 Chapter 60, but verify LN volume. | No obvious structural conflict found by local audit. |
| cautious-hero | Cautious Hero | Medium | Light Novel Volume 3 | No obvious structural conflict found by local audit. |
| chainsaw-man | Chainsaw Man | Medium | Chapter 53 after the Reze Arc movie; Chapter 39 if only Season 1 is watched | No obvious structural conflict found by local audit. |
| chivalry-of-a-failed-knight | Chivalry of a Failed Knight | Medium | Light Novel Volume 4 | No obvious structural conflict found by local audit. |
| clannad | Clannad | High | Watch Clannad: After Story after Clannad. For source route, play the visual novel from the beginning. | No obvious structural conflict found by local audit. |
| clannad-after-story | Clannad: After Story | High | No direct source continuation needed. For full route details, play the Clannad visual novel from the beginning. | No obvious structural conflict found by local audit. |
| code-geass | Code Geass | High | No source continuation available. | No obvious structural conflict found by local audit. |
| conception | Conception | Medium | Play the game from the beginning if you want the source version. No clean post-anime continuation. | No obvious structural conflict found by local audit. |
| d-gray-man | D.Gray-man | High | Manga Chapter 209 after Hallow. For safer continuity, restart from Chapter 165. | No obvious structural conflict found by local audit. |
| dead-mount-death-play | Dead Mount Death Play | High | Manga Chapter 82 after Season 1 Part 2. | No obvious structural conflict found by local audit. |
| death-march-to-the-parallel-world-rhapsody | Death March to the Parallel World Rhapsody | High | Light Novel Volume 4. Manga readers can continue around Chapter 44. | No obvious structural conflict found by local audit. |
| death-note | Death Note | Medium | Anime completes the main manga story; optional one-shot sequel chapters can be read separately. | No obvious structural conflict found by local audit. |
| demon-slayer | Demon Slayer | Medium | Manga Chapter 140 after Hashira Training Arc. Needs update after Infinity Castle movie coverage. | No obvious structural conflict found by local audit. |
| didnt-i-say-to-make-my-abilities-average | Didn't I Say to Make My Abilities Average in the Next Life?! | Medium | Start from Light Novel Volume 1 | No obvious structural conflict found by local audit. |
| digimon-adventure | Digimon Adventure | High | No source continuation available. | No obvious structural conflict found by local audit. |
| dont-toy-with-me-miss-nagatoro | Don't Toy with Me, Miss Nagatoro | Medium | Manga Chapter 92 after Season 2. | No obvious structural conflict found by local audit. |
| dr-stone | Dr. Stone | Medium | Needs latest-season check. Use Chapter 199 only if Science Future Part 2 is included. | No obvious structural conflict found by local audit. |
| dragon-ball | Dragon Ball | High | Watch Dragon Ball Z Episode 1 or read Manga Chapter 195. | No obvious structural conflict found by local audit. |
| dragon-ball-super | Dragon Ball Super | High | Dragon Ball Super Manga Chapter 42 after the TV anime. | No obvious structural conflict found by local audit. |
| dragon-ball-z | Dragon Ball Z | High | Dragon Ball Super anime or manga. | No obvious structural conflict found by local audit. |
| drifters | Drifters | Medium | Around Manga Chapter 45. | No obvious structural conflict found by local audit. |
| durarara | Durarara!! | High | Durarara!! SH Volume 1 after finishing Durarara!!x2 Ketsu. | No obvious structural conflict found by local audit. |
| el-hazard-the-magnificent-world | El-Hazard: The Magnificent World | High | No source continuation available. | No obvious structural conflict found by local audit. |
| endride | Endride | High | No source continuation available. | No obvious structural conflict found by local audit. |
| erased | Erased | Medium | Start the manga from Chapter 1 for the full ending. If skipping, start around Chapter 24. | No obvious structural conflict found by local audit. |
| fairy-tail | Fairy Tail | High | Fairy Tail: 100 Years Quest Chapter 1 after finishing the main anime. | No obvious structural conflict found by local audit. |
| fire-force | Fire Force | Medium | Manga Chapter 175 after Season 2. Needs recheck if Season 3 / final season is included. | No obvious structural conflict found by local audit. |
| food-wars | Food Wars! | High | Anime completes the main manga story. Manga is optional for differences. | No obvious structural conflict found by local audit. |
| frieren-beyond-journeys-end | Frieren: Beyond Journey's End | Medium | Manga Chapter 61 after Season 1. If Season 2 episodes are already included in the database, verify the latest adapted chapter before publishing. | No obvious structural conflict found by local audit. |
| fruits-basket | Fruits Basket | High | The anime completes the main manga story. Optional: read Fruits Basket Another as sequel/spin-off material. | No obvious structural conflict found by local audit. |
| fullmetal-alchemist-brotherhood | Fullmetal Alchemist: Brotherhood | High | Anime completes the main manga story; no post-anime source continuation needed. | No obvious structural conflict found by local audit. |
| fushigi-yuugi | Fushigi Yuugi | High | Read the manga from the beginning for source version, or explore related Fushigi Yuugi manga like Genbu Kaiden. | No obvious structural conflict found by local audit. |
| gate | Gate | Medium | Manga Chapter 86 after Season 2. | No obvious structural conflict found by local audit. |
| gintama | Gintama | High | Anime/movie completes the main manga story. | No obvious structural conflict found by local audit. |
| goblin-slayer | Goblin Slayer | Medium | Light Novel Volume 9 after Season 2. If the viewer skipped Goblin's Crown, check the movie/Volume 5 material first. | No obvious structural conflict found by local audit. |
| golden-time | Golden Time | High | No source continuation available. The anime completes the main story. | No obvious structural conflict found by local audit. |
| grimgar-ashes-and-illusions | Grimgar: Ashes and Illusions | High | Light Novel Volume 3. Optional: reread Volume 2 because the anime rushes some material. | No obvious structural conflict found by local audit. |
| haganai | Haganai | Medium | Start from Volume 8 for safer continuity, or Volume 9 if you only want post-anime material. | No obvious structural conflict found by local audit. |
| haikyuu | Haikyuu!! | Medium | Manga Chapter 293 after Season 4. Recheck if Final movie coverage is included. | No obvious structural conflict found by local audit. |
| handyman-saitou-in-another-world | Handyman Saitou in Another World | High | Manga Chapter 111 after the anime. | No obvious structural conflict found by local audit. |
| hells-paradise | Hell's Paradise | Medium | Manga Chapter 45 after Season 1. Needs update if Season 2 is included. | No obvious structural conflict found by local audit. |
| how-a-realist-hero-rebuilt-the-kingdom | How a Realist Hero Rebuilt the Kingdom | Medium | Light Novel Volume 5 | No obvious structural conflict found by local audit. |
| hunter-x-hunter-2011 | Hunter x Hunter | High | Manga Chapter 340 after the 2011 anime. | No obvious structural conflict found by local audit. |
| hyouka | Hyouka | High | Classic Literature Club Volume 5 after the anime. | No obvious structural conflict found by local audit. |
| i-got-a-cheat-skill-in-another-world | I Got a Cheat Skill in Another World and Became Unrivaled in the Real World, Too | Medium | Light Novel Volume 5 | No obvious structural conflict found by local audit. |
| i-shall-survive-using-potions | I Shall Survive Using Potions! | Medium | Manga Chapter 40 is a useful continuation estimate. LN volume still needs verification. | No obvious structural conflict found by local audit. |
| im-standing-on-a-million-lives | I'm Standing on a Million Lives | High | Manga Chapter 26 / Volume 6 after Season 2. | No obvious structural conflict found by local audit. |
| im-the-villainess-so-im-taming-the-final-boss | I'm the Villainess, So I'm Taming the Final Boss | Medium | Start from Light Novel Volume 1 for full story. If skipping, continue around Volume 4, but this needs verification. | No obvious structural conflict found by local audit. |
| in-another-world-with-my-smartphone | In Another World With My Smartphone | High | Start Light Novel Volume 7 from the beginning, or continue after Volume 7 Chapter 2 if you accept skipped content. | No obvious structural conflict found by local audit. |
| in-the-land-of-leadale | In the Land of Leadale | High | Light Novel Volume 4 | No obvious structural conflict found by local audit. |
| insomniacs-after-school | Insomniacs After School | High | Manga Chapter 58 after Season 1. Starting a few chapters earlier is optional. | No obvious structural conflict found by local audit. |
| inuyasha | Inuyasha | High | The main story is complete. Optional: watch Yashahime as sequel material. | No obvious structural conflict found by local audit. |
| danmachi | Is It Wrong to Try to Pick Up Girls in a Dungeon? | Medium | Light Novel Volume 19 after Season 5. | No obvious structural conflict found by local audit. |
| isekai-izakaya | Isekai Izakaya: Japanese Food From Another World | Medium | Start from the beginning because the anime is episodic and not a clean continuation route. | No obvious structural conflict found by local audit. |
| isekai-quartet | Isekai Quartet | High | No source continuation available. | No obvious structural conflict found by local audit. |
| ixion-saga-dt | Ixion Saga DT | High | No source continuation available. Treat the anime as complete. | No obvious structural conflict found by local audit. |
| jojos-bizarre-adventure | JoJo's Bizarre Adventure | High | JoJo Part 7: Steel Ball Run Chapter 1 after Stone Ocean. | No obvious structural conflict found by local audit. |
| jujutsu-kaisen | Jujutsu Kaisen | Medium | After Season 2, start around Manga Chapter 137. If the site tracks Season 3, this entry needs manual research for the latest anime ending point. | No obvious structural conflict found by local audit. |
| just-because | Just Because! | High | No source continuation available. The anime is the complete main story. | No obvious structural conflict found by local audit. |
| kaguya-sama-love-is-war | Kaguya-sama: Love is War | Medium | Start from the beginning for skipped comedy chapters, or around Chapter 152-160 after watching Season 3 and the movie. | No obvious structural conflict found by local audit. |
| kaiju-no-8 | Kaiju No. 8 | Medium | Manga Chapter 39 after Season 1. Needs update if Season 2 is included. | No obvious structural conflict found by local audit. |
| kakuriyo-bed-and-breakfast-for-spirits | Kakuriyo: Bed & Breakfast for Spirits | Medium | Light Novel Volume 6 if the user watched only the original 26-episode anime. If newer Season 2 episodes are included, verify a newer endpoint. | No obvious structural conflict found by local audit. |
| kimi-ni-todoke | Kimi ni Todoke: From Me to You | Medium | If watched through Season 2, continue from Manga Chapter 47. If watched Season 3, mark as needs verification until the exact Season 3 endpoint is checked. | No obvious structural conflict found by local audit. |
| knights-and-magic | Knight's & Magic | Medium | Light Novel Volume 6, but needs verification because the anime compresses content. | No obvious structural conflict found by local audit. |
| komi-cant-communicate | Komi Can't Communicate | Medium | Manga Chapter 130 after Season 2. | No obvious structural conflict found by local audit. |
| kubo-wont-let-me-be-invisible | Kubo Won't Let Me Be Invisible | Medium | Manga Chapter 45 after the anime. | No obvious structural conflict found by local audit. |
| kurokos-basketball | Kuroko's Basketball | High | Main story complete. Optional sequel: Extra Game / Last Game. | No obvious structural conflict found by local audit. |
| kyo-kara-maoh | Kyo Kara Maoh! | Medium | Start the light novel from Volume 1 for the cleanest source route. | No obvious structural conflict found by local audit. |
| log-horizon | Log Horizon | Medium | Source is caught up/complicated. No clean published LN continuation after Season 3. | No obvious structural conflict found by local audit. |
| lovely-complex | Lovely Complex | Medium | Start from the beginning for the full manga experience. | No obvious structural conflict found by local audit. |
| magi-the-kingdom-of-magic | Magi: The Kingdom of Magic | High | Manga Chapter 199 after The Kingdom of Magic. | No obvious structural conflict found by local audit. |
| magi | Magi: The Labyrinth of Magic | Medium | Watch Magi: The Kingdom of Magic first. Manga continuation is around Chapter 116-117. | No obvious structural conflict found by local audit. |
| magic-knight-rayearth | Magic Knight Rayearth | High | No direct continuation needed. Read the manga from the beginning for the source version. | No obvious structural conflict found by local audit. |
| maid-sama | Maid Sama! | High | Manga Chapter 33 after the anime. | No obvious structural conflict found by local audit. |
| marchen-awakens-romance | MAR: Marchen Awakens Romance | High | Main story complete. Optional: read MÄR Omega. | No obvious structural conflict found by local audit. |
| mashle | Mashle: Magic and Muscles | Medium | Manga Chapter 75 after Season 2. Needs update if Season 3 is included. | No obvious structural conflict found by local audit. |
| miss-kobayashis-dragon-maid | Miss Kobayashi's Dragon Maid | Medium | Start from the beginning for all chapters. If skipping, continue around Manga Chapter 65, but verify if the movie is counted. | No obvious structural conflict found by local audit. |
| mob-psycho-100 | Mob Psycho 100 | High | Anime completes the main manga story; optional Reigen spin-off can be read separately. | No obvious structural conflict found by local audit. |
| monthly-girls-nozaki-kun | Monthly Girls' Nozaki-kun | Medium | Start from the beginning for skipped chapters. If skipping, continue around Chapter 47. | No obvious structural conflict found by local audit. |
| more-than-a-married-couple-but-not-lovers | More Than a Married Couple, But Not Lovers | Medium | Manga Chapter 29 or Chapter 30 after the anime. | No obvious structural conflict found by local audit. |
| my-dress-up-darling | My Dress-Up Darling | High | Manga Chapter 87 after Season 2. | No obvious structural conflict found by local audit. |
| my-happy-marriage | My Happy Marriage | Medium | If watched Season 1 only, continue from Light Novel Volume 3. If watched Season 2, keep as needs verification until exact Volume 5+ endpoint is confirmed. | No obvious structural conflict found by local audit. |
| my-hero-academia | My Hero Academia | Medium | Around Manga Chapter 399 after Season 7. Needs update if Final Season is included. | No obvious structural conflict found by local audit. |
| my-little-monster | My Little Monster | High | Manga Chapter 16 for overlap, or Chapter 17 for new material. | No obvious structural conflict found by local audit. |
| my-love-story-with-yamada-kun-at-lv999 | My Love Story with Yamada-kun at Lv999 | High | Manga Chapter 42 after Season 1. | No obvious structural conflict found by local audit. |
| my-next-life-as-a-villainess | My Next Life as a Villainess: All Routes Lead to Doom! | Medium | Light Novel Volume 5 after Season 2, but verify movie coverage if the user watched the movie too. | No obvious structural conflict found by local audit. |
| naruto | Naruto | High | Watch Naruto Shippuden Episode 1 or read Manga Chapter 245. | No obvious structural conflict found by local audit. |
| naruto-shippuden | Naruto Shippuden | High | Boruto is the sequel route after Naruto Shippuden. | No obvious structural conflict found by local audit. |
| no-game-no-life | No Game No Life | High | Light Novel Volume 4 | No obvious structural conflict found by local audit. |
| no-longer-allowed-in-another-world | No Longer Allowed in Another World | High | Manga Volume 6, Chapter 30 | No obvious structural conflict found by local audit. |
| noragami | Noragami | High | Manga Chapter 39 after Season 2. | No obvious structural conflict found by local audit. |
| now-and-then-here-and-there | Now and Then, Here and There | High | No source continuation available. | No obvious structural conflict found by local audit. |
| one-punch-man | One Punch Man | Medium | Manga Chapter 85-86 after Season 2. Needs recheck if Season 3 is included. | No obvious structural conflict found by local audit. |
| oshi-no-ko | Oshi no Ko | Medium | Manga Chapter 81 after Season 2. | No obvious structural conflict found by local audit. |
| ouran-high-school-host-club | Ouran High School Host Club | Medium | Start from the beginning, or around Chapter 37 if the user wants a rough continuation. | No obvious structural conflict found by local audit. |
| overlord | Overlord | High | After Season 4 only: read Volumes 12–13 first. After Season 4 plus The Sacred Kingdom movie: continue with Volume 15. | No obvious structural conflict found by local audit. |
| parallel-world-pharmacy | Parallel World Pharmacy | High | Light Novel Volume 3 | No obvious structural conflict found by local audit. |
| plastic-memories | Plastic Memories | High | No source continuation available. The anime is the complete main story. | No obvious structural conflict found by local audit. |
| re-creators | Re:Creators | High | No source continuation available. | No obvious structural conflict found by local audit. |
| rent-a-girlfriend | Rent-a-Girlfriend | Medium | Manga Chapter 168 after Season 3. Needs update if Season 4 is included. | No obvious structural conflict found by local audit. |
| say-i-love-you | Say "I Love You". | Medium | Manga Chapter 29, or start from Chapter 1 for full context. | No obvious structural conflict found by local audit. |
| seraph-of-the-end | Seraph of the End | High | Manga Chapter 42 after Season 2. | No obvious structural conflict found by local audit. |
| snow-white-with-the-red-hair | Snow White with the Red Hair | Medium | Around Manga Chapter 33 after Season 2. | No obvious structural conflict found by local audit. |
| solo-leveling | Solo Leveling | Medium | Start around Manhwa Chapter 111. If the version numbering looks different, start around Chapter 120-125 to safely enter the post-Jeju / next arc material. | No obvious structural conflict found by local audit. |
| soul-eater | Soul Eater | Medium | Start from the beginning for the best experience. If skipping, restart around Chapter 36. | No obvious structural conflict found by local audit. |
| spy-x-family | Spy x Family | Medium | Manga Volume 9, Chapter 61 after Season 2. | No obvious structural conflict found by local audit. |
| tada-never-falls-in-love | Tada Never Falls in Love | High | No source continuation available. The anime is the complete main story. | No obvious structural conflict found by local audit. |
| that-time-i-got-reincarnated-as-a-slime | That Time I Got Reincarnated as a Slime | Medium | Light Novel Volume 10. Manga readers can continue around Chapter 119. | No obvious structural conflict found by local audit. |
| the-ancient-magus-bride | The Ancient Magus' Bride | Medium | Around Manga Chapter 76 after Season 2. | No obvious structural conflict found by local audit. |
| the-dangers-in-my-heart | The Dangers in My Heart | Medium | Manga Chapter 114 after Season 2. | No obvious structural conflict found by local audit. |
| the-eminence-in-shadow | The Eminence in Shadow | Medium | Light Novel Volume 4, around Chapter 4. For safer context, start earlier in Volume 4. | No obvious structural conflict found by local audit. |
| the-ice-guy-and-his-cool-female-colleague | The Ice Guy and His Cool Female Colleague | High | Manga Chapter 41 | No obvious structural conflict found by local audit. |
| the-pet-girl-of-sakurasou | The Pet Girl of Sakurasou | High | Light Novel Volume 7 | No obvious structural conflict found by local audit. |
| the-quintessential-quintuplets | The Quintessential Quintuplets | High | The main story is complete after the movie. Read from the beginning if you want skipped content. | No obvious structural conflict found by local audit. |
| the-vision-of-escaflowne | The Vision of Escaflowne | High | No source continuation available. | No obvious structural conflict found by local audit. |
| tokyo-revengers | Tokyo Revengers | Medium | Manga Chapter 186 after Tenjiku Arc / Season 3. | No obvious structural conflict found by local audit. |
| tsuki-ga-kirei | Tsuki ga Kirei | High | No source continuation available. The anime is the complete main story. | No obvious structural conflict found by local audit. |
| tsukimichi-moonlit-fantasy | Tsukimichi: Moonlit Fantasy | Medium | Light Novel Volume 11 | No obvious structural conflict found by local audit. |
| vinland-saga | Vinland Saga | High | Manga Chapter 101 after Season 2. | No obvious structural conflict found by local audit. |
| world-trigger | World Trigger | High | Manga Chapter 197 after Season 3. | No obvious structural conflict found by local audit. |
| wotakoi | Wotakoi: Love is Hard for Otaku | Medium | Start from the beginning, or around Volume 5 if the user has watched all anime/OVA material. | No obvious structural conflict found by local audit. |
| yona-of-the-dawn | Yona of the Dawn | High | Manga Chapter 48 after Season 1. | No obvious structural conflict found by local audit. |

## Suggested Next 50 Research Targets

| # | id | Title | Current Confidence | Current Continue From | Reason |
| -: | -- | -- | -- | -- | -- |
| 1 | a-journey-through-another-world | A Journey Through Another World: Raising Kids While Adventuring | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 2 | a-wild-last-boss-appeared | A Wild Last Boss Appeared! | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 3 | demon-lord-retry | Demon Lord, Retry! | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 4 | farming-life-in-another-world | Farming Life in Another World | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 5 | fluffy-paradise | Fluffy Paradise | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 6 | from-bureaucrat-to-villainess | From Bureaucrat to Villainess: Dad's Been Reincarnated! | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 7 | beheneko | I'm a Behemoth, an S-Ranked Monster, but Mistaken for a Cat | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 8 | ive-been-killing-slimes-for-300-years | I've Been Killing Slimes for 300 Years | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 9 | kuma-kuma-kuma-bear | Kuma Kuma Kuma Bear | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 10 | loner-life-in-another-world | Loner Life in Another World | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 11 | my-instant-death-ability-is-so-overpowered | My Instant Death Ability is So Overpowered | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 12 | oregairu | My Teen Romantic Comedy SNAFU | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 13 | my-unique-skill-makes-me-op-even-at-level-1 | My Unique Skill Makes Me OP Even at Level 1 | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 14 | nisekoi | Nisekoi | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 15 | one-piece | One Piece | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 16 | outbreak-company | Outbreak Company | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 17 | problem-children-are-coming-from-another-world | Problem Children Are Coming from Another World, Aren't They? | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 18 | quality-assurance-in-another-world | Quality Assurance in Another World | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 19 | rascal-does-not-dream-of-bunny-girl-senpai | Rascal Does Not Dream of Bunny Girl Senpai | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 20 | remonster | Re:Monster | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 21 | reborn-as-a-vending-machine | Reborn as a Vending Machine, I Now Wander the Dungeon | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 22 | reincarnated-as-a-sword | Reincarnated as a Sword | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 23 | restaurant-to-another-world | Restaurant to Another World | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 24 | saekano | Saekano: How to Raise a Boring Girlfriend | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 25 | saga-of-tanya-the-evil | Saga of Tanya the Evil | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 26 | sasaki-and-peeps | Sasaki and Peeps | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 27 | saving-80000-gold-in-another-world | Saving 80,000 Gold in Another World for My Retirement | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 28 | seirei-gensouki-spirit-chronicles | Seirei Gensouki: Spirit Chronicles | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 29 | she-professed-herself-pupil-of-the-wise-man | She Professed Herself Pupil of the Wise Man | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 30 | shikimoris-not-just-a-cutie | Shikimori's Not Just a Cutie | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 31 | show-by-rock | Show by Rock!! | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 32 | skeleton-knight-in-another-world | Skeleton Knight in Another World | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 33 | skip-and-loafer | Skip and Loafer | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 34 | so-im-a-spider-so-what | So I'm a Spider, So What? | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 35 | spice-and-wolf | Spice and Wolf | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 36 | steins-gate | Steins;Gate | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 37 | summoned-to-another-world-for-a-second-time | Summoned to Another World for a Second Time | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 38 | sweet-reincarnation | Sweet Reincarnation | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 39 | teasing-master-takagi-san | Teasing Master Takagi-san | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 40 | the-8th-son-are-you-kidding-me | The 8th Son? Are You Kidding Me? | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 41 | the-aristocrats-otherworldly-adventure | The Aristocrat's Otherworldly Adventure | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 42 | the-asterisk-war | The Asterisk War | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 43 | the-banished-former-hero-lives-as-he-pleases | The Banished Former Hero Lives as He Pleases | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 44 | the-beginning-after-the-end | The Beginning After the End | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 45 | the-daily-life-of-the-immortal-king | The Daily Life of the Immortal King | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 46 | the-devil-is-a-part-timer | The Devil Is a Part-Timer! | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 47 | the-dungeon-of-black-company | The Dungeon of Black Company | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 48 | the-executioner-and-her-way-of-life | The Executioner and Her Way of Life | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 49 | the-familiar-of-zero | The Familiar of Zero | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
| 50 | the-faraway-paladin | The Faraway Paladin | Unknown | Needs manual research before publishing. | Needs manual research, Unknown confidence, Manual research placeholder, Needs verification |
