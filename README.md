# Fun Activities

## Introduction

The Fun Activities is a mobile application designed to help users discover new and interesting activities when they feel bored. It utilizes the BoredAPI to fetch random activities and allows users to filter activities based on type. Users can also favorite activities they like and view them later.

## Features

- **Discover Random Activities**: Upon launching the app, users are presented with a random activity they can undertake.
- **Activity Details**: Display basic information about the activity, such as description, type, and participants.
- **Favorite Activities**: Users can favorite activities.
- **Activity Filters**: Filter activities based on type.
- **Local Storage**: Favorites are stored locally on the device using Redux and AsyncStorage.

## Technologies Used

- **React Native**: For building the mobile application.
- **Redux Toolkit**: For state management.
- **AsyncStorage**: For local storage of favorite activities.
- **BoredAPI**: Public API for fetching activities.

## Setup

To run this project, install it locally using npm:

```bash
git clone https://github.com/sandaun/FunActivities.git
cd FunActivities
npm install
npm start
```

## Usage

- **Discover Activities**: Open the app to see a random activity.
- **Favorite an Activity**: Click on the star icon to add an activity to your favorites.
- **View Favorites**: Navigate to the favorites tab to view all your favorited activities.
- **Filter Activities**: Use the filter option to find activities based on type.
