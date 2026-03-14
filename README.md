#📸 Photo Gallery

A responsive Photo Gallery Web Application built with React, Vite, and Tailwind CSS.
The application fetches images from a public API and displays them in a responsive gallery layout. Users can search photos by author and mark photos as favourites.

This project was created as part of a Frontend React Internship Pre-Screening Assignment.

##🚀 Features

📡 Fetch photos from a public API

🔍 Search photos by author name

❤️ Mark photos as favourites

💾 Persist favourites using localStorage

📱 Fully responsive gallery layout

#🛠️ Tech Stack
##Frontend

React

Vite

Tailwind CSS

React Hooks Used

useState

useEffect

useReducer

useMemo

useCallback

#📂 Project Structure
src
│
├── components
│   ├── Gallery.jsx
│   ├── PhotoCard.jsx
│   ├── SearchBar.jsx
│   └── Spinner.jsx
│
├── hooks
│   └── useFetchPhotos.js
│
├── reducer
│   └── favouritesReducer.js
│
├── App.jsx
├── main.jsx
└── index.css


#⚙️ Key Implementation Details
##1️⃣ Custom Hook – useFetchPhotos

A custom React hook is used to fetch data from the API.

The hook manages:

API request

loading state

error state

This separates data fetching logic from UI components, improving reusability.

##2️⃣ Search Functionality

The search bar filters photos based on the author name.

Filtering is optimized using:

useMemo

This ensures filtering logic only runs when necessary.

##3️⃣ Favourites Feature

Users can mark photos as favourites using a heart icon.

State management for favourites is implemented using:

useReducer

Reducer action:

TOGGLE_FAVOURITE

The reducer:

adds a photo to favourites

removes it if already favourited

Favourites are saved in:

localStorage

so they persist even after refreshing the page.

##4️⃣ Performance Optimization
useCallback

Used to memoize event handler functions to prevent unnecessary re-renders.

useMemo

Used to memoize filtered photo results for better performance.

#📱 Responsive Design

The gallery layout adapts to different screen sizes.

Device	Columns
Mobile	1
Tablet	2
Desktop	3–4

This ensures a good user experience across devices.

#▶️ Running the Project
##1️⃣ Clone the repository
git clone https://github.com/JONUSharma/photo-gallery.git
##2️⃣ Navigate to the project folder
cd photo-gallery
##3️⃣ Install dependencies
npm install
##4️⃣ Start development server
npm run dev
##5️⃣ Open in browser
http://localhost:5173
