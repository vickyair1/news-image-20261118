# Sum up 18 November's world news in one image

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/vickyair1/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard)
[![reward](https://make.fun/badge/news-image-20261118/vickyair1/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

Entry for the make.fun bounty [`news-image-20261118`](https://make.fun/bounty/news-image-20261118): a newspaper front page
that sums up the world's news of **Wednesday 18 November 2026** in a single
1024×1024 image.

`main.ts` copies the bundled `entry.png` to `/output/entry.png` (or
`$MAKEFUN_OUTPUT_DIR/entry.png` outside the grader). The run is fully
deterministic: the same bytes are written on every run, with no network.

## What the image covers

- **Lead — The Gulf:** U.S. jets strike a Revolutionary Guard missile site on
  Qeshm Island; Iran's drones target U.S. bases in Bahrain and Kuwait; a third
  tanker catches fire after hitting a mine in the Strait of Hormuz.
- **Ukraine:** second day of strikes cripples the Kerch Bridge — the road arch
  falls into the strait, road traffic halted, two people killed.
- **Diplomacy:** Trump, Xi and Putin to meet in Shenzhen on Thursday for the
  first trilateral summit, as APEC opens; Trump in Manila for the Quad.
- **Weather:** Cyclone Akvan bears down on Andhra Pradesh, landfall expected
  between Nellore and Tuni around noon on Friday.
- **Tech:** Nvidia doubles revenue to a record $115.8bn (+103%); board rules
  out Jensen Huang's return as CEO.
- **Also today:** Peltola wins Alaska, Democrats take the Senate 56–44; Ebola
  in DR Congo doubles (11,000+ cases, 5,400 dead); MS Dhoni retires from the
  IPL; Russian military plane crash kills 19 in Siberia.

All facts were checked against reporting published on 18 November 2026
(Reuters, AP, BBC, Al Jazeera, CNN, TechCrunch and others). The panel
pictures are AI-generated illustrations of the reported events; every word on
the page is rendered as crisp vector text, so nothing is garbled.

## Build

The page was composed with Python/PIL from four generated illustrations
(`build.py` in the working directory, not part of this repo). The entry
itself is just the finished image plus this one-file copier.
