# About the photos in this folder

## Stock photos are in place now

The hero, menu-category, and gallery images are currently populated with
real food/interior stock photography (sourced from Unsplash, free-to-use)
so the site no longer shows placeholder art. They're solid stand-ins, but
they are **not actual photos of Hungry Hub** — swap them for the real
thing whenever you can, using the mapping below. `SmartImage` (in
`src/components`) falls back to branded placeholder art automatically if
a file is ever missing, so nothing breaks while you swap things out.

## Couldn't pull your real photos from Justdial

You linked your Justdial listing for gallery photos — I wasn't able to
fetch it. Justdial runs Akamai Bot Manager, which blocks all automated
access (curl and a real headless browser both got stonewalled with an
empty response) — this isn't something to bypass. The easiest path:
save the photos you want from that listing (or Instagram/Google Maps)
to your phone/computer and share them with me directly the way you did
last time — I'll drop them straight into the matching slots below.

## File mapping

| File | Currently shows | Replace with |
|---|---|---|
| `hero-food.jpg` | Stock burger + fries | Your best hero shot — the burger-on-board photo you shared earlier works great |
| `menu/pizza.jpg` | Stock wood-fired pizza | Your pizza close-up |
| `menu/burger.jpg` | Stock double cheeseburger | Your burger close-up |
| `menu/momos.jpg` | Stock dim sum | Your momos shot |
| `menu/chaap.jpg` | Stock grilled skewers | Your chaap shot |
| `menu/wraps.jpg` | Stock wrap | Your wrap shot |
| `menu/shakes.jpg` | Stock shake | Your fries/shake shot |
| `gallery/interior-1.jpg` | Stock cafe with hanging bulbs | Your olive-chair + wood-table interior shot |
| `gallery/interior-2.jpg` | Stock pendant lights | Your warm hanging-lights shot |
| `gallery/interior-3.jpg` | Stock wooden table/chairs | Your herringbone-floor seating shot |
| `gallery/pizza.jpg` | Stock pizza | Another real pizza shot |
| `gallery/burger.jpg` | Stock burger | Another real burger shot |
| `gallery/spread.jpg` | Stock paneer/naan spread | A real food-spread shot |
| `gallery/friends.jpg` | Stock people eating | A real lifestyle/customers shot |
| `gallery/dessert.jpg` | Stock chocolate frappe | Your shake/dessert shot |

Also worth adding: `public/logo.png` — the real heart-mascot logo
(transparent PNG) — and a real storefront/exterior shot (there's
currently no gallery slot claiming to be your storefront, since I
didn't want to pass off a stock photo as your actual building; add one
once you share the real shot).
