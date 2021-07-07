import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponet from "./Components/HeaderComponent/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/SideNavigationBar/Sidebar";
import AddOrganization from "./Components/Organization/AddOrganization";
import AddPerson from "./Components/Person/AddPerson";
import ContentMain from "./Components/MainContent/ContentMain";
import Search from "./Components/Search/Search";
import ViewOrganization from "./Components/Organization/ViewOrganization";
import ViewPerson from "./Components/Person/ViewPerson";
import EditOrganization from "./Components/Organization/EditOrganization";


function App() {
  return (
    <Router>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <HeaderComponet />
        {/* <div className="ui-theme-settings">
          <button
            type="button"
            id="TooltipDemo"
            className="btn-open-options btn btn-warning"
          >
            <i className="fa fa-cog fa-w-16 fa-spin fa-2x" />
          </button>
        </div> */}

        <div className="app-main">
          <Sidebar />
          <div className="app-main__outer">
            {/* <ContentMain/> */}
          <Switch>
            <Route path="/" exact component={ContentMain} /> 
            <Route path="/Search" component={Search} />
            <Route path="/AddOrganization" component={AddOrganization} />
            <Route path="/ViewOrganization" component={ViewOrganization} />
            <Route path="/EditOrganization" component={EditOrganization} />
            <Route path="/AddPerson" component={AddPerson} />
            <Route path="/ViewPerson" component={ViewPerson} />
          </Switch>

          </div>
        </div>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
