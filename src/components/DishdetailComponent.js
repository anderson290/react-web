import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const Comment = ({ comments, dish }) => {
  if (comments != null && dish != null) {
    return (
      <>
        <h4>Comments</h4>
        {comments.map((item) => {
          return (
            <ul className="list-unstyled" key={dish.id}>
              <li>{item.comment}</li>
              <li>--{item.name}</li>
            </ul>
          );
        })}
      </>
    );
  } else {
    return <></>;
  }
};

const DishDetailItem = ({ dish }) => {
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
};

const DishDetail = (props) => {
  const dish = props.dish;
  const comments = props.comments;
  console.log(comments);
  if (dish) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h2>{dish.name}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <DishDetailItem dish={dish}></DishDetailItem>
          </div>
          <div className="col-12 col-md-5 m-1">
            <Comment dish={dish} comments={comments}></Comment>
          </div>
        </div>
      </div>
    );
  } else {
    return <> </>;
  }
};

export default DishDetail;
