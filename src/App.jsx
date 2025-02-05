import React, { useState, useEffect, useRef } from "react";
import { UserCircle2, PlayCircle, Sun, Moon } from "lucide-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const videos = [
  {
    id: 1,
    title: "Learn React in 10 Minutes",
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
    channel: "Code Academy",
    views: "1M views",
    uploaded: "2 days ago",
  },
  {
    id: 2,
    title: "JavaScript Tips and Tricks",
    thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
    channel: "JS Mastery",
    views: "500K views",
    uploaded: "1 week ago",
  },
  {
    id: 3,
    title: "CSS for Beginners",
    thumbnail: "https://i.ytimg.com/vi/yfoY53QXEnI/maxresdefault.jpg",
    channel: "Design Hub",
    views: "750K views",
    uploaded: "3 days ago",
  },
  {
    id: 4,
    title: "Mastering Node.js",
    thumbnail: "https://i.ytimg.com/vi/TlB_eWDSMt4/maxresdefault.jpg",
    channel: "Node Ninja",
    views: "600K views",
    uploaded: "5 days ago",
  },
  {
    id: 5,
    title: "Python Crash Course",
    thumbnail: "https://i.ytimg.com/vi/JJmcL1N2KQs/maxresdefault.jpg",
    channel: "Py Guru",
    views: "900K views",
    uploaded: "1 month ago",
  },
  {
    id: 6,
    title: "Understanding APIs",
    thumbnail: "https://i.ytimg.com/vi/GZvSYJDk-us/maxresdefault.jpg",
    channel: "API Expert",
    views: "300K views",
    uploaded: "2 weeks ago",
  },
];

function YouTubeClone() {
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#1a202c" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#1a202c";
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh" }}>
      <header
        style={{
          backgroundColor: darkMode ? "#2d3748" : "#f7fafc",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1366px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 auto",
            gap: "14px",
            paddingLeft: "16px",
          }}
        >
          <h1
            style={{ color: "#e53e3e", fontWeight: "bold", fontSize: "24px" }}
          >
            MyTube
          </h1>
          <input
            type="text"
            placeholder="Search"
            style={{
              border: "1px solid",
              padding: "8px",
              borderRadius: "8px",
              width: "300px",
              outline: "none",
              backgroundColor: darkMode ? "#4a5568" : "#ffffff",
              color: darkMode ? "#ffffff" : "#1a202c",
              borderColor: darkMode ? "#718096" : "#e2e8f0",
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                style={{ display: "none" }}
              />
              <div
                style={{
                  width: "40px",
                  height: "20px",
                  backgroundColor: darkMode ? "#4a5568" : "#e2e8f0",
                  borderRadius: "9999px",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#ffffff",
                    borderRadius: "50%",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
                    transform: darkMode ? "translateX(20px)" : "translateX(0)",
                    transition: "transform 0.3s",
                  }}
                ></div>
              </div>
            </label>
            <button
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
              }}
              style={{
                outline: "none",
                background: "none",
                border: "none",
              }}
            >
              <UserCircle2
                size={32}
                style={{ color: darkMode ? "#ffffff" : "#1a202c" }}
              />
            </button>
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                style={{
                  position: "absolute",
                  top: "10px",
                  marginTop: "48px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  padding: "16px",
                  backgroundColor: darkMode ? "#4a5568" : "#ffffff",
                }}
              >
                <button
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "8px",
                    borderRadius: "4px",
                    backgroundColor: darkMode ? "#4a5568" : "#ffffff",
                    color: darkMode ? "#ffffff" : "#1a202c",
                  }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "8px",
                    borderRadius: "4px",
                    backgroundColor: darkMode ? "#4a5568" : "#ffffff",
                    color: darkMode ? "#ffffff" : "#1a202c",
                  }}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main
        style={{
          padding: "16px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          maxWidth: "1366px",
          margin: "0 auto",
          gap: "24px",
        }}
      >
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            style={{
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: darkMode ? "#2d3748" : "#ffffff",
            }}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "16px" }}>
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                <PlayCircle color="#e53e3e" style={{ marginRight: "8px" }} />
                {video.title}
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: darkMode ? "#a0aec0" : "#4a5568",
                }}
              >
                {video.channel}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: darkMode ? "#a0aec0" : "#4a5568",
                }}
              >
                {video.views} • {video.uploaded}
              </p>
            </div>
          </div>
        ))}
        {filteredVideos.length === 0 && (
          <p
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            No videos found.
          </p>
        )}
      </main>
    </div>
  );
}

function LoginPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#1a202c" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#1a202c";
  }, [darkMode]);

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with Email: ${email}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "32px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: darkMode ? "#2d3748" : "#ffffff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "24px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Login to MyTube
        </h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid",
                outline: "none",
                backgroundColor: darkMode ? "#4a5568" : "#ffffff",
                color: darkMode ? "#ffffff" : "#1a202c",
                borderColor: darkMode ? "#718096" : "#e2e8f0",
              }}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                boxSizing: "border-box",
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid",
                outline: "none",
                backgroundColor: darkMode ? "#4a5568" : "#ffffff",
                color: darkMode ? "#ffffff" : "#1a202c",
                borderColor: darkMode ? "#718096" : "#e2e8f0",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#e53e3e",
              color: "#ffffff",
              fontWeight: "bold",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
        <div style={{ marginTop: "16px", textAlign: "center" }}>
          <span>Don't have an account?</span>
          <button
            style={{
              marginLeft: "8px",
              color: "#e53e3e",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
        <div style={{ marginTop: "16px", textAlign: "center" }}>
          <button
            style={{
              color: "#e53e3e",
              background: "none",
              border: "1px solid #e53e3e",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => navigate("/")}
          >
            Back to MyTube
          </button>
        </div>
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              style={{ display: "none" }}
            />
            <div
              style={{
                width: "40px",
                height: "20px",
                backgroundColor: darkMode ? "#4a5568" : "#e2e8f0",
                borderRadius: "9999px",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#ffffff",
                  borderRadius: "50%",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
                  transform: darkMode ? "translateX(20px)" : "translateX(0)",
                  transition: "transform 0.3s",
                }}
              ></div>
            </div>
            <span style={{ marginLeft: "8px" }}>
              {darkMode ? "Dark Mode" : "Light Mode"}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

function SignUpPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#1a202c" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#1a202c";
  }, [darkMode]);

  const handleSignUp = (e) => {
    e.preventDefault();
    alert(`Account created for ${username} with Email: ${email}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "32px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: darkMode ? "#2d3748" : "#ffffff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "24px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Sign Up for MyTube
        </h2>
        <form onSubmit={handleSignUp}>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                boxSizing: "border-box",
                border: "1px solid",
                outline: "none",
                backgroundColor: darkMode ? "#4a5568" : "#ffffff",
                color: darkMode ? "#ffffff" : "#1a202c",
                borderColor: darkMode ? "#718096" : "#e2e8f0",
              }}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                boxSizing: "border-box",
                border: "1px solid",
                outline: "none",
                backgroundColor: darkMode ? "#4a5568" : "#ffffff",
                color: darkMode ? "#ffffff" : "#1a202c",
                borderColor: darkMode ? "#718096" : "#e2e8f0",
              }}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                boxSizing: "border-box",
                borderRadius: "8px",
                border: "1px solid",
                outline: "none",
                backgroundColor: darkMode ? "#4a5568" : "#ffffff",
                color: darkMode ? "#ffffff" : "#1a202c",
                borderColor: darkMode ? "#718096" : "#e2e8f0",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#e53e3e",
              color: "#ffffff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>
        <div style={{ marginTop: "16px", textAlign: "center" }}>
          <span>Already have an account?</span>
          <button
            style={{
              marginLeft: "8px",
              color: "#e53e3e",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
        <div style={{ marginTop: "16px", textAlign: "center" }}>
          <button
            style={{
              color: "#e53e3e",
              background: "none",
              border: "1px solid #e53e3e",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => navigate("/")}
          >
            Back to MyTube
          </button>
        </div>
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              style={{ display: "none" }}
            />
            <div
              style={{
                width: "40px",
                height: "20px",
                backgroundColor: darkMode ? "#4a5568" : "#e2e8f0",
                borderRadius: "9999px",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#ffffff",
                  borderRadius: "50%",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
                  transform: darkMode ? "translateX(20px)" : "translateX(0)",
                  transition: "transform 0.3s",
                }}
              ></div>
            </div>
            <span style={{ marginLeft: "8px" }}>
              {darkMode ? "Dark Mode" : "Light Mode"}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<YouTubeClone />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}
