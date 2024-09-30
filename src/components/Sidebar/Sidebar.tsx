import "./Sidebar.scss"
import ThemeSection from './ThemeSection/ThemeSection';

export default function Sidebar () {
    return (
        <div className = "sidebar">
            <div className ="sidebar-theme-switch">
                <ThemeSection aria-label="Toggle Theme"/>
            </div>
        </div>
    )
}