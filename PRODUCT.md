# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS (user's choice). No framework, no build step.

## Users

Locals and passers-by near Pokrovka street in Moscow who want to know what Ristretto serves, when it's open, how to find it, and whether to come in or book a table. Most visits are quick checks on a phone, often on the way there.

## Product Purpose

The public website for Ristretto, a specialty coffee bar. It presents the menu, practical information (address, hours, phone, map) and the ways to book a table. Success means a visitor leaves knowing what to order and how to get there, or has booked a table.

Source note: Ristretto is described in the companion Telegram-bot project (`C:\Users\Lesha\ristretto-bot\README.md`) as a demo bot for a fictional café. Treat the site the same way, as a demo/portfolio piece for a fictional venue, unless the user says otherwise.

## Positioning

Craft and sourcing. The coffee is roasted in small batches, and the baristas know every cup "from the farm to the pour" (от фермы до пролива). The menu backs this up: a named espresso blend (Brazil + Ethiopia) with tasting notes, a filter "bean of the week" where the barista talks about the farm and roast profile, and an 18-hour cold brew.

## Operating Context

- Language: Russian. All existing copy is in Russian; currency is ₽.
- A companion Telegram bot already handles the menu, table booking (date → time → guests → name → phone → confirmation), contacts and a map link. The website and the bot share one source of truth for content.
- Table booking in the bot: bookings from 8:00 to 21:00, up to 10 guests; larger groups phone the café.

## Capabilities and Constraints

- Content source: `C:\Users\Lesha\ristretto-bot\menu.json` (menu) and `C:\Users\Lesha\ristretto-bot\texts.py` (name, address, hours, phone, voice). Pull from these files; do not retype or invent items.
- Menu: 4 categories: Эспрессо-напитки (6), Альтернатива (5), Десерты (5), Завтраки (5). Each item has a name, a description with volume and flavour notes, and a price in ₽. Category titles in the JSON start with emoji; that is the bot's convention, not a brand requirement.
- Practical info: Москва, ул. Покровка, 17 (вход со двора); open daily 8:00–22:00; +7 (495) 123-45-67; map link `https://yandex.ru/maps/?text=Москва, ул. Покровка, 17`.
- Booking: the main «Забронировать столик» button links to the Telegram bot https://t.me/ristretto_coffee_demo_bot (@ristretto_coffee_demo_bot); the phone is the fallback in contacts.
- Static hosting; there is no backend for the site itself.

## Brand Commitments

- Name: **Ristretto**, used with the descriptor "specialty coffee". No logo exists yet, so the name is set as a wordmark.
- Voice (from the bot copy): warm, friendly, speaks to the guest as «вы», knowledgeable about coffee without being snobbish, short sentences.

## Evidence on Hand

- Real content: full menu with prices and descriptions, address, hours, phone, map link, welcome copy (all in the bot project files above).
- **Photos: two Unsplash stock shots** chosen by the owner (2026-09-27): `interior.jpg` (hall) and `chemex.jpg` (chemex pour), served from `img/` as WebP. Credited in the footer ("Фото: Unsplash"); the footer also states the venue is fictional. Any further imagery follows the same rule: licensed, credited, never passed off as a real venue.
- No logo, reviews, press, awards, farm/origin partner names or roaster details beyond what the menu states. Do not fabricate any of these.

## Product Principles

1. Show the craft through facts: origins, tasting notes, volumes and brew methods from the real menu, not adjectives.
2. Practical first on a phone: hours, address and how to get in (the entrance is from the courtyard) are never more than a glance away.
3. One content source: the site mirrors the bot's menu and contacts, so they never contradict each other.
4. Honest imagery: stock photos are credited, and anything still missing stays visibly missing instead of being faked.
