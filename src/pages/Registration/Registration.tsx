import { MainLayout } from "../../components/Layout"
import SignIn from "./Signin"
import Signup from "./Signup"

function Registration() {
    return (
        <MainLayout>
            <div className="container mx-auto sm:px-5 md:px-5">
                <div className="grid gap-10 mb-6 sm:grid-cols-2 md:grid-cols-3 h-full">
                    <SignIn />
                    <Signup />
                </div>
            </div>
        </MainLayout>
    )
}

export default Registration
