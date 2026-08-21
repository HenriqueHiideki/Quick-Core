import './vote-style.css'

export function VoteOption(props){
    return(
        <label className='vote-option'>
            <span>{props.children}</span>
            <input type="radio" name="poll" value={props.value} />
        </label>
    );
}