import React from "react";


const Form = (props) => {
  const [formData, setFormData] = React.useState({
    searchterm: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.moviesearch(formData.searchterm);
  };

  return (
    <div>
        <h1>MOVIE FINDER</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
            name="searchterm"
            onChange={handleChange}
            value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
