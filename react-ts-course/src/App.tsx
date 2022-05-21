import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import {Fragment} from "react";
import UsrItemPage from "./components/UsrItemPage";

function App() {
    return (
        <BrowserRouter>
                <Fragment>
                    <div>
                        <NavLink to="/users">Users</NavLink>
                        <br/>
                        <NavLink to="/todos">Todos</NavLink>
                    </div>
                    <Routes>
                        <Route path={'/users'} element={<UserPage/>} />
                        <Route path={'/todos'} element={<TodosPage/>} />
                        <Route path={'/user/:id'} element={<UsrItemPage/>} />

                    </Routes>
                </Fragment>
        </BrowserRouter>
        // <div>
        //     <EventsExample/>
        //     <Card width='200px'
        //           height='200px'
        //           variant={CardVariant.outlined}
        //     >
        //         <button>Button</button>
        //     </Card>
        //
        //
        // </div>
    );
}

export default App;
