import React from 'react';




function Title(props) {

  return (

    <div class="container">
      <div class="custom-title px-3 py-3 pt-md-5 pb-md-0 mx-auto text-center">
        <h1 class="display-4">{props.title}</h1>
        <p class="lead">{props.subtitle}</p>
        <hr class="my-4" />
      </div>
    </div>

  );
}

export default Title;