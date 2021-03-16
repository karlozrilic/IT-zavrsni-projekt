import { useRef, useEffect, useState } from "react";
import { Icon, SvgIcon, Tooltip, MenuList, MenuItem, Popper, Paper, Grow, ClickAwayListener } from '@material-ui/core';
import { SendRounded, MoreHoriz, CloseRounded } from '@material-ui/icons';

function MessegerBot() {
    const messangerScroll = useRef(null);
    const [openChat, setOpenChat] = useState(false);
    const textarea = useRef(null);
    const [openMenu, setOpenMenu] = useState(false);
    const anchorRef = useRef(null);
    const prevOpenMenu = useRef(openMenu);

    useEffect(() => {
        if (openChat) {
            messangerScroll.current.scrollIntoView();
        }
    }, [])

    useEffect(() => {
        if (prevOpenMenu.current === true && openMenu === false) {
            anchorRef.current.focus();
        }
        prevOpenMenu.current = openMenu;
    }, [openMenu])

    useEffect(() => {
        if (openChat) {
            messangerScroll.current.scrollIntoView();
        }
    }, [openChat])

    const openChatToggle = () => {
        setOpenChat(!openChat);
    }

    const handleCloseChat = () => {
        setOpenChat(false);
    }

    const setNewSize = () => {
        textarea.current.style.height = "0px";
        textarea.current.style.height = textarea.current.scrollHeight + "px";
        messangerScroll.current.scrollIntoView();
    }

    const handleToggle = () => {
        setOpenMenu((prevOpenMenu) => !prevOpenMenu)
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpenMenu(false);
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpenMenu(false);
        }
    }

    return (
        <ClickAwayListener onClickAway={handleCloseChat}>
            <div className={openChat ? "messenger open" : "messenger close"}>
                <div className={openChat ? "messenger-chat open" : "messenger-chat close"}>
                    <div className="messenger-header">
                        <h5>Messenger Bot</h5>
                        <div className="messenger-header-buttons">
                            <Tooltip title="More options" placement="top">
                                <button onClick={handleToggle} ref={anchorRef} aria-controls={openMenu ? 'menu-list-grow' : undefined} aria-haspopup="true">
                                    <SvgIcon component={MoreHoriz} />
                                </button>
                            </Tooltip>
                                <Popper open={openMenu} anchorEl={anchorRef.current} role={undefined} transition disablePortal className="messenger-header-dropdown">
                                    {({TransitionProps, placement}) => (
                                        <Grow
                                        {...TransitionProps}
                                        style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                                        >
                                            <Paper elevation={5}>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList autoFocusItem={openMenu} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            <Tooltip title="Close chat" placement="top">
                                <button onClick={handleCloseChat}><SvgIcon component={CloseRounded} /></button>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="chat">
                        <div className="user">dadads</div>

                        <div className="bot">daddaa</div>

                        <div className="user">dadads</div>

                        <div className="bot">daddaa</div>

                        <div className="user">dadads</div>

                        <div className="bot first">daddaa</div>
                        <div className="bot between">daddaa</div>
                        <div className="bot last">daddaa</div>

                        <div className="user firts">dadads</div>
                        <div className="user between">dadads</div>

                        <div className="user between">dadads</div>
                        <div className="user between">dadads</div>
                        <div className="user between">dadads</div>
                        <div className="user between">dadads</div>
                        <div className="user between">dadads</div>
                        <div className="user between">dadads</div>
                        <div className="user between">dadads</div>
                        <div className="user between">dadads</div>
                        <div className="user between">dadads</div>
                        <div className="user last">dadads</div>
                        <div ref={messangerScroll}></div>
                    </div>
                    <form className="messenger-form" method="POST">
                        {/*<input placeholder="Ask a question..." />*/}
                        <textarea ref={textarea} rows="1" placeholder="Ask a question..." onKeyUp={setNewSize}></textarea>
                        <Tooltip title="Send" placement="top">
                            <button><SvgIcon component={SendRounded} /></button>
                        </Tooltip>
                    </form>
                    <div id="tail"></div>
                </div>
                

                
                <div className="messenger-icon" onClick={openChatToggle}>
                    <i className="fab fa-facebook-messenger fa-3x"></i>
                </div>
            </div>
            </ClickAwayListener>
    )
}

export default MessegerBot;