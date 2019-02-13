import React from "react";
import { Link } from 'react-router-dom';
const MoviesList = () => {
  return (
    <div class="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-6 ">
        <Link to="/detail/Antman" style={{color:'black',textDecoration:'none'}}> 
          <div className="card">
            <img
              className="moviePosterImg "
              src="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">Ant-Man</h4>
              <p className="text-center"> Year: 2016 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/justiceLeague"style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-primary text-center">
            <img
              className="moviePosterImg "
              src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88207/90748/Justice-League-Advance-Style-Poster-buy-original-movie-posters-at-starstills__25567.1494429421.jpg?c=2?imbypass=on"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">Justice League</h4>
              <p className="text-center"> Year: 2017 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/whiteHouseDown" style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-success text-center">
            <img
              className="moviePosterImg  "
              src="http://picpusdan8.free.fr/W/white%20house%20downa.jpg"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center ">White House Down</h4>
              <p className="text-center"> Year: 2016 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star " />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/wonderWomen"style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-info text-center">
            <img
              className="moviePosterImg"
              src="https://i.pinimg.com/originals/31/95/8d/31958d3dd38ca82ad9a64dd3edacfd2f.jpg"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">Wonder Woman</h4>
              <p className="text-center"> Year: 2016 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star  checked" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/oceanEight" style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-info text-center">
            <img
              className="moviePosterImg "
              src="https://cdn1.thr.com/sites/default/files/2017/12/sarah_paulson_screen_shot_-_every_con_has_its_pros-sq_2017.jpg"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">Oceans Eleven</h4>
              <p className="text-center"> Year: 2018 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star  checked" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/HacksawRidge" style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-info text-center">
            <img
              className="moviePosterImg"
              src="https://lasallefalconer.com/wp-content/uploads/2017/04/share-img-900x473.jpg"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">Hacksaw Ridge</h4>
              <p className="text-center"> Year: 2018 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star  checked" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/interview" style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-info text-center">
            <img
              className="moviePosterImg "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZsMTKcFXNzESCQoJfC4zcwMdgft0Y2sxu8QsrIQg7TZOAcN0"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">The Interview</h4>
              <p className="text-center"> Year: 2016 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star  " />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>

        <div className="col-lg-3 col-md-3  col-6">
        <Link to="/detail/johnWick" style={{color:'black',textDecoration:'none'}}> 
          <div className="card card-inverse card-info text-center">
            <img
              className="moviePosterImg "
              src="https://image.al.com/home/bama-media/width620/img/entertainment_impact/photo/jw2jpg-3fd0397399ecd913.jpg"
              alt="Card image cap"
            />
            <div className="card-block">
              <h4 className="card-title text-center">John Wick</h4>
              <p className="text-center"> Year: 2016 </p>
              <p className="text-center">
                {" "}
                rating: <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star checked" />
                <span class="fa fa-star  checked" />
                <span class="fa fa-star" />
              </p>
            </div>
          </div>
          </Link>
        </div>

      </div>
    </div>
  );
};
export default MoviesList;
