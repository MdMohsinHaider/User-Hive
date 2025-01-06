

const Signup = () => {
    return (
        <div>
            <h1>Signup</h1>
            <form>
                <div>
                    <label htmlFor="username">username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter username"
                    />
                </div>

                <div>
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                    />
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter password"
                    />
                </div>

                <div>
                    <label htmlFor="phoneno">phoneno</label>
                    <input
                        type="tel"
                        id="phoneno"
                        name="phoneno"
                        placeholder="Enter phoneno"
                        min={10}
                        max={10}
                    />
                </div>

                <div>
                    <label htmlFor="gender">gender</label>
                    <label htmlFor="male">male</label>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="female">female</label>
                    <input type="radio" id="female" name="gender" value="female" />
                </div>

                <div>
                    <label htmlFor="dob">dob</label>
                    <input type="date" id="dob" />
                </div>

                <div>
                    <input type="checkbox" />
                    <span>agree & continue</span>
                </div>

                <div>
                    <button type="submit">signup</button>
                </div>
            </form>
        </div>
    )
}

export default Signup