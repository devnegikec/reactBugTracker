var Greeter = React.createClass({
    getInitialState : function(){
        return {
            itemOne : '',
            itemTwo : '',
            selectValue: 'add'
            };
    },
    calculate : function(){
          console.dir("button is clicked", this.refs.action);
          var result, number1, number2; 
          number1 = parseInt(this.refs.itemOne.value);
          number2 = parseInt(this.refs.itemTwo.value);
          if(this.state.selectValue === 'add'){
            result = number1 + number2;
          }else if(this.state.selectValue === 'sub'){
            result = number1 - number2;
          }
          this.setState({message : result});
        },
   handleChange:function(e){
       console.log(e.target.value);
    this.setState({selectValue:e.target.value});
    this.calculate();
  },
    render : function(){
        console.log('re rendering');
        return (
          <div>
              <input type="text" ref="itemOne" />
              <input type="text" ref="itemTwo" />
              <select value={this.state.selectValue} 
                      onChange={this.handleChange} >
                <option value="add">add</option>
                <option value="sub">sub</option>
                </select>
              <input type="button" value="calculate" onClick={this.calculate} id="btnGreet"/>
              <div>{this.state.message}</div>
          </div>
        );
    }
});

ReactDOM.render(
    <Greeter message="Welcome to react!"></Greeter>,
    document.getElementById("content")
);