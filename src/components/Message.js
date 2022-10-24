function Message( {msg} ){
    return (
        <>
        <p className="message">
            { msg.message }
        </p>
        </>
    );
}

export default Message;