import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Login from "./screens/Login";
import Register from "./screens/RegisterScreen";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

function App() {
    const [sideToggle, setSideToggle] = useState(false);

    return (
        <div className="app">
            <Router>
                {/* Navbar */}
                <Navbar click={() => setSideToggle(true)} />
                {/* SideDrawer */}
                <SideDrawer
                    show={sideToggle}
                    click={() => setSideToggle(false)}
                />
                {/* Backdrop */}
                <Backdrop
                    show={sideToggle}
                    click={() => setSideToggle(false)}
                />
                <main>
                    <Switch>
                        <Route exact path="/login" component={Login} />

                        <Route
                            exact
                            path="/register"
                            component={Register}
                        />

                        <Route exact path="/" component={HomeScreen} />
                        <Route
                            exact
                            path="/product/:id"
                            component={ProductScreen}
                        />
                        <Route exact path="/cart" component={CartScreen} />
                    </Switch>
                </main>
            </Router>
        </div>
    );
}

export default App;
