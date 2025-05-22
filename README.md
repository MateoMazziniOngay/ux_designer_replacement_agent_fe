# Sofia Forge Macro

This repository contains a Confluence Forge app that demonstrates how to display a generated user interface image inside a macro. The front‑end is built with React and the app is configured to run on the Forge Node.js 22 runtime.

When the macro is rendered it calls a local HTTP service (`http://localhost:8000/generate-ui`) to request a UI mockup for the requirement **"Design a dashboard with KPIs and charts"**. The service should respond with JSON in the form:

```json
{ "image_url": "https://example.com/image.png" }
```

The returned image URL is then displayed in the macro using the `<Image>` component.

## Requirements

- Forge CLI (see [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/))
- A local service running on `http://localhost:8000` that exposes a `POST /generate-ui` endpoint and returns an `image_url` field.

## Quick start

1. Edit the UI logic in `src/frontend/index.jsx` or the helper service in `src/services/uiGeneratorService.js` as needed.
2. Deploy and install the app:

```bash
forge deploy
forge install
```

3. During development run `forge tunnel` to serve the custom UI locally:

```bash
forge tunnel
```

4. Insert the **Sofia** macro in a Confluence page. Once loaded it will fetch the generated image and display it.

### Notes
- Use `forge deploy` whenever you want to persist code changes.
- Once installed, subsequent deployments are picked up automatically by the site without reinstallation.

