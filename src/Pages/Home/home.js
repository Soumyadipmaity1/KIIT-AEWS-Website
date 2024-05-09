import Footer from "../../Components/Footer/footer"
import Navbar2 from "../../Components/Navbar2/navbar2"

export default function Home() {
    return (
        <div className="xl:h-screen  justify-center items-center bg-home">
            <Navbar2 />
            <h1 className="h-screen" >Home Page</h1>
            <Footer />
        </div>
    )
}