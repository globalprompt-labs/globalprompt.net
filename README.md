# Global Prompt landing page

A responsive Russian landing page based on the supplied MVP plan. Plain HTML, CSS and JavaScript. No build step, package installation or private API keys required. The company name is `Global Prompt`; the logo is the selected dialogue symbol with a lime prompt accent. The supplied transparent PNG appears in the header and footer. Rounded surfaces and lime calls to action extend the identity throughout the design. The sample conversation is illustrative; the page accurately describes a pilot in preparation rather than an established live service.

## Preview

Open index.html in a browser, or from this folder run:

```sh
python3 -m http.server 8080
```

Visit http://localhost:8080.

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root, including index.html, styles.css, config.js, script.js, the assets folder and .nojekyll. Do not upload the enclosing folder as the site root.
3. In the repository, open Settings > Pages.
4. Under Build and deployment, choose Deploy from a branch, then main and / (root). Save.
5. GitHub provides the published URL in the Pages settings after deployment.

Relative asset links work both at username.github.io and username.github.io/repository/.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Connect the contact form

GitHub Pages serves static files and does not process contact submissions. This page is prepared for Formspree. No messages can be received until you configure your own endpoint.

1. Create a form in your own https://formspree.io account and verify the recipient email.
2. Copy the public form endpoint from its Integration section.
3. In config.js, replace the empty formEndpoint string with that endpoint.
4. Configure spam protection and domain restrictions in your Formspree account as appropriate for your plan.
5. Complete the data notice in the #privacy section of index.html with your business identity, privacy contact and actual retention policy before receiving personal data. Review the provider and data handling for your intended operating region.
6. Publish the updated files and send a real test submission. Confirm it arrives in your inbox and Formspree dashboard.

Official guide: https://help.formspree.io/articles/building-your-form/building-an-html-form

The form validates required fields, email and consent, includes a honeypot, prevents repeated clicks while sending, handles timeout/errors, preserves fields on failure and only displays success after an HTTP success response. Without a configured endpoint, it clearly says that messages are not being accepted and never reports a successful submission. Data is not saved in browser storage.

## Customize before launch

- Company branding is Global Prompt in the header, footer and page title.
- Confirm the product wording and pilot availability.
- Set the contact endpoint and complete the privacy notice.
- Add an actual business address or contact details if needed. None were invented.
- Optional custom domain: configure it in GitHub Pages settings and with your DNS provider.

The WhatsApp-style hero shows a resident conversation and reveals the final ОСИ reply with a button. The language-support FAQ has been removed. It does not create an actual ОСИ request. No analytics, external fonts, tracking scripts or external image dependencies are included.

## Verification

JavaScript syntax and internal anchor targets were checked. Demo interaction and unconfigured/success/error form states were tested with a simulated DOM and network responses. Browser rendering could not be verified in this environment; check desktop and mobile layouts before publishing. Real message delivery requires your configured endpoint and a test submission after publishing.
