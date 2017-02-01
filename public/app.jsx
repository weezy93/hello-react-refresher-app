var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
          name: 'React',
          message: 'default message'
        }
    },
    getInitialState: function () {
        return {
          name: this.props.name
        }
    },
    onButtonClick: function (event) {
        event.preventDefault();

        var nameRef = this.refs.name;

        var name = nameRef.value;
        nameRef.value = "";

        if (typeof name === 'string' && name.length > 0) {
            this.setState({
              name: name
            });
        }
    },
    render: function () {
        var name = this.state.name;
        var message = this.props.message;
        return (
            <div>
              <h1>Hellooooo {name}!</h1>
              <p>{message}</p>

            <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name" />
                <button>Set Name</button>
            </form>
            </div>
        );
    }
});

var firstName = "Louisa";
var message = "This is a message prop";


ReactDOM.render(
    <Greeter
      name={firstName}
      message={message}
    />,
    document.getElementById('app')
);














// null in anon. function is attribute object like id or class etc.
// return React.createElement(
//   'h1',
//   null,
//   'Hello React.createElement'
// );

//PROPS
  // passed as you initialize

  // component can update it's own state, not props
  // is my component updating the value, then state
