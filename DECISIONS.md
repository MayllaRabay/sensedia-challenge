## Decision: Typography Strategy

**Context:**
The project required a clear and consistent typography system that ensures good readability and also allows differentiation of specific types of content.

**Options considered:**

- Use a single font for the entire application
- Use a monospace font for everything
- Combine a UI-focused font with a monospace font

**Decision:**
I chose to use Inter as the primary font due to its excellent readability and modern appearance in user interfaces. Additionally, I used JetBrains Mono for specific elements such as usernames or technical data, as it improves visual distinction and aligns well with structured content.

**Trade-offs:**

- (+) Improved readability and user experience
- (+) Clear distinction between regular content and technical data
- (+) Personal preference for JetBrains Mono in specific contexts
- (-) Slightly increased complexity in font management

---

## Decision: Design System Implementation

**Context:**
The challenge provided design guidelines including colors, spacing, typography, and visual patterns, which needed to be consistently applied across the application.

**Options considered:**

- Use default Tailwind styles
- Create custom CSS without a system
- Integrate the provided design tokens into Tailwind configuration

**Decision:**
I chose to integrate the design system directly into Tailwind by extending its configuration with custom tokens for colors, spacing, typography, border radius, and shadows. This approach ensures consistency while maintaining high development speed.

**Trade-offs:**

- (+) Consistent visual identity across the application
- (+) Faster development using utility classes
- (+) Easier maintenance and scalability
- (-) Initial setup effort to configure Tailwind properly

---

## Decision: Client-side Pagination

**Context:**
The table may contain a large number of users, requiring a strategy to handle performance and usability.

**Options considered:**

- Client-side pagination
- Server-side pagination
- Virtual scrolling

**Decision:**  
I implemented client-side pagination due to its simplicity and fast implementation for the scope of this challenge.

**Trade-offs:**

- (+) Easy to implement and maintain
- (-) Less efficient for very large datasets

---

## Decision: Data Aggregation Strategy

**Context:**
The API provides users, posts, and albums through separate endpoints, requiring aggregation on the frontend.

**Options considered:**

- Sequential requests
- Parallel requests using Promise.all

**Decision:**
I used `Promise.all` to fetch posts and albums in parallel for each user, reducing total loading time.

**Trade-offs:**

- (+) Improved performance with parallel requests
- (+) Better user experience
- (-) Increased number of API calls

---

## Decision: Mocking Missing Data

**Context:**
The API does not provide required fields such as cities and weekdays.

**Options considered:**

- Hardcode values in the UI
- Create a mock API endpoint

**Decision:**  
I created a mock endpoint using Next.js Route Handlers to simulate this data and assigned values to users in a deterministic way.

**Trade-offs:**

- (+) Keeps data logic separate from UI
- (+) Simulates real-world API behavior
- (+) Improves code organization
- (-) Adds a small layer of abstraction

---

## Decision: User Blocking Simulation

**Context:**  
The challenge requires a “block user” action, but the API does not provide a `blocked` field or endpoint.

**Options considered:**

- Simulate locally in the frontend
- Create a mock backend endpoint

**Decision:**
I simulated the blocking behavior on the frontend by managing a local state of blocked users and updating the UI accordingly.

**Trade-offs:**

- (+) Simple and fast to implement
- (+) Demonstrates understanding of business logic
- (-) Not persisted across sessions
