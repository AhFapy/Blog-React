import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
        <Navbar />
        <main id="main-home">
            <div id="categories">
                <h1>Categories</h1>
            </div>
            <div id="home-content">
                <h1>Content</h1>
            </div>
        </main>
        <Footer />
    </>
  )
}
