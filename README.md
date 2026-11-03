# AGH AVADER – website

Source of [avader-agh.github.io](https://avader-agh.github.io), the website of the AGH AVADER Student Research Club, AGH University of Krakow. Built with Jekyll and [al-folio](https://github.com/alshedivat/al-folio) (same setup as the [EPAS group website](https://github.com/vision-agh/vision-agh.github.io)); every push to `main` is deployed automatically.

## Where things live

- `_pages/about.md` – home page (Polish), `_pages/en.md` – English home page
- `_data/achievements.yml` – achievements (`highlight: true` shows one on the home page)
- `_data/grants.yml` – current projects and AGH Rector's grants
- `_data/people.yml` – supervisors, board and members
- `_data/partners.yml` – partner logos (files in `assets/img/partners/`)
- `_config.yml` – site settings, `_sass/_themes.scss` – colours

## Run locally

```bash
docker compose up   # http://localhost:8080
```

## Formatting

CI runs Prettier; use the pinned versions (`npm ci`):

```bash
npm ci && npx prettier . --write
```

## License

Theme: [MIT License](https://github.com/alshedivat/al-folio/blob/main/LICENSE), based on the [\*folio theme](https://github.com/bogoli/-folio) by [Lia Bogoev](https://liabogoev.com).
