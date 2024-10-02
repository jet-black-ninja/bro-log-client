import React, { useMemo } from 'react';
import ClearSearch from "./ClearSearch/ClearSearch";
import ReadRandomArticle from "./ReadRandomArticle/ReadRandomArticle";
import SearchSection from "./SearchSection/SearchSection";
import "./Sidebar.scss"
import SocialLinks from "./SocialLinks/SocialLinks";
import TagsSection from "./TagsSection/TagsSection";
import ThemeSection from './ThemeSection/ThemeSection';

// Memoize the SearchSection component to prevent unnecessary re-renders
const MemoizedSearchSection = React.memo(SearchSection);

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <ClearSearch />
            </div>
            <div className="sidebar-section">
                <MemoizedSearchSection />
            </div>
            <div className="sidebar-section">
                <TagsSection />
            </div>
            <div className="sidebar-section">
                <ReadRandomArticle />
            </div>
            <div className="sidebar-theme-switch">
                <ThemeSection aria-label="Toggle Theme" />
            </div>
            <div className="sidebar-social-links">
                <SocialLinks />
            </div>
        </div>
    )
}