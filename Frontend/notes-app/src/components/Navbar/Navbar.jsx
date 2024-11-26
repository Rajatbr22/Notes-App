import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch, darkMode }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const handleSearch = () => {
        if (searchQuery) {
            onSearchNote(searchQuery);
        }
    };

    const onClearSearch = () => {
        setSearchQuery("");
        handleClearSearch();
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
        } transition-colors duration-200`}>
            {/* Desktop and Tablet Navigation */}
            <div className="hidden md:flex items-center justify-between px-6 py-2 drop-shadow">
                <h2 className={`text-xl font-medium ${
                    darkMode ? 'text-white' : 'text-black'
                }`}>Notes</h2>
                <div className="flex-1 max-w-xl mx-4">
                    <SearchBar
                        value={searchQuery}
                        onChange={({ target }) => {
                            setSearchQuery(target.value);
                        }}
                        handleSearch={handleSearch}
                        onClearSearch={onClearSearch}
                        darkMode={darkMode}
                    />
                </div>
                <ProfileInfo userInfo={userInfo} onLogout={onLogout} darkMode={darkMode} />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                <div className="flex items-center justify-between px-4 py-2 drop-shadow">
                    <h2 className={`text-lg font-medium ${
                        darkMode ? 'text-white' : 'text-black'
                    }`}>Notes</h2>
                    <button
                        onClick={toggleMenu}
                        className={`p-2 rounded-lg ${
                            darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        }`}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <HiX className="h-6 w-6" />
                        ) : (
                            <HiMenu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={`px-4 py-2 ${
                        darkMode ? 'bg-gray-800' : 'bg-white'
                    } shadow-lg`}>
                        <div className="mb-4">
                            <SearchBar
                                value={searchQuery}
                                onChange={({ target }) => {
                                    setSearchQuery(target.value);
                                }}
                                handleSearch={handleSearch}
                                onClearSearch={onClearSearch}
                                darkMode={darkMode}
                            />
                        </div>
                        <div className="py-2">
                            <ProfileInfo 
                                userInfo={userInfo} 
                                onLogout={onLogout} 
                                darkMode={darkMode}
                                isMobile={true}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;