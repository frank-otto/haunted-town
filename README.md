# 🏚️ Haunted Town – Spukstadt

The finale of the 20-day Halloween game series: a cinematic 3D haunted town at night where **every game of the series is its own house**. Fly or walk through the misty streets, hover or tap a house to see its title and day, and step inside to play. Houses of games that are not out yet stay dark and boarded up until their day. In the middle of the square the clock tower counts down to Halloween, and on Halloween night the sky fills with fireworks.

**Play online:** https://frank-otto.github.io/haunted-town/

## Features
- Opening "Moon Dive": lightning forks beside a huge full moon and reveals the town, the camera dives through the town gate and down the main street while the windows light up house by house, and lands on the clock face with a deep bell stroke and an organ swell.
- 23 themed houses (20 daily games + 3 bonus houses on the Bonus Lane behind the clock tower: Ghost Memory, Pumpkin Smash, Witch Broom Race – always open) (candy shop, ghost inn, apothecary, piano manor, pumpkin patch shed, spider-web tower, mad lab tower, zombie crypt, witch cottage, bowling barn, memory crypt, smash barn, broom spire …), one per game, driven by one config list.
- Orbit-and-fly camera (mouse, keyboard, touch) that never clips into houses, trees or the ground; guided tour from house to house.
- Locked / unlocked by release date with manual overrides; a list of all games with direct links.
- Full moon, fog and mist, flickering lanterns, jack-o'-lanterns, bats, drifting ghosts, lightning, chimney smoke, a clock tower with real-time hands and a countdown board, fireworks on 31 October.
- A hidden candy in every yard (progress is saved), calm mode for kids, English / German, graphics quality Low / Normal / High / Ultra.
- Real CC0 recordings only (wind, owls, a wolf, bells, creaking doors, organ, fireworks); see `LICENSES/SOUNDS.md`.

## Controls
- **Mouse:** drag to look around, right-drag or Shift-drag to move, wheel to zoom, click a house.
- **Keyboard:** WASD / arrows to fly, Q / E down / up, T tour, L list, H home view, Enter opens the selected game, Esc closes.
- **Touch:** swipe to look, pinch to zoom, two fingers to move, tap a house.

## URL options
Preview options: `open: true` / `open: false` per entry; URL `?unlock=all`, `?lock=all`, `?date=2026-10-25` to preview another day, `?calm=1`, `?skip=1` (skip the opening).

## Run locally
Open `index.html` (works via `file://`).

Code: three.js (MIT). Font: Fredoka (OFL). Sounds: CC0 (see `LICENSES/SOUNDS.md`).
