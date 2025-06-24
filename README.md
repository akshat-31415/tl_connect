## Pages Implemented

### 1. Login Page

* **Functionality:** Allows users to select a mock role (Core, Lead, Member, Student) from a dropdown.
* **Redirection:** Redirects to the respective dashboard based on the selected role (no real authentication).

### 2. Dashboard Page

* **Functionality:** Displays a summary of information relevant to the logged-in role.
* **Widgets:** Includes placeholders for upcoming workshops, assigned tasks, class join links, and recent announcements.
* **Navigation:** Buttons within widgets link directly to their respective detail pages.

### 3. Workshops Page

* **Functionality:** Shows a list of upcoming and past workshops.
* **Filters:** Allows filtering workshops by type (All, Upcoming, Past) and domain.
* **Card Details:** Each workshop card displays Title, Domain, Date, and a "Register" (for upcoming) or "View Details" (for past) button.

### 4. Summer School Page

* **Functionality:** A class tracker page designed for summer school.
* **Content:** Displays a table of lectures, Google Meet links, and links to assignment resources.
* **Data Structure:** Lecture data is managed externally and imported.

### 5. Tasks Page

* **Functionality:** Provides a role-based view of assigned tasks.
* **Grouping:** Tasks are grouped by their domain.
* **Card Details:** Each task card shows Title, Domain, Status (Pending / In Progress / Done) with color-coded backgrounds, and Task assignment date.
* **Filters:** Allows filtering tasks by domain and status.

### 6. Members Page

* **Functionality:** Lists all lab members.
* **Grouping:** Members are grouped by their domain.
* **Entry Details:** Each entry shows Name, Role, and Domain.
* **Action:** Includes a placeholder button for "Task Assignment".

### 7. Announcements Page

* **Functionality:** A notice board-style page displaying all updates.
* **Sorting:** Announcements are sorted by date (most recent first).
* **Tags:** Features color-coded tags for importance (Important, Info, Critical).

## Setup Instructions

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd tl-connect-frontend
    ```

2.  **Install dependencies:**
    If you're using npm:
    ```bash
    npm install
    ```

3.  **Install and configure Tailwind CSS (if not already done):**
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
    Update `tailwind.config.js` and `globals.css` as per Tailwind's Next.js installation guide to include your component paths.

4.  **Run the development server:**
    If you're using npm:
    ```bash
    npm run dev
    ```
    The application will now be running on `http://localhost:3000` (or another port if 3000 is in use).

## Technologies Used

* **React:** 
* **Next.js:** 
* **Tailwind CSS:** 






