(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(31),r=n(32),i=n(35),c=n(34),o=n(0),l=n.n(o),u=n(33),s=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={reviews:[]},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;u.a.fetchMovieReviews(this.props.match.params.movieId).then((function(t){return e.setState({reviews:t})}))}},{key:"render",value:function(){var e=this.state.reviews;return l.a.createElement(l.a.Fragment,null,e.length>0?l.a.createElement("ul",null,e.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Author: ",e.author),l.a.createElement("p",null,e.content)))}))):l.a.createElement("p",null,"Oops, there is no reviews for this movie"))}}]),n}(o.Component)}}]);
//# sourceMappingURL=ReviewsSection.0a66b3f1.chunk.js.map