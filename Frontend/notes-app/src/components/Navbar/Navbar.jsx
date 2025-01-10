import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleTheme } from "../../theme/themeSlice";
// import { FaMoon, FaSun } from "react-icons/fa6";


const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    // const dispatch = useDispatch();

    // const { theme } = useSelector((state) => state.theme)

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
        <nav className="bg-white text-black transition-colors duration-200">
            {/* Desktop and Tablet Navigation */}
            <div className="hidden md:flex items-center justify-between px-6 py-2 drop-shadow">
                <h2 className="text-xl font-medium text-black">Notes</h2>
                <div className="flex-1 max-w-xl mx-4">
                    <SearchBar
                        value={searchQuery}
                        onChange={({ target }) => {
                            setSearchQuery(target.value);
                        }}
                        handleSearch={handleSearch}
                        onClearSearch={onClearSearch}
                    />
                </div>
                {/* <div>
                    <button className="w-12 h-12 ml-96" onClick={() => dispatch(toggleTheme())}>
                        {
                            theme === 'light' ? <FaSun/> : <FaMoon/>
                        }
                    </button>
                </div> */}
                <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                <div className="flex items-center justify-between px-4 py-2 drop-shadow">
                    <h2 className="text-lg font-medium text-black">Notes</h2>
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-lg hover:bg-gray-100"
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
                    <div className="px-4 py-2 bg-white shadow-lg">
                        <div className="mb-4">
                            <SearchBar
                                value={searchQuery}
                                onChange={({ target }) => {
                                    setSearchQuery(target.value);
                                }}
                                handleSearch={handleSearch}
                                onClearSearch={onClearSearch}
                            />
                        </div>
                        <div className="py-2">
                            <ProfileInfo 
                                userInfo={userInfo} 
                                onLogout={onLogout} 
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
