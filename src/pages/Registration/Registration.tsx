import SignIn from "./Signin"
import Signup from "./Signup"

function Registration() {
    return (
        <div className="container mx-auto px-14">
            <div className="grid gap-10 mb-6 md:grid-cols-3">
                <SignIn />
                <Signup />
            </div>
        </div>
    )
}

export default Registration
