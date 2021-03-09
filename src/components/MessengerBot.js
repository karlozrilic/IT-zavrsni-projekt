function MessegerBot() {
    return (
        <>
            <div className="messenger">
                <div className="messenger-chat">
                    <form className="messenger-form" method="POST">
                        <input placeholder="Message" />
                        <button><i class="fal fa-paper-plane"></i></button>
                    </form>
                </div>
                <div className="messenger-icon">
                    <i class="fab fa-facebook-messenger fa-3x"></i>
                </div>
                
            </div>
        </>
    )
}

export default MessegerBot;