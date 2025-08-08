# Mindful Moments App

## Overview
Mindful Moments is a minimalist web-based application designed to support mental health and wellness through quick, evidence-based activities. Built with HTML, JavaScript, and Tailwind CSS, it offers a soothing, accessible interface for users to track their mood, practice micro-meditations, and view progress. The app is limited to three pages to ensure simplicity and ease of use.

## Features
- **Daily Check-In**: Log your mood with emojis or a slider and optionally journal thoughts.
- **Micro-Meditations**: Access 1-3 minute guided breathing or mindfulness exercises with calming animations.
- **Progress & Tips**: View weekly mood trends and receive daily mental health tips with external resource links.
- **Accessibility**: High-contrast text, screen-reader compatibility, and optional dark mode.
- **Responsive Design**: Optimized for mobile and desktop using Tailwind CSS.

## Tech Stack
- **Frontend**: HTML, JavaScript, Tailwind CSS (via CDN)
- **Dependencies**: None (CDN-hosted Tailwind CSS)
- **No Backend**: Local storage for mood entries and preferences (no server-side data storage).

## Installation
1. Clone or download the repository:
   ```bash
   git clone https://github.com/mentalhealthadvocacynow/mindfulness-tracker.git
   ```
2. Ensure an internet connection for Tailwind CSS CDN.

## Usage
- **Page 1: Daily Check-In**
  - Select your mood via emojis or a slider.
  - Optionally add a journal entry and save it (stored locally).
- **Page 2: Micro-Meditations**
  - Choose a meditation theme (Calm, Focus, Sleep).
  - Follow the guided animation and audio for 1-3 minutes.
- **Page 3: Progress & Tips**
  - View a weekly mood trend chart based on saved entries.
  - Read a daily mental health tip and access external resources (e.g., crisis hotlines).

## Development

## Limitations
- No backend; data is stored locally and may be cleared if the browser cache is reset.
- Meditation audio relies on browser compatibility with HTML5 audio.
- External resource links require an internet connection.

## Future Enhancements
- Add offline meditation audio support.
- Implement a simple notification system for daily check-in reminders.
- Expand meditation library with user-uploaded audio (with file size validation).

## License
MIT License. See `LICENSE` for details.

## Contact
For feedback or issues, contact [jellybean1319@duck.com] or open an issue on GitHub.