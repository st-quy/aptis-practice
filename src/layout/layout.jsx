import Header from '../pages/About/components/Header';
import Footer from '../pages/About/components/Footer';

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main style={{ minHeight: 'calc(100vh - 56px - 220px)' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
