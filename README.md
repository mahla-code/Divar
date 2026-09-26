# Divar Clone

A backend for a classified-ads website inspired by Divar, built with Node.js and Express. The goal of this project was to recreate the core features of a listings platform: authentication, category management, and creating posts with a location picked on a map.

## What does this project do?

Users sign in with their phone number (no password needed — a one-time code is sent to them). They can then pick a category from the available ones (e.g. real estate, vehicles, digital goods), mark their listing's location on a map, upload a few photos, and publish the post. Each category can define its own custom fields (e.g. "area" and "number of rooms" for real estate), and these fields are shown dynamically in the post creation form.

## Main Features

### Authentication
- Sign up and login via a one-time password (OTP) sent to the user's mobile number
- JWT issued after OTP verification, stored in a secure (httpOnly) cookie
- Rate limiting on OTP requests, so a number can't be spammed with repeated codes
- Logout support

### Categories
Categories can be nested (a parent category with several subcategories underneath), just like on the real Divar.

### Category-specific fields
Each category can define its own custom fields — a field can be a plain text input or a list of predefined options. These are exactly the fields a user is asked to fill in when creating a post.

### Creating and managing posts
- Uploading multiple photos per post
- Picking a location on a map (using the map.ir SDK) with automatic reverse-geocoding into a readable address (province, city, district)
- Viewing and deleting your own posts
- A public post page with an image gallery and the option to view the poster's phone number

### Admin panel
A simple admin panel for overseeing the system, with an overview of users and posts.

## Tech Stack

| Layer | Technology |
|---|---|
| Language & framework | Node.js, Express.js |
| Database | MongoDB (with Mongoose) |
| Authentication | JWT, httpOnly cookie |
| File uploads | Multer |
| View templating | EJS |
| Maps & geolocation | map.ir SDK |
| API documentation | Swagger |
| Input validation | class-validator / manual checks |

## Installation & Running

```bash
# install dependencies
npm install

# create the env file and fill in the required values
cp .env.example .env

# run the project
npm start
```

Once running, API documentation is available at `/swagger`.

## Required Environment Variables

The project needs a few environment variables set in `.env`:

- MongoDB connection string
- JWT signing secret
- Map service (map.ir) API key

## Project Structure

```
src/
├── modules/
│   ├── auth/       # authentication (OTP, JWT)
│   ├── user/       # user profile
│   ├── category/   # categories
│   ├── option/     # category-specific fields
│   └── post/       # posts (listings)
├── config/         # database and swagger config
└── common/         # shared utilities (errors, decorators, etc.)

views/
├── layouts/        # shared layouts (website, panel, auth)
└── pages/          # main pages for each section
```

## A note on the current state of the project

This project is still under active development. The backend and core APIs (authentication, categories, posts) are complete and working, but some parts of the UI (like fully wiring the login form to the backend, or the admin dashboard showing real data) are still in progress.
