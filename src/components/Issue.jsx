import IssuesList from './IssuesList';

export default function Issue (props) {
    return (
        <p>
            {this.props.title}
            {this.props.url}
            {this.props.body}
        </p>
    )
}

