debounceAndThrottle.md
2025-02-09
🚀 Where to Use Throttling and Debouncing?
✅ Use Throttling When: (Do try it:) 1. Scroll events (Only trigger function once every X ms while scrolling). 2. Window resize (Prevent continuous function execution on resize). 3. Button clicks (Limit how often a
button can be clicked). 4. API requests (Limit the number of API calls in a given time). 5. Mouse move
events (Track mouse position but not too frequently).
✅ Use Debouncing When: (Do try it:) 1. Search input field (Wait until the user stops typing before running
search). 2. Form validation (Only validate after the user stops typing). 3. Autosave in a text editor (Save only
after a pause). 4. Resizing event (Wait until user stops resizing before recalculating layout). 5. Click events
(Ignore accidental rapid clicks, like a “Submit” button).
💡 Practice Questions:
🔹 Throttling Questions 1. Create a throttled function that tracks the userʼs mouse movement and logs the
coordinates, but updates only once every 500ms. 2. Build a scroll event listener that logs "User is scrolling"
but only once every second, even if scrolling continuously. 3. Make a button that fetches data from an API,
but can be clicked only once every 3 seconds to avoid excessive API calls. 4. Throttle window resize event
so that when the user resizes the window, a function runs at most once every 2 seconds. 5. Limit keypress
events in a text field so that it logs the pressed key only every 700ms, even if the user keeps typing.
🔹 Debouncing Questions 1. Create a debounced search bar that only fetches search results 500ms after
the user stops typing. 2. Build a form validation function that validates an email input only after the user
stops typing for 800ms. 3. Make a button that updates a counter, but if clicked multiple times quickly, only
the last click after 1 second is counted. 4. Debounce window resizing so that after the user stops resizing
the window for 1.5 seconds, a function logs "Resizing complete!". 5. Create an autosave function for a text
area that saves the content only after the user stops typing for 2 seconds.
📝 Bonus Challenge
Mix throttling and debouncing: • Create a real-time typing indicator for a chat app: • Throttle function to
send "User is typing..." every 1 second. • Debounce function to send "User stopped typing" after 2 seconds
of inactivity.
1 / 1
