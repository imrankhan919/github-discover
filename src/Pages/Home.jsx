import UserResult from "../components/users/UserResult"
import UserSearch from "../components/users/UserSearch"

function Home() {
    return (
        <div className="container mx-auto">
               <UserSearch/>
                <UserResult/>
        </div>
    )
}

export default Home
