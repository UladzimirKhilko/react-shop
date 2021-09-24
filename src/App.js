import { Heder } from './components/Header';
import { Footer } from './components/Footer';
import { Shop } from './components/Shop';

import { ContextProvider } from './context';

function App() {
    return (
        <>
            <Heder />
            <ContextProvider>
                <Shop />
            </ContextProvider>
            <Footer />
        </>
    );
}

export default App;
