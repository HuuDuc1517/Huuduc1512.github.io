import './style.css';

function Clock() {
    const data = new Date()
    return(
        <div>
            <div class='title'>Hello, I am Clock</div>
            <div class='date'>Now is {data.toLocaleTimeString()}</div>
        </div>
    )
}

export default Clock