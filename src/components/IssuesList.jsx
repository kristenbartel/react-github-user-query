import React from  'react';

class IssueList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
           issues: []
      }
    }
   componentDidMount(){
        fetch("https://api.github.com/repos/facebook/create-react-app/issues")
        .then((res) => res.json())
        .then((data) => {
        console.log(data)
        this.setState({issues: data})
            console.log(this.state.issues)
    } 
    )}
    render() {
        return (
            <div>
            <label>User Input<input></input> </label>
            <button onClick={this.componentDidMount}>Submit</button>
                
                <ul>
                {this.state.issues.map((issue) => (
                   <li><a key={issue.id} href={issue.title}>{issue.title}</a></li> 
                ))}
            </ul>
            </div>
        )
    }
  }

  export default IssueList