# User Hive

User Hive is a web application developed using [Vite](https://vitejs.dev/) as the build tool and [React](https://reactjs.org/) for building user interfaces. The application features a landing page with options for user sign-in, registration, and navigation through multiple pages, including Home, About, Services, Skills, and Contacts. Logged-in users can access additional functionality like viewing their profile and logging out from the navbar.

## Features

- **Landing Page**: Includes options for signing in and registering.
- **Multi-page Navigation**: Home, About, Services, Skills, and Contacts pages.
- **User Authentication**: Sign-in and registration functionality.
- **Logged-in User Features**: Logout and profile management accessible from the navbar.
- **Built with Vite**: Fast development and build process.

## Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn

## Getting Started

### 1. Clone the repository

```bash
https://github.com/MdMohsinHaider/User-Hive.git
cd user-hive
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or using Yarn:

```bash
yarn install
```

### 3. Start the development server

```bash
npm run dev
```

Or with Yarn:

```bash
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

## Project Structure

```
.
├── public            # Static assets
├── src
│   ├── components    # Reusable React components
│   ├── pages         # Page components for routing
│   ├── App.jsx       # Main App component
│   ├── main.jsx      # Entry point
│   ├── hooks         # Custom hooks for state management or utilities
│   └── styles        # CSS/SCSS files
├── package.json      # Project dependencies and scripts
└── vite.config.js    # Vite configuration
```

## Key Components

### Navbar

The navbar includes links for navigation, user authentication (Sign-in/Register), and logged-in user options like Profile and Logout. Example implementation:

```javascript
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/services">Services</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/contacts">Contacts</Link>
    {isLoggedIn ? (
      <>
        <Link to="/profile">Profile</Link>
        <button onClick={handleLogout}>Logout</button>
      </>
    ) : (
      <>
        <Link to="/signin">Sign In</Link>
        <Link to="/register">Register</Link>
      </>
    )}
  </nav>
);

export default Navbar;
```

### Routing

Routes are managed using React Router. Example configuration:

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Skills from './pages/Skills';
import Contacts from './pages/Contacts';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Profile from './pages/Profile';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
```

## Scripts

- `dev`: Starts the development server
- `build`: Builds the project for production
- `preview`: Serves the production build for preview
- `lint`: Runs ESLint for code quality

## Dependencies

The project uses the following dependencies:

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.1.1",
  "vite": "^6.0.5"
}
```

## Deployment

To deploy the app:

1. Build the project:

   ```bash
   npm run build
   ```

2. Upload the contents of the `dist` folder to a static hosting provider like [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [GitHub Pages](https://pages.github.com/).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Happy coding! 🚀
