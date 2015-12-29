var Greeter = React.createClass({
    getInitialState : function(){
        return {message : '[default message]'};
    },
    onGreet : function(){
          console.log("Greet button is clicked");
          var name = this.refs.txtName.value;
          var greetMsg = 'Hi ' + name + ', Have a nice day!';
          this.setState({message : greetMsg});
        },
    render : function(){
        console.log('re rendering');
        return (
          <div>
              <input type="text" ref="txtName" />
              <input type="button" value="Greet" onClick={this.onGreet} id="btnGreet"/>
              <div>{this.state.message}</div>
          </div>
        );
    }
});

ReactDOM.render(
    <Greeter message="Welcome to react!"></Greeter>,
    document.getElementById("content")
);