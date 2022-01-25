import { Component } from "react";
import DishDetail from "./DishdetailComponent";
import Menu from "./MenuComponent";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';



const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders,
    }
}

class Main extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={
            this.props.promotions.filter((promotion) => promotion.featured)[0]
          }
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <>
          <DishDetail
            dish={
              this.props.dishes.filter(
                (dish) => dish.id === parseInt(match.params.dishId, 10)
              )[0]
            }
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          ></DishDetail>
        </>
      );
    };

    const MenuPage = () => {
      return (
        <>
          <Menu dishes={this.props.dishes} />
        </>
      );
    };

    const AboutPage = () => {
      return (
        <>
          <About leaders={this.props.leaders} />
        </>
      )
    }

    return (
      <>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/aboutus" component={AboutPage} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
